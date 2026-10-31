<h1 id="カラーミーショップアプリストア-api">カラーミーショップアプリストア API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# カラーミーショップアプリストア API

[アプリストア](https://app.shop-pro.jp/)にて公開するアプリに対して、一般公開している[カラーミーショップAPI](https://developer.shop-pro.jp/docs/colorme-api)に加えて、カラーミーショップアプリストアAPI（以下、アプリストアAPIといいます）を利用することが出来ます。アプリストアAPIでは以下のことが行えます。
- 課金データ(アプリ内課金、従量課金)の作成
- インラインスクリプトタグの取得・作成・更新・削除
- スクリプトタグの取得・作成・更新・削除

## 利用手順

アプリストアAPIを利用するには、OAuth認証が必要です。OAuth認証の基本的な流れについては[カラーミーショップAPIドキュメント](https://developer.shop-pro.jp/docs/colorme-api)を参照してください。
アプリストアAPIの利用のために、以下のscopeが追加で指定可能になります。[カラーミーショップAPIドキュメント](https://developer.shop-pro.jp/docs/colorme-api)に掲載されているscopeと合わせてご利用ください。

|スコープ|機能|
|---|---|
|`write_application_charge`|課金データの作成|
|`read_shop_script_tags`|ショップページのスクリプトタグを参照|
|`write_shop_script_tags`|ショップページへスクリプトタグを追加・更新|
|`read_inline_script_tags`|インラインスクリプトタグを参照|
|`write_inline_script_tags`|インラインスクリプトタグを追加・更新|
|`read_script_tags`|スクリプトタグを参照(deprecated)|
|`write_script_tags`|スクリプトタグを追加・更新(deprecated)|

(例) カラーミーショップアカウントの認証ページを表示
```
https://api.shop-pro.jp/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=read_products%20write_products%20write_application_charge
```

## 課金設定
料金プラン（月額課金・従量課金・買い切り）による課金や、アプリ内課金をご利用いただくにはアプリごとに課金設定の登録が必要です。
この設定は [カラーミーショップ デベロッパー](https://developer.shop-pro.jp) から行うことができます。

登録できる課金形式やその使い方の詳細については[アプリストア 開発ガイドのアプリ課金のページ](https://developer.shop-pro.jp/getting-started/appstore-billing/)をご覧ください

## アプリのインストール
ショップオーナーがアプリをインストールしたとき、以下の処理をカラーミーショップが行います。
- 選択された料金プランに基づき課金開始
- インストールフックの呼び出し

### インストールフック
アプリのインストール時に、インストールに関する情報を `POST` メソッド、 `application/json` 形式で通知します。
通知先のURLは[カラーミーショップ デベロッパー](https://developer.shop-pro.jp/)にログインし、各アプリストア アプリのアプリ設定から登録を行ってください。

以下のパラメータが送信されます。課金請求に必要なパラメータを含みますので、必ず受け取れるようにしてください。

|パラメータ|機能|形式|
|---|---|---|
|`account_id`|インストールしたショップオーナーのアカウントID|PA+8桁の整数|
|`application_charge_source_id`|プラン課金ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
|`recurring_application_charge_id`|（買い切り以外の課金の場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
|`application_charge_id`|（買い切りの場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
|`trial_term`|（無料お試し期間がある場合）無料お試し期間|JSONオブジェクト|
|`mail`|ショップオーナーへの連絡メールアドレス|文字列|

`application_charge_source_id` はデベロッパーサイトで設定したプラン課金のIDです。インストールされた料金プランの判別にご利用いただけます。

`recurring_application_charge_id` と `application_charge_id` はインストールごとに発行されるユニークなIDです。ショップオーナーが一度アンインストールした後に、再度同じショップオーナーがアプリのインストールを行った際には新たに別のIDが発行されます。

`recurring_application_charge_id` は「買い切り」以外の課金である「無料」「月額」「月額＋従量」「月額＋初期費用」「従量のみ」のプラン課金のインストールの際に発行されます。

従量による課金を伴うプラン課金の場合は、従量分の料金を請求する際に 課金契約ID(`recurring_application_charge_id`) が必要になるので、必ず記録するようにしてください。

`mail` パラメータの値はショップオーナーへの連絡手段としてご利用いただけます。インストール後に認可フローが中断され、アクセストークンが得られない際のショップオーナーへの連絡手段としてご活用いただけます。このパラメータはカラーミーショップの非公開情報として登録されている値です。左記以外の用途でこの値をアプリの機能で使用しないでください。

例) 買い切りの場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "F3RN9A",
  "application_charge_id": "A3FT4N",
  "mail": "shop@example.com"
}
```

例) 月額課金の場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "F3RN9A",
  "recurring_application_charge_id": "A3FT4N",
  "mail": "shop@example.com"
}
```

無料お試し期間を設定した課金の場合、以下の情報を `trial_term` パラメータとして送信します。
無料お試し期間中は従量課金APIを呼び出して課金請求することはできません。

|パラメータ|機能|形式|
|---|---|---|
|`starts_at`|無料お試し開始日時|整数値(UNIXタイムスタンプ)|
|`ends_at`|無料お試し終了日時|整数値(UNIXタイムスタンプ)|

例) 無料お試し期間がある月額課金の場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "F3RN9A",
  "recurring_application_charge_id": "A3FT4N",
  "mail": "shop@example.com",
  "trial_term" {
    "starts_at": 1565017200,
    "ends_at": 1567609200
  }
}
```

受け取りに成功した場合は、以下のパラメータを `application/json` 形式でレスポンスボディに付与し、
ステータスコード `200` レスポンスをカラーミーショップへ返却してください。
ステータスコード `200` レスポンスをカラーミーショップが受け取れない場合、もしくは以下のパラメーターが返却されなかった場合、インストールを中止し、インストールによって発生した情報は破棄されます。

|パラメータ|機能|形式|
|---|---|---|
|`redirect_url`|インストール成功後に遷移するURL|文字列（URL）|

例)
```
{
  "redirect_url": "https://example.com"
}
```
インストール完了後、インストールフックのレスポンスパラメータの `redirect_url` へ画面遷移しますので、APIを利用する場合は `redirect_url` より先の画面でOAuth認証の実装をお願いします。

## アプリのアンインストール
ショップオーナーがアプリをアンインストールしたとき、以下の処理をカラーミーショップが行います。
- OAuth認証のアクセストークンの無効化
- 登録したインラインスクリプトタグ・スクリプトタグの削除
- 月額課金形式の場合、継続課金の無効化

### アンインストールフック
アンインストール直後に `POST` メソッドで、以下の情報を `application/json` 形式で通知します。
通知先のURLは[カラーミーショップ デベロッパー](https://developer.shop-pro.jp/)にログインし、各アプリストア アプリのアプリ設定から登録を行ってください。

※ [アンインストールAPI](#operation/deleteInstallation)のご利用によるアンインストール時はアンインストールフックは通知されません。

受け取りに成功した場合はステータスコード `200` のレスポンスを返却してください。

|パラメータ|機能|形式|
|---|---|---|
|`account_id`|アンインストールしたショップオーナーのアカウントID|PA+8桁の整数|
|`application_charge_source_id`|プラン課金ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
|`uninstalled_at`|アンインストール日時|整数値(UNIXタイムスタンプ)|
|`reason`|アンインストール理由| `by_shop_owner` (ショップオーナーによる)<br /> `by_unpaid` (未払いによる) |
|`recurring_application_charge_id`|（買い切り以外の課金の場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
|`usage_charge`|（従量課金の場合）従量課金アンインストール情報|JSONオブジェクト|

アンインストールフックの通知が伴うアンインストールは以下の操作のいずれかによって行われます。アンインストールの理由を `reason` パラメータで確認できます。

|reasonパラメータの値|アンインストール理由|
|---|---|
|`by_shop_owner`|ショップオーナーによるアンインストール操作|
|`by_unpaid`|ポイント不足による利用料徴収の失敗による自動アンインストール|

課金契約ID `recurring_application_charge_id` はインストールフックで通知したIDと同じIDが通知されます。

料金プランが従量課金の場合、アンインストール後に従量課金データの作成を可能にするために、以下の情報を `usage_charge` パラメータとして送信します。
アンインストール後はOAuthのアクセストークンが無効化されているため、アクセストークンを利用して従量課金APIを呼び出すことができなくなります。
アンインストール後はアクセストークンの代わりに `api_token` をリクエストヘッダーに含め、従量課金APIを呼び出してください。
無料お試し期間中にアプリがアンインストールされた場合は、`api_token` は発行されません。
詳しくは、[従量課金データの作成](https://app.shop-pro.jp/open_api#operation/createUsageCharge)を参照してください。
`api_token` を利用した従量課金APIの呼び出しは、ポイント締め日 `closing_on` までとなっておりますので、ご注意ください。

|パラメータ|機能|形式|
|---|---|---|
|`api_token`|アンインストール後に従量課金APIを利用いただくために必要な情報|文字列|
|`closing_on`|ポイント締め日|整数値(UNIXタイムスタンプ)|

通常、 `closing_on` は、アンインストール直前まで利用されていた契約の期間の月末となります。以下に例を示します。

|アンインストール日|直前まで利用されていた契約の期間|closing_on の示す日時|
|---|---|---|
|2021/01/09|2021/12/10〜2021/01/09|2021/01/31|
|2021/01/10|2021/01/10〜2021/02/09|2021/02/28|

従量課金の場合のユーザーの契約期間については[こちら](https://shop-pro.jp/manual/appstore_fee)をご参照ください

アンインストールフックの例を以下に示します。

例) 買い切りの場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "Q21GPC",
  "uninstalled_at": 1552022739,
  "reason": "by_shop_owner"
}
```

例) 月額課金の場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "EW3V21",
  "recurring_application_charge_id": "F3RN9A",
  "uninstalled_at": 1552022740,
  "reason": "by_shop_owner"
}
```

例) 従量課金を含む月額課金の場合
```
{
  "account_id": "PA00000001",
  "application_charge_source_id": "WA37CA",
  "recurring_application_charge_id": "F3WQ1S",
  "uninstalled_at": 1552022740,
  "reason": "by_shop_owner",
  "usage_charge": {
    "api_token": "token",
    "closing_on": 1552533465
  }
}
```

### アンインストールフックのリトライ
ステータスコード `200` のレスポンスをカラーミーショップが受け取れない場合は、ステータスコード `200` をカラーミーショップが受け取るまで、以下の条件で再度アンインストール情報を送信します。
なお、カラーミーショップによるアンインストール処理は、アンインストールフックの送信結果の成否によらず、アンインストールが実行されたときに完了します。

- 2時間30分ごとにアンインストールフックの仕様に基づき再送します
- 最大で合計19回再送します
- すべての再送の試行でステータスコード `200` をカラーミーショップが受け取れない場合は、公認デベロッパー申請時に登録されたメールアドレス宛にメールを送信します

## インストール・アンインストールフックの署名検証
`X-Appstore-Signature` リクエストヘッダーに含まれる署名を検証して、リクエストがカラーミーショップから送信されたことを確認することを推奨します。

検証の手順は以下のとおりです。

1. カラーミーショップが発行した `webhook_secret` を秘密鍵として、HMAC-SHA256アルゴリズムを使用してリクエストボディのダイジェスト値を取得します。
2. ダイジェスト値をBase64エンコードした値とリクエストヘッダーに付与された署名( `X-Appstore-Signature` の値）が一致することを確認します。


サンプルコード(ruby)
```ruby
WEBHOOK_SECRET = 'my_webhook_secret'

