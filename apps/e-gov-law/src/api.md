<h1 id="法令api-version-2">法令API Version 2 v2.1.139</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## はじめに
> * 本APIは<a href="https://laws.e-gov.go.jp/apitop/" target="_blank">法令API（Version1）</a>を改良開発したHTTP APIです。<br>
> * 仕様変更情報やサーバーメンテナンス情報につきましては、<a href="https://laws.e-gov.go.jp/" target="_blank">e-Gov法令検索</a>をご覧ください。<br>
> * 取得可能な法令データの範囲は、<a href="https://laws.e-gov.go.jp/help/#:~:text=%E8%AA%AD%E3%81%BF%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84-,e%2DGov%E6%B3%95%E4%BB%A4%E6%A4%9C%E7%B4%A2%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6,-%E5%B9%B3%E6%88%9029%E5%B9%B4" target="_blank">e-Gov法令検索について</a>をご覧ください。
> * 法令構造や法令XMLの理解を深めたい方は、<a href="https://laws.e-gov.go.jp/docs/"  target="_blank">法令ドキュメンテーションα版</a>をご覧ください。<br>
> * 本ページを視覚的にわかりやすく表現した<a href="https://laws.e-gov.go.jp/api/2/redoc/"  target="_blank">Redoc</a>も提供しておりますのでご覧ください。<br>


## 注意事項
> <font color="red">&nbsp;&nbsp;本APIが提供している機能のうち、以下は試行版となり仕様変更が発生する場合がありますのでご了承ください。</font><br>
> <font color="red">&nbsp;&nbsp;&nbsp;&nbsp;- 法令本文取得APIで返却されるJSON形式のデータ<br></font>
> <font color="red">&nbsp;&nbsp;&nbsp;&nbsp;- 法令本文ファイル取得APIで取得できるJSON形式のデータ<br></font>
> <font color="red">&nbsp;&nbsp;&nbsp;&nbsp;- キーワード検索APIで名称に`law_num`を含むパラメータ指定時のレスポンスデータ<br></font>


## XML一括ダウンロードについて
> &nbsp;&nbsp;本APIはe-Gov法令検索で公開されているデータを使用します。<br>
> &nbsp;&nbsp;法令データをダウンロードする場合は、<a href="https://laws.e-gov.go.jp/bulkdownload/" target="_blank">XML一括ダウンロード</a>にアクセスするか、以下のURLを利用してダウンロードしてください。<br>


>> * ### すべての法令データ
>>> <pre><code>
    https://laws.e-gov.go.jp/bulkdownload?file_section=1&only_xml_flag=true
  </code></pre>


>> * ### 法令分類データ
>>> <pre><code>
    https://laws.e-gov.go.jp/bulkdownload?file_section=2&category_cd={カテゴリーコード}&only_xml_flag=true
  </code></pre>


>>> ※ {カテゴリーコード}はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br>
>>> ※ `category_cd`の2桁目、3桁目の0は除いてください。（例えば、憲法は`001`ではなく`1`を使用します）


>> * ### 最新の更新法令データ
>>> <pre><code>
    https://laws.e-gov.go.jp/bulkdownload?file_section=3&update_date={取得する法令データの日付}&only_xml_flag=true
  </code></pre>


  >>> ※ {取得する法令データの日付}は「YYYYMMDD」（YYYY:年、MM:月、DD:日）形式で指定してください。<br>
  >>> 例： 2024年1月1日の場合は`20240101`<br>
  >>> （更新法令データの取得範囲は過去３ヶ月です。）


## 改正区分について
> &nbsp;&nbsp;法令APIでは、法令一覧取得API、法令履歴一覧取得API、法令本文取得API、キーワード検索APIのレスポンス`revision_info`内の要素で以下のように判断できます。<br>


>> <table bgcolor="white" border="1">
>>    <tr bgcolor="#DDFFFF">
>>        <th width="5%">改正区分</th>
>>        <th width="25%">改正区分の見分け方</th>
>>    </tr>
>>    <tr>
>>        <td>　新規制定 </td>
>>        <td>　amendment_typeが「1」 かつ missionが「New」のもの</td>
>>    </tr>
>>    <tr>
>>        <td>　一部改正 </td>
>>        <td>　missionが「Partial」のもの</td>
>>    </tr>
>>    <tr>
>>        <td>　被改正法 </td>
>>        <td>　amendment_typeが「3」 かつ missionが「New」のもの</td>
>>    </tr>
>>    <tr>
>>        <td>　廃止 </td>
>>        <td>　amendment_typeが「8」 又は repeal_statusが「Repeal」「Expire」「LossOfEffectiveness」のもの</td>
>>    </tr>
>>  </table>

Base URLs:

* <a href="https://laws.e-gov.go.jp/api/2">https://laws.e-gov.go.jp/api/2</a>

<h1 id="法令api-version-2-laws-api">laws-api</h1>

法令データを取得・検索するAPIです。

## 法令一覧取得API

<a id="opIdget-laws"></a>

> Code samples

```bash
curl https://laws.e-gov.go.jp/api/2/laws \
  -H 'Accept: application/json'
```

`GET /laws`

## 概要
> &nbsp;&nbsp;指定条件に該当する法令データが返却されます。<br>
> &nbsp;&nbsp;例えば、法令名（`law_title`）を指定した場合、指定した法令名を含む法令データが返却されます。<br>
> &nbsp;&nbsp;法令種別（`law_type`）を指定した場合、指定した法令種別の法令データが返却されます。<br>
> &nbsp;&nbsp;指定必須のパラメータはありません。また、全パラメータを組み合わせる必要もありません。<br>
> &nbsp;&nbsp;必要なパラメータを組み合わせて法令データを取得することができます。<br>


## 補足事項
> &nbsp;&nbsp;本エンドポイントは、指定条件に該当するデータを`laws`に格納します。<br>
> &nbsp;&nbsp;`laws`配下に格納されるデータの解説は以下のとおりです。<br>

> * `law_info`
>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。
<br>

> * `revision_info`
>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>
>> &nbsp;&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。<br>

> * `current_revision_info`
>>  &nbsp;&nbsp;&nbsp;法令の時点（`asof`）等の指定にかかわらず、現時点で最新の改正履歴を格納します。<br>


