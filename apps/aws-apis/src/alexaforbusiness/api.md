<h1 id="alexa-for-business">Alexa For Business v2017-11-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations. You can also make these available as private skills for your organization. Alexa for Business makes it efficient to voice-enable your products and services, thus providing context-aware voice experiences for your customers. Device makers building with the Alexa Voice Service (AVS) can create fully integrated solutions, register their products with Alexa for Business, and manage them as shared devices in their organization.

Base URLs:

* <a href="http://a4b.us-east-1.amazonaws.com">http://a4b.us-east-1.amazonaws.com</a> - The Alexa For Business multi-region endpoint

* <a href="https://a4b.us-east-1.amazonaws.com">https://a4b.us-east-1.amazonaws.com</a> - The Alexa For Business multi-region endpoint

* <a href="http://a4b.cn-north-1.amazonaws.com.cn">http://a4b.cn-north-1.amazonaws.com.cn</a> - The Alexa For Business endpoint for China (Beijing) and China (Ningxia)

* <a href="https://a4b.cn-north-1.amazonaws.com.cn">https://a4b.cn-north-1.amazonaws.com.cn</a> - The Alexa For Business endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/a4b/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="alexa-for-business-default">Default</h1>

## ApproveSkill

<a id="opIdApproveSkill"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ApproveSkill' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ApproveSkill' \
  -d '{
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ApproveSkill`

Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.

> Body parameter

```json
{
  "SkillId": {}
}
```

<h3 id="approveskill-parameters">Parameters</h3>

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
|body|body|[ApproveSkillRequest](#schemaapproveskillrequest)|true|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ApproveSkill|

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

<h3 id="approveskill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ApproveSkillResponse](#schemaapproveskillresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateContactWithAddressBook

<a id="opIdAssociateContactWithAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateContactWithAddressBook' \
  -d '{
    "ContactArn": {},
    "AddressBookArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook`

Associates a contact with a given address book.

> Body parameter

```json
{
  "ContactArn": {},
  "AddressBookArn": {}
}
```

<h3 id="associatecontactwithaddressbook-parameters">Parameters</h3>

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
|body|body|[AssociateContactWithAddressBookRequest](#schemaassociatecontactwithaddressbookrequest)|true|none|
|» ContactArn|body|object|true|none|
|» AddressBookArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateContactWithAddressBook|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="associatecontactwithaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateContactWithAddressBookResponse](#schemaassociatecontactwithaddressbookresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDeviceWithNetworkProfile

<a id="opIdAssociateDeviceWithNetworkProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateDeviceWithNetworkProfile' \
  -d '{
    "DeviceArn": {},
    "NetworkProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile`

Associates a device with the specified network profile.

> Body parameter

```json
{
  "DeviceArn": {},
  "NetworkProfileArn": {}
}
```

<h3 id="associatedevicewithnetworkprofile-parameters">Parameters</h3>

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
|body|body|[AssociateDeviceWithNetworkProfileRequest](#schemaassociatedevicewithnetworkprofilerequest)|true|none|
|» DeviceArn|body|object|true|none|
|» NetworkProfileArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateDeviceWithNetworkProfile|

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

<h3 id="associatedevicewithnetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDeviceWithNetworkProfileResponse](#schemaassociatedevicewithnetworkprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDeviceWithRoom

<a id="opIdAssociateDeviceWithRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateDeviceWithRoom' \
  -d '{
    "DeviceArn": {},
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom`

Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required. 

> Body parameter

```json
{
  "DeviceArn": {},
  "RoomArn": {}
}
```

<h3 id="associatedevicewithroom-parameters">Parameters</h3>

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
|body|body|[AssociateDeviceWithRoomRequest](#schemaassociatedevicewithroomrequest)|true|none|
|» DeviceArn|body|object|false|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateDeviceWithRoom|

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

<h3 id="associatedevicewithroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDeviceWithRoomResponse](#schemaassociatedevicewithroomresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSkillGroupWithRoom

<a id="opIdAssociateSkillGroupWithRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateSkillGroupWithRoom' \
  -d '{
    "SkillGroupArn": {},
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom`

Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "RoomArn": {}
}
```

<h3 id="associateskillgroupwithroom-parameters">Parameters</h3>

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
|body|body|[AssociateSkillGroupWithRoomRequest](#schemaassociateskillgroupwithroomrequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateSkillGroupWithRoom|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="associateskillgroupwithroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSkillGroupWithRoomResponse](#schemaassociateskillgroupwithroomresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSkillWithSkillGroup

<a id="opIdAssociateSkillWithSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateSkillWithSkillGroup' \
  -d '{
    "SkillGroupArn": {},
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup`

Associates a skill with a skill group.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "SkillId": {}
}
```

<h3 id="associateskillwithskillgroup-parameters">Parameters</h3>

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
|body|body|[AssociateSkillWithSkillGroupRequest](#schemaassociateskillwithskillgrouprequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateSkillWithSkillGroup|

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

<h3 id="associateskillwithskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSkillWithSkillGroupResponse](#schemaassociateskillwithskillgroupresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|SkillNotLinkedException|[SkillNotLinkedException](#schemaskillnotlinkedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateSkillWithUsers

<a id="opIdAssociateSkillWithUsers"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.AssociateSkillWithUsers' \
  -d '{
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers`

Makes a private skill available for enrolled users to enable on their devices.

> Body parameter

```json
{
  "SkillId": {}
}
```