payload_body = request.body.read
signature = Base64.strict_encode64(OpenSSL::HMAC.digest('sha256', WEBHOOK_SECRET, payload_body))
ActiveSupport::SecurityUtils.secure_compare(signature, request.env['HTTP_X_APPSTORE_SIGNATURE'])
```

### 発信元IPアドレスについて

発信元IPアドレスは固定ではありません。そのためIPアドレスが固定されていることを前提としてアプリケーションを開発しないでください。

インストールフックおよびアンインストールフックのリクエストの発信元を検証する場合は上記の署名検証を行なってください。

Base URLs:

* <a href="https://api.shop-pro.jp">https://api.shop-pro.jp</a>

<a href="https://api.shop-pro.jp/developers/tos">Terms of service</a>
Web: <a href="https://shop-pro.jp/?mode=inq">お問い合せ窓口</a> 

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://api.shop-pro.jp/oauth/authorize](https://api.shop-pro.jp/oauth/authorize)
    - Token URL = [https://api.shop-pro.jp/oauth/token](https://api.shop-pro.jp/oauth/token)

|Scope|Scope Description|
|---|---|
|read_inline_script_tags|インラインスクリプトタグの取得|
|read_script_tags|スクリプトタグの取得(deprecated)|
|read_shop_script_tags|ショップページへのスクリプトタグの取得|
|write_application_charge|課金データを作成|
|write_inline_script_tags|インラインスクリプトタグの登録|
|write_script_tags|スクリプトタグの登録(deprecated)|
|write_shop_script_tags|ショップページへのスクリプトタグの登録|

<h1 id="カラーミーショップアプリストア-api-applicationcharge">application_charge</h1>

## アプリ内課金データの作成

<a id="opIdpostApplicationCharge"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/application_charges.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "application_charge": {
      "application_charge_source_id": "5S1DAG"
    }
  }'
```

