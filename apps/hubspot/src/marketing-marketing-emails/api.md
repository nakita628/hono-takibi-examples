<h1 id="marketing-emails">Marketing Emails v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|content||
|marketing-email||
|marketing.email.read||
|marketing.email.write||
|transactional-email||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="marketing-emails-basic">Basic</h1>

## List Emails

<a id="opIdget-/marketing/emails/2026-09_/marketing/emails/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09`

Retrieve a list of marketing emails from your HubSpot account. This endpoint allows you to filter emails based on various criteria such as publication date, creation date, update date, and more. You can also control the number of results per page and include additional statistics or properties in the response.

<h3 id="list-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|campaign|query|string|false|Filter emails by campaign name.|
|createdAfter|query|string(date-time)|false|Filter emails created after a specific date. Format should be date-time.|
|createdAt|query|string(date-time)|false|Filter emails by the exact creation date. Format should be date-time.|
|createdBefore|query|string(date-time)|false|Filter emails created before a specific date. Format should be date-time.|
|includedProperties|query|[string]|false|Specify additional properties to include in the response. Accepts an array of strings.|
|includeStats|query|boolean|false|Include statistics in the response. Accepts a boolean value.|
|isPublished|query|boolean|false|Filter emails by their published status. Accepts a boolean value.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|marketingCampaignNames|query|boolean|false|Include marketing campaign names in the response. Accepts a boolean value.|
|publishedAfter|query|string(date-time)|false|Filter emails published after a specific date. Format should be date-time.|
|publishedAt|query|string(date-time)|false|Filter emails by the exact publication date. Format should be date-time.|
|publishedBefore|query|string(date-time)|false|Filter emails published before a specific date. Format should be date-time.|
|sort|query|[string]|false|Specify the sorting order for the results. Accepts an array of strings.|
|type|query|string|false|Filter emails by type. Accepts specific email types such as AB_EMAIL, BATCH_EMAIL, etc.|
|updatedAfter|query|string(date-time)|false|Filter emails updated after a specific date. Format should be date-time.|
|updatedAt|query|string(date-time)|false|Filter emails by the exact update date. Format should be date-time.|
|updatedBefore|query|string(date-time)|false|Filter emails updated before a specific date. Format should be date-time.|
|variantStats|query|boolean|false|Include variant statistics in the response. Accepts a boolean value.|
|workflowNames|query|boolean|false|Include workflow names in the response. Accepts a boolean value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|AB_EMAIL|
|type|AUTOMATED_AB_EMAIL|
|type|AUTOMATED_EMAIL|
|type|BATCH_EMAIL|
|type|BLOG_EMAIL|
|type|BLOG_EMAIL_CHILD|
|type|FEEDBACK_CES_EMAIL|
|type|FEEDBACK_CUSTOM_EMAIL|
|type|FEEDBACK_CUSTOM_SURVEY_EMAIL|
|type|FEEDBACK_NPS_EMAIL|
|type|FOLLOWUP_EMAIL|
|type|LEADFLOW_EMAIL|
|type|LOCALTIME_EMAIL|
|type|MANAGE_PREFERENCES_EMAIL|
|type|MARKETING_SINGLE_SEND_API|
|type|MEMBERSHIP_EMAIL_VERIFICATION_EMAIL|
|type|MEMBERSHIP_FOLLOW_UP_EMAIL|
|type|MEMBERSHIP_OTP_LOGIN_EMAIL|
|type|MEMBERSHIP_PASSWORD_RESET_EMAIL|
|type|MEMBERSHIP_PASSWORD_SAVED_EMAIL|
|type|MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL|
|type|MEMBERSHIP_REGISTRATION_EMAIL|
|type|MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL|
|type|MEMBERSHIP_VERIFICATION_EMAIL|
|type|OPTIN_EMAIL|
|type|OPTIN_FOLLOWUP_EMAIL|
|type|RESUBSCRIBE_EMAIL|
|type|RSS_EMAIL|
|type|RSS_EMAIL_CHILD|
|type|SINGLE_SEND_API|
|type|SMTP_TOKEN|
|type|TICKET_EMAIL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicEmail](#schemacollectionresponsewithtotalpublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Create Email

<a id="opIdpost-/marketing/emails/2026-09_/marketing/emails/v3"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/emails/2026-09`

Create a new marketing email in your HubSpot account using the specified parameters. This endpoint allows you to define the content, settings, and other details of the email. Upon successful creation, the URL of the newly created email resource is returned.

> Body parameter

```json
null
```

<h3 id="create-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailCreateRequest](#schemaemailcreaterequest)|true|none|
|» activeDomain|body|string|false|The active domain of the email.|
|» archived|body|boolean|false|Determines if the email is archived or not.|
|» businessUnitId|body|integer(int64)|false|The ID of the business unit associated with the email.|
|» campaign|body|string|false|The ID of the campaign this email is associated to.|
|» content|body|[PublicEmailContent](#schemapublicemailcontent)|false|none|
|» feedbackSurveyId|body|string|false|The ID of the feedback survey linked to the email.|
|» folderIdV2|body|integer(int64)|false|The ID of the folder where the email will be stored.|
|» from|body|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|
|» jitterSendTime|body|boolean|false|Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.|
|» language|body|string|false|The language code for the email, such as 'en' for English.|
|» name|body|string|false|The name of the email, as displayed on the email dashboard.|
|» publishDate|body|string(date-time)|false|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|» rssData|body|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|
|» sendOnPublish|body|boolean|false|Determines whether the email will be sent immediately on publish.|
|» state|body|string|false|The email state.|
|» subcategory|body|string|false|The email subcategory.|
|» subject|body|string|false|The subject of the email.|
|» subscriptionDetails|body|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|
|» testing|body|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|
|» to|body|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|
|» webversion|body|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|
|» state|AGENT_GENERATED|
|» state|AUTOMATED|
|» state|AUTOMATED_AB|
|» state|AUTOMATED_AB_VARIANT|
|» state|AUTOMATED_DRAFT|
|» state|AUTOMATED_DRAFT_AB|
|» state|AUTOMATED_DRAFT_ABVARIANT|
|» state|AUTOMATED_FOR_FORM|
|» state|AUTOMATED_FOR_FORM_BUFFER|
|» state|AUTOMATED_FOR_FORM_DRAFT|
|» state|AUTOMATED_FOR_FORM_LEGACY|
|» state|AUTOMATED_LOSER_ABVARIANT|
|» state|AUTOMATED_SENDING|
|» state|BLOG_EMAIL_DRAFT|
|» state|BLOG_EMAIL_PUBLISHED|
|» state|DRAFT|
|» state|DRAFT_AB|
|» state|DRAFT_AB_VARIANT|
|» state|ERROR|
|» state|LOSER_AB_VARIANT|
|» state|PAGE_STUB|
|» state|PRE_PROCESSING|
|» state|PROCESSING|
|» state|PUBLISHED|
|» state|PUBLISHED_AB|
|» state|PUBLISHED_AB_VARIANT|
|» state|PUBLISHED_OR_SCHEDULED|
|» state|RSS_TO_EMAIL_DRAFT|
|» state|RSS_TO_EMAIL_PUBLISHED|
|» state|SCHEDULED|
|» state|SCHEDULED_AB|
|» state|SCHEDULED_OR_PUBLISHED|
|» subcategory|ab_loser_variant|
|» subcategory|ab_loser_variant_site_page|
|» subcategory|ab_master|
|» subcategory|ab_master_site_page|
|» subcategory|ab_variant|
|» subcategory|ab_variant_site_page|
|» subcategory|automated|
|» subcategory|automated_ab_master|
|» subcategory|automated_ab_variant|
|» subcategory|automated_for_crm|
|» subcategory|automated_for_custom_survey|
|» subcategory|automated_for_deal|
|» subcategory|automated_for_feedback_ces|
|» subcategory|automated_for_feedback_custom|
|» subcategory|automated_for_feedback_nps|
|» subcategory|automated_for_form|
|» subcategory|automated_for_form_buffer|
|» subcategory|automated_for_form_draft|
|» subcategory|automated_for_form_legacy|
|» subcategory|automated_for_leadflow|
|» subcategory|automated_for_ticket|
|» subcategory|batch|
|» subcategory|blog_article_instance_layout|
|» subcategory|blog_article_listing|
|» subcategory|blog_author_detail|
|» subcategory|blog_email|
|» subcategory|blog_email_child|
|» subcategory|case_study|
|» subcategory|case_study_instance_layout|
|» subcategory|case_study_listing|
|» subcategory|discardable_stub|
|» subcategory|imported_blog_post|
|» subcategory|kb_404_page|
|» subcategory|kb_article_instance_layout|
|» subcategory|kb_listing|
|» subcategory|kb_search_results|
|» subcategory|kb_support_form|
|» subcategory|landing_page|
|» subcategory|legacy_blog_post|
|» subcategory|legacy_page|
|» subcategory|localtime|
|» subcategory|manage_preferences_email|
|» subcategory|marketing_single_send_api|
|» subcategory|membership_email_verification|
|» subcategory|membership_follow_up|
|» subcategory|membership_otp_login|
|» subcategory|membership_password_reset|
|» subcategory|membership_password_saved|
|» subcategory|membership_passwordless_auth|
|» subcategory|membership_registration|
|» subcategory|membership_registration_follow_up|
|» subcategory|membership_verification|
|» subcategory|normal_blog_post|
|» subcategory|optin_email|
|» subcategory|optin_followup_email|
|» subcategory|page_instance_layout|
|» subcategory|page_stub|
|» subcategory|performable_landing_page|
|» subcategory|performable_landing_page_cutover|
|» subcategory|podcast_instance_layout|
|» subcategory|podcast_listing|
|» subcategory|portal_content|
|» subcategory|resubscribe_confirmation_email|
|» subcategory|resubscribe_email|
|» subcategory|rss_to_email|
|» subcategory|rss_to_email_child|
|» subcategory|scp_instance_layout_page|
|» subcategory|scp_static_page|
|» subcategory|single_send_api|
|» subcategory|site_page|
|» subcategory|smtp_token|
|» subcategory|staged_page|
|» subcategory|ticket_closed_kickback_email|
|» subcategory|ticket_opened_kickback_email|
|» subcategory|ticket_pipeline_automated|
|» subcategory|UNKNOWN|
|» subcategory|unsubscribe_confirmation_email|
|» subcategory|web_interactive|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get aggregated statistic intervals

<a id="opIdget-/marketing/emails/2026-09/statistics/histogram_getHistogram"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09/statistics/histogram \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/statistics/histogram`

Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.

<h3 id="get-aggregated-statistic-intervals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailIds|query|[integer(int64)]|false|A list of email IDs to filter the statistics. This is a form-style parameter that can include multiple IDs.|
|endTimestamp|query|string(date-time)|false|The end timestamp for the statistics data range. Must be in date-time format.|
|interval|query|string|false|The time interval for the histogram. Valid values are YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, QUARTER_HOUR, MINUTE, and SECOND.|
|startTimestamp|query|string(date-time)|false|The start timestamp for the statistics data range. Must be in date-time format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|interval|DAY|
|interval|HOUR|
|interval|MINUTE|
|interval|MONTH|
|interval|QUARTER|
|interval|QUARTER_HOUR|
|interval|SECOND|
|interval|WEEK|
|interval|YEAR|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-aggregated-statistic-intervals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalEmailStatisticInterval](#schemacollectionresponsewithtotalemailstatisticinterval)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get aggregated statistics

<a id="opIdget-/marketing/emails/2026-09/statistics/list_getEmailsList"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09/statistics/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/statistics/list`

Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.

<h3 id="get-aggregated-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailIds|query|[integer(int64)]|false|A list of email IDs to filter the statistics. This should be a comma-separated list of integer IDs.|
|endTimestamp|query|string(date-time)|false|The end of the time range for the statistics, in ISO 8601 date-time format.|
|property|query|string|false|The specific property of the email statistics to retrieve.|
|startTimestamp|query|string(date-time)|false|The start of the time range for the statistics, in ISO 8601 date-time format.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-aggregated-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AggregateEmailStatistics](#schemaaggregateemailstatistics)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

<h1 id="marketing-emails-emails">Emails</h1>

## Create an A/B test variation of a marketing email

<a id="opIdpost-/marketing/emails/2026-09/ab-test/create-variation_createAbTestVariation"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09/ab-test/create-variation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/emails/2026-09/ab-test/create-variation`

Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won't be created.

> Body parameter

```json
null
```

<h3 id="create-an-ab-test-variation-of-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AbTestCreateRequestVNext](#schemaabtestcreaterequestvnext)|true|none|
|» contentId|body|string|true|ID of the object to test.|
|» variationName|body|string|true|Name of the variation to be created.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-an-ab-test-variation-of-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Clone a marketing email

<a id="opIdpost-/marketing/emails/2026-09/clone_clone"></a>

> Code samples

```bash
curl https://api.hubapi.com/marketing/emails/2026-09/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /marketing/emails/2026-09/clone`

This will create a duplicate email with the same properties as the original, with the exception of a unique ID.

> Body parameter

```json
null
```

<h3 id="clone-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailCloneRequestVNext](#schemaemailclonerequestvnext)|true|none|
|» cloneName|body|string|false|The name to assign to the cloned email.|
|» id|body|string|true|The email ID.|
|» language|body|string|false|The language code for the cloned email, such as 'en' for English.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="clone-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get the details of a specified marketing email

<a id="opIdget-/marketing/emails/2026-09/{emailId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/{emailId}`

Get the details for a marketing email.

<h3 id="get-the-details-of-a-specified-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|includedProperties|query|[string]|false|A list of specific properties to include in the response.|
|includeStats|query|boolean|false|Whether to include statistics in the response.|
|marketingCampaignNames|query|boolean|false|Whether to include marketing campaign names in the response.|
|variantStats|query|boolean|false|Whether to include variant statistics in the response.|
|workflowNames|query|boolean|false|Whether to include workflow names in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-details-of-a-specified-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Delete a marketing email

<a id="opIddelete-/marketing/emails/2026-09/{emailId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /marketing/emails/2026-09/{emailId}`

Delete a marketing email by its ID

<h3 id="delete-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to delete.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Update a marketing email

<a id="opIdpatch-/marketing/emails/2026-09/{emailId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /marketing/emails/2026-09/{emailId}`

Change properties of a marketing email.

> Body parameter

```json
null
```

<h3 id="update-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to update.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[EmailUpdateRequest](#schemaemailupdaterequest)|true|none|
|» activeDomain|body|string|false|The active domain of the email.|
|» archived|body|boolean|false|Determines if the email is archived or not.|
|» businessUnitId|body|integer(int64)|false|The ID of the business unit associated with the email.|
|» campaign|body|string|false|The ID of the campaign this email is associated to.|
|» content|body|[PublicEmailContent](#schemapublicemailcontent)|false|none|
|» folderIdV2|body|integer(int64)|false|The ID of the folder where the email will be stored.|
|» from|body|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|
|» jitterSendTime|body|boolean|false|Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.|
|» language|body|string|false|The language code for the email, such as 'en' for English.|
|» name|body|string|false|The name of the email, as displayed on the email dashboard.|
|» publishDate|body|string(date-time)|false|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|» rssData|body|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|
|» sendOnPublish|body|boolean|false|Determines whether the email will be sent immediately on publish.|
|» state|body|string|false|The email state.|
|» subcategory|body|string|false|The email subcategory.|
|» subject|body|string|false|The subject of the email.|
|» subscriptionDetails|body|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|
|» testing|body|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|
|» to|body|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|
|» webversion|body|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|
|» state|AGENT_GENERATED|
|» state|AUTOMATED|
|» state|AUTOMATED_AB|
|» state|AUTOMATED_AB_VARIANT|
|» state|AUTOMATED_DRAFT|
|» state|AUTOMATED_DRAFT_AB|
|» state|AUTOMATED_DRAFT_ABVARIANT|
|» state|AUTOMATED_FOR_FORM|
|» state|AUTOMATED_FOR_FORM_BUFFER|
|» state|AUTOMATED_FOR_FORM_DRAFT|
|» state|AUTOMATED_FOR_FORM_LEGACY|
|» state|AUTOMATED_LOSER_ABVARIANT|
|» state|AUTOMATED_SENDING|
|» state|BLOG_EMAIL_DRAFT|
|» state|BLOG_EMAIL_PUBLISHED|
|» state|DRAFT|
|» state|DRAFT_AB|
|» state|DRAFT_AB_VARIANT|
|» state|ERROR|
|» state|LOSER_AB_VARIANT|
|» state|PAGE_STUB|
|» state|PRE_PROCESSING|
|» state|PROCESSING|
|» state|PUBLISHED|
|» state|PUBLISHED_AB|
|» state|PUBLISHED_AB_VARIANT|
|» state|PUBLISHED_OR_SCHEDULED|
|» state|RSS_TO_EMAIL_DRAFT|
|» state|RSS_TO_EMAIL_PUBLISHED|
|» state|SCHEDULED|
|» state|SCHEDULED_AB|
|» state|SCHEDULED_OR_PUBLISHED|
|» subcategory|ab_loser_variant|
|» subcategory|ab_loser_variant_site_page|
|» subcategory|ab_master|
|» subcategory|ab_master_site_page|
|» subcategory|ab_variant|
|» subcategory|ab_variant_site_page|
|» subcategory|automated|
|» subcategory|automated_ab_master|
|» subcategory|automated_ab_variant|
|» subcategory|automated_for_crm|
|» subcategory|automated_for_custom_survey|
|» subcategory|automated_for_deal|
|» subcategory|automated_for_feedback_ces|
|» subcategory|automated_for_feedback_custom|
|» subcategory|automated_for_feedback_nps|
|» subcategory|automated_for_form|
|» subcategory|automated_for_form_buffer|
|» subcategory|automated_for_form_draft|
|» subcategory|automated_for_form_legacy|
|» subcategory|automated_for_leadflow|
|» subcategory|automated_for_ticket|
|» subcategory|batch|
|» subcategory|blog_article_instance_layout|
|» subcategory|blog_article_listing|
|» subcategory|blog_author_detail|
|» subcategory|blog_email|
|» subcategory|blog_email_child|
|» subcategory|case_study|
|» subcategory|case_study_instance_layout|
|» subcategory|case_study_listing|
|» subcategory|discardable_stub|
|» subcategory|imported_blog_post|
|» subcategory|kb_404_page|
|» subcategory|kb_article_instance_layout|
|» subcategory|kb_listing|
|» subcategory|kb_search_results|
|» subcategory|kb_support_form|
|» subcategory|landing_page|
|» subcategory|legacy_blog_post|
|» subcategory|legacy_page|
|» subcategory|localtime|
|» subcategory|manage_preferences_email|
|» subcategory|marketing_single_send_api|
|» subcategory|membership_email_verification|
|» subcategory|membership_follow_up|
|» subcategory|membership_otp_login|
|» subcategory|membership_password_reset|
|» subcategory|membership_password_saved|
|» subcategory|membership_passwordless_auth|
|» subcategory|membership_registration|
|» subcategory|membership_registration_follow_up|
|» subcategory|membership_verification|
|» subcategory|normal_blog_post|
|» subcategory|optin_email|
|» subcategory|optin_followup_email|
|» subcategory|page_instance_layout|
|» subcategory|page_stub|
|» subcategory|performable_landing_page|
|» subcategory|performable_landing_page_cutover|
|» subcategory|podcast_instance_layout|
|» subcategory|podcast_listing|
|» subcategory|portal_content|
|» subcategory|resubscribe_confirmation_email|
|» subcategory|resubscribe_email|
|» subcategory|rss_to_email|
|» subcategory|rss_to_email_child|
|» subcategory|scp_instance_layout_page|
|» subcategory|scp_static_page|
|» subcategory|single_send_api|
|» subcategory|site_page|
|» subcategory|smtp_token|
|» subcategory|staged_page|
|» subcategory|ticket_closed_kickback_email|
|» subcategory|ticket_opened_kickback_email|
|» subcategory|ticket_pipeline_automated|
|» subcategory|UNKNOWN|
|» subcategory|unsubscribe_confirmation_email|
|» subcategory|web_interactive|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get the variation of a an A/B marketing email

<a id="opIdget-/marketing/emails/2026-09/{emailId}/ab-test/get-variation_getAbTestVariation"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/ab-test/get-variation' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/{emailId}/ab-test/get-variation`

This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.

<h3 id="get-the-variation-of-a-an-ab-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email for which the A/B test variation is being retrieved.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|includedProperties|query|[string]|false|An array of property names to include in the response.|
|includeStats|query|boolean|false|Whether to include statistics in the response. Accepts a boolean value.|
|marketingCampaignNames|query|boolean|false|Whether to include marketing campaign names in the response. Accepts a boolean value.|
|variantStats|query|boolean|false|Whether to include variant-specific statistics. Accepts a boolean value.|
|workflowNames|query|boolean|false|Whether to include workflow names in the response. Accepts a boolean value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-variation-of-a-an-ab-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get draft version of a marketing email

<a id="opIdget-/marketing/emails/2026-09/{emailId}/draft_getDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/draft' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/{emailId}/draft`

Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.

<h3 id="get-draft-version-of-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email draft to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-draft-version-of-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Create or update draft version

<a id="opIdpatch-/marketing/emails/2026-09/{emailId}/draft_upsertDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/draft' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /marketing/emails/2026-09/{emailId}/draft`

Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.

> Body parameter

```json
null
```

<h3 id="create-or-update-draft-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email draft to update.|
|body|body|[EmailUpdateRequest](#schemaemailupdaterequest)|true|none|
|» activeDomain|body|string|false|The active domain of the email.|
|» archived|body|boolean|false|Determines if the email is archived or not.|
|» businessUnitId|body|integer(int64)|false|The ID of the business unit associated with the email.|
|» campaign|body|string|false|The ID of the campaign this email is associated to.|
|» content|body|[PublicEmailContent](#schemapublicemailcontent)|false|none|
|» folderIdV2|body|integer(int64)|false|The ID of the folder where the email will be stored.|
|» from|body|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|
|» jitterSendTime|body|boolean|false|Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.|
|» language|body|string|false|The language code for the email, such as 'en' for English.|
|» name|body|string|false|The name of the email, as displayed on the email dashboard.|
|» publishDate|body|string(date-time)|false|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|» rssData|body|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|
|» sendOnPublish|body|boolean|false|Determines whether the email will be sent immediately on publish.|
|» state|body|string|false|The email state.|
|» subcategory|body|string|false|The email subcategory.|
|» subject|body|string|false|The subject of the email.|
|» subscriptionDetails|body|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|
|» testing|body|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|
|» to|body|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|
|» webversion|body|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|aa|
|» language|ab|
|» language|ae|
|» language|af|
|» language|af-na|
|» language|af-za|
|» language|agq|
|» language|agq-cm|
|» language|ak|
|» language|ak-gh|
|» language|am|
|» language|am-et|
|» language|an|
|» language|ann|
|» language|ann-ng|
|» language|ar|
|» language|ar-001|
|» language|ar-ae|
|» language|ar-bh|
|» language|ar-dj|
|» language|ar-dz|
|» language|ar-eg|
|» language|ar-eh|
|» language|ar-er|
|» language|ar-il|
|» language|ar-iq|
|» language|ar-jo|
|» language|ar-km|
|» language|ar-kw|
|» language|ar-lb|
|» language|ar-ly|
|» language|ar-ma|
|» language|ar-mr|
|» language|ar-om|
|» language|ar-ps|
|» language|ar-qa|
|» language|ar-sa|
|» language|ar-sd|
|» language|ar-so|
|» language|ar-ss|
|» language|ar-sy|
|» language|ar-td|
|» language|ar-tn|
|» language|ar-ye|
|» language|as|
|» language|as-in|
|» language|asa|
|» language|asa-tz|
|» language|ast|
|» language|ast-es|
|» language|av|
|» language|ay|
|» language|az|
|» language|az-az|
|» language|ba|
|» language|bal|
|» language|bal-pk|
|» language|bas|
|» language|bas-cm|
|» language|be|
|» language|be-by|
|» language|bem|
|» language|bem-zm|
|» language|bez|
|» language|bez-tz|
|» language|bg|
|» language|bg-bg|
|» language|bgc|
|» language|bgc-in|
|» language|bho|
|» language|bho-in|
|» language|bi|
|» language|blo|
|» language|blo-bj|
|» language|bm|
|» language|bm-ml|
|» language|bn|
|» language|bn-bd|
|» language|bn-in|
|» language|bo|
|» language|bo-cn|
|» language|bo-in|
|» language|br|
|» language|br-fr|
|» language|brx|
|» language|brx-in|
|» language|bs|
|» language|bs-ba|
|» language|ca|
|» language|ca-ad|
|» language|ca-es|
|» language|ca-fr|
|» language|ca-it|
|» language|ccp|
|» language|ccp-bd|
|» language|ccp-in|
|» language|ce|
|» language|ce-ru|
|» language|ceb|
|» language|ceb-ph|
|» language|cgg|
|» language|cgg-ug|
|» language|ch|
|» language|chr|
|» language|chr-us|
|» language|ckb|
|» language|ckb-iq|
|» language|ckb-ir|
|» language|co|
|» language|cr|
|» language|cs|
|» language|cs-cz|
|» language|csw|
|» language|csw-ca|
|» language|cu|
|» language|cu-ru|
|» language|cv|
|» language|cv-ru|
|» language|cy|
|» language|cy-gb|
|» language|da|
|» language|da-dk|
|» language|da-gl|
|» language|dav|
|» language|dav-ke|
|» language|de|
|» language|de-at|
|» language|de-be|
|» language|de-ch|
|» language|de-de|
|» language|de-gr|
|» language|de-it|
|» language|de-li|
|» language|de-lu|
|» language|dje|
|» language|dje-ne|
|» language|doi|
|» language|doi-in|
|» language|dsb|
|» language|dsb-de|
|» language|dua|
|» language|dua-cm|
|» language|dv|
|» language|dyo|
|» language|dyo-sn|
|» language|dz|
|» language|dz-bt|
|» language|ebu|
|» language|ebu-ke|
|» language|ee|
|» language|ee-gh|
|» language|ee-tg|
|» language|el|
|» language|el-cy|
|» language|el-gr|
|» language|en|
|» language|en-001|
|» language|en-150|
|» language|en-ae|
|» language|en-ag|
|» language|en-ai|
|» language|en-as|
|» language|en-at|
|» language|en-au|
|» language|en-bb|
|» language|en-be|
|» language|en-bi|
|» language|en-bm|
|» language|en-bs|
|» language|en-bw|
|» language|en-bz|
|» language|en-ca|
|» language|en-cc|
|» language|en-ch|
|» language|en-ck|
|» language|en-cm|
|» language|en-cn|
|» language|en-cx|
|» language|en-cy|
|» language|en-cz|
|» language|en-de|
|» language|en-dg|
|» language|en-dk|
|» language|en-dm|
|» language|en-ee|
|» language|en-eg|
|» language|en-er|
|» language|en-es|
|» language|en-fi|
|» language|en-fj|
|» language|en-fk|
|» language|en-fm|
|» language|en-fr|
|» language|en-gb|
|» language|en-gd|
|» language|en-gg|
|» language|en-gh|
|» language|en-gi|
|» language|en-gm|
|» language|en-gs|
|» language|en-gu|
|» language|en-gy|
|» language|en-hk|
|» language|en-hu|
|» language|en-id|
|» language|en-ie|
|» language|en-il|
|» language|en-im|
|» language|en-in|
|» language|en-io|
|» language|en-it|
|» language|en-je|
|» language|en-jm|
|» language|en-ke|
|» language|en-ki|
|» language|en-kn|
|» language|en-ky|
|» language|en-lc|
|» language|en-lr|
|» language|en-ls|
|» language|en-lu|
|» language|en-mg|
|» language|en-mh|
|» language|en-mo|
|» language|en-mp|
|» language|en-ms|
|» language|en-mt|
|» language|en-mu|
|» language|en-mv|
|» language|en-mw|
|» language|en-mx|
|» language|en-my|
|» language|en-na|
|» language|en-nf|
|» language|en-ng|
|» language|en-nl|
|» language|en-no|
|» language|en-nr|
|» language|en-nu|
|» language|en-nz|
|» language|en-pg|
|» language|en-ph|
|» language|en-pk|
|» language|en-pl|
|» language|en-pn|
|» language|en-pr|
|» language|en-pt|
|» language|en-pw|
|» language|en-ro|
|» language|en-rw|
|» language|en-sb|
|» language|en-sc|
|» language|en-sd|
|» language|en-se|
|» language|en-sg|
|» language|en-sh|
|» language|en-si|
|» language|en-sk|
|» language|en-sl|
|» language|en-ss|
|» language|en-sx|
|» language|en-sz|
|» language|en-tc|
|» language|en-th|
|» language|en-tk|
|» language|en-tn|
|» language|en-to|
|» language|en-tt|
|» language|en-tv|
|» language|en-tz|
|» language|en-ug|
|» language|en-um|
|» language|en-us|
|» language|en-vc|
|» language|en-vg|
|» language|en-vi|
|» language|en-vn|
|» language|en-vu|
|» language|en-ws|
|» language|en-za|
|» language|en-zm|
|» language|en-zw|
|» language|eo|
|» language|eo-001|
|» language|es|
|» language|es-419|
|» language|es-ar|
|» language|es-bo|
|» language|es-br|
|» language|es-bz|
|» language|es-cl|
|» language|es-co|
|» language|es-cr|
|» language|es-cu|
|» language|es-do|
|» language|es-ea|
|» language|es-ec|
|» language|es-es|
|» language|es-gq|
|» language|es-gt|
|» language|es-hn|
|» language|es-ic|
|» language|es-mx|
|» language|es-ni|
|» language|es-pa|
|» language|es-pe|
|» language|es-ph|
|» language|es-pr|
|» language|es-py|
|» language|es-sv|
|» language|es-us|
|» language|es-uy|
|» language|es-ve|
|» language|et|
|» language|et-ee|
|» language|eu|
|» language|eu-es|
|» language|ewo|
|» language|ewo-cm|
|» language|fa|
|» language|fa-af|
|» language|fa-ir|
|» language|ff|
|» language|ff-bf|
|» language|ff-cm|
|» language|ff-gh|
|» language|ff-gm|
|» language|ff-gn|
|» language|ff-gw|
|» language|ff-lr|
|» language|ff-mr|
|» language|ff-ne|
|» language|ff-ng|
|» language|ff-sl|
|» language|ff-sn|
|» language|fi|
|» language|fi-fi|
|» language|fil|
|» language|fil-ph|
|» language|fj|
|» language|fo|
|» language|fo-dk|
|» language|fo-fo|
|» language|fr|
|» language|fr-be|
|» language|fr-bf|
|» language|fr-bi|
|» language|fr-bj|
|» language|fr-bl|
|» language|fr-ca|
|» language|fr-cd|
|» language|fr-cf|
|» language|fr-cg|
|» language|fr-ch|
|» language|fr-ci|
|» language|fr-cm|
|» language|fr-dj|
|» language|fr-dz|
|» language|fr-fr|
|» language|fr-ga|
|» language|fr-gf|
|» language|fr-gn|
|» language|fr-gp|
|» language|fr-gq|
|» language|fr-ht|
|» language|fr-km|
|» language|fr-lu|
|» language|fr-ma|
|» language|fr-mc|
|» language|fr-mf|
|» language|fr-mg|
|» language|fr-ml|
|» language|fr-mq|
|» language|fr-mr|
|» language|fr-mu|
|» language|fr-nc|
|» language|fr-ne|
|» language|fr-pf|
|» language|fr-pm|
|» language|fr-re|
|» language|fr-rw|
|» language|fr-sc|
|» language|fr-sn|
|» language|fr-sy|
|» language|fr-td|
|» language|fr-tg|
|» language|fr-tn|
|» language|fr-vu|
|» language|fr-wf|
|» language|fr-yt|
|» language|frr|
|» language|frr-de|
|» language|fur|
|» language|fur-it|
|» language|fy|
|» language|fy-nl|
|» language|ga|
|» language|ga-gb|
|» language|ga-ie|
|» language|gaa|
|» language|gaa-gh|
|» language|gd|
|» language|gd-gb|
|» language|gl|
|» language|gl-es|
|» language|gn|
|» language|gsw|
|» language|gsw-ch|
|» language|gsw-fr|
|» language|gsw-li|
|» language|gu|
|» language|gu-in|
|» language|guz|
|» language|guz-ke|
|» language|gv|
|» language|gv-im|
|» language|ha|
|» language|ha-gh|
|» language|ha-ne|
|» language|ha-ng|
|» language|haw|
|» language|haw-us|
|» language|he|
|» language|he-il|
|» language|hi|
|» language|hi-in|
|» language|hmn|
|» language|ho|
|» language|hr|
|» language|hr-ba|
|» language|hr-hr|
|» language|hsb|
|» language|hsb-de|
|» language|ht|
|» language|ht-ht|
|» language|hu|
|» language|hu-hu|
|» language|hy|
|» language|hy-am|
|» language|hz|
|» language|ia|
|» language|ia-001|
|» language|id|
|» language|id-id|
|» language|ie|
|» language|ie-ee|
|» language|ig|
|» language|ig-ng|
|» language|ii|
|» language|ii-cn|
|» language|ik|
|» language|io|
|» language|is|
|» language|is-is|
|» language|it|
|» language|it-ch|
|» language|it-it|
|» language|it-sm|
|» language|it-va|
|» language|iu|
|» language|ja|
|» language|ja-jp|
|» language|jgo|
|» language|jgo-cm|
|» language|jmc|
|» language|jmc-tz|
|» language|jv|
|» language|jv-id|
|» language|ka|
|» language|ka-ge|
|» language|kab|
|» language|kab-dz|
|» language|kam|
|» language|kam-ke|
|» language|kar|
|» language|kde|
|» language|kde-tz|
|» language|kea|
|» language|kea-cv|
|» language|kg|
|» language|kgp|
|» language|kgp-br|
|» language|kh|
|» language|khq|
|» language|khq-ml|
|» language|ki|
|» language|ki-ke|
|» language|kj|
|» language|kk|
|» language|kk-kz|
|» language|kkj|
|» language|kkj-cm|
|» language|kl|
|» language|kl-gl|
|» language|kln|
|» language|kln-ke|
|» language|km|
|» language|km-kh|
|» language|kn|
|» language|kn-in|
|» language|ko|
|» language|ko-cn|
|» language|ko-kp|
|» language|ko-kr|
|» language|kok|
|» language|kok-in|
|» language|kr|
|» language|ks|
|» language|ks-in|
|» language|ksb|
|» language|ksb-tz|
|» language|ksf|
|» language|ksf-cm|
|» language|ksh|
|» language|ksh-de|
|» language|ku|
|» language|ku-tr|
|» language|kv|
|» language|kw|
|» language|kw-gb|
|» language|kxv|
|» language|kxv-in|
|» language|ky|
|» language|ky-kg|
|» language|la|
|» language|lag|
|» language|lag-tz|
|» language|lb|
|» language|lb-lu|
|» language|lg|
|» language|lg-ug|
|» language|li|
|» language|lij|
|» language|lij-it|
|» language|lkt|
|» language|lkt-us|
|» language|lmo|
|» language|lmo-it|
|» language|ln|
|» language|ln-ao|
|» language|ln-cd|
|» language|ln-cf|
|» language|ln-cg|
|» language|lo|
|» language|lo-la|
|» language|lrc|
|» language|lrc-iq|
|» language|lrc-ir|
|» language|lt|
|» language|lt-lt|
|» language|lu|
|» language|lu-cd|
|» language|luo|
|» language|luo-ke|
|» language|luy|
|» language|luy-ke|
|» language|lv|
|» language|lv-lv|
|» language|mai|
|» language|mai-in|
|» language|mas|
|» language|mas-ke|
|» language|mas-tz|
|» language|mdf|
|» language|mdf-ru|
|» language|mer|
|» language|mer-ke|
|» language|mfe|
|» language|mfe-mu|
|» language|mg|
|» language|mg-mg|
|» language|mgh|
|» language|mgh-mz|
|» language|mgo|
|» language|mgo-cm|
|» language|mh|
|» language|mi|
|» language|mi-nz|
|» language|mk|
|» language|mk-mk|
|» language|ml|
|» language|ml-in|
|» language|mn|
|» language|mn-mn|
|» language|mni|
|» language|mni-in|
|» language|mr|
|» language|mr-in|
|» language|ms|
|» language|ms-bn|
|» language|ms-id|
|» language|ms-my|
|» language|ms-sg|
|» language|mt|
|» language|mt-mt|
|» language|mua|
|» language|mua-cm|
|» language|my|
|» language|my-mm|
|» language|mzn|
|» language|mzn-ir|
|» language|na|
|» language|naq|
|» language|naq-na|
|» language|nb|
|» language|nb-no|
|» language|nb-sj|
|» language|nd|
|» language|nd-zw|
|» language|nds|
|» language|nds-de|
|» language|nds-nl|
|» language|ne|
|» language|ne-in|
|» language|ne-np|
|» language|ng|
|» language|nl|
|» language|nl-aw|
|» language|nl-be|
|» language|nl-bq|
|» language|nl-ch|
|» language|nl-cw|
|» language|nl-lu|
|» language|nl-nl|
|» language|nl-sr|
|» language|nl-sx|
|» language|nmg|
|» language|nmg-cm|
|» language|nn|
|» language|nn-no|
|» language|nnh|
|» language|nnh-cm|
|» language|no|
|» language|no-no|
|» language|nqo|
|» language|nqo-gn|
|» language|nr|
|» language|nso|
|» language|nso-za|
|» language|nus|
|» language|nus-ss|
|» language|nv|
|» language|ny|
|» language|nyn|
|» language|nyn-ug|
|» language|oc|
|» language|oc-es|
|» language|oc-fr|
|» language|oj|
|» language|om|
|» language|om-et|
|» language|om-ke|
|» language|or|
|» language|or-in|
|» language|os|
|» language|os-ge|
|» language|os-ru|
|» language|pa|
|» language|pa-in|
|» language|pa-pk|
|» language|pcm|
|» language|pcm-ng|
|» language|pi|
|» language|pis|
|» language|pis-sb|
|» language|pl|
|» language|pl-pl|
|» language|prg|
|» language|prg-001|
|» language|ps|
|» language|ps-af|
|» language|ps-pk|
|» language|pt|
|» language|pt-ao|
|» language|pt-br|
|» language|pt-ch|
|» language|pt-cv|
|» language|pt-gq|
|» language|pt-gw|
|» language|pt-lu|
|» language|pt-mo|
|» language|pt-mz|
|» language|pt-pt|
|» language|pt-st|
|» language|pt-tl|
|» language|qu|
|» language|qu-bo|
|» language|qu-ec|
|» language|qu-pe|
|» language|raj|
|» language|raj-in|
|» language|rm|
|» language|rm-ch|
|» language|rn|
|» language|rn-bi|
|» language|ro|
|» language|ro-md|
|» language|ro-ro|
|» language|rof|
|» language|rof-tz|
|» language|ru|
|» language|ru-by|
|» language|ru-kg|
|» language|ru-kz|
|» language|ru-md|
|» language|ru-ru|
|» language|ru-ua|
|» language|rw|
|» language|rw-rw|
|» language|rwk|
|» language|rwk-tz|
|» language|sa|
|» language|sa-in|
|» language|sah|
|» language|sah-ru|
|» language|saq|
|» language|saq-ke|
|» language|sat|
|» language|sat-in|
|» language|sbp|
|» language|sbp-tz|
|» language|sc|
|» language|sc-it|
|» language|sd|
|» language|sd-in|
|» language|sd-pk|
|» language|se|
|» language|se-fi|
|» language|se-no|
|» language|se-se|
|» language|seh|
|» language|seh-mz|
|» language|ses|
|» language|ses-ml|
|» language|sg|
|» language|sg-cf|
|» language|shi|
|» language|shi-ma|
|» language|si|
|» language|si-lk|
|» language|sk|
|» language|sk-sk|
|» language|sl|
|» language|sl-si|
|» language|sm|
|» language|smn|
|» language|smn-fi|
|» language|sms|
|» language|sms-fi|
|» language|sn|
|» language|sn-zw|
|» language|so|
|» language|so-dj|
|» language|so-et|
|» language|so-ke|
|» language|so-so|
|» language|sq|
|» language|sq-al|
|» language|sq-mk|
|» language|sq-xk|
|» language|sr|
|» language|sr-ba|
|» language|sr-cs|
|» language|sr-me|
|» language|sr-rs|
|» language|sr-xk|
|» language|ss|
|» language|st|
|» language|st-ls|
|» language|st-za|
|» language|su|
|» language|su-id|
|» language|sv|
|» language|sv-ax|
|» language|sv-fi|
|» language|sv-se|
|» language|sw|
|» language|sw-cd|
|» language|sw-ke|
|» language|sw-tz|
|» language|sw-ug|
|» language|sy|
|» language|syr|
|» language|syr-iq|
|» language|syr-sy|
|» language|szl|
|» language|szl-pl|
|» language|ta|
|» language|ta-in|
|» language|ta-lk|
|» language|ta-my|
|» language|ta-sg|
|» language|te|
|» language|te-in|
|» language|teo|
|» language|teo-ke|
|» language|teo-ug|
|» language|tg|
|» language|tg-tj|
|» language|th|
|» language|th-th|
|» language|ti|
|» language|ti-er|
|» language|ti-et|
|» language|tk|
|» language|tk-tm|
|» language|tl|
|» language|tn|
|» language|tn-bw|
|» language|tn-za|
|» language|to|
|» language|to-to|
|» language|tok|
|» language|tok-001|
|» language|tr|
|» language|tr-cy|
|» language|tr-tr|
|» language|ts|
|» language|tt|
|» language|tt-ru|
|» language|tw|
|» language|twq|
|» language|twq-ne|
|» language|ty|
|» language|tzm|
|» language|tzm-ma|
|» language|ug|
|» language|ug-cn|
|» language|uk|
|» language|uk-ua|
|» language|ur|
|» language|ur-in|
|» language|ur-pk|
|» language|uz|
|» language|uz-af|
|» language|uz-uz|
|» language|vai|
|» language|vai-lr|
|» language|ve|
|» language|vec|
|» language|vec-it|
|» language|vi|
|» language|vi-vn|
|» language|vmw|
|» language|vmw-mz|
|» language|vo|
|» language|vo-001|
|» language|vun|
|» language|vun-tz|
|» language|wa|
|» language|wae|
|» language|wae-ch|
|» language|wo|
|» language|wo-sn|
|» language|xh|
|» language|xh-za|
|» language|xnr|
|» language|xnr-in|
|» language|xog|
|» language|xog-ug|
|» language|yav|
|» language|yav-cm|
|» language|yi|
|» language|yi-001|
|» language|yi-ua|
|» language|yo|
|» language|yo-bj|
|» language|yo-ng|
|» language|yrl|
|» language|yrl-br|
|» language|yrl-co|
|» language|yrl-ve|
|» language|yue|
|» language|yue-cn|
|» language|yue-hk|
|» language|yue-mo|
|» language|za|
|» language|za-cn|
|» language|zgh|
|» language|zgh-ma|
|» language|zh|
|» language|zh-cn|
|» language|zh-hans|
|» language|zh-hant|
|» language|zh-hk|
|» language|zh-mo|
|» language|zh-my|
|» language|zh-sg|
|» language|zh-tw|
|» language|zu|
|» language|zu-za|
|» state|AGENT_GENERATED|
|» state|AUTOMATED|
|» state|AUTOMATED_AB|
|» state|AUTOMATED_AB_VARIANT|
|» state|AUTOMATED_DRAFT|
|» state|AUTOMATED_DRAFT_AB|
|» state|AUTOMATED_DRAFT_ABVARIANT|
|» state|AUTOMATED_FOR_FORM|
|» state|AUTOMATED_FOR_FORM_BUFFER|
|» state|AUTOMATED_FOR_FORM_DRAFT|
|» state|AUTOMATED_FOR_FORM_LEGACY|
|» state|AUTOMATED_LOSER_ABVARIANT|
|» state|AUTOMATED_SENDING|
|» state|BLOG_EMAIL_DRAFT|
|» state|BLOG_EMAIL_PUBLISHED|
|» state|DRAFT|
|» state|DRAFT_AB|
|» state|DRAFT_AB_VARIANT|
|» state|ERROR|
|» state|LOSER_AB_VARIANT|
|» state|PAGE_STUB|
|» state|PRE_PROCESSING|
|» state|PROCESSING|
|» state|PUBLISHED|
|» state|PUBLISHED_AB|
|» state|PUBLISHED_AB_VARIANT|
|» state|PUBLISHED_OR_SCHEDULED|
|» state|RSS_TO_EMAIL_DRAFT|
|» state|RSS_TO_EMAIL_PUBLISHED|
|» state|SCHEDULED|
|» state|SCHEDULED_AB|
|» state|SCHEDULED_OR_PUBLISHED|
|» subcategory|ab_loser_variant|
|» subcategory|ab_loser_variant_site_page|
|» subcategory|ab_master|
|» subcategory|ab_master_site_page|
|» subcategory|ab_variant|
|» subcategory|ab_variant_site_page|
|» subcategory|automated|
|» subcategory|automated_ab_master|
|» subcategory|automated_ab_variant|
|» subcategory|automated_for_crm|
|» subcategory|automated_for_custom_survey|
|» subcategory|automated_for_deal|
|» subcategory|automated_for_feedback_ces|
|» subcategory|automated_for_feedback_custom|
|» subcategory|automated_for_feedback_nps|
|» subcategory|automated_for_form|
|» subcategory|automated_for_form_buffer|
|» subcategory|automated_for_form_draft|
|» subcategory|automated_for_form_legacy|
|» subcategory|automated_for_leadflow|
|» subcategory|automated_for_ticket|
|» subcategory|batch|
|» subcategory|blog_article_instance_layout|
|» subcategory|blog_article_listing|
|» subcategory|blog_author_detail|
|» subcategory|blog_email|
|» subcategory|blog_email_child|
|» subcategory|case_study|
|» subcategory|case_study_instance_layout|
|» subcategory|case_study_listing|
|» subcategory|discardable_stub|
|» subcategory|imported_blog_post|
|» subcategory|kb_404_page|
|» subcategory|kb_article_instance_layout|
|» subcategory|kb_listing|
|» subcategory|kb_search_results|
|» subcategory|kb_support_form|
|» subcategory|landing_page|
|» subcategory|legacy_blog_post|
|» subcategory|legacy_page|
|» subcategory|localtime|
|» subcategory|manage_preferences_email|
|» subcategory|marketing_single_send_api|
|» subcategory|membership_email_verification|
|» subcategory|membership_follow_up|
|» subcategory|membership_otp_login|
|» subcategory|membership_password_reset|
|» subcategory|membership_password_saved|
|» subcategory|membership_passwordless_auth|
|» subcategory|membership_registration|
|» subcategory|membership_registration_follow_up|
|» subcategory|membership_verification|
|» subcategory|normal_blog_post|
|» subcategory|optin_email|
|» subcategory|optin_followup_email|
|» subcategory|page_instance_layout|
|» subcategory|page_stub|
|» subcategory|performable_landing_page|
|» subcategory|performable_landing_page_cutover|
|» subcategory|podcast_instance_layout|
|» subcategory|podcast_listing|
|» subcategory|portal_content|
|» subcategory|resubscribe_confirmation_email|
|» subcategory|resubscribe_email|
|» subcategory|rss_to_email|
|» subcategory|rss_to_email_child|
|» subcategory|scp_instance_layout_page|
|» subcategory|scp_static_page|
|» subcategory|single_send_api|
|» subcategory|site_page|
|» subcategory|smtp_token|
|» subcategory|staged_page|
|» subcategory|ticket_closed_kickback_email|
|» subcategory|ticket_opened_kickback_email|
|» subcategory|ticket_pipeline_automated|
|» subcategory|UNKNOWN|
|» subcategory|unsubscribe_confirmation_email|
|» subcategory|web_interactive|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-draft-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Reset the draft version

<a id="opIdpost-/marketing/emails/2026-09/{emailId}/draft/reset_resetDraft"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/draft/reset' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/emails/2026-09/{emailId}/draft/reset`

Resets the draft back to a copy of the live object.

<h3 id="reset-the-draft-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email draft to reset.|

> Example responses

> default Response

```json
null
```

<h3 id="reset-the-draft-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Publish or send a marketing email

<a id="opIdpost-/marketing/emails/2026-09/{emailId}/publish_publishOrSend"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/publish' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/emails/2026-09/{emailId}/publish`

If you have a Marketing Hub Enterprise account or the Transactional Email Add-On, you can use this endpoint to publish an automated email or send/schedule a regular email.

<h3 id="publish-or-send-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to be published.|

> Example responses

> default Response

```json
null
```

<h3 id="publish-or-send-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing-email ), oauth2 ( Scopes: transactional-email )
</aside>

## Get revisions of a marketing email

<a id="opIdget-/marketing/emails/2026-09/{emailId}/revisions_getRevisions"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/revisions' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/{emailId}/revisions`

Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 

<h3 id="get-revisions-of-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email for which to retrieve revisions.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token for pagination to retrieve results before a specific point.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-revisions-of-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalPublicEmailVersion](#schemacollectionresponsewithtotalpublicemailversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Get a revision of a marketing email

<a id="opIdget-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}_getRevisionById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/revisions/{revisionId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /marketing/emails/2026-09/{emailId}/revisions/{revisionId}`

Get a specific revision of a marketing email.

<h3 id="get-a-revision-of-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email for which the revision is being retrieved.|
|revisionId|path|string|true|The unique identifier of the specific revision of the email to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-revision-of-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmailVersion](#schemapublicemailversion)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Restore a revision of a marketing email

<a id="opIdpost-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore_restoreRevision"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore`

Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.

<h3 id="restore-a-revision-of-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email whose revision is to be restored.|
|revisionId|path|string|true|The unique identifier of the revision to restore.|

> Example responses

> default Response

```json
null
```

<h3 id="restore-a-revision-of-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Restore a revision of a marketing email to DRAFT state

<a id="opIdpost-/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore-to-draft' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/emails/2026-09/{emailId}/revisions/{revisionId}/restore-to-draft`

Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 

<h3 id="restore-a-revision-of-a-marketing-email-to-draft-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to restore.|
|revisionId|path|integer(int64)|true|The unique identifier of the revision to restore to draft.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="restore-a-revision-of-a-marketing-email-to-draft-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicEmail](#schemapublicemail)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing.email.read ), oauth2 ( Scopes: marketing.email.write ), oauth2 ( Scopes: content )
</aside>

## Unpublish or cancel a marketing email

<a id="opIdpost-/marketing/emails/2026-09/{emailId}/unpublish_unpublishOrCancel"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/marketing/emails/2026-09/{emailId}/unpublish' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /marketing/emails/2026-09/{emailId}/unpublish`

If you have a Marketing Hub Enterprise account or the Transactional Email Add-On, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.

<h3 id="unpublish-or-cancel-a-marketing-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailId|path|string|true|The unique identifier of the email to unpublish.|

> Example responses

> default Response

```json
null
```

<h3 id="unpublish-or-cancel-a-marketing-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: marketing-email ), oauth2 ( Scopes: transactional-email )
</aside>

# Schemas

<h2 id="tocS_AbTestCreateRequestVNext">AbTestCreateRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaabtestcreaterequestvnext"></a>
<a id="schema_AbTestCreateRequestVNext"></a>
<a id="tocSabtestcreaterequestvnext"></a>
<a id="tocsabtestcreaterequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentId|string|true|none|ID of the object to test.|
|variationName|string|true|none|Name of the variation to be created.|

<h2 id="tocS_AggregateEmailStatistics">AggregateEmailStatistics</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateemailstatistics"></a>
<a id="schema_AggregateEmailStatistics"></a>
<a id="tocSaggregateemailstatistics"></a>
<a id="tocsaggregateemailstatistics"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate|[EmailStatisticsData](#schemaemailstatisticsdata)|true|none|none|
|campaignAggregations|object|true|none|The aggregated statistics per campaign.|
|emails|[integer(int64)]|true|none|List of email IDs that were sent during the time span.|

<h2 id="tocS_CollectionResponseWithTotalEmailStatisticInterval">CollectionResponseWithTotalEmailStatisticInterval</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalemailstatisticinterval"></a>
<a id="schema_CollectionResponseWithTotalEmailStatisticInterval"></a>
<a id="tocScollectionresponsewithtotalemailstatisticinterval"></a>
<a id="tocscollectionresponsewithtotalemailstatisticinterval"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[EmailStatisticInterval](#schemaemailstatisticinterval)]|true|none|An array of EmailStatisticInterval objects, each representing statistics for a specific time interval.|
|total|integer(int32)|true|none|An integer representing the total number of email statistic intervals available.|

<h2 id="tocS_CollectionResponseWithTotalPublicEmail">CollectionResponseWithTotalPublicEmail</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicemail"></a>
<a id="schema_CollectionResponseWithTotalPublicEmail"></a>
<a id="tocScollectionresponsewithtotalpublicemail"></a>
<a id="tocscollectionresponsewithtotalpublicemail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicEmail](#schemapublicemail)]|true|none|An array containing the public email objects retrieved in the current page of results.|
|total|integer(int32)|true|none|An integer representing the total number of public emails available.|

<h2 id="tocS_CollectionResponseWithTotalPublicEmailVersion">CollectionResponseWithTotalPublicEmailVersion</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalpublicemailversion"></a>
<a id="schema_CollectionResponseWithTotalPublicEmailVersion"></a>
<a id="tocScollectionresponsewithtotalpublicemailversion"></a>
<a id="tocscollectionresponsewithtotalpublicemailversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[VersionPublicEmail](#schemaversionpublicemail)]|true|none|An array of email version objects, each conforming to the VersionPublicEmail schema.|
|total|integer(int32)|true|none|An integer representing the total number of email version results available.|

<h2 id="tocS_EmailCloneRequestVNext">EmailCloneRequestVNext</h2>
<!-- backwards compatibility -->
<a id="schemaemailclonerequestvnext"></a>
<a id="schema_EmailCloneRequestVNext"></a>
<a id="tocSemailclonerequestvnext"></a>
<a id="tocsemailclonerequestvnext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneName|string|false|none|The name to assign to the cloned email.|
|id|string|true|none|The email ID.|
|language|string|false|none|The language code for the cloned email, such as 'en' for English.|

<h2 id="tocS_EmailCreateRequest">EmailCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemailcreaterequest"></a>
<a id="schema_EmailCreateRequest"></a>
<a id="tocSemailcreaterequest"></a>
<a id="tocsemailcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDomain|string|false|none|The active domain of the email.|
|archived|boolean|false|none|Determines if the email is archived or not.|
|businessUnitId|integer(int64)|false|none|The ID of the business unit associated with the email.|
|campaign|string|false|none|The ID of the campaign this email is associated to.|
|content|[PublicEmailContent](#schemapublicemailcontent)|false|none|none|
|feedbackSurveyId|string|false|none|The ID of the feedback survey linked to the email.|
|folderIdV2|integer(int64)|false|none|The ID of the folder where the email will be stored.|
|from|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|none|
|jitterSendTime|boolean|false|none|Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.|
|language|string|false|none|The language code for the email, such as 'en' for English.|
|name|string|false|none|The name of the email, as displayed on the email dashboard.|
|publishDate|string(date-time)|false|none|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|rssData|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|none|
|sendOnPublish|boolean|false|none|Determines whether the email will be sent immediately on publish.|
|state|string|false|none|The email state.|
|subcategory|string|false|none|The email subcategory.|
|subject|string|false|none|The subject of the email.|
|subscriptionDetails|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|none|
|testing|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|none|
|to|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|none|
|webversion|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|aa|
|language|ab|
|language|ae|
|language|af|
|language|af-na|
|language|af-za|
|language|agq|
|language|agq-cm|
|language|ak|
|language|ak-gh|
|language|am|
|language|am-et|
|language|an|
|language|ann|
|language|ann-ng|
|language|ar|
|language|ar-001|
|language|ar-ae|
|language|ar-bh|
|language|ar-dj|
|language|ar-dz|
|language|ar-eg|
|language|ar-eh|
|language|ar-er|
|language|ar-il|
|language|ar-iq|
|language|ar-jo|
|language|ar-km|
|language|ar-kw|
|language|ar-lb|
|language|ar-ly|
|language|ar-ma|
|language|ar-mr|
|language|ar-om|
|language|ar-ps|
|language|ar-qa|
|language|ar-sa|
|language|ar-sd|
|language|ar-so|
|language|ar-ss|
|language|ar-sy|
|language|ar-td|
|language|ar-tn|
|language|ar-ye|
|language|as|
|language|as-in|
|language|asa|
|language|asa-tz|
|language|ast|
|language|ast-es|
|language|av|
|language|ay|
|language|az|
|language|az-az|
|language|ba|
|language|bal|
|language|bal-pk|
|language|bas|
|language|bas-cm|
|language|be|
|language|be-by|
|language|bem|
|language|bem-zm|
|language|bez|
|language|bez-tz|
|language|bg|
|language|bg-bg|
|language|bgc|
|language|bgc-in|
|language|bho|
|language|bho-in|
|language|bi|
|language|blo|
|language|blo-bj|
|language|bm|
|language|bm-ml|
|language|bn|
|language|bn-bd|
|language|bn-in|
|language|bo|
|language|bo-cn|
|language|bo-in|
|language|br|
|language|br-fr|
|language|brx|
|language|brx-in|
|language|bs|
|language|bs-ba|
|language|ca|
|language|ca-ad|
|language|ca-es|
|language|ca-fr|
|language|ca-it|
|language|ccp|
|language|ccp-bd|
|language|ccp-in|
|language|ce|
|language|ce-ru|
|language|ceb|
|language|ceb-ph|
|language|cgg|
|language|cgg-ug|
|language|ch|
|language|chr|
|language|chr-us|
|language|ckb|
|language|ckb-iq|
|language|ckb-ir|
|language|co|
|language|cr|
|language|cs|
|language|cs-cz|
|language|csw|
|language|csw-ca|
|language|cu|
|language|cu-ru|
|language|cv|
|language|cv-ru|
|language|cy|
|language|cy-gb|
|language|da|
|language|da-dk|
|language|da-gl|
|language|dav|
|language|dav-ke|
|language|de|
|language|de-at|
|language|de-be|
|language|de-ch|
|language|de-de|
|language|de-gr|
|language|de-it|
|language|de-li|
|language|de-lu|
|language|dje|
|language|dje-ne|
|language|doi|
|language|doi-in|
|language|dsb|
|language|dsb-de|
|language|dua|
|language|dua-cm|
|language|dv|
|language|dyo|
|language|dyo-sn|
|language|dz|
|language|dz-bt|
|language|ebu|
|language|ebu-ke|
|language|ee|
|language|ee-gh|
|language|ee-tg|
|language|el|
|language|el-cy|
|language|el-gr|
|language|en|
|language|en-001|
|language|en-150|
|language|en-ae|
|language|en-ag|
|language|en-ai|
|language|en-as|
|language|en-at|
|language|en-au|
|language|en-bb|
|language|en-be|
|language|en-bi|
|language|en-bm|
|language|en-bs|
|language|en-bw|
|language|en-bz|
|language|en-ca|
|language|en-cc|
|language|en-ch|
|language|en-ck|
|language|en-cm|
|language|en-cn|
|language|en-cx|
|language|en-cy|
|language|en-cz|
|language|en-de|
|language|en-dg|
|language|en-dk|
|language|en-dm|
|language|en-ee|
|language|en-eg|
|language|en-er|
|language|en-es|
|language|en-fi|
|language|en-fj|
|language|en-fk|
|language|en-fm|
|language|en-fr|
|language|en-gb|
|language|en-gd|
|language|en-gg|
|language|en-gh|
|language|en-gi|
|language|en-gm|
|language|en-gs|
|language|en-gu|
|language|en-gy|
|language|en-hk|
|language|en-hu|
|language|en-id|
|language|en-ie|
|language|en-il|
|language|en-im|
|language|en-in|
|language|en-io|
|language|en-it|
|language|en-je|
|language|en-jm|
|language|en-ke|
|language|en-ki|
|language|en-kn|
|language|en-ky|
|language|en-lc|
|language|en-lr|
|language|en-ls|
|language|en-lu|
|language|en-mg|
|language|en-mh|
|language|en-mo|
|language|en-mp|
|language|en-ms|
|language|en-mt|
|language|en-mu|
|language|en-mv|
|language|en-mw|
|language|en-mx|
|language|en-my|
|language|en-na|
|language|en-nf|
|language|en-ng|
|language|en-nl|
|language|en-no|
|language|en-nr|
|language|en-nu|
|language|en-nz|
|language|en-pg|
|language|en-ph|
|language|en-pk|
|language|en-pl|
|language|en-pn|
|language|en-pr|
|language|en-pt|
|language|en-pw|
|language|en-ro|
|language|en-rw|
|language|en-sb|
|language|en-sc|
|language|en-sd|
|language|en-se|
|language|en-sg|
|language|en-sh|
|language|en-si|
|language|en-sk|
|language|en-sl|
|language|en-ss|
|language|en-sx|
|language|en-sz|
|language|en-tc|
|language|en-th|
|language|en-tk|
|language|en-tn|
|language|en-to|
|language|en-tt|
|language|en-tv|
|language|en-tz|
|language|en-ug|
|language|en-um|
|language|en-us|
|language|en-vc|
|language|en-vg|
|language|en-vi|
|language|en-vn|
|language|en-vu|
|language|en-ws|
|language|en-za|
|language|en-zm|
|language|en-zw|
|language|eo|
|language|eo-001|
|language|es|
|language|es-419|
|language|es-ar|
|language|es-bo|
|language|es-br|
|language|es-bz|
|language|es-cl|
|language|es-co|
|language|es-cr|
|language|es-cu|
|language|es-do|
|language|es-ea|
|language|es-ec|
|language|es-es|
|language|es-gq|
|language|es-gt|
|language|es-hn|
|language|es-ic|
|language|es-mx|
|language|es-ni|
|language|es-pa|
|language|es-pe|
|language|es-ph|
|language|es-pr|
|language|es-py|
|language|es-sv|
|language|es-us|
|language|es-uy|
|language|es-ve|
|language|et|
|language|et-ee|
|language|eu|
|language|eu-es|
|language|ewo|
|language|ewo-cm|
|language|fa|
|language|fa-af|
|language|fa-ir|
|language|ff|
|language|ff-bf|
|language|ff-cm|
|language|ff-gh|
|language|ff-gm|
|language|ff-gn|
|language|ff-gw|
|language|ff-lr|
|language|ff-mr|
|language|ff-ne|
|language|ff-ng|
|language|ff-sl|
|language|ff-sn|
|language|fi|
|language|fi-fi|
|language|fil|
|language|fil-ph|
|language|fj|
|language|fo|
|language|fo-dk|
|language|fo-fo|
|language|fr|
|language|fr-be|
|language|fr-bf|
|language|fr-bi|
|language|fr-bj|
|language|fr-bl|
|language|fr-ca|
|language|fr-cd|
|language|fr-cf|
|language|fr-cg|
|language|fr-ch|
|language|fr-ci|
|language|fr-cm|
|language|fr-dj|
|language|fr-dz|
|language|fr-fr|
|language|fr-ga|
|language|fr-gf|
|language|fr-gn|
|language|fr-gp|
|language|fr-gq|
|language|fr-ht|
|language|fr-km|
|language|fr-lu|
|language|fr-ma|
|language|fr-mc|
|language|fr-mf|
|language|fr-mg|
|language|fr-ml|
|language|fr-mq|
|language|fr-mr|
|language|fr-mu|
|language|fr-nc|
|language|fr-ne|
|language|fr-pf|
|language|fr-pm|
|language|fr-re|
|language|fr-rw|
|language|fr-sc|
|language|fr-sn|
|language|fr-sy|
|language|fr-td|
|language|fr-tg|
|language|fr-tn|
|language|fr-vu|
|language|fr-wf|
|language|fr-yt|
|language|frr|
|language|frr-de|
|language|fur|
|language|fur-it|
|language|fy|
|language|fy-nl|
|language|ga|
|language|ga-gb|
|language|ga-ie|
|language|gaa|
|language|gaa-gh|
|language|gd|
|language|gd-gb|
|language|gl|
|language|gl-es|
|language|gn|
|language|gsw|
|language|gsw-ch|
|language|gsw-fr|
|language|gsw-li|
|language|gu|
|language|gu-in|
|language|guz|
|language|guz-ke|
|language|gv|
|language|gv-im|
|language|ha|
|language|ha-gh|
|language|ha-ne|
|language|ha-ng|
|language|haw|
|language|haw-us|
|language|he|
|language|he-il|
|language|hi|
|language|hi-in|
|language|hmn|
|language|ho|
|language|hr|
|language|hr-ba|
|language|hr-hr|
|language|hsb|
|language|hsb-de|
|language|ht|
|language|ht-ht|
|language|hu|
|language|hu-hu|
|language|hy|
|language|hy-am|
|language|hz|
|language|ia|
|language|ia-001|
|language|id|
|language|id-id|
|language|ie|
|language|ie-ee|
|language|ig|
|language|ig-ng|
|language|ii|
|language|ii-cn|
|language|ik|
|language|io|
|language|is|
|language|is-is|
|language|it|
|language|it-ch|
|language|it-it|
|language|it-sm|
|language|it-va|
|language|iu|
|language|ja|
|language|ja-jp|
|language|jgo|
|language|jgo-cm|
|language|jmc|
|language|jmc-tz|
|language|jv|
|language|jv-id|
|language|ka|
|language|ka-ge|
|language|kab|
|language|kab-dz|
|language|kam|
|language|kam-ke|
|language|kar|
|language|kde|
|language|kde-tz|
|language|kea|
|language|kea-cv|
|language|kg|
|language|kgp|
|language|kgp-br|
|language|kh|
|language|khq|
|language|khq-ml|
|language|ki|
|language|ki-ke|
|language|kj|
|language|kk|
|language|kk-kz|
|language|kkj|
|language|kkj-cm|
|language|kl|
|language|kl-gl|
|language|kln|
|language|kln-ke|
|language|km|
|language|km-kh|
|language|kn|
|language|kn-in|
|language|ko|
|language|ko-cn|
|language|ko-kp|
|language|ko-kr|
|language|kok|
|language|kok-in|
|language|kr|
|language|ks|
|language|ks-in|
|language|ksb|
|language|ksb-tz|
|language|ksf|
|language|ksf-cm|
|language|ksh|
|language|ksh-de|
|language|ku|
|language|ku-tr|
|language|kv|
|language|kw|
|language|kw-gb|
|language|kxv|
|language|kxv-in|
|language|ky|
|language|ky-kg|
|language|la|
|language|lag|
|language|lag-tz|
|language|lb|
|language|lb-lu|
|language|lg|
|language|lg-ug|
|language|li|
|language|lij|
|language|lij-it|
|language|lkt|
|language|lkt-us|
|language|lmo|
|language|lmo-it|
|language|ln|
|language|ln-ao|
|language|ln-cd|
|language|ln-cf|
|language|ln-cg|
|language|lo|
|language|lo-la|
|language|lrc|
|language|lrc-iq|
|language|lrc-ir|
|language|lt|
|language|lt-lt|
|language|lu|
|language|lu-cd|
|language|luo|
|language|luo-ke|
|language|luy|
|language|luy-ke|
|language|lv|
|language|lv-lv|
|language|mai|
|language|mai-in|
|language|mas|
|language|mas-ke|
|language|mas-tz|
|language|mdf|
|language|mdf-ru|
|language|mer|
|language|mer-ke|
|language|mfe|
|language|mfe-mu|
|language|mg|
|language|mg-mg|
|language|mgh|
|language|mgh-mz|
|language|mgo|
|language|mgo-cm|
|language|mh|
|language|mi|
|language|mi-nz|
|language|mk|
|language|mk-mk|
|language|ml|
|language|ml-in|
|language|mn|
|language|mn-mn|
|language|mni|
|language|mni-in|
|language|mr|
|language|mr-in|
|language|ms|
|language|ms-bn|
|language|ms-id|
|language|ms-my|
|language|ms-sg|
|language|mt|
|language|mt-mt|
|language|mua|
|language|mua-cm|
|language|my|
|language|my-mm|
|language|mzn|
|language|mzn-ir|
|language|na|
|language|naq|
|language|naq-na|
|language|nb|
|language|nb-no|
|language|nb-sj|
|language|nd|
|language|nd-zw|
|language|nds|
|language|nds-de|
|language|nds-nl|
|language|ne|
|language|ne-in|
|language|ne-np|
|language|ng|
|language|nl|
|language|nl-aw|
|language|nl-be|
|language|nl-bq|
|language|nl-ch|
|language|nl-cw|
|language|nl-lu|
|language|nl-nl|
|language|nl-sr|
|language|nl-sx|
|language|nmg|
|language|nmg-cm|
|language|nn|
|language|nn-no|
|language|nnh|
|language|nnh-cm|
|language|no|
|language|no-no|
|language|nqo|
|language|nqo-gn|
|language|nr|
|language|nso|
|language|nso-za|
|language|nus|
|language|nus-ss|
|language|nv|
|language|ny|
|language|nyn|
|language|nyn-ug|
|language|oc|
|language|oc-es|
|language|oc-fr|
|language|oj|
|language|om|
|language|om-et|
|language|om-ke|
|language|or|
|language|or-in|
|language|os|
|language|os-ge|
|language|os-ru|
|language|pa|
|language|pa-in|
|language|pa-pk|
|language|pcm|
|language|pcm-ng|
|language|pi|
|language|pis|
|language|pis-sb|
|language|pl|
|language|pl-pl|
|language|prg|
|language|prg-001|
|language|ps|
|language|ps-af|
|language|ps-pk|
|language|pt|
|language|pt-ao|
|language|pt-br|
|language|pt-ch|
|language|pt-cv|
|language|pt-gq|
|language|pt-gw|
|language|pt-lu|
|language|pt-mo|
|language|pt-mz|
|language|pt-pt|
|language|pt-st|
|language|pt-tl|
|language|qu|
|language|qu-bo|
|language|qu-ec|
|language|qu-pe|
|language|raj|
|language|raj-in|
|language|rm|
|language|rm-ch|
|language|rn|
|language|rn-bi|
|language|ro|
|language|ro-md|
|language|ro-ro|
|language|rof|
|language|rof-tz|
|language|ru|
|language|ru-by|
|language|ru-kg|
|language|ru-kz|
|language|ru-md|
|language|ru-ru|
|language|ru-ua|
|language|rw|
|language|rw-rw|
|language|rwk|
|language|rwk-tz|
|language|sa|
|language|sa-in|
|language|sah|
|language|sah-ru|
|language|saq|
|language|saq-ke|
|language|sat|
|language|sat-in|
|language|sbp|
|language|sbp-tz|
|language|sc|
|language|sc-it|
|language|sd|
|language|sd-in|
|language|sd-pk|
|language|se|
|language|se-fi|
|language|se-no|
|language|se-se|
|language|seh|
|language|seh-mz|
|language|ses|
|language|ses-ml|
|language|sg|
|language|sg-cf|
|language|shi|
|language|shi-ma|
|language|si|
|language|si-lk|
|language|sk|
|language|sk-sk|
|language|sl|
|language|sl-si|
|language|sm|
|language|smn|
|language|smn-fi|
|language|sms|
|language|sms-fi|
|language|sn|
|language|sn-zw|
|language|so|
|language|so-dj|
|language|so-et|
|language|so-ke|
|language|so-so|
|language|sq|
|language|sq-al|
|language|sq-mk|
|language|sq-xk|
|language|sr|
|language|sr-ba|
|language|sr-cs|
|language|sr-me|
|language|sr-rs|
|language|sr-xk|
|language|ss|
|language|st|
|language|st-ls|
|language|st-za|
|language|su|
|language|su-id|
|language|sv|
|language|sv-ax|
|language|sv-fi|
|language|sv-se|
|language|sw|
|language|sw-cd|
|language|sw-ke|
|language|sw-tz|
|language|sw-ug|
|language|sy|
|language|syr|
|language|syr-iq|
|language|syr-sy|
|language|szl|
|language|szl-pl|
|language|ta|
|language|ta-in|
|language|ta-lk|
|language|ta-my|
|language|ta-sg|
|language|te|
|language|te-in|
|language|teo|
|language|teo-ke|
|language|teo-ug|
|language|tg|
|language|tg-tj|
|language|th|
|language|th-th|
|language|ti|
|language|ti-er|
|language|ti-et|
|language|tk|
|language|tk-tm|
|language|tl|
|language|tn|
|language|tn-bw|
|language|tn-za|
|language|to|
|language|to-to|
|language|tok|
|language|tok-001|
|language|tr|
|language|tr-cy|
|language|tr-tr|
|language|ts|
|language|tt|
|language|tt-ru|
|language|tw|
|language|twq|
|language|twq-ne|
|language|ty|
|language|tzm|
|language|tzm-ma|
|language|ug|
|language|ug-cn|
|language|uk|
|language|uk-ua|
|language|ur|
|language|ur-in|
|language|ur-pk|
|language|uz|
|language|uz-af|
|language|uz-uz|
|language|vai|
|language|vai-lr|
|language|ve|
|language|vec|
|language|vec-it|
|language|vi|
|language|vi-vn|
|language|vmw|
|language|vmw-mz|
|language|vo|
|language|vo-001|
|language|vun|
|language|vun-tz|
|language|wa|
|language|wae|
|language|wae-ch|
|language|wo|
|language|wo-sn|
|language|xh|
|language|xh-za|
|language|xnr|
|language|xnr-in|
|language|xog|
|language|xog-ug|
|language|yav|
|language|yav-cm|
|language|yi|
|language|yi-001|
|language|yi-ua|
|language|yo|
|language|yo-bj|
|language|yo-ng|
|language|yrl|
|language|yrl-br|
|language|yrl-co|
|language|yrl-ve|
|language|yue|
|language|yue-cn|
|language|yue-hk|
|language|yue-mo|
|language|za|
|language|za-cn|
|language|zgh|
|language|zgh-ma|
|language|zh|
|language|zh-cn|
|language|zh-hans|
|language|zh-hant|
|language|zh-hk|
|language|zh-mo|
|language|zh-my|
|language|zh-sg|
|language|zh-tw|
|language|zu|
|language|zu-za|
|state|AGENT_GENERATED|
|state|AUTOMATED|
|state|AUTOMATED_AB|
|state|AUTOMATED_AB_VARIANT|
|state|AUTOMATED_DRAFT|
|state|AUTOMATED_DRAFT_AB|
|state|AUTOMATED_DRAFT_ABVARIANT|
|state|AUTOMATED_FOR_FORM|
|state|AUTOMATED_FOR_FORM_BUFFER|
|state|AUTOMATED_FOR_FORM_DRAFT|
|state|AUTOMATED_FOR_FORM_LEGACY|
|state|AUTOMATED_LOSER_ABVARIANT|
|state|AUTOMATED_SENDING|
|state|BLOG_EMAIL_DRAFT|
|state|BLOG_EMAIL_PUBLISHED|
|state|DRAFT|
|state|DRAFT_AB|
|state|DRAFT_AB_VARIANT|
|state|ERROR|
|state|LOSER_AB_VARIANT|
|state|PAGE_STUB|
|state|PRE_PROCESSING|
|state|PROCESSING|
|state|PUBLISHED|
|state|PUBLISHED_AB|
|state|PUBLISHED_AB_VARIANT|
|state|PUBLISHED_OR_SCHEDULED|
|state|RSS_TO_EMAIL_DRAFT|
|state|RSS_TO_EMAIL_PUBLISHED|
|state|SCHEDULED|
|state|SCHEDULED_AB|
|state|SCHEDULED_OR_PUBLISHED|
|subcategory|ab_loser_variant|
|subcategory|ab_loser_variant_site_page|
|subcategory|ab_master|
|subcategory|ab_master_site_page|
|subcategory|ab_variant|
|subcategory|ab_variant_site_page|
|subcategory|automated|
|subcategory|automated_ab_master|
|subcategory|automated_ab_variant|
|subcategory|automated_for_crm|
|subcategory|automated_for_custom_survey|
|subcategory|automated_for_deal|
|subcategory|automated_for_feedback_ces|
|subcategory|automated_for_feedback_custom|
|subcategory|automated_for_feedback_nps|
|subcategory|automated_for_form|
|subcategory|automated_for_form_buffer|
|subcategory|automated_for_form_draft|
|subcategory|automated_for_form_legacy|
|subcategory|automated_for_leadflow|
|subcategory|automated_for_ticket|
|subcategory|batch|
|subcategory|blog_article_instance_layout|
|subcategory|blog_article_listing|
|subcategory|blog_author_detail|
|subcategory|blog_email|
|subcategory|blog_email_child|
|subcategory|case_study|
|subcategory|case_study_instance_layout|
|subcategory|case_study_listing|
|subcategory|discardable_stub|
|subcategory|imported_blog_post|
|subcategory|kb_404_page|
|subcategory|kb_article_instance_layout|
|subcategory|kb_listing|
|subcategory|kb_search_results|
|subcategory|kb_support_form|
|subcategory|landing_page|
|subcategory|legacy_blog_post|
|subcategory|legacy_page|
|subcategory|localtime|
|subcategory|manage_preferences_email|
|subcategory|marketing_single_send_api|
|subcategory|membership_email_verification|
|subcategory|membership_follow_up|
|subcategory|membership_otp_login|
|subcategory|membership_password_reset|
|subcategory|membership_password_saved|
|subcategory|membership_passwordless_auth|
|subcategory|membership_registration|
|subcategory|membership_registration_follow_up|
|subcategory|membership_verification|
|subcategory|normal_blog_post|
|subcategory|optin_email|
|subcategory|optin_followup_email|
|subcategory|page_instance_layout|
|subcategory|page_stub|
|subcategory|performable_landing_page|
|subcategory|performable_landing_page_cutover|
|subcategory|podcast_instance_layout|
|subcategory|podcast_listing|
|subcategory|portal_content|
|subcategory|resubscribe_confirmation_email|
|subcategory|resubscribe_email|
|subcategory|rss_to_email|
|subcategory|rss_to_email_child|
|subcategory|scp_instance_layout_page|
|subcategory|scp_static_page|
|subcategory|single_send_api|
|subcategory|site_page|
|subcategory|smtp_token|
|subcategory|staged_page|
|subcategory|ticket_closed_kickback_email|
|subcategory|ticket_opened_kickback_email|
|subcategory|ticket_pipeline_automated|
|subcategory|UNKNOWN|
|subcategory|unsubscribe_confirmation_email|
|subcategory|web_interactive|

<h2 id="tocS_EmailStatisticInterval">EmailStatisticInterval</h2>
<!-- backwards compatibility -->
<a id="schemaemailstatisticinterval"></a>
<a id="schema_EmailStatisticInterval"></a>
<a id="tocSemailstatisticinterval"></a>
<a id="tocsemailstatisticinterval"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregations|[EmailStatisticsData](#schemaemailstatisticsdata)|true|none|none|
|interval|[Interval](#schemainterval)|true|none|none|

<h2 id="tocS_EmailStatisticsData">EmailStatisticsData</h2>
<!-- backwards compatibility -->
<a id="schemaemailstatisticsdata"></a>
<a id="schema_EmailStatisticsData"></a>
<a id="tocSemailstatisticsdata"></a>
<a id="tocsemailstatisticsdata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counters|object|true|none|Counters like number of `sent`, `open` or `delivered`.|
|deviceBreakdown|object|true|none|Statistics by device.|
|qualifierStats|object|true|none|Number of emails that were dropped and bounced.|
|ratios|object|true|none|Ratios like `openratio` or `clickratio`|

<h2 id="tocS_EmailUpdateRequest">EmailUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemailupdaterequest"></a>
<a id="schema_EmailUpdateRequest"></a>
<a id="tocSemailupdaterequest"></a>
<a id="tocsemailupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDomain|string|false|none|The active domain of the email.|
|archived|boolean|false|none|Determines if the email is archived or not.|
|businessUnitId|integer(int64)|false|none|The ID of the business unit associated with the email.|
|campaign|string|false|none|The ID of the campaign this email is associated to.|
|content|[PublicEmailContent](#schemapublicemailcontent)|false|none|none|
|folderIdV2|integer(int64)|false|none|The ID of the folder where the email will be stored.|
|from|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|none|
|jitterSendTime|boolean|false|none|Determines whether the email send time should be randomized to avoid sending all emails at the exact same time.|
|language|string|false|none|The language code for the email, such as 'en' for English.|
|name|string|false|none|The name of the email, as displayed on the email dashboard.|
|publishDate|string(date-time)|false|none|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|rssData|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|none|
|sendOnPublish|boolean|false|none|Determines whether the email will be sent immediately on publish.|
|state|string|false|none|The email state.|
|subcategory|string|false|none|The email subcategory.|
|subject|string|false|none|The subject of the email.|
|subscriptionDetails|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|none|
|testing|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|none|
|to|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|none|
|webversion|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|aa|
|language|ab|
|language|ae|
|language|af|
|language|af-na|
|language|af-za|
|language|agq|
|language|agq-cm|
|language|ak|
|language|ak-gh|
|language|am|
|language|am-et|
|language|an|
|language|ann|
|language|ann-ng|
|language|ar|
|language|ar-001|
|language|ar-ae|
|language|ar-bh|
|language|ar-dj|
|language|ar-dz|
|language|ar-eg|
|language|ar-eh|
|language|ar-er|
|language|ar-il|
|language|ar-iq|
|language|ar-jo|
|language|ar-km|
|language|ar-kw|
|language|ar-lb|
|language|ar-ly|
|language|ar-ma|
|language|ar-mr|
|language|ar-om|
|language|ar-ps|
|language|ar-qa|
|language|ar-sa|
|language|ar-sd|
|language|ar-so|
|language|ar-ss|
|language|ar-sy|
|language|ar-td|
|language|ar-tn|
|language|ar-ye|
|language|as|
|language|as-in|
|language|asa|
|language|asa-tz|
|language|ast|
|language|ast-es|
|language|av|
|language|ay|
|language|az|
|language|az-az|
|language|ba|
|language|bal|
|language|bal-pk|
|language|bas|
|language|bas-cm|
|language|be|
|language|be-by|
|language|bem|
|language|bem-zm|
|language|bez|
|language|bez-tz|
|language|bg|
|language|bg-bg|
|language|bgc|
|language|bgc-in|
|language|bho|
|language|bho-in|
|language|bi|
|language|blo|
|language|blo-bj|
|language|bm|
|language|bm-ml|
|language|bn|
|language|bn-bd|
|language|bn-in|
|language|bo|
|language|bo-cn|
|language|bo-in|
|language|br|
|language|br-fr|
|language|brx|
|language|brx-in|
|language|bs|
|language|bs-ba|
|language|ca|
|language|ca-ad|
|language|ca-es|
|language|ca-fr|
|language|ca-it|
|language|ccp|
|language|ccp-bd|
|language|ccp-in|
|language|ce|
|language|ce-ru|
|language|ceb|
|language|ceb-ph|
|language|cgg|
|language|cgg-ug|
|language|ch|
|language|chr|
|language|chr-us|
|language|ckb|
|language|ckb-iq|
|language|ckb-ir|
|language|co|
|language|cr|
|language|cs|
|language|cs-cz|
|language|csw|
|language|csw-ca|
|language|cu|
|language|cu-ru|
|language|cv|
|language|cv-ru|
|language|cy|
|language|cy-gb|
|language|da|
|language|da-dk|
|language|da-gl|
|language|dav|
|language|dav-ke|
|language|de|
|language|de-at|
|language|de-be|
|language|de-ch|
|language|de-de|
|language|de-gr|
|language|de-it|
|language|de-li|
|language|de-lu|
|language|dje|
|language|dje-ne|
|language|doi|
|language|doi-in|
|language|dsb|
|language|dsb-de|
|language|dua|
|language|dua-cm|
|language|dv|
|language|dyo|
|language|dyo-sn|
|language|dz|
|language|dz-bt|
|language|ebu|
|language|ebu-ke|
|language|ee|
|language|ee-gh|
|language|ee-tg|
|language|el|
|language|el-cy|
|language|el-gr|
|language|en|
|language|en-001|
|language|en-150|
|language|en-ae|
|language|en-ag|
|language|en-ai|
|language|en-as|
|language|en-at|
|language|en-au|
|language|en-bb|
|language|en-be|
|language|en-bi|
|language|en-bm|
|language|en-bs|
|language|en-bw|
|language|en-bz|
|language|en-ca|
|language|en-cc|
|language|en-ch|
|language|en-ck|
|language|en-cm|
|language|en-cn|
|language|en-cx|
|language|en-cy|
|language|en-cz|
|language|en-de|
|language|en-dg|
|language|en-dk|
|language|en-dm|
|language|en-ee|
|language|en-eg|
|language|en-er|
|language|en-es|
|language|en-fi|
|language|en-fj|
|language|en-fk|
|language|en-fm|
|language|en-fr|
|language|en-gb|
|language|en-gd|
|language|en-gg|
|language|en-gh|
|language|en-gi|
|language|en-gm|
|language|en-gs|
|language|en-gu|
|language|en-gy|
|language|en-hk|
|language|en-hu|
|language|en-id|
|language|en-ie|
|language|en-il|
|language|en-im|
|language|en-in|
|language|en-io|
|language|en-it|
|language|en-je|
|language|en-jm|
|language|en-ke|
|language|en-ki|
|language|en-kn|
|language|en-ky|
|language|en-lc|
|language|en-lr|
|language|en-ls|
|language|en-lu|
|language|en-mg|
|language|en-mh|
|language|en-mo|
|language|en-mp|
|language|en-ms|
|language|en-mt|
|language|en-mu|
|language|en-mv|
|language|en-mw|
|language|en-mx|
|language|en-my|
|language|en-na|
|language|en-nf|
|language|en-ng|
|language|en-nl|
|language|en-no|
|language|en-nr|
|language|en-nu|
|language|en-nz|
|language|en-pg|
|language|en-ph|
|language|en-pk|
|language|en-pl|
|language|en-pn|
|language|en-pr|
|language|en-pt|
|language|en-pw|
|language|en-ro|
|language|en-rw|
|language|en-sb|
|language|en-sc|
|language|en-sd|
|language|en-se|
|language|en-sg|
|language|en-sh|
|language|en-si|
|language|en-sk|
|language|en-sl|
|language|en-ss|
|language|en-sx|
|language|en-sz|
|language|en-tc|
|language|en-th|
|language|en-tk|
|language|en-tn|
|language|en-to|
|language|en-tt|
|language|en-tv|
|language|en-tz|
|language|en-ug|
|language|en-um|
|language|en-us|
|language|en-vc|
|language|en-vg|
|language|en-vi|
|language|en-vn|
|language|en-vu|
|language|en-ws|
|language|en-za|
|language|en-zm|
|language|en-zw|
|language|eo|
|language|eo-001|
|language|es|
|language|es-419|
|language|es-ar|
|language|es-bo|
|language|es-br|
|language|es-bz|
|language|es-cl|
|language|es-co|
|language|es-cr|
|language|es-cu|
|language|es-do|
|language|es-ea|
|language|es-ec|
|language|es-es|
|language|es-gq|
|language|es-gt|
|language|es-hn|
|language|es-ic|
|language|es-mx|
|language|es-ni|
|language|es-pa|
|language|es-pe|
|language|es-ph|
|language|es-pr|
|language|es-py|
|language|es-sv|
|language|es-us|
|language|es-uy|
|language|es-ve|
|language|et|
|language|et-ee|
|language|eu|
|language|eu-es|
|language|ewo|
|language|ewo-cm|
|language|fa|
|language|fa-af|
|language|fa-ir|
|language|ff|
|language|ff-bf|
|language|ff-cm|
|language|ff-gh|
|language|ff-gm|
|language|ff-gn|
|language|ff-gw|
|language|ff-lr|
|language|ff-mr|
|language|ff-ne|
|language|ff-ng|
|language|ff-sl|
|language|ff-sn|
|language|fi|
|language|fi-fi|
|language|fil|
|language|fil-ph|
|language|fj|
|language|fo|
|language|fo-dk|
|language|fo-fo|
|language|fr|
|language|fr-be|
|language|fr-bf|
|language|fr-bi|
|language|fr-bj|
|language|fr-bl|
|language|fr-ca|
|language|fr-cd|
|language|fr-cf|
|language|fr-cg|
|language|fr-ch|
|language|fr-ci|
|language|fr-cm|
|language|fr-dj|
|language|fr-dz|
|language|fr-fr|
|language|fr-ga|
|language|fr-gf|
|language|fr-gn|
|language|fr-gp|
|language|fr-gq|
|language|fr-ht|
|language|fr-km|
|language|fr-lu|
|language|fr-ma|
|language|fr-mc|
|language|fr-mf|
|language|fr-mg|
|language|fr-ml|
|language|fr-mq|
|language|fr-mr|
|language|fr-mu|
|language|fr-nc|
|language|fr-ne|
|language|fr-pf|
|language|fr-pm|
|language|fr-re|
|language|fr-rw|
|language|fr-sc|
|language|fr-sn|
|language|fr-sy|
|language|fr-td|
|language|fr-tg|
|language|fr-tn|
|language|fr-vu|
|language|fr-wf|
|language|fr-yt|
|language|frr|
|language|frr-de|
|language|fur|
|language|fur-it|
|language|fy|
|language|fy-nl|
|language|ga|
|language|ga-gb|
|language|ga-ie|
|language|gaa|
|language|gaa-gh|
|language|gd|
|language|gd-gb|
|language|gl|
|language|gl-es|
|language|gn|
|language|gsw|
|language|gsw-ch|
|language|gsw-fr|
|language|gsw-li|
|language|gu|
|language|gu-in|
|language|guz|
|language|guz-ke|
|language|gv|
|language|gv-im|
|language|ha|
|language|ha-gh|
|language|ha-ne|
|language|ha-ng|
|language|haw|
|language|haw-us|
|language|he|
|language|he-il|
|language|hi|
|language|hi-in|
|language|hmn|
|language|ho|
|language|hr|
|language|hr-ba|
|language|hr-hr|
|language|hsb|
|language|hsb-de|
|language|ht|
|language|ht-ht|
|language|hu|
|language|hu-hu|
|language|hy|
|language|hy-am|
|language|hz|
|language|ia|
|language|ia-001|
|language|id|
|language|id-id|
|language|ie|
|language|ie-ee|
|language|ig|
|language|ig-ng|
|language|ii|
|language|ii-cn|
|language|ik|
|language|io|
|language|is|
|language|is-is|
|language|it|
|language|it-ch|
|language|it-it|
|language|it-sm|
|language|it-va|
|language|iu|
|language|ja|
|language|ja-jp|
|language|jgo|
|language|jgo-cm|
|language|jmc|
|language|jmc-tz|
|language|jv|
|language|jv-id|
|language|ka|
|language|ka-ge|
|language|kab|
|language|kab-dz|
|language|kam|
|language|kam-ke|
|language|kar|
|language|kde|
|language|kde-tz|
|language|kea|
|language|kea-cv|
|language|kg|
|language|kgp|
|language|kgp-br|
|language|kh|
|language|khq|
|language|khq-ml|
|language|ki|
|language|ki-ke|
|language|kj|
|language|kk|
|language|kk-kz|
|language|kkj|
|language|kkj-cm|
|language|kl|
|language|kl-gl|
|language|kln|
|language|kln-ke|
|language|km|
|language|km-kh|
|language|kn|
|language|kn-in|
|language|ko|
|language|ko-cn|
|language|ko-kp|
|language|ko-kr|
|language|kok|
|language|kok-in|
|language|kr|
|language|ks|
|language|ks-in|
|language|ksb|
|language|ksb-tz|
|language|ksf|
|language|ksf-cm|
|language|ksh|
|language|ksh-de|
|language|ku|
|language|ku-tr|
|language|kv|
|language|kw|
|language|kw-gb|
|language|kxv|
|language|kxv-in|
|language|ky|
|language|ky-kg|
|language|la|
|language|lag|
|language|lag-tz|
|language|lb|
|language|lb-lu|
|language|lg|
|language|lg-ug|
|language|li|
|language|lij|
|language|lij-it|
|language|lkt|
|language|lkt-us|
|language|lmo|
|language|lmo-it|
|language|ln|
|language|ln-ao|
|language|ln-cd|
|language|ln-cf|
|language|ln-cg|
|language|lo|
|language|lo-la|
|language|lrc|
|language|lrc-iq|
|language|lrc-ir|
|language|lt|
|language|lt-lt|
|language|lu|
|language|lu-cd|
|language|luo|
|language|luo-ke|
|language|luy|
|language|luy-ke|
|language|lv|
|language|lv-lv|
|language|mai|
|language|mai-in|
|language|mas|
|language|mas-ke|
|language|mas-tz|
|language|mdf|
|language|mdf-ru|
|language|mer|
|language|mer-ke|
|language|mfe|
|language|mfe-mu|
|language|mg|
|language|mg-mg|
|language|mgh|
|language|mgh-mz|
|language|mgo|
|language|mgo-cm|
|language|mh|
|language|mi|
|language|mi-nz|
|language|mk|
|language|mk-mk|
|language|ml|
|language|ml-in|
|language|mn|
|language|mn-mn|
|language|mni|
|language|mni-in|
|language|mr|
|language|mr-in|
|language|ms|
|language|ms-bn|
|language|ms-id|
|language|ms-my|
|language|ms-sg|
|language|mt|
|language|mt-mt|
|language|mua|
|language|mua-cm|
|language|my|
|language|my-mm|
|language|mzn|
|language|mzn-ir|
|language|na|
|language|naq|
|language|naq-na|
|language|nb|
|language|nb-no|
|language|nb-sj|
|language|nd|
|language|nd-zw|
|language|nds|
|language|nds-de|
|language|nds-nl|
|language|ne|
|language|ne-in|
|language|ne-np|
|language|ng|
|language|nl|
|language|nl-aw|
|language|nl-be|
|language|nl-bq|
|language|nl-ch|
|language|nl-cw|
|language|nl-lu|
|language|nl-nl|
|language|nl-sr|
|language|nl-sx|
|language|nmg|
|language|nmg-cm|
|language|nn|
|language|nn-no|
|language|nnh|
|language|nnh-cm|
|language|no|
|language|no-no|
|language|nqo|
|language|nqo-gn|
|language|nr|
|language|nso|
|language|nso-za|
|language|nus|
|language|nus-ss|
|language|nv|
|language|ny|
|language|nyn|
|language|nyn-ug|
|language|oc|
|language|oc-es|
|language|oc-fr|
|language|oj|
|language|om|
|language|om-et|
|language|om-ke|
|language|or|
|language|or-in|
|language|os|
|language|os-ge|
|language|os-ru|
|language|pa|
|language|pa-in|
|language|pa-pk|
|language|pcm|
|language|pcm-ng|
|language|pi|
|language|pis|
|language|pis-sb|
|language|pl|
|language|pl-pl|
|language|prg|
|language|prg-001|
|language|ps|
|language|ps-af|
|language|ps-pk|
|language|pt|
|language|pt-ao|
|language|pt-br|
|language|pt-ch|
|language|pt-cv|
|language|pt-gq|
|language|pt-gw|
|language|pt-lu|
|language|pt-mo|
|language|pt-mz|
|language|pt-pt|
|language|pt-st|
|language|pt-tl|
|language|qu|
|language|qu-bo|
|language|qu-ec|
|language|qu-pe|
|language|raj|
|language|raj-in|
|language|rm|
|language|rm-ch|
|language|rn|
|language|rn-bi|
|language|ro|
|language|ro-md|
|language|ro-ro|
|language|rof|
|language|rof-tz|
|language|ru|
|language|ru-by|
|language|ru-kg|
|language|ru-kz|
|language|ru-md|
|language|ru-ru|
|language|ru-ua|
|language|rw|
|language|rw-rw|
|language|rwk|
|language|rwk-tz|
|language|sa|
|language|sa-in|
|language|sah|
|language|sah-ru|
|language|saq|
|language|saq-ke|
|language|sat|
|language|sat-in|
|language|sbp|
|language|sbp-tz|
|language|sc|
|language|sc-it|
|language|sd|
|language|sd-in|
|language|sd-pk|
|language|se|
|language|se-fi|
|language|se-no|
|language|se-se|
|language|seh|
|language|seh-mz|
|language|ses|
|language|ses-ml|
|language|sg|
|language|sg-cf|
|language|shi|
|language|shi-ma|
|language|si|
|language|si-lk|
|language|sk|
|language|sk-sk|
|language|sl|
|language|sl-si|
|language|sm|
|language|smn|
|language|smn-fi|
|language|sms|
|language|sms-fi|
|language|sn|
|language|sn-zw|
|language|so|
|language|so-dj|
|language|so-et|
|language|so-ke|
|language|so-so|
|language|sq|
|language|sq-al|
|language|sq-mk|
|language|sq-xk|
|language|sr|
|language|sr-ba|
|language|sr-cs|
|language|sr-me|
|language|sr-rs|
|language|sr-xk|
|language|ss|
|language|st|
|language|st-ls|
|language|st-za|
|language|su|
|language|su-id|
|language|sv|
|language|sv-ax|
|language|sv-fi|
|language|sv-se|
|language|sw|
|language|sw-cd|
|language|sw-ke|
|language|sw-tz|
|language|sw-ug|
|language|sy|
|language|syr|
|language|syr-iq|
|language|syr-sy|
|language|szl|
|language|szl-pl|
|language|ta|
|language|ta-in|
|language|ta-lk|
|language|ta-my|
|language|ta-sg|
|language|te|
|language|te-in|
|language|teo|
|language|teo-ke|
|language|teo-ug|
|language|tg|
|language|tg-tj|
|language|th|
|language|th-th|
|language|ti|
|language|ti-er|
|language|ti-et|
|language|tk|
|language|tk-tm|
|language|tl|
|language|tn|
|language|tn-bw|
|language|tn-za|
|language|to|
|language|to-to|
|language|tok|
|language|tok-001|
|language|tr|
|language|tr-cy|
|language|tr-tr|
|language|ts|
|language|tt|
|language|tt-ru|
|language|tw|
|language|twq|
|language|twq-ne|
|language|ty|
|language|tzm|
|language|tzm-ma|
|language|ug|
|language|ug-cn|
|language|uk|
|language|uk-ua|
|language|ur|
|language|ur-in|
|language|ur-pk|
|language|uz|
|language|uz-af|
|language|uz-uz|
|language|vai|
|language|vai-lr|
|language|ve|
|language|vec|
|language|vec-it|
|language|vi|
|language|vi-vn|
|language|vmw|
|language|vmw-mz|
|language|vo|
|language|vo-001|
|language|vun|
|language|vun-tz|
|language|wa|
|language|wae|
|language|wae-ch|
|language|wo|
|language|wo-sn|
|language|xh|
|language|xh-za|
|language|xnr|
|language|xnr-in|
|language|xog|
|language|xog-ug|
|language|yav|
|language|yav-cm|
|language|yi|
|language|yi-001|
|language|yi-ua|
|language|yo|
|language|yo-bj|
|language|yo-ng|
|language|yrl|
|language|yrl-br|
|language|yrl-co|
|language|yrl-ve|
|language|yue|
|language|yue-cn|
|language|yue-hk|
|language|yue-mo|
|language|za|
|language|za-cn|
|language|zgh|
|language|zgh-ma|
|language|zh|
|language|zh-cn|
|language|zh-hans|
|language|zh-hant|
|language|zh-hk|
|language|zh-mo|
|language|zh-my|
|language|zh-sg|
|language|zh-tw|
|language|zu|
|language|zu-za|
|state|AGENT_GENERATED|
|state|AUTOMATED|
|state|AUTOMATED_AB|
|state|AUTOMATED_AB_VARIANT|
|state|AUTOMATED_DRAFT|
|state|AUTOMATED_DRAFT_AB|
|state|AUTOMATED_DRAFT_ABVARIANT|
|state|AUTOMATED_FOR_FORM|
|state|AUTOMATED_FOR_FORM_BUFFER|
|state|AUTOMATED_FOR_FORM_DRAFT|
|state|AUTOMATED_FOR_FORM_LEGACY|
|state|AUTOMATED_LOSER_ABVARIANT|
|state|AUTOMATED_SENDING|
|state|BLOG_EMAIL_DRAFT|
|state|BLOG_EMAIL_PUBLISHED|
|state|DRAFT|
|state|DRAFT_AB|
|state|DRAFT_AB_VARIANT|
|state|ERROR|
|state|LOSER_AB_VARIANT|
|state|PAGE_STUB|
|state|PRE_PROCESSING|
|state|PROCESSING|
|state|PUBLISHED|
|state|PUBLISHED_AB|
|state|PUBLISHED_AB_VARIANT|
|state|PUBLISHED_OR_SCHEDULED|
|state|RSS_TO_EMAIL_DRAFT|
|state|RSS_TO_EMAIL_PUBLISHED|
|state|SCHEDULED|
|state|SCHEDULED_AB|
|state|SCHEDULED_OR_PUBLISHED|
|subcategory|ab_loser_variant|
|subcategory|ab_loser_variant_site_page|
|subcategory|ab_master|
|subcategory|ab_master_site_page|
|subcategory|ab_variant|
|subcategory|ab_variant_site_page|
|subcategory|automated|
|subcategory|automated_ab_master|
|subcategory|automated_ab_variant|
|subcategory|automated_for_crm|
|subcategory|automated_for_custom_survey|
|subcategory|automated_for_deal|
|subcategory|automated_for_feedback_ces|
|subcategory|automated_for_feedback_custom|
|subcategory|automated_for_feedback_nps|
|subcategory|automated_for_form|
|subcategory|automated_for_form_buffer|
|subcategory|automated_for_form_draft|
|subcategory|automated_for_form_legacy|
|subcategory|automated_for_leadflow|
|subcategory|automated_for_ticket|
|subcategory|batch|
|subcategory|blog_article_instance_layout|
|subcategory|blog_article_listing|
|subcategory|blog_author_detail|
|subcategory|blog_email|
|subcategory|blog_email_child|
|subcategory|case_study|
|subcategory|case_study_instance_layout|
|subcategory|case_study_listing|
|subcategory|discardable_stub|
|subcategory|imported_blog_post|
|subcategory|kb_404_page|
|subcategory|kb_article_instance_layout|
|subcategory|kb_listing|
|subcategory|kb_search_results|
|subcategory|kb_support_form|
|subcategory|landing_page|
|subcategory|legacy_blog_post|
|subcategory|legacy_page|
|subcategory|localtime|
|subcategory|manage_preferences_email|
|subcategory|marketing_single_send_api|
|subcategory|membership_email_verification|
|subcategory|membership_follow_up|
|subcategory|membership_otp_login|
|subcategory|membership_password_reset|
|subcategory|membership_password_saved|
|subcategory|membership_passwordless_auth|
|subcategory|membership_registration|
|subcategory|membership_registration_follow_up|
|subcategory|membership_verification|
|subcategory|normal_blog_post|
|subcategory|optin_email|
|subcategory|optin_followup_email|
|subcategory|page_instance_layout|
|subcategory|page_stub|
|subcategory|performable_landing_page|
|subcategory|performable_landing_page_cutover|
|subcategory|podcast_instance_layout|
|subcategory|podcast_listing|
|subcategory|portal_content|
|subcategory|resubscribe_confirmation_email|
|subcategory|resubscribe_email|
|subcategory|rss_to_email|
|subcategory|rss_to_email_child|
|subcategory|scp_instance_layout_page|
|subcategory|scp_static_page|
|subcategory|single_send_api|
|subcategory|site_page|
|subcategory|smtp_token|
|subcategory|staged_page|
|subcategory|ticket_closed_kickback_email|
|subcategory|ticket_opened_kickback_email|
|subcategory|ticket_pipeline_automated|
|subcategory|UNKNOWN|
|subcategory|unsubscribe_confirmation_email|
|subcategory|web_interactive|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(date-time)|true|none|The end timestamp of the interval, in ISO8601 format.|
|start|string(date-time)|true|none|The start timestamp of the interval, in ISO8601 format.|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|The cursor token value to get the next set of results. Use this value as query parameter (&after=...) to obtain the next page.|
|link|string|false|none|The link to the next page.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|The cursor token value to get the previous set of results. Use this value as query parameter (&before=...) to obtain the previous page.|
|link|string|false|none|The link to the previous page.|

<h2 id="tocS_PublicButtonStyleSettings">PublicButtonStyleSettings</h2>
<!-- backwards compatibility -->
<a id="schemapublicbuttonstylesettings"></a>
<a id="schema_PublicButtonStyleSettings"></a>
<a id="tocSpublicbuttonstylesettings"></a>
<a id="tocspublicbuttonstylesettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|object|false|none|An object representing the background color of the button.|
|cornerRadius|integer(int32)|false|none|An integer specifying the radius of the button's corners.|
|fontStyle|[PublicFontStyle](#schemapublicfontstyle)|false|none|none|

<h2 id="tocS_PublicDividerStyleSettings">PublicDividerStyleSettings</h2>
<!-- backwards compatibility -->
<a id="schemapublicdividerstylesettings"></a>
<a id="schema_PublicDividerStyleSettings"></a>
<a id="tocSpublicdividerstylesettings"></a>
<a id="tocspublicdividerstylesettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|object|false|none|An object representing the color settings of the divider.|
|height|integer(int32)|false|none|An integer representing the height of the divider.|
|lineType|string|false|none|A string indicating the type of line used for the divider.|

<h2 id="tocS_PublicEmail">PublicEmail</h2>
<!-- backwards compatibility -->
<a id="schemapublicemail"></a>
<a id="schema_PublicEmail"></a>
<a id="tocSpublicemail"></a>
<a id="tocspublicemail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeDomain|string|false|none|The active domain of the email.|
|allEmailCampaignIds|[string]|false|none|List of emailCampaignIds.|
|archived|boolean|false|none|Determines if the email is archived or not.|
|businessUnitId|string|false|none|The ID of the business unit associated with the email.|
|campaign|string|false|none|The ID of the campaign this email is associated to.|
|campaignName|string|false|none|The name of the campaign.|
|campaignUtm|string|false|none|The UTM parameters associated with the email's campaign.|
|clonedFrom|string|false|none|The ID of the email this email was cloned from.|
|content|[PublicEmailContent](#schemapublicemailcontent)|false|none|none|
|createdAt|string(date-time)|false|none|The date and time of the email's creation, in ISO8601 representation.|
|createdById|string|false|none|The id of the user who created the email.|
|deletedAt|string(date-time)|false|none|The date and time the email was deleted at, in ISO8601 representation.|
|emailCampaignGroupId|string|false|none|The ID of the email campaign group associated with the email.|
|emailTemplateMode|string|false|none|The mode of the email template, such as 'DESIGN_MANAGER' or 'DRAG_AND_DROP'.|
|feedbackSurveyId|string|false|none|The ID of the feedback survey linked to the email.|
|folderId|integer(int64)|false|none|Deprecated — this field is no longer functional. Use folderIdV2 instead.|
|folderIdV2|integer(int64)|false|none|The version 2 ID of the folder where the email is stored, as a 64-bit integer.|
|from|[PublicEmailFromDetails](#schemapublicemailfromdetails)|false|none|none|
|id|string|false|none|The email ID.|
|isAb|boolean|true|none|A boolean indicating whether the email is part of an A/B test.|
|isPublished|boolean|false|none|Returns the published status of the email. This is read only.|
|isTransactional|boolean|false|none|Returns whether the email is a transactional email or not. This is read only.|
|jitterSendTime|boolean|false|none|A boolean indicating whether to apply a jitter to the send time.|
|language|string|false|none|The language code of the email, following ISO 639-1 and ISO 3166-1 standards.|
|name|string|false|none|The name of the email, as displayed on the email dashboard.|
|previewKey|string|false|none|The preview key for the email.|
|primaryEmailCampaignId|string|false|none|The primary email campaign ID associated with the email.|
|publishDate|string(date-time)|false|none|The date and time the email is scheduled for, in ISO8601 representation. This is only used in local time or scheduled emails.|
|publishedAt|string(date-time)|false|none|The date and time the email was published at, in ISO8601 representation.|
|publishedByEmail|string|false|none|Email of the user who published/sent the email.|
|publishedById|string|false|none|The ID of the user who published the email.|
|publishedByName|string|false|none|Name of the user who published the email.|
|rssData|[PublicRssEmailDetails](#schemapublicrssemaildetails)|false|none|none|
|sendOnPublish|boolean|false|none|Determines whether the email will be sent immediately on publish.|
|state|string|false|none|The email state.|
|stats|[EmailStatisticsData](#schemaemailstatisticsdata)|false|none|none|
|subcategory|string|false|none|The email subcategory.|
|subject|string|false|none|The subject of the email.|
|subscriptionDetails|[PublicEmailSubscriptionDetails](#schemapublicemailsubscriptiondetails)|false|none|none|
|teamsWithAccess|[string]|false|none|An array of team IDs who have access to the email.|
|testing|[PublicEmailTestingDetails](#schemapublicemailtestingdetails)|false|none|none|
|to|[PublicEmailToDetails](#schemapublicemailtodetails)|false|none|none|
|type|string|false|none|The email type, this is derived from other properties on the email such as subcategory.|
|unpublishedAt|string(date-time)|false|none|The date and time when the email was unpublished, in ISO 8601 format.|
|updatedAt|string(date-time)|false|none|The date and time of the last update to the email, in ISO8601 representation.|
|updatedById|string|false|none|The id of the user who last updated the email.|
|usersWithAccess|[string]|false|none|An array of user IDs who have access to the email.|
|webversion|[PublicWebversionDetails](#schemapublicwebversiondetails)|false|none|none|
|workflowNames|[string]|false|none|Names of workflows in which the email is used within a "send email" action.|

#### Enumerated Values

|Property|Value|
|---|---|
|emailTemplateMode|DESIGN_MANAGER|
|emailTemplateMode|DRAG_AND_DROP|
|language|aa|
|language|ab|
|language|ae|
|language|af|
|language|af-na|
|language|af-za|
|language|agq|
|language|agq-cm|
|language|ak|
|language|ak-gh|
|language|am|
|language|am-et|
|language|an|
|language|ann|
|language|ann-ng|
|language|ar|
|language|ar-001|
|language|ar-ae|
|language|ar-bh|
|language|ar-dj|
|language|ar-dz|
|language|ar-eg|
|language|ar-eh|
|language|ar-er|
|language|ar-il|
|language|ar-iq|
|language|ar-jo|
|language|ar-km|
|language|ar-kw|
|language|ar-lb|
|language|ar-ly|
|language|ar-ma|
|language|ar-mr|
|language|ar-om|
|language|ar-ps|
|language|ar-qa|
|language|ar-sa|
|language|ar-sd|
|language|ar-so|
|language|ar-ss|
|language|ar-sy|
|language|ar-td|
|language|ar-tn|
|language|ar-ye|
|language|as|
|language|as-in|
|language|asa|
|language|asa-tz|
|language|ast|
|language|ast-es|
|language|av|
|language|ay|
|language|az|
|language|az-az|
|language|ba|
|language|bal|
|language|bal-pk|
|language|bas|
|language|bas-cm|
|language|be|
|language|be-by|
|language|bem|
|language|bem-zm|
|language|bez|
|language|bez-tz|
|language|bg|
|language|bg-bg|
|language|bgc|
|language|bgc-in|
|language|bho|
|language|bho-in|
|language|bi|
|language|blo|
|language|blo-bj|
|language|bm|
|language|bm-ml|
|language|bn|
|language|bn-bd|
|language|bn-in|
|language|bo|
|language|bo-cn|
|language|bo-in|
|language|br|
|language|br-fr|
|language|brx|
|language|brx-in|
|language|bs|
|language|bs-ba|
|language|ca|
|language|ca-ad|
|language|ca-es|
|language|ca-fr|
|language|ca-it|
|language|ccp|
|language|ccp-bd|
|language|ccp-in|
|language|ce|
|language|ce-ru|
|language|ceb|
|language|ceb-ph|
|language|cgg|
|language|cgg-ug|
|language|ch|
|language|chr|
|language|chr-us|
|language|ckb|
|language|ckb-iq|
|language|ckb-ir|
|language|co|
|language|cr|
|language|cs|
|language|cs-cz|
|language|csw|
|language|csw-ca|
|language|cu|
|language|cu-ru|
|language|cv|
|language|cv-ru|
|language|cy|
|language|cy-gb|
|language|da|
|language|da-dk|
|language|da-gl|
|language|dav|
|language|dav-ke|
|language|de|
|language|de-at|
|language|de-be|
|language|de-ch|
|language|de-de|
|language|de-gr|
|language|de-it|
|language|de-li|
|language|de-lu|
|language|dje|
|language|dje-ne|
|language|doi|
|language|doi-in|
|language|dsb|
|language|dsb-de|
|language|dua|
|language|dua-cm|
|language|dv|
|language|dyo|
|language|dyo-sn|
|language|dz|
|language|dz-bt|
|language|ebu|
|language|ebu-ke|
|language|ee|
|language|ee-gh|
|language|ee-tg|
|language|el|
|language|el-cy|
|language|el-gr|
|language|en|
|language|en-001|
|language|en-150|
|language|en-ae|
|language|en-ag|
|language|en-ai|
|language|en-as|
|language|en-at|
|language|en-au|
|language|en-bb|
|language|en-be|
|language|en-bi|
|language|en-bm|
|language|en-bs|
|language|en-bw|
|language|en-bz|
|language|en-ca|
|language|en-cc|
|language|en-ch|
|language|en-ck|
|language|en-cm|
|language|en-cn|
|language|en-cx|
|language|en-cy|
|language|en-cz|
|language|en-de|
|language|en-dg|
|language|en-dk|
|language|en-dm|
|language|en-ee|
|language|en-eg|
|language|en-er|
|language|en-es|
|language|en-fi|
|language|en-fj|
|language|en-fk|
|language|en-fm|
|language|en-fr|
|language|en-gb|
|language|en-gd|
|language|en-gg|
|language|en-gh|
|language|en-gi|
|language|en-gm|
|language|en-gs|
|language|en-gu|
|language|en-gy|
|language|en-hk|
|language|en-hu|
|language|en-id|
|language|en-ie|
|language|en-il|
|language|en-im|
|language|en-in|
|language|en-io|
|language|en-it|
|language|en-je|
|language|en-jm|
|language|en-ke|
|language|en-ki|
|language|en-kn|
|language|en-ky|
|language|en-lc|
|language|en-lr|
|language|en-ls|
|language|en-lu|
|language|en-mg|
|language|en-mh|
|language|en-mo|
|language|en-mp|
|language|en-ms|
|language|en-mt|
|language|en-mu|
|language|en-mv|
|language|en-mw|
|language|en-mx|
|language|en-my|
|language|en-na|
|language|en-nf|
|language|en-ng|
|language|en-nl|
|language|en-no|
|language|en-nr|
|language|en-nu|
|language|en-nz|
|language|en-pg|
|language|en-ph|
|language|en-pk|
|language|en-pl|
|language|en-pn|
|language|en-pr|
|language|en-pt|
|language|en-pw|
|language|en-ro|
|language|en-rw|
|language|en-sb|
|language|en-sc|
|language|en-sd|
|language|en-se|
|language|en-sg|
|language|en-sh|
|language|en-si|
|language|en-sk|
|language|en-sl|
|language|en-ss|
|language|en-sx|
|language|en-sz|
|language|en-tc|
|language|en-th|
|language|en-tk|
|language|en-tn|
|language|en-to|
|language|en-tt|
|language|en-tv|
|language|en-tz|
|language|en-ug|
|language|en-um|
|language|en-us|
|language|en-vc|
|language|en-vg|
|language|en-vi|
|language|en-vn|
|language|en-vu|
|language|en-ws|
|language|en-za|
|language|en-zm|
|language|en-zw|
|language|eo|
|language|eo-001|
|language|es|
|language|es-419|
|language|es-ar|
|language|es-bo|
|language|es-br|
|language|es-bz|
|language|es-cl|
|language|es-co|
|language|es-cr|
|language|es-cu|
|language|es-do|
|language|es-ea|
|language|es-ec|
|language|es-es|
|language|es-gq|
|language|es-gt|
|language|es-hn|
|language|es-ic|
|language|es-mx|
|language|es-ni|
|language|es-pa|
|language|es-pe|
|language|es-ph|
|language|es-pr|
|language|es-py|
|language|es-sv|
|language|es-us|
|language|es-uy|
|language|es-ve|
|language|et|
|language|et-ee|
|language|eu|
|language|eu-es|
|language|ewo|
|language|ewo-cm|
|language|fa|
|language|fa-af|
|language|fa-ir|
|language|ff|
|language|ff-bf|
|language|ff-cm|
|language|ff-gh|
|language|ff-gm|
|language|ff-gn|
|language|ff-gw|
|language|ff-lr|
|language|ff-mr|
|language|ff-ne|
|language|ff-ng|
|language|ff-sl|
|language|ff-sn|
|language|fi|
|language|fi-fi|
|language|fil|
|language|fil-ph|
|language|fj|
|language|fo|
|language|fo-dk|
|language|fo-fo|
|language|fr|
|language|fr-be|
|language|fr-bf|
|language|fr-bi|
|language|fr-bj|
|language|fr-bl|
|language|fr-ca|
|language|fr-cd|
|language|fr-cf|
|language|fr-cg|
|language|fr-ch|
|language|fr-ci|
|language|fr-cm|
|language|fr-dj|
|language|fr-dz|
|language|fr-fr|
|language|fr-ga|
|language|fr-gf|
|language|fr-gn|
|language|fr-gp|
|language|fr-gq|
|language|fr-ht|
|language|fr-km|
|language|fr-lu|
|language|fr-ma|
|language|fr-mc|
|language|fr-mf|
|language|fr-mg|
|language|fr-ml|
|language|fr-mq|
|language|fr-mr|
|language|fr-mu|
|language|fr-nc|
|language|fr-ne|
|language|fr-pf|
|language|fr-pm|
|language|fr-re|
|language|fr-rw|
|language|fr-sc|
|language|fr-sn|
|language|fr-sy|
|language|fr-td|
|language|fr-tg|
|language|fr-tn|
|language|fr-vu|
|language|fr-wf|
|language|fr-yt|
|language|frr|
|language|frr-de|
|language|fur|
|language|fur-it|
|language|fy|
|language|fy-nl|
|language|ga|
|language|ga-gb|
|language|ga-ie|
|language|gaa|
|language|gaa-gh|
|language|gd|
|language|gd-gb|
|language|gl|
|language|gl-es|
|language|gn|
|language|gsw|
|language|gsw-ch|
|language|gsw-fr|
|language|gsw-li|
|language|gu|
|language|gu-in|
|language|guz|
|language|guz-ke|
|language|gv|
|language|gv-im|
|language|ha|
|language|ha-gh|
|language|ha-ne|
|language|ha-ng|
|language|haw|
|language|haw-us|
|language|he|
|language|he-il|
|language|hi|
|language|hi-in|
|language|hmn|
|language|ho|
|language|hr|
|language|hr-ba|
|language|hr-hr|
|language|hsb|
|language|hsb-de|
|language|ht|
|language|ht-ht|
|language|hu|
|language|hu-hu|
|language|hy|
|language|hy-am|
|language|hz|
|language|ia|
|language|ia-001|
|language|id|
|language|id-id|
|language|ie|
|language|ie-ee|
|language|ig|
|language|ig-ng|
|language|ii|
|language|ii-cn|
|language|ik|
|language|io|
|language|is|
|language|is-is|
|language|it|
|language|it-ch|
|language|it-it|
|language|it-sm|
|language|it-va|
|language|iu|
|language|ja|
|language|ja-jp|
|language|jgo|
|language|jgo-cm|
|language|jmc|
|language|jmc-tz|
|language|jv|
|language|jv-id|
|language|ka|
|language|ka-ge|
|language|kab|
|language|kab-dz|
|language|kam|
|language|kam-ke|
|language|kar|
|language|kde|
|language|kde-tz|
|language|kea|
|language|kea-cv|
|language|kg|
|language|kgp|
|language|kgp-br|
|language|kh|
|language|khq|
|language|khq-ml|
|language|ki|
|language|ki-ke|
|language|kj|
|language|kk|
|language|kk-kz|
|language|kkj|
|language|kkj-cm|
|language|kl|
|language|kl-gl|
|language|kln|
|language|kln-ke|
|language|km|
|language|km-kh|
|language|kn|
|language|kn-in|
|language|ko|
|language|ko-cn|
|language|ko-kp|
|language|ko-kr|
|language|kok|
|language|kok-in|
|language|kr|
|language|ks|
|language|ks-in|
|language|ksb|
|language|ksb-tz|
|language|ksf|
|language|ksf-cm|
|language|ksh|
|language|ksh-de|
|language|ku|
|language|ku-tr|
|language|kv|
|language|kw|
|language|kw-gb|
|language|kxv|
|language|kxv-in|
|language|ky|
|language|ky-kg|
|language|la|
|language|lag|
|language|lag-tz|
|language|lb|
|language|lb-lu|
|language|lg|
|language|lg-ug|
|language|li|
|language|lij|
|language|lij-it|
|language|lkt|
|language|lkt-us|
|language|lmo|
|language|lmo-it|
|language|ln|
|language|ln-ao|
|language|ln-cd|
|language|ln-cf|
|language|ln-cg|
|language|lo|
|language|lo-la|
|language|lrc|
|language|lrc-iq|
|language|lrc-ir|
|language|lt|
|language|lt-lt|
|language|lu|
|language|lu-cd|
|language|luo|
|language|luo-ke|
|language|luy|
|language|luy-ke|
|language|lv|
|language|lv-lv|
|language|mai|
|language|mai-in|
|language|mas|
|language|mas-ke|
|language|mas-tz|
|language|mdf|
|language|mdf-ru|
|language|mer|
|language|mer-ke|
|language|mfe|
|language|mfe-mu|
|language|mg|
|language|mg-mg|
|language|mgh|
|language|mgh-mz|
|language|mgo|
|language|mgo-cm|
|language|mh|
|language|mi|
|language|mi-nz|
|language|mk|
|language|mk-mk|
|language|ml|
|language|ml-in|
|language|mn|
|language|mn-mn|
|language|mni|
|language|mni-in|
|language|mr|
|language|mr-in|
|language|ms|
|language|ms-bn|
|language|ms-id|
|language|ms-my|
|language|ms-sg|
|language|mt|
|language|mt-mt|
|language|mua|
|language|mua-cm|
|language|my|
|language|my-mm|
|language|mzn|
|language|mzn-ir|
|language|na|
|language|naq|
|language|naq-na|
|language|nb|
|language|nb-no|
|language|nb-sj|
|language|nd|
|language|nd-zw|
|language|nds|
|language|nds-de|
|language|nds-nl|
|language|ne|
|language|ne-in|
|language|ne-np|
|language|ng|
|language|nl|
|language|nl-aw|
|language|nl-be|
|language|nl-bq|
|language|nl-ch|
|language|nl-cw|
|language|nl-lu|
|language|nl-nl|
|language|nl-sr|
|language|nl-sx|
|language|nmg|
|language|nmg-cm|
|language|nn|
|language|nn-no|
|language|nnh|
|language|nnh-cm|
|language|no|
|language|no-no|
|language|nqo|
|language|nqo-gn|
|language|nr|
|language|nso|
|language|nso-za|
|language|nus|
|language|nus-ss|
|language|nv|
|language|ny|
|language|nyn|
|language|nyn-ug|
|language|oc|
|language|oc-es|
|language|oc-fr|
|language|oj|
|language|om|
|language|om-et|
|language|om-ke|
|language|or|
|language|or-in|
|language|os|
|language|os-ge|
|language|os-ru|
|language|pa|
|language|pa-in|
|language|pa-pk|
|language|pcm|
|language|pcm-ng|
|language|pi|
|language|pis|
|language|pis-sb|
|language|pl|
|language|pl-pl|
|language|prg|
|language|prg-001|
|language|ps|
|language|ps-af|
|language|ps-pk|
|language|pt|
|language|pt-ao|
|language|pt-br|
|language|pt-ch|
|language|pt-cv|
|language|pt-gq|
|language|pt-gw|
|language|pt-lu|
|language|pt-mo|
|language|pt-mz|
|language|pt-pt|
|language|pt-st|
|language|pt-tl|
|language|qu|
|language|qu-bo|
|language|qu-ec|
|language|qu-pe|
|language|raj|
|language|raj-in|
|language|rm|
|language|rm-ch|
|language|rn|
|language|rn-bi|
|language|ro|
|language|ro-md|
|language|ro-ro|
|language|rof|
|language|rof-tz|
|language|ru|
|language|ru-by|
|language|ru-kg|
|language|ru-kz|
|language|ru-md|
|language|ru-ru|
|language|ru-ua|
|language|rw|
|language|rw-rw|
|language|rwk|
|language|rwk-tz|
|language|sa|
|language|sa-in|
|language|sah|
|language|sah-ru|
|language|saq|
|language|saq-ke|
|language|sat|
|language|sat-in|
|language|sbp|
|language|sbp-tz|
|language|sc|
|language|sc-it|
|language|sd|
|language|sd-in|
|language|sd-pk|
|language|se|
|language|se-fi|
|language|se-no|
|language|se-se|
|language|seh|
|language|seh-mz|
|language|ses|
|language|ses-ml|
|language|sg|
|language|sg-cf|
|language|shi|
|language|shi-ma|
|language|si|
|language|si-lk|
|language|sk|
|language|sk-sk|
|language|sl|
|language|sl-si|
|language|sm|
|language|smn|
|language|smn-fi|
|language|sms|
|language|sms-fi|
|language|sn|
|language|sn-zw|
|language|so|
|language|so-dj|
|language|so-et|
|language|so-ke|
|language|so-so|
|language|sq|
|language|sq-al|
|language|sq-mk|
|language|sq-xk|
|language|sr|
|language|sr-ba|
|language|sr-cs|
|language|sr-me|
|language|sr-rs|
|language|sr-xk|
|language|ss|
|language|st|
|language|st-ls|
|language|st-za|
|language|su|
|language|su-id|
|language|sv|
|language|sv-ax|
|language|sv-fi|
|language|sv-se|
|language|sw|
|language|sw-cd|
|language|sw-ke|
|language|sw-tz|
|language|sw-ug|
|language|sy|
|language|syr|
|language|syr-iq|
|language|syr-sy|
|language|szl|
|language|szl-pl|
|language|ta|
|language|ta-in|
|language|ta-lk|
|language|ta-my|
|language|ta-sg|
|language|te|
|language|te-in|
|language|teo|
|language|teo-ke|
|language|teo-ug|
|language|tg|
|language|tg-tj|
|language|th|
|language|th-th|
|language|ti|
|language|ti-er|
|language|ti-et|
|language|tk|
|language|tk-tm|
|language|tl|
|language|tn|
|language|tn-bw|
|language|tn-za|
|language|to|
|language|to-to|
|language|tok|
|language|tok-001|
|language|tr|
|language|tr-cy|
|language|tr-tr|
|language|ts|
|language|tt|
|language|tt-ru|
|language|tw|
|language|twq|
|language|twq-ne|
|language|ty|
|language|tzm|
|language|tzm-ma|
|language|ug|
|language|ug-cn|
|language|uk|
|language|uk-ua|
|language|ur|
|language|ur-in|
|language|ur-pk|
|language|uz|
|language|uz-af|
|language|uz-uz|
|language|vai|
|language|vai-lr|
|language|ve|
|language|vec|
|language|vec-it|
|language|vi|
|language|vi-vn|
|language|vmw|
|language|vmw-mz|
|language|vo|
|language|vo-001|
|language|vun|
|language|vun-tz|
|language|wa|
|language|wae|
|language|wae-ch|
|language|wo|
|language|wo-sn|
|language|xh|
|language|xh-za|
|language|xnr|
|language|xnr-in|
|language|xog|
|language|xog-ug|
|language|yav|
|language|yav-cm|
|language|yi|
|language|yi-001|
|language|yi-ua|
|language|yo|
|language|yo-bj|
|language|yo-ng|
|language|yrl|
|language|yrl-br|
|language|yrl-co|
|language|yrl-ve|
|language|yue|
|language|yue-cn|
|language|yue-hk|
|language|yue-mo|
|language|za|
|language|za-cn|
|language|zgh|
|language|zgh-ma|
|language|zh|
|language|zh-cn|
|language|zh-hans|
|language|zh-hant|
|language|zh-hk|
|language|zh-mo|
|language|zh-my|
|language|zh-sg|
|language|zh-tw|
|language|zu|
|language|zu-za|
|state|AGENT_GENERATED|
|state|AUTOMATED|
|state|AUTOMATED_AB|
|state|AUTOMATED_AB_VARIANT|
|state|AUTOMATED_DRAFT|
|state|AUTOMATED_DRAFT_AB|
|state|AUTOMATED_DRAFT_ABVARIANT|
|state|AUTOMATED_FOR_FORM|
|state|AUTOMATED_FOR_FORM_BUFFER|
|state|AUTOMATED_FOR_FORM_DRAFT|
|state|AUTOMATED_FOR_FORM_LEGACY|
|state|AUTOMATED_LOSER_ABVARIANT|
|state|AUTOMATED_SENDING|
|state|BLOG_EMAIL_DRAFT|
|state|BLOG_EMAIL_PUBLISHED|
|state|DRAFT|
|state|DRAFT_AB|
|state|DRAFT_AB_VARIANT|
|state|ERROR|
|state|LOSER_AB_VARIANT|
|state|PAGE_STUB|
|state|PRE_PROCESSING|
|state|PROCESSING|
|state|PUBLISHED|
|state|PUBLISHED_AB|
|state|PUBLISHED_AB_VARIANT|
|state|PUBLISHED_OR_SCHEDULED|
|state|RSS_TO_EMAIL_DRAFT|
|state|RSS_TO_EMAIL_PUBLISHED|
|state|SCHEDULED|
|state|SCHEDULED_AB|
|state|SCHEDULED_OR_PUBLISHED|
|type|AB_EMAIL|
|type|AUTOMATED_AB_EMAIL|
|type|AUTOMATED_EMAIL|
|type|BATCH_EMAIL|
|type|BLOG_EMAIL|
|type|BLOG_EMAIL_CHILD|
|type|FEEDBACK_CES_EMAIL|
|type|FEEDBACK_CUSTOM_EMAIL|
|type|FEEDBACK_CUSTOM_SURVEY_EMAIL|
|type|FEEDBACK_NPS_EMAIL|
|type|FOLLOWUP_EMAIL|
|type|LEADFLOW_EMAIL|
|type|LOCALTIME_EMAIL|
|type|MANAGE_PREFERENCES_EMAIL|
|type|MARKETING_SINGLE_SEND_API|
|type|MEMBERSHIP_EMAIL_VERIFICATION_EMAIL|
|type|MEMBERSHIP_FOLLOW_UP_EMAIL|
|type|MEMBERSHIP_OTP_LOGIN_EMAIL|
|type|MEMBERSHIP_PASSWORD_RESET_EMAIL|
|type|MEMBERSHIP_PASSWORD_SAVED_EMAIL|
|type|MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL|
|type|MEMBERSHIP_REGISTRATION_EMAIL|
|type|MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL|
|type|MEMBERSHIP_VERIFICATION_EMAIL|
|type|OPTIN_EMAIL|
|type|OPTIN_FOLLOWUP_EMAIL|
|type|RESUBSCRIBE_EMAIL|
|type|RSS_EMAIL|
|type|RSS_EMAIL_CHILD|
|type|SINGLE_SEND_API|
|type|SMTP_TOKEN|
|type|TICKET_EMAIL|

<h2 id="tocS_PublicEmailContent">PublicEmailContent</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailcontent"></a>
<a id="schema_PublicEmailContent"></a>
<a id="tocSpublicemailcontent"></a>
<a id="tocspublicemailcontent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flexAreas|object|false|none|An object containing flexible area configurations, where each key is an area identifier and the value is an object with area properties.|
|plainTextVersion|string|false|none|A string containing the plain text version of the email content.|
|smartFields|object|false|none|An object containing smart field configurations, where each key is a field identifier and the value is a SmartEmailField object.|
|styleSettings|[PublicEmailStyleSettings](#schemapublicemailstylesettings)|false|none|none|
|templatePath|string|false|none|A string representing the path to the email template used for this email.|
|themeSettingsValues|object|false|none|An object containing theme settings values, where each key is a setting identifier and the value is an object with setting properties.|
|widgetContainers|object|false|none|An object containing widget container configurations, where each key is a container identifier and the value is an object with container properties.|
|widgets|object|false|none|An object containing widget configurations, where each key is a widget identifier and the value is an object with widget properties.|

<h2 id="tocS_PublicEmailFromDetails">PublicEmailFromDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailfromdetails"></a>
<a id="schema_PublicEmailFromDetails"></a>
<a id="tocSpublicemailfromdetails"></a>
<a id="tocspublicemailfromdetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customReplyTo|string|false|none|The reply to recipients will see.|
|fromName|string|false|none|The name recipients will see.|
|replyTo|string|false|none|The from address and reply to email address (if no customReplyTo defined) recipients will see.|

<h2 id="tocS_PublicEmailRecipients">PublicEmailRecipients</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailrecipients"></a>
<a id="schema_PublicEmailRecipients"></a>
<a id="tocSpublicemailrecipients"></a>
<a id="tocspublicemailrecipients"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|[string]|false|none|Excluded IDs.|
|include|[string]|false|none|Included IDs.|

<h2 id="tocS_PublicEmailStyleSettings">PublicEmailStyleSettings</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailstylesettings"></a>
<a id="schema_PublicEmailStyleSettings"></a>
<a id="tocSpublicemailstylesettings"></a>
<a id="tocspublicemailstylesettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|The background color of the email, represented as a string.|
|backgroundImage|string|false|none|The URL of the background image used in the email.|
|backgroundImageType|string|false|none|The type of background image display, with valid values including 'SINGLE', 'STRETCH', and 'REPEAT'.|
|bodyBorderColor|string|false|none|The color of the border around the email body.|
|bodyBorderColorChoice|string|false|none|A string representing the choice of border color for the email body.|
|bodyBorderWidth|number|false|none|The width of the border around the email body, represented as a number.|
|bodyColor|string|false|none|The color of the email body, represented as a string.|
|buttonStyleSettings|[PublicButtonStyleSettings](#schemapublicbuttonstylesettings)|false|none|none|
|colorPickerFavorite1|string|false|none|A favorite color option available in the color picker, represented as a string.|
|colorPickerFavorite2|string|false|none|A favorite color option available in the color picker, represented as a string.|
|colorPickerFavorite3|string|false|none|A favorite color option available in the color picker, represented as a string.|
|colorPickerFavorite4|string|false|none|A favorite color option available in the color picker, represented as a string.|
|colorPickerFavorite5|string|false|none|A favorite color option available in the color picker, represented as a string.|
|colorPickerFavorite6|string|false|none|A favorite color option available in the color picker, represented as a string.|
|dividerStyleSettings|[PublicDividerStyleSettings](#schemapublicdividerstylesettings)|false|none|none|
|emailBodyPadding|string|false|none|The padding applied to the email body, represented as a string.|
|emailBodyWidth|string|false|none|The width of the email body, represented as a string.|
|headingOneFont|[PublicFontStyle](#schemapublicfontstyle)|false|none|none|
|headingTwoFont|[PublicFontStyle](#schemapublicfontstyle)|false|none|none|
|linksFont|[PublicFontStyle](#schemapublicfontstyle)|false|none|none|
|primaryAccentColor|string|false|none|The primary accent color used in the email.|
|primaryFont|string|false|none|The primary font used in the email, represented as a string.|
|primaryFontColor|string|false|none|The color of the primary font.|
|primaryFontLineHeight|string|false|none|The line height of the primary font, represented as a string.|
|primaryFontSize|number|false|none|The size of the primary font, represented as a number.|
|secondaryAccentColor|string|false|none|The secondary accent color used in the email.|
|secondaryFont|string|false|none|The secondary font used in the email, represented as a string.|
|secondaryFontColor|string|false|none|The color of the secondary font.|
|secondaryFontLineHeight|string|false|none|The line height of the secondary font, represented as a string.|
|secondaryFontSize|number|false|none|The size of the secondary font, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|backgroundImageType|REPEAT|
|backgroundImageType|SINGLE|
|backgroundImageType|STRETCH|

<h2 id="tocS_PublicEmailSubscriptionDetails">PublicEmailSubscriptionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailsubscriptiondetails"></a>
<a id="schema_PublicEmailSubscriptionDetails"></a>
<a id="tocSpublicemailsubscriptiondetails"></a>
<a id="tocspublicemailsubscriptiondetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|officeLocationId|string|false|none|ID of the selected office location.|
|preferencesGroupId|string|false|none|The identifier for the preferences group associated with the subscription. It is a string value.|
|subscriptionId|string|false|none|ID of the subscription.|
|subscriptionName|string|false|none|The name of the email subscription. It is a string value.|

<h2 id="tocS_PublicEmailTestingDetails">PublicEmailTestingDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailtestingdetails"></a>
<a id="schema_PublicEmailTestingDetails"></a>
<a id="tocSpublicemailtestingdetails"></a>
<a id="tocspublicemailtestingdetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abSampleSizeDefault|string|false|none|Version of the email that should be sent if there are too few recipients to conduct an AB test.|
|abSamplingDefault|string|false|none|Version of the email that should be sent if the results are inconclusive after the test period, master or variant.|
|abStatus|string|false|none|Status of the AB test.|
|abSuccessMetric|string|false|none|Metric to determine the version that will be sent to the remaining contacts.|
|abTestPercentage|integer(int32)|false|none|The size of your test group.|
|hoursToWait|integer(int32)|false|none|Time limit on gathering test results. After this time is up, the winning version will be sent to the remaining contacts.|
|isAbVariation|boolean|true|none|A boolean indicating whether the email is an A/B test variation.|
|testId|string|false|none|The ID of the AB test.|

#### Enumerated Values

|Property|Value|
|---|---|
|abSampleSizeDefault|automated_loser_variant|
|abSampleSizeDefault|automated_master|
|abSampleSizeDefault|automated_variant|
|abSampleSizeDefault|loser_variant|
|abSampleSizeDefault|mab_master|
|abSampleSizeDefault|mab_variant|
|abSampleSizeDefault|master|
|abSampleSizeDefault|variant|
|abSamplingDefault|automated_loser_variant|
|abSamplingDefault|automated_master|
|abSamplingDefault|automated_variant|
|abSamplingDefault|loser_variant|
|abSamplingDefault|mab_master|
|abSamplingDefault|mab_variant|
|abSamplingDefault|master|
|abSamplingDefault|variant|
|abStatus|automated_loser_variant|
|abStatus|automated_master|
|abStatus|automated_variant|
|abStatus|loser_variant|
|abStatus|mab_master|
|abStatus|mab_variant|
|abStatus|master|
|abStatus|variant|
|abSuccessMetric|CLICKS_BY_DELIVERED|
|abSuccessMetric|CLICKS_BY_OPENS|
|abSuccessMetric|OPENS_BY_DELIVERED|

<h2 id="tocS_PublicEmailToDetails">PublicEmailToDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailtodetails"></a>
<a id="schema_PublicEmailToDetails"></a>
<a id="tocSpublicemailtodetails"></a>
<a id="tocspublicemailtodetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactIds|[PublicEmailRecipients](#schemapublicemailrecipients)|false|none|none|
|contactIlsLists|[PublicEmailRecipients](#schemapublicemailrecipients)|false|none|none|
|contactLists|[PublicEmailRecipients](#schemapublicemailrecipients)|false|none|none|
|limitSendFrequency|boolean|false|none|A boolean indicating whether the frequency of sending emails to the recipients should be limited.|
|suppressGraymail|boolean|false|none|Whether to send to unengaged contacts (false) or not (true).|

<h2 id="tocS_PublicEmailVersion">PublicEmailVersion</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailversion"></a>
<a id="schema_PublicEmailVersion"></a>
<a id="tocSpublicemailversion"></a>
<a id="tocspublicemailversion"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this version of the public email.|
|object|[PublicEmail](#schemapublicemail)|true|none|none|
|updatedAt|string(date-time)|true|none|The date and time when this version of the email was last updated, in ISO 8601 format.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

<h2 id="tocS_PublicFontStyle">PublicFontStyle</h2>
<!-- backwards compatibility -->
<a id="schemapublicfontstyle"></a>
<a id="schema_PublicFontStyle"></a>
<a id="tocSpublicfontstyle"></a>
<a id="tocspublicfontstyle"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bold|boolean|false|none|A boolean indicating whether the text should be bold.|
|color|string|false|none|The color of the font, represented as a string.|
|font|string|false|none|The type of font to be used, represented as a string.|
|italic|boolean|false|none|A boolean indicating whether the text should be italicized.|
|size|integer(int32)|false|none|The size of the font, represented as an integer.|
|underline|boolean|false|none|A boolean indicating whether the text should be underlined.|

<h2 id="tocS_PublicRssEmailDetails">PublicRssEmailDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicrssemaildetails"></a>
<a id="schema_PublicRssEmailDetails"></a>
<a id="tocSpublicrssemaildetails"></a>
<a id="tocspublicrssemaildetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blogEmailType|string|false|none|A string representing the type of blog email.|
|blogImageMaxWidth|integer(int32)|false|none|The maximum width for images in the blog, specified as an integer.|
|blogLayout|string|false|none|The layout of the blog in the email. Valid values include 'SUMMARY_NO_FEATURED_IMAGE', 'SUMMARY_WITH_FEATURED_IMAGE', and 'FULL_POST'.|
|hubspotBlogId|string|false|none|The unique identifier of the HubSpot blog associated with the RSS email. It is a string.|
|maxEntries|integer(int32)|false|none|The maximum number of entries to include from the RSS feed. It is an integer value.|
|rssEntryTemplate|string|false|none|A string representing the template used for each RSS entry in the email.|
|timing|object|false|none|An object representing the timing configuration for the RSS email. The specific properties of this object are not detailed in the specification.|
|url|string|false|none|The URL of the RSS feed to be used in the email. It is a string.|
|useHeadlineAsSubject|boolean|false|none|A boolean indicating whether to use the headline of the RSS entry as the subject of the email.|

#### Enumerated Values

|Property|Value|
|---|---|
|blogLayout|FULL_POST|
|blogLayout|SUMMARY_NO_FEATURED_IMAGE|
|blogLayout|SUMMARY_WITH_FEATURED_IMAGE|

<h2 id="tocS_PublicWebversionDetails">PublicWebversionDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicwebversiondetails"></a>
<a id="schema_PublicWebversionDetails"></a>
<a id="tocSpublicwebversiondetails"></a>
<a id="tocspublicwebversiondetails"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|A string specifying the domain where the web version of the email is hosted.|
|enabled|boolean|false|none|A boolean indicating whether the web version of the email is enabled.|
|expiresAt|string(date-time)|false|none|A string in date-time format specifying when the web version page will expire.|
|isPageRedirected|boolean|false|none|A boolean indicating whether the web version page is redirected to another URL.|
|metaDescription|string|false|none|A string providing the meta description for the web version of the email.|
|pageExpiryEnabled|boolean|false|none|A boolean indicating whether the web version page has an expiry set.|
|redirectToPageId|string|false|none|A string representing the ID of the page to which the web version is redirected.|
|redirectToUrl|string|false|none|A string containing the URL to which the web version page is redirected.|
|slug|string|false|none|A string representing the unique slug for the web version of the email.|
|title|string|false|none|A string representing the title of the web version of the email.|
|url|string|false|none|A string containing the full URL of the web version of the email.|

<h2 id="tocS_SmartEmailField">SmartEmailField</h2>
<!-- backwards compatibility -->
<a id="schemasmartemailfield"></a>
<a id="schema_SmartEmailField"></a>
<a id="tocSsmartemailfield"></a>
<a id="tocssmartemailfield"></a>

```json
null
```

<h2 id="tocS_VersionPublicEmail">VersionPublicEmail</h2>
<!-- backwards compatibility -->
<a id="schemaversionpublicemail"></a>
<a id="schema_VersionPublicEmail"></a>
<a id="tocSversionpublicemail"></a>
<a id="tocsversionpublicemail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of this marketing email version.|
|object|[PublicEmail](#schemapublicemail)|true|none|none|
|updatedAt|string(date-time)|true|none|The date and time of the last update to the email, in ISO8601 representation.|
|user|[VersionUser](#schemaversionuser)|true|none|none|

<h2 id="tocS_VersionUser">VersionUser</h2>
<!-- backwards compatibility -->
<a id="schemaversionuser"></a>
<a id="schema_VersionUser"></a>
<a id="tocSversionuser"></a>
<a id="tocsversionuser"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the user.|
|fullName|string|true|none|First and last name of the user.|
|id|string|true|none|ID of the user.|
