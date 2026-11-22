# 日次ルーティン

GitHub 上にある有名な OpenAPI 3.x の定義を 1 日最大 3 件、hono-takibi で app として追加し、生成物に問題があれば
[nakita628/hono-takibi](https://github.com/nakita628/hono-takibi) へ報告する。

読むのは、毎日起動される Claude のセッションと人間の両方。迷ったら安全側（コミットしない、起票しない、下書きに残す）に倒す。

## 流れ

1. 準備: hono-takibi を最新に揃える
2. 候補を選ぶ: [candidates.md](./candidates.md) の Pending から最大 3 件
3. app を追加する: `scripts/new-app.sh` → 生成 → typecheck
4. 結果を分類する
5. 問題を報告する: 重複確認 → 最小再現 → 起票 / コメント / 下書き
6. 記録してコミットする

## 前提

- 作業ディレクトリはリポジトリのルート。使うのは bun, node, git, curl, python3。
- サンドボックスから届くのは npm と `raw.githubusercontent.com`。`git ls-remote https://github.com/<owner>/<repo>.git` も使える。
  `api.github.com` と `github.com` の Web ページ、`api.apis.guru` など GitHub 以外のホストは届かない。
- hono-takibi は OpenAPI 3.x だけを読む。Swagger 2.0 は仕様上の非対応で、バグではない。

## 1. 準備

```bash
bun install --frozen-lockfile
npm view hono-takibi version                                   # 最新
grep -nE '"hono-takibi": \["hono-takibi@' bun.lock | cut -c1-70   # ロック中の版
```

- ロック中より新しい版が出ていたら、ルート `package.json` の `workspaces.catalog["hono-takibi"]` を `^<最新>` に書き換えて
  `bun install` する（catalog 経由なので `bun update hono-takibi` では上がらない）。以降の生成と再現確認はすべてその版で行う。
- 版を上げた日だけ、README が `not generated` になっている app（config だけが残っているもの）を 1 度ずつ再試行する。
  通ったら `src/` をコミットして README の行を更新する。直った issue には「vX で直っていた」とコメントしてよい（クローズは hono-takibi 側に任せる）。

## 2. 候補を選ぶ

[candidates.md](./candidates.md) の Pending を上から最大 3 件。README に同じ仕様（URL かリポジトリ）が既にあるものは追加しない。
Pending が 6 件を切ったら candidates.md の末尾の手順で補充する。

各候補を確認する:

```bash
node scripts/probe-spec.mjs <raw URL>
```

| exit | 意味 | 扱い |
| --- | --- | --- |
| 0 | 使える | 追加する。`WARN` は 4 で効く |
| 3 | パースできない | PyYAML でも失敗する（上流が不正）なら Rejected へ。PyYAML では読めるなら hono-takibi 側の可能性があるので、config だけ追加して 5 へ |
| 4 | Swagger 2.0 など OpenAPI 3.x ではない | 仕様上の非対応。起票しない。Rejected へ |
| 5 | 50 MB 超 | hono-takibi のダウンロード上限（[#415](https://github.com/nakita628/hono-takibi/issues/415)）。Rejected へ |

PyYAML での確認: `python3 -I -c "import yaml; yaml.safe_load(open('<file>'))"`（ファイルは `curl` で別ディレクトリに落とす）。

## 3. app を追加する

```bash
scripts/new-app.sh <name> "<API title>" <raw URL> <baseUrl>
bun install                                              # bun.lock に新しい workspace を載せる
cd apps/<name>
timeout 600 node_modules/.bin/hono-takibi                # 生成
timeout 600 node_modules/.bin/tsc --noEmit               # typecheck（CI と同じ。制限時間も CI の APP_TIMEOUT と同じ 10 分）
cd ../.. && node scripts/probe-spec.mjs <raw URL> --app apps/<name>   # operations と createRoute の数を突き合わせる
```

- `<name>` は kebab-case。`<baseUrl>` は仕様の `servers` が使えればそれ、なければ開発時の既定ポートの `http://localhost:<port>`。
- `new-app.sh` は `git ls-remote` で取得時点のコミットを固定し、config のコメントに書く。生成はその直後に行う（`main` が動くため）。
- 1 ベンダーに複数の仕様があるときは、`ably` / `line` / `knock` のように `configs/*.config.ts` と `src/<name>/` に分ける。
- 仕様の examples に GitHub の push protection が弾きそうなトークン風の文字列があるときはコミットしない（README の `grafana-com` の行を参照）。
- 生成物が 50 MB を超えるときもコミットしない（GitHub は 50 MB で警告、100 MB で拒否する）。

## 4. 結果を分類する

HEAD は常に緑に保つ。typecheck を通らない生成物はコミットしない。

| 結果 | コミットするもの | README の出力欄 |
| --- | --- | --- |
| 生成 OK、typecheck OK、operations と `createRoute` が一致 | app 一式（`src/` を含む） | `[routes.ts](...) · [api.md](...)` |
| 生成 OK、typecheck NG | config だけ。`src/` は消し、config に理由をコメントする | `not generated: the output fails typecheck (N errors): <原因> (<issue>)` |
| 生成 NG | config だけ。config に理由をコメントする | `not generated: <原因> (<issue>)` |
| 生成 OK、typecheck OK、だが operations と `createRoute` が不一致 | app 一式 | 通常の欄に加えて `(N of M operations generated: <原因>)` |
| typecheck が 10 分で終わらない / 強制終了 | config だけ | `not generated: typecheck does not finish within 10 minutes` |

`<issue>` は、起票済みなら `[nakita628/hono-takibi#N](https://github.com/nakita628/hono-takibi/issues/N)`、
下書きなら `[issue draft](./issue-drafts/<file>.md)`。

probe の `WARN` は既知の不具合の入口を指す。typecheck が通っても、エラーにならない誤出力があり得る（[issue-drafts/](../issue-drafts/) の 1 件目）。
`WARN` が出た app は、生成物の該当箇所を目で確かめる。

## 5. 問題を報告する

報告するのは **hono-takibi の挙動** に限る。次は報告しない。理由だけ README に書く。

- Swagger 2.0（仕様上の非対応）
- PyYAML でも読めない不正な YAML、外部 `$ref` の 404、仕様自体の矛盾
- ネットワーク制限による取得失敗

手順:

1. **最新版で再現する。** 古い版でしか再現しないものは報告しない。
2. **最小化する。** 40 行以内の OpenAPI で同じ症状を出す。書くのは `hono-takibi` を実際に実行して確かめた入力と出力だけで、推測は書かない。
   1 件の最小化に深入りしない（目安は 10 回程度の試行）。最小化できなければ、実 spec のコミット固定 URL と再現手順を書き、「最小化できていない」と明記する。
3. **重複を確認する。** `nakita628/hono-takibi` の issue を open と closed の両方で、エラーメッセージや構文名で検索する。
   - 同じ原因が既にある: 新規起票せず、その issue にコメントする。実例の spec、固定 URL、症状、hono-takibi の版を 1 段落で書く。
   - 無い: 新規起票する。1 issue 1 問題で、原因が違えば分ける。
4. **書き込み先に届くかで分ける。**
   - 届く（`mcp__github__*` で `nakita628/hono-takibi` を扱える）: 起票かコメントをする。下書きファイルがあれば `issue:` に番号を書き、`status: filed` にする。
   - 届かない: `issue-drafts/YYYY-MM-DD-<slug>.md` に下書きを残す（`status: draft`）。**権限を回避しようとしない。**
     `add_repo` が拒否されたら、そこで止めて下書きにする。`gh` や `curl` など別の経路から書き込まない。PR と最終報告にそのことを書く。
5. 上限は 1 日に新規 issue 3 件、コメント 5 件。超えた分は下書きに残す。

issue の書式（英語）。実例は [issue-drafts/](../issue-drafts/) の 3 件:

```markdown
# <構文名を入れた、症状が分かるタイトル>

## Summary
## Reproduction     <- 最小の入力と `npx hono-takibi@<ver> ...`
## Expected
## Actual           <- 出力やエラーをそのまま
## Real-world case  <- 実 spec（コミット固定 URL）と、examples の app
## Environment      <- hono-takibi の版、Node の版

---
_Generated by [Claude Code](https://claude.ai/code)_
```

issue とコメントの末尾には、必ず最後の 2 行（`---` と `_Generated by ..._`）を付ける。

## 6. 記録してコミットする

- README の表の末尾に行を足す（書式は既存の行に合わせる）。
- [candidates.md](./candidates.md): 今日扱った候補を Pending から消す。外す理由があれば Rejected に書く。
- コミットメッセージは過去のコミットに合わせる:

  ```
  Add A, B, and C examples from official OpenAPI specs

  Generated with hono-takibi <ver>.  (版を上げたときは "Bump the catalog dependency from <旧版>." を足す)

  <Name> <version> (OpenAPI x.y.z) from <path> at
  https://github.com/<owner>/<repo>/blob/<sha>/<path>
  (<raw URL>).
  (仕様ごとに繰り返す)

  <どれが生成できなかったか、なぜか。New issues: nakita628/hono-takibi#N ... / Commented on #N ... / Drafts: issue-drafts/...>
  <候補から外したものと理由>
  ```

- ブランチはセッションが与えるものを使って push する。main に直接 push しない。force push しない。
- PR は、トリガー用プロンプトで指示されているときだけ作る。タイトルはコミットの 1 行目。本文には app ごとの結果（app / 結果 / issue）と、下書きが残ったときはそのパスを書く。マージはしない。

## 守ること

- 追加する app は 1 日に最大 3 件。
- 他の app の生成物を手で編集しない。
- hono-takibi のリポジトリで行うのは issue の起票とコメントだけ。クローズ、ラベル変更、PR 作成はしない。
- ユーザーの個人情報（メールアドレスなど）を issue、コメント、コミットに書かない。
- 想定外のこと（権限の拒否、ネットワークの遮断、CI の設定変更が要るなど）が起きたら、安全側で止めて、PR か最終報告に書く。

## トリガー用プロンプト

毎日のセッションを起動するときのプロンプトの例。

```
nakita628/hono-takibi-examples の docs/daily-routine.md を読み、その手順どおりに今日の日次ルーティンを実行してください。
- 追加するのは最大 3 件。docs/candidates.md の Pending の先頭から。
- hono-takibi の問題は、書き込み権限があれば issue 起票か既存 issue へのコメント、無ければ issue-drafts/ に下書きとして残す。権限が拒否されたら回避せず下書きにする。
- セッションのブランチで作業して push し、PR を作成する。main へ直接 push しない。マージしない。
```

PR を作らず push だけにするなら、最後の行を「セッションのブランチで作業して push する。PR は作らない。」に変える。