`POST /appstore/v1/application_charges.json`

「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。

この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。

ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。


> Body parameter

```json
{
  "application_charge": {
    "application_charge_source_id": "5S1DAG"
  }
}
```

<h3 id="アプリ内課金データの作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» application_charge|body|object|false|none|
|» » application_charge_source_id|body|string|false|アプリ内課金ID|

> Example responses

> 201 Response

```json
{
  "application_charge": {
    "id": "T21SUDG",
    "make_date": 1465784944,
    "point": 500,
    "update_date": 1494496809
  }
}
```

<h3 id="アプリ内課金データの作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="アプリ内課金データの作成-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application_charge|object|false|none|none|
|» id|string|false|none|課金ID|
|» make_date|integer|false|none|作成日時|
|» point|integer|false|none|ポイント請求額(税抜)|
|» update_date|integer|false|none|更新日時|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_application_charge )
</aside>

## 従量課金データの作成

<a id="opIdcreateUsageCharge"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/recurring_application_charges/string/usage_charges.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "usage_charge": {
      "description": "2019/4 メール送信分",
      "point": 100
    }
  }'
```

`POST /appstore/v1/recurring_application_charges/{recurringApplicationChargeId}/usage_charges.json`

アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
※無料お試し期間中のショップに対しては従量課金データを作成できません。


> Body parameter

```json
{
  "usage_charge": {
    "description": "2019/4 メール送信分",
    "point": 100
  }
}
```

<h3 id="従量課金データの作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recurringApplicationChargeId|path|string|true|課金契約ID|
|X-Appstore-Usage-Charge-Token|header|string|false|アンインストール後の従量課金の精算をする際に、 `Authorization` ヘッダへアクセストークンを指定する代わりにこのヘッダを指定することで、このAPIを実行することができます。<br>インストール中は指定不要で、アンインストール後のみ必須となります。<br>アンインストールフックで通知される `usage_charge.api_token` の値を指定してください。<br>このヘッダは、アンインストールフックで通知される `usage_charge.closing_on` まで有効です。この期間を過ぎると従量課金を精算できなくなりますのでご注意ください。詳しくは [アプリのアンインストール](#section/API/アプリのアンインストール) をご確認ください。|
|body|body|object|true|従量課金データ|
|» usage_charge|body|object|false|none|
|» » description|body|string|true|従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）|
|» » point|body|integer|true|ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。|

> Example responses

> 201 Response

```json
"{\n  \"usage_charge\": {\n    \"id\": \"X20SHDG\",\n    \"point\": 10,\n    \"description\": \"2019-04-15 メール送信\",\n    \"make_date\": 146579000,\n    \"update_date\": 1494497000\n  }\n}"
```

<h3 id="従量課金データの作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="従量課金データの作成-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage_charge|object|false|none|none|
|» description|string|false|none|従量課金発生理由|
|» id|string|false|none|従量課金ID|
|» make_date|integer|false|none|作成日時|
|» point|integer|false|none|ポイント請求額(税抜)|
|» update_date|integer|false|none|更新日時|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_application_charge )
</aside>

<h1 id="カラーミーショップアプリストア-api-script">script</h1>

ショップページにスクリプトタグを挿入するAPIです。

スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
- スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
- 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
- 登録するスクリプトのURLスキームは `https` のみになります
- 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
- スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます


## スクリプトタグの取得

<a id="opIdgetShopScriptTags"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/script_tags.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /appstore/v1/script_tags.json`

