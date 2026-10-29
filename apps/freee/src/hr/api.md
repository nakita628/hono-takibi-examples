<h1 id="freee人事労務-api">freee人事労務 API v2022-02-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


<p>freee人事労務のAPI仕様です。</p>

<hr />

<h2 id="start_guide">スタートガイド</h2>

<p>freee API開発がはじめての方は<a href="https://developer.freee.co.jp/getting-started">freee API スタートガイド</a>を参照してください。</p>

<hr />
<h2 id="specification">仕様</h2>

<h3 id="api_endpoint">APIエンドポイント</h3>

<p>https://api.freee.co.jp/hr</p>

<h3 id="about_authorize">認証について</h3>

<p>OAuth2.0を利用します。<a href="https://developer.freee.co.jp/reference/#%e8%aa%8d%e8%a8%bc" target="_blank">詳細はリファレンスの認証に関する記載を参照してください。</a></p>

<h3 id="data_format">データフォーマット</h3>

<p>リクエスト、レスポンスともにJSON形式をサポートしていますが、詳細は、API毎の説明欄（application/jsonなど）を確認してください。</p>

<h3 id="compatibility">後方互換性ありの変更</h3>

<p>freeeでは、APIを改善していくために以下のような変更は後方互換性ありとして通知なく変更を入れることがあります。アプリケーション実装者は以下を踏まえて開発を行ってください。</p>

<ul>
<li>新しいAPIリソース・エンドポイントの追加</li>
<li>既存のAPIに対して必須ではない新しいリクエストパラメータの追加</li>
<li>既存のAPIレスポンスに対する新しいプロパティの追加</li>
<li>既存のAPIレスポンスに対するプロパティの順番の入れ変え</li>
<li>keyとなっているidやcodeの長さの変更（長くする）</li>
<li>エラーメッセージの変更</li>
</ul>

<h3 id="common_response_header">共通レスポンスヘッダー</h3>

<p>すべてのAPIのレスポンスには以下のHTTPヘッダーが含まれます。</p>

<ul>
<li>
<p>X-Request-Id</p>
<ul>
<li>各リクエスト毎に発行されるID</li>
</ul>
</li>
</ul>

<h3 id="error_response">共通エラーレスポンス</h3>

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
<p>APIリクエストは1時間で10000回を上限としています。API使用ステータスはレスポンスヘッダに付与されます。</p>
<pre><code>X-Ratelimit-Limit:10000
X-Ratelimit-Remaining:9998
X-Ratelimit-Reset:2018-01-01T12:00:00.000000Z
</code></pre>

<br> 各ヘッダの意味は次のとおりです。</p>

 <table border="1">
  <tbody>
    <tr>
      <th style="padding: 10px"><strong>ヘッダ名</strong></th>
      <th style="padding: 10px"><strong>説明</strong></th>
    </tr>
    <tr><td style="padding: 10px">X-RateLimit-Limit</td><td style="padding: 10px">使用回数の上限</td></tr>
    <tr><td style="padding: 10px">X-RateLimit-Remaining</td><td style="padding: 10px">残り使用回数</td></tr>
    <tr><td style="padding: 10px">X-RateLimit-Reset</td><td style="padding: 10px">使用回数がリセットされる時刻</td></tr>
  </tbody>
</table>

<p>上記に加え、freeeは一定期間に過度のアクセスを検知した場合、APIアクセスをコントロールする場合があります。<br> その際のhttp status codeは403となります。制限がかかってから10分程度が過ぎると再度使用することができるようになります。</p>

</br>

<h3 id="api_rate_limit">プランごとの利用可能API</h3> 

<p>契約プランごとに利用可能なfreee人事労務APIはfreee人事労務のWeb版でご利用できる機能と同様です。例えば、スタンダードプラン（または旧ベーシックプラン）を契約している場合、Web版では打刻機能をご利用いただけますので、APIでもタイムレコーダー(打刻)APIが利用可能です。<a href="https://support.freee.co.jp/hc/ja/articles/203309710" target="_blank">freee人事労務のWeb版のプラン別機能比較はfreee人事労務のプラン・料金についてのヘルプを参照してください。</a></p>

<hr />

<h3 id="webhook">Webhookについて</h3>

<p>詳細は<a href="https://developer.freee.co.jp/reference/hr/webhook" target="_blank">人事労務Webhook概要</a>を参照してください。</p>

<hr />

Base URLs:

* <a href="https://api.freee.co.jp/hr">https://api.freee.co.jp/hr</a>

<a href="https://app.secure.freee.co.jp/terms-freee-api.html">Terms of service</a>
Web: <a href="https://accounts.secure.freee.co.jp/contacts?from=payroll">サポートデスクへのお問い合わせ</a> 
License: © Since 2013 freee K.K.

# Authentication

* API Key (bearer)
    - Parameter Name: **Authorization**, in: header.

<h1 id="freee人事労務-api-ログインユーザー">ログインユーザー</h1>

ログインユーザーの取得

## ログインユーザーの取得

<a id="opIdget_users_me"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/users/me`

<h2 id="">概要</h2>
<p>このリクエストの認可セッションにおけるログインユーザーの情報を返します。</p>
<p>freee人事労務では一人のログインユーザーを複数の事業所に関連付けられるため、このユーザーと関連のあるすべての事業所の情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>他のAPIのパラメータとしてcompany_idが求められる場合は、このAPIで取得したcompany_idを使用します。</li>
  <li>給与計算対象外の従業員のemployee_idとdisplay_nameは取得できません。</li>
</ul>

> Example responses

> 200 Response

```json
{
  "id": 0,
  "companies": [
    {
      "id": 0,
      "name": "string",
      "role": "string",
      "external_cid": "string",
      "employee_id": 0,
      "display_name": "string"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="ログインユーザーの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1UsersMeSerializer](#schemaapiv1usersmeserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の特別休暇">従業員の特別休暇</h1>

従業員の特別休暇の操作

## 従業員の特別休暇一覧の取得

<a id="opIdget_employees_special_holidays"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/special_holidays?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/special_holidays`

<h2 id="">概要</h2>
<p>指定した従業員に付与された特別休暇情報をリストで返します。</p>

<h3 id="従業員の特別休暇一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|
|date|query|string(date)|false|対象日|
|start_date|query|string(date)|false|対象開始日|
|end_date|query|string(date)|false|対象終了日|

> Example responses

> 200 Response

```json
{
  "employee_special_holidays": [
    {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "special_holiday_setting_id": 1,
      "name": "育休",
      "type_name": "育児休業日",
      "paid_type": "paid",
      "attendance_rate_calc_type": "in_workdays",
      "usage_day": "half",
      "valid_date_from": "1970-01-01",
      "valid_date_to": "1970-01-01",
      "days": 2,
      "used": 0.5,
      "num_days_and_hours_used": {
        "days": 0.5,
        "hours": 0
      },
      "left": 1.5,
      "num_days_and_hours_left": {
        "days": 1.5,
        "hours": 0
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の特別休暇一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="従業員の特別休暇一覧の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_special_holidays|[object]|false|none|none|
|» id|integer(int32)|false|none|特別休暇付与ID|
|» company_id|integer(int32)|false|none|事業所ID|
|» employee_id|integer(int32)|false|none|従業員ID|
|» special_holiday_setting_id|integer(int32)|false|none|特別休暇設定ID|
|» name|string|false|none|特別休暇名称|
|» type_name|string|false|none|特別休暇・休業休職種別名|
|» paid_type|string|false|none|有給・無給区分（paid: 有給、unpaid: 無休）|
|» attendance_rate_calc_type|string|false|none|出勤率計算方法（in_workdays: 出勤日数に含める、not_in_workdays: 出勤日数に含めない、not_in_total_workdays: 全労働日に含めない）|
|» usage_day|string|false|none|最小消化単位（full: 全休、half: 半休、hour: 時間休）|
|» valid_date_from|string(date)|false|none|有効期間開始日(YYYY-MM-DD)(例:2023-01-01)|
|» valid_date_to|string(date)|false|none|有効期間終了日(YYYY-MM-DD)(例:2023-01-31)|
|» days|integer(int32)|false|none|付与日数|
|» used|number(float)|false|none|使用数|
|» num_days_and_hours_used|object|false|none|使用日数・時間数|
|» » days|number(float)|false|none|日数|
|» » hours|integer(int32)|false|none|時間数|
|» left|number(float)|false|none|残数|
|» num_days_and_hours_left|object|false|none|残日数・時間数|
|» » days|number(float)|false|none|日数|
|» » hours|integer(int32)|false|none|時間数|

#### Enumerated Values

|Property|Value|
|---|---|
|» paid_type|paid|
|» paid_type|unpaid|
|» attendance_rate_calc_type|in_workdays|
|» attendance_rate_calc_type|not_in_workdays|
|» attendance_rate_calc_type|not_in_total_workdays|
|» usage_day|full|
|» usage_day|half|
|» usage_day|hour|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員">従業員</h1>

従業員の操作

## 全期間の従業員一覧の取得

<a id="opIdget_company_employees"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/companies/1/employees \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/companies/{company_id}/employees`

<h2 id="">概要</h2>
<p>指定した事業所に所属する従業員をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>退職ユーザーも含めて取得可能です。</li>
</ul>

<h3 id="全期間の従業員一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|
|company_id|path|integer|true|事業所ID|
|with_no_payroll_calculation|query|boolean|false|trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "num": "string",
    "display_name": "string",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "email": "string",
    "payroll_calculation": true,
    "closing_day": 31,
    "pay_day": 15,
    "month_of_pay_day": "next_month"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="全期間の従業員一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="全期間の従業員一覧の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiV1CompaniesEmployeeSerializer](#schemaapiv1companiesemployeeserializer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員一覧の取得

<a id="opIdget_employees"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees`

<h2 id="">概要</h2>
<p>指定した対象年月に事業所に所属する従業員をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>指定した年月に退職済みユーザーは取得できません。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>
  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>
</ul>

<h3 id="従業員一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|
|with_no_payroll_calculation|query|boolean|false|trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。|

> Example responses

> 200 Response

```json
{
  "employees": [
    {
      "id": 0,
      "company_id": 0,
      "num": "string",
      "display_name": "string",
      "base_pension_num": "string",
      "employment_insurance_reference_number": "string",
      "birth_date": "1970-01-01",
      "entry_date": "1970-01-01",
      "retire_date": "1970-01-01",
      "user_id": 0,
      "profile_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "zipcode1": "000",
        "zipcode2": "0000",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "residential_zipcode1": "000",
        "residential_zipcode2": "0000",
        "residential_prefecture_code": 4,
        "residential_address": "string",
        "residential_address_kana": "string",
        "employment_type": "string",
        "title": "string",
        "gender": "male",
        "married": true,
        "is_working_student": true,
        "widow_type": "string",
        "disability_type": "string",
        "email": "test@example.com",
        "householder_name": "山田 吾郎",
        "householder": "father"
      },
      "health_insurance_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "entried": true,
        "health_insurance_salary_calc_type": "manual",
        "health_insurance_bonus_calc_type": "manual",
        "health_insurance_qualification_required": true,
        "manual_health_insurance_amount_of_employee_salary": 8888,
        "manual_health_insurance_amount_of_employee_bonus": 7777,
        "manual_health_insurance_amount_of_company_salary": 6666.0001,
        "manual_health_insurance_amount_of_company_bonus": 5555.0001,
        "care_insurance_salary_calc_type": "manual",
        "care_insurance_bonus_calc_type": "manual",
        "manual_care_insurance_amount_of_employee_salary": 4444,
        "manual_care_insurance_amount_of_employee_bonus": 3333,
        "manual_care_insurance_amount_of_company_salary": 2222.0001,
        "manual_care_insurance_amount_of_company_bonus": 1111.0001,
        "child_support_fund_salary_calc_type": "manual",
        "child_support_fund_bonus_calc_type": "manual",
        "manual_child_support_fund_amount_of_employee_salary": 4000,
        "manual_child_support_fund_amount_of_employee_bonus": 3000,
        "manual_child_support_fund_amount_of_company_salary": 2000.0001,
        "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
        "reference_num": "string",
        "standard_monthly_remuneration": 0
      },
      "welfare_pension_insurance_rule": {
        "id": 0,
        "child_allowance_contribution_bonus_calc_type": "manual",
        "child_allowance_contribution_salary_calc_type": "manual",
        "company_id": 0,
        "employee_id": 0,
        "entried": true,
        "manual_child_allowance_contribution_amount_bonus": 111.0001,
        "manual_child_allowance_contribution_amount_salary": 222.0001,
        "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
        "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
        "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
        "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
        "reference_num": "string",
        "standard_monthly_remuneration": 0,
        "welfare_pension_insurance_bonus_calc_type": "manual",
        "welfare_pension_insurance_salary_calc_type": "manual"
      },
      "dependent_rules": [
        {
          "id": 0,
          "company_id": 0,
          "employee_id": 0,
          "last_name": "string",
          "first_name": "string",
          "last_name_kana": "string",
          "first_name_kana": "string",
          "gender": "unselected",
          "relationship": "string",
          "birth_date": "1970-01-01",
          "residence_type": "string",
          "zipcode1": "string",
          "zipcode2": "string",
          "prefecture_code": 4,
          "address": "string",
          "address_kana": "string",
          "base_pension_num": "string",
          "income": 0,
          "annual_revenue": 0,
          "disability_type": "string",
          "occupation": "string",
          "annual_remittance_amount": 0,
          "employment_insurance_receive_status": "unselected",
          "employment_insurance_receives_from": "1970-01-01",
          "health_insurance_qualification_required": true,
          "phone_type": "unselected",
          "phone1": "000",
          "phone2": "0000",
          "phone3": "0000",
          "social_insurance_and_tax_dependent": "string",
          "social_insurance_dependent_acquisition_date": "1970-01-01",
          "social_insurance_dependent_acquisition_reason": "",
          "social_insurance_other_dependent_acquisition_reason": "string",
          "social_insurance_dependent_disqualification_date": "1970-01-01",
          "social_insurance_dependent_disqualification_reason": "",
          "social_insurance_other_dependent_disqualification_reason": "string",
          "tax_dependent_acquisition_date": "1970-01-01",
          "tax_dependent_acquisition_reason": "",
          "tax_other_dependent_acquisition_reason": "string",
          "tax_dependent_disqualification_date": "1970-01-01",
          "tax_dependent_disqualification_reason": "",
          "tax_other_dependent_disqualification_reason": "string",
          "non_resident_dependents_reason": "none"
        }
      ],
      "bank_account_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "bank_name": "string",
        "bank_name_kana": "string",
        "bank_code": "string",
        "branch_name": "string",
        "branch_name_kana": "string",
        "branch_code": "string",
        "account_number": "string",
        "account_name": "string",
        "account_type": "string"
      },
      "basic_pay_rule": {
        "id": 1,
        "company_id": 1,
        "employee_id": 1,
        "pay_calc_type": "monthly",
        "pay_amount": 0
      },
      "payroll_calculation": true,
      "company_reference_date_rule_name": "当月締め翌月払い"
    }
  ],
  "total_count": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesIndexSerializer](#schemaapiv1employeesindexserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の作成

<a id="opIdcreate_employee"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "employee": {
      "num": "A-001",
      "working_hours_system_name": "固定",
      "company_reference_date_rule_name": "15日締め（当月25日払い）",
      "last_name": "山田",
      "first_name": "太郎",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "タロウ",
      "birth_date": "2000-01-01",
      "entry_date": "2021-04-01",
      "pay_calc_type": "monthly",
      "pay_amount": 220000,
      "gender": "male",
      "married": true,
      "no_payroll_calculation": true
    }
  }'
```

`POST /api/v1/employees`

<h2 id="">概要</h2>
<p>従業員を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "employee": {
    "num": "A-001",
    "working_hours_system_name": "固定",
    "company_reference_date_rule_name": "15日締め（当月25日払い）",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "2000-01-01",
    "entry_date": "2021-04-01",
    "pay_calc_type": "monthly",
    "pay_amount": 220000,
    "gender": "male",
    "married": true,
    "no_payroll_calculation": true
  }
}
```

<h3 id="従業員の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1EmployeesController.create_body](#schemaapiv1employeescontroller.create_body)|false|none|
|» company_id|body|integer(int32)|true|作成対象事業所ID（必須）|
|» employee|body|[ApiV1EmployeeCreateRequestSerializer](#schemaapiv1employeecreaterequestserializer)|true|none|

> Example responses

> 201 Response

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1EmployeesController.create_response](#schemaapiv1employeescontroller.create_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の取得

<a id="opIdget_employee"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{id}`

<h2 id="">概要</h2>
<p>指定したIDの従業員を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>指定した年月に退職済みユーザーは取得できません。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>
  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>
</ul>

<h3 id="従業員の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesController.show_response](#schemaapiv1employeescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の更新

<a id="opIdupdate_employee"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee": {
      "num": "A-001",
      "display_name": "山田 太郎",
      "base_pension_num": "1111111111",
      "employment_insurance_reference_number": "11111111111",
      "birth_date": "2000-01-01",
      "entry_date": "2021-04-01",
      "retire_date": "2022-03-31",
      "company_reference_date_rule_name": "当月締め翌月払い"
    }
  }'
```

`PUT /api/v1/employees/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee": {
    "num": "A-001",
    "display_name": "山田 太郎",
    "base_pension_num": "1111111111",
    "employment_insurance_reference_number": "11111111111",
    "birth_date": "2000-01-01",
    "entry_date": "2021-04-01",
    "retire_date": "2022-03-31",
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

<h3 id="従業員の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesController.update_body](#schemaapiv1employeescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|false|更新対象年<br>- 給与計算対象の従業員情報の場合は必須になります。|
|» month|body|integer(int32)|false|更新対象月<br>- 給与計算対象の従業員情報の場合は必須になります。<br>- 締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>- 翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。|
|» employee|body|[ApiV1EmployeeUpdateRequestSerializer](#schemaapiv1employeeupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesController.update_response](#schemaapiv1employeescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の削除

<a id="opIddestroy_employee"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/employees/{id}`

<h2 id="">概要</h2>
<p>指定したIDの従業員を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|従業員ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の姓名・住所など">従業員の姓名・住所など</h1>

従業員の姓名・住所などの操作

## 従業員の姓名・住所などの取得

<a id="opIdget_employee_profile_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/profile_rule?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/profile_rule`

<h2 id="">概要</h2>
<p>指定した従業員・日付の姓名などの情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、給与計算対象外の従業員には非対応です。employee_idに給与計算対象外の従業員IDを指定した場合、本APIを利用できません。</li>
</ul>

<h3 id="従業員の姓名・住所などの取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_profile_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "last_name": "string",
    "first_name": "string",
    "last_name_kana": "string",
    "first_name_kana": "string",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "string",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "string",
    "disability_type": "string",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の姓名・住所などの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesProfileRulesController.show_response](#schemaapiv1employeesprofilerulescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の姓名・住所などの更新

<a id="opIdupdate_employee_profile_rule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/profile_rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_profile_rule": {
      "last_name": "山田",
      "first_name": "太郎",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "タロウ",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "board-member",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "na",
      "disability_type": "na",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/profile_rule`

<h2 id="">概要</h2>
<p>指定した従業員の姓名・住所などを更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、給与計算対象外の従業員には非対応です。employee_idに給与計算対象外の従業員IDを指定した場合、本APIを利用できません。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_profile_rule": {
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "board-member",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "na",
    "disability_type": "na",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

<h3 id="従業員の姓名・住所などの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesProfileRulesController.update_body](#schemaapiv1employeesprofilerulescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_profile_rule|body|[ApiV1EmployeesProfileRuleUpdateRequestSerializer](#schemaapiv1employeesprofileruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_profile_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "last_name": "string",
    "first_name": "string",
    "last_name_kana": "string",
    "first_name_kana": "string",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "string",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "string",
    "disability_type": "string",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の姓名・住所などの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesProfileRulesController.update_response](#schemaapiv1employeesprofilerulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の健康保険">従業員の健康保険</h1>

従業員の健康保険の操作

## 従業員の健康保険の取得

<a id="opIdget_employee_health_insurance_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/health_insurance_rule?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/health_insurance_rule`

<h2 id="">概要</h2>
<p>指定した従業員・日付の健康保険情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>
</ul>

<h3 id="従業員の健康保険の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_health_insurance_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "health_insurance_qualification_required": true,
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "string",
    "standard_monthly_remuneration": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の健康保険の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesHealthInsuranceRulesController.show_response](#schemaapiv1employeeshealthinsurancerulescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の健康保険の更新

<a id="opIdupdate_employee_health_insurance_rule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/health_insurance_rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_health_insurance_rule": {
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "0000000000",
      "standard_monthly_remuneration": 58000,
      "health_insurance_qualification_required": true
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/health_insurance_rule`

<h2 id="">概要</h2>
<p>指定した従業員の健康保険情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>
  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>
  <li>事業所が定額制の健康保険組合に加入している場合、保険料の計算方法と保険料の更新はできません。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_health_insurance_rule": {
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "0000000000",
    "standard_monthly_remuneration": 58000,
    "health_insurance_qualification_required": true
  }
}
```

<h3 id="従業員の健康保険の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesHealthInsuranceRulesController.update_body](#schemaapiv1employeeshealthinsurancerulescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_health_insurance_rule|body|[ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer](#schemaapiv1employeeshealthinsuranceruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_health_insurance_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "health_insurance_qualification_required": true,
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "string",
    "standard_monthly_remuneration": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の健康保険の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesHealthInsuranceRulesController.update_response](#schemaapiv1employeeshealthinsurancerulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の厚生年金保険">従業員の厚生年金保険</h1>

従業員の厚生年金保険の操作

## 従業員の厚生年金保険の取得

<a id="opIdget_employee_welfare_pension_insurance_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/welfare_pension_insurance_rule?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/welfare_pension_insurance_rule`

<h2 id="">概要</h2>
<p>指定した従業員・日付の厚生年金保険情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の厚生年金保険料の計算方法が自動計算の場合、給与計算時の厚生年金保険料の直接指定金額はnullが返されます)</li>
</ul>

<h3 id="従業員の厚生年金保険の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_welfare_pension_insurance_rule": {
    "id": 0,
    "child_allowance_contribution_bonus_calc_type": "manual",
    "child_allowance_contribution_salary_calc_type": "manual",
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "manual_child_allowance_contribution_amount_bonus": 111.0001,
    "manual_child_allowance_contribution_amount_salary": 222.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
    "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
    "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
    "reference_num": "string",
    "standard_monthly_remuneration": 0,
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "welfare_pension_insurance_salary_calc_type": "manual"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の厚生年金保険の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesWelfarePensionInsuranceRulesController.show_response](#schemaapiv1employeeswelfarepensioninsurancerulescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の厚生年金保険の更新

<a id="opIdupdate_employee_welfare_pension_insurance_rule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/welfare_pension_insurance_rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_welfare_pension_insurance_rule": {
      "entried": true,
      "welfare_pension_insurance_salary_calc_type": "manual",
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "manual_welfare_pension_insurance_amount_of_employee_salary": 1111,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 2222,
      "manual_welfare_pension_insurance_amount_of_company_salary": 3333.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 4444.0001,
      "child_allowance_contribution_salary_calc_type": "manual",
      "child_allowance_contribution_bonus_calc_type": "manual",
      "manual_child_allowance_contribution_amount_salary": 5555.0001,
      "manual_child_allowance_contribution_amount_bonus": 6666.0001,
      "reference_num": "0000000000",
      "standard_monthly_remuneration": 88000
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/welfare_pension_insurance_rule`

<h2 id="">概要</h2>
<p>指定した従業員の厚生年金保険情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の厚生年金保険料の計算方法が自動計算の場合、給与計算時の厚生年金保険料の直接指定金額はnullが返されます)</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_welfare_pension_insurance_rule": {
    "entried": true,
    "welfare_pension_insurance_salary_calc_type": "manual",
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "manual_welfare_pension_insurance_amount_of_employee_salary": 1111,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 2222,
    "manual_welfare_pension_insurance_amount_of_company_salary": 3333.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 4444.0001,
    "child_allowance_contribution_salary_calc_type": "manual",
    "child_allowance_contribution_bonus_calc_type": "manual",
    "manual_child_allowance_contribution_amount_salary": 5555.0001,
    "manual_child_allowance_contribution_amount_bonus": 6666.0001,
    "reference_num": "0000000000",
    "standard_monthly_remuneration": 88000
  }
}
```

<h3 id="従業員の厚生年金保険の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesWelfarePensionInsuranceRulesController.update_body](#schemaapiv1employeeswelfarepensioninsurancerulescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_welfare_pension_insurance_rule|body|[ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer](#schemaapiv1employeeswelfarepensioninsuranceruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_welfare_pension_insurance_rule": {
    "id": 0,
    "child_allowance_contribution_bonus_calc_type": "manual",
    "child_allowance_contribution_salary_calc_type": "manual",
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "manual_child_allowance_contribution_amount_bonus": 111.0001,
    "manual_child_allowance_contribution_amount_salary": 222.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
    "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
    "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
    "reference_num": "string",
    "standard_monthly_remuneration": 0,
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "welfare_pension_insurance_salary_calc_type": "manual"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の厚生年金保険の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesWelfarePensionInsuranceRulesController.update_response](#schemaapiv1employeeswelfarepensioninsurancerulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の家族情報">従業員の家族情報</h1>

従業員の家族情報の操作

## 従業員の家族情報の取得

<a id="opIdget_employee_dependent_rules"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/dependent_rules?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/dependent_rules`

<h2 id="">概要</h2>
<p>指定した従業員・日付の家族情報を返します。</p>

<h3 id="従業員の家族情報の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_dependent_rules": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "gender": "unselected",
      "relationship": "string",
      "birth_date": "1970-01-01",
      "residence_type": "string",
      "zipcode1": "string",
      "zipcode2": "string",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "string",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "string",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "unselected",
      "employment_insurance_receives_from": "1970-01-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "social_insurance_and_tax_dependent": "string",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の家族情報の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesDependentRulesController.index_response](#schemaapiv1employeesdependentrulescontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の家族情報の更新

<a id="opIdbulk_update_employee_dependent_rules"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/dependent_rules/bulk_update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_dependent_rules": [
      {
        "id": 1,
        "last_name": "山田",
        "first_name": "花子",
        "last_name_kana": "ヤマダ",
        "first_name_kana": "ハナコ",
        "gender": "male",
        "relationship": "spouse",
        "birth_date": "1999-01-01",
        "residence_type": "live_in",
        "zipcode1": "000",
        "zipcode2": "0000",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "1234567890",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "na",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "receiving_employment_insurance",
        "employment_insurance_receives_from": "2021-04-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "destroy": false,
        "social_insurance_and_tax_dependent": "social_insurance_and_tax",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ]
  }'
```

`PUT /api/v1/employees/{employee_id}/dependent_rules/bulk_update`

<h2 id="">概要</h2>
<p>指定した従業員の家族情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>idがない場合は新規作成、destroyがtrueの場合は削除になります。</li>
  <li>residence_type=live_in: 同居の場合、以下のパラメータに指定した値はWebに反映されません。</li>
  <ul>
    <li>zipcode1</li>
    <li>zipcode2</li>
    <li>prefecture_code</li>
    <li>address</li>
    <li>address_kana</li>
    <li>annual_remittance_amount</li>
  </ul>
  <li>residence_type=non_resident: 別居(国外)の場合、以下のパラメータに指定した値はWebに反映されません。</li>
  <ul>
    <li>prefecture_code</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_dependent_rules": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "gender": "male",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "residence_type": "live_in",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "1234567890",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "na",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "receiving_employment_insurance",
      "employment_insurance_receives_from": "2021-04-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "destroy": false,
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
    }
  ]
}
```

<h3 id="従業員の家族情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesDependentRulesController.bulk_update_body](#schemaapiv1employeesdependentrulescontroller.bulk_update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_dependent_rules|body|[[ApiV1EmployeesDependentRuleUpdateRequestSerializer](#schemaapiv1employeesdependentruleupdaterequestserializer)]|true|家族情報ルール|

> Example responses

> 200 Response

```json
{
  "employee_dependent_rules": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "gender": "unselected",
      "relationship": "string",
      "birth_date": "1970-01-01",
      "residence_type": "string",
      "zipcode1": "string",
      "zipcode2": "string",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "string",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "string",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "unselected",
      "employment_insurance_receives_from": "1970-01-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "social_insurance_and_tax_dependent": "string",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の家族情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesDependentRulesController.bulk_update_response](#schemaapiv1employeesdependentrulescontroller.bulk_update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の銀行口座">従業員の銀行口座</h1>

従業員の銀行口座の操作

## 従業員の銀行口座の取得

<a id="opIdget_employee_bank_account_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/bank_account_rule?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/bank_account_rule`

<h2 id="">概要</h2>
<p>指定した従業員・日付の銀行口座情報を返します。</p>

<h3 id="従業員の銀行口座の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_bank_account_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "string",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "string",
    "account_number": "string",
    "account_name": "string",
    "account_type": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の銀行口座の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesBankAccountRulesController.show_response](#schemaapiv1employeesbankaccountrulescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の銀行口座の更新

<a id="opIdupdate_employee_bank_account_rule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/bank_account_rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_bank_account_rule": {
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "0000",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "000",
      "account_number": "0000000",
      "account_name": "string",
      "account_type": "ordinary"
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/bank_account_rule`

<h2 id="">概要</h2>
<p>指定した従業員の銀行口座1の情報を更新します。</p>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_bank_account_rule": {
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "0000",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "000",
    "account_number": "0000000",
    "account_name": "string",
    "account_type": "ordinary"
  }
}
```

<h3 id="従業員の銀行口座の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesBankAccountRulesController.update_body](#schemaapiv1employeesbankaccountrulescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_bank_account_rule|body|[ApiV1EmployeesBankAccountRuleUpdateRequestSerializer](#schemaapiv1employeesbankaccountruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_bank_account_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "string",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "string",
    "account_number": "string",
    "account_name": "string",
    "account_type": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の銀行口座の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesBankAccountRulesController.update_response](#schemaapiv1employeesbankaccountrulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員の基本給">従業員の基本給</h1>

従業員の基本給の操作

## 従業員の基本給の取得

<a id="opIdget_employee_basic_pay_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/basic_pay_rule?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/basic_pay_rule`

<h2 id="">概要</h2>
<p>指定した従業員・日付の基本給情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の基本給の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_basic_pay_rule": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "pay_calc_type": "monthly",
    "pay_amount": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の基本給の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesBasicPayRulesController.show_response](#schemaapiv1employeesbasicpayrulescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の基本給の更新

<a id="opIdupdate_employee_basic_pay_rule"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/basic_pay_rule \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2021,
    "month": 1,
    "employee_basic_pay_rule": {
      "pay_calc_type": "monthly",
      "pay_amount": 220000
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/basic_pay_rule`

<h2 id="">概要</h2>
<p>指定した従業員の基本給情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_basic_pay_rule": {
    "pay_calc_type": "monthly",
    "pay_amount": 220000
  }
}
```

<h3 id="従業員の基本給の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesBasicPayRulesController.update_body](#schemaapiv1employeesbasicpayrulescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» year|body|integer(int32)|true|更新対象年（必須）|
|» month|body|integer(int32)|true|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|» employee_basic_pay_rule|body|[ApiV1EmployeesBasicPayRuleUpdateRequestSerializer](#schemaapiv1employeesbasicpayruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_basic_pay_rule": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "pay_calc_type": "monthly",
    "pay_amount": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の基本給の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesBasicPayRulesController.update_response](#schemaapiv1employeesbasicpayrulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員のカスタム項目">従業員のカスタム項目</h1>

従業員のカスタム項目の操作

## 従業員のカスタム項目の取得

<a id="opIdget_employee_profile_custom_fields_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/profile_custom_fields?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/profile_custom_fields`

<h2 id="">概要</h2>
<p>指定した従業員・日付のカスタム項目情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>指定年月に在籍していない従業員および給与計算対象外の従業員ではデータが存在しないため、空の配列が返ります。</li>
</ul>

<h3 id="従業員のカスタム項目の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "profile_custom_field_groups": [
    {
      "id": 1,
      "name": "資格取得結果",
      "profile_custom_field_rules": [
        {
          "id": 1,
          "field_type": "file",
          "name": "証明書ファイル",
          "value": "null",
          "file_name": "証明書ファイル.jpeg"
        }
      ]
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員のカスタム項目の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesProfileCustomFieldRulesController.index_response](#schemaapiv1employeesprofilecustomfieldrulescontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-勤怠">勤怠</h1>

勤怠の操作

## 勤怠の取得

<a id="opIdget_employee_work_record"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/work_records/1970-01-01?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/work_records/{date}`

<h2 id="">概要</h2>
<p>指定した従業員・日付の勤怠情報を返します。</p>

<h3 id="勤怠の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|
|date|path|string(date)|true|従業員情報を取得したい年月日(YYYY-MM-DD)(例:2018-08-01)|

> Example responses

> 200 Response

```json
{
  "break_records": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "clock_in_at": "1970-01-01T00:00:00Z",
  "clock_out_at": "1970-01-01T00:00:00Z",
  "date": "1970-01-01T00:00:00Z",
  "day_pattern": "normal_day",
  "schedule_pattern": "",
  "early_leaving_mins": 0,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "is_absence": false,
  "is_editable": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
  "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holidays": [
    {
      "type": "half",
      "mins": 240,
      "days": 0.5
    }
  ],
  "holidays": [
    {
      "holiday_type": "full",
      "mins": 1,
      "time_ranges": [
        {
          "start_at": "1970-01-01T00:00:00Z",
          "end_at": "1970-01-01T00:00:00Z"
        }
      ],
      "holiday_category": "annual_paid_holiday"
    }
  ],
  "special_holiday": 0,
  "special_holiday_setting_id": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true,
  "use_half_compensatory_holiday": false,
  "total_overtime_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "not_auto_calc_work_time": false,
  "total_excess_statutory_work_mins": 0,
  "total_latenight_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_latenight_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_latenight_overtime_except_normal_work_mins": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤怠の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ApiV1EmployeesWorkRecordSerializer](#schemaapiv1employeesworkrecordserializer)|false|none|none|
|*anyOf*|[LegacyApiV1EmployeesWorkRecordSerializer](#schemalegacyapiv1employeesworkrecordserializer)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠の更新

<a id="opIdupdate_employee_work_record"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/work_records/1970-01-01 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "break_records": [
      {
        "clock_in_at": "2018-07-31 08:00:00",
        "clock_out_at": "2018-07-31 08:00:00"
      }
    ],
    "work_record_segments": [
      {
        "clock_in_at": "2018-07-31 08:00:00",
        "clock_out_at": "2018-07-31 08:00:00"
      }
    ],
    "clock_in_at": "2018-07-31 08:00:00",
    "clock_out_at": "2018-07-31 08:00:00",
    "day_pattern": "normal_day",
    "early_leaving_mins": 0,
    "is_absence": true,
    "lateness_mins": 0,
    "normal_work_clock_in_at": "2018-07-31 08:00:00",
    "normal_work_clock_out_at": "2018-07-31 08:00:00",
    "normal_work_mins": 0,
    "note": "string",
    "paid_holidays": [
      {
        "type": "half",
        "mins": 0
      }
    ],
    "holidays": [
      {
        "holiday_type": "full",
        "mins": 1,
        "time_ranges": [
          {
            "start_at": "2018-07-31 08:00:00",
            "end_at": "2018-07-31 09:00:00"
          }
        ],
        "holiday_category": "annual_paid_holiday"
      }
    ],
    "special_holiday": "1.0",
    "special_holiday_setting_id": 1,
    "half_special_holiday_mins": 0,
    "hourly_special_holiday_mins": 0,
    "use_attendance_deduction": true,
    "use_default_work_pattern": true
  }'
```

`PUT /api/v1/employees/{employee_id}/work_records/{date}`

<h2 id="">概要</h2>
<p>指定した従業員の勤怠情報を更新します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>振替出勤・振替休日・代休出勤・代休の登録はAPIでは行うことができません。</li>
</ul>

<h2 id="_2">examples</h2>
<ul>
  <li>出勤日について出退勤時刻および休憩時間を更新する場合は以下のようなパラメータをリクエストします。
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2017-05-25 12:00:00",
            "clock_out_at": "2017-05-25 13:00:00"
          }
        ],
        "work_record_segments": [
          {
            "clock_in_at": "2017-05-25 09:10:00",
            "clock_out_at": "2017-05-25 18:20:00"
          }
        ]
      }
      </code>
    </pre>
  </li>

  <li>勤務パターンや既定の所定労働時間を変更する場合は use_default_work_pattern に false を指定するとともに、各設定を上書きするパラメータをリクエストします。
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2017-05-25 12:00:00",
            "clock_out_at": "2017-05-25 13:00:00"
          }
        ],
        "work_record_segments": [
          {
            "clock_in_at": "2017-05-25 09:10:00",
            "clock_out_at": "2017-05-25 18:20:00"
          }
        ],
        "day_pattern": "normal_day",
        "normal_work_clock_in_at": "2017-05-25 11:00:00",
        "normal_work_clock_out_at": "2017-12-20 20:00:00",
        "normal_work_mins": 0,
        "use_default_work_pattern": false
      }
      </code>
    </pre>
  </li>

  <li>有給取得時の連携について半休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2023-12-22 12:00:00",
            "clock_out_at": "2023-12-22 13:00:00"
          }
        ],
        "work_record_segments": [
          {
            "clock_in_at": "2017-05-25 09:10:00",
            "clock_out_at": "2017-05-25 18:20:00"
          }
        ],
        "paid_holidays": [
          {
            "type": "half"
            "mins": 240
          }
        ]
      }
      </code>
    </pre>
  </li>

  <li>有給取得時の連携について午前休または午後休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2023-12-22 16:00:00",
            "clock_out_at": "2023-12-22 16:30:00"
          }
        ],
        "clock_in_at": "2023-12-22 14:00:00",
        "clock_out_at": "2023-12-22 18:00:00",
        "paid_holidays": [
          {
            "type": "morning_off"
          }
        ]
      }
      </code>
    </pre>
  </li>

  <li>有給取得時の連携について半日単位の年次有給休暇と時間単位の年次有給休暇を同日に取得する場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2023-12-22 16:00:00",
            "clock_out_at": "2023-12-22 16:30:00"
          }
        ],
        "clock_in_at": "2023-12-22 14:00:00",
        "clock_out_at": "2023-12-22 18:00:00",
        "paid_holidays": [
          {
            "type": "half",
            "mins": 240
          },
          {
            "type": "hourly",
            "mins": 120
          },
        ]
      }
      </code>
    </pre>
  </li>

  <li>特別休暇取得時の連携について全休の場合は以下の要素を指定することで API での勤怠をつけることができます。
    <ul>
      <li>special_holiday (全休の場合1.0を指定します)</li>
      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>
    </ul>
    <pre>
      <code>
      {
        "company_id": 1,
        "special_holiday": 1.0
        "special_holiday_setting_id": 1
      }
      </code>
    </pre>
  </li>

  <li>特別休暇取得時の連携について時間休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。
    <ul>
      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>
      <li>hourly_special_holiday_mins (時間休により計上される所定労働時間を分で指定します)</li>
    </ul>
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2023-12-22 12:00:00",
            "clock_out_at": "2023-12-22 13:00:00"
          }
        ],
        "work_record_segments": [
          {
            "clock_in_at": "2017-05-25 09:10:00",
            "clock_out_at": "2017-05-25 18:20:00"
          }
        ],
        "special_holiday_setting_id": 1,
        "hourly_special_holiday_mins": 120
      }
      </code>
    </pre>
  </li>

  <li>特別休暇取得時の連携について午前休または午後休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。
    <ul>
      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>
      <li>half_holiday_type (morning_off または afternoon_off を指定します)</li>
    </ul>
    <pre>
      <code>
      {
        "company_id": 1,
        "break_records": [
          {
            "clock_in_at": "2023-12-22 12:00:00",
            "clock_out_at": "2023-12-22 12:30:00"
          }
        ],
        "clock_in_at": "2023-12-22 09:00:00",
        "clock_out_at": "2023-12-22 13:00:00",
        "special_holiday_setting_id": 1,
        "half_holiday_type": "afternoon_off"
      }
      </code>
    </pre>
  </li>

  <li>欠勤を付ける場合は company_idとis_absence 以外のパラメータは必要ありません。
    <pre>
      <code>
      {
        "company_id": 1,
        "is_absence": true
      }
      </code>
    </pre>
  </li>

</ul>

> Body parameter

```json
{
  "company_id": 1,
  "break_records": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "clock_in_at": "2018-07-31 08:00:00",
  "clock_out_at": "2018-07-31 08:00:00",
  "day_pattern": "normal_day",
  "early_leaving_mins": 0,
  "is_absence": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "2018-07-31 08:00:00",
  "normal_work_clock_out_at": "2018-07-31 08:00:00",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holidays": [
    {
      "type": "half",
      "mins": 0
    }
  ],
  "holidays": [
    {
      "holiday_type": "full",
      "mins": 1,
      "time_ranges": [
        {
          "start_at": "2018-07-31 08:00:00",
          "end_at": "2018-07-31 09:00:00"
        }
      ],
      "holiday_category": "annual_paid_holiday"
    }
  ],
  "special_holiday": "1.0",
  "special_holiday_setting_id": 1,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true
}
```

<h3 id="勤怠の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|date|path|string(date)|true|更新対象年月日(YYYY-MM-DD)(例:2018-08-01)|
|body|body|[ApiV1EmployeesWorkRecordsController.update_body](#schemaapiv1employeesworkrecordscontroller.update_body) \| [LegacyApiV1EmployeesWorkRecordsController.update_body](#schemalegacyapiv1employeesworkrecordscontroller.update_body)|false|none|
|» *anyOf*|body|[ApiV1EmployeesWorkRecordsController.update_body](#schemaapiv1employeesworkrecordscontroller.update_body)|false|none|
|» *anyOf*|body|[LegacyApiV1EmployeesWorkRecordsController.update_body](#schemalegacyapiv1employeesworkrecordscontroller.update_body)|false|none|

> Example responses

> 200 Response

```json
{
  "break_records": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "clock_in_at": "1970-01-01T00:00:00Z",
  "clock_out_at": "1970-01-01T00:00:00Z",
  "date": "1970-01-01T00:00:00Z",
  "day_pattern": "normal_day",
  "schedule_pattern": "",
  "early_leaving_mins": 0,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "is_absence": false,
  "is_editable": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
  "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holidays": [
    {
      "type": "half",
      "mins": 240,
      "days": 0.5
    }
  ],
  "holidays": [
    {
      "holiday_type": "full",
      "mins": 1,
      "time_ranges": [
        {
          "start_at": "1970-01-01T00:00:00Z",
          "end_at": "1970-01-01T00:00:00Z"
        }
      ],
      "holiday_category": "annual_paid_holiday"
    }
  ],
  "special_holiday": 0,
  "special_holiday_setting_id": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true,
  "use_half_compensatory_holiday": false,
  "total_overtime_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "not_auto_calc_work_time": false,
  "total_excess_statutory_work_mins": 0,
  "total_latenight_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_latenight_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_latenight_overtime_except_normal_work_mins": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesWorkRecordSerializer](#schemaapiv1employeesworkrecordserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠の削除

<a id="opIddestroy_employee_work_record"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/work_records/1970-01-01?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/employees/{employee_id}/work_records/{date}`

<h2 id="">概要</h2>
<p>指定した従業員の勤怠情報を削除します。</p>

<h3 id="勤怠の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|date|path|string(date)|true|削除対象年月日(YYYY-MM-DD)(例:2018-08-01)|
|company_id|query|integer(int32)|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-勤怠情報サマリ">勤怠情報サマリ</h1>

勤怠情報の月次サマリの操作

## 勤怠情報月次サマリの取得

<a id="opIdget_employee_work_record_summary"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/work_record_summaries/2021/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/work_record_summaries/{year}/{month}`

<h2 id="">概要</h2>
<p>指定した従業員、月の勤怠情報のサマリを返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>work_recordsオプションにtrueを指定することで、明細となる日次の勤怠情報もあわせて返却します。</li>
</ul>

<h3 id="勤怠情報月次サマリの取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|work_records|query|boolean|false|サマリ情報に日次の勤怠情報を含める(true/false)(デフォルト: false)|
|employee_id|path|integer|true|従業員ID|
|year|path|integer|true|従業員情報を取得したい年|
|month|path|integer|true|従業員情報を取得したい月|

> Example responses

> 200 Response

```json
{
  "year": 0,
  "month": 1,
  "start_date": "1970-01-01",
  "end_date": "1970-01-01",
  "work_days": 0,
  "total_work_mins": 0,
  "total_normal_work_mins": 0,
  "total_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_overtime_within_normal_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "num_absences": 0,
  "num_paid_holidays": 0,
  "num_paid_holidays_and_hours": {
    "days": 0,
    "hours": 0
  },
  "num_paid_holidays_left": 0,
  "num_paid_holidays_and_hours_left": {
    "days": 0,
    "hours": 0
  },
  "num_substitute_holidays_used": 0,
  "num_compensatory_holidays_used": 0,
  "num_special_holidays_used": 0,
  "num_special_holidays_and_hours_used": {
    "days": 0,
    "hours": 0
  },
  "total_lateness_and_early_leaving_mins": 0,
  "multi_hourly_wages": [
    {
      "name": "string",
      "total_normal_time_mins": 0
    }
  ],
  "work_records": [
    {
      "break_records": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "work_record_segments": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z",
      "date": "1970-01-01T00:00:00Z",
      "day_pattern": "normal_day",
      "schedule_pattern": "",
      "early_leaving_mins": 0,
      "half_special_holiday_mins": 0,
      "hourly_special_holiday_mins": 0,
      "is_absence": false,
      "is_editable": true,
      "lateness_mins": 0,
      "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
      "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
      "normal_work_mins": 0,
      "note": "string",
      "paid_holidays": [
        {
          "type": "half",
          "mins": 240,
          "days": 0.5
        }
      ],
      "holidays": [
        {
          "holiday_type": "full",
          "mins": 1,
          "time_ranges": [
            {
              "start_at": "1970-01-01T00:00:00Z",
              "end_at": "1970-01-01T00:00:00Z"
            }
          ],
          "holiday_category": "annual_paid_holiday"
        }
      ],
      "special_holiday": 0,
      "special_holiday_setting_id": 0,
      "use_attendance_deduction": true,
      "use_default_work_pattern": true,
      "use_half_compensatory_holiday": false,
      "total_overtime_work_mins": 0,
      "total_prescribed_holiday_work_mins": 0,
      "total_holiday_work_mins": 0,
      "total_latenight_work_mins": 0,
      "not_auto_calc_work_time": false,
      "total_excess_statutory_work_mins": 0,
      "total_latenight_excess_statutory_work_mins": 0,
      "total_overtime_within_statutory_work_mins": 0,
      "total_latenight_overtime_within_statutory_work_mins": 0,
      "total_overtime_except_normal_work_mins": 0,
      "total_latenight_overtime_except_normal_work_mins": 0
    }
  ],
  "total_shortage_work_mins": 0,
  "total_deemed_paid_excess_statutory_work_mins": 0,
  "total_deemed_paid_overtime_within_statutory_work_mins": 0,
  "total_deemed_paid_overtime_except_normal_work_mins": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠情報月次サマリの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesWorkRecordSummarySerializer](#schemaapiv1employeesworkrecordsummaryserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠情報月次サマリの更新

<a id="opIdupdate_employee_work_record_summary"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/work_record_summaries/2021/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "work_days": 0,
    "work_days_on_weekdays": 0,
    "work_days_on_prescribed_holidays": 0,
    "work_days_on_legal_holidays": 0,
    "total_work_mins": 0,
    "total_normal_work_mins": 0,
    "total_excess_statutory_work_mins": 0,
    "total_overtime_within_statutory_work_mins": 0,
    "total_holiday_work_mins": 0,
    "total_latenight_work_mins": 0,
    "total_actual_excess_statutory_work_mins": 0,
    "total_actual_overtime_within_statutory_work_mins": 0,
    "total_overtime_work_mins": 0,
    "total_overtime_excess_statutory_work_mins": 0,
    "total_prescribed_holiday_work_mins": 0,
    "num_absences": 0,
    "num_absences_for_deduction": 0,
    "total_lateness_mins": 0,
    "total_lateness_mins_for_deduction": 0,
    "total_early_leaving_mins": 0,
    "total_early_leaving_mins_for_deduction": 0,
    "num_paid_holidays": 0,
    "total_shortage_work_mins": 0,
    "total_deemed_paid_excess_statutory_work_mins": 0,
    "total_deemed_paid_overtime_within_statutory_work_mins": 0,
    "total_deemed_paid_overtime_except_normal_work_mins": 0
  }'
```

`PUT /api/v1/employees/{employee_id}/work_record_summaries/{year}/{month}`

<h2 id="">概要</h2>
<p>指定した従業員、月の勤怠情報のサマリを更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>日毎の勤怠の更新はこのAPIではできません。日毎の勤怠の操作には勤怠APIを使用して下さい。</li>
  <li>勤怠データが存在しない場合は新規作成、既に存在する場合は上書き更新されます。</li>
  <li>値が設定された項目のみ更新されます。値が設定されなかった場合は自動的に0が設定されます。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "work_days": 0,
  "work_days_on_weekdays": 0,
  "work_days_on_prescribed_holidays": 0,
  "work_days_on_legal_holidays": 0,
  "total_work_mins": 0,
  "total_normal_work_mins": 0,
  "total_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "total_actual_excess_statutory_work_mins": 0,
  "total_actual_overtime_within_statutory_work_mins": 0,
  "total_overtime_work_mins": 0,
  "total_overtime_excess_statutory_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "num_absences": 0,
  "num_absences_for_deduction": 0,
  "total_lateness_mins": 0,
  "total_lateness_mins_for_deduction": 0,
  "total_early_leaving_mins": 0,
  "total_early_leaving_mins_for_deduction": 0,
  "num_paid_holidays": 0,
  "total_shortage_work_mins": 0,
  "total_deemed_paid_excess_statutory_work_mins": 0,
  "total_deemed_paid_overtime_within_statutory_work_mins": 0,
  "total_deemed_paid_overtime_except_normal_work_mins": 0
}
```

<h3 id="勤怠情報月次サマリの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|year|path|integer|true|更新対象年|
|month|path|integer|true|更新対象月|
|body|body|[ApiV1EmployeesWorkRecordSummaryController.update_body](#schemaapiv1employeesworkrecordsummarycontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» work_days|body|number(float)|false|総勤務日数|
|» work_days_on_weekdays|body|number(float)|false|所定労働日の勤務日数|
|» work_days_on_prescribed_holidays|body|number(float)|false|所定休日の勤務日数|
|» work_days_on_legal_holidays|body|number(float)|false|法定休日の勤務日数|
|» total_work_mins|body|integer|false|労働時間（分）|
|» total_normal_work_mins|body|integer|false|所定労働時間（分）|
|» total_excess_statutory_work_mins|body|integer|false|**Deprecated.** [deprecated] 給与計算に用いられる法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|» total_overtime_within_statutory_work_mins|body|integer|false|給与計算に用いられる法定内残業時間（分）|
|» total_holiday_work_mins|body|integer|false|法定休日労働時間（分）|
|» total_latenight_work_mins|body|integer|false|深夜労働時間（分）|
|» total_actual_excess_statutory_work_mins|body|integer|false|**Deprecated.** [deprecated] 実労働時間ベースの法定内残業時間（分） ※ 削除予定のため total_actual_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|» total_actual_overtime_within_statutory_work_mins|body|integer|false|実労働時間ベースの法定内残業時間（分）|
|» total_overtime_work_mins|body|integer|false|**Deprecated.** [deprecated] 時間外労働時間（分） ※ 削除予定のため total_overtime_excess_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|» total_overtime_excess_statutory_work_mins|body|integer|false|時間外労働時間（分）|
|» total_prescribed_holiday_work_mins|body|integer|false|所定休日労働時間（分）|
|» num_absences|body|number(float)|false|欠勤日数|
|» num_absences_for_deduction|body|number(float)|false|控除対象の欠勤日数<br><br>フレックスタイム制の場合は、指定した値が反映されず無視されます。|
|» total_lateness_mins|body|integer|false|遅刻時間（分）|
|» total_lateness_mins_for_deduction|body|integer|false|控除対象の遅刻時間（分）<br><br>フレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。|
|» total_early_leaving_mins|body|integer|false|早退時間（分）|
|» total_early_leaving_mins_for_deduction|body|integer|false|控除対象の早退時間（分）<br><br>フレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。|
|» num_paid_holidays|body|number(float)|false|有給取得日数|
|» total_shortage_work_mins|body|integer|false|不足時間（分）（フレックスタイム制でのみ使用）|
|» total_deemed_paid_excess_statutory_work_mins|body|integer|false|**Deprecated.** [deprecated] みなし外の法定内残業時間（分）（裁量労働制でのみ使用） ※ 削除予定のため total_deemed_paid_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|» total_deemed_paid_overtime_within_statutory_work_mins|body|integer|false|みなし外の法定内残業時間（分）（裁量労働制でのみ使用）|
|» total_deemed_paid_overtime_except_normal_work_mins|body|integer|false|みなし外の時間外労働時間（分）（裁量労働制でのみ使用）|

> Example responses

> 200 Response

```json
{
  "year": 0,
  "month": 1,
  "start_date": "1970-01-01",
  "end_date": "1970-01-01",
  "work_days": 0,
  "total_work_mins": 0,
  "total_normal_work_mins": 0,
  "total_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_overtime_within_normal_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "num_absences": 0,
  "num_paid_holidays": 0,
  "num_paid_holidays_and_hours": {
    "days": 0,
    "hours": 0
  },
  "num_paid_holidays_left": 0,
  "num_paid_holidays_and_hours_left": {
    "days": 0,
    "hours": 0
  },
  "num_substitute_holidays_used": 0,
  "num_compensatory_holidays_used": 0,
  "num_special_holidays_used": 0,
  "num_special_holidays_and_hours_used": {
    "days": 0,
    "hours": 0
  },
  "total_lateness_and_early_leaving_mins": 0,
  "multi_hourly_wages": [
    {
      "name": "string",
      "total_normal_time_mins": 0
    }
  ],
  "work_records": [
    {
      "break_records": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "work_record_segments": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z",
      "date": "1970-01-01T00:00:00Z",
      "day_pattern": "normal_day",
      "schedule_pattern": "",
      "early_leaving_mins": 0,
      "half_special_holiday_mins": 0,
      "hourly_special_holiday_mins": 0,
      "is_absence": false,
      "is_editable": true,
      "lateness_mins": 0,
      "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
      "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
      "normal_work_mins": 0,
      "note": "string",
      "paid_holidays": [
        {
          "type": "half",
          "mins": 240,
          "days": 0.5
        }
      ],
      "holidays": [
        {
          "holiday_type": "full",
          "mins": 1,
          "time_ranges": [
            {
              "start_at": "1970-01-01T00:00:00Z",
              "end_at": "1970-01-01T00:00:00Z"
            }
          ],
          "holiday_category": "annual_paid_holiday"
        }
      ],
      "special_holiday": 0,
      "special_holiday_setting_id": 0,
      "use_attendance_deduction": true,
      "use_default_work_pattern": true,
      "use_half_compensatory_holiday": false,
      "total_overtime_work_mins": 0,
      "total_prescribed_holiday_work_mins": 0,
      "total_holiday_work_mins": 0,
      "total_latenight_work_mins": 0,
      "not_auto_calc_work_time": false,
      "total_excess_statutory_work_mins": 0,
      "total_latenight_excess_statutory_work_mins": 0,
      "total_overtime_within_statutory_work_mins": 0,
      "total_latenight_overtime_within_statutory_work_mins": 0,
      "total_overtime_except_normal_work_mins": 0,
      "total_latenight_overtime_except_normal_work_mins": 0
    }
  ],
  "total_shortage_work_mins": 0,
  "total_deemed_paid_excess_statutory_work_mins": 0,
  "total_deemed_paid_overtime_within_statutory_work_mins": 0,
  "total_deemed_paid_overtime_except_normal_work_mins": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠情報月次サマリの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesWorkRecordSummarySerializer](#schemaapiv1employeesworkrecordsummaryserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-タイムレコーダー打刻">タイムレコーダー(打刻)</h1>

タイムレコーダー(打刻)機能の操作

## 打刻一覧の取得

<a id="opIdget_employee_time_clocks"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/time_clocks?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/time_clocks`

<h2 id="">概要</h2>
<p>指定した従業員・期間の打刻情報を返します。</p>

<h3 id="打刻一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|from_date|query|string(date)|false|取得する打刻期間の開始日(YYYY-MM-DD)(例:2018-08-01)(デフォルト: 当月の打刻開始日)|
|to_date|query|string(date)|false|取得する打刻期間の終了日(YYYY-MM-DD)(例:2018-08-31)(デフォルト: 当日)|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
]
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="打刻一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesTimeClocksController.index_response](#schemaapiv1employeestimeclockscontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 打刻の登録

<a id="opIdcreate_employee_time_clock"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/time_clocks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "type": "clock_in",
    "base_date": "2018-07-31",
    "datetime": "2018-07-31 08:00:00"
  }'
```

`POST /api/v1/employees/{employee_id}/time_clocks`

<h2 id="">概要</h2>
<p>指定した従業員の打刻情報を登録します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>休憩開始の連続や退勤のみなど、整合性の取れていない打刻は登録できません。
打刻可能種別の取得APIを呼ぶことで、その従業員がその時点で登録可能な打刻種別が取得できます。</li>

  <li>出勤の打刻は</li>
  <ul>
    <li>前日の出勤時刻から24時間以内の場合、前日の退勤打刻が必須です。</li>
    <li> 前日の出勤時刻から24時間経過している場合は、前日の退勤打刻がなくとも出勤打刻を登録することができます。</li>
  </ul>

  <li>退勤の打刻は</li>
  <ul>
    <li><a href=\"https://support.freee.co.jp/hc/ja/articles/900004490226-%E5%8B%A4%E6%80%A0%E5%9F%BA%E6%9C%AC%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%86#h_01EYPYTR9HZ7YB8V5F18VMD1BT"target=\"_blank\">『退勤を自動打刻する』</a>の設定を使用している場合は、出勤打刻から24時間経過しても退勤打刻がない場合に、退勤打刻が自動で登録されます。</li>
    <li>すでに登録されている退勤打刻よりも後の時刻であれば上書き登録することができます。</li>
  </ul>

  <li>打刻が日をまたぐ場合は、base_date(打刻日)に前日の日付を指定してください。</li>

  <li>datetime(打刻日時)を指定できるのは管理者の権限を持ったユーザーのみです。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "type": "clock_in",
  "base_date": "2018-07-31",
  "datetime": "2018-07-31 08:00:00"
}
```

<h3 id="打刻の登録-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesTimeClocksController.create_body](#schemaapiv1employeestimeclockscontroller.create_body)|false|none|
|» company_id|body|integer(int32)|true|(required)|
|» type|body|string|true|打刻種別（required）[clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤]の何れか|
|» base_date|body|string(date)|false|打刻日。打刻が日をまたぐ場合に、前日の日付を指定します。(YYYY-MM-DD)(例:2018-07-31)|
|» datetime|body|string(date-time)|false|打刻時刻。(YYYY-MM-DD&nbsp;HH:MM:SS)(例:2018-07-31&nbsp;08:00:00)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|clock_in|
|» type|break_begin|
|» type|break_end|
|» type|clock_out|

> Example responses

> 201 Response

```json
{
  "employee_time_clock": {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="打刻の登録-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1EmployeesTimeClocksController.create_response](#schemaapiv1employeestimeclockscontroller.create_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 打刻の取得

<a id="opIdget_employee_time_clock"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/time_clocks/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/time_clocks/{id}`

<h2 id="">概要</h2>
<p>指定した従業員・指定した打刻の詳細情報を返します。</p>

<h3 id="打刻の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|打刻ID|

> Example responses

> 200 Response

```json
{
  "employee_time_clock": {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="打刻の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesTimeClocksController.show_response](#schemaapiv1employeestimeclockscontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 打刻可能種別の取得

<a id="opIdget_employee_time_clocks_available_types"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/time_clocks/available_types?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/time_clocks/available_types`

<h2 id="">概要</h2>
<p>指定した従業員・日付の打刻可能種別と打刻基準日を返します。</p>
<p>例: すでに出勤した状態だと、休憩開始、退勤が配列で返ります。</p>

<h3 id="打刻可能種別の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|date|query|string(date)|false|従業員情報を取得したい年月日(YYYY-MM-DD)(例:2018-08-01)(デフォルト：当日)|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "available_types": [
    "clock_in"
  ],
  "base_date": "2018-07-31"
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="打刻可能種別の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesTimeClocksController.available_types_response](#schemaapiv1employeestimeclockscontroller.available_types_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-給与明細">給与明細</h1>

給与明細の操作

## 給与明細一覧の取得

<a id="opIdget_salaries_employee_payroll_statements"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/salaries/employee_payroll_statements?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/salaries/employee_payroll_statements`

<h2 id="">概要</h2>
<p>指定した事業所に所属する従業員の給与明細をリストで返します。</p>
<p>指定した年月に支払いのある給与明細が返されます。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>複数時給を設定している場合はpaymentsに内訳が返されます。</li>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>給与計算中の場合は、各パラメータはnullおよび空配列が返ります。</li>
</ul>

<h3 id="給与明細一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

> Example responses

> 200 Response

```json
{
  "employee_payroll_statements": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "employee_name": "string",
      "employee_display_name": "string",
      "employee_num": "string",
      "pay_date": "1970-01-01",
      "start_date": "1970-01-01",
      "closing_date": "1970-01-01",
      "variable_pay_start_date": "1970-01-01",
      "variable_pay_closing_date": "1970-01-01",
      "fixed": true,
      "calc_status": "string",
      "calculated_at": "1970-01-01T00:00:00Z",
      "pay_calc_type": "monthly",
      "board_member_remuneration_amount": "string",
      "basic_pay_amount": "string",
      "work_days": "string",
      "normal_work_time": "string",
      "normal_work_days": "string",
      "work_mins_by_paid_holiday": "string",
      "num_paid_holidays": "string",
      "is_board_member": true,
      "total_attendance_deduction_amount": "string",
      "total_allowance_amount": "string",
      "total_deduction_amount": "string",
      "total_deduction_employer_share": "string",
      "net_payment_amount": "string",
      "gross_payment_amount": "string",
      "total_worked_days_count": "string",
      "total_taxable_payment_amount": "string",
      "total_expense_amount": "string",
      "total_transfer_amount": "string",
      "total_annual_payment_amount": "string",
      "payments": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions_employer_share": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "attendances": [
        {
          "name": "string",
          "time": "string",
          "amount": "string"
        }
      ],
      "overtime_pays": [
        {
          "name": "時間外労働",
          "time": "60.0",
          "amount": "1000.0",
          "code": "12345abcde"
        }
      ],
      "remark": "string"
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="給与明細一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1SalariesEmployeePayrollStatementsController.index_response](#schemaapiv1salariesemployeepayrollstatementscontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 給与明細の取得

<a id="opIdget_salaries_employee_payroll_statement"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/salaries/employee_payroll_statements/1?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/salaries/employee_payroll_statements/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員ID、年月の給与明細を返します。</p>
<p>指定した年月に支払いのある給与明細が返されます。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>複数時給を設定している場合はpaymentsに内訳が返されます。</li>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>給与計算中の場合は、各パラメータはnullおよび空配列が返ります。</li>
</ul>

<h2 id="_2">examples</h2>
<pre>
  <code>
  {
  "employee_payroll_statement": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "employee_name": "給与 太郎",
    "employee_display_name": "給与 太郎",
    "employee_num": "001",
    "pay_date": "2018-02-25",
    "start_date": "2018-02-01",
    "closing_date": "2018-02-28",
    "variable_pay_start_date": "2018-01-01",
    "variable_pay_closing_date": "2018-01-31",
    "fixed": true,
    "calc_status": "calculated",
    "calculated_at": "2018-09-27T05:06:45.315Z",
    "pay_calc_type": "monthly",
    "board_member_remuneration_amount": "400000.0",
    "basic_pay_amount": "300000.0",
    "work_days": "21.0",
    "normal_work_time": "8.0",
    "normal_work_days": "21.0",
    "work_mins_by_paid_holiday": "480.0",
    "num_paid_holidays": "1.0",
    "is_board_member": true,
    "total_attendance_deduction_amount": "0.0",
    "total_allowance_amount": "0.0",
    "total_deduction_amount": "23830.0",
    "total_deduction_employer_share": "16830.0",
    "net_payment_amount": "277170.0",
    "gross_payment_amount": "301000.0",
    "total_worked_days_count": "21.0",
    "total_taxable_payment_amount": "301000.0",
    "total_expense_amount": "0.0",
    "total_transfer_amount": "277170.0",
    "total_annual_payment_amount": "600000.0",
    "payments": [{ "name": "基本給", "amount": "300000.0"},{ "name": "残業代", "amount": "1000.0"}],
    "deductions": [{"name": "所得税", "amount": "7000.0"}, {"name": "健康保険料", "amount": "16830.0"}],
    "deductions_emloyers_share": [{"name": "健康保険料(会社負担分)", "amount": "16830.0"}],
    "attendances": [{"name": "遅刻・早退", "time": "0.0", "amount": "0.0"}],
    "overtime_pays": [{ "name": "時間外労働", "time": "60.0", "amount": "1000.0", "code": null }, { "name": "カスタム固定残業代", "time": null, "amount": "10000.0", "code": "a001" }],
    "remark": "備考"
    }
  }
  </code>
</pre>

<h3 id="給与明細の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_payroll_statement": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "employee_name": "string",
    "employee_display_name": "string",
    "employee_num": "string",
    "pay_date": "1970-01-01",
    "start_date": "1970-01-01",
    "closing_date": "1970-01-01",
    "variable_pay_start_date": "1970-01-01",
    "variable_pay_closing_date": "1970-01-01",
    "fixed": true,
    "calc_status": "string",
    "calculated_at": "1970-01-01T00:00:00Z",
    "pay_calc_type": "monthly",
    "board_member_remuneration_amount": "string",
    "basic_pay_amount": "string",
    "work_days": "string",
    "normal_work_time": "string",
    "normal_work_days": "string",
    "work_mins_by_paid_holiday": "string",
    "num_paid_holidays": "string",
    "is_board_member": true,
    "total_attendance_deduction_amount": "string",
    "total_allowance_amount": "string",
    "total_deduction_amount": "string",
    "total_deduction_employer_share": "string",
    "net_payment_amount": "string",
    "gross_payment_amount": "string",
    "total_worked_days_count": "string",
    "total_taxable_payment_amount": "string",
    "total_expense_amount": "string",
    "total_transfer_amount": "string",
    "total_annual_payment_amount": "string",
    "payments": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions_employer_share": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "attendances": [
      {
        "name": "string",
        "time": "string",
        "amount": "string"
      }
    ],
    "overtime_pays": [
      {
        "name": "時間外労働",
        "time": "60.0",
        "amount": "1000.0",
        "code": "12345abcde"
      }
    ],
    "remark": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="給与明細の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1SalariesEmployeePayrollStatementsController.show_response](#schemaapiv1salariesemployeepayrollstatementscontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 給与明細の備考の更新

<a id="opIdupdate_employee_payroll_statement_remark"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/salaries/employee_payroll_statements/1/remark \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2024,
    "month": 10,
    "remark": {
      "body": "備考の本文"
    }
  }'
```

`PUT /api/v1/salaries/employee_payroll_statements/{employee_id}/remark`

<h2 id="">概要</h2>
<p>指定した従業員の給与明細の備考を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2024,
  "month": 10,
  "remark": {
    "body": "備考の本文"
  }
}
```

<h3 id="給与明細の備考の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|object|true|none|
|» company_id|body|integer|true|事業所ID|
|» year|body|integer|true|更新対象の年|
|» month|body|integer|true|更新対象の月|
|» remark|body|object|true|none|
|» » body|body|string|true|備考本文（500 文字以内）|

> Example responses

> 200 Response

```json
{
  "employee_payroll_statement_remark": {
    "id": 0,
    "employee_payroll_statement_id": 0,
    "body": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="給与明細の備考の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="給与明細の備考の更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_payroll_statement_remark|object|true|none|none|
|» id|integer|true|none|給与明細備考ID|
|» employee_payroll_statement_id|integer|true|none|給与明細ID|
|» body|string|true|none|備考本文|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-賞与明細">賞与明細</h1>

賞与明細の操作

## 賞与明細一覧の取得

<a id="opIdget_bonuses_employee_payroll_statements"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/bonuses/employee_payroll_statements?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/bonuses/employee_payroll_statements`

<h2 id="">概要</h2>
<p>指定した事業所に所属する従業員の賞与明細をリストで返します。</p>
<p>指定した年月に支払いのある賞与明細が返されます。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="賞与明細一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

> Example responses

> 200 Response

```json
{
  "employee_payroll_statements": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "employee_name": "string",
      "employee_display_name": "string",
      "employee_num": "string",
      "closing_date": "1970-01-01",
      "pay_date": "1970-01-01",
      "fixed": true,
      "calc_status": "string",
      "calculated_at": "1970-01-01T00:00:00Z",
      "bonus_amount": "string",
      "total_allowance_amount": "string",
      "total_deduction_amount": "string",
      "net_payment_amount": "string",
      "gross_payment_amount": "string",
      "total_taxable_payment_amount": "string",
      "allowances": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "remark": "string"
    }
  ],
  "total_count": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="賞与明細一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1BonusesEmployeePayrollStatementsIndexSerializer](#schemaapiv1bonusesemployeepayrollstatementsindexserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 賞与明細の取得

<a id="opIdget_bonuses_employee_payroll_statement"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/bonuses/employee_payroll_statements/1?company_id=1&year=2000&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/bonuses/employee_payroll_statements/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員ID、年月の賞与明細を返します。</p>
<p>指定した年月に支払いのある賞与明細が返されます。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h2 id="_2">examples</h2>
<pre>
  <code>
    {
    "employee_payroll_statement": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "employee_name": "給与 太郎",
      "employee_display_name": "給与 太郎",
      "employee_num": "001",
      "closing_date": "2018-03-31",
      "pay_date": "2018-03-31",
      "fixed": true,
      "calc_status": "calculated",
      "calculated_at": "2018-09-27T05:06:45.315Z",
      "bonus_amount": "300000.0",
      "total_allowance_amount": "0.0",
      "total_deduction_amount": "23830.0",
      "net_payment_amount": "268000.0",
      "gross_payment_amount": "330000.0",
      "total_taxable_payment_amount": "330000.0",
      "allowances": [{"name": "地域手当", "amount": "30000.0"}],
      "deductions": [{"name": "所得税", "amount": "46000.0"}, {"name": "健康保険料", "amount": "16000.0"}],
      "remark": "備考"
    }
    }
  </code>
</pre>

<h3 id="賞与明細の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_payroll_statement": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "employee_name": "string",
    "employee_display_name": "string",
    "employee_num": "string",
    "closing_date": "1970-01-01",
    "pay_date": "1970-01-01",
    "fixed": true,
    "calc_status": "string",
    "calculated_at": "1970-01-01T00:00:00Z",
    "bonus_amount": "string",
    "total_allowance_amount": "string",
    "total_deduction_amount": "string",
    "net_payment_amount": "string",
    "gross_payment_amount": "string",
    "total_taxable_payment_amount": "string",
    "allowances": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "remark": "string"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="賞与明細の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1BonusesEmployeePayrollStatementsController.show_response](#schemaapiv1bonusesemployeepayrollstatementscontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-所属">所属</h1>

所属の操作

## 所属一覧の取得

<a id="opIdget_employee_group_memberships"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employee_group_memberships?company_id=1&base_date=2018-07-31' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employee_group_memberships`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における所属情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="所属一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|base_date|query|string(date)|true|指定日。指定日付時点における所属情報をリストで返します。(YYYY-MM-DD)(例:2018-07-31)|
|with_no_payroll_calculation|query|boolean|false|trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。|
|employee_ids|query|string|false|取得対象とする従業員IDを指定することができます。指定しない場合は全従業員が対象となります。<br>(例:1,2,3,4,5)<br>|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

> Example responses

> 200 Response

```json
{
  "employee_group_memberships": [
    {
      "id": 1,
      "num": "A-001",
      "display_name": "山田 太郎",
      "entry_date": "2021-04-01",
      "retire_date": "2022-03-31",
      "user_id": 1,
      "login_email": "example@example.com",
      "birth_date": "2000-01-01",
      "gender": "male",
      "payroll_calculation": true,
      "group_memberships": [
        {
          "start_date": "2000-01-01",
          "end_date": "2020-01-01",
          "boss_id": 1,
          "main_duty": "main_duty",
          "group_id": 10,
          "group_code": "group2",
          "group_name": "営業部",
          "level": 2,
          "position_id": 1,
          "position_code": "position1",
          "position_name": "部長",
          "parent_group_id": 1,
          "parent_group_code": "group1",
          "parent_group_name": "営業統括"
        }
      ]
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="所属一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeGroupMembershipsIndexSerializer](#schemaapiv1employeegroupmembershipsindexserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の所属取得

<a id="opIdget_employee_group_memberships_by_employee_id"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/group_memberships?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/group_memberships`

<h2 id="">概要</h2>
<p>指定した従業員の所属情報をリストで返します。</p>
<p>base_dateを指定した場合は指定日付時点の所属情報を、base_dateを省略した場合は全期間の所属履歴を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の所属取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|company_id|query|integer|true|事業所ID|
|base_date|query|string(date)|false|指定日。指定日付時点における所属情報を返します。(YYYY-MM-DD)(例:2018-07-31)<br>省略した場合は全期間の所属履歴を返します。<br>|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

> Example responses

> 200 Response

```json
{
  "group_memberships": [
    {
      "id": 1,
      "start_date": "2000-01-01",
      "end_date": "2020-01-01",
      "boss_id": 1,
      "main_duty": "main_duty",
      "group_id": 10,
      "group_code": "group2",
      "group_name": "営業部",
      "position_id": 1,
      "position_code": "position1",
      "position_name": "部長"
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の所属取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesGroupMembershipsIndexSerializer](#schemaapiv1employeesgroupmembershipsindexserializer)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-勤怠タグサマリ">勤怠タグサマリ</h1>

勤怠タグサマリの操作

## 勤怠タグ月次サマリの取得

<a id="opIdget_employees_attendance_tag_summaries"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/attendance_tag_summaries/2021/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/attendance_tag_summaries/{year}/{month}`

<h2 id="">概要</h2>
<p>
  指定した従業員・年月の勤怠タグサマリの一覧を返します。<br />
  年月は給与支払い月を指定してください。
</p>

<h3 id="勤怠タグ月次サマリの取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|
|year|path|integer|true|勤怠タグサマリを取得したい年|
|month|path|integer|true|勤怠タグサマリを取得したい月|

> Example responses

> 200 Response

```json
{
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠タグ月次サマリの取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesAttendanceTagSummariesController.show_response](#schemaapiv1employeesattendancetagsummariescontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠タグ月次サマリの更新

<a id="opIdupdate_employees_attendance_tag_summaries"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/attendance_tag_summaries/2021/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "employee_attendance_tag_summaries": [
      {
        "attendance_tag_id": 1,
        "amount": 1
      }
    ]
  }'
```

`PUT /api/v1/employees/{employee_id}/attendance_tag_summaries/{year}/{month}`

<h2 id="">概要</h2>
<p>
  指定した従業員・年月の勤怠タグサマリを更新します。<br />
  年月は給与支払い月を指定してください。
</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>指定した従業員・年月の勤怠タグサマリが存在する場合は、上書き更新されます。</li>
  <li>指定がなかった勤怠タグは自動的に0が設定されます。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag_id": 1,
      "amount": 1
    }
  ]
}
```

<h3 id="勤怠タグ月次サマリの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|year|path|integer|true|勤怠タグサマリを更新したい年|
|month|path|integer|true|勤怠タグサマリを更新したい月|
|body|body|[ApiV1EmployeesAttendanceTagSummariesController.update_body](#schemaapiv1employeesattendancetagsummariescontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» employee_attendance_tag_summaries|body|[[ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer](#schemaapiv1employeesattendancetagsummaryupdaterequestserializer)]|true|更新対象の勤怠タグサマリのリスト|

> Example responses

> 200 Response

```json
{
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠タグ月次サマリの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesAttendanceTagSummariesController.update_response](#schemaapiv1employeesattendancetagsummariescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-勤怠タグ">勤怠タグ</h1>

勤怠タグの操作

## 勤怠タグ一覧の取得

<a id="opIdget_employees_attendance_tags"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/attendance_tags?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/attendance_tags`

<h2 id="">概要</h2>
<p>指定した従業員の利用可能な勤怠タグの一覧を返します。</p>

<h3 id="勤怠タグ一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_attendance_tags": [
    {
      "id": 1,
      "company_id": 1,
      "name": "勤怠タグの名称",
      "description": "勤怠タグの備考",
      "max_amount": 1,
      "published": true,
      "is_employee_usable": true
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠タグ一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesAttendanceTagsController.index_response](#schemaapiv1employeesattendancetagscontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠タグと利用回数の取得

<a id="opIdget_employees_attendance_tags_by_date"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/attendance_tags/1970-01-01?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/attendance_tags/{date}`

<h2 id="">概要</h2>
<p>指定した従業員・日付の勤怠タグと利用回数の一覧を返します。</p>

<h3 id="勤怠タグと利用回数の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|employee_id|path|integer|true|従業員ID|
|date|path|string(date)|true|対象年月日(YYYY-MM-DD)(例:2018-08-01)|

> Example responses

> 200 Response

```json
{
  "employee_attendance_tags": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠タグと利用回数の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesAttendanceTagsController.show_response](#schemaapiv1employeesattendancetagscontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤怠タグの更新

<a id="opIdupdate_employees_attendance_tags"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/attendance_tags/1970-01-01 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "employee_attendance_tags": [
      {
        "attendance_tag_id": 1,
        "amount": 1
      }
    ]
  }'
```

`PUT /api/v1/employees/{employee_id}/attendance_tags/{date}`

<h2 id="">概要</h2>
<p>指定した従業員・日付の勤怠タグを更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>指定した従業員・日付の勤怠タグが存在する場合は、上書き更新されます。</li>
  <li>指定がなかった勤怠タグは削除されます。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "employee_attendance_tags": [
    {
      "attendance_tag_id": 1,
      "amount": 1
    }
  ]
}
```

<h3 id="勤怠タグの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|date|path|string(date)|true|更新対象年月日(YYYY-MM-DD)(例:2018-08-01)|
|body|body|[ApiV1EmployeesAttendanceTagsController.update_body](#schemaapiv1employeesattendancetagscontroller.update_body)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» employee_attendance_tags|body|[[ApiV1EmployeesAttendanceTagUpdateRequestSerializer](#schemaapiv1employeesattendancetagupdaterequestserializer)]|true|更新対象の勤怠タグのリスト|

> Example responses

> 200 Response

```json
{
  "employee_attendance_tags": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤怠タグの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤怠タグの更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_attendance_tags|[[ApiV1EmployeesAssignedAttendanceTagSerializer](#schemaapiv1employeesassignedattendancetagserializer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-部門">部門</h1>

部門の操作

## 部門一覧の取得

<a id="opIdget_groups"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/groups?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/groups`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における部門情報をリストで返します。</p>
<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="部門一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "id": 3,
      "code": "group2",
      "name": "営業部門",
      "level": 2,
      "parent_group_id": 2,
      "parent_group_code": "group1",
      "parent_group_name": "営業統括"
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="部門一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1GroupsIndexResponse](#schemaapiv1groupsindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 部門の作成

<a id="opIdcreate_group"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "group": {
      "code": "group2",
      "name": "営業部門",
      "parent_group_id": 2
    }
  }'
```

`POST /api/v1/groups`

<h2 id="">概要</h2>
<p>指定した事業所の部門を新規作成します。</p>
<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "group": {
    "code": "group2",
    "name": "営業部門",
    "parent_group_id": 2
  }
}
```

<h3 id="部門の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1GroupCreateRequest](#schemaapiv1groupcreaterequest)|false|none|
|» company_id|body|integer(int32)|true|作成対象事業所ID（必須）|
|» group|body|[ApiV1GroupCreateRequestParams](#schemaapiv1groupcreaterequestparams)|true|none|

> Example responses

> 201 Response

```json
{
  "group": {
    "id": 3,
    "code": "group2",
    "name": "営業部門",
    "level": 2,
    "parent_group_id": 2,
    "parent_group_code": "group1",
    "parent_group_name": "営業統括"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="部門の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1GroupResponse](#schemaapiv1groupresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 部門の更新

<a id="opIdupdate_group"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/groups/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "group": {
      "code": "group2",
      "name": "営業部門"
    }
  }'
```

`PUT /api/v1/groups/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の部門の情報を更新します。</p>
<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "group": {
    "code": "group2",
    "name": "営業部門"
  }
}
```

<h3 id="部門の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|部門ID|
|body|body|[ApiV1GroupUpdateRequest](#schemaapiv1groupupdaterequest)|false|none|
|» company_id|body|integer(int32)|true|作成対象事業所ID（必須）|
|» group|body|[ApiV1GroupUpdateRequestParams](#schemaapiv1groupupdaterequestparams)|true|none|

> Example responses

> 200 Response

```json
{
  "group": {
    "id": 3,
    "code": "group2",
    "name": "営業部門",
    "level": 2,
    "parent_group_id": 2,
    "parent_group_code": "group1",
    "parent_group_name": "営業統括"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="部門の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1GroupResponse](#schemaapiv1groupresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 部門の削除

<a id="opIddestroy_group"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/groups/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/groups/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の部門の情報を削除します。</p>
<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="部門の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|部門ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="部門の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-役職">役職</h1>

役職の操作

## 役職一覧の取得

<a id="opIdget_positions"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/positions?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/positions`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における役職情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="役職一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "positions": [
    {
      "id": 1,
      "code": "position1",
      "name": "部長"
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="役職一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1PositionIndexResponse](#schemaapiv1positionindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 役職の作成

<a id="opIdcreate_position"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "position": {
      "code": "position1",
      "name": "部長"
    }
  }'
```

`POST /api/v1/positions`

<h2 id="">概要</h2>
<p>指定した事業所の役職を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "position": {
    "code": "position1",
    "name": "部長"
  }
}
```

<h3 id="役職の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1PositionRequest](#schemaapiv1positionrequest)|false|none|
|» company_id|body|integer(int32)|true|作成対象事業所ID（必須）|
|» position|body|[ApiV1PositionRequestParams](#schemaapiv1positionrequestparams)|true|none|

> Example responses

> 201 Response

```json
{
  "position": {
    "id": 1,
    "code": "position1",
    "name": "部長"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="役職の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1PositionResponse](#schemaapiv1positionresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 役職の更新

<a id="opIdupdate_position"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/positions/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "position": {
      "code": "position1",
      "name": "部長"
    }
  }'
```

`PUT /api/v1/positions/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の役職の情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "position": {
    "code": "position1",
    "name": "部長"
  }
}
```

<h3 id="役職の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|役職ID|
|body|body|[ApiV1PositionRequest](#schemaapiv1positionrequest)|false|none|
|» company_id|body|integer(int32)|true|作成対象事業所ID（必須）|
|» position|body|[ApiV1PositionRequestParams](#schemaapiv1positionrequestparams)|true|none|

> Example responses

> 200 Response

```json
{
  "position": {
    "id": 1,
    "code": "position1",
    "name": "部長"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="役職の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1PositionResponse](#schemaapiv1positionresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 役職の削除

<a id="opIddestroy_position"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/positions/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/positions/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の役職の情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>従業員に役職が適用されている場合、従業員の役職情報も削除されます。</li>
</ul>

<h3 id="役職の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|役職ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="役職の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-その他手当">その他手当</h1>

その他手当の操作

## その他手当一覧の取得

<a id="opIdget_allowances"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/allowances?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/allowances`

<h2 id="">概要</h2>
<p>指定した事業所のその他手当情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="その他手当一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|frequency|query|string|false|支給頻度フィルタ（省略で全件取得）|
|is_active|query|boolean|false|表示状態フィルタ（省略で全件取得）|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency|salary|
|frequency|salary_monthly|
|frequency|salary_this_month|
|frequency|bonus|

> Example responses

> 200 Response

```json
{
  "allowances": [
    {
      "id": 0,
      "company_id": 0,
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "is_active": true,
      "amount": 0,
      "amount_source": "direct",
      "is_daily_prorated": true,
      "formula_element": "num_absences",
      "formula_element_code": "num_absences",
      "round_type": "round",
      "rate_multiplier": 0,
      "company_profile_custom_field_id": 0,
      "attendance_tag_id": 0,
      "is_affect_income_tax": true,
      "is_affect_employment_insurance": true,
      "is_affect_labor_insurance": true,
      "is_affect_overtime_wage_base": true,
      "is_affect_attendance_deduction_base": true,
      "is_affect_fixed_wage": true
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他手当一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1AllowancesIndexResponse](#schemaapiv1allowancesindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## その他手当の作成

<a id="opIdcreate_allowance"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/allowances?company_id=1' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "allowance": {
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "amount_source": "direct",
      "amount": -99999999,
      "is_daily_prorated": true,
      "is_affect_income_tax": true,
      "is_affect_employment_insurance": true,
      "is_affect_labor_insurance": true,
      "is_affect_overtime_wage_base": true,
      "is_affect_attendance_deduction_base": true,
      "is_affect_fixed_wage": true
    }
  }'
```

`POST /api/v1/allowances`

<h2 id="">概要</h2>
<p>指定した事業所のその他手当を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "allowance": {
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "amount_source": "direct",
    "amount": -99999999,
    "is_daily_prorated": true,
    "is_affect_income_tax": true,
    "is_affect_employment_insurance": true,
    "is_affect_labor_insurance": true,
    "is_affect_overtime_wage_base": true,
    "is_affect_attendance_deduction_base": true,
    "is_affect_fixed_wage": true
  }
}
```

<h3 id="その他手当の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|body|body|[ApiV1AllowancesController.create_body](#schemaapiv1allowancescontroller.create_body)|true|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» allowance|body|[ApiV1AllowanceCreateRequestSerializer](#schemaapiv1allowancecreaterequestserializer)|true|none|

> Example responses

> 201 Response

```json
{
  "allowance": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "amount_source": "direct",
    "is_daily_prorated": true,
    "formula_element": "num_absences",
    "formula_element_code": "num_absences",
    "round_type": "round",
    "rate_multiplier": 0,
    "company_profile_custom_field_id": 0,
    "attendance_tag_id": 0,
    "is_affect_income_tax": true,
    "is_affect_employment_insurance": true,
    "is_affect_labor_insurance": true,
    "is_affect_overtime_wage_base": true,
    "is_affect_attendance_deduction_base": true,
    "is_affect_fixed_wage": true
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他手当の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1AllowanceResponse](#schemaapiv1allowanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## その他手当の取得

<a id="opIdget_allowance"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/allowances/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/allowances/{id}`

<h2 id="">概要</h2>
<p>指定した事業所のその他手当情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="その他手当の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|その他手当ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "allowance": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "amount_source": "direct",
    "is_daily_prorated": true,
    "formula_element": "num_absences",
    "formula_element_code": "num_absences",
    "round_type": "round",
    "rate_multiplier": 0,
    "company_profile_custom_field_id": 0,
    "attendance_tag_id": 0,
    "is_affect_income_tax": true,
    "is_affect_employment_insurance": true,
    "is_affect_labor_insurance": true,
    "is_affect_overtime_wage_base": true,
    "is_affect_attendance_deduction_base": true,
    "is_affect_fixed_wage": true
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他手当の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1AllowanceResponse](#schemaapiv1allowanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員手当">従業員手当</h1>

従業員手当の操作

## 従業員の手当情報の取得

<a id="opIdget_employee_allowance_rules"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/allowance_rules?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/allowance_rules`

<h2 id="">概要</h2>
<p>指定した従業員の手当情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の手当情報の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_allowance_rules": [
    {
      "id": 0,
      "employee_id": 0,
      "allowance_id": 0,
      "allowance_name": "string",
      "amount": 0,
      "frequency": "salary_this_month",
      "calc_type": "fixed"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の手当情報の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="従業員の手当情報の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_allowance_rules|[[ApiV1EmployeesAllowanceRuleSerializer](#schemaapiv1employeesallowanceruleserializer)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の手当情報の更新

<a id="opIdupdate_employee_allowance_rules"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/employees/1/allowance_rules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2024,
    "month": 6,
    "employee_allowance_rule": {
      "allowance_id": 1,
      "amount": 30000
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/allowance_rules`

<h2 id="">概要</h2>
<p>指定した従業員の手当情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>賞与に紐づく手当（frequency=bonus）の場合、対象年月に賞与情報が登録されている必要があります。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2024,
  "month": 6,
  "employee_allowance_rule": {
    "allowance_id": 1,
    "amount": 30000
  }
}
```

<h3 id="従業員の手当情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|employee_id|path|integer|true|従業員ID|
|body|body|object|true|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» year|body|integer(int32)|true|対象年|
|» month|body|integer(int32)|true|対象月|
|» employee_allowance_rule|body|object|true|none|
|» » allowance_id|body|integer(int32)|true|手当ID|
|» » amount|body|integer(int32)|true|金額（数値のみ）|

> Example responses

> 200 Response

```json
{
  "employee_allowance_rule": {
    "id": 0,
    "employee_id": 0,
    "allowance_id": 0,
    "allowance_name": "string",
    "amount": 0,
    "frequency": "salary_this_month",
    "calc_type": "fixed"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の手当情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="従業員の手当情報の更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_allowance_rule|[ApiV1EmployeesAllowanceRuleSerializer](#schemaapiv1employeesallowanceruleserializer)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の手当情報の削除

<a id="opIddestroy_employee_allowance_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/allowance_rules/1?company_id=1&year=2021&month=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/employees/{employee_id}/allowance_rules/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の手当情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の手当情報の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|削除対象の手当ルールを判定する締め年|
|month|query|integer|true|削除対象の手当ルールを判定する締め月<br><br>翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br><br>例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|従業員手当ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の手当情報の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-月次勤怠締め申請">月次勤怠締め申請</h1>

月次勤怠締め申請の操作

## 月次勤怠締め申請一覧の取得

<a id="opIdget_approval_requests_monthly_attendances"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/monthly_attendances`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における月次勤怠締め申請情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="月次勤怠締め申請一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|status|query|string|false|申請ステータス<br>- `draft` - 下書き<br>- `in_progress` - 申請中<br>- `approved` - 承認済<br>- `feedback` - 差戻し|
|application_number|query|integer|false|申請No|
|start_issue_date|query|string(date)|false|申請開始日|
|end_issue_date|query|string(date)|false|申請終了日|
|approver_id|query|integer|false|現在承認ステップの承認者のユーザーID<br><br>approver_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません<br>|
|applicant_id|query|integer|false|申請者のユーザーID|
|start_target_date|query|string(date)|false|対象開始日|
|end_target_date|query|string(date)|false|対象終了日|
|passed_auto_check|query|boolean|false|自動チェック結果<br>- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。<br>- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。<br>- キーごと指定しない場合、すべての申請を返却します。|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

> Example responses

> 200 Response

```json
{
  "monthly_attendances": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "proxy_applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "2022-02-01",
      "issue_date": "1970-01-01",
      "status": "in_progress",
      "passed_auto_check": true
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1MonthlyAttendanceIndexResponse](#schemaapiv1monthlyattendanceindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 月次勤怠締め申請の作成

<a id="opIdcreate_approval_requests_monthly_attendance"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_year": 2022,
    "target_month": 1,
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`POST /api/v1/approval_requests/monthly_attendances`

<h2 id="">概要</h2>
<p>指定した事業所の月次勤怠締め申請を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_year": 2022,
  "target_month": 1,
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="月次勤怠締め申請の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1MonthlyAttendanceCreateRequest](#schemaapiv1monthlyattendancecreaterequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_year|body|integer(int32)|true|対象年（必須）|
|» target_month|body|integer(int32)|true|対象月（必須）|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 201 Response

```json
{
  "monthly_attendance": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "2022-02-01",
    "issue_date": "1970-01-01",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1MonthlyAttendanceResponse](#schemaapiv1monthlyattendanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 月次勤怠締め申請の取得

<a id="opIdget_approval_requests_monthly_attendance"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/monthly_attendances/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の月次勤怠締め申請情報を取得します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="月次勤怠締め申請の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|id|path|integer|true|月次勤怠締め申請ID|

> Example responses

> 200 Response

```json
{
  "monthly_attendance": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "2022-02-01",
    "issue_date": "1970-01-01",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1MonthlyAttendanceResponse](#schemaapiv1monthlyattendanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 月次勤怠締め申請の更新

<a id="opIdupdate_approval_requests_monthly_attendance"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`PUT /api/v1/approval_requests/monthly_attendances/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の月次勤怠締め申請情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="月次勤怠締め申請の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|月次勤怠締め申請ID|
|body|body|[ApiV1MonthlyAttendanceUpdateRequest](#schemaapiv1monthlyattendanceupdaterequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 200 Response

```json
{
  "monthly_attendance": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "2022-02-01",
    "issue_date": "1970-01-01",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1MonthlyAttendanceResponse](#schemaapiv1monthlyattendanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 月次勤怠締め申請の削除

<a id="opIddestroy_approval_requests_monthly_attendance"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/approval_requests/monthly_attendances/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の月次勤怠締め申請情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="月次勤怠締め申請の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|月次勤怠締め申請ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 月次勤怠締め申請の承認操作

<a id="opIdaction_approval_requests_monthly_attendance"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/monthly_attendances/1/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_action": "approve",
    "target_round": 1,
    "target_step_id": 1,
    "next_approver_id": 1
  }'
```

`POST /api/v1/approval_requests/monthly_attendances/{id}/actions`

<h2 id="">概要</h2>
<p>指定した事業所の月次勤怠締め申請情報を承認操作します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

<h3 id="月次勤怠締め申請の承認操作-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|月次勤怠締め申請ID|
|body|body|[ApiV1ApprovalActionRequest](#schemaapiv1approvalactionrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» approval_action|body|string|true|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|» target_round|body|integer(int32) \| null|true|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|» target_step_id|body|integer(int32) \| null|true|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|» next_approver_id|body|integer(int32) \| null|false|次のステップの承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» approval_action|approve|
|» approval_action|cancel|
|» approval_action|feedback|
|» approval_action|force_feedback|

> Example responses

> 201 Response

```json
{
  "monthly_attendance": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "2022-02-01",
    "issue_date": "1970-01-01",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="月次勤怠締め申請の承認操作-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1MonthlyAttendanceResponse](#schemaapiv1monthlyattendanceresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-勤務時間修正申請">勤務時間修正申請</h1>

勤務時間修正申請の操作

## 勤務時間修正申請一覧の取得

<a id="opIdget_approval_requests_work_times"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/work_times?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/work_times`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における勤務時間修正申請情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="勤務時間修正申請一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|status|query|string|false|申請ステータス<br>- `draft` - 下書き<br>- `in_progress` - 申請中<br>- `approved` - 承認済<br>- `feedback` - 差戻し|
|application_number|query|integer|false|申請No|
|start_issue_date|query|string(date)|false|申請開始日|
|end_issue_date|query|string(date)|false|申請終了日|
|approver_id|query|integer|false|現在承認ステップの承認者のユーザーID<br>approver_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません<br>|
|applicant_id|query|integer|false|申請者のユーザーID|
|start_target_date|query|string(date)|false|対象開始日|
|end_target_date|query|string(date)|false|対象終了日|
|passed_auto_check|query|boolean|false|自動チェック結果<br>- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。<br>- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。<br>- キーごと指定しない場合、すべての申請を返却します。|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

> Example responses

> 200 Response

```json
{
  "work_times": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "clear_work_time": true,
      "clock_in_at": "12:00",
      "clock_out_at": "23:59",
      "work_records": [
        {
          "clock_in_at": "12:00",
          "clock_out_at": "23:59"
        }
      ],
      "lateness_mins": 0,
      "early_leaving_mins": 0,
      "break_records": [
        {
          "clock_in_at": "12:00",
          "clock_out_at": "23:59"
        }
      ],
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "passed_auto_check": true,
      "proxy_applicant_id": 1
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤務時間修正申請一覧の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_times|[[ApiV1WorkTimeIndexResponseParams](#schemaapiv1worktimeindexresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤務時間修正申請の作成

<a id="opIdcreate_approval_requests_work_time"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/work_times \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`POST /api/v1/approval_requests/work_times`

<h2 id="">概要</h2>
<p>指定した事業所の勤務時間修正を新規作成します。</p>

<h2 id="_2">examples</h2>
<ul>
  <li>勤務時間を修正する場合は以下のようなパラメータを指定します。
    <pre>
      <code>
        {
          "company_id": 1,
          "target_date": "2017-05-25",
          "break_records": [
            {
              "clock_in_at": "12:00:00",
              "clock_out_at": "13:00:00"
            }
          ],
          "work_records": [
            {
              "clock_in_at": "09:10:00",
              "clock_out_at": "18:20:00"
            }
          ],
          "approval_flow_route_id": 1
        }
      </code>
    </pre>
  </li>
</ul>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "1970-01-01",
  "clear_work_time": false,
  "work_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "lateness_mins": 0,
  "early_leaving_mins": 0,
  "break_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="勤務時間修正申請の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» clear_work_time|body|boolean|false|false: 勤務時間を修正する  <br>true: 勤務時間を削除する<br><br>勤務時間を削除する場合は以下のパラメータは指定しないでください。<br>- work_records<br>- lateness_mins<br>- early_leaving_mins<br>- break_records|
|» work_records|body|[object]|false|勤務時間のリスト|
|» » clock_in_at|body|string|true|開始時刻|
|» » clock_out_at|body|string|true|終了時刻|
|» lateness_mins|body|integer(int32)|false|遅刻分の時間（分単位）|
|» early_leaving_mins|body|integer(int32)|false|早退分の時間（分単位）|
|» break_records|body|[object]|false|休憩時間のリスト|
|» » clock_in_at|body|string|true|開始時刻|
|» » clock_out_at|body|string|true|終了時刻|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 201 Response

```json
{
  "work_time": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "clock_in_at": "12:00",
    "clock_out_at": "23:59",
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤務時間修正申請の作成-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_time|[ApiV1WorkTimeResponseParams](#schemaapiv1worktimeresponseparams)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤務時間修正申請の取得

<a id="opIdget_approval_requests_work_time"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/work_times/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/work_times/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の勤務時間修正申請情報を取得します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="勤務時間修正申請の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|id|path|integer|true|勤務時間修正申請ID|

> Example responses

> 200 Response

```json
{
  "work_time": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "clock_in_at": "12:00",
    "clock_out_at": "23:59",
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤務時間修正申請の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_time|[ApiV1WorkTimeResponseParams](#schemaapiv1worktimeresponseparams)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤務時間修正申請の更新

<a id="opIdupdate_approval_requests_work_time"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/work_times/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`PUT /api/v1/approval_requests/work_times/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の勤務時間修正申請情報を更新します。</p>

<h2 id="_2">examples</h2>
<ul>
  <li>勤務時間を修正する場合は以下のようなパラメータを指定します。
    <pre>
      <code>
        {
          "company_id": 1,
          "target_date": "2017-05-25",
          "break_records": [
            {
              "clock_in_at": "12:00:00",
              "clock_out_at": "13:00:00"
            }
          ],
          "work_records": [
            {
              "clock_in_at": "09:10:00",
              "clock_out_at": "18:20:00"
            }
          ],
          "approval_flow_route_id": 1
        }
      </code>
    </pre>
  </li>
</ul>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "1970-01-01",
  "clear_work_time": false,
  "work_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "lateness_mins": 0,
  "early_leaving_mins": 0,
  "break_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="勤務時間修正申請の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|勤務時間修正申請ID|
|body|body|object|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» clear_work_time|body|boolean|false|false: 勤務時間を修正する  <br>true: 勤務時間を削除する<br><br>勤務時間を削除する場合は以下のパラメータは指定しないでください。<br>- work_records<br>- lateness_mins<br>- early_leaving_mins<br>- break_records|
|» work_records|body|[object]|false|勤務時間のリスト|
|» » clock_in_at|body|string|true|開始時刻|
|» » clock_out_at|body|string|true|終了時刻|
|» lateness_mins|body|integer(int32)|false|遅刻分の時間（分単位）|
|» early_leaving_mins|body|integer(int32)|false|早退分の時間（分単位）|
|» break_records|body|[object]|false|休憩時間のリスト|
|» » clock_in_at|body|string|true|開始時刻|
|» » clock_out_at|body|string|true|終了時刻|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 200 Response

```json
{
  "work_time": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "clock_in_at": "12:00",
    "clock_out_at": "23:59",
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤務時間修正申請の更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_time|[ApiV1WorkTimeResponseParams](#schemaapiv1worktimeresponseparams)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤務時間修正申請の削除

<a id="opIddestroy_approval_requests_work_time"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/work_times/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/approval_requests/work_times/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の勤務時間修正申請情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="勤務時間修正申請の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|勤務時間修正申請ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 勤務時間修正申請の承認操作

<a id="opIdaction_approval_requests_work_time"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/work_times/1/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_action": "approve",
    "target_round": 1,
    "target_step_id": 1,
    "next_approver_id": 1
  }'
```

`POST /api/v1/approval_requests/work_times/{id}/actions`

<h2 id="">概要</h2>
<p>指定した事業所の勤務時間修正申請情報を承認操作します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

<h3 id="勤務時間修正申請の承認操作-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|勤務時間修正申請ID|
|body|body|[ApiV1ApprovalActionRequest](#schemaapiv1approvalactionrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» approval_action|body|string|true|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|» target_round|body|integer(int32) \| null|true|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|» target_step_id|body|integer(int32) \| null|true|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|» next_approver_id|body|integer(int32) \| null|false|次のステップの承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» approval_action|approve|
|» approval_action|cancel|
|» approval_action|feedback|
|» approval_action|force_feedback|

> Example responses

> 201 Response

```json
{
  "work_time": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "clear_work_time": false,
    "clock_in_at": "12:00",
    "clock_out_at": "23:59",
    "work_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "lateness_mins": 0,
    "early_leaving_mins": 0,
    "break_records": [
      {
        "clock_in_at": "12:00",
        "clock_out_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="勤務時間修正申請の承認操作-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="勤務時間修正申請の承認操作-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|work_time|[ApiV1WorkTimeResponseParams](#schemaapiv1worktimeresponseparams)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-有給休暇申請">有給休暇申請</h1>

有給休暇申請の操作

## 有給休暇申請一覧の取得

<a id="opIdget_approval_requests_paid_holidays"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/paid_holidays`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における有給休暇申請情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="有給休暇申請一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|status|query|string|false|申請ステータス<br>- `draft` - 下書き<br>- `in_progress` - 申請中<br>- `approved` - 承認済<br>- `feedback` - 差戻し|
|application_number|query|integer|false|申請No|
|start_issue_date|query|string(date)|false|申請開始日|
|end_issue_date|query|string(date)|false|申請終了日|
|approver_id|query|integer|false|現在承認ステップの承認者のユーザーID<br><br>approver_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません<br>|
|applicant_id|query|integer|false|申請者のユーザーID|
|start_target_date|query|string(date)|false|対象開始日|
|end_target_date|query|string(date)|false|対象終了日|
|passed_auto_check|query|boolean|false|自動チェック結果<br>- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。<br>- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。<br>- キーごと指定しない場合、すべての申請を返却します。|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

> Example responses

> 200 Response

```json
{
  "paid_holidays": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "values": [
        {
          "type": "half",
          "start_at": "12:00",
          "end_at": "23:59"
        }
      ],
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true,
      "proxy_applicant_id": 1
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1PaidHolidayIndexResponse](#schemaapiv1paidholidayindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 有給休暇申請の作成

<a id="opIdcreate_approval_requests_paid_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "2018-07-31",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`POST /api/v1/approval_requests/paid_holidays`

<h2 id="">概要</h2>
<p>指定した事業所の有給休暇申請を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "values": [
    {
      "type": "half",
      "start_at": "12:00",
      "end_at": "23:59"
    }
  ],
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="有給休暇申請の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1PaidHolidayRequest](#schemaapiv1paidholidayrequest) \| [LegacyApiV1PaidHolidayRequest](#schemalegacyapiv1paidholidayrequest)|false|none|
|» *anyOf*|body|[ApiV1PaidHolidayRequest](#schemaapiv1paidholidayrequest)|false|none|
|» *anyOf*|body|[LegacyApiV1PaidHolidayRequest](#schemalegacyapiv1paidholidayrequest)|false|none|

> Example responses

> 201 Response

```json
{
  "paid_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1PaidHolidayResponse](#schemaapiv1paidholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 有給休暇申請の取得

<a id="opIdget_approval_requests_paid_holiday"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/paid_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の有給休暇申請情報を取得します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="有給休暇申請の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|id|path|integer|true|有給休暇申請ID|

> Example responses

> 200 Response

```json
{
  "paid_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1PaidHolidayResponse](#schemaapiv1paidholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 有給休暇申請の更新

<a id="opIdupdate_approval_requests_paid_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "2018-07-31",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`PUT /api/v1/approval_requests/paid_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の有給休暇申請情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "values": [
    {
      "type": "half",
      "start_at": "12:00",
      "end_at": "23:59"
    }
  ],
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="有給休暇申請の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|有給休暇申請ID|
|body|body|[ApiV1PaidHolidayRequest](#schemaapiv1paidholidayrequest) \| [LegacyApiV1PaidHolidayRequest](#schemalegacyapiv1paidholidayrequest)|false|none|
|» *anyOf*|body|[ApiV1PaidHolidayRequest](#schemaapiv1paidholidayrequest)|false|none|
|» *anyOf*|body|[LegacyApiV1PaidHolidayRequest](#schemalegacyapiv1paidholidayrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "paid_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1PaidHolidayResponse](#schemaapiv1paidholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 有給休暇申請の削除

<a id="opIddestroy_approval_requests_paid_holiday"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/approval_requests/paid_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の有給休暇申請情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="有給休暇申請の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|有給休暇申請ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 有給休暇申請の承認操作

<a id="opIdaction_approval_requests_paid_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/paid_holidays/1/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_action": "approve",
    "target_round": 1,
    "target_step_id": 1,
    "next_approver_id": 1
  }'
```

`POST /api/v1/approval_requests/paid_holidays/{id}/actions`

<h2 id="">概要</h2>
<p>指定した事業所の有給休暇申請情報を承認操作します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>全休の有給休暇申請は承認されると申請者の有給の残数が減ります。</li>
  <li>半休と時間休の有給休暇申請は承認されても申請者の有給の残数が減らない場合があります。以下の条件を満たす場合、申請者の有給の残数が減ります。</li>
  <ul>
    <li>申請承認後、申請者が申請の対象日に出勤打刻と退勤打刻をする。</li>
    <li>申請承認前に、申請者が申請の対象日に勤怠を登録している。</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

<h3 id="有給休暇申請の承認操作-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|有給休暇申請ID|
|body|body|[ApiV1ApprovalActionRequest](#schemaapiv1approvalactionrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» approval_action|body|string|true|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|» target_round|body|integer(int32) \| null|true|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|» target_step_id|body|integer(int32) \| null|true|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|» next_approver_id|body|integer(int32) \| null|false|次のステップの承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» approval_action|approve|
|» approval_action|cancel|
|» approval_action|feedback|
|» approval_action|force_feedback|

> Example responses

> 201 Response

```json
{
  "paid_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="有給休暇申請の承認操作-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1PaidHolidayResponse](#schemaapiv1paidholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-特別休暇申請">特別休暇申請</h1>

特別休暇申請の操作

## 特別休暇申請一覧の取得

<a id="opIdget_approval_requests_special_holidays"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/special_holidays`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における特別休暇申請情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="特別休暇申請一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|status|query|string|false|申請ステータス<br>- `draft` - 下書き<br>- `in_progress` - 申請中<br>- `approved` - 承認済<br>- `feedback` - 差戻し|
|application_number|query|integer|false|申請No|
|start_issue_date|query|string(date)|false|申請開始日|
|end_issue_date|query|string(date)|false|申請終了日|
|approver_id|query|integer|false|現在承認ステップの承認者のユーザーID<br><br>approver_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません<br>|
|applicant_id|query|integer|false|申請者のユーザーID|
|start_target_date|query|string(date)|false|対象開始日|
|end_target_date|query|string(date)|false|対象終了日|
|passed_auto_check|query|boolean|false|自動チェック結果<br>- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。<br>- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。<br>- キーごと指定しない場合、すべての申請を返却します。|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

> Example responses

> 200 Response

```json
{
  "special_holidays": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "special_holiday_setting_id": 1,
      "special_holiday_name": "特別休暇名称",
      "holiday_type": "half",
      "start_at": "12:00",
      "end_at": "23:59",
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true,
      "proxy_applicant_id": 1
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1specialHolidayIndexResponse](#schemaapiv1specialholidayindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 特別休暇申請の作成

<a id="opIdcreate_approval_requests_special_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "2018-07-31",
    "special_holiday_setting_id": 1,
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`POST /api/v1/approval_requests/special_holidays`

<h2 id="">概要</h2>
<p>指定した事業所の特別休暇申請を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "special_holiday_setting_id": 1,
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="特別休暇申請の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1specialHolidayRequest](#schemaapiv1specialholidayrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» special_holiday_setting_id|body|integer(int32)|true|特別休暇設定ID（必須）|
|» holiday_type|body|string|true|取得単位（必須）（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）|
|» start_at|body|string|false|取得予定開始時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|» end_at|body|string|false|取得予定終了時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» holiday_type|full|
|» holiday_type|half|
|» holiday_type|morning|
|» holiday_type|afternoon|
|» holiday_type|hour|

> Example responses

> 201 Response

```json
{
  "special_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "special_holiday_setting_id": 1,
    "special_holiday_name": "特別休暇名称",
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1specialHolidayResponse](#schemaapiv1specialholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 特別休暇申請の取得

<a id="opIdget_approval_requests_special_holiday"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/special_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の特別休暇申請情報を取得します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="特別休暇申請の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|id|path|integer|true|特別休暇申請ID|

> Example responses

> 200 Response

```json
{
  "special_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "special_holiday_setting_id": 1,
    "special_holiday_name": "特別休暇名称",
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1specialHolidayResponse](#schemaapiv1specialholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 特別休暇申請の更新

<a id="opIdupdate_approval_requests_special_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "2018-07-31",
    "special_holiday_setting_id": 1,
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`PUT /api/v1/approval_requests/special_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の特別休暇申請情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "special_holiday_setting_id": 1,
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="特別休暇申請の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|特別休暇申請ID|
|body|body|[ApiV1specialHolidayRequest](#schemaapiv1specialholidayrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» special_holiday_setting_id|body|integer(int32)|true|特別休暇設定ID（必須）|
|» holiday_type|body|string|true|取得単位（必須）（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）|
|» start_at|body|string|false|取得予定開始時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|» end_at|body|string|false|取得予定終了時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» holiday_type|full|
|» holiday_type|half|
|» holiday_type|morning|
|» holiday_type|afternoon|
|» holiday_type|hour|

> Example responses

> 200 Response

```json
{
  "special_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "special_holiday_setting_id": 1,
    "special_holiday_name": "特別休暇名称",
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1specialHolidayResponse](#schemaapiv1specialholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 特別休暇申請の削除

<a id="opIddestroy_approval_requests_special_holiday"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/approval_requests/special_holidays/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の特別休暇申請情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="特別休暇申請の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|特別休暇申請ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 特別休暇申請の承認操作

<a id="opIdaction_approval_requests_special_holiday"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/special_holidays/1/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_action": "approve",
    "target_round": 1,
    "target_step_id": 1,
    "next_approver_id": 1
  }'
```

`POST /api/v1/approval_requests/special_holidays/{id}/actions`

<h2 id="">概要</h2>
<p>指定した事業所の特別休暇申請情報を承認操作します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>全休の特別休暇申請は承認されると申請者の特別休暇の残数が減ります。</li>
  <li>半休と時間休の特別休暇申請は承認されても申請者の特別休暇の残数が減らない場合があります。以下の条件を満たす場合、申請者の特別休暇の残数が減ります。</li>
  <ul>
    <li>申請承認後、申請者が申請の対象日に出勤打刻と退勤打刻をする。</li>
    <li>申請承認前に、申請者が申請の対象日に勤怠を登録している。</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

<h3 id="特別休暇申請の承認操作-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|特別休暇申請ID|
|body|body|[ApiV1ApprovalActionRequest](#schemaapiv1approvalactionrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» approval_action|body|string|true|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|» target_round|body|integer(int32) \| null|true|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|» target_step_id|body|integer(int32) \| null|true|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|» next_approver_id|body|integer(int32) \| null|false|次のステップの承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» approval_action|approve|
|» approval_action|cancel|
|» approval_action|feedback|
|» approval_action|force_feedback|

> Example responses

> 201 Response

```json
{
  "special_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "special_holiday_setting_id": 1,
    "special_holiday_name": "特別休暇名称",
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="特別休暇申請の承認操作-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1specialHolidayResponse](#schemaapiv1specialholidayresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-残業申請">残業申請</h1>

残業申請の操作

## 残業申請一覧の取得

<a id="opIdget_approval_requests_overtime_works"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/overtime_works`

<h2 id="">概要</h2>
<p>指定した事業所の指定日付時点における残業申請情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="残業申請一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|status|query|string|false|申請ステータス<br>- `draft` - 下書き<br>- `in_progress` - 申請中<br>- `approved` - 承認済<br>- `feedback` - 差戻し|
|application_number|query|integer|false|申請No|
|start_issue_date|query|string(date)|false|申請開始日|
|end_issue_date|query|string(date)|false|申請終了日|
|approver_id|query|integer|false|現在承認ステップの承認者のユーザーID<br><br>approver_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません<br>|
|applicant_id|query|integer|false|申請者のユーザーID|
|start_target_date|query|string(date)|false|対象開始日|
|end_target_date|query|string(date)|false|対象終了日|
|passed_auto_check|query|boolean|false|自動チェック結果<br>- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。<br>- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。<br>- キーごと指定しない場合、すべての申請を返却します。|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

> Example responses

> 200 Response

```json
{
  "overtime_works": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "proxy_applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "start_at": "12:00",
      "end_at": "23:59",
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1OvertimeWorkIndexResponse](#schemaapiv1overtimeworkindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請の作成

<a id="opIdcreate_approval_requests_overtime_work"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "early_work_start_at": "12:00",
    "early_work_end_at": "23:59",
    "overtime_work_start_at": "12:00",
    "overtime_work_end_at": "23:59",
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`POST /api/v1/approval_requests/overtime_works`

<h2 id="">概要</h2>
<p>指定した事業所の残業申請を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請の内容を勤怠に反映させるかの設定次第でリクエスト時に指定するパラメータが異なります。残業申請に必要な設定情報の取得APIで確認してください。</li>
  <ul>
    <li>勤怠に反映する設定の場合</li>
    <ul>
      <li>設定情報の取得APIで受け取った値を用いてパラメータを指定します。</li>
      <li>早出（early_work_start_at, early_work_end_at）か残業（overtime_work_start_at, overtime_work_end_at）のどちらか、もしくは両方を指定してください。</li>
      <ul>
        <li>早出・残業両方とも指定しなかった場合は取り消し申請となります。対象日の承認済み残業申請は全て取り消され、打刻データがあれば勤怠に反映し直します。</li>
      </ul>
      <li>早出の終了時刻（early_work_end_at）は所定の出勤時刻と同じ、残業の開始時刻（overtime_work_start_at）は所定の退勤時刻と同じ時刻を指定する必要があります。</li>
      <li>早出・残業の時刻に指定できる分の単位はそれぞれ設定（early_work_mins_unit, overtime_work_mins_unit）の通りです。</li>
    </ul>
    <li>勤怠に反映しない設定の場合</li>
    <ul>
      <li>残業開始（start_at）と残業終了（end_at）を指定してください。</li>
    </ul>
  </ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "1970-01-01",
  "start_at": "12:00",
  "end_at": "23:59",
  "early_work_start_at": "12:00",
  "early_work_end_at": "23:59",
  "overtime_work_start_at": "12:00",
  "overtime_work_end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="残業申請の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiV1OvertimeWorkRequest](#schemaapiv1overtimeworkrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» start_at|body|string|false|取得予定開始時間|
|» end_at|body|string|false|取得予定終了時間|
|» early_work_start_at|body|string \| null|false|実績反映ありの早出申請の開始予定時刻  <br>実績反映ありの早出申請する場合は必須|
|» early_work_end_at|body|string \| null|false|実績反映ありの早出申請の終了予定時刻  <br>実績反映ありの早出申請する場合は必須|
|» overtime_work_start_at|body|string \| null|false|実績反映ありの残業申請の開始予定時刻  <br>実績反映ありの残業申請する場合は必須|
|» overtime_work_end_at|body|string \| null|false|実績反映ありの残業申請の終了予定時刻  <br>実績反映ありの残業申請する場合は必須|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 201 Response

```json
{
  "overtime_work": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1OvertimeWorkResponse](#schemaapiv1overtimeworkresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請の取得

<a id="opIdget_approval_requests_overtime_work"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/overtime_works/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の残業申請情報を取得します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

<h3 id="残業申請の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|id|path|integer|true|残業申請ID|

> Example responses

> 200 Response

```json
{
  "overtime_work": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1OvertimeWorkResponse](#schemaapiv1overtimeworkresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請の更新

<a id="opIdupdate_approval_requests_overtime_work"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "early_work_start_at": "12:00",
    "early_work_end_at": "23:59",
    "overtime_work_start_at": "12:00",
    "overtime_work_end_at": "23:59",
    "comment": "申請理由",
    "approval_flow_route_id": 1,
    "approver_id": 1
  }'
```

`PUT /api/v1/approval_requests/overtime_works/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の残業申請情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請の内容を勤怠に反映させるかの設定次第でリクエスト時に指定するパラメータが異なります。残業申請に必要な設定情報の取得APIで確認してください。</li>
  <ul>
    <li>勤怠に反映する設定の場合</li>
    <ul>
      <li>設定情報の取得APIで受け取った値を用いてパラメータを指定します。</li>
      <li>早出（early_work_start_at, early_work_end_at）か残業（overtime_work_start_at, overtime_work_end_at）のどちらか、もしくは両方を指定してください。</li>
      <ul>
        <li>早出・残業両方とも指定しなかった場合は取り消し申請となります。対象日の承認済み残業申請は全て取り消され、打刻データがあれば勤怠に反映し直します。</li>
      </ul>
      <li>早出の終了時刻（early_work_end_at）は所定の出勤時刻と同じ、残業の開始時刻（overtime_work_start_at）は所定の退勤時刻と同じ時刻を指定する必要があります。</li>
      <li>早出・残業の時刻に指定できる分の単位はそれぞれ設定（early_work_mins_unit, overtime_work_mins_unit）の通りです。</li>
    </ul>
    <li>勤怠に反映しない設定の場合</li>
    <ul>
      <li>残業開始（start_at）と残業終了（end_at）を指定してください。</li>
    </ul>
  </ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "target_date": "1970-01-01",
  "start_at": "12:00",
  "end_at": "23:59",
  "early_work_start_at": "12:00",
  "early_work_end_at": "23:59",
  "overtime_work_start_at": "12:00",
  "overtime_work_end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

<h3 id="残業申請の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|残業申請ID|
|body|body|[ApiV1OvertimeWorkRequest](#schemaapiv1overtimeworkrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID（必須）|
|» target_date|body|string(date)|true|対象日（必須）|
|» start_at|body|string|false|取得予定開始時間|
|» end_at|body|string|false|取得予定終了時間|
|» early_work_start_at|body|string \| null|false|実績反映ありの早出申請の開始予定時刻  <br>実績反映ありの早出申請する場合は必須|
|» early_work_end_at|body|string \| null|false|実績反映ありの早出申請の終了予定時刻  <br>実績反映ありの早出申請する場合は必須|
|» overtime_work_start_at|body|string \| null|false|実績反映ありの残業申請の開始予定時刻  <br>実績反映ありの残業申請する場合は必須|
|» overtime_work_end_at|body|string \| null|false|実績反映ありの残業申請の終了予定時刻  <br>実績反映ありの残業申請する場合は必須|
|» comment|body|string|false|申請理由|
|» approval_flow_route_id|body|integer(int32)|true|申請経路ID（必須）|
|» approver_id|body|integer(int32)|false|承認者のユーザーID|

> Example responses

> 200 Response

```json
{
  "overtime_work": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1OvertimeWorkResponse](#schemaapiv1overtimeworkresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請の削除

<a id="opIddestroy_approval_requests_overtime_work"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/approval_requests/overtime_works/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の残業申請情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="残業申請の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|残業申請ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請の承認操作

<a id="opIdaction_approval_requests_overtime_work"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works/1/actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "approval_action": "approve",
    "target_round": 1,
    "target_step_id": 1,
    "next_approver_id": 1
  }'
```

`POST /api/v1/approval_requests/overtime_works/{id}/actions`

<h2 id="">概要</h2>
<p>指定した事業所の残業申請情報を承認操作します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>
  <ul>
    <li>status: draft</li>
    <li>approval_flow_logs.action: cancel</li>
  </ul>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

<h3 id="残業申請の承認操作-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|残業申請ID|
|body|body|[ApiV1ApprovalActionRequest](#schemaapiv1approvalactionrequest)|false|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» approval_action|body|string|true|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|» target_round|body|integer(int32) \| null|true|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|» target_step_id|body|integer(int32) \| null|true|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|» next_approver_id|body|integer(int32) \| null|false|次のステップの承認者のユーザーID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» approval_action|approve|
|» approval_action|cancel|
|» approval_action|feedback|
|» approval_action|force_feedback|

> Example responses

> 201 Response

```json
{
  "overtime_work": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請の承認操作-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1OvertimeWorkResponse](#schemaapiv1overtimeworkresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 残業申請に必要な設定情報の取得

<a id="opIdget_approval_requests_overtime_work_setting"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_requests/overtime_works/setting?company_id=1&date=2018-08-01' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_requests/overtime_works/setting`

<h2 id="">概要</h2>
<p>指定した従業員・日付の残業申請に必要な設定情報を取得します。</p>
<ul>
  <li>取得できる設定の一覧</li>
  <ul>
    <li>勤怠カレンダーに申請を反映するかどうかの設定</li>
    <ul>
      <li>この設定により、残業申請の作成や更新のリクエスト時に使用するパラメータが変わります。詳細は、残業申請の作成や更新の仕様を参照してください。</li>
    </ul>
    <li>所定の出退勤時間</li>
    <ul>
      <li>反映あり申請の場合、残業申請の作成や更新のリクエスト時に所定の出退勤時間が必要になります。詳細は、残業申請の作成や更新の仕様を参照してください。</li>
    </ul>
    <li>申請で指定できる分の単位</li>
    <ul>
      <li>反映あり申請の場合、勤務賃金設定の申請の単位設定によって、残業申請できる分単位が変わります。</li>
    </ul>
  </ul>
</ul>

<h3 id="残業申請に必要な設定情報の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|date|query|string|true|対象日(YYYY-MM-DD)(例:2018-08-01)<br>- 申請の対象日を指定してください。|

> Example responses

> 200 Response

```json
{
  "start_at": "12:00",
  "end_at": "23:59",
  "should_reflect_in_work_record": true,
  "early_work_mins_unit": [
    [
      0,
      15,
      30,
      45
    ]
  ],
  "overtime_work_mins_unit": [
    [
      0,
      30
    ]
  ]
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="残業申請に必要な設定情報の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="残業申請に必要な設定情報の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_at|string(date-time)|false|none|所定出勤時刻|
|end_at|string(date-time)|false|none|所定退勤時刻|
|should_reflect_in_work_record|boolean|true|none|勤務カレンダーに反映するかどうか|
|early_work_mins_unit|[integer]|false|none|早出に指定できる分の単位|
|overtime_work_mins_unit|[integer]|false|none|残業に指定できる分の単位|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-申請経路">申請経路</h1>

申請経路の操作

## 申請経路一覧の取得

<a id="opIdget_approval_flow_routes"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_flow_routes?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_flow_routes`

<h2 id="">概要</h2>
<p>指定した事業所の申請経路一覧を取得する。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>指定した事業所の従業員に紐づくユーザーのみ実行可能です。</li>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="申請経路一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|included_user_id|query|integer|false|経路に含まれるユーザーのユーザーID|
|usage|query|string|false|申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）<br>- `AttendanceWorkflow` - 勤怠申請<br>- `PersonalDataWorkflow` - 身上変更申請|

#### Enumerated Values

|Parameter|Value|
|---|---|
|usage|AttendanceWorkflow|
|usage|PersonalDataWorkflow|

> Example responses

> 200 Response

```json
{
  "approval_flow_routes": [
    {
      "id": 1,
      "name": "申請経路",
      "description": "申請経路の説明",
      "user_id": 1,
      "definition_system": true,
      "first_step_id": 1,
      "usages": [
        "AttendanceWorkflow"
      ]
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="申請経路一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1ApprovalFlowRoutesIndexResponse](#schemaapiv1approvalflowroutesindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 申請経路の取得

<a id="opIdget_approval_flow_route"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/approval_flow_routes/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/approval_flow_routes/{id}`

<h2 id="">概要</h2>
<p>指定した事業所の申請経路を取得する。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>指定した事業所の従業員に紐づくユーザーのみ実行可能です。</li>
  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>
  <ul>
    <li>役職指定（申請者の所属部門）</li>
    <li>役職指定（申請時に部門指定）</li>
    <li>部門および役職指定</li>
  </ul>
</ul>

<h3 id="申請経路の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|申請経路ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "approval_flow_route": {
    "id": 1,
    "name": "申請経路",
    "description": "申請経路の説明",
    "user_id": 1,
    "definition_system": true,
    "first_step_id": 1,
    "usages": [
      "AttendanceWorkflow"
    ],
    "steps": [
      {
        "id": 1,
        "next_step_id": 2,
        "resource_type": "predefined_user",
        "user_ids": [
          3
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="申請経路の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1ApprovalFlowRouteResponse](#schemaapiv1approvalflowrouteresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-年末調整">年末調整</h1>

年末調整の操作

## 年末調整対象一覧の取得

<a id="opIdget_yearend_adjustment_employees"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/employees?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/yearend_adjustments/{year}/employees`


指定した年の年末調整対象のリスト返します。

<h3 id="年末調整対象一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|path|integer|true|年末調整対象を取得したい年|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

> Example responses

> 200 Response

```json
{
  "employees": [
    {
      "employee_id": 0,
      "num": "string",
      "employee_display_name": "string",
      "is_not_adjust": true,
      "status": "initialized"
    }
  ],
  "total_count": 0
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整対象一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.index_response](#schemaapiv1employeeyearendadjustmentcontroller.index_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整の取得

<a id="opIdget_yearend_adjustment_employee"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/employees/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/yearend_adjustments/{year}/employees/{employee_id}`

指定した年、従業員IDの年末調整の詳細内容を返します。<br>
年末調整対象外の従業員は、本人情報、給与・賞与、前職情報のみが取得できます。

<h3 id="年末調整の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|path|integer|true|年末調整を取得したい年|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee": {
    "employee_id": 0,
    "num": "A-001",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "employment_type": "string",
    "title": "string",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎",
    "is_calc_income_tax": true
  },
  "dependents": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
    }
  ],
  "insurances": [
    {
      "id": 1,
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "certification_type": "xml",
      "is_group_insurance": true
    }
  ],
  "housing_loan_deduction": 500000,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
    }
  ],
  "payroll_and_bonus": {
    "fixed_payroll": 10000000,
    "fixed_payroll_deduction": 1000000,
    "fixed_payroll_income_tax": 1000000,
    "fixed_bonus": 10000000,
    "fixed_bonus_deduction": 1000000,
    "fixed_bonus_income_tax": 1000000,
    "unentered_payroll_amount": 500000,
    "unentered_payroll_deduction_amount": 500000,
    "unentered_payroll_income_tax_amount": 500000,
    "unentered_bonus_amount": 500000,
    "unentered_bonus_deduction_amount": 500000,
    "unentered_bonus_income_tax_amount": 500000
  },
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.show_response](#schemaapiv1employeeyearendadjustmentcontroller.show_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員情報の更新

<a id="opIdput_yearend_adjustment_employee"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/employees/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "employee": {
      "last_name": "山田",
      "first_name": "太郎",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "タロウ",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "payer_type": "kou",
      "widow_type": "na",
      "disability_type": "na",
      "married": true,
      "is_working_student": true,
      "is_foreigner": true,
      "other_company_revenue": 1000000,
      "all_other_income": 1000000,
      "householder": "myself",
      "householder_name": "山田 太郎"
    }
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/employees/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の姓名・住所などを更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "employee": {
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎"
  }
}
```

<h3 id="年末調整従業員情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_employee_body](#schemaapiv1employeeyearendadjustmentcontroller.update_employee_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» employee|body|[ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentemployeeupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employees": {
    "employee_id": 0,
    "num": "A-001",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "employment_type": "string",
    "title": "string",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎",
    "is_calc_income_tax": true
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_employee_response](#schemaapiv1employeeyearendadjustmentcontroller.update_employee_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員給与・賞与の更新

<a id="opIdput_yearend_adjustment_payroll_and_bonus"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/payroll_and_bonus/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "payroll_and_bonus": {
      "unentered_payroll_amount": 1000000,
      "unentered_payroll_deduction_amount": 1000000,
      "unentered_payroll_income_tax_amount": 1000000,
      "unentered_bonus_amount": 1000000,
      "unentered_bonus_deduction_amount": 1000000,
      "unentered_bonus_income_tax_amount": 1000000
    }
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/payroll_and_bonus/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の給与・賞与を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "payroll_and_bonus": {
    "unentered_payroll_amount": 1000000,
    "unentered_payroll_deduction_amount": 1000000,
    "unentered_payroll_income_tax_amount": 1000000,
    "unentered_bonus_amount": 1000000,
    "unentered_bonus_deduction_amount": 1000000,
    "unentered_bonus_income_tax_amount": 1000000
  }
}
```

<h3 id="年末調整従業員給与・賞与の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_body](#schemaapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» payroll_and_bonus|body|[ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentpayrollandbonusupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "payroll_and_bonus": {
    "fixed_payroll": 10000000,
    "fixed_payroll_deduction": 1000000,
    "fixed_payroll_income_tax": 1000000,
    "fixed_bonus": 10000000,
    "fixed_bonus_deduction": 1000000,
    "fixed_bonus_income_tax": 1000000,
    "unentered_payroll_amount": 500000,
    "unentered_payroll_deduction_amount": 500000,
    "unentered_payroll_income_tax_amount": 500000,
    "unentered_bonus_amount": 500000,
    "unentered_bonus_deduction_amount": 500000,
    "unentered_bonus_income_tax_amount": 500000
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員給与・賞与の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_response](#schemaapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整家族情報の更新

<a id="opIdput_yearend_adjustment_dependents"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/dependents/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "dependents": [
      {
        "id": 1,
        "destroy": false,
        "last_name": "山田",
        "first_name": "花子",
        "last_name_kana": "ヤマダ",
        "first_name_kana": "ハナコ",
        "relationship": "spouse",
        "birth_date": "1999-01-01",
        "social_insurance_and_tax_dependent": "social_insurance_and_tax",
        "income": 0,
        "employment_revenue": 0,
        "all_other_income": -999999999,
        "disability_type": "na",
        "residence_type": "live_in",
        "zipcode1": "141",
        "zipcode2": "0031",
        "prefecture_code": 12,
        "address": "品川区大崎1-2-2",
        "address_kana": "シナガワクオオサキ1-2-2",
        "annual_remittance_amount": 0,
        "non_resident_dependents_reason": "none",
        "is_resident_tax_only_deduction": true,
        "retirement_income": 0
      }
    ]
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/dependents/{employee_id}`

<h2 id="">概要</h2>
<p>指定した年末調整の家族情報を更新します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
  <li>idがない場合は新規作成、destroyがtrueの場合は削除になります。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "dependents": [
    {
      "id": 1,
      "destroy": false,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
    }
  ]
}
```

<h3 id="年末調整家族情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_dependents_body](#schemaapiv1employeeyearendadjustmentcontroller.update_dependents_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» dependents|body|[[ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentdependentupdaterequestserializer)]|true|家族情報|

> Example responses

> 200 Response

```json
{
  "dependents": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整家族情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_dependents_response](#schemaapiv1employeeyearendadjustmentcontroller.update_dependents_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員前職情報の更新

<a id="opIdput_yearend_adjustment_previous_job"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/previous_jobs/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "previous_job": {
      "income": 5000000,
      "deduction": 1200000,
      "withholding_tax_amount": 100000,
      "company_name": "株式会社 前職",
      "company_address": "品川区大崎1-2-2",
      "retire_date": "2022-03-31"
    }
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/previous_jobs/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の前職情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

<h3 id="年末調整従業員前職情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_previous_job_body](#schemaapiv1employeeyearendadjustmentcontroller.update_previous_job_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» previous_job|body|[ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentpreviousjobupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員前職情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_previous_job_response](#schemaapiv1employeeyearendadjustmentcontroller.update_previous_job_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員前職情報の削除

<a id="opIddestroy_yearend_adjustment_previous_job"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/previous_jobs/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/yearend_adjustments/{year}/previous_jobs/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の前職情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

<h3 id="年末調整従業員前職情報の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員前職情報の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員保険料情報の作成

<a id="opIdpost_yearend_adjustment_insurances"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/insurances/1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "insurance": {
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "is_group_insurance": true
    }
  }'
```

`POST /api/v1/yearend_adjustments/{year}/insurances/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の保険料情報を作成します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "insurance": {
    "type": "life_care_pension_insurance",
    "category": "life",
    "new_or_old": "new",
    "company_name": "freee生命保険株式会社",
    "kind_of_purpose": "利差配当付終身",
    "period": "終身",
    "policyholder_last_name": "契約",
    "policyholder_first_name": "太郎",
    "recipient_last_name": "受取",
    "recipient_first_name": "太郎",
    "recipient_relationship": "child",
    "payment_start_date": "2000-04-01",
    "amount": 1000000,
    "is_group_insurance": true
  }
}
```

<h3 id="年末調整従業員保険料情報の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|作成対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_insurance_body](#schemaapiv1employeeyearendadjustmentcontroller.update_insurance_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» insurance|body|[ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentinsuranceupdaterequestserializer)|true|none|

> Example responses

> 201 Response

```json
{
  "insurances": [
    {
      "id": 1,
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "certification_type": "xml",
      "is_group_insurance": true
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員保険料情報の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_insurance_response](#schemaapiv1employeeyearendadjustmentcontroller.update_insurance_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員保険料情報の更新

<a id="opIdput_yearend_adjustment_insurances"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/insurances/1/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "insurance": {
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "is_group_insurance": true
    }
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/insurances/{employee_id}/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の保険料情報を更新します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
  <li>certification_type="xml"の場合、recipient_first_name、recipient_last_name、recipient_relationshipのみが更新の対象となります。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "insurance": {
    "type": "life_care_pension_insurance",
    "category": "life",
    "new_or_old": "new",
    "company_name": "freee生命保険株式会社",
    "kind_of_purpose": "利差配当付終身",
    "period": "終身",
    "policyholder_last_name": "契約",
    "policyholder_first_name": "太郎",
    "recipient_last_name": "受取",
    "recipient_first_name": "太郎",
    "recipient_relationship": "child",
    "payment_start_date": "2000-04-01",
    "amount": 1000000,
    "is_group_insurance": true
  }
}
```

<h3 id="年末調整従業員保険料情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|保険料ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_insurance_body](#schemaapiv1employeeyearendadjustmentcontroller.update_insurance_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» insurance|body|[ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentinsuranceupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "insurances": [
    {
      "id": 1,
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "certification_type": "xml",
      "is_group_insurance": true
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員保険料情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_insurance_response](#schemaapiv1employeeyearendadjustmentcontroller.update_insurance_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員保険料情報の削除

<a id="opIddestroy_yearend_adjustment_insurances"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/insurances/1/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/yearend_adjustments/{year}/insurances/{employee_id}/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の保険料情報を削除します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

<h3 id="年末調整従業員保険料情報の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|保険料ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員保険料情報の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員住宅ローン控除額の更新

<a id="opIdput_yearend_adjustment_housing_loan_deduction"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/housing_loan_deductions/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "housing_loan_deduction": 1
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/housing_loan_deductions/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の住宅ローン控除額を更新します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "housing_loan_deduction": 1
}
```

<h3 id="年末調整従業員住宅ローン控除額の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|object|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» housing_loan_deduction|body|integer(int32)|true|住宅借入金等特別控除（必須）|

> Example responses

> 200 Response

```json
{
  "housing_loan_deduction": 1,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員住宅ローン控除額の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="年末調整従業員住宅ローン控除額の更新-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|housing_loan_deduction|integer(int32)|false|none|住宅借入金等特別控除|
|housing_loans|[[ApiV1EmployeeYearendAdjustmentHousingLoanSerializer](#schemaapiv1employeeyearendadjustmenthousingloanserializer)]|false|none|住宅ローン|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員住宅ローンの作成

<a id="opIdpost_yearend_adjustment_housing_loan"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/housing_loans/1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "housing_loan": {
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
    }
  }'
```

`POST /api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}`

<h2 id="">概要</h2>
<p>指定した従業員の住宅ローンを作成します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "housing_loan": {
    "residence_start_date": "2022-03-31",
    "remaining_balance_at_yearend": 5000000,
    "category": "general",
    "specific_case_type": "not_qualified"
  }
}
```

<h3 id="年末調整従業員住宅ローンの作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|作成対象年|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_housing_loan_body](#schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» housing_loan|body|[ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmenthousingloanupdaterequestserializer)|true|none|

> Example responses

> 201 Response

```json
{
  "housing_loan_deduction": 500000,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員住宅ローンの作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_housing_loan_response](#schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員住宅ローンの更新

<a id="opIdput_yearend_adjustment_housing_loan"></a>

> Code samples

```bash
curl https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/housing_loans/1/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "housing_loan": {
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
    }
  }'
```

`PUT /api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の住宅ローンを更新します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "housing_loan": {
    "residence_start_date": "2022-03-31",
    "remaining_balance_at_yearend": 5000000,
    "category": "general",
    "specific_case_type": "not_qualified"
  }
}
```

<h3 id="年末調整従業員住宅ローンの更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|住宅ローンID|
|body|body|[ApiV1EmployeeYearendAdjustmentController.update_housing_loan_body](#schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_body)|false|none|
|» company_id|body|integer(int32)|true|更新対象事業所ID（必須）|
|» housing_loan|body|[ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmenthousingloanupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "housing_loan_deduction": 500000,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員住宅ローンの更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeeYearendAdjustmentController.update_housing_loan_response](#schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 年末調整従業員住宅ローンの削除

<a id="opIddestroy_yearend_adjustment_housing_loan"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/yearend_adjustments/2000/housing_loans/1/1?company_id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の住宅ローンを削除します。</p>
<h2 id="_1">注意点</h2>
<ul>
  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>
</ul>

<h3 id="年末調整従業員住宅ローンの削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|path|integer|true|更新対象年|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|住宅ローンID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="年末調整従業員住宅ローンの削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-従業員控除">従業員控除</h1>

## 従業員の控除情報の取得

<a id="opIdget_employee_deduction_rules"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/deduction_rules?company_id=1&year=2021&month=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/employees/{employee_id}/deduction_rules`

<h2 id="">概要</h2>
<p>指定した従業員の控除情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の控除情報の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|従業員情報を取得したい年|
|month|query|integer|true|従業員情報を取得したい月<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br><br>翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>|
|employee_id|path|integer|true|従業員ID|

> Example responses

> 200 Response

```json
{
  "employee_deduction_rules": [
    {
      "id": 0,
      "employee_id": 0,
      "deduction_id": 0,
      "deduction_name": "string",
      "amount": 0,
      "frequency": "salary_this_month",
      "calc_type": "fixed"
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
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の控除情報の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<h3 id="従業員の控除情報の取得-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_deduction_rules|[[ApiV1EmployeesDeductionRuleSerializer](#schemaapiv1employeesdeductionruleserializer)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の控除情報の更新

<a id="opIdupdate_employee_deduction_rules"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/deduction_rules?company_id=1&year=2021&month=1' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "year": 2024,
    "month": 6,
    "employee_deduction_rule": {
      "deduction_id": 1,
      "amount": 30000
    }
  }'
```

`PUT /api/v1/employees/{employee_id}/deduction_rules`

<h2 id="">概要</h2>
<p>指定した従業員の控除情報を更新します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
  <li>賞与に紐づく控除（frequency=bonus）の場合、対象年月に賞与情報が登録されている必要があります。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "year": 2024,
  "month": 6,
  "employee_deduction_rule": {
    "deduction_id": 1,
    "amount": 30000
  }
}
```

<h3 id="従業員の控除情報の更新-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|更新対象の控除ルールを判定する締め年|
|month|query|integer|true|更新対象の控除ルールを判定する締め月<br><br>翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br><br>例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>|
|employee_id|path|integer|true|従業員ID|
|body|body|[ApiV1EmployeesDeductionRulesController.update_body](#schemaapiv1employeesdeductionrulescontroller.update_body)|true|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» year|body|integer(int32)|true|対象年|
|» month|body|integer(int32)|true|対象月|
|» employee_deduction_rule|body|[ApiV1EmployeesDeductionRuleUpdateRequestSerializer](#schemaapiv1employeesdeductionruleupdaterequestserializer)|true|none|

> Example responses

> 200 Response

```json
{
  "employee_deduction_rule": {
    "id": 0,
    "employee_id": 0,
    "deduction_id": 0,
    "deduction_name": "string",
    "amount": 0,
    "frequency": "salary_this_month",
    "calc_type": "fixed"
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の控除情報の更新-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1EmployeesDeductionRulesController.update_response](#schemaapiv1employeesdeductionrulescontroller.update_response)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## 従業員の控除情報の削除

<a id="opIddestroy_employee_deduction_rule"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/employees/1/deduction_rules/1?company_id=1&year=2021&month=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/employees/{employee_id}/deduction_rules/{id}`

<h2 id="">概要</h2>
<p>指定した従業員の控除情報を削除します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="従業員の控除情報の削除-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|year|query|integer|true|削除対象の控除ルールを判定する締め年|
|month|query|integer|true|削除対象の控除ルールを判定する締め月<br><br>翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br><br>例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>|
|employee_id|path|integer|true|従業員ID|
|id|path|integer|true|従業員控除ID|

> Example responses

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="従業員の控除情報の削除-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="freee人事労務-api-その他控除">その他控除</h1>

## その他控除一覧の取得

<a id="opIdget_deductions"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/deductions?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/deductions`

<h2 id="">概要</h2>
<p>指定した事業所のその他控除情報をリストで返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="その他控除一覧の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|frequency|query|string|false|支給頻度フィルタ（省略で全件取得）|
|is_active|query|boolean|false|表示状態フィルタ（省略で全件取得）|
|limit|query|integer|false|取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)|
|offset|query|integer|false|取得レコードのオフセット (デフォルト: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency|salary|
|frequency|salary_monthly|
|frequency|salary_this_month|
|frequency|bonus|

> Example responses

> 200 Response

```json
{
  "deductions": [
    {
      "id": 0,
      "company_id": 0,
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "is_active": true,
      "amount": 0,
      "is_affect_income_tax": true,
      "attendance_tag_id": 0
    }
  ],
  "total_count": 1
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他控除一覧の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1DeductionsIndexResponse](#schemaapiv1deductionsindexresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## その他控除の作成

<a id="opIdcreate_deduction"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/deductions?company_id=1' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "company_id": 1,
    "deduction": {
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "amount": -99999999,
      "is_affect_income_tax": true
    }
  }'
```

`POST /api/v1/deductions`

<h2 id="">概要</h2>
<p>指定した事業所のその他控除を新規作成します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

> Body parameter

```json
{
  "company_id": 1,
  "deduction": {
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "amount": -99999999,
    "is_affect_income_tax": true
  }
}
```

<h3 id="その他控除の作成-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|query|integer|true|事業所ID|
|body|body|[ApiV1DeductionsController.create_body](#schemaapiv1deductionscontroller.create_body)|true|none|
|» company_id|body|integer(int32)|true|事業所ID|
|» deduction|body|[ApiV1DeductionCreateRequestSerializer](#schemaapiv1deductioncreaterequestserializer)|true|none|

> Example responses

> 201 Response

```json
{
  "deduction": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "is_affect_income_tax": true,
    "attendance_tag_id": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 500 Response

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他控除の作成-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[ApiV1DeductionResponse](#schemaapiv1deductionresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## その他控除の取得

<a id="opIdget_deduction"></a>

> Code samples

```bash
curl 'https://api.freee.co.jp/hr/api/v1/deductions/1?company_id=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/deductions/{id}`

<h2 id="">概要</h2>
<p>指定した事業所のその他控除情報を返します。</p>

<h2 id="_1">注意点</h2>
<ul>
  <li>管理者権限を持ったユーザーのみ実行可能です。</li>
</ul>

<h3 id="その他控除の取得-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|その他控除ID|
|company_id|query|integer|true|事業所ID|

> Example responses

> 200 Response

```json
{
  "deduction": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "is_affect_income_tax": true,
    "attendance_tag_id": 0
  }
}
```

> 400 Response

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
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
  "message": "ログインをしてください。",
  "messages": "string"
}
```

> 403 Response

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

> 404 Response

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
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
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

<h3 id="その他控除の取得-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiV1DeductionResponse](#schemaapiv1deductionresponse)|
|400|Bad Request||[error](#schemaerror)|
|401|Unauthorized||[unauthorizedError](#schemaunauthorizederror)|
|403|Forbidden||[accessDeniedError](#schemaaccessdeniederror)|
|404|Not Found||[notfoundError](#schemanotfounderror)|
|500|Internal Server Error||[internalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_ApiV1EmployeeUpdateRequestSerializer">ApiV1EmployeeUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeupdaterequestserializer"></a>
<a id="tocsapiv1employeeupdaterequestserializer"></a>

```json
{
  "num": "A-001",
  "display_name": "山田 太郎",
  "base_pension_num": "1111111111",
  "employment_insurance_reference_number": "11111111111",
  "birth_date": "2000-01-01",
  "entry_date": "2021-04-01",
  "retire_date": "2022-03-31",
  "company_reference_date_rule_name": "当月締め翌月払い"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num|string|false|none|従業員番号<br><br>従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）|
|display_name|string|false|none|従業員名（freee人事労務上での表示にのみ使用される名前です。出力書類には姓名が使用されます。）<br>- 給与計算対象外の従業員情報の場合は必須になります。|
|base_pension_num|string|false|none|基礎年金番号 数値文字列10桁固定長 例: 1111111111|
|employment_insurance_reference_number|string|false|none|被保険者番号（雇用保険） 数値文字列11桁固定長 例: 11111111111<br>- 給与計算対象外の従業員情報の場合に指定するとエラーになります。|
|birth_date|string(date)|true|none|生年月日 null不可|
|entry_date|string(date)|true|none|入社日 null不可|
|retire_date|string(date) \| null|false|none|退職日<br>- 退職していない場合は指定不要です。<br>- 指定する場合はentry_date以降の日付を指定してください。<br>- retire_dateをクリアする場合、nullを指定してください。|
|company_reference_date_rule_name|string|false|none|<a href="https://support.freee.co.jp/hc/ja/articles/360000666303-締め日支払い日を変更する方法は-" target="_blank">締め日支払い日グループ名</a><br>で設定した締め日支払い日を指定してください。<br>- 未指定の際は、締め日支払い日は変わりません。<br>- 指定した従業員が給与計算対象外の場合、指定するとエラーになります。|

<h2 id="tocS_ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer">ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeepayrollstatementsemployeeattendanceitemserializer"></a>
<a id="schema_ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer"></a>
<a id="tocSapiv1employeepayrollstatementsemployeeattendanceitemserializer"></a>
<a id="tocsapiv1employeepayrollstatementsemployeeattendanceitemserializer"></a>

```json
{
  "name": "string",
  "time": "string",
  "amount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|項目名|
|time|string|false|none|時間|
|amount|string|false|none|控除額|

<h2 id="tocS_ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer">ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer"></a>
<a id="schema_ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer"></a>
<a id="tocSapiv1employeepayrollstatementsemployeepayrollstatementitemserializer"></a>
<a id="tocsapiv1employeepayrollstatementsemployeepayrollstatementitemserializer"></a>

```json
{
  "name": "string",
  "amount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|項目名|
|amount|string|false|none|金額|

<h2 id="tocS_ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer">ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeepayrollstatementsemployeeovertimepayitemserializer"></a>
<a id="schema_ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer"></a>
<a id="tocSapiv1employeepayrollstatementsemployeeovertimepayitemserializer"></a>
<a id="tocsapiv1employeepayrollstatementsemployeeovertimepayitemserializer"></a>

```json
{
  "name": "時間外労働",
  "time": "60.0",
  "amount": "1000.0",
  "code": "12345abcde"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|項目名|
|time|string \| null|false|none|時間(単位: 分)。固定残業代の場合、nullになります。|
|amount|string|false|none|手当金額|
|code|string \| null|false|none|コード（事業所毎に設定可能な小文字英数最大10桁のコード）|

<h2 id="tocS_ApiV1EmployeeCreateRequestSerializer">ApiV1EmployeeCreateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeecreaterequestserializer"></a>
<a id="schema_ApiV1EmployeeCreateRequestSerializer"></a>
<a id="tocSapiv1employeecreaterequestserializer"></a>
<a id="tocsapiv1employeecreaterequestserializer"></a>

```json
{
  "num": "A-001",
  "working_hours_system_name": "固定",
  "company_reference_date_rule_name": "15日締め（当月25日払い）",
  "last_name": "山田",
  "first_name": "太郎",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "タロウ",
  "birth_date": "2000-01-01",
  "entry_date": "2021-04-01",
  "pay_calc_type": "monthly",
  "pay_amount": 220000,
  "gender": "male",
  "married": true,
  "no_payroll_calculation": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|num|string|false|none|従業員番号<br><br>従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）|
|working_hours_system_name|string|false|none|<a href="https://support.freee.co.jp/hc/ja/articles/360000562403-労働時間制度と勤務-賃金設定について" target="_blank">勤務・賃金設定名</a><br>で設定した名称を指定してください。<br>- 未指定の際は、最初に登録したデータが利用されます。<br>- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。|
|company_reference_date_rule_name|string|false|none|<a href="https://support.freee.co.jp/hc/ja/articles/360000666303-締め日支払い日を変更する方法は-" target="_blank">締め日支払い日グループ名</a><br>で設定した締め日支払い日を指定してください。<br>- 未指定の際は、最初に登録したデータが利用されます。<br>- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。|
|last_name|string|true|none|姓（必須）<br><br>last_nameとfirst_nameを空白文字で結合した文字列がdisplay_nameとして登録されます。<br>- 例）last_name=田中、first_name＝太郎の場合、display_name＝田中 太郎<br>- display_nameはput apiで更新可能です。|
|first_name|string|true|none|名（必須）<br><br>last_nameとfirst_nameを空白文字で結合した文字列がdisplay_nameとして登録されます。<br>- 例）last_name=田中、first_name＝太郎の場合、display_name＝田中 太郎<br>- display_nameはput apiで更新可能です。|
|last_name_kana|string|true|none|姓カナ（必須）|
|first_name_kana|string|true|none|名カナ（必須）|
|birth_date|string(date)|true|none|生年月日（必須）|
|entry_date|string(date)|true|none|入社日（必須）|
|pay_calc_type|string|false|none|給与方式 monthly: 月給, daily: 日給, hourly: 時給<br>- フレックスタイム制を使用している場合はmonthly以外指定できません。<br>- 入力パラメータのno_payroll_calculationがfalseの場合は必須になります。<br>- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。|
|pay_amount|integer(int32)|false|none|基本給<br>- 入力パラメータのno_payroll_calculationがfalseの場合は必須になります。<br>- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。|
|gender|string|false|none|性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）|
|married|boolean|false|none|配偶者の有無（デフォルト: false）|
|no_payroll_calculation|boolean|false|none|給与計算対象外の従業員情報を作成する場合はtrueを指定します|

#### Enumerated Values

|Property|Value|
|---|---|
|pay_calc_type|monthly|
|pay_calc_type|daily|
|pay_calc_type|hourly|
|gender|unselected|
|gender|male|
|gender|female|

<h2 id="tocS_ApiV1GroupMembershipSerializer">ApiV1GroupMembershipSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupmembershipserializer"></a>
<a id="schema_ApiV1GroupMembershipSerializer"></a>
<a id="tocSapiv1groupmembershipserializer"></a>
<a id="tocsapiv1groupmembershipserializer"></a>

```json
{
  "start_date": "2000-01-01",
  "end_date": "2020-01-01",
  "boss_id": 1,
  "main_duty": "main_duty",
  "group_id": 10,
  "group_code": "group2",
  "group_name": "営業部",
  "level": 2,
  "position_id": 1,
  "position_code": "position1",
  "position_name": "部長",
  "parent_group_id": 1,
  "parent_group_code": "group1",
  "parent_group_name": "営業統括"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_date|string(date)|false|none|開始日|
|end_date|string(date)|false|none|終了日|
|boss_id|integer(int64) \| null|false|none|上司ID|
|main_duty|string|false|none|主務|
|group_id|integer(int32)|false|none|部門ID|
|group_code|string|false|none|部門コード|
|group_name|string|false|none|部門名称|
|level|integer(int32)|false|none|部門階層レベル|
|position_id|integer(int32) \| null|false|none|役職ID|
|position_code|string \| null|false|none|役職コード|
|position_name|string \| null|false|none|役職名称|
|parent_group_id|integer(int32) \| null|false|none|親部門ID|
|parent_group_code|string \| null|false|none|親部門コード|
|parent_group_name|string \| null|false|none|親部門名称|

#### Enumerated Values

|Property|Value|
|---|---|
|main_duty|unspecified|
|main_duty|sub_duty|
|main_duty|main_duty|

<h2 id="tocS_ApiV1SalariesEmployeePayrollStatementSerializer">ApiV1SalariesEmployeePayrollStatementSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1salariesemployeepayrollstatementserializer"></a>
<a id="schema_ApiV1SalariesEmployeePayrollStatementSerializer"></a>
<a id="tocSapiv1salariesemployeepayrollstatementserializer"></a>
<a id="tocsapiv1salariesemployeepayrollstatementserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "employee_name": "string",
  "employee_display_name": "string",
  "employee_num": "string",
  "pay_date": "1970-01-01",
  "start_date": "1970-01-01",
  "closing_date": "1970-01-01",
  "variable_pay_start_date": "1970-01-01",
  "variable_pay_closing_date": "1970-01-01",
  "fixed": true,
  "calc_status": "string",
  "calculated_at": "1970-01-01T00:00:00Z",
  "pay_calc_type": "monthly",
  "board_member_remuneration_amount": "string",
  "basic_pay_amount": "string",
  "work_days": "string",
  "normal_work_time": "string",
  "normal_work_days": "string",
  "work_mins_by_paid_holiday": "string",
  "num_paid_holidays": "string",
  "is_board_member": true,
  "total_attendance_deduction_amount": "string",
  "total_allowance_amount": "string",
  "total_deduction_amount": "string",
  "total_deduction_employer_share": "string",
  "net_payment_amount": "string",
  "gross_payment_amount": "string",
  "total_worked_days_count": "string",
  "total_taxable_payment_amount": "string",
  "total_expense_amount": "string",
  "total_transfer_amount": "string",
  "total_annual_payment_amount": "string",
  "payments": [
    {
      "name": "string",
      "amount": "string"
    }
  ],
  "deductions": [
    {
      "name": "string",
      "amount": "string"
    }
  ],
  "deductions_employer_share": [
    {
      "name": "string",
      "amount": "string"
    }
  ],
  "attendances": [
    {
      "name": "string",
      "time": "string",
      "amount": "string"
    }
  ],
  "overtime_pays": [
    {
      "name": "時間外労働",
      "time": "60.0",
      "amount": "1000.0",
      "code": "12345abcde"
    }
  ],
  "remark": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|給与明細ID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|employee_name|string|false|none|従業員の姓名|
|employee_display_name|string|false|none|従業員の表示名|
|employee_num|string|false|none|従業員番号|
|pay_date|string(date)|false|none|支払日|
|start_date|string(date)|false|none|給与計算開始日（固定給）|
|closing_date|string(date)|false|none|給与計算締日（固定給）|
|variable_pay_start_date|string(date)|false|none|給与計算開始日（変動給） 残業手当、遅刻早退・欠勤などの計算に使われる期間|
|variable_pay_closing_date|string(date)|false|none|給与計算締日（変動給）|
|fixed|boolean|false|none|給与明細が確定されているかどうか|
|calc_status|string|false|none|計算状況ステータス calculating: 計算中, calculated: 計算完了, overwritten: 直接編集, imported: インポート, error: エラー|
|calculated_at|string(date-time) \| null|false|none|計算状況ステータスの更新日|
|pay_calc_type|string|false|none|給与形態 monthly: 月給, daily: 日給, hourly: 時給, (空文字列): 計算中|
|board_member_remuneration_amount|string \| null|false|none|役員報酬|
|basic_pay_amount|string \| null|false|none|基本給|
|work_days|string \| null|false|none|労働日数|
|normal_work_time|string \| null|false|none|労働時間のうち、所定労働時間に該当するもの|
|normal_work_days|string \| null|false|none|所定労働出勤日数|
|work_mins_by_paid_holiday|string \| null|false|none|有給休暇時間数|
|num_paid_holidays|string \| null|false|none|有給日数|
|is_board_member|boolean|false|none|役員かどうか|
|total_attendance_deduction_amount|string \| null|false|none|勤怠控除額合計|
|total_allowance_amount|string \| null|false|none|支給手当額合計|
|total_deduction_amount|string \| null|false|none|控除額合計|
|total_deduction_employer_share|string \| null|false|none|法定福利費の会社負担分の合計（健康保険、厚生年金、雇用保険等）|
|net_payment_amount|string \| null|false|none|差引支給額(手取り額)|
|gross_payment_amount|string \| null|false|none|総支給額(額面)|
|total_worked_days_count|string \| null|false|none|平日と休日の合計労働日数（日給用）|
|total_taxable_payment_amount|string \| null|false|none|課税対象支給額|
|total_expense_amount|string \| null|false|none|総経費精算額|
|total_transfer_amount|string \| null|false|none|総振込額|
|total_annual_payment_amount|string \| null|false|none|課税支給累計額|
|payments|[[ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer](#schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer)]|false|none|支給項目（基本給、残業代、通勤手当等）|
|deductions|[[ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer](#schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer)]|false|none|控除項目（健康保険、厚生年金、雇用保険等）|
|deductions_employer_share|[[ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer](#schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer)]|false|none|法定福利費の会社負担分（健康保険、厚生年金、雇用保険等）|
|attendances|[[ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer](#schemaapiv1employeepayrollstatementsemployeeattendanceitemserializer)]|false|none|勤怠控除項目（遅刻早退控除、欠勤控除等）|
|overtime_pays|[[ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer](#schemaapiv1employeepayrollstatementsemployeeovertimepayitemserializer)]|false|none|時間外労働項目(法定内残業、時間外労働、法定休日労働、深夜労働等)|
|remark|string \| null|false|none|備考|

#### Enumerated Values

|Property|Value|
|---|---|
|pay_calc_type|monthly|
|pay_calc_type|daily|
|pay_calc_type|hourly|
|pay_calc_type|""|

<h2 id="tocS_ApiV1SalariesEmployeePayrollStatementRemarkSerializer">ApiV1SalariesEmployeePayrollStatementRemarkSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1salariesemployeepayrollstatementremarkserializer"></a>
<a id="schema_ApiV1SalariesEmployeePayrollStatementRemarkSerializer"></a>
<a id="tocSapiv1salariesemployeepayrollstatementremarkserializer"></a>
<a id="tocsapiv1salariesemployeepayrollstatementremarkserializer"></a>

```json
{
  "id": 0,
  "employee_payroll_statement_id": 0,
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|給与明細備考ID|
|employee_payroll_statement_id|integer(int32)|false|none|給与明細ID|
|body|string|false|none|備考本文|

<h2 id="tocS_ApiV1HolidaysAndHoursSerializer">ApiV1HolidaysAndHoursSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1holidaysandhoursserializer"></a>
<a id="schema_ApiV1HolidaysAndHoursSerializer"></a>
<a id="tocSapiv1holidaysandhoursserializer"></a>
<a id="tocsapiv1holidaysandhoursserializer"></a>

```json
{
  "days": 0,
  "hours": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|number(float)|false|none|日数 0.5は半休を表す|
|hours|integer(int32)|false|none|時間数|

<h2 id="tocS_ApiV1EmployeesIndexSerializer">ApiV1EmployeesIndexSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesindexserializer"></a>
<a id="schema_ApiV1EmployeesIndexSerializer"></a>
<a id="tocSapiv1employeesindexserializer"></a>
<a id="tocsapiv1employeesindexserializer"></a>

```json
{
  "employees": [
    {
      "id": 0,
      "company_id": 0,
      "num": "string",
      "display_name": "string",
      "base_pension_num": "string",
      "employment_insurance_reference_number": "string",
      "birth_date": "1970-01-01",
      "entry_date": "1970-01-01",
      "retire_date": "1970-01-01",
      "user_id": 0,
      "profile_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "zipcode1": "000",
        "zipcode2": "0000",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "residential_zipcode1": "000",
        "residential_zipcode2": "0000",
        "residential_prefecture_code": 4,
        "residential_address": "string",
        "residential_address_kana": "string",
        "employment_type": "string",
        "title": "string",
        "gender": "male",
        "married": true,
        "is_working_student": true,
        "widow_type": "string",
        "disability_type": "string",
        "email": "test@example.com",
        "householder_name": "山田 吾郎",
        "householder": "father"
      },
      "health_insurance_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "entried": true,
        "health_insurance_salary_calc_type": "manual",
        "health_insurance_bonus_calc_type": "manual",
        "health_insurance_qualification_required": true,
        "manual_health_insurance_amount_of_employee_salary": 8888,
        "manual_health_insurance_amount_of_employee_bonus": 7777,
        "manual_health_insurance_amount_of_company_salary": 6666.0001,
        "manual_health_insurance_amount_of_company_bonus": 5555.0001,
        "care_insurance_salary_calc_type": "manual",
        "care_insurance_bonus_calc_type": "manual",
        "manual_care_insurance_amount_of_employee_salary": 4444,
        "manual_care_insurance_amount_of_employee_bonus": 3333,
        "manual_care_insurance_amount_of_company_salary": 2222.0001,
        "manual_care_insurance_amount_of_company_bonus": 1111.0001,
        "child_support_fund_salary_calc_type": "manual",
        "child_support_fund_bonus_calc_type": "manual",
        "manual_child_support_fund_amount_of_employee_salary": 4000,
        "manual_child_support_fund_amount_of_employee_bonus": 3000,
        "manual_child_support_fund_amount_of_company_salary": 2000.0001,
        "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
        "reference_num": "string",
        "standard_monthly_remuneration": 0
      },
      "welfare_pension_insurance_rule": {
        "id": 0,
        "child_allowance_contribution_bonus_calc_type": "manual",
        "child_allowance_contribution_salary_calc_type": "manual",
        "company_id": 0,
        "employee_id": 0,
        "entried": true,
        "manual_child_allowance_contribution_amount_bonus": 111.0001,
        "manual_child_allowance_contribution_amount_salary": 222.0001,
        "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
        "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
        "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
        "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
        "reference_num": "string",
        "standard_monthly_remuneration": 0,
        "welfare_pension_insurance_bonus_calc_type": "manual",
        "welfare_pension_insurance_salary_calc_type": "manual"
      },
      "dependent_rules": [
        {
          "id": 0,
          "company_id": 0,
          "employee_id": 0,
          "last_name": "string",
          "first_name": "string",
          "last_name_kana": "string",
          "first_name_kana": "string",
          "gender": "unselected",
          "relationship": "string",
          "birth_date": "1970-01-01",
          "residence_type": "string",
          "zipcode1": "string",
          "zipcode2": "string",
          "prefecture_code": 4,
          "address": "string",
          "address_kana": "string",
          "base_pension_num": "string",
          "income": 0,
          "annual_revenue": 0,
          "disability_type": "string",
          "occupation": "string",
          "annual_remittance_amount": 0,
          "employment_insurance_receive_status": "unselected",
          "employment_insurance_receives_from": "1970-01-01",
          "health_insurance_qualification_required": true,
          "phone_type": "unselected",
          "phone1": "000",
          "phone2": "0000",
          "phone3": "0000",
          "social_insurance_and_tax_dependent": "string",
          "social_insurance_dependent_acquisition_date": "1970-01-01",
          "social_insurance_dependent_acquisition_reason": "",
          "social_insurance_other_dependent_acquisition_reason": "string",
          "social_insurance_dependent_disqualification_date": "1970-01-01",
          "social_insurance_dependent_disqualification_reason": "",
          "social_insurance_other_dependent_disqualification_reason": "string",
          "tax_dependent_acquisition_date": "1970-01-01",
          "tax_dependent_acquisition_reason": "",
          "tax_other_dependent_acquisition_reason": "string",
          "tax_dependent_disqualification_date": "1970-01-01",
          "tax_dependent_disqualification_reason": "",
          "tax_other_dependent_disqualification_reason": "string",
          "non_resident_dependents_reason": "none"
        }
      ],
      "bank_account_rule": {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "bank_name": "string",
        "bank_name_kana": "string",
        "bank_code": "string",
        "branch_name": "string",
        "branch_name_kana": "string",
        "branch_code": "string",
        "account_number": "string",
        "account_name": "string",
        "account_type": "string"
      },
      "basic_pay_rule": {
        "id": 1,
        "company_id": 1,
        "employee_id": 1,
        "pay_calc_type": "monthly",
        "pay_amount": 0
      },
      "payroll_calculation": true,
      "company_reference_date_rule_name": "当月締め翌月払い"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employees|[[ApiV1EmployeeSerializer](#schemaapiv1employeeserializer)]|false|none|none|
|total_count|integer(int32)|false|none|合計件数|

<h2 id="tocS_ApiV1GroupsIndexResponse">ApiV1GroupsIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupsindexresponse"></a>
<a id="schema_ApiV1GroupsIndexResponse"></a>
<a id="tocSapiv1groupsindexresponse"></a>
<a id="tocsapiv1groupsindexresponse"></a>

```json
{
  "groups": [
    {
      "id": 3,
      "code": "group2",
      "name": "営業部門",
      "level": 2,
      "parent_group_id": 2,
      "parent_group_code": "group1",
      "parent_group_name": "営業統括"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[ApiV1GroupResponseParams](#schemaapiv1groupresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1GroupResponseParams">ApiV1GroupResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupresponseparams"></a>
<a id="schema_ApiV1GroupResponseParams"></a>
<a id="tocSapiv1groupresponseparams"></a>
<a id="tocsapiv1groupresponseparams"></a>

```json
{
  "id": 3,
  "code": "group2",
  "name": "営業部門",
  "level": 2,
  "parent_group_id": 2,
  "parent_group_code": "group1",
  "parent_group_name": "営業統括"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|部門ID|
|code|string \| null|false|none|部門コード|
|name|string|true|none|部門名称|
|level|integer(int32)|true|none|部門階層レベル（数字が大きいほど階層が深いです。）|
|parent_group_id|integer(int32) \| null|false|none|親部門ID|
|parent_group_code|string \| null|false|none|親部門コード|
|parent_group_name|string \| null|false|none|親部門名称|

<h2 id="tocS_ApiV1GroupCreateRequestParams">ApiV1GroupCreateRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupcreaterequestparams"></a>
<a id="schema_ApiV1GroupCreateRequestParams"></a>
<a id="tocSapiv1groupcreaterequestparams"></a>
<a id="tocsapiv1groupcreaterequestparams"></a>

```json
{
  "code": "group2",
  "name": "営業部門",
  "parent_group_id": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|部門コード（入力しない場合、空文字が入力されます。）|
|name|string|true|none|部門名称（必須）|
|parent_group_id|integer(int32) \| null|false|none|親部門ID（部門階層レベルが10以内になるように親部門IDを指定してください。）|

<h2 id="tocS_ApiV1GroupUpdateRequestParams">ApiV1GroupUpdateRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupupdaterequestparams"></a>
<a id="schema_ApiV1GroupUpdateRequestParams"></a>
<a id="tocSapiv1groupupdaterequestparams"></a>
<a id="tocsapiv1groupupdaterequestparams"></a>

```json
{
  "code": "group2",
  "name": "営業部門"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|部門コード（入力しない場合、空文字が入力されます。）|
|name|string|true|none|部門名称|

<h2 id="tocS_ApiV1PositionIndexResponse">ApiV1PositionIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1positionindexresponse"></a>
<a id="schema_ApiV1PositionIndexResponse"></a>
<a id="tocSapiv1positionindexresponse"></a>
<a id="tocsapiv1positionindexresponse"></a>

```json
{
  "positions": [
    {
      "id": 1,
      "code": "position1",
      "name": "部長"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positions|[[ApiV1PositionResponseParams](#schemaapiv1positionresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1PositionResponseParams">ApiV1PositionResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1positionresponseparams"></a>
<a id="schema_ApiV1PositionResponseParams"></a>
<a id="tocSapiv1positionresponseparams"></a>
<a id="tocsapiv1positionresponseparams"></a>

```json
{
  "id": 1,
  "code": "position1",
  "name": "部長"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|役職ID|
|code|string \| null|false|none|役職コード|
|name|string|true|none|役職名称|

<h2 id="tocS_ApiV1PositionRequestParams">ApiV1PositionRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1positionrequestparams"></a>
<a id="schema_ApiV1PositionRequestParams"></a>
<a id="tocSapiv1positionrequestparams"></a>
<a id="tocsapiv1positionrequestparams"></a>

```json
{
  "code": "position1",
  "name": "部長"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|役職コード（入力しない場合、空文字が入力されます。）|
|name|string|true|none|役職名称（必須）|

<h2 id="tocS_ApiV1EmployeeGroupMembershipSerializer">ApiV1EmployeeGroupMembershipSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeegroupmembershipserializer"></a>
<a id="schema_ApiV1EmployeeGroupMembershipSerializer"></a>
<a id="tocSapiv1employeegroupmembershipserializer"></a>
<a id="tocsapiv1employeegroupmembershipserializer"></a>

```json
{
  "id": 1,
  "num": "A-001",
  "display_name": "山田 太郎",
  "entry_date": "2021-04-01",
  "retire_date": "2022-03-31",
  "user_id": 1,
  "login_email": "example@example.com",
  "birth_date": "2000-01-01",
  "gender": "male",
  "payroll_calculation": true,
  "group_memberships": [
    {
      "start_date": "2000-01-01",
      "end_date": "2020-01-01",
      "boss_id": 1,
      "main_duty": "main_duty",
      "group_id": 10,
      "group_code": "group2",
      "group_name": "営業部",
      "level": 2,
      "position_id": 1,
      "position_code": "position1",
      "position_name": "部長",
      "parent_group_id": 1,
      "parent_group_code": "group1",
      "parent_group_name": "営業統括"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|従業員ID|
|num|string|false|none|従業員番号|
|display_name|string|false|none|従業員名（表示名）|
|entry_date|string(date)|false|none|入社日|
|retire_date|string(date) \| null|false|none|退職日|
|user_id|integer(int32) \| null|false|none|ユーザーID(従業員詳細未設定の場合、nullになります。)|
|login_email|string \| null|false|none|ログイン用メールアドレス(従業員詳細未設定の場合、nullになります。)|
|birth_date|string(date)|false|none|生年月日|
|gender|string|false|none|性別　unselected: 未選択, male: 男性, female: 女性|
|payroll_calculation|boolean|false|none|給与計算対象従業員の場合trueを返します|
|group_memberships|[[ApiV1GroupMembershipSerializer](#schemaapiv1groupmembershipserializer)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|unselected|
|gender|male|
|gender|female|

<h2 id="tocS_ApiV1MonthlyAttendanceIndexResponseParams">ApiV1MonthlyAttendanceIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendanceindexresponseparams"></a>
<a id="schema_ApiV1MonthlyAttendanceIndexResponseParams"></a>
<a id="tocSapiv1monthlyattendanceindexresponseparams"></a>
<a id="tocsapiv1monthlyattendanceindexresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "proxy_applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "2022-02-01",
  "issue_date": "1970-01-01",
  "status": "in_progress",
  "passed_auto_check": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|issue_date|string(date)|true|none|申請日|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|passed_auto_check|boolean|true|none|自動チェック結果|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

<h2 id="tocS_ApiV1MonthlyAttendanceResponseParams">ApiV1MonthlyAttendanceResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendanceresponseparams"></a>
<a id="schema_ApiV1MonthlyAttendanceResponseParams"></a>
<a id="tocSapiv1monthlyattendanceresponseparams"></a>
<a id="tocsapiv1monthlyattendanceresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "proxy_applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "2022-02-01",
  "issue_date": "1970-01-01",
  "status": "in_progress",
  "passed_auto_check": true,
  "approval_flow_route_id": 1,
  "approval_flow_route_name": "申請経路",
  "approval_flow_logs": [
    {
      "user_id": 1,
      "action": "approve",
      "update_at": "2022-06-08T09:46:46.000+09:00"
    }
  ],
  "current_step_id": 1,
  "current_round": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|issue_date|string(date)|true|none|申請日|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|approval_flow_route_id|integer|true|none|申請経路ID|
|approval_flow_route_name|string|true|none|申請経路名|
|approval_flow_logs|[[ApiV1ApprovalFlowLogsParams](#schemaapiv1approvalflowlogsparams)]|true|none|承認履歴|
|current_step_id|integer(int32) \| null|false|none|現在承認ステップID<br><br>申請を差戻した場合、nullになります。|
|current_round|integer(int32)|true|none|現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

<h2 id="tocS_ApiV1PaidHolidayIndexResponseParams">ApiV1PaidHolidayIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1paidholidayindexresponseparams"></a>
<a id="schema_ApiV1PaidHolidayIndexResponseParams"></a>
<a id="tocSapiv1paidholidayindexresponseparams"></a>
<a id="tocsapiv1paidholidayindexresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "values": [
    {
      "type": "half",
      "start_at": "12:00",
      "end_at": "23:59"
    }
  ],
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|values|[object]|true|none|none|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_LegacyApiV1PaidHolidayIndexResponseParams">LegacyApiV1PaidHolidayIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapiv1paidholidayindexresponseparams"></a>
<a id="schema_LegacyApiV1PaidHolidayIndexResponseParams"></a>
<a id="tocSlegacyapiv1paidholidayindexresponseparams"></a>
<a id="tocslegacyapiv1paidholidayindexresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|holiday_type|string|true|none|[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）※ 削除予定のため paid_holiday->values->type を参照してください|
|start_at|string \| null|false|none|[deprecated] 取得予定開始時間 ※ 削除予定のため paid_holiday->values->start_at を参照してください|
|end_at|string \| null|false|none|[deprecated] 取得予定終了時間 ※ 削除予定のため paid_holiday->values->end_at を参照してください|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning|
|holiday_type|afternoon|
|holiday_type|hour|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_ApiV1PaidHolidayResponseParams">ApiV1PaidHolidayResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1paidholidayresponseparams"></a>
<a id="schema_ApiV1PaidHolidayResponseParams"></a>
<a id="tocSapiv1paidholidayresponseparams"></a>
<a id="tocsapiv1paidholidayresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "values": [
    {
      "type": "half",
      "start_at": "12:00",
      "end_at": "23:59"
    }
  ],
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true,
  "approval_flow_route_id": 1,
  "approval_flow_route_name": "申請経路",
  "approval_flow_logs": [
    {
      "user_id": 1,
      "action": "approve",
      "update_at": "2022-06-08T09:46:46.000+09:00"
    }
  ],
  "current_step_id": 1,
  "current_round": 1,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|values|[object]|true|none|none|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|approval_flow_route_id|integer|true|none|申請経路ID|
|approval_flow_route_name|string|true|none|申請経路名|
|approval_flow_logs|[[ApiV1ApprovalFlowLogsParams](#schemaapiv1approvalflowlogsparams)]|true|none|承認履歴|
|current_step_id|integer(int32) \| null|false|none|現在承認ステップID<br><br>申請を差戻した場合、nullになります。|
|current_round|integer(int32)|true|none|現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_LegacyApiV1PaidHolidayResponseParams">LegacyApiV1PaidHolidayResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapiv1paidholidayresponseparams"></a>
<a id="schema_LegacyApiV1PaidHolidayResponseParams"></a>
<a id="tocSlegacyapiv1paidholidayresponseparams"></a>
<a id="tocslegacyapiv1paidholidayresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true,
  "approval_flow_route_id": 1,
  "approval_flow_route_name": "申請経路",
  "approval_flow_logs": [
    {
      "user_id": 1,
      "action": "approve",
      "update_at": "2022-06-08T09:46:46.000+09:00"
    }
  ],
  "current_step_id": 1,
  "current_round": 1,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|holiday_type|string|true|none|[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）※ 削除予定のため paid_holiday->values->type を参照してください|
|start_at|string \| null|false|none|[deprecated] 取得予定開始時間 ※ 削除予定のため paid_holiday->values->start_at を参照してください|
|end_at|string \| null|false|none|[deprecated] 取得予定終了時間 ※ 削除予定のため paid_holiday->values->end_at を参照してください|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|approval_flow_route_id|integer|true|none|申請経路ID|
|approval_flow_route_name|string|true|none|申請経路名|
|approval_flow_logs|[[ApiV1ApprovalFlowLogsParams](#schemaapiv1approvalflowlogsparams)]|true|none|承認履歴|
|current_step_id|integer(int32) \| null|false|none|現在承認ステップID<br><br>申請を差戻した場合、nullになります。|
|current_round|integer(int32)|true|none|現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning|
|holiday_type|afternoon|
|holiday_type|hour|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_ApiV1OvertimeWorkIndexResponseParams">ApiV1OvertimeWorkIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1overtimeworkindexresponseparams"></a>
<a id="schema_ApiV1OvertimeWorkIndexResponseParams"></a>
<a id="tocSapiv1overtimeworkindexresponseparams"></a>
<a id="tocsapiv1overtimeworkindexresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "proxy_applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "start_at": "12:00",
  "end_at": "23:59",
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|start_at|string|false|none|取得予定開始時間（必須）|
|end_at|string|false|none|取得予定終了時間（必須）|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_ApiV1OvertimeWorkResponseParams">ApiV1OvertimeWorkResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1overtimeworkresponseparams"></a>
<a id="schema_ApiV1OvertimeWorkResponseParams"></a>
<a id="tocSapiv1overtimeworkresponseparams"></a>
<a id="tocsapiv1overtimeworkresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "proxy_applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "start_at": "12:00",
  "end_at": "23:59",
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "revoke_status": null,
  "passed_auto_check": true,
  "approval_flow_route_id": 1,
  "approval_flow_route_name": "申請経路",
  "approval_flow_logs": [
    {
      "user_id": 1,
      "action": "approve",
      "update_at": "2022-06-08T09:46:46.000+09:00"
    }
  ],
  "current_step_id": 1,
  "current_round": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br><br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|start_at|string|false|none|取得予定開始時間（必須）|
|end_at|string|false|none|取得予定終了時間（必須）|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|revoke_status|string \| null|true|none|取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|approval_flow_route_id|integer|true|none|申請経路ID|
|approval_flow_route_name|string|true|none|申請経路名|
|approval_flow_logs|[[ApiV1ApprovalFlowLogsParams](#schemaapiv1approvalflowlogsparams)]|true|none|承認履歴|
|current_step_id|integer(int32) \| null|false|none|現在承認ステップID<br><br>申請を差戻した場合、nullになります。|
|current_round|integer(int32)|true|none|現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|
|revoke_status|revoking|
|revoke_status|revoked|

<h2 id="tocS_ApiV1ApprovalFlowLogsParams">ApiV1ApprovalFlowLogsParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalflowlogsparams"></a>
<a id="schema_ApiV1ApprovalFlowLogsParams"></a>
<a id="tocSapiv1approvalflowlogsparams"></a>
<a id="tocsapiv1approvalflowlogsparams"></a>

```json
{
  "user_id": 1,
  "action": "approve",
  "update_at": "2022-06-08T09:46:46.000+09:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|integer(int32)|false|none|申請操作をしたユーザーのユーザーID|
|action|string|false|none|申請操作。（apply:申請する、approve:承認、cancel:取り消し、feedback:差戻し）|
|update_at|string(date-time)|false|none|申請操作をした日付時間|

#### Enumerated Values

|Property|Value|
|---|---|
|action|apply|
|action|approve|
|action|cancel|
|action|feedback|

<h2 id="tocS_ApiV1EmployeeSerializer">ApiV1EmployeeSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeserializer"></a>
<a id="schema_ApiV1EmployeeSerializer"></a>
<a id="tocSapiv1employeeserializer"></a>
<a id="tocsapiv1employeeserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "num": "string",
  "display_name": "string",
  "base_pension_num": "string",
  "employment_insurance_reference_number": "string",
  "birth_date": "1970-01-01",
  "entry_date": "1970-01-01",
  "retire_date": "1970-01-01",
  "user_id": 0,
  "profile_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "last_name": "string",
    "first_name": "string",
    "last_name_kana": "string",
    "first_name_kana": "string",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "string",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "string",
    "disability_type": "string",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  },
  "health_insurance_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "health_insurance_qualification_required": true,
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "string",
    "standard_monthly_remuneration": 0
  },
  "welfare_pension_insurance_rule": {
    "id": 0,
    "child_allowance_contribution_bonus_calc_type": "manual",
    "child_allowance_contribution_salary_calc_type": "manual",
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "manual_child_allowance_contribution_amount_bonus": 111.0001,
    "manual_child_allowance_contribution_amount_salary": 222.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
    "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
    "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
    "reference_num": "string",
    "standard_monthly_remuneration": 0,
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "welfare_pension_insurance_salary_calc_type": "manual"
  },
  "dependent_rules": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "gender": "unselected",
      "relationship": "string",
      "birth_date": "1970-01-01",
      "residence_type": "string",
      "zipcode1": "string",
      "zipcode2": "string",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "string",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "string",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "unselected",
      "employment_insurance_receives_from": "1970-01-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "social_insurance_and_tax_dependent": "string",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
    }
  ],
  "bank_account_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "string",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "string",
    "account_number": "string",
    "account_name": "string",
    "account_type": "string"
  },
  "basic_pay_rule": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "pay_calc_type": "monthly",
    "pay_amount": 0
  },
  "payroll_calculation": true,
  "company_reference_date_rule_name": "当月締め翌月払い"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|従業員ID|
|company_id|integer(int32)|false|none|事業所ID|
|num|string|false|none|従業員番号|
|display_name|string|false|none|従業員名（表示名）|
|base_pension_num|string \| null|false|none|基礎年金番号|
|employment_insurance_reference_number|string|false|none|被保険者番号（雇用保険）|
|birth_date|string(date)|false|none|生年月日|
|entry_date|string(date)|false|none|入社日|
|retire_date|string(date) \| null|false|none|退職日|
|user_id|integer(int32) \| null|false|none|ユーザーID(従業員詳細未設定の場合、nullになります。)|
|profile_rule|[ApiV1EmployeesProfileRuleSerializer](#schemaapiv1employeesprofileruleserializer)|false|none|none|
|health_insurance_rule|[ApiV1EmployeesHealthInsuranceRuleSerializer](#schemaapiv1employeeshealthinsuranceruleserializer)|false|none|none|
|welfare_pension_insurance_rule|[ApiV1EmployeesWelfarePensionInsuranceRuleSerializer](#schemaapiv1employeeswelfarepensioninsuranceruleserializer)|false|none|none|
|dependent_rules|[[ApiV1EmployeesDependentRuleSerializer](#schemaapiv1employeesdependentruleserializer)]|false|none|家族情報|
|bank_account_rule|[ApiV1EmployeesBankAccountRuleSerializer](#schemaapiv1employeesbankaccountruleserializer)|false|none|none|
|basic_pay_rule|[ApiV1EmployeesBasicPayRuleSerializer](#schemaapiv1employeesbasicpayruleserializer)|false|none|none|
|payroll_calculation|boolean|false|none|給与計算対象従業員の場合trueを返します|
|company_reference_date_rule_name|string \| null|false|none|締め日支払い日グループ名(給与計算対象外従業員の場合、nullを返します)|

<h2 id="tocS_ApiV1UsersCompanySerializer">ApiV1UsersCompanySerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1userscompanyserializer"></a>
<a id="schema_ApiV1UsersCompanySerializer"></a>
<a id="tocSapiv1userscompanyserializer"></a>
<a id="tocsapiv1userscompanyserializer"></a>

```json
{
  "id": 0,
  "name": "string",
  "role": "string",
  "external_cid": "string",
  "employee_id": 0,
  "display_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|事業所ID|
|name|string|false|none|事業所名|
|role|string|false|none|事業所におけるロール。<br><br>- `company_admin`: 管理者<br>- `self_only`: 一般<br>- `attendance_manager`: 勤怠管理者<br>- `physician`: 産業医<br>- `shift_admin`: AIシフト担当者<br>- `time_clock_device_setter`: 打刻機設定者<br><br>[各権限でできることは各アカウントの権限についてのヘルプページを参照してください。](https://support.freee.co.jp/hc/ja/articles/204087410#3)|
|external_cid|string|false|none|事業所番号(半角英数字10桁)|
|employee_id|integer(int32) \| null|false|none|事業所に所属する従業員としての従業員ID、従業員情報が未登録の場合はnullになります。|
|display_name|string \| null|false|none|事業所に所属する従業員の表示名|

<h2 id="tocS_ApiV1UsersMeSerializer">ApiV1UsersMeSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1usersmeserializer"></a>
<a id="schema_ApiV1UsersMeSerializer"></a>
<a id="tocSapiv1usersmeserializer"></a>
<a id="tocsapiv1usersmeserializer"></a>

```json
{
  "id": 0,
  "companies": [
    {
      "id": 0,
      "name": "string",
      "role": "string",
      "external_cid": "string",
      "employee_id": 0,
      "display_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|ユーザーID|
|companies|[[ApiV1UsersCompanySerializer](#schemaapiv1userscompanyserializer)]|false|none|ユーザーが属する事業所の一覧|

<h2 id="tocS_ApiV1EmployeeGroupMembershipsIndexSerializer">ApiV1EmployeeGroupMembershipsIndexSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeegroupmembershipsindexserializer"></a>
<a id="schema_ApiV1EmployeeGroupMembershipsIndexSerializer"></a>
<a id="tocSapiv1employeegroupmembershipsindexserializer"></a>
<a id="tocsapiv1employeegroupmembershipsindexserializer"></a>

```json
{
  "employee_group_memberships": [
    {
      "id": 1,
      "num": "A-001",
      "display_name": "山田 太郎",
      "entry_date": "2021-04-01",
      "retire_date": "2022-03-31",
      "user_id": 1,
      "login_email": "example@example.com",
      "birth_date": "2000-01-01",
      "gender": "male",
      "payroll_calculation": true,
      "group_memberships": [
        {
          "start_date": "2000-01-01",
          "end_date": "2020-01-01",
          "boss_id": 1,
          "main_duty": "main_duty",
          "group_id": 10,
          "group_code": "group2",
          "group_name": "営業部",
          "level": 2,
          "position_id": 1,
          "position_code": "position1",
          "position_name": "部長",
          "parent_group_id": 1,
          "parent_group_code": "group1",
          "parent_group_name": "営業統括"
        }
      ]
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_group_memberships|[[ApiV1EmployeeGroupMembershipSerializer](#schemaapiv1employeegroupmembershipserializer)]|false|none|none|
|total_count|integer(int32)|false|none|合計件数|

<h2 id="tocS_ApiV1BonusesEmployeePayrollStatementsIndexSerializer">ApiV1BonusesEmployeePayrollStatementsIndexSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1bonusesemployeepayrollstatementsindexserializer"></a>
<a id="schema_ApiV1BonusesEmployeePayrollStatementsIndexSerializer"></a>
<a id="tocSapiv1bonusesemployeepayrollstatementsindexserializer"></a>
<a id="tocsapiv1bonusesemployeepayrollstatementsindexserializer"></a>

```json
{
  "employee_payroll_statements": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "employee_name": "string",
      "employee_display_name": "string",
      "employee_num": "string",
      "closing_date": "1970-01-01",
      "pay_date": "1970-01-01",
      "fixed": true,
      "calc_status": "string",
      "calculated_at": "1970-01-01T00:00:00Z",
      "bonus_amount": "string",
      "total_allowance_amount": "string",
      "total_deduction_amount": "string",
      "net_payment_amount": "string",
      "gross_payment_amount": "string",
      "total_taxable_payment_amount": "string",
      "allowances": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "remark": "string"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_payroll_statements|[[ApiV1BonusesEmployeePayrollStatementSerializer](#schemaapiv1bonusesemployeepayrollstatementserializer)]|false|none|none|
|total_count|integer(int32)|false|none|合計件数|

<h2 id="tocS_ApiV1BonusesEmployeePayrollStatementSerializer">ApiV1BonusesEmployeePayrollStatementSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1bonusesemployeepayrollstatementserializer"></a>
<a id="schema_ApiV1BonusesEmployeePayrollStatementSerializer"></a>
<a id="tocSapiv1bonusesemployeepayrollstatementserializer"></a>
<a id="tocsapiv1bonusesemployeepayrollstatementserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "employee_name": "string",
  "employee_display_name": "string",
  "employee_num": "string",
  "closing_date": "1970-01-01",
  "pay_date": "1970-01-01",
  "fixed": true,
  "calc_status": "string",
  "calculated_at": "1970-01-01T00:00:00Z",
  "bonus_amount": "string",
  "total_allowance_amount": "string",
  "total_deduction_amount": "string",
  "net_payment_amount": "string",
  "gross_payment_amount": "string",
  "total_taxable_payment_amount": "string",
  "allowances": [
    {
      "name": "string",
      "amount": "string"
    }
  ],
  "deductions": [
    {
      "name": "string",
      "amount": "string"
    }
  ],
  "remark": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|賞与明細ID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|employee_name|string|false|none|従業員の姓名|
|employee_display_name|string|false|none|従業員の表示名|
|employee_num|string|false|none|従業員番号|
|closing_date|string(date)|false|none|確定日|
|pay_date|string(date)|false|none|支払日|
|fixed|boolean|false|none|賞与明細が確定されているかどうか|
|calc_status|string|false|none|計算状況ステータス calculating: 計算中, calculated: 計算完了, error: エラー|
|calculated_at|string(date-time) \| null|false|none|計算状況ステータスの更新日|
|bonus_amount|string \| null|false|none|賞与額|
|total_allowance_amount|string \| null|false|none|手当額合計|
|total_deduction_amount|string \| null|false|none|控除額合計|
|net_payment_amount|string \| null|false|none|差引支給額(手取り額)|
|gross_payment_amount|string \| null|false|none|総支給額(額面)|
|total_taxable_payment_amount|string \| null|false|none|課税対象支給額|
|allowances|[[ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer](#schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer)]|false|none|手当|
|deductions|[[ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer](#schemaapiv1employeepayrollstatementsemployeepayrollstatementitemserializer)]|false|none|控除項目（所得税、社会保険料等）|
|remark|string|false|none|備考|

<h2 id="tocS_ApiV1CompaniesEmployeeSerializer">ApiV1CompaniesEmployeeSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1companiesemployeeserializer"></a>
<a id="schema_ApiV1CompaniesEmployeeSerializer"></a>
<a id="tocSapiv1companiesemployeeserializer"></a>
<a id="tocsapiv1companiesemployeeserializer"></a>

```json
{
  "id": 0,
  "num": "string",
  "display_name": "string",
  "entry_date": "1970-01-01",
  "retire_date": "1970-01-01",
  "user_id": 0,
  "email": "string",
  "payroll_calculation": true,
  "closing_day": 31,
  "pay_day": 15,
  "month_of_pay_day": "next_month"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|従業員ID|
|num|string|false|none|従業員番号|
|display_name|string|false|none|従業員名（表示名）|
|entry_date|string(date)|false|none|入社日|
|retire_date|string(date) \| null|false|none|退職日|
|user_id|integer(int32) \| null|false|none|ユーザーID(従業員詳細未設定の場合、nullになります。)|
|email|string \| null|false|none|ログイン用メールアドレス(従業員詳細未設定の場合、nullになります。)|
|payroll_calculation|boolean|false|none|給与計算対象従業員の場合trueを返します|
|closing_day|integer \| null|false|none|締め日(給与計算対象外従業員の場合、nullを返します)|
|pay_day|integer \| null|false|none|支払日(給与計算対象外従業員の場合、nullを返します)|
|month_of_pay_day|string \| null|false|none|翌月払いか、当月払いか(給与計算対象外従業員の場合、nullを返します)|

<h2 id="tocS_ApiV1EmployeesProfileRuleUpdateRequestSerializer">ApiV1EmployeesProfileRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofileruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesProfileRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesprofileruleupdaterequestserializer"></a>
<a id="tocsapiv1employeesprofileruleupdaterequestserializer"></a>

```json
{
  "last_name": "山田",
  "first_name": "太郎",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "タロウ",
  "zipcode1": "000",
  "zipcode2": "0000",
  "prefecture_code": 4,
  "address": "string",
  "address_kana": "string",
  "phone1": "000",
  "phone2": "0000",
  "phone3": "0000",
  "residential_zipcode1": "000",
  "residential_zipcode2": "0000",
  "residential_prefecture_code": 4,
  "residential_address": "string",
  "residential_address_kana": "string",
  "employment_type": "board-member",
  "title": "string",
  "gender": "male",
  "married": true,
  "is_working_student": true,
  "widow_type": "na",
  "disability_type": "na",
  "email": "test@example.com",
  "householder_name": "山田 吾郎",
  "householder": "father"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_name|string|true|none|姓 null不可|
|first_name|string|true|none|名 null不可|
|last_name_kana|string|true|none|姓カナ|
|first_name_kana|string|true|none|名カナ|
|zipcode1|string|false|none|住民票住所の郵便番号1|
|zipcode2|string|false|none|住民票住所の郵便番号2|
|prefecture_code|integer|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string|false|none|住民票住所の市区町村以降の住所|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ|
|phone1|string|false|none|電話番号1（先頭番号、例:03-1111-222x の03部分）|
|phone2|string|false|none|電話番号2（中間番号、例:03-1111-222x の1111部分）|
|phone3|string|false|none|電話番号3（末尾番号、例:03-1111-222x の222x部分）|
|residential_zipcode1|string|false|none|現住所の郵便番号１|
|residential_zipcode2|string|false|none|現住所の郵便番号２|
|residential_prefecture_code|integer|false|none|現住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|residential_address|string|false|none|現住所の住所|
|residential_address_kana|string|false|none|現住所の住所カナ|
|employment_type|string|false|none|雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他|
|title|string|false|none|肩書|
|gender|string|false|none|性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）|
|married|boolean|false|none|null不可 配偶者の有無|
|is_working_student|boolean|false|none|null不可 勤労学生かどうか|
|widow_type|string|false|none|寡夫／寡婦かどうか null不可 na: 空白, widower: 寡夫, widow: 寡婦, special_widow: 特別寡婦, one_parent: ひとり親|
|disability_type|string|false|none|障害者かどうか null不可 na: 空白, general: 障害者, heavy: 特別障害者|
|email|string \| null|false|none|メールアドレス|
|householder_name|string|false|none|世帯主の名前<br>世帯主の続柄に myself:本人 を指定している場合は、世帯主の名前は自動で従業員名で更新するため指定できません。|
|householder|string|false|none|世帯主の続柄 myself:本人, husband:夫, wife:妻, father:父, mother:母, child:子供, senior_brother:兄, junior_brother:弟, senior_sister:姉, junior_sister:妹, grandchild:孫, grandfather:祖父, grandmother:祖母, father_in_law:義父, mother_in_law:義母, grandfather_in_law:義祖父, grandmother_in_law:義祖母, other:その他|

#### Enumerated Values

|Property|Value|
|---|---|
|employment_type|board-member|
|employment_type|regular|
|employment_type|fixed-term|
|employment_type|part-time|
|employment_type|temporary|
|employment_type|""|
|gender|unselected|
|gender|male|
|gender|female|
|widow_type|na|
|widow_type|widower|
|widow_type|widow|
|widow_type|special_widow|
|widow_type|one_parent|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|householder|myself|
|householder|husband|
|householder|wife|
|householder|father|
|householder|mother|
|householder|child|
|householder|senior_brother|
|householder|junior_brother|
|householder|senior_sister|
|householder|junior_sister|
|householder|grandchild|
|householder|grandfather|
|householder|grandmother|
|householder|father_in_law|
|householder|mother_in_law|
|householder|grandfather_in_law|
|householder|grandmother_in_law|
|householder|other|

<h2 id="tocS_ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer">ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesemployeemultihourlywageworkrecordsummaryserializer"></a>
<a id="schema_ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer"></a>
<a id="tocSapiv1employeesemployeemultihourlywageworkrecordsummaryserializer"></a>
<a id="tocsapiv1employeesemployeemultihourlywageworkrecordsummaryserializer"></a>

```json
{
  "name": "string",
  "total_normal_time_mins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|時給名|
|total_normal_time_mins|integer(int32)|false|none|所定内労働時間（分）|

<h2 id="tocS_ApiV1EmployeesWorkRecordTimeRangeSerializer">ApiV1EmployeesWorkRecordTimeRangeSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordtimerangeserializer"></a>
<a id="schema_ApiV1EmployeesWorkRecordTimeRangeSerializer"></a>
<a id="tocSapiv1employeesworkrecordtimerangeserializer"></a>
<a id="tocsapiv1employeesworkrecordtimerangeserializer"></a>

```json
{
  "clock_in_at": "2018-07-31 08:00:00",
  "clock_out_at": "2018-07-31 08:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clock_in_at|string(date-time)|true|none|開始時刻|
|clock_out_at|string(date-time)|true|none|終了時刻|

<h2 id="tocS_ApiV1EmployeesWorkRecordTimeRangeResponseSerializer">ApiV1EmployeesWorkRecordTimeRangeResponseSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordtimerangeresponseserializer"></a>
<a id="schema_ApiV1EmployeesWorkRecordTimeRangeResponseSerializer"></a>
<a id="tocSapiv1employeesworkrecordtimerangeresponseserializer"></a>
<a id="tocsapiv1employeesworkrecordtimerangeresponseserializer"></a>

```json
{
  "clock_in_at": "1970-01-01T00:00:00Z",
  "clock_out_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clock_in_at|string(date-time)|false|none|開始時刻|
|clock_out_at|string(date-time)|false|none|終了時刻|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayRequest">ApiV1EmployeesWorkRecordHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidayrequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayRequest"></a>
<a id="tocSapiv1employeesworkrecordholidayrequest"></a>
<a id="tocsapiv1employeesworkrecordholidayrequest"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "2018-07-31 08:00:00",
      "end_at": "2018-07-31 09:00:00"
    }
  ],
  "holiday_category": "annual_paid_holiday"
}
```

休暇の内訳。
full、morning_off、afternoon_off では mins と time_ranges を指定しません。
annual_paid_holiday と有給の special_holiday の half では mins を指定します。無給の special_holiday の half では mins を指定できません。
half を2つ組み合わせて全休にする場合は、どちらの half でも mins を指定できません。
compensatory_holiday では mins と time_ranges を指定しません。
annual_paid_holiday と special_holiday の hourly では、対象日に適用される勤務賃金設定の時間休の入力方式に従い、時間数方式の場合は mins、時間帯方式の場合は time_ranges を指定します。
hourly の mins は60分単位です。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest](#schemaapiv1employeesworkrecordannualpaidholidayrequest)|false|none|none|
|*oneOf*|[ApiV1EmployeesWorkRecordSpecialHolidayRequest](#schemaapiv1employeesworkrecordspecialholidayrequest)|false|none|none|
|*oneOf*|[ApiV1EmployeesWorkRecordCompensatoryHolidayRequest](#schemaapiv1employeesworkrecordcompensatoryholidayrequest)|false|none|none|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayResponse">ApiV1EmployeesWorkRecordHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidayresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayResponse"></a>
<a id="tocSapiv1employeesworkrecordholidayresponse"></a>
<a id="tocsapiv1employeesworkrecordholidayresponse"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z"
    }
  ],
  "holiday_category": "annual_paid_holiday"
}
```

休暇の内訳。
full では mins と time_ranges を返しません。
half では mins を返します。
morning_off、afternoon_off では mins を返さず、時間帯を持つ実績の場合は time_ranges を返します。
hourly では mins を返し、時間帯を持つ実績の場合は time_ranges も返します。

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse](#schemaapiv1employeesworkrecordannualpaidholidayresponse)|false|none|none|
|*oneOf*|[ApiV1EmployeesWorkRecordSpecialHolidayResponse](#schemaapiv1employeesworkrecordspecialholidayresponse)|false|none|none|
|*oneOf*|[ApiV1EmployeesWorkRecordCompensatoryHolidayResponse](#schemaapiv1employeesworkrecordcompensatoryholidayresponse)|false|none|none|

<h2 id="tocS_ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest">ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordannualpaidholidayrequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest"></a>
<a id="tocSapiv1employeesworkrecordannualpaidholidayrequest"></a>
<a id="tocsapiv1employeesworkrecordannualpaidholidayrequest"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "2018-07-31 08:00:00",
      "end_at": "2018-07-31 09:00:00"
    }
  ],
  "holiday_category": "annual_paid_holiday"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_type|[ApiV1EmployeesWorkRecordHolidayType](#schemaapiv1employeesworkrecordholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesRequest](#schemaapiv1employeesworkrecordholidaytimerangesrequest)|false|none|時間休の取得時間帯|
|holiday_category|string|true|none|休暇カテゴリ|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|
|holiday_type|hourly|
|holiday_category|annual_paid_holiday|

<h2 id="tocS_ApiV1EmployeesWorkRecordSpecialHolidayRequest">ApiV1EmployeesWorkRecordSpecialHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordspecialholidayrequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordSpecialHolidayRequest"></a>
<a id="tocSapiv1employeesworkrecordspecialholidayrequest"></a>
<a id="tocsapiv1employeesworkrecordspecialholidayrequest"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "2018-07-31 08:00:00",
      "end_at": "2018-07-31 09:00:00"
    }
  ],
  "holiday_category": "special_holiday",
  "special_holiday_setting_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_type|[ApiV1EmployeesWorkRecordHolidayType](#schemaapiv1employeesworkrecordholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesRequest](#schemaapiv1employeesworkrecordholidaytimerangesrequest)|false|none|時間休の取得時間帯|
|holiday_category|string|true|none|休暇カテゴリ|
|special_holiday_setting_id|[ApiV1EmployeesWorkRecordSpecialHolidaySettingId](#schemaapiv1employeesworkrecordspecialholidaysettingid)|true|none|特別休暇設定ID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|
|holiday_type|hourly|
|holiday_category|special_holiday|

<h2 id="tocS_ApiV1EmployeesWorkRecordCompensatoryHolidayRequest">ApiV1EmployeesWorkRecordCompensatoryHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordcompensatoryholidayrequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordCompensatoryHolidayRequest"></a>
<a id="tocSapiv1employeesworkrecordcompensatoryholidayrequest"></a>
<a id="tocsapiv1employeesworkrecordcompensatoryholidayrequest"></a>

```json
{
  "holiday_category": "compensatory_holiday",
  "holiday_type": "full",
  "source_date": "2018-07-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_category|string|true|none|休暇カテゴリ|
|holiday_type|[ApiV1EmployeesWorkRecordCompensatoryHolidayType](#schemaapiv1employeesworkrecordcompensatoryholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off）|
|source_date|[ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate](#schemaapiv1employeesworkrecordcompensatoryholidaysourcedate)|true|none|代休の元となる休日出勤日|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_category|compensatory_holiday|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTypeFields">ApiV1EmployeesWorkRecordHolidayTypeFields</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytypefields"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTypeFields"></a>
<a id="tocSapiv1employeesworkrecordholidaytypefields"></a>
<a id="tocsapiv1employeesworkrecordholidaytypefields"></a>

```json
{
  "holiday_type": "full"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_type|[ApiV1EmployeesWorkRecordHolidayType](#schemaapiv1employeesworkrecordholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|
|holiday_type|hourly|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeRequestFields">ApiV1EmployeesWorkRecordHolidayTimeRequestFields</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimerequestfields"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeRequestFields"></a>
<a id="tocSapiv1employeesworkrecordholidaytimerequestfields"></a>
<a id="tocsapiv1employeesworkrecordholidaytimerequestfields"></a>

```json
{
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "2018-07-31 08:00:00",
      "end_at": "2018-07-31 09:00:00"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesRequest](#schemaapiv1employeesworkrecordholidaytimerangesrequest)|false|none|時間休の取得時間帯|

<h2 id="tocS_ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse">ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordannualpaidholidayresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse"></a>
<a id="tocSapiv1employeesworkrecordannualpaidholidayresponse"></a>
<a id="tocsapiv1employeesworkrecordannualpaidholidayresponse"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z"
    }
  ],
  "holiday_category": "annual_paid_holiday"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_type|[ApiV1EmployeesWorkRecordHolidayType](#schemaapiv1employeesworkrecordholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesResponse](#schemaapiv1employeesworkrecordholidaytimerangesresponse)|false|none|時間休の取得時間帯|
|holiday_category|string|true|none|休暇カテゴリ|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|
|holiday_type|hourly|
|holiday_category|annual_paid_holiday|

<h2 id="tocS_ApiV1EmployeesWorkRecordSpecialHolidayResponse">ApiV1EmployeesWorkRecordSpecialHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordspecialholidayresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordSpecialHolidayResponse"></a>
<a id="tocSapiv1employeesworkrecordspecialholidayresponse"></a>
<a id="tocsapiv1employeesworkrecordspecialholidayresponse"></a>

```json
{
  "holiday_type": "full",
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z"
    }
  ],
  "holiday_category": "special_holiday",
  "special_holiday_setting_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_type|[ApiV1EmployeesWorkRecordHolidayType](#schemaapiv1employeesworkrecordholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesResponse](#schemaapiv1employeesworkrecordholidaytimerangesresponse)|false|none|時間休の取得時間帯|
|holiday_category|string|true|none|休暇カテゴリ|
|special_holiday_setting_id|[ApiV1EmployeesWorkRecordSpecialHolidaySettingId](#schemaapiv1employeesworkrecordspecialholidaysettingid)|true|none|特別休暇設定ID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|
|holiday_type|hourly|
|holiday_category|special_holiday|

<h2 id="tocS_ApiV1EmployeesWorkRecordCompensatoryHolidayResponse">ApiV1EmployeesWorkRecordCompensatoryHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordcompensatoryholidayresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordCompensatoryHolidayResponse"></a>
<a id="tocSapiv1employeesworkrecordcompensatoryholidayresponse"></a>
<a id="tocsapiv1employeesworkrecordcompensatoryholidayresponse"></a>

```json
{
  "holiday_category": "compensatory_holiday",
  "holiday_type": "full",
  "source_date": "2018-07-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday_category|string|true|none|休暇カテゴリ|
|holiday_type|[ApiV1EmployeesWorkRecordCompensatoryHolidayType](#schemaapiv1employeesworkrecordcompensatoryholidaytype)|true|none|取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off）|
|source_date|[ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate](#schemaapiv1employeesworkrecordcompensatoryholidaysourcedate)|true|none|代休の元となる休日出勤日|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_category|compensatory_holiday|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning_off|
|holiday_type|afternoon_off|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeResponseFields">ApiV1EmployeesWorkRecordHolidayTimeResponseFields</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimeresponsefields"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeResponseFields"></a>
<a id="tocSapiv1employeesworkrecordholidaytimeresponsefields"></a>
<a id="tocsapiv1employeesworkrecordholidaytimeresponsefields"></a>

```json
{
  "mins": 1,
  "time_ranges": [
    {
      "start_at": "1970-01-01T00:00:00Z",
      "end_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mins|[ApiV1EmployeesWorkRecordHolidayMins](#schemaapiv1employeesworkrecordholidaymins)|false|none|休暇により計上する時間（分単位）|
|time_ranges|[ApiV1EmployeesWorkRecordHolidayTimeRangesResponse](#schemaapiv1employeesworkrecordholidaytimerangesresponse)|false|none|時間休の取得時間帯|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayType">ApiV1EmployeesWorkRecordHolidayType</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytype"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayType"></a>
<a id="tocSapiv1employeesworkrecordholidaytype"></a>
<a id="tocsapiv1employeesworkrecordholidaytype"></a>

```json
"full"
```

取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）

<h2 id="tocS_ApiV1EmployeesWorkRecordCompensatoryHolidayType">ApiV1EmployeesWorkRecordCompensatoryHolidayType</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordcompensatoryholidaytype"></a>
<a id="schema_ApiV1EmployeesWorkRecordCompensatoryHolidayType"></a>
<a id="tocSapiv1employeesworkrecordcompensatoryholidaytype"></a>
<a id="tocsapiv1employeesworkrecordcompensatoryholidaytype"></a>

```json
"full"
```

取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off）

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayMins">ApiV1EmployeesWorkRecordHolidayMins</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaymins"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayMins"></a>
<a id="tocSapiv1employeesworkrecordholidaymins"></a>
<a id="tocsapiv1employeesworkrecordholidaymins"></a>

```json
1
```

休暇により計上する時間（分単位）

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeRangesRequest">ApiV1EmployeesWorkRecordHolidayTimeRangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimerangesrequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeRangesRequest"></a>
<a id="tocSapiv1employeesworkrecordholidaytimerangesrequest"></a>
<a id="tocsapiv1employeesworkrecordholidaytimerangesrequest"></a>

```json
[
  {
    "start_at": "2018-07-31 08:00:00",
    "end_at": "2018-07-31 09:00:00"
  }
]
```

時間休の取得時間帯

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeRangesResponse">ApiV1EmployeesWorkRecordHolidayTimeRangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimerangesresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeRangesResponse"></a>
<a id="tocSapiv1employeesworkrecordholidaytimerangesresponse"></a>
<a id="tocsapiv1employeesworkrecordholidaytimerangesresponse"></a>

```json
[
  {
    "start_at": "1970-01-01T00:00:00Z",
    "end_at": "1970-01-01T00:00:00Z"
  }
]
```

時間休の取得時間帯

<h2 id="tocS_ApiV1EmployeesWorkRecordSpecialHolidaySettingId">ApiV1EmployeesWorkRecordSpecialHolidaySettingId</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordspecialholidaysettingid"></a>
<a id="schema_ApiV1EmployeesWorkRecordSpecialHolidaySettingId"></a>
<a id="tocSapiv1employeesworkrecordspecialholidaysettingid"></a>
<a id="tocsapiv1employeesworkrecordspecialholidaysettingid"></a>

```json
1
```

特別休暇設定ID

<h2 id="tocS_ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate">ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordcompensatoryholidaysourcedate"></a>
<a id="schema_ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate"></a>
<a id="tocSapiv1employeesworkrecordcompensatoryholidaysourcedate"></a>
<a id="tocsapiv1employeesworkrecordcompensatoryholidaysourcedate"></a>

```json
"2018-07-31"
```

代休の元となる休日出勤日

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeRangeRequest">ApiV1EmployeesWorkRecordHolidayTimeRangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimerangerequest"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeRangeRequest"></a>
<a id="tocSapiv1employeesworkrecordholidaytimerangerequest"></a>
<a id="tocsapiv1employeesworkrecordholidaytimerangerequest"></a>

```json
{
  "start_at": "2018-07-31 08:00:00",
  "end_at": "2018-07-31 09:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_at|string(date-time)|true|none|取得開始時刻|
|end_at|string(date-time)|true|none|取得終了時刻|

<h2 id="tocS_ApiV1EmployeesWorkRecordHolidayTimeRangeResponse">ApiV1EmployeesWorkRecordHolidayTimeRangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordholidaytimerangeresponse"></a>
<a id="schema_ApiV1EmployeesWorkRecordHolidayTimeRangeResponse"></a>
<a id="tocSapiv1employeesworkrecordholidaytimerangeresponse"></a>
<a id="tocsapiv1employeesworkrecordholidaytimerangeresponse"></a>

```json
{
  "start_at": "1970-01-01T00:00:00Z",
  "end_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_at|string(date-time)|true|none|取得開始時刻|
|end_at|string(date-time)|true|none|取得終了時刻|

<h2 id="tocS_ApiV1EmployeesWelfarePensionInsuranceRuleSerializer">ApiV1EmployeesWelfarePensionInsuranceRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeswelfarepensioninsuranceruleserializer"></a>
<a id="schema_ApiV1EmployeesWelfarePensionInsuranceRuleSerializer"></a>
<a id="tocSapiv1employeeswelfarepensioninsuranceruleserializer"></a>
<a id="tocsapiv1employeeswelfarepensioninsuranceruleserializer"></a>

```json
{
  "id": 0,
  "child_allowance_contribution_bonus_calc_type": "manual",
  "child_allowance_contribution_salary_calc_type": "manual",
  "company_id": 0,
  "employee_id": 0,
  "entried": true,
  "manual_child_allowance_contribution_amount_bonus": 111.0001,
  "manual_child_allowance_contribution_amount_salary": 222.0001,
  "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
  "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
  "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
  "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
  "reference_num": "string",
  "standard_monthly_remuneration": 0,
  "welfare_pension_insurance_bonus_calc_type": "manual",
  "welfare_pension_insurance_salary_calc_type": "manual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|child_allowance_contribution_bonus_calc_type|string|false|none|賞与計算時の子ども・子育て拠出金の計算方法|
|child_allowance_contribution_salary_calc_type|string|false|none|給与計算時の子ども・子育て拠出金の計算方法|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|entried|boolean|false|none|厚生年金保険に加入しているかどうか|
|manual_child_allowance_contribution_amount_bonus|number(float) \| null|false|none|賞与計算時の子ども・子育て拠出金の直接指定金額|
|manual_child_allowance_contribution_amount_salary|number(float) \| null|false|none|給与計算時の子ども・子育て拠出金の直接指定金額|
|manual_welfare_pension_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の厚生年金保険料の直接指定金額（会社負担分）|
|manual_welfare_pension_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の厚生年金保険料の直接指定金額（会社負担分）|
|manual_welfare_pension_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の厚生年金保険料の直接指定金額（従業員負担分）|
|manual_welfare_pension_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の厚生年金保険料の直接指定金額（従業員負担分）|
|reference_num|string \| null|false|none|厚生年金保険の被保険者整理番号|
|standard_monthly_remuneration|integer(int32)|false|none|標準報酬月額|
|welfare_pension_insurance_bonus_calc_type|string|false|none|賞与計算時の厚生年金保険料の計算方法|
|welfare_pension_insurance_salary_calc_type|string|false|none|給与計算時の厚生年金保険料の計算方法|

#### Enumerated Values

|Property|Value|
|---|---|
|child_allowance_contribution_bonus_calc_type|auto|
|child_allowance_contribution_bonus_calc_type|manual|
|child_allowance_contribution_salary_calc_type|auto|
|child_allowance_contribution_salary_calc_type|manual|
|welfare_pension_insurance_bonus_calc_type|auto|
|welfare_pension_insurance_bonus_calc_type|manual|
|welfare_pension_insurance_salary_calc_type|auto|
|welfare_pension_insurance_salary_calc_type|manual|

<h2 id="tocS_ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer">ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeshealthinsuranceruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeshealthinsuranceruleupdaterequestserializer"></a>
<a id="tocsapiv1employeeshealthinsuranceruleupdaterequestserializer"></a>

```json
{
  "entried": true,
  "health_insurance_salary_calc_type": "manual",
  "health_insurance_bonus_calc_type": "manual",
  "manual_health_insurance_amount_of_employee_salary": 8888,
  "manual_health_insurance_amount_of_employee_bonus": 7777,
  "manual_health_insurance_amount_of_company_salary": 6666.0001,
  "manual_health_insurance_amount_of_company_bonus": 5555.0001,
  "care_insurance_salary_calc_type": "manual",
  "care_insurance_bonus_calc_type": "manual",
  "manual_care_insurance_amount_of_employee_salary": 4444,
  "manual_care_insurance_amount_of_employee_bonus": 3333,
  "manual_care_insurance_amount_of_company_salary": 2222.0001,
  "manual_care_insurance_amount_of_company_bonus": 1111.0001,
  "child_support_fund_salary_calc_type": "manual",
  "child_support_fund_bonus_calc_type": "manual",
  "manual_child_support_fund_amount_of_employee_salary": 4000,
  "manual_child_support_fund_amount_of_employee_bonus": 3000,
  "manual_child_support_fund_amount_of_company_salary": 2000.0001,
  "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
  "reference_num": "0000000000",
  "standard_monthly_remuneration": 58000,
  "health_insurance_qualification_required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entried|boolean|false|none|健康保険に加入しているかどうか null不可|
|health_insurance_salary_calc_type|string|false|none|給与計算時の健康保険料の計算方法|
|health_insurance_bonus_calc_type|string|false|none|賞与計算時の健康保険料の計算方法|
|manual_health_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の健康保険料の直接指定金額（従業員負担分）|
|manual_health_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の健康保険料の直接指定金額（従業員負担分）|
|manual_health_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の健康保険料の直接指定金額（会社負担分）|
|manual_health_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の健康保険料の直接指定金額（会社負担分）|
|care_insurance_salary_calc_type|string|false|none|給与計算時の介護保険料の計算方法|
|care_insurance_bonus_calc_type|string|false|none|賞与計算時の介護保険料の計算方法|
|manual_care_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の介護保険料の直接指定金額（従業員負担分）|
|manual_care_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の介護保険料の直接指定金額（従業員負担分）|
|manual_care_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の介護保険料の直接指定金額（会社負担分）|
|manual_care_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の介護保険料の直接指定金額（会社負担分）|
|child_support_fund_salary_calc_type|string|false|none|給与計算時の子ども・子育て支援金の計算方法|
|child_support_fund_bonus_calc_type|string|false|none|賞与計算時の子ども・子育て支援金の計算方法|
|manual_child_support_fund_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）|
|manual_child_support_fund_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）|
|manual_child_support_fund_amount_of_company_salary|number(float) \| null|false|none|給与計算時の子ども・子育て支援金の直接指定金額（会社負担分）|
|manual_child_support_fund_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の子ども・子育て支援金の直接指定金額（会社負担分）|
|reference_num|string|false|none|健康保険の被保険者整理番号|
|standard_monthly_remuneration|integer(int32)|true|none|標準報酬月額 null不可|
|health_insurance_qualification_required|boolean|false|none|健康保険の資格確認書の発行が必要かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|health_insurance_salary_calc_type|auto|
|health_insurance_salary_calc_type|manual|
|health_insurance_bonus_calc_type|auto|
|health_insurance_bonus_calc_type|manual|
|care_insurance_salary_calc_type|auto|
|care_insurance_salary_calc_type|manual|
|care_insurance_bonus_calc_type|auto|
|care_insurance_bonus_calc_type|manual|
|child_support_fund_salary_calc_type|auto|
|child_support_fund_salary_calc_type|manual|
|child_support_fund_bonus_calc_type|auto|
|child_support_fund_bonus_calc_type|manual|

<h2 id="tocS_ApiV1EmployeesProfileRuleSerializer">ApiV1EmployeesProfileRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofileruleserializer"></a>
<a id="schema_ApiV1EmployeesProfileRuleSerializer"></a>
<a id="tocSapiv1employeesprofileruleserializer"></a>
<a id="tocsapiv1employeesprofileruleserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "last_name": "string",
  "first_name": "string",
  "last_name_kana": "string",
  "first_name_kana": "string",
  "zipcode1": "000",
  "zipcode2": "0000",
  "prefecture_code": 4,
  "address": "string",
  "address_kana": "string",
  "phone1": "000",
  "phone2": "0000",
  "phone3": "0000",
  "residential_zipcode1": "000",
  "residential_zipcode2": "0000",
  "residential_prefecture_code": 4,
  "residential_address": "string",
  "residential_address_kana": "string",
  "employment_type": "string",
  "title": "string",
  "gender": "male",
  "married": true,
  "is_working_student": true,
  "widow_type": "string",
  "disability_type": "string",
  "email": "test@example.com",
  "householder_name": "山田 吾郎",
  "householder": "father"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|last_name|string|false|none|姓|
|first_name|string|false|none|名|
|last_name_kana|string|false|none|姓カナ|
|first_name_kana|string|false|none|名カナ|
|zipcode1|string \| null|false|none|住民票住所の郵便番号1|
|zipcode2|string \| null|false|none|住民票住所の郵便番号2|
|prefecture_code|integer \| null|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string \| null|false|none|住民票住所の市区町村以降の住所|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ|
|phone1|string \| null|false|none|電話番号1（先頭番号、例:03-1111-222x の03部分）|
|phone2|string \| null|false|none|電話番号2（中間番号、例:03-1111-222x の1111部分）|
|phone3|string \| null|false|none|電話番号3（末尾番号、例:03-1111-222x の222x部分）|
|residential_zipcode1|string \| null|false|none|現住所の郵便番号１|
|residential_zipcode2|string \| null|false|none|現住所の郵便番号２|
|residential_prefecture_code|integer \| null|false|none|現住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|residential_address|string \| null|false|none|現住所の住所|
|residential_address_kana|string \| null|false|none|現住所の住所カナ|
|employment_type|string \| null|false|none|雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他|
|title|string \| null|false|none|肩書|
|gender|string|false|none|性別　unselected: 未選択, male: 男性, female: 女性|
|married|boolean|false|none|配偶者の有無|
|is_working_student|boolean|false|none|勤労学生かどうか|
|widow_type|string|false|none|寡夫／寡婦かどうか na: 空白, widower: 寡夫, widow: 寡婦, special_widow: 特別寡婦, one_parent: ひとり親|
|disability_type|string|false|none|障害者かどうか na: 空白, general: 障害者, heavy: 特別障害者|
|email|string \| null|false|none|メールアドレス|
|householder_name|string|false|none|世帯主の名前 世帯主の続柄がmyselfの場合は空白|
|householder|string \| null|false|none|世帯主の続柄 myself:本人, husband:夫, wife:妻, father:父, mother:母, child:子供, senior_brother:兄, junior_brother:弟, senior_sister:姉, junior_sister:妹, grandchild:孫, grandfather:祖父, grandmother:祖母, father_in_law:義父, mother_in_law:義母, grandfather_in_law:義祖父, grandmother_in_law:義祖母, other:その他|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|unselected|
|gender|male|
|gender|female|
|householder|myself|
|householder|husband|
|householder|wife|
|householder|father|
|householder|mother|
|householder|child|
|householder|senior_brother|
|householder|junior_brother|
|householder|senior_sister|
|householder|junior_sister|
|householder|grandchild|
|householder|grandfather|
|householder|grandmother|
|householder|father_in_law|
|householder|mother_in_law|
|householder|grandfather_in_law|
|householder|grandmother_in_law|
|householder|other|

<h2 id="tocS_ApiV1EmployeesDependentRuleUpdateRequestSerializer">ApiV1EmployeesDependentRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdependentruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesDependentRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesdependentruleupdaterequestserializer"></a>
<a id="tocsapiv1employeesdependentruleupdaterequestserializer"></a>

```json
{
  "id": 1,
  "last_name": "山田",
  "first_name": "花子",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "ハナコ",
  "gender": "male",
  "relationship": "spouse",
  "birth_date": "1999-01-01",
  "residence_type": "live_in",
  "zipcode1": "000",
  "zipcode2": "0000",
  "prefecture_code": 4,
  "address": "string",
  "address_kana": "string",
  "base_pension_num": "1234567890",
  "income": 0,
  "annual_revenue": 0,
  "disability_type": "na",
  "occupation": "string",
  "annual_remittance_amount": 0,
  "employment_insurance_receive_status": "receiving_employment_insurance",
  "employment_insurance_receives_from": "2021-04-01",
  "health_insurance_qualification_required": true,
  "phone_type": "unselected",
  "phone1": "000",
  "phone2": "0000",
  "phone3": "0000",
  "destroy": false,
  "social_insurance_and_tax_dependent": "social_insurance_and_tax",
  "social_insurance_dependent_acquisition_date": "1970-01-01",
  "social_insurance_dependent_acquisition_reason": "",
  "social_insurance_other_dependent_acquisition_reason": "string",
  "social_insurance_dependent_disqualification_date": "1970-01-01",
  "social_insurance_dependent_disqualification_reason": "",
  "social_insurance_other_dependent_disqualification_reason": "string",
  "tax_dependent_acquisition_date": "1970-01-01",
  "tax_dependent_acquisition_reason": "",
  "tax_other_dependent_acquisition_reason": "string",
  "tax_dependent_disqualification_date": "1970-01-01",
  "tax_dependent_disqualification_reason": "",
  "tax_other_dependent_disqualification_reason": "string",
  "non_resident_dependents_reason": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|家族情報ルールID（idがない場合は新規作成になる)|
|last_name|string|true|none|姓 null不可|
|first_name|string|true|none|名 null不可|
|last_name_kana|string|false|none|姓カナ|
|first_name_kana|string|false|none|名カナ|
|gender|string|true|none|性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）|
|relationship|string|true|none|続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子|
|birth_date|string(date)|true|none|生年月日 null不可|
|residence_type|string|true|none|同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)|
|zipcode1|string|false|none|住民票住所の郵便番号1|
|zipcode2|string|false|none|住民票住所の郵便番号2|
|prefecture_code|integer|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string|false|none|住民票住所の市区町村以降の住所|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ|
|base_pension_num|string|false|none|基礎年金番号|
|income|integer(int32)|true|none|年間所得 null不可|
|annual_revenue|integer(int32)|true|none|年間収入 null不可|
|disability_type|string|true|none|障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者|
|occupation|string|false|none|職業|
|annual_remittance_amount|integer(int32)|false|none|一年間の送金額|
|employment_insurance_receive_status|string(string) \| null|false|none|雇用保険受給の有無<br>- unselected 未選択<br>- receiving_employment_insurance 雇用保険受給有り<br>- not_receiving_employment_insurance 雇用保険受給無し<br>- pending_employment_insurance 申請中|
|employment_insurance_receives_from|string(date) \| null|false|none|雇用保険受給開始年月日 employment_insurance_receive_statusが未選択、無しの場合は指定できません。|
|health_insurance_qualification_required|boolean|false|none|健康保険の資格確認書の発行が必要かどうか|
|phone_type|string \| null|false|none|電話番号の種別<br>- unselected 未選択<br>- home 自宅<br>- office 勤務先<br>- mobile 携帯<br>- other その他|
|phone1|string \| null|false|none|電話番号1（先頭番号、例:03-1111-222x の03部分）|
|phone2|string \| null|false|none|電話番号2（中間番号、例:03-1111-222x の1111部分）|
|phone3|string \| null|false|none|電話番号3（末尾番号、例:03-1111-222x の222x部分）|
|destroy|boolean|false|none|家族情報を削除するか|
|social_insurance_and_tax_dependent|string|true|none|扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない|
|social_insurance_dependent_acquisition_date|string(date) \| null|false|none|社会保険の扶養加入日|
|social_insurance_dependent_acquisition_reason|string|false|none|社会保険の扶養加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": 未選択, birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他|
|social_insurance_other_dependent_acquisition_reason|string \| null|false|none|社会保険のその他の扶養加入理由|
|social_insurance_dependent_disqualification_date|string(date) \| null|false|none|社会保険の扶養喪失日|
|social_insurance_dependent_disqualification_reason|string|false|none|社会保険の扶養喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他|
|social_insurance_other_dependent_disqualification_reason|string \| null|false|none|社会保険のその他の扶養喪失理由|
|tax_dependent_acquisition_date|string(date) \| null|false|none|税扶養の加入日|
|tax_dependent_acquisition_reason|string|false|none|税扶養の加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他|
|tax_other_dependent_acquisition_reason|string \| null|false|none|税扶養のその他の加入理由|
|tax_dependent_disqualification_date|string(date) \| null|false|none|税扶養の喪失日|
|tax_dependent_disqualification_reason|string|false|none|税扶養の喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他|
|tax_other_dependent_disqualification_reason|string \| null|false|none|税扶養のその他の喪失理由|
|non_resident_dependents_reason|string(string)|false|none|非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|unselected|
|gender|male|
|gender|female|
|relationship|spouse|
|relationship|father|
|relationship|mother|
|relationship|child|
|relationship|senior_brother|
|relationship|junior_brother|
|relationship|senior_sister|
|relationship|junior_sister|
|relationship|grandchild|
|relationship|grandfather|
|relationship|grandmother|
|relationship|father_in_law|
|relationship|mother_in_law|
|relationship|grandfather_in_law|
|relationship|grandmother_in_law|
|relationship|other|
|relationship|great_grandfather|
|relationship|great_grandmother|
|relationship|spouses_child|
|residence_type|live_in|
|residence_type|resident|
|residence_type|non_resident|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|employment_insurance_receive_status|unselected|
|employment_insurance_receive_status|receiving_employment_insurance|
|employment_insurance_receive_status|not_receiving_employment_insurance|
|employment_insurance_receive_status|pending_employment_insurance|
|phone_type|unselected|
|phone_type|home|
|phone_type|office|
|phone_type|mobile|
|phone_type|other|
|social_insurance_and_tax_dependent|social_insurance_and_tax|
|social_insurance_and_tax_dependent|tax_only|
|social_insurance_and_tax_dependent|social_insurance_only|
|social_insurance_and_tax_dependent|not_dependent|
|social_insurance_dependent_acquisition_reason|""|
|social_insurance_dependent_acquisition_reason|start_working|
|social_insurance_dependent_acquisition_reason|marriage|
|social_insurance_dependent_acquisition_reason|turnover|
|social_insurance_dependent_acquisition_reason|decrease_in_income|
|social_insurance_dependent_acquisition_reason|other|
|social_insurance_dependent_acquisition_reason|birth|
|social_insurance_dependent_acquisition_reason|live_in|
|social_insurance_dependent_disqualification_reason|""|
|social_insurance_dependent_disqualification_reason|death|
|social_insurance_dependent_disqualification_reason|divorce|
|social_insurance_dependent_disqualification_reason|start_working_or_increase_in_income|
|social_insurance_dependent_disqualification_reason|reach_75_years_old|
|social_insurance_dependent_disqualification_reason|disability|
|social_insurance_dependent_disqualification_reason|other|
|social_insurance_dependent_disqualification_reason|start_working|
|social_insurance_dependent_disqualification_reason|increase_in_income|
|tax_dependent_acquisition_reason|""|
|tax_dependent_acquisition_reason|start_working|
|tax_dependent_acquisition_reason|marriage|
|tax_dependent_acquisition_reason|turnover|
|tax_dependent_acquisition_reason|decrease_in_income|
|tax_dependent_acquisition_reason|other|
|tax_dependent_acquisition_reason|birth|
|tax_dependent_acquisition_reason|live_in|
|tax_dependent_disqualification_reason|""|
|tax_dependent_disqualification_reason|death|
|tax_dependent_disqualification_reason|divorce|
|tax_dependent_disqualification_reason|start_working_or_increase_in_income|
|tax_dependent_disqualification_reason|reach_75_years_old|
|tax_dependent_disqualification_reason|disability|
|tax_dependent_disqualification_reason|other|
|tax_dependent_disqualification_reason|start_working|
|tax_dependent_disqualification_reason|increase_in_income|
|non_resident_dependents_reason|none|
|non_resident_dependents_reason|over_16_to_under_30_or_over_70|
|non_resident_dependents_reason|study_abroad|
|non_resident_dependents_reason|handicapped|
|non_resident_dependents_reason|over_38_man|

<h2 id="tocS_ApiV1EmployeesTimeClockSerializer">ApiV1EmployeesTimeClockSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockserializer"></a>
<a id="schema_ApiV1EmployeesTimeClockSerializer"></a>
<a id="tocSapiv1employeestimeclockserializer"></a>
<a id="tocsapiv1employeestimeclockserializer"></a>

```json
{
  "id": 1,
  "date": "1970-01-01",
  "type": "clock_in",
  "datetime": "1970-01-01T00:00:00Z",
  "original_datetime": "1970-01-01T00:00:00Z",
  "note": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|打刻ID|
|date|string(date)|false|none|打刻日|
|type|string|false|none|打刻種別(clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤)|
|datetime|string(date-time)|false|none|打刻時刻|
|original_datetime|string(date-time)|false|none|オリジナルの打刻時間|
|note|string|false|none|打刻メモ|

#### Enumerated Values

|Property|Value|
|---|---|
|type|clock_in|
|type|break_begin|
|type|break_end|
|type|clock_out|

<h2 id="tocS_ApiV1EmployeesWorkRecordSummarySerializer">ApiV1EmployeesWorkRecordSummarySerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordsummaryserializer"></a>
<a id="schema_ApiV1EmployeesWorkRecordSummarySerializer"></a>
<a id="tocSapiv1employeesworkrecordsummaryserializer"></a>
<a id="tocsapiv1employeesworkrecordsummaryserializer"></a>

```json
{
  "year": 0,
  "month": 1,
  "start_date": "1970-01-01",
  "end_date": "1970-01-01",
  "work_days": 0,
  "total_work_mins": 0,
  "total_normal_work_mins": 0,
  "total_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_overtime_within_normal_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "num_absences": 0,
  "num_paid_holidays": 0,
  "num_paid_holidays_and_hours": {
    "days": 0,
    "hours": 0
  },
  "num_paid_holidays_left": 0,
  "num_paid_holidays_and_hours_left": {
    "days": 0,
    "hours": 0
  },
  "num_substitute_holidays_used": 0,
  "num_compensatory_holidays_used": 0,
  "num_special_holidays_used": 0,
  "num_special_holidays_and_hours_used": {
    "days": 0,
    "hours": 0
  },
  "total_lateness_and_early_leaving_mins": 0,
  "multi_hourly_wages": [
    {
      "name": "string",
      "total_normal_time_mins": 0
    }
  ],
  "work_records": [
    {
      "break_records": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "work_record_segments": [
        {
          "clock_in_at": "1970-01-01T00:00:00Z",
          "clock_out_at": "1970-01-01T00:00:00Z"
        }
      ],
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z",
      "date": "1970-01-01T00:00:00Z",
      "day_pattern": "normal_day",
      "schedule_pattern": "",
      "early_leaving_mins": 0,
      "half_special_holiday_mins": 0,
      "hourly_special_holiday_mins": 0,
      "is_absence": false,
      "is_editable": true,
      "lateness_mins": 0,
      "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
      "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
      "normal_work_mins": 0,
      "note": "string",
      "paid_holidays": [
        {
          "type": "half",
          "mins": 240,
          "days": 0.5
        }
      ],
      "holidays": [
        {
          "holiday_type": "full",
          "mins": 1,
          "time_ranges": [
            {
              "start_at": "1970-01-01T00:00:00Z",
              "end_at": "1970-01-01T00:00:00Z"
            }
          ],
          "holiday_category": "annual_paid_holiday"
        }
      ],
      "special_holiday": 0,
      "special_holiday_setting_id": 0,
      "use_attendance_deduction": true,
      "use_default_work_pattern": true,
      "use_half_compensatory_holiday": false,
      "total_overtime_work_mins": 0,
      "total_prescribed_holiday_work_mins": 0,
      "total_holiday_work_mins": 0,
      "total_latenight_work_mins": 0,
      "not_auto_calc_work_time": false,
      "total_excess_statutory_work_mins": 0,
      "total_latenight_excess_statutory_work_mins": 0,
      "total_overtime_within_statutory_work_mins": 0,
      "total_latenight_overtime_within_statutory_work_mins": 0,
      "total_overtime_except_normal_work_mins": 0,
      "total_latenight_overtime_except_normal_work_mins": 0
    }
  ],
  "total_shortage_work_mins": 0,
  "total_deemed_paid_excess_statutory_work_mins": 0,
  "total_deemed_paid_overtime_within_statutory_work_mins": 0,
  "total_deemed_paid_overtime_except_normal_work_mins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|year|integer(int32)|false|none|給与支払い年|
|month|integer(int32)|false|none|給与支払い月|
|start_date|string(date)|false|none|集計開始日|
|end_date|string(date)|false|none|集計終了日|
|work_days|number(float)|false|none|労働日数|
|total_work_mins|integer(int32)|false|none|総勤務時間（分）|
|total_normal_work_mins|integer(int32)|false|none|所定内労働時間（分）|
|total_excess_statutory_work_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 給与計算に用いられる法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください|
|total_overtime_within_statutory_work_mins|integer(int32)|false|none|給与計算に用いられる法定内残業時間（分）|
|total_overtime_except_normal_work_mins|integer(int32)|false|none|所定外法定外労働時間|
|total_overtime_within_normal_work_mins|integer(int32)|false|none|所定内法定外労働時間（裁量労働制の場合はみなしベース）|
|total_prescribed_holiday_work_mins|integer(int32)|false|none|所定休日労働時間（分）|
|total_holiday_work_mins|integer(int32)|false|none|法定休日労働時間（分）|
|total_latenight_work_mins|integer(int32)|false|none|深夜労働allow(company)時間（分）|
|num_absences|number(float)|false|none|欠勤日数|
|num_paid_holidays|number(float)|false|none|有給取得日数|
|num_paid_holidays_and_hours|[ApiV1HolidaysAndHoursSerializer](#schemaapiv1holidaysandhoursserializer)|false|none|none|
|num_paid_holidays_left|number(float)|false|none|有給残日数|
|num_paid_holidays_and_hours_left|[ApiV1HolidaysAndHoursSerializer](#schemaapiv1holidaysandhoursserializer)|false|none|none|
|num_substitute_holidays_used|number(float)|false|none|振替休日の使用日数|
|num_compensatory_holidays_used|number(float)|false|none|代休の使用日数|
|num_special_holidays_used|number(float)|false|none|特別休暇の使用日数|
|num_special_holidays_and_hours_used|[ApiV1HolidaysAndHoursSerializer](#schemaapiv1holidaysandhoursserializer)|false|none|none|
|total_lateness_and_early_leaving_mins|integer(int32)|false|none|遅刻早退時間（分）|
|multi_hourly_wages|[[ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer](#schemaapiv1employeesemployeemultihourlywageworkrecordsummaryserializer)]|false|none|複数時給の労働時間の内訳（複数時給を設定している従業員のみ）|
|work_records|[[ApiV1EmployeesWorkRecordSerializer](#schemaapiv1employeesworkrecordserializer) \| [LegacyApiV1EmployeesWorkRecordSerializer](#schemalegacyapiv1employeesworkrecordserializer)]|false|none|日々の勤怠情報|
|total_shortage_work_mins|integer(int32) \| null|false|none|不足時間（分）|
|total_deemed_paid_excess_statutory_work_mins|integer(int32) \| null|false|none|**Deprecated.** [deprecated] みなし外の法定内残業時間（分） ※ 削除予定のため total_deemed_paid_overtime_within_statutory_work_mins を参照してください|
|total_deemed_paid_overtime_within_statutory_work_mins|integer(int32) \| null|false|none|みなし外の法定内残業時間（分）|
|total_deemed_paid_overtime_except_normal_work_mins|integer(int32) \| null|false|none|みなし外の時間外労働時間（分）|

<h2 id="tocS_ApiV1EmployeesWorkRecordSerializer">ApiV1EmployeesWorkRecordSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordserializer"></a>
<a id="schema_ApiV1EmployeesWorkRecordSerializer"></a>
<a id="tocSapiv1employeesworkrecordserializer"></a>
<a id="tocsapiv1employeesworkrecordserializer"></a>

```json
{
  "break_records": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "clock_in_at": "1970-01-01T00:00:00Z",
  "clock_out_at": "1970-01-01T00:00:00Z",
  "date": "1970-01-01T00:00:00Z",
  "day_pattern": "normal_day",
  "schedule_pattern": "",
  "early_leaving_mins": 0,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "is_absence": false,
  "is_editable": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
  "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holidays": [
    {
      "type": "half",
      "mins": 240,
      "days": 0.5
    }
  ],
  "holidays": [
    {
      "holiday_type": "full",
      "mins": 1,
      "time_ranges": [
        {
          "start_at": "1970-01-01T00:00:00Z",
          "end_at": "1970-01-01T00:00:00Z"
        }
      ],
      "holiday_category": "annual_paid_holiday"
    }
  ],
  "special_holiday": 0,
  "special_holiday_setting_id": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true,
  "use_half_compensatory_holiday": false,
  "total_overtime_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "not_auto_calc_work_time": false,
  "total_excess_statutory_work_mins": 0,
  "total_latenight_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_latenight_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_latenight_overtime_except_normal_work_mins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|break_records|[[ApiV1EmployeesWorkRecordTimeRangeResponseSerializer](#schemaapiv1employeesworkrecordtimerangeresponseserializer)]|false|none|休憩時間のリスト|
|work_record_segments|[[ApiV1EmployeesWorkRecordTimeRangeResponseSerializer](#schemaapiv1employeesworkrecordtimerangeresponseserializer)]|false|none|出退勤のリスト<br>  - 登録されている全ての出退勤時間のリストを返します。|
|clock_in_at|string(date-time) \| null|false|none|出勤時刻<br>  - 出勤時刻を返します。出退勤が複数登録されている場合は、最初の出退勤の出勤時間を返します。|
|clock_out_at|string(date-time) \| null|false|none|退勤時刻<br>  - 退勤時刻を返します。出退勤が複数登録されている場合は、最後の出退勤の退勤時間を返します。|
|date|string(date-time)|false|none|対象日付|
|day_pattern|string|false|none|勤務パターン<br>- normal_day: 所定労働日<br>- prescribed_holiday: 所定休日<br>- legal_holiday: 法定休日|
|schedule_pattern|string|false|none|スケジュールパターン<br>- substitute_holiday_work: 振替出勤<br>- substitute_holiday: 振替休日<br>- compensatory_holiday_work: 代休出勤<br>- compensatory_holiday: 代休<br>- special_holiday: 特別休暇|
|early_leaving_mins|integer(int32)|false|none|早退分の時間（分単位）|
|half_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|hourly_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|is_absence|boolean|false|none|欠勤かどうか|
|is_editable|boolean|false|none|勤怠データが編集可能かどうか|
|lateness_mins|integer(int32)|false|none|遅刻分の時間（分単位）|
|normal_work_clock_in_at|string(date-time) \| null|false|none|所定労働開始時刻|
|normal_work_clock_out_at|string(date-time) \| null|false|none|所定労働終了時刻|
|normal_work_mins|integer(int32)|false|none|所定労働時間|
|note|string|false|none|勤怠メモ|
|paid_holidays|[object]|false|none|**Deprecated.** [deprecated] 年次有給休暇の実績 ※ 削除予定のため holidays を参照してください|
|holidays|[[ApiV1EmployeesWorkRecordHolidayResponse](#schemaapiv1employeesworkrecordholidayresponse)]|false|none|休暇の内訳（年次有給休暇、特別休暇、代休）。<br>full では mins と time_ranges を返しません。half では mins を返します。<br>morning_off、afternoon_off では mins を返さず、時間帯を持つ実績の場合は time_ranges を返します。<br>hourly は年休・特休のみで、mins を返し、時間帯を持つ実績の場合は time_ranges も返します。|
|special_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日に対する特別休暇取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_special_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_special_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください|
|special_holiday_setting_id|integer(int32) \| null|false|none|**Deprecated.** [deprecated] 特別休暇設定ID ※ 削除予定のため holidays を参照してください|
|use_attendance_deduction|boolean|false|none|欠勤・遅刻・早退を控除対象時間に算入するかどうか|
|use_default_work_pattern|boolean|false|none|デフォルトの勤務時間設定を使っているかどうか|
|use_half_compensatory_holiday|boolean|false|none|**Deprecated.** [deprecated] 代休の半休を利用したかどうか ※ 削除予定のため holidays を参照してください|
|total_overtime_work_mins|integer(int32)|false|none|時間外労働時間（分）（Webの勤怠登録画面にて詳細項目の「勤務時間の長さを自動で計算しない」にチェックを入れた場合0が返却されます。時間外労働時間はtotal_overtime_except_normal_work_minsを参照してください。）|
|total_prescribed_holiday_work_mins|integer(int32)|false|none|所定休日労働時間（分）|
|total_holiday_work_mins|integer(int32)|false|none|法定休日労働時間（分）|
|total_latenight_work_mins|integer(int32)|false|none|深夜労働時間（分）|
|not_auto_calc_work_time|boolean|false|none|勤怠登録時に勤務時間の長さを自動で計算しないかどうか|
|total_excess_statutory_work_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください|
|total_latenight_excess_statutory_work_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 深夜の法定内残業時間（分） ※ 削除予定のため total_latenight_overtime_within_statutory_work_mins を参照してください|
|total_overtime_within_statutory_work_mins|integer(int32)|false|none|法定内残業時間（分）|
|total_latenight_overtime_within_statutory_work_mins|integer(int32)|false|none|深夜の法定内残業時間（分）|
|total_overtime_except_normal_work_mins|integer(int32)|false|none|所定外法定外労働時間（分）|
|total_latenight_overtime_except_normal_work_mins|integer(int32)|false|none|深夜の所定外法定外労働時間（分）|

#### Enumerated Values

|Property|Value|
|---|---|
|day_pattern|normal_day|
|day_pattern|prescribed_holiday|
|day_pattern|legal_holiday|
|schedule_pattern|""|
|schedule_pattern|substitute_holiday_work|
|schedule_pattern|substitute_holiday|
|schedule_pattern|compensatory_holiday_work|
|schedule_pattern|compensatory_holiday|
|schedule_pattern|special_holiday|

<h2 id="tocS_LegacyApiV1EmployeesWorkRecordSerializer">LegacyApiV1EmployeesWorkRecordSerializer</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapiv1employeesworkrecordserializer"></a>
<a id="schema_LegacyApiV1EmployeesWorkRecordSerializer"></a>
<a id="tocSlegacyapiv1employeesworkrecordserializer"></a>
<a id="tocslegacyapiv1employeesworkrecordserializer"></a>

```json
{
  "break_records": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "1970-01-01T00:00:00Z",
      "clock_out_at": "1970-01-01T00:00:00Z"
    }
  ],
  "clock_in_at": "1970-01-01T00:00:00Z",
  "clock_out_at": "1970-01-01T00:00:00Z",
  "date": "1970-01-01T00:00:00Z",
  "day_pattern": "normal_day",
  "schedule_pattern": "",
  "early_leaving_mins": 0,
  "half_paid_holiday_mins": 0,
  "half_special_holiday_mins": 0,
  "hourly_paid_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "is_absence": false,
  "is_editable": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "1970-01-01T00:00:00Z",
  "normal_work_clock_out_at": "1970-01-01T00:00:00Z",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holiday": 0,
  "special_holiday": 0,
  "special_holiday_setting_id": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true,
  "use_half_compensatory_holiday": false,
  "total_overtime_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "not_auto_calc_work_time": false,
  "total_excess_statutory_work_mins": 0,
  "total_latenight_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_latenight_overtime_within_statutory_work_mins": 0,
  "total_overtime_except_normal_work_mins": 0,
  "total_latenight_overtime_except_normal_work_mins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|break_records|[[ApiV1EmployeesWorkRecordTimeRangeResponseSerializer](#schemaapiv1employeesworkrecordtimerangeresponseserializer)]|false|none|休憩時間のリスト|
|work_record_segments|[[ApiV1EmployeesWorkRecordTimeRangeResponseSerializer](#schemaapiv1employeesworkrecordtimerangeresponseserializer)]|false|none|出退勤のリスト<br>  - 登録されている全ての出退勤時間のリストを返します。|
|clock_in_at|string(date-time) \| null|false|none|出勤時刻<br>  - 出勤時刻を返します。出退勤が複数登録されている場合は、最初の出退勤の出勤時間を返します。|
|clock_out_at|string(date-time) \| null|false|none|退勤時刻<br>  - 退勤時刻を返します。出退勤が複数登録されている場合は、最後の出退勤の退勤時間を返します。|
|date|string(date-time)|false|none|対象日付|
|day_pattern|string|false|none|勤務パターン<br>- normal_day: 所定労働日<br>- prescribed_holiday: 所定休日<br>- legal_holiday: 法定休日|
|schedule_pattern|string|false|none|スケジュールパターン<br>- substitute_holiday_work: 振替出勤<br>- substitute_holiday: 振替休日<br>- compensatory_holiday_work: 代休出勤<br>- compensatory_holiday: 代休<br>- special_holiday: 特別休暇|
|early_leaving_mins|integer(int32)|false|none|早退分の時間（分単位）|
|half_paid_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 有給休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|half_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|hourly_paid_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 有給休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|hourly_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください|
|is_absence|boolean|false|none|欠勤かどうか|
|is_editable|boolean|false|none|勤怠データが編集可能かどうか|
|lateness_mins|integer(int32)|false|none|遅刻分の時間（分単位）|
|normal_work_clock_in_at|string(date-time) \| null|false|none|所定労働開始時刻|
|normal_work_clock_out_at|string(date-time) \| null|false|none|所定労働終了時刻|
|normal_work_mins|integer(int32)|false|none|所定労働時間|
|note|string|false|none|勤怠メモ|
|paid_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日に対する有給取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_paid_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_paid_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください|
|special_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日に対する特別休暇取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_special_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_special_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください|
|special_holiday_setting_id|integer(int32) \| null|false|none|**Deprecated.** [deprecated] 特別休暇設定ID ※ 削除予定のため holidays を参照してください|
|use_attendance_deduction|boolean|false|none|欠勤・遅刻・早退を控除対象時間に算入するかどうか|
|use_default_work_pattern|boolean|false|none|デフォルトの勤務時間設定を使っているかどうか|
|use_half_compensatory_holiday|boolean|false|none|**Deprecated.** [deprecated] 代休の半休を利用したかどうか ※ 削除予定のため holidays を参照してください|
|total_overtime_work_mins|integer(int32)|false|none|時間外労働時間（分）（Webの勤怠登録画面にて詳細項目の「勤務時間の長さを自動で計算しない」にチェックを入れた場合0が返却されます。時間外労働時間はtotal_overtime_except_normal_work_minsを参照してください。）|
|total_prescribed_holiday_work_mins|integer(int32)|false|none|所定休日労働時間（分）|
|total_holiday_work_mins|integer(int32)|false|none|法定休日労働時間（分）|
|total_latenight_work_mins|integer(int32)|false|none|深夜労働時間（分）|
|not_auto_calc_work_time|boolean|false|none|勤怠登録時に勤務時間の長さを自動で計算しないかどうか|
|total_excess_statutory_work_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください|
|total_latenight_excess_statutory_work_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 深夜の法定内残業時間（分） ※ 削除予定のため total_latenight_overtime_within_statutory_work_mins を参照してください|
|total_overtime_within_statutory_work_mins|integer(int32)|false|none|法定内残業時間（分）|
|total_latenight_overtime_within_statutory_work_mins|integer(int32)|false|none|深夜の法定内残業時間（分）|
|total_overtime_except_normal_work_mins|integer(int32)|false|none|所定外法定外労働時間（分）|
|total_latenight_overtime_except_normal_work_mins|integer(int32)|false|none|深夜の所定外法定外労働時間（分）|

#### Enumerated Values

|Property|Value|
|---|---|
|day_pattern|normal_day|
|day_pattern|prescribed_holiday|
|day_pattern|legal_holiday|
|schedule_pattern|""|
|schedule_pattern|substitute_holiday_work|
|schedule_pattern|substitute_holiday|
|schedule_pattern|compensatory_holiday_work|
|schedule_pattern|compensatory_holiday|
|schedule_pattern|special_holiday|

<h2 id="tocS_ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer">ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeswelfarepensioninsuranceruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeswelfarepensioninsuranceruleupdaterequestserializer"></a>
<a id="tocsapiv1employeeswelfarepensioninsuranceruleupdaterequestserializer"></a>

```json
{
  "entried": true,
  "welfare_pension_insurance_salary_calc_type": "manual",
  "welfare_pension_insurance_bonus_calc_type": "manual",
  "manual_welfare_pension_insurance_amount_of_employee_salary": 1111,
  "manual_welfare_pension_insurance_amount_of_employee_bonus": 2222,
  "manual_welfare_pension_insurance_amount_of_company_salary": 3333.0001,
  "manual_welfare_pension_insurance_amount_of_company_bonus": 4444.0001,
  "child_allowance_contribution_salary_calc_type": "manual",
  "child_allowance_contribution_bonus_calc_type": "manual",
  "manual_child_allowance_contribution_amount_salary": 5555.0001,
  "manual_child_allowance_contribution_amount_bonus": 6666.0001,
  "reference_num": "0000000000",
  "standard_monthly_remuneration": 88000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entried|boolean|false|none|厚生年金保険に加入しているかどうか null不可|
|welfare_pension_insurance_salary_calc_type|string|false|none|給与計算時の厚生年金保険料の計算方法|
|welfare_pension_insurance_bonus_calc_type|string|false|none|賞与計算時の厚生年金保険料の計算方法|
|manual_welfare_pension_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の厚生年金保険料の直接指定金額（従業員負担分）|
|manual_welfare_pension_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の厚生年金保険料の直接指定金額（従業員負担分）|
|manual_welfare_pension_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の厚生年金保険料の直接指定金額（会社負担分）|
|manual_welfare_pension_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の厚生年金保険料の直接指定金額（会社負担分）|
|child_allowance_contribution_salary_calc_type|string|false|none|給与計算時の子ども・子育て拠出金の計算方法|
|child_allowance_contribution_bonus_calc_type|string|false|none|賞与計算時の子ども・子育て拠出金の計算方法|
|manual_child_allowance_contribution_amount_salary|number(float) \| null|false|none|給与計算時の子ども・子育て拠出金の直接指定金額|
|manual_child_allowance_contribution_amount_bonus|number(float) \| null|false|none|賞与計算時の子ども・子育て拠出金の直接指定金額|
|reference_num|string|false|none|厚生年金保険の被保険者整理番号|
|standard_monthly_remuneration|integer(int32)|true|none|標準報酬月額 null不可|

#### Enumerated Values

|Property|Value|
|---|---|
|welfare_pension_insurance_salary_calc_type|auto|
|welfare_pension_insurance_salary_calc_type|manual|
|welfare_pension_insurance_bonus_calc_type|auto|
|welfare_pension_insurance_bonus_calc_type|manual|
|child_allowance_contribution_salary_calc_type|auto|
|child_allowance_contribution_salary_calc_type|manual|
|child_allowance_contribution_bonus_calc_type|auto|
|child_allowance_contribution_bonus_calc_type|manual|

<h2 id="tocS_ApiV1EmployeesBankAccountRuleUpdateRequestSerializer">ApiV1EmployeesBankAccountRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbankaccountruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesBankAccountRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesbankaccountruleupdaterequestserializer"></a>
<a id="tocsapiv1employeesbankaccountruleupdaterequestserializer"></a>

```json
{
  "bank_name": "string",
  "bank_name_kana": "string",
  "bank_code": "0000",
  "branch_name": "string",
  "branch_name_kana": "string",
  "branch_code": "000",
  "account_number": "0000000",
  "account_name": "string",
  "account_type": "ordinary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bank_name|string|false|none|金融機関名|
|bank_name_kana|string|false|none|金融機関名カナ 英字カナのみ|
|bank_code|string|false|none|金融機関コード 数値文字列4桁|
|branch_name|string|false|none|支店名|
|branch_name_kana|string|false|none|支店名カナ　英字カナのみ|
|branch_code|string|false|none|支店コード 数値文字列3桁|
|account_number|string|false|none|口座番号 数値文字列7桁|
|account_name|string|false|none|口座名義カナ　英字カナのみ|
|account_type|string|false|none|預金種類 ordinary: 普通預金, current: 当座預金, saving: 貯蓄預金|

#### Enumerated Values

|Property|Value|
|---|---|
|account_type|ordinary|
|account_type|current|
|account_type|saving|

<h2 id="tocS_ApiV1EmployeesBasicPayRuleUpdateRequestSerializer">ApiV1EmployeesBasicPayRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbasicpayruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesBasicPayRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesbasicpayruleupdaterequestserializer"></a>
<a id="tocsapiv1employeesbasicpayruleupdaterequestserializer"></a>

```json
{
  "pay_calc_type": "monthly",
  "pay_amount": 220000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pay_calc_type|string|true|none|給与方式 null不可 monthly: 月給, daily: 日給, hourly: 時給|
|pay_amount|integer(int32)|true|none|基本給 null不可|

#### Enumerated Values

|Property|Value|
|---|---|
|pay_calc_type|monthly|
|pay_calc_type|daily|
|pay_calc_type|hourly|

<h2 id="tocS_ApiV1EmployeesHealthInsuranceRuleSerializer">ApiV1EmployeesHealthInsuranceRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeshealthinsuranceruleserializer"></a>
<a id="schema_ApiV1EmployeesHealthInsuranceRuleSerializer"></a>
<a id="tocSapiv1employeeshealthinsuranceruleserializer"></a>
<a id="tocsapiv1employeeshealthinsuranceruleserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "entried": true,
  "health_insurance_salary_calc_type": "manual",
  "health_insurance_bonus_calc_type": "manual",
  "health_insurance_qualification_required": true,
  "manual_health_insurance_amount_of_employee_salary": 8888,
  "manual_health_insurance_amount_of_employee_bonus": 7777,
  "manual_health_insurance_amount_of_company_salary": 6666.0001,
  "manual_health_insurance_amount_of_company_bonus": 5555.0001,
  "care_insurance_salary_calc_type": "manual",
  "care_insurance_bonus_calc_type": "manual",
  "manual_care_insurance_amount_of_employee_salary": 4444,
  "manual_care_insurance_amount_of_employee_bonus": 3333,
  "manual_care_insurance_amount_of_company_salary": 2222.0001,
  "manual_care_insurance_amount_of_company_bonus": 1111.0001,
  "child_support_fund_salary_calc_type": "manual",
  "child_support_fund_bonus_calc_type": "manual",
  "manual_child_support_fund_amount_of_employee_salary": 4000,
  "manual_child_support_fund_amount_of_employee_bonus": 3000,
  "manual_child_support_fund_amount_of_company_salary": 2000.0001,
  "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
  "reference_num": "string",
  "standard_monthly_remuneration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|健康保険ルールID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|entried|boolean|false|none|健康保険に加入しているかどうか|
|health_insurance_salary_calc_type|string|false|none|給与計算時の健康保険料の計算方法|
|health_insurance_bonus_calc_type|string|false|none|賞与計算時の健康保険料の計算方法|
|health_insurance_qualification_required|boolean|false|none|健康保険の資格確認書の発行が必要かどうか|
|manual_health_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の健康保険料の直接指定金額（従業員負担分）|
|manual_health_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の健康保険料の直接指定金額（従業員負担分）|
|manual_health_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の健康保険料の直接指定金額（会社負担分）|
|manual_health_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の健康保険料の直接指定金額（会社負担分）|
|care_insurance_salary_calc_type|string|false|none|給与計算時の介護保険料の計算方法|
|care_insurance_bonus_calc_type|string|false|none|賞与計算時の介護保険料の計算方法|
|manual_care_insurance_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の介護保険料の直接指定金額（従業員負担分）|
|manual_care_insurance_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の介護保険料の直接指定金額（従業員負担分）|
|manual_care_insurance_amount_of_company_salary|number(float) \| null|false|none|給与計算時の介護保険料の直接指定金額（会社負担分）|
|manual_care_insurance_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の介護保険料の直接指定金額（会社負担分）|
|child_support_fund_salary_calc_type|string|false|none|給与計算時の子ども・子育て支援金の計算方法|
|child_support_fund_bonus_calc_type|string|false|none|賞与計算時の子ども・子育て支援金の計算方法|
|manual_child_support_fund_amount_of_employee_salary|integer(int32) \| null|false|none|給与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）|
|manual_child_support_fund_amount_of_employee_bonus|integer(int32) \| null|false|none|賞与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）|
|manual_child_support_fund_amount_of_company_salary|number(float) \| null|false|none|給与計算時の子ども・子育て支援金の直接指定金額（会社負担分）|
|manual_child_support_fund_amount_of_company_bonus|number(float) \| null|false|none|賞与計算時の子ども・子育て支援金の直接指定金額（会社負担分）|
|reference_num|string \| null|false|none|健康保険の被保険者整理番号|
|standard_monthly_remuneration|integer(int32)|false|none|標準報酬月額|

#### Enumerated Values

|Property|Value|
|---|---|
|health_insurance_salary_calc_type|auto|
|health_insurance_salary_calc_type|manual|
|health_insurance_bonus_calc_type|auto|
|health_insurance_bonus_calc_type|manual|
|care_insurance_salary_calc_type|auto|
|care_insurance_salary_calc_type|manual|
|care_insurance_bonus_calc_type|auto|
|care_insurance_bonus_calc_type|manual|
|child_support_fund_salary_calc_type|auto|
|child_support_fund_salary_calc_type|manual|
|child_support_fund_bonus_calc_type|auto|
|child_support_fund_bonus_calc_type|manual|

<h2 id="tocS_ApiV1EmployeesBankAccountRuleSerializer">ApiV1EmployeesBankAccountRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbankaccountruleserializer"></a>
<a id="schema_ApiV1EmployeesBankAccountRuleSerializer"></a>
<a id="tocSapiv1employeesbankaccountruleserializer"></a>
<a id="tocsapiv1employeesbankaccountruleserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "bank_name": "string",
  "bank_name_kana": "string",
  "bank_code": "string",
  "branch_name": "string",
  "branch_name_kana": "string",
  "branch_code": "string",
  "account_number": "string",
  "account_name": "string",
  "account_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|銀行口座ルールID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|bank_name|string \| null|false|none|金融機関名|
|bank_name_kana|string \| null|false|none|金融機関名カナ|
|bank_code|string \| null|false|none|金融機関コード|
|branch_name|string \| null|false|none|支店名|
|branch_name_kana|string \| null|false|none|支店名カナ|
|branch_code|string \| null|false|none|支店コード|
|account_number|string \| null|false|none|口座番号|
|account_name|string \| null|false|none|口座名義カナ|
|account_type|string \| null|false|none|預金種類 ordinary: 普通預金, current: 当座預金, saving: 貯蓄預金|

<h2 id="tocS_ApiV1EmployeesDependentRuleSerializer">ApiV1EmployeesDependentRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdependentruleserializer"></a>
<a id="schema_ApiV1EmployeesDependentRuleSerializer"></a>
<a id="tocSapiv1employeesdependentruleserializer"></a>
<a id="tocsapiv1employeesdependentruleserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "employee_id": 0,
  "last_name": "string",
  "first_name": "string",
  "last_name_kana": "string",
  "first_name_kana": "string",
  "gender": "unselected",
  "relationship": "string",
  "birth_date": "1970-01-01",
  "residence_type": "string",
  "zipcode1": "string",
  "zipcode2": "string",
  "prefecture_code": 4,
  "address": "string",
  "address_kana": "string",
  "base_pension_num": "string",
  "income": 0,
  "annual_revenue": 0,
  "disability_type": "string",
  "occupation": "string",
  "annual_remittance_amount": 0,
  "employment_insurance_receive_status": "unselected",
  "employment_insurance_receives_from": "1970-01-01",
  "health_insurance_qualification_required": true,
  "phone_type": "unselected",
  "phone1": "000",
  "phone2": "0000",
  "phone3": "0000",
  "social_insurance_and_tax_dependent": "string",
  "social_insurance_dependent_acquisition_date": "1970-01-01",
  "social_insurance_dependent_acquisition_reason": "",
  "social_insurance_other_dependent_acquisition_reason": "string",
  "social_insurance_dependent_disqualification_date": "1970-01-01",
  "social_insurance_dependent_disqualification_reason": "",
  "social_insurance_other_dependent_disqualification_reason": "string",
  "tax_dependent_acquisition_date": "1970-01-01",
  "tax_dependent_acquisition_reason": "",
  "tax_other_dependent_acquisition_reason": "string",
  "tax_dependent_disqualification_date": "1970-01-01",
  "tax_dependent_disqualification_reason": "",
  "tax_other_dependent_disqualification_reason": "string",
  "non_resident_dependents_reason": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|家族情報ルールID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|last_name|string|false|none|姓|
|first_name|string|false|none|名|
|last_name_kana|string \| null|false|none|姓カナ|
|first_name_kana|string \| null|false|none|名カナ|
|gender|string|false|none|性別　unselected: 未選択, male: 男性, female: 女性|
|relationship|string|false|none|続柄 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子|
|birth_date|string(date)|false|none|生年月日|
|residence_type|string|false|none|同居・別居 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)|
|zipcode1|string \| null|false|none|住民票住所の郵便番号1|
|zipcode2|string \| null|false|none|住民票住所の郵便番号2|
|prefecture_code|integer \| null|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string \| null|false|none|住民票住所の市区町村以降の住所|
|address_kana|string \| null|false|none|住民票住所の市区町村以降の住所カナ|
|base_pension_num|string \| null|false|none|基礎年金番号|
|income|integer(int32)|false|none|年間所得|
|annual_revenue|integer(int32)|false|none|年間収入|
|disability_type|string|false|none|障害に該当するか na: 障害なし, general: 一般の障害者, heavy: 特別障害者|
|occupation|string \| null|false|none|職業|
|annual_remittance_amount|integer(int32)|false|none|一年間の送金額|
|employment_insurance_receive_status|string(string) \| null|false|none|雇用保険受給の有無<br>- unselected 未選択<br>- receiving_employment_insurance 雇用保険受給有り<br>- not_receiving_employment_insurance 雇用保険受給無し<br>- pending_employment_insurance 申請中|
|employment_insurance_receives_from|string(date) \| null|false|none|雇用保険受給開始年月日 employment_insurance_receive_statusが未選択、無しの場合は指定できません。|
|health_insurance_qualification_required|boolean|false|none|健康保険の資格確認書の発行が必要かどうか|
|phone_type|string \| null|false|none|電話番号の種別<br>- unselected 未選択<br>- home 自宅<br>- office 勤務先<br>- mobile 携帯<br>- other その他|
|phone1|string \| null|false|none|電話番号1（先頭番号、例:03-1111-222x の03部分）|
|phone2|string \| null|false|none|電話番号2（中間番号、例:03-1111-222x の1111部分）|
|phone3|string \| null|false|none|電話番号3（末尾番号、例:03-1111-222x の222x部分）|
|social_insurance_and_tax_dependent|string|false|none|扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ|
|social_insurance_dependent_acquisition_date|string(date) \| null|false|none|社会保険の扶養加入日|
|social_insurance_dependent_acquisition_reason|string|false|none|社会保険の扶養加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": 未選択, birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他|
|social_insurance_other_dependent_acquisition_reason|string \| null|false|none|社会保険のその他の扶養加入理由|
|social_insurance_dependent_disqualification_date|string(date) \| null|false|none|社会保険の扶養喪失日|
|social_insurance_dependent_disqualification_reason|string|false|none|社会保険の扶養喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他|
|social_insurance_other_dependent_disqualification_reason|string \| null|false|none|社会保険のその他の扶養喪失理由|
|tax_dependent_acquisition_date|string(date) \| null|false|none|税扶養の加入日|
|tax_dependent_acquisition_reason|string|false|none|税扶養の加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他|
|tax_other_dependent_acquisition_reason|string \| null|false|none|税扶養のその他の加入理由|
|tax_dependent_disqualification_date|string(date) \| null|false|none|税扶養の喪失日|
|tax_dependent_disqualification_reason|string|false|none|税扶養の喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他|
|tax_other_dependent_disqualification_reason|string \| null|false|none|税扶養のその他の喪失理由|
|non_resident_dependents_reason|string(string)|false|none|非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|unselected|
|gender|male|
|gender|female|
|employment_insurance_receive_status|unselected|
|employment_insurance_receive_status|receiving_employment_insurance|
|employment_insurance_receive_status|not_receiving_employment_insurance|
|employment_insurance_receive_status|pending_employment_insurance|
|phone_type|unselected|
|phone_type|home|
|phone_type|office|
|phone_type|mobile|
|phone_type|other|
|social_insurance_dependent_acquisition_reason|""|
|social_insurance_dependent_acquisition_reason|start_working|
|social_insurance_dependent_acquisition_reason|marriage|
|social_insurance_dependent_acquisition_reason|turnover|
|social_insurance_dependent_acquisition_reason|decrease_in_income|
|social_insurance_dependent_acquisition_reason|other|
|social_insurance_dependent_acquisition_reason|birth|
|social_insurance_dependent_acquisition_reason|live_in|
|social_insurance_dependent_disqualification_reason|""|
|social_insurance_dependent_disqualification_reason|death|
|social_insurance_dependent_disqualification_reason|divorce|
|social_insurance_dependent_disqualification_reason|start_working_or_increase_in_income|
|social_insurance_dependent_disqualification_reason|reach_75_years_old|
|social_insurance_dependent_disqualification_reason|disability|
|social_insurance_dependent_disqualification_reason|other|
|social_insurance_dependent_disqualification_reason|start_working|
|social_insurance_dependent_disqualification_reason|increase_in_income|
|tax_dependent_acquisition_reason|""|
|tax_dependent_acquisition_reason|start_working|
|tax_dependent_acquisition_reason|marriage|
|tax_dependent_acquisition_reason|turnover|
|tax_dependent_acquisition_reason|decrease_in_income|
|tax_dependent_acquisition_reason|other|
|tax_dependent_acquisition_reason|birth|
|tax_dependent_acquisition_reason|live_in|
|tax_dependent_disqualification_reason|""|
|tax_dependent_disqualification_reason|death|
|tax_dependent_disqualification_reason|divorce|
|tax_dependent_disqualification_reason|start_working_or_increase_in_income|
|tax_dependent_disqualification_reason|reach_75_years_old|
|tax_dependent_disqualification_reason|disability|
|tax_dependent_disqualification_reason|other|
|tax_dependent_disqualification_reason|start_working|
|tax_dependent_disqualification_reason|increase_in_income|
|non_resident_dependents_reason|none|
|non_resident_dependents_reason|over_16_to_under_30_or_over_70|
|non_resident_dependents_reason|study_abroad|
|non_resident_dependents_reason|handicapped|
|non_resident_dependents_reason|over_38_man|

<h2 id="tocS_ApiV1EmployeesBasicPayRuleSerializer">ApiV1EmployeesBasicPayRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbasicpayruleserializer"></a>
<a id="schema_ApiV1EmployeesBasicPayRuleSerializer"></a>
<a id="tocSapiv1employeesbasicpayruleserializer"></a>
<a id="tocsapiv1employeesbasicpayruleserializer"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "employee_id": 1,
  "pay_calc_type": "monthly",
  "pay_amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|従業員の基本給ID|
|company_id|integer(int32)|false|none|事業所ID|
|employee_id|integer(int32)|false|none|従業員ID|
|pay_calc_type|string|false|none|給与方式 monthly: 月給, daily: 日給, hourly: 時給|
|pay_amount|integer(int32)|false|none|基本給|

#### Enumerated Values

|Property|Value|
|---|---|
|pay_calc_type|monthly|
|pay_calc_type|daily|
|pay_calc_type|hourly|

<h2 id="tocS_ApiV1ProfileCustomFieldGroupSerializer">ApiV1ProfileCustomFieldGroupSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1profilecustomfieldgroupserializer"></a>
<a id="schema_ApiV1ProfileCustomFieldGroupSerializer"></a>
<a id="tocSapiv1profilecustomfieldgroupserializer"></a>
<a id="tocsapiv1profilecustomfieldgroupserializer"></a>

```json
{
  "id": 1,
  "name": "資格取得結果",
  "profile_custom_field_rules": [
    {
      "id": 1,
      "field_type": "file",
      "name": "証明書ファイル",
      "value": "null",
      "file_name": "証明書ファイル.jpeg"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|グループID|
|name|string|false|none|グループ名|
|profile_custom_field_rules|[[ApiV1EmployeeProfileCustomFieldSerializer](#schemaapiv1employeeprofilecustomfieldserializer)]|false|none|カスタム項目|

<h2 id="tocS_ApiV1EmployeeProfileCustomFieldSerializer">ApiV1EmployeeProfileCustomFieldSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeprofilecustomfieldserializer"></a>
<a id="schema_ApiV1EmployeeProfileCustomFieldSerializer"></a>
<a id="tocSapiv1employeeprofilecustomfieldserializer"></a>
<a id="tocsapiv1employeeprofilecustomfieldserializer"></a>

```json
{
  "id": 1,
  "field_type": "file",
  "name": "証明書ファイル",
  "value": "null",
  "file_name": "証明書ファイル.jpeg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|カスタム項目ID|
|field_type|string|false|none|項目タイプ file: ファイル, text: テキスト, number: 数値, date: 日付, selector: セレクター, time: 時間|
|name|string|false|none|項目名|
|value|string \| null|false|none|値（項目タイプがfileの場合、nullを返します）|
|file_name|string \| null|false|none|ファイル名（項目タイプがfile以外の場合、nullを返します）|

#### Enumerated Values

|Property|Value|
|---|---|
|field_type|file|
|field_type|text|
|field_type|number|
|field_type|date|
|field_type|selector|
|field_type|time|

<h2 id="tocS_ApiV1EmployeesProfileCustomFieldRulesController.index_response">ApiV1EmployeesProfileCustomFieldRulesController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofilecustomfieldrulescontroller.index_response"></a>
<a id="schema_ApiV1EmployeesProfileCustomFieldRulesController.index_response"></a>
<a id="tocSapiv1employeesprofilecustomfieldrulescontroller.index_response"></a>
<a id="tocsapiv1employeesprofilecustomfieldrulescontroller.index_response"></a>

```json
{
  "profile_custom_field_groups": [
    {
      "id": 1,
      "name": "資格取得結果",
      "profile_custom_field_rules": [
        {
          "id": 1,
          "field_type": "file",
          "name": "証明書ファイル",
          "value": "null",
          "file_name": "証明書ファイル.jpeg"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile_custom_field_groups|[[ApiV1ProfileCustomFieldGroupSerializer](#schemaapiv1profilecustomfieldgroupserializer)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesController.show_response">ApiV1EmployeesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesController.show_response"></a>
<a id="tocSapiv1employeescontroller.show_response"></a>
<a id="tocsapiv1employeescontroller.show_response"></a>

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[ApiV1EmployeeSerializer](#schemaapiv1employeeserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesController.create_response">ApiV1EmployeesController.create_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeescontroller.create_response"></a>
<a id="schema_ApiV1EmployeesController.create_response"></a>
<a id="tocSapiv1employeescontroller.create_response"></a>
<a id="tocsapiv1employeescontroller.create_response"></a>

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[ApiV1EmployeeSerializer](#schemaapiv1employeeserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesController.create_body">ApiV1EmployeesController.create_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeescontroller.create_body"></a>
<a id="schema_ApiV1EmployeesController.create_body"></a>
<a id="tocSapiv1employeescontroller.create_body"></a>
<a id="tocsapiv1employeescontroller.create_body"></a>

```json
{
  "company_id": 1,
  "employee": {
    "num": "A-001",
    "working_hours_system_name": "固定",
    "company_reference_date_rule_name": "15日締め（当月25日払い）",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "2000-01-01",
    "entry_date": "2021-04-01",
    "pay_calc_type": "monthly",
    "pay_amount": 220000,
    "gender": "male",
    "married": true,
    "no_payroll_calculation": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|作成対象事業所ID（必須）|
|employee|[ApiV1EmployeeCreateRequestSerializer](#schemaapiv1employeecreaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesController.update_response">ApiV1EmployeesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesController.update_response"></a>
<a id="tocSapiv1employeescontroller.update_response"></a>
<a id="tocsapiv1employeescontroller.update_response"></a>

```json
{
  "employee": {
    "id": 0,
    "company_id": 0,
    "num": "string",
    "display_name": "string",
    "base_pension_num": "string",
    "employment_insurance_reference_number": "string",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "user_id": 0,
    "profile_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "residential_zipcode1": "000",
      "residential_zipcode2": "0000",
      "residential_prefecture_code": 4,
      "residential_address": "string",
      "residential_address_kana": "string",
      "employment_type": "string",
      "title": "string",
      "gender": "male",
      "married": true,
      "is_working_student": true,
      "widow_type": "string",
      "disability_type": "string",
      "email": "test@example.com",
      "householder_name": "山田 吾郎",
      "householder": "father"
    },
    "health_insurance_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "health_insurance_salary_calc_type": "manual",
      "health_insurance_bonus_calc_type": "manual",
      "health_insurance_qualification_required": true,
      "manual_health_insurance_amount_of_employee_salary": 8888,
      "manual_health_insurance_amount_of_employee_bonus": 7777,
      "manual_health_insurance_amount_of_company_salary": 6666.0001,
      "manual_health_insurance_amount_of_company_bonus": 5555.0001,
      "care_insurance_salary_calc_type": "manual",
      "care_insurance_bonus_calc_type": "manual",
      "manual_care_insurance_amount_of_employee_salary": 4444,
      "manual_care_insurance_amount_of_employee_bonus": 3333,
      "manual_care_insurance_amount_of_company_salary": 2222.0001,
      "manual_care_insurance_amount_of_company_bonus": 1111.0001,
      "child_support_fund_salary_calc_type": "manual",
      "child_support_fund_bonus_calc_type": "manual",
      "manual_child_support_fund_amount_of_employee_salary": 4000,
      "manual_child_support_fund_amount_of_employee_bonus": 3000,
      "manual_child_support_fund_amount_of_company_salary": 2000.0001,
      "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
      "reference_num": "string",
      "standard_monthly_remuneration": 0
    },
    "welfare_pension_insurance_rule": {
      "id": 0,
      "child_allowance_contribution_bonus_calc_type": "manual",
      "child_allowance_contribution_salary_calc_type": "manual",
      "company_id": 0,
      "employee_id": 0,
      "entried": true,
      "manual_child_allowance_contribution_amount_bonus": 111.0001,
      "manual_child_allowance_contribution_amount_salary": 222.0001,
      "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
      "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
      "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
      "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
      "reference_num": "string",
      "standard_monthly_remuneration": 0,
      "welfare_pension_insurance_bonus_calc_type": "manual",
      "welfare_pension_insurance_salary_calc_type": "manual"
    },
    "dependent_rules": [
      {
        "id": 0,
        "company_id": 0,
        "employee_id": 0,
        "last_name": "string",
        "first_name": "string",
        "last_name_kana": "string",
        "first_name_kana": "string",
        "gender": "unselected",
        "relationship": "string",
        "birth_date": "1970-01-01",
        "residence_type": "string",
        "zipcode1": "string",
        "zipcode2": "string",
        "prefecture_code": 4,
        "address": "string",
        "address_kana": "string",
        "base_pension_num": "string",
        "income": 0,
        "annual_revenue": 0,
        "disability_type": "string",
        "occupation": "string",
        "annual_remittance_amount": 0,
        "employment_insurance_receive_status": "unselected",
        "employment_insurance_receives_from": "1970-01-01",
        "health_insurance_qualification_required": true,
        "phone_type": "unselected",
        "phone1": "000",
        "phone2": "0000",
        "phone3": "0000",
        "social_insurance_and_tax_dependent": "string",
        "social_insurance_dependent_acquisition_date": "1970-01-01",
        "social_insurance_dependent_acquisition_reason": "",
        "social_insurance_other_dependent_acquisition_reason": "string",
        "social_insurance_dependent_disqualification_date": "1970-01-01",
        "social_insurance_dependent_disqualification_reason": "",
        "social_insurance_other_dependent_disqualification_reason": "string",
        "tax_dependent_acquisition_date": "1970-01-01",
        "tax_dependent_acquisition_reason": "",
        "tax_other_dependent_acquisition_reason": "string",
        "tax_dependent_disqualification_date": "1970-01-01",
        "tax_dependent_disqualification_reason": "",
        "tax_other_dependent_disqualification_reason": "string",
        "non_resident_dependents_reason": "none"
      }
    ],
    "bank_account_rule": {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "bank_name": "string",
      "bank_name_kana": "string",
      "bank_code": "string",
      "branch_name": "string",
      "branch_name_kana": "string",
      "branch_code": "string",
      "account_number": "string",
      "account_name": "string",
      "account_type": "string"
    },
    "basic_pay_rule": {
      "id": 1,
      "company_id": 1,
      "employee_id": 1,
      "pay_calc_type": "monthly",
      "pay_amount": 0
    },
    "payroll_calculation": true,
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[ApiV1EmployeeSerializer](#schemaapiv1employeeserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesController.update_body">ApiV1EmployeesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesController.update_body"></a>
<a id="tocSapiv1employeescontroller.update_body"></a>
<a id="tocsapiv1employeescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee": {
    "num": "A-001",
    "display_name": "山田 太郎",
    "base_pension_num": "1111111111",
    "employment_insurance_reference_number": "11111111111",
    "birth_date": "2000-01-01",
    "entry_date": "2021-04-01",
    "retire_date": "2022-03-31",
    "company_reference_date_rule_name": "当月締め翌月払い"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|false|none|更新対象年<br>- 給与計算対象の従業員情報の場合は必須になります。|
|month|integer(int32)|false|none|更新対象月<br>- 給与計算対象の従業員情報の場合は必須になります。<br>- 締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>- 翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。|
|employee|[ApiV1EmployeeUpdateRequestSerializer](#schemaapiv1employeeupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesProfileRulesController.show_response">ApiV1EmployeesProfileRulesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofilerulescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesProfileRulesController.show_response"></a>
<a id="tocSapiv1employeesprofilerulescontroller.show_response"></a>
<a id="tocsapiv1employeesprofilerulescontroller.show_response"></a>

```json
{
  "employee_profile_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "last_name": "string",
    "first_name": "string",
    "last_name_kana": "string",
    "first_name_kana": "string",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "string",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "string",
    "disability_type": "string",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_profile_rule|[ApiV1EmployeesProfileRuleSerializer](#schemaapiv1employeesprofileruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesProfileRulesController.update_response">ApiV1EmployeesProfileRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofilerulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesProfileRulesController.update_response"></a>
<a id="tocSapiv1employeesprofilerulescontroller.update_response"></a>
<a id="tocsapiv1employeesprofilerulescontroller.update_response"></a>

```json
{
  "employee_profile_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "last_name": "string",
    "first_name": "string",
    "last_name_kana": "string",
    "first_name_kana": "string",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "string",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "string",
    "disability_type": "string",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_profile_rule|[ApiV1EmployeesProfileRuleSerializer](#schemaapiv1employeesprofileruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesProfileRulesController.update_body">ApiV1EmployeesProfileRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesprofilerulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesProfileRulesController.update_body"></a>
<a id="tocSapiv1employeesprofilerulescontroller.update_body"></a>
<a id="tocsapiv1employeesprofilerulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_profile_rule": {
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "zipcode1": "000",
    "zipcode2": "0000",
    "prefecture_code": 4,
    "address": "string",
    "address_kana": "string",
    "phone1": "000",
    "phone2": "0000",
    "phone3": "0000",
    "residential_zipcode1": "000",
    "residential_zipcode2": "0000",
    "residential_prefecture_code": 4,
    "residential_address": "string",
    "residential_address_kana": "string",
    "employment_type": "board-member",
    "title": "string",
    "gender": "male",
    "married": true,
    "is_working_student": true,
    "widow_type": "na",
    "disability_type": "na",
    "email": "test@example.com",
    "householder_name": "山田 吾郎",
    "householder": "father"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_profile_rule|[ApiV1EmployeesProfileRuleUpdateRequestSerializer](#schemaapiv1employeesprofileruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesHealthInsuranceRulesController.show_response">ApiV1EmployeesHealthInsuranceRulesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeshealthinsurancerulescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesHealthInsuranceRulesController.show_response"></a>
<a id="tocSapiv1employeeshealthinsurancerulescontroller.show_response"></a>
<a id="tocsapiv1employeeshealthinsurancerulescontroller.show_response"></a>

```json
{
  "employee_health_insurance_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "health_insurance_qualification_required": true,
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "string",
    "standard_monthly_remuneration": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_health_insurance_rule|[ApiV1EmployeesHealthInsuranceRuleSerializer](#schemaapiv1employeeshealthinsuranceruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesHealthInsuranceRulesController.update_response">ApiV1EmployeesHealthInsuranceRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeshealthinsurancerulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesHealthInsuranceRulesController.update_response"></a>
<a id="tocSapiv1employeeshealthinsurancerulescontroller.update_response"></a>
<a id="tocsapiv1employeeshealthinsurancerulescontroller.update_response"></a>

```json
{
  "employee_health_insurance_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "health_insurance_qualification_required": true,
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "string",
    "standard_monthly_remuneration": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_health_insurance_rule|[ApiV1EmployeesHealthInsuranceRuleSerializer](#schemaapiv1employeeshealthinsuranceruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesHealthInsuranceRulesController.update_body">ApiV1EmployeesHealthInsuranceRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeshealthinsurancerulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesHealthInsuranceRulesController.update_body"></a>
<a id="tocSapiv1employeeshealthinsurancerulescontroller.update_body"></a>
<a id="tocsapiv1employeeshealthinsurancerulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_health_insurance_rule": {
    "entried": true,
    "health_insurance_salary_calc_type": "manual",
    "health_insurance_bonus_calc_type": "manual",
    "manual_health_insurance_amount_of_employee_salary": 8888,
    "manual_health_insurance_amount_of_employee_bonus": 7777,
    "manual_health_insurance_amount_of_company_salary": 6666.0001,
    "manual_health_insurance_amount_of_company_bonus": 5555.0001,
    "care_insurance_salary_calc_type": "manual",
    "care_insurance_bonus_calc_type": "manual",
    "manual_care_insurance_amount_of_employee_salary": 4444,
    "manual_care_insurance_amount_of_employee_bonus": 3333,
    "manual_care_insurance_amount_of_company_salary": 2222.0001,
    "manual_care_insurance_amount_of_company_bonus": 1111.0001,
    "child_support_fund_salary_calc_type": "manual",
    "child_support_fund_bonus_calc_type": "manual",
    "manual_child_support_fund_amount_of_employee_salary": 4000,
    "manual_child_support_fund_amount_of_employee_bonus": 3000,
    "manual_child_support_fund_amount_of_company_salary": 2000.0001,
    "manual_child_support_fund_amount_of_company_bonus": 1000.0001,
    "reference_num": "0000000000",
    "standard_monthly_remuneration": 58000,
    "health_insurance_qualification_required": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_health_insurance_rule|[ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer](#schemaapiv1employeeshealthinsuranceruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesWelfarePensionInsuranceRulesController.show_response">ApiV1EmployeesWelfarePensionInsuranceRulesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeswelfarepensioninsurancerulescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesWelfarePensionInsuranceRulesController.show_response"></a>
<a id="tocSapiv1employeeswelfarepensioninsurancerulescontroller.show_response"></a>
<a id="tocsapiv1employeeswelfarepensioninsurancerulescontroller.show_response"></a>

```json
{
  "employee_welfare_pension_insurance_rule": {
    "id": 0,
    "child_allowance_contribution_bonus_calc_type": "manual",
    "child_allowance_contribution_salary_calc_type": "manual",
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "manual_child_allowance_contribution_amount_bonus": 111.0001,
    "manual_child_allowance_contribution_amount_salary": 222.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
    "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
    "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
    "reference_num": "string",
    "standard_monthly_remuneration": 0,
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "welfare_pension_insurance_salary_calc_type": "manual"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_welfare_pension_insurance_rule|[ApiV1EmployeesWelfarePensionInsuranceRuleSerializer](#schemaapiv1employeeswelfarepensioninsuranceruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesWelfarePensionInsuranceRulesController.update_response">ApiV1EmployeesWelfarePensionInsuranceRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeswelfarepensioninsurancerulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesWelfarePensionInsuranceRulesController.update_response"></a>
<a id="tocSapiv1employeeswelfarepensioninsurancerulescontroller.update_response"></a>
<a id="tocsapiv1employeeswelfarepensioninsurancerulescontroller.update_response"></a>

```json
{
  "employee_welfare_pension_insurance_rule": {
    "id": 0,
    "child_allowance_contribution_bonus_calc_type": "manual",
    "child_allowance_contribution_salary_calc_type": "manual",
    "company_id": 0,
    "employee_id": 0,
    "entried": true,
    "manual_child_allowance_contribution_amount_bonus": 111.0001,
    "manual_child_allowance_contribution_amount_salary": 222.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 333.0001,
    "manual_welfare_pension_insurance_amount_of_company_salary": 444.0001,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 555,
    "manual_welfare_pension_insurance_amount_of_employee_salary": 666,
    "reference_num": "string",
    "standard_monthly_remuneration": 0,
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "welfare_pension_insurance_salary_calc_type": "manual"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_welfare_pension_insurance_rule|[ApiV1EmployeesWelfarePensionInsuranceRuleSerializer](#schemaapiv1employeeswelfarepensioninsuranceruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesWelfarePensionInsuranceRulesController.update_body">ApiV1EmployeesWelfarePensionInsuranceRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeswelfarepensioninsurancerulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesWelfarePensionInsuranceRulesController.update_body"></a>
<a id="tocSapiv1employeeswelfarepensioninsurancerulescontroller.update_body"></a>
<a id="tocsapiv1employeeswelfarepensioninsurancerulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_welfare_pension_insurance_rule": {
    "entried": true,
    "welfare_pension_insurance_salary_calc_type": "manual",
    "welfare_pension_insurance_bonus_calc_type": "manual",
    "manual_welfare_pension_insurance_amount_of_employee_salary": 1111,
    "manual_welfare_pension_insurance_amount_of_employee_bonus": 2222,
    "manual_welfare_pension_insurance_amount_of_company_salary": 3333.0001,
    "manual_welfare_pension_insurance_amount_of_company_bonus": 4444.0001,
    "child_allowance_contribution_salary_calc_type": "manual",
    "child_allowance_contribution_bonus_calc_type": "manual",
    "manual_child_allowance_contribution_amount_salary": 5555.0001,
    "manual_child_allowance_contribution_amount_bonus": 6666.0001,
    "reference_num": "0000000000",
    "standard_monthly_remuneration": 88000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_welfare_pension_insurance_rule|[ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer](#schemaapiv1employeeswelfarepensioninsuranceruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesDependentRulesController.index_response">ApiV1EmployeesDependentRulesController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdependentrulescontroller.index_response"></a>
<a id="schema_ApiV1EmployeesDependentRulesController.index_response"></a>
<a id="tocSapiv1employeesdependentrulescontroller.index_response"></a>
<a id="tocsapiv1employeesdependentrulescontroller.index_response"></a>

```json
{
  "employee_dependent_rules": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "gender": "unselected",
      "relationship": "string",
      "birth_date": "1970-01-01",
      "residence_type": "string",
      "zipcode1": "string",
      "zipcode2": "string",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "string",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "string",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "unselected",
      "employment_insurance_receives_from": "1970-01-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "social_insurance_and_tax_dependent": "string",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_dependent_rules|[[ApiV1EmployeesDependentRuleSerializer](#schemaapiv1employeesdependentruleserializer)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesDependentRulesController.bulk_update_response">ApiV1EmployeesDependentRulesController.bulk_update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdependentrulescontroller.bulk_update_response"></a>
<a id="schema_ApiV1EmployeesDependentRulesController.bulk_update_response"></a>
<a id="tocSapiv1employeesdependentrulescontroller.bulk_update_response"></a>
<a id="tocsapiv1employeesdependentrulescontroller.bulk_update_response"></a>

```json
{
  "employee_dependent_rules": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "last_name": "string",
      "first_name": "string",
      "last_name_kana": "string",
      "first_name_kana": "string",
      "gender": "unselected",
      "relationship": "string",
      "birth_date": "1970-01-01",
      "residence_type": "string",
      "zipcode1": "string",
      "zipcode2": "string",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "string",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "string",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "unselected",
      "employment_insurance_receives_from": "1970-01-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "social_insurance_and_tax_dependent": "string",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_dependent_rules|[[ApiV1EmployeesDependentRuleSerializer](#schemaapiv1employeesdependentruleserializer)]|false|none|家族情報ルール|

<h2 id="tocS_ApiV1EmployeesDependentRulesController.bulk_update_body">ApiV1EmployeesDependentRulesController.bulk_update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdependentrulescontroller.bulk_update_body"></a>
<a id="schema_ApiV1EmployeesDependentRulesController.bulk_update_body"></a>
<a id="tocSapiv1employeesdependentrulescontroller.bulk_update_body"></a>
<a id="tocsapiv1employeesdependentrulescontroller.bulk_update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_dependent_rules": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "gender": "male",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "residence_type": "live_in",
      "zipcode1": "000",
      "zipcode2": "0000",
      "prefecture_code": 4,
      "address": "string",
      "address_kana": "string",
      "base_pension_num": "1234567890",
      "income": 0,
      "annual_revenue": 0,
      "disability_type": "na",
      "occupation": "string",
      "annual_remittance_amount": 0,
      "employment_insurance_receive_status": "receiving_employment_insurance",
      "employment_insurance_receives_from": "2021-04-01",
      "health_insurance_qualification_required": true,
      "phone_type": "unselected",
      "phone1": "000",
      "phone2": "0000",
      "phone3": "0000",
      "destroy": false,
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "social_insurance_dependent_acquisition_date": "1970-01-01",
      "social_insurance_dependent_acquisition_reason": "",
      "social_insurance_other_dependent_acquisition_reason": "string",
      "social_insurance_dependent_disqualification_date": "1970-01-01",
      "social_insurance_dependent_disqualification_reason": "",
      "social_insurance_other_dependent_disqualification_reason": "string",
      "tax_dependent_acquisition_date": "1970-01-01",
      "tax_dependent_acquisition_reason": "",
      "tax_other_dependent_acquisition_reason": "string",
      "tax_dependent_disqualification_date": "1970-01-01",
      "tax_dependent_disqualification_reason": "",
      "tax_other_dependent_disqualification_reason": "string",
      "non_resident_dependents_reason": "none"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_dependent_rules|[[ApiV1EmployeesDependentRuleUpdateRequestSerializer](#schemaapiv1employeesdependentruleupdaterequestserializer)]|true|none|家族情報ルール|

<h2 id="tocS_ApiV1EmployeesBankAccountRulesController.show_response">ApiV1EmployeesBankAccountRulesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbankaccountrulescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesBankAccountRulesController.show_response"></a>
<a id="tocSapiv1employeesbankaccountrulescontroller.show_response"></a>
<a id="tocsapiv1employeesbankaccountrulescontroller.show_response"></a>

```json
{
  "employee_bank_account_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "string",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "string",
    "account_number": "string",
    "account_name": "string",
    "account_type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_bank_account_rule|[ApiV1EmployeesBankAccountRuleSerializer](#schemaapiv1employeesbankaccountruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesBankAccountRulesController.update_response">ApiV1EmployeesBankAccountRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbankaccountrulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesBankAccountRulesController.update_response"></a>
<a id="tocSapiv1employeesbankaccountrulescontroller.update_response"></a>
<a id="tocsapiv1employeesbankaccountrulescontroller.update_response"></a>

```json
{
  "employee_bank_account_rule": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "string",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "string",
    "account_number": "string",
    "account_name": "string",
    "account_type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_bank_account_rule|[ApiV1EmployeesBankAccountRuleSerializer](#schemaapiv1employeesbankaccountruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesBankAccountRulesController.update_body">ApiV1EmployeesBankAccountRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbankaccountrulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesBankAccountRulesController.update_body"></a>
<a id="tocSapiv1employeesbankaccountrulescontroller.update_body"></a>
<a id="tocsapiv1employeesbankaccountrulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_bank_account_rule": {
    "bank_name": "string",
    "bank_name_kana": "string",
    "bank_code": "0000",
    "branch_name": "string",
    "branch_name_kana": "string",
    "branch_code": "000",
    "account_number": "0000000",
    "account_name": "string",
    "account_type": "ordinary"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_bank_account_rule|[ApiV1EmployeesBankAccountRuleUpdateRequestSerializer](#schemaapiv1employeesbankaccountruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesBasicPayRulesController.show_response">ApiV1EmployeesBasicPayRulesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbasicpayrulescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesBasicPayRulesController.show_response"></a>
<a id="tocSapiv1employeesbasicpayrulescontroller.show_response"></a>
<a id="tocsapiv1employeesbasicpayrulescontroller.show_response"></a>

```json
{
  "employee_basic_pay_rule": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "pay_calc_type": "monthly",
    "pay_amount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_basic_pay_rule|[ApiV1EmployeesBasicPayRuleSerializer](#schemaapiv1employeesbasicpayruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesBasicPayRulesController.update_response">ApiV1EmployeesBasicPayRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbasicpayrulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesBasicPayRulesController.update_response"></a>
<a id="tocSapiv1employeesbasicpayrulescontroller.update_response"></a>
<a id="tocsapiv1employeesbasicpayrulescontroller.update_response"></a>

```json
{
  "employee_basic_pay_rule": {
    "id": 1,
    "company_id": 1,
    "employee_id": 1,
    "pay_calc_type": "monthly",
    "pay_amount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_basic_pay_rule|[ApiV1EmployeesBasicPayRuleSerializer](#schemaapiv1employeesbasicpayruleserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesBasicPayRulesController.update_body">ApiV1EmployeesBasicPayRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesbasicpayrulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesBasicPayRulesController.update_body"></a>
<a id="tocSapiv1employeesbasicpayrulescontroller.update_body"></a>
<a id="tocsapiv1employeesbasicpayrulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2021,
  "month": 1,
  "employee_basic_pay_rule": {
    "pay_calc_type": "monthly",
    "pay_amount": 220000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|year|integer(int32)|true|none|更新対象年（必須）|
|month|integer(int32)|true|none|更新対象月（必須）<br><br>締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます<br><br>翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>|
|employee_basic_pay_rule|[ApiV1EmployeesBasicPayRuleUpdateRequestSerializer](#schemaapiv1employeesbasicpayruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesWorkRecordsController.update_body">ApiV1EmployeesWorkRecordsController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordscontroller.update_body"></a>
<a id="schema_ApiV1EmployeesWorkRecordsController.update_body"></a>
<a id="tocSapiv1employeesworkrecordscontroller.update_body"></a>
<a id="tocsapiv1employeesworkrecordscontroller.update_body"></a>

```json
{
  "company_id": 1,
  "break_records": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "clock_in_at": "2018-07-31 08:00:00",
  "clock_out_at": "2018-07-31 08:00:00",
  "day_pattern": "normal_day",
  "early_leaving_mins": 0,
  "is_absence": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "2018-07-31 08:00:00",
  "normal_work_clock_out_at": "2018-07-31 08:00:00",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holidays": [
    {
      "type": "half",
      "mins": 0
    }
  ],
  "holidays": [
    {
      "holiday_type": "full",
      "mins": 1,
      "time_ranges": [
        {
          "start_at": "2018-07-31 08:00:00",
          "end_at": "2018-07-31 09:00:00"
        }
      ],
      "holiday_category": "annual_paid_holiday"
    }
  ],
  "special_holiday": "1.0",
  "special_holiday_setting_id": 1,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|break_records|[[ApiV1EmployeesWorkRecordTimeRangeSerializer](#schemaapiv1employeesworkrecordtimerangeserializer)]|false|none|休憩時間のリスト|
|work_record_segments|[[ApiV1EmployeesWorkRecordTimeRangeSerializer](#schemaapiv1employeesworkrecordtimerangeserializer)]|false|none|出退勤のリスト|
|clock_in_at|string(date-time)|false|none|出勤時刻  <br><br>複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。|
|clock_out_at|string(date-time)|false|none|退勤時刻<br><br>複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。|
|day_pattern|string|false|none|勤務パターン（所定労働日: normal_day, 所定休日: prescribed_holiday, 法定休日: legal_holiday）<br><br>prescribed_holiday、legal_holidayを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。<br>- early_leaving_mins<br>- lateness_mins<br>- paid_holiday|
|early_leaving_mins|integer(int32)|false|none|早退分の時間（分単位）|
|is_absence|boolean|false|none|欠勤かどうか<br><br>is_absenceにtrueを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。<br>- break_records<br>  - clock_in_at<br>  - clock_out_at<br>- clock_in_at<br>- clock_out_at<br>- early_leaving_mins<br>- lateness_mins<br>- normal_work_clock_in_at<br>- normal_work_clock_out_at<br>- normal_work_mins<br><br>ただし、休暇（holidays、paid_holidays、special_holiday、half_special_holiday_mins、hourly_special_holiday_mins）を指定した場合は休暇の登録が優先され、is_absence の指定は無視されます。|
|lateness_mins|integer(int32)|false|none|遅刻分の時間（分単位）|
|normal_work_clock_in_at|string(date-time)|false|none|所定労働開始時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|normal_work_clock_out_at|string(date-time)|false|none|所定労働終了時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|normal_work_mins|integer(int32)|false|none|所定労働時間。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|note|string|false|none|勤怠メモ|
|paid_holidays|[object]|false|none|**Deprecated.** [deprecated] 年次有給休暇の内訳 ※ 削除予定のため holidays をご利用ください|
|holidays|[[ApiV1EmployeesWorkRecordHolidayRequest](#schemaapiv1employeesworkrecordholidayrequest)]|false|none|休暇の内訳。年次有給休暇、特別休暇、代休を指定できます。<br>full、morning_off、afternoon_off では mins と time_ranges を指定しません。年休と有給の特休の half では mins を指定します。無給の特休の half では mins を指定できません。<br>half を2つ組み合わせて全休にする場合は、どちらの half でも mins を指定できません。<br>年休・特休の hourly は、対象日に適用される勤務賃金設定の時間休の入力方式に従い、時間数方式の場合は mins、時間帯方式の場合は time_ranges を指定します。mins は60分単位です。代休では holiday_type にかかわらず mins と time_ranges を指定しません。<br>特別休暇では special_holiday_setting_id、代休では source_date が必須です。|
|special_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日の特別休暇取得日数。1日単位で指定します。 ※ 削除予定のため holidays をご利用ください|
|special_holiday_setting_id|integer(int32) \| null|false|none|**Deprecated.** [deprecated] 特別休暇設定ID ※ 削除予定のため holidays をご利用ください|
|half_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください|
|hourly_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください|
|use_attendance_deduction|boolean|false|none|欠勤・遅刻・早退を控除対象時間に算入するかどうか|
|use_default_work_pattern|boolean|false|none|デフォルトの勤務設定を使うかどうか。<br><br>trueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の休日の設定を参照して値が決まります<br>- day_pattern<br><br>trueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。<br>- normal_work_clock_in_at<br>- normal_work_clock_out_at<br>- normal_work_mins|

#### Enumerated Values

|Property|Value|
|---|---|
|day_pattern|normal_day|
|day_pattern|prescribed_holiday|
|day_pattern|legal_holiday|
|special_holiday|0|
|special_holiday|1|

<h2 id="tocS_LegacyApiV1EmployeesWorkRecordsController.update_body">LegacyApiV1EmployeesWorkRecordsController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapiv1employeesworkrecordscontroller.update_body"></a>
<a id="schema_LegacyApiV1EmployeesWorkRecordsController.update_body"></a>
<a id="tocSlegacyapiv1employeesworkrecordscontroller.update_body"></a>
<a id="tocslegacyapiv1employeesworkrecordscontroller.update_body"></a>

```json
{
  "company_id": 1,
  "break_records": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "work_record_segments": [
    {
      "clock_in_at": "2018-07-31 08:00:00",
      "clock_out_at": "2018-07-31 08:00:00"
    }
  ],
  "clock_in_at": "2018-07-31 08:00:00",
  "clock_out_at": "2018-07-31 08:00:00",
  "day_pattern": "normal_day",
  "early_leaving_mins": 0,
  "is_absence": true,
  "lateness_mins": 0,
  "normal_work_clock_in_at": "2018-07-31 08:00:00",
  "normal_work_clock_out_at": "2018-07-31 08:00:00",
  "normal_work_mins": 0,
  "note": "string",
  "paid_holiday": "1.0",
  "half_paid_holiday_mins": 0,
  "hourly_paid_holiday_mins": 0,
  "special_holiday": "1.0",
  "special_holiday_setting_id": 1,
  "half_special_holiday_mins": 0,
  "hourly_special_holiday_mins": 0,
  "use_attendance_deduction": true,
  "use_default_work_pattern": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|false|none|事業所ID（必須）|
|break_records|[[ApiV1EmployeesWorkRecordTimeRangeSerializer](#schemaapiv1employeesworkrecordtimerangeserializer)]|false|none|休憩時間のリスト|
|work_record_segments|[[ApiV1EmployeesWorkRecordTimeRangeSerializer](#schemaapiv1employeesworkrecordtimerangeserializer)]|false|none|出退勤のリスト|
|clock_in_at|string(date-time)|false|none|出勤時刻  <br><br>複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。|
|clock_out_at|string(date-time)|false|none|退勤時刻<br><br>複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。|
|day_pattern|string|false|none|勤務パターン（所定労働日: normal_day, 所定休日: prescribed_holiday, 法定休日: legal_holiday）<br><br>prescribed_holiday、legal_holidayを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。<br>- early_leaving_mins<br>- lateness_mins<br>- paid_holiday|
|early_leaving_mins|integer(int32)|false|none|早退分の時間（分単位）|
|is_absence|boolean|false|none|欠勤かどうか<br><br>is_absenceにtrueを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。<br>- break_records<br>  - clock_in_at<br>  - clock_out_at<br>- clock_in_at<br>- clock_out_at<br>- early_leaving_mins<br>- lateness_mins<br>- normal_work_clock_in_at<br>- normal_work_clock_out_at<br>- normal_work_mins<br><br>ただし、休暇（paid_holiday、half_paid_holiday_mins、hourly_paid_holiday_mins、special_holiday、half_special_holiday_mins、hourly_special_holiday_mins）を指定した場合は休暇の登録が優先され、is_absence の指定は無視されます。|
|lateness_mins|integer(int32)|false|none|遅刻分の時間（分単位）|
|normal_work_clock_in_at|string(date-time)|false|none|所定労働開始時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|normal_work_clock_out_at|string(date-time)|false|none|所定労働終了時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|normal_work_mins|integer(int32)|false|none|所定労働時間。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）|
|note|string|false|none|勤怠メモ|
|paid_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日の有休取得日数。1日単位で指定します。 ※ paid_holidays を指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください|
|half_paid_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 有給休暇の半休を利用した時間（分単位） ※ paid_holidaysを指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください|
|hourly_paid_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 有給休暇の時間休を利用した時間（分単位） ※ paid_holidaysを指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください|
|special_holiday|number(float)|false|none|**Deprecated.** [deprecated] この日の特別休暇取得日数。1日単位で指定します。 ※ 削除予定のため holidays をご利用ください|
|special_holiday_setting_id|integer(int32) \| null|false|none|**Deprecated.** [deprecated] 特別休暇設定ID ※ 削除予定のため holidays をご利用ください|
|half_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください|
|hourly_special_holiday_mins|integer(int32)|false|none|**Deprecated.** [deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください|
|use_attendance_deduction|boolean|false|none|欠勤・遅刻・早退を控除対象時間に算入するかどうか|
|use_default_work_pattern|boolean|false|none|デフォルトの勤務設定を使うかどうか。<br><br>trueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の休日の設定を参照して値が決まります<br>- day_pattern<br><br>trueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。<br>- normal_work_clock_in_at<br>- normal_work_clock_out_at<br>- normal_work_mins|

#### Enumerated Values

|Property|Value|
|---|---|
|day_pattern|normal_day|
|day_pattern|prescribed_holiday|
|day_pattern|legal_holiday|
|paid_holiday|0|
|paid_holiday|1|
|special_holiday|0|
|special_holiday|1|

<h2 id="tocS_ApiV1EmployeesWorkRecordSummaryController.update_body">ApiV1EmployeesWorkRecordSummaryController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesworkrecordsummarycontroller.update_body"></a>
<a id="schema_ApiV1EmployeesWorkRecordSummaryController.update_body"></a>
<a id="tocSapiv1employeesworkrecordsummarycontroller.update_body"></a>
<a id="tocsapiv1employeesworkrecordsummarycontroller.update_body"></a>

```json
{
  "company_id": 1,
  "work_days": 0,
  "work_days_on_weekdays": 0,
  "work_days_on_prescribed_holidays": 0,
  "work_days_on_legal_holidays": 0,
  "total_work_mins": 0,
  "total_normal_work_mins": 0,
  "total_excess_statutory_work_mins": 0,
  "total_overtime_within_statutory_work_mins": 0,
  "total_holiday_work_mins": 0,
  "total_latenight_work_mins": 0,
  "total_actual_excess_statutory_work_mins": 0,
  "total_actual_overtime_within_statutory_work_mins": 0,
  "total_overtime_work_mins": 0,
  "total_overtime_excess_statutory_work_mins": 0,
  "total_prescribed_holiday_work_mins": 0,
  "num_absences": 0,
  "num_absences_for_deduction": 0,
  "total_lateness_mins": 0,
  "total_lateness_mins_for_deduction": 0,
  "total_early_leaving_mins": 0,
  "total_early_leaving_mins_for_deduction": 0,
  "num_paid_holidays": 0,
  "total_shortage_work_mins": 0,
  "total_deemed_paid_excess_statutory_work_mins": 0,
  "total_deemed_paid_overtime_within_statutory_work_mins": 0,
  "total_deemed_paid_overtime_except_normal_work_mins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|work_days|number(float)|false|none|総勤務日数|
|work_days_on_weekdays|number(float)|false|none|所定労働日の勤務日数|
|work_days_on_prescribed_holidays|number(float)|false|none|所定休日の勤務日数|
|work_days_on_legal_holidays|number(float)|false|none|法定休日の勤務日数|
|total_work_mins|integer|false|none|労働時間（分）|
|total_normal_work_mins|integer|false|none|所定労働時間（分）|
|total_excess_statutory_work_mins|integer|false|none|**Deprecated.** [deprecated] 給与計算に用いられる法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|total_overtime_within_statutory_work_mins|integer|false|none|給与計算に用いられる法定内残業時間（分）|
|total_holiday_work_mins|integer|false|none|法定休日労働時間（分）|
|total_latenight_work_mins|integer|false|none|深夜労働時間（分）|
|total_actual_excess_statutory_work_mins|integer|false|none|**Deprecated.** [deprecated] 実労働時間ベースの法定内残業時間（分） ※ 削除予定のため total_actual_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|total_actual_overtime_within_statutory_work_mins|integer|false|none|実労働時間ベースの法定内残業時間（分）|
|total_overtime_work_mins|integer|false|none|**Deprecated.** [deprecated] 時間外労働時間（分） ※ 削除予定のため total_overtime_excess_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|total_overtime_excess_statutory_work_mins|integer|false|none|時間外労働時間（分）|
|total_prescribed_holiday_work_mins|integer|false|none|所定休日労働時間（分）|
|num_absences|number(float)|false|none|欠勤日数|
|num_absences_for_deduction|number(float)|false|none|控除対象の欠勤日数<br><br>フレックスタイム制の場合は、指定した値が反映されず無視されます。|
|total_lateness_mins|integer|false|none|遅刻時間（分）|
|total_lateness_mins_for_deduction|integer|false|none|控除対象の遅刻時間（分）<br><br>フレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。|
|total_early_leaving_mins|integer|false|none|早退時間（分）|
|total_early_leaving_mins_for_deduction|integer|false|none|控除対象の早退時間（分）<br><br>フレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。|
|num_paid_holidays|number(float)|false|none|有給取得日数|
|total_shortage_work_mins|integer|false|none|不足時間（分）（フレックスタイム制でのみ使用）|
|total_deemed_paid_excess_statutory_work_mins|integer|false|none|**Deprecated.** [deprecated] みなし外の法定内残業時間（分）（裁量労働制でのみ使用） ※ 削除予定のため total_deemed_paid_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります|
|total_deemed_paid_overtime_within_statutory_work_mins|integer|false|none|みなし外の法定内残業時間（分）（裁量労働制でのみ使用）|
|total_deemed_paid_overtime_except_normal_work_mins|integer|false|none|みなし外の時間外労働時間（分）（裁量労働制でのみ使用）|

<h2 id="tocS_ApiV1EmployeesTimeClocksController.index_response">ApiV1EmployeesTimeClocksController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockscontroller.index_response"></a>
<a id="schema_ApiV1EmployeesTimeClocksController.index_response"></a>
<a id="tocSapiv1employeestimeclockscontroller.index_response"></a>
<a id="tocsapiv1employeestimeclockscontroller.index_response"></a>

```json
[
  {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
]
```

<h2 id="tocS_ApiV1EmployeesTimeClocksController.show_response">ApiV1EmployeesTimeClocksController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockscontroller.show_response"></a>
<a id="schema_ApiV1EmployeesTimeClocksController.show_response"></a>
<a id="tocSapiv1employeestimeclockscontroller.show_response"></a>
<a id="tocsapiv1employeestimeclockscontroller.show_response"></a>

```json
{
  "employee_time_clock": {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_time_clock|[ApiV1EmployeesTimeClockSerializer](#schemaapiv1employeestimeclockserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesTimeClocksController.available_types_response">ApiV1EmployeesTimeClocksController.available_types_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockscontroller.available_types_response"></a>
<a id="schema_ApiV1EmployeesTimeClocksController.available_types_response"></a>
<a id="tocSapiv1employeestimeclockscontroller.available_types_response"></a>
<a id="tocsapiv1employeestimeclockscontroller.available_types_response"></a>

```json
{
  "available_types": [
    "clock_in"
  ],
  "base_date": "2018-07-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available_types|[string]|false|none|打刻可能種別(clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤)|
|base_date|string(date)|false|none|打刻基準日|

#### Enumerated Values

|Property|Value|
|---|---|
|available_types|clock_in|
|available_types|break_begin|
|available_types|break_end|
|available_types|clock_out|

<h2 id="tocS_ApiV1EmployeesTimeClocksController.create_response">ApiV1EmployeesTimeClocksController.create_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockscontroller.create_response"></a>
<a id="schema_ApiV1EmployeesTimeClocksController.create_response"></a>
<a id="tocSapiv1employeestimeclockscontroller.create_response"></a>
<a id="tocsapiv1employeestimeclockscontroller.create_response"></a>

```json
{
  "employee_time_clock": {
    "id": 1,
    "date": "1970-01-01",
    "type": "clock_in",
    "datetime": "1970-01-01T00:00:00Z",
    "original_datetime": "1970-01-01T00:00:00Z",
    "note": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_time_clock|[ApiV1EmployeesTimeClockSerializer](#schemaapiv1employeestimeclockserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeesTimeClocksController.create_body">ApiV1EmployeesTimeClocksController.create_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeestimeclockscontroller.create_body"></a>
<a id="schema_ApiV1EmployeesTimeClocksController.create_body"></a>
<a id="tocSapiv1employeestimeclockscontroller.create_body"></a>
<a id="tocsapiv1employeestimeclockscontroller.create_body"></a>

```json
{
  "company_id": 1,
  "type": "clock_in",
  "base_date": "2018-07-31",
  "datetime": "2018-07-31 08:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|(required)|
|type|string|true|none|打刻種別（required）[clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤]の何れか|
|base_date|string(date)|false|none|打刻日。打刻が日をまたぐ場合に、前日の日付を指定します。(YYYY-MM-DD)(例:2018-07-31)|
|datetime|string(date-time)|false|none|打刻時刻。(YYYY-MM-DD&nbsp;HH:MM:SS)(例:2018-07-31&nbsp;08:00:00)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|clock_in|
|type|break_begin|
|type|break_end|
|type|clock_out|

<h2 id="tocS_ApiV1SalariesEmployeePayrollStatementsController.index_response">ApiV1SalariesEmployeePayrollStatementsController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1salariesemployeepayrollstatementscontroller.index_response"></a>
<a id="schema_ApiV1SalariesEmployeePayrollStatementsController.index_response"></a>
<a id="tocSapiv1salariesemployeepayrollstatementscontroller.index_response"></a>
<a id="tocsapiv1salariesemployeepayrollstatementscontroller.index_response"></a>

```json
{
  "employee_payroll_statements": [
    {
      "id": 0,
      "company_id": 0,
      "employee_id": 0,
      "employee_name": "string",
      "employee_display_name": "string",
      "employee_num": "string",
      "pay_date": "1970-01-01",
      "start_date": "1970-01-01",
      "closing_date": "1970-01-01",
      "variable_pay_start_date": "1970-01-01",
      "variable_pay_closing_date": "1970-01-01",
      "fixed": true,
      "calc_status": "string",
      "calculated_at": "1970-01-01T00:00:00Z",
      "pay_calc_type": "monthly",
      "board_member_remuneration_amount": "string",
      "basic_pay_amount": "string",
      "work_days": "string",
      "normal_work_time": "string",
      "normal_work_days": "string",
      "work_mins_by_paid_holiday": "string",
      "num_paid_holidays": "string",
      "is_board_member": true,
      "total_attendance_deduction_amount": "string",
      "total_allowance_amount": "string",
      "total_deduction_amount": "string",
      "total_deduction_employer_share": "string",
      "net_payment_amount": "string",
      "gross_payment_amount": "string",
      "total_worked_days_count": "string",
      "total_taxable_payment_amount": "string",
      "total_expense_amount": "string",
      "total_transfer_amount": "string",
      "total_annual_payment_amount": "string",
      "payments": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "deductions_employer_share": [
        {
          "name": "string",
          "amount": "string"
        }
      ],
      "attendances": [
        {
          "name": "string",
          "time": "string",
          "amount": "string"
        }
      ],
      "overtime_pays": [
        {
          "name": "時間外労働",
          "time": "60.0",
          "amount": "1000.0",
          "code": "12345abcde"
        }
      ],
      "remark": "string"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_payroll_statements|[[ApiV1SalariesEmployeePayrollStatementSerializer](#schemaapiv1salariesemployeepayrollstatementserializer)]|false|none|none|
|total_count|integer(int32)|false|none|指定した年月に支払いのある給与明細の合計件数|

<h2 id="tocS_ApiV1SalariesEmployeePayrollStatementsController.show_response">ApiV1SalariesEmployeePayrollStatementsController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1salariesemployeepayrollstatementscontroller.show_response"></a>
<a id="schema_ApiV1SalariesEmployeePayrollStatementsController.show_response"></a>
<a id="tocSapiv1salariesemployeepayrollstatementscontroller.show_response"></a>
<a id="tocsapiv1salariesemployeepayrollstatementscontroller.show_response"></a>

```json
{
  "employee_payroll_statement": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "employee_name": "string",
    "employee_display_name": "string",
    "employee_num": "string",
    "pay_date": "1970-01-01",
    "start_date": "1970-01-01",
    "closing_date": "1970-01-01",
    "variable_pay_start_date": "1970-01-01",
    "variable_pay_closing_date": "1970-01-01",
    "fixed": true,
    "calc_status": "string",
    "calculated_at": "1970-01-01T00:00:00Z",
    "pay_calc_type": "monthly",
    "board_member_remuneration_amount": "string",
    "basic_pay_amount": "string",
    "work_days": "string",
    "normal_work_time": "string",
    "normal_work_days": "string",
    "work_mins_by_paid_holiday": "string",
    "num_paid_holidays": "string",
    "is_board_member": true,
    "total_attendance_deduction_amount": "string",
    "total_allowance_amount": "string",
    "total_deduction_amount": "string",
    "total_deduction_employer_share": "string",
    "net_payment_amount": "string",
    "gross_payment_amount": "string",
    "total_worked_days_count": "string",
    "total_taxable_payment_amount": "string",
    "total_expense_amount": "string",
    "total_transfer_amount": "string",
    "total_annual_payment_amount": "string",
    "payments": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions_employer_share": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "attendances": [
      {
        "name": "string",
        "time": "string",
        "amount": "string"
      }
    ],
    "overtime_pays": [
      {
        "name": "時間外労働",
        "time": "60.0",
        "amount": "1000.0",
        "code": "12345abcde"
      }
    ],
    "remark": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_payroll_statement|[ApiV1SalariesEmployeePayrollStatementSerializer](#schemaapiv1salariesemployeepayrollstatementserializer)|false|none|none|

<h2 id="tocS_ApiV1BonusesEmployeePayrollStatementsController.show_response">ApiV1BonusesEmployeePayrollStatementsController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1bonusesemployeepayrollstatementscontroller.show_response"></a>
<a id="schema_ApiV1BonusesEmployeePayrollStatementsController.show_response"></a>
<a id="tocSapiv1bonusesemployeepayrollstatementscontroller.show_response"></a>
<a id="tocsapiv1bonusesemployeepayrollstatementscontroller.show_response"></a>

```json
{
  "employee_payroll_statement": {
    "id": 0,
    "company_id": 0,
    "employee_id": 0,
    "employee_name": "string",
    "employee_display_name": "string",
    "employee_num": "string",
    "closing_date": "1970-01-01",
    "pay_date": "1970-01-01",
    "fixed": true,
    "calc_status": "string",
    "calculated_at": "1970-01-01T00:00:00Z",
    "bonus_amount": "string",
    "total_allowance_amount": "string",
    "total_deduction_amount": "string",
    "net_payment_amount": "string",
    "gross_payment_amount": "string",
    "total_taxable_payment_amount": "string",
    "allowances": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "deductions": [
      {
        "name": "string",
        "amount": "string"
      }
    ],
    "remark": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_payroll_statement|[ApiV1BonusesEmployeePayrollStatementSerializer](#schemaapiv1bonusesemployeepayrollstatementserializer)|false|none|none|

<h2 id="tocS_ApiV1GroupCreateRequest">ApiV1GroupCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupcreaterequest"></a>
<a id="schema_ApiV1GroupCreateRequest"></a>
<a id="tocSapiv1groupcreaterequest"></a>
<a id="tocsapiv1groupcreaterequest"></a>

```json
{
  "company_id": 1,
  "group": {
    "code": "group2",
    "name": "営業部門",
    "parent_group_id": 2
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|作成対象事業所ID（必須）|
|group|[ApiV1GroupCreateRequestParams](#schemaapiv1groupcreaterequestparams)|true|none|none|

<h2 id="tocS_ApiV1GroupResponse">ApiV1GroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupresponse"></a>
<a id="schema_ApiV1GroupResponse"></a>
<a id="tocSapiv1groupresponse"></a>
<a id="tocsapiv1groupresponse"></a>

```json
{
  "group": {
    "id": 3,
    "code": "group2",
    "name": "営業部門",
    "level": 2,
    "parent_group_id": 2,
    "parent_group_code": "group1",
    "parent_group_name": "営業統括"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|[ApiV1GroupResponseParams](#schemaapiv1groupresponseparams)|true|none|none|

<h2 id="tocS_ApiV1GroupUpdateRequest">ApiV1GroupUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1groupupdaterequest"></a>
<a id="schema_ApiV1GroupUpdateRequest"></a>
<a id="tocSapiv1groupupdaterequest"></a>
<a id="tocsapiv1groupupdaterequest"></a>

```json
{
  "company_id": 1,
  "group": {
    "code": "group2",
    "name": "営業部門"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|作成対象事業所ID（必須）|
|group|[ApiV1GroupUpdateRequestParams](#schemaapiv1groupupdaterequestparams)|true|none|none|

<h2 id="tocS_ApiV1PositionResponse">ApiV1PositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1positionresponse"></a>
<a id="schema_ApiV1PositionResponse"></a>
<a id="tocSapiv1positionresponse"></a>
<a id="tocsapiv1positionresponse"></a>

```json
{
  "position": {
    "id": 1,
    "code": "position1",
    "name": "部長"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[ApiV1PositionResponseParams](#schemaapiv1positionresponseparams)|true|none|none|

<h2 id="tocS_ApiV1PositionRequest">ApiV1PositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1positionrequest"></a>
<a id="schema_ApiV1PositionRequest"></a>
<a id="tocSapiv1positionrequest"></a>
<a id="tocsapiv1positionrequest"></a>

```json
{
  "company_id": 1,
  "position": {
    "code": "position1",
    "name": "部長"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|作成対象事業所ID（必須）|
|position|[ApiV1PositionRequestParams](#schemaapiv1positionrequestparams)|true|none|none|

<h2 id="tocS_ApiV1MonthlyAttendanceIndexResponse">ApiV1MonthlyAttendanceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendanceindexresponse"></a>
<a id="schema_ApiV1MonthlyAttendanceIndexResponse"></a>
<a id="tocSapiv1monthlyattendanceindexresponse"></a>
<a id="tocsapiv1monthlyattendanceindexresponse"></a>

```json
{
  "monthly_attendances": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "proxy_applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "2022-02-01",
      "issue_date": "1970-01-01",
      "status": "in_progress",
      "passed_auto_check": true
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly_attendances|[[ApiV1MonthlyAttendanceIndexResponseParams](#schemaapiv1monthlyattendanceindexresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1MonthlyAttendanceResponse">ApiV1MonthlyAttendanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendanceresponse"></a>
<a id="schema_ApiV1MonthlyAttendanceResponse"></a>
<a id="tocSapiv1monthlyattendanceresponse"></a>
<a id="tocsapiv1monthlyattendanceresponse"></a>

```json
{
  "monthly_attendance": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "2022-02-01",
    "issue_date": "1970-01-01",
    "status": "in_progress",
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly_attendance|[ApiV1MonthlyAttendanceResponseParams](#schemaapiv1monthlyattendanceresponseparams)|true|none|none|

<h2 id="tocS_ApiV1MonthlyAttendanceCreateRequest">ApiV1MonthlyAttendanceCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendancecreaterequest"></a>
<a id="schema_ApiV1MonthlyAttendanceCreateRequest"></a>
<a id="tocSapiv1monthlyattendancecreaterequest"></a>
<a id="tocsapiv1monthlyattendancecreaterequest"></a>

```json
{
  "company_id": 1,
  "target_year": 2022,
  "target_month": 1,
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|target_year|integer(int32)|true|none|対象年（必須）|
|target_month|integer(int32)|true|none|対象月（必須）|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

<h2 id="tocS_ApiV1MonthlyAttendanceUpdateRequest">ApiV1MonthlyAttendanceUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1monthlyattendanceupdaterequest"></a>
<a id="schema_ApiV1MonthlyAttendanceUpdateRequest"></a>
<a id="tocSapiv1monthlyattendanceupdaterequest"></a>
<a id="tocsapiv1monthlyattendanceupdaterequest"></a>

```json
{
  "company_id": 1,
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

<h2 id="tocS_ApiV1WorkTimeIndexResponseParams">ApiV1WorkTimeIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1worktimeindexresponseparams"></a>
<a id="schema_ApiV1WorkTimeIndexResponseParams"></a>
<a id="tocSapiv1worktimeindexresponseparams"></a>
<a id="tocsapiv1worktimeindexresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "clear_work_time": true,
  "clock_in_at": "12:00",
  "clock_out_at": "23:59",
  "work_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "lateness_mins": 0,
  "early_leaving_mins": 0,
  "break_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "passed_auto_check": true,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|clear_work_time|boolean|true|none|勤務時間削除フラグ（false:勤務時間を修正する、true:勤務時間を削除する）|
|clock_in_at|string \| null|false|none|勤務開始時間<br>  - 勤務時間が複数登録されている場合は、最初の勤務の出勤時間を返します。|
|clock_out_at|string \| null|false|none|勤務終了時間<br>  - 勤務時間が複数登録されている場合は、最後の勤務の退勤時間を返します。|
|work_records|[object]|false|none|勤務時間のリスト<br>  - 登録されている全ての勤務時間のリストを返します。|
|lateness_mins|integer(int32)|true|none|遅刻分の時間（分単位）|
|early_leaving_mins|integer(int32)|true|none|早退分の時間（分単位）|
|break_records|[object]|false|none|休憩時間のリスト|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

<h2 id="tocS_ApiV1WorkTimeResponseParams">ApiV1WorkTimeResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1worktimeresponseparams"></a>
<a id="schema_ApiV1WorkTimeResponseParams"></a>
<a id="tocSapiv1worktimeresponseparams"></a>
<a id="tocsapiv1worktimeresponseparams"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "application_number": 1,
  "applicant_id": 1,
  "approver_ids": [
    1
  ],
  "target_date": "1970-01-01",
  "clear_work_time": false,
  "clock_in_at": "12:00",
  "clock_out_at": "23:59",
  "work_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "lateness_mins": 0,
  "early_leaving_mins": 0,
  "break_records": [
    {
      "clock_in_at": "12:00",
      "clock_out_at": "23:59"
    }
  ],
  "issue_date": "1970-01-01",
  "comment": "申請理由",
  "status": "in_progress",
  "passed_auto_check": true,
  "approval_flow_route_id": 1,
  "approval_flow_route_name": "申請経路",
  "approval_flow_logs": [
    {
      "user_id": 1,
      "action": "approve",
      "update_at": "2022-06-08T09:46:46.000+09:00"
    }
  ],
  "current_step_id": 1,
  "current_round": 1,
  "proxy_applicant_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|申請ID|
|company_id|integer(int32)|true|none|事業所ID|
|application_number|integer(int32)|true|none|申請No|
|applicant_id|integer(int32)|true|none|申請者のユーザーID|
|approver_ids|[integer(int32) \| null]|false|none|承認者のユーザーID配列<br>次の場合、空配列になります。<br>- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請<br>- 申請が差戻された|
|target_date|string(date)|true|none|対象日|
|clear_work_time|boolean|true|none|勤務時間削除フラグ（false:勤務時間を修正する、true:勤務時間を削除する）|
|clock_in_at|string \| null|false|none|勤務開始時間<br>  - 勤務が複数登録されている場合は、最初の勤務の出勤時間を返します。|
|clock_out_at|string \| null|false|none|勤務終了時間<br>  - 勤務が複数登録されている場合は、最後の勤務の退勤時間を返します。|
|work_records|[object]|false|none|勤務時間のリスト<br>  - 登録されている全ての勤務時間のリストを返します。|
|lateness_mins|integer(int32)|true|none|遅刻分の時間（分単位）|
|early_leaving_mins|integer(int32)|true|none|早退分の時間（分単位）|
|break_records|[object]|false|none|休憩時間のリスト|
|issue_date|string(date)|true|none|申請日|
|comment|string \| null|false|none|申請理由|
|status|string|true|none|申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）|
|passed_auto_check|boolean|true|none|自動チェック結果|
|approval_flow_route_id|integer|true|none|申請経路ID|
|approval_flow_route_name|string|true|none|申請経路名|
|approval_flow_logs|[[ApiV1ApprovalFlowLogsParams](#schemaapiv1approvalflowlogsparams)]|true|none|承認履歴|
|current_step_id|integer(int32) \| null|false|none|現在承認ステップID<br><br>申請を差戻した場合、nullになります。|
|current_round|integer(int32)|true|none|現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。|
|proxy_applicant_id|integer(int32) \| null|false|none|代理申請者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|in_progress|
|status|approved|
|status|feedback|

<h2 id="tocS_ApiV1PaidHolidayIndexResponse">ApiV1PaidHolidayIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1paidholidayindexresponse"></a>
<a id="schema_ApiV1PaidHolidayIndexResponse"></a>
<a id="tocSapiv1paidholidayindexresponse"></a>
<a id="tocsapiv1paidholidayindexresponse"></a>

```json
{
  "paid_holidays": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "values": [
        {
          "type": "half",
          "start_at": "12:00",
          "end_at": "23:59"
        }
      ],
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true,
      "proxy_applicant_id": 1
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paid_holidays|[[ApiV1PaidHolidayIndexResponseParams](#schemaapiv1paidholidayindexresponseparams) \| [LegacyApiV1PaidHolidayIndexResponseParams](#schemalegacyapiv1paidholidayindexresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1PaidHolidayResponse">ApiV1PaidHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1paidholidayresponse"></a>
<a id="schema_ApiV1PaidHolidayResponse"></a>
<a id="tocSapiv1paidholidayresponse"></a>
<a id="tocsapiv1paidholidayresponse"></a>

```json
{
  "paid_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "values": [
      {
        "type": "half",
        "start_at": "12:00",
        "end_at": "23:59"
      }
    ],
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paid_holiday|[ApiV1PaidHolidayResponseParams](#schemaapiv1paidholidayresponseparams) \| [LegacyApiV1PaidHolidayResponseParams](#schemalegacyapiv1paidholidayresponseparams)|true|none|none|

<h2 id="tocS_ApiV1PaidHolidayRequest">ApiV1PaidHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1paidholidayrequest"></a>
<a id="schema_ApiV1PaidHolidayRequest"></a>
<a id="tocSapiv1paidholidayrequest"></a>
<a id="tocsapiv1paidholidayrequest"></a>

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "values": [
    {
      "type": "half",
      "start_at": "12:00",
      "end_at": "23:59"
    }
  ],
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|target_date|string(date)|true|none|対象日（必須）|
|values|[object]|true|none|none|
|comment|string|false|none|申請理由|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

<h2 id="tocS_LegacyApiV1PaidHolidayRequest">LegacyApiV1PaidHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemalegacyapiv1paidholidayrequest"></a>
<a id="schema_LegacyApiV1PaidHolidayRequest"></a>
<a id="tocSlegacyapiv1paidholidayrequest"></a>
<a id="tocslegacyapiv1paidholidayrequest"></a>

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|target_date|string(date)|true|none|対象日（必須）|
|holiday_type|string|true|none|[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休） ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のためvalues->type を指定してください|
|start_at|string|false|none|[deprecated] 取得予定開始時間 ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のため values->start_at を指定してください|
|end_at|string|false|none|[deprecated] 取得予定終了時間 ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のため values->end_at を指定してください|
|comment|string|false|none|申請理由|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning|
|holiday_type|afternoon|
|holiday_type|hour|

<h2 id="tocS_ApiV1specialHolidayIndexResponse">ApiV1specialHolidayIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1specialholidayindexresponse"></a>
<a id="schema_ApiV1specialHolidayIndexResponse"></a>
<a id="tocSapiv1specialholidayindexresponse"></a>
<a id="tocsapiv1specialholidayindexresponse"></a>

```json
{
  "special_holidays": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "special_holiday_setting_id": 1,
      "special_holiday_name": "特別休暇名称",
      "holiday_type": "half",
      "start_at": "12:00",
      "end_at": "23:59",
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true,
      "proxy_applicant_id": 1
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|special_holidays|[object]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1specialHolidayResponse">ApiV1specialHolidayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1specialholidayresponse"></a>
<a id="schema_ApiV1specialHolidayResponse"></a>
<a id="tocSapiv1specialholidayresponse"></a>
<a id="tocsapiv1specialholidayresponse"></a>

```json
{
  "special_holiday": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "special_holiday_setting_id": 1,
    "special_holiday_name": "特別休暇名称",
    "holiday_type": "half",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1,
    "proxy_applicant_id": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|special_holiday|object|true|none|none|

<h2 id="tocS_ApiV1specialHolidayRequest">ApiV1specialHolidayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1specialholidayrequest"></a>
<a id="schema_ApiV1specialHolidayRequest"></a>
<a id="tocSapiv1specialholidayrequest"></a>
<a id="tocsapiv1specialholidayrequest"></a>

```json
{
  "company_id": 1,
  "target_date": "2018-07-31",
  "special_holiday_setting_id": 1,
  "holiday_type": "half",
  "start_at": "12:00",
  "end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|target_date|string(date)|true|none|対象日（必須）|
|special_holiday_setting_id|integer(int32)|true|none|特別休暇設定ID（必須）|
|holiday_type|string|true|none|取得単位（必須）（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）|
|start_at|string|false|none|取得予定開始時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|end_at|string|false|none|取得予定終了時間（条件付き必須）<br>取得単位が半休、時間休の場合は必須|
|comment|string|false|none|申請理由|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|holiday_type|full|
|holiday_type|half|
|holiday_type|morning|
|holiday_type|afternoon|
|holiday_type|hour|

<h2 id="tocS_ApiV1OvertimeWorkIndexResponse">ApiV1OvertimeWorkIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1overtimeworkindexresponse"></a>
<a id="schema_ApiV1OvertimeWorkIndexResponse"></a>
<a id="tocSapiv1overtimeworkindexresponse"></a>
<a id="tocsapiv1overtimeworkindexresponse"></a>

```json
{
  "overtime_works": [
    {
      "id": 1,
      "company_id": 1,
      "application_number": 1,
      "applicant_id": 1,
      "proxy_applicant_id": 1,
      "approver_ids": [
        1
      ],
      "target_date": "1970-01-01",
      "start_at": "12:00",
      "end_at": "23:59",
      "issue_date": "1970-01-01",
      "comment": "申請理由",
      "status": "in_progress",
      "revoke_status": null,
      "passed_auto_check": true
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overtime_works|[[ApiV1OvertimeWorkIndexResponseParams](#schemaapiv1overtimeworkindexresponseparams)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1OvertimeWorkResponse">ApiV1OvertimeWorkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1overtimeworkresponse"></a>
<a id="schema_ApiV1OvertimeWorkResponse"></a>
<a id="tocSapiv1overtimeworkresponse"></a>
<a id="tocsapiv1overtimeworkresponse"></a>

```json
{
  "overtime_work": {
    "id": 1,
    "company_id": 1,
    "application_number": 1,
    "applicant_id": 1,
    "proxy_applicant_id": 1,
    "approver_ids": [
      1
    ],
    "target_date": "1970-01-01",
    "start_at": "12:00",
    "end_at": "23:59",
    "issue_date": "1970-01-01",
    "comment": "申請理由",
    "status": "in_progress",
    "revoke_status": null,
    "passed_auto_check": true,
    "approval_flow_route_id": 1,
    "approval_flow_route_name": "申請経路",
    "approval_flow_logs": [
      {
        "user_id": 1,
        "action": "approve",
        "update_at": "2022-06-08T09:46:46.000+09:00"
      }
    ],
    "current_step_id": 1,
    "current_round": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overtime_work|[ApiV1OvertimeWorkResponseParams](#schemaapiv1overtimeworkresponseparams)|true|none|none|

<h2 id="tocS_ApiV1OvertimeWorkRequest">ApiV1OvertimeWorkRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1overtimeworkrequest"></a>
<a id="schema_ApiV1OvertimeWorkRequest"></a>
<a id="tocSapiv1overtimeworkrequest"></a>
<a id="tocsapiv1overtimeworkrequest"></a>

```json
{
  "company_id": 1,
  "target_date": "1970-01-01",
  "start_at": "12:00",
  "end_at": "23:59",
  "early_work_start_at": "12:00",
  "early_work_end_at": "23:59",
  "overtime_work_start_at": "12:00",
  "overtime_work_end_at": "23:59",
  "comment": "申請理由",
  "approval_flow_route_id": 1,
  "approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID（必須）|
|target_date|string(date)|true|none|対象日（必須）|
|start_at|string|false|none|取得予定開始時間|
|end_at|string|false|none|取得予定終了時間|
|early_work_start_at|string \| null|false|none|実績反映ありの早出申請の開始予定時刻  <br>実績反映ありの早出申請する場合は必須|
|early_work_end_at|string \| null|false|none|実績反映ありの早出申請の終了予定時刻  <br>実績反映ありの早出申請する場合は必須|
|overtime_work_start_at|string \| null|false|none|実績反映ありの残業申請の開始予定時刻  <br>実績反映ありの残業申請する場合は必須|
|overtime_work_end_at|string \| null|false|none|実績反映ありの残業申請の終了予定時刻  <br>実績反映ありの残業申請する場合は必須|
|comment|string|false|none|申請理由|
|approval_flow_route_id|integer(int32)|true|none|申請経路ID（必須）|
|approver_id|integer(int32)|false|none|承認者のユーザーID|

<h2 id="tocS_ApiV1ApprovalActionRequest">ApiV1ApprovalActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalactionrequest"></a>
<a id="schema_ApiV1ApprovalActionRequest"></a>
<a id="tocSapiv1approvalactionrequest"></a>
<a id="tocsapiv1approvalactionrequest"></a>

```json
{
  "company_id": 1,
  "approval_action": "approve",
  "target_round": 1,
  "target_step_id": 1,
  "next_approver_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|approval_action|string|true|none|申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）|
|target_round|integer(int32) \| null|true|none|対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。|
|target_step_id|integer(int32) \| null|true|none|対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。|
|next_approver_id|integer(int32) \| null|false|none|次のステップの承認者のユーザーID|

#### Enumerated Values

|Property|Value|
|---|---|
|approval_action|approve|
|approval_action|cancel|
|approval_action|feedback|
|approval_action|force_feedback|

<h2 id="tocS_ApiV1ApprovalFlowRoutesIndexResponse">ApiV1ApprovalFlowRoutesIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalflowroutesindexresponse"></a>
<a id="schema_ApiV1ApprovalFlowRoutesIndexResponse"></a>
<a id="tocSapiv1approvalflowroutesindexresponse"></a>
<a id="tocsapiv1approvalflowroutesindexresponse"></a>

```json
{
  "approval_flow_routes": [
    {
      "id": 1,
      "name": "申請経路",
      "description": "申請経路の説明",
      "user_id": 1,
      "definition_system": true,
      "first_step_id": 1,
      "usages": [
        "AttendanceWorkflow"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval_flow_routes|[[ApiV1ApprovalFlowRouteIndexResponseParams](#schemaapiv1approvalflowrouteindexresponseparams)]|true|none|none|

<h2 id="tocS_ApiV1ApprovalFlowRouteIndexResponseParams">ApiV1ApprovalFlowRouteIndexResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalflowrouteindexresponseparams"></a>
<a id="schema_ApiV1ApprovalFlowRouteIndexResponseParams"></a>
<a id="tocSapiv1approvalflowrouteindexresponseparams"></a>
<a id="tocsapiv1approvalflowrouteindexresponseparams"></a>

```json
{
  "id": 1,
  "name": "申請経路",
  "description": "申請経路の説明",
  "user_id": 1,
  "definition_system": true,
  "first_step_id": 1,
  "usages": [
    "AttendanceWorkflow"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|申請経路ID|
|name|string|false|none|申請経路名|
|description|string|false|none|申請経路の説明|
|user_id|integer \| null|false|none|更新したユーザーのユーザーID|
|definition_system|boolean|false|none|システム作成の申請経路かどうか|
|first_step_id|integer|false|none|最初の承認ステップのID|
|usages|[string]|false|none|申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）<br>- AttendanceWorkflow - 勤怠申請<br>- PersonalDataWorkflow - 身上変更申請|

#### Enumerated Values

|Property|Value|
|---|---|
|usages|AttendanceWorkflow|
|usages|PersonalDataWorkflow|

<h2 id="tocS_ApiV1ApprovalFlowRouteResponse">ApiV1ApprovalFlowRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalflowrouteresponse"></a>
<a id="schema_ApiV1ApprovalFlowRouteResponse"></a>
<a id="tocSapiv1approvalflowrouteresponse"></a>
<a id="tocsapiv1approvalflowrouteresponse"></a>

```json
{
  "approval_flow_route": {
    "id": 1,
    "name": "申請経路",
    "description": "申請経路の説明",
    "user_id": 1,
    "definition_system": true,
    "first_step_id": 1,
    "usages": [
      "AttendanceWorkflow"
    ],
    "steps": [
      {
        "id": 1,
        "next_step_id": 2,
        "resource_type": "predefined_user",
        "user_ids": [
          3
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approval_flow_route|[ApiV1ApprovalFlowRouteResponseParams](#schemaapiv1approvalflowrouteresponseparams)|true|none|none|

<h2 id="tocS_ApiV1ApprovalFlowRouteResponseParams">ApiV1ApprovalFlowRouteResponseParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1approvalflowrouteresponseparams"></a>
<a id="schema_ApiV1ApprovalFlowRouteResponseParams"></a>
<a id="tocSapiv1approvalflowrouteresponseparams"></a>
<a id="tocsapiv1approvalflowrouteresponseparams"></a>

```json
{
  "id": 1,
  "name": "申請経路",
  "description": "申請経路の説明",
  "user_id": 1,
  "definition_system": true,
  "first_step_id": 1,
  "usages": [
    "AttendanceWorkflow"
  ],
  "steps": [
    {
      "id": 1,
      "next_step_id": 2,
      "resource_type": "predefined_user",
      "user_ids": [
        3
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|申請経路ID|
|name|string|false|none|申請経路名|
|description|string|false|none|申請経路の説明|
|user_id|integer \| null|false|none|更新したユーザーのユーザーID|
|definition_system|boolean|false|none|システム作成の申請経路かどうか|
|first_step_id|integer|false|none|最初の承認ステップのID|
|usages|[string]|false|none|申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）<br>- AttendanceWorkflow - 勤怠申請<br>- PersonalDataWorkflow - 身上変更申請|
|steps|[ApiV1FlowRouteStepSrializer](#schemaapiv1flowroutestepsrializer)|false|none|承認ステップ（配列）|

#### Enumerated Values

|Property|Value|
|---|---|
|usages|AttendanceWorkflow|
|usages|PersonalDataWorkflow|

<h2 id="tocS_ApiV1FlowRouteStepSrializer">ApiV1FlowRouteStepSrializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1flowroutestepsrializer"></a>
<a id="schema_ApiV1FlowRouteStepSrializer"></a>
<a id="tocSapiv1flowroutestepsrializer"></a>
<a id="tocsapiv1flowroutestepsrializer"></a>

```json
[
  {
    "id": 1,
    "next_step_id": 2,
    "resource_type": "predefined_user",
    "user_ids": [
      3
    ]
  }
]
```

承認ステップ（配列）

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.index_response">ApiV1EmployeeYearendAdjustmentController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.index_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.index_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.index_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.index_response"></a>

```json
{
  "employees": [
    {
      "employee_id": 0,
      "num": "string",
      "employee_display_name": "string",
      "is_not_adjust": true,
      "status": "initialized"
    }
  ],
  "total_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employees|[[ApiV1EmployeeYearendAdjustmentParams](#schemaapiv1employeeyearendadjustmentparams)]|false|none|none|
|total_count|integer(int32)|false|none|合計件数|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentParams">ApiV1EmployeeYearendAdjustmentParams</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentparams"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentParams"></a>
<a id="tocSapiv1employeeyearendadjustmentparams"></a>
<a id="tocsapiv1employeeyearendadjustmentparams"></a>

```json
{
  "employee_id": 0,
  "num": "string",
  "employee_display_name": "string",
  "is_not_adjust": true,
  "status": "initialized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_id|integer(int32)|false|none|従業員ID|
|num|string|false|none|従業員番号|
|employee_display_name|string|false|none|従業員名|
|is_not_adjust|boolean|false|none|年末調整対象外<br>- true - 年末調整対象外<br>- false - 年末調整対象|
|status|string|false|none|年末調整ステータス<br>- initialized - 入力依頼前<br>- in_employee_progress - 従業員入力中<br>- submitted - 従業員入力済<br>- fixed - 確定|

#### Enumerated Values

|Property|Value|
|---|---|
|status|initialized|
|status|in_employee_progress|
|status|submitted|
|status|fixed|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_employee_body">ApiV1EmployeeYearendAdjustmentController.update_employee_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_employee_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_employee_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_employee_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_employee_body"></a>

```json
{
  "company_id": 1,
  "employee": {
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|employee|[ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentemployeeupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentemployeeupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentemployeeupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentemployeeupdaterequestserializer"></a>

```json
{
  "last_name": "山田",
  "first_name": "太郎",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "タロウ",
  "zipcode1": "141",
  "zipcode2": "0031",
  "prefecture_code": 12,
  "address": "品川区大崎1-2-2",
  "address_kana": "シナガワクオオサキ1-2-2",
  "payer_type": "kou",
  "widow_type": "na",
  "disability_type": "na",
  "married": true,
  "is_working_student": true,
  "is_foreigner": true,
  "other_company_revenue": 1000000,
  "all_other_income": 1000000,
  "householder": "myself",
  "householder_name": "山田 太郎"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_name|string|true|none|姓 null不可|
|first_name|string|true|none|名 null不可|
|last_name_kana|string|true|none|姓カナ|
|first_name_kana|string|true|none|名カナ|
|zipcode1|string|true|none|住民票住所の郵便番号1|
|zipcode2|string|true|none|住民票住所の郵便番号2|
|prefecture_code|integer|true|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string|true|none|住民票住所の市区町村以降の住所|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ|
|payer_type|string|false|none|所得税納税者区分 kou: 甲, otsu: 乙, hei: 丙|
|widow_type|string|false|none|寡夫／寡婦かどうか null不可 na: 空白, widow: 寡婦, one_parent: ひとり親|
|disability_type|string|false|none|障害者かどうか null不可 na: 空白, general: 障害者, heavy: 特別障害者|
|married|boolean|false|none|配偶者の有無 null不可|
|is_working_student|boolean|false|none|勤労学生かどうか null不可|
|is_foreigner|boolean|false|none|外国人かどうか null不可|
|other_company_revenue|integer \| null|false|none|その他の事業所の給与収入|
|all_other_income|integer \| null|false|none|給与以外の所得|
|householder|string|false|none|世帯主の続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他|
|householder_name|string|false|none|世帯主の名前|

#### Enumerated Values

|Property|Value|
|---|---|
|payer_type|kou|
|payer_type|otsu|
|payer_type|hei|
|widow_type|na|
|widow_type|widow|
|widow_type|one_parent|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|householder|myself|
|householder|husband|
|householder|wife|
|householder|father|
|householder|mother|
|householder|child|
|householder|senior_brother|
|householder|junior_brother|
|householder|senior_sister|
|householder|junior_sister|
|householder|grandchild|
|householder|grandfather|
|householder|grandmother|
|householder|father_in_law|
|householder|mother_in_law|
|householder|grandfather_in_law|
|householder|grandmother_in_law|
|householder|other|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_employee_response">ApiV1EmployeeYearendAdjustmentController.update_employee_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_employee_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_employee_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_employee_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_employee_response"></a>

```json
{
  "employees": {
    "employee_id": 0,
    "num": "A-001",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "employment_type": "string",
    "title": "string",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎",
    "is_calc_income_tax": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employees|[ApiV1EmployeeYearendAdjustmentEmployeeSerializer](#schemaapiv1employeeyearendadjustmentemployeeserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentEmployeeSerializer">ApiV1EmployeeYearendAdjustmentEmployeeSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentemployeeserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentEmployeeSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentemployeeserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentemployeeserializer"></a>

```json
{
  "employee_id": 0,
  "num": "A-001",
  "last_name": "山田",
  "first_name": "太郎",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "タロウ",
  "birth_date": "1970-01-01",
  "entry_date": "1970-01-01",
  "retire_date": "1970-01-01",
  "employment_type": "string",
  "title": "string",
  "zipcode1": "141",
  "zipcode2": "0031",
  "prefecture_code": 12,
  "address": "品川区大崎1-2-2",
  "address_kana": "シナガワクオオサキ1-2-2",
  "payer_type": "kou",
  "widow_type": "na",
  "disability_type": "na",
  "married": true,
  "is_working_student": true,
  "is_foreigner": true,
  "other_company_revenue": 1000000,
  "all_other_income": 1000000,
  "householder": "myself",
  "householder_name": "山田 太郎",
  "is_calc_income_tax": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_id|integer(int32)|false|none|従業員ID|
|num|string|false|none|従業員番号<br><br>従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）|
|last_name|string|false|none|姓 null不可|
|first_name|string|false|none|名 null不可|
|last_name_kana|string|false|none|姓カナ|
|first_name_kana|string|false|none|名カナ|
|birth_date|string(date)|false|none|生年月日|
|entry_date|string(date)|false|none|入社日|
|retire_date|string(date) \| null|false|none|退職日|
|employment_type|string \| null|false|none|雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他|
|title|string \| null|false|none|肩書|
|zipcode1|string \| null|false|none|住民票住所の郵便番号1|
|zipcode2|string \| null|false|none|住民票住所の郵便番号2|
|prefecture_code|integer \| null|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)|
|address|string \| null|false|none|住民票住所の市区町村以降の住所|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ|
|payer_type|string|false|none|所得税納税者区分 kou: 甲, otsu: 乙, hei: 丙|
|widow_type|string|false|none|寡夫／寡婦かどうか null不可 na: 空白, widow: 寡婦, one_parent: ひとり親|
|disability_type|string|false|none|障害者かどうか na: 空白, general: 障害者, heavy: 特別障害者|
|married|boolean|false|none|配偶者の有無|
|is_working_student|boolean|false|none|勤労学生かどうか|
|is_foreigner|boolean|false|none|外国人かどうか|
|other_company_revenue|integer \| null|false|none|その他の事業所の給与収入|
|all_other_income|integer \| null|false|none|給与以外の所得|
|householder|string|false|none|世帯主の続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他|
|householder_name|string|false|none|世帯主の名前|
|is_calc_income_tax|boolean|false|none|所得税の計算対象かどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|payer_type|kou|
|payer_type|otsu|
|payer_type|hei|
|widow_type|na|
|widow_type|widow|
|widow_type|one_parent|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|householder|myself|
|householder|husband|
|householder|wife|
|householder|father|
|householder|mother|
|householder|child|
|householder|senior_brother|
|householder|junior_brother|
|householder|senior_sister|
|householder|junior_sister|
|householder|grandchild|
|householder|grandfather|
|householder|grandmother|
|householder|father_in_law|
|householder|mother_in_law|
|householder|grandfather_in_law|
|householder|grandmother_in_law|
|householder|other|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.show_response">ApiV1EmployeeYearendAdjustmentController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.show_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.show_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.show_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.show_response"></a>

```json
{
  "employee": {
    "employee_id": 0,
    "num": "A-001",
    "last_name": "山田",
    "first_name": "太郎",
    "last_name_kana": "ヤマダ",
    "first_name_kana": "タロウ",
    "birth_date": "1970-01-01",
    "entry_date": "1970-01-01",
    "retire_date": "1970-01-01",
    "employment_type": "string",
    "title": "string",
    "zipcode1": "141",
    "zipcode2": "0031",
    "prefecture_code": 12,
    "address": "品川区大崎1-2-2",
    "address_kana": "シナガワクオオサキ1-2-2",
    "payer_type": "kou",
    "widow_type": "na",
    "disability_type": "na",
    "married": true,
    "is_working_student": true,
    "is_foreigner": true,
    "other_company_revenue": 1000000,
    "all_other_income": 1000000,
    "householder": "myself",
    "householder_name": "山田 太郎",
    "is_calc_income_tax": true
  },
  "dependents": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
    }
  ],
  "insurances": [
    {
      "id": 1,
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "certification_type": "xml",
      "is_group_insurance": true
    }
  ],
  "housing_loan_deduction": 500000,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
    }
  ],
  "payroll_and_bonus": {
    "fixed_payroll": 10000000,
    "fixed_payroll_deduction": 1000000,
    "fixed_payroll_income_tax": 1000000,
    "fixed_bonus": 10000000,
    "fixed_bonus_deduction": 1000000,
    "fixed_bonus_income_tax": 1000000,
    "unentered_payroll_amount": 500000,
    "unentered_payroll_deduction_amount": 500000,
    "unentered_payroll_income_tax_amount": 500000,
    "unentered_bonus_amount": 500000,
    "unentered_bonus_deduction_amount": 500000,
    "unentered_bonus_income_tax_amount": 500000
  },
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee|[ApiV1EmployeeYearendAdjustmentEmployeeSerializer](#schemaapiv1employeeyearendadjustmentemployeeserializer)|false|none|本人情報|
|dependents|[[ApiV1EmployeeYearendAdjustmentDependentSerializer](#schemaapiv1employeeyearendadjustmentdependentserializer)]|false|none|家族情報(年末調整対象外の場合は取得できません。)|
|insurances|[[ApiV1EmployeeYearendAdjustmentInsuranceSerializer](#schemaapiv1employeeyearendadjustmentinsuranceserializer)]|false|none|保険料情報(年末調整対象外の場合は取得できません。)|
|housing_loan_deduction|integer(int32)|false|none|住宅借入金等特別控除(年末調整対象外の場合は取得できません。)|
|housing_loans|[[ApiV1EmployeeYearendAdjustmentHousingLoanSerializer](#schemaapiv1employeeyearendadjustmenthousingloanserializer)]|false|none|住宅ローン(年末調整対象外の場合は取得できません。)|
|payroll_and_bonus|[ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer](#schemaapiv1employeeyearendadjustmentpayrollandbonusserializer)|false|none|給与・賞与|
|previous_job|[ApiV1EmployeeYearendAdjustmentPreviousJobSerializer](#schemaapiv1employeeyearendadjustmentpreviousjobserializer)|false|none|前職情報|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer">ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentpayrollandbonusserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentpayrollandbonusserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentpayrollandbonusserializer"></a>

```json
{
  "fixed_payroll": 10000000,
  "fixed_payroll_deduction": 1000000,
  "fixed_payroll_income_tax": 1000000,
  "fixed_bonus": 10000000,
  "fixed_bonus_deduction": 1000000,
  "fixed_bonus_income_tax": 1000000,
  "unentered_payroll_amount": 500000,
  "unentered_payroll_deduction_amount": 500000,
  "unentered_payroll_income_tax_amount": 500000,
  "unentered_bonus_amount": 500000,
  "unentered_bonus_deduction_amount": 500000,
  "unentered_bonus_income_tax_amount": 500000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed_payroll|integer(int32)|false|none|確定給与額|
|fixed_payroll_deduction|integer(int32)|false|none|確定給与控除額|
|fixed_payroll_income_tax|integer(int32)|false|none|確定給与所得税額|
|fixed_bonus|integer(int32)|false|none|確定賞与額|
|fixed_bonus_deduction|integer(int32)|false|none|確定賞与控除額|
|fixed_bonus_income_tax|integer(int32)|false|none|確定賞与所得税額|
|unentered_payroll_amount|integer(int32)|false|none|未入力給与額|
|unentered_payroll_deduction_amount|integer(int32)|false|none|未入力給与控除額|
|unentered_payroll_income_tax_amount|integer(int32)|false|none|未入力給与所得税額|
|unentered_bonus_amount|integer(int32)|false|none|未入力賞与額|
|unentered_bonus_deduction_amount|integer(int32)|false|none|未入力賞与控除額|
|unentered_bonus_income_tax_amount|integer(int32)|false|none|未入力賞与所得税額|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentpayrollandbonusupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentpayrollandbonusupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentpayrollandbonusupdaterequestserializer"></a>

```json
{
  "unentered_payroll_amount": 1000000,
  "unentered_payroll_deduction_amount": 1000000,
  "unentered_payroll_income_tax_amount": 1000000,
  "unentered_bonus_amount": 1000000,
  "unentered_bonus_deduction_amount": 1000000,
  "unentered_bonus_income_tax_amount": 1000000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unentered_payroll_amount|integer(int32)|false|none|未入力給与額|
|unentered_payroll_deduction_amount|integer(int32)|false|none|未入力給与控除額|
|unentered_payroll_income_tax_amount|integer(int32)|false|none|未入力給与所得税額|
|unentered_bonus_amount|integer(int32)|false|none|未入力賞与額|
|unentered_bonus_deduction_amount|integer(int32)|false|none|未入力賞与控除額|
|unentered_bonus_income_tax_amount|integer(int32)|false|none|未入力賞与所得税額|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_body">ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_body"></a>

```json
{
  "company_id": 1,
  "payroll_and_bonus": {
    "unentered_payroll_amount": 1000000,
    "unentered_payroll_deduction_amount": 1000000,
    "unentered_payroll_income_tax_amount": 1000000,
    "unentered_bonus_amount": 1000000,
    "unentered_bonus_deduction_amount": 1000000,
    "unentered_bonus_income_tax_amount": 1000000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|payroll_and_bonus|[ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentpayrollandbonusupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_response">ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_payroll_and_bonus_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_payroll_and_bonus_response"></a>

```json
{
  "payroll_and_bonus": {
    "fixed_payroll": 10000000,
    "fixed_payroll_deduction": 1000000,
    "fixed_payroll_income_tax": 1000000,
    "fixed_bonus": 10000000,
    "fixed_bonus_deduction": 1000000,
    "fixed_bonus_income_tax": 1000000,
    "unentered_payroll_amount": 500000,
    "unentered_payroll_deduction_amount": 500000,
    "unentered_payroll_income_tax_amount": 500000,
    "unentered_bonus_amount": 500000,
    "unentered_bonus_deduction_amount": 500000,
    "unentered_bonus_income_tax_amount": 500000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payroll_and_bonus|[ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer](#schemaapiv1employeeyearendadjustmentpayrollandbonusserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_dependents_body">ApiV1EmployeeYearendAdjustmentController.update_dependents_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_dependents_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_dependents_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_dependents_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_dependents_body"></a>

```json
{
  "company_id": 1,
  "dependents": [
    {
      "id": 1,
      "destroy": false,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|dependents|[[ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentdependentupdaterequestserializer)]|true|none|家族情報|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentdependentupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentdependentupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentdependentupdaterequestserializer"></a>

```json
{
  "id": 1,
  "destroy": false,
  "last_name": "山田",
  "first_name": "花子",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "ハナコ",
  "relationship": "spouse",
  "birth_date": "1999-01-01",
  "social_insurance_and_tax_dependent": "social_insurance_and_tax",
  "income": 0,
  "employment_revenue": 0,
  "all_other_income": -999999999,
  "disability_type": "na",
  "residence_type": "live_in",
  "zipcode1": "141",
  "zipcode2": "0031",
  "prefecture_code": 12,
  "address": "品川区大崎1-2-2",
  "address_kana": "シナガワクオオサキ1-2-2",
  "annual_remittance_amount": 0,
  "non_resident_dependents_reason": "none",
  "is_resident_tax_only_deduction": true,
  "retirement_income": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|家族情報ID（idがない場合は新規作成になる)|
|destroy|boolean|false|none|家族情報を削除するか true: 削除する, false: 削除しない|
|last_name|string|true|none|姓 null不可|
|first_name|string|true|none|名 null不可|
|last_name_kana|string|false|none|姓カナ|
|first_name_kana|string|false|none|名カナ|
|relationship|string|true|none|続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子|
|birth_date|string(date)|true|none|生年月日 null不可 1900年1月1日から現在年+5の12月31日まで登録可能|
|social_insurance_and_tax_dependent|string|true|none|扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない|
|income|integer(int32)|false|none|所得 配偶者は「扶養状況」がsocial_insurance_only又はnot_dependentの場合のみ更新可能。配偶者以外は更新可能。 配偶者で「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合、「給与収入」、「給与以外の所得」から自動で「所得」が計算されます。|
|employment_revenue|integer(int32)|false|none|給与収入 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。|
|all_other_income|integer(int32)|false|none|給与以外の所得 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。|
|disability_type|string|true|none|障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者|
|residence_type|string|true|none|同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)|
|zipcode1|string \| null|false|none|住民票住所の郵便番号1 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号1」を登録|
|zipcode2|string \| null|false|none|住民票住所の郵便番号2 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号2」を登録|
|prefecture_code|integer|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)  「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の都道府県コード」を登録|
|address|string|false|none|住民票住所の市区町村以降の住所 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所」を登録|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所カナ」を登録|
|annual_remittance_amount|integer(int32)|false|none|国外居住親族への年間の送金額 「同居・別居」が「同居」、「別居(国内)」の場合は登録不可|
|non_resident_dependents_reason|string(string)|false|none|非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払 続柄が「配偶者」または「同居・別居」が「同居」、「別居(国内)」の場合は登録不可|
|is_resident_tax_only_deduction|boolean|false|none|住民税のみの控除対象かどうか 2025年以前の年末調整でのみ更新可能。2026年以降の年末調整では入力された所得額から住民税の控除対象かどうかが自動判定されるため、指定しても無視されます。|
|retirement_income|integer(int32)|false|none|退職所得|

#### Enumerated Values

|Property|Value|
|---|---|
|relationship|spouse|
|relationship|father|
|relationship|mother|
|relationship|child|
|relationship|senior_brother|
|relationship|junior_brother|
|relationship|senior_sister|
|relationship|junior_sister|
|relationship|grandchild|
|relationship|grandfather|
|relationship|grandmother|
|relationship|father_in_law|
|relationship|mother_in_law|
|relationship|grandfather_in_law|
|relationship|grandmother_in_law|
|relationship|other|
|relationship|great_grandfather|
|relationship|great_grandmother|
|relationship|spouses_child|
|social_insurance_and_tax_dependent|social_insurance_and_tax|
|social_insurance_and_tax_dependent|tax_only|
|social_insurance_and_tax_dependent|social_insurance_only|
|social_insurance_and_tax_dependent|not_dependent|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|residence_type|live_in|
|residence_type|resident|
|residence_type|non_resident|
|non_resident_dependents_reason|none|
|non_resident_dependents_reason|over_16_to_under_30_or_over_70|
|non_resident_dependents_reason|study_abroad|
|non_resident_dependents_reason|handicapped|
|non_resident_dependents_reason|over_38_man|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_dependents_response">ApiV1EmployeeYearendAdjustmentController.update_dependents_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_dependents_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_dependents_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_dependents_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_dependents_response"></a>

```json
{
  "dependents": [
    {
      "id": 1,
      "last_name": "山田",
      "first_name": "花子",
      "last_name_kana": "ヤマダ",
      "first_name_kana": "ハナコ",
      "relationship": "spouse",
      "birth_date": "1999-01-01",
      "social_insurance_and_tax_dependent": "social_insurance_and_tax",
      "income": 0,
      "employment_revenue": 0,
      "all_other_income": -999999999,
      "disability_type": "na",
      "residence_type": "live_in",
      "zipcode1": "141",
      "zipcode2": "0031",
      "prefecture_code": 12,
      "address": "品川区大崎1-2-2",
      "address_kana": "シナガワクオオサキ1-2-2",
      "annual_remittance_amount": 0,
      "non_resident_dependents_reason": "none",
      "is_resident_tax_only_deduction": true,
      "retirement_income": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependents|[[ApiV1EmployeeYearendAdjustmentDependentSerializer](#schemaapiv1employeeyearendadjustmentdependentserializer)]|false|none|家族情報|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentDependentSerializer">ApiV1EmployeeYearendAdjustmentDependentSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentdependentserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentDependentSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentdependentserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentdependentserializer"></a>

```json
{
  "id": 1,
  "last_name": "山田",
  "first_name": "花子",
  "last_name_kana": "ヤマダ",
  "first_name_kana": "ハナコ",
  "relationship": "spouse",
  "birth_date": "1999-01-01",
  "social_insurance_and_tax_dependent": "social_insurance_and_tax",
  "income": 0,
  "employment_revenue": 0,
  "all_other_income": -999999999,
  "disability_type": "na",
  "residence_type": "live_in",
  "zipcode1": "141",
  "zipcode2": "0031",
  "prefecture_code": 12,
  "address": "品川区大崎1-2-2",
  "address_kana": "シナガワクオオサキ1-2-2",
  "annual_remittance_amount": 0,
  "non_resident_dependents_reason": "none",
  "is_resident_tax_only_deduction": true,
  "retirement_income": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|家族情報ID|
|last_name|string|false|none|姓 null不可|
|first_name|string|false|none|名 null不可|
|last_name_kana|string|false|none|姓カナ|
|first_name_kana|string|false|none|名カナ|
|relationship|string|false|none|続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子|
|birth_date|string(date)|false|none|生年月日 null不可 1900年1月1日から現在年+5年12月31日まで登録可能|
|social_insurance_and_tax_dependent|string|false|none|扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない|
|income|integer(int32)|false|none|所得 配偶者は「扶養状況」がsocial_insurance_only又はnot_dependentの場合のみ更新可能。配偶者以外は更新可能。<br>配偶者で「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合、「給与収入」、「給与以外の所得」から自動で「所得」が計算されます。<br><br><br><br>2026年以降の年末調整で、freee人事労務の年末調整画面から「公的年金収入」を入力している場合、公的年金等の所得は「給与以外の所得」に合算して返却されます。<br>この場合、「所得」は「給与所得と年金所得の双方を有する者に対する所得金額調整控除」を適用した後の金額となるため、「給与収入」と「給与以外の所得」から算出した金額とは一致しないことがあります。|
|employment_revenue|integer(int32)|false|none|給与収入 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。|
|all_other_income|integer(int32)|false|none|給与以外の所得 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。|
|disability_type|string|false|none|障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者|
|residence_type|string|false|none|同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)|
|zipcode1|string \| null|false|none|住民票住所の郵便番号1 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号1」を登録|
|zipcode2|string \| null|false|none|住民票住所の郵便番号2 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号2」を登録|
|prefecture_code|integer|false|none|住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)  「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の都道府県コード」を登録|
|address|string|false|none|住民票住所の市区町村以降の住所 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所」を登録|
|address_kana|string|false|none|住民票住所の市区町村以降の住所カナ 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所カナ」を登録|
|annual_remittance_amount|integer(int32)|false|none|国外居住親族への年間の送金額 「同居・別居」が「同居」、「別居(国内)」の場合は登録不可|
|non_resident_dependents_reason|string(string)|false|none|非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払 続柄が「配偶者」または「同居・別居」が「同居」、「別居(国内)」の場合は登録不可|
|is_resident_tax_only_deduction|boolean|false|none|住民税のみの控除対象かどうか 2025年以前の年末調整でのみ返却されます。2026年以降の年末調整では入力された所得額から住民税の控除対象かどうかが自動判定されるため、レスポンスに含まれません。|
|retirement_income|integer(int32)|false|none|退職所得|

#### Enumerated Values

|Property|Value|
|---|---|
|relationship|spouse|
|relationship|father|
|relationship|mother|
|relationship|child|
|relationship|senior_brother|
|relationship|junior_brother|
|relationship|senior_sister|
|relationship|junior_sister|
|relationship|grandchild|
|relationship|grandfather|
|relationship|grandmother|
|relationship|father_in_law|
|relationship|mother_in_law|
|relationship|grandfather_in_law|
|relationship|grandmother_in_law|
|relationship|other|
|relationship|great_grandfather|
|relationship|great_grandmother|
|relationship|spouses_child|
|social_insurance_and_tax_dependent|social_insurance_and_tax|
|social_insurance_and_tax_dependent|tax_only|
|social_insurance_and_tax_dependent|social_insurance_only|
|social_insurance_and_tax_dependent|not_dependent|
|disability_type|na|
|disability_type|general|
|disability_type|heavy|
|residence_type|live_in|
|residence_type|resident|
|residence_type|non_resident|
|non_resident_dependents_reason|none|
|non_resident_dependents_reason|over_16_to_under_30_or_over_70|
|non_resident_dependents_reason|study_abroad|
|non_resident_dependents_reason|handicapped|
|non_resident_dependents_reason|over_38_man|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_previous_job_body">ApiV1EmployeeYearendAdjustmentController.update_previous_job_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_previous_job_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_previous_job_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_previous_job_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_previous_job_body"></a>

```json
{
  "company_id": 1,
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|previous_job|[ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentpreviousjobupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentpreviousjobupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentpreviousjobupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentpreviousjobupdaterequestserializer"></a>

```json
{
  "income": 5000000,
  "deduction": 1200000,
  "withholding_tax_amount": 100000,
  "company_name": "株式会社 前職",
  "company_address": "品川区大崎1-2-2",
  "retire_date": "2022-03-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|income|integer|true|none|前職の支払金額|
|deduction|integer|true|none|前職の社会保険料等の金額|
|withholding_tax_amount|integer|true|none|前職の源泉徴収額|
|company_name|string|true|none|前職の社名|
|company_address|string|true|none|前職の事業所住所|
|retire_date|string(date)|true|none|前職の退職日 現在年-10年1月1日から現在年+5年12月31日まで登録可能|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_previous_job_response">ApiV1EmployeeYearendAdjustmentController.update_previous_job_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_previous_job_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_previous_job_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_previous_job_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_previous_job_response"></a>

```json
{
  "previous_job": {
    "income": 5000000,
    "deduction": 1200000,
    "withholding_tax_amount": 100000,
    "company_name": "株式会社 前職",
    "company_address": "品川区大崎1-2-2",
    "retire_date": "2022-03-31"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previous_job|[ApiV1EmployeeYearendAdjustmentPreviousJobSerializer](#schemaapiv1employeeyearendadjustmentpreviousjobserializer)|false|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentPreviousJobSerializer">ApiV1EmployeeYearendAdjustmentPreviousJobSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentpreviousjobserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentPreviousJobSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentpreviousjobserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentpreviousjobserializer"></a>

```json
{
  "income": 5000000,
  "deduction": 1200000,
  "withholding_tax_amount": 100000,
  "company_name": "株式会社 前職",
  "company_address": "品川区大崎1-2-2",
  "retire_date": "2022-03-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|income|integer|false|none|前職の支払金額|
|deduction|integer|false|none|前職の社会保険料等の金額|
|withholding_tax_amount|integer|false|none|前職の源泉徴収額|
|company_name|string|false|none|前職の社名|
|company_address|string|false|none|前職の事業所住所|
|retire_date|string(date)|false|none|前職の退職日 現在年-10年1月1日から現在年+5年12月31日まで登録可能|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_insurance_body">ApiV1EmployeeYearendAdjustmentController.update_insurance_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_insurance_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_insurance_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_insurance_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_insurance_body"></a>

```json
{
  "company_id": 1,
  "insurance": {
    "type": "life_care_pension_insurance",
    "category": "life",
    "new_or_old": "new",
    "company_name": "freee生命保険株式会社",
    "kind_of_purpose": "利差配当付終身",
    "period": "終身",
    "policyholder_last_name": "契約",
    "policyholder_first_name": "太郎",
    "recipient_last_name": "受取",
    "recipient_first_name": "太郎",
    "recipient_relationship": "child",
    "payment_start_date": "2000-04-01",
    "amount": 1000000,
    "is_group_insurance": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|insurance|[ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmentinsuranceupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentinsuranceupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentinsuranceupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentinsuranceupdaterequestserializer"></a>

```json
{
  "type": "life_care_pension_insurance",
  "category": "life",
  "new_or_old": "new",
  "company_name": "freee生命保険株式会社",
  "kind_of_purpose": "利差配当付終身",
  "period": "終身",
  "policyholder_last_name": "契約",
  "policyholder_first_name": "太郎",
  "recipient_last_name": "受取",
  "recipient_first_name": "太郎",
  "recipient_relationship": "child",
  "payment_start_date": "2000-04-01",
  "amount": 1000000,
  "is_group_insurance": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|保険の種類 life_care_pension_insurance: 生命保険・介護医療保険・個人年金保険, earthquake_non_life_insurance: 地震保険・旧長期損害保険, social_insurance: 社会保険, other_insurance: その他の保険（小規模企業共済等）|
|category|string|true|none|区分<br><br>保険会社等が発行する証明書類に基づいて区分を設定してください。<br><br>保険の種類によって設定可能な値が変わります。<br><br>・life_care_pension_insurance<br><br>　life: 生命保険<br><br>　care: 介護保険<br><br>　pension: 個人年金保険<br><br>・earthquake_non_life_insurance<br><br>　earthquake: 地震保険<br><br>　old_long_term_non_life: 旧長期損害保険<br><br>・social_insurance<br><br>　national_pension: 国民年金<br><br>　national_pension_fund_premium: 国民年金基金<br><br>　national_health: 国民健康保険<br><br>　health: 健康保険<br><br>　care_insurance_deduction_of_pension: 介護保険<br><br>　employee_pension: 厚生年金<br><br>　advanced_elderly_medical: 後期高齢者医療保険<br><br>　none: その他（印刷後に手書き）<br><br>・other_insurance<br><br>　sema: 独立行政法人中小企業基盤整備機構の共済契約の掛金<br><br>　idc: 個人型確定拠出年金（iDeCo）<br><br>　cdc: 企業型確定拠出年金<br><br>　dsma: 心身障害者扶養共済制度に関する契約の掛金<br>|
|new_or_old|string|true|none|新旧区分<br><br>区分が生命保険または個人年金保険の時のみ、新制度なら new を、旧制度なら old を指定します。<br><br>上記以外の保険では none を指定してください。|
|company_name|string \| null|false|none|保険会社等の名称<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|kind_of_purpose|string \| null|false|none|保険等の種類（目的）<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|period|string \| null|false|none|保険期間又は年金支払期間（終身、0年〜100年、0ヶ月〜11ヶ月のいずれか）<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|policyholder_last_name|string \| null|false|none|保険等の契約者 姓<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|policyholder_first_name|string \| null|false|none|保険等の契約者 名<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_last_name|string \| null|false|none|保険金等の受取人 姓<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_first_name|string \| null|false|none|保険金等の受取人 名<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_relationship|string \| null|false|none|保険金等の受取人 あなたとの続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, "": 空欄<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|payment_start_date|string \| null|false|none|年金の支払開始日 1900年1月1日から現在年+100の12月31日まで登録可能。<br><br>区分が個人年金保険の時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|amount|integer|true|none|保険料額|
|is_group_insurance|boolean \| null|false|none|団体保険に該当するかどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|type|life_care_pension_insurance|
|type|earthquake_non_life_insurance|
|type|social_insurance|
|type|other_insurance|
|category|life|
|category|care|
|category|pension|
|category|earthquake|
|category|old_long_term_non_life|
|category|national_pension|
|category|national_pension_fund_premium|
|category|national_health|
|category|care_insurance_deduction_of_pension|
|category|health|
|category|employee_pension|
|category|advanced_elderly_medical|
|category|sema|
|category|idc|
|category|cdc|
|category|dsma|
|category|none|
|new_or_old|new|
|new_or_old|old|
|new_or_old|none|
|period|終身|
|period|0年|
|period|1年|
|period|2年|
|period|3年|
|period|4年|
|period|5年|
|period|6年|
|period|7年|
|period|8年|
|period|9年|
|period|10年|
|period|11年|
|period|12年|
|period|13年|
|period|14年|
|period|15年|
|period|16年|
|period|17年|
|period|18年|
|period|19年|
|period|20年|
|period|21年|
|period|22年|
|period|23年|
|period|24年|
|period|25年|
|period|26年|
|period|27年|
|period|28年|
|period|29年|
|period|30年|
|period|31年|
|period|32年|
|period|33年|
|period|34年|
|period|35年|
|period|36年|
|period|37年|
|period|38年|
|period|39年|
|period|40年|
|period|41年|
|period|42年|
|period|43年|
|period|44年|
|period|45年|
|period|46年|
|period|47年|
|period|48年|
|period|49年|
|period|50年|
|period|51年|
|period|52年|
|period|53年|
|period|54年|
|period|55年|
|period|56年|
|period|57年|
|period|58年|
|period|59年|
|period|60年|
|period|61年|
|period|62年|
|period|63年|
|period|64年|
|period|65年|
|period|66年|
|period|67年|
|period|68年|
|period|69年|
|period|70年|
|period|71年|
|period|72年|
|period|73年|
|period|74年|
|period|75年|
|period|76年|
|period|77年|
|period|78年|
|period|79年|
|period|80年|
|period|81年|
|period|82年|
|period|83年|
|period|84年|
|period|85年|
|period|86年|
|period|87年|
|period|88年|
|period|89年|
|period|90年|
|period|91年|
|period|92年|
|period|93年|
|period|94年|
|period|95年|
|period|96年|
|period|97年|
|period|98年|
|period|99年|
|period|100年|
|period|0ヶ月|
|period|1ヶ月|
|period|2ヶ月|
|period|3ヶ月|
|period|4ヶ月|
|period|5ヶ月|
|period|6ヶ月|
|period|7ヶ月|
|period|8ヶ月|
|period|9ヶ月|
|period|10ヶ月|
|period|11ヶ月|
|period|""|
|recipient_relationship|myself|
|recipient_relationship|husband|
|recipient_relationship|wife|
|recipient_relationship|father|
|recipient_relationship|mother|
|recipient_relationship|child|
|recipient_relationship|senior_brother|
|recipient_relationship|junior_brother|
|recipient_relationship|senior_sister|
|recipient_relationship|junior_sister|
|recipient_relationship|grandchild|
|recipient_relationship|grandfather|
|recipient_relationship|grandmother|
|recipient_relationship|father_in_law|
|recipient_relationship|mother_in_law|
|recipient_relationship|grandfather_in_law|
|recipient_relationship|grandmother_in_law|
|recipient_relationship|other|
|recipient_relationship|""|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_insurance_response">ApiV1EmployeeYearendAdjustmentController.update_insurance_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_insurance_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_insurance_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_insurance_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_insurance_response"></a>

```json
{
  "insurances": [
    {
      "id": 1,
      "type": "life_care_pension_insurance",
      "category": "life",
      "new_or_old": "new",
      "company_name": "freee生命保険株式会社",
      "kind_of_purpose": "利差配当付終身",
      "period": "終身",
      "policyholder_last_name": "契約",
      "policyholder_first_name": "太郎",
      "recipient_last_name": "受取",
      "recipient_first_name": "太郎",
      "recipient_relationship": "child",
      "payment_start_date": "2000-04-01",
      "amount": 1000000,
      "certification_type": "xml",
      "is_group_insurance": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insurances|[[ApiV1EmployeeYearendAdjustmentInsuranceSerializer](#schemaapiv1employeeyearendadjustmentinsuranceserializer)]|false|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentInsuranceSerializer">ApiV1EmployeeYearendAdjustmentInsuranceSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentinsuranceserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentInsuranceSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmentinsuranceserializer"></a>
<a id="tocsapiv1employeeyearendadjustmentinsuranceserializer"></a>

```json
{
  "id": 1,
  "type": "life_care_pension_insurance",
  "category": "life",
  "new_or_old": "new",
  "company_name": "freee生命保険株式会社",
  "kind_of_purpose": "利差配当付終身",
  "period": "終身",
  "policyholder_last_name": "契約",
  "policyholder_first_name": "太郎",
  "recipient_last_name": "受取",
  "recipient_first_name": "太郎",
  "recipient_relationship": "child",
  "payment_start_date": "2000-04-01",
  "amount": 1000000,
  "certification_type": "xml",
  "is_group_insurance": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|保険料id|
|type|string|false|none|保険の種類 life_care_pension_insurance: 生命保険・介護医療保険・個人年金保険, earthquake_non_life_insurance: 地震保険・旧長期損害保険, social_insurance: 社会保険, other_insurance: その他の保険（小規模企業共済等）|
|category|string|false|none|区分<br><br>保険会社等が発行する証明書類に基づいて区分を設定してください。<br><br>保険の種類によって設定可能な値が変わります。<br><br>・life_care_pension_insurance<br><br>　life: 生命保険<br><br>　care: 介護保険<br><br>　pension: 個人年金保険<br><br>・earthquake_non_life_insurance<br><br>　earthquake: 地震保険<br><br>　old_long_term_non_life: 旧長期損害保険<br><br>・social_insurance<br><br>　national_pension: 国民年金<br><br>　national_pension_fund_premium: 国民年金基金<br><br>　national_health: 国民健康保険<br><br>　health: 健康保険<br><br>　care_insurance_deduction_of_pension: 介護保険<br><br>　employee_pension: 厚生年金<br><br>　advanced_elderly_medical: 後期高齢者医療保険<br><br>　none: その他（印刷後に手書き）<br><br>・other_insurance<br><br>　sema: 独立行政法人中小企業基盤整備機構の共済契約の掛金<br><br>　idc: 個人型確定拠出年金（iDeCo）<br><br>　cdc: 企業型確定拠出年金<br><br>　dsma: 心身障害者扶養共済制度に関する契約の掛金<br>|
|new_or_old|string|false|none|新旧区分<br><br>区分が生命保険または個人年金保険の時のみ、新制度なら new を、旧制度なら old を指定します。<br><br>上記以外の保険では none を指定してください。|
|company_name|string \| null|false|none|保険会社等の名称<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|kind_of_purpose|string \| null|false|none|保険等の種類（目的）<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|period|string \| null|false|none|保険期間又は年金支払期間（終身、0年〜100年、0ヶ月〜11ヶ月のいずれか）<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|policyholder_last_name|string \| null|false|none|保険等の契約者 姓<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|policyholder_first_name|string \| null|false|none|保険等の契約者 名<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_last_name|string \| null|false|none|保険金等の受取人 姓<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_first_name|string \| null|false|none|保険金等の受取人 名<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|recipient_relationship|string \| null|false|none|保険金等の受取人 あなたとの続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, "": 空欄<br><br>保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|payment_start_date|string \| null|false|none|年金の支払開始日 1900年1月1日から現在年+100の12月31日まで登録可能。<br><br>区分が個人年金保険の時のみ、入力した値が反映されます。<br><br>上記以外の保険では入力した値は反映されません。|
|amount|integer|false|none|保険料額|
|certification_type|string \| null|false|none|電子的控除証明書などの認証方法を利用した場合、その認証方法が反映されます。<br><br>xml: 電子的控除証明書を利用。証明書画像データの提出が免除されます。またrecipient_first_name、recipient_last_name、recipient_relationship以外のカラムが更新不可となります。|
|is_group_insurance|boolean \| null|false|none|団体保険に該当するかどうか|

#### Enumerated Values

|Property|Value|
|---|---|
|type|life_care_pension_insurance|
|type|earthquake_non_life_insurance|
|type|social_insurance|
|type|other_insurance|
|category|life|
|category|care|
|category|pension|
|category|earthquake|
|category|old_long_term_non_life|
|category|national_pension|
|category|national_pension_fund_premium|
|category|national_health|
|category|care_insurance_deduction_of_pension|
|category|health|
|category|employee_pension|
|category|advanced_elderly_medical|
|category|sema|
|category|idc|
|category|cdc|
|category|dsma|
|category|none|
|new_or_old|new|
|new_or_old|old|
|new_or_old|none|
|period|終身|
|period|0年|
|period|1年|
|period|2年|
|period|3年|
|period|4年|
|period|5年|
|period|6年|
|period|7年|
|period|8年|
|period|9年|
|period|10年|
|period|11年|
|period|12年|
|period|13年|
|period|14年|
|period|15年|
|period|16年|
|period|17年|
|period|18年|
|period|19年|
|period|20年|
|period|21年|
|period|22年|
|period|23年|
|period|24年|
|period|25年|
|period|26年|
|period|27年|
|period|28年|
|period|29年|
|period|30年|
|period|31年|
|period|32年|
|period|33年|
|period|34年|
|period|35年|
|period|36年|
|period|37年|
|period|38年|
|period|39年|
|period|40年|
|period|41年|
|period|42年|
|period|43年|
|period|44年|
|period|45年|
|period|46年|
|period|47年|
|period|48年|
|period|49年|
|period|50年|
|period|51年|
|period|52年|
|period|53年|
|period|54年|
|period|55年|
|period|56年|
|period|57年|
|period|58年|
|period|59年|
|period|60年|
|period|61年|
|period|62年|
|period|63年|
|period|64年|
|period|65年|
|period|66年|
|period|67年|
|period|68年|
|period|69年|
|period|70年|
|period|71年|
|period|72年|
|period|73年|
|period|74年|
|period|75年|
|period|76年|
|period|77年|
|period|78年|
|period|79年|
|period|80年|
|period|81年|
|period|82年|
|period|83年|
|period|84年|
|period|85年|
|period|86年|
|period|87年|
|period|88年|
|period|89年|
|period|90年|
|period|91年|
|period|92年|
|period|93年|
|period|94年|
|period|95年|
|period|96年|
|period|97年|
|period|98年|
|period|99年|
|period|100年|
|period|0ヶ月|
|period|1ヶ月|
|period|2ヶ月|
|period|3ヶ月|
|period|4ヶ月|
|period|5ヶ月|
|period|6ヶ月|
|period|7ヶ月|
|period|8ヶ月|
|period|9ヶ月|
|period|10ヶ月|
|period|11ヶ月|
|period|""|
|recipient_relationship|myself|
|recipient_relationship|husband|
|recipient_relationship|wife|
|recipient_relationship|father|
|recipient_relationship|mother|
|recipient_relationship|child|
|recipient_relationship|senior_brother|
|recipient_relationship|junior_brother|
|recipient_relationship|senior_sister|
|recipient_relationship|junior_sister|
|recipient_relationship|grandchild|
|recipient_relationship|grandfather|
|recipient_relationship|grandmother|
|recipient_relationship|father_in_law|
|recipient_relationship|mother_in_law|
|recipient_relationship|grandfather_in_law|
|recipient_relationship|grandmother_in_law|
|recipient_relationship|other|
|recipient_relationship|""|
|certification_type|xml|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_housing_loan_body">ApiV1EmployeeYearendAdjustmentController.update_housing_loan_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_body"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_housing_loan_body"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_housing_loan_body"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_housing_loan_body"></a>

```json
{
  "company_id": 1,
  "housing_loan": {
    "residence_start_date": "2022-03-31",
    "remaining_balance_at_yearend": 5000000,
    "category": "general",
    "specific_case_type": "not_qualified"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|更新対象事業所ID（必須）|
|housing_loan|[ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer](#schemaapiv1employeeyearendadjustmenthousingloanupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer">ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmenthousingloanupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmenthousingloanupdaterequestserializer"></a>
<a id="tocsapiv1employeeyearendadjustmenthousingloanupdaterequestserializer"></a>

```json
{
  "residence_start_date": "2022-03-31",
  "remaining_balance_at_yearend": 5000000,
  "category": "general",
  "specific_case_type": "not_qualified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|residence_start_date|string(date)|true|none|居住開始の年月日 2000年1月1日から現在年+5の12月31日まで登録可能|
|remaining_balance_at_yearend|integer|true|none|住宅借入金等年末残高|
|category|string|true|none|住宅借入金等特別控除区分 general: 住: 一般の住宅借入金等, qualified: 認: 認定住宅の新築等, extension: 増: 特定増改築等, earthquake: 震: 震災特例法による特別控除 extensionは2025年以前の年末調整でのみ登録可能。2026年以降の年末調整では特定増改築等住宅借入金等特別控除の廃止により指定するとエラーになります。|
|specific_case_type|string|true|none|特定取得/特別特定取得 not_qualified: 該当しない, specified: 特定取得, special_specified_or_special_exception: 特別特定取得または特別特例取得, exception_special_exception: 特例特別特例取得 special_residential_house 特家|

#### Enumerated Values

|Property|Value|
|---|---|
|category|general|
|category|qualified|
|category|extension|
|category|earthquake|
|specific_case_type|not_qualified|
|specific_case_type|specified|
|specific_case_type|special_specified_or_special_exception|
|specific_case_type|exception_special_exception|
|specific_case_type|special_residential_house|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentController.update_housing_loan_response">ApiV1EmployeeYearendAdjustmentController.update_housing_loan_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmentcontroller.update_housing_loan_response"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentController.update_housing_loan_response"></a>
<a id="tocSapiv1employeeyearendadjustmentcontroller.update_housing_loan_response"></a>
<a id="tocsapiv1employeeyearendadjustmentcontroller.update_housing_loan_response"></a>

```json
{
  "housing_loan_deduction": 500000,
  "housing_loans": [
    {
      "id": 1,
      "residence_start_date": "2022-03-31",
      "remaining_balance_at_yearend": 5000000,
      "category": "general",
      "specific_case_type": "not_qualified"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|housing_loan_deduction|integer(int32)|false|none|住宅借入金等特別控除|
|housing_loans|[[ApiV1EmployeeYearendAdjustmentHousingLoanSerializer](#schemaapiv1employeeyearendadjustmenthousingloanserializer)]|false|none|住宅ローン|

<h2 id="tocS_ApiV1EmployeeYearendAdjustmentHousingLoanSerializer">ApiV1EmployeeYearendAdjustmentHousingLoanSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeeyearendadjustmenthousingloanserializer"></a>
<a id="schema_ApiV1EmployeeYearendAdjustmentHousingLoanSerializer"></a>
<a id="tocSapiv1employeeyearendadjustmenthousingloanserializer"></a>
<a id="tocsapiv1employeeyearendadjustmenthousingloanserializer"></a>

```json
{
  "id": 1,
  "residence_start_date": "2022-03-31",
  "remaining_balance_at_yearend": 5000000,
  "category": "general",
  "specific_case_type": "not_qualified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|住宅ローンID|
|residence_start_date|string(date)|false|none|居住開始の年月日|
|remaining_balance_at_yearend|integer|false|none|住宅借入金等年末残高|
|category|string|false|none|住宅借入金等特別控除区分 general: 住: 一般の住宅借入金等, qualified: 認: 認定住宅の新築等, extension: 増: 特定増改築等, earthquake: 震: 震災特例法による特別控除 extensionは2025年以前の年末調整でのみ返却されます。2026年以降の年末調整では特定増改築等住宅借入金等特別控除の廃止により登録できません。|
|specific_case_type|string|false|none|特定取得/特別特定取得 not_qualified: 該当しない, specified: 特定取得, special_specified_or_special_exception: 特別特定取得または特別特例取得, exception_special_exception: 特例特別特例取得 special_residential_house 特家|

#### Enumerated Values

|Property|Value|
|---|---|
|category|general|
|category|qualified|
|category|extension|
|category|earthquake|
|specific_case_type|not_qualified|
|specific_case_type|specified|
|specific_case_type|special_specified_or_special_exception|
|specific_case_type|exception_special_exception|
|specific_case_type|special_residential_house|

<h2 id="tocS_ApiV1EmployeesAssignedAttendanceTagSerializer">ApiV1EmployeesAssignedAttendanceTagSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesassignedattendancetagserializer"></a>
<a id="schema_ApiV1EmployeesAssignedAttendanceTagSerializer"></a>
<a id="tocSapiv1employeesassignedattendancetagserializer"></a>
<a id="tocsapiv1employeesassignedattendancetagserializer"></a>

```json
{
  "attendance_tag": {
    "id": 1,
    "company_id": 1,
    "name": "勤怠タグの名称",
    "description": "勤怠タグの備考",
    "max_amount": 1,
    "published": true,
    "is_employee_usable": true
  },
  "amount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendance_tag|object|true|none|none|
|amount|integer(int32)|true|none|勤怠タグ回数|

<h2 id="tocS_ApiV1EmployeesAttendanceTagsController.index_response">ApiV1EmployeesAttendanceTagsController.index_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagscontroller.index_response"></a>
<a id="schema_ApiV1EmployeesAttendanceTagsController.index_response"></a>
<a id="tocSapiv1employeesattendancetagscontroller.index_response"></a>
<a id="tocsapiv1employeesattendancetagscontroller.index_response"></a>

```json
{
  "employee_attendance_tags": [
    {
      "id": 1,
      "company_id": 1,
      "name": "勤怠タグの名称",
      "description": "勤怠タグの備考",
      "max_amount": 1,
      "published": true,
      "is_employee_usable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_attendance_tags|[[ApiV1EmployeesAttendanceTagSerializer](#schemaapiv1employeesattendancetagserializer)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesAttendanceTagsController.show_response">ApiV1EmployeesAttendanceTagsController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagscontroller.show_response"></a>
<a id="schema_ApiV1EmployeesAttendanceTagsController.show_response"></a>
<a id="tocSapiv1employeesattendancetagscontroller.show_response"></a>
<a id="tocsapiv1employeesattendancetagscontroller.show_response"></a>

```json
{
  "employee_attendance_tags": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_attendance_tags|[[ApiV1EmployeesAssignedAttendanceTagSerializer](#schemaapiv1employeesassignedattendancetagserializer)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesAttendanceTagsController.update_body">ApiV1EmployeesAttendanceTagsController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagscontroller.update_body"></a>
<a id="schema_ApiV1EmployeesAttendanceTagsController.update_body"></a>
<a id="tocSapiv1employeesattendancetagscontroller.update_body"></a>
<a id="tocsapiv1employeesattendancetagscontroller.update_body"></a>

```json
{
  "company_id": 1,
  "employee_attendance_tags": [
    {
      "attendance_tag_id": 1,
      "amount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|employee_attendance_tags|[[ApiV1EmployeesAttendanceTagUpdateRequestSerializer](#schemaapiv1employeesattendancetagupdaterequestserializer)]|true|none|更新対象の勤怠タグのリスト|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSerializer">ApiV1EmployeesAttendanceTagSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagserializer"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSerializer"></a>
<a id="tocSapiv1employeesattendancetagserializer"></a>
<a id="tocsapiv1employeesattendancetagserializer"></a>

```json
{
  "id": 1,
  "company_id": 1,
  "name": "勤怠タグの名称",
  "description": "勤怠タグの備考",
  "max_amount": 1,
  "published": true,
  "is_employee_usable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|勤怠タグID|
|company_id|integer(int32)|true|none|事業所ID|
|name|string|true|none|勤怠タグ名称|
|description|string|true|none|勤怠タグ備考|
|max_amount|integer(int32)|true|none|勤怠タグ回数上限|
|published|boolean|true|none|勤怠タグ公開ステータス|
|is_employee_usable|boolean|true|none|対象従業員が利用可能かどうか|

<h2 id="tocS_ApiV1EmployeesAttendanceTagUpdateRequestSerializer">ApiV1EmployeesAttendanceTagUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesAttendanceTagUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesattendancetagupdaterequestserializer"></a>
<a id="tocsapiv1employeesattendancetagupdaterequestserializer"></a>

```json
{
  "attendance_tag_id": 1,
  "amount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendance_tag_id|integer(int32)|true|none|勤怠タグID|
|amount|integer(int32)|true|none|勤怠タグ回数|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSummariesController.show_response">ApiV1EmployeesAttendanceTagSummariesController.show_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagsummariescontroller.show_response"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSummariesController.show_response"></a>
<a id="tocSapiv1employeesattendancetagsummariescontroller.show_response"></a>
<a id="tocsapiv1employeesattendancetagsummariescontroller.show_response"></a>

```json
{
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_attendance_tag_summaries|[[ApiV1EmployeesAttendanceTagSummary](#schemaapiv1employeesattendancetagsummary)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSummariesController.update_body">ApiV1EmployeesAttendanceTagSummariesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagsummariescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSummariesController.update_body"></a>
<a id="tocSapiv1employeesattendancetagsummariescontroller.update_body"></a>
<a id="tocsapiv1employeesattendancetagsummariescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag_id": 1,
      "amount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|employee_attendance_tag_summaries|[[ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer](#schemaapiv1employeesattendancetagsummaryupdaterequestserializer)]|true|none|更新対象の勤怠タグサマリのリスト|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSummariesController.update_response">ApiV1EmployeesAttendanceTagSummariesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagsummariescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSummariesController.update_response"></a>
<a id="tocSapiv1employeesattendancetagsummariescontroller.update_response"></a>
<a id="tocsapiv1employeesattendancetagsummariescontroller.update_response"></a>

```json
{
  "employee_attendance_tag_summaries": [
    {
      "attendance_tag": {
        "id": 1,
        "company_id": 1,
        "name": "勤怠タグの名称",
        "description": "勤怠タグの備考",
        "max_amount": 1,
        "published": true,
        "is_employee_usable": true
      },
      "amount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_attendance_tag_summaries|[[ApiV1EmployeesAttendanceTagSummary](#schemaapiv1employeesattendancetagsummary)]|false|none|none|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSummary">ApiV1EmployeesAttendanceTagSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagsummary"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSummary"></a>
<a id="tocSapiv1employeesattendancetagsummary"></a>
<a id="tocsapiv1employeesattendancetagsummary"></a>

```json
{
  "attendance_tag": {
    "id": 1,
    "company_id": 1,
    "name": "勤怠タグの名称",
    "description": "勤怠タグの備考",
    "max_amount": 1,
    "published": true,
    "is_employee_usable": true
  },
  "amount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendance_tag|object|true|none|none|
|amount|integer(int32)|true|none|勤怠タグ回数|

<h2 id="tocS_ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer">ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesattendancetagsummaryupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesattendancetagsummaryupdaterequestserializer"></a>
<a id="tocsapiv1employeesattendancetagsummaryupdaterequestserializer"></a>

```json
{
  "attendance_tag_id": 1,
  "amount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendance_tag_id|integer(int32)|true|none|勤怠タグID|
|amount|integer(int32)|true|none|勤怠タグ回数|

<h2 id="tocS_ApiV1EmployeesGroupMembershipsIndexSerializer">ApiV1EmployeesGroupMembershipsIndexSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesgroupmembershipsindexserializer"></a>
<a id="schema_ApiV1EmployeesGroupMembershipsIndexSerializer"></a>
<a id="tocSapiv1employeesgroupmembershipsindexserializer"></a>
<a id="tocsapiv1employeesgroupmembershipsindexserializer"></a>

```json
{
  "group_memberships": [
    {
      "id": 1,
      "start_date": "2000-01-01",
      "end_date": "2020-01-01",
      "boss_id": 1,
      "main_duty": "main_duty",
      "group_id": 10,
      "group_code": "group2",
      "group_name": "営業部",
      "position_id": 1,
      "position_code": "position1",
      "position_name": "部長"
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_memberships|[object]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1AllowanceSerializer">ApiV1AllowanceSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1allowanceserializer"></a>
<a id="schema_ApiV1AllowanceSerializer"></a>
<a id="tocSapiv1allowanceserializer"></a>
<a id="tocsapiv1allowanceserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "name": "string",
  "description": "string",
  "frequency": "salary_this_month",
  "calc_type": "fixed",
  "is_active": true,
  "amount": 0,
  "amount_source": "direct",
  "is_daily_prorated": true,
  "formula_element": "num_absences",
  "formula_element_code": "num_absences",
  "round_type": "round",
  "rate_multiplier": 0,
  "company_profile_custom_field_id": 0,
  "attendance_tag_id": 0,
  "is_affect_income_tax": true,
  "is_affect_employment_insurance": true,
  "is_affect_labor_insurance": true,
  "is_affect_overtime_wage_base": true,
  "is_affect_attendance_deduction_base": true,
  "is_affect_fixed_wage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|その他手当ID|
|company_id|integer(int32)|true|none|事業所ID|
|name|string|true|none|その他手当名|
|description|string \| null|false|none|説明|
|frequency|string|true|none|支給タイミング|
|calc_type|string|true|none|計算タイプ|
|is_active|boolean|true|none|表示状態|
|amount|integer \| null|false|none|金額（変動手当の場合はnull）|
|amount_source|string|true|none|金額ソース|
|is_daily_prorated|boolean|true|none|日割り計算対象フラグ（calc_typeがfixed以外の場合はfalse）|
|formula_element|string \| null|false|none|**Deprecated.** [deprecated] 計算の基となる勤怠項目・カスタム項目の識別子（calc_typeがfixedの場合はnull） ※ 削除予定のため formula_element_code を参照してください|
|formula_element_code|string \| null|false|none|計算の基となる勤怠項目・カスタム項目の識別子（calc_typeがfixedの場合はnull）|
|round_type|string \| null|false|none|端数処理（calc_typeがfixedの場合はnull）|
|rate_multiplier|number \| null|false|none|乗数（amount_sourceがsystem_deduction_charge/system_overtime_chargeの場合のみ）|
|company_profile_custom_field_id|integer(int64) \| null|false|none|カスタム項目ID（calc_typeがcustomの場合のみ）|
|attendance_tag_id|integer(int64) \| null|false|none|勤怠タグID（calc_typeがattendance_day_tag/attendance_time_tagの場合のみ）|
|is_affect_income_tax|boolean|true|none|所得税の計算に含める|
|is_affect_employment_insurance|boolean|true|none|社会保険料の計算に含める|
|is_affect_labor_insurance|boolean|true|none|労働保険料の計算に含める|
|is_affect_overtime_wage_base|boolean|true|none|割増賃金の計算に含める（frequencyがbonusの場合は常にfalse）|
|is_affect_attendance_deduction_base|boolean|true|none|勤怠控除の基礎に含める（frequencyがbonusの場合は常にfalse）|
|is_affect_fixed_wage|boolean|true|none|固定的賃金の計算に含める（frequencyがbonusの場合は常にfalse）|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|frequency|bonus|
|calc_type|fixed|
|calc_type|variable|
|calc_type|custom|
|calc_type|attendance_day_tag|
|calc_type|attendance_time_tag|
|amount_source|direct|
|amount_source|system_overtime_charge|
|amount_source|system_deduction_charge|
|formula_element|num_absences|
|formula_element|num_paid_holidays|
|formula_element|num_total_workdays|
|formula_element|num_work_days_with_early_leaving|
|formula_element|num_work_days_with_lateness|
|formula_element|total_excess_statutory_work_mins|
|formula_element|total_holiday_work_mins|
|formula_element|total_lateness_and_early_leaving_mins|
|formula_element|total_latenight_work_mins|
|formula_element|total_normal_work_mins|
|formula_element|total_overtime_work_mins|
|formula_element|total_prescribed_holiday_work_mins|
|formula_element|total_work_mins|
|formula_element|company_profile_custom_field|
|formula_element|attendance_tag_total_count|
|formula_element|attendance_tag_assigned_days|
|formula_element|attendance_tag_total_excess_statutory_work_mins|
|formula_element|attendance_tag_total_prescribed_holiday_work_mins|
|formula_element|attendance_tag_total_holiday_work_mins|
|formula_element|attendance_tag_total_latenight_work_mins|
|formula_element|attendance_tag_total_normal_work_mins|
|formula_element|attendance_tag_total_overtime_work_mins|
|formula_element|attendance_tag_total_work_mins|
|formula_element_code|num_absences|
|formula_element_code|num_paid_holidays|
|formula_element_code|num_total_workdays|
|formula_element_code|num_work_days_with_early_leaving|
|formula_element_code|num_work_days_with_lateness|
|formula_element_code|total_overtime_within_statutory_work_mins|
|formula_element_code|total_holiday_work_mins|
|formula_element_code|total_lateness_and_early_leaving_mins|
|formula_element_code|total_latenight_work_mins|
|formula_element_code|total_normal_work_mins|
|formula_element_code|total_overtime_excess_statutory_work_mins|
|formula_element_code|total_prescribed_holiday_work_mins|
|formula_element_code|total_work_mins|
|formula_element_code|company_profile_custom_field|
|formula_element_code|attendance_tag_total_count|
|formula_element_code|attendance_tag_assigned_days|
|formula_element_code|attendance_tag_total_overtime_within_statutory_work_mins|
|formula_element_code|attendance_tag_total_prescribed_holiday_work_mins|
|formula_element_code|attendance_tag_total_holiday_work_mins|
|formula_element_code|attendance_tag_total_latenight_work_mins|
|formula_element_code|attendance_tag_total_normal_work_mins|
|formula_element_code|attendance_tag_total_overtime_excess_statutory_work_mins|
|formula_element_code|attendance_tag_total_work_mins|
|round_type|round|
|round_type|floor|
|round_type|ceil|

<h2 id="tocS_ApiV1AllowancesIndexResponse">ApiV1AllowancesIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1allowancesindexresponse"></a>
<a id="schema_ApiV1AllowancesIndexResponse"></a>
<a id="tocSapiv1allowancesindexresponse"></a>
<a id="tocsapiv1allowancesindexresponse"></a>

```json
{
  "allowances": [
    {
      "id": 0,
      "company_id": 0,
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "is_active": true,
      "amount": 0,
      "amount_source": "direct",
      "is_daily_prorated": true,
      "formula_element": "num_absences",
      "formula_element_code": "num_absences",
      "round_type": "round",
      "rate_multiplier": 0,
      "company_profile_custom_field_id": 0,
      "attendance_tag_id": 0,
      "is_affect_income_tax": true,
      "is_affect_employment_insurance": true,
      "is_affect_labor_insurance": true,
      "is_affect_overtime_wage_base": true,
      "is_affect_attendance_deduction_base": true,
      "is_affect_fixed_wage": true
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowances|[[ApiV1AllowanceSerializer](#schemaapiv1allowanceserializer)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1AllowanceResponse">ApiV1AllowanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1allowanceresponse"></a>
<a id="schema_ApiV1AllowanceResponse"></a>
<a id="tocSapiv1allowanceresponse"></a>
<a id="tocsapiv1allowanceresponse"></a>

```json
{
  "allowance": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "amount_source": "direct",
    "is_daily_prorated": true,
    "formula_element": "num_absences",
    "formula_element_code": "num_absences",
    "round_type": "round",
    "rate_multiplier": 0,
    "company_profile_custom_field_id": 0,
    "attendance_tag_id": 0,
    "is_affect_income_tax": true,
    "is_affect_employment_insurance": true,
    "is_affect_labor_insurance": true,
    "is_affect_overtime_wage_base": true,
    "is_affect_attendance_deduction_base": true,
    "is_affect_fixed_wage": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowance|[ApiV1AllowanceSerializer](#schemaapiv1allowanceserializer)|true|none|none|

<h2 id="tocS_ApiV1DeductionSerializer">ApiV1DeductionSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1deductionserializer"></a>
<a id="schema_ApiV1DeductionSerializer"></a>
<a id="tocSapiv1deductionserializer"></a>
<a id="tocsapiv1deductionserializer"></a>

```json
{
  "id": 0,
  "company_id": 0,
  "name": "string",
  "description": "string",
  "frequency": "salary_this_month",
  "calc_type": "fixed",
  "is_active": true,
  "amount": 0,
  "is_affect_income_tax": true,
  "attendance_tag_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|控除ID|
|company_id|integer(int32)|true|none|事業所ID|
|name|string|true|none|控除名|
|description|string \| null|false|none|説明|
|frequency|string|true|none|控除タイミング|
|calc_type|string|true|none|計算タイプ|
|is_active|boolean|true|none|表示状態|
|amount|integer \| null|true|none|金額|
|is_affect_income_tax|boolean|true|none|所得税の計算に含める|
|attendance_tag_id|integer(int64) \| null|false|none|勤怠タグID（calc_typeがattendance_day_tagの場合のみ）|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|frequency|bonus|
|calc_type|fixed|
|calc_type|attendance_day_tag|

<h2 id="tocS_ApiV1DeductionsIndexResponse">ApiV1DeductionsIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1deductionsindexresponse"></a>
<a id="schema_ApiV1DeductionsIndexResponse"></a>
<a id="tocSapiv1deductionsindexresponse"></a>
<a id="tocsapiv1deductionsindexresponse"></a>

```json
{
  "deductions": [
    {
      "id": 0,
      "company_id": 0,
      "name": "string",
      "description": "string",
      "frequency": "salary_this_month",
      "calc_type": "fixed",
      "is_active": true,
      "amount": 0,
      "is_affect_income_tax": true,
      "attendance_tag_id": 0
    }
  ],
  "total_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deductions|[[ApiV1DeductionSerializer](#schemaapiv1deductionserializer)]|true|none|none|
|total_count|integer(int32)|true|none|合計件数|

<h2 id="tocS_ApiV1DeductionResponse">ApiV1DeductionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1deductionresponse"></a>
<a id="schema_ApiV1DeductionResponse"></a>
<a id="tocSapiv1deductionresponse"></a>
<a id="tocsapiv1deductionresponse"></a>

```json
{
  "deduction": {
    "id": 0,
    "company_id": 0,
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "is_active": true,
    "amount": 0,
    "is_affect_income_tax": true,
    "attendance_tag_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deduction|[ApiV1DeductionSerializer](#schemaapiv1deductionserializer)|true|none|none|

<h2 id="tocS_ApiV1DeductionCreateRequestSerializer">ApiV1DeductionCreateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1deductioncreaterequestserializer"></a>
<a id="schema_ApiV1DeductionCreateRequestSerializer"></a>
<a id="tocSapiv1deductioncreaterequestserializer"></a>
<a id="tocsapiv1deductioncreaterequestserializer"></a>

```json
{
  "name": "string",
  "description": "string",
  "frequency": "salary_this_month",
  "calc_type": "fixed",
  "amount": -99999999,
  "is_affect_income_tax": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|控除名。最大240文字、給与控除グループまたは賞与控除グループ内で重複不可|
|description|string \| null|false|none|説明。最大255文字|
|frequency|string|true|none|控除タイミング|
|calc_type|string|true|none|計算タイプ|
|amount|integer|true|none|金額。-100,000,000 より大きく 100,000,000 未満|
|is_affect_income_tax|boolean|true|none|所得税の計算に含める|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|frequency|bonus|
|calc_type|fixed|

<h2 id="tocS_ApiV1DeductionsController.create_body">ApiV1DeductionsController.create_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1deductionscontroller.create_body"></a>
<a id="schema_ApiV1DeductionsController.create_body"></a>
<a id="tocSapiv1deductionscontroller.create_body"></a>
<a id="tocsapiv1deductionscontroller.create_body"></a>

```json
{
  "company_id": 1,
  "deduction": {
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "amount": -99999999,
    "is_affect_income_tax": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|deduction|[ApiV1DeductionCreateRequestSerializer](#schemaapiv1deductioncreaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1AllowanceCreateRequestSerializer">ApiV1AllowanceCreateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1allowancecreaterequestserializer"></a>
<a id="schema_ApiV1AllowanceCreateRequestSerializer"></a>
<a id="tocSapiv1allowancecreaterequestserializer"></a>
<a id="tocsapiv1allowancecreaterequestserializer"></a>

```json
{
  "name": "string",
  "description": "string",
  "frequency": "salary_this_month",
  "calc_type": "fixed",
  "amount_source": "direct",
  "amount": -99999999,
  "is_daily_prorated": true,
  "is_affect_income_tax": true,
  "is_affect_employment_insurance": true,
  "is_affect_labor_insurance": true,
  "is_affect_overtime_wage_base": true,
  "is_affect_attendance_deduction_base": true,
  "is_affect_fixed_wage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|その他手当名。最大240文字、同一 frequency 内（salary_this_month/salary_monthly または bonus）で重複不可|
|description|string \| null|false|none|説明。最大255文字|
|frequency|string|true|none|支給タイミング（bonus は指定不可）|
|calc_type|string|true|none|計算タイプ（fixed のみ対応）|
|amount_source|string|true|none|金額ソース（direct のみ対応）|
|amount|integer|true|none|金額。-100,000,000 より大きく 100,000,000 未満|
|is_daily_prorated|boolean|false|none|日割り計算対象フラグ（デフォルト false）|
|is_affect_income_tax|boolean|false|none|所得税の計算に含める（デフォルト true）|
|is_affect_employment_insurance|boolean|false|none|社会保険料の計算に含める（デフォルト true）|
|is_affect_labor_insurance|boolean|false|none|労働保険料の計算に含める（デフォルト true）|
|is_affect_overtime_wage_base|boolean|false|none|割増賃金の計算に含める（デフォルト true）|
|is_affect_attendance_deduction_base|boolean|false|none|勤怠控除の基礎に含める（デフォルト true）|
|is_affect_fixed_wage|boolean|false|none|固定的賃金の計算に含める（デフォルト true）|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|calc_type|fixed|
|amount_source|direct|

<h2 id="tocS_ApiV1AllowancesController.create_body">ApiV1AllowancesController.create_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1allowancescontroller.create_body"></a>
<a id="schema_ApiV1AllowancesController.create_body"></a>
<a id="tocSapiv1allowancescontroller.create_body"></a>
<a id="tocsapiv1allowancescontroller.create_body"></a>

```json
{
  "company_id": 1,
  "allowance": {
    "name": "string",
    "description": "string",
    "frequency": "salary_this_month",
    "calc_type": "fixed",
    "amount_source": "direct",
    "amount": -99999999,
    "is_daily_prorated": true,
    "is_affect_income_tax": true,
    "is_affect_employment_insurance": true,
    "is_affect_labor_insurance": true,
    "is_affect_overtime_wage_base": true,
    "is_affect_attendance_deduction_base": true,
    "is_affect_fixed_wage": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|allowance|[ApiV1AllowanceCreateRequestSerializer](#schemaapiv1allowancecreaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesAllowanceRuleSerializer">ApiV1EmployeesAllowanceRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesallowanceruleserializer"></a>
<a id="schema_ApiV1EmployeesAllowanceRuleSerializer"></a>
<a id="tocSapiv1employeesallowanceruleserializer"></a>
<a id="tocsapiv1employeesallowanceruleserializer"></a>

```json
{
  "id": 0,
  "employee_id": 0,
  "allowance_id": 0,
  "allowance_name": "string",
  "amount": 0,
  "frequency": "salary_this_month",
  "calc_type": "fixed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|従業員手当ID|
|employee_id|integer(int64)|true|none|従業員ID|
|allowance_id|integer(int64)|true|none|手当ID|
|allowance_name|string|true|none|手当名|
|amount|integer \| null|false|none|手当の金額（勤怠に応じた手当・カスタム項目手当の場合は単価）|
|frequency|string|true|none|支給タイミング|
|calc_type|string|true|none|計算タイプ|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|frequency|bonus|
|calc_type|fixed|
|calc_type|variable|
|calc_type|custom|
|calc_type|attendance_day_tag|
|calc_type|attendance_time_tag|

<h2 id="tocS_ApiV1EmployeesDeductionRuleSerializer">ApiV1EmployeesDeductionRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdeductionruleserializer"></a>
<a id="schema_ApiV1EmployeesDeductionRuleSerializer"></a>
<a id="tocSapiv1employeesdeductionruleserializer"></a>
<a id="tocsapiv1employeesdeductionruleserializer"></a>

```json
{
  "id": 0,
  "employee_id": 0,
  "deduction_id": 0,
  "deduction_name": "string",
  "amount": 0,
  "frequency": "salary_this_month",
  "calc_type": "fixed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|従業員控除ID|
|employee_id|integer(int64)|true|none|従業員ID|
|deduction_id|integer(int64)|true|none|控除ID|
|deduction_name|string|true|none|控除名|
|amount|integer|false|none|控除の金額|
|frequency|string|true|none|控除タイミング|
|calc_type|string|true|none|計算タイプ|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|salary_this_month|
|frequency|salary_monthly|
|frequency|bonus|
|calc_type|fixed|
|calc_type|attendance_day_tag|

<h2 id="tocS_ApiV1EmployeesDeductionRuleUpdateRequestSerializer">ApiV1EmployeesDeductionRuleUpdateRequestSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdeductionruleupdaterequestserializer"></a>
<a id="schema_ApiV1EmployeesDeductionRuleUpdateRequestSerializer"></a>
<a id="tocSapiv1employeesdeductionruleupdaterequestserializer"></a>
<a id="tocsapiv1employeesdeductionruleupdaterequestserializer"></a>

```json
{
  "deduction_id": 1,
  "amount": 30000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deduction_id|integer(int32)|true|none|控除ID|
|amount|integer(int32)|true|none|金額（数値のみ）|

<h2 id="tocS_ApiV1EmployeesDeductionRulesController.update_body">ApiV1EmployeesDeductionRulesController.update_body</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdeductionrulescontroller.update_body"></a>
<a id="schema_ApiV1EmployeesDeductionRulesController.update_body"></a>
<a id="tocSapiv1employeesdeductionrulescontroller.update_body"></a>
<a id="tocsapiv1employeesdeductionrulescontroller.update_body"></a>

```json
{
  "company_id": 1,
  "year": 2024,
  "month": 6,
  "employee_deduction_rule": {
    "deduction_id": 1,
    "amount": 30000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_id|integer(int32)|true|none|事業所ID|
|year|integer(int32)|true|none|対象年|
|month|integer(int32)|true|none|対象月|
|employee_deduction_rule|[ApiV1EmployeesDeductionRuleUpdateRequestSerializer](#schemaapiv1employeesdeductionruleupdaterequestserializer)|true|none|none|

<h2 id="tocS_ApiV1EmployeesDeductionRulesController.update_response">ApiV1EmployeesDeductionRulesController.update_response</h2>
<!-- backwards compatibility -->
<a id="schemaapiv1employeesdeductionrulescontroller.update_response"></a>
<a id="schema_ApiV1EmployeesDeductionRulesController.update_response"></a>
<a id="tocSapiv1employeesdeductionrulescontroller.update_response"></a>
<a id="tocsapiv1employeesdeductionrulescontroller.update_response"></a>

```json
{
  "employee_deduction_rule": {
    "id": 0,
    "employee_id": 0,
    "deduction_id": 0,
    "deduction_name": "string",
    "amount": 0,
    "frequency": "salary_this_month",
    "calc_type": "fixed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employee_deduction_rule|[ApiV1EmployeesDeductionRuleSerializer](#schemaapiv1employeesdeductionruleserializer)|false|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status_code": 400,
  "errors": [
    {
      "type": "string",
      "messages": [
        "リクエストの形式が不正です。"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[object]|false|none|none|

<h2 id="tocS_unauthorizedError">unauthorizedError</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizederror"></a>
<a id="schema_unauthorizedError"></a>
<a id="tocSunauthorizederror"></a>
<a id="tocsunauthorizederror"></a>

```json
{
  "message": "ログインをしてください。",
  "messages": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|messages|string|false|none|none|

<h2 id="tocS_forbiddenError">forbiddenError</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenerror"></a>
<a id="schema_forbiddenError"></a>
<a id="tocSforbiddenerror"></a>
<a id="tocsforbiddenerror"></a>

```json
{
  "status_code": 403,
  "errors": [
    {
      "type": "string",
      "messages": [
        "アクセス権限がありません。"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[object]|false|none|none|

<h2 id="tocS_accessDeniedError">accessDeniedError</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniederror"></a>
<a id="schema_accessDeniedError"></a>
<a id="tocSaccessdeniederror"></a>
<a id="tocsaccessdeniederror"></a>

```json
{
  "error": "access_denied",
  "message": "アクセスする権限がありません",
  "code": "expired_access_token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|message|string|false|none|none|
|code|string|false|none|none|

<h2 id="tocS_notfoundError">notfoundError</h2>
<!-- backwards compatibility -->
<a id="schemanotfounderror"></a>
<a id="schema_notfoundError"></a>
<a id="tocSnotfounderror"></a>
<a id="tocsnotfounderror"></a>

```json
{
  "status_code": 404,
  "errors": [
    {
      "type": "not_found",
      "messages": [
        "存在しないか既に削除されたレコードです。"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[object]|false|none|none|

<h2 id="tocS_internalServerError">internalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_internalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
{
  "status_code": 500,
  "errors": [
    {
      "type": "internal_server_error",
      "messages": [
        "エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status_code|integer|false|none|none|
|errors|[object]|false|none|none|
