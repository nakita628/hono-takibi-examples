<h1 id="freee請求書-api">freee請求書 API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>freee請求書のAPI仕様です。</p>

<b>freee請求書APIを利用するには、freee請求書への登録が必要です。

登録は<a href="https://www.freee.co.jp/invoice/" target="_blank">freee請求書</a>より行ってください。</b>

</br>

<h3 id="about_authorize">認証について</h3>

<p>OAuth2.0を利用します。<a href="https://developer.freee.co.jp/reference/#%e8%aa%8d%e8%a8%bc" target="_blank">詳細はリファレンスの認証に関する記載を参照してください。</a></p>

<h3 id="api_endpoint">エンドポイント</h3>

<p>https://api.freee.co.jp/iv</p>


<h3 id="compatibility">後方互換性ありの変更</h3>

<p>freeeでは、APIを改善していくために以下のような変更は後方互換性ありとして通知なく変更を入れることがあります。アプリケーション実装者は以下を踏まえて開発を行ってください。</p>

<ul>
<li>新しいAPIリソース・エンドポイントの追加</li>
<li>既存のAPIに対して必須ではない新しいリクエストパラメータの追加</li>
<li>既存のAPIレスポンスに対する新しいプロパティの追加</li>
<li>既存のAPIレスポンスに対するプロパティの順番の入れ変え</li>
<li>keyとなっているidやcodeの長さの変更（長くする）</li>
</ul>

<h3 id="error_response">エラーレスポンス</h3>

<p>APIリクエストでエラーが発生した場合は、エラー原因に応じたステータスコードおよびメッセージを返します。</p>

<table border="1">
<tbody>
<tr>
<th style="padding: 10px"><strong>ステータスコード</strong></th>
<th style="padding: 10px"><strong>原因</strong></th>
</tr>
<tr><td style="padding: 10px">400</td><td style="padding: 10px">リクエストパラメータが不正</td></tr>
<tr><td style="padding: 10px">401</td><td style="padding: 10px">アクセストークンが無効</td></tr>
<tr><td style="padding: 10px">403</td><td style="padding: 10px">アクセス権限がない</td></tr>
<tr><td style="padding: 10px">404</td><td style="padding: 10px">リソースが存在しない</td></tr>
<tr><td style="padding: 10px">429</td><td style="padding: 10px">リクエスト回数制限を超えた</td></tr>
<tr><td style="padding: 10px">503</td><td style="padding: 10px">システム内で予期しないエラーが発生</td></tr>
</tbody>
</table>

<p>メッセージボディ内の <code>messages</code> にはエラー内容を説明する文字列が入ります。</p>
<pre><code>  {
&quot;status_code&quot; : 400,
&quot;errors&quot; : [
{
&quot;type&quot; : &quot;bad_request&quot;,
&quot;messages&quot; : [
&quot;リクエストの形式が不正です。&quot;
]
}
]
}  </code></pre>

</br>

<h3 id="api_rate_limit">API使用制限</h3>
<p>APIリクエストは、全プラン共通で1時間あたり1500回、1分あたり30回を上限としています。また、契約プランに応じて1日あたりの上限が設定されています。</p>

<table border="1">
<tbody>
<tr>
<th style="padding: 10px"><strong>freee会計プラン名</strong></th>
<th style="padding: 10px"><strong>事業所とアプリケーション毎に、1日のAPIコール数の上限</strong></th>
</tr>
<tr><td style="padding: 10px">法人エンタープライズプラン</td><td style="padding: 10px">10,000</td></tr>
<tr><td style="padding: 10px">法人アドバンスプラン（および旧法人プロフェッショナルプラン）</td><td style="padding: 10px">5,000</td></tr>
<tr><td style="padding: 10px">上記以外</td><td style="padding: 10px">3,000</td></tr>
</tbody>
</table>

<p>API使用ステータスはレスポンスヘッダに付与されます。</p>

<pre><code>X-RateLimit-Limit:1500
X-RateLimit-Remaining:1498
X-RateLimit-Reset:2018-01-01T12:00:00.000000Z
X-Ratelimit-Limit-Minute:30
X-Ratelimit-Remaining-Minute:29
X-Ratelimit-Reset-Minute:2018-01-01T12:00:00.000000Z
X-RateLimit-Limit-Day:3000
X-RateLimit-Remaining-Day:2991
X-RateLimit-Reset-Day:2018-01-02T00:00:00.000000Z
</code></pre>

<br> 各ヘッダの意味は次のとおりです。</p>

<table border="1">
<tbody>
<tr>
<th style="padding: 10px"><strong>ヘッダ名</strong></th>
<th style="padding: 10px"><strong>説明</strong></th>
</tr>
<tr><td style="padding: 10px">X-RateLimit-Limit</td><td style="padding: 10px">1時間の使用回数の上限</td></tr>
<tr><td style="padding: 10px">X-RateLimit-Remaining</td><td style="padding: 10px">1時間の残り使用回数</td></tr>
<tr><td style="padding: 10px">X-RateLimit-Reset</td><td style="padding: 10px">1時間の使用回数がリセットされる時刻</td></tr>
<tr><td style="padding: 10px">X-Ratelimit-Limit-Minute</td><td style="padding: 10px">1分間の使用回数の上限</td></tr>
<tr><td style="padding: 10px">X-Ratelimit-Remaining-Minute</td><td style="padding: 10px">1分間の残り使用回数</td></tr>
<tr><td style="padding: 10px">X-Ratelimit-Reset-Minute</td><td style="padding: 10px">1分間の使用回数がリセットされる時刻</td></tr>
<tr><td style="padding: 10px">X-RateLimit-Limit-Day</td><td style="padding: 10px">1日間の使用回数の上限</td></tr>
<tr><td style="padding: 10px">X-RateLimit-Remaining-Day</td><td style="padding: 10px">1日間の残り使用回数</td></tr>
<tr><td style="padding: 10px">X-Ratelimit-Reset-Day</td><td style="padding: 10px">1日間の使用回数がリセットされる時刻</td></tr>
</tbody>
</table>

<p>上記に加え、freeeは一定期間に過度のアクセスを検知した場合、APIアクセスをコントロールする場合があります。<br> その際のhttp status codeは403となります。制限がかかってから10分程度が過ぎると再度使用することができるようになります。</p>

</br>

<h3 id="accounting_master_items">会計マスタ項目</h3>

<p>freee請求書APIのリクエストパラメータに、会計マスタ項目（例：<a href="https://developer.freee.co.jp/reference/iv/reference#operations-tag-Invoices">POST/invoices請求書の作成</a> 取引先ID）があります。会計マスタ項目の詳細は<a href="https://developer.freee.co.jp/guideline/master-guideline">会計マスタガイドラインを参照ください</a>。</p>

<p>会計のマスタ項目はfreee会計APIのエンドポイントにて取得可能です（例：<a href="https://developer.freee.co.jp/reference/accounting/reference#operations-tag-Partners">Partners 取引先</a>）。freee会計APIのエンドポイントの詳細は<a href="https://developer.freee.co.jp/reference/accounting/reference">会計APIリファレンスを参照ください</a>。</p>

</br>

Base URLs:

* <a href="https://api.freee.co.jp/iv">https://api.freee.co.jp/iv</a>