> Example responses

> 200 Response

```json
{
  "script_tags": [
    {
      "account_id": "PA12345678",
      "display_scope": "shop",
      "id": 1342332,
      "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
      "make_date": 1465784944,
      "oauth_application_id": 12,
      "src": "https://example.com/example.js",
      "update_date": 1494496809
    }
  ]
}
```

<h3 id="スクリプトタグの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tags|[object]|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|OAuthアプリケーションID|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|shop|
|» display_scope|thanks_page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_shop_script_tags )
</aside>

## スクリプトタグの作成

<a id="opIdcreateShopScriptTag"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/script_tags.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "script_tag": {
      "display_scope": "shop",
      "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
      "src": "https://example.com/example.js"
    }
  }'
```

`POST /appstore/v1/script_tags.json`

> Body parameter

```json
{
  "script_tag": {
    "display_scope": "shop",
    "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
    "src": "https://example.com/example.js"
  }
}
```

<h3 id="スクリプトタグの作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|作成するスクリプトタグの情報|
|» script_tag|body|object|false|none|
|» » display_scope|body|string|false|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» » integrity|body|string|false|スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。<br>詳しくは [サブリソース完全性 - Web セキュリティ \| MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。<br>※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。<br>|
|» » src|body|string|false|スクリプトURL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|shop|
|» » display_scope|thanks_page|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "account_id": "PA12345678",
    "display_scope": "shop",
    "id": 1342332,
    "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
    "make_date": 1465784944,
    "oauth_application_id": 12,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの作成-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|OAuthアプリケーションID|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|shop|
|» display_scope|thanks_page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_shop_script_tags )
</aside>

## スクリプトタグの取得

<a id="opIdgetShopScriptTag"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/script_tags/0.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /appstore/v1/script_tags/{scriptTagId}.json`