<h3 id="法令一覧取得api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|law_id|query|string|false|法令ID（部分一致）<br><br>> 例： `322CO0000000016`<br><br>|
|law_num|query|string|false|法令番号（部分一致）<br><br>> 例： `昭和二十二年政令第十六号`<br><br>|
|law_num_era|query|[law_num_era](#schemalaw_num_era)|false|法令番号の元号<br><br>> 例： `Showa`<br><br>|
|law_num_num|query|string|false|法令番号の号数<br><br>> 例： `88`<br><br>|
|law_num_type|query|[law_num_type](#schemalaw_num_type)|false|法令番号の法令種別<br><br>種類の定義はSchemasの<a href="#model-law_num_type">`law_num_type`</a>を参照してください。<br><br>> 例： `Act`<br><br>|
|law_num_year|query|integer|false|法令番号の年<br><br>> 例： `60`<br><br>|
|law_title|query|string|false|法令名又は法令略称（部分一致）<br><br>> 例： `国家行政組織法`<br><br>|
|law_title_kana|query|string|false|法令名読み（部分一致）<br><br>> 例： `こっかぎょうせいそしきほう`<br><br>|
|law_type|query|[[law_type](#schemalaw_type)]|false|法令種別（複数指定可）<br><br>> 例： `Act,Rule`<br><br>|
|amendment_law_id|query|string|false|改正法令の法令ID（部分一致）<br><br>> 注意：本パラメータを指定した場合、パラメータ：法令の時点（`asof`）を無視します。<br><br>> 例： `429AC0000000054`<br><br>|
|asof|query|string(date)|false|法令の時点。指定時点以前で最新の改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。<br><br>> 例： `2023-07-01`<br><br>|
|category_cd|query|[[category_cd](#schemacategory_cd)]|false|事項別分類コード（複数指定可）<br><br>コードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br><br>> 例： `001,002`<br><br>|
|mission|query|[[mission](#schemamission)]|false|新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）を指定（複数指定可）<br><br>> 例： `New,Partial`<br><br>|
|omit_current_revision_info|query|boolean|false|`true`の場合、法令の時点（`asof`）に依存しない現在以前の最新の版の情報（`current_revision_info`）をレスポンスに含めない<br><br>> 例： `true`<br><br>> 既定値： `false`<br><br>|
|promulgation_date_from|query|string(date)|false|公布日（指定値を含む、それ以後）<br><br>> 例： `2023-07-01`<br><br>|
|promulgation_date_to|query|string(date)|false|公布日（指定値を含む、それ以前）<br><br>> 例： `2023-07-01`<br><br>|
|repeal_status|query|[[repeal_status](#schemarepeal_status)]|false|廃止等の状態（複数指定可）<br><br>状態の定義はSchemasの<a href="#model-repeal_status">`repeal_status`</a>を参照してください。<br><br>> 例： `Repeal,Expire`<br><br><br><font color=red>`Expire`、`LossOfEffectiveness`指定時のレスポンスデータについて、<br><br>廃止日（`repeal_date`）は実際に法令が廃止された日ではなく、データ廃止処理日を指しますので御留意ください。</font><br><br>|
|limit|query|integer(int32)|false|レスポンスの `laws` の取得件数の上限。<br><br>> 例：`50`<br><br>> 既定値：`100`<br><br>|
|offset|query|integer(int32)|false|レスポンスデータの取得開始位置。例えば`10`を指定した場合、11件目からレスポンスデータが取得される。<br><br>1〜10件目は取得されない。<br><br>> 例： `10`<br><br>> 既定値： `0`<br><br>|
|order|query|string|false|レスポンスの並び順を指定（複数指定可）。<br><br><a href="#model-law_info">`law_info`</a> 及び <a href="#model-revision_info">`revision_info`</a> 配下のフィールドを指定可能。<br><br>先頭に + を付けると昇順、- を付けると降順、符号がない場合は昇順。<br><br><br><br>例： `+law_info.law_id,-revision_info.amendment_promulgate_date`<br><br>既定値： `law_info.law_id`<br><br>|
|response_format|query|object \| null|false|レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br><br>> 例： `json`<br><br>> 既定値： 指定なし<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|law_num_era|Meiji|
|law_num_era|Taisho|
|law_num_era|Showa|
|law_num_era|Heisei|
|law_num_era|Reiwa|
|law_num_type|Constitution|
|law_num_type|Act|
|law_num_type|CabinetOrder|
|law_num_type|ImperialOrder|
|law_num_type|MinisterialOrdinance|
|law_num_type|Rule|
|law_num_type|Misc|
|law_type|Constitution|
|law_type|Act|
|law_type|CabinetOrder|
|law_type|ImperialOrder|
|law_type|MinisterialOrdinance|
|law_type|Rule|
|law_type|Misc|
|category_cd|001|
|category_cd|002|
|category_cd|003|
|category_cd|004|
|category_cd|005|
|category_cd|006|
|category_cd|007|
|category_cd|008|
|category_cd|009|
|category_cd|010|
|category_cd|011|
|category_cd|012|
|category_cd|013|
|category_cd|014|
|category_cd|015|
|category_cd|016|
|category_cd|017|
|category_cd|018|
|category_cd|019|
|category_cd|020|
|category_cd|021|
|category_cd|022|
|category_cd|023|
|category_cd|024|
|category_cd|025|
|category_cd|026|
|category_cd|027|
|category_cd|028|
|category_cd|029|
|category_cd|030|
|category_cd|031|
|category_cd|032|
|category_cd|033|
|category_cd|034|
|category_cd|035|
|category_cd|036|
|category_cd|037|
|category_cd|038|
|category_cd|039|
|category_cd|040|
|category_cd|041|
|category_cd|042|
|category_cd|043|
|category_cd|044|
|category_cd|045|
|category_cd|046|
|category_cd|047|
|category_cd|048|
|category_cd|049|
|category_cd|050|
|mission|New|
|mission|Partial|
|repeal_status|None|
|repeal_status|Repeal|
|repeal_status|Expire|
|repeal_status|Suspend|
|repeal_status|LossOfEffectiveness|

> Example responses

> 200 Response

```json
{
  "total_count": 1,
  "count": 1,
  "laws": [
    {
      "law_info": {
        "law_type": "CabinetOrder",
        "law_id": "322CO0000000016",
        "law_num": "昭和二十二年政令第十六号",
        "law_num_era": "Showa",
        "law_num_year": 22,
        "law_num_type": "CabinetOrder",
        "law_num_num": "016",
        "promulgation_date": "1947-05-03"
      },
      "revision_info": {
        "law_revision_id": "322CO0000000016_20240401_506CO0000000161",
        "law_type": "CabinetOrder",
        "law_title": "地方自治法施行令",
        "law_title_kana": "ちほうじちほうしこうれい",
        "abbrev": "地自法施行令",
        "category": "地方自治",
        "updated": "2024-04-19T13:42:44+09:00",
        "amendment_promulgate_date": "2024-03-30",
        "amendment_enforcement_date": "2024-04-01",
        "amendment_enforcement_comment": null,
        "amendment_scheduled_enforcement_date": null,
        "amendment_law_id": "506CO0000000161",
        "amendment_law_title": "児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令",
        "amendment_law_title_kana": null,
        "amendment_law_num": "令和六年政令第百六十一号",
        "amendment_type": "3",
        "repeal_status": "None",
        "repeal_date": null,
        "remain_in_force": false,
        "mission": "New",
        "current_revision_status": "CurrentEnforced"
      },
      "current_revision_info": {
        "law_revision_id": "322CO0000000016_20240401_506CO0000000161",
        "law_type": "CabinetOrder",
        "law_title": "地方自治法施行令",
        "law_title_kana": "ちほうじちほうしこうれい",
        "abbrev": "地自法施行令",
        "category": "地方自治",
        "updated": "2024-04-19T13:42:44+09:00",
        "amendment_promulgate_date": "2024-03-30",
        "amendment_enforcement_date": "2024-04-01",
        "amendment_enforcement_comment": null,
        "amendment_scheduled_enforcement_date": null,
        "amendment_law_id": "506CO0000000161",
        "amendment_law_title": "児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令",
        "amendment_law_title_kana": null,
        "amendment_law_num": "令和六年政令第百六十一号",
        "amendment_type": "3",
        "repeal_status": false,
        "repeal_date": null,
        "remain_in_force": false,
        "mission": "New",
        "current_revision_status": "CurrentEnforced"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "400004",
  "message": "日付（asof等）が誤っています。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="法令一覧取得api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|[laws_response](#schemalaws_response)|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

## 法令履歴一覧取得API

<a id="opIdget-revisions"></a>

> Code samples

```bash
curl https://laws.e-gov.go.jp/api/2/law_revisions/string \
  -H 'Accept: application/json'
```

`GET /law_revisions/{law_id_or_num}`

## 概要
> &nbsp;&nbsp;法令ID（`law_id`）又は法令番号（`law_num`）を指定必須として、指定した法令の改正履歴が返却されます。<br>
> &nbsp;&nbsp;改正履歴は`revisions`配下に格納されており、上から法令履歴ID（`law_revision_id`）が新しい順で改正履歴が返却されます。<br>
> &nbsp;&nbsp;指定任意のパラメータと組み合わせることで、返却データを絞り込むことができます。<br>

## 補足事項
> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。<br>

> * `law_info`
>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しない法令データが格納されます。

> * `revisions`
>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存する法令データが格納されます。<br>


<h3 id="法令履歴一覧取得api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|law_id_or_num|path|string|true|法令ID又は法令番号（完全一致）。<br><br>> 例： `503AC0000000036`、`令和三年法律第三十六号`<br><br>|
|law_title|query|string|false|法令名又は法令略称（部分一致又は正規表現）<br><br>* 本パラメータを`/`で囲まずに指定した場合は、部分一致で検索します。<br><br>> 例： `デジタル庁設置法`<br><br>* 本パラメータを`/`で囲んで指定した場合は、正規表現を利用して完全一致で検索します。<br><br>> 例： `/デジタル庁.*法/`、`/^デジタル庁設置法$/`<br><br>|
|law_title_kana|query|string|false|法令名読み（部分一致）<br><br>> 例： `でじたるちょうせっちほう`<br><br>|
|amendment_date_from|query|string(date)|false|改正法令施行期日（指定値を含む、それ以後）<br><br>> 例： `2024-06-07`<br><br>|
|amendment_date_to|query|string(date)|false|改正法令施行期日（指定値を含む、それ以前）<br><br>> 例： `2024-06-07`<br><br>|
|amendment_law_id|query|string|false|改正法令の法令ID（部分一致）<br><br>> 例： `506AC0000000046`<br><br>|
|amendment_law_num|query|string|false|改正法令の法令番号（部分一致）<br><br>> 例： `令和六年法律第四十六号`<br><br>|
|amendment_law_title|query|string|false|改正法令の法令名（部分一致又は正規表現）<br><br>* 本パラメータを`/`で囲まずに指定した場合は、部分一致で検索します。<br><br>> 例： `デジタル社会形成基本法等の一部を改正する法律`<br><br>* 本パラメータを`/`で囲んで指定した場合は、正規表現を利用して完全一致で検索します。<br><br>> 例： `/^情報通信技術.*法律$/`<br><br>|
|amendment_law_title_kana|query|string|false|改正法令の法令名読み（部分一致）<br><br>> 例： `でじたるしゃかいけいせいきほんほうとうのいちぶをかいせいするほうりつ`<br><br>|
|amendment_promulgate_date_from|query|string(date)|false|改正法令公布日（指定値を含む、それ以後）<br><br>> 例： `2024-06-07`<br><br>|
|amendment_promulgate_date_to|query|string(date)|false|改正法令公布日（指定値を含む、それ以前）<br><br>> 例： `2024-06-07`<br><br>|
|amendment_type|query|[[amendment_type](#schemaamendment_type)]|false|改正種別（複数指定可）<br><br>改正種別の定義はSchemasの<a href="#model-amendment_type">`amendment_type`</a>を参照してください。<br><br>> 例： `1,3`<br><br>|
|category_cd|query|[[category_cd](#schemacategory_cd)]|false|事項別分類コード（複数指定可）<br><br>コードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br><br>> 例： `011,021`<br><br>|
|current_revision_status|query|[[current_revision_status](#schemacurrent_revision_status)]|false|履歴の状態（法令の時点（`asof`）の値に関わらず常に現時点の状態と比較する）（複数指定可）<br><br>状態の定義はSchemasの<a href="#model-current_revision_status">`current_revision_status`</a>を参照してください。<br><br>> 例： `CurrentEnforced,PreviousEnforced`<br><br>|
|mission|query|[[mission](#schemamission)]|false|新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）を指定（複数指定可）<br><br>> 例： `New,Partial`<br><br>|
|remain_in_force|query|boolean|false|廃止後の効力（`true`:廃止後でも効力を有するもの / `false`:廃止後に効力を有しないもの）<br><br>> 例： `false`<br><br>|
|repeal_date_from|query|string(date)|false|廃止日（指定値を含む、それ以後）<br><br>> 例： `2024-04-01`<br><br>|
|repeal_date_to|query|string(date)|false|廃止日（指定値を含む、それ以前）<br><br>> 例： `2024-04-01`<br><br>|
|repeal_status|query|[[repeal_status](#schemarepeal_status)]|false|廃止等の状態（複数指定可）<br><br>状態の定義はSchemasの<a href="#model-repeal_status">`repeal_status`</a>を参照してください。<br><br><br>> 例： `None,Repeal`<br><br><br><font color=red>`Expire`、`LossOfEffectiveness`指定時のレスポンスデータについて、<br><br>廃止日（`repeal_date`）は実際に法令が廃止された日ではなく、データ廃止処理日を指しますので御留意ください。</font><br><br>|
|updated_from|query|string(date)|false|データの更新日（指定値を含む、それ以後）<br><br>> 例： `2024-06-07`<br><br>|
|updated_to|query|string(date)|false|データの更新日（指定値を含む、それ以前）<br><br>> 例： `2024-06-07`<br><br>|
|response_format|query|object \| null|false|レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br><br>> 例： `json`<br><br>> 既定値： 指定なし<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|amendment_type|1|
|amendment_type|3|
|amendment_type|8|
|category_cd|001|
|category_cd|002|
|category_cd|003|
|category_cd|004|
|category_cd|005|
|category_cd|006|
|category_cd|007|
|category_cd|008|
|category_cd|009|
|category_cd|010|
|category_cd|011|
|category_cd|012|
|category_cd|013|
|category_cd|014|
|category_cd|015|
|category_cd|016|
|category_cd|017|
|category_cd|018|
|category_cd|019|
|category_cd|020|
|category_cd|021|
|category_cd|022|
|category_cd|023|
|category_cd|024|
|category_cd|025|
|category_cd|026|
|category_cd|027|
|category_cd|028|
|category_cd|029|
|category_cd|030|
|category_cd|031|
|category_cd|032|
|category_cd|033|
|category_cd|034|
|category_cd|035|
|category_cd|036|
|category_cd|037|
|category_cd|038|
|category_cd|039|
|category_cd|040|
|category_cd|041|
|category_cd|042|
|category_cd|043|
|category_cd|044|
|category_cd|045|
|category_cd|046|
|category_cd|047|
|category_cd|048|
|category_cd|049|
|category_cd|050|
|current_revision_status|CurrentEnforced|
|current_revision_status|UnEnforced|
|current_revision_status|PreviousEnforced|
|current_revision_status|Repeal|
|mission|New|
|mission|Partial|
|repeal_status|None|
|repeal_status|Repeal|
|repeal_status|Expire|
|repeal_status|Suspend|
|repeal_status|LossOfEffectiveness|

> Example responses

> 200 Response

```json
{
  "law_info": {
    "law_type": "Act",
    "law_id": "503AC0000000036",
    "law_num": "令和三年法律第三十六号",
    "law_num_era": "Reiwa",
    "law_num_year": 3,
    "law_num_type": "Act",
    "law_num_num": "036",
    "promulgation_date": "2021-05-19"
  },
  "revisions": [
    {
      "law_revision_id": "503AC0000000036_20240607_506AC0000000046",
      "law_type": "Act",
      "law_title": "デジタル庁設置法",
      "law_title_kana": "でじたるちょうせっちほう",
      "abbrev": null,
      "category": "行政組織",
      "updated": "2024-06-07T09:15:59+09:00",
      "amendment_promulgate_date": "2024-06-07",
      "amendment_enforcement_date": "2024-06-07",
      "amendment_enforcement_comment": null,
      "amendment_scheduled_enforcement_date": null,
      "amendment_law_id": "506AC0000000046",
      "amendment_law_title": "情報通信技術の活用による行政手続等に係る関係者の利便性の向上並びに行政運営の簡素化及び効率化を図るためのデジタル社会形成基本法等の一部を改正する法律",
      "amendment_law_title_kana": null,
      "amendment_law_num": "令和六年法律第四十六号",
      "amendment_type": "3",
      "repeal_status": "None",
      "repeal_date": null,
      "remain_in_force": false,
      "mission": "New",
      "current_revision_status": "PreviousEnforced"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "400004",
  "message": "日付（asof等）が誤っています。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="法令履歴一覧取得api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|[law_revisions_response](#schemalaw_revisions_response)|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

## 法令本文取得API

<a id="opIdget-law_data"></a>

> Code samples

```bash
curl https://laws.e-gov.go.jp/api/2/law_data/string \
  -H 'Accept: application/json'
```

`GET /law_data/{law_id_or_num_or_revision_id}`

## 概要
> &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）、法令履歴ID（`law_revision_id`）のいずれかを指定必須として、指定した法令の本文を取得します。<br>
> * &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）を指定した場合は、現時点で最新のリビジョンの本文を取得します。<br>
> * &nbsp;&nbsp;法令履歴ID（`law_revision_id`）を指定した場合は、該当するリビジョンの本文を取得します。<br>
> * &nbsp;&nbsp;上記の指定必須のパラメータがわからない場合は、法令一覧取得APIで法令名（`law_title`）等を指定してパラメータを調べてください。

>&nbsp;&nbsp;<font color="red"><b>注意：</b><br>
>&nbsp;&nbsp;法令本文のデータサイズが大きい場合、エラーが発生することがあります。<br>
>&nbsp;&nbsp;エラーが発生した場合は、SwaggerUI以外（Microsoft EdgeやGoogle Chromeといったブラウザで法令APIのURLを直接指定等）で実行してください。</font>


## 補足事項
> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。<br>

> * `attached_files_info`
>>&nbsp;&nbsp;添付ファイルに関するデータが格納されます。


> * `law_info`
>>&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。


> * `revision_info`
>>&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>
>>&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。

> * `law_full_text`
>>&nbsp;&nbsp;法令の本文情報が格納されます。<br>
>>&nbsp;&nbsp;要素（`elm`）パラメータを指定することで要素を絞り込んで本文を取得することができます。指定方法はSchemasの<a href="#model-elm">`elm`</a>を参照してください。


## 法令本文のレスポンス形式
> &nbsp;&nbsp;レスポンス形式（`response_format`）を指定することでデータのレスポンス形式をJSON、又はXMLに切り替えることができます。<br>
> &nbsp;&nbsp;また、法令本文の形式（`law_full_text_format`）を指定することで法令本文（`law_full_text`）のレスポンス形式を切り替えることができます。

> * レスポンス形式（`response_format`）を`json` 、かつ法令本文（`law_full_text`） を`xml`で指定した場合、法令本文（`law_full_text`）はXML形式で返却されます。<br>

> * レスポンス形式（`response_format`）を`xml`、かつ法令本文（`law_full_text`）を`json`で指定した場合、法令本文（`law_full_text`）はJSON形式で返却されます。<br>

>> <font color="red">上記のように`response_format`と`law_full_text`が異なる場合、`law_full_text`の返却値はBase64でエンコードしておりますので、ご利用の際はBase64でデコードしてください。</font>


## XMLとJSONの関係性

>> 例）以下のXMLをJSONで表した場合の対応表を以下に記します。<br>
>> ### XML
>>> <pre><code>&lt;Sentence Num="1" WritingMode="vertical"&gt;
&nbsp;&nbsp;この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・
&lt;/Sentence&gt;
</pre></code>

>> ### JSON（詳細版）
>>> <pre><code>{
&nbsp;&nbsp;"tag": "Sentence",
&nbsp;&nbsp;"attr": {
&nbsp;&nbsp;&nbsp;&nbsp;"Num": "1",
&nbsp;&nbsp;&nbsp;&nbsp;"WritingMode": "vertical"
&nbsp;&nbsp;},
&nbsp;&nbsp;"children": [
&nbsp;&nbsp;&nbsp;&nbsp;"この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"
&nbsp;&nbsp;]
}
</pre></code>

>> ### JSON（簡易版）
>>> <pre><code>{
&nbsp;&nbsp;"Sentence": [  
&nbsp;&nbsp;&nbsp;&nbsp; "この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"
&nbsp;&nbsp;&nbsp;&nbsp;]
}
</code></pre>

>>> - インライン要素（Ruby等）はテキストにタグごと埋め込まれます。
>>> - 属性は`AmendLawNum`、`Extract`、`Paragraph`要素の`Num`のみ、フィールドとして含まれます。


>> ### XMLとJSON（詳細版）の対応表
>>> <table bgcolor="white" border="1">
  <tr bgcolor="#DDFFFF">
    <th width="10%">項目名</th>
    <th width="30%">XML</th>
    <th width="30%">JSON（詳細版）</th>
    <th width="30%">JSON（簡易版）</th>
  </tr>
  <tr>
    <td>タグ</td>
    <td>Sentence</td>
    <td>"tag": "Sentence"</td>
    <td>Sentence</td>
  </tr>
  <tr>
    <td>属性</td>
    <td>Num="1" WritingMode="vertical"</td>
    <td>"attr": {"Num": "1","WritingMode": "vertical"}</td>
    <td>なし（一部の属性は、該当タグと同階層に別要素として格納する場合あり）</td>
    </tr>
  <tr>
    <td>子要素</td>
    <td>この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・</td>
    <td>"children": ["この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"]</td>
    <td>この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・</td>
  </tr>
</table>


<h3 id="法令本文取得api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|law_id_or_num_or_revision_id|path|string|true|法令ID、法令番号又は法令履歴ID（完全一致）。<br><br>> 例： `411AC0000000127`、`平成十一年法律第百二十七号`、`411AC0000000127_19990813_000000000000000`<br><br>|
|law_full_text_format|query|object \| null|false|法令本文の形式（`json` 又は `xml`）。指定なしの場合は`response_format`により判断される形式に合わせる。<br><br>> 例： `json`<br><br>> 既定値： 指定なし<br><br>|
|asof|query|string(date)|false|法令の時点。指定時点以前で最新の履歴に対応する法令本文を取得します。<br><br>`law_id_or_num_or_revision_id`に法令履歴IDを指定した場合は無視されます。<br><br>> 例： `2023-04-01`<br><br>|
|elm|query|object|false|法令本文の一部のみを取得する場合、取得する条項等の要素を指定します。指定しない場合は全文を取得します。<br><br>指定方法はSchemasの<a href="#model-elm">`elm`</a>を参照してください。<br><br>> 例： `MainProvision-Paragraph[1]`<br><br>|
|json_format|query|string \| null|false|JSONレスポンスの`law_full_text`の形式を指定します。<br><br>`full`を指定した場合、JSON（詳細版）が返却されます。法令XMLを解説した詳細な構造です。<br><br>`light`を指定した場合、JSON（簡易版）が返却されます。パースに最適化された簡易的な構造です。<br><br>レスポンス形式がJSONの場合のみ有効です。<br><br>> 例： `light`<br><br>> 既定値： `full`<br><br>|
|omit_amendment_suppl_provision|query|boolean|false|`true`の場合、レスポンスの`law_full_text`の中に改正法令の附則を含めない<br><br>> 例： `true`<br><br>> 既定値： `false`<br><br>|
|include_attached_file_content|query|boolean|false|`true`の場合、レスポンスの`attached_files_info`の`image_data`を返却します。<br><br>> 例： `true`<br><br>> 既定値： `false`<br><br>|
|response_format|query|object \| null|false|レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br><br>> 例： `json`<br><br>> 既定値： 指定なし<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|json_format|full|
|json_format|light|

> Example responses

> 200 Response

```json
{
  "attached_files_info": {
    "image_data": "",
    "attached_files": [
      {
        "law_revision_id": "411AC0000000127_19990813_000000000000000",
        "src": "./pict/H11HO127-001.jpg",
        "updated": "2024-11-23T01:05:36+09:00"
      },
      {
        "law_revision_id": "411AC0000000127_19990813_000000000000000",
        "src": "./pict/H11HO127-002.jpg",
        "updated": "2024-11-23T01:05:36+09:00"
      }
    ]
  },
  "law_info": {
    "law_type": "Act",
    "law_id": "411AC0000000127",
    "law_num": "平成十一年法律第百二十七号",
    "law_num_era": "Heisei",
    "law_num_year": "11",
    "law_num_type": "Act",
    "law_num_num": "127",
    "promulgation_date": "1999-08-13"
  },
  "revision_info": {
    "law_revision_id": "411AC0000000127_19990813_000000000000000",
    "law_type": "Act",
    "law_title": "国旗及び国歌に関する法律",
    "law_title_kana": "こっきおよびこっかにかんするほうりつ",
    "abbrev": "国旗国歌法,日の丸君が代法,国旗・国歌法",
    "category": "文化",
    "updated": "2024-07-21T13:56:59+09:00",
    "amendment_promulgate_date": "1999-08-13",
    "amendment_enforcement_date": "1999-08-13",
    "amendment_enforcement_comment": null,
    "amendment_scheduled_enforcement_date": null,
    "amendment_law_id": null,
    "amendment_law_title": null,
    "amendment_law_title_kana": "",
    "amendment_law_num": null,
    "amendment_type": "1",
    "repeal_status": "None",
    "repeal_date": null,
    "remain_in_force": false,
    "mission": "New",
    "current_revision_status": "CurrentEnforced"
  },
  "law_full_text": {
    "tag": "Law",
    "attr": {
      "Era": "Heisei",
      "Lang": "ja",
      "LawType": "Act",
      "Num": "127",
      "Year": "11",
      "PromulgateMonth": "08",
      "PromulgateDay": "13"
    },
    "children": [
      {
        "tag": "LawNum",
        "attr": "",
        "children": [
          "平成十一年法律第百二十七号"
        ]
      },
      {
        "tag": "LawBody",
        "attr": "",
        "children": [
          {
            "tag": "LawTitle",
            "attr": {
              "Kana": "こっきおよびこっかにかんするほうりつ",
              "Abbrev": "国旗国歌法,日の丸君が代法,国旗・国歌法",
              "AbbrevKana": "こ,ひ,こ"
            },
            "children": [
              "国旗及び国歌に関する法律"
            ]
          },
          {
            "tag": "MainProvision",
            "attr": "",
            "children": [
              {
                "tag": "Article",
                "attr": {
                  "Delete": "false",
                  "Hide": "false",
                  "Num": "1"
                },
                "children": [
                  {
                    "tag": "ArticleCaption",
                    "attr": "",
                    "children": [
                      "（国旗）"
                    ]
                  },
                  {
                    "tag": "ArticleTitle",
                    "attr": "",
                    "children": [
                      "第一条"
                    ]
                  },
                  {
                    "tag": "Paragraph",
                    "attr": {
                      "Hide": "false",
                      "Num": "1",
                      "OldStyle": "false"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "code": "400004",
  "message": "日付（asof等）が誤っています。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="法令本文取得api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|[law_data_response](#schemalaw_data_response)|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

## 添付ファイル取得API

<a id="opIdget-attachment"></a>

> Code samples

```bash
curl https://laws.e-gov.go.jp/api/2/attachment/string \
  -H 'Accept: application/json'
```

`GET /attachment/{law_revision_id}`

## 概要
> &nbsp;&nbsp;法令履歴ID（`law_revision_id`）を指定必須パラメータとして、法令本文の添付ファイルを取得します。<br>
> &nbsp;&nbsp;法令データ上に存在する添付ファイルの拡張子には、`jpg`、`pdf`があります。<br>

> &nbsp;&nbsp;法令本文取得APIのレスポンスデータに含まれる`attached_files_info`のsrc属性（`src`）を指定することで特定の添付ファイルが取得できます。<br>
> &nbsp;&nbsp;src属性（`src`）を指定しない場合は、法令本文に含まれる添付ファイルをZip形式で一括取得できます。


## 補足事項
> &nbsp;&nbsp;src属性（`src`）の指定有無によってレスポンスの動作が異なります。<br>

> &nbsp;&nbsp;src属性（`src`）指定時、
> * &nbsp;&nbsp;SwaggerUIでAPIを実行した場合、`jpg`が返却される場合は画像が表示されます。`pdf`の場合はダウンロードリンクが表示されます。
> * &nbsp;&nbsp;URLを直接入力した場合、`jpg`が返却される場合は画像が表示されます。`pdf`の場合はファイルがダウンロードされます。

> &nbsp;&nbsp;src属性（`src`）未指定時、
> * &nbsp;&nbsp;SwaggerUIでAPIを実行した場合、`jpg`、`pdf`のいずれもダウンロードリンクが表示されます。
> * &nbsp;&nbsp;URLを直接入力した場合、`jpg`、`pdf`のいずれもZip形式でファイルがダウンロードされます。


<h3 id="添付ファイル取得api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|law_revision_id|path|string|true|法令履歴ID（完全一致）<br><br>> jpgの例：`411AC0000000127_19990813_000000000000000`<br><br><br><br>> pdfの例：`322M40000010094_20240601_506M60000010035`<br><br>|
|src|query|string|false|法令XML中のFig要素のsrc属性<br><br>>  jpgの例：`./pict/H11HO127-001.jpg`<br><br><br><br>>  pdfの例：`./pict/2FH00000007000.pdf`<br><br>|

> Example responses

> 200 Response

```text
（ここにバイナリデータが返却されます）
```

> 400 Response

```json
{
  "code": "404003",
  "message": "指定のパラメータで取得できる添付ファイルは存在しません。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="添付ファイル取得api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|Inline|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

## キーワード検索API

<a id="opIdget-keyword"></a>

> Code samples

```bash
curl 'https://laws.e-gov.go.jp/api/2/keyword?keyword=string' \
  -H 'Accept: application/json'
```

`GET /keyword`

## 概要
> キーワード（`keyword`）を指定必須とし、法令本文内に指定したキーワード（`keyword`）を含む法令を取得します。<br>
> 本エンドポイントでは、法令本文（`law_full_text`）を対象に全文検索を行います。<br>
> 指定任意のパラメータと組み合わせることで、返却データを絞り込むことができます。

## 補足事項
> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。

> * `law_info`
>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。
<br>

> * `revision_info`
>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>
>> &nbsp;&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。<br>

> * ### `sentences`
>> &nbsp;&nbsp;キーワード（`keyword`）に該当する法令本文の見出し等の構造（`position`）と条文内容（`text`）が格納されます。


<h3 id="キーワード検索api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyword|query|string|true|キーワード<br><br>入力したキーワードを含む法令本文を検索します。<br><br>ワイルドカード検索、AND検索、OR検索、NOT検索でキーワードを指定できます。<br><br>* ワイルドカード検索<br><br>> 例えば、第○条のように一部のキーワードが不明な時にワイルドカードを使用すると、該当する法令本文を検索することができます。<br><br>> <table bgcolor="white" border="1"><br>   <tr bgcolor="#DDFFFF"><br>     <th width=20%>キーワード</th><br>     <th width=20%>該当する例</th><br>     <th width=20%>備考</th><br>   </tr><br>   <tr><br>     <td>第*条</td><br>     <td>第二十一条</td><br>     <td>*は0文字以上の文字</td><br>   </tr><br>   <tr><br>     <td>第?条</td><br>     <td>第五条</td><br>     <td>?は1文字の文字</td><br>   </tr><br></table><br><br><br>* AND検索、OR検索、NOT検索<br><br>> 検索方法の仕様は、<a href="https://laws.e-gov.go.jp/help/#how-to-write-a-search-expression" target="_blank">検索式の書き方</a>をご覧ください。<br><br>> 複数のキーワードを記号でつなげることにより、AND検索、OR検索、NOT検索を組み合わせて検索することができます。<br><br>> ワイルドカード検索と組み合わせて検索することはできません。<br>> <br><br>> <br><br>> 例： `デジタル庁`<br><br>|
|law_num|query|string|false|法令番号（部分一致）<br><br>> 例： `平成二十八年個人情報保護委員会規則第六号`<br><br>|
|law_num_era|query|[law_num_era](#schemalaw_num_era)|false|法令番号の元号<br><br>> 例： `Heisei`<br><br>|
|law_num_num|query|string|false|法令番号の号数<br><br>> 例： `006`<br><br>|
|law_num_type|query|[law_num_type](#schemalaw_num_type)|false|法令番号の法令種別<br><br>種類の定義はSchemasの<a href="#model-law_num_type">`law_num_type`</a>を参照してください。<br><br>> 例： `Rule`<br><br>|
|law_num_year|query|integer|false|法令番号の年<br><br>> 例： `28`<br><br>|
|law_type|query|[[law_type](#schemalaw_type)]|false|法令種別（複数指定可）<br><br>> 例： `Act,Rule`<br><br>|
|asof|query|string(date)|false|法令の時点。指定時点以前で最新の改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。<br><br>> 例： `2024-05-27`<br><br>|
|category_cd|query|[[category_cd](#schemacategory_cd)]|false|事項別分類コード（複数指定可）<br><br>コードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br><br>> 例： `011,021`<br><br>|
|promulgation_date_from|query|string(date)|false|公布日（開始）<br><br>> 例： `2016-12-15`<br><br>|
|promulgation_date_to|query|string(date)|false|公布日（終了）<br><br>> 例： `2016-12-15`<br><br>|
|limit|query|integer(int32)|false|レスポンスの`sentences`の`position`数の総和の上限。<br><br>> 例：`50`<br><br>>  既定値： `100`<br><br>>  上限値： `1000`<br>|
|offset|query|integer(int32)|false|レスポンスデータの取得開始位置。例えば`10`を指定した場合、11件目からレスポンスデータが取得される。<br><br>1〜10件目は取得されない。<br><br>> 例： `10`<br><br>> 既定値： `0`<br><br>|
|order|query|string|false|レスポンスの並び順を指定（複数指定可）。<br><br><a href="#model-law_info">`law_info`</a> 及び <a href="#model-revision_info">`revision_info`</a> 配下のフィールドを指定可能。<br><br>先頭に + を付けると昇順、- を付けると降順、符号がない場合は昇順。<br><br><br><br>例： `+law_info.law_id,-revision_info.amendment_promulgate_date`<br><br>既定値： `law_info.law_id`<br><br>|
|response_format|query|object \| null|false|レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br><br>> 例： `json`<br><br>> 既定値： 指定なし<br><br>|
|sentences_limit|query|integer(int32)|false|`sentences`に表示される件数が制限されます。<br><br><br><br>※本パラメータを指定した場合、<br><br>　`limit`で指定した件数とレスポンスで取得される件数が合わなくなることがあります。<br><br>　`limit`を上回る値を指定した場合、`limit`の指定値が優先されます。<br><br>> 例：`5`<br><br>|
|sentence_text_size|query|integer(int32)|false|レスポンス：`items`->`sentences`->`text` の表示文字数（`highlight_tag`で指定したHTMLタグを含む）<br><br>> 例：`20`<br><br>> 既定値： `100`<br><br>|
|highlight_tag|query|string|false|`keyword`で指定された文言のヒット箇所を囲むHTMLタグ名。<br><br>> 例： `em`<br><br>> 規定値： `span`<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|law_num_era|Meiji|
|law_num_era|Taisho|
|law_num_era|Showa|
|law_num_era|Heisei|
|law_num_era|Reiwa|
|law_num_type|Constitution|
|law_num_type|Act|
|law_num_type|CabinetOrder|
|law_num_type|ImperialOrder|
|law_num_type|MinisterialOrdinance|
|law_num_type|Rule|
|law_num_type|Misc|
|law_type|Constitution|
|law_type|Act|
|law_type|CabinetOrder|
|law_type|ImperialOrder|
|law_type|MinisterialOrdinance|
|law_type|Rule|
|law_type|Misc|
|category_cd|001|
|category_cd|002|
|category_cd|003|
|category_cd|004|
|category_cd|005|
|category_cd|006|
|category_cd|007|
|category_cd|008|
|category_cd|009|
|category_cd|010|
|category_cd|011|
|category_cd|012|
|category_cd|013|
|category_cd|014|
|category_cd|015|
|category_cd|016|
|category_cd|017|
|category_cd|018|
|category_cd|019|
|category_cd|020|
|category_cd|021|
|category_cd|022|
|category_cd|023|
|category_cd|024|
|category_cd|025|
|category_cd|026|
|category_cd|027|
|category_cd|028|
|category_cd|029|
|category_cd|030|
|category_cd|031|
|category_cd|032|
|category_cd|033|
|category_cd|034|
|category_cd|035|
|category_cd|036|
|category_cd|037|
|category_cd|038|
|category_cd|039|
|category_cd|040|
|category_cd|041|
|category_cd|042|
|category_cd|043|
|category_cd|044|
|category_cd|045|
|category_cd|046|
|category_cd|047|
|category_cd|048|
|category_cd|049|
|category_cd|050|

> Example responses

> 200 Response

```json
{
  "total_count": 447,
  "sentence_count": 100,
  "next_offset": 100,
  "items": [
    {
      "law_info": {
        "law_type": "Rule",
        "law_id": "428M60020000006",
        "law_num": "平成二十八年個人情報保護委員会規則第六号",
        "law_num_era": "Heisei",
        "law_num_year": 28,
        "law_num_type": "Rule",
        "law_num_num": "006",
        "promulgation_date": "2016-12-15"
      },
      "revision_info": {
        "law_revision_id": "428M60020000006_20240527_506M60020000003",
        "law_type": "Rule",
        "law_title": "行政手続における特定の個人を識別するための番号の利用等に関する法律第十九条第九号の規定により提供することができる利用特定個人情報の範囲の限定に関する規則",
        "law_title_kana": "ぎょうせいてつづきにおけるとくていのこじんをしきべつするためのばんごうのりようとうにかんするほうりつだいじゅうきゅうじょうだいきゅうごうのきていによりていきょうすることができるりようとくていこじんじょうほうのはんいのげんていにかんするきそく",
        "abbrev": null,
        "category": "行政手続",
        "updated": "2024-06-12T14:43:47+09:00",
        "amendment_promulgate_date": "2024-05-27",
        "amendment_enforcement_date": "2024-05-27",
        "amendment_enforcement_comment": null,
        "amendment_scheduled_enforcement_date": null,
        "amendment_law_id": "506M60020000003",
        "amendment_law_title": "行政手続における特定の個人を識別するための番号の利用等に関する法律等の一部を改正する法律の施行に伴う個人情報保護委員会関係規則の整備に関する規則",
        "amendment_law_title_kana": null,
        "amendment_law_num": "令和六年個人情報保護委員会規則第三号",
        "amendment_type": "3",
        "repeal_status": "None",
        "repeal_date": null,
        "remain_in_force": false,
        "mission": "New",
        "current_revision_status": "CurrentEnforced"
      },
      "sentences": [
        {
          "position": "amendsupplprovision",
          "text": "この規則は、<span>デジタル庁</span>設置法及びデジタル社会の形成を図るための関係法律の整備に関する法律の施行の日（令和三年九月一日）から施行する。"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "400004",
  "message": "日付（asof等）が誤っています。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="キーワード検索api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|[keyword_response](#schemakeyword_response)|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

## 法令本文ファイル取得API

<a id="opIdget-law_file"></a>

> Code samples

```bash
curl 'https://laws.e-gov.go.jp/api/2/law_file/{file_type}/string' \
  -H 'Accept: application/json'
```

`GET /law_file/{file_type}/{law_id_or_num_or_revision_id}`

## 概要
> &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）、法令履歴ID（`law_revision_id`）のいずれかと、ファイル種別（`file_type`）を指定必須として、<br>
> &nbsp;&nbsp;法令本文をダウンロードすることができます。


<h3 id="法令本文ファイル取得api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|law_id_or_num_or_revision_id|path|string|true|法令ID、法令番号又は法令履歴ID（完全一致）。<br><br>> 例： `405AC0000000088`、`昭和二十二年政令第十六号`、`322CO0000000016_20240401_505CO0000000293`<br><br>|
|file_type|path|object|true|ファイル種別<br><br>コードの定義はSchemasの<a href="#model-file_type">`file_type`</a>を参照してください。<br><br>> 例： `xml`<br><br>|
|asof|query|string(date)|false|法令の時点。指定時点以前で最新の履歴に対応する法令本文ファイルを取得します。<br><br>`law_id_or_num_or_revision_id`に法令履歴IDを指定した場合は無視されます。<br><br>> 例： `2023-04-01`<br><br>|

> Example responses

> 200 Response

```text
（ここにレスポンスボディが返却されます）
```

> 400 Response

```json
{
  "code": "400004",
  "message": "日付（asof等）が誤っています。"
}
```

> 500 Response

```json
{
  "code": "500001",
  "message": "サーバ内処理で異常が発生しました。"
}
```

<h3 id="法令本文ファイル取得api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 リクエスト処理、レスポンス処理が正しく行えた時|Inline|
|400|Bad Request|400 Bad Request API クライアント側の問題によるエラー発生時|[error_info](#schemaerror_info)|
|500|Internal Server Error|500 Internal Server Error サーバ内処理でエラー発生時|[error_info](#schemaerror_info)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_amendment_type">amendment_type</h2>
<!-- backwards compatibility -->
<a id="schemaamendment_type"></a>
<a id="schema_amendment_type"></a>
<a id="tocSamendment_type"></a>
<a id="tocsamendment_type"></a>

```json
"1"
```

改正種別
  * `1`      - 新規
  * `3`      - 被改正
  * `8`      - 廃止

<h2 id="tocS_attached_file">attached_file</h2>
<!-- backwards compatibility -->
<a id="schemaattached_file"></a>
<a id="schema_attached_file"></a>
<a id="tocSattached_file"></a>
<a id="tocsattached_file"></a>

```json
{
  "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
  "src": "./pict/M06SE065-001.jpg",
  "updated": "2023-07-01T14:30:15+09:00"
}
```

添付ファイル情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|law_revision_id|string|false|none|法令ID|
|src|string|false|none|法令XML中のFig要素のsrc属性|
|updated|string(date-time)|false|none|正誤等による更新日時|

<h2 id="tocS_attached_files_info">attached_files_info</h2>
<!-- backwards compatibility -->
<a id="schemaattached_files_info"></a>
<a id="schema_attached_files_info"></a>
<a id="tocSattached_files_info"></a>
<a id="tocsattached_files_info"></a>

```json
{
  "image_data": "",
  "attached_files": [
    {
      "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
      "src": "./pict/M06SE065-001.jpg",
      "updated": "2023-07-01T14:30:15+09:00"
    }
  ]
}
```

添付ファイル情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image_data|string|false|none|添付ファイルデータ（添付ファイルをフォルダ名pictに収集し、フォルダ全体をZip形式で圧縮したファイルをBase64でエンコードした文字列）|
|attached_files|[object]|false|none|添付ファイル一覧|

<h2 id="tocS_category_cd">category_cd</h2>
<!-- backwards compatibility -->
<a id="schemacategory_cd"></a>
<a id="schema_category_cd"></a>
<a id="tocScategory_cd"></a>
<a id="tocscategory_cd"></a>

```json
"001"
```

事項別分類コード:<br>
  * `001` - 憲法
  * `002` - 刑事
  * `003` - 財務通則
  * `004` - 水産業
  * `005` - 観光
  * `006` - 国会
  * `007` - 警察
  * `008` - 国有財産
  * `009` - 鉱業
  * `010` - 郵務
  * `011` - 行政組織
  * `012` - 消防
  * `013` - 国税
  * `014` - 工業
  * `015` - 電気通信
  * `016` - 国家公務員
  * `017` - 国土開発
  * `018` - 事業
  * `019` - 商業
  * `020` - 労働
  * `021` - 行政手続
  * `022` - 土地
  * `023` - 国債
  * `024` - 金融・保険
  * `025` - 環境保全
  * `026` - 統計
  * `027` - 都市計画
  * `028` - 教育
  * `029` - 外国為替・貿易
  * `030` - 厚生
  * `031` - 地方自治
  * `032` - 道路
  * `033` - 文化
  * `034` - 陸運
  * `035` - 社会福祉
  * `036` - 地方財政
  * `037` - 河川
  * `038` - 産業通則
  * `039` - 海運
  * `040` - 社会保険
  * `041` - 司法
  * `042` - 災害対策
  * `043` - 農業
  * `044` - 航空
  * `045` - 防衛
  * `046` - 民事
  * `047` - 建築・住宅
  * `048` - 林業
  * `049` - 貨物運送
  * `050` - 外事

<h2 id="tocS_current_revision_status">current_revision_status</h2>
<!-- backwards compatibility -->
<a id="schemacurrent_revision_status"></a>
<a id="schema_current_revision_status"></a>
<a id="tocScurrent_revision_status"></a>
<a id="tocscurrent_revision_status"></a>

```json
"CurrentEnforced"
```

履歴の状態:
  * `CurrentEnforced`  - 現施行法令
  * `UnEnforced`       - 未施行法令
  * `PreviousEnforced` - 過去施行法令
  * `Repeal`           - 廃止法令（廃止・失効・実効性喪失）

<h2 id="tocS_elm">elm</h2>
<!-- backwards compatibility -->
<a id="schemaelm"></a>
<a id="schema_elm"></a>
<a id="tocSelm"></a>
<a id="tocselm"></a>

```json
"string"
```

指定した法令XMLの要素に該当する法令本文を取得することができます。<br>
* 要素を組み合わせる場合は、`-`（半角ハイフン）で要素を結合してください。<br>
> （例：本則第１項 `MainProvision-Paragraph_1`）
* 下記の表に要素毎の一覧と指定方法を記載しております。
* 表に掲載している要素は一例であり、elmで取得可能な要素の詳細は<a href="https://laws.e-gov.go.jp/docs/" target="_blank">法令データ ドキュメンテーション</a>を参照してください。<br>

<font color="red">
補足：<br>
&nbsp;&nbsp;指定した要素内に他要素がある場合は、他要素の情報も取得されます。<br>
&nbsp;&nbsp;例えば、`MainProvision-Paragraph[1]`を指定した場合は、指定された`Paragraph`要素内に`FigStruct`要素が存在していると`FigStruct`情報も含めて取得されます。
</font>

<table bgcolor="white" border="1">
     <tr bgcolor="#DDFFFF">
       <th width="20%">法令XML要素</th>
       <th width="20%">要素の意味</th>
       <th width="20%">指定例</th>
     </tr>
     <tr>
       <td>&nbsp; LawNum </td>
       <td>&nbsp; 法令番号 </td>
       <td>&nbsp; LawNum[1]</td>
     </tr>
     <tr>
       <td>&nbsp; LawTitle </td>
       <td>&nbsp; 題名 </td>
       <td>&nbsp; LawTitle[1]</td>
     </tr>
     <tr>
       <td>&nbsp; EnactStatement </td>
       <td>&nbsp; 制定文 </td>
       <td>&nbsp; EnactStatement[1] </td>
     </tr>
     <tr>
       <td>&nbsp; TOC </td>
       <td>&nbsp; 目次 </td>
       <td>&nbsp; TOC[1] </td>
     </tr>
     <tr>
       <td>&nbsp; Preamble </td>
       <td>&nbsp; 前文 </td>
       <td>&nbsp; Preamble[1] </td>
     </tr>
     <tr>
       <td>&nbsp; MainProvision </td>
       <td>&nbsp; 本則 </td>
       <td>&nbsp; MainProvision[1] </td>
     </tr>
     <tr>
       <td>&nbsp; Part </td>
       <td>&nbsp; 編 </td>
       <td>&nbsp; Part_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Chapter </td>
       <td>&nbsp; 章 </td>
       <td>&nbsp; Chapter_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Section </td>
       <td>&nbsp; 節 </td>
       <td>&nbsp; Section_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Subsection </td>
       <td>&nbsp; 款 </td>
       <td>&nbsp; Subsection_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Division </td>
       <td>&nbsp; 目 </td>
       <td>&nbsp; Division_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Article </td>
       <td>&nbsp; 条 </td>
       <td>&nbsp; Article_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Paragraph </td>
       <td>&nbsp; 項 </td>
       <td>&nbsp; Paragraph_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Item </td>
       <td>&nbsp; 号 </td>
       <td>&nbsp; Item_1 </td>
     </tr>
     <tr>
       <td>&nbsp; Subitem1 </td>
       <td>&nbsp; 号細分 </td>
       <td>&nbsp; Subitem1_1 </td>
     </tr>
     <tr>
       <td>&nbsp; SupplProvision </td>
       <td>&nbsp; 附則 </td>
       <td>&nbsp; SupplProvision[1] </td>
     </tr>
     <tr>
       <td>&nbsp; AppdxTable </td>
       <td>&nbsp; 別表 </td>
       <td>&nbsp; AppdxTable[1] </td>
     </tr>
     <tr>
       <td>&nbsp; AppdxStyle </td>
       <td>&nbsp; 別記様式 </td>
       <td>&nbsp; AppdxStyle[1] </td>
     </tr>
     <tr>
       <td>&nbsp; AppdxFormat </td>
       <td>&nbsp; 別記書式 </td>
       <td>&nbsp; AppdxFormat[1] </td>
     </tr>
     <tr>
       <td>&nbsp; Appdx </td>
       <td>&nbsp; 付録 </td>
       <td>&nbsp; Appdx[1] </td>
     </tr>
     <tr>
       <td>&nbsp; AppdxFig </td>
       <td>&nbsp; 別図 </td>
       <td>&nbsp; AppdxFig[1] </td>
     </tr>
   </table>

<h2 id="tocS_error_info">error_info</h2>
<!-- backwards compatibility -->
<a id="schemaerror_info"></a>
<a id="schema_error_info"></a>
<a id="tocSerror_info"></a>
<a id="tocserror_info"></a>

```json
{
  "code": "400001",
  "message": "法令種別（law_type、law_num_type）が誤っています。"
}
```

エラー情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|エラーコード<br><br>|
|message|string|false|none|エラーメッセージ|

<h2 id="tocS_file_type">file_type</h2>
<!-- backwards compatibility -->
<a id="schemafile_type"></a>
<a id="schema_file_type"></a>
<a id="tocSfile_type"></a>
<a id="tocsfile_type"></a>

```json
"xml"
```

ファイル種別:
  * `xml`         - XML
  * `json`        - JSON
  * `html`        - HTML
  * `rtf`         - RTF
  * `docx`        - DOCX

<h2 id="tocS_keyword_response">keyword_response</h2>
<!-- backwards compatibility -->
<a id="schemakeyword_response"></a>
<a id="schema_keyword_response"></a>
<a id="tocSkeyword_response"></a>
<a id="tocskeyword_response"></a>

```json
{
  "total_count": 10000,
  "sentence_count": 100,
  "next_offset": 200,
  "items": [
    {
      "law_info": {
        "law_type": {},
        "law_id": "322CO0000000016",
        "law_num": "昭和二十二年政令第十六号",
        "law_num_era": {},
        "law_num_year": 5,
        "law_num_type": {},
        "law_num_num": "192",
        "promulgation_date": "2023-07-01"
      },
      "revision_info": {
        "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
        "law_type": {},
        "law_title": "地方自治法施行令",
        "law_title_kana": "ちほうじちほうせこうれい",
        "abbrev": "地方自治令",
        "category": "行政組織",
        "updated": "2023-07-01T14:30:15+09:00",
        "amendment_promulgate_date": "2023-07-01",
        "amendment_enforcement_date": "2023-07-01",
        "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
        "amendment_scheduled_enforcement_date": "2023-07-01",
        "amendment_law_id": "505CO0000000175",
        "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
        "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
        "amendment_law_num": "令和五年政令百九十二号",
        "amendment_type": {},
        "repeal_status": {},
        "repeal_date": "2023-07-01",
        "remain_in_force": true,
        "mission": {},
        "current_revision_status": {}
      },
      "sentences": [
        {
          "position": "MainProvision-Article_21-Paragraph_3",
          "text": "局、部又は委員会の<span>事務局</span>には、次長を置くことができるものとし、その設置、職務及び定数は、政令でこれを定める。"
        }
      ]
    }
  ]
}
```

キーワード検索APIレスポンス

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_count|integer(int64)|false|none|指定`keyword`でヒットした総件数|
|sentence_count|integer(int64)|false|none|レスポンス単位で表示した`sentences`数の総和|
|next_offset|integer(int64) \| null|false|none|次指定する`offset`値。末尾まで取得が完了した場合はnull|
|items|[object]|false|none|法令ID単位の情報リスト<br><br>* `revision_info` - 指定時点において効力を持つ版のメタ情報<br>|

<h2 id="tocS_law_data_response">law_data_response</h2>
<!-- backwards compatibility -->
<a id="schemalaw_data_response"></a>
<a id="schema_law_data_response"></a>
<a id="tocSlaw_data_response"></a>
<a id="tocslaw_data_response"></a>

```json
{
  "attached_files_info": {
    "image_data": "",
    "attached_files": [
      {
        "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
        "src": "./pict/M06SE065-001.jpg",
        "updated": "2023-07-01T14:30:15+09:00"
      }
    ]
  },
  "law_info": {
    "law_type": {},
    "law_id": "322CO0000000016",
    "law_num": "昭和二十二年政令第十六号",
    "law_num_era": {},
    "law_num_year": 5,
    "law_num_type": {},
    "law_num_num": "192",
    "promulgation_date": "2023-07-01"
  },
  "revision_info": {
    "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
    "law_type": {},
    "law_title": "地方自治法施行令",
    "law_title_kana": "ちほうじちほうせこうれい",
    "abbrev": "地方自治令",
    "category": "行政組織",
    "updated": "2023-07-01T14:30:15+09:00",
    "amendment_promulgate_date": "2023-07-01",
    "amendment_enforcement_date": "2023-07-01",
    "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
    "amendment_scheduled_enforcement_date": "2023-07-01",
    "amendment_law_id": "505CO0000000175",
    "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
    "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
    "amendment_law_num": "令和五年政令百九十二号",
    "amendment_type": {},
    "repeal_status": {},
    "repeal_date": "2023-07-01",
    "remain_in_force": true,
    "mission": {},
    "current_revision_status": {}
  },
  "law_full_text": {}
}
```

法令本文取得APIレスポンス

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached_files_info|[attached_files_info](#schemaattached_files_info)|false|none|添付ファイル情報|
|law_info|[law_info](#schemalaw_info)|false|none|履歴に依存しない法令（法令IDで特定される法令）のメタ情報|
|revision_info|[revision_info](#schemarevision_info)|false|none|法令の履歴に関する情報|
|law_full_text|object \| string|false|none|法令本文<br><br><br>  * `law_full_text_format`と`response_format`の指定方法によって、レスポンス形式が変化します。<br><br><br>  * データ構造の詳細は<a href="https://laws.e-gov.go.jp/docs/" target="_blank">法令データ ドキュメンテーション</a>を参照してください。<br><br><br>  * JSON（詳細版）形式、JSON（簡易版）形式とXML形式の各要素は、丸数字で対応関係を表現しています。<br><br><br>  * JSON（詳細版）形式では、`children`オブジェクトでXML形式の階層構造を表現しています。<br><br><br>|

<h2 id="tocS_law_info">law_info</h2>
<!-- backwards compatibility -->
<a id="schemalaw_info"></a>
<a id="schema_law_info"></a>
<a id="tocSlaw_info"></a>
<a id="tocslaw_info"></a>

```json
{
  "law_type": {},
  "law_id": "322CO0000000016",
  "law_num": "昭和二十二年政令第十六号",
  "law_num_era": {},
  "law_num_year": 5,
  "law_num_type": {},
  "law_num_num": "192",
  "promulgation_date": "2023-07-01"
}
```

履歴に依存しない法令（法令IDで特定される法令）のメタ情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|law_type|object|false|none|法令種別|
|law_id|string|false|none|法令ID|
|law_num|string|false|none|法令番号|
|law_num_era|object|false|none|法令番号の元号|
|law_num_year|integer|false|none|法令番号の年|
|law_num_type|object|false|none|法令番号の法令種別|
|law_num_num|string|false|none|法令番号の号数|
|promulgation_date|string(date)|false|none|公布日|

<h2 id="tocS_law_num_era">law_num_era</h2>
<!-- backwards compatibility -->
<a id="schemalaw_num_era"></a>
<a id="schema_law_num_era"></a>
<a id="tocSlaw_num_era"></a>
<a id="tocslaw_num_era"></a>

```json
"Meiji"
```

法令番号の元号

<h2 id="tocS_law_num_type">law_num_type</h2>
<!-- backwards compatibility -->
<a id="schemalaw_num_type"></a>
<a id="schema_law_num_type"></a>
<a id="tocSlaw_num_type"></a>
<a id="tocslaw_num_type"></a>

```json
"Constitution"
```

法令番号の法令種別:
  * `Constitution`         - 憲法
  * `Act`                  - 法律
  * `CabinetOrder`         - 政令
  * `ImperialOrder`        - 勅令
  * `MinisterialOrdinance` - 府省令
  * `Rule`                 - 規則
  * `Misc`                 - その他

<h2 id="tocS_law_revisions_response">law_revisions_response</h2>
<!-- backwards compatibility -->
<a id="schemalaw_revisions_response"></a>
<a id="schema_law_revisions_response"></a>
<a id="tocSlaw_revisions_response"></a>
<a id="tocslaw_revisions_response"></a>

```json
{
  "law_info": {
    "law_type": {},
    "law_id": "322CO0000000016",
    "law_num": "昭和二十二年政令第十六号",
    "law_num_era": {},
    "law_num_year": 5,
    "law_num_type": {},
    "law_num_num": "192",
    "promulgation_date": "2023-07-01"
  },
  "revisions": [
    {
      "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
      "law_type": {},
      "law_title": "地方自治法施行令",
      "law_title_kana": "ちほうじちほうせこうれい",
      "abbrev": "地方自治令",
      "category": "行政組織",
      "updated": "2023-07-01T14:30:15+09:00",
      "amendment_promulgate_date": "2023-07-01",
      "amendment_enforcement_date": "2023-07-01",
      "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
      "amendment_scheduled_enforcement_date": "2023-07-01",
      "amendment_law_id": "505CO0000000175",
      "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
      "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
      "amendment_law_num": "令和五年政令百九十二号",
      "amendment_type": {},
      "repeal_status": {},
      "repeal_date": "2023-07-01",
      "remain_in_force": true,
      "mission": {},
      "current_revision_status": {}
    }
  ]
}
```

法令履歴一覧取得APIレスポンス

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|law_info|[law_info](#schemalaw_info)|true|none|履歴に依存しない法令（法令IDで特定される法令）のメタ情報|
|revisions|[object]|true|none|版一覧|

<h2 id="tocS_law_type">law_type</h2>
<!-- backwards compatibility -->
<a id="schemalaw_type"></a>
<a id="schema_law_type"></a>
<a id="tocSlaw_type"></a>
<a id="tocslaw_type"></a>

```json
"Constitution"
```

法令種別:
  * `Constitution`         - 憲法
  * `Act`                  - 法律
  * `CabinetOrder`         - 政令
  * `ImperialOrder`        - 勅令
  * `MinisterialOrdinance` - 府省令
  * `Rule`                 - 規則
  * `Misc`                 - その他

<h2 id="tocS_laws_response">laws_response</h2>
<!-- backwards compatibility -->
<a id="schemalaws_response"></a>
<a id="schema_laws_response"></a>
<a id="tocSlaws_response"></a>
<a id="tocslaws_response"></a>

```json
{
  "total_count": 10000,
  "count": 100,
  "next_offset": 200,
  "laws": [
    {
      "law_info": {
        "law_type": {},
        "law_id": "322CO0000000016",
        "law_num": "昭和二十二年政令第十六号",
        "law_num_era": {},
        "law_num_year": 5,
        "law_num_type": {},
        "law_num_num": "192",
        "promulgation_date": "2023-07-01"
      },
      "revision_info": {
        "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
        "law_type": {},
        "law_title": "地方自治法施行令",
        "law_title_kana": "ちほうじちほうせこうれい",
        "abbrev": "地方自治令",
        "category": "行政組織",
        "updated": "2023-07-01T14:30:15+09:00",
        "amendment_promulgate_date": "2023-07-01",
        "amendment_enforcement_date": "2023-07-01",
        "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
        "amendment_scheduled_enforcement_date": "2023-07-01",
        "amendment_law_id": "505CO0000000175",
        "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
        "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
        "amendment_law_num": "令和五年政令百九十二号",
        "amendment_type": {},
        "repeal_status": {},
        "repeal_date": "2023-07-01",
        "remain_in_force": true,
        "mission": {},
        "current_revision_status": {}
      },
      "current_revision_info": {
        "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
        "law_type": {},
        "law_title": "地方自治法施行令",
        "law_title_kana": "ちほうじちほうせこうれい",
        "abbrev": "地方自治令",
        "category": "行政組織",
        "updated": "2023-07-01T14:30:15+09:00",
        "amendment_promulgate_date": "2023-07-01",
        "amendment_enforcement_date": "2023-07-01",
        "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
        "amendment_scheduled_enforcement_date": "2023-07-01",
        "amendment_law_id": "505CO0000000175",
        "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
        "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
        "amendment_law_num": "令和五年政令百九十二号",
        "amendment_type": {},
        "repeal_status": {},
        "repeal_date": "2023-07-01",
        "remain_in_force": true,
        "mission": {},
        "current_revision_status": {}
      }
    }
  ]
}
```

法令一覧取得API レスポンス

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_count|integer(int64)|false|none|取得件数の上限（`limit`）、何件目から取得するか（`offset`）適用前のリストに含まれる項目数（検索条件にマッチした全件数）|
|count|integer(int64)|true|none|返却するリスト（取得件数の上限（`limit`）、何件目から取得するか（`offset`）適用後）に含まれる項目数|
|next_offset|integer(int64) \| null|false|none|次の何件目から取得するか（`offset`）。末尾まで取得が完了した場合はnull|
|laws|[object]|false|none|法令ID単位の法令情報|

<h2 id="tocS_mission">mission</h2>
<!-- backwards compatibility -->
<a id="schemamission"></a>
<a id="schema_mission"></a>
<a id="tocSmission"></a>
<a id="tocsmission"></a>

```json
"New"
```

新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）
  * `New`      - 新規制定
  * `Partial`  - 一部改正

<h2 id="tocS_repeal_status">repeal_status</h2>
<!-- backwards compatibility -->
<a id="schemarepeal_status"></a>
<a id="schema_repeal_status"></a>
<a id="tocSrepeal_status"></a>
<a id="tocsrepeal_status"></a>

```json
"None"
```

廃止等の状態:
  * `None`                - 廃止・失効等の状態なし
  * `Repeal`              - 廃止
  * `Expire`              - 失効
  * `Suspend`             - 停止
  * `LossOfEffectiveness` - 実効性喪失

<h2 id="tocS_response_format">response_format</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_format"></a>
<a id="schema_response_format"></a>
<a id="tocSresponse_format"></a>
<a id="tocsresponse_format"></a>

```json
"json"
```

レスポンス形式（`json` 又は `xml`）

<h2 id="tocS_revision_info">revision_info</h2>
<!-- backwards compatibility -->
<a id="schemarevision_info"></a>
<a id="schema_revision_info"></a>
<a id="tocSrevision_info"></a>
<a id="tocsrevision_info"></a>

```json
{
  "law_revision_id": "322CO0000000016_20230508_505CO0000000175",
  "law_type": {},
  "law_title": "地方自治法施行令",
  "law_title_kana": "ちほうじちほうせこうれい",
  "abbrev": "地方自治令",
  "category": "行政組織",
  "updated": "2023-07-01T14:30:15+09:00",
  "amendment_promulgate_date": "2023-07-01",
  "amendment_enforcement_date": "2023-07-01",
  "amendment_enforcement_comment": "公布の日から起算して一年を超えない範囲内において政令で定める日",
  "amendment_scheduled_enforcement_date": "2023-07-01",
  "amendment_law_id": "505CO0000000175",
  "amendment_law_title": "組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律",
  "amendment_law_title_kana": "そしきてきなはんざいのしょばつおよび",
  "amendment_law_num": "令和五年政令百九十二号",
  "amendment_type": {},
  "repeal_status": {},
  "repeal_date": "2023-07-01",
  "remain_in_force": true,
  "mission": {},
  "current_revision_status": {}
}
```

法令の履歴に関する情報

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|law_revision_id|string|false|none|法令履歴ID|
|law_type|object|false|none|法令種別|
|law_title|string|false|none|法令名|
|law_title_kana|string|false|none|法令名読み|
|abbrev|string|false|none|法令略称|
|category|string|false|none|法令分野分類|
|updated|string(date-time)|false|none|正誤等による更新日時|
|amendment_promulgate_date|string(date)|false|none|改正法令公布日|
|amendment_enforcement_date|string(date)|false|none|改正法令施行期日（この履歴に対応する改正の施行期日）|
|amendment_enforcement_comment|string|false|none|施行期日規定等の参考情報（この履歴に対応する改正の施行期日）|
|amendment_scheduled_enforcement_date|string(date)|false|none|擬似的な施行期日（実際の施行期日とは限らない）（この履歴に対応する改正の施行期日）|
|amendment_law_id|string|false|none|改正法令の法令ID（この履歴に対応する改正法令）|
|amendment_law_title|string|false|none|改正法令名|
|amendment_law_title_kana|string|false|none|改正法令名読み|
|amendment_law_num|string|false|none|改正法令番号|
|amendment_type|object|false|none|改正種別|
|repeal_status|object|false|none|廃止等の状態|
|repeal_date|string(date) \| null|false|none|廃止日|
|remain_in_force|boolean \| null|false|none|廃止後の効力（`true`:廃止後でも効力を有するもの / `false`:廃止後に効力を有しないもの）|
|mission|object|false|none|新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）|
|current_revision_status|object|false|none|履歴の状態|
