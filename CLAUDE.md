# hono-takibi-examples

[hono-takibi](https://github.com/nakita628/hono-takibi) の生成例を集めたリポジトリ。`apps/<name>` が 1 つの OpenAPI 定義に対応し、README の表がその一覧。
各仕様の `hono-takibi.config.ts` 1 つで、routes・docs・type・client・rpc・7 ライブラリの hooks・template をすべて生成する。

## 日次ルーティン

有名な OpenAPI 3.x 定義を毎日追加し、hono-takibi の問題を起票する。手順は [docs/daily-routine.md](docs/daily-routine.md)、
候補は [docs/candidates.md](docs/candidates.md)、typecheck の結果は [docs/typecheck.md](docs/typecheck.md)。

## 権限（ユーザーの指示）

- このリポジトリの `main` へは、いつでも直接 push してよい（2026-11-22 にユーザーが許可。PR は不要）。force push と履歴の書き換えは含まない。
- 作業は基本的に `main` ブランチで行う（2026-11-23 にユーザーが指示）。別ブランチや detached HEAD で作業しない。
- `nakita628/hono-takibi` には issue の起票とコメントをしてよい（2026-11-22 にユーザーが許可）。push、PR、クローズ、ラベル変更はしない。
- CI（GitHub Actions）は使わない（2026-11-22 にユーザーの提案で削除）。push の前に [docs/daily-routine.md](docs/daily-routine.md) の「push 前の検査」を通す。