<h3 id="スクリプトタグの取得-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "account_id": "PA12345678",
    "display_scope": "shop",
    "id": 1342332,
    "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
    "make_date": 1465784944,
    "oauth_application_id": 12,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの取得-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの取得-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|OAuthアプリケーションID|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|shop|
|» display_scope|thanks_page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_shop_script_tags )
</aside>

## スクリプトタグの更新

<a id="opIdupdateShopScriptTag"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/script_tags/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "script_tag": {
      "display_scope": "shop",
      "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
      "src": "https://example.com/example.js"
    }
  }'
```

`PUT /appstore/v1/script_tags/{scriptTagId}.json`

> Body parameter

```json
{
  "script_tag": {
    "display_scope": "shop",
    "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
    "src": "https://example.com/example.js"
  }
}
```

<h3 id="スクリプトタグの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|
|body|body|object|false|作成するスクリプトタグの情報|
|» script_tag|body|object|false|none|
|» » display_scope|body|string|false|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» » integrity|body|string|false|スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。<br>詳しくは [サブリソース完全性 - Web セキュリティ \| MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。<br>※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。<br>|
|» » src|body|string|false|スクリプトURL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|shop|
|» » display_scope|thanks_page|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "account_id": "PA12345678",
    "display_scope": "shop",
    "id": 1342332,
    "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
    "make_date": 1465784944,
    "oauth_application_id": 12,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|OAuthアプリケーションID|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|shop|
|» display_scope|thanks_page|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_shop_script_tags )
</aside>

## スクリプトタグの削除

<a id="opIddeleteScriptTag"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/script_tags/0.json \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /appstore/v1/script_tags/{scriptTagId}.json`

<h3 id="スクリプトタグの削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|

<h3 id="スクリプトタグの削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_shop_script_tags )
</aside>

<h1 id="カラーミーショップアプリストア-api-scriptdeprecated">script(deprecated)</h1>

スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください

## スクリプトタグの取得

<a id="opIdgetScriptTags"></a>

> Code samples

```bash
curl https://example.com/v1/script_tags.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/script_tags.json`

> Example responses

> 200 Response

```json
{
  "script_tags": [
    {
      "display_scope": "shop",
      "id": 1342332,
      "make_date": 1465784944,
      "src": "https://example.com/example.js",
      "update_date": 1494496809
    }
  ]
}
```

<h3 id="スクリプトタグの取得-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの取得-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tags|[object]|false|none|none|
|» display_scope|string|false|none|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|shop|
|» display_scope|thanks_page|
|» display_scope|cart|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_script_tags )
</aside>

## スクリプトタグの作成

<a id="opIdcreateScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/script_tags.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "script_tag": {
      "display_scope": "shop",
      "src": "https://example.com/example.js"
    }
  }'
```

`POST /v1/script_tags.json`

> Body parameter

```json
{
  "script_tag": {
    "display_scope": "shop",
    "src": "https://example.com/example.js"
  }
}
```

<h3 id="スクリプトタグの作成-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|作成するスクリプトタグの情報|
|» script_tag|body|object|false|none|
|» » display_scope|body|string|false|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» » src|body|string|false|スクリプトURL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|all|
|» » display_scope|shop|
|» » display_scope|thanks_page|
|» » display_scope|cart|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの作成-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの作成-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» display_scope|string|false|none|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|shop|
|» display_scope|thanks_page|
|» display_scope|cart|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_script_tags )
</aside>

## スクリプトタグの取得

<a id="opIdgetScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/script_tags/0.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/script_tags/{scriptTagId}.json`

<h3 id="スクリプトタグの取得-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの取得-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの取得-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» display_scope|string|false|none|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|shop|
|» display_scope|thanks_page|
|» display_scope|cart|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_script_tags )
</aside>

## スクリプトタグの更新

<a id="opIdupdateScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/script_tags/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "script_tag": {
      "display_scope": "shop",
      "src": "https://example.com/example.js"
    }
  }'
