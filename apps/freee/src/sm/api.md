<h1 id="freee販売-api">freee販売 API v2026-02-16</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h2 id="start_guide">スタートガイド</h2> <p>freee API開発がはじめての方は<a href="https://developer.freee.co.jp/getting-started">freee APIスタートガイド</a>を参照してください。</p>
<p>freee販売のPublicAPIは、スタンダードプランのみでのご利用となります。テスト環境のプラン付与に関しては準備中です。</p>
<hr />
<h2 id="specification">仕様</h2>
<h3 id="api_endpoint">APIエンドポイント</h3> <p>https://api.freee.co.jp/sm (httpsのみ)</p>
<h3 id="about_authorize">認証について</h3> <p>OAuth2.0を利用します。詳細は<a href="https://developer.freee.co.jp/reference/#%e8%aa%8d%e8%a8%bc"
    target="_blank">リファレンスの認証に関する記載</a>を参照してください。</p>

<h3 id="data_format">データフォーマット</h3> <p>リクエスト、レスポンスともにJSON形式をサポートしていますが、詳細は、API毎の説明欄（application/jsonなど）を確認してください。</p>
<h3 id="compatibility">後方互換性ありの変更</h3> <p>freeeでは、APIを改善していくために以下のような変更は後方互換性ありとして通知なく変更を入れることがあります。アプリケーション実装者は以下を踏まえて開発を行ってください。</p> <ul>
  <li>新しいAPIリソース・エンドポイントの追加</li>
  <li>既存のAPIに対して必須ではない新しいリクエストパラメータの追加</li>
  <li>既存のAPIレスポンスに対する新しいプロパティの追加</li>
  <li>既存のAPIレスポンスに対するプロパティの順番の入れ変え</li>
  <li>keyとなっているidやcodeの長さの変更（長くする）</li>
  <li>エラーメッセージの変更</li>
</ul>
<h3 id="common_response_header">共通レスポンスヘッダー</h3> <p>すべてのAPIのレスポンスには以下のHTTPヘッダーが含まれます。</p> <ul>
  <li>
    <p>X-Freee-Request-ID</p>
    <ul>
      <li>各リクエスト毎に発行されるID</li>
    </ul>
  </li>
</ul>
<h3 id="common_error_response">共通エラーレスポンス</h3>

<p>APIリクエストでエラーが発生した場合は、エラー原因に応じたステータスコードおよびメッセージを返します。</p> <p>
  一部のエラーレスポンスにはエラーコードが含まれます。<br>
  詳細は、<a href="https://developer.freee.co.jp/tips/faq/40x-checkpoint">HTTPステータスコード400台エラー時のチェックポイント</a>を参照してください
</p>
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
<p>メッセージボディ内の <code>errors.messages</code> <code>message</code> にはエラー内容を説明する文字列が入ります。</p> <pre><code>  {
    &quot;status_code&quot; : 400,
    &quot;errors&quot; : [
      {
        &quot;codes&quot; : [
          &quot;bad_request&quot;
        ],
        &quot;messages&quot; : [
          &quot;リクエストの形式が不正です。&quot;
        ]
      }
    ]
  }  </code></pre>
  <pre><code>  {
    &quot;message&quot; : &quot;ログインをして下さい&quot;,
    &quot;code&quot; : &quot;invalid_access_token&quot;
  }  </code></pre>
</p>
<h3 id="api_rate_limit">API使用制限</h3> <p>APIリクエストは1分あたり30回、および1時間あたり1500回を上限としています。<br>API使用ステータスはレスポンスヘッダに付与されます。各ヘッダの意味は次のとおりです。</p>
<table>
  <thead>
    <tr>
      <th>ヘッダ名</th>
      <th>説明</th>
    </tr>
  </thead>
 <tbody>
   <tr>
     <td>X-RateLimit-Limit</td>
     <td>１時間の使用回数の上限</td>
   </tr>
   <tr>
     <td>X-RateLimit-Remaining</td>
     <td>１時間の残り使用回数</td>
   </tr>
   <tr>
     <td>X-RateLimit-Reset</td>
     <td>１時間の使用回数がリセットされる時刻</td>
   </tr>
   <tr>
     <td>X-RateLimit-Limit-Minute</td>
     <td>１分間の使用回数の上限</td>
   </tr>
   <tr>
     <td>X-RateLimit-Remaining-Minute</td>
     <td>１分間の残り使用回数</td>
   </tr>
   <tr>
     <td>X-RateLimit-Reset-Minute</td>
     <td>１分間の使用回数がリセットされる時刻</td>
   </tr>
 </tbody>
</table>
<p>この上限を超えた場合APIアクセスは制限され、http status codeは429となります。制限がかかってから10分程度が過ぎると再度使用することができるようになります。</p>
<p>また、上記に加えfreeeは一定期間に過度のアクセスを検知した場合、APIアクセスをコントロールする場合があります。<br>
  その際のhttp status codeは403となります。こちらも制限がかかってから10分程度が過ぎると再度使用することができるようになります。</p>

<h3 id="available_apis_by_plan">プランごとの利用可能API</h3> <p>すべてのエンドポイントはfreee販売スタンダードプランをご契約の事業所でのみ利用可能です。</p>
<h3 id="data_classification">freee販売APIにおけるマスタデータ・業務データの区分</h3> <p>freee販売APIのエンドポイントには、マスタデータを扱うものと業務データを扱うものがあります。APIの実行権限（スコープ）を設定する際の参考にしてください。</p> <p>以下は、freee販売APIにおいてマスタデータに該当するエンドポイントのリソース一覧です。</p> <ul>
  <li>商品</li>
  <li>従業員</li>
  <li>案件フェーズ</li>
  <li>明細取引タイプ</li>
  <li>受注確度</li>
  <li>案件カスタム項目定義</li>
</ul> <p>上記以外のエンドポイント（案件、見積、受注、納品、売上など）は業務データに該当します。</p>
<h3 id="accounting_master_items">会計マスタ項目</h3>
<p>freee請求書APIのリクエストパラメータに、会計マスタ項目があります。会計マスタ項目の詳細は<a
    href="https://developer.freee.co.jp/guideline/master-guideline">会計マスタガイドライン</a>を参照ください。</p>

<p>会計のマスタ項目はfreee会計APIのエンドポイントにて取得可能です（例：<a
    href="https://developer.freee.co.jp/reference/accounting/reference#operations-tag-Partners">Partners
    取引先</a>）。freee会計APIのエンドポイントの詳細は<a
    href="https://developer.freee.co.jp/reference/accounting/reference">会計APIリファレンス</a>を参照ください。</p>

Base URLs:

* <a href="https://api.freee.co.jp/sm">https://api.freee.co.jp/sm</a>

<a href="https://app.secure.freee.co.jp/terms-freee-api.html">Terms of service</a>
Web: <a href="https://accounts.secure.freee.co.jp/contacts?from=sales_management">サポートデスクへのお問い合わせ</a> 
License: © Since 2013 freee K.K.

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.secure.freee.co.jp/public_api/authorize](https://accounts.secure.freee.co.jp/public_api/authorize)
    - Token URL = [https://accounts.secure.freee.co.jp/public_api/token](https://accounts.secure.freee.co.jp/public_api/token)

|Scope|Scope Description|
|---|---|
|write|データの書き込み|
|read|データの読み取り|

<h1 id="freee販売-api-businesses">businesses</h1>

案件

## 案件一覧

<a id="opIdget_businesses"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/businesses?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /businesses`

<h2 id="">概要</h2>
<p>案件の一覧を取得します。
登録されている案件情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する案件のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_business_date : 案件登録日(絞り込み開始)</p>
</li>
<li>
<p>end_business_date : 案件登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 案件更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 案件更新日(絞り込み終了)</p>
</li>
<li>
<p>sales_progression_ids : 受注確度ID(複数指定可)</p>
</li>
<li>
<p>business_phase_ids : 案件フェーズID(複数指定可)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>code : 案件コード</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="案件一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_business_date|query|string(date)|false|案件登録日で絞込：開始日(yyyy-mm-dd)|
|end_business_date|query|string(date)|false|案件登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|案件更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|案件更新日で絞込：終了日(yyyy-mm-dd)|
|sales_progression_ids[]|query|[string]|false|受注確度ID|
|business_phase_ids[]|query|[string]|false|案件フェーズID|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|code|query|string|false|案件コードで絞込|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "businesses": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "name": "サンプル案件",
      "business_date": "2025-04-01",
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "code": "B-0000000003",
      "canceled": false,
      "closed": false,
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "sales_progression": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "B"
      },
      "scheduled_completion_date": "2025-06-30",
      "completion_date": "2025-06-15",
      "business_phase": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "引き合い"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "registered_at": "2025-04-01T09:00:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-04-15T14:30:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      }
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="案件一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businesses|[[BusinessDigest](#schemabusinessdigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件登録

<a id="opIdcreate_business"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/businesses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "name": "サンプル案件",
    "code": "B-0000000001",
    "business_date": "2025-04-01",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "customer_id": 1001,
    "prospect_sales_order": 6000000,
    "sales_progression_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "scheduled_completion_date": "2025-06-30",
    "completion_date": "2025-06-15",
    "business_phase_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "custom_fields": [
      {
        "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "value": "PJ-123456"
      },
      {
        "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
        "value": 234
      }
    ]
  }'
```

`POST /businesses`

<h2 id="">概要</h2>
<p>新しい案件を登録します。
顧客との商談や受注案件を管理するための案件情報を登録できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>name : 案件名称</p>
</li>
<li>
<p>company_id : 事業所ID</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>code : 案件コード</p>
</li>
<li>
<p>business_date : 案件登録日</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>prospect_sales_order : 受注見込</p>
</li>
<li>
<p>sales_progression_id : 受注確度ID</p>
</li>
<li>
<p>scheduled_completion_date : 完了予定日</p>
</li>
<li>
<p>completion_date : 完了日</p>
</li>
<li>
<p>business_phase_id : 案件フェーズID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>common_business_id : 案件マスタID</p>
</li>
<li>
<p>custom_fields : カスタム項目</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "name": "サンプル案件",
  "code": "B-0000000001",
  "business_date": "2025-04-01",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "prospect_sales_order": 6000000,
  "sales_progression_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "custom_fields": [
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "value": "PJ-123456"
    },
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "value": 234
    }
  ]
}
```

<h3 id="案件登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|案件登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» name|body|string|true|案件名称|
|» code|body|string|false|案件コード（null・空文字での送信不可。POSTの自動採番ON時およびPATCHのキー省略時は省略可能）|
|» business_date|body|string(date) \| null|false|案件登録日|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» customer_id|body|[CustomerId](#schemacustomerid)|false|顧客の取引先ID|
|» prospect_sales_order|body|integer(int64)|false|受注見込|
|» sales_progression_id|body|string \| null|false|受注確度ID|
|» scheduled_completion_date|body|string(date) \| null|false|完了予定日|
|» completion_date|body|string(date) \| null|false|完了日|
|» business_phase_id|body|string \| null|false|案件フェーズID|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» common_business_id|body|string \| null|false|紐付ける案件マスタID（ULID形式）。案件登録時のみ指定可能で、案件更新では紐付けの変更はできません（紐付け済みの案件に対して既存と異なる値を指定した場合はエラー）|
|» custom_fields|body|[object]|false|カスタム項目|
|» » definition_id|body|string|true|カスタム項目ID|
|» » value|body|string \| number \| null|true|カスタム項目の値|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|案件登録のレスポンス|[BusinessMinimalResponse](#schemabusinessminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件詳細取得

<a id="opIdget_business"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/businesses/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /businesses/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの案件の詳細情報を取得します。
案件の基本情報に加えて、粗利や売上情報などの詳細な集計情報も取得できます。
</p>

<h3 id="案件詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|案件ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "サンプル案件",
  "business_date": "2025-04-01",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "code": "B-0000000003",
  "canceled": false,
  "closed": false,
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_progression": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "B"
  },
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "引き合い"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "actual_profit": 1000000,
  "sales_totals_excluding_tax": 5000000,
  "procurement_totals_excluding_tax": 3000000,
  "other_cost_totals_excluding_tax": 1000000,
  "prospect_sales_order": 6000000,
  "prospect_purchase_order": 3500000,
  "prospect_other_cost": 1200000,
  "quotation_totals_excluding_tax": 5500000,
  "sales_order_totals_excluding_tax": 5200000,
  "delivered_totals_excluding_tax": 4800000,
  "bill_totals_excluding_tax": 4800000,
  "purchase_order_totals_excluding_tax": 3200000,
  "actual_other_cost": 900000,
  "prospect_profit": 1300000,
  "budget_profit": 1500000,
  "margin_actual_rate_percent": 20.5,
  "budget_total_labor_cost": 2000000,
  "actual_total_labor_cost": 1800000,
  "internal_memo": "重要案件のため優先対応",
  "custom_fields": [
    {
      "value": "サンプルテキスト",
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "definition_name": "カスタム項目1"
    },
    {
      "value": 12345,
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "definition_name": "カスタム項目2"
    },
    {
      "value": {
        "type": "partner",
        "id": 1001,
        "name": "サンプル取引先",
        "code": "P-001"
      },
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTO",
      "definition_name": "担当取引先"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件詳細取得のレスポンス|[BusinessDetail](#schemabusinessdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件更新

<a id="opIdupdate_business"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/businesses/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "name": "サンプル案件",
    "code": "B-0000000001",
    "business_date": "2025-04-01",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "customer_id": 1001,
    "prospect_sales_order": 6000000,
    "sales_progression_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "scheduled_completion_date": "2025-06-30",
    "completion_date": "2025-06-15",
    "business_phase_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "custom_fields": [
      {
        "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "value": "PJ-123456"
      },
      {
        "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
        "value": 234
      }
    ]
  }'
```

`PATCH /businesses/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの案件を更新します。
案件の基本情報、受注見込、完了予定日などを部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li><p>name : 案件名称</p></li>
<li><p>code : 案件コード</p></li>
<li><p>business_date : 案件登録日</p></li>
<li><p>charge_employee_id : 社内担当者の従業員ID</p></li>
<li><p>charge_member_id : 社内担当者のメンバーID</p></li>
<li><p>customer_id : 顧客の取引先ID</p></li>
<li><p>prospect_sales_order : 受注見込</p></li>
<li><p>sales_progression_id : 受注確度ID</p></li>
<li><p>scheduled_completion_date : 完了予定日</p></li>
<li><p>completion_date : 完了日</p></li>
<li><p>business_phase_id : 案件フェーズID</p></li>
<li><p>reporting_section_id : 担当部門ID</p></li>
<li><p>internal_memo : 社内メモ</p></li>
<li><p>custom_fields : カスタム項目(指定した場合、既存のカスタム項目は全て削除され、新しいカスタム項目に置き換えられます)</p></li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<p>※custom_fieldsを指定した場合、リクエストに含まれないカスタム項目はnullとして扱われます。必須のカスタム項目が指定されていない場合はバリデーションエラーになります。</p>
<p>※common_business_id（案件マスタID）はこのAPIでは更新できません。紐付け済みの案件に対して既存と異なる値を指定した場合はエラーになります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "name": "サンプル案件",
  "code": "B-0000000001",
  "business_date": "2025-04-01",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "prospect_sales_order": 6000000,
  "sales_progression_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "custom_fields": [
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "value": "PJ-123456"
    },
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "value": 234
    }
  ]
}
```

<h3 id="案件更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|案件ID|
|body|body|object|false|案件更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» name|body|string|false|案件名称|
|» code|body|string|false|案件コード（null・空文字での送信不可。POSTの自動採番ON時およびPATCHのキー省略時は省略可能）|
|» business_date|body|string(date) \| null|false|案件登録日|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» customer_id|body|[CustomerId](#schemacustomerid)|false|顧客の取引先ID|
|» prospect_sales_order|body|integer(int64)|false|受注見込|
|» sales_progression_id|body|string \| null|false|受注確度ID|
|» scheduled_completion_date|body|string(date) \| null|false|完了予定日|
|» completion_date|body|string(date) \| null|false|完了日|
|» business_phase_id|body|string \| null|false|案件フェーズID|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» common_business_id|body|string \| null|false|紐付ける案件マスタID（ULID形式）。案件登録時のみ指定可能で、案件更新では紐付けの変更はできません（紐付け済みの案件に対して既存と異なる値を指定した場合はエラー）|
|» custom_fields|body|[object]|false|カスタム項目|
|» » definition_id|body|string|true|カスタム項目ID|
|» » value|body|string \| number \| null|true|カスタム項目の値|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件更新のレスポンス|[BusinessMinimalResponse](#schemabusinessminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件取消

<a id="opIdcancel_business"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/businesses/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /businesses/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの案件を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="案件取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|案件ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|案件取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件取消のレスポンス|[BusinessMinimalResponse](#schemabusinessminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件ロック

<a id="opIdclose_business"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/businesses/01JPP4FD1CVQWCDSWA90VE1ZTM/close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /businesses/{id}/close`

<h2 id="">概要</h2>
<p>指定されたIDの案件をロックします。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="案件ロック-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|案件ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|案件ロックリクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件ロック-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件ロックのレスポンス|[BusinessMinimalResponse](#schemabusinessminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件ロック解除

<a id="opIdreopen_business"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/businesses/01JPP4FD1CVQWCDSWA90VE1ZTM/reopen \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /businesses/{id}/reopen`

<h2 id="">概要</h2>
<p>指定されたIDの案件ロックを解除します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="案件ロック解除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|案件ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|案件ロック解除リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件ロック解除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件ロック解除のレスポンス|[BusinessMinimalResponse](#schemabusinessminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-costbudgets">cost_budgets</h1>

原価予算

## 原価予算一覧

<a id="opIdget_cost_budgets"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/cost_budgets?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cost_budgets`

<h2 id="">概要</h2>
<p>原価予算の一覧を取得します。
登録されている原価予算情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する原価予算のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li><p>type : 原価種別 (procurement, external_procurement, other_cost)</p></li>
<li><p>start_amount_excluding_tax : 金額(税抜):下限</p></li>
<li><p>end_amount_excluding_tax : 金額(税抜):上限</p></li>
<li><p>start_date_period : 発生予定期間:開始日(yyyy-mm-dd)</p></li>
<li><p>end_date_period : 発生予定期間:終了日(yyyy-mm-dd)</p></li>
<li><p>master_item_ids : 商品ID(複数指定可)</p></li>
<li><p>start_quantity : 数量:下限</p></li>
<li><p>end_quantity : 数量:上限</p></li>
<li><p>start_unit_price : 単価:下限</p></li>
<li><p>end_unit_price : 単価:上限</p></li>
<li><p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p></li>
<li><p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p></li>
<li><p>reporting_section_ids : 担当部門ID(複数指定可)</p></li>
<li><p>supplier_ids : 仕入先の取引先ID(複数指定可)</p></li>
<li><p>payment_partner_ids : 支払先の取引先ID(複数指定可)</p></li>
<li><p>accounting_reporting_section_ids : 会計計上部門ID(複数指定可)</p></li>
<li><p>item_tag_ids : 会計品目タグID(複数指定可)</p></li>
<li><p>segment_tag_1_ids : セグメントタグ1 ID(複数指定可)</p></li>
<li><p>segment_tag_2_ids : セグメントタグ2 ID(複数指定可)</p></li>
<li><p>segment_tag_3_ids : セグメントタグ3 ID(複数指定可)</p></li>
<li><p>business_ids : 案件ID(複数指定可)</p></li>
<li><p>cost_budget_no : 原価予算No.</p></li>
<li><p>start_last_updated_date : 更新日(絞り込み開始)</p></li>
<li><p>end_last_updated_date : 更新日(絞り込み終了)</p></li>
<li><p>canceled : 取消状態(デフォルト:false)</p></li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="原価予算一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|type|query|string|false|原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)|
|start_amount_excluding_tax|query|integer(int64)|false|金額(税抜):下限|
|end_amount_excluding_tax|query|integer(int64)|false|金額(税抜):上限|
|start_date_period|query|string(date)|false|発生予定期間:開始日(yyyy-mm-dd)|
|end_date_period|query|string(date)|false|発生予定期間:終了日(yyyy-mm-dd)|
|master_item_ids[]|query|[string]|false|商品ID|
|start_quantity|query|integer(int64)|false|数量:下限|
|end_quantity|query|integer(int64)|false|数量:上限|
|start_unit_price|query|integer(int64)|false|単価:下限|
|end_unit_price|query|integer(int64)|false|単価:上限|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|reporting_section_ids[]|query|object|false|担当部門ID|
|supplier_ids[]|query|[integer(int64)]|false|仕入先の取引先ID|
|payment_partner_ids[]|query|[integer(int64)]|false|支払先の取引先ID|
|accounting_reporting_section_ids[]|query|object|false|会計計上部門ID|
|item_tag_ids[]|query|[integer(int64)]|false|会計品目タグID|
|segment_tag_1_ids[]|query|[integer(int64)]|false|セグメントタグ1 ID|
|segment_tag_2_ids[]|query|[integer(int64)]|false|セグメントタグ2 ID|
|segment_tag_3_ids[]|query|[integer(int64)]|false|セグメントタグ3 ID|
|business_ids[]|query|[string]|false|案件ID|
|cost_budget_no|query|string|false|原価予算No.で絞込|
|start_last_updated_date|query|string(date)|false|更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|更新日で絞込：終了日(yyyy-mm-dd)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|procurement|
|type|external_procurement|
|type|other_cost|

> Example responses

> 200 Response

```json
{
  "cost_budgets": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "cost_budget_no": "CB-0001",
      "canceled": false,
      "type": "external_procurement",
      "amount_excluding_tax": 100000,
      "date_period": {
        "from": "2025-04-01",
        "to": "2025-06-30"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "memo": "備考テキスト",
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "registered_at": "2025-04-01T09:00:00+09:00",
      "last_updated_at": "2025-04-15T14:30:00+09:00"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="原価予算一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|原価予算一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="原価予算一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost_budgets|[[CostBudgetDetail](#schemacostbudgetdetail)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 原価予算登録

<a id="opIdcreate_cost_budget"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/cost_budgets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "type": "procurement",
    "period_from_date": "2025-04-01",
    "period_to_date": "2025-06-30",
    "quantity": 10,
    "unit_price": 1000,
    "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "supplier_id": 1001,
    "memo": "備考テキスト"
  }'
```

`POST /cost_budgets`

<h2 id="">概要</h2>
<p>原価予算を新規登録します。
<code>type</code> で原価種別を指定してください。<code>procurement</code>（仕入）はリクエストスキーマが異なります。<code>external_procurement</code>（外部仕入）と <code>other_cost</code>（その他原価）は同じリクエストスキーマを使用します。
</p>
<h2 id="_2">定義</h2>
<h3 id="_3">全type共通フィールド</h3>
<ul>
<li><p>type (必須) : 原価種別 (procurement: 仕入, external_procurement: 外部仕入, other_cost: その他原価)</p></li>
<li><p>period_from_date (必須) : 期間開始日</p></li>
<li><p>period_to_date (必須) : 期間終了日。period_from_date と両方必須。</p></li>
<li><p>business_id : 案件ID</p></li>
<li><p>memo : 備考</p></li>
<li><p>charge_employee_id : 社内担当者ID</p></li>
<li><p>charge_member_id : 社内担当者のメンバーID</p></li>
<li><p>reporting_section_id : 担当部門ID</p></li>
</ul>
<h3 id="_4">type=procurement 固有フィールド</h3>
<ul>
<li><p>quantity (必須) : 数量</p></li>
<li><p>unit_price (必須) : 単価</p></li>
<li><p>deal_line_type_id (必須) : 明細取引タイプID</p></li>
<li><p>supplier_id : 仕入先ID</p></li>
<li><p>payment_partner_id : 支払先ID</p></li>
<li><p>uom_name : 単位</p></li>
<li><p>master_item_id : 商品ID</p></li>
<li><p>accounting_reporting_section_id : 会計計上部門ID</p></li>
<li><p>item_tag_id : 会計品目タグID</p></li>
<li><p>memo_tag_ids : メモタグID（複数指定可）</p></li>
<li><p>segment_tag_1_id : セグメントタグ1ID</p></li>
<li><p>segment_tag_2_id : セグメントタグ2ID</p></li>
<li><p>segment_tag_3_id : セグメントタグ3ID</p></li>
</ul>
<h3 id="_5">type=external_procurement / type=other_cost 固有フィールド</h3>
<ul>
<li><p>amount_excluding_tax (必須) : 金額(税抜)</p></li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "type": "procurement",
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "quantity": 10,
  "unit_price": 1000,
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "supplier_id": 1001,
  "memo": "備考テキスト"
}
```

<h3 id="原価予算登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|原価予算登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» *oneOf*|body|[BasicCostBudgetCreateRequest](#schemabasiccostbudgetcreaterequest)|false|原価予算登録リクエスト (外部仕入・その他原価)|
|» *oneOf*|body|[ProcurementCostBudgetCreateRequest](#schemaprocurementcostbudgetcreaterequest)|false|原価予算登録リクエスト (仕入)|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="原価予算登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|原価予算登録のレスポンス|[CostBudgetMinimalResponse](#schemacostbudgetminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 原価予算詳細取得

<a id="opIdget_cost_budget"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/cost_budgets/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cost_budgets/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの原価予算の詳細情報を取得します。
</p>

<h3 id="原価予算詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|原価予算ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "cost_budget_no": "CB-0001",
  "canceled": false,
  "type": "external_procurement",
  "amount_excluding_tax": 100000,
  "date_period": {
    "from": "2025-04-01",
    "to": "2025-06-30"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "memo": "備考テキスト",
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="原価予算詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|原価予算詳細取得のレスポンス|[CostBudgetDetail](#schemacostbudgetdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 原価予算更新

<a id="opIdupdate_cost_budget"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/cost_budgets/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "period_from_date": "2025-04-01",
    "period_to_date": "2025-06-30",
    "quantity": 20,
    "unit_price": 1500,
    "memo": "更新後の備考"
  }'
```

`PATCH /cost_budgets/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの原価予算を更新します。
原価種別に応じて使用可能なフィールドが異なります。
送信したフィールドのみ更新されます。
なお原価種別を変更することはできません。
</p>
<h2 id="_2">定義</h2>
<h3 id="_3">全type共通フィールド</h3>
<ul>
<li><p>period_from_date : 期間開始日。period_to_date と両方同時に送信する必要がある。</p></li>
<li><p>period_to_date : 期間終了日。period_from_date と両方同時に送信する必要がある。</p></li>
<li><p>business_id : 案件ID</p></li>
<li><p>memo : 備考</p></li>
<li><p>charge_employee_id : 社内担当者ID</p></li>
<li><p>charge_member_id : 社内担当者のメンバーID</p></li>
<li><p>reporting_section_id : 担当部門ID</p></li>
</ul>
<h3 id="_4">type=procurement 固有フィールド（外部仕入・その他原価では送信不可）</h3>
<ul>
<li><p>quantity : 数量</p></li>
<li><p>unit_price : 単価</p></li>
<li><p>deal_line_type_id : 明細取引タイプID</p></li>
<li><p>supplier_id : 仕入先ID</p></li>
<li><p>payment_partner_id : 支払先ID</p></li>
<li><p>uom_name : 単位</p></li>
<li><p>master_item_id : 商品ID</p></li>
<li><p>accounting_reporting_section_id : 会計計上部門ID</p></li>
<li><p>item_tag_id : 会計品目タグID</p></li>
<li><p>memo_tag_ids : メモタグID（複数指定可）</p></li>
<li><p>segment_tag_1_id : セグメントタグ1ID</p></li>
<li><p>segment_tag_2_id : セグメントタグ2ID</p></li>
<li><p>segment_tag_3_id : セグメントタグ3ID</p></li>
</ul>
<h3 id="_5">type=external_procurement / type=other_cost 固有フィールド（仕入では送信不可）</h3>
<ul>
<li><p>amount_excluding_tax : 金額(税抜)</p></li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "quantity": 20,
  "unit_price": 1500,
  "memo": "更新後の備考"
}
```

<h3 id="原価予算更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|原価予算ID|
|body|body|object|false|原価予算更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» period_from_date|body|string(date)|false|期間開始日|
|» period_to_date|body|string(date)|false|期間終了日|
|» memo|body|string \| null|false|備考|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|integer(int64) \| null|false|担当部門ID|
|» amount_excluding_tax|body|integer(int64)|false|税抜金額|
|» supplier_id|body|integer(int64) \| null|false|仕入先の取引先ID|
|» payment_partner_id|body|integer(int64) \| null|false|支払先の取引先ID|
|» quantity|body|number(float)|false|数量|
|» unit_price|body|number(float)|false|単価|
|» uom_name|body|string \| null|false|単位|
|» master_item_id|body|string \| null|false|商品ID|
|» deal_line_type_id|body|string|false|明細取引タイプID|
|» accounting_reporting_section_id|body|integer(int64) \| null|false|会計計上部門ID|
|» item_tag_id|body|integer(int64) \| null|false|会計品目タグID|
|» memo_tag_ids|body|[integer(int64)]|false|メモタグID|
|» segment_tag_1_id|body|integer(int64) \| null|false|セグメントタグ1のID|
|» segment_tag_2_id|body|integer(int64) \| null|false|セグメントタグ2のID|
|» segment_tag_3_id|body|integer(int64) \| null|false|セグメントタグ3のID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="原価予算更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|原価予算更新のレスポンス|[CostBudgetMinimalResponse](#schemacostbudgetminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 原価予算取消

<a id="opIdcancel_cost_budget"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/cost_budgets/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /cost_budgets/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの原価予算を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="原価予算取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|原価予算ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|原価予算取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="原価予算取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|原価予算取消のレスポンス|[CostBudgetMinimalResponse](#schemacostbudgetminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-purchaseorders">purchase_orders</h1>

発注

## 発注一覧

<a id="opIdget_purchase_orders"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/purchase_orders?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /purchase_orders`

<h2 id="">概要</h2>
<p>発注の一覧を取得します。
登録されている発注情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する発注のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_registered_date : 発注登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 発注登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 発注更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 発注更新日(絞り込み終了)</p>
</li>
<li>
<p>start_purchase_order_date : 発注日(絞り込み開始)</p>
</li>
<li>
<p>end_purchase_order_date : 発注日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>supplier_ids : 仕入先の取引先ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>purchase_order_no : 発注No.</p>
</li>
<li>
<p>payment_status : 支払ステータス</p>
</li>
<li>
<p>issued : 送付ステータス</p>
</li>
<li>
<p>procurement_status : 仕入ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="発注一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_registered_date|query|string(date)|false|発注登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|発注登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|発注更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|発注更新日で絞込：終了日(yyyy-mm-dd)|
|start_purchase_order_date|query|string(date)|false|発注日で絞込：開始日(yyyy-mm-dd)|
|end_purchase_order_date|query|string(date)|false|発注日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|supplier_ids[]|query|[integer(int64)]|false|仕入先の取引先ID|
|business_ids[]|query|[string]|false|案件ID|
|purchase_order_no|query|string|false|発注No.で絞込|
|payment_status|query|string|false|支払ステータス (なし: none, 未決済: not_settled, 一部決済済: partially_settled, 決済済: settled)|
|issued|query|boolean|false|送付ステータス|
|procurement_status|query|string|false|仕入ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|payment_status|none|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|
|procurement_status|not_sold|
|procurement_status|partially_sold|
|procurement_status|sold|

> Example responses

> 200 Response

```json
{
  "purchase_orders": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "canceled": false,
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "registered_at": "2025-01-15T10:30:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "purchase_order_no": "PO211212-00001",
      "branch_no": 1,
      "internal_subject": "サンプル案件発注の件",
      "purchase_order_date": "2025-04-01",
      "procurements_on": "2025-05-01",
      "supplier": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "is_qualified_invoice_issuer": true,
      "delivery_deadline": "2025-06-01",
      "delivery_location": "東京都渋谷区",
      "purchase_order_note": "発注書備考",
      "issued": false,
      "issued_on": "2025-04-01",
      "purchase_order_template": {
        "id": 10001,
        "name": "デフォルトテンプレート"
      },
      "purchase_order_subject": "サンプル案件発注の件",
      "procurement_status": "not_sold",
      "recorded_procurement_amount_excluding_tax": 50000,
      "remaining_procurement_amount_excluding_tax": 50000,
      "payment_status": "not_settled",
      "payments_on": "2025-06-30",
      "payment_method_type": {},
      "payment_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "internal_memo": "重要案件のため優先対応",
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="発注一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|発注一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="発注一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_orders|[[PurchaseOrderDigest](#schemapurchaseorderdigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 発注登録

<a id="opIdcreate_purchase_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/purchase_orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件発注の件",
    "purchase_order_date": "2025-04-01",
    "procurements_on": "2025-05-01",
    "supplier_id": 1001,
    "is_qualified_invoice_issuer": true,
    "delivery_deadline": "2025-05-15",
    "delivery_location": "東京都渋谷区",
    "purchase_order_note": "納期厳守でお願いします",
    "purchase_order_template_id": 10001,
    "purchase_order_subject": "サンプル案件発注の件",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "payments_on": "2025-06-30",
    "payment_method_type": {},
    "payment_partner_id": 1002,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ]
  }'
```

`POST /purchase_orders`

<h2 id="">概要</h2>
<p>新しい発注を登録します。
仕入先への発注情報を登録し、発注書の発行や仕入への引き継ぎに利用できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>purchase_order_date : 発注日</p>
</li>
<li>
<p>supplier_id : 仕入先の取引先ID</p>
</li>
<li>
<p>payment_method_type : 支払方法</p>
</li>
<li>
<p>payment_partner_id : 支払先の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>internal_subject : 発注タイトル</p>
</li>
<li>
<p>procurements_on : 仕入予定日</p>
</li>
<li>
<p>delivery_deadline : 納品期限日</p>
</li>
<li>
<p>delivery_location : 納品場所</p>
</li>
<li>
<p>purchase_order_note : 発注書の備考欄に記載する内容</p>
</li>
<li>
<p>purchase_order_template_id : 発注書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>purchase_order_subject : 発注書件名</p>
</li>
<li>
<p>recipient_address : 宛先情報 ※Web画面とは異なり、仕入先マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>
</li>
<li>
<p>payments_on : 支払予定日</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>
<h2 id="_3">注意点</h2>
<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>
<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>
<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>
<ul>
<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>
<li>
<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>
<ul>
<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>
<li>
<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>
<ul>
<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>
<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>
</ul>
</li>
</ul>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "納期厳守でお願いします",
  "purchase_order_template_id": 10001,
  "purchase_order_subject": "サンプル案件発注の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

<h3 id="発注登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|発注登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|発注タイトル|
|» purchase_order_date|body|string(date)|true|発注日|
|» procurements_on|body|string(date) \| null|false|仕入予定日|
|» supplier_id|body|integer(int64)|true|仕入先の取引先ID|
|» is_qualified_invoice_issuer|body|boolean \| null|false|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|» delivery_deadline|body|string(date) \| null|false|納品期限日|
|» delivery_location|body|string \| null|false|納品場所|
|» purchase_order_note|body|string \| null|false|発注書の備考欄に記載する内容|
|» purchase_order_template_id|body|integer(int64) \| null|false|発注書テンプレートID|
|» purchase_order_subject|body|string \| null|false|発注書件名|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» payments_on|body|string(date) \| null|false|支払予定日|
|» payment_method_type|body|object|true|支払方法|
|» payment_partner_id|body|integer(int64)|true|支払先の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[PurchaseOrderLineParams](#schemapurchaseorderlineparams)]|true|明細リスト|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="発注登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|発注登録のレスポンス|[PurchaseOrderMinimalResponse](#schemapurchaseorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 発注詳細取得

<a id="opIdget_purchase_order"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/purchase_orders/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /purchase_orders/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの発注の詳細情報を取得します。
発注の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。
</p>

<h3 id="発注詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|発注ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_no": "PO211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "発注書備考",
  "issued": false,
  "issued_on": "2025-04-01",
  "purchase_order_template": {
    "id": 10001,
    "name": "デフォルトテンプレート"
  },
  "purchase_order_subject": "サンプル案件発注の件",
  "procurement_status": "not_sold",
  "recorded_procurement_amount_excluding_tax": 50000,
  "remaining_procurement_amount_excluding_tax": 50000,
  "payment_status": "not_settled",
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="発注詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|発注詳細取得のレスポンス|[PurchaseOrderDetail](#schemapurchaseorderdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 発注更新

<a id="opIdupdate_purchase_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/purchase_orders/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "branch_no": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件発注の件",
    "purchase_order_date": "2025-04-01",
    "procurements_on": "2025-05-01",
    "supplier_id": 1001,
    "is_qualified_invoice_issuer": true,
    "delivery_deadline": "2025-05-15",
    "delivery_location": "東京都渋谷区",
    "purchase_order_note": "納期厳守でお願いします",
    "purchase_order_template_id": 10001,
    "purchase_order_subject": "サンプル案件発注の件",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "payments_on": "2025-06-30",
    "payment_method_type": {},
    "payment_partner_id": 1002,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ]
  }'
```

`PATCH /purchase_orders/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの発注を更新します。
発注の基本情報を部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>branch_no : 枝番</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>internal_subject : 発注タイトル</p>
</li>
<li>
<p>purchase_order_date : 発注日</p>
</li>
<li>
<p>supplier_id : 仕入先の取引先ID</p>
</li>
<li>
<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>
</li>
<li>
<p>procurements_on : 仕入予定日</p>
</li>
<li>
<p>delivery_deadline : 納品期限日</p>
</li>
<li>
<p>delivery_location : 納品場所</p>
</li>
<li>
<p>purchase_order_note : 発注書の備考欄に記載する内容</p>
</li>
<li>
<p>purchase_order_template_id : 発注書テンプレートID</p>
</li>
<li>
<p>purchase_order_subject : 発注書件名</p>
</li>
<li>
<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>
</li>
<li>
<p>payments_on : 支払予定日</p>
</li>
<li>
<p>payment_method_type : 支払方法</p>
</li>
<li>
<p>payment_partner_id : 支払先の取引先ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>
<h2 id="_3">注意点</h2>
<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>
<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>
<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>
<ul>
<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>
<li>
<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>
<ul>
<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>
<li>
<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>
<ul>
<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>
<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>
</ul>
</li>
</ul>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "branch_no": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "納期厳守でお願いします",
  "purchase_order_template_id": 10001,
  "purchase_order_subject": "サンプル案件発注の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

<h3 id="発注更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|発注ID|
|body|body|object|true|発注更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» branch_no|body|integer(int32) \| null|false|枝番|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|発注タイトル|
|» purchase_order_date|body|string(date)|false|発注日|
|» procurements_on|body|string(date) \| null|false|仕入予定日|
|» supplier_id|body|integer(int64)|false|仕入先の取引先ID|
|» is_qualified_invoice_issuer|body|boolean \| null|false|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|» delivery_deadline|body|string(date) \| null|false|納品期限日|
|» delivery_location|body|string \| null|false|納品場所|
|» purchase_order_note|body|string \| null|false|発注書の備考欄に記載する内容|
|» purchase_order_template_id|body|integer(int64) \| null|false|発注書テンプレートID|
|» purchase_order_subject|body|string \| null|false|発注書件名|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» payments_on|body|string(date) \| null|false|支払予定日|
|» payment_method_type|body|object|false|支払方法|
|» payment_partner_id|body|integer(int64)|false|支払先の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[PurchaseOrderLineParams](#schemapurchaseorderlineparams)]|false|明細リスト|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="発注更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|発注更新のレスポンス|[PurchaseOrderMinimalResponse](#schemapurchaseorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 発注取消

<a id="opIdcancel_purchase_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/purchase_orders/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /purchase_orders/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの発注を取り消します。</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>company_id : 事業所ID</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="発注取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|発注ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|発注取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="発注取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|発注取消のレスポンス|[PurchaseOrderMinimalResponse](#schemapurchaseorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-quotations">quotations</h1>

見積

## 見積一覧

<a id="opIdget_quotations"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/quotations?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /quotations`

<h2 id="">概要</h2>
<p>見積の一覧を取得します。
登録されている見積情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する見積のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_registered_date : 見積登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 見積登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 見積更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 見積更新日(絞り込み終了)</p>
</li>
<li>
<p>start_quotation_date : 見積日(絞り込み開始)</p>
</li>
<li>
<p>end_quotation_date : 見積日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>quotation_no : 見積No.</p>
</li>
<li>
<p>quotation_status : 見積ステータス</p>
</li>
<li>
<p>billing_status : 請求書送付ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="見積一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_registered_date|query|string(date)|false|見積登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|見積登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|見積更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|見積更新日で絞込：終了日(yyyy-mm-dd)|
|start_quotation_date|query|string(date)|false|見積日で絞込：開始日(yyyy-mm-dd)|
|end_quotation_date|query|string(date)|false|見積日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|business_ids[]|query|[string]|false|案件ID|
|quotation_no|query|string|false|見積No.で絞込|
|start_gross_profit_amount_excluding_tax|query|number(double)|false|粗利額計(税抜)で絞込：下限|
|end_gross_profit_amount_excluding_tax|query|number(double)|false|粗利額計(税抜)で絞込：上限|
|start_gross_profit_rate|query|number(double)|false|粗利率(%)で絞込：下限|
|end_gross_profit_rate|query|number(double)|false|粗利率(%)で絞込：上限|
|quotation_status|query|string|false|見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)|
|billing_status|query|string|false|請求書送付ステータス (未請求: not_billed, 一部請求済: partially_billed, 請求済: billed, なし: none)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|quotation_status|unanswered|
|quotation_status|order_received|
|quotation_status|order_lost|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|

> Example responses

> 200 Response

```json
{
  "quotations": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "canceled": false,
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "quotation_no": "Q211212-00001",
      "branch_no": 1,
      "quotation_date": "2025-04-01",
      "quotation_subject": "サンプル案件見積の件",
      "internal_subject": "サンプル案件見積の件",
      "expires_on": "2025-05-01",
      "delivery_deadline": "2025-06-01",
      "delivery_location": "東京都渋谷区",
      "issued": false,
      "issued_on": "2025-04-01",
      "registered_at": "2025-01-15T10:30:00+09:00",
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "total_amount": 10000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000,
      "quotation_status": "unanswered",
      "delivery_progress": "not_delivered",
      "delivery_issue_progress": "not_issued",
      "sales_status": "not_sold",
      "billing_status": "not_billed",
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "internal_memo": "重要案件のため優先対応",
      "quotation_note": "見積書備考",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "gross_profit_amount_excluding_tax": 30000,
      "gross_profit_rate": 30
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|見積一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="見積一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quotations|[[QuotationListItem](#schemaquotationlistitem)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 見積登録

<a id="opIdcreate_quotation"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/quotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件見積の件",
    "quotation_date": "2025-04-01",
    "customer_id": 1001,
    "expires_on": "2025-04-30",
    "delivery_deadline": "2025-05-15",
    "delivery_location": "東京都渋谷区",
    "quotation_template_id": 10001,
    "quotation_subject": "サンプル案件見積の件",
    "quotation_note": "有効期限内にご回答ください",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "gross_profit": {
          "cost": 700,
          "memo": "仕入先A社の見積による"
        }
      }
    ]
  }'
```

`POST /quotations`

<h2 id="">概要</h2>
<p>新しい見積を登録します。
顧客への見積情報を登録し、見積書の発行や受注への引き継ぎに利用できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>quotation_date : 見積日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>internal_subject : 見積タイトル</p>
</li>
<li>
<p>expires_on : 有効期限日</p>
</li>
<li>
<p>delivery_deadline : 納品期限日</p>
</li>
<li>
<p>delivery_location : 納品場所</p>
</li>
<li>
<p>quotation_template_id : 見積書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>quotation_subject : 見積書件名</p>
</li>
<li>
<p>quotation_note : 見積書の備考欄に記載する内容</p>
</li>
<li>
<p>recipient_address : 宛先情報 ※Web画面とは異なり、顧客マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件見積の件",
  "quotation_date": "2025-04-01",
  "customer_id": 1001,
  "expires_on": "2025-04-30",
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "quotation_template_id": 10001,
  "quotation_subject": "サンプル案件見積の件",
  "quotation_note": "有効期限内にご回答ください",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "gross_profit": {
        "cost": 700,
        "memo": "仕入先A社の見積による"
      }
    }
  ]
}
```

<h3 id="見積登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|見積登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|見積タイトル|
|» quotation_date|body|string(date)|true|見積日|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» expires_on|body|string(date) \| null|false|有効期限日|
|» delivery_deadline|body|string(date) \| null|false|納品期限日|
|» delivery_location|body|string \| null|false|納品場所|
|» quotation_template_id|body|integer(int64) \| null|false|見積書テンプレートID|
|» quotation_subject|body|string \| null|false|見積書件名|
|» quotation_note|body|string \| null|false|見積書の備考欄に記載する内容|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[QuotationLineParams](#schemaquotationlineparams)]|true|明細リスト|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|見積登録のレスポンス|[QuotationMinimalResponse](#schemaquotationminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 見積詳細取得

<a id="opIdget_quotation"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/quotations/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /quotations/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの見積の詳細情報を取得します。
見積の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。
</p>

<h3 id="見積詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|見積ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "quotation_no": "Q211212-00001",
  "branch_no": 1,
  "quotation_date": "2025-04-01",
  "quotation_subject": "サンプル案件見積の件",
  "internal_subject": "サンプル案件見積の件",
  "expires_on": "2025-05-01",
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "issued": false,
  "issued_on": "2025-04-01",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "total_amount": 10000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "quotation_status": "unanswered",
  "delivery_progress": "not_delivered",
  "delivery_issue_progress": "not_issued",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "internal_memo": "重要案件のため優先対応",
  "quotation_note": "見積書備考",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "quotation_template_name": "デフォルトテンプレート",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "gross_profit": {
        "cost": 700,
        "sales_price": 1000,
        "memo": "仕入先A社の見積による",
        "profit_amount": 300,
        "total_cost": 70000,
        "total_price": 100000,
        "total_gross_profit": 30000,
        "cost_rate": 70,
        "profit_rate": 30,
        "markup_rate": 42.86
      }
    }
  ],
  "gross_profit_summary": {
    "gross_profit_amount_excluding_tax": 30000,
    "gross_profit_rate": 30
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|見積詳細取得のレスポンス|[QuotationDetail](#schemaquotationdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 見積更新

<a id="opIdupdate_quotation"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/quotations/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件見積の件",
    "quotation_date": "2025-04-01",
    "customer_id": 1001,
    "expires_on": "2025-04-30",
    "delivery_deadline": "2025-05-15",
    "delivery_location": "東京都渋谷区",
    "quotation_template_id": 10001,
    "quotation_subject": "サンプル案件見積の件",
    "quotation_note": "有効期限内にご回答ください",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "gross_profit": {
          "cost": 700,
          "memo": "仕入先A社の見積による"
        }
      }
    ],
    "branch_no": 1
  }'
```

`PATCH /quotations/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの見積を更新します。
見積の基本情報を部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>internal_subject : 見積タイトル</p>
</li>
<li>
<p>quotation_date : 見積日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>expires_on : 有効期限日</p>
</li>
<li>
<p>delivery_deadline : 納品期限日</p>
</li>
<li>
<p>delivery_location : 納品場所</p>
</li>
<li>
<p>quotation_template_id : 見積書テンプレートID</p>
</li>
<li>
<p>quotation_subject : 見積書件名</p>
</li>
<li>
<p>quotation_note : 見積書の備考欄に記載する内容</p>
</li>
<li>
<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>branch_no : 枝番</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>
<h2 id="_3">注意点</h2>
<h3>明細行の金額再計算について</h3>
<p>見積を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
</ul>
<h3>見積書への反映について</h3>
<p>発行済みの見積書がある場合、見積情報を更新しても見積書の内容には自動で反映されません。見積書の内容を更新するには、再発行が必要です。</p>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件見積の件",
  "quotation_date": "2025-04-01",
  "customer_id": 1001,
  "expires_on": "2025-04-30",
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "quotation_template_id": 10001,
  "quotation_subject": "サンプル案件見積の件",
  "quotation_note": "有効期限内にご回答ください",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "gross_profit": {
        "cost": 700,
        "memo": "仕入先A社の見積による"
      }
    }
  ],
  "branch_no": 1
}
```

<h3 id="見積更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|見積ID|
|body|body|object|false|見積更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|見積タイトル|
|» quotation_date|body|string(date)|false|見積日|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» expires_on|body|string(date) \| null|false|有効期限日|
|» delivery_deadline|body|string(date) \| null|false|納品期限日|
|» delivery_location|body|string \| null|false|納品場所|
|» quotation_template_id|body|integer(int64) \| null|false|見積書テンプレートID|
|» quotation_subject|body|string \| null|false|見積書件名|
|» quotation_note|body|string \| null|false|見積書の備考欄に記載する内容|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[QuotationLineParams](#schemaquotationlineparams)]|false|明細リスト|
|» branch_no|body|integer(int32) \| null|false|枝番|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|見積更新のレスポンス|[QuotationMinimalResponse](#schemaquotationminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 見積ステータス変更

<a id="opIdupdate_quotation_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/quotations/01JPP4FD1CVQWCDSWA90VE1ZTM/quotation_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "quotation_status": "unanswered"
  }'
```

