import { createRoute, z } from '@hono/zod-openapi'

const ApplicationChargeSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: '課金ID', example: 'T21SUDG' }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    point: z.int().exactOptional().openapi({ description: 'ポイント請求額(税抜)', example: 500 }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('ApplicationCharge')

const CartScriptTagSchema = z
  .strictObject({
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'アカウントID', example: 'PA12345678' }),
    id: z.int().exactOptional().openapi({ description: 'スクリプトタグID', example: 1342332 }),
    integrity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
        example: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
      }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    oauth_application_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
    src: z
      .string()
      .exactOptional()
      .openapi({ description: 'スクリプトURL', example: 'https://example.com/example.js' }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('CartScriptTag')

const InlineScriptTagSchema = z
  .strictObject({
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'アカウントID', example: 'PA04511366' }),
    display_scope: z
      .enum(['all', 'thanks_page', 'cart'])
      .exactOptional()
      .openapi({
        description:
          'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
        example: 'shop',
      }),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'インラインスクリプトタグID', example: 1342332 }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    oauth_application_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'アプリID', example: 8102 }),
    script: z
      .string()
      .exactOptional()
      .openapi({ description: 'インラインスクリプト', example: 'console.log("aaaaa")' }),
    trigger_event: z
      .literal('object_builded')
      .exactOptional()
      .openapi({
        description:
          'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
        example: 'object_builded',
      }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('InlineScriptTag')

const ScriptTagSchema = z
  .strictObject({
    display_scope: z
      .enum(['all', 'shop', 'thanks_page', 'cart'])
      .exactOptional()
      .openapi({
        description:
          'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
        example: 'shop',
      }),
    id: z.int().exactOptional().openapi({ description: 'スクリプトタグID', example: 1342332 }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    src: z
      .string()
      .exactOptional()
      .openapi({ description: 'スクリプトURL', example: 'https://example.com/example.js' }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('ScriptTag')

const ShopScriptTagSchema = z
  .strictObject({
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'アカウントID', example: 'PA12345678' }),
    display_scope: z
      .enum(['shop', 'thanks_page'])
      .exactOptional()
      .openapi({
        description:
          'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
        example: 'shop',
      }),
    id: z.int().exactOptional().openapi({ description: 'スクリプトタグID', example: 1342332 }),
    integrity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
        example: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
      }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    oauth_application_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
    src: z
      .string()
      .exactOptional()
      .openapi({ description: 'スクリプトURL', example: 'https://example.com/example.js' }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('ShopScriptTag')

const UsageChargeSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '従量課金発生理由', example: '2019/4 メール送信分' }),
    id: z.string().exactOptional().openapi({ description: '従量課金ID', example: 'X20SHDG' }),
    make_date: z.int().exactOptional().openapi({ description: '作成日時', example: 1465784944 }),
    point: z.int().exactOptional().openapi({ description: 'ポイント請求額(税抜)', example: 100 }),
    update_date: z.int().exactOptional().openapi({ description: '更新日時', example: 1494496809 }),
  })
  .openapi({ required: [] })
  .openapi('UsageCharge')

const InlineScriptTagIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'インラインスクリプトタグID',
      in: 'path',
      name: 'inlineScriptTagId',
      required: true,
      schema: { type: 'integer' },
    },
  })

const RecurringApplicationChargeIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: '課金契約ID',
      in: 'path',
      name: 'recurringApplicationChargeId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ScriptTagIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'スクリプトタグID',
      in: 'path',
      name: 'scriptTagId',
      required: true,
      schema: { type: 'integer' },
    },
  })

