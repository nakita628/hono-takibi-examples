<h1 id="twilio-sendgrid-mail-api">Twilio SendGrid Mail API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Twilio SendGrid v3 Mail API allows you to send email at scale over HTTP. You can also group mail sends into batches.

The Twilio SendGrid v3 Mail API allows you to send email at scale over HTTP. The Mail Send endpoint supports many levels of functionality, allowing you to send templates, set categories and custom arguments that can be used to analyze your send, and configure which tracking settings to include such as opens and clicks. You can also group mail sends into batches, allowing you to schedule and cancel sends by their batch IDs.

Base URLs:

* <a href="https://api.sendgrid.com">https://api.sendgrid.com</a> - for global users and subusers

* <a href="https://api.eu.sendgrid.com">https://api.eu.sendgrid.com</a> - for EU regional subusers

<a href="https://www.twilio.com/legal/tos">Terms of service</a>
Web: <a href="https://support.sendgrid.com/hc/en-us">Twilio SendGrid Support</a> 
License: <a href="https://code.hq.twilio.com/twilio/sendgrid-oas/blob/main/LICENSE">MIT</a>

<a href="https://www.twilio.com/docs/sendgrid">Twilio SendGrid's official developer documentation.</a>

# Authentication

- HTTP Authentication, scheme: bearer Twilio SendGrid requires you to authenticate with its APIs using an API key. The API key must be sent as a bearer token in the Authorization header.

<h1 id="twilio-sendgrid-mail-api-mail-send">Mail Send</h1>

Twilio Mail Send API.

## Send Email with Twilio SendGrid.

<a id="opIdSendMail"></a>

> Code samples

```bash
curl https://api.sendgrid.com/v3/mail/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "personalizations": [
      {
        "to": [
          {
            "email": "alex@example.com",
            "name": "Alex"
          },
          {
            "email": "bola@example.com",
            "name": "Bola"
          }
        ],
        "dynamic_template_data": {
          "subject": "Hello, Alex",
          "customer_name": "Alex",
          "confirmation_number": "123abc456def789hij0"
        }
      }
    ],
    "from": {
      "email": "orders@example.com",
      "name": "Example Order Confirmation"
    },
    "reply_to": {
      "email": "customer_service@example.com",
      "name": "Example Customer Service Team"
    },
    "attachments": [
      {
        "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
        "filename": "index.html",
        "type": "text/html",
        "disposition": "attachment"
      }
    ],
    "template_id": "d-123abc456def789hij0klm123nop456qrs789tuv0xyz",
    "categories": [
      "cake",
      "pie",
      "baking"
    ],
    "send_at": 1617260400,
    "batch_id": "AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl",
    "asm": {
      "group_id": 12345,
      "groups_to_display": [
        12345
      ]
    },
    "ip_pool_name": "transactional email",
    "mail_settings": {
      "bypass_list_management": {
        "enable": false
      },
      "footer": {
        "enable": false
      },
      "sandbox_mode": {
        "enable": false
      }
    },
    "tracking_settings": {
      "click_tracking": {
        "enable": true,
        "enable_text": false
      },
      "open_tracking": {
        "enable": true,
        "substitution_tag": "%open-track%"
      },
      "subscription_tracking": {
        "enable": false
      }
    }
  }'
```

`POST /v3/mail/send`

*The Mail Send operation allows you to send email over SendGrid's v3 Web API*