`PUT /quotations/{id}/quotation_status`

<h2 id="">概要</h2>
<p>指定されたIDの見積のステータスを変更します。
見積のステータス（未受注/失注）を更新できます。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>quotation_status : 見積ステータス (未受注: unanswered, 失注: order_lost)</p>
</li>
</ul>
<p>※ステータス変更は取り消されていない見積に対してのみ可能です。</p>
<p>※受注済（order_received）への変更は本APIでは行えません。受注登録APIで対象の見積を指定して受注登録することで、見積ステータスが自動的に受注済へ更新されます。</p>

> Body parameter

```json
{
  "company_id": 1,
  "quotation_status": "unanswered"
}
```

<h3 id="見積ステータス変更-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|見積ID|
|body|body|[QuotationStatusChangeRequest](#schemaquotationstatuschangerequest)|true|見積ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» quotation_status|body|[QuotationStatusForUpdate](#schemaquotationstatusforupdate)|true|更新可能な見積ステータス (未受注: unanswered, 失注: order_lost)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» quotation_status|unanswered|
|» quotation_status|order_lost|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積ステータス変更-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|見積ステータス変更のレスポンス|[QuotationMinimalResponse](#schemaquotationminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 見積取消

<a id="opIdcancel_quotation"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/quotations/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /quotations/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの見積を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="見積取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|見積ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|見積取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="見積取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|見積取消のレスポンス|[QuotationMinimalResponse](#schemaquotationminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-salesorders">sales_orders</h1>

受注

## 受注一覧

<a id="opIdget_sales_orders"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales_orders?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_orders`

<h2 id="">概要</h2>
<p>受注の一覧を取得します。
登録されている受注情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する受注のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_last_updated_date : 更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 更新日(絞り込み終了)</p>
</li>
<li>
<p>start_sales_order_date : 受注日(絞り込み開始)</p>
</li>
<li>
<p>end_sales_order_date : 受注日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>sales_order_no : 受注No.</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="受注一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_last_updated_date|query|string(date)|false|更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|更新日で絞込：終了日(yyyy-mm-dd)|
|start_sales_order_date|query|string(date)|false|受注日で絞込：開始日(yyyy-mm-dd)|
|end_sales_order_date|query|string(date)|false|受注日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|sales_order_no|query|string|false|受注No.で絞込|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "sales_orders": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "sales_order_no": "S211212-00001",
      "sales_order_subject": "サンプル案件受注の件",
      "sales_order_date": "2025-04-01",
      "customer_order_no": "C-PO-20250401-001",
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000,
      "registered_at": "2025-01-15T10:30:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "sales_on": "2025-04-01",
      "delivery_progress": "not_delivered",
      "sales_status": "not_sold",
      "billing_status": "not_billed",
      "collection_status": "not_settled",
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "total_amount": 10000,
      "canceled": false
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|受注一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="受注一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales_orders|[[SalesOrderDigest](#schemasalesorderdigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 受注登録

<a id="opIdcreate_sales_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales_orders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "sales_order_subject": "サンプル案件パンフレット作成",
    "sales_order_date": "2021-12-12",
    "customer_order_no": "C-PO-20211212-001",
    "customer_id": 1001,
    "sales_on": "2021-12-12",
    "deliveries_on": "2021-12-12",
    "accepts_on": "2021-12-12",
    "delivery_template_id": 10001,
    "delivery_subject": "サンプル案件パンフレット作成",
    "delivery_note": "納品時の注意事項",
    "billing_creating_method_type": "automatically",
    "bills_on": "2021-12-12",
    "billing_partner_id": 1002,
    "invoice_template_id": 10002,
    "invoice_subject": "サンプル案件パンフレット作成",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2021-12-12",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ]
  }'
```

`POST /sales_orders`

<h2 id="">概要</h2>
<p>新しい受注を登録します。
顧客からの注文情報を登録し、納品・請求・入金の予定情報を管理できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>sales_order_date : 受注日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>quotation_id : 見積ID（見積に紐づける場合）</p>
</li>
<li>
<p>sales_order_subject : 受注タイトル</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>deliveries_on : 納品予定日</p>
</li>
<li>
<p>accepts_on : 検収予定日</p>
</li>
<li>
<p>bills_on : 請求予定日</p>
</li>
<li>
<p>collects_on : 入金予定日</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>delivery_template_id : 納品書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "sales_order_subject": "サンプル案件パンフレット作成",
  "sales_order_date": "2021-12-12",
  "customer_order_no": "C-PO-20211212-001",
  "customer_id": 1001,
  "sales_on": "2021-12-12",
  "deliveries_on": "2021-12-12",
  "accepts_on": "2021-12-12",
  "delivery_template_id": 10001,
  "delivery_subject": "サンプル案件パンフレット作成",
  "delivery_note": "納品時の注意事項",
  "billing_creating_method_type": "automatically",
  "bills_on": "2021-12-12",
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "invoice_subject": "サンプル案件パンフレット作成",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

<h3 id="受注登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|受注登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» sales_order_subject|body|string \| null|false|受注タイトル|
|» sales_order_date|body|string(date)|true|受注日|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» sales_on|body|string(date) \| null|false|売上予定日|
|» deliveries_on|body|string(date) \| null|false|納品予定日|
|» accepts_on|body|string(date) \| null|false|検収予定日|
|» delivery_template_id|body|integer(int64) \| null|false|納品書テンプレートID|
|» delivery_subject|body|string \| null|false|納品書件名|
|» delivery_note|body|string \| null|false|納品書の備考欄に掲載する内容|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» bills_on|body|string(date) \| null|false|請求予定日|
|» billing_partner_id|body|integer(int64)|true|請求先の取引先ID|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金予定日|
|» collecting_partner_id|body|integer(int64)|true|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|true|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» business_id|body|string \| null|false|案件ID|
|» quotation_id|body|string \| null|false|見積ID|
|» lines|body|[[LineParams](#schemalineparams)]|true|明細リスト|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|受注登録のレスポンス|[SalesOrderMinimalResponse](#schemasalesorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 受注詳細取得

<a id="opIdget_sales_order"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales_orders/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_orders/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの受注の詳細情報を取得します。
受注の基本情報に加えて、納品・請求・入金情報などの詳細な進捗情報も取得できます。
</p>

<h3 id="受注詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|受注ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_no": "S211212-00001",
  "sales_order_subject": "サンプル案件受注の件",
  "sales_order_date": "2025-04-01",
  "customer_order_no": "C-PO-20250401-001",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_on": "2025-04-01",
  "delivery_progress": "not_delivered",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "total_amount": 10000,
  "canceled": false,
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "deliveries_on": "2025-04-01",
  "accepts_on": "2025-04-01",
  "delivery_template_name": "デフォルトテンプレート",
  "delivery_subject": "サンプル案件受注の件",
  "delivery_note": "納品時の注意事項",
  "delivered_excluding_tax": 5200000,
  "remaining_delivered_tax": 5200000,
  "sales_excluding_tax": 5200000,
  "remaining_sales_order_excluding_tax": 5200000,
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_template_name": "デフォルトテンプレート",
  "invoice_subject": "サンプル案件受注の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "transfer",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|受注詳細取得のレスポンス|[SalesOrderDetail](#schemasalesorderdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 受注更新

<a id="opIdupdate_sales_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales_orders/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "sales_order_subject": "サンプル案件パンフレット作成",
    "sales_order_date": "2021-12-12",
    "customer_order_no": "C-PO-20211212-001",
    "customer_id": 1001,
    "sales_on": "2021-12-12",
    "deliveries_on": "2021-12-12",
    "accepts_on": "2021-12-12",
    "delivery_template_id": 10001,
    "delivery_subject": "サンプル案件パンフレット作成",
    "delivery_note": "納品時の注意事項",
    "billing_creating_method_type": "automatically",
    "bills_on": "2021-12-12",
    "billing_partner_id": 1002,
    "invoice_template_id": 10002,
    "invoice_subject": "サンプル案件パンフレット作成",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2021-12-12",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ]
  }'
```

`PATCH /sales_orders/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの受注を更新します。
受注の基本情報、納品・請求・入金情報などを部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>sales_order_subject : 受注タイトル</p>
</li>
<li>
<p>sales_order_date : 受注日</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>sales_on : 売上予定日</p>
</li>
<li>
<p>deliveries_on : 納品予定日</p>
</li>
<li>
<p>accepts_on : 検収予定日</p>
</li>
<li>
<p>delivery_template_id : 納品書テンプレートID</p>
</li>
<li>
<p>delivery_subject : 納品書件名</p>
</li>
<li>
<p>delivery_note : 納品書の備考欄に掲載する内容</p>
</li>
<li>
<p>billing_creating_method_type : 請求の管理</p>
</li>
<li>
<p>bills_on : 請求予定日</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on : 入金予定日</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>lines : 明細リスト ※指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます。</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<p>受注を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "sales_order_subject": "サンプル案件パンフレット作成",
  "sales_order_date": "2021-12-12",
  "customer_order_no": "C-PO-20211212-001",
  "customer_id": 1001,
  "sales_on": "2021-12-12",
  "deliveries_on": "2021-12-12",
  "accepts_on": "2021-12-12",
  "delivery_template_id": 10001,
  "delivery_subject": "サンプル案件パンフレット作成",
  "delivery_note": "納品時の注意事項",
  "billing_creating_method_type": "automatically",
  "bills_on": "2021-12-12",
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "invoice_subject": "サンプル案件パンフレット作成",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

<h3 id="受注更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|受注ID|
|body|body|object|false|受注更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» sales_order_subject|body|string \| null|false|受注タイトル|
|» sales_order_date|body|string(date)|false|受注日|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» sales_on|body|string(date) \| null|false|売上予定日|
|» deliveries_on|body|string(date) \| null|false|納品予定日|
|» accepts_on|body|string(date) \| null|false|検収予定日|
|» delivery_template_id|body|integer(int64) \| null|false|納品書テンプレートID|
|» delivery_subject|body|string \| null|false|納品書件名|
|» delivery_note|body|string \| null|false|納品書の備考欄に掲載する内容|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» bills_on|body|string(date) \| null|false|請求予定日|
|» billing_partner_id|body|integer(int64)|false|請求先の取引先ID|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金予定日|
|» collecting_partner_id|body|integer(int64)|false|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|false|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» business_id|body|string \| null|false|案件ID|
|» quotation_id|body|string \| null|false|見積ID|
|» lines|body|[[LineParams](#schemalineparams)]|false|明細リスト|
|» delivery_template_id|body|integer(int64)|false|納品書テンプレートID|
|» invoice_template_id|body|integer(int64)|false|請求書テンプレートID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|受注更新のレスポンス|[SalesOrderMinimalResponse](#schemasalesorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 受注取消

<a id="opIdcancel_sales_order"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales_orders/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /sales_orders/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの受注を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="受注取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|受注ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|受注取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|受注取消のレスポンス|[SalesOrderMinimalResponse](#schemasalesorderminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-deliveries">deliveries</h1>

納品

## 納品一覧

<a id="opIdget_deliveries"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/deliveries?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deliveries`

<h2 id="">概要</h2>
<p>納品の一覧を取得します。
登録されている納品情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する納品のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_registered_date : 登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 更新日(絞り込み終了)</p>
</li>
<li>
<p>start_delivery_date : 納品日(絞り込み開始)</p>
</li>
<li>
<p>end_delivery_date : 納品日(絞り込み終了)</p>
</li>
<li>
<p>start_acceptance_date : 検収日(絞り込み開始)</p>
</li>
<li>
<p>end_acceptance_date : 検収日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>delivery_no : 納品No.</p>
</li>
<li>
<p>delivery_status : 納品ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="納品一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_registered_date|query|string(date)|false|登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|更新日で絞込：終了日(yyyy-mm-dd)|
|start_delivery_date|query|string(date)|false|納品日で絞込：開始日(yyyy-mm-dd)|
|end_delivery_date|query|string(date)|false|納品日で絞込：終了日(yyyy-mm-dd)|
|start_acceptance_date|query|string(date)|false|検収日で絞込：開始日(yyyy-mm-dd)|
|end_acceptance_date|query|string(date)|false|検収日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|delivery_no|query|string|false|納品No.で絞込|
|delivery_status|query|string|false|納品ステータス (未納品: not_delivered, 納品済: delivered)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|delivery_status|not_delivered|
|delivery_status|delivered|

> Example responses

> 200 Response

```json
{
  "deliveries": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "delivery_status": "not_delivered",
      "acceptance_status": "not_accepted",
      "canceled": false,
      "registered_at": "2025-01-15T10:30:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000,
      "total_amount": 10000,
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "delivery_no": "D211212-00001",
      "branch_no": 1,
      "internal_subject": "サンプル案件納品の件",
      "customer_order_no": "C-PO-20250401-001",
      "delivery_date": "2025-04-01",
      "acceptance_date": "2025-04-01",
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "issued": false,
      "issued_on": "2025-04-01",
      "subject": "サンプル案件納品の件",
      "sales_status": "not_sold",
      "billing_status": "not_billed",
      "collection_status": "not_settled"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="納品一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveries|[[DeliveryDigest](#schemadeliverydigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 納品登録

<a id="opIdcreate_delivery"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/deliveries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件納品の件",
    "customer_order_no": "C-PO-20250401-001",
    "delivery_date": "2025-04-01",
    "acceptance_date": "2025-04-01",
    "customer_id": 1001,
    "delivery_note": "納品時の注意事項",
    "delivery_template_id": 10001,
    "subject": "サンプル案件納品の件",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "billing_creating_method_type": "automatically",
    "bills_on": "2025-04-01",
    "invoice_template_id": 10002,
    "billing_partner_id": 1002,
    "invoice_subject": "サンプル案件納品の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2025-04-01",
    "collection_method_type": "transfer",
    "collecting_partner_id": 1003,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ]
  }'
```

`POST /deliveries`

<h2 id="">概要</h2>
<p>新しい納品を登録します。
受注に紐づく納品、または独立した納品を登録できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>delivery_date : 納品日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>billing_creating_method_type : 請求作成方法</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>sales_order_id : 受注ID（受注に紐づける場合）</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>internal_subject : 納品タイトル</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>acceptance_date : 検収日</p>
</li>
<li>
<p>delivery_note : 納品書の備考欄に記載する内容</p>
</li>
<li>
<p>delivery_template_id : 納品書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>subject : 納品書件名</p>
</li>
<li>
<p>recipient_address : 宛先情報 ※Web画面とは異なり、顧客マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>
</li>
<li>
<p>bills_on : 請求予定日</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on : 入金予定日</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer_id": 1001,
  "delivery_note": "納品時の注意事項",
  "delivery_template_id": 10001,
  "subject": "サンプル案件納品の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件納品の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

<h3 id="納品登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|納品登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» sales_order_id|body|string \| null|false|受注ID|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|納品タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» delivery_date|body|string(date)|true|納品日|
|» acceptance_date|body|string(date) \| null|false|検収日|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» delivery_note|body|string \| null|false|納品書の備考欄に記載する内容|
|» delivery_template_id|body|integer(int64) \| null|false|納品書テンプレートID|
|» subject|body|string \| null|false|納品書件名|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» bills_on|body|string(date) \| null|false|請求予定日|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» billing_partner_id|body|integer(int64)|true|請求先の取引先ID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金予定日|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|true|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collecting_partner_id|body|integer(int64)|true|入金元の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[DeliveryLineParams](#schemadeliverylineparams)]|true|明細リスト|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|納品登録のレスポンス|[DeliveryMinimalResponse](#schemadeliveryminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 納品詳細取得

<a id="opIdget_delivery"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/deliveries/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deliveries/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの納品の詳細情報を取得します。
納品の基本情報に加えて、売上・請求情報などの詳細な進捗情報も取得できます。
</p>

<h3 id="納品詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|納品ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_status": "not_delivered",
  "acceptance_status": "not_accepted",
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "delivery_no": "D211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "issued": false,
  "issued_on": "2025-04-01",
  "subject": "サンプル案件納品の件",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "delivery_note": "納品時の注意事項",
  "delivery_template_name": "デフォルトテンプレート",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "recorded_sales_amount_excluding_tax": 5200000,
  "remaining_sales_amount_excluding_tax": 5200000,
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "サンプル案件納品の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collection_method_type": "transfer",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品詳細取得のレスポンス|[DeliveryDetail](#schemadeliverydetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 納品更新

<a id="opIdupdate_delivery"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/deliveries/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "internal_subject": "サンプル案件納品の件",
    "customer_order_no": "C-PO-20250401-001",
    "delivery_date": "2025-04-01",
    "acceptance_date": "2025-04-01",
    "customer_id": 1001,
    "delivery_note": "納品時の注意事項",
    "delivery_template_id": 10001,
    "subject": "サンプル案件納品の件",
    "recipient_address": {
      "official_name": "株式会社サンプル",
      "default_title": {},
      "zipcode": "150-0001",
      "prefecture_code": 12,
      "street_name1": "渋谷区神宮前1-1-1",
      "street_name2": "サンプルビル3F",
      "contact_department": "営業部",
      "contact_name": "山田太郎"
    },
    "billing_creating_method_type": "automatically",
    "bills_on": "2025-04-01",
    "invoice_template_id": 10002,
    "billing_partner_id": 1002,
    "invoice_subject": "サンプル案件納品の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2025-04-01",
    "collection_method_type": "transfer",
    "collecting_partner_id": 1003,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ],
    "branch_no": 1
  }'
```

`PATCH /deliveries/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの納品を更新します。
納品の基本情報、請求・入金情報などを部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>branch_no : 枝番</p>
</li>
<li>
<p>internal_subject : 納品タイトル</p>
</li>
<li>
<p>delivery_date : 納品日</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>acceptance_date : 検収日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>delivery_note : 納品書の備考欄に記載する内容</p>
</li>
<li>
<p>delivery_template_id : 納品書テンプレートID</p>
</li>
<li>
<p>subject : 納品書件名</p>
</li>
<li>
<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>
</li>
<li>
<p>billing_creating_method_type : 請求作成方法</p>
</li>
<li>
<p>bills_on : 請求予定日</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on : 入金予定日</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>
<h2 id="_3">注意点</h2>
<h3>明細行の金額再計算について</h3>
<p>納品を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
</ul>
<h3>納品書への反映について</h3>
<p>発行済みの納品書がある場合、納品情報を更新しても納品書の内容には自動で反映されません。納品書の内容を更新するには、再発行が必要です。</p>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer_id": 1001,
  "delivery_note": "納品時の注意事項",
  "delivery_template_id": 10001,
  "subject": "サンプル案件納品の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件納品の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ],
  "branch_no": 1
}
```

<h3 id="納品更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|納品ID|
|body|body|object|false|納品更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» internal_subject|body|string \| null|false|納品タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» delivery_date|body|string(date)|false|納品日|
|» acceptance_date|body|string(date) \| null|false|検収日|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» delivery_note|body|string \| null|false|納品書の備考欄に記載する内容|
|» delivery_template_id|body|integer(int64) \| null|false|納品書テンプレートID|
|» subject|body|string \| null|false|納品書件名|
|» recipient_address|body|[RecipientAddress](#schemarecipientaddress)|false|宛先|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» bills_on|body|string(date) \| null|false|請求予定日|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» billing_partner_id|body|integer(int64)|false|請求先の取引先ID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金予定日|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|false|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collecting_partner_id|body|integer(int64)|false|入金元の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[DeliveryLineParams](#schemadeliverylineparams)]|false|明細リスト|
|» branch_no|body|integer(int32) \| null|false|枝番|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品更新のレスポンス|[DeliveryMinimalResponse](#schemadeliveryminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 納品取消

<a id="opIdcancel_delivery"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/deliveries/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /deliveries/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの納品を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="納品取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|納品ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|納品取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品取消のレスポンス|[DeliveryMinimalResponse](#schemadeliveryminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 納品ステータス変更

<a id="opIdupdate_delivery_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/deliveries/01JPP4FD1CVQWCDSWA90VE1ZTM/delivery_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "delivery_status": "not_delivered"
  }'
```

`PUT /deliveries/{id}/delivery_status`

<h2 id="">概要</h2>
<p>指定されたIDの納品の納品ステータスを変更します。</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>status : 納品ステータス (未納品: not_delivered, 納品済: delivered)</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "delivery_status": "not_delivered"
}
```

<h3 id="納品ステータス変更-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|納品ID|
|body|body|[DeliveryStatusChangeRequest](#schemadeliverystatuschangerequest)|true|納品ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» delivery_status|body|[DeliveryStatus](#schemadeliverystatus)|true|納品ステータス (未納品: not_delivered, 納品済: delivered)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» delivery_status|not_delivered|
|» delivery_status|delivered|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="納品ステータス変更-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品更新のレスポンス|[DeliveryMinimalResponse](#schemadeliveryminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 検収ステータス変更

<a id="opIdupdate_acceptance_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/deliveries/01JPP4FD1CVQWCDSWA90VE1ZTM/acceptance_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "acceptance_status": "not_accepted"
  }'
```

`PUT /deliveries/{id}/acceptance_status`

<h2 id="">概要</h2>
<p>指定されたIDの納品の検収ステータスを変更します。</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>status : 検収ステータス (未検収: not_accepted, 検収済: accepted)</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "acceptance_status": "not_accepted"
}
```

<h3 id="検収ステータス変更-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|納品ID|
|body|body|[AcceptanceStatusChangeRequest](#schemaacceptancestatuschangerequest)|true|検収ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» acceptance_status|body|[AcceptanceStatus](#schemaacceptancestatus)|true|検収ステータス (未検収: not_accepted, 検収済: accepted)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acceptance_status|not_accepted|
|» acceptance_status|accepted|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="検収ステータス変更-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|納品更新のレスポンス|[DeliveryMinimalResponse](#schemadeliveryminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-sales">sales</h1>

売上

## 売上一覧

<a id="opIdget_sales"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales`

<h2 id="">概要</h2>
<p>売上の一覧を取得します。
登録されている売上情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する売上のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_registered_date : 売上登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 売上登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 売上更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 売上更新日(絞り込み終了)</p>
</li>
<li>
<p>start_revenue_recognition_date : 売上日(絞り込み開始)</p>
</li>
<li>
<p>end_revenue_recognition_date : 売上日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>sales_no : 売上No.</p>
</li>
<li>
<p>billing_status : 請求書送付ステータス</p>
</li>
<li>
<p>collection_status : 決済ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="売上一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_registered_date|query|string(date)|false|売上登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|売上登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|売上更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|売上更新日で絞込：終了日(yyyy-mm-dd)|
|start_revenue_recognition_date|query|string(date)|false|売上日で絞込：開始日(yyyy-mm-dd)|
|end_revenue_recognition_date|query|string(date)|false|売上日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|business_ids[]|query|[string]|false|案件ID|
|sales_no|query|string|false|売上No.で絞込|
|billing_status|query|string|false|請求書送付ステータス (未送付: not_billed, 送付済: billed, 対象外: none)|
|collection_status|query|string|false|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billing_status|not_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|none|

> Example responses

> 200 Response

```json
{
  "sales": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_id": 12345,
      "canceled": false,
      "registered_at": "2024-01-15T10:30:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2024-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000,
      "total_amount": 10000,
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "sales_no": "S-2024-0001",
      "subject": "Webシステム開発業務",
      "customer_order_no": "PO-2024-001",
      "revenue_recognition_date": "2024-01-31",
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "billing_creating_status": "not_created",
      "billing_status": "not_billed",
      "collection_status": "not_settled",
      "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "bills_on": "2024-02-01",
      "invoice_template_name": "デフォルトテンプレート",
      "billing_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "invoice_subject": "Webシステム開発業務",
      "invoice_note": "お振込期限は月末までとなります",
      "billing_amount_excluding_tax": 5200000,
      "invoice_no": "INV-2024-0001",
      "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "collects_on": "2024-02-28",
      "collection_method_type": "none",
      "collecting_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "internal_memo": "重要顧客案件"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="売上一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales|[[SaleDigest](#schemasaledigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上登録

<a id="opIdcreate_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "billing_creating_method_type": "automatically",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "subject": "サンプル案件売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "revenue_recognition_date": "2021-12-12",
    "customer_id": 1001,
    "bills_on": "2021-12-12",
    "invoice_template_id": 10002,
    "billing_partner_id": 1002,
    "invoice_subject": "サンプル案件売上の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2021-12-12",
    "collection_method_type": "transfer",
    "collecting_partner_id": 1003,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`POST /sales`

<h2 id="">概要</h2>
<p>新しい売上を登録します。
受注や納品に紐づく売上、または独立した売上を登録できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>revenue_recognition_date : 売上日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>billing_creating_method_type : 請求の管理</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>sales_order_id : 受注ID（受注に紐づける場合）</p>
</li>
<li>
<p>delivery_id : 納品ID（納品に紐づける場合）</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>subject : 売上タイトル</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>bills_on : 請求日 ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on : 入金期日 ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "billing_creating_method_type": "automatically",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "サンプル案件売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "revenue_recognition_date": "2021-12-12",
  "customer_id": 1001,
  "bills_on": "2021-12-12",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="売上登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|売上登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» sales_order_id|body|string \| null|false|受注ID|
|» delivery_id|body|string \| null|false|納品ID|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» business_id|body|string \| null|false|案件ID|
|» subject|body|string \| null|false|売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» revenue_recognition_date|body|string(date)|true|売上日|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» bills_on|body|string(date) \| null|false|請求日|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» billing_partner_id|body|integer(int64)|true|請求先の取引先ID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金期日|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|true|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collecting_partner_id|body|integer(int64)|true|入金元の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[LineParams-2](#schemalineparams-2)]|true|明細リスト|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|売上登録のレスポンス|[SaleMinimalResponse](#schemasaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上詳細取得

<a id="opIdget_sale"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの売上の詳細情報を取得します。
売上の基本情報に加えて、請求・入金情報などの詳細な進捗情報も取得できます。
</p>

<h3 id="売上詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|売上ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_at": "2024-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2024-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "sales_no": "S-2024-0001",
  "subject": "Webシステム開発業務",
  "customer_order_no": "PO-2024-001",
  "revenue_recognition_date": "2024-01-31",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "billing_creating_status": "not_created",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "bills_on": "2024-02-01",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "Webシステム開発業務",
  "invoice_note": "お振込期限は月末までとなります",
  "billing_amount_excluding_tax": 5200000,
  "invoice_no": "INV-2024-0001",
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "collects_on": "2024-02-28",
  "collection_method_type": "none",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上詳細取得のレスポンス|[SaleDetail](#schemasaledetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上更新

<a id="opIdupdate_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "subject": "サンプル案件売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "revenue_recognition_date": "2021-12-12",
    "customer_id": 1001,
    "bills_on": "2021-12-12",
    "invoice_template_id": 10002,
    "billing_partner_id": 1002,
    "invoice_subject": "サンプル案件売上の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2021-12-12",
    "collection_method_type": "transfer",
    "collecting_partner_id": 1003,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`PATCH /sales/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの売上を更新します。
売上の基本情報、請求・入金情報などを部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>subject : 売上タイトル</p>
</li>
<li>
<p>revenue_recognition_date : 売上日</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>bills_on : 請求日</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>collects_on : 入金期日</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<h3>明細行の金額再計算について</h3>
<p>売上を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>
</ul>
<h3>請求書への反映について</h3>
<p>発行済みの請求書がある場合、売上情報を更新すると請求データは更新されますが、請求書の内容には自動で反映されません。請求書の内容を更新するには、再発行が必要です。</p>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "サンプル案件売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "revenue_recognition_date": "2021-12-12",
  "customer_id": 1001,
  "bills_on": "2021-12-12",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="売上更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|売上ID|
|body|body|object|false|売上更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» subject|body|string \| null|false|売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» revenue_recognition_date|body|string(date)|false|売上日|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» bills_on|body|string(date) \| null|false|請求日|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» billing_partner_id|body|integer(int64)|false|請求先の取引先ID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金期日|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|false|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collecting_partner_id|body|integer(int64)|false|入金元の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[LineParams-2](#schemalineparams-2)]|false|明細リスト|
|» invoice_template_id|body|integer(int64)|false|請求書テンプレートID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上更新のレスポンス|[SaleMinimalResponse](#schemasaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上取消

<a id="opIdcancel_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /sales/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの売上を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="売上取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|売上ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|売上取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上取消のレスポンス|[SaleMinimalResponse](#schemasaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 決済ステータス変更

<a id="opIdupdate_sale_collection_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales/01JPP4FD1CVQWCDSWA90VE1ZTM/collection_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "collection_status": "settled"
  }'
```

`PUT /sales/{id}/collection_status`

<h2 id="">概要</h2>
<p>指定されたIDの売上の決済ステータスを変更します。</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>collection_status : 決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)</p>
</li>
</ul>
<h2 id="_3">注意点</h2>
<p>freee会計と連携している売上の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "collection_status": "settled"
}
```

<h3 id="決済ステータス変更-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|売上ID|
|body|body|[SaleCollectionStatusChangeRequest](#schemasalecollectionstatuschangerequest)|true|決済ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» collection_status|body|[ManualSettlementStatus](#schemamanualsettlementstatus)|true|手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» collection_status|not_settled|
|» collection_status|partially_settled|
|» collection_status|settled|
|» collection_status|none|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="決済ステータス変更-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上更新のレスポンス|[SaleMinimalResponse](#schemasaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-periodicsales">periodic_sales</h1>

定期売上

## 定期売上一覧

<a id="opIdlist_periodic_sales"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/periodic_sales?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /periodic_sales`

<h2 id="">概要</h2>
<p>定期売上の一覧を取得します。
登録されている定期売上情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する定期売上のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
<li>
<p>start_recurrence_period : 繰り返し期間(絞り込み開始)</p>
</li>
<li>
<p>end_recurrence_period : 繰り返し期間(絞り込み終了)</p>
</li>
<li>
<p>start_recorded_count : 計上済み回数(絞り込み下限)</p>
</li>
<li>
<p>end_recorded_count : 計上済み回数(絞り込み上限)</p>
</li>
<li>
<p>start_total_schedule_count : 売上予定の総回数(絞り込み下限)</p>
</li>
<li>
<p>end_total_schedule_count : 売上予定の総回数(絞り込み上限)</p>
</li>
<li>
<p>start_next_sales_on : 次回売上予定日(絞り込み開始)</p>
</li>
<li>
<p>end_next_sales_on : 次回売上予定日(絞り込み終了)</p>
</li>
<li>
<p>start_last_revenue_recognition_date : 最終計上日(絞り込み開始)</p>
</li>
<li>
<p>end_last_revenue_recognition_date : 最終計上日(絞り込み終了)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>reporting_section_ids : 担当部門ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>periodic_sales_no : 定期売上No.で絞込</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="定期売上一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|canceled|query|boolean|false|取消状態|
|start_recurrence_period|query|string(date)|false|繰り返し期間で絞込：指定期間の開始日。この日付以降も有効な（繰り返し終了日がこの日付以降の）定期売上を返す(yyyy-mm-dd)|
|end_recurrence_period|query|string(date)|false|繰り返し期間で絞込：指定期間の終了日。この日付までに開始している（繰り返し開始日がこの日付以前の）定期売上を返す(yyyy-mm-dd)|
|start_recorded_count|query|integer(int32)|false|計上済み回数で絞込：下限|
|end_recorded_count|query|integer(int32)|false|計上済み回数で絞込：上限|
|start_total_schedule_count|query|integer(int32)|false|売上予定の総回数で絞込：下限|
|end_total_schedule_count|query|integer(int32)|false|売上予定の総回数で絞込：上限|
|start_next_sales_on|query|string(date)|false|次回売上予定日で絞込：開始日(yyyy-mm-dd)|
|end_next_sales_on|query|string(date)|false|次回売上予定日で絞込：終了日(yyyy-mm-dd)|
|start_last_revenue_recognition_date|query|string(date)|false|最終計上日で絞込：開始日(yyyy-mm-dd)|
|end_last_revenue_recognition_date|query|string(date)|false|最終計上日で絞込：終了日(yyyy-mm-dd)|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|reporting_section_ids[]|query|object|false|担当部門ID|
|business_ids[]|query|[string]|false|案件ID|
|periodic_sales_no|query|string|false|定期売上No.で絞込|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "periodic_sales": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "periodic_sales_no": "PS-2024-0001",
      "subject": "Webサイト保守費",
      "canceled": false,
      "total_schedule_count": 12,
      "recorded_count": 3,
      "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "registered_at": "2024-01-15T10:30:00+09:00",
      "last_updated_at": "2024-01-16T14:45:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "billing_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "collecting_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "invoice_note": "お振込期限は月末までとなります",
      "internal_memo": "重要案件のため優先対応"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="定期売上一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|定期売上一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="定期売上一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periodic_sales|[[PeriodicSaleDigest](#schemaperiodicsaledigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 定期売上登録

<a id="opIdcreate_periodic_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/periodic_sales \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "customer_id": 1001,
    "subject": "サンプル案件定期売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "recurrence_rule": {
      "start_date": "2025-04-01",
      "end_date": "2026-03-31",
      "interval": "1",
      "day_of_month": 32
    },
    "billing_partner_id": 1002,
    "invoice_template_id": 10002,
    "bills_on_rule": {
      "cutoff_day": 32,
      "additional_months": 1,
      "fixed_day": 32
    },
    "billing_creating_method_type": "automatically",
    "invoice_subject": "サンプル案件定期売上の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "collects_on_rule": {
      "cutoff_day": 32,
      "additional_months": 1,
      "fixed_day": 32
    },
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`POST /periodic_sales`

<h2 id="">概要</h2>
<p>新しい定期売上を登録します。
登録した定期売上の繰り返しルールに従って売上予定が作成されます。
前受金を取り崩す定期売上を登録する場合は、本APIではなく「前受金取崩（定期売上登録）」API（<code>POST /advance_receipts/{id}/periodic_reduction</code>）を使用してください。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>recurrence_rule : 繰り返しルール</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>billing_creating_method_type : 請求の管理</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>subject : 定期売上タイトル</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>bills_on_rule : 請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on_rule : 入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "subject": "サンプル案件定期売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "recurrence_rule": {
    "start_date": "2025-04-01",
    "end_date": "2026-03-31",
    "interval": "1",
    "day_of_month": 32
  },
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "bills_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "billing_creating_method_type": "automatically",
  "invoice_subject": "サンプル案件定期売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "collects_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="定期売上登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|定期売上登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» subject|body|string \| null|false|定期売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» recurrence_rule|body|object|true|繰り返しルール|
|» » start_date|body|string(date)|true|開始日|
|» » end_date|body|string(date)|true|終了日|
|» » interval|body|string|true|周期 (毎月: 1, 2ヶ月ごと: 2, 3ヶ月ごと: 3, 6ヶ月ごと: 6, 12ヶ月ごと: 12, 偶数月: even, 奇数月: odd)|
|» » day_of_month|body|integer(int32)|true|周期日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» billing_partner_id|body|integer(int64)|true|請求先の取引先ID|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» bills_on_rule|body|object \| null|false|請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|» » cutoff_day|body|integer(int32)|true|締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» » additional_months|body|integer(int32)|true|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» » fixed_day|body|integer(int32)|true|締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collecting_partner_id|body|integer(int64)|true|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|true|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collects_on_rule|body|object \| null|false|入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|» » cutoff_day|body|integer(int32)|true|締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» » additional_months|body|integer(int32)|true|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» » fixed_day|body|integer(int32)|true|締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[PeriodicSaleLineParams](#schemaperiodicsalelineparams)]|true|明細リスト|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » interval|1|
|» » interval|2|
|» » interval|3|
|» » interval|6|
|» » interval|12|
|» » interval|even|
|» » interval|odd|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="定期売上登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|定期売上登録のレスポンス|[PeriodicSaleMinimalResponse](#schemaperiodicsaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 定期売上詳細取得

<a id="opIdget_periodic_sale"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/periodic_sales/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /periodic_sales/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの定期売上の詳細情報を取得します。</p>

<h3 id="定期売上詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|定期売上ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_no": "PS-2024-0001",
  "subject": "Webサイト保守費",
  "canceled": false,
  "total_schedule_count": 12,
  "recorded_count": 3,
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2024-01-15T10:30:00+09:00",
  "last_updated_at": "2024-01-16T14:45:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_note": "お振込期限は月末までとなります",
  "internal_memo": "重要案件のため優先対応",
  "total_amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "each_amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "each_amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "customer_order_no": "PO-2025-001",
  "recurrence_rule": {
    "start_date": "2025-04-01",
    "end_date": "2026-03-31",
    "interval": "1",
    "day_of_month": {}
  },
  "next_sales_on": "2025-05-31",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      }
    }
  ],
  "billing_creating_method_type": "none",
  "bills_on_rule": {
    "cutoff_day": {},
    "additional_months": 1,
    "fixed_day": {}
  },
  "invoice_template_name": "デフォルトテンプレート",
  "invoice_subject": "月額保守費用",
  "collects_on_rule": {
    "cutoff_day": {},
    "additional_months": 1,
    "fixed_day": {}
  },
  "collection_method_type": "none"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="定期売上詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|定期売上詳細取得のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="定期売上詳細取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|定期売上ID|
|periodic_sales_no|string|true|none|定期売上No.|
|subject|string \| null|false|none|定期売上タイトル|
|canceled|boolean|true|none|取消状態|
|total_schedule_count|integer(int32) \| null|false|none|売上予定の総回数|
|recorded_count|integer(int32) \| null|false|none|計上済み回数|
|advance_receipt_id|string \| null|false|none|前受金ID（前受金由来の定期売上の場合のみ。それ以外はnull）|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|registered_by|object \| null|true|none|登録者|
|» id|integer(int64)|true|none|従業員ID|
|» display_name|string|true|none|従業員名|
|registered_by_member|object \| null|false|none|登録者|
|» id|string|true|none|メンバーID|
|» display_name|string|true|none|メンバー名|
|last_updated_by|object \| null|true|none|変更者|
|» id|integer(int64)|true|none|従業員ID|
|» display_name|string|true|none|従業員名|
|last_updated_by_member|object \| null|false|none|変更者|
|» id|string|true|none|メンバーID|
|» display_name|string|true|none|メンバー名|
|customer|object|true|none|顧客|
|» id|integer(int64)|true|none|取引先ID|
|» name|string|true|none|取引先名|
|» code|string \| null|false|none|取引先コード|
|business|[Business](#schemabusiness)|false|none|案件|
|charge_employee|object \| null|false|none|社内担当者|
|» id|integer(int64)|true|none|従業員ID|
|» display_name|string|true|none|従業員名|
|charge_member|object \| null|false|none|社内担当者|
|» id|string|true|none|メンバーID|
|» display_name|string|true|none|メンバー名|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|billing_partner|object \| null|false|none|請求先|
|» id|integer(int64)|true|none|取引先ID|
|» name|string|true|none|取引先名|
|» code|string \| null|false|none|取引先コード|
|collecting_partner|object \| null|false|none|入金元|
|» id|integer(int64)|true|none|取引先ID|
|» name|string|true|none|取引先名|
|» code|string \| null|false|none|取引先コード|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|total_amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|each_amount_set|object|true|none|定期売上額（単体）|
|» excluding_tax|integer(int64)|true|none|税抜金額|
|» tax|integer(int64)|true|none|税額|
|» including_tax|integer(int64)|true|none|税込金額|
|each_amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|定期売上単体の税率|
|customer_order_no|string \| null|true|none|顧客注文No.|
|recurrence_rule|[RecurrenceRule](#schemarecurrencerule)|true|none|繰り返しルール|
|next_sales_on|string(date) \| null|true|none|次回売上予定日|
|lines|[[PeriodicSaleLineDetail](#schemaperiodicsalelinedetail)]|true|none|定期売上明細リスト|
|billing_creating_method_type|[BillingCreatingMethodTypeWithNone](#schemabillingcreatingmethodtypewithnone)|true|none|請求作成方法区分<br>* `automatically` - 自動作成<br>* `manually` - 手動作成<br>* `none` - なし|
|bills_on_rule|object \| null|true|none|none|
|» cutoff_day|object|true|none|締め日。32 は末日|
|» additional_months|integer(int32)|true|none|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» fixed_day|object|true|none|締め日を基準に additional_months か月後の予定日の日。32 は末日|
|invoice_template_name|string \| null|false|none|請求書テンプレート名称|
|invoice_subject|string \| null|false|none|請求書件名|
|collects_on_rule|object \| null|true|none|none|
|» cutoff_day|object|true|none|締め日。32 は末日|
|» additional_months|integer(int32)|true|none|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» fixed_day|object|true|none|締め日を基準に additional_months か月後の予定日の日。32 は末日|
|collection_method_type|[CollectionMethodTypeWithNone](#schemacollectionmethodtypewithnone)|true|none|入金方法<br>* `transfer` - 振込<br>* `cash` - 現金<br>* `bill_payable` - 手形<br>* `direct_debit` - 振替<br>* `none` - なし|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|billing_creating_method_type|none|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|
|collection_method_type|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 定期売上更新

<a id="opIdupdate_periodic_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/periodic_sales/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "customer_id": 1001,
    "subject": "サンプル案件定期売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "recurrence_rule": {
      "start_date": "2025-04-01",
      "end_date": "2026-03-31",
      "interval": "1",
      "day_of_month": 32
    },
    "billing_partner_id": 1002,
    "invoice_template_id": 10002,
    "bills_on_rule": {
      "cutoff_day": 32,
      "additional_months": 1,
      "fixed_day": 32
    },
    "billing_creating_method_type": "automatically",
    "invoice_subject": "サンプル案件定期売上の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "collects_on_rule": {
      "cutoff_day": 32,
      "additional_months": 1,
      "fixed_day": 32
    },
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`PATCH /periodic_sales/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの定期売上を更新します。
定期売上の基本情報や繰り返しルール、請求・入金情報などを部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>subject : 定期売上タイトル</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>recurrence_rule : 繰り返しルール</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>billing_creating_method_type : 請求の管理</p>
</li>
<li>
<p>bills_on_rule : 請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on_rule : 入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<h3>明細行の金額再計算について</h3>
<p>定期売上を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>
</ul>
<h3>売上予定への反映について</h3>
<p>定期売上を更新しても請求は作成されません。繰り返しルールに従って作成される売上予定に更新内容が反映されます。</p>
<p>個別に内容を変更した売上予定がある場合でも、定期売上の更新内容が反映されます。</p>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "subject": "サンプル案件定期売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "recurrence_rule": {
    "start_date": "2025-04-01",
    "end_date": "2026-03-31",
    "interval": "1",
    "day_of_month": 32
  },
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "bills_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "billing_creating_method_type": "automatically",
  "invoice_subject": "サンプル案件定期売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "collects_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="定期売上更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|定期売上ID|
|body|body|object|false|定期売上更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» subject|body|string \| null|false|定期売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» recurrence_rule|body|object|false|繰り返しルール|
|» » start_date|body|string(date)|true|開始日|
|» » end_date|body|string(date)|true|終了日|
|» » interval|body|string|true|周期 (毎月: 1, 2ヶ月ごと: 2, 3ヶ月ごと: 3, 6ヶ月ごと: 6, 12ヶ月ごと: 12, 偶数月: even, 奇数月: odd)|
|» » day_of_month|body|integer(int32)|true|周期日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» billing_partner_id|body|integer(int64)|false|請求先の取引先ID|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» bills_on_rule|body|object \| null|false|請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|» » cutoff_day|body|integer(int32)|true|締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» » additional_months|body|integer(int32)|true|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» » fixed_day|body|integer(int32)|true|締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collecting_partner_id|body|integer(int64)|false|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|false|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collects_on_rule|body|object \| null|false|入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|» » cutoff_day|body|integer(int32)|true|締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» » additional_months|body|integer(int32)|true|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|» » fixed_day|body|integer(int32)|true|締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[PeriodicSaleLineParams](#schemaperiodicsalelineparams)]|false|明細リスト|
|» invoice_template_id|body|integer(int64)|false|請求書テンプレートID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » interval|1|
|» » interval|2|
|» » interval|3|
|» » interval|6|
|» » interval|12|
|» » interval|even|
|» » interval|odd|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="定期売上更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|定期売上更新のレスポンス|[PeriodicSaleMinimalResponse](#schemaperiodicsaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上計上状況取得

<a id="opIdlist_periodic_sale_sales_entries"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/periodic_sales/01JPP4FD1CVQWCDSWA90VE1ZTM/sales_entries?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /periodic_sales/{id}/sales_entries`

<h2 id="">概要</h2>
<p>指定された定期売上に含まれる各回の売上予定について、計上済みか未計上かの状況を一覧で取得します。
各行は1回分の売上予定に対応し、<code>status</code>が計上済み(actual)か未計上(scheduled)かを示します。
limit/offsetによるページネーションに対応しています。
</p>

<h3 id="売上計上状況取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|定期売上ID|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "sales_entries": [
    {
      "status": "scheduled",
      "sales_schedule_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "scheduled_date": "2024-01-31",
      "actual_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "actual_sales_revenue_recognition_date": "2024-01-31",
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "internal_memo": {},
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "registered_at": "2024-01-15T10:30:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2024-01-16T14:45:00+09:00"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上計上状況取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上計上状況一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="売上計上状況取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales_entries|[[SalesEntry](#schemasalesentry)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 定期売上取消

<a id="opIdcancel_periodic_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/periodic_sales/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /periodic_sales/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの定期売上を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="定期売上取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|定期売上ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|true|定期売上取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="定期売上取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|定期売上取消のレスポンス|[PeriodicSaleMinimalResponse](#schemaperiodicsaleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-salesschedules">sales_schedules</h1>

売上予定

## 売上予定一覧

<a id="opIdget_sales_schedules"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales_schedules?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_schedules`

<h2 id="">概要</h2>
<p>売上予定の一覧を取得します。
登録されている売上予定情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する売上予定のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>periodic_sales_id : 定期売上IDで絞込</p>
</li>
<li>
<p>start_scheduled_date : 売上予定日(絞り込み開始)</p>
</li>
<li>
<p>end_scheduled_date : 売上予定日(絞り込み終了)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>start_bills_on : 請求予定日(絞り込み開始)</p>
</li>
<li>
<p>end_bills_on : 請求予定日(絞り込み終了)</p>
</li>
<li>
<p>start_collects_on : 入金予定日(絞り込み開始)</p>
</li>
<li>
<p>end_collects_on : 入金予定日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>reporting_section_ids : 担当部門ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>start_last_updated_date : 変更日時(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 変更日時(絞り込み終了)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="売上予定一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|periodic_sales_id|query|string|false|定期売上IDで絞込|
|start_scheduled_date|query|string(date)|false|売上予定日で絞込：開始日(yyyy-mm-dd)|
|end_scheduled_date|query|string(date)|false|売上予定日で絞込：終了日(yyyy-mm-dd)|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|start_bills_on|query|string(date)|false|請求予定日で絞込：開始日(yyyy-mm-dd)|
|end_bills_on|query|string(date)|false|請求予定日で絞込：終了日(yyyy-mm-dd)|
|start_collects_on|query|string(date)|false|入金予定日で絞込：開始日(yyyy-mm-dd)|
|end_collects_on|query|string(date)|false|入金予定日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|reporting_section_ids[]|query|object|false|担当部門ID|
|business_ids[]|query|[string]|false|案件ID|
|start_last_updated_date|query|string(date)|false|変更日時で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|変更日時で絞込：終了日(yyyy-mm-dd)|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "sales_schedules": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "subject": "Webサイト保守費",
      "customer_order_no": "C-PO-20211212-001",
      "scheduled_date": "2025-04-30",
      "registration_status": "none",
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "bills_on": "2025-05-31",
      "billing_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "collects_on": "2025-06-30",
      "collecting_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "total_amount": 110000,
      "amount_of_withholding_tax": 10000,
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "registered_at": "2025-04-01T09:00:00+09:00",
      "last_updated_at": "2025-04-15T14:30:00+09:00"
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上予定一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上予定一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="売上予定一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales_schedules|[[SalesScheduleDigest](#schemasalesscheduledigest)]|true|none|売上予定一覧|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|ページネーション情報|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上予定詳細取得

<a id="opIdget_sales_schedule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales_schedules/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sales_schedules/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの売上予定の詳細情報を取得します。
指定された売上予定が既に売上として計上済みの場合、303 See Otherを返却し、Locationヘッダーに計上済み売上の詳細取得APIのURLを設定します。
</p>

<h3 id="売上予定詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|売上予定ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "Webサイト保守費",
  "customer_order_no": "C-PO-20211212-001",
  "scheduled_date": "2025-04-30",
  "registration_status": "none",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "billing_creating_method_type": "none",
  "bills_on": "2025-05-31",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-06-30",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "none",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "total_amount": 110000,
  "amount_of_withholding_tax": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上予定詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上予定詳細取得のレスポンス|[SalesScheduleDetail](#schemasalesscheduledetail)|
|303|See Other|売上予定は既に計上されています。Locationヘッダーに計上された売上の詳細情報APIのURLが含まれます。|None|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string|uri|計上された売上詳細取得APIのURL|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上予定削除

<a id="opIddelete_sales_schedule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/sales_schedules/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sales_schedules/{id}`

指定されたIDの売上予定を削除します。

<h3 id="売上予定削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|売上予定ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上予定削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上予定削除のレスポンス|[SalesScheduleMinimalResponse](#schemasalesscheduleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上予定更新

<a id="opIdupdate_sales_schedule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales_schedules/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "customer_id": 1001,
    "subject": "サンプル案件売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "scheduled_date": "2025-04-30",
    "billing_creating_method_type": "automatically",
    "bills_on": "2025-05-31",
    "billing_partner_id": 1002,
    "invoice_template_id": 10002,
    "invoice_subject": "サンプル案件売上の件",
    "invoice_note": "お振込期限は月末までとなります",
    "collects_on": "2025-06-30",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "パンフレットデザイン料",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`PATCH /sales_schedules/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの売上予定を更新します。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>subject : 件名</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>scheduled_date : 売上予定日</p>
</li>
<li>
<p>billing_creating_method_type : 請求の管理</p>
</li>
<li>
<p>bills_on : 請求予定日</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>collects_on : 入金予定日</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>

> Body parameter

```json
{
  "company_id": 1,
  "customer_id": 1001,
  "subject": "サンプル案件売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "scheduled_date": "2025-04-30",
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-05-31",
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-06-30",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="売上予定更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|売上予定ID|
|body|body|object|true|売上予定更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» subject|body|string \| null|false|件名|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» scheduled_date|body|string(date)|false|売上予定日|
|» billing_creating_method_type|body|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|» bills_on|body|string(date) \| null|false|請求予定日|
|» billing_partner_id|body|integer(int64)|false|請求先の取引先ID|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» collects_on|body|string(date) \| null|false|入金予定日|
|» collecting_partner_id|body|integer(int64)|false|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|false|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[SalesScheduleLineParams](#schemasalesschedulelineparams)]|false|売上予定明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» billing_creating_method_type|automatically|
|» billing_creating_method_type|manually|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上予定更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|売上予定更新のレスポンス|[SalesScheduleMinimalResponse](#schemasalesscheduleminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 売上予定の売上計上

<a id="opIdactualize_sales_schedule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/sales_schedules/01JPP4FD1CVQWCDSWA90VE1ZTM/actualization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /sales_schedules/{id}/actualization`

指定されたIDの売上予定を売上として計上します。

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="売上予定の売上計上-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|売上予定ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|売上予定計上リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="売上予定の売上計上-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|売上予定計上のレスポンス|[SalesScheduleActualizationResult](#schemasalesscheduleactualizationresult)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-othercosts">other_costs</h1>

その他原価

## その他原価一覧

<a id="opIdget_other_costs"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/other_costs?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /other_costs`

<h2 id="">概要</h2>
<p>その他原価の一覧を取得します。
登録されているその他原価情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致するその他原価のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_amount_excluding_tax : 金額(税抜)の絞り込み下限</p>
</li>
<li>
<p>end_amount_excluding_tax : 金額(税抜)の絞り込み上限</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>other_cost_no : その他原価No.</p>
</li>
<li>
<p>start_last_updated_date : 更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 更新日(絞り込み終了)</p>
</li>
<li>
<p>start_incurred_date : 発生日の絞り込み開始日</p>
</li>
<li>
<p>end_incurred_date : 発生日の絞り込み終了日</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="その他原価一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_amount_excluding_tax|query|integer(int64)|false|金額(税抜)で絞込：下限|
|end_amount_excluding_tax|query|integer(int64)|false|金額(税抜)で絞込：上限|
|business_ids[]|query|[string]|false|案件ID|
|other_cost_no|query|string|false|その他原価No.で絞込|
|canceled|query|boolean|false|取消状態|
|start_last_updated_date|query|string(date)|false|更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|更新日で絞込：終了日(yyyy-mm-dd)|
|start_incurred_date|query|string(date)|false|発生日で絞込：開始日(yyyy-mm-dd)|
|end_incurred_date|query|string(date)|false|発生日で絞込：終了日(yyyy-mm-dd)|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

> Example responses

> 200 Response

```json
{
  "other_costs": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "other_cost_no": "OC-00001",
      "canceled": false,
      "amount_excluding_tax": 10000,
      "incurred_date": "2025-04-01",
      "memo": "その他原価メモ",
      "registered_at": "2025-01-15T10:30:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "deal_line": {
        "deal_id": 1001,
        "deal_line_id": 2001
      }
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|その他原価一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="その他原価一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|other_costs|[[OtherCostDetail](#schemaothercostdetail)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## その他原価登録

<a id="opIdcreate_other_cost"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/other_costs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "amount_excluding_tax": 10000,
    "incurred_date": "2025-04-01",
    "memo": "その他原価メモ"
  }'
```

`POST /other_costs`

<h2 id="">概要</h2>
<p>新しいその他原価を登録します。
案件に紐づくその他原価、または案件に紐づかないその他原価を登録できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>company_id : 事業所ID</p>
</li>
<li>
<p>amount_excluding_tax : 金額(税抜)</p>
</li>
<li>
<p>incurred_date : 発生日</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>memo : メモ</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "amount_excluding_tax": 10000,
  "incurred_date": "2025-04-01",
  "memo": "その他原価メモ"
}
```

<h3 id="その他原価登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|その他原価登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» amount_excluding_tax|body|integer(int64)|true|税抜金額|
|» incurred_date|body|string(date)|true|発生日|
|» memo|body|string \| null|false|メモ|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|その他原価登録のレスポンス|[OtherCostMinimalResponse](#schemaothercostminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## その他原価詳細取得

<a id="opIdget_other_cost"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/other_costs/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /other_costs/{id}`

<h2 id="">概要</h2>
<p>指定されたIDのその他原価の詳細情報を取得します。
</p>

<h3 id="その他原価詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|その他原価ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "other_cost_no": "OC-00001",
  "canceled": false,
  "amount_excluding_tax": 10000,
  "incurred_date": "2025-04-01",
  "memo": "その他原価メモ",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "deal_line": {
    "deal_id": 1001,
    "deal_line_id": 2001
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|その他原価詳細取得のレスポンス|[OtherCostDetail](#schemaothercostdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## その他原価更新

<a id="opIdupdate_other_cost"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/other_costs/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "amount_excluding_tax": 10000,
    "incurred_date": "2025-04-01",
    "memo": "その他原価メモ"
  }'
```

`PATCH /other_costs/{id}`

<h2 id="">概要</h2>
<p>指定されたIDのその他原価を更新します。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>amount_excluding_tax : 金額(税抜)</p>
</li>
<li>
<p>incurred_date : 発生日</p>
</li>
<li>
<p>memo : メモ</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<p>freee会計の取引明細インポートから登録されたその他原価は本APIでは更新できません。該当データを更新しようとした場合はエラーになります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "amount_excluding_tax": 10000,
  "incurred_date": "2025-04-01",
  "memo": "その他原価メモ"
}
```

<h3 id="その他原価更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|その他原価ID|
|body|body|object|false|その他原価更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» business_id|body|string \| null|false|案件ID|
|» amount_excluding_tax|body|integer(int64)|false|税抜金額|
|» incurred_date|body|string(date)|false|発生日|
|» memo|body|string \| null|false|メモ|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|その他原価更新のレスポンス|[OtherCostMinimalResponse](#schemaothercostminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## その他原価復元

<a id="opIdrestore_other_cost"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/other_costs/01JPP4FD1CVQWCDSWA90VE1ZTM/restoration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /other_costs/{id}/restoration`

<h2 id="">概要</h2>
<p>指定されたIDの取消済みその他原価を復元します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="その他原価復元-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|その他原価ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|その他原価復元リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価復元-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|その他原価復元のレスポンス|[OtherCostMinimalResponse](#schemaothercostminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## その他原価取消

<a id="opIdcancel_other_cost"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/other_costs/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /other_costs/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDのその他原価を取り消します。
</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="その他原価取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|その他原価ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|その他原価取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="その他原価取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|その他原価取消のレスポンス|[OtherCostMinimalResponse](#schemaothercostminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-procurements">procurements</h1>

仕入

## 仕入一覧

<a id="opIdget_procurements"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/procurements?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /procurements`

<h2 id="">概要</h2>
<p>仕入の一覧を取得します。
登録されている仕入情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する仕入のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>start_registered_date : 仕入登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 仕入登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 仕入更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 仕入更新日(絞り込み終了)</p>
</li>
<li>
<p>start_procurement_date : 仕入日(絞り込み開始)</p>
</li>
<li>
<p>end_procurement_date : 仕入日(絞り込み終了)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>supplier_ids : 仕入先の取引先ID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可) ※複数の案件が紐づく仕入は本パラメータでヒットしません</p>
</li>
<li>
<p>procurement_no : 仕入No.</p>
</li>
<li>
<p>payment_status : 決済ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>
<h2 id="_3">注意点</h2>
<h3>business_ids による絞り込みについて</h3>
<p>仕入は明細単位で複数の案件と紐付けることができます。複数の案件が紐づく仕入は本パラメータでは検索ヒットしません。</p>

<h3 id="仕入一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|start_registered_date|query|string(date)|false|仕入登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|仕入登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|仕入更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|仕入更新日で絞込：終了日(yyyy-mm-dd)|
|start_procurement_date|query|string(date)|false|仕入日で絞込：開始日(yyyy-mm-dd)|
|end_procurement_date|query|string(date)|false|仕入日で絞込：終了日(yyyy-mm-dd)|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|supplier_ids[]|query|[integer(int64)]|false|仕入先の取引先ID|
|business_ids[]|query|[string]|false|案件ID<br><br>※ 複数の案件が紐づく仕入は本パラメータでヒットしません|
|procurement_no|query|string|false|仕入No.で絞込|
|payment_status|query|string|false|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|
|payment_status|none|

> Example responses

> 200 Response

```json
{
  "procurements": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_id": 12345,
      "canceled": false,
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "procurement_no": "P211212-00001",
      "internal_subject": "事務用品仕入",
      "procurement_date": "2025-04-01",
      "supplier": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "is_qualified_invoice_issuer": true,
      "payment_status": "not_settled",
      "payments_on": "2025-05-31",
      "payment_method_type": "transfer",
      "payment_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "internal_memo": "重要案件のため優先対応",
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_withholding_tax": 10000,
      "registered_at": "2025-01-15T10:30:00+09:00",
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      }
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="仕入一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|仕入一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="仕入一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|procurements|[[ProcurementDigest](#schemaprocurementdigest)]|true|none|none|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 仕入登録

<a id="opIdcreate_procurement"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/procurements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "internal_subject": "事務用品仕入",
    "procurement_date": "2025-04-01",
    "supplier_id": 1001,
    "is_qualified_invoice_issuer": true,
    "payments_on": "2025-05-31",
    "payment_method_type": "transfer",
    "payment_partner_id": 1002,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "事務用品購入",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12346,
        "segment_tag_3_id": 12347
      }
    ]
  }'
```

`POST /procurements`

<h2 id="">概要</h2>
<p>新しい仕入を登録します。
仕入先への仕入情報を登録し、支払管理や会計連携に利用できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>procurement_date : 仕入日</p>
</li>
<li>
<p>supplier_id : 仕入先の取引先ID</p>
</li>
<li>
<p>payments_on : 支払期日</p>
</li>
<li>
<p>payment_method_type : 支払方法</p>
</li>
<li>
<p>payment_partner_id : 支払先の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>
</li>
<li>
<p>internal_subject : 仕入タイトル</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
</ul>
<h2 id="_4">注意点</h2>
<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>
<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>
<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>
<ul>
<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>
<li>
<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>
<ul>
<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>
<li>
<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>
<ul>
<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>
<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>案件・発注の複数紐付けについて</h3>
<p>仕入は明細(lines)単位で案件(business_id)・発注(purchase_order_id)を紐付けることができます。レスポンスのヘッダーレベルの business / purchase_order_id は明細に紐づくものが単一の場合のみ値が設定され、複数紐づく場合は null になります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12346,
      "segment_tag_3_id": 12347
    }
  ]
}
```

<h3 id="仕入登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|仕入登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» internal_subject|body|string \| null|false|仕入タイトル|
|» procurement_date|body|string(date)|true|仕入日|
|» supplier_id|body|integer(int64)|true|仕入先の取引先ID|
|» is_qualified_invoice_issuer|body|boolean \| null|false|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|» payments_on|body|string(date)|true|支払期日|
|» payment_method_type|body|[PaymentMethodType](#schemapaymentmethodtype)|true|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|» payment_partner_id|body|integer(int64)|true|支払先の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[ProcurementLineParams](#schemaprocurementlineparams)]|true|明細リスト|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_method_type|transfer|
|» payment_method_type|cash|
|» payment_method_type|bill_payable|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="仕入登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|仕入登録のレスポンス|[ProcurementMinimalResponse](#schemaprocurementminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 仕入詳細取得

<a id="opIdget_procurement"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/procurements/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /procurements/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの仕入の詳細情報を取得します。
仕入の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。
</p>

<h3 id="仕入詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|仕入ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "procurement_no": "P211212-00001",
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "payment_status": "not_settled",
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "lines": [
    {
      "line_no": 1,
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "withholding_enabled": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "purchase_order": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "purchase_order_no": "PO211212-00001"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="仕入詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|仕入詳細取得のレスポンス|[ProcurementDetail](#schemaprocurementdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 仕入更新

<a id="opIdupdate_procurement"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/procurements/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "internal_subject": "事務用品仕入",
    "procurement_date": "2025-04-01",
    "supplier_id": 1001,
    "is_qualified_invoice_issuer": true,
    "payments_on": "2025-05-31",
    "payment_method_type": "transfer",
    "payment_partner_id": 1002,
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "事務用品購入",
        "quantity": 100,
        "uom_name": "個",
        "unit_price": 1000,
        "withholding_enabled": false,
        "is_manual_tax_entry": false,
        "tax": 10000,
        "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "accounting_reporting_section_id": 67890,
        "item_tag_id": 2001,
        "memo_tags": [
          3001
        ],
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12346,
        "segment_tag_3_id": 12347
      }
    ]
  }'
```

`PATCH /procurements/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの仕入を更新します。
仕入の基本情報を部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>internal_subject : 仕入タイトル</p>
</li>
<li>
<p>procurement_date : 仕入日</p>
</li>
<li>
<p>supplier_id : 仕入先の取引先ID</p>
</li>
<li>
<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>
</li>
<li>
<p>payments_on : 支払期日</p>
</li>
<li>
<p>payment_method_type : 支払方法</p>
</li>
<li>
<p>payment_partner_id : 支払先の取引先ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<h3>明細行のpurchase_order_id（発注ID）について</h3>
<p>linesを指定して明細を更新する場合、各明細行でpurchase_order_idを省略する、またはnullを指定すると発注との紐づけが解除されます。既存の発注との紐づけを維持したい場合は、必ずpurchase_order_idを指定してください。</p>
<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>
<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>
<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>
<ul>
<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>
<li>
<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>
<ul>
<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>
<li>
<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>
<ul>
<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>
<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>
</ul>
</li>
</ul>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12346,
      "segment_tag_3_id": 12347
    }
  ]
}
```

<h3 id="仕入更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|仕入ID|
|body|body|object|false|仕入更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» internal_subject|body|string \| null|false|仕入タイトル|
|» procurement_date|body|string(date)|false|仕入日|
|» supplier_id|body|integer(int64)|false|仕入先の取引先ID|
|» is_qualified_invoice_issuer|body|boolean \| null|false|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|» payments_on|body|string(date)|false|支払期日|
|» payment_method_type|body|[PaymentMethodType](#schemapaymentmethodtype)|false|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|» payment_partner_id|body|integer(int64)|false|支払先の取引先ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[ProcurementUpdateLineParams](#schemaprocurementupdatelineparams)]|false|明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_method_type|transfer|
|» payment_method_type|cash|
|» payment_method_type|bill_payable|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="仕入更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|仕入更新のレスポンス|[ProcurementMinimalResponse](#schemaprocurementminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 仕入取消

<a id="opIdcancel_procurement"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/procurements/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /procurements/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの仕入を取り消します。</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>company_id : 事業所ID</p>
</li>
</ul>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="仕入取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|仕入ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|仕入取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="仕入取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|仕入取消のレスポンス|[ProcurementMinimalResponse](#schemaprocurementminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 決済ステータス変更

<a id="opIdupdate_procurement_payment_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/procurements/01JPP4FD1CVQWCDSWA90VE1ZTM/payment_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "payment_status": "settled"
  }'
```

`PUT /procurements/{id}/payment_status`

<h2 id="">概要</h2>
<p>指定されたIDの仕入の決済ステータスを変更します。</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>payment_status : 決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)</p>
</li>
</ul>
<h2 id="_3">注意点</h2>
<p>freee会計と連携している仕入の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "payment_status": "settled"
}
```

<h3 id="決済ステータス変更-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|仕入ID|
|body|body|[ProcurementPaymentStatusChangeRequest](#schemaprocurementpaymentstatuschangerequest)|true|決済ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» payment_status|body|[ManualSettlementStatus](#schemamanualsettlementstatus)|true|手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payment_status|not_settled|
|» payment_status|partially_settled|
|» payment_status|settled|
|» payment_status|none|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="決済ステータス変更-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|仕入更新のレスポンス|[ProcurementMinimalResponse](#schemaprocurementminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-advancereceipts">advance_receipts</h1>

前受金

## 前受金一覧

<a id="opIdget_advance_receipts"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/advance_receipts?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /advance_receipts`

<h2 id="">概要</h2>
<p>前受金の一覧を取得します。
登録されている前受金情報を一覧形式で取得できます。
各種フィルタ条件を指定することで、特定の条件に合致する前受金のみを取得することが可能です。
</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>advance_receipt_no : 前受金No.</p>
</li>
<li>
<p>start_advance_receipt_date : 前受金発生日(絞り込み開始)</p>
</li>
<li>
<p>end_advance_receipt_date : 前受金発生日(絞り込み終了)</p>
</li>
<li>
<p>start_registered_date : 前受金登録日(絞り込み開始)</p>
</li>
<li>
<p>end_registered_date : 前受金登録日(絞り込み終了)</p>
</li>
<li>
<p>start_last_updated_date : 前受金更新日(絞り込み開始)</p>
</li>
<li>
<p>end_last_updated_date : 前受金更新日(絞り込み終了)</p>
</li>
<li>
<p>customer_ids : 顧客の取引先ID(複数指定可)</p>
</li>
<li>
<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>
</li>
<li>
<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>
</li>
<li>
<p>business_ids : 案件ID(複数指定可)</p>
</li>
<li>
<p>billing_status : 請求書送付ステータス</p>
</li>
<li>
<p>collection_status : 決済ステータス</p>
</li>
<li>
<p>canceled : 取消状態(デフォルト:false)</p>
</li>
</ul>
<p>
`limit`と`offset`パラメータを使用してページネーションが可能です。
デフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。
</p>

<h3 id="前受金一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|advance_receipt_no|query|string|false|前受金No.で絞込|
|start_advance_receipt_date|query|string(date)|false|前受金発生日で絞込：開始日(yyyy-mm-dd)|
|end_advance_receipt_date|query|string(date)|false|前受金発生日で絞込：終了日(yyyy-mm-dd)|
|start_registered_date|query|string(date)|false|前受金登録日で絞込：開始日(yyyy-mm-dd)|
|end_registered_date|query|string(date)|false|前受金登録日で絞込：終了日(yyyy-mm-dd)|
|start_last_updated_date|query|string(date)|false|前受金更新日で絞込：開始日(yyyy-mm-dd)|
|end_last_updated_date|query|string(date)|false|前受金更新日で絞込：終了日(yyyy-mm-dd)|
|customer_ids[]|query|[integer(int64)]|false|顧客の取引先ID|
|charge_employee_ids[]|query|[integer(int64)]|false|社内担当者の従業員ID<br><br>charge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|charge_member_ids[]|query|[string]|false|社内担当者のメンバーID<br><br>charge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。|
|business_ids[]|query|[string]|false|案件ID|
|billing_status|query|string|false|請求書送付ステータス (未請求: not_billed, 一部請求済: partially_billed, 請求済: billed, なし: none)|
|collection_status|query|string|false|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)|
|canceled|query|boolean|false|取消状態|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：20, 最小：1, 最大：100）|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|

#### Enumerated Values

|Parameter|Value|
|---|---|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|

> Example responses

> 200 Response

```json
{
  "advance_receipts": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_id": 1001,
      "canceled": false,
      "registered_at": "2025-01-15T10:30:00+09:00",
      "registered_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "registered_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "last_updated_at": "2025-01-16T14:45:00+09:00",
      "last_updated_by": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "last_updated_by_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "total_amount": 100000,
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "advance_receipt_no": "AR211212-00001",
      "advance_receipt_date": "2025-04-01",
      "internal_subject": "サンプル前受金",
      "customer_order_no": "PO-12345",
      "customer": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "billing_status": {},
      "billing_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "bills_on": "2025-04-15",
      "is_reduced": false,
      "invoice_subject": "サンプル請求書件名",
      "invoice_note": "請求書備考テキスト",
      "collecting_partner": {
        "id": 1001,
        "name": "株式会社サンプル",
        "code": "P-001"
      },
      "collection_method_type": "transfer",
      "collects_on": "2025-04-30",
      "collection_status": {},
      "charge_employee": {
        "id": 101,
        "display_name": "田中太郎"
      },
      "charge_member": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "display_name": "山田花子"
      },
      "reporting_section": {
        "id": 67890,
        "name": "開発部"
      },
      "internal_memo": "重要案件のため優先対応",
      "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "consumption_total_amount": 50000,
      "remaining_total_expense": 50000
    }
  ],
  "meta": {
    "limit_value": 50,
    "current_offset": 0,
    "next_offset": 50,
    "prev_offset": 0,
    "total_count": 200
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="前受金一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advance_receipts|[[AdvanceReceiptDigest](#schemaadvancereceiptdigest)]|true|none|前受金一覧|
|meta|[PaginationMeta](#schemapaginationmeta)|true|none|ページネーション情報|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金登録

<a id="opIdcreate_advance_receipt"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "account_item_id": 12345,
    "accounting_reporting_section_id": 67890,
    "advance_receipt_date": "2024-01-31",
    "billing_partner_id": 1002,
    "bills_on": "2024-02-01",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "collecting_partner_id": 1003,
    "collection_method_type": "transfer",
    "collects_on": "2024-02-28",
    "customer_id": 1001,
    "customer_order_no": "C-PO-20211212-001",
    "internal_memo": "重要案件のため優先対応",
    "internal_subject": "前受金サンプル案件",
    "invoice_note": "お振込期限は月末までとなります",
    "invoice_subject": "前受金請求書件名",
    "invoice_template_id": 10002,
    "item_tag_id": 2001,
    "lines": [
      {
        "line_type": "basic",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "前受金明細の摘要",
        "quantity": 1,
        "unit_price": 100000,
        "uom_name": "個",
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ],
    "memo_tags": [
      3001
    ],
    "reporting_section_id": 67890,
    "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "segment_tag_1_id": 12345,
    "segment_tag_2_id": 12345,
    "segment_tag_3_id": 12345
  }'
```

`POST /advance_receipts`

<h2 id="">概要</h2>
<p>新しい前受金を登録します。
顧客から受け取った前受金情報を登録し、請求・入金管理に利用できます。
</p>
<h2 id="_2">定義</h2>
<h3>必須項目</h3>
<ul>
<li>
<p>account_item_id : 勘定科目ID</p>
</li>
<li>
<p>advance_receipt_date : 前受金発生日</p>
</li>
<li>
<p>billing_partner_id : 請求先の取引先ID</p>
</li>
<li>
<p>bills_on : 請求日</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>collecting_partner_id : 入金元の取引先ID</p>
</li>
<li>
<p>collection_method_type : 入金方法</p>
</li>
<li>
<p>collects_on : 入金期日</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト</p>
</li>
</ul>
<h3>任意項目</h3>
<ul>
<li>
<p>sales_order_id : 受注ID（受注に紐づける場合）</p>
</li>
<li>
<p>accounting_reporting_section_id : 会計計上部門ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>internal_subject : 前受金タイトル</p>
</li>
<li>
<p>invoice_note : 請求書の備考欄に掲載する内容</p>
</li>
<li>
<p>invoice_subject : 請求書件名</p>
</li>
<li>
<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>
</li>
<li>
<p>item_tag_id : 会計品目タグID</p>
</li>
<li>
<p>memo_tags : メモタグID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>segment_tag_1_id : セグメント1のID</p>
</li>
<li>
<p>segment_tag_2_id : セグメント2のID</p>
</li>
<li>
<p>segment_tag_3_id : セグメント3のID</p>
</li>
</ul>
<h2 id="_3">注意点</h2>
<h3>案件の必須化について</h3>
<p>前受金は案件(business_id)に紐づけて登録する必要があります。案件IDの指定は必須です。</p>
<h3>請求の自動作成について</h3>
<p>前受金を登録すると、請求情報が自動で作成されます。売上のように請求の管理方式を指定することはできません。</p>

> Body parameter

```json
{
  "company_id": 1,
  "account_item_id": 12345,
  "accounting_reporting_section_id": 67890,
  "advance_receipt_date": "2024-01-31",
  "billing_partner_id": 1002,
  "bills_on": "2024-02-01",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "collects_on": "2024-02-28",
  "customer_id": 1001,
  "customer_order_no": "C-PO-20211212-001",
  "internal_memo": "重要案件のため優先対応",
  "internal_subject": "前受金サンプル案件",
  "invoice_note": "お振込期限は月末までとなります",
  "invoice_subject": "前受金請求書件名",
  "invoice_template_id": 10002,
  "item_tag_id": 2001,
  "lines": [
    {
      "line_type": "basic",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "前受金明細の摘要",
      "quantity": 1,
      "unit_price": 100000,
      "uom_name": "個",
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ],
  "memo_tags": [
    3001
  ],
  "reporting_section_id": 67890,
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

<h3 id="前受金登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|前受金登録リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» account_item_id|body|integer(int64)|true|勘定科目ID|
|» accounting_reporting_section_id|body|integer(int64) \| null|false|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|» advance_receipt_date|body|string(date)|true|前受金発生日|
|» billing_partner_id|body|integer(int64)|true|請求先の取引先ID|
|» bills_on|body|string(date)|true|請求日|
|» business_id|body|string|true|案件ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» collecting_partner_id|body|integer(int64)|true|入金元の取引先ID|
|» collection_method_type|body|[CollectionMethodType](#schemacollectionmethodtype)|true|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|» collects_on|body|string(date)|true|入金期日|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» internal_subject|body|string \| null|false|前受金タイトル|
|» invoice_note|body|string \| null|false|請求書の備考欄に掲載する内容|
|» invoice_subject|body|string \| null|false|請求書件名|
|» invoice_template_id|body|integer(int64) \| null|false|請求書テンプレートID|
|» item_tag_id|body|integer(int64) \| null|false|会計品目タグID|
|» lines|body|[[AdvanceReceiptBasicLineParams](#schemaadvancereceiptbasiclineparams)]|true|明細リスト|
|» memo_tags|body|[integer(int64)]|false|メモタグID|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» sales_order_id|body|string \| null|false|受注ID|
|» segment_tag_1_id|body|integer(int64) \| null|false|セグメントタグ1のID|
|» segment_tag_2_id|body|integer(int64) \| null|false|セグメントタグ2のID|
|» segment_tag_3_id|body|integer(int64) \| null|false|セグメントタグ3のID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» collection_method_type|transfer|
|» collection_method_type|cash|
|» collection_method_type|bill_payable|
|» collection_method_type|direct_debit|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|前受金登録のレスポンス|[AdvanceReceiptMinimalResponse](#schemaadvancereceiptminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金詳細取得

<a id="opIdget_advance_receipt"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /advance_receipts/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの前受金の詳細情報を取得します。
前受金の基本情報に加えて、明細、勘定科目、品目タグ、メモタグ、セグメントタグなどの詳細情報も取得できます。
</p>

<h3 id="前受金詳細取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|id|path|string|true|前受金ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 1001,
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "total_amount": 100000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "advance_receipt_no": "AR211212-00001",
  "advance_receipt_date": "2025-04-01",
  "internal_subject": "サンプル前受金",
  "customer_order_no": "PO-12345",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "billing_status": {},
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bills_on": "2025-04-15",
  "is_reduced": false,
  "invoice_subject": "サンプル請求書件名",
  "invoice_note": "請求書備考テキスト",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "transfer",
  "collects_on": "2025-04-30",
  "collection_status": {},
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "consumption_total_amount": 50000,
  "remaining_total_expense": 50000,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "invoice_template": {
    "id": 1001,
    "name": "デフォルトテンプレート",
    "layout_name": "standard",
    "is_default": true,
    "report_type": {
      "id": {},
      "name": "請求書"
    }
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      }
    }
  ],
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金詳細取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金詳細取得のレスポンス|[AdvanceReceiptDetail](#schemaadvancereceiptdetail)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金更新

<a id="opIdupdate_advance_receipt"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "account_item_id": 12345,
    "accounting_reporting_section_id": 67890,
    "advance_receipt_date": "2024-01-31",
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "customer_id": 1001,
    "customer_order_no": "C-PO-20211212-001",
    "internal_memo": "重要案件のため優先対応",
    "internal_subject": "前受金サンプル案件",
    "item_tag_id": 2001,
    "lines": [
      {
        "line_type": "basic",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "前受金明細の摘要",
        "quantity": 1,
        "unit_price": 100000,
        "uom_name": "個",
        "is_manual_tax_entry": false,
        "tax": 10000
      }
    ],
    "memo_tags": [
      3001
    ],
    "reporting_section_id": 67890,
    "segment_tag_1_id": 12345,
    "segment_tag_2_id": 12345,
    "segment_tag_3_id": 12345
  }'
```

`PATCH /advance_receipts/{id}`

<h2 id="">概要</h2>
<p>指定されたIDの前受金を更新します。
前受金の基本情報を部分的に更新できます。
送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。
</p>
<h2 id="_2">定義</h2>
<h3>更新可能項目</h3>
<ul>
<li>
<p>account_item_id : 勘定科目ID</p>
</li>
<li>
<p>advance_receipt_date : 前受金発生日</p>
</li>
<li>
<p>business_id : 案件ID</p>
</li>
<li>
<p>customer_id : 顧客の取引先ID</p>
</li>
<li>
<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>
</li>
<li>
<p>accounting_reporting_section_id : 会計計上部門ID</p>
</li>
<li>
<p>charge_employee_id : 社内担当者の従業員ID</p>
</li>
<li>
<p>charge_member_id : 社内担当者のメンバーID</p>
</li>
<li>
<p>customer_order_no : 顧客注文No.</p>
</li>
<li>
<p>internal_memo : 社内メモ</p>
</li>
<li>
<p>internal_subject : 前受金タイトル</p>
</li>
<li>
<p>item_tag_id : 会計品目タグID</p>
</li>
<li>
<p>memo_tags : メモタグID</p>
</li>
<li>
<p>reporting_section_id : 担当部門ID</p>
</li>
<li>
<p>segment_tag_1_id : セグメント1のID</p>
</li>
<li>
<p>segment_tag_2_id : セグメント2のID</p>
</li>
<li>
<p>segment_tag_3_id : セグメント3のID</p>
</li>
</ul>
<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>
<h2 id="_3">注意点</h2>
<h3>明細行の金額再計算について</h3>
<p>前受金を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>
<ul>
<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>
<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>
<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>
</ul>
<h3>請求書への反映について</h3>
<p>発行済みの請求書がある場合、前受金情報を更新すると請求データは更新されますが、請求書の内容には自動で反映されません。請求書の内容を更新するには、再発行が必要です。</p>

> Body parameter

```json
{
  "company_id": 1,
  "account_item_id": 12345,
  "accounting_reporting_section_id": 67890,
  "advance_receipt_date": "2024-01-31",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "customer_order_no": "C-PO-20211212-001",
  "internal_memo": "重要案件のため優先対応",
  "internal_subject": "前受金サンプル案件",
  "item_tag_id": 2001,
  "lines": [
    {
      "line_type": "basic",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "前受金明細の摘要",
      "quantity": 1,
      "unit_price": 100000,
      "uom_name": "個",
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ],
  "memo_tags": [
    3001
  ],
  "reporting_section_id": 67890,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

<h3 id="前受金更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|前受金ID|
|body|body|object|false|前受金更新リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» account_item_id|body|integer(int64)|false|勘定科目ID|
|» accounting_reporting_section_id|body|integer(int64) \| null|false|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|» advance_receipt_date|body|string(date)|false|前受金発生日|
|» business_id|body|string|false|案件ID|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» customer_id|body|integer(int64)|false|顧客の取引先ID|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» internal_subject|body|string \| null|false|前受金タイトル|
|» item_tag_id|body|integer(int64) \| null|false|会計品目タグID|
|» lines|body|[[AdvanceReceiptBasicLineParams](#schemaadvancereceiptbasiclineparams)]|false|明細リスト|
|» memo_tags|body|[integer(int64)]|false|メモタグID|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» segment_tag_1_id|body|integer(int64) \| null|false|セグメントタグ1のID|
|» segment_tag_2_id|body|integer(int64) \| null|false|セグメントタグ2のID|
|» segment_tag_3_id|body|integer(int64) \| null|false|セグメントタグ3のID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金更新のレスポンス|[AdvanceReceiptMinimalResponse](#schemaadvancereceiptminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金取消

<a id="opIdcancel_advance_receipt"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM/cancellation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1
  }'
```

`POST /advance_receipts/{id}/cancellation`

<h2 id="">概要</h2>
<p>指定されたIDの前受金を取り消します。</p>

> Body parameter

```json
{
  "company_id": 1
}
```

<h3 id="前受金取消-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|前受金ID|
|body|body|[WithCompanyId](#schemawithcompanyid)|false|前受金取消リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金取消-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金取消のレスポンス|[AdvanceReceiptMinimalResponse](#schemaadvancereceiptminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金取崩（売上登録）

<a id="opIdreduce_advance_receipt"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM/reduction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "revenue_recognition_date": "2024-01-31",
    "customer_id": 1001,
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "subject": "売上サンプル案件",
    "customer_order_no": "C-PO-20211212-001",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "lines": [
      {
        "line_type": "basic",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "売上明細の摘要",
        "quantity": 1,
        "unit_price": 100000,
        "uom_name": "個",
        "item_tag_id": 2001,
        "accounting_reporting_section_id": 67890,
        "memo_tags": [
          3001
        ],
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`POST /advance_receipts/{id}/reduction`

<h2 id="">概要</h2>
<p>指定されたIDの前受金を取り崩して売上を登録します。</p>

> Body parameter

```json
{
  "company_id": 1,
  "revenue_recognition_date": "2024-01-31",
  "customer_id": 1001,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "売上サンプル案件",
  "customer_order_no": "C-PO-20211212-001",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "lines": [
    {
      "line_type": "basic",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "売上明細の摘要",
      "quantity": 1,
      "unit_price": 100000,
      "uom_name": "個",
      "item_tag_id": 2001,
      "accounting_reporting_section_id": 67890,
      "memo_tags": [
        3001
      ],
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="前受金取崩（売上登録）-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|前受金ID|
|body|body|object|false|前受金取崩（売上登録）リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» revenue_recognition_date|body|string(date)|true|売上日|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» business_id|body|string \| null|false|案件ID|
|» subject|body|string \| null|false|売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» sales_order_id|body|string \| null|false|受注ID|
|» delivery_id|body|string \| null|false|納品ID|
|» lines|body|[[AdvanceReceiptReductionLineParams](#schemaadvancereceiptreductionlineparams)]|true|明細リスト|

> Example responses

> 201 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金取崩（売上登録）-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|前受金取崩のレスポンス|[AdvanceReceiptReductionResult](#schemaadvancereceiptreductionresult)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 前受金取崩（定期売上登録）

<a id="opIdcreate_periodic_reduced_sale"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM/periodic_reduction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "customer_id": 1001,
    "recurrence_rule": {
      "start_date": "2025-04-01",
      "end_date": "2026-03-31",
      "interval": "1",
      "day_of_month": {}
    },
    "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "subject": "サンプル案件定期売上の件",
    "customer_order_no": "C-PO-20211212-001",
    "charge_employee_id": 101,
    "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "reporting_section_id": 67890,
    "internal_memo": "重要案件のため優先対応",
    "lines": [
      {
        "line_type": "basic",
        "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "description": "売上明細の摘要",
        "quantity": 1,
        "unit_price": 100000,
        "uom_name": "個",
        "item_tag_id": 2001,
        "accounting_reporting_section_id": 67890,
        "memo_tags": [
          3001
        ],
        "is_manual_tax_entry": false,
        "tax": 10000,
        "segment_tag_1_id": 12345,
        "segment_tag_2_id": 12345,
        "segment_tag_3_id": 12345
      }
    ]
  }'
```

`POST /advance_receipts/{id}/periodic_reduction`

<h2 id="">概要</h2>
<p>指定されたIDの前受金を取り崩す定期売上を登録します。繰り返しルールに従って売上予定が作成されます。</p>

> Body parameter

```json
{
  "company_id": 1,
  "customer_id": 1001,
  "recurrence_rule": {
    "start_date": "2025-04-01",
    "end_date": "2026-03-31",
    "interval": "1",
    "day_of_month": {}
  },
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "サンプル案件定期売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "売上明細の摘要",
      "quantity": 1,
      "unit_price": 100000,
      "uom_name": "個",
      "item_tag_id": 2001,
      "accounting_reporting_section_id": 67890,
      "memo_tags": [
        3001
      ],
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

<h3 id="前受金取崩（定期売上登録）-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|前受金ID|
|body|body|object|false|前受金取崩（定期売上登録）リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» customer_id|body|integer(int64)|true|顧客の取引先ID|
|» recurrence_rule|body|[RecurrenceRule](#schemarecurrencerule)|true|繰り返しルール|
|» business_id|body|string \| null|false|案件ID|
|» subject|body|string \| null|false|定期売上タイトル|
|» customer_order_no|body|string \| null|false|顧客注文No.|
|» charge_employee_id|body|[ChargeEmployeeId](#schemachargeemployeeid)|false|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|» charge_member_id|body|[ChargeMemberId](#schemachargememberid)|false|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|» reporting_section_id|body|[ReportingSectionId](#schemareportingsectionid)|false|担当部門ID<br><br>※ 親部門のIDは指定できません|
|» internal_memo|body|[InternalMemo](#schemainternalmemo)|false|社内メモ|
|» lines|body|[[AdvanceReceiptReductionLineParams](#schemaadvancereceiptreductionlineparams)]|true|明細リスト|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="前受金取崩（定期売上登録）-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金取崩（定期売上登録）のレスポンス|[AdvanceReceiptPeriodicReductionResult](#schemaadvancereceiptperiodicreductionresult)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 決済ステータス変更

<a id="opIdupdate_advance_receipt_collection_status"></a>

> Code samples

```bash
curl https://api.freee.co.jp/sm/advance_receipts/01JPP4FD1CVQWCDSWA90VE1ZTM/collection_status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "company_id": 1,
    "collection_status": "settled"
  }'
```

`PUT /advance_receipts/{id}/collection_status`

<h2 id="">概要</h2>
<p>指定されたIDの前受金の決済ステータスを変更します。</p>
<h2 id="_2">定義</h2>
<ul>
<li>
<p>collection_status : 決済ステータス (未決済: not_settled, 決済済み: settled, 対象外: none)</p>
</li>
</ul>
<h2 id="_3">注意点</h2>
<p>freee会計と連携している前受金の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>

> Body parameter

```json
{
  "company_id": 1,
  "collection_status": "settled"
}
```

<h3 id="決済ステータス変更-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|前受金ID|
|body|body|[AdvanceReceiptCollectionStatusChangeRequest](#schemaadvancereceiptcollectionstatuschangerequest)|true|決済ステータス変更リクエスト|
|» company_id|body|integer(int64)|true|事業所ID|
|» collection_status|body|string|true|決済ステータス (未決済: not_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» collection_status|not_settled|
|» collection_status|settled|
|» collection_status|none|

> Example responses

> 200 Response

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 409 Response

```json
{
  "status_code": 409,
  "errors": [
    {
      "codes": [
        "conflict"
      ],
      "messages": [
        "リソースが競合しています。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="決済ステータス変更-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|前受金更新のレスポンス|[AdvanceReceiptMinimalResponse](#schemaadvancereceiptminimalresponse)|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|409|Conflict|Conflict - リソースの競合|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

<h1 id="freee販売-api-master">master</h1>

関連マスタ

## 案件フェーズ一覧

<a id="opIdget_master_business_phases"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/business_phases?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/business_phases`

<h2 id="">概要</h2>
<p>案件フェーズ一覧を取得します。
使用可能なもののみを返却します。
</p>

<h3 id="案件フェーズ一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "business_phases": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "name": "引き合い"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件フェーズ一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|案件一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="案件フェーズ一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_phases|[[BusinessPhase-2](#schemabusinessphase-2)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 受注確度一覧

<a id="opIdget_sales_progressions"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/sales_progressions?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/sales_progressions`

<h2 id="">概要</h2>
<p>受注確度情報を取得します。
使用可能なもののみを返却します。
</p>

<h3 id="受注確度一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "sales_progressions": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "name": "A"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="受注確度一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|営業進捗一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="受注確度一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales_progressions|[[SalesProgression-2](#schemasalesprogression-2)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 商品一覧

<a id="opIdget_master_items"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/items?company_id=1&type=sales' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/items`

<h2 id="">概要</h2>
<p>商品情報を取得します。
使用可能なもののみを返却します。
</p>

<h3 id="商品一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：100, 最小：1, 最大：500）|
|type|query|string|true|業務区分 (sales: 販売系, procurement: 調達系)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sales|
|type|procurement|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "code": "ITEM-001",
      "name": "サンプル商品",
      "display_name": "サンプル商品（表示用）",
      "uom_name": "個",
      "unit_price": 1000,
      "tax_code": 128,
      "item_tag_id": 2001,
      "memo_tag_ids": [
        3001
      ],
      "quantity": 10,
      "account_item_id": 12345,
      "reduced": false
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="商品一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|商品一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="商品一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[MasterItem](#schemamasteritem)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 明細取引タイプ一覧

<a id="opIdget_master_deal_line_types"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/deal_line_types?company_id=1&type=sales' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/deal_line_types`

<h2 id="">概要</h2>
<p>明細取引タイプ一覧を取得します。
使用停止中のものはレスポンスに含まれません。
</p>

<h3 id="明細取引タイプ一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|type|query|string|true|利用区分: 販売系、調達系どちらの明細取引タイプを取得するか|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|sales|
|type|procurement|

> Example responses

> 200 Response

```json
{
  "deal_line_types": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "code": "LT-0000000001",
      "name": "課税売上",
      "type": "sales",
      "account_item_id": 12345,
      "tax_code": 128,
      "reduced": false,
      "is_default": false
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="明細取引タイプ一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|明細取引タイプ一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="明細取引タイプ一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deal_line_types|[[DealLineType](#schemadeallinetype)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 従業員一覧

<a id="opIdget_master_employees"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/employees?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/employees`

<h2 id="">概要</h2>
<p>従業員一覧を取得します。
使用可能なもののみを返却します。
</p>

<h3 id="従業員一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：100, 最小：1, 最大：500）|

> Example responses

> 200 Response

```json
{
  "employees": [
    {
      "id": 101,
      "num": "A001",
      "display_name": "山田太郎"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="従業員一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|従業員一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="従業員一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employees|[[Employee-2](#schemaemployee-2)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## メンバー一覧

<a id="opIdget_master_members"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/members?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/members`

<h2 id="">概要</h2>
<p>メンバー一覧を取得します。
使用可能なもののみを返却します。
</p>

<h3 id="メンバー一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|
|offset|query|integer(int32)|false|取得レコードのオフセット（デフォルト：0）|
|limit|query|integer(int32)|false|取得レコードの件数（デフォルト：100, 最小：1, 最大：500）|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "num": "A001",
      "display_name": "山田太郎"
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="メンバー一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|メンバー一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="メンバー一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[MasterMember](#schemamastermember)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

## 案件カスタム項目定義一覧

<a id="opIdget_master_custom_fields_business_definitions"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/sm/master/custom_fields/business/definitions?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /master/custom_fields/business/definitions`

<h2 id="">概要</h2>
<p>
カスタム項目定義の一覧を取得します。
使用可能なもののみを返却します。
</p>

<h3>入力形式の一覧</h3>
<ul>
  <li><code>text</code>: 一行テキスト</li>
  <li><code>textarea</code>: 複数行テキスト</li>
  <li><code>amount</code>: 金額</li>
  <li><code>quantity</code>: 数量</li>
  <li><code>number</code>: 数値</li>
  <li><code>date</code>: 日付</li>
  <li><code>enum</code>: プルダウン</li>
  <li><code>partner</code>: 取引先</li>
  <li><code>employee</code>: 従業員</li>
  <li><code>section</code>: 部門</li>
  <li><code>master_item</code>: 商品</li>
  <li><code>member</code>: メンバー</li>
</ul>

<h3 id="案件カスタム項目定義一覧-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer(int64)|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "custom_field_definitions": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "key": "custom_field_001",
      "display_name": "プロジェクトコード",
      "type": "text",
      "required": false,
      "description": "プロジェクトを識別するためのコード"
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "key": "custom_field_002",
      "display_name": "詳細説明",
      "type": "textarea",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTO",
      "key": "custom_field_003",
      "display_name": "契約金額",
      "type": "amount",
      "required": true,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTP",
      "key": "custom_field_004",
      "display_name": "数量",
      "type": "quantity",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTQ",
      "key": "custom_field_005",
      "display_name": "重要度",
      "type": "number",
      "required": false,
      "description": null,
      "unit": "点"
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTR",
      "key": "custom_field_006",
      "display_name": "契約開始日",
      "type": "date",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTS",
      "key": "custom_field_007",
      "display_name": "優先度",
      "type": "enum",
      "required": false,
      "description": null,
      "enumerations": [
        {
          "id": "01JPP4FD1CVQWCDSWA90VE1ZTT",
          "name": "高",
          "usable": true
        },
        {
          "id": "01JPP4FD1CVQWCDSWA90VE1ZTU",
          "name": "中",
          "usable": true
        },
        {
          "id": "01JPP4FD1CVQWCDSWA90VE1ZTV",
          "name": "低",
          "usable": false
        }
      ]
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTW",
      "key": "custom_field_008",
      "display_name": "担当取引先",
      "type": "partner",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTX",
      "key": "custom_field_009",
      "display_name": "担当従業員",
      "type": "employee",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTY",
      "key": "custom_field_010",
      "display_name": "担当部門",
      "type": "section",
      "required": false,
      "description": null
    },
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTZ",
      "key": "custom_field_011",
      "display_name": "関連商品",
      "type": "master_item",
      "required": false,
      "description": null
    }
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "codes": [
        "bad_request"
      ],
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

> 403 Response

```json
{
  "status_code": 403,
  "errors": [
    {
      "codes": [
        "forbidden"
      ],
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "not_found"
      ],
      "messages": [
        "指定されたリソースが見つかりませんでした。"
      ]
    }
  ]
}
```

> 429 Response

```json
{
  "status_code": 429,
  "errors": [
    {
      "codes": [
        "too_many_requests"
      ],
      "messages": [
        "リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。"
      ]
    }
  ]
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "codes": [
        "internal_server_error"
      ],
      "messages": [
        "システムエラーが発生しました。"
      ]
    }
  ]
}
```

<h3 id="案件カスタム項目定義一覧-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|カスタム項目定義一覧のレスポンス|Inline|
|400|Bad Request|Bad Request - リクエストパラメータが不正|[ProductError](#schemaproducterror)|
|401|Unauthorized|Unauthorized - アクセストークンが無効|[AuthError](#schemaautherror)|
|403|Forbidden|Forbidden - アクセス権限がない|[ProductError](#schemaproducterror)|
|404|Not Found|Not Found - リソースが存在しない|[ProductError](#schemaproducterror)|
|429|Too Many Requests|Too Many Requests - リクエスト回数制限を超えた|[ProductError](#schemaproducterror)|
|500|Internal Server Error|Internal Server Error - システム内で予期しないエラーが発生|[ProductError](#schemaproducterror)|

<h3 id="案件カスタム項目定義一覧-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_field_definitions|[[CustomFieldDefinition](#schemacustomfielddefinition)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write read )
</aside>

# Schemas

<h2 id="tocS_Employee">Employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_Employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "id": 101,
  "display_name": "田中太郎"
}
```

社内担当者

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|従業員ID|
|display_name|string|true|none|従業員名|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "display_name": "山田花子"
}
```

社内担当者

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|メンバーID|
|display_name|string|true|none|メンバー名|

<h2 id="tocS_Partner">Partner</h2>
<!-- backwards compatibility -->
<a id="schemapartner"></a>
<a id="schema_Partner"></a>
<a id="tocSpartner"></a>
<a id="tocspartner"></a>

```json
{
  "id": 1001,
  "name": "株式会社サンプル",
  "code": "P-001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|取引先ID|
|name|string|true|none|取引先名|
|code|string \| null|false|none|取引先コード|

<h2 id="tocS_SalesProgression">SalesProgression</h2>
<!-- backwards compatibility -->
<a id="schemasalesprogression"></a>
<a id="schema_SalesProgression"></a>
<a id="tocSsalesprogression"></a>
<a id="tocssalesprogression"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "B"
}
```

受注確度

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|受注確度ID|
|name|string|true|none|受注確度名称|

<h2 id="tocS_BusinessPhase">BusinessPhase</h2>
<!-- backwards compatibility -->
<a id="schemabusinessphase"></a>
<a id="schema_BusinessPhase"></a>
<a id="tocSbusinessphase"></a>
<a id="tocsbusinessphase"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "引き合い"
}
```

案件フェーズ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|フェーズID|
|name|string|true|none|フェーズ名称|

<h2 id="tocS_ReportingSection">ReportingSection</h2>
<!-- backwards compatibility -->
<a id="schemareportingsection"></a>
<a id="schema_ReportingSection"></a>
<a id="tocSreportingsection"></a>
<a id="tocsreportingsection"></a>

```json
{
  "id": 67890,
  "name": "開発部"
}
```

担当部門

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|部門ID|
|name|string|true|none|部門名|

<h2 id="tocS_BusinessDigest">BusinessDigest</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdigest"></a>
<a id="schema_BusinessDigest"></a>
<a id="tocSbusinessdigest"></a>
<a id="tocsbusinessdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "サンプル案件",
  "business_date": "2025-04-01",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "code": "B-0000000003",
  "canceled": false,
  "closed": false,
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_progression": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "B"
  },
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "引き合い"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|案件ID|
|name|string|true|none|案件名称|
|business_date|string(date) \| null|false|none|案件登録日|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|code|string|true|none|案件コード|
|canceled|boolean|true|none|取消状態|
|closed|boolean|true|none|ロック状態|
|customer|object \| null|false|none|顧客|
|sales_progression|[SalesProgression](#schemasalesprogression)|false|none|受注確度|
|scheduled_completion_date|string(date) \| null|false|none|完了予定日|
|completion_date|string(date) \| null|false|none|完了日|
|business_phase|[BusinessPhase](#schemabusinessphase)|false|none|案件フェーズ|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|

<h2 id="tocS_PaginationMeta">PaginationMeta</h2>
<!-- backwards compatibility -->
<a id="schemapaginationmeta"></a>
<a id="schema_PaginationMeta"></a>
<a id="tocSpaginationmeta"></a>
<a id="tocspaginationmeta"></a>

```json
{
  "limit_value": 50,
  "current_offset": 0,
  "next_offset": 50,
  "prev_offset": 0,
  "total_count": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit_value|integer(int32)|true|none|現在の1ページあたりの件数|
|current_offset|integer(int32)|true|none|現在のオフセット件数|
|next_offset|integer(int32) \| null|false|none|次のオフセット（存在しない場合はnull）|
|prev_offset|integer(int32) \| null|false|none|前のオフセット（存在しない場合はnull）|
|total_count|integer(int32)|true|none|現在のフィルタ条件での総件数|

<h2 id="tocS_ProductError">ProductError</h2>
<!-- backwards compatibility -->
<a id="schemaproducterror"></a>
<a id="schema_ProductError"></a>
<a id="tocSproducterror"></a>
<a id="tocsproducterror"></a>

```json
{
  "status_code": 404,
  "errors": [
    {
      "codes": [
        "company_not_found"
      ],
      "messages": [
        "事業所が見つかりませんでした。"
      ]
    }
  ]
}
```

エラー

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|true|none|HTTPステータスコード|
|errors|[object]|true|none|エラーの詳細|

<h2 id="tocS_AuthError">AuthError</h2>
<!-- backwards compatibility -->
<a id="schemaautherror"></a>
<a id="schema_AuthError"></a>
<a id="tocSautherror"></a>
<a id="tocsautherror"></a>

```json
{
  "message": "ログインをして下さい",
  "code": "invalid_access_token"
}
```

認証エラー

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|エラーメッセージ|
|code|string|false|none|エラーコード|

<h2 id="tocS_WithCompanyId">WithCompanyId</h2>
<!-- backwards compatibility -->
<a id="schemawithcompanyid"></a>
<a id="schema_WithCompanyId"></a>
<a id="tocSwithcompanyid"></a>
<a id="tocswithcompanyid"></a>

```json
{
  "company_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|

<h2 id="tocS_ChargeEmployeeId">ChargeEmployeeId</h2>
<!-- backwards compatibility -->
<a id="schemachargeemployeeid"></a>
<a id="schema_ChargeEmployeeId"></a>
<a id="tocSchargeemployeeid"></a>
<a id="tocschargeemployeeid"></a>

```json
101
```

社内担当者の従業員ID

charge_member_id と同時に指定した場合は charge_member_id が優先されます。

<h2 id="tocS_ChargeMemberId">ChargeMemberId</h2>
<!-- backwards compatibility -->
<a id="schemachargememberid"></a>
<a id="schema_ChargeMemberId"></a>
<a id="tocSchargememberid"></a>
<a id="tocschargememberid"></a>

```json
"01JPP4FD1CVQWCDSWA90VE1ZTM"
```

社内担当者のメンバーID

charge_employee_id と同時に指定した場合は charge_member_id が優先されます。

<h2 id="tocS_CustomerId">CustomerId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerid"></a>
<a id="schema_CustomerId"></a>
<a id="tocScustomerid"></a>
<a id="tocscustomerid"></a>

```json
1001
```

顧客の取引先ID

<h2 id="tocS_ReportingSectionId">ReportingSectionId</h2>
<!-- backwards compatibility -->
<a id="schemareportingsectionid"></a>
<a id="schema_ReportingSectionId"></a>
<a id="tocSreportingsectionid"></a>
<a id="tocsreportingsectionid"></a>

```json
67890
```

担当部門ID<br>
※ 親部門のIDは指定できません

<h2 id="tocS_InternalMemo">InternalMemo</h2>
<!-- backwards compatibility -->
<a id="schemainternalmemo"></a>
<a id="schema_InternalMemo"></a>
<a id="tocSinternalmemo"></a>
<a id="tocsinternalmemo"></a>

```json
"重要案件のため優先対応"
```

社内メモ

<h2 id="tocS_BusinessRequestBase">BusinessRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemabusinessrequestbase"></a>
<a id="schema_BusinessRequestBase"></a>
<a id="tocSbusinessrequestbase"></a>
<a id="tocsbusinessrequestbase"></a>

```json
{
  "name": "サンプル案件",
  "code": "B-0000000001",
  "business_date": "2025-04-01",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "prospect_sales_order": 6000000,
  "sales_progression_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "custom_fields": [
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "value": "PJ-123456"
    },
    {
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "value": 234
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|案件名称|
|code|string|false|none|案件コード（null・空文字での送信不可。POSTの自動採番ON時およびPATCHのキー省略時は省略可能）|
|business_date|string(date) \| null|false|none|案件登録日|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|customer_id|[CustomerId](#schemacustomerid)|false|none|顧客の取引先ID|
|prospect_sales_order|integer(int64)|false|none|受注見込|
|sales_progression_id|string \| null|false|none|受注確度ID|
|scheduled_completion_date|string(date) \| null|false|none|完了予定日|
|completion_date|string(date) \| null|false|none|完了日|
|business_phase_id|string \| null|false|none|案件フェーズID|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|common_business_id|string \| null|false|none|紐付ける案件マスタID（ULID形式）。案件登録時のみ指定可能で、案件更新では紐付けの変更はできません（紐付け済みの案件に対して既存と異なる値を指定した場合はエラー）|
|custom_fields|[object]|false|none|カスタム項目|

<h2 id="tocS_BusinessMinimalResponse">BusinessMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemabusinessminimalresponse"></a>
<a id="schema_BusinessMinimalResponse"></a>
<a id="tocSbusinessminimalresponse"></a>
<a id="tocsbusinessminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|案件ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_CustomFieldPartnerValue">CustomFieldPartnerValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldpartnervalue"></a>
<a id="schema_CustomFieldPartnerValue"></a>
<a id="tocScustomfieldpartnervalue"></a>
<a id="tocscustomfieldpartnervalue"></a>

```json
{
  "type": "partner",
  "id": 1001,
  "name": "サンプル取引先",
  "code": "P-001"
}
```

取引先型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|マスタ型の種別|
|id|integer(int64)|true|none|取引先ID|
|name|string|true|none|取引先名|
|code|string \| null|false|none|取引先コード|

#### Enumerated Values

|Property|Value|
|---|---|
|type|partner|

<h2 id="tocS_CustomFieldEmployeeValue">CustomFieldEmployeeValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldemployeevalue"></a>
<a id="schema_CustomFieldEmployeeValue"></a>
<a id="tocScustomfieldemployeevalue"></a>
<a id="tocscustomfieldemployeevalue"></a>

```json
{
  "type": "employee",
  "id": 101,
  "name": "サンプル従業員"
}
```

従業員型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|マスタ型の種別|
|id|integer(int64)|true|none|従業員ID|
|name|string|true|none|従業員名|

#### Enumerated Values

|Property|Value|
|---|---|
|type|employee|

<h2 id="tocS_CustomFieldSectionValue">CustomFieldSectionValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldsectionvalue"></a>
<a id="schema_CustomFieldSectionValue"></a>
<a id="tocScustomfieldsectionvalue"></a>
<a id="tocscustomfieldsectionvalue"></a>

```json
{
  "type": "section",
  "id": 67890,
  "name": "サンプル部門"
}
```

部門型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|マスタ型の種別|
|id|integer(int64)|true|none|部門ID|
|name|string|true|none|部門名|

#### Enumerated Values

|Property|Value|
|---|---|
|type|section|

<h2 id="tocS_CustomFieldMasterItemValue">CustomFieldMasterItemValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldmasteritemvalue"></a>
<a id="schema_CustomFieldMasterItemValue"></a>
<a id="tocScustomfieldmasteritemvalue"></a>
<a id="tocscustomfieldmasteritemvalue"></a>

```json
{
  "type": "master_item",
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "サンプル商品",
  "code": "I-001"
}
```

商品型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|マスタ型の種別|
|id|string|true|none|商品ID|
|name|string|true|none|商品名|
|code|string \| null|false|none|商品コード|

#### Enumerated Values

|Property|Value|
|---|---|
|type|master_item|

<h2 id="tocS_CustomFieldMemberValue">CustomFieldMemberValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldmembervalue"></a>
<a id="schema_CustomFieldMemberValue"></a>
<a id="tocScustomfieldmembervalue"></a>
<a id="tocscustomfieldmembervalue"></a>

```json
{
  "type": "member",
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "サンプルメンバー"
}
```

メンバー型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|マスタ型の種別|
|id|string|true|none|メンバーID|
|name|string|true|none|メンバー名|

#### Enumerated Values

|Property|Value|
|---|---|
|type|member|

<h2 id="tocS_CustomFieldMasterValue">CustomFieldMasterValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldmastervalue"></a>
<a id="schema_CustomFieldMasterValue"></a>
<a id="tocScustomfieldmastervalue"></a>
<a id="tocscustomfieldmastervalue"></a>

```json
{
  "type": "partner",
  "id": 1001,
  "name": "サンプル取引先",
  "code": "P-001"
}
```

マスタ型カスタム項目の値

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CustomFieldPartnerValue](#schemacustomfieldpartnervalue)|false|none|取引先型カスタム項目の値|
|*oneOf*|[CustomFieldEmployeeValue](#schemacustomfieldemployeevalue)|false|none|従業員型カスタム項目の値|
|*oneOf*|[CustomFieldSectionValue](#schemacustomfieldsectionvalue)|false|none|部門型カスタム項目の値|
|*oneOf*|[CustomFieldMasterItemValue](#schemacustomfieldmasteritemvalue)|false|none|商品型カスタム項目の値|
|*oneOf*|[CustomFieldMemberValue](#schemacustomfieldmembervalue)|false|none|メンバー型カスタム項目の値|

<h2 id="tocS_CustomField">CustomField</h2>
<!-- backwards compatibility -->
<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "value": "サンプル値",
  "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "definition_name": "カスタム項目1"
}
```

カスタム項目

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string \| number \| [CustomFieldMasterValue](#schemacustomfieldmastervalue) \| null|true|none|カスタム項目の値<br>* 文字列型（text, textarea, date）: 文字列<br>* 数値型（number, amount, quantity）: 数値<br>* プルダウン型（enum）: 選択肢の名称（文字列）<br>* マスタ型（partner, employee, section, master_item, member）: マスタ情報オブジェクト|
|definition_id|string|true|none|カスタム項目定義ID|
|definition_name|string|true|none|カスタム項目定義名|

<h2 id="tocS_BusinessDetail">BusinessDetail</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdetail"></a>
<a id="schema_BusinessDetail"></a>
<a id="tocSbusinessdetail"></a>
<a id="tocsbusinessdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "サンプル案件",
  "business_date": "2025-04-01",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "code": "B-0000000003",
  "canceled": false,
  "closed": false,
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_progression": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "B"
  },
  "scheduled_completion_date": "2025-06-30",
  "completion_date": "2025-06-15",
  "business_phase": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "引き合い"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "common_business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "actual_profit": 1000000,
  "sales_totals_excluding_tax": 5000000,
  "procurement_totals_excluding_tax": 3000000,
  "other_cost_totals_excluding_tax": 1000000,
  "prospect_sales_order": 6000000,
  "prospect_purchase_order": 3500000,
  "prospect_other_cost": 1200000,
  "quotation_totals_excluding_tax": 5500000,
  "sales_order_totals_excluding_tax": 5200000,
  "delivered_totals_excluding_tax": 4800000,
  "bill_totals_excluding_tax": 4800000,
  "purchase_order_totals_excluding_tax": 3200000,
  "actual_other_cost": 900000,
  "prospect_profit": 1300000,
  "budget_profit": 1500000,
  "margin_actual_rate_percent": 20.5,
  "budget_total_labor_cost": 2000000,
  "actual_total_labor_cost": 1800000,
  "internal_memo": "重要案件のため優先対応",
  "custom_fields": [
    {
      "value": "サンプルテキスト",
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "definition_name": "カスタム項目1"
    },
    {
      "value": 12345,
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTN",
      "definition_name": "カスタム項目2"
    },
    {
      "value": {
        "type": "partner",
        "id": 1001,
        "name": "サンプル取引先",
        "code": "P-001"
      },
      "definition_id": "01JPP4FD1CVQWCDSWA90VE1ZTO",
      "definition_name": "担当取引先"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|案件ID|
|name|string|true|none|案件名称|
|business_date|string(date) \| null|false|none|案件登録日|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|code|string|true|none|案件コード|
|canceled|boolean|true|none|取消状態|
|closed|boolean|true|none|ロック状態|
|customer|object \| null|false|none|顧客|
|sales_progression|[SalesProgression](#schemasalesprogression)|false|none|受注確度|
|scheduled_completion_date|string(date) \| null|false|none|完了予定日|
|completion_date|string(date) \| null|false|none|完了日|
|business_phase|[BusinessPhase](#schemabusinessphase)|false|none|案件フェーズ|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|common_business_id|string \| null|false|none|案件マスタID（ULID形式）|
|actual_profit|integer(int64) \| null|false|none|粗利(実績)|
|sales_totals_excluding_tax|integer(int64) \| null|false|none|売上合計金額(税抜)|
|procurement_totals_excluding_tax|integer(int64) \| null|false|none|仕入合計金額(税抜)|
|other_cost_totals_excluding_tax|integer(int64) \| null|false|none|その他原価実績|
|prospect_sales_order|integer(int64) \| null|false|none|受注見込|
|prospect_purchase_order|integer(int64) \| null|false|none|発注見込|
|prospect_other_cost|integer(int64) \| null|false|none|その他費用見込|
|quotation_totals_excluding_tax|integer(int64) \| null|false|none|見積合計金額(税抜)|
|sales_order_totals_excluding_tax|integer(int64) \| null|false|none|受注合計金額(税抜)|
|delivered_totals_excluding_tax|integer(int64) \| null|false|none|納品確定金額(税抜)|
|bill_totals_excluding_tax|integer(int64) \| null|false|none|請求合計金額(税抜)|
|purchase_order_totals_excluding_tax|integer(int64) \| null|false|none|発注合計金額(税抜)|
|actual_other_cost|integer(int64) \| null|false|none|その他費用実績|
|prospect_profit|integer(int64) \| null|false|none|粗利(見込)|
|budget_profit|integer(int64) \| null|false|none|受発注差額(税抜)|
|margin_actual_rate_percent|number(float) \| null|false|none|粗利率実績|
|budget_total_labor_cost|integer(int64) \| null|false|none|人件費(予算)<br><br>※freee工数管理と連携している場合のみ値が反映されます<br>|
|actual_total_labor_cost|integer(int64) \| null|false|none|人件費(実績)<br><br>※freee工数管理と連携している場合のみ値が反映されます<br>|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|custom_fields|[[CustomField](#schemacustomfield)]|true|none|カスタム項目一覧|

<h2 id="tocS_ReportingSectionIds">ReportingSectionIds</h2>
<!-- backwards compatibility -->
<a id="schemareportingsectionids"></a>
<a id="schema_ReportingSectionIds"></a>
<a id="tocSreportingsectionids"></a>
<a id="tocsreportingsectionids"></a>

```json
[
  67890
]
```

<h2 id="tocS_DatePeriod">DatePeriod</h2>
<!-- backwards compatibility -->
<a id="schemadateperiod"></a>
<a id="schema_DatePeriod"></a>
<a id="tocSdateperiod"></a>
<a id="tocsdateperiod"></a>

```json
{
  "from": "2025-04-01",
  "to": "2025-06-30"
}
```

発生予定期間

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date)|true|none|開始日|
|to|string(date)|true|none|終了日|

<h2 id="tocS_Business">Business</h2>
<!-- backwards compatibility -->
<a id="schemabusiness"></a>
<a id="schema_Business"></a>
<a id="tocSbusiness"></a>
<a id="tocsbusiness"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "code": "B-001",
  "name": "サンプル案件",
  "closed": false
}
```

案件

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|案件ID|
|code|string|true|none|案件コード|
|name|string|true|none|案件名|
|closed|boolean|true|none|ロック状態|

<h2 id="tocS_CostBudgetBase">CostBudgetBase</h2>
<!-- backwards compatibility -->
<a id="schemacostbudgetbase"></a>
<a id="schema_CostBudgetBase"></a>
<a id="tocScostbudgetbase"></a>
<a id="tocscostbudgetbase"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "cost_budget_no": "CB-0001",
  "canceled": false,
  "type": "procurement",
  "amount_excluding_tax": 100000,
  "date_period": {
    "from": "2025-04-01",
    "to": "2025-06-30"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "memo": "備考テキスト",
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|原価予算ID|
|cost_budget_no|string|true|none|原価予算No.|
|canceled|boolean|true|none|取消状態|
|type|string|true|none|原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)|
|amount_excluding_tax|integer(int64)|true|none|税抜金額|
|date_period|[DatePeriod](#schemadateperiod)|true|none|発生予定期間|
|business|[Business](#schemabusiness)|false|none|案件|
|memo|string \| null|false|none|備考|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

#### Enumerated Values

|Property|Value|
|---|---|
|type|procurement|
|type|external_procurement|
|type|other_cost|

<h2 id="tocS_MasterItemDetail">MasterItemDetail</h2>
<!-- backwards compatibility -->
<a id="schemamasteritemdetail"></a>
<a id="schema_MasterItemDetail"></a>
<a id="tocSmasteritemdetail"></a>
<a id="tocsmasteritemdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "code": "P-001",
  "name": "パンフレットA4"
}
```

商品情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|商品ID|
|code|string \| null|false|none|商品コード|
|name|string|true|none|商品名|

<h2 id="tocS_DealLineTypeDetail">DealLineTypeDetail</h2>
<!-- backwards compatibility -->
<a id="schemadeallinetypedetail"></a>
<a id="schema_DealLineTypeDetail"></a>
<a id="tocSdeallinetypedetail"></a>
<a id="tocsdeallinetypedetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "課税売上10%"
}
```

明細取引タイプ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|明細取引タイプID|
|name|string|true|none|明細取引タイプ名|

<h2 id="tocS_TaxTypeDetail">TaxTypeDetail</h2>
<!-- backwards compatibility -->
<a id="schemataxtypedetail"></a>
<a id="schema_TaxTypeDetail"></a>
<a id="tocStaxtypedetail"></a>
<a id="tocstaxtypedetail"></a>

```json
{
  "code": 10,
  "name": "課税売上10%"
}
```

税区分

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|税区分コード<br>※freee会計 APIで参照可能な税区分のコードです|
|name|string|true|none|税区分名|

<h2 id="tocS_AccountItem">AccountItem</h2>
<!-- backwards compatibility -->
<a id="schemaaccountitem"></a>
<a id="schema_AccountItem"></a>
<a id="tocSaccountitem"></a>
<a id="tocsaccountitem"></a>

```json
{
  "id": 12345,
  "name": "仕入高"
}
```

勘定科目

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|勘定科目ID|
|name|string|true|none|勘定科目名|

<h2 id="tocS_MemoTagDetail">MemoTagDetail</h2>
<!-- backwards compatibility -->
<a id="schemamemotagdetail"></a>
<a id="schema_MemoTagDetail"></a>
<a id="tocSmemotagdetail"></a>
<a id="tocsmemotagdetail"></a>

```json
{
  "id": 3001,
  "name": "重要案件"
}
```

メモタグ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|メモタグID|
|name|string|true|none|メモタグ名|

<h2 id="tocS_ItemTagDetail">ItemTagDetail</h2>
<!-- backwards compatibility -->
<a id="schemaitemtagdetail"></a>
<a id="schema_ItemTagDetail"></a>
<a id="tocSitemtagdetail"></a>
<a id="tocsitemtagdetail"></a>

```json
{
  "id": 2001,
  "name": "印刷物"
}
```

会計品目タグ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|会計品目タグID|
|name|string|true|none|会計品目タグ名|

<h2 id="tocS_SegmentTag">SegmentTag</h2>
<!-- backwards compatibility -->
<a id="schemasegmenttag"></a>
<a id="schema_SegmentTag"></a>
<a id="tocSsegmenttag"></a>
<a id="tocssegmenttag"></a>

```json
{
  "id": 12345,
  "name": "プロジェクトA"
}
```

セグメントタグ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|セグメントタグID|
|name|string|true|none|セグメントタグ名|

<h2 id="tocS_AccountingReportingSectionDetail">AccountingReportingSectionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingreportingsectiondetail"></a>
<a id="schema_AccountingReportingSectionDetail"></a>
<a id="tocSaccountingreportingsectiondetail"></a>
<a id="tocsaccountingreportingsectiondetail"></a>

```json
{
  "id": 1001,
  "name": "営業部"
}
```

会計計上部門

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|部門ID|
|name|string|true|none|部門名|

<h2 id="tocS_ProcurementCostBudget">ProcurementCostBudget</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementcostbudget"></a>
<a id="schema_ProcurementCostBudget"></a>
<a id="tocSprocurementcostbudget"></a>
<a id="tocsprocurementcostbudget"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "cost_budget_no": "CB-0001",
  "canceled": false,
  "type": "procurement",
  "amount_excluding_tax": 100000,
  "date_period": {
    "from": "2025-04-01",
    "to": "2025-06-30"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "memo": "備考テキスト",
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "quantity": 10,
  "uom_name": "個",
  "unit_price": 1000,
  "tax_division": {
    "code": 10,
    "name": "課税売上10%"
  },
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  }
}
```

原価予算 (仕入)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|原価予算ID|
|cost_budget_no|string|true|none|原価予算No.|
|canceled|boolean|true|none|取消状態|
|type|string|true|none|原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)|
|amount_excluding_tax|integer(int64)|true|none|税抜金額|
|date_period|[DatePeriod](#schemadateperiod)|true|none|発生予定期間|
|business|[Business](#schemabusiness)|false|none|案件|
|memo|string \| null|false|none|備考|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|type|string|true|none|none|
|supplier|object \| null|false|none|仕入先|
|payment_partner|object \| null|false|none|支払先|
|master_item|object|false|none|商品|
|deal_line_type|object|true|none|明細取引タイプ|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|tax_division|object|true|none|税区分|
|account_item|object|true|none|勘定科目|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|item_tag|object \| null|false|none|会計品目タグ|
|segment_tag_1|object|false|none|セグメントタグ1|
|segment_tag_2|object|false|none|セグメントタグ2|
|segment_tag_3|object|false|none|セグメントタグ3|
|accounting_reporting_section|object|false|none|会計計上部門|

#### Enumerated Values

|Property|Value|
|---|---|
|type|procurement|
|type|external_procurement|
|type|other_cost|
|type|procurement|

<h2 id="tocS_BasicCostBudget">BasicCostBudget</h2>
<!-- backwards compatibility -->
<a id="schemabasiccostbudget"></a>
<a id="schema_BasicCostBudget"></a>
<a id="tocSbasiccostbudget"></a>
<a id="tocsbasiccostbudget"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "cost_budget_no": "CB-0001",
  "canceled": false,
  "type": "external_procurement",
  "amount_excluding_tax": 100000,
  "date_period": {
    "from": "2025-04-01",
    "to": "2025-06-30"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "memo": "備考テキスト",
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

原価予算 (外部仕入・その他原価)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|原価予算ID|
|cost_budget_no|string|true|none|原価予算No.|
|canceled|boolean|true|none|取消状態|
|type|string|true|none|原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)|
|amount_excluding_tax|integer(int64)|true|none|税抜金額|
|date_period|[DatePeriod](#schemadateperiod)|true|none|発生予定期間|
|business|[Business](#schemabusiness)|false|none|案件|
|memo|string \| null|false|none|備考|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|procurement|
|type|external_procurement|
|type|other_cost|
|type|external_procurement|
|type|other_cost|

<h2 id="tocS_CostBudgetDetail">CostBudgetDetail</h2>
<!-- backwards compatibility -->
<a id="schemacostbudgetdetail"></a>
<a id="schema_CostBudgetDetail"></a>
<a id="tocScostbudgetdetail"></a>
<a id="tocscostbudgetdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "cost_budget_no": "CB-0001",
  "canceled": false,
  "type": "external_procurement",
  "amount_excluding_tax": 100000,
  "date_period": {
    "from": "2025-04-01",
    "to": "2025-06-30"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "memo": "備考テキスト",
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

原価予算詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicCostBudget](#schemabasiccostbudget)|false|none|原価予算 (外部仕入・その他原価)|
|*oneOf*|[ProcurementCostBudget](#schemaprocurementcostbudget)|false|none|原価予算 (仕入)|

<h2 id="tocS_CostBudgetRequestBase">CostBudgetRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemacostbudgetrequestbase"></a>
<a id="schema_CostBudgetRequestBase"></a>
<a id="tocScostbudgetrequestbase"></a>
<a id="tocscostbudgetrequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "memo": "備考テキスト",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 1
}
```

原価予算リクエスト共通

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|period_from_date|string(date)|false|none|期間開始日|
|period_to_date|string(date)|false|none|期間終了日|
|memo|string \| null|false|none|備考|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|integer(int64) \| null|false|none|担当部門ID|

<h2 id="tocS_ProcurementCostBudgetRequestProperties">ProcurementCostBudgetRequestProperties</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementcostbudgetrequestproperties"></a>
<a id="schema_ProcurementCostBudgetRequestProperties"></a>
<a id="tocSprocurementcostbudgetrequestproperties"></a>
<a id="tocsprocurementcostbudgetrequestproperties"></a>

```json
{
  "supplier_id": 1001,
  "payment_partner_id": 1002,
  "quantity": 10,
  "unit_price": 10,
  "uom_name": "個",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "accounting_reporting_section_id": 1,
  "item_tag_id": 2001,
  "memo_tag_ids": [
    3001
  ],
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

原価予算リクエスト 仕入固有プロパティ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supplier_id|integer(int64) \| null|false|none|仕入先の取引先ID|
|payment_partner_id|integer(int64) \| null|false|none|支払先の取引先ID|
|quantity|number(float)|false|none|数量|
|unit_price|number(float)|false|none|単価|
|uom_name|string \| null|false|none|単位|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|false|none|明細取引タイプID|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tag_ids|[integer(int64)]|false|none|メモタグID|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

<h2 id="tocS_ProcurementCostBudgetCreateRequest">ProcurementCostBudgetCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementcostbudgetcreaterequest"></a>
<a id="schema_ProcurementCostBudgetCreateRequest"></a>
<a id="tocSprocurementcostbudgetcreaterequest"></a>
<a id="tocsprocurementcostbudgetcreaterequest"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "memo": "備考テキスト",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 1,
  "supplier_id": 1001,
  "payment_partner_id": 1002,
  "quantity": 10,
  "unit_price": 10,
  "uom_name": "個",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "accounting_reporting_section_id": 1,
  "item_tag_id": 2001,
  "memo_tag_ids": [
    3001
  ],
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345,
  "type": "procurement"
}
```

原価予算登録リクエスト (仕入)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|period_from_date|string(date)|true|none|期間開始日|
|period_to_date|string(date)|true|none|期間終了日|
|memo|string \| null|false|none|備考|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|integer(int64) \| null|false|none|担当部門ID|
|supplier_id|integer(int64) \| null|false|none|仕入先の取引先ID|
|payment_partner_id|integer(int64) \| null|false|none|支払先の取引先ID|
|quantity|number(float)|true|none|数量|
|unit_price|number(float)|true|none|単価|
|uom_name|string \| null|false|none|単位|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tag_ids|[integer(int64)]|false|none|メモタグID|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|procurement|

<h2 id="tocS_BasicCostBudgetRequestProperties">BasicCostBudgetRequestProperties</h2>
<!-- backwards compatibility -->
<a id="schemabasiccostbudgetrequestproperties"></a>
<a id="schema_BasicCostBudgetRequestProperties"></a>
<a id="tocSbasiccostbudgetrequestproperties"></a>
<a id="tocsbasiccostbudgetrequestproperties"></a>

```json
{
  "amount_excluding_tax": 10000
}
```

原価予算リクエスト 外部仕入・その他原価固有プロパティ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_excluding_tax|integer(int64)|false|none|税抜金額|

<h2 id="tocS_BasicCostBudgetCreateRequest">BasicCostBudgetCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabasiccostbudgetcreaterequest"></a>
<a id="schema_BasicCostBudgetCreateRequest"></a>
<a id="tocSbasiccostbudgetcreaterequest"></a>
<a id="tocsbasiccostbudgetcreaterequest"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "memo": "備考テキスト",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 1,
  "amount_excluding_tax": 10000,
  "type": "external_procurement"
}
```

原価予算登録リクエスト (外部仕入・その他原価)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|period_from_date|string(date)|true|none|期間開始日|
|period_to_date|string(date)|true|none|期間終了日|
|memo|string \| null|false|none|備考|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|integer(int64) \| null|false|none|担当部門ID|
|amount_excluding_tax|integer(int64)|true|none|税抜金額|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|external_procurement|
|type|other_cost|

<h2 id="tocS_CostBudgetCreateRequestDetail">CostBudgetCreateRequestDetail</h2>
<!-- backwards compatibility -->
<a id="schemacostbudgetcreaterequestdetail"></a>
<a id="schema_CostBudgetCreateRequestDetail"></a>
<a id="tocScostbudgetcreaterequestdetail"></a>
<a id="tocscostbudgetcreaterequestdetail"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "period_from_date": "2025-04-01",
  "period_to_date": "2025-06-30",
  "memo": "備考テキスト",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 1,
  "amount_excluding_tax": 10000,
  "type": "external_procurement"
}
```

原価予算登録リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicCostBudgetCreateRequest](#schemabasiccostbudgetcreaterequest)|false|none|原価予算登録リクエスト (外部仕入・その他原価)|
|*oneOf*|[ProcurementCostBudgetCreateRequest](#schemaprocurementcostbudgetcreaterequest)|false|none|原価予算登録リクエスト (仕入)|

<h2 id="tocS_CostBudgetMinimalResponse">CostBudgetMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemacostbudgetminimalresponse"></a>
<a id="schema_CostBudgetMinimalResponse"></a>
<a id="tocScostbudgetminimalresponse"></a>
<a id="tocscostbudgetminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

原価予算登録・更新・取消のレスポンス

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|原価予算ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_BusinessPhase-2">BusinessPhase-2</h2>
<!-- backwards compatibility -->
<a id="schemabusinessphase-2"></a>
<a id="schema_BusinessPhase-2"></a>
<a id="tocSbusinessphase-2"></a>
<a id="tocsbusinessphase-2"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "引き合い"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID|
|name|string|true|none|名称|

<h2 id="tocS_SalesProgression-2">SalesProgression-2</h2>
<!-- backwards compatibility -->
<a id="schemasalesprogression-2"></a>
<a id="schema_SalesProgression-2"></a>
<a id="tocSsalesprogression-2"></a>
<a id="tocssalesprogression-2"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "name": "A"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID|
|name|string|true|none|名称|

<h2 id="tocS_MasterItem">MasterItem</h2>
<!-- backwards compatibility -->
<a id="schemamasteritem"></a>
<a id="schema_MasterItem"></a>
<a id="tocSmasteritem"></a>
<a id="tocsmasteritem"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "code": "ITEM-001",
  "name": "サンプル商品",
  "display_name": "サンプル商品（表示用）",
  "uom_name": "個",
  "unit_price": 1000,
  "tax_code": 128,
  "item_tag_id": 2001,
  "memo_tag_ids": [
    3001
  ],
  "quantity": 10,
  "account_item_id": 12345,
  "reduced": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID|
|code|string \| null|false|none|商品コード|
|name|string|true|none|商品名|
|display_name|string|true|none|表示名|
|uom_name|string \| null|false|none|単位|
|unit_price|number(float) \| null|false|none|単価|
|tax_code|integer(int32) \| null|false|none|税区分|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tag_ids|[integer(int64)]|true|none|メモタグID|
|quantity|number(float) \| null|false|none|標準数量|
|account_item_id|integer(int64) \| null|false|none|勘定科目ID|
|reduced|boolean \| null|false|none|軽減税率対象フラグ|

<h2 id="tocS_DealLineType">DealLineType</h2>
<!-- backwards compatibility -->
<a id="schemadeallinetype"></a>
<a id="schema_DealLineType"></a>
<a id="tocSdeallinetype"></a>
<a id="tocsdeallinetype"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "code": "LT-0000000001",
  "name": "課税売上",
  "type": "sales",
  "account_item_id": 12345,
  "tax_code": 128,
  "reduced": false,
  "is_default": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID|
|code|string \| null|false|none|コード|
|name|string|true|none|名称|
|type|string|true|none|利用区分|
|account_item_id|integer(int64)|true|none|勘定科目ID|
|tax_code|integer(int32)|true|none|税区分|
|reduced|boolean|true|none|軽減税率対象フラグ|
|is_default|boolean|true|none|既定フラグ|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sales|
|type|procurement|

<h2 id="tocS_Employee-2">Employee-2</h2>
<!-- backwards compatibility -->
<a id="schemaemployee-2"></a>
<a id="schema_Employee-2"></a>
<a id="tocSemployee-2"></a>
<a id="tocsemployee-2"></a>

```json
{
  "id": 101,
  "num": "A001",
  "display_name": "山田太郎"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|ID|
|num|string \| null|false|none|従業員番号|
|display_name|string|true|none|表示名|

<h2 id="tocS_MasterMember">MasterMember</h2>
<!-- backwards compatibility -->
<a id="schemamastermember"></a>
<a id="schema_MasterMember"></a>
<a id="tocSmastermember"></a>
<a id="tocsmastermember"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "num": "A001",
  "display_name": "山田太郎"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|メンバーID|
|num|string|true|none|従業員番号。未設定の場合は空文字。|
|display_name|string|true|none|表示名。従業員マスタに未設定の場合はアカウント管理の表示名・メールアドレスで補完します。|

<h2 id="tocS_CustomFieldDefinitionBase">CustomFieldDefinitionBase</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddefinitionbase"></a>
<a id="schema_CustomFieldDefinitionBase"></a>
<a id="tocScustomfielddefinitionbase"></a>
<a id="tocscustomfielddefinitionbase"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "text",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|

<h2 id="tocS_TextCustomFieldDefinition">TextCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schematextcustomfielddefinition"></a>
<a id="schema_TextCustomFieldDefinition"></a>
<a id="tocStextcustomfielddefinition"></a>
<a id="tocstextcustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "text",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|text|

<h2 id="tocS_TextareaCustomFieldDefinition">TextareaCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schematextareacustomfielddefinition"></a>
<a id="schema_TextareaCustomFieldDefinition"></a>
<a id="tocStextareacustomfielddefinition"></a>
<a id="tocstextareacustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "textarea",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|textarea|

<h2 id="tocS_AmountCustomFieldDefinition">AmountCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaamountcustomfielddefinition"></a>
<a id="schema_AmountCustomFieldDefinition"></a>
<a id="tocSamountcustomfielddefinition"></a>
<a id="tocsamountcustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "amount",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|amount|

<h2 id="tocS_QuantityCustomFieldDefinition">QuantityCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaquantitycustomfielddefinition"></a>
<a id="schema_QuantityCustomFieldDefinition"></a>
<a id="tocSquantitycustomfielddefinition"></a>
<a id="tocsquantitycustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "quantity",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|quantity|

<h2 id="tocS_NumberCustomFieldDefinition">NumberCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemanumbercustomfielddefinition"></a>
<a id="schema_NumberCustomFieldDefinition"></a>
<a id="tocSnumbercustomfielddefinition"></a>
<a id="tocsnumbercustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "number",
  "required": false,
  "description": "プロジェクトを識別するためのコード",
  "unit": "個"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|
|unit|string \| null|false|none|単位|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|number|

<h2 id="tocS_DateCustomFieldDefinition">DateCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadatecustomfielddefinition"></a>
<a id="schema_DateCustomFieldDefinition"></a>
<a id="tocSdatecustomfielddefinition"></a>
<a id="tocsdatecustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "date",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|date|

<h2 id="tocS_EnumCustomFieldDefinition">EnumCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaenumcustomfielddefinition"></a>
<a id="schema_EnumCustomFieldDefinition"></a>
<a id="tocSenumcustomfielddefinition"></a>
<a id="tocsenumcustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "enum",
  "required": false,
  "description": "プロジェクトを識別するためのコード",
  "enumerations": [
    {
      "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "name": "オプション1",
      "usable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|
|enumerations|[object]|true|none|選択肢|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|enum|

<h2 id="tocS_PartnerCustomFieldDefinition">PartnerCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapartnercustomfielddefinition"></a>
<a id="schema_PartnerCustomFieldDefinition"></a>
<a id="tocSpartnercustomfielddefinition"></a>
<a id="tocspartnercustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "partner",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|partner|

<h2 id="tocS_EmployeeCustomFieldDefinition">EmployeeCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaemployeecustomfielddefinition"></a>
<a id="schema_EmployeeCustomFieldDefinition"></a>
<a id="tocSemployeecustomfielddefinition"></a>
<a id="tocsemployeecustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "employee",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|employee|

<h2 id="tocS_SectionCustomFieldDefinition">SectionCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemasectioncustomfielddefinition"></a>
<a id="schema_SectionCustomFieldDefinition"></a>
<a id="tocSsectioncustomfielddefinition"></a>
<a id="tocssectioncustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "section",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|section|

<h2 id="tocS_MasterItemCustomFieldDefinition">MasterItemCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemamasteritemcustomfielddefinition"></a>
<a id="schema_MasterItemCustomFieldDefinition"></a>
<a id="tocSmasteritemcustomfielddefinition"></a>
<a id="tocsmasteritemcustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "master_item",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|master_item|

<h2 id="tocS_MemberCustomFieldDefinition">MemberCustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemamembercustomfielddefinition"></a>
<a id="schema_MemberCustomFieldDefinition"></a>
<a id="tocSmembercustomfielddefinition"></a>
<a id="tocsmembercustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "member",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|カスタム項目定義のID|
|key|string|true|none|カスタム項目定義のキー|
|display_name|string|true|none|表示名|
|type|string|true|none|カスタム項目の入力形式<br>* `text` - 一行テキスト<br>* `textarea` - 複数行テキスト<br>* `amount` - 金額<br>* `quantity` - 数量<br>* `number` - 数値<br>* `date` - 日付<br>* `enum` - プルダウン<br>* `partner` - 取引先<br>* `employee` - 従業員<br>* `section` - 部門<br>* `master_item` - 商品<br>* `member` - メンバー|
|required|boolean|true|none|必須項目かどうか|
|description|string \| null|false|none|項目の説明|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|textarea|
|type|amount|
|type|quantity|
|type|number|
|type|date|
|type|enum|
|type|partner|
|type|employee|
|type|section|
|type|master_item|
|type|member|
|type|member|

<h2 id="tocS_CustomFieldDefinition">CustomFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddefinition"></a>
<a id="schema_CustomFieldDefinition"></a>
<a id="tocScustomfielddefinition"></a>
<a id="tocscustomfielddefinition"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "key": "custom_field_001",
  "display_name": "プロジェクトコード",
  "type": "text",
  "required": false,
  "description": "プロジェクトを識別するためのコード"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TextCustomFieldDefinition](#schematextcustomfielddefinition)|false|none|none|
|*oneOf*|[TextareaCustomFieldDefinition](#schematextareacustomfielddefinition)|false|none|none|
|*oneOf*|[AmountCustomFieldDefinition](#schemaamountcustomfielddefinition)|false|none|none|
|*oneOf*|[QuantityCustomFieldDefinition](#schemaquantitycustomfielddefinition)|false|none|none|
|*oneOf*|[NumberCustomFieldDefinition](#schemanumbercustomfielddefinition)|false|none|none|
|*oneOf*|[DateCustomFieldDefinition](#schemadatecustomfielddefinition)|false|none|none|
|*oneOf*|[EnumCustomFieldDefinition](#schemaenumcustomfielddefinition)|false|none|none|
|*oneOf*|[PartnerCustomFieldDefinition](#schemapartnercustomfielddefinition)|false|none|none|
|*oneOf*|[EmployeeCustomFieldDefinition](#schemaemployeecustomfielddefinition)|false|none|none|
|*oneOf*|[SectionCustomFieldDefinition](#schemasectioncustomfielddefinition)|false|none|none|
|*oneOf*|[MasterItemCustomFieldDefinition](#schemamasteritemcustomfielddefinition)|false|none|none|
|*oneOf*|[MemberCustomFieldDefinition](#schemamembercustomfielddefinition)|false|none|none|

<h2 id="tocS_ProcurementStatus">ProcurementStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementstatus"></a>
<a id="schema_ProcurementStatus"></a>
<a id="tocSprocurementstatus"></a>
<a id="tocsprocurementstatus"></a>

```json
"not_sold"
```

仕入ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)

<h2 id="tocS_PaymentStatus">PaymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstatus"></a>
<a id="schema_PaymentStatus"></a>
<a id="tocSpaymentstatus"></a>
<a id="tocspaymentstatus"></a>

```json
"not_settled"
```

支払ステータス (なし: none, 未決済: not_settled, 一部決済済: partially_settled, 決済済: settled)

<h2 id="tocS_PaymentMethodType">PaymentMethodType</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethodtype"></a>
<a id="schema_PaymentMethodType"></a>
<a id="tocSpaymentmethodtype"></a>
<a id="tocspaymentmethodtype"></a>

```json
"transfer"
```

支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)

<h2 id="tocS_AmountSet">AmountSet</h2>
<!-- backwards compatibility -->
<a id="schemaamountset"></a>
<a id="schema_AmountSet"></a>
<a id="tocSamountset"></a>
<a id="tocsamountset"></a>

```json
{
  "excluding_tax": 100000,
  "tax": 10000,
  "including_tax": 110000
}
```

金額セット

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excluding_tax|integer(int64)|true|none|税抜金額|
|tax|integer(int64)|true|none|税額|
|including_tax|integer(int64)|true|none|税込金額|

<h2 id="tocS_PurchaseOrderDigest">PurchaseOrderDigest</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderdigest"></a>
<a id="schema_PurchaseOrderDigest"></a>
<a id="tocSpurchaseorderdigest"></a>
<a id="tocspurchaseorderdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_no": "PO211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "発注書備考",
  "issued": false,
  "issued_on": "2025-04-01",
  "purchase_order_template": {
    "id": 10001,
    "name": "デフォルトテンプレート"
  },
  "purchase_order_subject": "サンプル案件発注の件",
  "procurement_status": "not_sold",
  "recorded_procurement_amount_excluding_tax": 50000,
  "remaining_procurement_amount_excluding_tax": 50000,
  "payment_status": "not_settled",
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|発注ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|last_updated_at|string(date-time)|true|none|変更日時|
|business|[Business](#schemabusiness)|false|none|案件|
|purchase_order_no|string|true|none|発注No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|internal_subject|string \| null|false|none|発注タイトル|
|purchase_order_date|string(date)|true|none|発注日|
|procurements_on|string(date) \| null|false|none|仕入予定日|
|supplier|object|true|none|仕入先|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|purchase_order_note|string \| null|false|none|発注書の備考欄に掲載する内容|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|purchase_order_template|object \| null|false|none|発注書テンプレート|
|purchase_order_subject|string \| null|false|none|発注書件名|
|procurement_status|[ProcurementStatus](#schemaprocurementstatus)|true|none|仕入ステータス|
|recorded_procurement_amount_excluding_tax|integer(int64)|true|none|仕入計上済金額(税抜)|
|remaining_procurement_amount_excluding_tax|integer(int64)|true|none|仕入残金額(税抜)|
|payment_status|[PaymentStatus](#schemapaymentstatus)|true|none|支払ステータス|
|payments_on|string(date) \| null|false|none|支払予定日|
|payment_method_type|object|true|none|支払方法|
|payment_partner|object|true|none|支払先|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|

#### Enumerated Values

|Property|Value|
|---|---|
|procurement_status|not_sold|
|procurement_status|partially_sold|
|procurement_status|sold|
|payment_status|none|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|

<h2 id="tocS_DefaultTitle">DefaultTitle</h2>
<!-- backwards compatibility -->
<a id="schemadefaulttitle"></a>
<a id="schema_DefaultTitle"></a>
<a id="tocSdefaulttitle"></a>
<a id="tocsdefaulttitle"></a>

```json
"none"
```

敬称区分 (なし: none, 様: to_person, 御中: to_organization)

<h2 id="tocS_RecipientAddress">RecipientAddress</h2>
<!-- backwards compatibility -->
<a id="schemarecipientaddress"></a>
<a id="schema_RecipientAddress"></a>
<a id="tocSrecipientaddress"></a>
<a id="tocsrecipientaddress"></a>

```json
{
  "official_name": "株式会社サンプル",
  "default_title": {},
  "zipcode": "150-0001",
  "prefecture_code": 12,
  "street_name1": "渋谷区神宮前1-1-1",
  "street_name2": "サンプルビル3F",
  "contact_department": "営業部",
  "contact_name": "山田太郎"
}
```

宛先

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|official_name|string \| null|false|none|正式名称|
|default_title|object \| null|false|none|敬称|
|zipcode|string \| null|false|none|郵便番号|
|prefecture_code|integer(int64) \| null|false|none|都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）|
|street_name1|string \| null|false|none|住所1|
|street_name2|string \| null|false|none|住所2|
|contact_department|string \| null|false|none|連絡先部署|
|contact_name|string \| null|false|none|連絡先名|

<h2 id="tocS_LineType">LineType</h2>
<!-- backwards compatibility -->
<a id="schemalinetype"></a>
<a id="schema_LineType"></a>
<a id="tocSlinetype"></a>
<a id="tocslinetype"></a>

```json
"basic"
```

明細種別

<h2 id="tocS_BasicLineParams">BasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemabasiclineparams"></a>
<a id="schema_BasicLineParams"></a>
<a id="tocSbasiclineparams"></a>
<a id="tocsbasiclineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000
}
```

通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_TextLineParams">TextLineParams</h2>
<!-- backwards compatibility -->
<a id="schematextlineparams"></a>
<a id="schema_TextLineParams"></a>
<a id="tocStextlineparams"></a>
<a id="tocstextlineparams"></a>

```json
{
  "line_type": "text",
  "text": "備考：特急料金が含まれます"
}
```

テキスト明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|object|true|none|none|
|text|string|true|none|テキスト行|

<h2 id="tocS_PurchaseOrderLineParams">PurchaseOrderLineParams</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderlineparams"></a>
<a id="schema_PurchaseOrderLineParams"></a>
<a id="tocSpurchaseorderlineparams"></a>
<a id="tocspurchaseorderlineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicLineParams](#schemabasiclineparams)|false|none|通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_PurchaseOrderRequestBase">PurchaseOrderRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderrequestbase"></a>
<a id="schema_PurchaseOrderRequestBase"></a>
<a id="tocSpurchaseorderrequestbase"></a>
<a id="tocspurchaseorderrequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "納期厳守でお願いします",
  "purchase_order_template_id": 10001,
  "purchase_order_subject": "サンプル案件発注の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|internal_subject|string \| null|false|none|発注タイトル|
|purchase_order_date|string(date)|false|none|発注日|
|procurements_on|string(date) \| null|false|none|仕入予定日|
|supplier_id|integer(int64)|false|none|仕入先の取引先ID|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|purchase_order_note|string \| null|false|none|発注書の備考欄に記載する内容|
|purchase_order_template_id|integer(int64) \| null|false|none|発注書テンプレートID|
|purchase_order_subject|string \| null|false|none|発注書件名|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|false|none|宛先|
|payments_on|string(date) \| null|false|none|支払予定日|
|payment_method_type|object|false|none|支払方法|
|payment_partner_id|integer(int64)|false|none|支払先の取引先ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[PurchaseOrderLineParams](#schemapurchaseorderlineparams)]|false|none|明細リスト|

<h2 id="tocS_PurchaseOrderMinimalResponse">PurchaseOrderMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderminimalresponse"></a>
<a id="schema_PurchaseOrderMinimalResponse"></a>
<a id="tocSpurchaseorderminimalresponse"></a>
<a id="tocspurchaseorderminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|発注ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_AmountSetRate">AmountSetRate</h2>
<!-- backwards compatibility -->
<a id="schemaamountsetrate"></a>
<a id="schema_AmountSetRate"></a>
<a id="tocSamountsetrate"></a>
<a id="tocsamountsetrate"></a>

```json
{
  "rate": 10,
  "reduced": false,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_deductible_tax": 5000
}
```

税率を含む金額セット

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|integer(int64)|true|none|税率|
|reduced|boolean|true|none|軽減税率フラグ|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_deductible_tax|integer(int64) \| null|false|none|控除可能税額|

<h2 id="tocS_BasicLineDetail">BasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemabasiclinedetail"></a>
<a id="schema_BasicLineDetail"></a>
<a id="tocSbasiclinedetail"></a>
<a id="tocsbasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false
}
```

通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_TextLineDetail">TextLineDetail</h2>
<!-- backwards compatibility -->
<a id="schematextlinedetail"></a>
<a id="schema_TextLineDetail"></a>
<a id="tocStextlinedetail"></a>
<a id="tocstextlinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "text",
  "text": "備考：特急料金が含まれます"
}
```

テキスト明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|object|true|none|none|
|text|string|true|none|テキスト行|

<h2 id="tocS_PurchaseOrderLineDetail">PurchaseOrderLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderlinedetail"></a>
<a id="schema_PurchaseOrderLineDetail"></a>
<a id="tocSpurchaseorderlinedetail"></a>
<a id="tocspurchaseorderlinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false
}
```

明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicLineDetail](#schemabasiclinedetail)|false|none|通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_PurchaseOrderDetail">PurchaseOrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderdetail"></a>
<a id="schema_PurchaseOrderDetail"></a>
<a id="tocSpurchaseorderdetail"></a>
<a id="tocspurchaseorderdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_no": "PO211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件発注の件",
  "purchase_order_date": "2025-04-01",
  "procurements_on": "2025-05-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "purchase_order_note": "発注書備考",
  "issued": false,
  "issued_on": "2025-04-01",
  "purchase_order_template": {
    "id": 10001,
    "name": "デフォルトテンプレート"
  },
  "purchase_order_subject": "サンプル案件発注の件",
  "procurement_status": "not_sold",
  "recorded_procurement_amount_excluding_tax": 50000,
  "remaining_procurement_amount_excluding_tax": 50000,
  "payment_status": "not_settled",
  "payments_on": "2025-06-30",
  "payment_method_type": {},
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

発注詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|発注ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|last_updated_at|string(date-time)|true|none|変更日時|
|business|[Business](#schemabusiness)|false|none|案件|
|purchase_order_no|string|true|none|発注No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|internal_subject|string \| null|false|none|発注タイトル|
|purchase_order_date|string(date)|true|none|発注日|
|procurements_on|string(date) \| null|false|none|仕入予定日|
|supplier|object|true|none|仕入先|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|purchase_order_note|string \| null|false|none|発注書の備考欄に掲載する内容|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|purchase_order_template|object \| null|false|none|発注書テンプレート|
|purchase_order_subject|string \| null|false|none|発注書件名|
|procurement_status|[ProcurementStatus](#schemaprocurementstatus)|true|none|仕入ステータス|
|recorded_procurement_amount_excluding_tax|integer(int64)|true|none|仕入計上済金額(税抜)|
|remaining_procurement_amount_excluding_tax|integer(int64)|true|none|仕入残金額(税抜)|
|payment_status|[PaymentStatus](#schemapaymentstatus)|true|none|支払ステータス|
|payments_on|string(date) \| null|false|none|支払予定日|
|payment_method_type|object|true|none|支払方法|
|payment_partner|object|true|none|支払先|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|true|none|宛先|
|lines|[[PurchaseOrderLineDetail](#schemapurchaseorderlinedetail)]|true|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|procurement_status|not_sold|
|procurement_status|partially_sold|
|procurement_status|sold|
|payment_status|none|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|

<h2 id="tocS_QuotationStatus">QuotationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaquotationstatus"></a>
<a id="schema_QuotationStatus"></a>
<a id="tocSquotationstatus"></a>
<a id="tocsquotationstatus"></a>

```json
"unanswered"
```

見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)

<h2 id="tocS_DeliveryProgress">DeliveryProgress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryprogress"></a>
<a id="schema_DeliveryProgress"></a>
<a id="tocSdeliveryprogress"></a>
<a id="tocsdeliveryprogress"></a>

```json
"not_delivered"
```

納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)

<h2 id="tocS_DeliveryIssueProgress">DeliveryIssueProgress</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissueprogress"></a>
<a id="schema_DeliveryIssueProgress"></a>
<a id="tocSdeliveryissueprogress"></a>
<a id="tocsdeliveryissueprogress"></a>

```json
"not_issued"
```

納品書発行進捗 (未発行: not_issued, 一部発行済: partially_issued, 発行済: issued)

<h2 id="tocS_SalesStatus">SalesStatus</h2>
<!-- backwards compatibility -->
<a id="schemasalesstatus"></a>
<a id="schema_SalesStatus"></a>
<a id="tocSsalesstatus"></a>
<a id="tocssalesstatus"></a>

```json
"not_sold"
```

売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)

<h2 id="tocS_BillingStatus">BillingStatus</h2>
<!-- backwards compatibility -->
<a id="schemabillingstatus"></a>
<a id="schema_BillingStatus"></a>
<a id="tocSbillingstatus"></a>
<a id="tocsbillingstatus"></a>

```json
"not_billed"
```

請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)
※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。

<h2 id="tocS_QuotationDigest">QuotationDigest</h2>
<!-- backwards compatibility -->
<a id="schemaquotationdigest"></a>
<a id="schema_QuotationDigest"></a>
<a id="tocSquotationdigest"></a>
<a id="tocsquotationdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "quotation_no": "Q211212-00001",
  "branch_no": 1,
  "quotation_date": "2025-04-01",
  "quotation_subject": "サンプル案件見積の件",
  "internal_subject": "サンプル案件見積の件",
  "expires_on": "2025-05-01",
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "issued": false,
  "issued_on": "2025-04-01",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "total_amount": 10000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "quotation_status": "unanswered",
  "delivery_progress": "not_delivered",
  "delivery_issue_progress": "not_issued",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "internal_memo": "重要案件のため優先対応",
  "quotation_note": "見積書備考",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|見積ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|quotation_no|string|true|none|見積No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|quotation_date|string(date)|true|none|見積日|
|quotation_subject|string \| null|false|none|見積書件名|
|internal_subject|string \| null|false|none|見積タイトル|
|expires_on|string(date) \| null|false|none|有効期限日|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|quotation_status|[QuotationStatus](#schemaquotationstatus)|true|none|見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)|
|delivery_progress|[DeliveryProgress](#schemadeliveryprogress)|true|none|納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)|
|delivery_issue_progress|[DeliveryIssueProgress](#schemadeliveryissueprogress)|true|none|納品書発行進捗 (未発行: not_issued, 一部発行済: partially_issued, 発行済: issued)|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|customer|object|true|none|顧客|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|business|[Business](#schemabusiness)|false|none|案件|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|quotation_note|string \| null|false|none|見積書の備考欄に記載する内容|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|

#### Enumerated Values

|Property|Value|
|---|---|
|quotation_status|unanswered|
|quotation_status|order_received|
|quotation_status|order_lost|
|delivery_progress|not_delivered|
|delivery_progress|partially_delivered|
|delivery_progress|delivered|
|delivery_issue_progress|not_issued|
|delivery_issue_progress|partially_issued|
|delivery_issue_progress|issued|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|

<h2 id="tocS_QuotationListItem">QuotationListItem</h2>
<!-- backwards compatibility -->
<a id="schemaquotationlistitem"></a>
<a id="schema_QuotationListItem"></a>
<a id="tocSquotationlistitem"></a>
<a id="tocsquotationlistitem"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "quotation_no": "Q211212-00001",
  "branch_no": 1,
  "quotation_date": "2025-04-01",
  "quotation_subject": "サンプル案件見積の件",
  "internal_subject": "サンプル案件見積の件",
  "expires_on": "2025-05-01",
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "issued": false,
  "issued_on": "2025-04-01",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "total_amount": 10000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "quotation_status": "unanswered",
  "delivery_progress": "not_delivered",
  "delivery_issue_progress": "not_issued",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "internal_memo": "重要案件のため優先対応",
  "quotation_note": "見積書備考",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "gross_profit_amount_excluding_tax": 30000,
  "gross_profit_rate": 30
}
```

見積一覧の要素

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|見積ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|quotation_no|string|true|none|見積No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|quotation_date|string(date)|true|none|見積日|
|quotation_subject|string \| null|false|none|見積書件名|
|internal_subject|string \| null|false|none|見積タイトル|
|expires_on|string(date) \| null|false|none|有効期限日|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|quotation_status|[QuotationStatus](#schemaquotationstatus)|true|none|見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)|
|delivery_progress|[DeliveryProgress](#schemadeliveryprogress)|true|none|納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)|
|delivery_issue_progress|[DeliveryIssueProgress](#schemadeliveryissueprogress)|true|none|納品書発行進捗 (未発行: not_issued, 一部発行済: partially_issued, 発行済: issued)|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|customer|object|true|none|顧客|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|business|[Business](#schemabusiness)|false|none|案件|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|quotation_note|string \| null|false|none|見積書の備考欄に記載する内容|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|gross_profit_amount_excluding_tax|number(double) \| null|false|none|粗利額計(税抜)。税込入力の見積、または粗利情報を持つ明細が1件もない見積では null|
|gross_profit_rate|number(double) \| null|false|none|粗利率(%)。粗利額計が null の場合、または原価計・売価計のいずれかが0以下の場合は null|

#### Enumerated Values

|Property|Value|
|---|---|
|quotation_status|unanswered|
|quotation_status|order_received|
|quotation_status|order_lost|
|delivery_progress|not_delivered|
|delivery_progress|partially_delivered|
|delivery_progress|delivered|
|delivery_issue_progress|not_issued|
|delivery_issue_progress|partially_issued|
|delivery_issue_progress|issued|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|

<h2 id="tocS_QuotationGrossProfitParams">QuotationGrossProfitParams</h2>
<!-- backwards compatibility -->
<a id="schemaquotationgrossprofitparams"></a>
<a id="schema_QuotationGrossProfitParams"></a>
<a id="tocSquotationgrossprofitparams"></a>
<a id="tocsquotationgrossprofitparams"></a>

```json
{
  "cost": 700,
  "memo": "仕入先A社の見積による"
}
```

明細の粗利情報<br>
※ 集計軸は粗利率固定です。売価は明細の単価が使われ、粗利額・各率は原価と売価から自動計算されます<br>
※ 税方式が外税の顧客でのみ登録されます。内税の場合は指定しても無視されます

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(double)|true|none|原価(単価)|
|memo|string \| null|false|none|社内メモ|

<h2 id="tocS_QuotationBasicLineParams">QuotationBasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaquotationbasiclineparams"></a>
<a id="schema_QuotationBasicLineParams"></a>
<a id="tocSquotationbasiclineparams"></a>
<a id="tocsquotationbasiclineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "gross_profit": {
    "cost": 700,
    "memo": "仕入先A社の見積による"
  }
}
```

見積通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|gross_profit|[QuotationGrossProfitParams](#schemaquotationgrossprofitparams)|false|none|明細の粗利情報<br><br>※ 集計軸は粗利率固定です。売価は明細の単価が使われ、粗利額・各率は原価と売価から自動計算されます<br><br>※ 税方式が外税の顧客でのみ登録されます。内税の場合は指定しても無視されます|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_QuotationLineParams">QuotationLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaquotationlineparams"></a>
<a id="schema_QuotationLineParams"></a>
<a id="tocSquotationlineparams"></a>
<a id="tocsquotationlineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "gross_profit": {
    "cost": 700,
    "memo": "仕入先A社の見積による"
  }
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[QuotationBasicLineParams](#schemaquotationbasiclineparams)|false|none|見積通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_QuotationRequestBase">QuotationRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaquotationrequestbase"></a>
<a id="schema_QuotationRequestBase"></a>
<a id="tocSquotationrequestbase"></a>
<a id="tocsquotationrequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件見積の件",
  "quotation_date": "2025-04-01",
  "customer_id": 1001,
  "expires_on": "2025-04-30",
  "delivery_deadline": "2025-05-15",
  "delivery_location": "東京都渋谷区",
  "quotation_template_id": 10001,
  "quotation_subject": "サンプル案件見積の件",
  "quotation_note": "有効期限内にご回答ください",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "gross_profit": {
        "cost": 700,
        "memo": "仕入先A社の見積による"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|internal_subject|string \| null|false|none|見積タイトル|
|quotation_date|string(date)|false|none|見積日|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|expires_on|string(date) \| null|false|none|有効期限日|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|quotation_template_id|integer(int64) \| null|false|none|見積書テンプレートID|
|quotation_subject|string \| null|false|none|見積書件名|
|quotation_note|string \| null|false|none|見積書の備考欄に記載する内容|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|false|none|宛先|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[QuotationLineParams](#schemaquotationlineparams)]|false|none|明細リスト|

<h2 id="tocS_QuotationMinimalResponse">QuotationMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquotationminimalresponse"></a>
<a id="schema_QuotationMinimalResponse"></a>
<a id="tocSquotationminimalresponse"></a>
<a id="tocsquotationminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|見積ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_QuotationGrossProfitDetail">QuotationGrossProfitDetail</h2>
<!-- backwards compatibility -->
<a id="schemaquotationgrossprofitdetail"></a>
<a id="schema_QuotationGrossProfitDetail"></a>
<a id="tocSquotationgrossprofitdetail"></a>
<a id="tocsquotationgrossprofitdetail"></a>

```json
{
  "cost": 700,
  "sales_price": 1000,
  "memo": "仕入先A社の見積による",
  "profit_amount": 300,
  "total_cost": 70000,
  "total_price": 100000,
  "total_gross_profit": 30000,
  "cost_rate": 70,
  "profit_rate": 30,
  "markup_rate": 42.86
}
```

明細の粗利情報<br>
※ 原価が未入力の明細は原価・原価計・各率が null になります

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(double) \| null|false|none|原価(単価)|
|sales_price|number(double)|true|none|売価(単価)|
|memo|string \| null|false|none|社内メモ|
|profit_amount|number(double)|true|none|粗利額(単価。売価 − 原価)|
|total_cost|number(double) \| null|false|none|原価計(原価 × 数量)。原価未入力の場合は null|
|total_price|number(double)|true|none|売価計(売価 × 数量)|
|total_gross_profit|number(double)|true|none|粗利額計(売価計 − 原価計)|
|cost_rate|number(double) \| null|false|none|原価率(%)。売価計・原価計のいずれかが0以下の場合は null|
|profit_rate|number(double) \| null|false|none|粗利率(%)。売価計・原価計のいずれかが0以下の場合は null|
|markup_rate|number(double) \| null|false|none|上乗せ率(%)。売価計・原価計のいずれかが0以下の場合は null|

<h2 id="tocS_QuotationBasicLineDetail">QuotationBasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaquotationbasiclinedetail"></a>
<a id="schema_QuotationBasicLineDetail"></a>
<a id="tocSquotationbasiclinedetail"></a>
<a id="tocsquotationbasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "gross_profit": {
    "cost": 700,
    "sales_price": 1000,
    "memo": "仕入先A社の見積による",
    "profit_amount": 300,
    "total_cost": 70000,
    "total_price": 100000,
    "total_gross_profit": 30000,
    "cost_rate": 70,
    "profit_rate": 30,
    "markup_rate": 42.86
  }
}
```

見積通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|gross_profit|[QuotationGrossProfitDetail](#schemaquotationgrossprofitdetail)|false|none|明細の粗利情報<br><br>※ 原価が未入力の明細は原価・原価計・各率が null になります|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_QuotationLineDetail">QuotationLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaquotationlinedetail"></a>
<a id="schema_QuotationLineDetail"></a>
<a id="tocSquotationlinedetail"></a>
<a id="tocsquotationlinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "gross_profit": {
    "cost": 700,
    "sales_price": 1000,
    "memo": "仕入先A社の見積による",
    "profit_amount": 300,
    "total_cost": 70000,
    "total_price": 100000,
    "total_gross_profit": 30000,
    "cost_rate": 70,
    "profit_rate": 30,
    "markup_rate": 42.86
  }
}
```

明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[QuotationBasicLineDetail](#schemaquotationbasiclinedetail)|false|none|見積通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_QuotationGrossProfitSummary">QuotationGrossProfitSummary</h2>
<!-- backwards compatibility -->
<a id="schemaquotationgrossprofitsummary"></a>
<a id="schema_QuotationGrossProfitSummary"></a>
<a id="tocSquotationgrossprofitsummary"></a>
<a id="tocsquotationgrossprofitsummary"></a>

```json
{
  "gross_profit_amount_excluding_tax": 30000,
  "gross_profit_rate": 30
}
```

見積全体の粗利合計<br>
※ 粗利情報を持つ明細が1件もない場合は null

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gross_profit_amount_excluding_tax|number(double)|true|none|粗利額計(税抜)|
|gross_profit_rate|number(double) \| null|false|none|粗利率(%)。原価計・売価計のいずれかが0以下の場合は null|

<h2 id="tocS_QuotationDetail">QuotationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaquotationdetail"></a>
<a id="schema_QuotationDetail"></a>
<a id="tocSquotationdetail"></a>
<a id="tocsquotationdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "quotation_no": "Q211212-00001",
  "branch_no": 1,
  "quotation_date": "2025-04-01",
  "quotation_subject": "サンプル案件見積の件",
  "internal_subject": "サンプル案件見積の件",
  "expires_on": "2025-05-01",
  "delivery_deadline": "2025-06-01",
  "delivery_location": "東京都渋谷区",
  "issued": false,
  "issued_on": "2025-04-01",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "total_amount": 10000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "quotation_status": "unanswered",
  "delivery_progress": "not_delivered",
  "delivery_issue_progress": "not_issued",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "internal_memo": "重要案件のため優先対応",
  "quotation_note": "見積書備考",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "quotation_template_name": "デフォルトテンプレート",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "gross_profit": {
        "cost": 700,
        "sales_price": 1000,
        "memo": "仕入先A社の見積による",
        "profit_amount": 300,
        "total_cost": 70000,
        "total_price": 100000,
        "total_gross_profit": 30000,
        "cost_rate": 70,
        "profit_rate": 30,
        "markup_rate": 42.86
      }
    }
  ],
  "gross_profit_summary": {
    "gross_profit_amount_excluding_tax": 30000,
    "gross_profit_rate": 30
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|見積ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|quotation_no|string|true|none|見積No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|quotation_date|string(date)|true|none|見積日|
|quotation_subject|string \| null|false|none|見積書件名|
|internal_subject|string \| null|false|none|見積タイトル|
|expires_on|string(date) \| null|false|none|有効期限日|
|delivery_deadline|string(date) \| null|false|none|納品期限日|
|delivery_location|string \| null|false|none|納品場所|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|quotation_status|[QuotationStatus](#schemaquotationstatus)|true|none|見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)|
|delivery_progress|[DeliveryProgress](#schemadeliveryprogress)|true|none|納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)|
|delivery_issue_progress|[DeliveryIssueProgress](#schemadeliveryissueprogress)|true|none|納品書発行進捗 (未発行: not_issued, 一部発行済: partially_issued, 発行済: issued)|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|customer|object|true|none|顧客|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|business|[Business](#schemabusiness)|false|none|案件|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|quotation_note|string \| null|false|none|見積書の備考欄に記載する内容|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|quotation_template_name|string|true|none|見積書テンプレート名称|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|true|none|宛先|
|lines|[[QuotationLineDetail](#schemaquotationlinedetail)]|true|none|明細リスト|
|gross_profit_summary|[QuotationGrossProfitSummary](#schemaquotationgrossprofitsummary)|false|none|見積全体の粗利合計<br><br>※ 粗利情報を持つ明細が1件もない場合は null|

#### Enumerated Values

|Property|Value|
|---|---|
|quotation_status|unanswered|
|quotation_status|order_received|
|quotation_status|order_lost|
|delivery_progress|not_delivered|
|delivery_progress|partially_delivered|
|delivery_progress|delivered|
|delivery_issue_progress|not_issued|
|delivery_issue_progress|partially_issued|
|delivery_issue_progress|issued|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|

<h2 id="tocS_QuotationStatusForUpdate">QuotationStatusForUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaquotationstatusforupdate"></a>
<a id="schema_QuotationStatusForUpdate"></a>
<a id="tocSquotationstatusforupdate"></a>
<a id="tocsquotationstatusforupdate"></a>

```json
"unanswered"
```

更新可能な見積ステータス (未受注: unanswered, 失注: order_lost)

<h2 id="tocS_QuotationStatusChangeRequest">QuotationStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaquotationstatuschangerequest"></a>
<a id="schema_QuotationStatusChangeRequest"></a>
<a id="tocSquotationstatuschangerequest"></a>
<a id="tocsquotationstatuschangerequest"></a>

```json
{
  "company_id": 1,
  "quotation_status": "unanswered"
}
```

見積ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|quotation_status|[QuotationStatusForUpdate](#schemaquotationstatusforupdate)|true|none|更新可能な見積ステータス (未受注: unanswered, 失注: order_lost)|

#### Enumerated Values

|Property|Value|
|---|---|
|quotation_status|unanswered|
|quotation_status|order_lost|

<h2 id="tocS_CollectionStatus">CollectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemacollectionstatus"></a>
<a id="schema_CollectionStatus"></a>
<a id="tocScollectionstatus"></a>
<a id="tocscollectionstatus"></a>

```json
"not_settled"
```

決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)
※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。

<h2 id="tocS_SalesOrderDigest">SalesOrderDigest</h2>
<!-- backwards compatibility -->
<a id="schemasalesorderdigest"></a>
<a id="schema_SalesOrderDigest"></a>
<a id="tocSsalesorderdigest"></a>
<a id="tocssalesorderdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_no": "S211212-00001",
  "sales_order_subject": "サンプル案件受注の件",
  "sales_order_date": "2025-04-01",
  "customer_order_no": "C-PO-20250401-001",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_on": "2025-04-01",
  "delivery_progress": "not_delivered",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "total_amount": 10000,
  "canceled": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|受注ID|
|sales_order_no|string|true|none|受注No.|
|sales_order_subject|string \| null|false|none|受注タイトル|
|sales_order_date|string(date)|true|none|受注日|
|customer_order_no|string \| null|false|none|顧客注文No.|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|customer|object|true|none|顧客|
|sales_on|string(date) \| null|false|none|売上予定日|
|delivery_progress|[DeliveryProgress](#schemadeliveryprogress)|true|none|納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|
|business|[Business](#schemabusiness)|false|none|案件|
|quotation_id|string \| null|false|none|見積ID|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|canceled|boolean|true|none|取消状態|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_progress|not_delivered|
|delivery_progress|partially_delivered|
|delivery_progress|delivered|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|

<h2 id="tocS_BillingCreatingMethodType">BillingCreatingMethodType</h2>
<!-- backwards compatibility -->
<a id="schemabillingcreatingmethodtype"></a>
<a id="schema_BillingCreatingMethodType"></a>
<a id="tocSbillingcreatingmethodtype"></a>
<a id="tocsbillingcreatingmethodtype"></a>

```json
"automatically"
```

請求作成方法区分 (自動作成: automatically, 手動作成: manually)

<h2 id="tocS_CollectionMethodType">CollectionMethodType</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmethodtype"></a>
<a id="schema_CollectionMethodType"></a>
<a id="tocScollectionmethodtype"></a>
<a id="tocscollectionmethodtype"></a>

```json
"transfer"
```

入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)

<h2 id="tocS_LineParams">LineParams</h2>
<!-- backwards compatibility -->
<a id="schemalineparams"></a>
<a id="schema_LineParams"></a>
<a id="tocSlineparams"></a>
<a id="tocslineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicLineParams](#schemabasiclineparams)|false|none|通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_SalesOrderRequestBase">SalesOrderRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemasalesorderrequestbase"></a>
<a id="schema_SalesOrderRequestBase"></a>
<a id="tocSsalesorderrequestbase"></a>
<a id="tocssalesorderrequestbase"></a>

```json
{
  "sales_order_subject": "サンプル案件パンフレット作成",
  "sales_order_date": "2021-12-12",
  "customer_order_no": "C-PO-20211212-001",
  "customer_id": 1001,
  "sales_on": "2021-12-12",
  "deliveries_on": "2021-12-12",
  "accepts_on": "2021-12-12",
  "delivery_template_id": 10001,
  "delivery_subject": "サンプル案件パンフレット作成",
  "delivery_note": "納品時の注意事項",
  "billing_creating_method_type": "automatically",
  "bills_on": "2021-12-12",
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "invoice_subject": "サンプル案件パンフレット作成",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sales_order_subject|string \| null|false|none|受注タイトル|
|sales_order_date|string(date)|false|none|受注日|
|customer_order_no|string \| null|false|none|顧客注文No.|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|sales_on|string(date) \| null|false|none|売上予定日|
|deliveries_on|string(date) \| null|false|none|納品予定日|
|accepts_on|string(date) \| null|false|none|検収予定日|
|delivery_template_id|integer(int64) \| null|false|none|納品書テンプレートID|
|delivery_subject|string \| null|false|none|納品書件名|
|delivery_note|string \| null|false|none|納品書の備考欄に掲載する内容|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|bills_on|string(date) \| null|false|none|請求予定日|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|business_id|string \| null|false|none|案件ID|
|quotation_id|string \| null|false|none|見積ID|
|lines|[[LineParams](#schemalineparams)]|false|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_SalesOrderMinimalResponse">SalesOrderMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemasalesorderminimalresponse"></a>
<a id="schema_SalesOrderMinimalResponse"></a>
<a id="tocSsalesorderminimalresponse"></a>
<a id="tocssalesorderminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|受注ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_LineDetail">LineDetail</h2>
<!-- backwards compatibility -->
<a id="schemalinedetail"></a>
<a id="schema_LineDetail"></a>
<a id="tocSlinedetail"></a>
<a id="tocslinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false
}
```

明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicLineDetail](#schemabasiclinedetail)|false|none|通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_SalesOrderDetail">SalesOrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalesorderdetail"></a>
<a id="schema_SalesOrderDetail"></a>
<a id="tocSsalesorderdetail"></a>
<a id="tocssalesorderdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_no": "S211212-00001",
  "sales_order_subject": "サンプル案件受注の件",
  "sales_order_date": "2025-04-01",
  "customer_order_no": "C-PO-20250401-001",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "sales_on": "2025-04-01",
  "delivery_progress": "not_delivered",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "quotation_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "total_amount": 10000,
  "canceled": false,
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "deliveries_on": "2025-04-01",
  "accepts_on": "2025-04-01",
  "delivery_template_name": "デフォルトテンプレート",
  "delivery_subject": "サンプル案件受注の件",
  "delivery_note": "納品時の注意事項",
  "delivered_excluding_tax": 5200000,
  "remaining_delivered_tax": 5200000,
  "sales_excluding_tax": 5200000,
  "remaining_sales_order_excluding_tax": 5200000,
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_template_name": "デフォルトテンプレート",
  "invoice_subject": "サンプル案件受注の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "transfer",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|受注ID|
|sales_order_no|string|true|none|受注No.|
|sales_order_subject|string \| null|false|none|受注タイトル|
|sales_order_date|string(date)|true|none|受注日|
|customer_order_no|string \| null|false|none|顧客注文No.|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|customer|object|true|none|顧客|
|sales_on|string(date) \| null|false|none|売上予定日|
|delivery_progress|[DeliveryProgress](#schemadeliveryprogress)|true|none|納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|
|business|[Business](#schemabusiness)|false|none|案件|
|quotation_id|string \| null|false|none|見積ID|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|canceled|boolean|true|none|取消状態|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|deliveries_on|string(date) \| null|false|none|納品予定日|
|accepts_on|string(date) \| null|false|none|検収予定日|
|delivery_template_name|string|true|none|納品書テンプレート名称|
|delivery_subject|string \| null|false|none|納品書件名|
|delivery_note|string \| null|false|none|納品書の備考欄に掲載する内容|
|delivered_excluding_tax|integer(int64) \| null|false|none|納品済金額(税抜)|
|remaining_delivered_tax|integer(int64) \| null|false|none|納品残金額(税抜)|
|sales_excluding_tax|integer(int64) \| null|false|none|売上金額(税抜)|
|remaining_sales_order_excluding_tax|integer(int64) \| null|false|none|受注残金額(税抜)|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|bills_on|string(date) \| null|false|none|請求予定日|
|billing_partner|object|true|none|請求先|
|invoice_template_name|string|true|none|請求書テンプレート名称|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collecting_partner|object|true|none|入金元|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|true|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[LineDetail](#schemalinedetail)]|true|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_progress|not_delivered|
|delivery_progress|partially_delivered|
|delivery_progress|delivered|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_DeliveryStatus">DeliveryStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystatus"></a>
<a id="schema_DeliveryStatus"></a>
<a id="tocSdeliverystatus"></a>
<a id="tocsdeliverystatus"></a>

```json
"not_delivered"
```

納品ステータス (未納品: not_delivered, 納品済: delivered)

<h2 id="tocS_AcceptanceStatus">AcceptanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaacceptancestatus"></a>
<a id="schema_AcceptanceStatus"></a>
<a id="tocSacceptancestatus"></a>
<a id="tocsacceptancestatus"></a>

```json
"not_accepted"
```

検収ステータス (未検収: not_accepted, 検収済: accepted)

<h2 id="tocS_DeliveryDigest">DeliveryDigest</h2>
<!-- backwards compatibility -->
<a id="schemadeliverydigest"></a>
<a id="schema_DeliveryDigest"></a>
<a id="tocSdeliverydigest"></a>
<a id="tocsdeliverydigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_status": "not_delivered",
  "acceptance_status": "not_accepted",
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "delivery_no": "D211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "issued": false,
  "issued_on": "2025-04-01",
  "subject": "サンプル案件納品の件",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|納品ID|
|sales_order_id|string \| null|false|none|受注ID|
|delivery_status|[DeliveryStatus](#schemadeliverystatus)|true|none|納品ステータス (未納品: not_delivered, 納品済: delivered)|
|acceptance_status|[AcceptanceStatus](#schemaacceptancestatus)|true|none|検収ステータス (未検収: not_accepted, 検収済: accepted)|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|[Business](#schemabusiness)|false|none|案件|
|delivery_no|string|true|none|納品No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|internal_subject|string \| null|false|none|納品タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|delivery_date|string(date)|true|none|納品日|
|acceptance_date|string(date) \| null|false|none|検収日|
|customer|object|true|none|顧客|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|subject|string \| null|false|none|納品書件名|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_status|not_delivered|
|delivery_status|delivered|
|acceptance_status|not_accepted|
|acceptance_status|accepted|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|

<h2 id="tocS_DeliveryLineParams">DeliveryLineParams</h2>
<!-- backwards compatibility -->
<a id="schemadeliverylineparams"></a>
<a id="schema_DeliveryLineParams"></a>
<a id="tocSdeliverylineparams"></a>
<a id="tocsdeliverylineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BasicLineParams](#schemabasiclineparams)|false|none|通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_DeliveryRequestBase">DeliveryRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryrequestbase"></a>
<a id="schema_DeliveryRequestBase"></a>
<a id="tocSdeliveryrequestbase"></a>
<a id="tocsdeliveryrequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer_id": 1001,
  "delivery_note": "納品時の注意事項",
  "delivery_template_id": 10001,
  "subject": "サンプル案件納品の件",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件納品の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|internal_subject|string \| null|false|none|納品タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|delivery_date|string(date)|false|none|納品日|
|acceptance_date|string(date) \| null|false|none|検収日|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|delivery_note|string \| null|false|none|納品書の備考欄に記載する内容|
|delivery_template_id|integer(int64) \| null|false|none|納品書テンプレートID|
|subject|string \| null|false|none|納品書件名|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|false|none|宛先|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|bills_on|string(date) \| null|false|none|請求予定日|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[DeliveryLineParams](#schemadeliverylineparams)]|false|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_DeliveryMinimalResponse">DeliveryMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryminimalresponse"></a>
<a id="schema_DeliveryMinimalResponse"></a>
<a id="tocSdeliveryminimalresponse"></a>
<a id="tocsdeliveryminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|納品ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_DeliveryDetail">DeliveryDetail</h2>
<!-- backwards compatibility -->
<a id="schemadeliverydetail"></a>
<a id="schema_DeliveryDetail"></a>
<a id="tocSdeliverydetail"></a>
<a id="tocsdeliverydetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_status": "not_delivered",
  "acceptance_status": "not_accepted",
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "delivery_no": "D211212-00001",
  "branch_no": 1,
  "internal_subject": "サンプル案件納品の件",
  "customer_order_no": "C-PO-20250401-001",
  "delivery_date": "2025-04-01",
  "acceptance_date": "2025-04-01",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "issued": false,
  "issued_on": "2025-04-01",
  "subject": "サンプル案件納品の件",
  "sales_status": "not_sold",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "delivery_note": "納品時の注意事項",
  "delivery_template_name": "デフォルトテンプレート",
  "recipient_address": {
    "official_name": "株式会社サンプル",
    "default_title": {},
    "zipcode": "150-0001",
    "prefecture_code": 12,
    "street_name1": "渋谷区神宮前1-1-1",
    "street_name2": "サンプルビル3F",
    "contact_department": "営業部",
    "contact_name": "山田太郎"
  },
  "recorded_sales_amount_excluding_tax": 5200000,
  "remaining_sales_amount_excluding_tax": 5200000,
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-04-01",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "サンプル案件納品の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-04-01",
  "collection_method_type": "transfer",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|納品ID|
|sales_order_id|string \| null|false|none|受注ID|
|delivery_status|[DeliveryStatus](#schemadeliverystatus)|true|none|納品ステータス (未納品: not_delivered, 納品済: delivered)|
|acceptance_status|[AcceptanceStatus](#schemaacceptancestatus)|true|none|検収ステータス (未検収: not_accepted, 検収済: accepted)|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|[Business](#schemabusiness)|false|none|案件|
|delivery_no|string|true|none|納品No.|
|branch_no|integer(int32) \| null|false|none|枝番|
|internal_subject|string \| null|false|none|納品タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|delivery_date|string(date)|true|none|納品日|
|acceptance_date|string(date) \| null|false|none|検収日|
|customer|object|true|none|顧客|
|issued|boolean|true|none|送付ステータス|
|issued_on|string(date) \| null|false|none|送付日|
|subject|string \| null|false|none|納品書件名|
|sales_status|[SalesStatus](#schemasalesstatus)|true|none|売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|delivery_note|string \| null|false|none|納品書の備考欄に記載する内容|
|delivery_template_name|string|true|none|納品書テンプレート名称|
|recipient_address|[RecipientAddress](#schemarecipientaddress)|true|none|宛先|
|recorded_sales_amount_excluding_tax|integer(int64)|true|none|売上金額(税抜)|
|remaining_sales_amount_excluding_tax|integer(int64)|true|none|売上残金額(税抜)|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|true|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|bills_on|string(date) \| null|false|none|請求予定日|
|invoice_template_name|string|true|none|請求書テンプレート名称|
|customer|object \| null|true|none|顧客|
|billing_partner|object \| null|false|none|請求先|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|true|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collecting_partner|object \| null|false|none|入金元|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[LineDetail](#schemalinedetail)]|true|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_status|not_delivered|
|delivery_status|delivered|
|acceptance_status|not_accepted|
|acceptance_status|accepted|
|sales_status|not_sold|
|sales_status|partially_sold|
|sales_status|sold|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_DeliveryStatusChangeRequest">DeliveryStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystatuschangerequest"></a>
<a id="schema_DeliveryStatusChangeRequest"></a>
<a id="tocSdeliverystatuschangerequest"></a>
<a id="tocsdeliverystatuschangerequest"></a>

```json
{
  "company_id": 1,
  "delivery_status": "not_delivered"
}
```

納品ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|delivery_status|[DeliveryStatus](#schemadeliverystatus)|true|none|納品ステータス (未納品: not_delivered, 納品済: delivered)|

#### Enumerated Values

|Property|Value|
|---|---|
|delivery_status|not_delivered|
|delivery_status|delivered|

<h2 id="tocS_AcceptanceStatusChangeRequest">AcceptanceStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptancestatuschangerequest"></a>
<a id="schema_AcceptanceStatusChangeRequest"></a>
<a id="tocSacceptancestatuschangerequest"></a>
<a id="tocsacceptancestatuschangerequest"></a>

```json
{
  "company_id": 1,
  "acceptance_status": "not_accepted"
}
```

検収ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|acceptance_status|[AcceptanceStatus](#schemaacceptancestatus)|true|none|検収ステータス (未検収: not_accepted, 検収済: accepted)|

#### Enumerated Values

|Property|Value|
|---|---|
|acceptance_status|not_accepted|
|acceptance_status|accepted|

<h2 id="tocS_BillingCreatingStatus">BillingCreatingStatus</h2>
<!-- backwards compatibility -->
<a id="schemabillingcreatingstatus"></a>
<a id="schema_BillingCreatingStatus"></a>
<a id="tocSbillingcreatingstatus"></a>
<a id="tocsbillingcreatingstatus"></a>

```json
"not_created"
```

請求登録ステータス (未作成: not_created, 作成済: created, 取消済: canceled, 赤伝作成済: aka_created, 対象外: none)
※aka_created（赤伝作成済）は過去データにのみ存在します。今後、新規に発生することはありません。

<h2 id="tocS_CollectionMethodTypeWithNone">CollectionMethodTypeWithNone</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmethodtypewithnone"></a>
<a id="schema_CollectionMethodTypeWithNone"></a>
<a id="tocScollectionmethodtypewithnone"></a>
<a id="tocscollectionmethodtypewithnone"></a>

```json
"none"
```

入金方法
* `transfer` - 振込
* `cash` - 現金
* `bill_payable` - 手形
* `direct_debit` - 振替
* `none` - なし

<h2 id="tocS_SaleDigest">SaleDigest</h2>
<!-- backwards compatibility -->
<a id="schemasaledigest"></a>
<a id="schema_SaleDigest"></a>
<a id="tocSsaledigest"></a>
<a id="tocssaledigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_at": "2024-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2024-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "sales_no": "S-2024-0001",
  "subject": "Webシステム開発業務",
  "customer_order_no": "PO-2024-001",
  "revenue_recognition_date": "2024-01-31",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "billing_creating_status": "not_created",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "bills_on": "2024-02-01",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "Webシステム開発業務",
  "invoice_note": "お振込期限は月末までとなります",
  "billing_amount_excluding_tax": 5200000,
  "invoice_no": "INV-2024-0001",
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "collects_on": "2024-02-28",
  "collection_method_type": "none",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要顧客案件"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|[Business](#schemabusiness)|false|none|案件|
|sales_no|string|true|none|売上No.|
|subject|string \| null|false|none|売上タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|revenue_recognition_date|string(date)|true|none|売上日|
|customer|object|true|none|顧客|
|billing_creating_status|[BillingCreatingStatus](#schemabillingcreatingstatus)|true|none|請求登録ステータス (未作成: not_created, 作成済: created, 取消済: canceled, 赤伝作成済: aka_created, 対象外: none)<br>※aka_created（赤伝作成済）は過去データにのみ存在します。今後、新規に発生することはありません。|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|
|sales_order_id|string \| null|false|none|受注ID|
|delivery_id|string \| null|false|none|納品ID|
|advance_receipt_id|string \| null|false|none|前受金ID|
|periodic_sales_id|string \| null|false|none|定期売上ID|
|bills_on|string(date) \| null|false|none|請求日|
|invoice_template_name|string|true|none|請求書テンプレート名称|
|billing_partner|object \| null|false|none|請求先|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|billing_amount_excluding_tax|integer(int64) \| null|false|none|請求金額(税抜)|
|invoice_no|string \| null|false|none|請求書番号|
|bill_id|string \| null|false|none|請求ID|
|collects_on|string(date) \| null|false|none|入金期日|
|collection_method_type|[CollectionMethodTypeWithNone](#schemacollectionmethodtypewithnone)|true|none|入金方法<br>* `transfer` - 振込<br>* `cash` - 現金<br>* `bill_payable` - 手形<br>* `direct_debit` - 振替<br>* `none` - なし|
|collecting_partner|object \| null|false|none|入金元|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|string \| null|false|none|社内メモ|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_status|not_created|
|billing_creating_status|created|
|billing_creating_status|canceled|
|billing_creating_status|aka_created|
|billing_creating_status|none|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|
|collection_method_type|none|

<h2 id="tocS_SaleBasicLineParams">SaleBasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemasalebasiclineparams"></a>
<a id="schema_SaleBasicLineParams"></a>
<a id="tocSsalebasiclineparams"></a>
<a id="tocssalebasiclineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

売上通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_LineParams-2">LineParams-2</h2>
<!-- backwards compatibility -->
<a id="schemalineparams-2"></a>
<a id="schema_LineParams-2"></a>
<a id="tocSlineparams-2"></a>
<a id="tocslineparams-2"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SaleBasicLineParams](#schemasalebasiclineparams)|false|none|売上通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_SaleRequestBase">SaleRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemasalerequestbase"></a>
<a id="schema_SaleRequestBase"></a>
<a id="tocSsalerequestbase"></a>
<a id="tocssalerequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "サンプル案件売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "revenue_recognition_date": "2021-12-12",
  "customer_id": 1001,
  "bills_on": "2021-12-12",
  "invoice_template_id": 10002,
  "billing_partner_id": 1002,
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2021-12-12",
  "collection_method_type": "transfer",
  "collecting_partner_id": 1003,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|subject|string \| null|false|none|売上タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|revenue_recognition_date|string(date)|false|none|売上日|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|bills_on|string(date) \| null|false|none|請求日|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金期日|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[LineParams-2](#schemalineparams-2)]|false|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_SaleMinimalResponse">SaleMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemasaleminimalresponse"></a>
<a id="schema_SaleMinimalResponse"></a>
<a id="tocSsaleminimalresponse"></a>
<a id="tocssaleminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_SaleBasicLineDetail">SaleBasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalebasiclinedetail"></a>
<a id="schema_SaleBasicLineDetail"></a>
<a id="tocSsalebasiclinedetail"></a>
<a id="tocssalebasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

売上通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力フラグ|
|account_item|[AccountItem](#schemaaccountitem)|true|none|勘定科目|
|segment_tag_1|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_2|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_3|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_SaleLineDetail">SaleLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalelinedetail"></a>
<a id="schema_SaleLineDetail"></a>
<a id="tocSsalelinedetail"></a>
<a id="tocssalelinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

売上明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SaleBasicLineDetail](#schemasalebasiclinedetail)|false|none|売上通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_SaleDetail">SaleDetail</h2>
<!-- backwards compatibility -->
<a id="schemasaledetail"></a>
<a id="schema_SaleDetail"></a>
<a id="tocSsaledetail"></a>
<a id="tocssaledetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_at": "2024-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2024-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "total_amount": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "sales_no": "S-2024-0001",
  "subject": "Webシステム開発業務",
  "customer_order_no": "PO-2024-001",
  "revenue_recognition_date": "2024-01-31",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "billing_creating_status": "not_created",
  "billing_status": "not_billed",
  "collection_status": "not_settled",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "delivery_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "bills_on": "2024-02-01",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "Webシステム開発業務",
  "invoice_note": "お振込期限は月末までとなります",
  "billing_amount_excluding_tax": 5200000,
  "invoice_no": "INV-2024-0001",
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "collects_on": "2024-02-28",
  "collection_method_type": "none",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|[Business](#schemabusiness)|false|none|案件|
|sales_no|string|true|none|売上No.|
|subject|string \| null|false|none|売上タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|revenue_recognition_date|string(date)|true|none|売上日|
|customer|object|true|none|顧客|
|billing_creating_status|[BillingCreatingStatus](#schemabillingcreatingstatus)|true|none|請求登録ステータス (未作成: not_created, 作成済: created, 取消済: canceled, 赤伝作成済: aka_created, 対象外: none)<br>※aka_created（赤伝作成済）は過去データにのみ存在します。今後、新規に発生することはありません。|
|billing_status|[BillingStatus](#schemabillingstatus)|true|none|請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)<br>※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。|
|collection_status|[CollectionStatus](#schemacollectionstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)<br>※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。|
|sales_order_id|string \| null|false|none|受注ID|
|delivery_id|string \| null|false|none|納品ID|
|advance_receipt_id|string \| null|false|none|前受金ID|
|periodic_sales_id|string \| null|false|none|定期売上ID|
|bills_on|string(date) \| null|false|none|請求日|
|invoice_template_name|string|true|none|請求書テンプレート名称|
|billing_partner|object \| null|false|none|請求先|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|billing_amount_excluding_tax|integer(int64) \| null|false|none|請求金額(税抜)|
|invoice_no|string \| null|false|none|請求書番号|
|bill_id|string \| null|false|none|請求ID|
|collects_on|string(date) \| null|false|none|入金期日|
|collection_method_type|[CollectionMethodTypeWithNone](#schemacollectionmethodtypewithnone)|true|none|入金方法<br>* `transfer` - 振込<br>* `cash` - 現金<br>* `bill_payable` - 手形<br>* `direct_debit` - 振替<br>* `none` - なし|
|collecting_partner|object \| null|false|none|入金元|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|string \| null|false|none|社内メモ|
|sales_order_id|string \| null|false|none|受注ID|
|delivery_id|string \| null|false|none|納品ID|
|advance_receipt_id|string \| null|false|none|前受金ID|
|periodic_sales_id|string \| null|false|none|作成元の定期売上ID|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|bills_on|string(date) \| null|false|none|請求日|
|invoice_template_name|string|true|none|請求書テンプレート名称|
|customer|object \| null|true|none|顧客|
|billing_partner|object \| null|false|none|請求先|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|billing_amount_excluding_tax|integer(int64) \| null|false|none|請求金額(税抜)|
|invoice_no|string \| null|false|none|請求書番号|
|bill_id|string \| null|false|none|請求ID|
|collects_on|string(date) \| null|false|none|入金期日|
|collection_method_type|[CollectionMethodTypeWithNone](#schemacollectionmethodtypewithnone)|true|none|入金方法<br>* `transfer` - 振込<br>* `cash` - 現金<br>* `bill_payable` - 手形<br>* `direct_debit` - 振替<br>* `none` - なし|
|collecting_partner|object \| null|false|none|入金元|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[SaleLineDetail](#schemasalelinedetail)]|true|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_status|not_created|
|billing_creating_status|created|
|billing_creating_status|canceled|
|billing_creating_status|aka_created|
|billing_creating_status|none|
|billing_status|not_billed|
|billing_status|partially_billed|
|billing_status|billed|
|billing_status|none|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|invalidated|
|collection_status|none|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|
|collection_method_type|none|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|
|collection_method_type|none|

<h2 id="tocS_ManualSettlementStatus">ManualSettlementStatus</h2>
<!-- backwards compatibility -->
<a id="schemamanualsettlementstatus"></a>
<a id="schema_ManualSettlementStatus"></a>
<a id="tocSmanualsettlementstatus"></a>
<a id="tocsmanualsettlementstatus"></a>

```json
"settled"
```

手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)

<h2 id="tocS_SaleCollectionStatusChangeRequest">SaleCollectionStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasalecollectionstatuschangerequest"></a>
<a id="schema_SaleCollectionStatusChangeRequest"></a>
<a id="tocSsalecollectionstatuschangerequest"></a>
<a id="tocssalecollectionstatuschangerequest"></a>

```json
{
  "company_id": 1,
  "collection_status": "settled"
}
```

決済ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|collection_status|[ManualSettlementStatus](#schemamanualsettlementstatus)|true|none|手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_status|not_settled|
|collection_status|partially_settled|
|collection_status|settled|
|collection_status|none|

<h2 id="tocS_PeriodicSaleDigest">PeriodicSaleDigest</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsaledigest"></a>
<a id="schema_PeriodicSaleDigest"></a>
<a id="tocSperiodicsaledigest"></a>
<a id="tocsperiodicsaledigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_no": "PS-2024-0001",
  "subject": "Webサイト保守費",
  "canceled": false,
  "total_schedule_count": 12,
  "recorded_count": 3,
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2024-01-15T10:30:00+09:00",
  "last_updated_at": "2024-01-16T14:45:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_note": "お振込期限は月末までとなります",
  "internal_memo": "重要案件のため優先対応"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|定期売上ID|
|periodic_sales_no|string|true|none|定期売上No.|
|subject|string \| null|false|none|定期売上タイトル|
|canceled|boolean|true|none|取消状態|
|total_schedule_count|integer(int32) \| null|false|none|売上予定の総回数|
|recorded_count|integer(int32) \| null|false|none|計上済み回数|
|advance_receipt_id|string \| null|false|none|前受金ID（前受金由来の定期売上の場合のみ。それ以外はnull）|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|customer|object|true|none|顧客|
|business|[Business](#schemabusiness)|false|none|案件|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|billing_partner|object \| null|false|none|請求先|
|collecting_partner|object \| null|false|none|入金元|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|

<h2 id="tocS_PeriodicSaleBasicLineParams">PeriodicSaleBasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsalebasiclineparams"></a>
<a id="schema_PeriodicSaleBasicLineParams"></a>
<a id="tocSperiodicsalebasiclineparams"></a>
<a id="tocsperiodicsalebasiclineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

定期売上通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_PeriodicSaleLineParams">PeriodicSaleLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsalelineparams"></a>
<a id="schema_PeriodicSaleLineParams"></a>
<a id="tocSperiodicsalelineparams"></a>
<a id="tocsperiodicsalelineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PeriodicSaleBasicLineParams](#schemaperiodicsalebasiclineparams)|false|none|定期売上通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_PeriodicSaleRequestBase">PeriodicSaleRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsalerequestbase"></a>
<a id="schema_PeriodicSaleRequestBase"></a>
<a id="tocSperiodicsalerequestbase"></a>
<a id="tocsperiodicsalerequestbase"></a>

```json
{
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "customer_id": 1001,
  "subject": "サンプル案件定期売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "recurrence_rule": {
    "start_date": "2025-04-01",
    "end_date": "2026-03-31",
    "interval": "1",
    "day_of_month": 32
  },
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "bills_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "billing_creating_method_type": "automatically",
  "invoice_subject": "サンプル案件定期売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "collects_on_rule": {
    "cutoff_day": 32,
    "additional_months": 1,
    "fixed_day": 32
  },
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_id|string \| null|false|none|案件ID|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|subject|string \| null|false|none|定期売上タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|recurrence_rule|object|false|none|繰り返しルール|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|bills_on_rule|object \| null|false|none|請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collects_on_rule|object \| null|false|none|入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[PeriodicSaleLineParams](#schemaperiodicsalelineparams)]|false|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_PeriodicSaleMinimalResponse">PeriodicSaleMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsaleminimalresponse"></a>
<a id="schema_PeriodicSaleMinimalResponse"></a>
<a id="tocSperiodicsaleminimalresponse"></a>
<a id="tocsperiodicsaleminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|定期売上ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_ScheduledDateRuleDay">ScheduledDateRuleDay</h2>
<!-- backwards compatibility -->
<a id="schemascheduleddateruleday"></a>
<a id="schema_ScheduledDateRuleDay"></a>
<a id="tocSscheduleddateruleday"></a>
<a id="tocsscheduleddateruleday"></a>

```json
32
```

予定日ルールの日。1〜28 の日付、または末日を指定します。
末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。

<h2 id="tocS_RecurrenceRule">RecurrenceRule</h2>
<!-- backwards compatibility -->
<a id="schemarecurrencerule"></a>
<a id="schema_RecurrenceRule"></a>
<a id="tocSrecurrencerule"></a>
<a id="tocsrecurrencerule"></a>

```json
{
  "start_date": "2025-04-01",
  "end_date": "2026-03-31",
  "interval": "1",
  "day_of_month": {}
}
```

繰り返しルール

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date)|true|none|開始日|
|end_date|string(date)|true|none|終了日|
|interval|string|true|none|周期 (毎月: 1, 2ヶ月ごと: 2, 3ヶ月ごと: 3, 6ヶ月ごと: 6, 12ヶ月ごと: 12, 偶数月: even, 奇数月: odd)|
|day_of_month|object|true|none|周期日。32 は末日|

#### Enumerated Values

|Property|Value|
|---|---|
|interval|1|
|interval|2|
|interval|3|
|interval|6|
|interval|12|
|interval|even|
|interval|odd|

<h2 id="tocS_PeriodicSaleBasicLineDetail">PeriodicSaleBasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsalebasiclinedetail"></a>
<a id="schema_PeriodicSaleBasicLineDetail"></a>
<a id="tocSperiodicsalebasiclinedetail"></a>
<a id="tocsperiodicsalebasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

定期売上通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力フラグ|
|segment_tag_1|object|true|none|セグメントタグ1|
|segment_tag_2|object|true|none|セグメントタグ2|
|segment_tag_3|object|true|none|セグメントタグ3|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_PeriodicSaleLineDetail">PeriodicSaleLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicsalelinedetail"></a>
<a id="schema_PeriodicSaleLineDetail"></a>
<a id="tocSperiodicsalelinedetail"></a>
<a id="tocsperiodicsalelinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

定期売上明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PeriodicSaleBasicLineDetail](#schemaperiodicsalebasiclinedetail)|false|none|定期売上通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_BillingCreatingMethodTypeWithNone">BillingCreatingMethodTypeWithNone</h2>
<!-- backwards compatibility -->
<a id="schemabillingcreatingmethodtypewithnone"></a>
<a id="schema_BillingCreatingMethodTypeWithNone"></a>
<a id="tocSbillingcreatingmethodtypewithnone"></a>
<a id="tocsbillingcreatingmethodtypewithnone"></a>

```json
"none"
```

請求作成方法区分
* `automatically` - 自動作成
* `manually` - 手動作成
* `none` - なし

<h2 id="tocS_ScheduledDateRule">ScheduledDateRule</h2>
<!-- backwards compatibility -->
<a id="schemascheduleddaterule"></a>
<a id="schema_ScheduledDateRule"></a>
<a id="tocSscheduleddaterule"></a>
<a id="tocsscheduleddaterule"></a>

```json
{
  "cutoff_day": {},
  "additional_months": 1,
  "fixed_day": {}
}
```

予定日ルール

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cutoff_day|object|true|none|締め日。32 は末日|
|additional_months|integer(int32)|true|none|締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月|
|fixed_day|object|true|none|締め日を基準に additional_months か月後の予定日の日。32 は末日|

<h2 id="tocS_SalesEntry">SalesEntry</h2>
<!-- backwards compatibility -->
<a id="schemasalesentry"></a>
<a id="schema_SalesEntry"></a>
<a id="tocSsalesentry"></a>
<a id="tocssalesentry"></a>

```json
{
  "status": "scheduled",
  "sales_schedule_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "scheduled_date": "2024-01-31",
  "actual_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "actual_sales_revenue_recognition_date": "2024-01-31",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "internal_memo": {},
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2024-01-15T10:30:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2024-01-16T14:45:00+09:00"
}
```

売上計上状況

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|effectiveブロックの値のソース（actual: 計上済み / scheduled: 未計上）|
|sales_schedule_id|string \| null|false|none|売上予定ID（計上済み時はnull。計上済みの売上予定は詳細を閲覧できないため）|
|scheduled_date|string(date)|true|none|売上予定日|
|actual_sales_id|string \| null|false|none|計上された売上ID（未計上時はnull）|
|actual_sales_revenue_recognition_date|string(date) \| null|false|none|計上された売上の計上日（未計上時はnull）|
|amount_set|object|true|none|金額セット（statusが示す側の値）|
|internal_memo|object|false|none|社内メモ（statusが示す側の値）|
|registered_by|object \| null|true|none|登録者（statusが示す側の値）|
|registered_by_member|object \| null|false|none|登録者（statusが示す側の値）|
|registered_at|string(date-time)|true|none|登録日時（statusが示す側の値）|
|last_updated_by|object \| null|true|none|変更者（statusが示す側の値）|
|last_updated_by_member|object \| null|false|none|変更者（statusが示す側の値）|
|last_updated_at|string(date-time)|true|none|変更日時（statusが示す側の値）|

#### Enumerated Values

|Property|Value|
|---|---|
|status|actual|
|status|scheduled|

<h2 id="tocS_SalesScheduleRegistrationStatus">SalesScheduleRegistrationStatus</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduleregistrationstatus"></a>
<a id="schema_SalesScheduleRegistrationStatus"></a>
<a id="tocSsalesscheduleregistrationstatus"></a>
<a id="tocssalesscheduleregistrationstatus"></a>

```json
"none"
```

売上予定の登録ステータス (未登録: none, 処理中: in_progress, エラー: error)

<h2 id="tocS_SalesScheduleDigest">SalesScheduleDigest</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduledigest"></a>
<a id="schema_SalesScheduleDigest"></a>
<a id="tocSsalesscheduledigest"></a>
<a id="tocssalesscheduledigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "Webサイト保守費",
  "customer_order_no": "C-PO-20211212-001",
  "scheduled_date": "2025-04-30",
  "registration_status": "none",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bills_on": "2025-05-31",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collects_on": "2025-06-30",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "total_amount": 110000,
  "amount_of_withholding_tax": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

売上予定一覧情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上予定ID|
|periodic_sales_id|string|true|none|定期売上ID|
|advance_receipt_id|string \| null|false|none|前受金ID|
|subject|string \| null|false|none|件名|
|customer_order_no|string \| null|false|none|顧客注文No.|
|scheduled_date|string(date)|true|none|売上予定日|
|registration_status|[SalesScheduleRegistrationStatus](#schemasalesscheduleregistrationstatus)|true|none|売上予定の登録ステータス (未登録: none, 処理中: in_progress, エラー: error)|
|customer|object|true|none|顧客|
|bills_on|string(date) \| null|false|none|請求予定日|
|billing_partner|object \| null|false|none|請求先|
|collects_on|string(date) \| null|false|none|入金予定日|
|collecting_partner|object \| null|false|none|入金元|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|object \| null|false|none|担当部門|
|amount_set|object|true|none|売上金額|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|business|object \| null|false|none|案件|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|最新変更者|
|last_updated_by_member|object \| null|false|none|最新変更者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|最終変更日時|

#### Enumerated Values

|Property|Value|
|---|---|
|registration_status|none|
|registration_status|in_progress|
|registration_status|error|

<h2 id="tocS_SalesScheduleBasicLineDetail">SalesScheduleBasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalesschedulebasiclinedetail"></a>
<a id="schema_SalesScheduleBasicLineDetail"></a>
<a id="tocSsalesschedulebasiclinedetail"></a>
<a id="tocssalesschedulebasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

売上予定通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力フラグ|
|account_item|[AccountItem](#schemaaccountitem)|true|none|勘定科目|
|segment_tag_1|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_2|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_3|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_SalesScheduleLineDetail">SalesScheduleLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalesschedulelinedetail"></a>
<a id="schema_SalesScheduleLineDetail"></a>
<a id="tocSsalesschedulelinedetail"></a>
<a id="tocssalesschedulelinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  }
}
```

売上予定明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SalesScheduleBasicLineDetail](#schemasalesschedulebasiclinedetail)|false|none|売上予定通常明細詳細|
|*oneOf*|[TextLineDetail](#schematextlinedetail)|false|none|テキスト明細詳細|

<h2 id="tocS_SalesScheduleDetail">SalesScheduleDetail</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduledetail"></a>
<a id="schema_SalesScheduleDetail"></a>
<a id="tocSsalesscheduledetail"></a>
<a id="tocssalesscheduledetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "advance_receipt_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "subject": "Webサイト保守費",
  "customer_order_no": "C-PO-20211212-001",
  "scheduled_date": "2025-04-30",
  "registration_status": "none",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "billing_creating_method_type": "none",
  "bills_on": "2025-05-31",
  "invoice_template_name": "デフォルトテンプレート",
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-06-30",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "none",
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "total_amount": 110000,
  "amount_of_withholding_tax": 10000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00",
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      }
    }
  ]
}
```

売上予定詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上予定ID|
|periodic_sales_id|string|true|none|定期売上ID|
|advance_receipt_id|string \| null|false|none|前受金ID|
|subject|string \| null|false|none|件名|
|customer_order_no|string \| null|false|none|顧客注文No.|
|scheduled_date|string(date)|true|none|売上予定日|
|registration_status|[SalesScheduleRegistrationStatus](#schemasalesscheduleregistrationstatus)|true|none|売上予定の登録ステータス (未登録: none, 処理中: in_progress, エラー: error)|
|customer|object|true|none|顧客|
|billing_creating_method_type|[BillingCreatingMethodTypeWithNone](#schemabillingcreatingmethodtypewithnone)|true|none|請求作成方法区分<br>* `automatically` - 自動作成<br>* `manually` - 手動作成<br>* `none` - なし|
|bills_on|string(date) \| null|false|none|請求予定日|
|invoice_template_name|string \| null|false|none|請求書テンプレート名称|
|billing_partner|object \| null|false|none|請求先|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collecting_partner|object \| null|false|none|入金元|
|collection_method_type|[CollectionMethodTypeWithNone](#schemacollectionmethodtypewithnone)|true|none|入金方法<br>* `transfer` - 振込<br>* `cash` - 現金<br>* `bill_payable` - 手形<br>* `direct_debit` - 振替<br>* `none` - なし|
|charge_employee|object \| null|false|none|社内担当者|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|amount_set|object|true|none|売上金額|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|税率を含む金額セット|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|business|[Business](#schemabusiness)|false|none|案件|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|lines|[[SalesScheduleLineDetail](#schemasalesschedulelinedetail)]|true|none|売上予定明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|registration_status|none|
|registration_status|in_progress|
|registration_status|error|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|billing_creating_method_type|none|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|
|collection_method_type|none|

<h2 id="tocS_SalesScheduleMinimalResponse">SalesScheduleMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduleminimalresponse"></a>
<a id="schema_SalesScheduleMinimalResponse"></a>
<a id="tocSsalesscheduleminimalresponse"></a>
<a id="tocssalesscheduleminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上予定ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_SalesScheduleBasicLineParams">SalesScheduleBasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemasalesschedulebasiclineparams"></a>
<a id="schema_SalesScheduleBasicLineParams"></a>
<a id="tocSsalesschedulebasiclineparams"></a>
<a id="tocssalesschedulebasiclineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

売上予定通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|[LineType](#schemalinetype)|true|none|明細種別|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|
|line_type|text|

<h2 id="tocS_SalesScheduleLineParams">SalesScheduleLineParams</h2>
<!-- backwards compatibility -->
<a id="schemasalesschedulelineparams"></a>
<a id="schema_SalesScheduleLineParams"></a>
<a id="tocSsalesschedulelineparams"></a>
<a id="tocssalesschedulelineparams"></a>

```json
{
  "line_type": "basic",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

売上予定明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SalesScheduleBasicLineParams](#schemasalesschedulebasiclineparams)|false|none|売上予定通常明細パラメータ|
|*oneOf*|[TextLineParams](#schematextlineparams)|false|none|テキスト明細パラメータ|

<h2 id="tocS_SalesScheduleUpdateParams">SalesScheduleUpdateParams</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduleupdateparams"></a>
<a id="schema_SalesScheduleUpdateParams"></a>
<a id="tocSsalesscheduleupdateparams"></a>
<a id="tocssalesscheduleupdateparams"></a>

```json
{
  "customer_id": 1001,
  "subject": "サンプル案件売上の件",
  "customer_order_no": "C-PO-20211212-001",
  "scheduled_date": "2025-04-30",
  "billing_creating_method_type": "automatically",
  "bills_on": "2025-05-31",
  "billing_partner_id": 1002,
  "invoice_template_id": 10002,
  "invoice_subject": "サンプル案件売上の件",
  "invoice_note": "お振込期限は月末までとなります",
  "collects_on": "2025-06-30",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "line_type": "basic",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12345,
      "segment_tag_3_id": 12345
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|subject|string \| null|false|none|件名|
|customer_order_no|string \| null|false|none|顧客注文No.|
|scheduled_date|string(date)|false|none|売上予定日|
|billing_creating_method_type|[BillingCreatingMethodType](#schemabillingcreatingmethodtype)|false|none|請求作成方法区分 (自動作成: automatically, 手動作成: manually)|
|bills_on|string(date) \| null|false|none|請求予定日|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collects_on|string(date) \| null|false|none|入金予定日|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[SalesScheduleLineParams](#schemasalesschedulelineparams)]|false|none|売上予定明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）|

#### Enumerated Values

|Property|Value|
|---|---|
|billing_creating_method_type|automatically|
|billing_creating_method_type|manually|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_SalesScheduleActualizationResult">SalesScheduleActualizationResult</h2>
<!-- backwards compatibility -->
<a id="schemasalesscheduleactualizationresult"></a>
<a id="schema_SalesScheduleActualizationResult"></a>
<a id="tocSsalesscheduleactualizationresult"></a>
<a id="tocssalesscheduleactualizationresult"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-04-01T09:00:00+09:00",
  "last_updated_at": "2025-04-15T14:30:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|売上予定ID|
|sales_id|string|true|none|計上された売上のID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_OtherCostDetail">OtherCostDetail</h2>
<!-- backwards compatibility -->
<a id="schemaothercostdetail"></a>
<a id="schema_OtherCostDetail"></a>
<a id="tocSothercostdetail"></a>
<a id="tocsothercostdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "other_cost_no": "OC-00001",
  "canceled": false,
  "amount_excluding_tax": 10000,
  "incurred_date": "2025-04-01",
  "memo": "その他原価メモ",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "deal_line": {
    "deal_id": 1001,
    "deal_line_id": 2001
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|その他原価ID|
|other_cost_no|string|true|none|その他原価番号|
|canceled|boolean|true|none|取消状態|
|amount_excluding_tax|integer(int64)|true|none|税抜金額|
|incurred_date|string(date)|true|none|発生日|
|memo|string \| null|false|none|メモ|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|business|[Business](#schemabusiness)|false|none|案件|
|deal_line|object \| null|false|none|会計連携情報|

<h2 id="tocS_OtherCostMinimalResponse">OtherCostMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaothercostminimalresponse"></a>
<a id="schema_OtherCostMinimalResponse"></a>
<a id="tocSothercostminimalresponse"></a>
<a id="tocsothercostminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|その他原価ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_ProcurementPaymentStatus">ProcurementPaymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementpaymentstatus"></a>
<a id="schema_ProcurementPaymentStatus"></a>
<a id="tocSprocurementpaymentstatus"></a>
<a id="tocsprocurementpaymentstatus"></a>

```json
"not_settled"
```

決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)

<h2 id="tocS_ProcurementDigest">ProcurementDigest</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementdigest"></a>
<a id="schema_ProcurementDigest"></a>
<a id="tocSprocurementdigest"></a>
<a id="tocsprocurementdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "procurement_no": "P211212-00001",
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "payment_status": "not_settled",
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|仕入ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|procurement_no|string|true|none|仕入No.|
|internal_subject|string \| null|false|none|仕入タイトル|
|procurement_date|string(date)|true|none|仕入日|
|supplier|object|true|none|仕入先|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|payment_status|[ProcurementPaymentStatus](#schemaprocurementpaymentstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)|
|payments_on|string(date)|true|none|支払期日|
|payment_method_type|[PaymentMethodType](#schemapaymentmethodtype)|true|none|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|payment_partner|object|true|none|支払先|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|business|object|false|none|案件<br>※ 複数の案件が紐づく場合はnullになります|
|purchase_order_id|string \| null|false|none|発注ID<br>※ 複数の発注が紐づく場合はnullになります|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|
|payment_status|none|
|payment_method_type|transfer|
|payment_method_type|cash|
|payment_method_type|bill_payable|

<h2 id="tocS_ProcurementLineParams">ProcurementLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementlineparams"></a>
<a id="schema_ProcurementLineParams"></a>
<a id="tocSprocurementlineparams"></a>
<a id="tocsprocurementlineparams"></a>

```json
{
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "事務用品購入",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12346,
  "segment_tag_3_id": 12347
}
```

明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|business_id|string \| null|false|none|案件ID|
|purchase_order_id|string \| null|false|none|発注ID|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

<h2 id="tocS_ProcurementRequestBase">ProcurementRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementrequestbase"></a>
<a id="schema_ProcurementRequestBase"></a>
<a id="tocSprocurementrequestbase"></a>
<a id="tocsprocurementrequestbase"></a>

```json
{
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12346,
      "segment_tag_3_id": 12347
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internal_subject|string \| null|false|none|仕入タイトル|
|procurement_date|string(date)|false|none|仕入日|
|supplier_id|integer(int64)|false|none|仕入先の取引先ID|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|payments_on|string(date)|false|none|支払期日|
|payment_method_type|[PaymentMethodType](#schemapaymentmethodtype)|false|none|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|payment_partner_id|integer(int64)|false|none|支払先の取引先ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[ProcurementLineParams](#schemaprocurementlineparams)]|false|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method_type|transfer|
|payment_method_type|cash|
|payment_method_type|bill_payable|

<h2 id="tocS_ProcurementMinimalResponse">ProcurementMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementminimalresponse"></a>
<a id="schema_ProcurementMinimalResponse"></a>
<a id="tocSprocurementminimalresponse"></a>
<a id="tocsprocurementminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|仕入ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_PurchaseOrderRef">PurchaseOrderRef</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseorderref"></a>
<a id="schema_PurchaseOrderRef"></a>
<a id="tocSpurchaseorderref"></a>
<a id="tocspurchaseorderref"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "purchase_order_no": "PO211212-00001"
}
```

発注参照

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|発注ID|
|purchase_order_no|string|true|none|発注No.|

<h2 id="tocS_ProcurementLineDetail">ProcurementLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementlinedetail"></a>
<a id="schema_ProcurementLineDetail"></a>
<a id="tocSprocurementlinedetail"></a>
<a id="tocsprocurementlinedetail"></a>

```json
{
  "line_no": 1,
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "description": "事務用品購入",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  },
  "withholding_enabled": false,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "accounting_reporting_section": {
    "id": 1001,
    "name": "営業部"
  },
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "purchase_order_no": "PO211212-00001"
  }
}
```

明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|account_item|[AccountItem](#schemaaccountitem)|true|none|勘定科目|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|item_tag|[ItemTagDetail](#schemaitemtagdetail)|false|none|会計品目タグ|
|accounting_reporting_section|[AccountingReportingSectionDetail](#schemaaccountingreportingsectiondetail)|false|none|会計計上部門|
|segment_tag_1|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_2|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|segment_tag_3|[SegmentTag](#schemasegmenttag)|false|none|セグメントタグ|
|business|[Business](#schemabusiness)|false|none|案件|
|purchase_order|[PurchaseOrderRef](#schemapurchaseorderref)|false|none|発注参照|

<h2 id="tocS_ProcurementDetail">ProcurementDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementdetail"></a>
<a id="schema_ProcurementDetail"></a>
<a id="tocSprocurementdetail"></a>
<a id="tocsprocurementdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 12345,
  "canceled": false,
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "procurement_no": "P211212-00001",
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "is_qualified_invoice_issuer": true,
  "payment_status": "not_settled",
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "internal_memo": "重要案件のため優先対応",
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "amount_of_withholding_tax": 10000,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ],
  "lines": [
    {
      "line_no": 1,
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "account_item": {
        "id": 12345,
        "name": "仕入高"
      },
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      },
      "withholding_enabled": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "memo_tags": [
        {
          "id": 3001,
          "name": "重要案件"
        }
      ],
      "item_tag": {
        "id": 2001,
        "name": "印刷物"
      },
      "accounting_reporting_section": {
        "id": 1001,
        "name": "営業部"
      },
      "segment_tag_1": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_2": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "segment_tag_3": {
        "id": 12345,
        "name": "プロジェクトA"
      },
      "business": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "B-001",
        "name": "サンプル案件",
        "closed": false
      },
      "purchase_order": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "purchase_order_no": "PO211212-00001"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|仕入ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID|
|canceled|boolean|true|none|取消状態|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|procurement_no|string|true|none|仕入No.|
|internal_subject|string \| null|false|none|仕入タイトル|
|procurement_date|string(date)|true|none|仕入日|
|supplier|object|true|none|仕入先|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|payment_status|[ProcurementPaymentStatus](#schemaprocurementpaymentstatus)|true|none|決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)|
|payments_on|string(date)|true|none|支払期日|
|payment_method_type|[PaymentMethodType](#schemapaymentmethodtype)|true|none|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|payment_partner|object|true|none|支払先|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|business|object|false|none|案件<br>※ 複数の案件が紐づく場合はnullになります|
|purchase_order_id|string \| null|false|none|発注ID<br>※ 複数の発注が紐づく場合はnullになります|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|amount_of_withholding_tax|integer(int64) \| null|false|none|源泉徴収税額|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|
|lines|[[ProcurementLineDetail](#schemaprocurementlinedetail)]|true|none|明細リスト|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|
|payment_status|none|
|payment_method_type|transfer|
|payment_method_type|cash|
|payment_method_type|bill_payable|

<h2 id="tocS_ProcurementUpdateLineParams">ProcurementUpdateLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementupdatelineparams"></a>
<a id="schema_ProcurementUpdateLineParams"></a>
<a id="tocSprocurementupdatelineparams"></a>
<a id="tocsprocurementupdatelineparams"></a>

```json
{
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "事務用品購入",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "withholding_enabled": false,
  "is_manual_tax_entry": false,
  "tax": 10000,
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "accounting_reporting_section_id": 67890,
  "item_tag_id": 2001,
  "memo_tags": [
    3001
  ],
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12346,
  "segment_tag_3_id": 12347
}
```

更新用明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|master_item_id|string \| null|false|none|商品ID|
|deal_line_type_id|string|true|none|明細取引タイプID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|withholding_enabled|boolean|true|none|源泉徴収税対象明細かどうか|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|business_id|string \| null|false|none|案件ID|
|purchase_order_id|string \| null|false|none|発注ID<br><br>※省略した場合、またはnullを指定した場合、発注との紐づけは解除されます。既存の紐づけを維持したい場合は必ず指定してください。|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

<h2 id="tocS_ProcurementUpdateRequestBody">ProcurementUpdateRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementupdaterequestbody"></a>
<a id="schema_ProcurementUpdateRequestBody"></a>
<a id="tocSprocurementupdaterequestbody"></a>
<a id="tocsprocurementupdaterequestbody"></a>

```json
{
  "internal_subject": "事務用品仕入",
  "procurement_date": "2025-04-01",
  "supplier_id": 1001,
  "is_qualified_invoice_issuer": true,
  "payments_on": "2025-05-31",
  "payment_method_type": "transfer",
  "payment_partner_id": 1002,
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "reporting_section_id": 67890,
  "internal_memo": "重要案件のため優先対応",
  "lines": [
    {
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "事務用品購入",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "withholding_enabled": false,
      "is_manual_tax_entry": false,
      "tax": 10000,
      "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "purchase_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "accounting_reporting_section_id": 67890,
      "item_tag_id": 2001,
      "memo_tags": [
        3001
      ],
      "segment_tag_1_id": 12345,
      "segment_tag_2_id": 12346,
      "segment_tag_3_id": 12347
    }
  ]
}
```

仕入更新リクエストボディ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internal_subject|string \| null|false|none|仕入タイトル|
|procurement_date|string(date)|false|none|仕入日|
|supplier_id|integer(int64)|false|none|仕入先の取引先ID|
|is_qualified_invoice_issuer|boolean \| null|false|none|適格請求書発行事業者該当フラグ<br><br>※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br><br>※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。|
|payments_on|string(date)|false|none|支払期日|
|payment_method_type|[PaymentMethodType](#schemapaymentmethodtype)|false|none|支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)|
|payment_partner_id|integer(int64)|false|none|支払先の取引先ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|lines|[[ProcurementUpdateLineParams](#schemaprocurementupdatelineparams)]|false|none|明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method_type|transfer|
|payment_method_type|cash|
|payment_method_type|bill_payable|

<h2 id="tocS_ProcurementPaymentStatusChangeRequest">ProcurementPaymentStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprocurementpaymentstatuschangerequest"></a>
<a id="schema_ProcurementPaymentStatusChangeRequest"></a>
<a id="tocSprocurementpaymentstatuschangerequest"></a>
<a id="tocsprocurementpaymentstatuschangerequest"></a>

```json
{
  "company_id": 1,
  "payment_status": "settled"
}
```

決済ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|payment_status|[ManualSettlementStatus](#schemamanualsettlementstatus)|true|none|手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_status|not_settled|
|payment_status|partially_settled|
|payment_status|settled|
|payment_status|none|

<h2 id="tocS_AdvanceReceiptDigest">AdvanceReceiptDigest</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptdigest"></a>
<a id="schema_AdvanceReceiptDigest"></a>
<a id="tocSadvancereceiptdigest"></a>
<a id="tocsadvancereceiptdigest"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 1001,
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "total_amount": 100000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "advance_receipt_no": "AR211212-00001",
  "advance_receipt_date": "2025-04-01",
  "internal_subject": "サンプル前受金",
  "customer_order_no": "PO-12345",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "billing_status": {},
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bills_on": "2025-04-15",
  "is_reduced": false,
  "invoice_subject": "サンプル請求書件名",
  "invoice_note": "請求書備考テキスト",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "transfer",
  "collects_on": "2025-04-30",
  "collection_status": {},
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "consumption_total_amount": 50000,
  "remaining_total_expense": 50000
}
```

前受金一覧情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|前受金ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID(null は未連携を示す)|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|object|true|none|none|
|advance_receipt_no|string|true|none|前受金No.|
|advance_receipt_date|string(date)|true|none|前受金発生日|
|internal_subject|string \| null|false|none|前受金タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|customer|object|true|none|顧客|
|bill_id|string \| null|false|none|請求ID|
|billing_status|object|true|none|請求書送付ステータス|
|billing_partner|object|true|none|請求先|
|bills_on|string(date) \| null|false|none|請求予定日|
|is_reduced|boolean|true|none|前受金が取り崩されているかどうか|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collecting_partner|object|true|none|入金元|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|true|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collects_on|string(date) \| null|false|none|入金予定日|
|collection_status|object|true|none|決済ステータス|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|sales_order_id|string \| null|false|none|受注ID|
|consumption_total_amount|integer(int64)|true|none|売上計上済金額(取崩済金額)|
|remaining_total_expense|integer(int64)|true|none|前受金残額(取崩可能額)|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_AdvanceReceiptBasicLineParams">AdvanceReceiptBasicLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptbasiclineparams"></a>
<a id="schema_AdvanceReceiptBasicLineParams"></a>
<a id="tocSadvancereceiptbasiclineparams"></a>
<a id="tocsadvancereceiptbasiclineparams"></a>

```json
{
  "line_type": "basic",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "前受金明細の摘要",
  "quantity": 1,
  "unit_price": 100000,
  "uom_name": "個",
  "is_manual_tax_entry": false,
  "tax": 10000
}
```

前受金通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|string|true|none|明細種別（前受金は basic のみサポート）|
|deal_line_type_id|string|true|none|明細取引タイプID|
|master_item_id|string \| null|false|none|商品ID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|unit_price|number(double)|true|none|単価|
|uom_name|string \| null|false|none|単位|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|

<h2 id="tocS_AdvanceReceiptRequestBase">AdvanceReceiptRequestBase</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptrequestbase"></a>
<a id="schema_AdvanceReceiptRequestBase"></a>
<a id="tocSadvancereceiptrequestbase"></a>
<a id="tocsadvancereceiptrequestbase"></a>

```json
{
  "account_item_id": 12345,
  "accounting_reporting_section_id": 67890,
  "advance_receipt_date": "2024-01-31",
  "billing_partner_id": 1002,
  "bills_on": "2024-02-01",
  "business_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "charge_employee_id": 101,
  "charge_member_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "collecting_partner_id": 1003,
  "collection_method_type": "transfer",
  "collects_on": "2024-02-28",
  "customer_id": 1001,
  "customer_order_no": "C-PO-20211212-001",
  "internal_memo": "重要案件のため優先対応",
  "internal_subject": "前受金サンプル案件",
  "invoice_note": "お振込期限は月末までとなります",
  "invoice_subject": "前受金請求書件名",
  "invoice_template_id": 10002,
  "item_tag_id": 2001,
  "lines": [
    {
      "line_type": "basic",
      "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
      "description": "前受金明細の摘要",
      "quantity": 1,
      "unit_price": 100000,
      "uom_name": "個",
      "is_manual_tax_entry": false,
      "tax": 10000
    }
  ],
  "memo_tags": [
    3001
  ],
  "reporting_section_id": 67890,
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_item_id|integer(int64)|false|none|勘定科目ID|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|advance_receipt_date|string(date)|false|none|前受金発生日|
|billing_partner_id|integer(int64)|false|none|請求先の取引先ID|
|bills_on|string(date)|false|none|請求日|
|business_id|string|false|none|案件ID|
|charge_employee_id|[ChargeEmployeeId](#schemachargeemployeeid)|false|none|社内担当者の従業員ID<br><br>charge_member_id と同時に指定した場合は charge_member_id が優先されます。|
|charge_member_id|[ChargeMemberId](#schemachargememberid)|false|none|社内担当者のメンバーID<br><br>charge_employee_id と同時に指定した場合は charge_member_id が優先されます。|
|collecting_partner_id|integer(int64)|false|none|入金元の取引先ID|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|false|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collects_on|string(date)|false|none|入金期日|
|customer_id|integer(int64)|false|none|顧客の取引先ID|
|customer_order_no|string \| null|false|none|顧客注文No.|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|internal_subject|string \| null|false|none|前受金タイトル|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_template_id|integer(int64) \| null|false|none|請求書テンプレートID|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|lines|[[AdvanceReceiptBasicLineParams](#schemaadvancereceiptbasiclineparams)]|false|none|明細リスト|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|reporting_section_id|[ReportingSectionId](#schemareportingsectionid)|false|none|担当部門ID<br><br>※ 親部門のIDは指定できません|
|sales_order_id|string \| null|false|none|受注ID|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_AdvanceReceiptMinimalResponse">AdvanceReceiptMinimalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptminimalresponse"></a>
<a id="schema_AdvanceReceiptMinimalResponse"></a>
<a id="tocSadvancereceiptminimalresponse"></a>
<a id="tocsadvancereceiptminimalresponse"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|前受金ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_ReportTypeEnum">ReportTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemareporttypeenum"></a>
<a id="schema_ReportTypeEnum"></a>
<a id="tocSreporttypeenum"></a>
<a id="tocsreporttypeenum"></a>

```json
"invoice"
```

帳票種別区分 (見積書: quotation, 納品書: delivery, 請求書: invoice, 発注書: purchase_order)

<h2 id="tocS_ReportType">ReportType</h2>
<!-- backwards compatibility -->
<a id="schemareporttype"></a>
<a id="schema_ReportType"></a>
<a id="tocSreporttype"></a>
<a id="tocsreporttype"></a>

```json
{
  "id": {},
  "name": "請求書"
}
```

帳票種別

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|帳票種別区分|
|name|string|true|none|表示名|

<h2 id="tocS_InvoiceTemplate">InvoiceTemplate</h2>
<!-- backwards compatibility -->
<a id="schemainvoicetemplate"></a>
<a id="schema_InvoiceTemplate"></a>
<a id="tocSinvoicetemplate"></a>
<a id="tocsinvoicetemplate"></a>

```json
{
  "id": 1001,
  "name": "デフォルトテンプレート",
  "layout_name": "standard",
  "is_default": true,
  "report_type": {
    "id": {},
    "name": "請求書"
  }
}
```

請求書テンプレート

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|請求書テンプレートID|
|name|string|true|none|テンプレート名|
|layout_name|string \| null|false|none|レイアウト名|
|is_default|boolean|true|none|デフォルトかどうか|
|report_type|object|true|none|帳票種別|

<h2 id="tocS_AdvanceReceiptBasicLineDetail">AdvanceReceiptBasicLineDetail</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptbasiclinedetail"></a>
<a id="schema_AdvanceReceiptBasicLineDetail"></a>
<a id="tocSadvancereceiptbasiclinedetail"></a>
<a id="tocsadvancereceiptbasiclinedetail"></a>

```json
{
  "line_no": 1,
  "line_type": "basic",
  "master_item": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "P-001",
    "name": "パンフレットA4"
  },
  "deal_line_type": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "name": "課税売上10%"
  },
  "description": "パンフレットデザイン料",
  "quantity": 100,
  "uom_name": "個",
  "unit_price": 1000,
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "tax_type": {
    "code": 10,
    "name": "課税売上10%"
  }
}
```

前受金通常明細詳細

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_no|integer(int32)|true|none|明細行番号|
|line_type|string|true|none|明細種別（前受金明細は basic のみ）|
|master_item|[MasterItemDetail](#schemamasteritemdetail)|false|none|商品情報|
|deal_line_type|[DealLineTypeDetail](#schemadeallinetypedetail)|true|none|明細取引タイプ|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|uom_name|string \| null|false|none|単位|
|unit_price|number(double)|true|none|単価|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|tax_type|[TaxTypeDetail](#schemataxtypedetail)|false|none|税区分|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|

<h2 id="tocS_AdvanceReceiptDetail">AdvanceReceiptDetail</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptdetail"></a>
<a id="schema_AdvanceReceiptDetail"></a>
<a id="tocSadvancereceiptdetail"></a>
<a id="tocsadvancereceiptdetail"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "deal_id": 1001,
  "canceled": false,
  "registered_at": "2025-01-15T10:30:00+09:00",
  "registered_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "registered_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "last_updated_at": "2025-01-16T14:45:00+09:00",
  "last_updated_by": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "last_updated_by_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "amount_set": {
    "excluding_tax": 100000,
    "tax": 10000,
    "including_tax": 110000
  },
  "total_amount": 100000,
  "business": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "code": "B-001",
    "name": "サンプル案件",
    "closed": false
  },
  "advance_receipt_no": "AR211212-00001",
  "advance_receipt_date": "2025-04-01",
  "internal_subject": "サンプル前受金",
  "customer_order_no": "PO-12345",
  "customer": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bill_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "billing_status": {},
  "billing_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "bills_on": "2025-04-15",
  "is_reduced": false,
  "invoice_subject": "サンプル請求書件名",
  "invoice_note": "請求書備考テキスト",
  "collecting_partner": {
    "id": 1001,
    "name": "株式会社サンプル",
    "code": "P-001"
  },
  "collection_method_type": "transfer",
  "collects_on": "2025-04-30",
  "collection_status": {},
  "charge_employee": {
    "id": 101,
    "display_name": "田中太郎"
  },
  "charge_member": {
    "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
    "display_name": "山田花子"
  },
  "reporting_section": {
    "id": 67890,
    "name": "開発部"
  },
  "internal_memo": "重要案件のため優先対応",
  "sales_order_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "consumption_total_amount": 50000,
  "remaining_total_expense": 50000,
  "account_item": {
    "id": 12345,
    "name": "仕入高"
  },
  "item_tag": {
    "id": 2001,
    "name": "印刷物"
  },
  "memo_tags": [
    {
      "id": 3001,
      "name": "重要案件"
    }
  ],
  "segment_tag_1": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_2": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "segment_tag_3": {
    "id": 12345,
    "name": "プロジェクトA"
  },
  "invoice_template": {
    "id": 1001,
    "name": "デフォルトテンプレート",
    "layout_name": "standard",
    "is_default": true,
    "report_type": {
      "id": {},
      "name": "請求書"
    }
  },
  "lines": [
    {
      "line_no": 1,
      "line_type": "basic",
      "master_item": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "code": "P-001",
        "name": "パンフレットA4"
      },
      "deal_line_type": {
        "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
        "name": "課税売上10%"
      },
      "description": "パンフレットデザイン料",
      "quantity": 100,
      "uom_name": "個",
      "unit_price": 1000,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "tax_type": {
        "code": 10,
        "name": "課税売上10%"
      }
    }
  ],
  "amount_set_rates": [
    {
      "rate": 10,
      "reduced": false,
      "amount_set": {
        "excluding_tax": 100000,
        "tax": 10000,
        "including_tax": 110000
      },
      "amount_of_deductible_tax": 5000
    }
  ]
}
```

前受金詳細情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|前受金ID|
|deal_id|integer(int64) \| null|false|none|会計の取引ID(null は未連携を示す)|
|canceled|boolean|true|none|取消状態|
|registered_at|string(date-time)|true|none|登録日時|
|registered_by|object \| null|true|none|登録者|
|registered_by_member|object \| null|false|none|登録者|
|last_updated_at|string(date-time)|true|none|変更日時|
|last_updated_by|object \| null|true|none|変更者|
|last_updated_by_member|object \| null|false|none|変更者|
|amount_set|[AmountSet](#schemaamountset)|true|none|金額セット|
|total_amount|integer(int64)|true|none|源泉徴収税額を除いた合計金額|
|business|object|true|none|none|
|advance_receipt_no|string|true|none|前受金No.|
|advance_receipt_date|string(date)|true|none|前受金発生日|
|internal_subject|string \| null|false|none|前受金タイトル|
|customer_order_no|string \| null|false|none|顧客注文No.|
|customer|object|true|none|顧客|
|bill_id|string \| null|false|none|請求ID|
|billing_status|object|true|none|請求書送付ステータス|
|billing_partner|object|true|none|請求先|
|bills_on|string(date) \| null|false|none|請求予定日|
|is_reduced|boolean|true|none|前受金が取り崩されているかどうか|
|invoice_subject|string \| null|false|none|請求書件名|
|invoice_note|string \| null|false|none|請求書の備考欄に掲載する内容|
|collecting_partner|object|true|none|入金元|
|collection_method_type|[CollectionMethodType](#schemacollectionmethodtype)|true|none|入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)|
|collects_on|string(date) \| null|false|none|入金予定日|
|collection_status|object|true|none|決済ステータス|
|charge_employee|object \| null|false|none|none|
|charge_member|object \| null|false|none|社内担当者|
|reporting_section|[ReportingSection](#schemareportingsection)|false|none|担当部門|
|internal_memo|[InternalMemo](#schemainternalmemo)|false|none|社内メモ|
|sales_order_id|string \| null|false|none|受注ID|
|consumption_total_amount|integer(int64)|true|none|売上計上済金額(取崩済金額)|
|remaining_total_expense|integer(int64)|true|none|前受金残額(取崩可能額)|
|account_item|object|true|none|勘定科目|
|item_tag|object|false|none|会計品目タグ|
|memo_tags|[[MemoTagDetail](#schemamemotagdetail)]|false|none|メモタグ|
|segment_tag_1|object|false|none|セグメントタグ1|
|segment_tag_2|object|false|none|セグメントタグ2|
|segment_tag_3|object|false|none|セグメントタグ3|
|invoice_template|[InvoiceTemplate](#schemainvoicetemplate)|true|none|請求書テンプレート|
|lines|[[AdvanceReceiptBasicLineDetail](#schemaadvancereceiptbasiclinedetail)]|true|none|明細リスト|
|amount_set_rates|[[AmountSetRate](#schemaamountsetrate)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_method_type|transfer|
|collection_method_type|cash|
|collection_method_type|bill_payable|
|collection_method_type|direct_debit|

<h2 id="tocS_AdvanceReceiptReductionLineParams">AdvanceReceiptReductionLineParams</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptreductionlineparams"></a>
<a id="schema_AdvanceReceiptReductionLineParams"></a>
<a id="tocSadvancereceiptreductionlineparams"></a>
<a id="tocsadvancereceiptreductionlineparams"></a>

```json
{
  "line_type": "basic",
  "deal_line_type_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "master_item_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "description": "売上明細の摘要",
  "quantity": 1,
  "unit_price": 100000,
  "uom_name": "個",
  "item_tag_id": 2001,
  "accounting_reporting_section_id": 67890,
  "memo_tags": [
    3001
  ],
  "is_manual_tax_entry": false,
  "tax": 10000,
  "segment_tag_1_id": 12345,
  "segment_tag_2_id": 12345,
  "segment_tag_3_id": 12345
}
```

売上通常明細パラメータ

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line_type|string|true|none|明細種別（売上は basic のみサポート）|
|deal_line_type_id|string|true|none|明細取引タイプID|
|master_item_id|string \| null|false|none|商品ID|
|description|string \| null|false|none|摘要|
|quantity|number(double)|true|none|数量|
|unit_price|number(double)|true|none|単価|
|uom_name|string \| null|false|none|単位|
|item_tag_id|integer(int64) \| null|false|none|会計品目タグID|
|accounting_reporting_section_id|integer(int64) \| null|false|none|会計計上部門ID<br><br>※ 親部門のIDは指定できません|
|memo_tags|[integer(int64)]|false|none|メモタグID|
|is_manual_tax_entry|boolean|true|none|税の手動入力を行うかどうか|
|tax|integer(int64) \| null|false|none|手動入力した税額<br><br>※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。|
|segment_tag_1_id|integer(int64) \| null|false|none|セグメントタグ1のID|
|segment_tag_2_id|integer(int64) \| null|false|none|セグメントタグ2のID|
|segment_tag_3_id|integer(int64) \| null|false|none|セグメントタグ3のID|

#### Enumerated Values

|Property|Value|
|---|---|
|line_type|basic|

<h2 id="tocS_AdvanceReceiptReductionResult">AdvanceReceiptReductionResult</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptreductionresult"></a>
<a id="schema_AdvanceReceiptReductionResult"></a>
<a id="tocSadvancereceiptreductionresult"></a>
<a id="tocsadvancereceiptreductionresult"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|取崩元の前受金ID|
|sales_id|string|true|none|登録された売上のID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_AdvanceReceiptPeriodicReductionResult">AdvanceReceiptPeriodicReductionResult</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptperiodicreductionresult"></a>
<a id="schema_AdvanceReceiptPeriodicReductionResult"></a>
<a id="tocSadvancereceiptperiodicreductionresult"></a>
<a id="tocsadvancereceiptperiodicreductionresult"></a>

```json
{
  "id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "periodic_sales_id": "01JPP4FD1CVQWCDSWA90VE1ZTM",
  "registered_at": "2025-01-15T10:30:00+09:00",
  "last_updated_at": "2025-01-16T14:45:00+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|取崩元の前受金ID|
|periodic_sales_id|string|true|none|登録された定期取崩売上ID|
|registered_at|string(date-time)|true|none|登録日時|
|last_updated_at|string(date-time)|true|none|変更日時|

<h2 id="tocS_AdvanceReceiptCollectionStatusChangeRequest">AdvanceReceiptCollectionStatusChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadvancereceiptcollectionstatuschangerequest"></a>
<a id="schema_AdvanceReceiptCollectionStatusChangeRequest"></a>
<a id="tocSadvancereceiptcollectionstatuschangerequest"></a>
<a id="tocsadvancereceiptcollectionstatuschangerequest"></a>

```json
{
  "company_id": 1,
  "collection_status": "settled"
}
```

決済ステータス変更リクエスト

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int64)|true|none|事業所ID|
|collection_status|string|true|none|決済ステータス (未決済: not_settled, 決済済み: settled, 対象外: none)|

#### Enumerated Values

|Property|Value|
|---|---|
|collection_status|not_settled|
|collection_status|settled|
|collection_status|none|