```

`PUT /v1/script_tags/{scriptTagId}.json`

> Body parameter

```json
{
  "script_tag": {
    "display_scope": "shop",
    "src": "https://example.com/example.js"
  }
}
```

<h3 id="スクリプトタグの更新-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|
|body|body|object|false|作成するスクリプトタグの情報|
|» script_tag|body|object|false|none|
|» » display_scope|body|string|false|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» » src|body|string|false|スクリプトURL|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|all|
|» » display_scope|shop|
|» » display_scope|thanks_page|
|» » display_scope|cart|

> Example responses

> 200 Response

```json
{
  "script_tag": {
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "src": "https://example.com/example.js",
    "update_date": 1494496809
  }
}
```

<h3 id="スクリプトタグの更新-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="スクリプトタグの更新-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|script_tag|object|false|none|none|
|» display_scope|string|false|none|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|スクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» src|string|false|none|スクリプトURL|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|shop|
|» display_scope|thanks_page|
|» display_scope|cart|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_script_tags )
</aside>

## スクリプトタグの削除

> Code samples

```bash
curl https://example.com/v1/script_tags/0.json \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/script_tags/{scriptTagId}.json`

<h3 id="スクリプトタグの削除-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptTagId|path|integer|true|スクリプトタグID|

<h3 id="スクリプトタグの削除-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_script_tags )
</aside>

<h1 id="カラーミーショップアプリストア-api-inlinescript">inline_script</h1>

インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません

## インラインスクリプトタグの取得

<a id="opIdgetInlineScriptTags"></a>

> Code samples

```bash
curl https://example.com/v1/inline_script_tags.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/inline_script_tags.json`

> Example responses

> 200 Response

```json
{
  "inline_script_tags": [
    {
      "account_id": "PA04511366",
      "display_scope": "shop",
      "id": 1342332,
      "make_date": 1465784944,
      "oauth_application_id": 8102,
      "script": "console.log(\"aaaaa\")",
      "trigger_event": "object_builded",
      "update_date": 1494496809
    }
  ]
}
```

<h3 id="インラインスクリプトタグの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="インラインスクリプトタグの取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline_script_tags|[object]|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|インラインスクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|アプリID|
|» script|string|false|none|インラインスクリプト|
|» trigger_event|string|false|none|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|thanks_page|
|» display_scope|cart|
|» trigger_event|object_builded|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_inline_script_tags )
</aside>

## インラインスクリプトタグの登録

<a id="opIdcreateInlineScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/inline_script_tags.json \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inline_script_tag": {
      "display_scope": "shop",
      "script": "console.log(\"aaaaa\")",
      "trigger_event": "object_builded"
    }
  }'
```

`POST /v1/inline_script_tags.json`

> Body parameter

```json
{
  "inline_script_tag": {
    "display_scope": "shop",
    "script": "console.log(\"aaaaa\")",
    "trigger_event": "object_builded"
  }
}
```

<h3 id="インラインスクリプトタグの登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|作成するインラインスクリプトタグの情報|
|» inline_script_tag|body|object|false|none|
|» » display_scope|body|string|false|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» » script|body|string|false|インラインスクリプト|
|» » trigger_event|body|string|false|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|all|
|» » display_scope|thanks_page|
|» » display_scope|cart|
|» » trigger_event|object_builded|

> Example responses

> 201 Response

```json
{
  "inline_script_tag": {
    "account_id": "PA04511366",
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "oauth_application_id": 8102,
    "script": "console.log(\"aaaaa\")",
    "trigger_event": "object_builded",
    "update_date": 1494496809
  }
}
```

<h3 id="インラインスクリプトタグの登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="インラインスクリプトタグの登録-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline_script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|インラインスクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|アプリID|
|» script|string|false|none|インラインスクリプト|
|» trigger_event|string|false|none|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|thanks_page|
|» display_scope|cart|
|» trigger_event|object_builded|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_inline_script_tags )
</aside>

## インラインスクリプトタグの取得

<a id="opIdgetInlineScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/inline_script_tags/0.json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/inline_script_tags/{inlineScriptTagId}.json`

<h3 id="インラインスクリプトタグの取得-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inlineScriptTagId|path|integer|true|インラインスクリプトタグID|

> Example responses

> 200 Response

```json
{
  "inline_script_tag": {
    "account_id": "PA04511366",
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "oauth_application_id": 8102,
    "script": "console.log(\"aaaaa\")",
    "trigger_event": "object_builded",
    "update_date": 1494496809
  }
}
```

<h3 id="インラインスクリプトタグの取得-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="インラインスクリプトタグの取得-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline_script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|インラインスクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|アプリID|
|» script|string|false|none|インラインスクリプト|
|» trigger_event|string|false|none|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|thanks_page|
|» display_scope|cart|
|» trigger_event|object_builded|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read_inline_script_tags )
</aside>