For an overview of this API, including its features and limitations, please see the [Mail Send API overview page](https://www.twilio.com/docs/sendgrid/api-reference/mail-send)

The overview page also includes links to SendGrid's Email API quickstarts and helper libraries to get you working with this endpoint even faster.


> Body parameter

```json
{
  "personalizations": [
    {
      "to": [
        {
          "email": "alex@example.com",
          "name": "Alex"
        },
        {
          "email": "bola@example.com",
          "name": "Bola"
        }
      ],
      "dynamic_template_data": {
        "subject": "Hello, Alex",
        "customer_name": "Alex",
        "confirmation_number": "123abc456def789hij0"
      }
    }
  ],
  "from": {
    "email": "orders@example.com",
    "name": "Example Order Confirmation"
  },
  "reply_to": {
    "email": "customer_service@example.com",
    "name": "Example Customer Service Team"
  },
  "attachments": [
    {
      "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
      "filename": "index.html",
      "type": "text/html",
      "disposition": "attachment"
    }
  ],
  "template_id": "d-123abc456def789hij0klm123nop456qrs789tuv0xyz",
  "categories": [
    "cake",
    "pie",
    "baking"
  ],
  "send_at": 1617260400,
  "batch_id": "AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl",
  "asm": {
    "group_id": 12345,
    "groups_to_display": [
      12345
    ]
  },
  "ip_pool_name": "transactional email",
  "mail_settings": {
    "bypass_list_management": {
      "enable": false
    },
    "footer": {
      "enable": false
    },
    "sandbox_mode": {
      "enable": false
    }
  },
  "tracking_settings": {
    "click_tracking": {
      "enable": true,
      "enable_text": false
    },
    "open_tracking": {
      "enable": true,
      "substitution_tag": "%open-track%"
    },
    "subscription_tracking": {
      "enable": false
    }
  }
}
```

<h3 id="send-email-with-twilio-sendgrid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Encoding|header|[ContentEncoding](#schemacontentencoding)|false|Use this header when sending a gzip compressed mail body. Mail body compression is available to some high volume accounts. Submit a [request to support](https://support.sendgrid.com/hc/en-us) to have gzip enabled on your account.|
|body|body|object|false|none|
|» personalizations|body|[object]|true|An array of messages and their metadata. Each object within the `personalizations` array can be thought of as a mail envelope—it defines who should receive an individual message and how that message should be handled. See [**Personalizations**](https://sendgrid.com/docs/for-developers/sending-email/personalizations/) for more information.|
|» » from|body|[MailFrom](#schemamailfrom)|false|none|
|» » to|body|[[MailTo](#schemamailto)]|true|An array of recipients to whom the email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.|
|» » cc|body|[[MailTo](#schemamailto)]|false|An array of recipients to whom a copy of the email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.|
|» » bcc|body|[[MailTo](#schemamailto)]|false|An array of recipients to whom a blind carbon copy of your email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.|
|» » subject|body|string|false|The subject of your email. See line length limits specified in [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-2.1.1) for guidance on subject line character limits.|
|» » headers|body|object|false|A collection of JSON property name and property value pairs allowing you to specify handling instructions for your email. You may not override the following headers: `x-sg-id`, `x-sg-eid`, `received`, `dkim-signature`, `Content-Type`, `Content-Transfer-Encoding`, `To`, `From`, `Subject`, `Reply-To`, `CC`, `BCC`.|
|» » substitutions|body|object|false|A collection property names that will be substituted by their corresponding property values in the `subject`, `reply-to` and `content` portions of your message. Name and value pairs follow the pattern `"substitution_tag":"value to substitute"`. The total collective size of your substitutions may not exceed 100,000 bytes per personalization object. Substitutions allow you to insert data without using SendGrid's Dynamic Templates. This property should not be used in combination with a Dynamic Template, which can be identified by a `template_id` starting with `d-`. See [**Substitution Tags**](https://docs.sendgrid.com/for-developers/sending-email/substitution-tags) for more information.|
|» » » **additionalProperties**|body|string|false|none|
|» » dynamic_template_data|body|object|false|A collection property names that will be substituted by their corresponding property values in the `subject`, `reply-to` and `content` portions of a SendGrid Dynamic Template. Dynamic template data is available in a template using [Handlebars](https://docs.sendgrid.com/for-developers/sending-email/using-handlebars) syntax. This property should be used in combination with a Dynamic Template, which can be identified by a `template_id` starting with `d-`. See [**How to Send an Email with Dynamic Templates**](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates) for more information.|
|» » custom_args|body|object|false|Values that are specific to this personalization that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is assigned to this property will be assumed to be the custom argument that you would like to be used. This field may not exceed 10,000 bytes.|
|» » send_at|body|integer|false|A [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) allowing you to specify when your email should be sent. A send cannot be scheduled more than 72 hours in advance.|
|» from|body|[MailFrom](#schemamailfrom)|true|none|
|» reply_to|body|[MailTo](#schemamailto)|false|none|
|» reply_to_list|body|[[MailTo](#schemamailto)]|false|An array of recipients to whom replies will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name. You can use either the `reply_to` property or `reply_to_list` property but not both.|
|» subject|body|string|false|The global or _message level_ subject of your email. Subject lines set in personalizations objects will override this global subject line. See line length limits specified in [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-2.1.1) for guidance on subject line character limits.|
|» content|body|[object]|false|An array of objects, each containing a message body's content and [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). You must specify at least one MIME type and may include multiple. To include more than one MIME type, add an object for each type to the array.|
|» » type|body|string|true|The MIME type of the content assigned in the `value` property of this object (e.g., `text/plain` or `text/html`).|
|» » value|body|string|true|The content of your message in the specified MIME type assigned in the `type` property of this object.|
|» attachments|body|[object]|false|An array of objects where you can define any attachments to be included with the message. Each object contains a `content` property, which must be a Base64 encoded string of the attachment itself, and `type`, `filename`, `disposition`, and `content_id` properties that tell SendGrid how to handle the attachment.|
|» » content|body|string|true|The Base64 encoded content of the attachment.|
|» » type|body|string|false|The MIME type of the content you are attaching (e.g., `image/jpeg` or `application/pdf`).|
|» » filename|body|string|true|The attachment's filename, including the file extension.|
|» » disposition|body|[Disposition](#schemadisposition)|false|The attachment's content-disposition specifies how you would like the attachment to be displayed. For example, `inline` results in the attached file being displayed automatically within the message while `attachment` results in the attached file requiring some action to be taken before it is displayed such as opening or downloading the file.|
|» » content_id|body|string|false|The attachment's content ID. The `content_id` is used when the `disposition` is set to `inline` and the attachment is an image, allowing the file to be displayed within the body of the email.|
|» template_id|body|string|false|An email template ID. A template that contains a subject and content—either text or html—will override any subject and content values specified at the `personalizations` or message level. If a template ID begins with `d-`, it is a dynamic template and will work with the `dynamic_template_data` property. If the template ID does not begin with `d-`, it is a standard SendGrid template and will work with the `substitutions` property. See [**How to Send an Email with Dynamic Templates**](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates) for more information about working with templates.|
|» headers|body|object|false|A collection of JSON property name and property value pairs allowing you to specify handling instructions for your email. You may not override the following headers: `x-sg-id`, `x-sg-eid`, `received`, `dkim-signature`, `Content-Type`, `Content-Transfer-Encoding`, `To`, `From`, `Subject`, `Reply-To`, `CC`, `BCC`.|
|» categories|body|[string]|false|An array of category names assigned to this message. Categories allow you to group messages by categories you define. Categories should be used sparingly to create general groups that are relevant to you. Categories are not meant to be used to track individual mail sends. For more granular categorization and tracking, use the `custom_args` property. A category name cannot exceed 255 characters. See [**Working with Categories**](https://docs.sendgrid.com/for-developers/sending-email/categories) for more information.|
|» custom_args|body|string|false|Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is assigned to this property will be assumed to be the custom argument that you would like to be used. This parameter is overridden by `custom_args` set at the personalizations level. Total `custom_args` size may not exceed 10,000 bytes.|
|» send_at|body|integer|false|A [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) allowing you to specify when your email should be sent. A send cannot be scheduled more than 72 hours in advance. This property may be overridden by the `send_at` property set at the personalizations level.|
|» batch_id|body|string|false|An ID representing a batch of emails to be sent at the same time. Including a `batch_id` in your request allows you to include this email in that batch. It also enables you to cancel or pause the delivery of that batch. See the [Scheduled Sends API](https://sendgrid.com/docs/api-reference/) for more information about scheduling your email.|
|» asm|body|object|false|An object allowing you to specify how to handle unsubscribes. With SendGrid, an unsubscribe is the action an email recipient takes when they opt-out of receiving your messages. A suppression is the action you take as a sender to filter or suppress an unsubscribed address from your email send. From the perspective of the recipient, your suppression is the result of their unsubscribe. See [**Suppression Groups**](https://www.twilio.com/docs/sendgrid/api-reference/suppressions-unsubscribe-groups/create-a-new-suppression-group) for more information.|
|» » group_id|body|integer|true|The unsubscribe group to associate with this email. See the [Suppressions API](https://docs.sendgrid.com/api-reference/suppressions/) to manage unsubscribe group IDs.|
|» » groups_to_display|body|[integer]|false|An array containing the unsubscribe groups that you would like to be displayed to a recipient on the unsubscribe preferences page. This page is displayed in the recipient's browser when they click the unsubscribe link in your message.|
|» ip_pool_name|body|string|false|The IP Pool that you would like to send this email from. IP Pools allow you to group your dedicated Twilio SendGrid IP addresses in order to have more control over your deliverability. See [**IP Pools**](https://docs.sendgrid.com/ui/account-and-settings/ip-pools) for more information.|
|» mail_settings|body|object|false|A collection of different mail settings that you can use to specify how you would like this email to be handled. Mail settings provide extra functionality to your mail send. See [**Mail Settings**](https://docs.sendgrid.com/ui/account-and-settings/mail) for more information.|
|» » bypass_list_management|body|object|false|Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email. This filter cannot be combined with any other bypass filters. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » bypass_spam_management|body|object|false|Allows you to bypass the spam report list to ensure that the email is delivered to recipients. Bounce and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » bypass_bounce_management|body|object|false|Allows you to bypass the bounce list to ensure that the email is delivered to recipients. Spam report and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » bypass_unsubscribe_management|body|object|false|Allows you to bypass the global unsubscribe list to ensure that the email is delivered to recipients. Bounce and spam report lists will still be checked; addresses on these other lists will not receive the message. This filter applies only to global unsubscribes and will not bypass group unsubscribes. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » footer|body|object|false|Inserts a custom footer at the bottom of the text and HTML bodies of your messages. Use the `html` and `text` properties to include the content of the footers to be inserted.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » » text|body|string|false|The plain text content of your footer.|
|» » » html|body|string|false|The HTML content of your footer.|
|» » sandbox_mode|body|object|false|Sandbox Mode allows you to send a test email to ensure that your request body is valid and formatted correctly.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» tracking_settings|body|object|false|Settings to determine how you would like to track the metrics of how your recipients interact with your email. See [**Tracking Settings**](https://docs.sendgrid.com/ui/account-and-settings/tracking) for more information.|
|» » click_tracking|body|object|false|Allows you to track if a recipient clicked a link in your email.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » » enable_text|body|boolean|false|Indicates if this setting should be included in the `text/plain` portion of your email.|
|» » open_tracking|body|object|false|Allows you to track if the email was opened by including a single transparent pixel image in the body of the message content. When the message is opened, a request for the pixel is sent. That request indicates to Twilio SendGrid that the message was opened.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » » substitution_tag|body|string|false|Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel.|
|» » subscription_tracking|body|object|false|Allows you to insert a subscription management link at the bottom of the text and HTML bodies of your email. If you would like to specify the location of the link within your email, you may use the `substitution_tag` property.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » » text|body|string|false|Text to be appended to the email with the subscription tracking link.|
|» » » html|body|string|false|HTML to be appended to the email with the subscription tracking link.|
|» » » substitution_tag|body|string|false|A tag that will be replaced with the unsubscribe URL. If this property is used, it will override both the `text` and `html` properties. The URL of the link will be placed at the substitution tag's location in the message body with no additional formatting.|
|» » ganalytics|body|object|false|Allows you to enable tracking provided by Google Analytics. See [**Google Analytics and SendGrid Statistics**](https://docs.sendgrid.com/ui/analytics-and-reporting/google-analytics) for more information about this property.|
|» » » enable|body|boolean|false|Indicates if this setting is enabled.|
|» » » utm_source|body|string|false|Name of the referrer source. (e.g., Google, SomeDomain.com, or Marketing Email)|
|» » » utm_medium|body|string|false|Name of the marketing medium. (e.g., Email)|
|» » » utm_term|body|string|false|Used to identify any paid keywords.|
|» » » utm_content|body|string|false|Used to differentiate your campaign from advertisements.|
|» » » utm_campaign|body|string|false|The name of the campaign.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Content-Encoding|gzip|
|» » disposition|inline|
|» » disposition|attachment|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "message": "invalid request",
      "field": "null"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "authorization required",
      "field": "null"
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "access forbidden",
      "field": "null"
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "not found",
      "field": "null"
    }
  ]
}
```

> 405 Response

```json
{
  "errors": [
    {
      "message": "method not allowed",
      "field": "null"
    }
  ]
}
```

> 413 Response

```json
{
  "errors": [
    {
      "message": "content too large",
      "field": "null"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "message": "internal server error"
    }
  ]
}
```

<h3 id="send-email-with-twilio-sendgrid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Mail Send bad response.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Mail Send unauthorized response.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Mail Send forbidden response.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Mail Send not found response.|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Mail Send method not allowed response.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Mail Send content too large response.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Mail send internal server error response.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="twilio-sendgrid-mail-api-mail-batch">Mail Batch</h1>

Assign batch IDs to a send.

## Create a batch ID.

<a id="opIdCreateMailBatch"></a>

> Code samples

```bash
curl https://api.sendgrid.com/v3/mail/batch \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/mail/batch`

**This operation allows you to generate a new mail batch ID.**


Once a batch ID is created, you can associate it with a mail send by passing
it in the request body of the [Mail Send operation](https://docs.sendgrid.com/api-reference/mail-send/mail-send).
This makes it possible to group multiple requests to the Mail Send operation
by assigning them the same batch ID.


A batch ID that's associated with a mail send can be used to access and modify the associated send. For example, you can pause or cancel a send using its batch ID. See the [Scheduled Sends API](https://www.twilio.com/docs/sendgrid/api-reference/cancel-scheduled-sends) for more information about pausing and cancelling a mail send.


<h3 id="create-a-batch-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|on-behalf-of|header|string|false|Use the `on-behalf-of` header to make API calls for a particular Subuser through the parent account. You can use this header to automate bulk updates or to administer a Subuser without changing the authentication in your code. You will use the parent account's API key when using this header.|

> Example responses

> 201 Response

```json
{
  "batch_id": "123abc456def789hij0"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "message": "invalid batch id",
      "field": "null"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "authorization required",
      "field": "null"
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "access forbidden",
      "field": "null"
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "batch id not found",
      "field": "null"
    }
  ]
}
```

> 405 Response

```json
{
  "errors": [
    {
      "message": "method not allowed",
      "field": "null"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "message": "internal server error",
      "field": "null"
    }
  ]
}
```

<h3 id="create-a-batch-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Batch ID success response.|[MailBatchResponse](#schemamailbatchresponse)|
|400|Bad Request|Batch ID bad response.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Batch ID unauthorized response.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Batch ID forbidden response.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Batch ID not found response.|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Get batch ID method not allowed response.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Get batch ID internal server error response.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Validate a batch ID.

<a id="opIdGetMailBatch"></a>

> Code samples

```bash
curl https://api.sendgrid.com/v3/mail/batch/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/mail/batch/{batch_id}`

**This operation allows you to validate a mail batch ID.**

If you provide a valid batch ID, this operation will return a `200` status code and the batch ID itself.
If you provide an invalid batch ID, you will receive a `400` level status code and an error message.
A batch ID does not need to be assigned to a send to be considered valid. A successful response means only that the batch ID has been created, but it does not indicate that the ID has been assigned to a send.

<h3 id="validate-a-batch-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|on-behalf-of|header|string|false|Use the `on-behalf-of` header to make API calls for a particular Subuser through the parent account. You can use this header to automate bulk updates or to administer a Subuser without changing the authentication in your code. You will use the parent account's API key when using this header.|
|batch_id|path|string|true|Set this parameter to the batch ID that's associated with the mail send you want to retrieve.|

> Example responses

> 200 Response

```json
{
  "batch_id": "123abc456def789hij0"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "message": "invalid batch id",
      "field": "null"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "authorization required",
      "field": "null"
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "access forbidden",
      "field": "null"
    }
  ]
}
```

> 405 Response

```json
{
  "errors": [
    {
      "message": "method not allowed",
      "field": "null"
    }
  ]
}
```

> 500 Response

```json
{
  "errors": [
    {
      "message": "internal server error",
      "field": "null"
    }
  ]
}
```

<h3 id="validate-a-batch-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch ID success response.|[MailBatchResponse](#schemamailbatchresponse)|
|400|Bad Request|Batch ID bad response.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Batch ID unauthorized response.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Batch ID forbidden response.|[ErrorResponse](#schemaerrorresponse)|
|405|Method Not Allowed|Get batch ID method not allowed response.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Get batch ID internal server error response.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_MailFrom">MailFrom</h2>
<!-- backwards compatibility -->
<a id="schemamailfrom"></a>
<a id="schema_MailFrom"></a>
<a id="tocSmailfrom"></a>
<a id="tocsmailfrom"></a>

```json
{
  "email": "user@example.com",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|The email address from which messages are sent. This address should be a verified sender in your Twilio SendGrid account. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.|
|name|string|false|none|A name or title associated with the email address such as "Support" or "Alex".|

<h2 id="tocS_MailTo">MailTo</h2>
<!-- backwards compatibility -->
<a id="schemamailto"></a>
<a id="schema_MailTo"></a>
<a id="tocSmailto"></a>
<a id="tocsmailto"></a>

```json
{
  "email": "user@example.com",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|An email address to which a message is sent. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.|
|name|string|false|none|A name or title associated with the email address such as "Alex".|

<h2 id="tocS_MailBatchResponse">MailBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemamailbatchresponse"></a>
<a id="schema_MailBatchResponse"></a>
<a id="tocSmailbatchresponse"></a>
<a id="tocsmailbatchresponse"></a>

```json
{
  "batch_id": "HkJ5yLYULb7Rj8GKSx7u025ouWVlMgAi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_id|string|false|none|A mail batch ID.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errors": [
    {
      "field": "field_name",
      "message": "error message"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[object]|false|none|none|
|id|string|false|none|When applicable, this property value will be an error ID.|

<h2 id="tocS_ContentEncoding">ContentEncoding</h2>
<!-- backwards compatibility -->
<a id="schemacontentencoding"></a>
<a id="schema_ContentEncoding"></a>
<a id="tocScontentencoding"></a>
<a id="tocscontentencoding"></a>

```json
"gzip"
```

<h2 id="tocS_Disposition">Disposition</h2>
<!-- backwards compatibility -->
<a id="schemadisposition"></a>
<a id="schema_Disposition"></a>
<a id="tocSdisposition"></a>
<a id="tocsdisposition"></a>

```json
"inline"
```