<h3 id="associateskillwithusers-parameters">Parameters</h3>

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
|body|body|[AssociateSkillWithUsersRequest](#schemaassociateskillwithusersrequest)|true|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.AssociateSkillWithUsers|

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

<h3 id="associateskillwithusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateSkillWithUsersResponse](#schemaassociateskillwithusersresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAddressBook

<a id="opIdCreateAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateAddressBook' \
  -d '{
    "Name": {},
    "Description": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateAddressBook`

Creates an address book with the specified details.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createaddressbook-parameters">Parameters</h3>

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
|body|body|[CreateAddressBookRequest](#schemacreateaddressbookrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateAddressBook|

> Example responses

> 200 Response

```json
{
  "AddressBookArn": {}
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

<h3 id="createaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAddressBookResponse](#schemacreateaddressbookresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBusinessReportSchedule

<a id="opIdCreateBusinessReportSchedule"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateBusinessReportSchedule' \
  -d '{
    "ScheduleName": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Format": {},
    "ContentRange": {
      "Interval": {}
    },
    "Recurrence": {
      "StartDate": {}
    },
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule`

Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.

> Body parameter

```json
{
  "ScheduleName": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Format": {},
  "ContentRange": {
    "Interval": {}
  },
  "Recurrence": {
    "StartDate": {}
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createbusinessreportschedule-parameters">Parameters</h3>

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
|body|body|[CreateBusinessReportScheduleRequest](#schemacreatebusinessreportschedulerequest)|true|none|
|» ScheduleName|body|object|false|none|
|» S3BucketName|body|object|false|none|
|» S3KeyPrefix|body|object|false|none|
|» Format|body|object|true|none|
|» ContentRange|body|object|true|none|
|» » Interval|body|object|true|none|
|» Recurrence|body|object|false|none|
|» » StartDate|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateBusinessReportSchedule|

> Example responses

> 200 Response

```json
{
  "ScheduleArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="createbusinessreportschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBusinessReportScheduleResponse](#schemacreatebusinessreportscheduleresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConferenceProvider

<a id="opIdCreateConferenceProvider"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateConferenceProvider' \
  -d '{
    "ConferenceProviderName": {},
    "ConferenceProviderType": {},
    "IPDialIn": {
      "Endpoint": {},
      "CommsProtocol": {}
    },
    "PSTNDialIn": {
      "CountryCode": {},
      "PhoneNumber": {},
      "OneClickIdDelay": {},
      "OneClickPinDelay": {}
    },
    "MeetingSetting": {
      "RequirePin": {}
    },
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider`

Adds a new conference provider under the user's AWS account.

> Body parameter

```json
{
  "ConferenceProviderName": {},
  "ConferenceProviderType": {},
  "IPDialIn": {
    "Endpoint": {},
    "CommsProtocol": {}
  },
  "PSTNDialIn": {
    "CountryCode": {},
    "PhoneNumber": {},
    "OneClickIdDelay": {},
    "OneClickPinDelay": {}
  },
  "MeetingSetting": {
    "RequirePin": {}
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createconferenceprovider-parameters">Parameters</h3>

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
|body|body|[CreateConferenceProviderRequest](#schemacreateconferenceproviderrequest)|true|none|
|» ConferenceProviderName|body|object|true|none|
|» ConferenceProviderType|body|object|true|none|
|» IPDialIn|body|object|false|none|
|» » Endpoint|body|object|true|none|
|» » CommsProtocol|body|object|true|none|
|» PSTNDialIn|body|object|false|none|
|» » CountryCode|body|object|true|none|
|» » PhoneNumber|body|object|true|none|
|» » OneClickIdDelay|body|object|true|none|
|» » OneClickPinDelay|body|object|true|none|
|» MeetingSetting|body|object|true|none|
|» » RequirePin|body|object|true|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateConferenceProvider|

> Example responses

> 200 Response

```json
{
  "ConferenceProviderArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="createconferenceprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConferenceProviderResponse](#schemacreateconferenceproviderresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContact

<a id="opIdCreateContact"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateContact' \
  -d '{
    "DisplayName": {},
    "FirstName": {},
    "LastName": {},
    "PhoneNumber": {},
    "PhoneNumbers": {},
    "SipAddresses": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateContact`

Creates a contact with the specified details.

> Body parameter

```json
{
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {},
  "ClientRequestToken": {},
  "Tags": {}
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
|» DisplayName|body|object|false|none|
|» FirstName|body|object|true|none|
|» LastName|body|object|false|none|
|» PhoneNumber|body|object|false|none|
|» PhoneNumbers|body|object|false|none|
|» SipAddresses|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateContact|

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

<h3 id="createcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContactResponse](#schemacreatecontactresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGatewayGroup

<a id="opIdCreateGatewayGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateGatewayGroup' \
  -d '{
    "Name": {},
    "Description": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup`

Creates a gateway group with the specified details.

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="creategatewaygroup-parameters">Parameters</h3>

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
|body|body|[CreateGatewayGroupRequest](#schemacreategatewaygrouprequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» ClientRequestToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateGatewayGroup|

> Example responses

> 200 Response

```json
{
  "GatewayGroupArn": {}
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

<h3 id="creategatewaygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGatewayGroupResponse](#schemacreategatewaygroupresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateNetworkProfile

<a id="opIdCreateNetworkProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateNetworkProfile' \
  -d '{
    "NetworkProfileName": {},
    "Description": {},
    "Ssid": {},
    "SecurityType": {},
    "EapMethod": {},
    "CurrentPassword": {},
    "NextPassword": {},
    "CertificateAuthorityArn": {},
    "TrustAnchors": {},
    "ClientRequestToken": "stringstri",
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile`

Creates a network profile with the specified details.

> Body parameter

```json
{
  "NetworkProfileName": {},
  "Description": {},
  "Ssid": {},
  "SecurityType": {},
  "EapMethod": {},
  "CurrentPassword": {},
  "NextPassword": {},
  "CertificateAuthorityArn": {},
  "TrustAnchors": {},
  "ClientRequestToken": "stringstri",
  "Tags": {}
}
```

<h3 id="createnetworkprofile-parameters">Parameters</h3>

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
|body|body|[CreateNetworkProfileRequest](#schemacreatenetworkprofilerequest)|true|none|
|» NetworkProfileName|body|object|true|none|
|» Description|body|object|false|none|
|» Ssid|body|object|true|none|
|» SecurityType|body|object|true|none|
|» EapMethod|body|object|false|none|
|» CurrentPassword|body|object|false|none|
|» NextPassword|body|object|false|none|
|» CertificateAuthorityArn|body|object|false|none|
|» TrustAnchors|body|object|false|none|
|» ClientRequestToken|body|[ClientRequestToken](#schemaclientrequesttoken)|true|A unique, user-specified identifier for the request that ensures idempotency.|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateNetworkProfile|

> Example responses

> 200 Response

```json
{
  "NetworkProfileArn": {}
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

<h3 id="createnetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateNetworkProfileResponse](#schemacreatenetworkprofileresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidCertificateAuthorityException|[InvalidCertificateAuthorityException](#schemainvalidcertificateauthorityexception)|
|484|484|InvalidServiceLinkedRoleStateException|[InvalidServiceLinkedRoleStateException](#schemainvalidservicelinkedrolestateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProfile

<a id="opIdCreateProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateProfile' \
  -d '{
    "ProfileName": {},
    "Timezone": {},
    "Address": {},
    "DistanceUnit": {},
    "TemperatureUnit": {},
    "WakeWord": {},
    "Locale": {},
    "ClientRequestToken": {},
    "SetupModeDisabled": {},
    "MaxVolumeLimit": {},
    "PSTNEnabled": {},
    "DataRetentionOptIn": {},
    "MeetingRoomConfiguration": {
      "RoomUtilizationMetricsEnabled": {},
      "EndOfMeetingReminder": {
        "ReminderAtMinutes": {},
        "ReminderType": {},
        "Enabled": {}
      },
      "InstantBooking": {
        "DurationInMinutes": {},
        "Enabled": {}
      },
      "RequireCheckIn": {
        "ReleaseAfterMinutes": {},
        "Enabled": {}
      }
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateProfile`

Creates a new room profile with the specified details.

> Body parameter

```json
{
  "ProfileName": {},
  "Timezone": {},
  "Address": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {},
  "ClientRequestToken": {},
  "SetupModeDisabled": {},
  "MaxVolumeLimit": {},
  "PSTNEnabled": {},
  "DataRetentionOptIn": {},
  "MeetingRoomConfiguration": {
    "RoomUtilizationMetricsEnabled": {},
    "EndOfMeetingReminder": {
      "ReminderAtMinutes": {},
      "ReminderType": {},
      "Enabled": {}
    },
    "InstantBooking": {
      "DurationInMinutes": {},
      "Enabled": {}
    },
    "RequireCheckIn": {
      "ReleaseAfterMinutes": {},
      "Enabled": {}
    }
  },
  "Tags": {}
}
```

<h3 id="createprofile-parameters">Parameters</h3>

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
|body|body|[CreateProfileRequest](#schemacreateprofilerequest)|true|none|
|» ProfileName|body|object|true|none|
|» Timezone|body|object|true|none|
|» Address|body|object|true|none|
|» DistanceUnit|body|object|true|none|
|» TemperatureUnit|body|object|true|none|
|» WakeWord|body|object|true|none|
|» Locale|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» SetupModeDisabled|body|object|false|none|
|» MaxVolumeLimit|body|object|false|none|
|» PSTNEnabled|body|object|false|none|
|» DataRetentionOptIn|body|object|false|none|
|» MeetingRoomConfiguration|body|object|false|none|
|» » RoomUtilizationMetricsEnabled|body|object|false|none|
|» » EndOfMeetingReminder|body|[CreateEndOfMeetingReminder](#schemacreateendofmeetingreminder)|false|Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.|
|» » InstantBooking|body|object|false|none|
|» » » DurationInMinutes|body|object|true|none|
|» » » Enabled|body|object|true|none|
|» » RequireCheckIn|body|object|false|none|
|» » » ReleaseAfterMinutes|body|object|true|none|
|» » » Enabled|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateProfile|

> Example responses

> 200 Response

```json
{
  "ProfileArn": {}
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

<h3 id="createprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProfileResponse](#schemacreateprofileresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRoom

<a id="opIdCreateRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateRoom' \
  -d '{
    "RoomName": {},
    "Description": {},
    "ProfileArn": {},
    "ProviderCalendarId": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateRoom`

Creates a room with the specified details.

> Body parameter

```json
{
  "RoomName": {},
  "Description": {},
  "ProfileArn": {},
  "ProviderCalendarId": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createroom-parameters">Parameters</h3>

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
|body|body|[CreateRoomRequest](#schemacreateroomrequest)|true|none|
|» RoomName|body|object|true|none|
|» Description|body|object|false|none|
|» ProfileArn|body|object|false|none|
|» ProviderCalendarId|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateRoom|

> Example responses

> 200 Response

```json
{
  "RoomArn": {}
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

<h3 id="createroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRoomResponse](#schemacreateroomresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSkillGroup

<a id="opIdCreateSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateSkillGroup' \
  -d '{
    "SkillGroupName": {},
    "Description": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateSkillGroup`

Creates a skill group with a specified name and description.

> Body parameter

```json
{
  "SkillGroupName": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createskillgroup-parameters">Parameters</h3>

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
|body|body|[CreateSkillGroupRequest](#schemacreateskillgrouprequest)|true|none|
|» SkillGroupName|body|object|true|none|
|» Description|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateSkillGroup|

> Example responses

> 200 Response

```json
{
  "SkillGroupArn": {}
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

<h3 id="createskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSkillGroupResponse](#schemacreateskillgroupresponse)|
|480|480|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.CreateUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.CreateUser' \
  -d '{
    "UserId": {},
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "ClientRequestToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.CreateUser`

Creates a user.

> Body parameter

```json
{
  "UserId": {},
  "FirstName": {},
  "LastName": {},
  "Email": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

<h3 id="createuser-parameters">Parameters</h3>

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
|body|body|[CreateUserRequest](#schemacreateuserrequest)|true|none|
|» UserId|body|object|true|none|
|» FirstName|body|object|false|none|
|» LastName|body|object|false|none|
|» Email|body|object|false|none|
|» ClientRequestToken|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.CreateUser|

> Example responses

> 200 Response

```json
{
  "UserArn": {}
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

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserResponse](#schemacreateuserresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAddressBook

<a id="opIdDeleteAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteAddressBook' \
  -d '{
    "AddressBookArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteAddressBook`

Deletes an address book by the address book ARN.

> Body parameter

```json
{
  "AddressBookArn": {}
}
```

<h3 id="deleteaddressbook-parameters">Parameters</h3>

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
|body|body|[DeleteAddressBookRequest](#schemadeleteaddressbookrequest)|true|none|
|» AddressBookArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteAddressBook|

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

<h3 id="deleteaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAddressBookResponse](#schemadeleteaddressbookresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBusinessReportSchedule

<a id="opIdDeleteBusinessReportSchedule"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteBusinessReportSchedule' \
  -d '{
    "ScheduleArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule`

Deletes the recurring report delivery schedule with the specified schedule ARN.

> Body parameter

```json
{
  "ScheduleArn": {}
}
```

<h3 id="deletebusinessreportschedule-parameters">Parameters</h3>

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
|body|body|[DeleteBusinessReportScheduleRequest](#schemadeletebusinessreportschedulerequest)|true|none|
|» ScheduleArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteBusinessReportSchedule|

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

<h3 id="deletebusinessreportschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBusinessReportScheduleResponse](#schemadeletebusinessreportscheduleresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConferenceProvider

<a id="opIdDeleteConferenceProvider"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteConferenceProvider' \
  -d '{
    "ConferenceProviderArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider`

Deletes a conference provider.

> Body parameter

```json
{
  "ConferenceProviderArn": {}
}
```

<h3 id="deleteconferenceprovider-parameters">Parameters</h3>

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
|body|body|[DeleteConferenceProviderRequest](#schemadeleteconferenceproviderrequest)|true|none|
|» ConferenceProviderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteConferenceProvider|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteconferenceprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConferenceProviderResponse](#schemadeleteconferenceproviderresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContact

<a id="opIdDeleteContact"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteContact' \
  -d '{
    "ContactArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteContact`

Deletes a contact by the contact ARN.

> Body parameter

```json
{
  "ContactArn": {}
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
|» ContactArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteContact|

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

<h3 id="deletecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContactResponse](#schemadeletecontactresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDevice

<a id="opIdDeleteDevice"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteDevice' \
  -d '{
    "DeviceArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteDevice`

Removes a device from Alexa For Business.

> Body parameter

```json
{
  "DeviceArn": {}
}
```

<h3 id="deletedevice-parameters">Parameters</h3>

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
|body|body|[DeleteDeviceRequest](#schemadeletedevicerequest)|true|none|
|» DeviceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteDevice|

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

<h3 id="deletedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeviceResponse](#schemadeletedeviceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|InvalidCertificateAuthorityException|[InvalidCertificateAuthorityException](#schemainvalidcertificateauthorityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeviceUsageData

<a id="opIdDeleteDeviceUsageData"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteDeviceUsageData' \
  -d '{
    "DeviceArn": {},
    "DeviceUsageType": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData`

When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data and associated response data. This action can be called once every 24 hours for a specific shared device.

> Body parameter

```json
{
  "DeviceArn": {},
  "DeviceUsageType": {}
}
```

<h3 id="deletedeviceusagedata-parameters">Parameters</h3>

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
|body|body|[DeleteDeviceUsageDataRequest](#schemadeletedeviceusagedatarequest)|true|none|
|» DeviceArn|body|object|true|none|
|» DeviceUsageType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteDeviceUsageData|

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

<h3 id="deletedeviceusagedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeviceUsageDataResponse](#schemadeletedeviceusagedataresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGatewayGroup

<a id="opIdDeleteGatewayGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteGatewayGroup' \
  -d '{
    "GatewayGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup`

Deletes a gateway group.

> Body parameter

```json
{
  "GatewayGroupArn": {}
}
```

<h3 id="deletegatewaygroup-parameters">Parameters</h3>

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
|body|body|[DeleteGatewayGroupRequest](#schemadeletegatewaygrouprequest)|true|none|
|» GatewayGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteGatewayGroup|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deletegatewaygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGatewayGroupResponse](#schemadeletegatewaygroupresponse)|
|480|480|ResourceAssociatedException|[ResourceAssociatedException](#schemaresourceassociatedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteNetworkProfile

<a id="opIdDeleteNetworkProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteNetworkProfile' \
  -d '{
    "NetworkProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile`

Deletes a network profile by the network profile ARN.

> Body parameter

```json
{
  "NetworkProfileArn": {}
}
```

<h3 id="deletenetworkprofile-parameters">Parameters</h3>

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
|body|body|[DeleteNetworkProfileRequest](#schemadeletenetworkprofilerequest)|true|none|
|» NetworkProfileArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteNetworkProfile|

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

<h3 id="deletenetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteNetworkProfileResponse](#schemadeletenetworkprofileresponse)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProfile

<a id="opIdDeleteProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteProfile' \
  -d '{
    "ProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteProfile`

Deletes a room profile by the profile ARN.

> Body parameter

```json
{
  "ProfileArn": {}
}
```

<h3 id="deleteprofile-parameters">Parameters</h3>

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
|body|body|[DeleteProfileRequest](#schemadeleteprofilerequest)|true|none|
|» ProfileArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteProfile|

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

<h3 id="deleteprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProfileResponse](#schemadeleteprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoom

<a id="opIdDeleteRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteRoom' \
  -d '{
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteRoom`

Deletes a room by the room ARN.

> Body parameter

```json
{
  "RoomArn": {}
}
```

<h3 id="deleteroom-parameters">Parameters</h3>

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
|body|body|[DeleteRoomRequest](#schemadeleteroomrequest)|true|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteRoom|

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

<h3 id="deleteroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRoomResponse](#schemadeleteroomresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRoomSkillParameter

<a id="opIdDeleteRoomSkillParameter"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteRoomSkillParameter' \
  -d '{
    "RoomArn": {},
    "SkillId": {},
    "ParameterKey": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter`

Deletes room skill parameter details by room, skill, and parameter key ID.

> Body parameter

```json
{
  "RoomArn": {},
  "SkillId": {},
  "ParameterKey": {}
}
```

<h3 id="deleteroomskillparameter-parameters">Parameters</h3>

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
|body|body|[DeleteRoomSkillParameterRequest](#schemadeleteroomskillparameterrequest)|true|none|
|» RoomArn|body|object|false|none|
|» SkillId|body|object|true|none|
|» ParameterKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteRoomSkillParameter|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="deleteroomskillparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRoomSkillParameterResponse](#schemadeleteroomskillparameterresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSkillAuthorization

<a id="opIdDeleteSkillAuthorization"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteSkillAuthorization' \
  -d '{
    "SkillId": {},
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization`

Unlinks a third-party account from a skill.

> Body parameter

```json
{
  "SkillId": {},
  "RoomArn": {}
}
```

<h3 id="deleteskillauthorization-parameters">Parameters</h3>

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
|body|body|[DeleteSkillAuthorizationRequest](#schemadeleteskillauthorizationrequest)|true|none|
|» SkillId|body|object|true|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteSkillAuthorization|

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

<h3 id="deleteskillauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSkillAuthorizationResponse](#schemadeleteskillauthorizationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSkillGroup

<a id="opIdDeleteSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteSkillGroup' \
  -d '{
    "SkillGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup`

Deletes a skill group by skill group ARN.

> Body parameter

```json
{
  "SkillGroupArn": {}
}
```

<h3 id="deleteskillgroup-parameters">Parameters</h3>

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
|body|body|[DeleteSkillGroupRequest](#schemadeleteskillgrouprequest)|true|none|
|» SkillGroupArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteSkillGroup|

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

<h3 id="deleteskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSkillGroupResponse](#schemadeleteskillgroupresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DeleteUser' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DeleteUser' \
  -d '{
    "UserArn": {},
    "EnrollmentId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DeleteUser`

Deletes a specified user by user ARN and enrollment ARN.

> Body parameter

```json
{
  "UserArn": {},
  "EnrollmentId": {}
}
```

<h3 id="deleteuser-parameters">Parameters</h3>

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
|body|body|[DeleteUserRequest](#schemadeleteuserrequest)|true|none|
|» UserArn|body|object|false|none|
|» EnrollmentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DeleteUser|

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

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserResponse](#schemadeleteuserresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateContactFromAddressBook

<a id="opIdDisassociateContactFromAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DisassociateContactFromAddressBook' \
  -d '{
    "ContactArn": {},
    "AddressBookArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook`

Disassociates a contact from a given address book.

> Body parameter

```json
{
  "ContactArn": {},
  "AddressBookArn": {}
}
```

<h3 id="disassociatecontactfromaddressbook-parameters">Parameters</h3>

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
|body|body|[DisassociateContactFromAddressBookRequest](#schemadisassociatecontactfromaddressbookrequest)|true|none|
|» ContactArn|body|object|true|none|
|» AddressBookArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DisassociateContactFromAddressBook|

> Example responses

> 200 Response

```json
{}
```

<h3 id="disassociatecontactfromaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateContactFromAddressBookResponse](#schemadisassociatecontactfromaddressbookresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDeviceFromRoom

<a id="opIdDisassociateDeviceFromRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DisassociateDeviceFromRoom' \
  -d '{
    "DeviceArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom`

Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.

> Body parameter

```json
{
  "DeviceArn": {}
}
```

<h3 id="disassociatedevicefromroom-parameters">Parameters</h3>

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
|body|body|[DisassociateDeviceFromRoomRequest](#schemadisassociatedevicefromroomrequest)|true|none|
|» DeviceArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DisassociateDeviceFromRoom|

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

<h3 id="disassociatedevicefromroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDeviceFromRoomResponse](#schemadisassociatedevicefromroomresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSkillFromSkillGroup

<a id="opIdDisassociateSkillFromSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DisassociateSkillFromSkillGroup' \
  -d '{
    "SkillGroupArn": {},
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup`

Disassociates a skill from a skill group.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "SkillId": {}
}
```

<h3 id="disassociateskillfromskillgroup-parameters">Parameters</h3>

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
|body|body|[DisassociateSkillFromSkillGroupRequest](#schemadisassociateskillfromskillgrouprequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DisassociateSkillFromSkillGroup|

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

<h3 id="disassociateskillfromskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSkillFromSkillGroupResponse](#schemadisassociateskillfromskillgroupresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSkillFromUsers

<a id="opIdDisassociateSkillFromUsers"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DisassociateSkillFromUsers' \
  -d '{
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers`

Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.

> Body parameter

```json
{
  "SkillId": {}
}
```

<h3 id="disassociateskillfromusers-parameters">Parameters</h3>

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
|body|body|[DisassociateSkillFromUsersRequest](#schemadisassociateskillfromusersrequest)|true|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DisassociateSkillFromUsers|

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

<h3 id="disassociateskillfromusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSkillFromUsersResponse](#schemadisassociateskillfromusersresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateSkillGroupFromRoom

<a id="opIdDisassociateSkillGroupFromRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.DisassociateSkillGroupFromRoom' \
  -d '{
    "SkillGroupArn": {},
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom`

Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "RoomArn": {}
}
```

<h3 id="disassociateskillgroupfromroom-parameters">Parameters</h3>

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
|body|body|[DisassociateSkillGroupFromRoomRequest](#schemadisassociateskillgroupfromroomrequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.DisassociateSkillGroupFromRoom|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="disassociateskillgroupfromroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateSkillGroupFromRoomResponse](#schemadisassociateskillgroupfromroomresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ForgetSmartHomeAppliances

<a id="opIdForgetSmartHomeAppliances"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ForgetSmartHomeAppliances' \
  -d '{
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances`

Forgets smart home appliances associated to a room.

> Body parameter

```json
{
  "RoomArn": {}
}
```

<h3 id="forgetsmarthomeappliances-parameters">Parameters</h3>

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
|body|body|[ForgetSmartHomeAppliancesRequest](#schemaforgetsmarthomeappliancesrequest)|true|none|
|» RoomArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ForgetSmartHomeAppliances|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="forgetsmarthomeappliances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ForgetSmartHomeAppliancesResponse](#schemaforgetsmarthomeappliancesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAddressBook

<a id="opIdGetAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetAddressBook' \
  -d '{
    "AddressBookArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetAddressBook`

Gets address the book details by the address book ARN.

> Body parameter

```json
{
  "AddressBookArn": {}
}
```

<h3 id="getaddressbook-parameters">Parameters</h3>

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
|body|body|[GetAddressBookRequest](#schemagetaddressbookrequest)|true|none|
|» AddressBookArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetAddressBook|

> Example responses

> 200 Response

```json
{
  "AddressBook": {
    "AddressBookArn": {},
    "Name": {},
    "Description": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAddressBookResponse](#schemagetaddressbookresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConferencePreference

<a id="opIdGetConferencePreference"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetConferencePreference' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetConferencePreference' \
  -d '{}'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetConferencePreference`

Retrieves the existing conference preferences.

> Body parameter

```json
{}
```

<h3 id="getconferencepreference-parameters">Parameters</h3>

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
|body|body|[GetConferencePreferenceRequest](#schemagetconferencepreferencerequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetConferencePreference|

> Example responses

> 200 Response

```json
{
  "Preference": {
    "DefaultConferenceProviderArn": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getconferencepreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConferencePreferenceResponse](#schemagetconferencepreferenceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetConferenceProvider

<a id="opIdGetConferenceProvider"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetConferenceProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetConferenceProvider' \
  -d '{
    "ConferenceProviderArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetConferenceProvider`

Gets details about a specific conference provider.

> Body parameter

```json
{
  "ConferenceProviderArn": {}
}
```

<h3 id="getconferenceprovider-parameters">Parameters</h3>

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
|body|body|[GetConferenceProviderRequest](#schemagetconferenceproviderrequest)|true|none|
|» ConferenceProviderArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetConferenceProvider|

> Example responses

> 200 Response

```json
{
  "ConferenceProvider": {
    "Arn": {},
    "Name": {},
    "Type": {},
    "IPDialIn": {
      "Endpoint": {},
      "CommsProtocol": {}
    },
    "PSTNDialIn": {
      "CountryCode": {},
      "PhoneNumber": {},
      "OneClickIdDelay": {},
      "OneClickPinDelay": {}
    },
    "MeetingSetting": {
      "RequirePin": {}
    }
  }
}
```

> 480 Response

```json
null
```

<h3 id="getconferenceprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetConferenceProviderResponse](#schemagetconferenceproviderresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContact

<a id="opIdGetContact"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetContact' \
  -d '{
    "ContactArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetContact`

Gets the contact details by the contact ARN.

> Body parameter

```json
{
  "ContactArn": {}
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
|» ContactArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetContact|

> Example responses

> 200 Response

```json
{
  "Contact": {
    "ContactArn": {},
    "DisplayName": {},
    "FirstName": {},
    "LastName": {},
    "PhoneNumber": {},
    "PhoneNumbers": {},
    "SipAddresses": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getcontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactResponse](#schemagetcontactresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevice

<a id="opIdGetDevice"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetDevice' \
  -d '{
    "DeviceArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetDevice`

Gets the details of a device by device ARN.

> Body parameter

```json
{
  "DeviceArn": {}
}
```

<h3 id="getdevice-parameters">Parameters</h3>

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
|body|body|[GetDeviceRequest](#schemagetdevicerequest)|true|none|
|» DeviceArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetDevice|

> Example responses

> 200 Response

```json
{
  "Device": {
    "DeviceArn": {},
    "DeviceSerialNumber": {},
    "DeviceType": {},
    "DeviceName": {},
    "SoftwareVersion": {},
    "MacAddress": {},
    "RoomArn": {},
    "DeviceStatus": {},
    "DeviceStatusInfo": {
      "DeviceStatusDetails": {},
      "ConnectionStatus": {},
      "ConnectionStatusUpdatedTime": {}
    },
    "NetworkProfileInfo": {
      "NetworkProfileArn": {},
      "CertificateArn": {},
      "CertificateExpirationTime": {}
    }
  }
}
```

> 480 Response

```json
null
```

<h3 id="getdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDeviceResponse](#schemagetdeviceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGateway

<a id="opIdGetGateway"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetGateway' \
  -d '{
    "GatewayArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetGateway`

Retrieves the details of a gateway.

> Body parameter

```json
{
  "GatewayArn": {}
}
```

<h3 id="getgateway-parameters">Parameters</h3>

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
|body|body|[GetGatewayRequest](#schemagetgatewayrequest)|true|none|
|» GatewayArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetGateway|

> Example responses

> 200 Response

```json
{
  "Gateway": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "GatewayGroupArn": {},
    "SoftwareVersion": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getgateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGatewayResponse](#schemagetgatewayresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGatewayGroup

<a id="opIdGetGatewayGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetGatewayGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetGatewayGroup' \
  -d '{
    "GatewayGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetGatewayGroup`

Retrieves the details of a gateway group.

> Body parameter

```json
{
  "GatewayGroupArn": {}
}
```

<h3 id="getgatewaygroup-parameters">Parameters</h3>

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
|body|body|[GetGatewayGroupRequest](#schemagetgatewaygrouprequest)|true|none|
|» GatewayGroupArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetGatewayGroup|

> Example responses

> 200 Response

```json
{
  "GatewayGroup": {
    "Arn": {},
    "Name": {},
    "Description": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getgatewaygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGatewayGroupResponse](#schemagetgatewaygroupresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInvitationConfiguration

<a id="opIdGetInvitationConfiguration"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetInvitationConfiguration' \
  -d '{}'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration`

Retrieves the configured values for the user enrollment invitation email template.

> Body parameter

```json
{}
```

<h3 id="getinvitationconfiguration-parameters">Parameters</h3>

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
|body|body|[GetInvitationConfigurationRequest](#schemagetinvitationconfigurationrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetInvitationConfiguration|

> Example responses

> 200 Response

```json
{
  "OrganizationName": {},
  "ContactEmail": {},
  "PrivateSkillIds": {}
}
```

> 480 Response

```json
null
```

<h3 id="getinvitationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInvitationConfigurationResponse](#schemagetinvitationconfigurationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetNetworkProfile

<a id="opIdGetNetworkProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetNetworkProfile' \
  -d '{
    "NetworkProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetNetworkProfile`

Gets the network profile details by the network profile ARN.

> Body parameter

```json
{
  "NetworkProfileArn": {}
}
```

<h3 id="getnetworkprofile-parameters">Parameters</h3>

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
|body|body|[GetNetworkProfileRequest](#schemagetnetworkprofilerequest)|true|none|
|» NetworkProfileArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetNetworkProfile|

> Example responses

> 200 Response

```json
{
  "NetworkProfile": {
    "NetworkProfileArn": {},
    "NetworkProfileName": {},
    "Description": {},
    "Ssid": {},
    "SecurityType": {},
    "EapMethod": {},
    "CurrentPassword": {},
    "NextPassword": {},
    "CertificateAuthorityArn": {},
    "TrustAnchors": {}
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

<h3 id="getnetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetNetworkProfileResponse](#schemagetnetworkprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidSecretsManagerResourceException|[InvalidSecretsManagerResourceException](#schemainvalidsecretsmanagerresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProfile

<a id="opIdGetProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetProfile' \
  -d '{
    "ProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetProfile`

Gets the details of a room profile by profile ARN.

> Body parameter

```json
{
  "ProfileArn": {}
}
```

<h3 id="getprofile-parameters">Parameters</h3>

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
|body|body|[GetProfileRequest](#schemagetprofilerequest)|true|none|
|» ProfileArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetProfile|

> Example responses

> 200 Response

```json
{
  "Profile": {
    "ProfileArn": {},
    "ProfileName": {},
    "IsDefault": {},
    "Address": {},
    "Timezone": {},
    "DistanceUnit": {},
    "TemperatureUnit": {},
    "WakeWord": {},
    "Locale": {},
    "SetupModeDisabled": {},
    "MaxVolumeLimit": {},
    "PSTNEnabled": {},
    "DataRetentionOptIn": {},
    "AddressBookArn": {},
    "MeetingRoomConfiguration": {
      "RoomUtilizationMetricsEnabled": {},
      "EndOfMeetingReminder": {
        "ReminderAtMinutes": {},
        "ReminderType": {},
        "Enabled": {}
      },
      "InstantBooking": {
        "DurationInMinutes": {},
        "Enabled": {}
      },
      "RequireCheckIn": {
        "ReleaseAfterMinutes": {},
        "Enabled": {}
      }
    }
  }
}
```

> 480 Response

```json
null
```

<h3 id="getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProfileResponse](#schemagetprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRoom

<a id="opIdGetRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetRoom' \
  -d '{
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetRoom`

Gets room details by room ARN.

> Body parameter

```json
{
  "RoomArn": {}
}
```

<h3 id="getroom-parameters">Parameters</h3>

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
|body|body|[GetRoomRequest](#schemagetroomrequest)|true|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetRoom|

> Example responses

> 200 Response

```json
{
  "Room": {
    "RoomArn": {},
    "RoomName": {},
    "Description": {},
    "ProviderCalendarId": {},
    "ProfileArn": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRoomResponse](#schemagetroomresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRoomSkillParameter

<a id="opIdGetRoomSkillParameter"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetRoomSkillParameter' \
  -d '{
    "RoomArn": {},
    "SkillId": {},
    "ParameterKey": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter`

Gets room skill parameter details by room, skill, and parameter key ARN.

> Body parameter

```json
{
  "RoomArn": {},
  "SkillId": {},
  "ParameterKey": {}
}
```

<h3 id="getroomskillparameter-parameters">Parameters</h3>

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
|body|body|[GetRoomSkillParameterRequest](#schemagetroomskillparameterrequest)|true|none|
|» RoomArn|body|object|false|none|
|» SkillId|body|object|true|none|
|» ParameterKey|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetRoomSkillParameter|

> Example responses

> 200 Response

```json
{
  "RoomSkillParameter": {
    "ParameterKey": {},
    "ParameterValue": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getroomskillparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRoomSkillParameterResponse](#schemagetroomskillparameterresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSkillGroup

<a id="opIdGetSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.GetSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.GetSkillGroup' \
  -d '{
    "SkillGroupArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.GetSkillGroup`

Gets skill group details by skill group ARN.

> Body parameter

```json
{
  "SkillGroupArn": {}
}
```

<h3 id="getskillgroup-parameters">Parameters</h3>

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
|body|body|[GetSkillGroupRequest](#schemagetskillgrouprequest)|true|none|
|» SkillGroupArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.GetSkillGroup|

> Example responses

> 200 Response

```json
{
  "SkillGroup": {
    "SkillGroupArn": {},
    "SkillGroupName": {},
    "Description": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="getskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSkillGroupResponse](#schemagetskillgroupresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBusinessReportSchedules

<a id="opIdListBusinessReportSchedules"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListBusinessReportSchedules' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules`

Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listbusinessreportschedules-parameters">Parameters</h3>

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
|body|body|[ListBusinessReportSchedulesRequest](#schemalistbusinessreportschedulesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListBusinessReportSchedules|

> Example responses

> 200 Response

```json
{
  "BusinessReportSchedules": {},
  "NextToken": {}
}
```

<h3 id="listbusinessreportschedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBusinessReportSchedulesResponse](#schemalistbusinessreportschedulesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConferenceProviders

<a id="opIdListConferenceProviders"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListConferenceProviders' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListConferenceProviders' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListConferenceProviders`

Lists conference providers under a specific AWS account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listconferenceproviders-parameters">Parameters</h3>

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
|body|body|[ListConferenceProvidersRequest](#schemalistconferenceprovidersrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListConferenceProviders|

> Example responses

> 200 Response

```json
{
  "ConferenceProviders": {},
  "NextToken": {}
}
```

<h3 id="listconferenceproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConferenceProvidersResponse](#schemalistconferenceprovidersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeviceEvents

<a id="opIdListDeviceEvents"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListDeviceEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListDeviceEvents' \
  -d '{
    "DeviceArn": {},
    "EventType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListDeviceEvents`

Lists the device event history, including device connection status, for up to 30 days.

> Body parameter

```json
{
  "DeviceArn": {},
  "EventType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdeviceevents-parameters">Parameters</h3>

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
|body|body|[ListDeviceEventsRequest](#schemalistdeviceeventsrequest)|true|none|
|» DeviceArn|body|object|true|none|
|» EventType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListDeviceEvents|

> Example responses

> 200 Response

```json
{
  "DeviceEvents": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdeviceevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeviceEventsResponse](#schemalistdeviceeventsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGatewayGroups

<a id="opIdListGatewayGroups"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListGatewayGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListGatewayGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListGatewayGroups`

Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of a specific gateway group.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listgatewaygroups-parameters">Parameters</h3>

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
|body|body|[ListGatewayGroupsRequest](#schemalistgatewaygroupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListGatewayGroups|

> Example responses

> 200 Response

```json
{
  "GatewayGroups": {},
  "NextToken": {}
}
```

<h3 id="listgatewaygroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewayGroupsResponse](#schemalistgatewaygroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGateways

<a id="opIdListGateways"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListGateways' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListGateways' \
  -d '{
    "GatewayGroupArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListGateways`

Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries of gateways that are associated with that gateway group ARN.

> Body parameter

```json
{
  "GatewayGroupArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listgateways-parameters">Parameters</h3>

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
|body|body|[ListGatewaysRequest](#schemalistgatewaysrequest)|true|none|
|» GatewayGroupArn|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListGateways|

> Example responses

> 200 Response

```json
{
  "Gateways": {},
  "NextToken": {}
}
```

<h3 id="listgateways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGatewaysResponse](#schemalistgatewaysresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSkills

<a id="opIdListSkills"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListSkills' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListSkills' \
  -d '{
    "SkillGroupArn": {},
    "EnablementType": {},
    "SkillType": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListSkills`

Lists all enabled skills in a specific skill group.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "EnablementType": {},
  "SkillType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listskills-parameters">Parameters</h3>

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
|body|body|[ListSkillsRequest](#schemalistskillsrequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» EnablementType|body|object|false|none|
|» SkillType|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListSkills|

> Example responses

> 200 Response

```json
{
  "SkillSummaries": {},
  "NextToken": {}
}
```

<h3 id="listskills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSkillsResponse](#schemalistskillsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSkillsStoreCategories

<a id="opIdListSkillsStoreCategories"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListSkillsStoreCategories' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories`

Lists all categories in the Alexa skill store.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listskillsstorecategories-parameters">Parameters</h3>

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
|body|body|[ListSkillsStoreCategoriesRequest](#schemalistskillsstorecategoriesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListSkillsStoreCategories|

> Example responses

> 200 Response

```json
{
  "CategoryList": {},
  "NextToken": {}
}
```

<h3 id="listskillsstorecategories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSkillsStoreCategoriesResponse](#schemalistskillsstorecategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSkillsStoreSkillsByCategory

<a id="opIdListSkillsStoreSkillsByCategory"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListSkillsStoreSkillsByCategory' \
  -d '{
    "CategoryId": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory`

Lists all skills in the Alexa skill store by category.

> Body parameter

```json
{
  "CategoryId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listskillsstoreskillsbycategory-parameters">Parameters</h3>

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
|body|body|[ListSkillsStoreSkillsByCategoryRequest](#schemalistskillsstoreskillsbycategoryrequest)|true|none|
|» CategoryId|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListSkillsStoreSkillsByCategory|

> Example responses

> 200 Response

```json
{
  "SkillsStoreSkills": {},
  "NextToken": {}
}
```

<h3 id="listskillsstoreskillsbycategory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSkillsStoreSkillsByCategoryResponse](#schemalistskillsstoreskillsbycategoryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSmartHomeAppliances

<a id="opIdListSmartHomeAppliances"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListSmartHomeAppliances' \
  -d '{
    "RoomArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances`

Lists all of the smart home appliances associated with a room.

> Body parameter

```json
{
  "RoomArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listsmarthomeappliances-parameters">Parameters</h3>

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
|body|body|[ListSmartHomeAppliancesRequest](#schemalistsmarthomeappliancesrequest)|true|none|
|» RoomArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListSmartHomeAppliances|

> Example responses

> 200 Response

```json
{
  "SmartHomeAppliances": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listsmarthomeappliances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSmartHomeAppliancesResponse](#schemalistsmarthomeappliancesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ListTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ListTags' \
  -d '{
    "Arn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ListTags`

Lists all tags for the specified resource.

> Body parameter

```json
{
  "Arn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtags-parameters">Parameters</h3>

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
|body|body|[ListTagsRequest](#schemalisttagsrequest)|true|none|
|» Arn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ListTags|

> Example responses

> 200 Response

```json
{
  "Tags": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutConferencePreference

<a id="opIdPutConferencePreference"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.PutConferencePreference' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.PutConferencePreference' \
  -d '{
    "ConferencePreference": {
      "DefaultConferenceProviderArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.PutConferencePreference`

Sets the conference preferences on a specific conference provider at the account level.

> Body parameter

```json
{
  "ConferencePreference": {
    "DefaultConferenceProviderArn": {}
  }
}
```

<h3 id="putconferencepreference-parameters">Parameters</h3>

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
|body|body|[PutConferencePreferenceRequest](#schemaputconferencepreferencerequest)|true|none|
|» ConferencePreference|body|object|true|none|
|» » DefaultConferenceProviderArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.PutConferencePreference|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="putconferencepreference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutConferencePreferenceResponse](#schemaputconferencepreferenceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutInvitationConfiguration

<a id="opIdPutInvitationConfiguration"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.PutInvitationConfiguration' \
  -d '{
    "OrganizationName": {},
    "ContactEmail": {},
    "PrivateSkillIds": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration`

Configures the email template for the user enrollment invitation with the specified attributes.

> Body parameter

```json
{
  "OrganizationName": {},
  "ContactEmail": {},
  "PrivateSkillIds": {}
}
```

<h3 id="putinvitationconfiguration-parameters">Parameters</h3>

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
|body|body|[PutInvitationConfigurationRequest](#schemaputinvitationconfigurationrequest)|true|none|
|» OrganizationName|body|object|true|none|
|» ContactEmail|body|object|false|none|
|» PrivateSkillIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.PutInvitationConfiguration|

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

<h3 id="putinvitationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutInvitationConfigurationResponse](#schemaputinvitationconfigurationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRoomSkillParameter

<a id="opIdPutRoomSkillParameter"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.PutRoomSkillParameter' \
  -d '{
    "RoomArn": {},
    "SkillId": {},
    "RoomSkillParameter": {
      "ParameterKey": {},
      "ParameterValue": {}
    }
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter`

Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.

> Body parameter

```json
{
  "RoomArn": {},
  "SkillId": {},
  "RoomSkillParameter": {
    "ParameterKey": {},
    "ParameterValue": {}
  }
}
```

<h3 id="putroomskillparameter-parameters">Parameters</h3>

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
|body|body|[PutRoomSkillParameterRequest](#schemaputroomskillparameterrequest)|true|none|
|» RoomArn|body|object|false|none|
|» SkillId|body|object|true|none|
|» RoomSkillParameter|body|object|true|none|
|» » ParameterKey|body|object|true|none|
|» » ParameterValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.PutRoomSkillParameter|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="putroomskillparameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRoomSkillParameterResponse](#schemaputroomskillparameterresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutSkillAuthorization

<a id="opIdPutSkillAuthorization"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.PutSkillAuthorization' \
  -d '{
    "AuthorizationResult": {
      "property1": "string",
      "property2": "string"
    },
    "SkillId": {},
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization`

Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.

> Body parameter

```json
{
  "AuthorizationResult": {
    "property1": "string",
    "property2": "string"
  },
  "SkillId": {},
  "RoomArn": {}
}
```

<h3 id="putskillauthorization-parameters">Parameters</h3>

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
|body|body|[PutSkillAuthorizationRequest](#schemaputskillauthorizationrequest)|true|none|
|» AuthorizationResult|body|object|true|none|
|» » **additionalProperties**|body|[Value](#schemavalue)|false|none|
|» SkillId|body|object|true|none|
|» RoomArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.PutSkillAuthorization|

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

<h3 id="putskillauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutSkillAuthorizationResponse](#schemaputskillauthorizationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterAVSDevice

<a id="opIdRegisterAVSDevice"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.RegisterAVSDevice' \
  -d '{
    "ClientId": {},
    "UserCode": {},
    "ProductId": {},
    "DeviceSerialNumber": {},
    "AmazonId": {},
    "RoomArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice`

Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).

> Body parameter

```json
{
  "ClientId": {},
  "UserCode": {},
  "ProductId": {},
  "DeviceSerialNumber": {},
  "AmazonId": {},
  "RoomArn": {},
  "Tags": {}
}
```

<h3 id="registeravsdevice-parameters">Parameters</h3>

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
|body|body|[RegisterAVSDeviceRequest](#schemaregisteravsdevicerequest)|true|none|
|» ClientId|body|object|true|none|
|» UserCode|body|object|true|none|
|» ProductId|body|object|true|none|
|» DeviceSerialNumber|body|object|false|none|
|» AmazonId|body|object|true|none|
|» RoomArn|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.RegisterAVSDevice|

> Example responses

> 200 Response

```json
{
  "DeviceArn": {}
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

<h3 id="registeravsdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterAVSDeviceResponse](#schemaregisteravsdeviceresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InvalidDeviceException|[InvalidDeviceException](#schemainvaliddeviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectSkill

<a id="opIdRejectSkill"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.RejectSkill' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.RejectSkill' \
  -d '{
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.RejectSkill`

Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill that is rejected can be added later by calling the ApproveSkill API. 

> Body parameter

```json
{
  "SkillId": {}
}
```

<h3 id="rejectskill-parameters">Parameters</h3>

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
|body|body|[RejectSkillRequest](#schemarejectskillrequest)|true|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.RejectSkill|

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

<h3 id="rejectskill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectSkillResponse](#schemarejectskillresponse)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResolveRoom

<a id="opIdResolveRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.ResolveRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.ResolveRoom' \
  -d '{
    "UserId": {},
    "SkillId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.ResolveRoom`

<p>Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.</p> <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When the skill is using an AWS Lambda function, the skill is automatically authorized when you publish your skill as a private skill to your AWS account. Skills that are hosted using a custom web service must be manually authorized. To get your skill authorized, contact AWS Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>

> Body parameter

```json
{
  "UserId": {},
  "SkillId": {}
}
```

<h3 id="resolveroom-parameters">Parameters</h3>

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
|body|body|[ResolveRoomRequest](#schemaresolveroomrequest)|true|none|
|» UserId|body|object|true|none|
|» SkillId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.ResolveRoom|

> Example responses

> 200 Response

```json
{
  "RoomArn": {},
  "RoomName": {},
  "RoomSkillParameters": {}
}
```

> 480 Response

```json
null
```

<h3 id="resolveroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolveRoomResponse](#schemaresolveroomresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeInvitation

<a id="opIdRevokeInvitation"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.RevokeInvitation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.RevokeInvitation' \
  -d '{
    "UserArn": {},
    "EnrollmentId": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.RevokeInvitation`

Revokes an invitation and invalidates the enrollment URL.

> Body parameter

```json
{
  "UserArn": {},
  "EnrollmentId": {}
}
```

<h3 id="revokeinvitation-parameters">Parameters</h3>

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
|body|body|[RevokeInvitationRequest](#schemarevokeinvitationrequest)|true|none|
|» UserArn|body|object|false|none|
|» EnrollmentId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.RevokeInvitation|

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

<h3 id="revokeinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeInvitationResponse](#schemarevokeinvitationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchAddressBooks

<a id="opIdSearchAddressBooks"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchAddressBooks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchAddressBooks' \
  -d '{
    "Filters": {},
    "SortCriteria": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchAddressBooks`

Searches address books and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "Filters": {},
  "SortCriteria": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="searchaddressbooks-parameters">Parameters</h3>

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
|body|body|[SearchAddressBooksRequest](#schemasearchaddressbooksrequest)|true|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchAddressBooks|

> Example responses

> 200 Response

```json
{
  "AddressBooks": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchaddressbooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchAddressBooksResponse](#schemasearchaddressbooksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchContacts

<a id="opIdSearchContacts"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchContacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchContacts' \
  -d '{
    "Filters": {},
    "SortCriteria": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchContacts`

Searches contacts and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "Filters": {},
  "SortCriteria": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="searchcontacts-parameters">Parameters</h3>

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
|body|body|[SearchContactsRequest](#schemasearchcontactsrequest)|true|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchContacts|

> Example responses

> 200 Response

```json
{
  "Contacts": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchcontacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchContactsResponse](#schemasearchcontactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchDevices

<a id="opIdSearchDevices"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchDevices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchDevices' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchDevices`

Searches devices and lists the ones that meet a set of filter criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchdevices-parameters">Parameters</h3>

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
|body|body|[SearchDevicesRequest](#schemasearchdevicesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchDevices|

> Example responses

> 200 Response

```json
{
  "Devices": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchDevicesResponse](#schemasearchdevicesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchNetworkProfiles

<a id="opIdSearchNetworkProfiles"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchNetworkProfiles' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles`

Searches network profiles and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchnetworkprofiles-parameters">Parameters</h3>

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
|body|body|[SearchNetworkProfilesRequest](#schemasearchnetworkprofilesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchNetworkProfiles|

> Example responses

> 200 Response

```json
{
  "NetworkProfiles": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchnetworkprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchNetworkProfilesResponse](#schemasearchnetworkprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchProfiles

<a id="opIdSearchProfiles"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchProfiles' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchProfiles`

Searches room profiles and lists the ones that meet a set of filter criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchprofiles-parameters">Parameters</h3>

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
|body|body|[SearchProfilesRequest](#schemasearchprofilesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchProfiles|

> Example responses

> 200 Response

```json
{
  "Profiles": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchProfilesResponse](#schemasearchprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchRooms

<a id="opIdSearchRooms"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchRooms' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchRooms' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchRooms`

Searches rooms and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchrooms-parameters">Parameters</h3>

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
|body|body|[SearchRoomsRequest](#schemasearchroomsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchRooms|

> Example responses

> 200 Response

```json
{
  "Rooms": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchRoomsResponse](#schemasearchroomsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchSkillGroups

<a id="opIdSearchSkillGroups"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchSkillGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchSkillGroups' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchSkillGroups`

Searches skill groups and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchskillgroups-parameters">Parameters</h3>

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
|body|body|[SearchSkillGroupsRequest](#schemasearchskillgroupsrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchSkillGroups|

> Example responses

> 200 Response

```json
{
  "SkillGroups": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchskillgroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchSkillGroupsResponse](#schemasearchskillgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchUsers

<a id="opIdSearchUsers"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SearchUsers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SearchUsers' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {},
    "SortCriteria": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SearchUsers`

Searches users and lists the ones that meet a set of filter and sort criteria.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

<h3 id="searchusers-parameters">Parameters</h3>

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
|body|body|[SearchUsersRequest](#schemasearchusersrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|
|» SortCriteria|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SearchUsers|

> Example responses

> 200 Response

```json
{
  "Users": {},
  "NextToken": {},
  "TotalCount": {}
}
```

<h3 id="searchusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchUsersResponse](#schemasearchusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendAnnouncement

<a id="opIdSendAnnouncement"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SendAnnouncement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SendAnnouncement' \
  -d '{
    "RoomFilters": {},
    "Content": {
      "TextList": {},
      "SsmlList": {},
      "AudioList": {}
    },
    "TimeToLiveInSeconds": {},
    "ClientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SendAnnouncement`

Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter. 

> Body parameter

```json
{
  "RoomFilters": {},
  "Content": {
    "TextList": {},
    "SsmlList": {},
    "AudioList": {}
  },
  "TimeToLiveInSeconds": {},
  "ClientRequestToken": {}
}
```

<h3 id="sendannouncement-parameters">Parameters</h3>

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
|body|body|[SendAnnouncementRequest](#schemasendannouncementrequest)|true|none|
|» RoomFilters|body|object|true|none|
|» Content|body|object|true|none|
|» » TextList|body|object|false|none|
|» » SsmlList|body|object|false|none|
|» » AudioList|body|object|false|none|
|» TimeToLiveInSeconds|body|object|false|none|
|» ClientRequestToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SendAnnouncement|

> Example responses

> 200 Response

```json
{
  "AnnouncementArn": {}
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

<h3 id="sendannouncement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendAnnouncementResponse](#schemasendannouncementresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|AlreadyExistsException|[AlreadyExistsException](#schemaalreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SendInvitation

<a id="opIdSendInvitation"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.SendInvitation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.SendInvitation' \
  -d '{
    "UserArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.SendInvitation`

Sends an enrollment invitation email with a URL to a user. The URL is valid for 30 days or until you call this operation again, whichever comes first. 

> Body parameter

```json
{
  "UserArn": {}
}
```

<h3 id="sendinvitation-parameters">Parameters</h3>

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
|body|body|[SendInvitationRequest](#schemasendinvitationrequest)|true|none|
|» UserArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.SendInvitation|

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

<h3 id="sendinvitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SendInvitationResponse](#schemasendinvitationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidUserStatusException|[InvalidUserStatusException](#schemainvaliduserstatusexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDeviceSync

<a id="opIdStartDeviceSync"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.StartDeviceSync' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.StartDeviceSync' \
  -d '{
    "RoomArn": {},
    "DeviceArn": {},
    "Features": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.StartDeviceSync`

<p>Resets a device and its account to the known default settings. This clears all information and settings set by previous users in the following ways:</p> <ul> <li> <p>Bluetooth - This unpairs all bluetooth devices paired with your echo device.</p> </li> <li> <p>Volume - This resets the echo device's volume to the default value.</p> </li> <li> <p>Notifications - This clears all notifications from your echo device.</p> </li> <li> <p>Lists - This clears all to-do items from your echo device.</p> </li> <li> <p>Settings - This internally syncs the room's profile (if the device is assigned to a room), contacts, address books, delegation access for account linking, and communications (if enabled on the room profile).</p> </li> </ul>

> Body parameter

```json
{
  "RoomArn": {},
  "DeviceArn": {},
  "Features": {}
}
```

<h3 id="startdevicesync-parameters">Parameters</h3>

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
|body|body|[StartDeviceSyncRequest](#schemastartdevicesyncrequest)|true|none|
|» RoomArn|body|object|false|none|
|» DeviceArn|body|object|false|none|
|» Features|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.StartDeviceSync|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="startdevicesync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDeviceSyncResponse](#schemastartdevicesyncresponse)|
|480|480|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartSmartHomeApplianceDiscovery

<a id="opIdStartSmartHomeApplianceDiscovery"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.StartSmartHomeApplianceDiscovery' \
  -d '{
    "RoomArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery`

Initiates the discovery of any smart home appliances associated with the room.

> Body parameter

```json
{
  "RoomArn": {}
}
```

<h3 id="startsmarthomeappliancediscovery-parameters">Parameters</h3>

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
|body|body|[StartSmartHomeApplianceDiscoveryRequest](#schemastartsmarthomeappliancediscoveryrequest)|true|none|
|» RoomArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.StartSmartHomeApplianceDiscovery|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="startsmarthomeappliancediscovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartSmartHomeApplianceDiscoveryResponse](#schemastartsmarthomeappliancediscoveryresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.TagResource' \
  -d '{
    "Arn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.TagResource`

Adds metadata tags to a specified resource.

> Body parameter

```json
{
  "Arn": {},
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
|» Arn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.TagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UntagResource' \
  -d '{
    "Arn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UntagResource`

Removes metadata tags from a specified resource.

> Body parameter

```json
{
  "Arn": {},
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
|» Arn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAddressBook

<a id="opIdUpdateAddressBook"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateAddressBook' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateAddressBook' \
  -d '{
    "AddressBookArn": {},
    "Name": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateAddressBook`

Updates address book details by the address book ARN.

> Body parameter

```json
{
  "AddressBookArn": {},
  "Name": {},
  "Description": {}
}
```

<h3 id="updateaddressbook-parameters">Parameters</h3>

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
|body|body|[UpdateAddressBookRequest](#schemaupdateaddressbookrequest)|true|none|
|» AddressBookArn|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateAddressBook|

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

<h3 id="updateaddressbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAddressBookResponse](#schemaupdateaddressbookresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBusinessReportSchedule

<a id="opIdUpdateBusinessReportSchedule"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateBusinessReportSchedule' \
  -d '{
    "ScheduleArn": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Format": {},
    "ScheduleName": {},
    "Recurrence": {
      "StartDate": {}
    }
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule`

Updates the configuration of the report delivery schedule with the specified schedule ARN.

> Body parameter

```json
{
  "ScheduleArn": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Format": {},
  "ScheduleName": {},
  "Recurrence": {
    "StartDate": {}
  }
}
```

<h3 id="updatebusinessreportschedule-parameters">Parameters</h3>

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
|body|body|[UpdateBusinessReportScheduleRequest](#schemaupdatebusinessreportschedulerequest)|true|none|
|» ScheduleArn|body|object|true|none|
|» S3BucketName|body|object|false|none|
|» S3KeyPrefix|body|object|false|none|
|» Format|body|object|false|none|
|» ScheduleName|body|object|false|none|
|» Recurrence|body|object|false|none|
|» » StartDate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateBusinessReportSchedule|

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

<h3 id="updatebusinessreportschedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBusinessReportScheduleResponse](#schemaupdatebusinessreportscheduleresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConferenceProvider

<a id="opIdUpdateConferenceProvider"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateConferenceProvider' \
  -d '{
    "ConferenceProviderArn": {},
    "ConferenceProviderType": {},
    "IPDialIn": {
      "Endpoint": {},
      "CommsProtocol": {}
    },
    "PSTNDialIn": {
      "CountryCode": {},
      "PhoneNumber": {},
      "OneClickIdDelay": {},
      "OneClickPinDelay": {}
    },
    "MeetingSetting": {
      "RequirePin": {}
    }
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider`

Updates an existing conference provider's settings.

> Body parameter

```json
{
  "ConferenceProviderArn": {},
  "ConferenceProviderType": {},
  "IPDialIn": {
    "Endpoint": {},
    "CommsProtocol": {}
  },
  "PSTNDialIn": {
    "CountryCode": {},
    "PhoneNumber": {},
    "OneClickIdDelay": {},
    "OneClickPinDelay": {}
  },
  "MeetingSetting": {
    "RequirePin": {}
  }
}
```

<h3 id="updateconferenceprovider-parameters">Parameters</h3>

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
|body|body|[UpdateConferenceProviderRequest](#schemaupdateconferenceproviderrequest)|true|none|
|» ConferenceProviderArn|body|object|true|none|
|» ConferenceProviderType|body|object|true|none|
|» IPDialIn|body|object|false|none|
|» » Endpoint|body|object|true|none|
|» » CommsProtocol|body|object|true|none|
|» PSTNDialIn|body|object|false|none|
|» » CountryCode|body|object|true|none|
|» » PhoneNumber|body|object|true|none|
|» » OneClickIdDelay|body|object|true|none|
|» » OneClickPinDelay|body|object|true|none|
|» MeetingSetting|body|object|true|none|
|» » RequirePin|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateConferenceProvider|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="updateconferenceprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConferenceProviderResponse](#schemaupdateconferenceproviderresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContact

<a id="opIdUpdateContact"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateContact' \
  -d '{
    "ContactArn": {},
    "DisplayName": {},
    "FirstName": {},
    "LastName": {},
    "PhoneNumber": {},
    "PhoneNumbers": {},
    "SipAddresses": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateContact`

Updates the contact details by the contact ARN.

> Body parameter

```json
{
  "ContactArn": {},
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {}
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
|» ContactArn|body|object|true|none|
|» DisplayName|body|object|false|none|
|» FirstName|body|object|false|none|
|» LastName|body|object|false|none|
|» PhoneNumber|body|object|false|none|
|» PhoneNumbers|body|object|false|none|
|» SipAddresses|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateContact|

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

<h3 id="updatecontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContactResponse](#schemaupdatecontactresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDevice

<a id="opIdUpdateDevice"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateDevice' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateDevice' \
  -d '{
    "DeviceArn": {},
    "DeviceName": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateDevice`

Updates the device name by device ARN.

> Body parameter

```json
{
  "DeviceArn": {},
  "DeviceName": {}
}
```

<h3 id="updatedevice-parameters">Parameters</h3>

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
|body|body|[UpdateDeviceRequest](#schemaupdatedevicerequest)|true|none|
|» DeviceArn|body|object|false|none|
|» DeviceName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateDevice|

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

<h3 id="updatedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDeviceResponse](#schemaupdatedeviceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|482|482|DeviceNotRegisteredException|[DeviceNotRegisteredException](#schemadevicenotregisteredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGateway

<a id="opIdUpdateGateway"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateGateway' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateGateway' \
  -d '{
    "GatewayArn": {},
    "Name": {},
    "Description": {},
    "SoftwareVersion": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateGateway`

Updates the details of a gateway. If any optional field is not provided, the existing corresponding value is left unmodified.

> Body parameter

```json
{
  "GatewayArn": {},
  "Name": {},
  "Description": {},
  "SoftwareVersion": {}
}
```

<h3 id="updategateway-parameters">Parameters</h3>

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
|body|body|[UpdateGatewayRequest](#schemaupdategatewayrequest)|true|none|
|» GatewayArn|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» SoftwareVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateGateway|

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

<h3 id="updategateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewayResponse](#schemaupdategatewayresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGatewayGroup

<a id="opIdUpdateGatewayGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateGatewayGroup' \
  -d '{
    "GatewayGroupArn": {},
    "Name": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup`

Updates the details of a gateway group. If any optional field is not provided, the existing corresponding value is left unmodified.

> Body parameter

```json
{
  "GatewayGroupArn": {},
  "Name": {},
  "Description": {}
}
```

<h3 id="updategatewaygroup-parameters">Parameters</h3>

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
|body|body|[UpdateGatewayGroupRequest](#schemaupdategatewaygrouprequest)|true|none|
|» GatewayGroupArn|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateGatewayGroup|

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

<h3 id="updategatewaygroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGatewayGroupResponse](#schemaupdategatewaygroupresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateNetworkProfile

<a id="opIdUpdateNetworkProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateNetworkProfile' \
  -d '{
    "NetworkProfileArn": {},
    "NetworkProfileName": {},
    "Description": {},
    "CurrentPassword": {},
    "NextPassword": {},
    "CertificateAuthorityArn": {},
    "TrustAnchors": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile`

Updates a network profile by the network profile ARN.

> Body parameter

```json
{
  "NetworkProfileArn": {},
  "NetworkProfileName": {},
  "Description": {},
  "CurrentPassword": {},
  "NextPassword": {},
  "CertificateAuthorityArn": {},
  "TrustAnchors": {}
}
```

<h3 id="updatenetworkprofile-parameters">Parameters</h3>

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
|body|body|[UpdateNetworkProfileRequest](#schemaupdatenetworkprofilerequest)|true|none|
|» NetworkProfileArn|body|object|true|none|
|» NetworkProfileName|body|object|false|none|
|» Description|body|object|false|none|
|» CurrentPassword|body|object|false|none|
|» NextPassword|body|object|false|none|
|» CertificateAuthorityArn|body|object|false|none|
|» TrustAnchors|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateNetworkProfile|

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

<h3 id="updatenetworkprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateNetworkProfileResponse](#schemaupdatenetworkprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|483|483|InvalidCertificateAuthorityException|[InvalidCertificateAuthorityException](#schemainvalidcertificateauthorityexception)|
|484|484|InvalidSecretsManagerResourceException|[InvalidSecretsManagerResourceException](#schemainvalidsecretsmanagerresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProfile

<a id="opIdUpdateProfile"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateProfile' \
  -d '{
    "ProfileArn": {},
    "ProfileName": {},
    "IsDefault": {},
    "Timezone": {},
    "Address": {},
    "DistanceUnit": {},
    "TemperatureUnit": {},
    "WakeWord": {},
    "Locale": {},
    "SetupModeDisabled": {},
    "MaxVolumeLimit": {},
    "PSTNEnabled": {},
    "DataRetentionOptIn": {},
    "MeetingRoomConfiguration": {
      "RoomUtilizationMetricsEnabled": {},
      "EndOfMeetingReminder": {
        "ReminderAtMinutes": {},
        "ReminderType": {},
        "Enabled": {}
      },
      "InstantBooking": {
        "DurationInMinutes": {},
        "Enabled": {}
      },
      "RequireCheckIn": {
        "ReleaseAfterMinutes": {},
        "Enabled": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateProfile`

Updates an existing room profile by room profile ARN.

> Body parameter

```json
{
  "ProfileArn": {},
  "ProfileName": {},
  "IsDefault": {},
  "Timezone": {},
  "Address": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {},
  "SetupModeDisabled": {},
  "MaxVolumeLimit": {},
  "PSTNEnabled": {},
  "DataRetentionOptIn": {},
  "MeetingRoomConfiguration": {
    "RoomUtilizationMetricsEnabled": {},
    "EndOfMeetingReminder": {
      "ReminderAtMinutes": {},
      "ReminderType": {},
      "Enabled": {}
    },
    "InstantBooking": {
      "DurationInMinutes": {},
      "Enabled": {}
    },
    "RequireCheckIn": {
      "ReleaseAfterMinutes": {},
      "Enabled": {}
    }
  }
}
```

<h3 id="updateprofile-parameters">Parameters</h3>

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
|body|body|[UpdateProfileRequest](#schemaupdateprofilerequest)|true|none|
|» ProfileArn|body|object|false|none|
|» ProfileName|body|object|false|none|
|» IsDefault|body|object|false|none|
|» Timezone|body|object|false|none|
|» Address|body|object|false|none|
|» DistanceUnit|body|object|false|none|
|» TemperatureUnit|body|object|false|none|
|» WakeWord|body|object|false|none|
|» Locale|body|object|false|none|
|» SetupModeDisabled|body|object|false|none|
|» MaxVolumeLimit|body|object|false|none|
|» PSTNEnabled|body|object|false|none|
|» DataRetentionOptIn|body|object|false|none|
|» MeetingRoomConfiguration|body|object|false|none|
|» » RoomUtilizationMetricsEnabled|body|object|false|none|
|» » EndOfMeetingReminder|body|object|false|none|
|» » » ReminderAtMinutes|body|object|false|none|
|» » » ReminderType|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » InstantBooking|body|object|false|none|
|» » » DurationInMinutes|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » RequireCheckIn|body|object|false|none|
|» » » ReleaseAfterMinutes|body|object|false|none|
|» » » Enabled|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateProfile|

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

<h3 id="updateprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProfileResponse](#schemaupdateprofileresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRoom

<a id="opIdUpdateRoom"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateRoom' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateRoom' \
  -d '{
    "RoomArn": {},
    "RoomName": {},
    "Description": {},
    "ProviderCalendarId": {},
    "ProfileArn": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateRoom`

Updates room details by room ARN.

> Body parameter

```json
{
  "RoomArn": {},
  "RoomName": {},
  "Description": {},
  "ProviderCalendarId": {},
  "ProfileArn": {}
}
```

<h3 id="updateroom-parameters">Parameters</h3>

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
|body|body|[UpdateRoomRequest](#schemaupdateroomrequest)|true|none|
|» RoomArn|body|object|false|none|
|» RoomName|body|object|false|none|
|» Description|body|object|false|none|
|» ProviderCalendarId|body|object|false|none|
|» ProfileArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateRoom|

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

<h3 id="updateroom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRoomResponse](#schemaupdateroomresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSkillGroup

<a id="opIdUpdateSkillGroup"></a>

> Code samples

```bash
curl 'https://alexaforbusiness.us-east-1.amazonaws.com/#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AlexaForBusiness.UpdateSkillGroup' \
  -d '{
    "SkillGroupArn": {},
    "SkillGroupName": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup`

Updates skill group details by skill group ARN.

> Body parameter

```json
{
  "SkillGroupArn": {},
  "SkillGroupName": {},
  "Description": {}
}
```

<h3 id="updateskillgroup-parameters">Parameters</h3>

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
|body|body|[UpdateSkillGroupRequest](#schemaupdateskillgrouprequest)|true|none|
|» SkillGroupArn|body|object|false|none|
|» SkillGroupName|body|object|false|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AlexaForBusiness.UpdateSkillGroup|

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

<h3 id="updateskillgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSkillGroupResponse](#schemaupdateskillgroupresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|NameInUseException|[NameInUseException](#schemanameinuseexception)|
|482|482|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ApproveSkillResponse">ApproveSkillResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapproveskillresponse"></a>
<a id="schema_ApproveSkillResponse"></a>
<a id="tocSapproveskillresponse"></a>
<a id="tocsapproveskillresponse"></a>

```json
{}
```

<h2 id="tocS_ApproveSkillRequest">ApproveSkillRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapproveskillrequest"></a>
<a id="schema_ApproveSkillRequest"></a>
<a id="tocSapproveskillrequest"></a>
<a id="tocsapproveskillrequest"></a>

```json
{
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|true|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_AssociateContactWithAddressBookResponse">AssociateContactWithAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecontactwithaddressbookresponse"></a>
<a id="schema_AssociateContactWithAddressBookResponse"></a>
<a id="tocSassociatecontactwithaddressbookresponse"></a>
<a id="tocsassociatecontactwithaddressbookresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateContactWithAddressBookRequest">AssociateContactWithAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecontactwithaddressbookrequest"></a>
<a id="schema_AssociateContactWithAddressBookRequest"></a>
<a id="tocSassociatecontactwithaddressbookrequest"></a>
<a id="tocsassociatecontactwithaddressbookrequest"></a>

```json
{
  "ContactArn": {},
  "AddressBookArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|AddressBookArn|object|true|none|none|

<h2 id="tocS_AssociateDeviceWithNetworkProfileResponse">AssociateDeviceWithNetworkProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithnetworkprofileresponse"></a>
<a id="schema_AssociateDeviceWithNetworkProfileResponse"></a>
<a id="tocSassociatedevicewithnetworkprofileresponse"></a>
<a id="tocsassociatedevicewithnetworkprofileresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateDeviceWithNetworkProfileRequest">AssociateDeviceWithNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithnetworkprofilerequest"></a>
<a id="schema_AssociateDeviceWithNetworkProfileRequest"></a>
<a id="tocSassociatedevicewithnetworkprofilerequest"></a>
<a id="tocsassociatedevicewithnetworkprofilerequest"></a>

```json
{
  "DeviceArn": {},
  "NetworkProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|true|none|none|
|NetworkProfileArn|object|true|none|none|

<h2 id="tocS_DeviceNotRegisteredException">DeviceNotRegisteredException</h2>
<!-- backwards compatibility -->
<a id="schemadevicenotregisteredexception"></a>
<a id="schema_DeviceNotRegisteredException"></a>
<a id="tocSdevicenotregisteredexception"></a>
<a id="tocsdevicenotregisteredexception"></a>

```json
null
```

<h2 id="tocS_AssociateDeviceWithRoomResponse">AssociateDeviceWithRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithroomresponse"></a>
<a id="schema_AssociateDeviceWithRoomResponse"></a>
<a id="tocSassociatedevicewithroomresponse"></a>
<a id="tocsassociatedevicewithroomresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateDeviceWithRoomRequest">AssociateDeviceWithRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedevicewithroomrequest"></a>
<a id="schema_AssociateDeviceWithRoomRequest"></a>
<a id="tocSassociatedevicewithroomrequest"></a>
<a id="tocsassociatedevicewithroomrequest"></a>

```json
{
  "DeviceArn": {},
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|
|RoomArn|object|false|none|none|

<h2 id="tocS_AssociateSkillGroupWithRoomResponse">AssociateSkillGroupWithRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillgroupwithroomresponse"></a>
<a id="schema_AssociateSkillGroupWithRoomResponse"></a>
<a id="tocSassociateskillgroupwithroomresponse"></a>
<a id="tocsassociateskillgroupwithroomresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateSkillGroupWithRoomRequest">AssociateSkillGroupWithRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillgroupwithroomrequest"></a>
<a id="schema_AssociateSkillGroupWithRoomRequest"></a>
<a id="tocSassociateskillgroupwithroomrequest"></a>
<a id="tocsassociateskillgroupwithroomrequest"></a>

```json
{
  "SkillGroupArn": {},
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|RoomArn|object|false|none|none|

<h2 id="tocS_AssociateSkillWithSkillGroupResponse">AssociateSkillWithSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillwithskillgroupresponse"></a>
<a id="schema_AssociateSkillWithSkillGroupResponse"></a>
<a id="tocSassociateskillwithskillgroupresponse"></a>
<a id="tocsassociateskillwithskillgroupresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateSkillWithSkillGroupRequest">AssociateSkillWithSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillwithskillgrouprequest"></a>
<a id="schema_AssociateSkillWithSkillGroupRequest"></a>
<a id="tocSassociateskillwithskillgrouprequest"></a>
<a id="tocsassociateskillwithskillgrouprequest"></a>

```json
{
  "SkillGroupArn": {},
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|SkillId|object|true|none|none|

<h2 id="tocS_SkillNotLinkedException">SkillNotLinkedException</h2>
<!-- backwards compatibility -->
<a id="schemaskillnotlinkedexception"></a>
<a id="schema_SkillNotLinkedException"></a>
<a id="tocSskillnotlinkedexception"></a>
<a id="tocsskillnotlinkedexception"></a>

```json
null
```

<h2 id="tocS_AssociateSkillWithUsersResponse">AssociateSkillWithUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillwithusersresponse"></a>
<a id="schema_AssociateSkillWithUsersResponse"></a>
<a id="tocSassociateskillwithusersresponse"></a>
<a id="tocsassociateskillwithusersresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateSkillWithUsersRequest">AssociateSkillWithUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateskillwithusersrequest"></a>
<a id="schema_AssociateSkillWithUsersRequest"></a>
<a id="tocSassociateskillwithusersrequest"></a>
<a id="tocsassociateskillwithusersrequest"></a>

```json
{
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|true|none|none|

<h2 id="tocS_CreateAddressBookResponse">CreateAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddressbookresponse"></a>
<a id="schema_CreateAddressBookResponse"></a>
<a id="tocScreateaddressbookresponse"></a>
<a id="tocscreateaddressbookresponse"></a>

```json
{
  "AddressBookArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|false|none|none|

<h2 id="tocS_CreateAddressBookRequest">CreateAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaddressbookrequest"></a>
<a id="schema_CreateAddressBookRequest"></a>
<a id="tocScreateaddressbookrequest"></a>
<a id="tocscreateaddressbookrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AlreadyExistsException">AlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaalreadyexistsexception"></a>
<a id="schema_AlreadyExistsException"></a>
<a id="tocSalreadyexistsexception"></a>
<a id="tocsalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateBusinessReportScheduleResponse">CreateBusinessReportScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebusinessreportscheduleresponse"></a>
<a id="schema_CreateBusinessReportScheduleResponse"></a>
<a id="tocScreatebusinessreportscheduleresponse"></a>
<a id="tocscreatebusinessreportscheduleresponse"></a>

```json
{
  "ScheduleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleArn|object|false|none|none|

<h2 id="tocS_CreateBusinessReportScheduleRequest">CreateBusinessReportScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebusinessreportschedulerequest"></a>
<a id="schema_CreateBusinessReportScheduleRequest"></a>
<a id="tocScreatebusinessreportschedulerequest"></a>
<a id="tocscreatebusinessreportschedulerequest"></a>

```json
{
  "ScheduleName": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Format": {},
  "ContentRange": {
    "Interval": {}
  },
  "Recurrence": {
    "StartDate": {}
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleName|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|Format|object|true|none|none|
|ContentRange|object|true|none|none|
|Recurrence|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateConferenceProviderResponse">CreateConferenceProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconferenceproviderresponse"></a>
<a id="schema_CreateConferenceProviderResponse"></a>
<a id="tocScreateconferenceproviderresponse"></a>
<a id="tocscreateconferenceproviderresponse"></a>

```json
{
  "ConferenceProviderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviderArn|object|false|none|none|

<h2 id="tocS_CreateConferenceProviderRequest">CreateConferenceProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconferenceproviderrequest"></a>
<a id="schema_CreateConferenceProviderRequest"></a>
<a id="tocScreateconferenceproviderrequest"></a>
<a id="tocscreateconferenceproviderrequest"></a>

```json
{
  "ConferenceProviderName": {},
  "ConferenceProviderType": {},
  "IPDialIn": {
    "Endpoint": {},
    "CommsProtocol": {}
  },
  "PSTNDialIn": {
    "CountryCode": {},
    "PhoneNumber": {},
    "OneClickIdDelay": {},
    "OneClickPinDelay": {}
  },
  "MeetingSetting": {
    "RequirePin": {}
  },
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviderName|object|true|none|none|
|ConferenceProviderType|object|true|none|none|
|IPDialIn|object|false|none|none|
|PSTNDialIn|object|false|none|none|
|MeetingSetting|object|true|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateContactResponse">CreateContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactresponse"></a>
<a id="schema_CreateContactResponse"></a>
<a id="tocScreatecontactresponse"></a>
<a id="tocscreatecontactresponse"></a>

```json
{
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|false|none|none|

<h2 id="tocS_CreateContactRequest">CreateContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontactrequest"></a>
<a id="schema_CreateContactRequest"></a>
<a id="tocScreatecontactrequest"></a>
<a id="tocscreatecontactrequest"></a>

```json
{
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DisplayName|object|false|none|none|
|FirstName|object|true|none|none|
|LastName|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|SipAddresses|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateGatewayGroupResponse">CreateGatewayGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewaygroupresponse"></a>
<a id="schema_CreateGatewayGroupResponse"></a>
<a id="tocScreategatewaygroupresponse"></a>
<a id="tocscreategatewaygroupresponse"></a>

```json
{
  "GatewayGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroupArn|object|false|none|none|

<h2 id="tocS_CreateGatewayGroupRequest">CreateGatewayGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategatewaygrouprequest"></a>
<a id="schema_CreateGatewayGroupRequest"></a>
<a id="tocScreategatewaygrouprequest"></a>
<a id="tocscreategatewaygrouprequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|ClientRequestToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateNetworkProfileResponse">CreateNetworkProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkprofileresponse"></a>
<a id="schema_CreateNetworkProfileResponse"></a>
<a id="tocScreatenetworkprofileresponse"></a>
<a id="tocscreatenetworkprofileresponse"></a>

```json
{
  "NetworkProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|false|none|none|

<h2 id="tocS_CreateNetworkProfileRequest">CreateNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenetworkprofilerequest"></a>
<a id="schema_CreateNetworkProfileRequest"></a>
<a id="tocScreatenetworkprofilerequest"></a>
<a id="tocscreatenetworkprofilerequest"></a>

```json
{
  "NetworkProfileName": {},
  "Description": {},
  "Ssid": {},
  "SecurityType": {},
  "EapMethod": {},
  "CurrentPassword": {},
  "NextPassword": {},
  "CertificateAuthorityArn": {},
  "TrustAnchors": {},
  "ClientRequestToken": "stringstri",
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileName|object|true|none|none|
|Description|object|false|none|none|
|Ssid|object|true|none|none|
|SecurityType|object|true|none|none|
|EapMethod|object|false|none|none|
|CurrentPassword|object|false|none|none|
|NextPassword|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|
|TrustAnchors|object|false|none|none|
|ClientRequestToken|[ClientRequestToken](#schemaclientrequesttoken)|true|none|A unique, user-specified identifier for the request that ensures idempotency.|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidCertificateAuthorityException">InvalidCertificateAuthorityException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcertificateauthorityexception"></a>
<a id="schema_InvalidCertificateAuthorityException"></a>
<a id="tocSinvalidcertificateauthorityexception"></a>
<a id="tocsinvalidcertificateauthorityexception"></a>

```json
null
```

<h2 id="tocS_InvalidServiceLinkedRoleStateException">InvalidServiceLinkedRoleStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidservicelinkedrolestateexception"></a>
<a id="schema_InvalidServiceLinkedRoleStateException"></a>
<a id="tocSinvalidservicelinkedrolestateexception"></a>
<a id="tocsinvalidservicelinkedrolestateexception"></a>

```json
null
```

<h2 id="tocS_CreateProfileResponse">CreateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofileresponse"></a>
<a id="schema_CreateProfileResponse"></a>
<a id="tocScreateprofileresponse"></a>
<a id="tocscreateprofileresponse"></a>

```json
{
  "ProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|

<h2 id="tocS_CreateProfileRequest">CreateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprofilerequest"></a>
<a id="schema_CreateProfileRequest"></a>
<a id="tocScreateprofilerequest"></a>
<a id="tocscreateprofilerequest"></a>

```json
{
  "ProfileName": {},
  "Timezone": {},
  "Address": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {},
  "ClientRequestToken": {},
  "SetupModeDisabled": {},
  "MaxVolumeLimit": {},
  "PSTNEnabled": {},
  "DataRetentionOptIn": {},
  "MeetingRoomConfiguration": {
    "RoomUtilizationMetricsEnabled": {},
    "EndOfMeetingReminder": {
      "ReminderAtMinutes": {},
      "ReminderType": {},
      "Enabled": {}
    },
    "InstantBooking": {
      "DurationInMinutes": {},
      "Enabled": {}
    },
    "RequireCheckIn": {
      "ReleaseAfterMinutes": {},
      "Enabled": {}
    }
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileName|object|true|none|none|
|Timezone|object|true|none|none|
|Address|object|true|none|none|
|DistanceUnit|object|true|none|none|
|TemperatureUnit|object|true|none|none|
|WakeWord|object|true|none|none|
|Locale|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|SetupModeDisabled|object|false|none|none|
|MaxVolumeLimit|object|false|none|none|
|PSTNEnabled|object|false|none|none|
|DataRetentionOptIn|object|false|none|none|
|MeetingRoomConfiguration|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateRoomResponse">CreateRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateroomresponse"></a>
<a id="schema_CreateRoomResponse"></a>
<a id="tocScreateroomresponse"></a>
<a id="tocscreateroomresponse"></a>

```json
{
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|

<h2 id="tocS_CreateRoomRequest">CreateRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateroomrequest"></a>
<a id="schema_CreateRoomRequest"></a>
<a id="tocScreateroomrequest"></a>
<a id="tocscreateroomrequest"></a>

```json
{
  "RoomName": {},
  "Description": {},
  "ProfileArn": {},
  "ProviderCalendarId": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomName|object|true|none|none|
|Description|object|false|none|none|
|ProfileArn|object|false|none|none|
|ProviderCalendarId|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSkillGroupResponse">CreateSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateskillgroupresponse"></a>
<a id="schema_CreateSkillGroupResponse"></a>
<a id="tocScreateskillgroupresponse"></a>
<a id="tocscreateskillgroupresponse"></a>

```json
{
  "SkillGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|

<h2 id="tocS_CreateSkillGroupRequest">CreateSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateskillgrouprequest"></a>
<a id="schema_CreateSkillGroupRequest"></a>
<a id="tocScreateskillgrouprequest"></a>
<a id="tocscreateskillgrouprequest"></a>

```json
{
  "SkillGroupName": {},
  "Description": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupName|object|true|none|none|
|Description|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateUserResponse">CreateUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_CreateUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "UserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserArn|object|false|none|none|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "UserId": {},
  "FirstName": {},
  "LastName": {},
  "Email": {},
  "ClientRequestToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|Email|object|false|none|none|
|ClientRequestToken|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteAddressBookResponse">DeleteAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddressbookresponse"></a>
<a id="schema_DeleteAddressBookResponse"></a>
<a id="tocSdeleteaddressbookresponse"></a>
<a id="tocsdeleteaddressbookresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteAddressBookRequest">DeleteAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaddressbookrequest"></a>
<a id="schema_DeleteAddressBookRequest"></a>
<a id="tocSdeleteaddressbookrequest"></a>
<a id="tocsdeleteaddressbookrequest"></a>

```json
{
  "AddressBookArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|true|none|none|

<h2 id="tocS_DeleteBusinessReportScheduleResponse">DeleteBusinessReportScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebusinessreportscheduleresponse"></a>
<a id="schema_DeleteBusinessReportScheduleResponse"></a>
<a id="tocSdeletebusinessreportscheduleresponse"></a>
<a id="tocsdeletebusinessreportscheduleresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteBusinessReportScheduleRequest">DeleteBusinessReportScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebusinessreportschedulerequest"></a>
<a id="schema_DeleteBusinessReportScheduleRequest"></a>
<a id="tocSdeletebusinessreportschedulerequest"></a>
<a id="tocsdeletebusinessreportschedulerequest"></a>

```json
{
  "ScheduleArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleArn|object|true|none|none|

<h2 id="tocS_DeleteConferenceProviderResponse">DeleteConferenceProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconferenceproviderresponse"></a>
<a id="schema_DeleteConferenceProviderResponse"></a>
<a id="tocSdeleteconferenceproviderresponse"></a>
<a id="tocsdeleteconferenceproviderresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteConferenceProviderRequest">DeleteConferenceProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconferenceproviderrequest"></a>
<a id="schema_DeleteConferenceProviderRequest"></a>
<a id="tocSdeleteconferenceproviderrequest"></a>
<a id="tocsdeleteconferenceproviderrequest"></a>

```json
{
  "ConferenceProviderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviderArn|object|true|none|none|

<h2 id="tocS_DeleteContactResponse">DeleteContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontactresponse"></a>
<a id="schema_DeleteContactResponse"></a>
<a id="tocSdeletecontactresponse"></a>
<a id="tocsdeletecontactresponse"></a>

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
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|

<h2 id="tocS_DeleteDeviceResponse">DeleteDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceresponse"></a>
<a id="schema_DeleteDeviceResponse"></a>
<a id="tocSdeletedeviceresponse"></a>
<a id="tocsdeletedeviceresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceRequest">DeleteDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevicerequest"></a>
<a id="schema_DeleteDeviceRequest"></a>
<a id="tocSdeletedevicerequest"></a>
<a id="tocsdeletedevicerequest"></a>

```json
{
  "DeviceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|true|none|none|

<h2 id="tocS_DeleteDeviceUsageDataResponse">DeleteDeviceUsageDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceusagedataresponse"></a>
<a id="schema_DeleteDeviceUsageDataResponse"></a>
<a id="tocSdeletedeviceusagedataresponse"></a>
<a id="tocsdeletedeviceusagedataresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteDeviceUsageDataRequest">DeleteDeviceUsageDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeviceusagedatarequest"></a>
<a id="schema_DeleteDeviceUsageDataRequest"></a>
<a id="tocSdeletedeviceusagedatarequest"></a>
<a id="tocsdeletedeviceusagedatarequest"></a>

```json
{
  "DeviceArn": {},
  "DeviceUsageType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|true|none|none|
|DeviceUsageType|object|true|none|none|

<h2 id="tocS_DeleteGatewayGroupResponse">DeleteGatewayGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewaygroupresponse"></a>
<a id="schema_DeleteGatewayGroupResponse"></a>
<a id="tocSdeletegatewaygroupresponse"></a>
<a id="tocsdeletegatewaygroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteGatewayGroupRequest">DeleteGatewayGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegatewaygrouprequest"></a>
<a id="schema_DeleteGatewayGroupRequest"></a>
<a id="tocSdeletegatewaygrouprequest"></a>
<a id="tocsdeletegatewaygrouprequest"></a>

```json
{
  "GatewayGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroupArn|object|true|none|none|

<h2 id="tocS_ResourceAssociatedException">ResourceAssociatedException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceassociatedexception"></a>
<a id="schema_ResourceAssociatedException"></a>
<a id="tocSresourceassociatedexception"></a>
<a id="tocsresourceassociatedexception"></a>

```json
null
```

<h2 id="tocS_DeleteNetworkProfileResponse">DeleteNetworkProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkprofileresponse"></a>
<a id="schema_DeleteNetworkProfileResponse"></a>
<a id="tocSdeletenetworkprofileresponse"></a>
<a id="tocsdeletenetworkprofileresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteNetworkProfileRequest">DeleteNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletenetworkprofilerequest"></a>
<a id="schema_DeleteNetworkProfileRequest"></a>
<a id="tocSdeletenetworkprofilerequest"></a>
<a id="tocsdeletenetworkprofilerequest"></a>

```json
{
  "NetworkProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|true|none|none|

<h2 id="tocS_DeleteProfileResponse">DeleteProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofileresponse"></a>
<a id="schema_DeleteProfileResponse"></a>
<a id="tocSdeleteprofileresponse"></a>
<a id="tocsdeleteprofileresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteProfileRequest">DeleteProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprofilerequest"></a>
<a id="schema_DeleteProfileRequest"></a>
<a id="tocSdeleteprofilerequest"></a>
<a id="tocsdeleteprofilerequest"></a>

```json
{
  "ProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|

<h2 id="tocS_DeleteRoomResponse">DeleteRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroomresponse"></a>
<a id="schema_DeleteRoomResponse"></a>
<a id="tocSdeleteroomresponse"></a>
<a id="tocsdeleteroomresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRoomRequest">DeleteRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroomrequest"></a>
<a id="schema_DeleteRoomRequest"></a>
<a id="tocSdeleteroomrequest"></a>
<a id="tocsdeleteroomrequest"></a>

```json
{
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|

<h2 id="tocS_DeleteRoomSkillParameterResponse">DeleteRoomSkillParameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroomskillparameterresponse"></a>
<a id="schema_DeleteRoomSkillParameterResponse"></a>
<a id="tocSdeleteroomskillparameterresponse"></a>
<a id="tocsdeleteroomskillparameterresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRoomSkillParameterRequest">DeleteRoomSkillParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroomskillparameterrequest"></a>
<a id="schema_DeleteRoomSkillParameterRequest"></a>
<a id="tocSdeleteroomskillparameterrequest"></a>
<a id="tocsdeleteroomskillparameterrequest"></a>

```json
{
  "RoomArn": {},
  "SkillId": {},
  "ParameterKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|SkillId|object|true|none|none|
|ParameterKey|object|true|none|none|

<h2 id="tocS_DeleteSkillAuthorizationResponse">DeleteSkillAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteskillauthorizationresponse"></a>
<a id="schema_DeleteSkillAuthorizationResponse"></a>
<a id="tocSdeleteskillauthorizationresponse"></a>
<a id="tocsdeleteskillauthorizationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSkillAuthorizationRequest">DeleteSkillAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteskillauthorizationrequest"></a>
<a id="schema_DeleteSkillAuthorizationRequest"></a>
<a id="tocSdeleteskillauthorizationrequest"></a>
<a id="tocsdeleteskillauthorizationrequest"></a>

```json
{
  "SkillId": {},
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|true|none|none|
|RoomArn|object|false|none|none|

<h2 id="tocS_DeleteSkillGroupResponse">DeleteSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteskillgroupresponse"></a>
<a id="schema_DeleteSkillGroupResponse"></a>
<a id="tocSdeleteskillgroupresponse"></a>
<a id="tocsdeleteskillgroupresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteSkillGroupRequest">DeleteSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteskillgrouprequest"></a>
<a id="schema_DeleteSkillGroupRequest"></a>
<a id="tocSdeleteskillgrouprequest"></a>
<a id="tocsdeleteskillgrouprequest"></a>

```json
{
  "SkillGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|

<h2 id="tocS_DeleteUserResponse">DeleteUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserresponse"></a>
<a id="schema_DeleteUserResponse"></a>
<a id="tocSdeleteuserresponse"></a>
<a id="tocsdeleteuserresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteUserRequest">DeleteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserrequest"></a>
<a id="schema_DeleteUserRequest"></a>
<a id="tocSdeleteuserrequest"></a>
<a id="tocsdeleteuserrequest"></a>

```json
{
  "UserArn": {},
  "EnrollmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserArn|object|false|none|none|
|EnrollmentId|object|true|none|none|

<h2 id="tocS_DisassociateContactFromAddressBookResponse">DisassociateContactFromAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecontactfromaddressbookresponse"></a>
<a id="schema_DisassociateContactFromAddressBookResponse"></a>
<a id="tocSdisassociatecontactfromaddressbookresponse"></a>
<a id="tocsdisassociatecontactfromaddressbookresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateContactFromAddressBookRequest">DisassociateContactFromAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecontactfromaddressbookrequest"></a>
<a id="schema_DisassociateContactFromAddressBookRequest"></a>
<a id="tocSdisassociatecontactfromaddressbookrequest"></a>
<a id="tocsdisassociatecontactfromaddressbookrequest"></a>

```json
{
  "ContactArn": {},
  "AddressBookArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|AddressBookArn|object|true|none|none|

<h2 id="tocS_DisassociateDeviceFromRoomResponse">DisassociateDeviceFromRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedevicefromroomresponse"></a>
<a id="schema_DisassociateDeviceFromRoomResponse"></a>
<a id="tocSdisassociatedevicefromroomresponse"></a>
<a id="tocsdisassociatedevicefromroomresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateDeviceFromRoomRequest">DisassociateDeviceFromRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedevicefromroomrequest"></a>
<a id="schema_DisassociateDeviceFromRoomRequest"></a>
<a id="tocSdisassociatedevicefromroomrequest"></a>
<a id="tocsdisassociatedevicefromroomrequest"></a>

```json
{
  "DeviceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|

<h2 id="tocS_DisassociateSkillFromSkillGroupResponse">DisassociateSkillFromSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillfromskillgroupresponse"></a>
<a id="schema_DisassociateSkillFromSkillGroupResponse"></a>
<a id="tocSdisassociateskillfromskillgroupresponse"></a>
<a id="tocsdisassociateskillfromskillgroupresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateSkillFromSkillGroupRequest">DisassociateSkillFromSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillfromskillgrouprequest"></a>
<a id="schema_DisassociateSkillFromSkillGroupRequest"></a>
<a id="tocSdisassociateskillfromskillgrouprequest"></a>
<a id="tocsdisassociateskillfromskillgrouprequest"></a>

```json
{
  "SkillGroupArn": {},
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|SkillId|object|true|none|none|

<h2 id="tocS_DisassociateSkillFromUsersResponse">DisassociateSkillFromUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillfromusersresponse"></a>
<a id="schema_DisassociateSkillFromUsersResponse"></a>
<a id="tocSdisassociateskillfromusersresponse"></a>
<a id="tocsdisassociateskillfromusersresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateSkillFromUsersRequest">DisassociateSkillFromUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillfromusersrequest"></a>
<a id="schema_DisassociateSkillFromUsersRequest"></a>
<a id="tocSdisassociateskillfromusersrequest"></a>
<a id="tocsdisassociateskillfromusersrequest"></a>

```json
{
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|true|none|none|

<h2 id="tocS_DisassociateSkillGroupFromRoomResponse">DisassociateSkillGroupFromRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillgroupfromroomresponse"></a>
<a id="schema_DisassociateSkillGroupFromRoomResponse"></a>
<a id="tocSdisassociateskillgroupfromroomresponse"></a>
<a id="tocsdisassociateskillgroupfromroomresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateSkillGroupFromRoomRequest">DisassociateSkillGroupFromRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateskillgroupfromroomrequest"></a>
<a id="schema_DisassociateSkillGroupFromRoomRequest"></a>
<a id="tocSdisassociateskillgroupfromroomrequest"></a>
<a id="tocsdisassociateskillgroupfromroomrequest"></a>

```json
{
  "SkillGroupArn": {},
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|RoomArn|object|false|none|none|

<h2 id="tocS_ForgetSmartHomeAppliancesResponse">ForgetSmartHomeAppliancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforgetsmarthomeappliancesresponse"></a>
<a id="schema_ForgetSmartHomeAppliancesResponse"></a>
<a id="tocSforgetsmarthomeappliancesresponse"></a>
<a id="tocsforgetsmarthomeappliancesresponse"></a>

```json
{}
```

<h2 id="tocS_ForgetSmartHomeAppliancesRequest">ForgetSmartHomeAppliancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforgetsmarthomeappliancesrequest"></a>
<a id="schema_ForgetSmartHomeAppliancesRequest"></a>
<a id="tocSforgetsmarthomeappliancesrequest"></a>
<a id="tocsforgetsmarthomeappliancesrequest"></a>

```json
{
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|true|none|none|

<h2 id="tocS_GetAddressBookResponse">GetAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressbookresponse"></a>
<a id="schema_GetAddressBookResponse"></a>
<a id="tocSgetaddressbookresponse"></a>
<a id="tocsgetaddressbookresponse"></a>

```json
{
  "AddressBook": {
    "AddressBookArn": {},
    "Name": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBook|object|false|none|none|

<h2 id="tocS_GetAddressBookRequest">GetAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaddressbookrequest"></a>
<a id="schema_GetAddressBookRequest"></a>
<a id="tocSgetaddressbookrequest"></a>
<a id="tocsgetaddressbookrequest"></a>

```json
{
  "AddressBookArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|true|none|none|

<h2 id="tocS_GetConferencePreferenceResponse">GetConferencePreferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconferencepreferenceresponse"></a>
<a id="schema_GetConferencePreferenceResponse"></a>
<a id="tocSgetconferencepreferenceresponse"></a>
<a id="tocsgetconferencepreferenceresponse"></a>

```json
{
  "Preference": {
    "DefaultConferenceProviderArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Preference|object|false|none|none|

<h2 id="tocS_GetConferencePreferenceRequest">GetConferencePreferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconferencepreferencerequest"></a>
<a id="schema_GetConferencePreferenceRequest"></a>
<a id="tocSgetconferencepreferencerequest"></a>
<a id="tocsgetconferencepreferencerequest"></a>

```json
{}
```

<h2 id="tocS_GetConferenceProviderResponse">GetConferenceProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetconferenceproviderresponse"></a>
<a id="schema_GetConferenceProviderResponse"></a>
<a id="tocSgetconferenceproviderresponse"></a>
<a id="tocsgetconferenceproviderresponse"></a>

```json
{
  "ConferenceProvider": {
    "Arn": {},
    "Name": {},
    "Type": {},
    "IPDialIn": {
      "Endpoint": {},
      "CommsProtocol": {}
    },
    "PSTNDialIn": {
      "CountryCode": {},
      "PhoneNumber": {},
      "OneClickIdDelay": {},
      "OneClickPinDelay": {}
    },
    "MeetingSetting": {
      "RequirePin": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProvider|object|false|none|none|

<h2 id="tocS_GetConferenceProviderRequest">GetConferenceProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetconferenceproviderrequest"></a>
<a id="schema_GetConferenceProviderRequest"></a>
<a id="tocSgetconferenceproviderrequest"></a>
<a id="tocsgetconferenceproviderrequest"></a>

```json
{
  "ConferenceProviderArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviderArn|object|true|none|none|

<h2 id="tocS_GetContactResponse">GetContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactresponse"></a>
<a id="schema_GetContactResponse"></a>
<a id="tocSgetcontactresponse"></a>
<a id="tocsgetcontactresponse"></a>

```json
{
  "Contact": {
    "ContactArn": {},
    "DisplayName": {},
    "FirstName": {},
    "LastName": {},
    "PhoneNumber": {},
    "PhoneNumbers": {},
    "SipAddresses": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Contact|object|false|none|none|

<h2 id="tocS_GetContactRequest">GetContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactrequest"></a>
<a id="schema_GetContactRequest"></a>
<a id="tocSgetcontactrequest"></a>
<a id="tocsgetcontactrequest"></a>

```json
{
  "ContactArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|

<h2 id="tocS_GetDeviceResponse">GetDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdeviceresponse"></a>
<a id="schema_GetDeviceResponse"></a>
<a id="tocSgetdeviceresponse"></a>
<a id="tocsgetdeviceresponse"></a>

```json
{
  "Device": {
    "DeviceArn": {},
    "DeviceSerialNumber": {},
    "DeviceType": {},
    "DeviceName": {},
    "SoftwareVersion": {},
    "MacAddress": {},
    "RoomArn": {},
    "DeviceStatus": {},
    "DeviceStatusInfo": {
      "DeviceStatusDetails": {},
      "ConnectionStatus": {},
      "ConnectionStatusUpdatedTime": {}
    },
    "NetworkProfileInfo": {
      "NetworkProfileArn": {},
      "CertificateArn": {},
      "CertificateExpirationTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Device|object|false|none|none|

<h2 id="tocS_GetDeviceRequest">GetDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicerequest"></a>
<a id="schema_GetDeviceRequest"></a>
<a id="tocSgetdevicerequest"></a>
<a id="tocsgetdevicerequest"></a>

```json
{
  "DeviceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|

<h2 id="tocS_GetGatewayResponse">GetGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewayresponse"></a>
<a id="schema_GetGatewayResponse"></a>
<a id="tocSgetgatewayresponse"></a>
<a id="tocsgetgatewayresponse"></a>

```json
{
  "Gateway": {
    "Arn": {},
    "Name": {},
    "Description": {},
    "GatewayGroupArn": {},
    "SoftwareVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateway|object|false|none|none|

<h2 id="tocS_GetGatewayRequest">GetGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewayrequest"></a>
<a id="schema_GetGatewayRequest"></a>
<a id="tocSgetgatewayrequest"></a>
<a id="tocsgetgatewayrequest"></a>

```json
{
  "GatewayArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayArn|object|true|none|none|

<h2 id="tocS_GetGatewayGroupResponse">GetGatewayGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewaygroupresponse"></a>
<a id="schema_GetGatewayGroupResponse"></a>
<a id="tocSgetgatewaygroupresponse"></a>
<a id="tocsgetgatewaygroupresponse"></a>

```json
{
  "GatewayGroup": {
    "Arn": {},
    "Name": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroup|[GatewayGroup](#schemagatewaygroup)|false|none|The details of the gateway group.|

<h2 id="tocS_GetGatewayGroupRequest">GetGatewayGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgatewaygrouprequest"></a>
<a id="schema_GetGatewayGroupRequest"></a>
<a id="tocSgetgatewaygrouprequest"></a>
<a id="tocsgetgatewaygrouprequest"></a>

```json
{
  "GatewayGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroupArn|object|true|none|none|

<h2 id="tocS_GetInvitationConfigurationResponse">GetInvitationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationconfigurationresponse"></a>
<a id="schema_GetInvitationConfigurationResponse"></a>
<a id="tocSgetinvitationconfigurationresponse"></a>
<a id="tocsgetinvitationconfigurationresponse"></a>

```json
{
  "OrganizationName": {},
  "ContactEmail": {},
  "PrivateSkillIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationName|object|false|none|none|
|ContactEmail|object|false|none|none|
|PrivateSkillIds|object|false|none|none|

<h2 id="tocS_GetInvitationConfigurationRequest">GetInvitationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinvitationconfigurationrequest"></a>
<a id="schema_GetInvitationConfigurationRequest"></a>
<a id="tocSgetinvitationconfigurationrequest"></a>
<a id="tocsgetinvitationconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetNetworkProfileResponse">GetNetworkProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkprofileresponse"></a>
<a id="schema_GetNetworkProfileResponse"></a>
<a id="tocSgetnetworkprofileresponse"></a>
<a id="tocsgetnetworkprofileresponse"></a>

```json
{
  "NetworkProfile": {
    "NetworkProfileArn": {},
    "NetworkProfileName": {},
    "Description": {},
    "Ssid": {},
    "SecurityType": {},
    "EapMethod": {},
    "CurrentPassword": {},
    "NextPassword": {},
    "CertificateAuthorityArn": {},
    "TrustAnchors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfile|object|false|none|none|

<h2 id="tocS_GetNetworkProfileRequest">GetNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetnetworkprofilerequest"></a>
<a id="schema_GetNetworkProfileRequest"></a>
<a id="tocSgetnetworkprofilerequest"></a>
<a id="tocsgetnetworkprofilerequest"></a>

```json
{
  "NetworkProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|true|none|none|

<h2 id="tocS_InvalidSecretsManagerResourceException">InvalidSecretsManagerResourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsecretsmanagerresourceexception"></a>
<a id="schema_InvalidSecretsManagerResourceException"></a>
<a id="tocSinvalidsecretsmanagerresourceexception"></a>
<a id="tocsinvalidsecretsmanagerresourceexception"></a>

```json
null
```

<h2 id="tocS_GetProfileResponse">GetProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprofileresponse"></a>
<a id="schema_GetProfileResponse"></a>
<a id="tocSgetprofileresponse"></a>
<a id="tocsgetprofileresponse"></a>

```json
{
  "Profile": {
    "ProfileArn": {},
    "ProfileName": {},
    "IsDefault": {},
    "Address": {},
    "Timezone": {},
    "DistanceUnit": {},
    "TemperatureUnit": {},
    "WakeWord": {},
    "Locale": {},
    "SetupModeDisabled": {},
    "MaxVolumeLimit": {},
    "PSTNEnabled": {},
    "DataRetentionOptIn": {},
    "AddressBookArn": {},
    "MeetingRoomConfiguration": {
      "RoomUtilizationMetricsEnabled": {},
      "EndOfMeetingReminder": {
        "ReminderAtMinutes": {},
        "ReminderType": {},
        "Enabled": {}
      },
      "InstantBooking": {
        "DurationInMinutes": {},
        "Enabled": {}
      },
      "RequireCheckIn": {
        "ReleaseAfterMinutes": {},
        "Enabled": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Profile|object|false|none|none|

<h2 id="tocS_GetProfileRequest">GetProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetprofilerequest"></a>
<a id="schema_GetProfileRequest"></a>
<a id="tocSgetprofilerequest"></a>
<a id="tocsgetprofilerequest"></a>

```json
{
  "ProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|

<h2 id="tocS_GetRoomResponse">GetRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetroomresponse"></a>
<a id="schema_GetRoomResponse"></a>
<a id="tocSgetroomresponse"></a>
<a id="tocsgetroomresponse"></a>

```json
{
  "Room": {
    "RoomArn": {},
    "RoomName": {},
    "Description": {},
    "ProviderCalendarId": {},
    "ProfileArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Room|object|false|none|none|

<h2 id="tocS_GetRoomRequest">GetRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetroomrequest"></a>
<a id="schema_GetRoomRequest"></a>
<a id="tocSgetroomrequest"></a>
<a id="tocsgetroomrequest"></a>

```json
{
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|

<h2 id="tocS_GetRoomSkillParameterResponse">GetRoomSkillParameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetroomskillparameterresponse"></a>
<a id="schema_GetRoomSkillParameterResponse"></a>
<a id="tocSgetroomskillparameterresponse"></a>
<a id="tocsgetroomskillparameterresponse"></a>

```json
{
  "RoomSkillParameter": {
    "ParameterKey": {},
    "ParameterValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomSkillParameter|object|false|none|none|

<h2 id="tocS_GetRoomSkillParameterRequest">GetRoomSkillParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetroomskillparameterrequest"></a>
<a id="schema_GetRoomSkillParameterRequest"></a>
<a id="tocSgetroomskillparameterrequest"></a>
<a id="tocsgetroomskillparameterrequest"></a>

```json
{
  "RoomArn": {},
  "SkillId": {},
  "ParameterKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|SkillId|object|true|none|none|
|ParameterKey|object|true|none|none|

<h2 id="tocS_GetSkillGroupResponse">GetSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetskillgroupresponse"></a>
<a id="schema_GetSkillGroupResponse"></a>
<a id="tocSgetskillgroupresponse"></a>
<a id="tocsgetskillgroupresponse"></a>

```json
{
  "SkillGroup": {
    "SkillGroupArn": {},
    "SkillGroupName": {},
    "Description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroup|object|false|none|none|

<h2 id="tocS_GetSkillGroupRequest">GetSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetskillgrouprequest"></a>
<a id="schema_GetSkillGroupRequest"></a>
<a id="tocSgetskillgrouprequest"></a>
<a id="tocsgetskillgrouprequest"></a>

```json
{
  "SkillGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|

<h2 id="tocS_ListBusinessReportSchedulesResponse">ListBusinessReportSchedulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbusinessreportschedulesresponse"></a>
<a id="schema_ListBusinessReportSchedulesResponse"></a>
<a id="tocSlistbusinessreportschedulesresponse"></a>
<a id="tocslistbusinessreportschedulesresponse"></a>

```json
{
  "BusinessReportSchedules": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BusinessReportSchedules|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBusinessReportSchedulesRequest">ListBusinessReportSchedulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbusinessreportschedulesrequest"></a>
<a id="schema_ListBusinessReportSchedulesRequest"></a>
<a id="tocSlistbusinessreportschedulesrequest"></a>
<a id="tocslistbusinessreportschedulesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListConferenceProvidersResponse">ListConferenceProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconferenceprovidersresponse"></a>
<a id="schema_ListConferenceProvidersResponse"></a>
<a id="tocSlistconferenceprovidersresponse"></a>
<a id="tocslistconferenceprovidersresponse"></a>

```json
{
  "ConferenceProviders": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviders|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConferenceProvidersRequest">ListConferenceProvidersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconferenceprovidersrequest"></a>
<a id="schema_ListConferenceProvidersRequest"></a>
<a id="tocSlistconferenceprovidersrequest"></a>
<a id="tocslistconferenceprovidersrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDeviceEventsResponse">ListDeviceEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceeventsresponse"></a>
<a id="schema_ListDeviceEventsResponse"></a>
<a id="tocSlistdeviceeventsresponse"></a>
<a id="tocslistdeviceeventsresponse"></a>

```json
{
  "DeviceEvents": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceEvents|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDeviceEventsRequest">ListDeviceEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdeviceeventsrequest"></a>
<a id="schema_ListDeviceEventsRequest"></a>
<a id="tocSlistdeviceeventsrequest"></a>
<a id="tocslistdeviceeventsrequest"></a>

```json
{
  "DeviceArn": {},
  "EventType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|true|none|none|
|EventType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGatewayGroupsResponse">ListGatewayGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaygroupsresponse"></a>
<a id="schema_ListGatewayGroupsResponse"></a>
<a id="tocSlistgatewaygroupsresponse"></a>
<a id="tocslistgatewaygroupsresponse"></a>

```json
{
  "GatewayGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGatewayGroupsRequest">ListGatewayGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaygroupsrequest"></a>
<a id="schema_ListGatewayGroupsRequest"></a>
<a id="tocSlistgatewaygroupsrequest"></a>
<a id="tocslistgatewaygroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListGatewaysResponse">ListGatewaysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysresponse"></a>
<a id="schema_ListGatewaysResponse"></a>
<a id="tocSlistgatewaysresponse"></a>
<a id="tocslistgatewaysresponse"></a>

```json
{
  "Gateways": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Gateways|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGatewaysRequest">ListGatewaysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgatewaysrequest"></a>
<a id="schema_ListGatewaysRequest"></a>
<a id="tocSlistgatewaysrequest"></a>
<a id="tocslistgatewaysrequest"></a>

```json
{
  "GatewayGroupArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroupArn|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSkillsResponse">ListSkillsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsresponse"></a>
<a id="schema_ListSkillsResponse"></a>
<a id="tocSlistskillsresponse"></a>
<a id="tocslistskillsresponse"></a>

```json
{
  "SkillSummaries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillSummaries|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSkillsRequest">ListSkillsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsrequest"></a>
<a id="schema_ListSkillsRequest"></a>
<a id="tocSlistskillsrequest"></a>
<a id="tocslistskillsrequest"></a>

```json
{
  "SkillGroupArn": {},
  "EnablementType": {},
  "SkillType": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|EnablementType|object|false|none|none|
|SkillType|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSkillsStoreCategoriesResponse">ListSkillsStoreCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsstorecategoriesresponse"></a>
<a id="schema_ListSkillsStoreCategoriesResponse"></a>
<a id="tocSlistskillsstorecategoriesresponse"></a>
<a id="tocslistskillsstorecategoriesresponse"></a>

```json
{
  "CategoryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSkillsStoreCategoriesRequest">ListSkillsStoreCategoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsstorecategoriesrequest"></a>
<a id="schema_ListSkillsStoreCategoriesRequest"></a>
<a id="tocSlistskillsstorecategoriesrequest"></a>
<a id="tocslistskillsstorecategoriesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSkillsStoreSkillsByCategoryResponse">ListSkillsStoreSkillsByCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsstoreskillsbycategoryresponse"></a>
<a id="schema_ListSkillsStoreSkillsByCategoryResponse"></a>
<a id="tocSlistskillsstoreskillsbycategoryresponse"></a>
<a id="tocslistskillsstoreskillsbycategoryresponse"></a>

```json
{
  "SkillsStoreSkills": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillsStoreSkills|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSkillsStoreSkillsByCategoryRequest">ListSkillsStoreSkillsByCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistskillsstoreskillsbycategoryrequest"></a>
<a id="schema_ListSkillsStoreSkillsByCategoryRequest"></a>
<a id="tocSlistskillsstoreskillsbycategoryrequest"></a>
<a id="tocslistskillsstoreskillsbycategoryrequest"></a>

```json
{
  "CategoryId": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListSmartHomeAppliancesResponse">ListSmartHomeAppliancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsmarthomeappliancesresponse"></a>
<a id="schema_ListSmartHomeAppliancesResponse"></a>
<a id="tocSlistsmarthomeappliancesresponse"></a>
<a id="tocslistsmarthomeappliancesresponse"></a>

```json
{
  "SmartHomeAppliances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SmartHomeAppliances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListSmartHomeAppliancesRequest">ListSmartHomeAppliancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsmarthomeappliancesrequest"></a>
<a id="schema_ListSmartHomeAppliancesRequest"></a>
<a id="tocSlistsmarthomeappliancesrequest"></a>
<a id="tocslistsmarthomeappliancesrequest"></a>

```json
{
  "RoomArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "Tags": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{
  "Arn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_PutConferencePreferenceResponse">PutConferencePreferenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputconferencepreferenceresponse"></a>
<a id="schema_PutConferencePreferenceResponse"></a>
<a id="tocSputconferencepreferenceresponse"></a>
<a id="tocsputconferencepreferenceresponse"></a>

```json
{}
```

<h2 id="tocS_PutConferencePreferenceRequest">PutConferencePreferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputconferencepreferencerequest"></a>
<a id="schema_PutConferencePreferenceRequest"></a>
<a id="tocSputconferencepreferencerequest"></a>
<a id="tocsputconferencepreferencerequest"></a>

```json
{
  "ConferencePreference": {
    "DefaultConferenceProviderArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferencePreference|object|true|none|none|

<h2 id="tocS_PutInvitationConfigurationResponse">PutInvitationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputinvitationconfigurationresponse"></a>
<a id="schema_PutInvitationConfigurationResponse"></a>
<a id="tocSputinvitationconfigurationresponse"></a>
<a id="tocsputinvitationconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_PutInvitationConfigurationRequest">PutInvitationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputinvitationconfigurationrequest"></a>
<a id="schema_PutInvitationConfigurationRequest"></a>
<a id="tocSputinvitationconfigurationrequest"></a>
<a id="tocsputinvitationconfigurationrequest"></a>

```json
{
  "OrganizationName": {},
  "ContactEmail": {},
  "PrivateSkillIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationName|object|true|none|none|
|ContactEmail|object|false|none|none|
|PrivateSkillIds|object|false|none|none|

<h2 id="tocS_PutRoomSkillParameterResponse">PutRoomSkillParameterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputroomskillparameterresponse"></a>
<a id="schema_PutRoomSkillParameterResponse"></a>
<a id="tocSputroomskillparameterresponse"></a>
<a id="tocsputroomskillparameterresponse"></a>

```json
{}
```

<h2 id="tocS_PutRoomSkillParameterRequest">PutRoomSkillParameterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputroomskillparameterrequest"></a>
<a id="schema_PutRoomSkillParameterRequest"></a>
<a id="tocSputroomskillparameterrequest"></a>
<a id="tocsputroomskillparameterrequest"></a>

```json
{
  "RoomArn": {},
  "SkillId": {},
  "RoomSkillParameter": {
    "ParameterKey": {},
    "ParameterValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|SkillId|object|true|none|none|
|RoomSkillParameter|object|true|none|none|

<h2 id="tocS_PutSkillAuthorizationResponse">PutSkillAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputskillauthorizationresponse"></a>
<a id="schema_PutSkillAuthorizationResponse"></a>
<a id="tocSputskillauthorizationresponse"></a>
<a id="tocsputskillauthorizationresponse"></a>

```json
{}
```

<h2 id="tocS_PutSkillAuthorizationRequest">PutSkillAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputskillauthorizationrequest"></a>
<a id="schema_PutSkillAuthorizationRequest"></a>
<a id="tocSputskillauthorizationrequest"></a>
<a id="tocsputskillauthorizationrequest"></a>

```json
{
  "AuthorizationResult": {
    "property1": "string",
    "property2": "string"
  },
  "SkillId": {},
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationResult|object|true|none|none|
|SkillId|object|true|none|none|
|RoomArn|object|false|none|none|

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_RegisterAVSDeviceResponse">RegisterAVSDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisteravsdeviceresponse"></a>
<a id="schema_RegisterAVSDeviceResponse"></a>
<a id="tocSregisteravsdeviceresponse"></a>
<a id="tocsregisteravsdeviceresponse"></a>

```json
{
  "DeviceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|

<h2 id="tocS_RegisterAVSDeviceRequest">RegisterAVSDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisteravsdevicerequest"></a>
<a id="schema_RegisterAVSDeviceRequest"></a>
<a id="tocSregisteravsdevicerequest"></a>
<a id="tocsregisteravsdevicerequest"></a>

```json
{
  "ClientId": {},
  "UserCode": {},
  "ProductId": {},
  "DeviceSerialNumber": {},
  "AmazonId": {},
  "RoomArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientId|object|true|none|none|
|UserCode|object|true|none|none|
|ProductId|object|true|none|none|
|DeviceSerialNumber|object|false|none|none|
|AmazonId|object|true|none|none|
|RoomArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_InvalidDeviceException">InvalidDeviceException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeviceexception"></a>
<a id="schema_InvalidDeviceException"></a>
<a id="tocSinvaliddeviceexception"></a>
<a id="tocsinvaliddeviceexception"></a>

```json
null
```

<h2 id="tocS_RejectSkillResponse">RejectSkillResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectskillresponse"></a>
<a id="schema_RejectSkillResponse"></a>
<a id="tocSrejectskillresponse"></a>
<a id="tocsrejectskillresponse"></a>

```json
{}
```

<h2 id="tocS_RejectSkillRequest">RejectSkillRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectskillrequest"></a>
<a id="schema_RejectSkillRequest"></a>
<a id="tocSrejectskillrequest"></a>
<a id="tocsrejectskillrequest"></a>

```json
{
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|true|none|none|

<h2 id="tocS_ResolveRoomResponse">ResolveRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresolveroomresponse"></a>
<a id="schema_ResolveRoomResponse"></a>
<a id="tocSresolveroomresponse"></a>
<a id="tocsresolveroomresponse"></a>

```json
{
  "RoomArn": {},
  "RoomName": {},
  "RoomSkillParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|RoomName|object|false|none|none|
|RoomSkillParameters|object|false|none|none|

<h2 id="tocS_ResolveRoomRequest">ResolveRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresolveroomrequest"></a>
<a id="schema_ResolveRoomRequest"></a>
<a id="tocSresolveroomrequest"></a>
<a id="tocsresolveroomrequest"></a>

```json
{
  "UserId": {},
  "SkillId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|true|none|none|
|SkillId|object|true|none|none|

<h2 id="tocS_RevokeInvitationResponse">RevokeInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokeinvitationresponse"></a>
<a id="schema_RevokeInvitationResponse"></a>
<a id="tocSrevokeinvitationresponse"></a>
<a id="tocsrevokeinvitationresponse"></a>

```json
{}
```

<h2 id="tocS_RevokeInvitationRequest">RevokeInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokeinvitationrequest"></a>
<a id="schema_RevokeInvitationRequest"></a>
<a id="tocSrevokeinvitationrequest"></a>
<a id="tocsrevokeinvitationrequest"></a>

```json
{
  "UserArn": {},
  "EnrollmentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserArn|object|false|none|none|
|EnrollmentId|object|false|none|none|

<h2 id="tocS_SearchAddressBooksResponse">SearchAddressBooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchaddressbooksresponse"></a>
<a id="schema_SearchAddressBooksResponse"></a>
<a id="tocSsearchaddressbooksresponse"></a>
<a id="tocssearchaddressbooksresponse"></a>

```json
{
  "AddressBooks": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBooks|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchAddressBooksRequest">SearchAddressBooksRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchaddressbooksrequest"></a>
<a id="schema_SearchAddressBooksRequest"></a>
<a id="tocSsearchaddressbooksrequest"></a>
<a id="tocssearchaddressbooksrequest"></a>

```json
{
  "Filters": {},
  "SortCriteria": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_SearchContactsResponse">SearchContactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchcontactsresponse"></a>
<a id="schema_SearchContactsResponse"></a>
<a id="tocSsearchcontactsresponse"></a>
<a id="tocssearchcontactsresponse"></a>

```json
{
  "Contacts": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Contacts|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchContactsRequest">SearchContactsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchcontactsrequest"></a>
<a id="schema_SearchContactsRequest"></a>
<a id="tocSsearchcontactsrequest"></a>
<a id="tocssearchcontactsrequest"></a>

```json
{
  "Filters": {},
  "SortCriteria": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_SearchDevicesResponse">SearchDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesresponse"></a>
<a id="schema_SearchDevicesResponse"></a>
<a id="tocSsearchdevicesresponse"></a>
<a id="tocssearchdevicesresponse"></a>

```json
{
  "Devices": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchDevicesRequest">SearchDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchdevicesrequest"></a>
<a id="schema_SearchDevicesRequest"></a>
<a id="tocSsearchdevicesrequest"></a>
<a id="tocssearchdevicesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SearchNetworkProfilesResponse">SearchNetworkProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchnetworkprofilesresponse"></a>
<a id="schema_SearchNetworkProfilesResponse"></a>
<a id="tocSsearchnetworkprofilesresponse"></a>
<a id="tocssearchnetworkprofilesresponse"></a>

```json
{
  "NetworkProfiles": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfiles|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchNetworkProfilesRequest">SearchNetworkProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchnetworkprofilesrequest"></a>
<a id="schema_SearchNetworkProfilesRequest"></a>
<a id="tocSsearchnetworkprofilesrequest"></a>
<a id="tocssearchnetworkprofilesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SearchProfilesResponse">SearchProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchprofilesresponse"></a>
<a id="schema_SearchProfilesResponse"></a>
<a id="tocSsearchprofilesresponse"></a>
<a id="tocssearchprofilesresponse"></a>

```json
{
  "Profiles": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Profiles|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchProfilesRequest">SearchProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchprofilesrequest"></a>
<a id="schema_SearchProfilesRequest"></a>
<a id="tocSsearchprofilesrequest"></a>
<a id="tocssearchprofilesrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SearchRoomsResponse">SearchRoomsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchroomsresponse"></a>
<a id="schema_SearchRoomsResponse"></a>
<a id="tocSsearchroomsresponse"></a>
<a id="tocssearchroomsresponse"></a>

```json
{
  "Rooms": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rooms|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchRoomsRequest">SearchRoomsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchroomsrequest"></a>
<a id="schema_SearchRoomsRequest"></a>
<a id="tocSsearchroomsrequest"></a>
<a id="tocssearchroomsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SearchSkillGroupsResponse">SearchSkillGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchskillgroupsresponse"></a>
<a id="schema_SearchSkillGroupsResponse"></a>
<a id="tocSsearchskillgroupsresponse"></a>
<a id="tocssearchskillgroupsresponse"></a>

```json
{
  "SkillGroups": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroups|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchSkillGroupsRequest">SearchSkillGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchskillgroupsrequest"></a>
<a id="schema_SearchSkillGroupsRequest"></a>
<a id="tocSsearchskillgroupsrequest"></a>
<a id="tocssearchskillgroupsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SearchUsersResponse">SearchUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchusersresponse"></a>
<a id="schema_SearchUsersResponse"></a>
<a id="tocSsearchusersresponse"></a>
<a id="tocssearchusersresponse"></a>

```json
{
  "Users": {},
  "NextToken": {},
  "TotalCount": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Users|object|false|none|none|
|NextToken|object|false|none|none|
|TotalCount|object|false|none|none|

<h2 id="tocS_SearchUsersRequest">SearchUsersRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchusersrequest"></a>
<a id="schema_SearchUsersRequest"></a>
<a id="tocSsearchusersrequest"></a>
<a id="tocssearchusersrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {},
  "SortCriteria": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|
|SortCriteria|object|false|none|none|

<h2 id="tocS_SendAnnouncementResponse">SendAnnouncementResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendannouncementresponse"></a>
<a id="schema_SendAnnouncementResponse"></a>
<a id="tocSsendannouncementresponse"></a>
<a id="tocssendannouncementresponse"></a>

```json
{
  "AnnouncementArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AnnouncementArn|object|false|none|none|

<h2 id="tocS_SendAnnouncementRequest">SendAnnouncementRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendannouncementrequest"></a>
<a id="schema_SendAnnouncementRequest"></a>
<a id="tocSsendannouncementrequest"></a>
<a id="tocssendannouncementrequest"></a>

```json
{
  "RoomFilters": {},
  "Content": {
    "TextList": {},
    "SsmlList": {},
    "AudioList": {}
  },
  "TimeToLiveInSeconds": {},
  "ClientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomFilters|object|true|none|none|
|Content|object|true|none|none|
|TimeToLiveInSeconds|object|false|none|none|
|ClientRequestToken|object|true|none|none|

<h2 id="tocS_SendInvitationResponse">SendInvitationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendinvitationresponse"></a>
<a id="schema_SendInvitationResponse"></a>
<a id="tocSsendinvitationresponse"></a>
<a id="tocssendinvitationresponse"></a>

```json
{}
```

<h2 id="tocS_SendInvitationRequest">SendInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendinvitationrequest"></a>
<a id="schema_SendInvitationRequest"></a>
<a id="tocSsendinvitationrequest"></a>
<a id="tocssendinvitationrequest"></a>

```json
{
  "UserArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserArn|object|false|none|none|

<h2 id="tocS_InvalidUserStatusException">InvalidUserStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliduserstatusexception"></a>
<a id="schema_InvalidUserStatusException"></a>
<a id="tocSinvaliduserstatusexception"></a>
<a id="tocsinvaliduserstatusexception"></a>

```json
null
```

<h2 id="tocS_StartDeviceSyncResponse">StartDeviceSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdevicesyncresponse"></a>
<a id="schema_StartDeviceSyncResponse"></a>
<a id="tocSstartdevicesyncresponse"></a>
<a id="tocsstartdevicesyncresponse"></a>

```json
{}
```

<h2 id="tocS_StartDeviceSyncRequest">StartDeviceSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdevicesyncrequest"></a>
<a id="schema_StartDeviceSyncRequest"></a>
<a id="tocSstartdevicesyncrequest"></a>
<a id="tocsstartdevicesyncrequest"></a>

```json
{
  "RoomArn": {},
  "DeviceArn": {},
  "Features": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|DeviceArn|object|false|none|none|
|Features|object|true|none|none|

<h2 id="tocS_StartSmartHomeApplianceDiscoveryResponse">StartSmartHomeApplianceDiscoveryResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartsmarthomeappliancediscoveryresponse"></a>
<a id="schema_StartSmartHomeApplianceDiscoveryResponse"></a>
<a id="tocSstartsmarthomeappliancediscoveryresponse"></a>
<a id="tocsstartsmarthomeappliancediscoveryresponse"></a>

```json
{}
```

<h2 id="tocS_StartSmartHomeApplianceDiscoveryRequest">StartSmartHomeApplianceDiscoveryRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartsmarthomeappliancediscoveryrequest"></a>
<a id="schema_StartSmartHomeApplianceDiscoveryRequest"></a>
<a id="tocSstartsmarthomeappliancediscoveryrequest"></a>
<a id="tocsstartsmarthomeappliancediscoveryrequest"></a>

```json
{
  "RoomArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

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
  "Arn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

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
  "Arn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAddressBookResponse">UpdateAddressBookResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaddressbookresponse"></a>
<a id="schema_UpdateAddressBookResponse"></a>
<a id="tocSupdateaddressbookresponse"></a>
<a id="tocsupdateaddressbookresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateAddressBookRequest">UpdateAddressBookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaddressbookrequest"></a>
<a id="schema_UpdateAddressBookRequest"></a>
<a id="tocSupdateaddressbookrequest"></a>
<a id="tocsupdateaddressbookrequest"></a>

```json
{
  "AddressBookArn": {},
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_NameInUseException">NameInUseException</h2>
<!-- backwards compatibility -->
<a id="schemanameinuseexception"></a>
<a id="schema_NameInUseException"></a>
<a id="tocSnameinuseexception"></a>
<a id="tocsnameinuseexception"></a>

```json
null
```

<h2 id="tocS_UpdateBusinessReportScheduleResponse">UpdateBusinessReportScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebusinessreportscheduleresponse"></a>
<a id="schema_UpdateBusinessReportScheduleResponse"></a>
<a id="tocSupdatebusinessreportscheduleresponse"></a>
<a id="tocsupdatebusinessreportscheduleresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateBusinessReportScheduleRequest">UpdateBusinessReportScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebusinessreportschedulerequest"></a>
<a id="schema_UpdateBusinessReportScheduleRequest"></a>
<a id="tocSupdatebusinessreportschedulerequest"></a>
<a id="tocsupdatebusinessreportschedulerequest"></a>

```json
{
  "ScheduleArn": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Format": {},
  "ScheduleName": {},
  "Recurrence": {
    "StartDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleArn|object|true|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|Format|object|false|none|none|
|ScheduleName|object|false|none|none|
|Recurrence|object|false|none|none|

<h2 id="tocS_UpdateConferenceProviderResponse">UpdateConferenceProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconferenceproviderresponse"></a>
<a id="schema_UpdateConferenceProviderResponse"></a>
<a id="tocSupdateconferenceproviderresponse"></a>
<a id="tocsupdateconferenceproviderresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateConferenceProviderRequest">UpdateConferenceProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconferenceproviderrequest"></a>
<a id="schema_UpdateConferenceProviderRequest"></a>
<a id="tocSupdateconferenceproviderrequest"></a>
<a id="tocsupdateconferenceproviderrequest"></a>

```json
{
  "ConferenceProviderArn": {},
  "ConferenceProviderType": {},
  "IPDialIn": {
    "Endpoint": {},
    "CommsProtocol": {}
  },
  "PSTNDialIn": {
    "CountryCode": {},
    "PhoneNumber": {},
    "OneClickIdDelay": {},
    "OneClickPinDelay": {}
  },
  "MeetingSetting": {
    "RequirePin": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceProviderArn|object|true|none|none|
|ConferenceProviderType|object|true|none|none|
|IPDialIn|object|false|none|none|
|PSTNDialIn|object|false|none|none|
|MeetingSetting|object|true|none|none|

<h2 id="tocS_UpdateContactResponse">UpdateContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontactresponse"></a>
<a id="schema_UpdateContactResponse"></a>
<a id="tocSupdatecontactresponse"></a>
<a id="tocsupdatecontactresponse"></a>

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
  "ContactArn": {},
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|true|none|none|
|DisplayName|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|SipAddresses|object|false|none|none|

<h2 id="tocS_UpdateDeviceResponse">UpdateDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedeviceresponse"></a>
<a id="schema_UpdateDeviceResponse"></a>
<a id="tocSupdatedeviceresponse"></a>
<a id="tocsupdatedeviceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDeviceRequest">UpdateDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicerequest"></a>
<a id="schema_UpdateDeviceRequest"></a>
<a id="tocSupdatedevicerequest"></a>
<a id="tocsupdatedevicerequest"></a>

```json
{
  "DeviceArn": {},
  "DeviceName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|
|DeviceName|object|false|none|none|

<h2 id="tocS_UpdateGatewayResponse">UpdateGatewayResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayresponse"></a>
<a id="schema_UpdateGatewayResponse"></a>
<a id="tocSupdategatewayresponse"></a>
<a id="tocsupdategatewayresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGatewayRequest">UpdateGatewayRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewayrequest"></a>
<a id="schema_UpdateGatewayRequest"></a>
<a id="tocSupdategatewayrequest"></a>
<a id="tocsupdategatewayrequest"></a>

```json
{
  "GatewayArn": {},
  "Name": {},
  "Description": {},
  "SoftwareVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayArn|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|SoftwareVersion|object|false|none|none|

<h2 id="tocS_UpdateGatewayGroupResponse">UpdateGatewayGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaygroupresponse"></a>
<a id="schema_UpdateGatewayGroupResponse"></a>
<a id="tocSupdategatewaygroupresponse"></a>
<a id="tocsupdategatewaygroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateGatewayGroupRequest">UpdateGatewayGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategatewaygrouprequest"></a>
<a id="schema_UpdateGatewayGroupRequest"></a>
<a id="tocSupdategatewaygrouprequest"></a>
<a id="tocsupdategatewaygrouprequest"></a>

```json
{
  "GatewayGroupArn": {},
  "Name": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GatewayGroupArn|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateNetworkProfileResponse">UpdateNetworkProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkprofileresponse"></a>
<a id="schema_UpdateNetworkProfileResponse"></a>
<a id="tocSupdatenetworkprofileresponse"></a>
<a id="tocsupdatenetworkprofileresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateNetworkProfileRequest">UpdateNetworkProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenetworkprofilerequest"></a>
<a id="schema_UpdateNetworkProfileRequest"></a>
<a id="tocSupdatenetworkprofilerequest"></a>
<a id="tocsupdatenetworkprofilerequest"></a>

```json
{
  "NetworkProfileArn": {},
  "NetworkProfileName": {},
  "Description": {},
  "CurrentPassword": {},
  "NextPassword": {},
  "CertificateAuthorityArn": {},
  "TrustAnchors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|true|none|none|
|NetworkProfileName|object|false|none|none|
|Description|object|false|none|none|
|CurrentPassword|object|false|none|none|
|NextPassword|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|
|TrustAnchors|object|false|none|none|

<h2 id="tocS_UpdateProfileResponse">UpdateProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofileresponse"></a>
<a id="schema_UpdateProfileResponse"></a>
<a id="tocSupdateprofileresponse"></a>
<a id="tocsupdateprofileresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateProfileRequest">UpdateProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprofilerequest"></a>
<a id="schema_UpdateProfileRequest"></a>
<a id="tocSupdateprofilerequest"></a>
<a id="tocsupdateprofilerequest"></a>

```json
{
  "ProfileArn": {},
  "ProfileName": {},
  "IsDefault": {},
  "Timezone": {},
  "Address": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {},
  "SetupModeDisabled": {},
  "MaxVolumeLimit": {},
  "PSTNEnabled": {},
  "DataRetentionOptIn": {},
  "MeetingRoomConfiguration": {
    "RoomUtilizationMetricsEnabled": {},
    "EndOfMeetingReminder": {
      "ReminderAtMinutes": {},
      "ReminderType": {},
      "Enabled": {}
    },
    "InstantBooking": {
      "DurationInMinutes": {},
      "Enabled": {}
    },
    "RequireCheckIn": {
      "ReleaseAfterMinutes": {},
      "Enabled": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|
|ProfileName|object|false|none|none|
|IsDefault|object|false|none|none|
|Timezone|object|false|none|none|
|Address|object|false|none|none|
|DistanceUnit|object|false|none|none|
|TemperatureUnit|object|false|none|none|
|WakeWord|object|false|none|none|
|Locale|object|false|none|none|
|SetupModeDisabled|object|false|none|none|
|MaxVolumeLimit|object|false|none|none|
|PSTNEnabled|object|false|none|none|
|DataRetentionOptIn|object|false|none|none|
|MeetingRoomConfiguration|object|false|none|none|

<h2 id="tocS_UpdateRoomResponse">UpdateRoomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroomresponse"></a>
<a id="schema_UpdateRoomResponse"></a>
<a id="tocSupdateroomresponse"></a>
<a id="tocsupdateroomresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateRoomRequest">UpdateRoomRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroomrequest"></a>
<a id="schema_UpdateRoomRequest"></a>
<a id="tocSupdateroomrequest"></a>
<a id="tocsupdateroomrequest"></a>

```json
{
  "RoomArn": {},
  "RoomName": {},
  "Description": {},
  "ProviderCalendarId": {},
  "ProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|RoomName|object|false|none|none|
|Description|object|false|none|none|
|ProviderCalendarId|object|false|none|none|
|ProfileArn|object|false|none|none|

<h2 id="tocS_UpdateSkillGroupResponse">UpdateSkillGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateskillgroupresponse"></a>
<a id="schema_UpdateSkillGroupResponse"></a>
<a id="tocSupdateskillgroupresponse"></a>
<a id="tocsupdateskillgroupresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateSkillGroupRequest">UpdateSkillGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateskillgrouprequest"></a>
<a id="schema_UpdateSkillGroupRequest"></a>
<a id="tocSupdateskillgrouprequest"></a>
<a id="tocsupdateskillgrouprequest"></a>

```json
{
  "SkillGroupArn": {},
  "SkillGroupName": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|SkillGroupName|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AddressBookName">AddressBookName</h2>
<!-- backwards compatibility -->
<a id="schemaaddressbookname"></a>
<a id="schema_AddressBookName"></a>
<a id="tocSaddressbookname"></a>
<a id="tocsaddressbookname"></a>

```json
"string"
```

<h2 id="tocS_AddressBookDescription">AddressBookDescription</h2>
<!-- backwards compatibility -->
<a id="schemaaddressbookdescription"></a>
<a id="schema_AddressBookDescription"></a>
<a id="tocSaddressbookdescription"></a>
<a id="tocsaddressbookdescription"></a>

```json
"string"
```

<h2 id="tocS_AddressBook">AddressBook</h2>
<!-- backwards compatibility -->
<a id="schemaaddressbook"></a>
<a id="schema_AddressBook"></a>
<a id="tocSaddressbook"></a>
<a id="tocsaddressbook"></a>

```json
{
  "AddressBookArn": {},
  "Name": {},
  "Description": {}
}
```

An address book with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_AddressBookData">AddressBookData</h2>
<!-- backwards compatibility -->
<a id="schemaaddressbookdata"></a>
<a id="schema_AddressBookData"></a>
<a id="tocSaddressbookdata"></a>
<a id="tocsaddressbookdata"></a>

```json
{
  "AddressBookArn": {},
  "Name": {},
  "Description": {}
}
```

Information related to an address book.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressBookArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_AddressBookDataList">AddressBookDataList</h2>
<!-- backwards compatibility -->
<a id="schemaaddressbookdatalist"></a>
<a id="schema_AddressBookDataList"></a>
<a id="tocSaddressbookdatalist"></a>
<a id="tocsaddressbookdatalist"></a>

```json
[
  {
    "AddressBookArn": {},
    "Name": {},
    "Description": {}
  }
]
```

<h2 id="tocS_AmazonId">AmazonId</h2>
<!-- backwards compatibility -->
<a id="schemaamazonid"></a>
<a id="schema_AmazonId"></a>
<a id="tocSamazonid"></a>
<a id="tocsamazonid"></a>

```json
"string"
```

<h2 id="tocS_ApplianceDescription">ApplianceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaappliancedescription"></a>
<a id="schema_ApplianceDescription"></a>
<a id="tocSappliancedescription"></a>
<a id="tocsappliancedescription"></a>

```json
"string"
```

<h2 id="tocS_ApplianceFriendlyName">ApplianceFriendlyName</h2>
<!-- backwards compatibility -->
<a id="schemaappliancefriendlyname"></a>
<a id="schema_ApplianceFriendlyName"></a>
<a id="tocSappliancefriendlyname"></a>
<a id="tocsappliancefriendlyname"></a>

```json
"string"
```

<h2 id="tocS_ApplianceManufacturerName">ApplianceManufacturerName</h2>
<!-- backwards compatibility -->
<a id="schemaappliancemanufacturername"></a>
<a id="schema_ApplianceManufacturerName"></a>
<a id="tocSappliancemanufacturername"></a>
<a id="tocsappliancemanufacturername"></a>

```json
"string"
```

<h2 id="tocS_SkillId">SkillId</h2>
<!-- backwards compatibility -->
<a id="schemaskillid"></a>
<a id="schema_SkillId"></a>
<a id="tocSskillid"></a>
<a id="tocsskillid"></a>

```json
"string"
```

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"en-US"
```

<h2 id="tocS_AudioLocation">AudioLocation</h2>
<!-- backwards compatibility -->
<a id="schemaaudiolocation"></a>
<a id="schema_AudioLocation"></a>
<a id="tocSaudiolocation"></a>
<a id="tocsaudiolocation"></a>

```json
"string"
```

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "Locale": {},
  "Location": {}
}
```

<p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Locale|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_AudioList">AudioList</h2>
<!-- backwards compatibility -->
<a id="schemaaudiolist"></a>
<a id="schema_AudioList"></a>
<a id="tocSaudiolist"></a>
<a id="tocsaudiolist"></a>

```json
[
  {
    "Locale": {},
    "Location": {}
  }
]
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

<h2 id="tocS_AuthorizationResult">AuthorizationResult</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationresult"></a>
<a id="schema_AuthorizationResult"></a>
<a id="tocSauthorizationresult"></a>
<a id="tocsauthorizationresult"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Value](#schemavalue)|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BulletPoint">BulletPoint</h2>
<!-- backwards compatibility -->
<a id="schemabulletpoint"></a>
<a id="schema_BulletPoint"></a>
<a id="tocSbulletpoint"></a>
<a id="tocsbulletpoint"></a>

```json
"string"
```

<h2 id="tocS_BulletPoints">BulletPoints</h2>
<!-- backwards compatibility -->
<a id="schemabulletpoints"></a>
<a id="schema_BulletPoints"></a>
<a id="tocSbulletpoints"></a>
<a id="tocsbulletpoints"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BusinessReportStatus">BusinessReportStatus</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportstatus"></a>
<a id="schema_BusinessReportStatus"></a>
<a id="tocSbusinessreportstatus"></a>
<a id="tocsbusinessreportstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_BusinessReportFailureCode">BusinessReportFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportfailurecode"></a>
<a id="schema_BusinessReportFailureCode"></a>
<a id="tocSbusinessreportfailurecode"></a>
<a id="tocsbusinessreportfailurecode"></a>

```json
"ACCESS_DENIED"
```

<h2 id="tocS_BusinessReportS3Location">BusinessReportS3Location</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreports3location"></a>
<a id="schema_BusinessReportS3Location"></a>
<a id="tocSbusinessreports3location"></a>
<a id="tocsbusinessreports3location"></a>

```json
{
  "Path": {},
  "BucketName": {}
}
```

The S3 location of the output reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Path|object|false|none|none|
|BucketName|object|false|none|none|

<h2 id="tocS_BusinessReportDeliveryTime">BusinessReportDeliveryTime</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportdeliverytime"></a>
<a id="schema_BusinessReportDeliveryTime"></a>
<a id="tocSbusinessreportdeliverytime"></a>
<a id="tocsbusinessreportdeliverytime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BusinessReportDownloadUrl">BusinessReportDownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportdownloadurl"></a>
<a id="schema_BusinessReportDownloadUrl"></a>
<a id="tocSbusinessreportdownloadurl"></a>
<a id="tocsbusinessreportdownloadurl"></a>

```json
"string"
```

<h2 id="tocS_BusinessReport">BusinessReport</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreport"></a>
<a id="schema_BusinessReport"></a>
<a id="tocSbusinessreport"></a>
<a id="tocsbusinessreport"></a>

```json
{
  "Status": {},
  "FailureCode": {},
  "S3Location": {
    "Path": {},
    "BucketName": {}
  },
  "DeliveryTime": {},
  "DownloadUrl": {}
}
```

Usage report with specified parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|FailureCode|object|false|none|none|
|S3Location|object|false|none|none|
|DeliveryTime|object|false|none|none|
|DownloadUrl|object|false|none|none|

<h2 id="tocS_BusinessReportInterval">BusinessReportInterval</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportinterval"></a>
<a id="schema_BusinessReportInterval"></a>
<a id="tocSbusinessreportinterval"></a>
<a id="tocsbusinessreportinterval"></a>

```json
"ONE_DAY"
```

<h2 id="tocS_BusinessReportContentRange">BusinessReportContentRange</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportcontentrange"></a>
<a id="schema_BusinessReportContentRange"></a>
<a id="tocSbusinessreportcontentrange"></a>
<a id="tocsbusinessreportcontentrange"></a>

```json
{
  "Interval": {}
}
```

The content range of the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Interval|object|true|none|none|

<h2 id="tocS_BusinessReportFormat">BusinessReportFormat</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportformat"></a>
<a id="schema_BusinessReportFormat"></a>
<a id="tocSbusinessreportformat"></a>
<a id="tocsbusinessreportformat"></a>

```json
"CSV"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"string"
```

<h2 id="tocS_BusinessReportRecurrence">BusinessReportRecurrence</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportrecurrence"></a>
<a id="schema_BusinessReportRecurrence"></a>
<a id="tocSbusinessreportrecurrence"></a>
<a id="tocsbusinessreportrecurrence"></a>

```json
{
  "StartDate": {}
}
```

The recurrence of the reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartDate|object|false|none|none|

<h2 id="tocS_BusinessReportS3Path">BusinessReportS3Path</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreports3path"></a>
<a id="schema_BusinessReportS3Path"></a>
<a id="tocSbusinessreports3path"></a>
<a id="tocsbusinessreports3path"></a>

```json
"string"
```

<h2 id="tocS_CustomerS3BucketName">CustomerS3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemacustomers3bucketname"></a>
<a id="schema_CustomerS3BucketName"></a>
<a id="tocScustomers3bucketname"></a>
<a id="tocscustomers3bucketname"></a>

```json
"string"
```

<h2 id="tocS_BusinessReportScheduleName">BusinessReportScheduleName</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportschedulename"></a>
<a id="schema_BusinessReportScheduleName"></a>
<a id="tocSbusinessreportschedulename"></a>
<a id="tocsbusinessreportschedulename"></a>

```json
"string"
```

<h2 id="tocS_S3KeyPrefix">S3KeyPrefix</h2>
<!-- backwards compatibility -->
<a id="schemas3keyprefix"></a>
<a id="schema_S3KeyPrefix"></a>
<a id="tocSs3keyprefix"></a>
<a id="tocss3keyprefix"></a>

```json
"string"
```

<h2 id="tocS_BusinessReportSchedule">BusinessReportSchedule</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportschedule"></a>
<a id="schema_BusinessReportSchedule"></a>
<a id="tocSbusinessreportschedule"></a>
<a id="tocsbusinessreportschedule"></a>

```json
{
  "ScheduleArn": {},
  "ScheduleName": {},
  "S3BucketName": {},
  "S3KeyPrefix": {},
  "Format": {},
  "ContentRange": {
    "Interval": {}
  },
  "Recurrence": {
    "StartDate": {}
  },
  "LastBusinessReport": {
    "Status": {},
    "FailureCode": {},
    "S3Location": {
      "Path": {},
      "BucketName": {}
    },
    "DeliveryTime": {},
    "DownloadUrl": {}
  }
}
```

The schedule of the usage report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduleArn|object|false|none|none|
|ScheduleName|object|false|none|none|
|S3BucketName|object|false|none|none|
|S3KeyPrefix|object|false|none|none|
|Format|object|false|none|none|
|ContentRange|object|false|none|none|
|Recurrence|object|false|none|none|
|LastBusinessReport|object|false|none|none|

<h2 id="tocS_BusinessReportScheduleList">BusinessReportScheduleList</h2>
<!-- backwards compatibility -->
<a id="schemabusinessreportschedulelist"></a>
<a id="schema_BusinessReportScheduleList"></a>
<a id="tocSbusinessreportschedulelist"></a>
<a id="tocsbusinessreportschedulelist"></a>

```json
[
  {
    "ScheduleArn": {},
    "ScheduleName": {},
    "S3BucketName": {},
    "S3KeyPrefix": {},
    "Format": {},
    "ContentRange": {
      "Interval": {}
    },
    "Recurrence": {
      "StartDate": {}
    },
    "LastBusinessReport": {
      "Status": {},
      "FailureCode": {},
      "S3Location": {
        "Path": {},
        "BucketName": {}
      },
      "DeliveryTime": {},
      "DownloadUrl": {}
    }
  }
]
```

<h2 id="tocS_CategoryId">CategoryId</h2>
<!-- backwards compatibility -->
<a id="schemacategoryid"></a>
<a id="schema_CategoryId"></a>
<a id="tocScategoryid"></a>
<a id="tocscategoryid"></a>

```json
1
```

<h2 id="tocS_CategoryName">CategoryName</h2>
<!-- backwards compatibility -->
<a id="schemacategoryname"></a>
<a id="schema_CategoryName"></a>
<a id="tocScategoryname"></a>
<a id="tocscategoryname"></a>

```json
"string"
```

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "CategoryId": {},
  "CategoryName": {}
}
```

The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CategoryId|object|false|none|none|
|CategoryName|object|false|none|none|

<h2 id="tocS_CategoryList">CategoryList</h2>
<!-- backwards compatibility -->
<a id="schemacategorylist"></a>
<a id="schema_CategoryList"></a>
<a id="tocScategorylist"></a>
<a id="tocscategorylist"></a>

```json
[
  {
    "CategoryId": {},
    "CategoryName": {}
  }
]
```

<h2 id="tocS_CertificateTime">CertificateTime</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetime"></a>
<a id="schema_CertificateTime"></a>
<a id="tocScertificatetime"></a>
<a id="tocscertificatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"stringstri"
```

A unique, user-specified identifier for the request that ensures idempotency.

<h2 id="tocS_CommsProtocol">CommsProtocol</h2>
<!-- backwards compatibility -->
<a id="schemacommsprotocol"></a>
<a id="schema_CommsProtocol"></a>
<a id="tocScommsprotocol"></a>
<a id="tocscommsprotocol"></a>

```json
"SIP"
```

<h2 id="tocS_ConferencePreference">ConferencePreference</h2>
<!-- backwards compatibility -->
<a id="schemaconferencepreference"></a>
<a id="schema_ConferencePreference"></a>
<a id="tocSconferencepreference"></a>
<a id="tocsconferencepreference"></a>

```json
{
  "DefaultConferenceProviderArn": {}
}
```

The default conference provider that is used if no other scheduled meetings are detected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DefaultConferenceProviderArn|object|false|none|none|

<h2 id="tocS_ConferenceProviderName">ConferenceProviderName</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceprovidername"></a>
<a id="schema_ConferenceProviderName"></a>
<a id="tocSconferenceprovidername"></a>
<a id="tocsconferenceprovidername"></a>

```json
"string"
```

<h2 id="tocS_ConferenceProviderType">ConferenceProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceprovidertype"></a>
<a id="schema_ConferenceProviderType"></a>
<a id="tocSconferenceprovidertype"></a>
<a id="tocsconferenceprovidertype"></a>

```json
"CHIME"
```

<h2 id="tocS_IPDialIn">IPDialIn</h2>
<!-- backwards compatibility -->
<a id="schemaipdialin"></a>
<a id="schema_IPDialIn"></a>
<a id="tocSipdialin"></a>
<a id="tocsipdialin"></a>

```json
{
  "Endpoint": {},
  "CommsProtocol": {}
}
```

The IP endpoint and protocol for calling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|true|none|none|
|CommsProtocol|object|true|none|none|

<h2 id="tocS_PSTNDialIn">PSTNDialIn</h2>
<!-- backwards compatibility -->
<a id="schemapstndialin"></a>
<a id="schema_PSTNDialIn"></a>
<a id="tocSpstndialin"></a>
<a id="tocspstndialin"></a>

```json
{
  "CountryCode": {},
  "PhoneNumber": {},
  "OneClickIdDelay": {},
  "OneClickPinDelay": {}
}
```

The information for public switched telephone network (PSTN) conferencing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CountryCode|object|true|none|none|
|PhoneNumber|object|true|none|none|
|OneClickIdDelay|object|true|none|none|
|OneClickPinDelay|object|true|none|none|

<h2 id="tocS_MeetingSetting">MeetingSetting</h2>
<!-- backwards compatibility -->
<a id="schemameetingsetting"></a>
<a id="schema_MeetingSetting"></a>
<a id="tocSmeetingsetting"></a>
<a id="tocsmeetingsetting"></a>

```json
{
  "RequirePin": {}
}
```

<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequirePin|object|true|none|none|

<h2 id="tocS_ConferenceProvider">ConferenceProvider</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceprovider"></a>
<a id="schema_ConferenceProvider"></a>
<a id="tocSconferenceprovider"></a>
<a id="tocsconferenceprovider"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Type": {},
  "IPDialIn": {
    "Endpoint": {},
    "CommsProtocol": {}
  },
  "PSTNDialIn": {
    "CountryCode": {},
    "PhoneNumber": {},
    "OneClickIdDelay": {},
    "OneClickPinDelay": {}
  },
  "MeetingSetting": {
    "RequirePin": {}
  }
}
```

An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Type|object|false|none|none|
|IPDialIn|object|false|none|none|
|PSTNDialIn|object|false|none|none|
|MeetingSetting|object|false|none|none|

<h2 id="tocS_ConferenceProvidersList">ConferenceProvidersList</h2>
<!-- backwards compatibility -->
<a id="schemaconferenceproviderslist"></a>
<a id="schema_ConferenceProvidersList"></a>
<a id="tocSconferenceproviderslist"></a>
<a id="tocsconferenceproviderslist"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Type": {},
    "IPDialIn": {
      "Endpoint": {},
      "CommsProtocol": {}
    },
    "PSTNDialIn": {
      "CountryCode": {},
      "PhoneNumber": {},
      "OneClickIdDelay": {},
      "OneClickPinDelay": {}
    },
    "MeetingSetting": {
      "RequirePin": {}
    }
  }
]
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"ONLINE"
```

<h2 id="tocS_ConnectionStatusUpdatedTime">ConnectionStatusUpdatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatusupdatedtime"></a>
<a id="schema_ConnectionStatusUpdatedTime"></a>
<a id="tocSconnectionstatusupdatedtime"></a>
<a id="tocsconnectionstatusupdatedtime"></a>

```json
"1970-01-01T00:00:00Z"
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

<h2 id="tocS_RawPhoneNumber">RawPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemarawphonenumber"></a>
<a id="schema_RawPhoneNumber"></a>
<a id="tocSrawphonenumber"></a>
<a id="tocsrawphonenumber"></a>

```json
"password"
```

<h2 id="tocS_PhoneNumberList">PhoneNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumberlist"></a>
<a id="schema_PhoneNumberList"></a>
<a id="tocSphonenumberlist"></a>
<a id="tocsphonenumberlist"></a>

```json
[
  {
    "Number": {},
    "Type": {}
  }
]
```

<h2 id="tocS_SipAddressList">SipAddressList</h2>
<!-- backwards compatibility -->
<a id="schemasipaddresslist"></a>
<a id="schema_SipAddressList"></a>
<a id="tocSsipaddresslist"></a>
<a id="tocssipaddresslist"></a>

```json
[
  {
    "Uri": {},
    "Type": {}
  }
]
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
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {}
}
```

A contact with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|false|none|none|
|DisplayName|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|SipAddresses|object|false|none|none|

<h2 id="tocS_ContactData">ContactData</h2>
<!-- backwards compatibility -->
<a id="schemacontactdata"></a>
<a id="schema_ContactData"></a>
<a id="tocScontactdata"></a>
<a id="tocscontactdata"></a>

```json
{
  "ContactArn": {},
  "DisplayName": {},
  "FirstName": {},
  "LastName": {},
  "PhoneNumber": {},
  "PhoneNumbers": {},
  "SipAddresses": {}
}
```

Information related to a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContactArn|object|false|none|none|
|DisplayName|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|PhoneNumber|object|false|none|none|
|PhoneNumbers|object|false|none|none|
|SipAddresses|object|false|none|none|

<h2 id="tocS_ContactDataList">ContactDataList</h2>
<!-- backwards compatibility -->
<a id="schemacontactdatalist"></a>
<a id="schema_ContactDataList"></a>
<a id="tocScontactdatalist"></a>
<a id="tocscontactdatalist"></a>

```json
[
  {
    "ContactArn": {},
    "DisplayName": {},
    "FirstName": {},
    "LastName": {},
    "PhoneNumber": {},
    "PhoneNumbers": {},
    "SipAddresses": {}
  }
]
```

<h2 id="tocS_TextList">TextList</h2>
<!-- backwards compatibility -->
<a id="schematextlist"></a>
<a id="schema_TextList"></a>
<a id="tocStextlist"></a>
<a id="tocstextlist"></a>

```json
[
  {
    "Locale": {},
    "Value": {}
  }
]
```

<h2 id="tocS_SsmlList">SsmlList</h2>
<!-- backwards compatibility -->
<a id="schemassmllist"></a>
<a id="schema_SsmlList"></a>
<a id="tocSssmllist"></a>
<a id="tocsssmllist"></a>

```json
[
  {
    "Locale": {},
    "Value": {}
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
{
  "TextList": {},
  "SsmlList": {},
  "AudioList": {}
}
```

The content definition. This can contain only one text, SSML, or audio list object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TextList|object|false|none|none|
|SsmlList|object|false|none|none|
|AudioList|object|false|none|none|

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_EndOfMeetingReminderMinutesList">EndOfMeetingReminderMinutesList</h2>
<!-- backwards compatibility -->
<a id="schemaendofmeetingreminderminuteslist"></a>
<a id="schema_EndOfMeetingReminderMinutesList"></a>
<a id="tocSendofmeetingreminderminuteslist"></a>
<a id="tocsendofmeetingreminderminuteslist"></a>

```json
[
  0
]
```

<h2 id="tocS_EndOfMeetingReminderType">EndOfMeetingReminderType</h2>
<!-- backwards compatibility -->
<a id="schemaendofmeetingremindertype"></a>
<a id="schema_EndOfMeetingReminderType"></a>
<a id="tocSendofmeetingremindertype"></a>
<a id="tocsendofmeetingremindertype"></a>

```json
"ANNOUNCEMENT_TIME_CHECK"
```

<h2 id="tocS_CreateEndOfMeetingReminder">CreateEndOfMeetingReminder</h2>
<!-- backwards compatibility -->
<a id="schemacreateendofmeetingreminder"></a>
<a id="schema_CreateEndOfMeetingReminder"></a>
<a id="tocScreateendofmeetingreminder"></a>
<a id="tocscreateendofmeetingreminder"></a>

```json
{
  "ReminderAtMinutes": {},
  "ReminderType": {},
  "Enabled": {}
}
```

Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReminderAtMinutes|object|true|none|none|
|ReminderType|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_GatewayGroupName">GatewayGroupName</h2>
<!-- backwards compatibility -->
<a id="schemagatewaygroupname"></a>
<a id="schema_GatewayGroupName"></a>
<a id="tocSgatewaygroupname"></a>
<a id="tocsgatewaygroupname"></a>

```json
"string"
```

<h2 id="tocS_GatewayGroupDescription">GatewayGroupDescription</h2>
<!-- backwards compatibility -->
<a id="schemagatewaygroupdescription"></a>
<a id="schema_GatewayGroupDescription"></a>
<a id="tocSgatewaygroupdescription"></a>
<a id="tocsgatewaygroupdescription"></a>

```json
"string"
```

<h2 id="tocS_Minutes">Minutes</h2>
<!-- backwards compatibility -->
<a id="schemaminutes"></a>
<a id="schema_Minutes"></a>
<a id="tocSminutes"></a>
<a id="tocsminutes"></a>

```json
0
```

<h2 id="tocS_CreateInstantBooking">CreateInstantBooking</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstantbooking"></a>
<a id="schema_CreateInstantBooking"></a>
<a id="tocScreateinstantbooking"></a>
<a id="tocscreateinstantbooking"></a>

```json
{
  "DurationInMinutes": {},
  "Enabled": {}
}
```

Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInMinutes|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_CreateRequireCheckIn">CreateRequireCheckIn</h2>
<!-- backwards compatibility -->
<a id="schemacreaterequirecheckin"></a>
<a id="schema_CreateRequireCheckIn"></a>
<a id="tocScreaterequirecheckin"></a>
<a id="tocscreaterequirecheckin"></a>

```json
{
  "ReleaseAfterMinutes": {},
  "Enabled": {}
}
```

Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseAfterMinutes|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_CreateMeetingRoomConfiguration">CreateMeetingRoomConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatemeetingroomconfiguration"></a>
<a id="schema_CreateMeetingRoomConfiguration"></a>
<a id="tocScreatemeetingroomconfiguration"></a>
<a id="tocscreatemeetingroomconfiguration"></a>

```json
{
  "RoomUtilizationMetricsEnabled": {},
  "EndOfMeetingReminder": {
    "ReminderAtMinutes": {},
    "ReminderType": {},
    "Enabled": {}
  },
  "InstantBooking": {
    "DurationInMinutes": {},
    "Enabled": {}
  },
  "RequireCheckIn": {
    "ReleaseAfterMinutes": {},
    "Enabled": {}
  }
}
```

Creates meeting room settings of a room profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomUtilizationMetricsEnabled|object|false|none|none|
|EndOfMeetingReminder|[CreateEndOfMeetingReminder](#schemacreateendofmeetingreminder)|false|none|Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.|
|InstantBooking|object|false|none|none|
|RequireCheckIn|object|false|none|none|

<h2 id="tocS_NetworkProfileName">NetworkProfileName</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofilename"></a>
<a id="schema_NetworkProfileName"></a>
<a id="tocSnetworkprofilename"></a>
<a id="tocsnetworkprofilename"></a>

```json
"string"
```

<h2 id="tocS_NetworkProfileDescription">NetworkProfileDescription</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofiledescription"></a>
<a id="schema_NetworkProfileDescription"></a>
<a id="tocSnetworkprofiledescription"></a>
<a id="tocsnetworkprofiledescription"></a>

```json
"string"
```

<h2 id="tocS_NetworkSsid">NetworkSsid</h2>
<!-- backwards compatibility -->
<a id="schemanetworkssid"></a>
<a id="schema_NetworkSsid"></a>
<a id="tocSnetworkssid"></a>
<a id="tocsnetworkssid"></a>

```json
"string"
```

<h2 id="tocS_NetworkSecurityType">NetworkSecurityType</h2>
<!-- backwards compatibility -->
<a id="schemanetworksecuritytype"></a>
<a id="schema_NetworkSecurityType"></a>
<a id="tocSnetworksecuritytype"></a>
<a id="tocsnetworksecuritytype"></a>

```json
"OPEN"
```

<h2 id="tocS_NetworkEapMethod">NetworkEapMethod</h2>
<!-- backwards compatibility -->
<a id="schemanetworkeapmethod"></a>
<a id="schema_NetworkEapMethod"></a>
<a id="tocSnetworkeapmethod"></a>
<a id="tocsnetworkeapmethod"></a>

```json
"EAP_TLS"
```

<h2 id="tocS_CurrentWiFiPassword">CurrentWiFiPassword</h2>
<!-- backwards compatibility -->
<a id="schemacurrentwifipassword"></a>
<a id="schema_CurrentWiFiPassword"></a>
<a id="tocScurrentwifipassword"></a>
<a id="tocscurrentwifipassword"></a>

```json
"password"
```

<h2 id="tocS_NextWiFiPassword">NextWiFiPassword</h2>
<!-- backwards compatibility -->
<a id="schemanextwifipassword"></a>
<a id="schema_NextWiFiPassword"></a>
<a id="tocSnextwifipassword"></a>
<a id="tocsnextwifipassword"></a>

```json
"password"
```

<h2 id="tocS_TrustAnchorList">TrustAnchorList</h2>
<!-- backwards compatibility -->
<a id="schematrustanchorlist"></a>
<a id="schema_TrustAnchorList"></a>
<a id="tocStrustanchorlist"></a>
<a id="tocstrustanchorlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProfileName">ProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaprofilename"></a>
<a id="schema_ProfileName"></a>
<a id="tocSprofilename"></a>
<a id="tocsprofilename"></a>

```json
"string"
```

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_DistanceUnit">DistanceUnit</h2>
<!-- backwards compatibility -->
<a id="schemadistanceunit"></a>
<a id="schema_DistanceUnit"></a>
<a id="tocSdistanceunit"></a>
<a id="tocsdistanceunit"></a>

```json
"METRIC"
```

<h2 id="tocS_TemperatureUnit">TemperatureUnit</h2>
<!-- backwards compatibility -->
<a id="schematemperatureunit"></a>
<a id="schema_TemperatureUnit"></a>
<a id="tocStemperatureunit"></a>
<a id="tocstemperatureunit"></a>

```json
"FAHRENHEIT"
```

<h2 id="tocS_WakeWord">WakeWord</h2>
<!-- backwards compatibility -->
<a id="schemawakeword"></a>
<a id="schema_WakeWord"></a>
<a id="tocSwakeword"></a>
<a id="tocswakeword"></a>

```json
"ALEXA"
```

<h2 id="tocS_DeviceLocale">DeviceLocale</h2>
<!-- backwards compatibility -->
<a id="schemadevicelocale"></a>
<a id="schema_DeviceLocale"></a>
<a id="tocSdevicelocale"></a>
<a id="tocsdevicelocale"></a>

```json
"string"
```

<h2 id="tocS_MaxVolumeLimit">MaxVolumeLimit</h2>
<!-- backwards compatibility -->
<a id="schemamaxvolumelimit"></a>
<a id="schema_MaxVolumeLimit"></a>
<a id="tocSmaxvolumelimit"></a>
<a id="tocsmaxvolumelimit"></a>

```json
0
```

<h2 id="tocS_RoomName">RoomName</h2>
<!-- backwards compatibility -->
<a id="schemaroomname"></a>
<a id="schema_RoomName"></a>
<a id="tocSroomname"></a>
<a id="tocsroomname"></a>

```json
"string"
```

<h2 id="tocS_RoomDescription">RoomDescription</h2>
<!-- backwards compatibility -->
<a id="schemaroomdescription"></a>
<a id="schema_RoomDescription"></a>
<a id="tocSroomdescription"></a>
<a id="tocsroomdescription"></a>

```json
"string"
```

<h2 id="tocS_ProviderCalendarId">ProviderCalendarId</h2>
<!-- backwards compatibility -->
<a id="schemaprovidercalendarid"></a>
<a id="schema_ProviderCalendarId"></a>
<a id="tocSprovidercalendarid"></a>
<a id="tocsprovidercalendarid"></a>

```json
"string"
```

<h2 id="tocS_SkillGroupName">SkillGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaskillgroupname"></a>
<a id="schema_SkillGroupName"></a>
<a id="tocSskillgroupname"></a>
<a id="tocsskillgroupname"></a>

```json
"string"
```

<h2 id="tocS_SkillGroupDescription">SkillGroupDescription</h2>
<!-- backwards compatibility -->
<a id="schemaskillgroupdescription"></a>
<a id="schema_SkillGroupDescription"></a>
<a id="tocSskillgroupdescription"></a>
<a id="tocsskillgroupdescription"></a>

```json
"string"
```

<h2 id="tocS_user_UserId">user_UserId</h2>
<!-- backwards compatibility -->
<a id="schemauser_userid"></a>
<a id="schema_user_UserId"></a>
<a id="tocSuser_userid"></a>
<a id="tocsuser_userid"></a>

```json
"string"
```

<h2 id="tocS_user_FirstName">user_FirstName</h2>
<!-- backwards compatibility -->
<a id="schemauser_firstname"></a>
<a id="schema_user_FirstName"></a>
<a id="tocSuser_firstname"></a>
<a id="tocsuser_firstname"></a>

```json
"string"
```

<h2 id="tocS_user_LastName">user_LastName</h2>
<!-- backwards compatibility -->
<a id="schemauser_lastname"></a>
<a id="schema_user_LastName"></a>
<a id="tocSuser_lastname"></a>
<a id="tocsuser_lastname"></a>

```json
"string"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

<h2 id="tocS_DeviceUsageType">DeviceUsageType</h2>
<!-- backwards compatibility -->
<a id="schemadeviceusagetype"></a>
<a id="schema_DeviceUsageType"></a>
<a id="tocSdeviceusagetype"></a>
<a id="tocsdeviceusagetype"></a>

```json
"VOICE"
```

<h2 id="tocS_RoomSkillParameterKey">RoomSkillParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaroomskillparameterkey"></a>
<a id="schema_RoomSkillParameterKey"></a>
<a id="tocSroomskillparameterkey"></a>
<a id="tocsroomskillparameterkey"></a>

```json
"string"
```

<h2 id="tocS_EnrollmentId">EnrollmentId</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmentid"></a>
<a id="schema_EnrollmentId"></a>
<a id="tocSenrollmentid"></a>
<a id="tocsenrollmentid"></a>

```json
"string"
```

<h2 id="tocS_DeveloperName">DeveloperName</h2>
<!-- backwards compatibility -->
<a id="schemadevelopername"></a>
<a id="schema_DeveloperName"></a>
<a id="tocSdevelopername"></a>
<a id="tocsdevelopername"></a>

```json
"string"
```

<h2 id="tocS_PrivacyPolicy">PrivacyPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaprivacypolicy"></a>
<a id="schema_PrivacyPolicy"></a>
<a id="tocSprivacypolicy"></a>
<a id="tocsprivacypolicy"></a>

```json
"string"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
```

<h2 id="tocS_DeveloperInfo">DeveloperInfo</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperinfo"></a>
<a id="schema_DeveloperInfo"></a>
<a id="tocSdeveloperinfo"></a>
<a id="tocsdeveloperinfo"></a>

```json
{
  "DeveloperName": {},
  "PrivacyPolicy": {},
  "Email": {},
  "Url": {}
}
```

The details about the developer that published the skill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeveloperName|object|false|none|none|
|PrivacyPolicy|object|false|none|none|
|Email|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_DeviceSerialNumber">DeviceSerialNumber</h2>
<!-- backwards compatibility -->
<a id="schemadeviceserialnumber"></a>
<a id="schema_DeviceSerialNumber"></a>
<a id="tocSdeviceserialnumber"></a>
<a id="tocsdeviceserialnumber"></a>

```json
"string"
```

<h2 id="tocS_DeviceType">DeviceType</h2>
<!-- backwards compatibility -->
<a id="schemadevicetype"></a>
<a id="schema_DeviceType"></a>
<a id="tocSdevicetype"></a>
<a id="tocsdevicetype"></a>

```json
"string"
```

<h2 id="tocS_DeviceName">DeviceName</h2>
<!-- backwards compatibility -->
<a id="schemadevicename"></a>
<a id="schema_DeviceName"></a>
<a id="tocSdevicename"></a>
<a id="tocsdevicename"></a>

```json
"string"
```

<h2 id="tocS_SoftwareVersion">SoftwareVersion</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareversion"></a>
<a id="schema_SoftwareVersion"></a>
<a id="tocSsoftwareversion"></a>
<a id="tocssoftwareversion"></a>

```json
"string"
```

<h2 id="tocS_MacAddress">MacAddress</h2>
<!-- backwards compatibility -->
<a id="schemamacaddress"></a>
<a id="schema_MacAddress"></a>
<a id="tocSmacaddress"></a>
<a id="tocsmacaddress"></a>

```json
"string"
```

<h2 id="tocS_DeviceStatus">DeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatus"></a>
<a id="schema_DeviceStatus"></a>
<a id="tocSdevicestatus"></a>
<a id="tocsdevicestatus"></a>

```json
"READY"
```

<h2 id="tocS_DeviceStatusInfo">DeviceStatusInfo</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatusinfo"></a>
<a id="schema_DeviceStatusInfo"></a>
<a id="tocSdevicestatusinfo"></a>
<a id="tocsdevicestatusinfo"></a>

```json
{
  "DeviceStatusDetails": {},
  "ConnectionStatus": {},
  "ConnectionStatusUpdatedTime": {}
}
```

Detailed information about a device's status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceStatusDetails|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|ConnectionStatusUpdatedTime|object|false|none|none|

<h2 id="tocS_DeviceNetworkProfileInfo">DeviceNetworkProfileInfo</h2>
<!-- backwards compatibility -->
<a id="schemadevicenetworkprofileinfo"></a>
<a id="schema_DeviceNetworkProfileInfo"></a>
<a id="tocSdevicenetworkprofileinfo"></a>
<a id="tocsdevicenetworkprofileinfo"></a>

```json
{
  "NetworkProfileArn": {},
  "CertificateArn": {},
  "CertificateExpirationTime": {}
}
```

Detailed information about a device's network profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|false|none|none|
|CertificateArn|object|false|none|none|
|CertificateExpirationTime|object|false|none|none|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "DeviceArn": {},
  "DeviceSerialNumber": {},
  "DeviceType": {},
  "DeviceName": {},
  "SoftwareVersion": {},
  "MacAddress": {},
  "RoomArn": {},
  "DeviceStatus": {},
  "DeviceStatusInfo": {
    "DeviceStatusDetails": {},
    "ConnectionStatus": {},
    "ConnectionStatusUpdatedTime": {}
  },
  "NetworkProfileInfo": {
    "NetworkProfileArn": {},
    "CertificateArn": {},
    "CertificateExpirationTime": {}
  }
}
```

A device with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|
|DeviceSerialNumber|object|false|none|none|
|DeviceType|object|false|none|none|
|DeviceName|object|false|none|none|
|SoftwareVersion|object|false|none|none|
|MacAddress|object|false|none|none|
|RoomArn|object|false|none|none|
|DeviceStatus|object|false|none|none|
|DeviceStatusInfo|object|false|none|none|
|NetworkProfileInfo|object|false|none|none|

<h2 id="tocS_DeviceRoomName">DeviceRoomName</h2>
<!-- backwards compatibility -->
<a id="schemadeviceroomname"></a>
<a id="schema_DeviceRoomName"></a>
<a id="tocSdeviceroomname"></a>
<a id="tocsdeviceroomname"></a>

```json
"string"
```

<h2 id="tocS_DeviceDataCreatedTime">DeviceDataCreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemadevicedatacreatedtime"></a>
<a id="schema_DeviceDataCreatedTime"></a>
<a id="tocSdevicedatacreatedtime"></a>
<a id="tocsdevicedatacreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeviceData">DeviceData</h2>
<!-- backwards compatibility -->
<a id="schemadevicedata"></a>
<a id="schema_DeviceData"></a>
<a id="tocSdevicedata"></a>
<a id="tocsdevicedata"></a>

```json
{
  "DeviceArn": {},
  "DeviceSerialNumber": {},
  "DeviceType": {},
  "DeviceName": {},
  "SoftwareVersion": {},
  "MacAddress": {},
  "DeviceStatus": {},
  "NetworkProfileArn": {},
  "NetworkProfileName": {},
  "RoomArn": {},
  "RoomName": {},
  "DeviceStatusInfo": {
    "DeviceStatusDetails": {},
    "ConnectionStatus": {},
    "ConnectionStatusUpdatedTime": {}
  },
  "CreatedTime": {}
}
```

Device attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceArn|object|false|none|none|
|DeviceSerialNumber|object|false|none|none|
|DeviceType|object|false|none|none|
|DeviceName|object|false|none|none|
|SoftwareVersion|object|false|none|none|
|MacAddress|object|false|none|none|
|DeviceStatus|object|false|none|none|
|NetworkProfileArn|object|false|none|none|
|NetworkProfileName|object|false|none|none|
|RoomArn|object|false|none|none|
|RoomName|object|false|none|none|
|DeviceStatusInfo|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_DeviceDataList">DeviceDataList</h2>
<!-- backwards compatibility -->
<a id="schemadevicedatalist"></a>
<a id="schema_DeviceDataList"></a>
<a id="tocSdevicedatalist"></a>
<a id="tocsdevicedatalist"></a>

```json
[
  {
    "DeviceArn": {},
    "DeviceSerialNumber": {},
    "DeviceType": {},
    "DeviceName": {},
    "SoftwareVersion": {},
    "MacAddress": {},
    "DeviceStatus": {},
    "NetworkProfileArn": {},
    "NetworkProfileName": {},
    "RoomArn": {},
    "RoomName": {},
    "DeviceStatusInfo": {
      "DeviceStatusDetails": {},
      "ConnectionStatus": {},
      "ConnectionStatusUpdatedTime": {}
    },
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_DeviceEventType">DeviceEventType</h2>
<!-- backwards compatibility -->
<a id="schemadeviceeventtype"></a>
<a id="schema_DeviceEventType"></a>
<a id="tocSdeviceeventtype"></a>
<a id="tocsdeviceeventtype"></a>

```json
"CONNECTION_STATUS"
```

<h2 id="tocS_DeviceEventValue">DeviceEventValue</h2>
<!-- backwards compatibility -->
<a id="schemadeviceeventvalue"></a>
<a id="schema_DeviceEventValue"></a>
<a id="tocSdeviceeventvalue"></a>
<a id="tocsdeviceeventvalue"></a>

```json
"string"
```

<h2 id="tocS_DeviceEventTime">DeviceEventTime</h2>
<!-- backwards compatibility -->
<a id="schemadeviceeventtime"></a>
<a id="schema_DeviceEventTime"></a>
<a id="tocSdeviceeventtime"></a>
<a id="tocsdeviceeventtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeviceEvent">DeviceEvent</h2>
<!-- backwards compatibility -->
<a id="schemadeviceevent"></a>
<a id="schema_DeviceEvent"></a>
<a id="tocSdeviceevent"></a>
<a id="tocsdeviceevent"></a>

```json
{
  "Type": {},
  "Value": {},
  "Timestamp": {}
}
```

The list of device events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Value|object|false|none|none|
|Timestamp|object|false|none|none|

<h2 id="tocS_DeviceEventList">DeviceEventList</h2>
<!-- backwards compatibility -->
<a id="schemadeviceeventlist"></a>
<a id="schema_DeviceEventList"></a>
<a id="tocSdeviceeventlist"></a>
<a id="tocsdeviceeventlist"></a>

```json
[
  {
    "Type": {},
    "Value": {},
    "Timestamp": {}
  }
]
```

<h2 id="tocS_DeviceSerialNumberForAVS">DeviceSerialNumberForAVS</h2>
<!-- backwards compatibility -->
<a id="schemadeviceserialnumberforavs"></a>
<a id="schema_DeviceSerialNumberForAVS"></a>
<a id="tocSdeviceserialnumberforavs"></a>
<a id="tocsdeviceserialnumberforavs"></a>

```json
"string"
```

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
"BLUETOOTH"
```

<h2 id="tocS_DeviceStatusDetailCode">DeviceStatusDetailCode</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatusdetailcode"></a>
<a id="schema_DeviceStatusDetailCode"></a>
<a id="tocSdevicestatusdetailcode"></a>
<a id="tocsdevicestatusdetailcode"></a>

```json
"DEVICE_SOFTWARE_UPDATE_NEEDED"
```

<h2 id="tocS_DeviceStatusDetail">DeviceStatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatusdetail"></a>
<a id="schema_DeviceStatusDetail"></a>
<a id="tocSdevicestatusdetail"></a>
<a id="tocsdevicestatusdetail"></a>

```json
{
  "Feature": {},
  "Code": {}
}
```

Details of a device’s status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Feature|object|false|none|none|
|Code|object|false|none|none|

<h2 id="tocS_DeviceStatusDetails">DeviceStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatusdetails"></a>
<a id="schema_DeviceStatusDetails"></a>
<a id="tocSdevicestatusdetails"></a>
<a id="tocsdevicestatusdetails"></a>

```json
[
  {
    "Feature": {},
    "Code": {}
  }
]
```

<h2 id="tocS_EnablementType">EnablementType</h2>
<!-- backwards compatibility -->
<a id="schemaenablementtype"></a>
<a id="schema_EnablementType"></a>
<a id="tocSenablementtype"></a>
<a id="tocsenablementtype"></a>

```json
"ENABLED"
```

<h2 id="tocS_EnablementTypeFilter">EnablementTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaenablementtypefilter"></a>
<a id="schema_EnablementTypeFilter"></a>
<a id="tocSenablementtypefilter"></a>
<a id="tocsenablementtypefilter"></a>

```json
"ENABLED"
```

<h2 id="tocS_EndOfMeetingReminder">EndOfMeetingReminder</h2>
<!-- backwards compatibility -->
<a id="schemaendofmeetingreminder"></a>
<a id="schema_EndOfMeetingReminder"></a>
<a id="tocSendofmeetingreminder"></a>
<a id="tocsendofmeetingreminder"></a>

```json
{
  "ReminderAtMinutes": {},
  "ReminderType": {},
  "Enabled": {}
}
```

Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReminderAtMinutes|object|false|none|none|
|ReminderType|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_EndUserLicenseAgreement">EndUserLicenseAgreement</h2>
<!-- backwards compatibility -->
<a id="schemaenduserlicenseagreement"></a>
<a id="schema_EndUserLicenseAgreement"></a>
<a id="tocSenduserlicenseagreement"></a>
<a id="tocsenduserlicenseagreement"></a>

```json
"string"
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
```

<h2 id="tocS_EnrollmentStatus">EnrollmentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaenrollmentstatus"></a>
<a id="schema_EnrollmentStatus"></a>
<a id="tocSenrollmentstatus"></a>
<a id="tocsenrollmentstatus"></a>

```json
"INITIALIZED"
```

<h2 id="tocS_Features">Features</h2>
<!-- backwards compatibility -->
<a id="schemafeatures"></a>
<a id="schema_Features"></a>
<a id="tocSfeatures"></a>
<a id="tocsfeatures"></a>

```json
[
  "BLUETOOTH"
]
```

<h2 id="tocS_FilterKey">FilterKey</h2>
<!-- backwards compatibility -->
<a id="schemafilterkey"></a>
<a id="schema_FilterKey"></a>
<a id="tocSfilterkey"></a>
<a id="tocsfilterkey"></a>

```json
"string"
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_GatewayName">GatewayName</h2>
<!-- backwards compatibility -->
<a id="schemagatewayname"></a>
<a id="schema_GatewayName"></a>
<a id="tocSgatewayname"></a>
<a id="tocsgatewayname"></a>

```json
"string"
```

<h2 id="tocS_GatewayDescription">GatewayDescription</h2>
<!-- backwards compatibility -->
<a id="schemagatewaydescription"></a>
<a id="schema_GatewayDescription"></a>
<a id="tocSgatewaydescription"></a>
<a id="tocsgatewaydescription"></a>

```json
"string"
```

<h2 id="tocS_GatewayVersion">GatewayVersion</h2>
<!-- backwards compatibility -->
<a id="schemagatewayversion"></a>
<a id="schema_GatewayVersion"></a>
<a id="tocSgatewayversion"></a>
<a id="tocsgatewayversion"></a>

```json
"string"
```

<h2 id="tocS_Gateway">Gateway</h2>
<!-- backwards compatibility -->
<a id="schemagateway"></a>
<a id="schema_Gateway"></a>
<a id="tocSgateway"></a>
<a id="tocsgateway"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Description": {},
  "GatewayGroupArn": {},
  "SoftwareVersion": {}
}
```

The details of the gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|GatewayGroupArn|object|false|none|none|
|SoftwareVersion|object|false|none|none|

<h2 id="tocS_GatewayGroup">GatewayGroup</h2>
<!-- backwards compatibility -->
<a id="schemagatewaygroup"></a>
<a id="schema_GatewayGroup"></a>
<a id="tocSgatewaygroup"></a>
<a id="tocsgatewaygroup"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Description": {}
}
```

The details of the gateway group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_GatewayGroupSummary">GatewayGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemagatewaygroupsummary"></a>
<a id="schema_GatewayGroupSummary"></a>
<a id="tocSgatewaygroupsummary"></a>
<a id="tocsgatewaygroupsummary"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Description": {}
}
```

The summary of a gateway group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_GatewayGroupSummaries">GatewayGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemagatewaygroupsummaries"></a>
<a id="schema_GatewayGroupSummaries"></a>
<a id="tocSgatewaygroupsummaries"></a>
<a id="tocsgatewaygroupsummaries"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Description": {}
  }
]
```

<h2 id="tocS_GatewaySummary">GatewaySummary</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysummary"></a>
<a id="schema_GatewaySummary"></a>
<a id="tocSgatewaysummary"></a>
<a id="tocsgatewaysummary"></a>

```json
{
  "Arn": {},
  "Name": {},
  "Description": {},
  "GatewayGroupArn": {},
  "SoftwareVersion": {}
}
```

The summary of a gateway.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|GatewayGroupArn|object|false|none|none|
|SoftwareVersion|object|false|none|none|

<h2 id="tocS_GatewaySummaries">GatewaySummaries</h2>
<!-- backwards compatibility -->
<a id="schemagatewaysummaries"></a>
<a id="schema_GatewaySummaries"></a>
<a id="tocSgatewaysummaries"></a>
<a id="tocsgatewaysummaries"></a>

```json
[
  {
    "Arn": {},
    "Name": {},
    "Description": {},
    "GatewayGroupArn": {},
    "SoftwareVersion": {}
  }
]
```

<h2 id="tocS_GenericKeyword">GenericKeyword</h2>
<!-- backwards compatibility -->
<a id="schemagenerickeyword"></a>
<a id="schema_GenericKeyword"></a>
<a id="tocSgenerickeyword"></a>
<a id="tocsgenerickeyword"></a>

```json
"string"
```

<h2 id="tocS_GenericKeywords">GenericKeywords</h2>
<!-- backwards compatibility -->
<a id="schemagenerickeywords"></a>
<a id="schema_GenericKeywords"></a>
<a id="tocSgenerickeywords"></a>
<a id="tocsgenerickeywords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationName">OrganizationName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationname"></a>
<a id="schema_OrganizationName"></a>
<a id="tocSorganizationname"></a>
<a id="tocsorganizationname"></a>

```json
"string"
```

<h2 id="tocS_ShortSkillIdList">ShortSkillIdList</h2>
<!-- backwards compatibility -->
<a id="schemashortskillidlist"></a>
<a id="schema_ShortSkillIdList"></a>
<a id="tocSshortskillidlist"></a>
<a id="tocsshortskillidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NetworkProfile">NetworkProfile</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofile"></a>
<a id="schema_NetworkProfile"></a>
<a id="tocSnetworkprofile"></a>
<a id="tocsnetworkprofile"></a>

```json
{
  "NetworkProfileArn": {},
  "NetworkProfileName": {},
  "Description": {},
  "Ssid": {},
  "SecurityType": {},
  "EapMethod": {},
  "CurrentPassword": {},
  "NextPassword": {},
  "CertificateAuthorityArn": {},
  "TrustAnchors": {}
}
```

The network profile associated with a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|false|none|none|
|NetworkProfileName|object|false|none|none|
|Description|object|false|none|none|
|Ssid|object|false|none|none|
|SecurityType|object|false|none|none|
|EapMethod|object|false|none|none|
|CurrentPassword|object|false|none|none|
|NextPassword|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|
|TrustAnchors|object|false|none|none|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "ProfileArn": {},
  "ProfileName": {},
  "IsDefault": {},
  "Address": {},
  "Timezone": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {},
  "SetupModeDisabled": {},
  "MaxVolumeLimit": {},
  "PSTNEnabled": {},
  "DataRetentionOptIn": {},
  "AddressBookArn": {},
  "MeetingRoomConfiguration": {
    "RoomUtilizationMetricsEnabled": {},
    "EndOfMeetingReminder": {
      "ReminderAtMinutes": {},
      "ReminderType": {},
      "Enabled": {}
    },
    "InstantBooking": {
      "DurationInMinutes": {},
      "Enabled": {}
    },
    "RequireCheckIn": {
      "ReleaseAfterMinutes": {},
      "Enabled": {}
    }
  }
}
```

A room profile with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|
|ProfileName|object|false|none|none|
|IsDefault|object|false|none|none|
|Address|object|false|none|none|
|Timezone|object|false|none|none|
|DistanceUnit|object|false|none|none|
|TemperatureUnit|object|false|none|none|
|WakeWord|object|false|none|none|
|Locale|object|false|none|none|
|SetupModeDisabled|object|false|none|none|
|MaxVolumeLimit|object|false|none|none|
|PSTNEnabled|object|false|none|none|
|DataRetentionOptIn|object|false|none|none|
|AddressBookArn|object|false|none|none|
|MeetingRoomConfiguration|object|false|none|none|

<h2 id="tocS_Room">Room</h2>
<!-- backwards compatibility -->
<a id="schemaroom"></a>
<a id="schema_Room"></a>
<a id="tocSroom"></a>
<a id="tocsroom"></a>

```json
{
  "RoomArn": {},
  "RoomName": {},
  "Description": {},
  "ProviderCalendarId": {},
  "ProfileArn": {}
}
```

A room with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|RoomName|object|false|none|none|
|Description|object|false|none|none|
|ProviderCalendarId|object|false|none|none|
|ProfileArn|object|false|none|none|

<h2 id="tocS_RoomSkillParameter">RoomSkillParameter</h2>
<!-- backwards compatibility -->
<a id="schemaroomskillparameter"></a>
<a id="schema_RoomSkillParameter"></a>
<a id="tocSroomskillparameter"></a>
<a id="tocsroomskillparameter"></a>

```json
{
  "ParameterKey": {},
  "ParameterValue": {}
}
```

A skill parameter associated with a room.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterKey|object|true|none|none|
|ParameterValue|object|true|none|none|

<h2 id="tocS_SkillGroup">SkillGroup</h2>
<!-- backwards compatibility -->
<a id="schemaskillgroup"></a>
<a id="schema_SkillGroup"></a>
<a id="tocSskillgroup"></a>
<a id="tocsskillgroup"></a>

```json
{
  "SkillGroupArn": {},
  "SkillGroupName": {},
  "Description": {}
}
```

A skill group with attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|SkillGroupName|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_IconUrl">IconUrl</h2>
<!-- backwards compatibility -->
<a id="schemaiconurl"></a>
<a id="schema_IconUrl"></a>
<a id="tocSiconurl"></a>
<a id="tocsiconurl"></a>

```json
"string"
```

<h2 id="tocS_InstantBooking">InstantBooking</h2>
<!-- backwards compatibility -->
<a id="schemainstantbooking"></a>
<a id="schema_InstantBooking"></a>
<a id="tocSinstantbooking"></a>
<a id="tocsinstantbooking"></a>

```json
{
  "DurationInMinutes": {},
  "Enabled": {}
}
```

Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInMinutes|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_InvocationPhrase">InvocationPhrase</h2>
<!-- backwards compatibility -->
<a id="schemainvocationphrase"></a>
<a id="schema_InvocationPhrase"></a>
<a id="tocSinvocationphrase"></a>
<a id="tocsinvocationphrase"></a>

```json
"string"
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

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
1
```

<h2 id="tocS_SkillTypeFilter">SkillTypeFilter</h2>
<!-- backwards compatibility -->
<a id="schemaskilltypefilter"></a>
<a id="schema_SkillTypeFilter"></a>
<a id="tocSskilltypefilter"></a>
<a id="tocsskilltypefilter"></a>

```json
"PUBLIC"
```

<h2 id="tocS_SkillListMaxResults">SkillListMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaskilllistmaxresults"></a>
<a id="schema_SkillListMaxResults"></a>
<a id="tocSskilllistmaxresults"></a>
<a id="tocsskilllistmaxresults"></a>

```json
1
```

<h2 id="tocS_SkillSummaryList">SkillSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaskillsummarylist"></a>
<a id="schema_SkillSummaryList"></a>
<a id="tocSskillsummarylist"></a>
<a id="tocsskillsummarylist"></a>

```json
[
  {
    "SkillId": {},
    "SkillName": {},
    "SupportsLinking": {},
    "EnablementType": {},
    "SkillType": {}
  }
]
```

<h2 id="tocS_SkillsStoreSkillList">SkillsStoreSkillList</h2>
<!-- backwards compatibility -->
<a id="schemaskillsstoreskilllist"></a>
<a id="schema_SkillsStoreSkillList"></a>
<a id="tocSskillsstoreskilllist"></a>
<a id="tocsskillsstoreskilllist"></a>

```json
[
  {
    "SkillId": {},
    "SkillName": {},
    "ShortDescription": {},
    "IconUrl": {},
    "SampleUtterances": {},
    "SkillDetails": {
      "ProductDescription": {},
      "InvocationPhrase": {},
      "ReleaseDate": {},
      "EndUserLicenseAgreement": {},
      "GenericKeywords": {},
      "BulletPoints": {},
      "NewInThisVersionBulletPoints": {},
      "SkillTypes": {},
      "Reviews": {
        "property1": "string",
        "property2": "string"
      },
      "DeveloperInfo": {
        "DeveloperName": {},
        "PrivacyPolicy": {},
        "Email": {},
        "Url": {}
      }
    },
    "SupportsLinking": {}
  }
]
```

<h2 id="tocS_SmartHomeApplianceList">SmartHomeApplianceList</h2>
<!-- backwards compatibility -->
<a id="schemasmarthomeappliancelist"></a>
<a id="schema_SmartHomeApplianceList"></a>
<a id="tocSsmarthomeappliancelist"></a>
<a id="tocssmarthomeappliancelist"></a>

```json
[
  {
    "FriendlyName": {},
    "Description": {},
    "ManufacturerName": {}
  }
]
```

<h2 id="tocS_RequireCheckIn">RequireCheckIn</h2>
<!-- backwards compatibility -->
<a id="schemarequirecheckin"></a>
<a id="schema_RequireCheckIn"></a>
<a id="tocSrequirecheckin"></a>
<a id="tocsrequirecheckin"></a>

```json
{
  "ReleaseAfterMinutes": {},
  "Enabled": {}
}
```

Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseAfterMinutes|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_MeetingRoomConfiguration">MeetingRoomConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemameetingroomconfiguration"></a>
<a id="schema_MeetingRoomConfiguration"></a>
<a id="tocSmeetingroomconfiguration"></a>
<a id="tocsmeetingroomconfiguration"></a>

```json
{
  "RoomUtilizationMetricsEnabled": {},
  "EndOfMeetingReminder": {
    "ReminderAtMinutes": {},
    "ReminderType": {},
    "Enabled": {}
  },
  "InstantBooking": {
    "DurationInMinutes": {},
    "Enabled": {}
  },
  "RequireCheckIn": {
    "ReleaseAfterMinutes": {},
    "Enabled": {}
  }
}
```

Meeting room settings of a room profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomUtilizationMetricsEnabled|object|false|none|none|
|EndOfMeetingReminder|object|false|none|none|
|InstantBooking|object|false|none|none|
|RequireCheckIn|object|false|none|none|

<h2 id="tocS_RequirePin">RequirePin</h2>
<!-- backwards compatibility -->
<a id="schemarequirepin"></a>
<a id="schema_RequirePin"></a>
<a id="tocSrequirepin"></a>
<a id="tocsrequirepin"></a>

```json
"YES"
```

<h2 id="tocS_NetworkProfileData">NetworkProfileData</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofiledata"></a>
<a id="schema_NetworkProfileData"></a>
<a id="tocSnetworkprofiledata"></a>
<a id="tocsnetworkprofiledata"></a>

```json
{
  "NetworkProfileArn": {},
  "NetworkProfileName": {},
  "Description": {},
  "Ssid": {},
  "SecurityType": {},
  "EapMethod": {},
  "CertificateAuthorityArn": {}
}
```

The data associated with a network profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NetworkProfileArn|object|false|none|none|
|NetworkProfileName|object|false|none|none|
|Description|object|false|none|none|
|Ssid|object|false|none|none|
|SecurityType|object|false|none|none|
|EapMethod|object|false|none|none|
|CertificateAuthorityArn|object|false|none|none|

<h2 id="tocS_NetworkProfileDataList">NetworkProfileDataList</h2>
<!-- backwards compatibility -->
<a id="schemanetworkprofiledatalist"></a>
<a id="schema_NetworkProfileDataList"></a>
<a id="tocSnetworkprofiledatalist"></a>
<a id="tocsnetworkprofiledatalist"></a>

```json
[
  {
    "NetworkProfileArn": {},
    "NetworkProfileName": {},
    "Description": {},
    "Ssid": {},
    "SecurityType": {},
    "EapMethod": {},
    "CertificateAuthorityArn": {}
  }
]
```

<h2 id="tocS_NewInThisVersionBulletPoints">NewInThisVersionBulletPoints</h2>
<!-- backwards compatibility -->
<a id="schemanewinthisversionbulletpoints"></a>
<a id="schema_NewInThisVersionBulletPoints"></a>
<a id="tocSnewinthisversionbulletpoints"></a>
<a id="tocsnewinthisversionbulletpoints"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OneClickIdDelay">OneClickIdDelay</h2>
<!-- backwards compatibility -->
<a id="schemaoneclickiddelay"></a>
<a id="schema_OneClickIdDelay"></a>
<a id="tocSoneclickiddelay"></a>
<a id="tocsoneclickiddelay"></a>

```json
"st"
```

<h2 id="tocS_OneClickPinDelay">OneClickPinDelay</h2>
<!-- backwards compatibility -->
<a id="schemaoneclickpindelay"></a>
<a id="schema_OneClickPinDelay"></a>
<a id="tocSoneclickpindelay"></a>
<a id="tocsoneclickpindelay"></a>

```json
"st"
```

<h2 id="tocS_OutboundPhoneNumber">OutboundPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundphonenumber"></a>
<a id="schema_OutboundPhoneNumber"></a>
<a id="tocSoutboundphonenumber"></a>
<a id="tocsoutboundphonenumber"></a>

```json
"string"
```

<h2 id="tocS_PhoneNumberType">PhoneNumberType</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbertype"></a>
<a id="schema_PhoneNumberType"></a>
<a id="tocSphonenumbertype"></a>
<a id="tocsphonenumbertype"></a>

```json
"MOBILE"
```

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "Number": {},
  "Type": {}
}
```

The phone number for the contact containing the raw number and phone number type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Number|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ProductDescription">ProductDescription</h2>
<!-- backwards compatibility -->
<a id="schemaproductdescription"></a>
<a id="schema_ProductDescription"></a>
<a id="tocSproductdescription"></a>
<a id="tocsproductdescription"></a>

```json
"string"
```

<h2 id="tocS_ProductId">ProductId</h2>
<!-- backwards compatibility -->
<a id="schemaproductid"></a>
<a id="schema_ProductId"></a>
<a id="tocSproductid"></a>
<a id="tocsproductid"></a>

```json
"string"
```

<h2 id="tocS_ProfileData">ProfileData</h2>
<!-- backwards compatibility -->
<a id="schemaprofiledata"></a>
<a id="schema_ProfileData"></a>
<a id="tocSprofiledata"></a>
<a id="tocsprofiledata"></a>

```json
{
  "ProfileArn": {},
  "ProfileName": {},
  "IsDefault": {},
  "Address": {},
  "Timezone": {},
  "DistanceUnit": {},
  "TemperatureUnit": {},
  "WakeWord": {},
  "Locale": {}
}
```

The data of a room profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProfileArn|object|false|none|none|
|ProfileName|object|false|none|none|
|IsDefault|object|false|none|none|
|Address|object|false|none|none|
|Timezone|object|false|none|none|
|DistanceUnit|object|false|none|none|
|TemperatureUnit|object|false|none|none|
|WakeWord|object|false|none|none|
|Locale|object|false|none|none|

<h2 id="tocS_ProfileDataList">ProfileDataList</h2>
<!-- backwards compatibility -->
<a id="schemaprofiledatalist"></a>
<a id="schema_ProfileDataList"></a>
<a id="tocSprofiledatalist"></a>
<a id="tocsprofiledatalist"></a>

```json
[
  {
    "ProfileArn": {},
    "ProfileName": {},
    "IsDefault": {},
    "Address": {},
    "Timezone": {},
    "DistanceUnit": {},
    "TemperatureUnit": {},
    "WakeWord": {},
    "Locale": {}
  }
]
```

<h2 id="tocS_UserCode">UserCode</h2>
<!-- backwards compatibility -->
<a id="schemausercode"></a>
<a id="schema_UserCode"></a>
<a id="tocSusercode"></a>
<a id="tocsusercode"></a>

```json
"string"
```

<h2 id="tocS_ReleaseDate">ReleaseDate</h2>
<!-- backwards compatibility -->
<a id="schemareleasedate"></a>
<a id="schema_ReleaseDate"></a>
<a id="tocSreleasedate"></a>
<a id="tocsreleasedate"></a>

```json
"string"
```

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_RoomSkillParameters">RoomSkillParameters</h2>
<!-- backwards compatibility -->
<a id="schemaroomskillparameters"></a>
<a id="schema_RoomSkillParameters"></a>
<a id="tocSroomskillparameters"></a>
<a id="tocsroomskillparameters"></a>

```json
[
  {
    "ParameterKey": {},
    "ParameterValue": {}
  }
]
```

<h2 id="tocS_ReviewKey">ReviewKey</h2>
<!-- backwards compatibility -->
<a id="schemareviewkey"></a>
<a id="schema_ReviewKey"></a>
<a id="tocSreviewkey"></a>
<a id="tocsreviewkey"></a>

```json
"string"
```

<h2 id="tocS_ReviewValue">ReviewValue</h2>
<!-- backwards compatibility -->
<a id="schemareviewvalue"></a>
<a id="schema_ReviewValue"></a>
<a id="tocSreviewvalue"></a>
<a id="tocsreviewvalue"></a>

```json
"string"
```

<h2 id="tocS_Reviews">Reviews</h2>
<!-- backwards compatibility -->
<a id="schemareviews"></a>
<a id="schema_Reviews"></a>
<a id="tocSreviews"></a>
<a id="tocsreviews"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ReviewValue](#schemareviewvalue)|false|none|none|

<h2 id="tocS_RoomData">RoomData</h2>
<!-- backwards compatibility -->
<a id="schemaroomdata"></a>
<a id="schema_RoomData"></a>
<a id="tocSroomdata"></a>
<a id="tocsroomdata"></a>

```json
{
  "RoomArn": {},
  "RoomName": {},
  "Description": {},
  "ProviderCalendarId": {},
  "ProfileArn": {},
  "ProfileName": {}
}
```

The data of a room.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomArn|object|false|none|none|
|RoomName|object|false|none|none|
|Description|object|false|none|none|
|ProviderCalendarId|object|false|none|none|
|ProfileArn|object|false|none|none|
|ProfileName|object|false|none|none|

<h2 id="tocS_RoomDataList">RoomDataList</h2>
<!-- backwards compatibility -->
<a id="schemaroomdatalist"></a>
<a id="schema_RoomDataList"></a>
<a id="tocSroomdatalist"></a>
<a id="tocsroomdatalist"></a>

```json
[
  {
    "RoomArn": {},
    "RoomName": {},
    "Description": {},
    "ProviderCalendarId": {},
    "ProfileArn": {},
    "ProfileName": {}
  }
]
```

<h2 id="tocS_RoomSkillParameterValue">RoomSkillParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaroomskillparametervalue"></a>
<a id="schema_RoomSkillParameterValue"></a>
<a id="tocSroomskillparametervalue"></a>
<a id="tocsroomskillparametervalue"></a>

```json
"string"
```

<h2 id="tocS_Utterance">Utterance</h2>
<!-- backwards compatibility -->
<a id="schemautterance"></a>
<a id="schema_Utterance"></a>
<a id="tocSutterance"></a>
<a id="tocsutterance"></a>

```json
"string"
```

<h2 id="tocS_SampleUtterances">SampleUtterances</h2>
<!-- backwards compatibility -->
<a id="schemasampleutterances"></a>
<a id="schema_SampleUtterances"></a>
<a id="tocSsampleutterances"></a>
<a id="tocssampleutterances"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SortList">SortList</h2>
<!-- backwards compatibility -->
<a id="schemasortlist"></a>
<a id="schema_SortList"></a>
<a id="tocSsortlist"></a>
<a id="tocssortlist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TotalCount">TotalCount</h2>
<!-- backwards compatibility -->
<a id="schematotalcount"></a>
<a id="schema_TotalCount"></a>
<a id="tocStotalcount"></a>
<a id="tocstotalcount"></a>

```json
0
```

<h2 id="tocS_SkillGroupDataList">SkillGroupDataList</h2>
<!-- backwards compatibility -->
<a id="schemaskillgroupdatalist"></a>
<a id="schema_SkillGroupDataList"></a>
<a id="tocSskillgroupdatalist"></a>
<a id="tocsskillgroupdatalist"></a>

```json
[
  {
    "SkillGroupArn": {},
    "SkillGroupName": {},
    "Description": {}
  }
]
```

<h2 id="tocS_UserDataList">UserDataList</h2>
<!-- backwards compatibility -->
<a id="schemauserdatalist"></a>
<a id="schema_UserDataList"></a>
<a id="tocSuserdatalist"></a>
<a id="tocsuserdatalist"></a>

```json
[
  {
    "UserArn": {},
    "FirstName": {},
    "LastName": {},
    "Email": {},
    "EnrollmentStatus": {},
    "EnrollmentId": {}
  }
]
```

<h2 id="tocS_TimeToLiveInSeconds">TimeToLiveInSeconds</h2>
<!-- backwards compatibility -->
<a id="schematimetoliveinseconds"></a>
<a id="schema_TimeToLiveInSeconds"></a>
<a id="tocStimetoliveinseconds"></a>
<a id="tocstimetoliveinseconds"></a>

```json
1
```

<h2 id="tocS_ShortDescription">ShortDescription</h2>
<!-- backwards compatibility -->
<a id="schemashortdescription"></a>
<a id="schema_ShortDescription"></a>
<a id="tocSshortdescription"></a>
<a id="tocsshortdescription"></a>

```json
"string"
```

<h2 id="tocS_SipUri">SipUri</h2>
<!-- backwards compatibility -->
<a id="schemasipuri"></a>
<a id="schema_SipUri"></a>
<a id="tocSsipuri"></a>
<a id="tocssipuri"></a>

```json
"password"
```

<h2 id="tocS_SipType">SipType</h2>
<!-- backwards compatibility -->
<a id="schemasiptype"></a>
<a id="schema_SipType"></a>
<a id="tocSsiptype"></a>
<a id="tocssiptype"></a>

```json
"WORK"
```

<h2 id="tocS_SipAddress">SipAddress</h2>
<!-- backwards compatibility -->
<a id="schemasipaddress"></a>
<a id="schema_SipAddress"></a>
<a id="tocSsipaddress"></a>
<a id="tocssipaddress"></a>

```json
{
  "Uri": {},
  "Type": {}
}
```

The SIP address for the contact containing the URI and SIP address type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Uri|object|true|none|none|
|Type|object|true|none|none|

<h2 id="tocS_SkillTypes">SkillTypes</h2>
<!-- backwards compatibility -->
<a id="schemaskilltypes"></a>
<a id="schema_SkillTypes"></a>
<a id="tocSskilltypes"></a>
<a id="tocsskilltypes"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SkillDetails">SkillDetails</h2>
<!-- backwards compatibility -->
<a id="schemaskilldetails"></a>
<a id="schema_SkillDetails"></a>
<a id="tocSskilldetails"></a>
<a id="tocsskilldetails"></a>

```json
{
  "ProductDescription": {},
  "InvocationPhrase": {},
  "ReleaseDate": {},
  "EndUserLicenseAgreement": {},
  "GenericKeywords": {},
  "BulletPoints": {},
  "NewInThisVersionBulletPoints": {},
  "SkillTypes": {},
  "Reviews": {
    "property1": "string",
    "property2": "string"
  },
  "DeveloperInfo": {
    "DeveloperName": {},
    "PrivacyPolicy": {},
    "Email": {},
    "Url": {}
  }
}
```

Granular information about the skill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductDescription|object|false|none|none|
|InvocationPhrase|object|false|none|none|
|ReleaseDate|object|false|none|none|
|EndUserLicenseAgreement|object|false|none|none|
|GenericKeywords|object|false|none|none|
|BulletPoints|object|false|none|none|
|NewInThisVersionBulletPoints|object|false|none|none|
|SkillTypes|object|false|none|none|
|Reviews|object|false|none|none|
|DeveloperInfo|object|false|none|none|

<h2 id="tocS_SkillGroupData">SkillGroupData</h2>
<!-- backwards compatibility -->
<a id="schemaskillgroupdata"></a>
<a id="schema_SkillGroupData"></a>
<a id="tocSskillgroupdata"></a>
<a id="tocsskillgroupdata"></a>

```json
{
  "SkillGroupArn": {},
  "SkillGroupName": {},
  "Description": {}
}
```

The attributes of a skill group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillGroupArn|object|false|none|none|
|SkillGroupName|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_SkillName">SkillName</h2>
<!-- backwards compatibility -->
<a id="schemaskillname"></a>
<a id="schema_SkillName"></a>
<a id="tocSskillname"></a>
<a id="tocsskillname"></a>

```json
"string"
```

<h2 id="tocS_SkillStoreType">SkillStoreType</h2>
<!-- backwards compatibility -->
<a id="schemaskillstoretype"></a>
<a id="schema_SkillStoreType"></a>
<a id="tocSskillstoretype"></a>
<a id="tocsskillstoretype"></a>

```json
"string"
```

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean-1"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean-1"></a>
<a id="tocsboolean-1"></a>

```json
true
```

<h2 id="tocS_SkillType">SkillType</h2>
<!-- backwards compatibility -->
<a id="schemaskilltype"></a>
<a id="schema_SkillType"></a>
<a id="tocSskilltype"></a>
<a id="tocsskilltype"></a>

```json
"PUBLIC"
```

<h2 id="tocS_SkillSummary">SkillSummary</h2>
<!-- backwards compatibility -->
<a id="schemaskillsummary"></a>
<a id="schema_SkillSummary"></a>
<a id="tocSskillsummary"></a>
<a id="tocsskillsummary"></a>

```json
{
  "SkillId": {},
  "SkillName": {},
  "SupportsLinking": {},
  "EnablementType": {},
  "SkillType": {}
}
```

The summary of skills.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|false|none|none|
|SkillName|object|false|none|none|
|SupportsLinking|object|false|none|none|
|EnablementType|object|false|none|none|
|SkillType|object|false|none|none|

<h2 id="tocS_SkillsStoreSkill">SkillsStoreSkill</h2>
<!-- backwards compatibility -->
<a id="schemaskillsstoreskill"></a>
<a id="schema_SkillsStoreSkill"></a>
<a id="tocSskillsstoreskill"></a>
<a id="tocsskillsstoreskill"></a>

```json
{
  "SkillId": {},
  "SkillName": {},
  "ShortDescription": {},
  "IconUrl": {},
  "SampleUtterances": {},
  "SkillDetails": {
    "ProductDescription": {},
    "InvocationPhrase": {},
    "ReleaseDate": {},
    "EndUserLicenseAgreement": {},
    "GenericKeywords": {},
    "BulletPoints": {},
    "NewInThisVersionBulletPoints": {},
    "SkillTypes": {},
    "Reviews": {
      "property1": "string",
      "property2": "string"
    },
    "DeveloperInfo": {
      "DeveloperName": {},
      "PrivacyPolicy": {},
      "Email": {},
      "Url": {}
    }
  },
  "SupportsLinking": {}
}
```

The detailed information about an Alexa skill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SkillId|object|false|none|none|
|SkillName|object|false|none|none|
|ShortDescription|object|false|none|none|
|IconUrl|object|false|none|none|
|SampleUtterances|object|false|none|none|
|SkillDetails|object|false|none|none|
|SupportsLinking|object|false|none|none|

<h2 id="tocS_SmartHomeAppliance">SmartHomeAppliance</h2>
<!-- backwards compatibility -->
<a id="schemasmarthomeappliance"></a>
<a id="schema_SmartHomeAppliance"></a>
<a id="tocSsmarthomeappliance"></a>
<a id="tocssmarthomeappliance"></a>

```json
{
  "FriendlyName": {},
  "Description": {},
  "ManufacturerName": {}
}
```

A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FriendlyName|object|false|none|none|
|Description|object|false|none|none|
|ManufacturerName|object|false|none|none|

<h2 id="tocS_SortKey">SortKey</h2>
<!-- backwards compatibility -->
<a id="schemasortkey"></a>
<a id="schema_SortKey"></a>
<a id="tocSsortkey"></a>
<a id="tocssortkey"></a>

```json
"string"
```

<h2 id="tocS_SortValue">SortValue</h2>
<!-- backwards compatibility -->
<a id="schemasortvalue"></a>
<a id="schema_SortValue"></a>
<a id="tocSsortvalue"></a>
<a id="tocssortvalue"></a>

```json
"ASC"
```

<h2 id="tocS_Sort">Sort</h2>
<!-- backwards compatibility -->
<a id="schemasort"></a>
<a id="schema_Sort"></a>
<a id="tocSsort"></a>
<a id="tocssort"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

An object representing a sort criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_SsmlValue">SsmlValue</h2>
<!-- backwards compatibility -->
<a id="schemassmlvalue"></a>
<a id="schema_SsmlValue"></a>
<a id="tocSssmlvalue"></a>
<a id="tocsssmlvalue"></a>

```json
"string"
```

<h2 id="tocS_Ssml">Ssml</h2>
<!-- backwards compatibility -->
<a id="schemassml"></a>
<a id="schema_Ssml"></a>
<a id="tocSssml"></a>
<a id="tocsssml"></a>

```json
{
  "Locale": {},
  "Value": {}
}
```

The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Locale|object|true|none|none|
|Value|object|true|none|none|

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

A key-value pair that can be associated with a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

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

<h2 id="tocS_TextValue">TextValue</h2>
<!-- backwards compatibility -->
<a id="schematextvalue"></a>
<a id="schema_TextValue"></a>
<a id="tocStextvalue"></a>
<a id="tocstextvalue"></a>

```json
"string"
```

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "Locale": {},
  "Value": {}
}
```

The text message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Locale|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TrustAnchor">TrustAnchor</h2>
<!-- backwards compatibility -->
<a id="schematrustanchor"></a>
<a id="schema_TrustAnchor"></a>
<a id="tocStrustanchor"></a>
<a id="tocstrustanchor"></a>

```json
"string"
```

<h2 id="tocS_UpdateEndOfMeetingReminder">UpdateEndOfMeetingReminder</h2>
<!-- backwards compatibility -->
<a id="schemaupdateendofmeetingreminder"></a>
<a id="schema_UpdateEndOfMeetingReminder"></a>
<a id="tocSupdateendofmeetingreminder"></a>
<a id="tocsupdateendofmeetingreminder"></a>

```json
{
  "ReminderAtMinutes": {},
  "ReminderType": {},
  "Enabled": {}
}
```

Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReminderAtMinutes|object|false|none|none|
|ReminderType|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateInstantBooking">UpdateInstantBooking</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstantbooking"></a>
<a id="schema_UpdateInstantBooking"></a>
<a id="tocSupdateinstantbooking"></a>
<a id="tocsupdateinstantbooking"></a>

```json
{
  "DurationInMinutes": {},
  "Enabled": {}
}
```

Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInMinutes|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateRequireCheckIn">UpdateRequireCheckIn</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterequirecheckin"></a>
<a id="schema_UpdateRequireCheckIn"></a>
<a id="tocSupdaterequirecheckin"></a>
<a id="tocsupdaterequirecheckin"></a>

```json
{
  "ReleaseAfterMinutes": {},
  "Enabled": {}
}
```

Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReleaseAfterMinutes|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_UpdateMeetingRoomConfiguration">UpdateMeetingRoomConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemeetingroomconfiguration"></a>
<a id="schema_UpdateMeetingRoomConfiguration"></a>
<a id="tocSupdatemeetingroomconfiguration"></a>
<a id="tocsupdatemeetingroomconfiguration"></a>

```json
{
  "RoomUtilizationMetricsEnabled": {},
  "EndOfMeetingReminder": {
    "ReminderAtMinutes": {},
    "ReminderType": {},
    "Enabled": {}
  },
  "InstantBooking": {
    "DurationInMinutes": {},
    "Enabled": {}
  },
  "RequireCheckIn": {
    "ReleaseAfterMinutes": {},
    "Enabled": {}
  }
}
```

Updates meeting room settings of a room profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoomUtilizationMetricsEnabled|object|false|none|none|
|EndOfMeetingReminder|object|false|none|none|
|InstantBooking|object|false|none|none|
|RequireCheckIn|object|false|none|none|

<h2 id="tocS_UserData">UserData</h2>
<!-- backwards compatibility -->
<a id="schemauserdata"></a>
<a id="schema_UserData"></a>
<a id="tocSuserdata"></a>
<a id="tocsuserdata"></a>

```json
{
  "UserArn": {},
  "FirstName": {},
  "LastName": {},
  "Email": {},
  "EnrollmentStatus": {},
  "EnrollmentId": {}
}
```

Information related to a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserArn|object|false|none|none|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|Email|object|false|none|none|
|EnrollmentStatus|object|false|none|none|
|EnrollmentId|object|false|none|none|
