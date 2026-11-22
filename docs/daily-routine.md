# 日次ルーティン

GitHub 上にある有名な OpenAPI 3.x の定義を 1 日最大 3 件、hono-takibi で app として追加し、生成物に問題があれば
[nakita628/hono-takibi](https://github.com/nakita628/hono-takibi) の問題として報告する。

読むのは、毎日起動される Claude のセッションと人間の両方。迷ったら安全側（コミットしない、起票しない、下書きに残す）に倒す。

## 流れ

0. 最新の main に揃え、直近の CI を確認する
1. hono-takibi を最新に揃える
2. 候補を選ぶ: [candidates.md](./candidates.md) の Pending から最大 3 件
3. app を追加する: `scripts/new-app.sh` → 生成 → typecheck
4. 結果を分類する
5. 問題を報告する: 重複確認 → 最小再現 → 下書き（許可があれば起票）
6. 記録して、main へ直接 push する

## 前提

- 作業ディレクトリはリポジトリのルート。使うのは bun, node, git, curl, python3。
- このリポジトリの main へは、持ち主の許可で直接 push する（PR なし。[CLAUDE.md](../CLAUDE.md) 参照）。
  PR のゲートがないので、push 前の検査（6）と、翌日の CI 確認（0）が安全装置になる。
- サンドボックスから届くのは npm と `raw.githubusercontent.com`。`git ls-remote https://github.com/<owner>/<repo>.git` も使える。
  `api.github.com`、`github.com` の Web ページ、`api.apis.guru`、`openapi.vercel.sh` は届かなかった
  （環境のネットワークポリシー次第なので、届かないホストは回避せず、その候補を飛ばす）。
- hono-takibi は OpenAPI 3.x だけを読む。Swagger 2.0 は仕様上の非対応で、バグではない。

## 0. 最新の main に揃え、直近の CI を確認する

```bash
git fetch origin main
git status --short; git log --oneline origin/main..HEAD   # 前回の未コミット・未 push の残りがあれば、内容を確かめてから片付ける
git checkout --detach origin/main                         # ローカルに main が無くても動く。push は HEAD:main で行う
```

直近の `typecheck` を見る（進行中なら、その前の完了した実行を見る）:

- `mcp__github__actions_list`: `method: list_workflow_runs`, `resource_id: typecheck.yml`, `workflow_runs_filter: {"branch": "main"}`, `perPage: 3`
- 失敗していたら、失敗した shard の job を `mcp__github__actions_list`（`method: list_workflow_jobs`, `resource_id: <run id>`）で探し、
  `mcp__github__get_job_logs`（`job_id`, `return_content: true`, `tail_lines: 60`）で、`typecheck failed: apps/<name>/` の行から失敗した app を調べる。
  `tail_lines` が小さいと、その行が後始末のログに押し出されて見えない（14 では見えず、60 で見えた）。
- ランナーの shutdown（`The runner has received a shutdown signal`）のときは `typecheck failed:` の行が出ない。
  代わりに、ログの `APPS:` の行でその shard の app を確かめる。`apps/apis-guru-misc/` だけなら既知。今日足した app が入っていたら、その app が原因なので config だけにする。

**既知の失敗（2026-11-22 時点）。これは直さず、無視してよい。** 直ったら、この一覧から消す。

- `apps/apis-guru-misc`: shard 1 で、typecheck の開始から約 2 分後に `The runner has received a shutdown signal`。巨大な 1 app が CI のメモリに収まらないとみられる。2026-11-11、11-15 の実行でも同じ。
- `apps/vercel`: 7 エラー（TS2769）。`routes.ts` は古く、再生成には `https://openapi.vercel.sh/` に届く環境が要る（このサンドボックスからは届かない）。

**それ以外の app が失敗していたら、新しい app を足す前に直す。** 再生成して通るなら再生成、通らなければ config だけにして `src/` を消す。
直せなければ、新しい app を足さずに、その app を報告して止まる。

## 1. hono-takibi を最新に揃える

```bash
bun install --frozen-lockfile
npm view hono-takibi version                                   # 最新
grep -nE '"hono-takibi": \["hono-takibi@' bun.lock | cut -c1-70   # ロック中の版
```

- ロック中より新しい版が出ていたら、ルート `package.json` の `workspaces.catalog["hono-takibi"]` を `^<最新>` に書き換えて
  `bun install` する（catalog 経由なので `bun update hono-takibi` では上がらない）。以降の生成と再現確認はすべてその版で行う。
- 版を上げた日だけ、README が `not generated` になっている app（config だけが残っているもの）を 1 度ずつ再試行する。
  通ったら `src/` をコミットして README の行を更新する。直った問題には「vX で直っていた」と記録する
  （下書きなら `issue-drafts/` の該当ファイルに書く）。

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
| 5 | 50 MB 超 | hono-takibi のダウンロード上限（既知の問題として起票済み）。Rejected へ |

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

main には PR のゲートがない。typecheck を通らない生成物はコミットしない。

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
3. **重複を確認する。** まず `issue-drafts/` に同じ原因の下書きがないか見る。あれば新規に作らず、その下書きの `Real-world case` に実例（spec、固定 URL、症状）を足す。
   起票できる状態なら、`nakita628/hono-takibi` の issue も open と closed の両方で、エラーメッセージや構文名で検索する。
   同じ原因が既にあれば新規起票せず、その issue にコメントする。1 issue 1 問題で、原因が違えば分ける。
4. **起票モード**（トリガー用プロンプトで指定する）で分ける。
   - `下書き`（現在）: hono-takibi への書き込みは許可されていない。`issue-drafts/YYYY-MM-DD-<slug>.md` に下書きを残す（`status: draft`）。
     `add_repo` も、`gh` や `curl` での別経路も試さない。
   - `起票`（持ち主が許可したとき）: `mcp__github__*` で `nakita628/hono-takibi` に起票かコメントをする
     （セッションに無ければ `add_repo` の `access: push` で追加する）。下書きがあれば `issue:` に番号を書き、`status: filed` にする。
     拒否されたら回避せず、`下書き` と同じ扱いにして、そのことを報告する。
5. 上限は 1 日に新規 issue 3 件、コメント 5 件（`起票` モードのとき）。超えた分は下書きに残す。

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

## 6. 記録して、main へ直接 push する

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

**push 前の検査。** PR の CI ゲートがないので、ここが最後の砦になる。次をすべて満たしてから push する。

1. `bun install --frozen-lockfile` が通る（`bun.lock` が `package.json` と食い違っていない）。
2. 今日追加・変更した app の `tsc --noEmit` が通る。config だけにした app は、`src/` を消した状態で通る。
3. `git status` で、変更が次に限られている: `apps/<今日の app>`、`README.md`、`docs/candidates.md`、`issue-drafts/`、
   `bun.lock`（新しい app を足すと必ず変わる）、版を上げた日の `package.json`。

push:

```bash
git fetch origin main && git rebase origin/main      # main が進んでいたら。競合したら止めて報告する
git push origin HEAD:main                            # fast-forward だけ。force push はしない
```

- `bun.lock` が競合したら、`origin/main` 側を採用して `bun install` をやり直す（今日の workspace が再び載る）。
- push が拒否されたら、fetch → rebase → push を最大 3 回。それでも通らなければ止めて報告する。
- main への push で CI が走る。完了を待たない。結果は翌日の 0 で見る。

## クライアント側の出力（RPC・hooks・client）

見本は `apps/train-travel-client`。hono-takibi のクライアント側の出力をすべて出している:
RPC（`parseResponse` あり・なしの 2 版）、7 ライブラリの hooks、`type`、`client`。

- `rpc` と hooks は `client` を、`client` は `template` を必要とする（`client needs template`）。
- 1 つの config に `rpc` は 1 つなので、`parseResponse` の 2 版は config を 2 つに分け、`generate` を `&&` でつなぐ。
- template のハンドラの雛形（`(c) => {}`）は typecheck が通らない。本体に `throw new Error('Not implemented')` を入れる。
  hono-takibi は再生成してもハンドラ本体を保つ（2 回の再生成で確認済み）。
- `type` の出力から型推論する client は、まだ生成できない（`client.import: './types'` は TS2614）。[issue-drafts/](../issue-drafts/) 参照。
- hooks の typecheck に要るライブラリは、ルートの catalog にある（SWR と、React / Preact / Solid / Vue / Svelte / Angular の TanStack Query）。
- 生成物は routes.ts の約 6.5 倍になる（Memos で計測）。日次で足す app には入れない。入れる範囲は持ち主が決める。

## 守ること

- 追加する app は 1 日に最大 3 件。
- 他の app の生成物を手で編集しない。
- force push や履歴の書き換えをしない。
- hono-takibi のリポジトリで行うのは issue の起票とコメントだけ（`起票` モードのときだけ）。クローズ、ラベル変更、PR 作成はしない。
- ユーザーの個人情報（メールアドレスなど）を issue、コメント、コミットに書かない。
- 想定外のこと（権限の拒否、ネットワークの遮断、CI の設定変更が要るなど）が起きたら、安全側で止めて、最終報告に書く。

## トリガー用プロンプト

毎日のセッションを起動するときのプロンプト。起票モードの切り替えは、この文を書き換える。

```
【毎日 09:13 JST】nakita628/hono-takibi-examples の日次ルーティンを実行する。この文だけで完結しているので、会話が要約された後でもこのとおりに動く。

■ 目的
GitHub 上の有名な OpenAPI 3.x 定義を 1 日最大 3 件、hono-takibi で app として追加し、生成物に問題があれば hono-takibi の問題として報告する（今は下書き）。

■ 手順
1. docs/daily-routine.md と CLAUDE.md を読み、その手順どおりに進める（0 最新の main と CI の確認 → 1 hono-takibi の版 → 2 候補選び → 3 app の追加 → 4 結果の分類 → 5 問題の報告 → 6 記録と push）。候補は docs/candidates.md の Pending の先頭から最大 3 件。
2. 起票モードは「下書き」。hono-takibi への書き込みはまだ許可されていないので、add_repo も gh・curl も使わず、問題は issue-drafts/ に下書きとして残す。既存の下書きと同じ原因なら、新規ではなく既存の下書きに実例を足す。
3. main へ直接 push する。nakita628/hono-takibi-examples の main へはいつでも push してよいと、ユーザーから許可されている（PR は不要）。force push はしない。push の前に docs/daily-routine.md の「push 前の検査」を通す。

■ 止めるとき
- 権限の拒否・ネットワークの遮断・CI の設定変更が要るなど想定外のことが起きた → 安全側で止めて、何が起きたかを報告する。
- docs/daily-routine.md の「既知の失敗」以外の app が CI で落ちていて直せない → 新しい app を足さずに、その app を報告して止まる。

■ その他
- GitHub に書くもの（下書き・コミットの本文）は英語。個人情報を書かない。
- 報告は 1〜2 行（追加した app、できなかった app と理由、下書きの有無）。
```