## インラインスクリプトタグの更新

<a id="opIdupdateInlineScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/inline_script_tags/0.json \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inline_script_tag": {
      "display_scope": "shop",
      "script": "console.log(\"aaaaa\")",
      "trigger_event": "object_builded"
    }
  }'
```

`PUT /v1/inline_script_tags/{inlineScriptTagId}.json`

> Body parameter

```json
{
  "inline_script_tag": {
    "display_scope": "shop",
    "script": "console.log(\"aaaaa\")",
    "trigger_event": "object_builded"
  }
}
```

<h3 id="インラインスクリプトタグの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inlineScriptTagId|path|integer|true|インラインスクリプトタグID|
|body|body|object|false|更新するスクリプトタグの情報|
|» inline_script_tag|body|object|false|none|
|» » display_scope|body|string|false|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» » script|body|string|false|インラインスクリプト|
|» » trigger_event|body|string|false|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » display_scope|all|
|» » display_scope|thanks_page|
|» » display_scope|cart|
|» » trigger_event|object_builded|

> Example responses

> 200 Response

```json
{
  "inline_script_tag": {
    "account_id": "PA04511366",
    "display_scope": "shop",
    "id": 1342332,
    "make_date": 1465784944,
    "oauth_application_id": 8102,
    "script": "console.log(\"aaaaa\")",
    "trigger_event": "object_builded",
    "update_date": 1494496809
  }
}
```

<h3 id="インラインスクリプトタグの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="インラインスクリプトタグの更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inline_script_tag|object|false|none|none|
|» account_id|string|false|none|アカウントID|
|» display_scope|string|false|none|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|» id|integer|false|none|インラインスクリプトタグID|
|» make_date|integer|false|none|作成日時|
|» oauth_application_id|integer|false|none|アプリID|
|» script|string|false|none|インラインスクリプト|
|» trigger_event|string|false|none|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|
|» update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|» display_scope|all|
|» display_scope|thanks_page|
|» display_scope|cart|
|» trigger_event|object_builded|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_inline_script_tags )
</aside>

## インラインスクリプトタグの削除

<a id="opIddeleteInlineScriptTag"></a>

> Code samples

```bash
curl https://example.com/v1/inline_script_tags/0.json \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/inline_script_tags/{inlineScriptTagId}.json`

<h3 id="インラインスクリプトタグの削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inlineScriptTagId|path|integer|true|インラインスクリプトタグID|

<h3 id="インラインスクリプトタグの削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write_inline_script_tags )
</aside>

<h1 id="カラーミーショップアプリストア-api-uninstallation">uninstallation</h1>

アプリをアンインストールするAPIです。

## アプリストアアプリのアンインストール

<a id="opIddeleteInstallation"></a>

> Code samples

```bash
curl https://example.com/appstore/v1/installation.json \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /appstore/v1/installation.json`

このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。

アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。


> Example responses

> 200 Response

```json
{
  "account_id": "PA00000000",
  "application_charge_source_id": "5S1DAG",
  "recurring_application_charge_id": "F3WQ1S",
  "uninstalled_at": 1569920014,
  "usage_charge": {
    "api_token": "token",
    "closing_on": 1572598664
  }
}
```

<h3 id="アプリストアアプリのアンインストール-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|アンインストール成功|Inline|

<h3 id="アプリストアアプリのアンインストール-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|アンインストールしたショップオーナーのアカウントID|
|application_charge_source_id|string|false|none|プラン課金ID|
|recurring_application_charge_id|string|false|none|（買い切り以外の課金の場合）課金契約ID|
|uninstalled_at|integer|false|none|アンインストール日時|
|usage_charge|object|false|none|（従量課金の場合）従量課金アンインストール情報|
|» api_token|string|false|none|アンインストール後に従量課金APIを利用いただくために必要な情報|
|» closing_on|integer|false|none|ポイント締め日|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_ApplicationCharge">ApplicationCharge</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcharge"></a>
<a id="schema_ApplicationCharge"></a>
<a id="tocSapplicationcharge"></a>
<a id="tocsapplicationcharge"></a>