const CreateScriptTagScriptTagRequestBody = {
  description: '作成するスクリプトタグの情報',
  content: {
    'application/json': {
      schema: z
        .object({
          script_tag: z
            .object({
              display_scope: z
                .enum(['all', 'shop', 'thanks_page', 'cart'])
                .exactOptional()
                .openapi({
                  description:
                    'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                  example: 'shop',
                }),
              src: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'スクリプトURL',
                  example: 'https://example.com/example.js',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const CreateShopScriptTagScriptTagRequestBody = {
  description: '作成するスクリプトタグの情報',
  content: {
    'application/json': {
      schema: z
        .object({
          script_tag: z
            .object({
              display_scope: z
                .enum(['shop', 'thanks_page'])
                .exactOptional()
                .openapi({
                  description:
                    'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
                  example: 'shop',
                }),
              integrity: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。\n詳しくは [サブリソース完全性 - Web セキュリティ | MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。\n※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。\n',
                  example:
                    'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
                }),
              src: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'スクリプトURL',
                  example: 'https://example.com/example.js',
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ required: [] }),
    },
  },
}

const OAuth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.shop-pro.jp/oauth/authorize',
      scopes: {
        read_inline_script_tags: 'インラインスクリプトタグの取得',
        read_script_tags: 'スクリプトタグの取得(deprecated)',
        read_shop_script_tags: 'ショップページへのスクリプトタグの取得',
        write_application_charge: '課金データを作成',
        write_inline_script_tags: 'インラインスクリプトタグの登録',
        write_script_tags: 'スクリプトタグの登録(deprecated)',
        write_shop_script_tags: 'ショップページへのスクリプトタグの登録',
      },
      tokenUrl: 'https://api.shop-pro.jp/oauth/token',
    },
  },
  type: 'oauth2',
}

export const postAppstoreV1ApplicationChargesJsonRoute = createRoute({
  method: 'post',
  path: '/appstore/v1/application_charges.json',
  tags: ['application_charge'],
  summary: 'アプリ内課金データの作成',
  description:
    '「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。\n\nこの課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。\n\nただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。\n',
  operationId: 'postApplicationCharge',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              application_charge: z
                .object({
                  application_charge_source_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アプリ内課金ID', example: '5S1DAG' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              application_charge: z
                .strictObject({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '課金ID', example: 'T21SUDG' }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  point: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'ポイント請求額(税抜)', example: 500 }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_application_charge'] }],
})

export const deleteAppstoreV1InstallationJsonRoute = createRoute({
  method: 'delete',
  path: '/appstore/v1/installation.json',
  tags: ['uninstallation'],
  summary: 'アプリストアアプリのアンインストール',
  description:
    'このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。\nこのAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。\n代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。\n\nアンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。\n',
  operationId: 'deleteInstallation',
  responses: {
    200: {
      description: 'アンインストール成功',
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'アンインストールしたショップオーナーのアカウントID',
                  example: 'PA00000000',
                }),
              application_charge_source_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'プラン課金ID', example: '5S1DAG' }),
              recurring_application_charge_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: '（買い切り以外の課金の場合）課金契約ID',
                  example: 'F3WQ1S',
                }),
              uninstalled_at: z
                .int()
                .exactOptional()
                .openapi({ description: 'アンインストール日時', example: 1569920014 }),
              usage_charge: z
                .object({
                  api_token: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'アンインストール後に従量課金APIを利用いただくために必要な情報',
                      example: 'token',
                    }),
                  closing_on: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'ポイント締め日', example: 1572598664 }),
                })
                .exactOptional()
                .openapi({
                  description: '（従量課金の場合）従量課金アンインストール情報',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute =
  createRoute({
    method: 'post',
    path: '/appstore/v1/recurring_application_charges/{recurringApplicationChargeId}/usage_charges.json',
    tags: ['application_charge'],
    summary: '従量課金データの作成',
    description:
      'アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。\n※無料お試し期間中のショップに対しては従量課金データを作成できません。\n',
    operationId: 'createUsageCharge',
    request: {
      params: z.object({
        recurringApplicationChargeId: z
          .string()
          .openapi({
            param: {
              description: '課金契約ID',
              in: 'path',
              name: 'recurringApplicationChargeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      headers: z.object({
        'X-Appstore-Usage-Charge-Token': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'アンインストール後の従量課金の精算をする際に、 `Authorization` ヘッダへアクセストークンを指定する代わりにこのヘッダを指定することで、このAPIを実行することができます。\nインストール中は指定不要で、アンインストール後のみ必須となります。\nアンインストールフックで通知される `usage_charge.api_token` の値を指定してください。\nこのヘッダは、アンインストールフックで通知される `usage_charge.closing_on` まで有効です。この期間を過ぎると従量課金を精算できなくなりますのでご注意ください。詳しくは [アプリのアンインストール](#section/API/アプリのアンインストール) をご確認ください。',
              in: 'header',
              name: 'X-Appstore-Usage-Charge-Token',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      body: {
        description: '従量課金データ',
        content: {
          'application/json': {
            schema: z
              .object({
                usage_charge: z
                  .object({
                    description: z
                      .string()
                      .max(50)
                      .openapi({
                        description:
                          '従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）',
                        example: '2019/4 メール送信分',
                      }),
                    point: z
                      .int()
                      .openapi({
                        description:
                          'ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。',
                        example: 100,
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: ['point', 'description'] }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({
                usage_charge: z
                  .strictObject({
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '従量課金発生理由', example: '2019/4 メール送信分' }),
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '従量課金ID', example: 'X20SHDG' }),
                    make_date: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '作成日時', example: 1465784944 }),
                    point: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ポイント請求額(税抜)', example: 100 }),
                    update_date: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '更新日時', example: 1494496809 }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            examples: {
              response: {
                value:
                  '{\n  "usage_charge": {\n    "id": "X20SHDG",\n    "point": 10,\n    "description": "2019-04-15 メール送信",\n    "make_date": 146579000,\n    "update_date": 1494497000\n  }\n}',
              },
            },
          },
        },
      },
    },
    security: [{ OAuth2: ['write_application_charge'] }],
  })

export const getAppstoreV1ScriptTagsJsonRoute = createRoute({
  method: 'get',
  path: '/appstore/v1/script_tags.json',
  tags: ['script'],
  summary: 'スクリプトタグの取得',
  operationId: 'getShopScriptTags',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tags: z
                .array(
                  z
                    .strictObject({
                      account_id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'アカウントID', example: 'PA12345678' }),
                      display_scope: z
                        .enum(['shop', 'thanks_page'])
                        .exactOptional()
                        .openapi({
                          description:
                            'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
                          example: 'shop',
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                      integrity: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
                          example:
                            'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
                        }),
                      make_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '作成日時', example: 1465784944 }),
                      oauth_application_id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
                      src: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'スクリプトURL',
                          example: 'https://example.com/example.js',
                        }),
                      update_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '更新日時', example: 1494496809 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_shop_script_tags'] }],
})

export const postAppstoreV1ScriptTagsJsonRoute = createRoute({
  method: 'post',
  path: '/appstore/v1/script_tags.json',
  tags: ['script'],
  summary: 'スクリプトタグの作成',
  operationId: 'createShopScriptTag',
  request: { body: CreateShopScriptTagScriptTagRequestBody },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA12345678' }),
                  display_scope: z
                    .enum(['shop', 'thanks_page'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  integrity: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
                      example:
                        'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
                    }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_shop_script_tags'] }],
})

export const getAppstoreV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'get',
  path: '/appstore/v1/script_tags/{scriptTagId}.json',
  tags: ['script'],
  summary: 'スクリプトタグの取得',
  operationId: 'getShopScriptTag',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA12345678' }),
                  display_scope: z
                    .enum(['shop', 'thanks_page'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  integrity: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
                      example:
                        'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
                    }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_shop_script_tags'] }],
})

export const putAppstoreV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'put',
  path: '/appstore/v1/script_tags/{scriptTagId}.json',
  tags: ['script'],
  summary: 'スクリプトタグの更新',
  operationId: 'updateShopScriptTag',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: CreateShopScriptTagScriptTagRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA12345678' }),
                  display_scope: z
                    .enum(['shop', 'thanks_page'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  integrity: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトファイルのハッシュ値（script tagのintegrity属性）',
                      example:
                        'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
                    }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'OAuthアプリケーションID', example: 12 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_shop_script_tags'] }],
})

export const deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'delete',
  path: '/appstore/v1/script_tags/{scriptTagId}.json',
  tags: ['script'],
  summary: 'スクリプトタグの削除',
  operationId: 'deleteScriptTag',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  security: [{ OAuth2: ['write_shop_script_tags'] }],
})

export const getV1InlineScriptTagsJsonRoute = createRoute({
  method: 'get',
  path: '/v1/inline_script_tags.json',
  tags: ['inline_script'],
  summary: 'インラインスクリプトタグの取得',
  operationId: 'getInlineScriptTags',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tags: z
                .array(
                  z
                    .strictObject({
                      account_id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'アカウントID', example: 'PA04511366' }),
                      display_scope: z
                        .enum(['all', 'thanks_page', 'cart'])
                        .exactOptional()
                        .openapi({
                          description:
                            'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                          example: 'shop',
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'インラインスクリプトタグID', example: 1342332 }),
                      make_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '作成日時', example: 1465784944 }),
                      oauth_application_id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'アプリID', example: 8102 }),
                      script: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'インラインスクリプト',
                          example: 'console.log("aaaaa")',
                        }),
                      trigger_event: z
                        .literal('object_builded')
                        .exactOptional()
                        .openapi({
                          description:
                            'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                          example: 'object_builded',
                        }),
                      update_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '更新日時', example: 1494496809 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_inline_script_tags'] }],
})

