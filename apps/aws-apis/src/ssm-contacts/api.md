<h1 id="aws-systems-manager-incident-manager-contacts">AWS Systems Manager Incident Manager Contacts v2021-05-03</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.</p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation.</p>

Base URLs:

* <a href="http://ssm-contacts.us-east-1.amazonaws.com">http://ssm-contacts.us-east-1.amazonaws.com</a> - The SSM Contacts multi-region endpoint

* <a href="https://ssm-contacts.us-east-1.amazonaws.com">https://ssm-contacts.us-east-1.amazonaws.com</a> - The SSM Contacts multi-region endpoint

* <a href="http://ssm-contacts.cn-north-1.amazonaws.com.cn">http://ssm-contacts.cn-north-1.amazonaws.com.cn</a> - The SSM Contacts endpoint for China (Beijing) and China (Ningxia)

* <a href="https://ssm-contacts.cn-north-1.amazonaws.com.cn">https://ssm-contacts.cn-north-1.amazonaws.com.cn</a> - The SSM Contacts endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ssm-contacts/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-systems-manager-incident-manager-contacts-default">Default</h1>

## AcceptPage

<a id="opIdAcceptPage"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.AcceptPage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.AcceptPage' \
  -d '{
    "PageId": {},
    "ContactChannelId": {},
    "AcceptType": {},
    "Note": {},
    "AcceptCode": {},
    "AcceptCodeValidation": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.AcceptPage`

Used to acknowledge an engagement to a contact channel during an incident.

> Body parameter

```json
{
  "PageId": {},
  "ContactChannelId": {},
  "AcceptType": {},
  "Note": {},
  "AcceptCode": {},
  "AcceptCodeValidation": {}
}
```

<h3 id="acceptpage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AcceptPageRequest](#schemaacceptpagerequest)|true|none|
|» PageId|body|object|true|none|
|» ContactChannelId|body|object|false|none|
|» AcceptType|body|object|true|none|
|» Note|body|object|false|none|
|» AcceptCode|body|object|true|none|
|» AcceptCodeValidation|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.AcceptPage|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="acceptpage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptPageResult](#schemaacceptpageresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ActivateContactChannel

<a id="opIdActivateContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ActivateContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ActivateContactChannel' \
  -d '{
    "ContactChannelId": {},
    "ActivationCode": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ActivateContactChannel`

Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.

> Body parameter

```json
{
  "ContactChannelId": {},
  "ActivationCode": {}
}
```

<h3 id="activatecontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ActivateContactChannelRequest](#schemaactivatecontactchannelrequest)|true|none|
|» ContactChannelId|body|object|true|none|
|» ActivationCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ActivateContactChannel|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="activatecontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateContactChannelResult](#schemaactivatecontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContact

<a id="opIdCreateContact"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.CreateContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.CreateContact' \
  -d '{
    "Alias": {},
    "DisplayName": {},
    "Type": {},
    "Plan": {
      "Stages": {},
      "RotationIds": {}
    },
    "Tags": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.CreateContact`

Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.

> Body parameter

```json
{
  "Alias": {},
  "DisplayName": {},
  "Type": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  },
  "Tags": {},
  "IdempotencyToken": {}
}
```

<h3 id="createcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateContactRequest](#schemacreatecontactrequest)|true|none|
|» Alias|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Type|body|object|true|none|
|» Plan|body|object|true|none|
|» » Stages|body|object|false|none|
|» » RotationIds|body|object|false|none|
|» Tags|body|object|false|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.CreateContact|

> Example responses

> 200 Response

```json
{
  "ContactArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactResult](#schemacreatecontactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContactChannel

<a id="opIdCreateContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.CreateContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.CreateContactChannel' \
  -d '{
    "ContactId": {},
    "Name": {},
    "Type": {},
    "DeliveryAddress": {
      "SimpleAddress": {}
    },
    "DeferActivation": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.CreateContactChannel`

A contact channel is the method that Incident Manager uses to engage your contact.

> Body parameter

```json
{
  "ContactId": {},
  "Name": {},
  "Type": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  },
  "DeferActivation": {},
  "IdempotencyToken": {}
}
```

<h3 id="createcontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateContactChannelRequest](#schemacreatecontactchannelrequest)|true|none|
|» ContactId|body|object|true|none|
|» Name|body|object|true|none|
|» Type|body|object|true|none|
|» DeliveryAddress|body|object|true|none|
|» » SimpleAddress|body|object|false|none|
|» DeferActivation|body|object|false|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.CreateContactChannel|

> Example responses

> 200 Response

```json
{
  "ContactChannelArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createcontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactChannelResult](#schemacreatecontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRotation

<a id="opIdCreateRotation"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.CreateRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.CreateRotation' \
  -d '{
    "Name": {},
    "ContactIds": {},
    "StartTime": {},
    "TimeZoneId": {},
    "Recurrence": {
      "MonthlySettings": {},
      "WeeklySettings": {},
      "DailySettings": {},
      "NumberOfOnCalls": {},
      "ShiftCoverages": {
        "property1": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ],
        "property2": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ]
      },
      "RecurrenceMultiplier": {}
    },
    "Tags": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.CreateRotation`

Creates a rotation in an on-call schedule.

> Body parameter

```json
{
  "Name": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  },
  "Tags": {},
  "IdempotencyToken": {}
}
```

<h3 id="createrotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRotationRequest](#schemacreaterotationrequest)|true|none|
|» Name|body|object|true|none|
|» ContactIds|body|object|true|none|
|» StartTime|body|object|false|none|
|» TimeZoneId|body|object|true|none|
|» Recurrence|body|object|true|none|
|» » MonthlySettings|body|object|false|none|
|» » WeeklySettings|body|object|false|none|
|» » DailySettings|body|object|false|none|
|» » NumberOfOnCalls|body|object|true|none|
|» » ShiftCoverages|body|object|false|none|
|» » » **additionalProperties**|body|[CoverageTimes](#schemacoveragetimes)|false|none|
|» » RecurrenceMultiplier|body|object|true|none|
|» Tags|body|object|false|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.CreateRotation|

> Example responses

> 200 Response

```json
{
  "RotationArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createrotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRotationResult](#schemacreaterotationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRotationOverride

<a id="opIdCreateRotationOverride"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.CreateRotationOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.CreateRotationOverride' \
  -d '{
    "RotationId": {},
    "NewContactIds": {},
    "StartTime": {},
    "EndTime": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.CreateRotationOverride`

Creates an override for a rotation in an on-call schedule.

> Body parameter

```json
{
  "RotationId": {},
  "NewContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "IdempotencyToken": {}
}
```

<h3 id="createrotationoverride-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRotationOverrideRequest](#schemacreaterotationoverriderequest)|true|none|
|» RotationId|body|object|true|none|
|» NewContactIds|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.CreateRotationOverride|

> Example responses

> 200 Response

```json
{
  "RotationOverrideId": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createrotationoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRotationOverrideResult](#schemacreaterotationoverrideresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivateContactChannel

<a id="opIdDeactivateContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DeactivateContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DeactivateContactChannel' \
  -d '{
    "ContactChannelId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DeactivateContactChannel`

To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.

> Body parameter

```json
{
  "ContactChannelId": {}
}
```

<h3 id="deactivatecontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeactivateContactChannelRequest](#schemadeactivatecontactchannelrequest)|true|none|
|» ContactChannelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DeactivateContactChannel|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deactivatecontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateContactChannelResult](#schemadeactivatecontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContact

<a id="opIdDeleteContact"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DeleteContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DeleteContact' \
  -d '{
    "ContactId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DeleteContact`

To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.

> Body parameter

```json
{
  "ContactId": {}
}
```

<h3 id="deletecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteContactRequest](#schemadeletecontactrequest)|true|none|
|» ContactId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DeleteContact|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactResult](#schemadeletecontactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContactChannel

<a id="opIdDeleteContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DeleteContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DeleteContactChannel' \
  -d '{
    "ContactChannelId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DeleteContactChannel`

To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.

> Body parameter

```json
{
  "ContactChannelId": {}
}
```

<h3 id="deletecontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteContactChannelRequest](#schemadeletecontactchannelrequest)|true|none|
|» ContactChannelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DeleteContactChannel|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletecontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactChannelResult](#schemadeletecontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRotation

<a id="opIdDeleteRotation"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DeleteRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DeleteRotation' \
  -d '{
    "RotationId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DeleteRotation`

Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.

> Body parameter

```json
{
  "RotationId": {}
}
```

<h3 id="deleterotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRotationRequest](#schemadeleterotationrequest)|true|none|
|» RotationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DeleteRotation|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleterotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRotationResult](#schemadeleterotationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRotationOverride

<a id="opIdDeleteRotationOverride"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DeleteRotationOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DeleteRotationOverride' \
  -d '{
    "RotationId": {},
    "RotationOverrideId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DeleteRotationOverride`

Deletes an existing override for an on-call rotation.

> Body parameter

```json
{
  "RotationId": {},
  "RotationOverrideId": {}
}
```

<h3 id="deleterotationoverride-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRotationOverrideRequest](#schemadeleterotationoverriderequest)|true|none|
|» RotationId|body|object|true|none|
|» RotationOverrideId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DeleteRotationOverride|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleterotationoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRotationOverrideResult](#schemadeleterotationoverrideresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEngagement

<a id="opIdDescribeEngagement"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DescribeEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DescribeEngagement' \
  -d '{
    "EngagementId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DescribeEngagement`

Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.

> Body parameter

```json
{
  "EngagementId": {}
}
```

<h3 id="describeengagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeEngagementRequest](#schemadescribeengagementrequest)|true|none|
|» EngagementId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DescribeEngagement|

> Example responses

> 200 Response

```json
{
  "ContactArn": {},
  "EngagementArn": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "StartTime": {},
  "StopTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describeengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEngagementResult](#schemadescribeengagementresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePage

<a id="opIdDescribePage"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.DescribePage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.DescribePage' \
  -d '{
    "PageId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.DescribePage`

Lists details of the engagement to a contact channel.

> Body parameter

```json
{
  "PageId": {}
}
```

<h3 id="describepage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePageRequest](#schemadescribepagerequest)|true|none|
|» PageId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.DescribePage|

> Example responses

> 200 Response

```json
{
  "PageArn": {},
  "EngagementArn": {},
  "ContactArn": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "SentTime": {},
  "ReadTime": {},
  "DeliveryTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describepage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePageResult](#schemadescribepageresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContact

<a id="opIdGetContact"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.GetContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.GetContact' \
  -d '{
    "ContactId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.GetContact`

Retrieves information about the specified contact or escalation plan.

> Body parameter

```json
{
  "ContactId": {}
}
```

<h3 id="getcontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetContactRequest](#schemagetcontactrequest)|true|none|
|» ContactId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.GetContact|

> Example responses

> 200 Response

```json
{
  "ContactArn": {},
  "Alias": {},
  "DisplayName": {},
  "Type": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactResult](#schemagetcontactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactChannel

<a id="opIdGetContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.GetContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.GetContactChannel' \
  -d '{
    "ContactChannelId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.GetContactChannel`

List details about a specific contact channel.

> Body parameter

```json
{
  "ContactChannelId": {}
}
```

<h3 id="getcontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetContactChannelRequest](#schemagetcontactchannelrequest)|true|none|
|» ContactChannelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.GetContactChannel|

> Example responses

> 200 Response

```json
{
  "ContactArn": {},
  "ContactChannelArn": {},
  "Name": {},
  "Type": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  },
  "ActivationStatus": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="getcontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactChannelResult](#schemagetcontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactPolicy

<a id="opIdGetContactPolicy"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.GetContactPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.GetContactPolicy' \
  -d '{
    "ContactArn": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.GetContactPolicy`

Retrieves the resource policies attached to the specified contact or escalation plan.

> Body parameter

```json
{
  "ContactArn": {}
}
```

<h3 id="getcontactpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetContactPolicyRequest](#schemagetcontactpolicyrequest)|true|none|
|» ContactArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.GetContactPolicy|

> Example responses

> 200 Response

```json
{
  "ContactArn": {},
  "Policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getcontactpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactPolicyResult](#schemagetcontactpolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRotation

<a id="opIdGetRotation"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.GetRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.GetRotation' \
  -d '{
    "RotationId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.GetRotation`

Retrieves information about an on-call rotation.

> Body parameter

```json
{
  "RotationId": {}
}
```

<h3 id="getrotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRotationRequest](#schemagetrotationrequest)|true|none|
|» RotationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.GetRotation|

> Example responses

> 200 Response

```json
{
  "RotationArn": {},
  "Name": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getrotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRotationResult](#schemagetrotationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRotationOverride

<a id="opIdGetRotationOverride"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.GetRotationOverride' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.GetRotationOverride' \
  -d '{
    "RotationId": {},
    "RotationOverrideId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.GetRotationOverride`

Retrieves information about an override to an on-call rotation.

> Body parameter

```json
{
  "RotationId": {},
  "RotationOverrideId": {}
}
```

<h3 id="getrotationoverride-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRotationOverrideRequest](#schemagetrotationoverriderequest)|true|none|
|» RotationId|body|object|true|none|
|» RotationOverrideId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.GetRotationOverride|

> Example responses

> 200 Response

```json
{
  "RotationOverrideId": {},
  "RotationArn": {},
  "NewContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "CreateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getrotationoverride-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRotationOverrideResult](#schemagetrotationoverrideresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContactChannels

<a id="opIdListContactChannels"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListContactChannels' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListContactChannels' \
  -d '{
    "ContactId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListContactChannels`

Lists all contact channels for the specified contact.

> Body parameter

```json
{
  "ContactId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcontactchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListContactChannelsRequest](#schemalistcontactchannelsrequest)|true|none|
|» ContactId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListContactChannels|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "ContactChannels": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listcontactchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactChannelsResult](#schemalistcontactchannelsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContacts

<a id="opIdListContacts"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListContacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListContacts' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "AliasPrefix": {},
    "Type": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListContacts`

Lists all contacts and escalation plans in Incident Manager.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "AliasPrefix": {},
  "Type": {}
}
```

<h3 id="listcontacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListContactsRequest](#schemalistcontactsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» AliasPrefix|body|object|false|none|
|» Type|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListContacts|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Contacts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContactsResult](#schemalistcontactsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListEngagements

<a id="opIdListEngagements"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListEngagements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListEngagements' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "IncidentId": {},
    "TimeRangeValue": {
      "StartTime": {},
      "EndTime": {}
    }
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListEngagements`

Lists all engagements that have happened in an incident.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "IncidentId": {},
  "TimeRangeValue": {
    "StartTime": {},
    "EndTime": {}
  }
}
```

<h3 id="listengagements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListEngagementsRequest](#schemalistengagementsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» IncidentId|body|object|false|none|
|» TimeRangeValue|body|object|false|none|
|» » StartTime|body|object|false|none|
|» » EndTime|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListEngagements|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Engagements": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listengagements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListEngagementsResult](#schemalistengagementsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPageReceipts

<a id="opIdListPageReceipts"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListPageReceipts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListPageReceipts' \
  -d '{
    "PageId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListPageReceipts`

Lists all of the engagements to contact channels that have been acknowledged.

> Body parameter

```json
{
  "PageId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpagereceipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPageReceiptsRequest](#schemalistpagereceiptsrequest)|true|none|
|» PageId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListPageReceipts|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Receipts": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpagereceipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPageReceiptsResult](#schemalistpagereceiptsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPageResolutions

<a id="opIdListPageResolutions"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListPageResolutions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListPageResolutions' \
  -d '{
    "NextToken": {},
    "PageId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListPageResolutions`

Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.

> Body parameter

```json
{
  "NextToken": {},
  "PageId": {}
}
```

<h3 id="listpageresolutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPageResolutionsRequest](#schemalistpageresolutionsrequest)|true|none|
|» NextToken|body|object|false|none|
|» PageId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListPageResolutions|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "PageResolutions": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpageresolutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPageResolutionsResult](#schemalistpageresolutionsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPagesByContact

<a id="opIdListPagesByContact"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListPagesByContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListPagesByContact' \
  -d '{
    "ContactId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListPagesByContact`

Lists the engagements to a contact's contact channels.

> Body parameter

```json
{
  "ContactId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpagesbycontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPagesByContactRequest](#schemalistpagesbycontactrequest)|true|none|
|» ContactId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListPagesByContact|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Pages": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpagesbycontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPagesByContactResult](#schemalistpagesbycontactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPagesByEngagement

<a id="opIdListPagesByEngagement"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListPagesByEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListPagesByEngagement' \
  -d '{
    "EngagementId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListPagesByEngagement`

Lists the engagements to contact channels that occurred by engaging a contact.

> Body parameter

```json
{
  "EngagementId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpagesbyengagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPagesByEngagementRequest](#schemalistpagesbyengagementrequest)|true|none|
|» EngagementId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListPagesByEngagement|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Pages": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listpagesbyengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPagesByEngagementResult](#schemalistpagesbyengagementresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPreviewRotationShifts

<a id="opIdListPreviewRotationShifts"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListPreviewRotationShifts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListPreviewRotationShifts' \
  -d '{
    "RotationStartTime": {},
    "StartTime": {},
    "EndTime": {},
    "Members": {},
    "TimeZoneId": {},
    "Recurrence": {
      "MonthlySettings": {},
      "WeeklySettings": {},
      "DailySettings": {},
      "NumberOfOnCalls": {},
      "ShiftCoverages": {
        "property1": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ],
        "property2": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ]
      },
      "RecurrenceMultiplier": {}
    },
    "Overrides": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListPreviewRotationShifts`

<p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>

> Body parameter

```json
{
  "RotationStartTime": {},
  "StartTime": {},
  "EndTime": {},
  "Members": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  },
  "Overrides": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listpreviewrotationshifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPreviewRotationShiftsRequest](#schemalistpreviewrotationshiftsrequest)|true|none|
|» RotationStartTime|body|object|false|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|true|none|
|» Members|body|object|true|none|
|» TimeZoneId|body|object|true|none|
|» Recurrence|body|object|true|none|
|» » MonthlySettings|body|object|false|none|
|» » WeeklySettings|body|object|false|none|
|» » DailySettings|body|object|false|none|
|» » NumberOfOnCalls|body|object|true|none|
|» » ShiftCoverages|body|object|false|none|
|» » » **additionalProperties**|body|[CoverageTimes](#schemacoveragetimes)|false|none|
|» » RecurrenceMultiplier|body|object|true|none|
|» Overrides|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListPreviewRotationShifts|

> Example responses

> 200 Response

```json
{
  "RotationShifts": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listpreviewrotationshifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPreviewRotationShiftsResult](#schemalistpreviewrotationshiftsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRotationOverrides

<a id="opIdListRotationOverrides"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListRotationOverrides' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListRotationOverrides' \
  -d '{
    "RotationId": {},
    "StartTime": {},
    "EndTime": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListRotationOverrides`

Retrieves a list of overrides currently specified for an on-call rotation.

> Body parameter

```json
{
  "RotationId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrotationoverrides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRotationOverridesRequest](#schemalistrotationoverridesrequest)|true|none|
|» RotationId|body|object|true|none|
|» StartTime|body|object|true|none|
|» EndTime|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListRotationOverrides|

> Example responses

> 200 Response

```json
{
  "RotationOverrides": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listrotationoverrides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRotationOverridesResult](#schemalistrotationoverridesresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRotationShifts

<a id="opIdListRotationShifts"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListRotationShifts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListRotationShifts' \
  -d '{
    "RotationId": {},
    "StartTime": {},
    "EndTime": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListRotationShifts`

Returns a list of shifts generated by an existing rotation in the system.

> Body parameter

```json
{
  "RotationId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrotationshifts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRotationShiftsRequest](#schemalistrotationshiftsrequest)|true|none|
|» RotationId|body|object|true|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListRotationShifts|

> Example responses

> 200 Response

```json
{
  "RotationShifts": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listrotationshifts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRotationShiftsResult](#schemalistrotationshiftsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRotations

<a id="opIdListRotations"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListRotations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListRotations' \
  -d '{
    "RotationNamePrefix": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListRotations`

Retrieves a list of on-call rotations.

> Body parameter

```json
{
  "RotationNamePrefix": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRotationsRequest](#schemalistrotationsrequest)|true|none|
|» RotationNamePrefix|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListRotations|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Rotations": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listrotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRotationsResult](#schemalistrotationsresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.ListTagsForResource`

Lists the tags of an escalation plan or contact.

> Body parameter

```json
{
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutContactPolicy

<a id="opIdPutContactPolicy"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.PutContactPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.PutContactPolicy' \
  -d '{
    "ContactArn": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.PutContactPolicy`

Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.

> Body parameter

```json
{
  "ContactArn": {},
  "Policy": {}
}
```

<h3 id="putcontactpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutContactPolicyRequest](#schemaputcontactpolicyrequest)|true|none|
|» ContactArn|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.PutContactPolicy|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putcontactpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutContactPolicyResult](#schemaputcontactpolicyresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendActivationCode

<a id="opIdSendActivationCode"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.SendActivationCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.SendActivationCode' \
  -d '{
    "ContactChannelId": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.SendActivationCode`

Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.

> Body parameter

```json
{
  "ContactChannelId": {}
}
```

<h3 id="sendactivationcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SendActivationCodeRequest](#schemasendactivationcoderequest)|true|none|
|» ContactChannelId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.SendActivationCode|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="sendactivationcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendActivationCodeResult](#schemasendactivationcoderesult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartEngagement

<a id="opIdStartEngagement"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.StartEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.StartEngagement' \
  -d '{
    "ContactId": {},
    "Sender": {},
    "Subject": {},
    "Content": {},
    "PublicSubject": {},
    "PublicContent": {},
    "IncidentId": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.StartEngagement`

Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.

> Body parameter

```json
{
  "ContactId": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "IdempotencyToken": {}
}
```

<h3 id="startengagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartEngagementRequest](#schemastartengagementrequest)|true|none|
|» ContactId|body|object|true|none|
|» Sender|body|object|true|none|
|» Subject|body|object|true|none|
|» Content|body|object|true|none|
|» PublicSubject|body|object|false|none|
|» PublicContent|body|object|false|none|
|» IncidentId|body|object|false|none|
|» IdempotencyToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.StartEngagement|

> Example responses

> 200 Response

```json
{
  "EngagementArn": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="startengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartEngagementResult](#schemastartengagementresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopEngagement

<a id="opIdStopEngagement"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.StopEngagement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.StopEngagement' \
  -d '{
    "EngagementId": {},
    "Reason": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.StopEngagement`

Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.

> Body parameter

```json
{
  "EngagementId": {},
  "Reason": {}
}
```

<h3 id="stopengagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopEngagementRequest](#schemastopengagementrequest)|true|none|
|» EngagementId|body|object|true|none|
|» Reason|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.StopEngagement|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="stopengagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopEngagementResult](#schemastopengagementresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.TagResource`

Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.TagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResult](#schematagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=SSMContacts.UntagResource`

Removes tags from the specified resource.

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResult](#schemauntagresourceresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContact

<a id="opIdUpdateContact"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.UpdateContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.UpdateContact' \
  -d '{
    "ContactId": {},
    "DisplayName": {},
    "Plan": {
      "Stages": {},
      "RotationIds": {}
    }
  }'
```

`POST /#X-Amz-Target=SSMContacts.UpdateContact`

Updates the contact or escalation plan specified.

> Body parameter

```json
{
  "ContactId": {},
  "DisplayName": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  }
}
```

<h3 id="updatecontact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateContactRequest](#schemaupdatecontactrequest)|true|none|
|» ContactId|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Plan|body|object|false|none|
|» » Stages|body|object|false|none|
|» » RotationIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.UpdateContact|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactResult](#schemaupdatecontactresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|
|486|486|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContactChannel

<a id="opIdUpdateContactChannel"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.UpdateContactChannel' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.UpdateContactChannel' \
  -d '{
    "ContactChannelId": {},
    "Name": {},
    "DeliveryAddress": {
      "SimpleAddress": {}
    }
  }'
```

`POST /#X-Amz-Target=SSMContacts.UpdateContactChannel`

Updates a contact's contact channel.

> Body parameter

```json
{
  "ContactChannelId": {},
  "Name": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  }
}
```

<h3 id="updatecontactchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateContactChannelRequest](#schemaupdatecontactchannelrequest)|true|none|
|» ContactChannelId|body|object|true|none|
|» Name|body|object|false|none|
|» DeliveryAddress|body|object|false|none|
|» » SimpleAddress|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.UpdateContactChannel|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatecontactchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactChannelResult](#schemaupdatecontactchannelresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|DataEncryptionException|[DataEncryptionException](#schemadataencryptionexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRotation

<a id="opIdUpdateRotation"></a>

> Code samples

```bash
curl 'https://ssm-contacts.us-east-1.amazonaws.com/#X-Amz-Target=SSMContacts.UpdateRotation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SSMContacts.UpdateRotation' \
  -d '{
    "RotationId": {},
    "ContactIds": {},
    "StartTime": {},
    "TimeZoneId": {},
    "Recurrence": {
      "MonthlySettings": {},
      "WeeklySettings": {},
      "DailySettings": {},
      "NumberOfOnCalls": {},
      "ShiftCoverages": {
        "property1": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ],
        "property2": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ]
      },
      "RecurrenceMultiplier": {}
    }
  }'
```

`POST /#X-Amz-Target=SSMContacts.UpdateRotation`

Updates the information specified for an on-call rotation.

> Body parameter

```json
{
  "RotationId": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  }
}
```

<h3 id="updaterotation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRotationRequest](#schemaupdaterotationrequest)|true|none|
|» RotationId|body|object|true|none|
|» ContactIds|body|object|false|none|
|» StartTime|body|object|false|none|
|» TimeZoneId|body|object|false|none|
|» Recurrence|body|object|true|none|
|» » MonthlySettings|body|object|false|none|
|» » WeeklySettings|body|object|false|none|
|» » DailySettings|body|object|false|none|
|» » NumberOfOnCalls|body|object|true|none|
|» » ShiftCoverages|body|object|false|none|
|» » » **additionalProperties**|body|[CoverageTimes](#schemacoveragetimes)|false|none|
|» » RecurrenceMultiplier|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SSMContacts.UpdateRotation|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updaterotation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRotationResult](#schemaupdaterotationresult)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptPageResult">AcceptPageResult</h2>
<!-- backwards compatibility -->
<a id="schemaacceptpageresult"></a>
<a id="schema_AcceptPageResult"></a>
<a id="tocSacceptpageresult"></a>
<a id="tocsacceptpageresult"></a>

```json
{}
```

<h2 id="tocS_AcceptPageRequest">AcceptPageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptpagerequest"></a>
<a id="schema_AcceptPageRequest"></a>
<a id="tocSacceptpagerequest"></a>
<a id="tocsacceptpagerequest"></a>

```json
{
  "PageId": {},
  "ContactChannelId": {},
  "AcceptType": {},
  "Note": {},
  "AcceptCode": {},
  "AcceptCodeValidation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageId|object|true|none|none|
|ContactChannelId|object|false|none|none|
|AcceptType|object|true|none|none|
|Note|object|false|none|none|
|AcceptCode|object|true|none|none|
|AcceptCodeValidation|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ActivateContactChannelResult">ActivateContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemaactivatecontactchannelresult"></a>
<a id="schema_ActivateContactChannelResult"></a>
<a id="tocSactivatecontactchannelresult"></a>
<a id="tocsactivatecontactchannelresult"></a>

```json
{}
```

<h2 id="tocS_ActivateContactChannelRequest">ActivateContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivatecontactchannelrequest"></a>
<a id="schema_ActivateContactChannelRequest"></a>
<a id="tocSactivatecontactchannelrequest"></a>
<a id="tocsactivatecontactchannelrequest"></a>

```json
{
  "ContactChannelId": {},
  "ActivationCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|
|ActivationCode|object|true|none|none|

<h2 id="tocS_CreateContactResult">CreateContactResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactresult"></a>
<a id="schema_CreateContactResult"></a>
<a id="tocScreatecontactresult"></a>
<a id="tocscreatecontactresult"></a>

```json
{
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|

<h2 id="tocS_CreateContactRequest">CreateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactrequest"></a>
<a id="schema_CreateContactRequest"></a>
<a id="tocScreatecontactrequest"></a>
<a id="tocscreatecontactrequest"></a>

```json
{
  "Alias": {},
  "DisplayName": {},
  "Type": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  },
  "Tags": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alias|object|true|none|none|
|DisplayName|object|false|none|none|
|Type|object|true|none|none|
|Plan|object|true|none|none|
|Tags|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_DataEncryptionException">DataEncryptionException</h2>
<!-- backwards compatibility -->
<a id="schemadataencryptionexception"></a>
<a id="schema_DataEncryptionException"></a>
<a id="tocSdataencryptionexception"></a>
<a id="tocsdataencryptionexception"></a>

```json
null
```

<h2 id="tocS_CreateContactChannelResult">CreateContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactchannelresult"></a>
<a id="schema_CreateContactChannelResult"></a>
<a id="tocScreatecontactchannelresult"></a>
<a id="tocscreatecontactchannelresult"></a>

```json
{
  "ContactChannelArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelArn|object|true|none|none|

<h2 id="tocS_CreateContactChannelRequest">CreateContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactchannelrequest"></a>
<a id="schema_CreateContactChannelRequest"></a>
<a id="tocScreatecontactchannelrequest"></a>
<a id="tocscreatecontactchannelrequest"></a>

```json
{
  "ContactId": {},
  "Name": {},
  "Type": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  },
  "DeferActivation": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|DeliveryAddress|object|true|none|none|
|DeferActivation|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_CreateRotationResult">CreateRotationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterotationresult"></a>
<a id="schema_CreateRotationResult"></a>
<a id="tocScreaterotationresult"></a>
<a id="tocscreaterotationresult"></a>

```json
{
  "RotationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationArn|object|true|none|none|

<h2 id="tocS_CreateRotationRequest">CreateRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterotationrequest"></a>
<a id="schema_CreateRotationRequest"></a>
<a id="tocScreaterotationrequest"></a>
<a id="tocscreaterotationrequest"></a>

```json
{
  "Name": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  },
  "Tags": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ContactIds|object|true|none|none|
|StartTime|object|false|none|none|
|TimeZoneId|object|true|none|none|
|Recurrence|object|true|none|none|
|Tags|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_CreateRotationOverrideResult">CreateRotationOverrideResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterotationoverrideresult"></a>
<a id="schema_CreateRotationOverrideResult"></a>
<a id="tocScreaterotationoverrideresult"></a>
<a id="tocscreaterotationoverrideresult"></a>

```json
{
  "RotationOverrideId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationOverrideId|object|true|none|none|

<h2 id="tocS_CreateRotationOverrideRequest">CreateRotationOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterotationoverriderequest"></a>
<a id="schema_CreateRotationOverrideRequest"></a>
<a id="tocScreaterotationoverriderequest"></a>
<a id="tocscreaterotationoverriderequest"></a>

```json
{
  "RotationId": {},
  "NewContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|NewContactIds|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_DeactivateContactChannelResult">DeactivateContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatecontactchannelresult"></a>
<a id="schema_DeactivateContactChannelResult"></a>
<a id="tocSdeactivatecontactchannelresult"></a>
<a id="tocsdeactivatecontactchannelresult"></a>

```json
{}
```

<h2 id="tocS_DeactivateContactChannelRequest">DeactivateContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatecontactchannelrequest"></a>
<a id="schema_DeactivateContactChannelRequest"></a>
<a id="tocSdeactivatecontactchannelrequest"></a>
<a id="tocsdeactivatecontactchannelrequest"></a>

```json
{
  "ContactChannelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|

<h2 id="tocS_DeleteContactResult">DeleteContactResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactresult"></a>
<a id="schema_DeleteContactResult"></a>
<a id="tocSdeletecontactresult"></a>
<a id="tocsdeletecontactresult"></a>

```json
{}
```

<h2 id="tocS_DeleteContactRequest">DeleteContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactrequest"></a>
<a id="schema_DeleteContactRequest"></a>
<a id="tocSdeletecontactrequest"></a>
<a id="tocsdeletecontactrequest"></a>

```json
{
  "ContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|

<h2 id="tocS_DeleteContactChannelResult">DeleteContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactchannelresult"></a>
<a id="schema_DeleteContactChannelResult"></a>
<a id="tocSdeletecontactchannelresult"></a>
<a id="tocsdeletecontactchannelresult"></a>

```json
{}
```

<h2 id="tocS_DeleteContactChannelRequest">DeleteContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactchannelrequest"></a>
<a id="schema_DeleteContactChannelRequest"></a>
<a id="tocSdeletecontactchannelrequest"></a>
<a id="tocsdeletecontactchannelrequest"></a>

```json
{
  "ContactChannelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|

<h2 id="tocS_DeleteRotationResult">DeleteRotationResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterotationresult"></a>
<a id="schema_DeleteRotationResult"></a>
<a id="tocSdeleterotationresult"></a>
<a id="tocsdeleterotationresult"></a>

```json
{}
```

<h2 id="tocS_DeleteRotationRequest">DeleteRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterotationrequest"></a>
<a id="schema_DeleteRotationRequest"></a>
<a id="tocSdeleterotationrequest"></a>
<a id="tocsdeleterotationrequest"></a>

```json
{
  "RotationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|

<h2 id="tocS_DeleteRotationOverrideResult">DeleteRotationOverrideResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleterotationoverrideresult"></a>
<a id="schema_DeleteRotationOverrideResult"></a>
<a id="tocSdeleterotationoverrideresult"></a>
<a id="tocsdeleterotationoverrideresult"></a>

```json
{}
```

<h2 id="tocS_DeleteRotationOverrideRequest">DeleteRotationOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterotationoverriderequest"></a>
<a id="schema_DeleteRotationOverrideRequest"></a>
<a id="tocSdeleterotationoverriderequest"></a>
<a id="tocsdeleterotationoverriderequest"></a>

```json
{
  "RotationId": {},
  "RotationOverrideId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|RotationOverrideId|object|true|none|none|

<h2 id="tocS_DescribeEngagementResult">DescribeEngagementResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeengagementresult"></a>
<a id="schema_DescribeEngagementResult"></a>
<a id="tocSdescribeengagementresult"></a>
<a id="tocsdescribeengagementresult"></a>

```json
{
  "ContactArn": {},
  "EngagementArn": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "StartTime": {},
  "StopTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|EngagementArn|object|true|none|none|
|Sender|object|true|none|none|
|Subject|object|true|none|none|
|Content|object|true|none|none|
|PublicSubject|object|false|none|none|
|PublicContent|object|false|none|none|
|IncidentId|object|false|none|none|
|StartTime|object|false|none|none|
|StopTime|object|false|none|none|

<h2 id="tocS_DescribeEngagementRequest">DescribeEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeengagementrequest"></a>
<a id="schema_DescribeEngagementRequest"></a>
<a id="tocSdescribeengagementrequest"></a>
<a id="tocsdescribeengagementrequest"></a>

```json
{
  "EngagementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementId|object|true|none|none|

<h2 id="tocS_DescribePageResult">DescribePageResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribepageresult"></a>
<a id="schema_DescribePageResult"></a>
<a id="tocSdescribepageresult"></a>
<a id="tocsdescribepageresult"></a>

```json
{
  "PageArn": {},
  "EngagementArn": {},
  "ContactArn": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "SentTime": {},
  "ReadTime": {},
  "DeliveryTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageArn|object|true|none|none|
|EngagementArn|object|true|none|none|
|ContactArn|object|true|none|none|
|Sender|object|true|none|none|
|Subject|object|true|none|none|
|Content|object|true|none|none|
|PublicSubject|object|false|none|none|
|PublicContent|object|false|none|none|
|IncidentId|object|false|none|none|
|SentTime|object|false|none|none|
|ReadTime|object|false|none|none|
|DeliveryTime|object|false|none|none|

<h2 id="tocS_DescribePageRequest">DescribePageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepagerequest"></a>
<a id="schema_DescribePageRequest"></a>
<a id="tocSdescribepagerequest"></a>
<a id="tocsdescribepagerequest"></a>

```json
{
  "PageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageId|object|true|none|none|

<h2 id="tocS_GetContactResult">GetContactResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactresult"></a>
<a id="schema_GetContactResult"></a>
<a id="tocSgetcontactresult"></a>
<a id="tocsgetcontactresult"></a>

```json
{
  "ContactArn": {},
  "Alias": {},
  "DisplayName": {},
  "Type": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|Alias|object|true|none|none|
|DisplayName|object|false|none|none|
|Type|object|true|none|none|
|Plan|object|true|none|none|

<h2 id="tocS_GetContactRequest">GetContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactrequest"></a>
<a id="schema_GetContactRequest"></a>
<a id="tocSgetcontactrequest"></a>
<a id="tocsgetcontactrequest"></a>

```json
{
  "ContactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|

<h2 id="tocS_GetContactChannelResult">GetContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactchannelresult"></a>
<a id="schema_GetContactChannelResult"></a>
<a id="tocSgetcontactchannelresult"></a>
<a id="tocsgetcontactchannelresult"></a>

```json
{
  "ContactArn": {},
  "ContactChannelArn": {},
  "Name": {},
  "Type": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  },
  "ActivationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|ContactChannelArn|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|DeliveryAddress|object|true|none|none|
|ActivationStatus|object|false|none|none|

<h2 id="tocS_GetContactChannelRequest">GetContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactchannelrequest"></a>
<a id="schema_GetContactChannelRequest"></a>
<a id="tocSgetcontactchannelrequest"></a>
<a id="tocsgetcontactchannelrequest"></a>

```json
{
  "ContactChannelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|

<h2 id="tocS_GetContactPolicyResult">GetContactPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactpolicyresult"></a>
<a id="schema_GetContactPolicyResult"></a>
<a id="tocSgetcontactpolicyresult"></a>
<a id="tocsgetcontactpolicyresult"></a>

```json
{
  "ContactArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_GetContactPolicyRequest">GetContactPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactpolicyrequest"></a>
<a id="schema_GetContactPolicyRequest"></a>
<a id="tocSgetcontactpolicyrequest"></a>
<a id="tocsgetcontactpolicyrequest"></a>

```json
{
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|

<h2 id="tocS_GetRotationResult">GetRotationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrotationresult"></a>
<a id="schema_GetRotationResult"></a>
<a id="tocSgetrotationresult"></a>
<a id="tocsgetrotationresult"></a>

```json
{
  "RotationArn": {},
  "Name": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationArn|object|true|none|none|
|Name|object|true|none|none|
|ContactIds|object|true|none|none|
|StartTime|object|true|none|none|
|TimeZoneId|object|true|none|none|
|Recurrence|object|true|none|none|

<h2 id="tocS_GetRotationRequest">GetRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrotationrequest"></a>
<a id="schema_GetRotationRequest"></a>
<a id="tocSgetrotationrequest"></a>
<a id="tocsgetrotationrequest"></a>

```json
{
  "RotationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|

<h2 id="tocS_GetRotationOverrideResult">GetRotationOverrideResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrotationoverrideresult"></a>
<a id="schema_GetRotationOverrideResult"></a>
<a id="tocSgetrotationoverrideresult"></a>
<a id="tocsgetrotationoverrideresult"></a>

```json
{
  "RotationOverrideId": {},
  "RotationArn": {},
  "NewContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "CreateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationOverrideId|object|false|none|none|
|RotationArn|object|false|none|none|
|NewContactIds|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|CreateTime|object|false|none|none|

<h2 id="tocS_GetRotationOverrideRequest">GetRotationOverrideRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrotationoverriderequest"></a>
<a id="schema_GetRotationOverrideRequest"></a>
<a id="tocSgetrotationoverriderequest"></a>
<a id="tocsgetrotationoverriderequest"></a>

```json
{
  "RotationId": {},
  "RotationOverrideId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|RotationOverrideId|object|true|none|none|

<h2 id="tocS_ListContactChannelsResult">ListContactChannelsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactchannelsresult"></a>
<a id="schema_ListContactChannelsResult"></a>
<a id="tocSlistcontactchannelsresult"></a>
<a id="tocslistcontactchannelsresult"></a>

```json
{
  "NextToken": {},
  "ContactChannels": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ContactChannels|object|true|none|none|

<h2 id="tocS_ListContactChannelsRequest">ListContactChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactchannelsrequest"></a>
<a id="schema_ListContactChannelsRequest"></a>
<a id="tocSlistcontactchannelsrequest"></a>
<a id="tocslistcontactchannelsrequest"></a>

```json
{
  "ContactId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListContactsResult">ListContactsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsresult"></a>
<a id="schema_ListContactsResult"></a>
<a id="tocSlistcontactsresult"></a>
<a id="tocslistcontactsresult"></a>

```json
{
  "NextToken": {},
  "Contacts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Contacts|object|false|none|none|

<h2 id="tocS_ListContactsRequest">ListContactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactsrequest"></a>
<a id="schema_ListContactsRequest"></a>
<a id="tocSlistcontactsrequest"></a>
<a id="tocslistcontactsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "AliasPrefix": {},
  "Type": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|AliasPrefix|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_ListEngagementsResult">ListEngagementsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistengagementsresult"></a>
<a id="schema_ListEngagementsResult"></a>
<a id="tocSlistengagementsresult"></a>
<a id="tocslistengagementsresult"></a>

```json
{
  "NextToken": {},
  "Engagements": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Engagements|object|true|none|none|

<h2 id="tocS_ListEngagementsRequest">ListEngagementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistengagementsrequest"></a>
<a id="schema_ListEngagementsRequest"></a>
<a id="tocSlistengagementsrequest"></a>
<a id="tocslistengagementsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "IncidentId": {},
  "TimeRangeValue": {
    "StartTime": {},
    "EndTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|IncidentId|object|false|none|none|
|TimeRangeValue|object|false|none|none|

<h2 id="tocS_ListPageReceiptsResult">ListPageReceiptsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpagereceiptsresult"></a>
<a id="schema_ListPageReceiptsResult"></a>
<a id="tocSlistpagereceiptsresult"></a>
<a id="tocslistpagereceiptsresult"></a>

```json
{
  "NextToken": {},
  "Receipts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Receipts|object|false|none|none|

<h2 id="tocS_ListPageReceiptsRequest">ListPageReceiptsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpagereceiptsrequest"></a>
<a id="schema_ListPageReceiptsRequest"></a>
<a id="tocSlistpagereceiptsrequest"></a>
<a id="tocslistpagereceiptsrequest"></a>

```json
{
  "PageId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPageResolutionsResult">ListPageResolutionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpageresolutionsresult"></a>
<a id="schema_ListPageResolutionsResult"></a>
<a id="tocSlistpageresolutionsresult"></a>
<a id="tocslistpageresolutionsresult"></a>

```json
{
  "NextToken": {},
  "PageResolutions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PageResolutions|object|true|none|none|

<h2 id="tocS_ListPageResolutionsRequest">ListPageResolutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpageresolutionsrequest"></a>
<a id="schema_ListPageResolutionsRequest"></a>
<a id="tocSlistpageresolutionsrequest"></a>
<a id="tocslistpageresolutionsrequest"></a>

```json
{
  "NextToken": {},
  "PageId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PageId|object|true|none|none|

<h2 id="tocS_ListPagesByContactResult">ListPagesByContactResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpagesbycontactresult"></a>
<a id="schema_ListPagesByContactResult"></a>
<a id="tocSlistpagesbycontactresult"></a>
<a id="tocslistpagesbycontactresult"></a>

```json
{
  "NextToken": {},
  "Pages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Pages|object|true|none|none|

<h2 id="tocS_ListPagesByContactRequest">ListPagesByContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpagesbycontactrequest"></a>
<a id="schema_ListPagesByContactRequest"></a>
<a id="tocSlistpagesbycontactrequest"></a>
<a id="tocslistpagesbycontactrequest"></a>

```json
{
  "ContactId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPagesByEngagementResult">ListPagesByEngagementResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpagesbyengagementresult"></a>
<a id="schema_ListPagesByEngagementResult"></a>
<a id="tocSlistpagesbyengagementresult"></a>
<a id="tocslistpagesbyengagementresult"></a>

```json
{
  "NextToken": {},
  "Pages": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Pages|object|true|none|none|

<h2 id="tocS_ListPagesByEngagementRequest">ListPagesByEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpagesbyengagementrequest"></a>
<a id="schema_ListPagesByEngagementRequest"></a>
<a id="tocSlistpagesbyengagementrequest"></a>
<a id="tocslistpagesbyengagementrequest"></a>

```json
{
  "EngagementId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListPreviewRotationShiftsResult">ListPreviewRotationShiftsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpreviewrotationshiftsresult"></a>
<a id="schema_ListPreviewRotationShiftsResult"></a>
<a id="tocSlistpreviewrotationshiftsresult"></a>
<a id="tocslistpreviewrotationshiftsresult"></a>

```json
{
  "RotationShifts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationShifts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPreviewRotationShiftsRequest">ListPreviewRotationShiftsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpreviewrotationshiftsrequest"></a>
<a id="schema_ListPreviewRotationShiftsRequest"></a>
<a id="tocSlistpreviewrotationshiftsrequest"></a>
<a id="tocslistpreviewrotationshiftsrequest"></a>

```json
{
  "RotationStartTime": {},
  "StartTime": {},
  "EndTime": {},
  "Members": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  },
  "Overrides": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationStartTime|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|true|none|none|
|Members|object|true|none|none|
|TimeZoneId|object|true|none|none|
|Recurrence|object|true|none|none|
|Overrides|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRotationOverridesResult">ListRotationOverridesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationoverridesresult"></a>
<a id="schema_ListRotationOverridesResult"></a>
<a id="tocSlistrotationoverridesresult"></a>
<a id="tocslistrotationoverridesresult"></a>

```json
{
  "RotationOverrides": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationOverrides|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRotationOverridesRequest">ListRotationOverridesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationoverridesrequest"></a>
<a id="schema_ListRotationOverridesRequest"></a>
<a id="tocSlistrotationoverridesrequest"></a>
<a id="tocslistrotationoverridesrequest"></a>

```json
{
  "RotationId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRotationShiftsResult">ListRotationShiftsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationshiftsresult"></a>
<a id="schema_ListRotationShiftsResult"></a>
<a id="tocSlistrotationshiftsresult"></a>
<a id="tocslistrotationshiftsresult"></a>

```json
{
  "RotationShifts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationShifts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRotationShiftsRequest">ListRotationShiftsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationshiftsrequest"></a>
<a id="schema_ListRotationShiftsRequest"></a>
<a id="tocSlistrotationshiftsrequest"></a>
<a id="tocslistrotationshiftsrequest"></a>

```json
{
  "RotationId": {},
  "StartTime": {},
  "EndTime": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|StartTime|object|false|none|none|
|EndTime|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRotationsResult">ListRotationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationsresult"></a>
<a id="schema_ListRotationsResult"></a>
<a id="tocSlistrotationsresult"></a>
<a id="tocslistrotationsresult"></a>

```json
{
  "NextToken": {},
  "Rotations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Rotations|object|true|none|none|

<h2 id="tocS_ListRotationsRequest">ListRotationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrotationsrequest"></a>
<a id="schema_ListRotationsRequest"></a>
<a id="tocSlistrotationsrequest"></a>
<a id="tocslistrotationsrequest"></a>

```json
{
  "RotationNamePrefix": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationNamePrefix|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_PutContactPolicyResult">PutContactPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputcontactpolicyresult"></a>
<a id="schema_PutContactPolicyResult"></a>
<a id="tocSputcontactpolicyresult"></a>
<a id="tocsputcontactpolicyresult"></a>

```json
{}
```

<h2 id="tocS_PutContactPolicyRequest">PutContactPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcontactpolicyrequest"></a>
<a id="schema_PutContactPolicyRequest"></a>
<a id="tocSputcontactpolicyrequest"></a>
<a id="tocsputcontactpolicyrequest"></a>

```json
{
  "ContactArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_SendActivationCodeResult">SendActivationCodeResult</h2>
<!-- backwards compatibility -->
<a id="schemasendactivationcoderesult"></a>
<a id="schema_SendActivationCodeResult"></a>
<a id="tocSsendactivationcoderesult"></a>
<a id="tocssendactivationcoderesult"></a>

```json
{}
```

<h2 id="tocS_SendActivationCodeRequest">SendActivationCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendactivationcoderequest"></a>
<a id="schema_SendActivationCodeRequest"></a>
<a id="tocSsendactivationcoderequest"></a>
<a id="tocssendactivationcoderequest"></a>

```json
{
  "ContactChannelId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|

<h2 id="tocS_StartEngagementResult">StartEngagementResult</h2>
<!-- backwards compatibility -->
<a id="schemastartengagementresult"></a>
<a id="schema_StartEngagementResult"></a>
<a id="tocSstartengagementresult"></a>
<a id="tocsstartengagementresult"></a>

```json
{
  "EngagementArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementArn|object|true|none|none|

<h2 id="tocS_StartEngagementRequest">StartEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartengagementrequest"></a>
<a id="schema_StartEngagementRequest"></a>
<a id="tocSstartengagementrequest"></a>
<a id="tocsstartengagementrequest"></a>

```json
{
  "ContactId": {},
  "Sender": {},
  "Subject": {},
  "Content": {},
  "PublicSubject": {},
  "PublicContent": {},
  "IncidentId": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|Sender|object|true|none|none|
|Subject|object|true|none|none|
|Content|object|true|none|none|
|PublicSubject|object|false|none|none|
|PublicContent|object|false|none|none|
|IncidentId|object|false|none|none|
|IdempotencyToken|object|false|none|none|

<h2 id="tocS_StopEngagementResult">StopEngagementResult</h2>
<!-- backwards compatibility -->
<a id="schemastopengagementresult"></a>
<a id="schema_StopEngagementResult"></a>
<a id="tocSstopengagementresult"></a>
<a id="tocsstopengagementresult"></a>

```json
{}
```

<h2 id="tocS_StopEngagementRequest">StopEngagementRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopengagementrequest"></a>
<a id="schema_StopEngagementRequest"></a>
<a id="tocSstopengagementrequest"></a>
<a id="tocsstopengagementrequest"></a>

```json
{
  "EngagementId": {},
  "Reason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementId|object|true|none|none|
|Reason|object|false|none|none|

<h2 id="tocS_TagResourceResult">TagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresult"></a>
<a id="schema_TagResourceResult"></a>
<a id="tocStagresourceresult"></a>
<a id="tocstagresourceresult"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResult">UntagResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresult"></a>
<a id="schema_UntagResourceResult"></a>
<a id="tocSuntagresourceresult"></a>
<a id="tocsuntagresourceresult"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateContactResult">UpdateContactResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactresult"></a>
<a id="schema_UpdateContactResult"></a>
<a id="tocSupdatecontactresult"></a>
<a id="tocsupdatecontactresult"></a>

```json
{}
```

<h2 id="tocS_UpdateContactRequest">UpdateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactrequest"></a>
<a id="schema_UpdateContactRequest"></a>
<a id="tocSupdatecontactrequest"></a>
<a id="tocsupdatecontactrequest"></a>

```json
{
  "ContactId": {},
  "DisplayName": {},
  "Plan": {
    "Stages": {},
    "RotationIds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|true|none|none|
|DisplayName|object|false|none|none|
|Plan|object|false|none|none|

<h2 id="tocS_UpdateContactChannelResult">UpdateContactChannelResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactchannelresult"></a>
<a id="schema_UpdateContactChannelResult"></a>
<a id="tocSupdatecontactchannelresult"></a>
<a id="tocsupdatecontactchannelresult"></a>

```json
{}
```

<h2 id="tocS_UpdateContactChannelRequest">UpdateContactChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactchannelrequest"></a>
<a id="schema_UpdateContactChannelRequest"></a>
<a id="tocSupdatecontactchannelrequest"></a>
<a id="tocsupdatecontactchannelrequest"></a>

```json
{
  "ContactChannelId": {},
  "Name": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|
|Name|object|false|none|none|
|DeliveryAddress|object|false|none|none|

<h2 id="tocS_UpdateRotationResult">UpdateRotationResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterotationresult"></a>
<a id="schema_UpdateRotationResult"></a>
<a id="tocSupdaterotationresult"></a>
<a id="tocsupdaterotationresult"></a>

```json
{}
```

<h2 id="tocS_UpdateRotationRequest">UpdateRotationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterotationrequest"></a>
<a id="schema_UpdateRotationRequest"></a>
<a id="tocSupdaterotationrequest"></a>
<a id="tocsupdaterotationrequest"></a>

```json
{
  "RotationId": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationId|object|true|none|none|
|ContactIds|object|false|none|none|
|StartTime|object|false|none|none|
|TimeZoneId|object|false|none|none|
|Recurrence|object|true|none|none|

<h2 id="tocS_AcceptCode">AcceptCode</h2>
<!-- backwards compatibility -->
<a id="schemaacceptcode"></a>
<a id="schema_AcceptCode"></a>
<a id="tocSacceptcode"></a>
<a id="tocsacceptcode"></a>

```json
"string"
```

<h2 id="tocS_AcceptCodeValidation">AcceptCodeValidation</h2>
<!-- backwards compatibility -->
<a id="schemaacceptcodevalidation"></a>
<a id="schema_AcceptCodeValidation"></a>
<a id="tocSacceptcodevalidation"></a>
<a id="tocsacceptcodevalidation"></a>

```json
"IGNORE"
```

<h2 id="tocS_SsmContactsArn">SsmContactsArn</h2>
<!-- backwards compatibility -->
<a id="schemassmcontactsarn"></a>
<a id="schema_SsmContactsArn"></a>
<a id="tocSssmcontactsarn"></a>
<a id="tocsssmcontactsarn"></a>

```json
"string"
```

<h2 id="tocS_AcceptType">AcceptType</h2>
<!-- backwards compatibility -->
<a id="schemaaccepttype"></a>
<a id="schema_AcceptType"></a>
<a id="tocSaccepttype"></a>
<a id="tocsaccepttype"></a>

```json
"DELIVERED"
```

<h2 id="tocS_ReceiptInfo">ReceiptInfo</h2>
<!-- backwards compatibility -->
<a id="schemareceiptinfo"></a>
<a id="schema_ReceiptInfo"></a>
<a id="tocSreceiptinfo"></a>
<a id="tocsreceiptinfo"></a>

```json
"string"
```

<h2 id="tocS_ActivationCode">ActivationCode</h2>
<!-- backwards compatibility -->
<a id="schemaactivationcode"></a>
<a id="schema_ActivationCode"></a>
<a id="tocSactivationcode"></a>
<a id="tocsactivationcode"></a>

```json
"string"
```

<h2 id="tocS_ActivationStatus">ActivationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaactivationstatus"></a>
<a id="schema_ActivationStatus"></a>
<a id="tocSactivationstatus"></a>
<a id="tocsactivationstatus"></a>

```json
"ACTIVATED"
```

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_ChannelName">ChannelName</h2>
<!-- backwards compatibility -->
<a id="schemachannelname"></a>
<a id="schema_ChannelName"></a>
<a id="tocSchannelname"></a>
<a id="tocschannelname"></a>

```json
"string"
```

<h2 id="tocS_RetryIntervalInMinutes">RetryIntervalInMinutes</h2>
<!-- backwards compatibility -->
<a id="schemaretryintervalinminutes"></a>
<a id="schema_RetryIntervalInMinutes"></a>
<a id="tocSretryintervalinminutes"></a>
<a id="tocsretryintervalinminutes"></a>

```json
0
```

<h2 id="tocS_ChannelTargetInfo">ChannelTargetInfo</h2>
<!-- backwards compatibility -->
<a id="schemachanneltargetinfo"></a>
<a id="schema_ChannelTargetInfo"></a>
<a id="tocSchanneltargetinfo"></a>
<a id="tocschanneltargetinfo"></a>

```json
{
  "ContactChannelId": {},
  "RetryIntervalInMinutes": {}
}
```

Information about the contact channel that Incident Manager uses to engage the contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelId|object|true|none|none|
|RetryIntervalInMinutes|object|false|none|none|

<h2 id="tocS_ChannelType">ChannelType</h2>
<!-- backwards compatibility -->
<a id="schemachanneltype"></a>
<a id="schema_ChannelType"></a>
<a id="tocSchanneltype"></a>
<a id="tocschanneltype"></a>

```json
"SMS"
```

<h2 id="tocS_ContactAlias">ContactAlias</h2>
<!-- backwards compatibility -->
<a id="schemacontactalias"></a>
<a id="schema_ContactAlias"></a>
<a id="tocScontactalias"></a>
<a id="tocscontactalias"></a>

```json
"string"
```

<h2 id="tocS_ContactName">ContactName</h2>
<!-- backwards compatibility -->
<a id="schemacontactname"></a>
<a id="schema_ContactName"></a>
<a id="tocScontactname"></a>
<a id="tocscontactname"></a>

```json
"string"
```

<h2 id="tocS_ContactType">ContactType</h2>
<!-- backwards compatibility -->
<a id="schemacontacttype"></a>
<a id="schema_ContactType"></a>
<a id="tocScontacttype"></a>
<a id="tocscontacttype"></a>

```json
"PERSONAL"
```

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "ContactArn": {},
  "Alias": {},
  "DisplayName": {},
  "Type": {}
}
```

A personal contact or escalation plan that Incident Manager engages during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|Alias|object|true|none|none|
|DisplayName|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ContactChannelAddress">ContactChannelAddress</h2>
<!-- backwards compatibility -->
<a id="schemacontactchanneladdress"></a>
<a id="schema_ContactChannelAddress"></a>
<a id="tocScontactchanneladdress"></a>
<a id="tocscontactchanneladdress"></a>

```json
{
  "SimpleAddress": {}
}
```

The details that Incident Manager uses when trying to engage the contact channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SimpleAddress|object|false|none|none|

<h2 id="tocS_ContactChannel">ContactChannel</h2>
<!-- backwards compatibility -->
<a id="schemacontactchannel"></a>
<a id="schema_ContactChannel"></a>
<a id="tocScontactchannel"></a>
<a id="tocscontactchannel"></a>

```json
{
  "ContactChannelArn": {},
  "ContactArn": {},
  "Name": {},
  "Type": {},
  "DeliveryAddress": {
    "SimpleAddress": {}
  },
  "ActivationStatus": {}
}
```

The method that Incident Manager uses to engage a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelArn|object|true|none|none|
|ContactArn|object|true|none|none|
|Name|object|true|none|none|
|Type|object|false|none|none|
|DeliveryAddress|object|true|none|none|
|ActivationStatus|object|true|none|none|

<h2 id="tocS_SimpleAddress">SimpleAddress</h2>
<!-- backwards compatibility -->
<a id="schemasimpleaddress"></a>
<a id="schema_SimpleAddress"></a>
<a id="tocSsimpleaddress"></a>
<a id="tocssimpleaddress"></a>

```json
"string"
```

<h2 id="tocS_ContactChannelList">ContactChannelList</h2>
<!-- backwards compatibility -->
<a id="schemacontactchannellist"></a>
<a id="schema_ContactChannelList"></a>
<a id="tocScontactchannellist"></a>
<a id="tocscontactchannellist"></a>

```json
[
  {
    "ContactChannelArn": {},
    "ContactArn": {},
    "Name": {},
    "Type": {},
    "DeliveryAddress": {
      "SimpleAddress": {}
    },
    "ActivationStatus": {}
  }
]
```

<h2 id="tocS_IsEssential">IsEssential</h2>
<!-- backwards compatibility -->
<a id="schemaisessential"></a>
<a id="schema_IsEssential"></a>
<a id="tocSisessential"></a>
<a id="tocsisessential"></a>

```json
true
```

<h2 id="tocS_ContactTargetInfo">ContactTargetInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontacttargetinfo"></a>
<a id="schema_ContactTargetInfo"></a>
<a id="tocScontacttargetinfo"></a>
<a id="tocscontacttargetinfo"></a>

```json
{
  "ContactId": {},
  "IsEssential": {}
}
```

The contact that Incident Manager is engaging during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactId|object|false|none|none|
|IsEssential|object|true|none|none|

<h2 id="tocS_ContactsList">ContactsList</h2>
<!-- backwards compatibility -->
<a id="schemacontactslist"></a>
<a id="schema_ContactsList"></a>
<a id="tocScontactslist"></a>
<a id="tocscontactslist"></a>

```json
[
  {
    "ContactArn": {},
    "Alias": {},
    "DisplayName": {},
    "Type": {}
  }
]
```

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
"string"
```

<h2 id="tocS_HandOffTime">HandOffTime</h2>
<!-- backwards compatibility -->
<a id="schemahandofftime"></a>
<a id="schema_HandOffTime"></a>
<a id="tocShandofftime"></a>
<a id="tocshandofftime"></a>

```json
{
  "HourOfDay": {},
  "MinuteOfHour": {}
}
```

Details about when an on-call rotation shift begins or ends.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HourOfDay|object|true|none|none|
|MinuteOfHour|object|true|none|none|

<h2 id="tocS_CoverageTime">CoverageTime</h2>
<!-- backwards compatibility -->
<a id="schemacoveragetime"></a>
<a id="schema_CoverageTime"></a>
<a id="tocScoveragetime"></a>
<a id="tocscoveragetime"></a>

```json
{
  "Start": {
    "HourOfDay": {},
    "MinuteOfHour": {}
  },
  "End": {
    "HourOfDay": {},
    "MinuteOfHour": {}
  }
}
```

Information about when an on-call shift begins and ends.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Start|object|false|none|none|
|End|object|false|none|none|

<h2 id="tocS_CoverageTimes">CoverageTimes</h2>
<!-- backwards compatibility -->
<a id="schemacoveragetimes"></a>
<a id="schema_CoverageTimes"></a>
<a id="tocScoveragetimes"></a>
<a id="tocscoveragetimes"></a>

```json
[
  {
    "Start": {
      "HourOfDay": {},
      "MinuteOfHour": {}
    },
    "End": {
      "HourOfDay": {},
      "MinuteOfHour": {}
    }
  }
]
```

<h2 id="tocS_DeferActivation">DeferActivation</h2>
<!-- backwards compatibility -->
<a id="schemadeferactivation"></a>
<a id="schema_DeferActivation"></a>
<a id="tocSdeferactivation"></a>
<a id="tocsdeferactivation"></a>

```json
true
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_Plan">Plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "Stages": {},
  "RotationIds": {}
}
```

Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stages|object|false|none|none|
|RotationIds|object|false|none|none|

<h2 id="tocS_TagsList">TagsList</h2>
<!-- backwards compatibility -->
<a id="schematagslist"></a>
<a id="schema_TagsList"></a>
<a id="tocStagslist"></a>
<a id="tocstagslist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_RotationOverrideContactsArnList">RotationOverrideContactsArnList</h2>
<!-- backwards compatibility -->
<a id="schemarotationoverridecontactsarnlist"></a>
<a id="schema_RotationOverrideContactsArnList"></a>
<a id="tocSrotationoverridecontactsarnlist"></a>
<a id="tocsrotationoverridecontactsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Uuid">Uuid</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_Uuid"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_RotationName">RotationName</h2>
<!-- backwards compatibility -->
<a id="schemarotationname"></a>
<a id="schema_RotationName"></a>
<a id="tocSrotationname"></a>
<a id="tocsrotationname"></a>

```json
"string"
```

<h2 id="tocS_RotationContactsArnList">RotationContactsArnList</h2>
<!-- backwards compatibility -->
<a id="schemarotationcontactsarnlist"></a>
<a id="schema_RotationContactsArnList"></a>
<a id="tocSrotationcontactsarnlist"></a>
<a id="tocsrotationcontactsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TimeZoneId">TimeZoneId</h2>
<!-- backwards compatibility -->
<a id="schematimezoneid"></a>
<a id="schema_TimeZoneId"></a>
<a id="tocStimezoneid"></a>
<a id="tocstimezoneid"></a>

```json
"string"
```

<h2 id="tocS_RecurrenceSettings">RecurrenceSettings</h2>
<!-- backwards compatibility -->
<a id="schemarecurrencesettings"></a>
<a id="schema_RecurrenceSettings"></a>
<a id="tocSrecurrencesettings"></a>
<a id="tocsrecurrencesettings"></a>

```json
{
  "MonthlySettings": {},
  "WeeklySettings": {},
  "DailySettings": {},
  "NumberOfOnCalls": {},
  "ShiftCoverages": {
    "property1": [
      {
        "Start": {
          "HourOfDay": {},
          "MinuteOfHour": {}
        },
        "End": {
          "HourOfDay": {},
          "MinuteOfHour": {}
        }
      }
    ],
    "property2": [
      {
        "Start": {
          "HourOfDay": {},
          "MinuteOfHour": {}
        },
        "End": {
          "HourOfDay": {},
          "MinuteOfHour": {}
        }
      }
    ]
  },
  "RecurrenceMultiplier": {}
}
```

Information about when an on-call rotation is in effect and how long the rotation period lasts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonthlySettings|object|false|none|none|
|WeeklySettings|object|false|none|none|
|DailySettings|object|false|none|none|
|NumberOfOnCalls|object|true|none|none|
|ShiftCoverages|object|false|none|none|
|RecurrenceMultiplier|object|true|none|none|

<h2 id="tocS_DailySettings">DailySettings</h2>
<!-- backwards compatibility -->
<a id="schemadailysettings"></a>
<a id="schema_DailySettings"></a>
<a id="tocSdailysettings"></a>
<a id="tocsdailysettings"></a>

```json
[
  {
    "HourOfDay": {},
    "MinuteOfHour": {}
  }
]
```

<h2 id="tocS_DayOfMonth">DayOfMonth</h2>
<!-- backwards compatibility -->
<a id="schemadayofmonth"></a>
<a id="schema_DayOfMonth"></a>
<a id="tocSdayofmonth"></a>
<a id="tocsdayofmonth"></a>

```json
1
```

<h2 id="tocS_DayOfWeek">DayOfWeek</h2>
<!-- backwards compatibility -->
<a id="schemadayofweek"></a>
<a id="schema_DayOfWeek"></a>
<a id="tocSdayofweek"></a>
<a id="tocsdayofweek"></a>

```json
"MON"
```

<h2 id="tocS_Sender">Sender</h2>
<!-- backwards compatibility -->
<a id="schemasender"></a>
<a id="schema_Sender"></a>
<a id="tocSsender"></a>
<a id="tocssender"></a>

```json
"string"
```

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_PublicSubject">PublicSubject</h2>
<!-- backwards compatibility -->
<a id="schemapublicsubject"></a>
<a id="schema_PublicSubject"></a>
<a id="tocSpublicsubject"></a>
<a id="tocspublicsubject"></a>

```json
"string"
```

<h2 id="tocS_PublicContent">PublicContent</h2>
<!-- backwards compatibility -->
<a id="schemapubliccontent"></a>
<a id="schema_PublicContent"></a>
<a id="tocSpubliccontent"></a>
<a id="tocspubliccontent"></a>

```json
"string"
```

<h2 id="tocS_IncidentId">IncidentId</h2>
<!-- backwards compatibility -->
<a id="schemaincidentid"></a>
<a id="schema_IncidentId"></a>
<a id="tocSincidentid"></a>
<a id="tocsincidentid"></a>

```json
"string"
```

<h2 id="tocS_Engagement">Engagement</h2>
<!-- backwards compatibility -->
<a id="schemaengagement"></a>
<a id="schema_Engagement"></a>
<a id="tocSengagement"></a>
<a id="tocsengagement"></a>

```json
{
  "EngagementArn": {},
  "ContactArn": {},
  "Sender": {},
  "IncidentId": {},
  "StartTime": {},
  "StopTime": {}
}
```

Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EngagementArn|object|true|none|none|
|ContactArn|object|true|none|none|
|Sender|object|true|none|none|
|IncidentId|object|false|none|none|
|StartTime|object|false|none|none|
|StopTime|object|false|none|none|

<h2 id="tocS_EngagementsList">EngagementsList</h2>
<!-- backwards compatibility -->
<a id="schemaengagementslist"></a>
<a id="schema_EngagementsList"></a>
<a id="tocSengagementslist"></a>
<a id="tocsengagementslist"></a>

```json
[
  {
    "EngagementArn": {},
    "ContactArn": {},
    "Sender": {},
    "IncidentId": {},
    "StartTime": {},
    "StopTime": {}
  }
]
```

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_SsmContactsArnList">SsmContactsArnList</h2>
<!-- backwards compatibility -->
<a id="schemassmcontactsarnlist"></a>
<a id="schema_SsmContactsArnList"></a>
<a id="tocSssmcontactsarnlist"></a>
<a id="tocsssmcontactsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HourOfDay">HourOfDay</h2>
<!-- backwards compatibility -->
<a id="schemahourofday"></a>
<a id="schema_HourOfDay"></a>
<a id="tocShourofday"></a>
<a id="tocshourofday"></a>

```json
0
```

<h2 id="tocS_MinuteOfHour">MinuteOfHour</h2>
<!-- backwards compatibility -->
<a id="schemaminuteofhour"></a>
<a id="schema_MinuteOfHour"></a>
<a id="tocSminuteofhour"></a>
<a id="tocsminuteofhour"></a>

```json
0
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

A range of between two set times

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_ReceiptsList">ReceiptsList</h2>
<!-- backwards compatibility -->
<a id="schemareceiptslist"></a>
<a id="schema_ReceiptsList"></a>
<a id="tocSreceiptslist"></a>
<a id="tocsreceiptslist"></a>

```json
[
  {
    "ContactChannelArn": {},
    "ReceiptType": {},
    "ReceiptInfo": {},
    "ReceiptTime": {}
  }
]
```

<h2 id="tocS_ResolutionList">ResolutionList</h2>
<!-- backwards compatibility -->
<a id="schemaresolutionlist"></a>
<a id="schema_ResolutionList"></a>
<a id="tocSresolutionlist"></a>
<a id="tocsresolutionlist"></a>

```json
[
  {
    "ContactArn": {},
    "Type": {},
    "StageIndex": {}
  }
]
```

<h2 id="tocS_PagesList">PagesList</h2>
<!-- backwards compatibility -->
<a id="schemapageslist"></a>
<a id="schema_PagesList"></a>
<a id="tocSpageslist"></a>
<a id="tocspageslist"></a>

```json
[
  {
    "PageArn": {},
    "EngagementArn": {},
    "ContactArn": {},
    "Sender": {},
    "IncidentId": {},
    "SentTime": {},
    "DeliveryTime": {},
    "ReadTime": {}
  }
]
```

<h2 id="tocS_RotationPreviewMemberList">RotationPreviewMemberList</h2>
<!-- backwards compatibility -->
<a id="schemarotationpreviewmemberlist"></a>
<a id="schema_RotationPreviewMemberList"></a>
<a id="tocSrotationpreviewmemberlist"></a>
<a id="tocsrotationpreviewmemberlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OverrideList">OverrideList</h2>
<!-- backwards compatibility -->
<a id="schemaoverridelist"></a>
<a id="schema_OverrideList"></a>
<a id="tocSoverridelist"></a>
<a id="tocsoverridelist"></a>

```json
[
  {
    "NewMembers": {},
    "StartTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_RotationShifts">RotationShifts</h2>
<!-- backwards compatibility -->
<a id="schemarotationshifts"></a>
<a id="schema_RotationShifts"></a>
<a id="tocSrotationshifts"></a>
<a id="tocsrotationshifts"></a>

```json
[
  {
    "ContactIds": {},
    "StartTime": {},
    "EndTime": {},
    "Type": {},
    "ShiftDetails": {
      "OverriddenContactIds": {}
    }
  }
]
```

<h2 id="tocS_RotationOverrides">RotationOverrides</h2>
<!-- backwards compatibility -->
<a id="schemarotationoverrides"></a>
<a id="schema_RotationOverrides"></a>
<a id="tocSrotationoverrides"></a>
<a id="tocsrotationoverrides"></a>

```json
[
  {
    "RotationOverrideId": {},
    "NewContactIds": {},
    "StartTime": {},
    "EndTime": {},
    "CreateTime": {}
  }
]
```

<h2 id="tocS_Rotations">Rotations</h2>
<!-- backwards compatibility -->
<a id="schemarotations"></a>
<a id="schema_Rotations"></a>
<a id="tocSrotations"></a>
<a id="tocsrotations"></a>

```json
[
  {
    "RotationArn": {},
    "Name": {},
    "ContactIds": {},
    "StartTime": {},
    "TimeZoneId": {},
    "Recurrence": {
      "MonthlySettings": {},
      "WeeklySettings": {},
      "DailySettings": {},
      "NumberOfOnCalls": {},
      "ShiftCoverages": {
        "property1": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ],
        "property2": [
          {
            "Start": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            },
            "End": {
              "HourOfDay": {},
              "MinuteOfHour": {}
            }
          }
        ]
      },
      "RecurrenceMultiplier": {}
    }
  }
]
```

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
"string"
```

<h2 id="tocS_MonthlySetting">MonthlySetting</h2>
<!-- backwards compatibility -->
<a id="schemamonthlysetting"></a>
<a id="schema_MonthlySetting"></a>
<a id="tocSmonthlysetting"></a>
<a id="tocsmonthlysetting"></a>

```json
{
  "DayOfMonth": {},
  "HandOffTime": {
    "HourOfDay": {},
    "MinuteOfHour": {}
  }
}
```

Information about on-call rotations that recur monthly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfMonth|object|true|none|none|
|HandOffTime|object|true|none|none|

<h2 id="tocS_MonthlySettings">MonthlySettings</h2>
<!-- backwards compatibility -->
<a id="schemamonthlysettings"></a>
<a id="schema_MonthlySettings"></a>
<a id="tocSmonthlysettings"></a>
<a id="tocsmonthlysettings"></a>

```json
[
  {
    "DayOfMonth": {},
    "HandOffTime": {
      "HourOfDay": {},
      "MinuteOfHour": {}
    }
  }
]
```

<h2 id="tocS_NumberOfOnCalls">NumberOfOnCalls</h2>
<!-- backwards compatibility -->
<a id="schemanumberofoncalls"></a>
<a id="schema_NumberOfOnCalls"></a>
<a id="tocSnumberofoncalls"></a>
<a id="tocsnumberofoncalls"></a>

```json
1
```

<h2 id="tocS_PreviewOverride">PreviewOverride</h2>
<!-- backwards compatibility -->
<a id="schemapreviewoverride"></a>
<a id="schema_PreviewOverride"></a>
<a id="tocSpreviewoverride"></a>
<a id="tocspreviewoverride"></a>

```json
{
  "NewMembers": {},
  "StartTime": {},
  "EndTime": {}
}
```

Information about contacts and times that an on-call override replaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NewMembers|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "PageArn": {},
  "EngagementArn": {},
  "ContactArn": {},
  "Sender": {},
  "IncidentId": {},
  "SentTime": {},
  "DeliveryTime": {},
  "ReadTime": {}
}
```

Incident Manager engaging a contact's contact channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PageArn|object|true|none|none|
|EngagementArn|object|true|none|none|
|ContactArn|object|true|none|none|
|Sender|object|true|none|none|
|IncidentId|object|false|none|none|
|SentTime|object|false|none|none|
|DeliveryTime|object|false|none|none|
|ReadTime|object|false|none|none|

<h2 id="tocS_StagesList">StagesList</h2>
<!-- backwards compatibility -->
<a id="schemastageslist"></a>
<a id="schema_StagesList"></a>
<a id="tocSstageslist"></a>
<a id="tocsstageslist"></a>

```json
[
  {
    "DurationInMinutes": {},
    "Targets": {}
  }
]
```

<h2 id="tocS_RotationOverridePreviewMemberList">RotationOverridePreviewMemberList</h2>
<!-- backwards compatibility -->
<a id="schemarotationoverridepreviewmemberlist"></a>
<a id="schema_RotationOverridePreviewMemberList"></a>
<a id="tocSrotationoverridepreviewmemberlist"></a>
<a id="tocsrotationoverridepreviewmemberlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReceiptType">ReceiptType</h2>
<!-- backwards compatibility -->
<a id="schemareceipttype"></a>
<a id="schema_ReceiptType"></a>
<a id="tocSreceipttype"></a>
<a id="tocsreceipttype"></a>

```json
"DELIVERED"
```

<h2 id="tocS_Receipt">Receipt</h2>
<!-- backwards compatibility -->
<a id="schemareceipt"></a>
<a id="schema_Receipt"></a>
<a id="tocSreceipt"></a>
<a id="tocsreceipt"></a>

```json
{
  "ContactChannelArn": {},
  "ReceiptType": {},
  "ReceiptInfo": {},
  "ReceiptTime": {}
}
```

Records events during an engagement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactChannelArn|object|false|none|none|
|ReceiptType|object|true|none|none|
|ReceiptInfo|object|false|none|none|
|ReceiptTime|object|true|none|none|

<h2 id="tocS_RecurrenceMultiplier">RecurrenceMultiplier</h2>
<!-- backwards compatibility -->
<a id="schemarecurrencemultiplier"></a>
<a id="schema_RecurrenceMultiplier"></a>
<a id="tocSrecurrencemultiplier"></a>
<a id="tocsrecurrencemultiplier"></a>

```json
1
```

<h2 id="tocS_WeeklySettings">WeeklySettings</h2>
<!-- backwards compatibility -->
<a id="schemaweeklysettings"></a>
<a id="schema_WeeklySettings"></a>
<a id="tocSweeklysettings"></a>
<a id="tocsweeklysettings"></a>

```json
[
  {
    "DayOfWeek": {},
    "HandOffTime": {
      "HourOfDay": {},
      "MinuteOfHour": {}
    }
  }
]
```

<h2 id="tocS_ShiftCoveragesMap">ShiftCoveragesMap</h2>
<!-- backwards compatibility -->
<a id="schemashiftcoveragesmap"></a>
<a id="schema_ShiftCoveragesMap"></a>
<a id="tocSshiftcoveragesmap"></a>
<a id="tocsshiftcoveragesmap"></a>

```json
{
  "property1": [
    {
      "Start": {
        "HourOfDay": {},
        "MinuteOfHour": {}
      },
      "End": {
        "HourOfDay": {},
        "MinuteOfHour": {}
      }
    }
  ],
  "property2": [
    {
      "Start": {
        "HourOfDay": {},
        "MinuteOfHour": {}
      },
      "End": {
        "HourOfDay": {},
        "MinuteOfHour": {}
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CoverageTimes](#schemacoveragetimes)|false|none|none|

<h2 id="tocS_StageIndex">StageIndex</h2>
<!-- backwards compatibility -->
<a id="schemastageindex"></a>
<a id="schema_StageIndex"></a>
<a id="tocSstageindex"></a>
<a id="tocsstageindex"></a>

```json
0
```

<h2 id="tocS_ResolutionContact">ResolutionContact</h2>
<!-- backwards compatibility -->
<a id="schemaresolutioncontact"></a>
<a id="schema_ResolutionContact"></a>
<a id="tocSresolutioncontact"></a>
<a id="tocsresolutioncontact"></a>

```json
{
  "ContactArn": {},
  "Type": {},
  "StageIndex": {}
}
```

<p>Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.</p> <p>The <code>ResolutionContact</code> structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|Type|object|true|none|none|
|StageIndex|object|false|none|none|

<h2 id="tocS_Rotation">Rotation</h2>
<!-- backwards compatibility -->
<a id="schemarotation"></a>
<a id="schema_Rotation"></a>
<a id="tocSrotation"></a>
<a id="tocsrotation"></a>

```json
{
  "RotationArn": {},
  "Name": {},
  "ContactIds": {},
  "StartTime": {},
  "TimeZoneId": {},
  "Recurrence": {
    "MonthlySettings": {},
    "WeeklySettings": {},
    "DailySettings": {},
    "NumberOfOnCalls": {},
    "ShiftCoverages": {
      "property1": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ],
      "property2": [
        {
          "Start": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          },
          "End": {
            "HourOfDay": {},
            "MinuteOfHour": {}
          }
        }
      ]
    },
    "RecurrenceMultiplier": {}
  }
}
```

Information about a rotation in an on-call schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationArn|object|true|none|none|
|Name|object|true|none|none|
|ContactIds|object|false|none|none|
|StartTime|object|false|none|none|
|TimeZoneId|object|false|none|none|
|Recurrence|object|false|none|none|

<h2 id="tocS_RotationOverride">RotationOverride</h2>
<!-- backwards compatibility -->
<a id="schemarotationoverride"></a>
<a id="schema_RotationOverride"></a>
<a id="tocSrotationoverride"></a>
<a id="tocsrotationoverride"></a>

```json
{
  "RotationOverrideId": {},
  "NewContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "CreateTime": {}
}
```

Information about an override specified for an on-call rotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RotationOverrideId|object|true|none|none|
|NewContactIds|object|true|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|CreateTime|object|true|none|none|

<h2 id="tocS_ShiftType">ShiftType</h2>
<!-- backwards compatibility -->
<a id="schemashifttype"></a>
<a id="schema_ShiftType"></a>
<a id="tocSshifttype"></a>
<a id="tocsshifttype"></a>

```json
"REGULAR"
```

<h2 id="tocS_ShiftDetails">ShiftDetails</h2>
<!-- backwards compatibility -->
<a id="schemashiftdetails"></a>
<a id="schema_ShiftDetails"></a>
<a id="tocSshiftdetails"></a>
<a id="tocsshiftdetails"></a>

```json
{
  "OverriddenContactIds": {}
}
```

Information about overrides to an on-call rotation shift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OverriddenContactIds|object|true|none|none|

<h2 id="tocS_RotationShift">RotationShift</h2>
<!-- backwards compatibility -->
<a id="schemarotationshift"></a>
<a id="schema_RotationShift"></a>
<a id="tocSrotationshift"></a>
<a id="tocsrotationshift"></a>

```json
{
  "ContactIds": {},
  "StartTime": {},
  "EndTime": {},
  "Type": {},
  "ShiftDetails": {
    "OverriddenContactIds": {}
  }
}
```

Information about a shift that belongs to an on-call rotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactIds|object|false|none|none|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|
|Type|object|false|none|none|
|ShiftDetails|object|false|none|none|

<h2 id="tocS_StageDurationInMins">StageDurationInMins</h2>
<!-- backwards compatibility -->
<a id="schemastagedurationinmins"></a>
<a id="schema_StageDurationInMins"></a>
<a id="tocSstagedurationinmins"></a>
<a id="tocsstagedurationinmins"></a>

```json
0
```

<h2 id="tocS_TargetsList">TargetsList</h2>
<!-- backwards compatibility -->
<a id="schematargetslist"></a>
<a id="schema_TargetsList"></a>
<a id="tocStargetslist"></a>
<a id="tocstargetslist"></a>

```json
[
  {
    "ChannelTargetInfo": {
      "ContactChannelId": {},
      "RetryIntervalInMinutes": {}
    },
    "ContactTargetInfo": {
      "ContactId": {},
      "IsEssential": {}
    }
  }
]
```

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
{
  "DurationInMinutes": {},
  "Targets": {}
}
```

A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInMinutes|object|true|none|none|
|Targets|object|true|none|none|

<h2 id="tocS_StopReason">StopReason</h2>
<!-- backwards compatibility -->
<a id="schemastopreason"></a>
<a id="schema_StopReason"></a>
<a id="tocSstopreason"></a>
<a id="tocsstopreason"></a>

```json
"string"
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A container of a key-value name pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "ChannelTargetInfo": {
    "ContactChannelId": {},
    "RetryIntervalInMinutes": {}
  },
  "ContactTargetInfo": {
    "ContactId": {},
    "IsEssential": {}
  }
}
```

The contact or contact channel that's being engaged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChannelTargetInfo|object|false|none|none|
|ContactTargetInfo|object|false|none|none|

<h2 id="tocS_WeeklySetting">WeeklySetting</h2>
<!-- backwards compatibility -->
<a id="schemaweeklysetting"></a>
<a id="schema_WeeklySetting"></a>
<a id="tocSweeklysetting"></a>
<a id="tocsweeklysetting"></a>

```json
{
  "DayOfWeek": {},
  "HandOffTime": {
    "HourOfDay": {},
    "MinuteOfHour": {}
  }
}
```

Information about rotations that recur weekly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfWeek|object|true|none|none|
|HandOffTime|object|true|none|none|