```json
{
  "id": "T21SUDG",
  "make_date": 1465784944,
  "point": 500,
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|課金ID|
|make_date|integer|false|none|作成日時|
|point|integer|false|none|ポイント請求額(税抜)|
|update_date|integer|false|none|更新日時|

<h2 id="tocS_CartScriptTag">CartScriptTag</h2>
<!-- backwards compatibility -->
<a id="schemacartscripttag"></a>
<a id="schema_CartScriptTag"></a>
<a id="tocScartscripttag"></a>
<a id="tocscartscripttag"></a>

```json
{
  "account_id": "PA12345678",
  "id": 1342332,
  "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
  "make_date": 1465784944,
  "oauth_application_id": 12,
  "src": "https://example.com/example.js",
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|アカウントID|
|id|integer|false|none|スクリプトタグID|
|integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|make_date|integer|false|none|作成日時|
|oauth_application_id|integer|false|none|OAuthアプリケーションID|
|src|string|false|none|スクリプトURL|
|update_date|integer|false|none|更新日時|

<h2 id="tocS_InlineScriptTag">InlineScriptTag</h2>
<!-- backwards compatibility -->
<a id="schemainlinescripttag"></a>
<a id="schema_InlineScriptTag"></a>
<a id="tocSinlinescripttag"></a>
<a id="tocsinlinescripttag"></a>

```json
{
  "account_id": "PA04511366",
  "display_scope": "shop",
  "id": 1342332,
  "make_date": 1465784944,
  "oauth_application_id": 8102,
  "script": "console.log(\"aaaaa\")",
  "trigger_event": "object_builded",
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|アカウントID|
|display_scope|string|false|none|インラインスクリプトを出力するページ。<br><br>- `all`: カートの途中のページと注文完了ページの両方<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|id|integer|false|none|インラインスクリプトタグID|
|make_date|integer|false|none|作成日時|
|oauth_application_id|integer|false|none|アプリID|
|script|string|false|none|インラインスクリプト|
|trigger_event|string|false|none|インラインスクリプトを実行するタイミング。<br><br>- `object_builded`: JSオブジェクトの作成が完了した時<br>|
|update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|display_scope|all|
|display_scope|thanks_page|
|display_scope|cart|
|trigger_event|object_builded|

<h2 id="tocS_ScriptTag">ScriptTag</h2>
<!-- backwards compatibility -->
<a id="schemascripttag"></a>
<a id="schema_ScriptTag"></a>
<a id="tocSscripttag"></a>
<a id="tocsscripttag"></a>

```json
{
  "display_scope": "shop",
  "id": 1342332,
  "make_date": 1465784944,
  "src": "https://example.com/example.js",
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_scope|string|false|none|スクリプトを出力するページ。<br><br>- `all`: ショップページと注文完了ページの両方<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>- `cart`: カートの途中のページ<br>|
|id|integer|false|none|スクリプトタグID|
|make_date|integer|false|none|作成日時|
|src|string|false|none|スクリプトURL|
|update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|display_scope|all|
|display_scope|shop|
|display_scope|thanks_page|
|display_scope|cart|

<h2 id="tocS_ShopScriptTag">ShopScriptTag</h2>
<!-- backwards compatibility -->
<a id="schemashopscripttag"></a>
<a id="schema_ShopScriptTag"></a>
<a id="tocSshopscripttag"></a>
<a id="tocsshopscripttag"></a>

```json
{
  "account_id": "PA12345678",
  "display_scope": "shop",
  "id": 1342332,
  "integrity": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC",
  "make_date": 1465784944,
  "oauth_application_id": 12,
  "src": "https://example.com/example.js",
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|アカウントID|
|display_scope|string|false|none|スクリプトを出力するページ<br>- `shop`: ショップページ<br>- `thanks_page`: 注文完了ページ<br>|
|id|integer|false|none|スクリプトタグID|
|integrity|string|false|none|スクリプトファイルのハッシュ値（script tagのintegrity属性）|
|make_date|integer|false|none|作成日時|
|oauth_application_id|integer|false|none|OAuthアプリケーションID|
|src|string|false|none|スクリプトURL|
|update_date|integer|false|none|更新日時|

#### Enumerated Values

|Property|Value|
|---|---|
|display_scope|shop|
|display_scope|thanks_page|

<h2 id="tocS_UsageCharge">UsageCharge</h2>
<!-- backwards compatibility -->
<a id="schemausagecharge"></a>
<a id="schema_UsageCharge"></a>
<a id="tocSusagecharge"></a>
<a id="tocsusagecharge"></a>

```json
{
  "description": "2019/4 メール送信分",
  "id": "X20SHDG",
  "make_date": 1465784944,
  "point": 100,
  "update_date": 1494496809
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|従量課金発生理由|
|id|string|false|none|従量課金ID|
|make_date|integer|false|none|作成日時|
|point|integer|false|none|ポイント請求額(税抜)|
|update_date|integer|false|none|更新日時|