export const postV1InlineScriptTagsJsonRoute = createRoute({
  method: 'post',
  path: '/v1/inline_script_tags.json',
  tags: ['inline_script'],
  summary: 'インラインスクリプトタグの登録',
  operationId: 'createInlineScriptTag',
  request: {
    body: {
      description: '作成するインラインスクリプトタグの情報',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tag: z
                .object({
                  display_scope: z
                    .enum(['all', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  script: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'インラインスクリプト',
                      example: 'console.log("aaaaa")',
                    }),
                  trigger_event: z
                    .literal('object_builded')
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                      example: 'object_builded',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA04511366' }),
                  display_scope: z
                    .enum(['all', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'インラインスクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'アプリID', example: 8102 }),
                  script: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'インラインスクリプト',
                      example: 'console.log("aaaaa")',
                    }),
                  trigger_event: z
                    .literal('object_builded')
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                      example: 'object_builded',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_inline_script_tags'] }],
})

export const getV1InlineScriptTagsInlineScriptTagIdJsonRoute = createRoute({
  method: 'get',
  path: '/v1/inline_script_tags/{inlineScriptTagId}.json',
  tags: ['inline_script'],
  summary: 'インラインスクリプトタグの取得',
  operationId: 'getInlineScriptTag',
  request: {
    params: z.object({
      inlineScriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'インラインスクリプトタグID',
            in: 'path',
            name: 'inlineScriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA04511366' }),
                  display_scope: z
                    .enum(['all', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'インラインスクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'アプリID', example: 8102 }),
                  script: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'インラインスクリプト',
                      example: 'console.log("aaaaa")',
                    }),
                  trigger_event: z
                    .literal('object_builded')
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                      example: 'object_builded',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_inline_script_tags'] }],
})

export const putV1InlineScriptTagsInlineScriptTagIdJsonRoute = createRoute({
  method: 'put',
  path: '/v1/inline_script_tags/{inlineScriptTagId}.json',
  tags: ['inline_script'],
  summary: 'インラインスクリプトタグの更新',
  operationId: 'updateInlineScriptTag',
  request: {
    params: z.object({
      inlineScriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'インラインスクリプトタグID',
            in: 'path',
            name: 'inlineScriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: '更新するスクリプトタグの情報',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tag: z
                .object({
                  display_scope: z
                    .enum(['all', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  script: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'インラインスクリプト',
                      example: 'console.log("aaaaa")',
                    }),
                  trigger_event: z
                    .literal('object_builded')
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                      example: 'object_builded',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              inline_script_tag: z
                .strictObject({
                  account_id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'アカウントID', example: 'PA04511366' }),
                  display_scope: z
                    .enum(['all', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを出力するページ。\n\n- `all`: カートの途中のページと注文完了ページの両方\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'インラインスクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  oauth_application_id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'アプリID', example: 8102 }),
                  script: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'インラインスクリプト',
                      example: 'console.log("aaaaa")',
                    }),
                  trigger_event: z
                    .literal('object_builded')
                    .exactOptional()
                    .openapi({
                      description:
                        'インラインスクリプトを実行するタイミング。\n\n- `object_builded`: JSオブジェクトの作成が完了した時\n',
                      example: 'object_builded',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_inline_script_tags'] }],
})

export const deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute = createRoute({
  method: 'delete',
  path: '/v1/inline_script_tags/{inlineScriptTagId}.json',
  tags: ['inline_script'],
  summary: 'インラインスクリプトタグの削除',
  operationId: 'deleteInlineScriptTag',
  request: {
    params: z.object({
      inlineScriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'インラインスクリプトタグID',
            in: 'path',
            name: 'inlineScriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  security: [{ OAuth2: ['write_inline_script_tags'] }],
})

export const getV1ScriptTagsJsonRoute = createRoute({
  method: 'get',
  path: '/v1/script_tags.json',
  tags: ['script(deprecated)'],
  summary: 'スクリプトタグの取得',
  operationId: 'getScriptTags',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tags: z
                .array(
                  z
                    .strictObject({
                      display_scope: z
                        .enum(['all', 'shop', 'thanks_page', 'cart'])
                        .exactOptional()
                        .openapi({
                          description:
                            'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                          example: 'shop',
                        }),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                      make_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '作成日時', example: 1465784944 }),
                      src: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'スクリプトURL',
                          example: 'https://example.com/example.js',
                        }),
                      update_date: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '更新日時', example: 1494496809 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_script_tags'] }],
})

export const postV1ScriptTagsJsonRoute = createRoute({
  method: 'post',
  path: '/v1/script_tags.json',
  tags: ['script(deprecated)'],
  summary: 'スクリプトタグの作成',
  operationId: 'createScriptTag',
  request: { body: CreateScriptTagScriptTagRequestBody },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  display_scope: z
                    .enum(['all', 'shop', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_script_tags'] }],
})

export const getV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'get',
  path: '/v1/script_tags/{scriptTagId}.json',
  tags: ['script(deprecated)'],
  summary: 'スクリプトタグの取得',
  operationId: 'getScriptTag',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  display_scope: z
                    .enum(['all', 'shop', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['read_script_tags'] }],
})

export const putV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'put',
  path: '/v1/script_tags/{scriptTagId}.json',
  tags: ['script(deprecated)'],
  summary: 'スクリプトタグの更新',
  operationId: 'updateScriptTag',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: CreateScriptTagScriptTagRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              script_tag: z
                .strictObject({
                  display_scope: z
                    .enum(['all', 'shop', 'thanks_page', 'cart'])
                    .exactOptional()
                    .openapi({
                      description:
                        'スクリプトを出力するページ。\n\n- `all`: ショップページと注文完了ページの両方\n- `shop`: ショップページ\n- `thanks_page`: 注文完了ページ\n- `cart`: カートの途中のページ\n',
                      example: 'shop',
                    }),
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'スクリプトタグID', example: 1342332 }),
                  make_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '作成日時', example: 1465784944 }),
                  src: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'スクリプトURL',
                      example: 'https://example.com/example.js',
                    }),
                  update_date: z
                    .int()
                    .exactOptional()
                    .openapi({ description: '更新日時', example: 1494496809 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['write_script_tags'] }],
})

export const deleteV1ScriptTagsScriptTagIdJsonRoute = createRoute({
  method: 'delete',
  path: '/v1/script_tags/{scriptTagId}.json',
  tags: ['script(deprecated)'],
  summary: 'スクリプトタグの削除',
  request: {
    params: z.object({
      scriptTagId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'スクリプトタグID',
            in: 'path',
            name: 'scriptTagId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
  security: [{ OAuth2: ['write_script_tags'] }],
})