Web: <a href="https://freee.my.site.com/HelpCenter/s">freee請求書問い合わせ</a> 
License: © 2023 freee K.K.

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.secure.freee.co.jp/public_api/authorize](https://accounts.secure.freee.co.jp/public_api/authorize)
    - Token URL = [https://accounts.secure.freee.co.jp/public_api/token](https://accounts.secure.freee.co.jp/public_api/token)

|Scope|Scope Description|
|---|---|
|write||
|read||

<h1 id="freee請求書-api-paymentnotices">PaymentNotices</h1>

支払通知書

## 支払通知書一覧の取得

<a id="opIdpayment_notices/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/payment_notices?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_notices`

<h3 id="支払通知書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|payment_notice_number|query|string|false|支払通知書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|start_payment_notice_date|query|string(date)|false|支払通知書日付の開始日|
|end_payment_notice_date|query|string(date)|false|支払通知書日付の終了日|
|start_collects_on|query|string(date)|false|支払予定日の開始日|
|end_collects_on|query|string(date)|false|支払予定日の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|

> Example responses

> 200 Response

```json
{
  "payment_notices": [
    {
      "id": 1,
      "company_id": 1,
      "payment_notice_number": "string",
      "subject": "string",
      "template_id": 1,
      "payment_notice_date": "1970-01-01",
      "collects_on": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="支払通知書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PaymentNoticeIndexResponse](#schemapaymentnoticeindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 支払通知書の作成

<a id="opIdpayment_notices/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/payment_notices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "payment_notice_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true
      }
    ]
  }'
```

`POST /payment_notices`

支払通知書の作成をします。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "payment_notice_number": "string",
  "branch_no": 0,
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "payment_condition": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "payment_notice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true
    }
  ]
}
```

<h3 id="支払通知書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentNoticeRequest](#schemapaymentnoticerequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» payment_notice_number|body|string|false|支払通知書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» payment_notice_date|body|string(date)|true|支払通知書日付|
|» collects_on|body|string(date)|false|支払予定日|
|» payment_condition|body|string|false|支払方法|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» payment_notice_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[PaymentNoticeRequest_lines](#schemapaymentnoticerequest_lines)]|true|支払通知書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 201 Response

```json
{
  "payment_notice": {
    "id": 1,
    "company_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "payment_notice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="支払通知書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[PaymentNoticeResponse](#schemapaymentnoticeresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な支払通知書の帳票テンプレート一覧の取得

<a id="opIdpayment_notices/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/payment_notices/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_notices/templates`

使用可能な支払通知書の帳票テンプレート一覧を返します。

<h3 id="使用可能な支払通知書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な支払通知書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 支払通知書の取得

<a id="opIdpayment_notices/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/payment_notices/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /payment_notices/{id}`

指定されたIDの支払通知書を返します。

<h3 id="支払通知書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|支払通知書ID|

> Example responses

> 200 Response

```json
{
  "payment_notice": {
    "id": 1,
    "company_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "payment_notice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="支払通知書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PaymentNoticeShowResponse](#schemapaymentnoticeshowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 支払通知書の更新

<a id="opIdpayment_notices/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/payment_notices/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "payment_notice_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true
      }
    ]
  }'
```

`PUT /payment_notices/{id}`

支払通知書の更新をします。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "payment_notice_number": "string",
  "branch_no": 0,
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "payment_condition": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "payment_notice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true
    }
  ]
}
```

<h3 id="支払通知書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|支払通知書ID|
|body|body|[PaymentNoticeRequest](#schemapaymentnoticerequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» payment_notice_number|body|string|false|支払通知書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» payment_notice_date|body|string(date)|true|支払通知書日付|
|» collects_on|body|string(date)|false|支払予定日|
|» payment_condition|body|string|false|支払方法|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» payment_notice_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[PaymentNoticeRequest_lines](#schemapaymentnoticerequest_lines)]|true|支払通知書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 200 Response

```json
{
  "payment_notice": {
    "id": 1,
    "company_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "payment_notice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="支払通知書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PaymentNoticeResponse](#schemapaymentnoticeresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 支払通知書の取消

<a id="opIdpayment_notices/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/payment_notices/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /payment_notices/{id}/cancel`

指定された支払通知書を取消状態にします。

取引が紐づいている場合は取引も削除されます。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="支払通知書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|支払通知書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "payment_notice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="支払通知書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PaymentNoticeCancelStatusResponse](#schemapaymentnoticecancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された支払通知書の復元

<a id="opIdpayment_notices/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/payment_notices/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /payment_notices/{id}/uncancel`

指定された取消済み支払通知書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された支払通知書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|支払通知書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "payment_notice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された支払通知書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PaymentNoticeCancelStatusResponse](#schemapaymentnoticecancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

<h1 id="freee請求書-api-purchaseorders">PurchaseOrders</h1>

発注書

## 発注書一覧の取得

<a id="opIdpurchase_orders/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/purchase_orders?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /purchase_orders`

発注書の一覧を返します。

<h3 id="発注書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|purchase_order_number|query|string|false|発注書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|deal_status|query|string|false|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|payment_status|query|string|false|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|start_purchase_order_date|query|string(date)|false|発注日の開始日|
|end_purchase_order_date|query|string(date)|false|発注日の終了日|
|start_collects_on|query|string(date)|false|支払予定日の開始日|
|end_collects_on|query|string(date)|false|支払予定日の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deal_status|registered|
|deal_status|unregistered|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|payment_status|settled|
|payment_status|unsettled|

> Example responses

> 200 Response

```json
{
  "purchase_orders": [
    {
      "id": 1,
      "company_id": 1,
      "purchase_order_number": "string",
      "subject": "string",
      "template_id": 1,
      "purchase_order_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "collects_on": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "payment_status": "settled",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="発注書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PurchaseOrderIndexResponse](#schemapurchaseorderindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 発注書の作成

<a id="opIdpurchase_orders/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/purchase_orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "purchase_order_note": "string",
    "collects_on": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "payment_condition": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`POST /purchase_orders`

発注書の作成をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "purchase_order_number": "string",
  "branch_no": 0,
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "purchase_order_note": "string",
  "collects_on": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "payment_condition": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="発注書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseOrderRequest](#schemapurchaseorderrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» purchase_order_number|body|string|false|発注書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» purchase_order_date|body|string(date)|true|発注日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、発注日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» purchase_order_note|body|string|false|発注書備考|
|» collects_on|body|string(date)|false|支払予定日<br>- 発注日（purchase_order_date）以降の日付を指定してください。|
|» delivery_deadline|body|string|false|納品期限|
|» delivery_location|body|string|false|納品場所|
|» payment_condition|body|string|false|支払条件|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[PurchaseOrderRequest_lines](#schemapurchaseorderrequest_lines)]|true|発注書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 201 Response

```json
{
  "purchase_order": {
    "id": 1,
    "company_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "purchase_order_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="発注書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[PurchaseOrderResponse](#schemapurchaseorderresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な発注書の帳票テンプレート一覧の取得

<a id="opIdpurchase_orders/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/purchase_orders/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /purchase_orders/templates`

使用可能な発注書の帳票テンプレート一覧を返します。

<h3 id="使用可能な発注書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な発注書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 発注書の取得

<a id="opIdpurchase_orders/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/purchase_orders/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /purchase_orders/{id}`

指定されたIDの発注書を返します。

<h3 id="発注書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|発注書ID|

> Example responses

> 200 Response

```json
{
  "purchase_order": {
    "id": 1,
    "company_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "purchase_order_note": "string",
    "order_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "payment_condition": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="発注書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PurchaseOrderShowResponse](#schemapurchaseordershowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 発注書の更新

<a id="opIdpurchase_orders/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/purchase_orders/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "purchase_order_note": "string",
    "collects_on": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "payment_condition": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`PUT /purchase_orders/{id}`

発注書の更新をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "purchase_order_number": "string",
  "branch_no": 0,
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "purchase_order_note": "string",
  "collects_on": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "payment_condition": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="発注書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|発注書ID|
|body|body|[PurchaseOrderRequest](#schemapurchaseorderrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» purchase_order_number|body|string|false|発注書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» purchase_order_date|body|string(date)|true|発注日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、発注日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» purchase_order_note|body|string|false|発注書備考|
|» collects_on|body|string(date)|false|支払予定日<br>- 発注日（purchase_order_date）以降の日付を指定してください。|
|» delivery_deadline|body|string|false|納品期限|
|» delivery_location|body|string|false|納品場所|
|» payment_condition|body|string|false|支払条件|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[PurchaseOrderRequest_lines](#schemapurchaseorderrequest_lines)]|true|発注書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 200 Response

```json
{
  "purchase_order": {
    "id": 1,
    "company_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "purchase_order_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="発注書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PurchaseOrderResponse](#schemapurchaseorderresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 発注書の取消

<a id="opIdpurchase_orders/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/purchase_orders/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /purchase_orders/{id}/cancel`

指定された発注書を取消状態にします。

取引が紐づいている場合は取引も削除されます。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="発注書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|発注書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "purchase_order": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="発注書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PurchaseOrderCancelStatusResponse](#schemapurchaseordercancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された発注書の復元

<a id="opIdpurchase_orders/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/purchase_orders/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /purchase_orders/{id}/uncancel`

指定された取消済み発注書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された発注書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|発注書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "purchase_order": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された発注書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[PurchaseOrderCancelStatusResponse](#schemapurchaseordercancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

<h1 id="freee請求書-api-receipts">Receipts</h1>

領収書

## 領収書一覧の取得

<a id="opIdreceipts/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/receipts?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /receipts`

領収書の一覧を返します。

<h3 id="領収書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|receipt_number|query|string|false|領収書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|deal_status|query|string|false|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|query|string|false|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|start_receipt_date|query|string(date)|false|領収日の開始日|
|end_receipt_date|query|string(date)|false|領収日の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deal_status|registered|
|deal_status|unregistered|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|

> Example responses

> 200 Response

```json
{
  "receipts": [
    {
      "id": 1,
      "company_id": 1,
      "receipt_number": "string",
      "subject": "string",
      "template_id": 1,
      "receipt_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="領収書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ReceiptIndexResponse](#schemareceiptindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 領収書の作成

<a id="opIdreceipts/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "receipt_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`POST /receipts`

領収書の作成をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "receipt_number": "string",
  "branch_no": 0,
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "receipt_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="領収書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptRequest](#schemareceiptrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» receipt_number|body|string|false|領収書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» receipt_date|body|string(date)|true|領収日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、領収日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» receipt_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[ReceiptRequest_lines](#schemareceiptrequest_lines)]|true|領収書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 201 Response

```json
{
  "receipt": {
    "id": 1,
    "company_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "receipt_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="領収書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[ReceiptResponse](#schemareceiptresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な領収書の帳票テンプレート一覧の取得

<a id="opIdreceipts/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/receipts/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /receipts/templates`

使用可能な領収書の帳票テンプレート一覧を返します。

<h3 id="使用可能な領収書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な領収書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 領収書の取得

<a id="opIdreceipts/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/receipts/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /receipts/{id}`

指定されたIDの領収書を返します。

<h3 id="領収書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|領収書ID|

> Example responses

> 200 Response

```json
{
  "receipt": {
    "id": 1,
    "company_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "receipt_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="領収書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ReceiptShowResponse](#schemareceiptshowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 領収書の更新

<a id="opIdreceipts/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/receipts/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "receipt_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`PUT /receipts/{id}`

領収書の更新をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "receipt_number": "string",
  "branch_no": 0,
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "receipt_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="領収書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|領収書ID|
|body|body|[ReceiptRequest](#schemareceiptrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» receipt_number|body|string|false|領収書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» receipt_date|body|string(date)|true|領収日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、領収日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» receipt_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[ReceiptRequest_lines](#schemareceiptrequest_lines)]|true|領収書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|

> Example responses

> 200 Response

```json
{
  "receipt": {
    "id": 1,
    "company_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "receipt_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="領収書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ReceiptResponse](#schemareceiptresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 領収書の取消

<a id="opIdreceipts/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/receipts/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /receipts/{id}/cancel`

指定された領収書を取消状態にします。

取引が紐づいている場合は取引も削除されます。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="領収書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|領収書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "receipt": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="領収書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ReceiptCancelStatusResponse](#schemareceiptcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された領収書の復元

<a id="opIdreceipts/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/receipts/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /receipts/{id}/uncancel`

指定された取消済み領収書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された領収書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|領収書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "receipt": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された領収書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ReceiptCancelStatusResponse](#schemareceiptcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

<h1 id="freee請求書-api-deliveryslips">DeliverySlips</h1>

納品書

## 納品書一覧の取得

<a id="opIddelivery_slips/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/delivery_slips?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /delivery_slips`

納品書の一覧を返します。

<h3 id="納品書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|delivery_slip_number|query|string|false|納品書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|payment_status|query|string|false|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|deal_status|query|string|false|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|start_delivery_slip_date|query|string(date)|false|納品日の開始日|
|end_delivery_slip_date|query|string(date)|false|納品日の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|
|sales_management_origin|query|boolean|false|freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|payment_status|settled|
|payment_status|unsettled|
|deal_status|registered|
|deal_status|unregistered|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|

> Example responses

> 200 Response

```json
{
  "delivery_slips": [
    {
      "id": 1,
      "company_id": 1,
      "delivery_slip_number": "string",
      "subject": "string",
      "template_id": 1,
      "delivery_slip_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="納品書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[DeliverySlipIndexResponse](#schemadeliveryslipindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 納品書の作成

<a id="opIddelivery_slips/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/delivery_slips \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "delivery_slip_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`POST /delivery_slips`

納品書の作成をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "delivery_slip_number": "string",
  "branch_no": 0,
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "delivery_slip_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="納品書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeliverySlipRequest](#schemadeliverysliprequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» delivery_slip_number|body|string|false|納品書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» delivery_slip_date|body|string(date)|true|納品日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、納品日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» delivery_slip_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[DeliverySlipRequest_lines](#schemadeliverysliprequest_lines)]|true|納品書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 201 Response

```json
{
  "delivery_slip": {
    "id": 1,
    "company_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "delivery_slip_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="納品書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[DeliverySlipResponse](#schemadeliveryslipresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な納品書の帳票テンプレート一覧の取得

<a id="opIddelivery_slips/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/delivery_slips/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /delivery_slips/templates`

使用可能な納品書の帳票テンプレート一覧を返します。

<h3 id="使用可能な納品書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な納品書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 納品書の取得

<a id="opIddelivery_slips/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/delivery_slips/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /delivery_slips/{id}`

指定されたIDの納品書を返します。

<h3 id="納品書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|納品書ID|

> Example responses

> 200 Response

```json
{
  "delivery_slip": {
    "id": 1,
    "company_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "delivery_slip_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="納品書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[DeliverySlipShowResponse](#schemadeliveryslipshowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 納品書の更新

<a id="opIddelivery_slips/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/delivery_slips/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "delivery_slip_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`PUT /delivery_slips/{id}`

納品書の更新をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "delivery_slip_number": "string",
  "branch_no": 0,
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "delivery_slip_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="納品書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|納品書ID|
|body|body|[DeliverySlipRequest](#schemadeliverysliprequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» delivery_slip_number|body|string|false|納品書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» delivery_slip_date|body|string(date)|true|納品日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、納品日が補完されます。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» delivery_slip_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» lines|body|[[DeliverySlipRequest_lines](#schemadeliverysliprequest_lines)]|true|納品書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 200 Response

```json
{
  "delivery_slip": {
    "id": 1,
    "company_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "delivery_slip_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="納品書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[DeliverySlipResponse](#schemadeliveryslipresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 納品書の取消

<a id="opIddelivery_slips/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/delivery_slips/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /delivery_slips/{id}/cancel`

指定された納品書を取消状態にします。

取引が紐づいている場合は取引も削除されます。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="納品書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|納品書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "delivery_slip": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="納品書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[DeliverySlipCancelStatusResponse](#schemadeliveryslipcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された納品書の復元

<a id="opIddelivery_slips/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/delivery_slips/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /delivery_slips/{id}/uncancel`

指定された取消済み納品書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された納品書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|納品書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "delivery_slip": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された納品書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[DeliverySlipCancelStatusResponse](#schemadeliveryslipcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

<h1 id="freee請求書-api-quotations">Quotations</h1>

見積書

## 見積書一覧の取得

<a id="opIdquotations/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/quotations?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /quotations`

<h3 id="見積書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|quotation_number|query|string|false|見積書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|start_quotation_date|query|string(date)|false|見積日の開始日|
|end_quotation_date|query|string(date)|false|見積日の終了日|
|start_expiration_date|query|string(date)|false|有効期限の開始日|
|end_expiration_date|query|string(date)|false|有効期限の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|
|sales_management_origin|query|boolean|false|freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|

> Example responses

> 200 Response

```json
{
  "quotations": [
    {
      "id": 1,
      "company_id": 1,
      "quotation_number": "string",
      "subject": "string",
      "template_id": 1,
      "quotation_date": "1970-01-01",
      "expiration_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="見積書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[QuotationIndexResponse](#schemaquotationindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 見積書の作成

<a id="opIdquotations/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/quotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "quotation_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true
      }
    ]
  }'
```

`POST /quotations`

見積書の作成をします。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "quotation_number": "string",
  "branch_no": 0,
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "quotation_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true
    }
  ]
}
```

<h3 id="見積書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QuotationRequest](#schemaquotationrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» quotation_number|body|string|false|見積書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» quotation_date|body|string(date)|true|見積日|
|» expiration_date|body|string(date)|false|有効期限|
|» delivery_deadline|body|string|false|納品期限|
|» delivery_location|body|string|false|納品場所|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» quotation_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。。|
|» lines|body|[[QuotationRequest_lines](#schemaquotationrequest_lines)]|true|見積書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 201 Response

```json
{
  "quotation": {
    "id": 1,
    "company_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "quotation_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="見積書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[QuotationResponse](#schemaquotationresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な見積書の帳票テンプレート一覧の取得

<a id="opIdquotations/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/quotations/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /quotations/templates`

使用可能な見積書の帳票テンプレート一覧を返します。

<h3 id="使用可能な見積書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な見積書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 見積書の取得

<a id="opIdquotations/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/quotations/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /quotations/{id}`

指定されたIDの見積書を返します。

<h3 id="見積書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|見積書ID|

> Example responses

> 200 Response

```json
{
  "quotation": {
    "id": 1,
    "company_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "quotation_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="見積書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[QuotationShowResponse](#schemaquotationshowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 見積書の更新

<a id="opIdquotations/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/quotations/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "quotation_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true
      }
    ]
  }'
```

`PUT /quotations/{id}`

見積書の更新をします。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "quotation_number": "string",
  "branch_no": 0,
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "quotation_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true
    }
  ]
}
```

<h3 id="見積書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|見積書ID|
|body|body|[QuotationRequest](#schemaquotationrequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» quotation_number|body|string|false|見積書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» quotation_date|body|string(date)|true|見積日|
|» expiration_date|body|string(date)|false|有効期限|
|» delivery_deadline|body|string|false|納品期限|
|» delivery_location|body|string|false|納品場所|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» quotation_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。。|
|» lines|body|[[QuotationRequest_lines](#schemaquotationrequest_lines)]|true|見積書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 200 Response

```json
{
  "quotation": {
    "id": 1,
    "company_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "quotation_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="見積書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[QuotationResponse](#schemaquotationresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 見積書の取消

<a id="opIdquotations/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/quotations/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /quotations/{id}/cancel`

指定された見積書を取消状態にします。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="見積書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|見積書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "quotation": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="見積書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[QuotationCancelStatusResponse](#schemaquotationcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された見積書の復元

<a id="opIdquotations/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/quotations/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /quotations/{id}/uncancel`

指定された取消済み見積書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された見積書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|見積書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "quotation": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された見積書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[QuotationCancelStatusResponse](#schemaquotationcancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

<h1 id="freee請求書-api-invoices">Invoices</h1>

請求書

## 請求書一覧の取得

<a id="opIdinvoices/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/invoices?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /invoices`

<h3 id="請求書一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|invoice_number|query|string|false|請求書番号|
|subject|query|string|false|件名|
|partner_ids|query|string|false|取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）|
|payment_status|query|string|false|決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）|
|deal_status|query|string|false|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|sending_status|query|string|false|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|query|string|false|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|start_billing_date|query|string(date)|false|請求日の開始日|
|end_billing_date|query|string(date)|false|請求日の終了日|
|start_payment_date|query|string(date)|false|入金期日の開始日|
|end_payment_date|query|string(date)|false|入金期日の終了日|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。|
|sales_management_origin|query|boolean|false|freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。|

#### Enumerated Values

|Parameter|Value|
|---|---|
|payment_status|settled|
|payment_status|unsettled|
|payment_status|canceled|
|payment_status|unprocessed|
|payment_status|failed|
|deal_status|registered|
|deal_status|unregistered|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|

> Example responses

> 200 Response

```json
{
  "invoices": [
    {
      "id": 1,
      "company_id": 1,
      "invoice_number": "string",
      "subject": "string",
      "template_id": 1,
      "billing_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "payment_date": "1970-01-01",
      "payment_type": "transfer",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "amount_brought_forward": -999999999999,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="請求書一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[InvoiceIndexResponse](#schemainvoiceindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 請求書の作成

<a id="opIdinvoices/create"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "include_amount_brought_forward": true,
    "amount_brought_forward": -999999999999,
    "invoice_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "partner_bank_account": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`POST /invoices`

請求書の作成をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "invoice_number": "string",
  "branch_no": 0,
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "include_amount_brought_forward": true,
  "amount_brought_forward": -999999999999,
  "invoice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "partner_bank_account": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="請求書の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InvoiceRequest](#schemainvoicerequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» invoice_number|body|string|false|請求書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» billing_date|body|string(date)|true|請求日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、請求日が補完されます。|
|» payment_date|body|string(date)|false|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|» payment_type|body|string|false|入金方法 (振込: transfer, 振替: direct_debit, カード: card)<br>- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» include_amount_brought_forward|body|boolean|false|繰越金額を含めるかどうか（true: 含める、false: 含めない）<br><br>- 含める場合は、amount_brought_forwardに繰越金額を指定することができます。<br>- 含める場合でamount_brought_forwardの指定がない場合は、 帳票に指定されたpartner_id, partner_codeに紐づく未決済残高が繰越金額として利用されます。|
|» amount_brought_forward|body|integer(int64)|false|繰越金額<br><br>include_amount_brought_forward に true を指定する場合のみ、指定できます。|
|» invoice_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|» partner_bank_account|body|string|false|取引先口座<br>- payment_typeがdirect_debitの場合に指定可能です。<br>- 入力がない場合またはpayment_typeがtransferの場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先口座が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» bank_account_to_transfer|body|string|false|振込先を上書きする場合に指定します。|
|» lines|body|[[InvoiceRequest_lines](#schemainvoicerequest_lines)]|true|請求書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_type|transfer|
|» payment_type|direct_debit|
|» payment_type|card|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 201 Response

```json
{
  "invoice": {
    "id": 1,
    "company_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "invoice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "amount_brought_forward": -999999999999,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "bank_account_to_transfer": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="請求書の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded and a new resource has been created as a result.|[InvoiceResponse](#schemainvoiceresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 使用可能な請求書の帳票テンプレート一覧の取得

<a id="opIdinvoices/templates/index"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/invoices/templates?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /invoices/templates`

使用可能な請求書の帳票テンプレート一覧を返します。

<h3 id="使用可能な請求書の帳票テンプレート一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="使用可能な請求書の帳票テンプレート一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TemplateIndexResponse](#schematemplateindexresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 請求書の取得

<a id="opIdinvoices/show"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/iv/invoices/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /invoices/{id}`

指定されたIDの請求書を返します。

<h3 id="請求書の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|integer|true|請求書ID|

> Example responses

> 200 Response

```json
{
  "invoice": {
    "id": 1,
    "company_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "invoice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "amount_brought_forward": -999999999999,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "bank_account_to_transfer": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="請求書の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[InvoiceShowResponse](#schemainvoiceshowresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 請求書の更新

<a id="opIdinvoices/update"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/invoices/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "template_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "subject": "string",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "include_amount_brought_forward": true,
    "amount_brought_forward": -999999999999,
    "invoice_note": "string",
    "memo": "string",
    "partner_id": 1,
    "partner_code": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "partner_bank_account": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "lines": [
      {
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ]
  }'
```

`PUT /invoices/{id}`

請求書の更新をします。

issue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。

tag_idsは10個まで設定可能です。

> Body parameter

```json
{
  "company_id": 1,
  "template_id": 1,
  "invoice_number": "string",
  "branch_no": 0,
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "include_amount_brought_forward": true,
  "amount_brought_forward": -999999999999,
  "invoice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "partner_bank_account": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

<h3 id="請求書の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|請求書ID|
|body|body|[InvoiceRequest](#schemainvoicerequest)|true|none|
|» company_id|body|integer(int64)|true|事業所ID|
|» template_id|body|integer(int64)|false|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|» invoice_number|body|string|false|請求書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|» branch_no|body|integer|false|枝番|
|» billing_date|body|string(date)|true|請求日|
|» issue_date|body|string(date)|false|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、請求日が補完されます。|
|» payment_date|body|string(date)|false|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|» payment_type|body|string|false|入金方法 (振込: transfer, 振替: direct_debit, カード: card)<br>- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。|
|» subject|body|string|false|件名|
|» tax_entry_method|body|string|true|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|» tax_fraction|body|string|true|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» line_amount_fraction|body|string \| null|false|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|» withholding_tax_entry_method|body|string|true|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|» include_amount_brought_forward|body|boolean|false|繰越金額を含めるかどうか（true: 含める、false: 含めない）<br><br>- 含める場合は、amount_brought_forwardに繰越金額を指定することができます。<br>- 含める場合でamount_brought_forwardの指定がない場合は、 帳票に指定されたpartner_id, partner_codeに紐づく未決済残高が繰越金額として利用されます。|
|» amount_brought_forward|body|integer(int64)|false|繰越金額<br><br>include_amount_brought_forward に true を指定する場合のみ、指定できます。|
|» invoice_note|body|string|false|備考|
|» memo|body|string|false|社内メモ|
|» partner_id|body|integer(int64)|false|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_code|body|string|false|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|» partner_title|body|string|true|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|» partner_address_zipcode|body|string|false|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|» partner_address_prefecture_code|body|integer|false|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|» partner_address_street_name1|body|string|false|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|» partner_address_street_name2|body|string|false|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|» partner_contact_department|body|string|false|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|» partner_contact_email_cc|body|string|false|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_email_to|body|string|false|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|» partner_contact_name|body|string|false|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|» partner_display_name|body|string|false|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|» partner_sending_method|body|string \| null|false|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|» partner_bank_account|body|string|false|取引先口座<br>- payment_typeがdirect_debitの場合に指定可能です。<br>- 入力がない場合またはpayment_typeがtransferの場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先口座が利用されます。|
|» company_contact_name|body|string|false|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|» company_name|body|string|false|自社名を上書きする場合に指定します。|
|» company_description|body|string|false|自社説明を上書きする場合に指定します。|
|» bank_account_to_transfer|body|string|false|振込先を上書きする場合に指定します。|
|» lines|body|[[InvoiceRequest_lines](#schemainvoicerequest_lines)]|true|請求書の明細行|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_type|transfer|
|» payment_type|direct_debit|
|» payment_type|card|
|» tax_entry_method|in|
|» tax_entry_method|out|
|» tax_fraction|omit|
|» tax_fraction|round_up|
|» tax_fraction|round|
|» line_amount_fraction|omit|
|» line_amount_fraction|round_up|
|» line_amount_fraction|round|
|» withholding_tax_entry_method|in|
|» withholding_tax_entry_method|out|
|» partner_title|御中|
|» partner_title|様|
|» partner_title|(空白)|
|» partner_title|（空白）|
|» partner_sending_method|email|
|» partner_sending_method|posting|
|» partner_sending_method|email_and_posting|

> Example responses

> 200 Response

```json
{
  "invoice": {
    "id": 1,
    "company_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "invoice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "amount_brought_forward": -999999999999,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "bank_account_to_transfer": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="請求書の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[InvoiceResponse](#schemainvoiceresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 請求書の取消

<a id="opIdinvoices/cancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/invoices/1/cancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /invoices/{id}/cancel`

指定された請求書を取消状態にします。

取引が紐づいている場合は取引も削除されます。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="請求書の取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|請求書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "invoice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="請求書の取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[InvoiceCancelStatusResponse](#schemainvoicecancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

## 取消された請求書の復元

<a id="opIdinvoices/uncancel"></a>

> Code samples

```bash
curl https://api.freee.co.jp/iv/invoices/1/uncancel \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`PUT /invoices/{id}/uncancel`

指定された取消済み請求書を復元します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="取消された請求書の復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|請求書ID|
|body|body|object|true|none|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "invoice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

> 400 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

> 404 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

<h3 id="取消された請求書の復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[InvoiceCancelStatusResponse](#schemainvoicecancelstatusresponse)|
|400|Bad Request|The server could not understand the request due to invalid syntax.|[badRequest](#schemabadrequest)|
|401|Unauthorized|Access is unauthorized.|[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden|Access is forbidden.|[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found|The server cannot find the requested resource.|[notfoundError](#schemanotfounderror)|
|500|Internal Server Error|Server error|[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Auth ( Scopes: write read )
</aside>

# Schemas

<h2 id="tocS_DeliverySlipCancelStatusResponse">DeliverySlipCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipcancelstatusresponse"></a>
<a id="schema_DeliverySlipCancelStatusResponse"></a>
<a id="tocSdeliveryslipcancelstatusresponse"></a>
<a id="tocsdeliveryslipcancelstatusresponse"></a>

```json
{
  "delivery_slip": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_slip|object|true|none|none|

<h2 id="tocS_DeliverySlipIndexResponse">DeliverySlipIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipindexresponse"></a>
<a id="schema_DeliverySlipIndexResponse"></a>
<a id="tocSdeliveryslipindexresponse"></a>
<a id="tocsdeliveryslipindexresponse"></a>

```json
{
  "delivery_slips": [
    {
      "id": 1,
      "company_id": 1,
      "delivery_slip_number": "string",
      "subject": "string",
      "template_id": 1,
      "delivery_slip_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_slips|[[DeliverySlipIndexResponse_delivery_slips](#schemadeliveryslipindexresponse_delivery_slips)]|true|none|none|

<h2 id="tocS_DeliverySlipIndexResponse_delivery_slips">DeliverySlipIndexResponse_delivery_slips</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipindexresponse_delivery_slips"></a>
<a id="schema_DeliverySlipIndexResponse_delivery_slips"></a>
<a id="tocSdeliveryslipindexresponse_delivery_slips"></a>
<a id="tocsdeliveryslipindexresponse_delivery_slips"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "delivery_slip_number": "string",
  "subject": "string",
  "template_id": 1,
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|納品書ID|
|company_id|integer(int64)|true|none|事業所ID|
|delivery_slip_number|string|true|none|納品書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|delivery_slip_date|string(date)|true|none|納品日|
|issue_date|string(date) \| null|false|none|発生日|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_DeliverySlipRequest">DeliverySlipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeliverysliprequest"></a>
<a id="schema_DeliverySlipRequest"></a>
<a id="tocSdeliverysliprequest"></a>
<a id="tocsdeliverysliprequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "delivery_slip_number": "string",
  "branch_no": 0,
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "delivery_slip_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|delivery_slip_number|string|false|none|納品書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|delivery_slip_date|string(date)|true|none|納品日|
|issue_date|string(date)|false|none|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、納品日が補完されます。|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string|true|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|delivery_slip_note|string|false|none|備考|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|partner_sending_method|string \| null|false|none|取引先への送付方法|
|company_contact_name|string|false|none|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。|
|lines|[[DeliverySlipRequest_lines](#schemadeliverysliprequest_lines)]|true|none|納品書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_DeliverySlipRequest_lines">DeliverySlipRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemadeliverysliprequest_lines"></a>
<a id="schema_DeliverySlipRequest_lines"></a>
<a id="tocSdeliverysliprequest_lines"></a>
<a id="tocsdeliverysliprequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税額計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|
|withholding|boolean|false|none|源泉徴収対象|
|account_item_id|integer|false|none|勘定科目ID（取引登録の下書き保存で利用されます。）|
|tax_code|integer|false|none|税区分コード（取引登録の下書き保存で利用されます。）|
|item_id|integer|false|none|品目ID（取引登録の下書き保存で利用されます。）|
|section_id|integer|false|none|部門ID<br><br>- 取引登録の下書き保存で利用されます。<br>- 親部門は利用できません。<br>- グループ管理で制限された部門は利用できません。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64)|false|none|セグメント１ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け プロフェッショナルプラン以上で利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_2_tag_id|integer(int64)|false|none|セグメント２ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_3_tag_id|integer(int64)|false|none|セグメント３ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_DeliverySlipResponse">DeliverySlipResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipresponse"></a>
<a id="schema_DeliverySlipResponse"></a>
<a id="tocSdeliveryslipresponse"></a>
<a id="tocsdeliveryslipresponse"></a>

```json
{
  "delivery_slip": {
    "id": 1,
    "company_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "delivery_slip_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_slip|[DeliverySlipResponse_delivery_slip](#schemadeliveryslipresponse_delivery_slip)|true|none|none|

<h2 id="tocS_DeliverySlipResponse_delivery_slip">DeliverySlipResponse_delivery_slip</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipresponse_delivery_slip"></a>
<a id="schema_DeliverySlipResponse_delivery_slip"></a>
<a id="tocSdeliveryslipresponse_delivery_slip"></a>
<a id="tocsdeliveryslipresponse_delivery_slip"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "delivery_slip_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "delivery_slip_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_bank_account": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ],
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|納品書ID|
|company_id|integer(int64)|true|none|事業所ID|
|delivery_slip_number|string|true|none|納品書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|delivery_slip_date|string(date)|true|none|納品日|
|issue_date|string(date) \| null|false|none|発生日|
|payment_date|string(date) \| null|false|none|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。|
|payment_type|string|false|none|入金方法 (振込: transfer, 振替: direct_debit)|
|delivery_slip_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|partner_bank_account|string|false|none|取引先口座|
|partner_sending_method|string \| null|false|none|取引先への送付方法|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|template|[DeliverySlipResponse_delivery_slip_template](#schemadeliveryslipresponse_delivery_slip_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[DeliverySlipResponse_delivery_slip_lines](#schemadeliveryslipresponse_delivery_slip_lines)]|true|none|納品書の明細行|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_type|transfer|
|payment_type|direct_debit|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_DeliverySlipResponse_delivery_slip_lines">DeliverySlipResponse_delivery_slip_lines</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipresponse_delivery_slip_lines"></a>
<a id="schema_DeliverySlipResponse_delivery_slip_lines"></a>
<a id="tocSdeliveryslipresponse_delivery_slip_lines"></a>
<a id="tocsdeliveryslipresponse_delivery_slip_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|
|account_item_id|integer \| null|false|none|勘定科目ID|
|tax_code|integer \| null|false|none|税区分コード|
|item_id|integer \| null|false|none|品目ID|
|section_id|integer \| null|false|none|部門ID|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64) \| null|false|none|セグメント１ID|
|segment_2_tag_id|integer(int64) \| null|false|none|セグメント２ID|
|segment_3_tag_id|integer(int64) \| null|false|none|セグメント３ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_DeliverySlipResponse_delivery_slip_template">DeliverySlipResponse_delivery_slip_template</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipresponse_delivery_slip_template"></a>
<a id="schema_DeliverySlipResponse_delivery_slip_template"></a>
<a id="tocSdeliveryslipresponse_delivery_slip_template"></a>
<a id="tocsdeliveryslipresponse_delivery_slip_template"></a>

```json
{
  "title": "string",
  "invoice_registration_number": "string",
  "company_name": "string",
  "company_description": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|納品書タイトル|
|invoice_registration_number|string|false|none|インボイス制度適格請求書発行事業者登録番号<br>- 先頭T数字13桁の固定14桁の文字列<br><a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|message|string|false|none|メッセージ|

<h2 id="tocS_DeliverySlipShowResponse">DeliverySlipShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipshowresponse"></a>
<a id="schema_DeliverySlipShowResponse"></a>
<a id="tocSdeliveryslipshowresponse"></a>
<a id="tocsdeliveryslipshowresponse"></a>

```json
{
  "delivery_slip": {
    "id": 1,
    "company_id": 1,
    "delivery_slip_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "delivery_slip_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "delivery_slip_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delivery_slip|[DeliverySlipShowResponse_delivery_slip](#schemadeliveryslipshowresponse_delivery_slip)|true|none|none|

<h2 id="tocS_DeliverySlipShowResponse_delivery_slip">DeliverySlipShowResponse_delivery_slip</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipshowresponse_delivery_slip"></a>
<a id="schema_DeliverySlipShowResponse_delivery_slip"></a>
<a id="tocSdeliveryslipshowresponse_delivery_slip"></a>
<a id="tocsdeliveryslipshowresponse_delivery_slip"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "delivery_slip_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "delivery_slip_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "delivery_slip_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|納品書ID|
|company_id|integer(int64)|true|none|事業所ID|
|delivery_slip_number|string|true|none|納品書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|delivery_slip_date|string(date)|true|none|納品日|
|issue_date|string(date) \| null|false|none|発生日|
|delivery_slip_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[DeliverySlipResponse_delivery_slip_template](#schemadeliveryslipresponse_delivery_slip_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[DeliverySlipShowResponse_delivery_slip_lines](#schemadeliveryslipshowresponse_delivery_slip_lines)]|true|none|納品書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_DeliverySlipShowResponse_delivery_slip_lines">DeliverySlipShowResponse_delivery_slip_lines</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryslipshowresponse_delivery_slip_lines"></a>
<a id="schema_DeliverySlipShowResponse_delivery_slip_lines"></a>
<a id="tocSdeliveryslipshowresponse_delivery_slip_lines"></a>
<a id="tocsdeliveryslipshowresponse_delivery_slip_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_InvoiceCancelStatusResponse">InvoiceCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecancelstatusresponse"></a>
<a id="schema_InvoiceCancelStatusResponse"></a>
<a id="tocSinvoicecancelstatusresponse"></a>
<a id="tocsinvoicecancelstatusresponse"></a>

```json
{
  "invoice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice|object|true|none|none|

<h2 id="tocS_InvoiceIndexResponse">InvoiceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceindexresponse"></a>
<a id="schema_InvoiceIndexResponse"></a>
<a id="tocSinvoiceindexresponse"></a>
<a id="tocsinvoiceindexresponse"></a>

```json
{
  "invoices": [
    {
      "id": 1,
      "company_id": 1,
      "invoice_number": "string",
      "subject": "string",
      "template_id": 1,
      "billing_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "payment_date": "1970-01-01",
      "payment_type": "transfer",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "amount_brought_forward": -999999999999,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoices|[[InvoiceIndexResponse_invoices](#schemainvoiceindexresponse_invoices)]|true|none|none|

<h2 id="tocS_InvoiceIndexResponse_invoices">InvoiceIndexResponse_invoices</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceindexresponse_invoices"></a>
<a id="schema_InvoiceIndexResponse_invoices"></a>
<a id="tocSinvoiceindexresponse_invoices"></a>
<a id="tocsinvoiceindexresponse_invoices"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "invoice_number": "string",
  "subject": "string",
  "template_id": 1,
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_brought_forward": -999999999999,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|請求書ID|
|company_id|integer(int64)|true|none|事業所ID|
|invoice_number|string|true|none|請求書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|billing_date|string(date)|true|none|請求日|
|issue_date|string(date) \| null|false|none|発生日|
|payment_date|string(date) \| null|false|none|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|payment_type|string|false|none|入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。<br>- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_brought_forward|number(double) \| null|true|none|繰越金額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_type|transfer|
|payment_type|direct_debit|
|payment_type|card|
|payment_type|cash|
|payment_type|bill_payable|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|payment_status|canceled|
|payment_status|unprocessed|
|payment_status|failed|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_InvoiceRequest">InvoiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvoicerequest"></a>
<a id="schema_InvoiceRequest"></a>
<a id="tocSinvoicerequest"></a>
<a id="tocsinvoicerequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "invoice_number": "string",
  "branch_no": 0,
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "include_amount_brought_forward": true,
  "amount_brought_forward": -999999999999,
  "invoice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "partner_bank_account": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|invoice_number|string|false|none|請求書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|billing_date|string(date)|true|none|請求日|
|issue_date|string(date)|false|none|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、請求日が補完されます。|
|payment_date|string(date)|false|none|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|payment_type|string|false|none|入金方法 (振込: transfer, 振替: direct_debit, カード: card)<br>- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string|true|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|include_amount_brought_forward|boolean|false|none|繰越金額を含めるかどうか（true: 含める、false: 含めない）<br><br>- 含める場合は、amount_brought_forwardに繰越金額を指定することができます。<br>- 含める場合でamount_brought_forwardの指定がない場合は、 帳票に指定されたpartner_id, partner_codeに紐づく未決済残高が繰越金額として利用されます。|
|amount_brought_forward|integer(int64)|false|none|繰越金額<br><br>include_amount_brought_forward に true を指定する場合のみ、指定できます。|
|invoice_note|string|false|none|備考|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|partner_sending_method|string \| null|false|none|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|partner_bank_account|string|false|none|取引先口座<br>- payment_typeがdirect_debitの場合に指定可能です。<br>- 入力がない場合またはpayment_typeがtransferの場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先口座が利用されます。|
|company_contact_name|string|false|none|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。|
|bank_account_to_transfer|string|false|none|振込先を上書きする場合に指定します。|
|lines|[[InvoiceRequest_lines](#schemainvoicerequest_lines)]|true|none|請求書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_type|transfer|
|payment_type|direct_debit|
|payment_type|card|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_InvoiceRequest_lines">InvoiceRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemainvoicerequest_lines"></a>
<a id="schema_InvoiceRequest_lines"></a>
<a id="tocSinvoicerequest_lines"></a>
<a id="tocsinvoicerequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|sales_date|string(date)|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税額計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|
|withholding|boolean|false|none|源泉徴収対象|
|account_item_id|integer|false|none|勘定科目ID（取引登録の下書き保存で利用されます。）|
|tax_code|integer|false|none|税区分コード（取引登録の下書き保存で利用されます。）|
|item_id|integer|false|none|品目ID（取引登録の下書き保存で利用されます。）|
|section_id|integer|false|none|部門ID<br><br>- 取引登録の下書き保存で利用されます。<br>- 親部門は利用できません。<br>- グループ管理で制限された部門は利用できません。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64)|false|none|セグメント１ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け プロフェッショナルプラン以上で利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_2_tag_id|integer(int64)|false|none|セグメント２ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_3_tag_id|integer(int64)|false|none|セグメント３ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_InvoiceResponse">InvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse"></a>
<a id="schema_InvoiceResponse"></a>
<a id="tocSinvoiceresponse"></a>
<a id="tocsinvoiceresponse"></a>

```json
{
  "invoice": {
    "id": 1,
    "company_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "invoice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "amount_brought_forward": -999999999999,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "bank_account_to_transfer": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice|[InvoiceResponse_invoice](#schemainvoiceresponse_invoice)|true|none|none|

<h2 id="tocS_InvoiceResponse_invoice">InvoiceResponse_invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse_invoice"></a>
<a id="schema_InvoiceResponse_invoice"></a>
<a id="tocSinvoiceresponse_invoice"></a>
<a id="tocsinvoiceresponse_invoice"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "invoice_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "invoice_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "amount_brought_forward": -999999999999,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_bank_account": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ],
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|請求書ID|
|company_id|integer(int64)|true|none|事業所ID|
|invoice_number|string|true|none|請求書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|billing_date|string(date)|true|none|請求日|
|issue_date|string(date) \| null|false|none|発生日|
|payment_date|string(date) \| null|false|none|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|payment_type|string|false|none|入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)<br>- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。<br>- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。|
|invoice_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|amount_brought_forward|number(double) \| null|true|none|繰越金額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|partner_bank_account|string|false|none|取引先口座|
|partner_sending_method|string \| null|false|none|取引先への送付方法|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|bank_account_to_transfer|string|false|none|振込先|
|template|[InvoiceResponse_invoice_template](#schemainvoiceresponse_invoice_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[InvoiceResponse_invoice_lines](#schemainvoiceresponse_invoice_lines)]|true|none|請求書の明細行|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_type|transfer|
|payment_type|direct_debit|
|payment_type|card|
|payment_type|cash|
|payment_type|bill_payable|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|payment_status|canceled|
|payment_status|unprocessed|
|payment_status|failed|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_InvoiceResponse_invoice_lines">InvoiceResponse_invoice_lines</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse_invoice_lines"></a>
<a id="schema_InvoiceResponse_invoice_lines"></a>
<a id="tocSinvoiceresponse_invoice_lines"></a>
<a id="tocsinvoiceresponse_invoice_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。|
|description|string|true|none|摘要（品名）|
|sales_date|string(date) \| null|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|
|account_item_id|integer \| null|false|none|勘定科目ID|
|tax_code|integer \| null|false|none|税区分コード|
|item_id|integer \| null|false|none|品目ID|
|section_id|integer \| null|false|none|部門ID|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64) \| null|false|none|セグメント１ID|
|segment_2_tag_id|integer(int64) \| null|false|none|セグメント２ID|
|segment_3_tag_id|integer(int64) \| null|false|none|セグメント３ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_InvoiceResponse_invoice_template">InvoiceResponse_invoice_template</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse_invoice_template"></a>
<a id="schema_InvoiceResponse_invoice_template"></a>
<a id="tocSinvoiceresponse_invoice_template"></a>
<a id="tocsinvoiceresponse_invoice_template"></a>

```json
{
  "title": "string",
  "invoice_registration_number": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|請求書タイトル|
|invoice_registration_number|string|false|none|インボイス制度適格請求書発行事業者登録番号<br>- 先頭T数字13桁の固定14桁の文字列<br><a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|bank_account_to_transfer|string|false|none|振込先|
|message|string|false|none|メッセージ|

<h2 id="tocS_InvoiceShowResponse">InvoiceShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceshowresponse"></a>
<a id="schema_InvoiceShowResponse"></a>
<a id="tocSinvoiceshowresponse"></a>
<a id="tocsinvoiceshowresponse"></a>

```json
{
  "invoice": {
    "id": 1,
    "company_id": 1,
    "invoice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "billing_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "payment_date": "1970-01-01",
    "payment_type": "transfer",
    "invoice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "amount_brought_forward": -999999999999,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_bank_account": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "bank_account_to_transfer": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice|[InvoiceShowResponse_invoice](#schemainvoiceshowresponse_invoice)|true|none|none|

<h2 id="tocS_InvoiceShowResponse_invoice">InvoiceShowResponse_invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceshowresponse_invoice"></a>
<a id="schema_InvoiceShowResponse_invoice"></a>
<a id="tocSinvoiceshowresponse_invoice"></a>
<a id="tocsinvoiceshowresponse_invoice"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "invoice_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "billing_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "payment_date": "1970-01-01",
  "payment_type": "transfer",
  "invoice_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "amount_brought_forward": -999999999999,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_bank_account": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "bank_account_to_transfer": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "bank_account_to_transfer": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|請求書ID|
|company_id|integer(int64)|true|none|事業所ID|
|invoice_number|string|true|none|請求書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|billing_date|string(date)|true|none|請求日|
|issue_date|string(date) \| null|false|none|発生日|
|payment_date|string(date) \| null|false|none|期日<br>- payment_typeがtransferの場合、入金期日に該当します。<br>- payment_typeがdirect_debitの場合、振替日に該当します。<br>- payment_typeがcardの場合、カード支払期日に該当します。|
|payment_type|string|false|none|入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)<br>- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。<br>- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。|
|invoice_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|amount_brought_forward|number(double) \| null|true|none|繰越金額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|partner_bank_account|string|false|none|取引先口座|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|bank_account_to_transfer|string|false|none|振込先|
|template|[InvoiceResponse_invoice_template](#schemainvoiceresponse_invoice_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[InvoiceShowResponse_invoice_lines](#schemainvoiceshowresponse_invoice_lines)]|true|none|請求書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_type|transfer|
|payment_type|direct_debit|
|payment_type|card|
|payment_type|cash|
|payment_type|bill_payable|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|payment_status|canceled|
|payment_status|unprocessed|
|payment_status|failed|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_InvoiceShowResponse_invoice_lines">InvoiceShowResponse_invoice_lines</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceshowresponse_invoice_lines"></a>
<a id="schema_InvoiceShowResponse_invoice_lines"></a>
<a id="tocSinvoiceshowresponse_invoice_lines"></a>
<a id="tocsinvoiceshowresponse_invoice_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|sales_date|string(date) \| null|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PaymentNoticeCancelStatusResponse">PaymentNoticeCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticecancelstatusresponse"></a>
<a id="schema_PaymentNoticeCancelStatusResponse"></a>
<a id="tocSpaymentnoticecancelstatusresponse"></a>
<a id="tocspaymentnoticecancelstatusresponse"></a>

```json
{
  "payment_notice": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_notice|object|true|none|none|

<h2 id="tocS_PaymentNoticeIndexResponse">PaymentNoticeIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeindexresponse"></a>
<a id="schema_PaymentNoticeIndexResponse"></a>
<a id="tocSpaymentnoticeindexresponse"></a>
<a id="tocspaymentnoticeindexresponse"></a>

```json
{
  "payment_notices": [
    {
      "id": 1,
      "company_id": 1,
      "payment_notice_number": "string",
      "subject": "string",
      "template_id": 1,
      "payment_notice_date": "1970-01-01",
      "collects_on": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_notices|[[PaymentNoticeIndexResponse_payment_notices](#schemapaymentnoticeindexresponse_payment_notices)]|true|none|none|

<h2 id="tocS_PaymentNoticeIndexResponse_payment_notices">PaymentNoticeIndexResponse_payment_notices</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeindexresponse_payment_notices"></a>
<a id="schema_PaymentNoticeIndexResponse_payment_notices"></a>
<a id="tocSpaymentnoticeindexresponse_payment_notices"></a>
<a id="tocspaymentnoticeindexresponse_payment_notices"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "payment_notice_number": "string",
  "subject": "string",
  "template_id": 1,
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|支払通知書ID|
|company_id|integer(int64)|true|none|事業所ID|
|payment_notice_number|string|true|none|支払通知書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|payment_notice_date|string(date)|true|none|支払通知書日付|
|collects_on|string(date) \| null|false|none|支払予定日|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_PaymentNoticeRequest">PaymentNoticeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticerequest"></a>
<a id="schema_PaymentNoticeRequest"></a>
<a id="tocSpaymentnoticerequest"></a>
<a id="tocspaymentnoticerequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "payment_notice_number": "string",
  "branch_no": 0,
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "payment_condition": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "payment_notice_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|payment_notice_number|string|false|none|支払通知書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|payment_notice_date|string(date)|true|none|支払通知書日付|
|collects_on|string(date)|false|none|支払予定日|
|payment_condition|string|false|none|支払方法|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|payment_notice_note|string|false|none|備考|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|company_contact_name|string|false|none|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。|
|lines|[[PaymentNoticeRequest_lines](#schemapaymentnoticerequest_lines)]|true|none|支払通知書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|

<h2 id="tocS_PaymentNoticeRequest_lines">PaymentNoticeRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticerequest_lines"></a>
<a id="schema_PaymentNoticeRequest_lines"></a>
<a id="tocSpaymentnoticerequest_lines"></a>
<a id="tocspaymentnoticerequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|sales_date|string(date)|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税率計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PaymentNoticeResponse">PaymentNoticeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeresponse"></a>
<a id="schema_PaymentNoticeResponse"></a>
<a id="tocSpaymentnoticeresponse"></a>
<a id="tocspaymentnoticeresponse"></a>

```json
{
  "payment_notice": {
    "id": 1,
    "company_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "payment_notice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_notice|[PaymentNoticeResponse_payment_notice](#schemapaymentnoticeresponse_payment_notice)|true|none|none|

<h2 id="tocS_PaymentNoticeResponse_payment_notice">PaymentNoticeResponse_payment_notice</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeresponse_payment_notice"></a>
<a id="schema_PaymentNoticeResponse_payment_notice"></a>
<a id="tocSpaymentnoticeresponse_payment_notice"></a>
<a id="tocspaymentnoticeresponse_payment_notice"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "payment_notice_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "payment_condition": "string",
  "payment_notice_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|支払通知書ID|
|company_id|integer(int64)|true|none|事業所ID|
|payment_notice_number|string|true|none|支払通知書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|payment_notice_date|string(date)|true|none|支払通知書日付|
|collects_on|string(date) \| null|false|none|支払予定日|
|payment_condition|string|false|none|支払方法|
|payment_notice_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[PaymentNoticeResponse_payment_notice_template](#schemapaymentnoticeresponse_payment_notice_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[PaymentNoticeResponse_payment_notice_lines](#schemapaymentnoticeresponse_payment_notice_lines)]|true|none|支払通知書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_PaymentNoticeResponse_payment_notice_lines">PaymentNoticeResponse_payment_notice_lines</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeresponse_payment_notice_lines"></a>
<a id="schema_PaymentNoticeResponse_payment_notice_lines"></a>
<a id="tocSpaymentnoticeresponse_payment_notice_lines"></a>
<a id="tocspaymentnoticeresponse_payment_notice_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行|
|description|string|true|none|摘要（品名）|
|sales_date|string(date) \| null|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PaymentNoticeResponse_payment_notice_template">PaymentNoticeResponse_payment_notice_template</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeresponse_payment_notice_template"></a>
<a id="schema_PaymentNoticeResponse_payment_notice_template"></a>
<a id="tocSpaymentnoticeresponse_payment_notice_template"></a>
<a id="tocspaymentnoticeresponse_payment_notice_template"></a>

```json
{
  "title": "string",
  "company_name": "string",
  "company_description": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|支払通知書タイトル|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|message|string|false|none|メッセージ|

<h2 id="tocS_PaymentNoticeShowResponse">PaymentNoticeShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeshowresponse"></a>
<a id="schema_PaymentNoticeShowResponse"></a>
<a id="tocSpaymentnoticeshowresponse"></a>
<a id="tocspaymentnoticeshowresponse"></a>

```json
{
  "payment_notice": {
    "id": 1,
    "company_id": 1,
    "payment_notice_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "payment_notice_date": "1970-01-01",
    "collects_on": "1970-01-01",
    "payment_condition": "string",
    "payment_notice_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "sales_date": "1970-01-01",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_notice|[PaymentNoticeShowResponse_payment_notice](#schemapaymentnoticeshowresponse_payment_notice)|true|none|none|

<h2 id="tocS_PaymentNoticeShowResponse_payment_notice">PaymentNoticeShowResponse_payment_notice</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeshowresponse_payment_notice"></a>
<a id="schema_PaymentNoticeShowResponse_payment_notice"></a>
<a id="tocSpaymentnoticeshowresponse_payment_notice"></a>
<a id="tocspaymentnoticeshowresponse_payment_notice"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "payment_notice_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "payment_notice_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "payment_condition": "string",
  "payment_notice_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "sales_date": "1970-01-01",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|支払通知書ID|
|company_id|integer(int64)|true|none|事業所ID|
|payment_notice_number|string|true|none|支払通知書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|payment_notice_date|string(date)|true|none|支払通知書日付|
|collects_on|string(date) \| null|false|none|支払予定日|
|payment_condition|string|false|none|支払方法|
|payment_notice_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[PaymentNoticeResponse_payment_notice_template](#schemapaymentnoticeresponse_payment_notice_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[PaymentNoticeShowResponse_payment_notice_lines](#schemapaymentnoticeshowresponse_payment_notice_lines)]|true|none|支払通知書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_PaymentNoticeShowResponse_payment_notice_lines">PaymentNoticeShowResponse_payment_notice_lines</h2>
<!-- backwards compatibility -->
<a id="schemapaymentnoticeshowresponse_payment_notice_lines"></a>
<a id="schema_PaymentNoticeShowResponse_payment_notice_lines"></a>
<a id="tocSpaymentnoticeshowresponse_payment_notice_lines"></a>
<a id="tocspaymentnoticeshowresponse_payment_notice_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "sales_date": "1970-01-01",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|sales_date|string(date) \| null|false|none|取引日|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PurchaseOrderCancelStatusResponse">PurchaseOrderCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseordercancelstatusresponse"></a>
<a id="schema_PurchaseOrderCancelStatusResponse"></a>
<a id="tocSpurchaseordercancelstatusresponse"></a>
<a id="tocspurchaseordercancelstatusresponse"></a>

```json
{
  "purchase_order": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_order|object|true|none|none|

<h2 id="tocS_PurchaseOrderIndexResponse">PurchaseOrderIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderindexresponse"></a>
<a id="schema_PurchaseOrderIndexResponse"></a>
<a id="tocSpurchaseorderindexresponse"></a>
<a id="tocspurchaseorderindexresponse"></a>

```json
{
  "purchase_orders": [
    {
      "id": 1,
      "company_id": 1,
      "purchase_order_number": "string",
      "subject": "string",
      "template_id": 1,
      "purchase_order_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "collects_on": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "payment_status": "settled",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_orders|[[PurchaseOrderIndexResponse_purchase_orders](#schemapurchaseorderindexresponse_purchase_orders)]|true|none|none|

<h2 id="tocS_PurchaseOrderIndexResponse_purchase_orders">PurchaseOrderIndexResponse_purchase_orders</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderindexresponse_purchase_orders"></a>
<a id="schema_PurchaseOrderIndexResponse_purchase_orders"></a>
<a id="tocSpurchaseorderindexresponse_purchase_orders"></a>
<a id="tocspurchaseorderindexresponse_purchase_orders"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "purchase_order_number": "string",
  "subject": "string",
  "template_id": 1,
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "collects_on": "1970-01-01",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "payment_status": "settled",
  "deal_id": 1,
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|発注書ID|
|company_id|integer(int64)|true|none|事業所ID|
|purchase_order_number|string|true|none|発注書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|purchase_order_date|string(date)|true|none|発注日|
|issue_date|string(date) \| null|false|none|発生日|
|collects_on|string(date) \| null|false|none|支払予定日|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|payment_status|settled|
|payment_status|unsettled|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_PurchaseOrderRequest">PurchaseOrderRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderrequest"></a>
<a id="schema_PurchaseOrderRequest"></a>
<a id="tocSpurchaseorderrequest"></a>
<a id="tocspurchaseorderrequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "purchase_order_number": "string",
  "branch_no": 0,
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "purchase_order_note": "string",
  "collects_on": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "payment_condition": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|purchase_order_number|string|false|none|発注書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|purchase_order_date|string(date)|true|none|発注日|
|issue_date|string(date)|false|none|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、発注日が補完されます。|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string|true|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|purchase_order_note|string|false|none|発注書備考|
|collects_on|string(date)|false|none|支払予定日<br>- 発注日（purchase_order_date）以降の日付を指定してください。|
|delivery_deadline|string|false|none|納品期限|
|delivery_location|string|false|none|納品場所|
|payment_condition|string|false|none|支払条件|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|company_contact_name|string|false|none|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。|
|lines|[[PurchaseOrderRequest_lines](#schemapurchaseorderrequest_lines)]|true|none|発注書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|

<h2 id="tocS_PurchaseOrderRequest_lines">PurchaseOrderRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderrequest_lines"></a>
<a id="schema_PurchaseOrderRequest_lines"></a>
<a id="tocSpurchaseorderrequest_lines"></a>
<a id="tocspurchaseorderrequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税額計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|
|withholding|boolean|false|none|源泉徴収対象|
|account_item_id|integer|false|none|勘定科目ID（取引登録の下書き保存で利用されます。）|
|tax_code|integer|false|none|税区分コード（取引登録の下書き保存で利用されます。）|
|item_id|integer|false|none|品目ID（取引登録の下書き保存で利用されます。）|
|section_id|integer|false|none|部門ID<br><br>- 取引登録の下書き保存で利用されます。<br>- 親部門は利用できません。<br>- グループ管理で制限された部門は利用できません。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64)|false|none|セグメント１ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け プロフェッショナルプラン以上で利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_2_tag_id|integer(int64)|false|none|セグメント２ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_3_tag_id|integer(int64)|false|none|セグメント３ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PurchaseOrderResponse">PurchaseOrderResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderresponse"></a>
<a id="schema_PurchaseOrderResponse"></a>
<a id="tocSpurchaseorderresponse"></a>
<a id="tocspurchaseorderresponse"></a>

```json
{
  "purchase_order": {
    "id": 1,
    "company_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "purchase_order_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_order|[PurchaseOrderResponse_purchase_order](#schemapurchaseorderresponse_purchase_order)|true|none|none|

<h2 id="tocS_PurchaseOrderResponse_purchase_order">PurchaseOrderResponse_purchase_order</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderresponse_purchase_order"></a>
<a id="schema_PurchaseOrderResponse_purchase_order"></a>
<a id="tocSpurchaseorderresponse_purchase_order"></a>
<a id="tocspurchaseorderresponse_purchase_order"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "purchase_order_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "purchase_order_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ],
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|発注書ID|
|company_id|integer(int64)|true|none|事業所ID|
|purchase_order_number|string|true|none|発注書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|purchase_order_date|string(date)|true|none|発注日|
|issue_date|string(date) \| null|false|none|発生日|
|purchase_order_note|string|true|none|発注書備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|template|[PurchaseOrderResponse_purchase_order_template](#schemapurchaseorderresponse_purchase_order_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[PurchaseOrderResponse_purchase_order_lines](#schemapurchaseorderresponse_purchase_order_lines)]|true|none|発注書の明細行|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|

<h2 id="tocS_PurchaseOrderResponse_purchase_order_lines">PurchaseOrderResponse_purchase_order_lines</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderresponse_purchase_order_lines"></a>
<a id="schema_PurchaseOrderResponse_purchase_order_lines"></a>
<a id="tocSpurchaseorderresponse_purchase_order_lines"></a>
<a id="tocspurchaseorderresponse_purchase_order_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|
|account_item_id|integer \| null|false|none|勘定科目ID|
|tax_code|integer \| null|false|none|税区分コード|
|item_id|integer \| null|false|none|品目ID|
|section_id|integer \| null|false|none|部門ID|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64) \| null|false|none|セグメント１ID|
|segment_2_tag_id|integer(int64) \| null|false|none|セグメント２ID|
|segment_3_tag_id|integer(int64) \| null|false|none|セグメント３ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_PurchaseOrderResponse_purchase_order_template">PurchaseOrderResponse_purchase_order_template</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderresponse_purchase_order_template"></a>
<a id="schema_PurchaseOrderResponse_purchase_order_template"></a>
<a id="tocSpurchaseorderresponse_purchase_order_template"></a>
<a id="tocspurchaseorderresponse_purchase_order_template"></a>

```json
{
  "title": "string",
  "invoice_registration_number": "string",
  "company_name": "string",
  "company_description": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|発注書タイトル|
|invoice_registration_number|string|false|none|インボイス制度適格請求書発行事業者登録番号<br>- 先頭T数字13桁の固定14桁の文字列<br><a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|message|string|false|none|メッセージ|

<h2 id="tocS_PurchaseOrderShowResponse">PurchaseOrderShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseordershowresponse"></a>
<a id="schema_PurchaseOrderShowResponse"></a>
<a id="tocSpurchaseordershowresponse"></a>
<a id="tocspurchaseordershowresponse"></a>

```json
{
  "purchase_order": {
    "id": 1,
    "company_id": 1,
    "purchase_order_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "purchase_order_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "purchase_order_note": "string",
    "order_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "payment_condition": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_order|[PurchaseOrderShowResponse_purchase_order](#schemapurchaseordershowresponse_purchase_order)|true|none|none|

<h2 id="tocS_PurchaseOrderShowResponse_purchase_order">PurchaseOrderShowResponse_purchase_order</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseordershowresponse_purchase_order"></a>
<a id="schema_PurchaseOrderShowResponse_purchase_order"></a>
<a id="tocSpurchaseordershowresponse_purchase_order"></a>
<a id="tocspurchaseordershowresponse_purchase_order"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "purchase_order_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "purchase_order_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "purchase_order_note": "string",
  "order_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "payment_condition": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|発注書ID|
|company_id|integer(int64)|true|none|事業所ID|
|purchase_order_number|string|true|none|発注書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|purchase_order_date|string(date)|true|none|発注日|
|issue_date|string(date) \| null|false|none|発生日|
|purchase_order_note|string|true|none|発注書備考|
|order_date|string(date) \| null|false|none|発注日|
|delivery_deadline|string \| null|false|none|納品期限|
|delivery_location|string \| null|false|none|納品場所|
|payment_condition|string \| null|false|none|支払条件|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[PurchaseOrderResponse_purchase_order_template](#schemapurchaseorderresponse_purchase_order_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[PurchaseOrderShowResponse_purchase_order_lines](#schemapurchaseordershowresponse_purchase_order_lines)]|true|none|発注書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_PurchaseOrderShowResponse_purchase_order_lines">PurchaseOrderShowResponse_purchase_order_lines</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseordershowresponse_purchase_order_lines"></a>
<a id="schema_PurchaseOrderShowResponse_purchase_order_lines"></a>
<a id="tocSpurchaseordershowresponse_purchase_order_lines"></a>
<a id="tocspurchaseordershowresponse_purchase_order_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_QuotationCancelStatusResponse">QuotationCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotationcancelstatusresponse"></a>
<a id="schema_QuotationCancelStatusResponse"></a>
<a id="tocSquotationcancelstatusresponse"></a>
<a id="tocsquotationcancelstatusresponse"></a>

```json
{
  "quotation": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotation|object|true|none|none|

<h2 id="tocS_QuotationIndexResponse">QuotationIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotationindexresponse"></a>
<a id="schema_QuotationIndexResponse"></a>
<a id="tocSquotationindexresponse"></a>
<a id="tocsquotationindexresponse"></a>

```json
{
  "quotations": [
    {
      "id": 1,
      "company_id": 1,
      "quotation_number": "string",
      "subject": "string",
      "template_id": 1,
      "quotation_date": "1970-01-01",
      "expiration_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "cancel_status": "canceled",
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com",
      "sales_management_origin": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotations|[[QuotationIndexResponse_quotations](#schemaquotationindexresponse_quotations)]|true|none|none|

<h2 id="tocS_QuotationIndexResponse_quotations">QuotationIndexResponse_quotations</h2>
<!-- backwards compatibility -->
<a id="schemaquotationindexresponse_quotations"></a>
<a id="schema_QuotationIndexResponse_quotations"></a>
<a id="tocSquotationindexresponse_quotations"></a>
<a id="tocsquotationindexresponse_quotations"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "quotation_number": "string",
  "subject": "string",
  "template_id": 1,
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|見積書ID|
|company_id|integer(int64)|true|none|事業所ID|
|quotation_number|string|true|none|見積書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|quotation_date|string(date)|true|none|見積日|
|expiration_date|string(date) \| null|false|none|有効期限|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_QuotationRequest">QuotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquotationrequest"></a>
<a id="schema_QuotationRequest"></a>
<a id="tocSquotationrequest"></a>
<a id="tocsquotationrequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "quotation_number": "string",
  "branch_no": 0,
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "quotation_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|quotation_number|string|false|none|見積書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|quotation_date|string(date)|true|none|見積日|
|expiration_date|string(date)|false|none|有効期限|
|delivery_deadline|string|false|none|納品期限|
|delivery_location|string|false|none|納品場所|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string|true|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|quotation_note|string|false|none|備考|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）<br>- 入力がない場合、メールテンプレートに指定されたCCが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。<br>- カンマ区切りで複数メールアドレスに送付可能です。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|partner_sending_method|string \| null|false|none|取引先への送付方法<br>- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。<br>- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。|
|company_contact_name|string|false|none|自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。。|
|lines|[[QuotationRequest_lines](#schemaquotationrequest_lines)]|true|none|見積書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_QuotationRequest_lines">QuotationRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemaquotationrequest_lines"></a>
<a id="schema_QuotationRequest_lines"></a>
<a id="tocSquotationrequest_lines"></a>
<a id="tocsquotationrequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税率計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|
|withholding|boolean|false|none|源泉徴収対象|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_QuotationResponse">QuotationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotationresponse"></a>
<a id="schema_QuotationResponse"></a>
<a id="tocSquotationresponse"></a>
<a id="tocsquotationresponse"></a>

```json
{
  "quotation": {
    "id": 1,
    "company_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "quotation_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_email_cc": "string",
    "partner_contact_email_to": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "partner_sending_method": "email",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotation|[QuotationResponse_quotation](#schemaquotationresponse_quotation)|true|none|none|

<h2 id="tocS_QuotationResponse_quotation">QuotationResponse_quotation</h2>
<!-- backwards compatibility -->
<a id="schemaquotationresponse_quotation"></a>
<a id="schema_QuotationResponse_quotation"></a>
<a id="tocSquotationresponse_quotation"></a>
<a id="tocsquotationresponse_quotation"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "quotation_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "quotation_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_email_cc": "string",
  "partner_contact_email_to": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "partner_sending_method": "email",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|見積書ID|
|company_id|integer(int64)|true|none|事業所ID|
|quotation_number|string|true|none|見積書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|quotation_date|string(date)|true|none|見積日|
|expiration_date|string(date) \| null|false|none|有効期限|
|delivery_deadline|string|true|none|納品期限|
|delivery_location|string|true|none|納品場所|
|quotation_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_email_cc|string|false|none|取引先担当者メールアドレス（CC）|
|partner_contact_email_to|string|false|none|取引先担当者メールアドレス（TO）|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|partner_sending_method|string \| null|false|none|取引先への送付方法|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|template|[QuotationResponse_quotation_template](#schemaquotationresponse_quotation_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[QuotationResponse_quotation_lines](#schemaquotationresponse_quotation_lines)]|true|none|見積書の明細行|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_sending_method|email|
|partner_sending_method|posting|
|partner_sending_method|email_and_posting|

<h2 id="tocS_QuotationResponse_quotation_lines">QuotationResponse_quotation_lines</h2>
<!-- backwards compatibility -->
<a id="schemaquotationresponse_quotation_lines"></a>
<a id="schema_QuotationResponse_quotation_lines"></a>
<a id="tocSquotationresponse_quotation_lines"></a>
<a id="tocsquotationresponse_quotation_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_QuotationResponse_quotation_template">QuotationResponse_quotation_template</h2>
<!-- backwards compatibility -->
<a id="schemaquotationresponse_quotation_template"></a>
<a id="schema_QuotationResponse_quotation_template"></a>
<a id="tocSquotationresponse_quotation_template"></a>
<a id="tocsquotationresponse_quotation_template"></a>

```json
{
  "title": "string",
  "company_name": "string",
  "company_description": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|見積書タイトル|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|message|string|false|none|メッセージ|

<h2 id="tocS_QuotationShowResponse">QuotationShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotationshowresponse"></a>
<a id="schema_QuotationShowResponse"></a>
<a id="tocSquotationshowresponse"></a>
<a id="tocsquotationshowresponse"></a>

```json
{
  "quotation": {
    "id": 1,
    "company_id": 1,
    "quotation_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "quotation_date": "1970-01-01",
    "expiration_date": "1970-01-01",
    "delivery_deadline": "string",
    "delivery_location": "string",
    "quotation_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "cancel_status": "canceled",
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com",
    "sales_management_origin": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotation|[QuotationShowResponse_quotation](#schemaquotationshowresponse_quotation)|true|none|none|

<h2 id="tocS_QuotationShowResponse_quotation">QuotationShowResponse_quotation</h2>
<!-- backwards compatibility -->
<a id="schemaquotationshowresponse_quotation"></a>
<a id="schema_QuotationShowResponse_quotation"></a>
<a id="tocSquotationshowresponse_quotation"></a>
<a id="tocsquotationshowresponse_quotation"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "quotation_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "quotation_date": "1970-01-01",
  "expiration_date": "1970-01-01",
  "delivery_deadline": "string",
  "delivery_location": "string",
  "quotation_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "cancel_status": "canceled",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com",
  "sales_management_origin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|見積書ID|
|company_id|integer(int64)|true|none|事業所ID|
|quotation_number|string|true|none|見積書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|quotation_date|string(date)|true|none|見積日|
|expiration_date|string(date) \| null|false|none|有効期限|
|delivery_deadline|string|true|none|納品期限|
|delivery_location|string|true|none|納品場所|
|quotation_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[QuotationResponse_quotation_template](#schemaquotationresponse_quotation_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[QuotationShowResponse_quotation_lines](#schemaquotationshowresponse_quotation_lines)]|true|none|見積書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|
|sales_management_origin|boolean|false|none|freee販売から作成された帳票かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|cancel_status|canceled|
|cancel_status|uncanceled|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_QuotationShowResponse_quotation_lines">QuotationShowResponse_quotation_lines</h2>
<!-- backwards compatibility -->
<a id="schemaquotationshowresponse_quotation_lines"></a>
<a id="schema_QuotationShowResponse_quotation_lines"></a>
<a id="tocSquotationshowresponse_quotation_lines"></a>
<a id="tocsquotationshowresponse_quotation_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_ReceiptCancelStatusResponse">ReceiptCancelStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemareceiptcancelstatusresponse"></a>
<a id="schema_ReceiptCancelStatusResponse"></a>
<a id="tocSreceiptcancelstatusresponse"></a>
<a id="tocsreceiptcancelstatusresponse"></a>

```json
{
  "receipt": {
    "id": 1,
    "cancel_status": "canceled"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receipt|object|true|none|none|

<h2 id="tocS_ReceiptIndexResponse">ReceiptIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemareceiptindexresponse"></a>
<a id="schema_ReceiptIndexResponse"></a>
<a id="tocSreceiptindexresponse"></a>
<a id="tocsreceiptindexresponse"></a>

```json
{
  "receipts": [
    {
      "id": 1,
      "company_id": 1,
      "receipt_number": "string",
      "subject": "string",
      "template_id": 1,
      "receipt_date": "1970-01-01",
      "issue_date": "1970-01-01",
      "memo": "string",
      "sending_status": "sent",
      "payment_status": "settled",
      "cancel_status": "canceled",
      "deal_status": "registered",
      "deal_id": 1,
      "total_amount": 0,
      "amount_withholding_tax": 0,
      "amount_including_tax": 0,
      "amount_excluding_tax": 0,
      "amount_tax": 0,
      "partner_id": 1,
      "partner_code": "string",
      "partner_name": "string",
      "partner_display_name": "string",
      "company_contact_name": "string",
      "email_url_file_downloaded_at": "string",
      "email_url_file_downloaded_status": "downloaded",
      "report_url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receipts|[[ReceiptIndexResponse_receipts](#schemareceiptindexresponse_receipts)]|true|none|none|

<h2 id="tocS_ReceiptIndexResponse_receipts">ReceiptIndexResponse_receipts</h2>
<!-- backwards compatibility -->
<a id="schemareceiptindexresponse_receipts"></a>
<a id="schema_ReceiptIndexResponse_receipts"></a>
<a id="tocSreceiptindexresponse_receipts"></a>
<a id="tocsreceiptindexresponse_receipts"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "receipt_number": "string",
  "subject": "string",
  "template_id": 1,
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "total_amount": 0,
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|領収書ID|
|company_id|integer(int64)|true|none|事業所ID|
|receipt_number|string|true|none|領収書番号|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|receipt_date|string(date)|true|none|領収日|
|issue_date|string(date) \| null|false|none|発生日|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|total_amount|number(double)|true|none|合計金額|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者 (デフォルト: 表示ユーザー名)|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_ReceiptRequest">ReceiptRequest</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrequest"></a>
<a id="schema_ReceiptRequest"></a>
<a id="tocSreceiptrequest"></a>
<a id="tocsreceiptrequest"></a>

```json
{
  "company_id": 1,
  "template_id": 1,
  "receipt_number": "string",
  "branch_no": 0,
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "subject": "string",
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "receipt_note": "string",
  "memo": "string",
  "partner_id": 1,
  "partner_code": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "lines": [
    {
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|template_id|integer(int64)|false|none|帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）|
|receipt_number|string|false|none|領収書番号<br><br>- 採番の設定が、[自動採番する]の場合、指定できません。<br>- 採番の設定が、[自動採番する]以外の場合、必須になります。|
|branch_no|integer|false|none|枝番|
|receipt_date|string(date)|true|none|領収日|
|issue_date|string(date)|false|none|発生日（取引登録の下書き保存で利用されます。）<br>- 入力がない場合、領収日が補完されます。|
|subject|string|false|none|件名|
|tax_entry_method|string|true|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string|true|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string|true|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|receipt_note|string|false|none|備考|
|memo|string|false|none|社内メモ|
|partner_id|integer(int64)|false|none|取引先ID<br><br>取引先IDと取引先コードはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_code|string|false|none|取引先コード<br><br>取引先コードと取引先IDはどちらか一方を必ず指定してください。<br><br><a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>|
|partner_title|string|true|none|敬称（御中、様、(空白)の3つから選択）<br>- [非推奨]全角カッコの（空白）は削除予定です。<br>- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。|
|partner_address_zipcode|string|false|none|郵便番号<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。|
|partner_contact_department|string|false|none|取引先部署<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。|
|partner_contact_name|string|false|none|取引先担当者名<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。<br>- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。|
|company_contact_name|string|false|none|自社担当者(デフォルトは表示ユーザー名が補完されます)|
|company_name|string|false|none|自社名を上書きする場合に指定します。|
|company_description|string|false|none|自社説明を上書きする場合に指定します。|
|lines|[[ReceiptRequest_lines](#schemareceiptrequest_lines)]|true|none|領収書の明細行|

#### Enumerated Values

|Property|Value|
|---|---|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|partner_title|（空白）|

<h2 id="tocS_ReceiptRequest_lines">ReceiptRequest_lines</h2>
<!-- backwards compatibility -->
<a id="schemareceiptrequest_lines"></a>
<a id="schema_ReceiptRequest_lines"></a>
<a id="tocSreceiptrequest_lines"></a>
<a id="tocsreceiptrequest_lines"></a>

```json
{
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|明細の種類<br>- item: 品目行<br>- tax_rate、quantityは必須になります。<br>- text: テキスト行<br>- descriptionのみ入力可能です。<br>- 入力がない場合、itemが利用されます。|
|description|string|false|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number|false|none|税率（%）（帳票の税額計算に用います。）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。|
|withholding|boolean|false|none|源泉徴収対象|
|account_item_id|integer|false|none|勘定科目ID（取引登録の下書き保存で利用されます。）|
|tax_code|integer|false|none|税区分コード（取引登録の下書き保存で利用されます。）|
|item_id|integer|false|none|品目ID（取引登録の下書き保存で利用されます。）|
|section_id|integer|false|none|部門ID<br><br>- 取引登録の下書き保存で利用されます。<br>- 親部門は利用できません。<br>- グループ管理で制限された部門は利用できません。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64)|false|none|セグメント１ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け プロフェッショナルプラン以上で利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_2_tag_id|integer(int64)|false|none|セグメント２ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|
|segment_3_tag_id|integer(int64)|false|none|セグメント３ID<br><br>- 取引登録の下書き保存で利用されます。<br>- freee会計法人向け エンタープライズプランで利用可能です。<br><br><br><a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_ReceiptResponse">ReceiptResponse</h2>
<!-- backwards compatibility -->
<a id="schemareceiptresponse"></a>
<a id="schema_ReceiptResponse"></a>
<a id="tocSreceiptresponse"></a>
<a id="tocsreceiptresponse"></a>

```json
{
  "receipt": {
    "id": 1,
    "company_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "receipt_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0,
        "account_item_id": 1,
        "tax_code": 0,
        "item_id": 1,
        "section_id": 1,
        "tag_ids": [
          0
        ],
        "segment_1_tag_id": 1,
        "segment_2_tag_id": 1,
        "segment_3_tag_id": 1
      }
    ],
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receipt|[ReceiptResponse_receipt](#schemareceiptresponse_receipt)|true|none|none|

<h2 id="tocS_ReceiptResponse_receipt">ReceiptResponse_receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceiptresponse_receipt"></a>
<a id="schema_ReceiptResponse_receipt"></a>
<a id="tocSreceiptresponse_receipt"></a>
<a id="tocsreceiptresponse_receipt"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "receipt_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "receipt_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0,
      "account_item_id": 1,
      "tax_code": 0,
      "item_id": 1,
      "section_id": 1,
      "tag_ids": [
        0
      ],
      "segment_1_tag_id": 1,
      "segment_2_tag_id": 1,
      "segment_3_tag_id": 1
    }
  ],
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|領収書ID|
|company_id|integer(int64)|true|none|事業所ID|
|receipt_number|string|true|none|領収書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|receipt_date|string(date)|true|none|領収日|
|issue_date|string(date) \| null|false|none|発生日|
|receipt_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|template|[ReceiptResponse_receipt_template](#schemareceiptresponse_receipt_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[ReceiptResponse_receipt_lines](#schemareceiptresponse_receipt_lines)]|true|none|領収書の明細行|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|

<h2 id="tocS_ReceiptResponse_receipt_lines">ReceiptResponse_receipt_lines</h2>
<!-- backwards compatibility -->
<a id="schemareceiptresponse_receipt_lines"></a>
<a id="schema_ReceiptResponse_receipt_lines"></a>
<a id="tocSreceiptresponse_receipt_lines"></a>
<a id="tocsreceiptresponse_receipt_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0,
  "account_item_id": 1,
  "tax_code": 0,
  "item_id": 1,
  "section_id": 1,
  "tag_ids": [
    0
  ],
  "segment_1_tag_id": 1,
  "segment_2_tag_id": 1,
  "segment_3_tag_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|
|account_item_id|integer \| null|false|none|勘定科目ID|
|tax_code|integer \| null|false|none|税区分コード|
|item_id|integer \| null|false|none|品目ID|
|section_id|integer \| null|false|none|部門ID|
|tag_ids|[integer]|false|none|none|
|segment_1_tag_id|integer(int64) \| null|false|none|セグメント１ID|
|segment_2_tag_id|integer(int64) \| null|false|none|セグメント２ID|
|segment_3_tag_id|integer(int64) \| null|false|none|セグメント３ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_ReceiptResponse_receipt_template">ReceiptResponse_receipt_template</h2>
<!-- backwards compatibility -->
<a id="schemareceiptresponse_receipt_template"></a>
<a id="schema_ReceiptResponse_receipt_template"></a>
<a id="tocSreceiptresponse_receipt_template"></a>
<a id="tocsreceiptresponse_receipt_template"></a>

```json
{
  "title": "string",
  "invoice_registration_number": "string",
  "company_name": "string",
  "company_description": "string",
  "message": "string"
}
```

帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|領収書タイトル|
|invoice_registration_number|string|false|none|インボイス制度適格請求書発行事業者登録番号<br>- 先頭T数字13桁の固定14桁の文字列<br><a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>|
|company_name|string|false|none|自社名|
|company_description|string|false|none|自社情報|
|message|string|false|none|メッセージ|

<h2 id="tocS_ReceiptShowResponse">ReceiptShowResponse</h2>
<!-- backwards compatibility -->
<a id="schemareceiptshowresponse"></a>
<a id="schema_ReceiptShowResponse"></a>
<a id="tocSreceiptshowresponse"></a>
<a id="tocsreceiptshowresponse"></a>

```json
{
  "receipt": {
    "id": 1,
    "company_id": 1,
    "receipt_number": "string",
    "branch_no": 0,
    "subject": "string",
    "template_id": 1,
    "template_name": "string",
    "receipt_date": "1970-01-01",
    "issue_date": "1970-01-01",
    "receipt_note": "string",
    "memo": "string",
    "sending_status": "sent",
    "payment_status": "settled",
    "cancel_status": "canceled",
    "deal_status": "registered",
    "deal_id": 1,
    "tax_entry_method": "in",
    "tax_fraction": "omit",
    "line_amount_fraction": "omit",
    "withholding_tax_entry_method": "in",
    "total_amount": 0,
    "created_at": "string",
    "amount_withholding_tax": 0,
    "amount_including_tax": 0,
    "amount_excluding_tax": 0,
    "amount_tax": 0,
    "amount_including_tax_10": 0,
    "amount_excluding_tax_10": 0,
    "amount_tax_10": 0,
    "amount_including_tax_8": 0,
    "amount_excluding_tax_8": 0,
    "amount_tax_8": 0,
    "amount_including_tax_8_reduced": 0,
    "amount_excluding_tax_8_reduced": 0,
    "amount_tax_8_reduced": 0,
    "amount_including_tax_0": 0,
    "amount_excluding_tax_0": 0,
    "amount_tax_0": 0,
    "partner_id": 1,
    "partner_code": "string",
    "partner_name": "string",
    "partner_title": "御中",
    "partner_address_zipcode": "string",
    "partner_address_prefecture_code": -1,
    "partner_address_street_name1": "string",
    "partner_address_street_name2": "string",
    "partner_contact_department": "string",
    "partner_contact_name": "string",
    "partner_display_name": "string",
    "company_contact_name": "string",
    "company_name": "string",
    "company_description": "string",
    "template": {
      "title": "string",
      "invoice_registration_number": "string",
      "company_name": "string",
      "company_description": "string",
      "message": "string"
    },
    "lines": [
      {
        "id": 1,
        "type": "item",
        "description": "string",
        "unit": "string",
        "quantity": -99999999.999,
        "unit_price": "string",
        "tax_rate": 0,
        "reduced_tax_rate": true,
        "withholding": true,
        "amount_excluding_tax": 0
      }
    ],
    "email_url_file_downloaded_at": "string",
    "email_url_file_downloaded_status": "downloaded",
    "report_url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receipt|[ReceiptShowResponse_receipt](#schemareceiptshowresponse_receipt)|true|none|none|

<h2 id="tocS_ReceiptShowResponse_receipt">ReceiptShowResponse_receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceiptshowresponse_receipt"></a>
<a id="schema_ReceiptShowResponse_receipt"></a>
<a id="tocSreceiptshowresponse_receipt"></a>
<a id="tocsreceiptshowresponse_receipt"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "receipt_number": "string",
  "branch_no": 0,
  "subject": "string",
  "template_id": 1,
  "template_name": "string",
  "receipt_date": "1970-01-01",
  "issue_date": "1970-01-01",
  "receipt_note": "string",
  "memo": "string",
  "sending_status": "sent",
  "payment_status": "settled",
  "cancel_status": "canceled",
  "deal_status": "registered",
  "deal_id": 1,
  "tax_entry_method": "in",
  "tax_fraction": "omit",
  "line_amount_fraction": "omit",
  "withholding_tax_entry_method": "in",
  "total_amount": 0,
  "created_at": "string",
  "amount_withholding_tax": 0,
  "amount_including_tax": 0,
  "amount_excluding_tax": 0,
  "amount_tax": 0,
  "amount_including_tax_10": 0,
  "amount_excluding_tax_10": 0,
  "amount_tax_10": 0,
  "amount_including_tax_8": 0,
  "amount_excluding_tax_8": 0,
  "amount_tax_8": 0,
  "amount_including_tax_8_reduced": 0,
  "amount_excluding_tax_8_reduced": 0,
  "amount_tax_8_reduced": 0,
  "amount_including_tax_0": 0,
  "amount_excluding_tax_0": 0,
  "amount_tax_0": 0,
  "partner_id": 1,
  "partner_code": "string",
  "partner_name": "string",
  "partner_title": "御中",
  "partner_address_zipcode": "string",
  "partner_address_prefecture_code": -1,
  "partner_address_street_name1": "string",
  "partner_address_street_name2": "string",
  "partner_contact_department": "string",
  "partner_contact_name": "string",
  "partner_display_name": "string",
  "company_contact_name": "string",
  "company_name": "string",
  "company_description": "string",
  "template": {
    "title": "string",
    "invoice_registration_number": "string",
    "company_name": "string",
    "company_description": "string",
    "message": "string"
  },
  "lines": [
    {
      "id": 1,
      "type": "item",
      "description": "string",
      "unit": "string",
      "quantity": -99999999.999,
      "unit_price": "string",
      "tax_rate": 0,
      "reduced_tax_rate": true,
      "withholding": true,
      "amount_excluding_tax": 0
    }
  ],
  "email_url_file_downloaded_at": "string",
  "email_url_file_downloaded_status": "downloaded",
  "report_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|領収書ID|
|company_id|integer(int64)|true|none|事業所ID|
|receipt_number|string|true|none|領収書番号|
|branch_no|integer \| null|false|none|枝番|
|subject|string|true|none|件名|
|template_id|integer(int64)|false|none|帳票テンプレートID|
|template_name|string|false|none|帳票テンプレート名|
|receipt_date|string(date)|true|none|領収日|
|issue_date|string(date) \| null|false|none|発生日|
|receipt_note|string|true|none|備考|
|memo|string|true|none|社内メモ|
|sending_status|string|true|none|送付ステータス（sent: 送付済み、 unsent: 送付待ち）|
|payment_status|string|true|none|決済ステータス（unsettled: 決済待ち, settled: 決済済み）|
|cancel_status|string|true|none|取消済み（canceled: 該当する、 uncanceled: 該当しない）|
|deal_status|string|true|none|取引ステータス（registered: 登録済み、 unregistered: 登録待ち）|
|deal_id|integer(int64) \| null|false|none|取引ID （deal_statusがunregisteredの場合、nullになります。）|
|tax_entry_method|string \| null|false|none|消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））|
|tax_fraction|string \| null|false|none|消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|line_amount_fraction|string \| null|false|none|金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）|
|withholding_tax_entry_method|string \| null|false|none|源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）|
|total_amount|number(double)|true|none|合計金額|
|created_at|string|true|none|作成日時|
|amount_withholding_tax|number \| null|false|none|源泉所得税|
|amount_including_tax|number(double)|true|none|税込金額|
|amount_excluding_tax|number|true|none|小計（税別）|
|amount_tax|number|true|none|消費税額|
|amount_including_tax_10|number(double) \| null|false|none|10%対象 税込|
|amount_excluding_tax_10|number(double) \| null|false|none|10%対象 税抜|
|amount_tax_10|number(double) \| null|false|none|10%対象 消費税|
|amount_including_tax_8|number(double) \| null|false|none|8%対象 税込|
|amount_excluding_tax_8|number(double) \| null|false|none|8%対象 税抜|
|amount_tax_8|number(double) \| null|false|none|8%対象 消費税|
|amount_including_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税込|
|amount_excluding_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 税抜|
|amount_tax_8_reduced|number(double) \| null|false|none|軽減税率8%対象 消費税|
|amount_including_tax_0|number(double) \| null|false|none|0%対象 税込|
|amount_excluding_tax_0|number(double) \| null|false|none|0%対象 税抜|
|amount_tax_0|number(double) \| null|false|none|0%対象 消費税|
|partner_id|integer(int64)|true|none|取引先ID|
|partner_code|string \| null|false|none|取引先コード|
|partner_name|string|false|none|取引先名<br>- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。|
|partner_title|string|false|none|敬称（御中、様、(空白)の3つから選択）|
|partner_address_zipcode|string|false|none|郵便番号|
|partner_address_prefecture_code|integer|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|partner_address_street_name1|string|false|none|取引先 市区町村・番地|
|partner_address_street_name2|string|false|none|取引先 建物名・部屋番号など|
|partner_contact_department|string|false|none|取引先部署|
|partner_contact_name|string|false|none|取引先担当者名|
|partner_display_name|string|false|none|取引先宛名<br>- 帳票の宛名に利用されます。|
|company_contact_name|string|false|none|自社担当者名|
|company_name|string|false|none|自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)|
|company_description|string|false|none|自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)|
|template|[ReceiptResponse_receipt_template](#schemareceiptresponse_receipt_template)|false|none|帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）|
|lines|[[ReceiptShowResponse_receipt_lines](#schemareceiptshowresponse_receipt_lines)]|true|none|領収書の明細行|
|email_url_file_downloaded_at|string(string) \| null|false|none|URL共有で送付された送付先のメールのダウンロード時刻|
|email_url_file_downloaded_status|string \| null|false|none|URL共有で送付された送付先のメールのダウンロードステータス|
|report_url|string(uri)|true|none|帳票詳細ページのURL|

#### Enumerated Values

|Property|Value|
|---|---|
|sending_status|sent|
|sending_status|unsent|
|payment_status|settled|
|payment_status|unsettled|
|cancel_status|canceled|
|cancel_status|uncanceled|
|deal_status|registered|
|deal_status|unregistered|
|tax_entry_method|in|
|tax_entry_method|out|
|tax_fraction|omit|
|tax_fraction|round_up|
|tax_fraction|round|
|line_amount_fraction|omit|
|line_amount_fraction|round_up|
|line_amount_fraction|round|
|withholding_tax_entry_method|in|
|withholding_tax_entry_method|out|
|partner_title|御中|
|partner_title|様|
|partner_title|(空白)|
|email_url_file_downloaded_status|downloaded|
|email_url_file_downloaded_status|undownloaded|

<h2 id="tocS_ReceiptShowResponse_receipt_lines">ReceiptShowResponse_receipt_lines</h2>
<!-- backwards compatibility -->
<a id="schemareceiptshowresponse_receipt_lines"></a>
<a id="schema_ReceiptShowResponse_receipt_lines"></a>
<a id="tocSreceiptshowresponse_receipt_lines"></a>
<a id="tocsreceiptshowresponse_receipt_lines"></a>

```json
{
  "id": 1,
  "type": "item",
  "description": "string",
  "unit": "string",
  "quantity": -99999999.999,
  "unit_price": "string",
  "tax_rate": 0,
  "reduced_tax_rate": true,
  "withholding": true,
  "amount_excluding_tax": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|明細行ID|
|type|string|true|none|明細の種類<br>- item: 品目行<br>- text: テキスト行<br>- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。|
|description|string|true|none|摘要（品名）|
|unit|string|false|none|明細の単位名|
|quantity|number \| null|false|none|明細の数量 (整数部は8桁まで、小数部は3桁まで)|
|unit_price|string \| null|false|none|明細の単価 (整数部は13桁まで、小数部は3桁まで)|
|tax_rate|number \| null|false|none|税率（%）|
|reduced_tax_rate|boolean|false|none|軽減税率対象（true: 対象、 false: 対象外）|
|withholding|boolean|true|none|源泉徴収対象|
|amount_excluding_tax|number(double) \| null|false|none|税別金額|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|text|
|tax_rate|0|
|tax_rate|8|
|tax_rate|10|

<h2 id="tocS_TemplateIndexResponse">TemplateIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateindexresponse"></a>
<a id="schema_TemplateIndexResponse"></a>
<a id="tocStemplateindexresponse"></a>
<a id="tocstemplateindexresponse"></a>

```json
{
  "templates": [
    {
      "id": 1,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templates|[[TemplateIndexResponse_templates](#schematemplateindexresponse_templates)]|true|none|none|

<h2 id="tocS_TemplateIndexResponse_templates">TemplateIndexResponse_templates</h2>
<!-- backwards compatibility -->
<a id="schematemplateindexresponse_templates"></a>
<a id="schema_TemplateIndexResponse_templates"></a>
<a id="tocStemplateindexresponse_templates"></a>
<a id="tocstemplateindexresponse_templates"></a>

```json
{
  "id": 1,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|帳票テンプレートID|
|name|string|true|none|帳票テンプレート名|

<h2 id="tocS_accessDeniedError">accessDeniedError</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniederror"></a>
<a id="schema_accessDeniedError"></a>
<a id="tocSaccessdeniederror"></a>
<a id="tocsaccessdeniederror"></a>

```json
{
  "error": "string",
  "message": "string",
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|message|string|false|none|none|
|code|string|false|none|none|

<h2 id="tocS_badRequest">badRequest</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest"></a>
<a id="schema_badRequest"></a>
<a id="tocSbadrequest"></a>
<a id="tocsbadrequest"></a>

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[[badRequest_errors](#schemabadrequest_errors)]|false|none|none|

<h2 id="tocS_badRequest_errors">badRequest_errors</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest_errors"></a>
<a id="schema_badRequest_errors"></a>
<a id="tocSbadrequest_errors"></a>
<a id="tocsbadrequest_errors"></a>

```json
{
  "type": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_forbiddenError">forbiddenError</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenerror"></a>
<a id="schema_forbiddenError"></a>
<a id="tocSforbiddenerror"></a>
<a id="tocsforbiddenerror"></a>

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[[forbiddenError_errors](#schemaforbiddenerror_errors)]|false|none|none|

<h2 id="tocS_forbiddenError_errors">forbiddenError_errors</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenerror_errors"></a>
<a id="schema_forbiddenError_errors"></a>
<a id="tocSforbiddenerror_errors"></a>
<a id="tocsforbiddenerror_errors"></a>

```json
{
  "type": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_internalServerError">internalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_internalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[[internalServerError_errors](#schemainternalservererror_errors)]|false|none|none|

<h2 id="tocS_internalServerError_errors">internalServerError_errors</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror_errors"></a>
<a id="schema_internalServerError_errors"></a>
<a id="tocSinternalservererror_errors"></a>
<a id="tocsinternalservererror_errors"></a>

```json
{
  "type": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_notfoundError">notfoundError</h2>
<!-- backwards compatibility -->
<a id="schemanotfounderror"></a>
<a id="schema_notfoundError"></a>
<a id="tocSnotfounderror"></a>
<a id="tocsnotfounderror"></a>

```json
{
  "status_code": 0,
  "errors": [
    {
      "type": "string",
      "messages": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[[notfoundError_errors](#schemanotfounderror_errors)]|false|none|none|

<h2 id="tocS_notfoundError_errors">notfoundError_errors</h2>
<!-- backwards compatibility -->
<a id="schemanotfounderror_errors"></a>
<a id="schema_notfoundError_errors"></a>
<a id="tocSnotfounderror_errors"></a>
<a id="tocsnotfounderror_errors"></a>

```json
{
  "type": "string",
  "messages": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|messages|[string]|false|none|none|

<h2 id="tocS_unauthorizedError">unauthorizedError</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizederror"></a>
<a id="schema_unauthorizedError"></a>
<a id="tocSunauthorizederror"></a>
<a id="tocsunauthorizederror"></a>

```json
{
  "message": "string",
  "messages": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|messages|string|false|none|none|
