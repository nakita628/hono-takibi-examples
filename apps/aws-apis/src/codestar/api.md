<h1 id="aws-codestar">AWS CodeStar v2017-04-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS CodeStar</fullname> <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the operations and data types for the AWS CodeStar API along with usage examples.</p> <p>You can use the AWS CodeStar API to work with:</p> <p>Projects and their resources, by calling the following:</p> <ul> <li> <p> <code>DeleteProject</code>, which deletes a project.</p> </li> <li> <p> <code>DescribeProject</code>, which lists the attributes of a project.</p> </li> <li> <p> <code>ListProjects</code>, which lists all projects associated with your AWS account.</p> </li> <li> <p> <code>ListResources</code>, which lists the resources associated with a project.</p> </li> <li> <p> <code>ListTagsForProject</code>, which lists the tags associated with a project.</p> </li> <li> <p> <code>TagProject</code>, which adds tags to a project.</p> </li> <li> <p> <code>UntagProject</code>, which removes tags from a project.</p> </li> <li> <p> <code>UpdateProject</code>, which updates the attributes of a project.</p> </li> </ul> <p>Teams and team members, by calling the following:</p> <ul> <li> <p> <code>AssociateTeamMember</code>, which adds an IAM user to the team for a project.</p> </li> <li> <p> <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a project.</p> </li> <li> <p> <code>ListTeamMembers</code>, which lists all the IAM users in the team for a project, including their roles and attributes.</p> </li> <li> <p> <code>UpdateTeamMember</code>, which updates a team member's attributes in a project.</p> </li> </ul> <p>Users, by calling the following:</p> <ul> <li> <p> <code>CreateUserProfile</code>, which creates a user profile that contains data associated with the user across all projects.</p> </li> <li> <p> <code>DeleteUserProfile</code>, which deletes all user profile information across all projects.</p> </li> <li> <p> <code>DescribeUserProfile</code>, which describes the profile of a user.</p> </li> <li> <p> <code>ListUserProfiles</code>, which lists all user profiles.</p> </li> <li> <p> <code>UpdateUserProfile</code>, which updates the profile for a user.</p> </li> </ul>

Base URLs:

* <a href="http://codestar.us-east-1.amazonaws.com">http://codestar.us-east-1.amazonaws.com</a> - The CodeStar multi-region endpoint

* <a href="https://codestar.us-east-1.amazonaws.com">https://codestar.us-east-1.amazonaws.com</a> - The CodeStar multi-region endpoint

* <a href="http://codestar.cn-north-1.amazonaws.com.cn">http://codestar.cn-north-1.amazonaws.com.cn</a> - The CodeStar endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codestar.cn-north-1.amazonaws.com.cn">https://codestar.cn-north-1.amazonaws.com.cn</a> - The CodeStar endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codestar/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codestar-default">Default</h1>

## AssociateTeamMember

<a id="opIdAssociateTeamMember"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.AssociateTeamMember' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.AssociateTeamMember' \
  -d '{
    "projectId": {},
    "clientRequestToken": {},
    "userArn": {},
    "projectRole": {},
    "remoteAccessAllowed": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.AssociateTeamMember`

Adds an IAM user to the team for an AWS CodeStar project.

> Body parameter

```json
{
  "projectId": {},
  "clientRequestToken": {},
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

<h3 id="associateteammember-parameters">Parameters</h3>

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
|body|body|[AssociateTeamMemberRequest](#schemaassociateteammemberrequest)|true|none|
|» projectId|body|object|true|none|
|» clientRequestToken|body|object|false|none|
|» userArn|body|object|true|none|
|» projectRole|body|object|true|none|
|» remoteAccessAllowed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.AssociateTeamMember|

> Example responses

> 200 Response

```json
{
  "clientRequestToken": {}
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

<h3 id="associateteammember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateTeamMemberResult](#schemaassociateteammemberresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|482|482|TeamMemberAlreadyAssociatedException|[TeamMemberAlreadyAssociatedException](#schemateammemberalreadyassociatedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|
|485|485|ProjectConfigurationException|[ProjectConfigurationException](#schemaprojectconfigurationexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProject

<a id="opIdCreateProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.CreateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.CreateProject' \
  -d '{
    "name": {},
    "id": {},
    "description": {},
    "clientRequestToken": {},
    "sourceCode": {},
    "toolchain": {
      "source": {
        "s3": {
          "bucketName": {},
          "bucketKey": {}
        }
      },
      "roleArn": {},
      "stackParameters": {
        "property1": "password",
        "property2": "password"
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.CreateProject`

Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.

> Body parameter

```json
{
  "name": {},
  "id": {},
  "description": {},
  "clientRequestToken": {},
  "sourceCode": {},
  "toolchain": {
    "source": {
      "s3": {
        "bucketName": {},
        "bucketKey": {}
      }
    },
    "roleArn": {},
    "stackParameters": {
      "property1": "password",
      "property2": "password"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createproject-parameters">Parameters</h3>

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
|body|body|[CreateProjectRequest](#schemacreateprojectrequest)|true|none|
|» name|body|object|true|none|
|» id|body|object|true|none|
|» description|body|object|false|none|
|» clientRequestToken|body|object|false|none|
|» sourceCode|body|object|false|none|
|» toolchain|body|object|false|none|
|» » source|body|object|true|none|
|» » » s3|body|object|true|none|
|» » » » bucketName|body|object|false|none|
|» » » » bucketKey|body|object|false|none|
|» » roleArn|body|object|false|none|
|» » stackParameters|body|object|false|none|
|» » » **additionalProperties**|body|[TemplateParameterValue](#schematemplateparametervalue)|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.CreateProject|

> Example responses

> 200 Response

```json
{
  "id": {},
  "arn": {},
  "clientRequestToken": {},
  "projectTemplateId": {}
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

<h3 id="createproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProjectResult](#schemacreateprojectresult)|
|480|480|ProjectAlreadyExistsException|[ProjectAlreadyExistsException](#schemaprojectalreadyexistsexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ProjectCreationFailedException|[ProjectCreationFailedException](#schemaprojectcreationfailedexception)|
|484|484|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|
|485|485|ProjectConfigurationException|[ProjectConfigurationException](#schemaprojectconfigurationexception)|
|486|486|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUserProfile

<a id="opIdCreateUserProfile"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.CreateUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.CreateUserProfile' \
  -d '{
    "userArn": {},
    "displayName": {},
    "emailAddress": {},
    "sshPublicKey": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.CreateUserProfile`

Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.

> Body parameter

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {}
}
```

<h3 id="createuserprofile-parameters">Parameters</h3>

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
|body|body|[CreateUserProfileRequest](#schemacreateuserprofilerequest)|true|none|
|» userArn|body|object|true|none|
|» displayName|body|object|true|none|
|» emailAddress|body|object|true|none|
|» sshPublicKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.CreateUserProfile|

> Example responses

> 200 Response

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
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

<h3 id="createuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUserProfileResult](#schemacreateuserprofileresult)|
|480|480|UserProfileAlreadyExistsException|[UserProfileAlreadyExistsException](#schemauserprofilealreadyexistsexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProject

<a id="opIdDeleteProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.DeleteProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.DeleteProject' \
  -d '{
    "id": {},
    "clientRequestToken": {},
    "deleteStack": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.DeleteProject`

Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.

> Body parameter

```json
{
  "id": {},
  "clientRequestToken": {},
  "deleteStack": {}
}
```

<h3 id="deleteproject-parameters">Parameters</h3>

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
|body|body|[DeleteProjectRequest](#schemadeleteprojectrequest)|true|none|
|» id|body|object|true|none|
|» clientRequestToken|body|object|false|none|
|» deleteStack|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.DeleteProject|

> Example responses

> 200 Response

```json
{
  "stackId": {},
  "projectArn": {}
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

<h3 id="deleteproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProjectResult](#schemadeleteprojectresult)|
|480|480|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteUserProfile

<a id="opIdDeleteUserProfile"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.DeleteUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.DeleteUserProfile' \
  -d '{
    "userArn": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.DeleteUserProfile`

Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.

> Body parameter

```json
{
  "userArn": {}
}
```

<h3 id="deleteuserprofile-parameters">Parameters</h3>

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
|body|body|[DeleteUserProfileRequest](#schemadeleteuserprofilerequest)|true|none|
|» userArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.DeleteUserProfile|

> Example responses

> 200 Response

```json
{
  "userArn": {}
}
```

> 480 Response

```json
null
```

<h3 id="deleteuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteUserProfileResult](#schemadeleteuserprofileresult)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProject

<a id="opIdDescribeProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.DescribeProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.DescribeProject' \
  -d '{
    "id": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.DescribeProject`

Describes a project and its resources.

> Body parameter

```json
{
  "id": {}
}
```

<h3 id="describeproject-parameters">Parameters</h3>

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
|body|body|[DescribeProjectRequest](#schemadescribeprojectrequest)|true|none|
|» id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.DescribeProject|

> Example responses

> 200 Response

```json
{
  "name": {},
  "id": {},
  "arn": {},
  "description": {},
  "clientRequestToken": {},
  "createdTimeStamp": {},
  "stackId": {},
  "projectTemplateId": {},
  "status": {
    "state": {},
    "reason": {}
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

<h3 id="describeproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProjectResult](#schemadescribeprojectresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|
|483|483|ProjectConfigurationException|[ProjectConfigurationException](#schemaprojectconfigurationexception)|
|484|484|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeUserProfile

<a id="opIdDescribeUserProfile"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.DescribeUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.DescribeUserProfile' \
  -d '{
    "userArn": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.DescribeUserProfile`

Describes a user in AWS CodeStar and the user attributes across all projects.

> Body parameter

```json
{
  "userArn": {}
}
```

<h3 id="describeuserprofile-parameters">Parameters</h3>

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
|body|body|[DescribeUserProfileRequest](#schemadescribeuserprofilerequest)|true|none|
|» userArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.DescribeUserProfile|

> Example responses

> 200 Response

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
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

<h3 id="describeuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeUserProfileResult](#schemadescribeuserprofileresult)|
|480|480|UserProfileNotFoundException|[UserProfileNotFoundException](#schemauserprofilenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateTeamMember

<a id="opIdDisassociateTeamMember"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.DisassociateTeamMember' \
  -d '{
    "projectId": {},
    "userArn": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember`

Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.

> Body parameter

```json
{
  "projectId": {},
  "userArn": {}
}
```

<h3 id="disassociateteammember-parameters">Parameters</h3>

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
|body|body|[DisassociateTeamMemberRequest](#schemadisassociateteammemberrequest)|true|none|
|» projectId|body|object|true|none|
|» userArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.DisassociateTeamMember|

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

<h3 id="disassociateteammember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateTeamMemberResult](#schemadisassociateteammemberresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProjects

<a id="opIdListProjects"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.ListProjects' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.ListProjects' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.ListProjects`

Lists all projects in AWS CodeStar associated with your AWS account.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listprojects-parameters">Parameters</h3>

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
|body|body|[ListProjectsRequest](#schemalistprojectsrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.ListProjects|

> Example responses

> 200 Response

```json
{
  "projects": {},
  "nextToken": {}
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

<h3 id="listprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProjectsResult](#schemalistprojectsresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResources

<a id="opIdListResources"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.ListResources' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.ListResources' \
  -d '{
    "projectId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.ListResources`

Lists resources associated with a project in AWS CodeStar.

> Body parameter

```json
{
  "projectId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listresources-parameters">Parameters</h3>

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
|body|body|[ListResourcesRequest](#schemalistresourcesrequest)|true|none|
|» projectId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.ListResources|

> Example responses

> 200 Response

```json
{
  "resources": {},
  "nextToken": {}
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

<h3 id="listresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesResult](#schemalistresourcesresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForProject

<a id="opIdListTagsForProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.ListTagsForProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.ListTagsForProject' \
  -d '{
    "id": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.ListTagsForProject`

Gets the tags for a project.

> Body parameter

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listtagsforproject-parameters">Parameters</h3>

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
|body|body|[ListTagsForProjectRequest](#schemalisttagsforprojectrequest)|true|none|
|» id|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.ListTagsForProject|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "nextToken": {}
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

<h3 id="listtagsforproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForProjectResult](#schemalisttagsforprojectresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTeamMembers

<a id="opIdListTeamMembers"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.ListTeamMembers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.ListTeamMembers' \
  -d '{
    "projectId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.ListTeamMembers`

Lists all team members associated with a project.

> Body parameter

```json
{
  "projectId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listteammembers-parameters">Parameters</h3>

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
|body|body|[ListTeamMembersRequest](#schemalistteammembersrequest)|true|none|
|» projectId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.ListTeamMembers|

> Example responses

> 200 Response

```json
{
  "teamMembers": {},
  "nextToken": {}
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

<h3 id="listteammembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTeamMembersResult](#schemalistteammembersresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUserProfiles

<a id="opIdListUserProfiles"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.ListUserProfiles' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.ListUserProfiles' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.ListUserProfiles`

Lists all the user profiles configured for your AWS account in AWS CodeStar.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listuserprofiles-parameters">Parameters</h3>

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
|body|body|[ListUserProfilesRequest](#schemalistuserprofilesrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.ListUserProfiles|

> Example responses

> 200 Response

```json
{
  "userProfiles": {},
  "nextToken": {}
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

<h3 id="listuserprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUserProfilesResult](#schemalistuserprofilesresult)|
|480|480|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagProject

<a id="opIdTagProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.TagProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.TagProject' \
  -d '{
    "id": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.TagProject`

Adds tags to a project.

> Body parameter

```json
{
  "id": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagproject-parameters">Parameters</h3>

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
|body|body|[TagProjectRequest](#schematagprojectrequest)|true|none|
|» id|body|object|true|none|
|» tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.TagProject|

> Example responses

> 200 Response

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="tagproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagProjectResult](#schematagprojectresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagProject

<a id="opIdUntagProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.UntagProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.UntagProject' \
  -d '{
    "id": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.UntagProject`

Removes tags from a project.

> Body parameter

```json
{
  "id": {},
  "tags": {}
}
```

<h3 id="untagproject-parameters">Parameters</h3>

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
|body|body|[UntagProjectRequest](#schemauntagprojectrequest)|true|none|
|» id|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.UntagProject|

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

<h3 id="untagproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagProjectResult](#schemauntagprojectresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProject

<a id="opIdUpdateProject"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.UpdateProject' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.UpdateProject' \
  -d '{
    "id": {},
    "name": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.UpdateProject`

Updates a project in AWS CodeStar.

> Body parameter

```json
{
  "id": {},
  "name": {},
  "description": {}
}
```

<h3 id="updateproject-parameters">Parameters</h3>

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
|body|body|[UpdateProjectRequest](#schemaupdateprojectrequest)|true|none|
|» id|body|object|true|none|
|» name|body|object|false|none|
|» description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.UpdateProject|

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

<h3 id="updateproject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProjectResult](#schemaupdateprojectresult)|
|480|480|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTeamMember

<a id="opIdUpdateTeamMember"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.UpdateTeamMember' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.UpdateTeamMember' \
  -d '{
    "projectId": {},
    "userArn": {},
    "projectRole": {},
    "remoteAccessAllowed": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.UpdateTeamMember`

Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.

> Body parameter

```json
{
  "projectId": {},
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

<h3 id="updateteammember-parameters">Parameters</h3>

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
|body|body|[UpdateTeamMemberRequest](#schemaupdateteammemberrequest)|true|none|
|» projectId|body|object|true|none|
|» userArn|body|object|true|none|
|» projectRole|body|object|false|none|
|» remoteAccessAllowed|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.UpdateTeamMember|

> Example responses

> 200 Response

```json
{
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
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

<h3 id="updateteammember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTeamMemberResult](#schemaupdateteammemberresult)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|ProjectNotFoundException|[ProjectNotFoundException](#schemaprojectnotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InvalidServiceRoleException|[InvalidServiceRoleException](#schemainvalidserviceroleexception)|
|484|484|ProjectConfigurationException|[ProjectConfigurationException](#schemaprojectconfigurationexception)|
|485|485|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|
|486|486|TeamMemberNotFoundException|[TeamMemberNotFoundException](#schemateammembernotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateUserProfile

<a id="opIdUpdateUserProfile"></a>

> Code samples

```bash
curl 'https://codestar.us-east-1.amazonaws.com/#X-Amz-Target=CodeStar_20170419.UpdateUserProfile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeStar_20170419.UpdateUserProfile' \
  -d '{
    "userArn": {},
    "displayName": {},
    "emailAddress": {},
    "sshPublicKey": {}
  }'
```

`POST /#X-Amz-Target=CodeStar_20170419.UpdateUserProfile`

Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 

> Body parameter

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {}
}
```

<h3 id="updateuserprofile-parameters">Parameters</h3>

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
|body|body|[UpdateUserProfileRequest](#schemaupdateuserprofilerequest)|true|none|
|» userArn|body|object|true|none|
|» displayName|body|object|false|none|
|» emailAddress|body|object|false|none|
|» sshPublicKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeStar_20170419.UpdateUserProfile|

> Example responses

> 200 Response

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
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

<h3 id="updateuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateUserProfileResult](#schemaupdateuserprofileresult)|
|480|480|UserProfileNotFoundException|[UserProfileNotFoundException](#schemauserprofilenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateTeamMemberResult">AssociateTeamMemberResult</h2>
<!-- backwards compatibility -->
<a id="schemaassociateteammemberresult"></a>
<a id="schema_AssociateTeamMemberResult"></a>
<a id="tocSassociateteammemberresult"></a>
<a id="tocsassociateteammemberresult"></a>

```json
{
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_AssociateTeamMemberRequest">AssociateTeamMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateteammemberrequest"></a>
<a id="schema_AssociateTeamMemberRequest"></a>
<a id="tocSassociateteammemberrequest"></a>
<a id="tocsassociateteammemberrequest"></a>

```json
{
  "projectId": {},
  "clientRequestToken": {},
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|clientRequestToken|object|false|none|none|
|userArn|object|true|none|none|
|projectRole|object|true|none|none|
|remoteAccessAllowed|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ProjectNotFoundException">ProjectNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaprojectnotfoundexception"></a>
<a id="schema_ProjectNotFoundException"></a>
<a id="tocSprojectnotfoundexception"></a>
<a id="tocsprojectnotfoundexception"></a>

```json
null
```

<h2 id="tocS_TeamMemberAlreadyAssociatedException">TeamMemberAlreadyAssociatedException</h2>
<!-- backwards compatibility -->
<a id="schemateammemberalreadyassociatedexception"></a>
<a id="schema_TeamMemberAlreadyAssociatedException"></a>
<a id="tocSteammemberalreadyassociatedexception"></a>
<a id="tocsteammemberalreadyassociatedexception"></a>

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

<h2 id="tocS_InvalidServiceRoleException">InvalidServiceRoleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidserviceroleexception"></a>
<a id="schema_InvalidServiceRoleException"></a>
<a id="tocSinvalidserviceroleexception"></a>
<a id="tocsinvalidserviceroleexception"></a>

```json
null
```

<h2 id="tocS_ProjectConfigurationException">ProjectConfigurationException</h2>
<!-- backwards compatibility -->
<a id="schemaprojectconfigurationexception"></a>
<a id="schema_ProjectConfigurationException"></a>
<a id="tocSprojectconfigurationexception"></a>
<a id="tocsprojectconfigurationexception"></a>

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

<h2 id="tocS_CreateProjectResult">CreateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresult"></a>
<a id="schema_CreateProjectResult"></a>
<a id="tocScreateprojectresult"></a>
<a id="tocscreateprojectresult"></a>

```json
{
  "id": {},
  "arn": {},
  "clientRequestToken": {},
  "projectTemplateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|arn|object|true|none|none|
|clientRequestToken|object|false|none|none|
|projectTemplateId|object|false|none|none|

<h2 id="tocS_CreateProjectRequest">CreateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequest"></a>
<a id="schema_CreateProjectRequest"></a>
<a id="tocScreateprojectrequest"></a>
<a id="tocscreateprojectrequest"></a>

```json
{
  "name": {},
  "id": {},
  "description": {},
  "clientRequestToken": {},
  "sourceCode": {},
  "toolchain": {
    "source": {
      "s3": {
        "bucketName": {},
        "bucketKey": {}
      }
    },
    "roleArn": {},
    "stackParameters": {
      "property1": "password",
      "property2": "password"
    }
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|id|object|true|none|none|
|description|object|false|none|none|
|clientRequestToken|object|false|none|none|
|sourceCode|object|false|none|none|
|toolchain|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ProjectAlreadyExistsException">ProjectAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaprojectalreadyexistsexception"></a>
<a id="schema_ProjectAlreadyExistsException"></a>
<a id="tocSprojectalreadyexistsexception"></a>
<a id="tocsprojectalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ProjectCreationFailedException">ProjectCreationFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreationfailedexception"></a>
<a id="schema_ProjectCreationFailedException"></a>
<a id="tocSprojectcreationfailedexception"></a>
<a id="tocsprojectcreationfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateUserProfileResult">CreateUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserprofileresult"></a>
<a id="schema_CreateUserProfileResult"></a>
<a id="tocScreateuserprofileresult"></a>
<a id="tocscreateuserprofileresult"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|displayName|object|false|none|none|
|emailAddress|object|false|none|none|
|sshPublicKey|object|false|none|none|
|createdTimestamp|object|false|none|none|
|lastModifiedTimestamp|object|false|none|none|

<h2 id="tocS_CreateUserProfileRequest">CreateUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserprofilerequest"></a>
<a id="schema_CreateUserProfileRequest"></a>
<a id="tocScreateuserprofilerequest"></a>
<a id="tocscreateuserprofilerequest"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|displayName|object|true|none|none|
|emailAddress|object|true|none|none|
|sshPublicKey|object|false|none|none|

<h2 id="tocS_UserProfileAlreadyExistsException">UserProfileAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilealreadyexistsexception"></a>
<a id="schema_UserProfileAlreadyExistsException"></a>
<a id="tocSuserprofilealreadyexistsexception"></a>
<a id="tocsuserprofilealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DeleteProjectResult">DeleteProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectresult"></a>
<a id="schema_DeleteProjectResult"></a>
<a id="tocSdeleteprojectresult"></a>
<a id="tocsdeleteprojectresult"></a>

```json
{
  "stackId": {},
  "projectArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stackId|object|false|none|none|
|projectArn|object|false|none|none|

<h2 id="tocS_DeleteProjectRequest">DeleteProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprojectrequest"></a>
<a id="schema_DeleteProjectRequest"></a>
<a id="tocSdeleteprojectrequest"></a>
<a id="tocsdeleteprojectrequest"></a>

```json
{
  "id": {},
  "clientRequestToken": {},
  "deleteStack": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|clientRequestToken|object|false|none|none|
|deleteStack|object|false|none|none|

<h2 id="tocS_DeleteUserProfileResult">DeleteUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserprofileresult"></a>
<a id="schema_DeleteUserProfileResult"></a>
<a id="tocSdeleteuserprofileresult"></a>
<a id="tocsdeleteuserprofileresult"></a>

```json
{
  "userArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|

<h2 id="tocS_DeleteUserProfileRequest">DeleteUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuserprofilerequest"></a>
<a id="schema_DeleteUserProfileRequest"></a>
<a id="tocSdeleteuserprofilerequest"></a>
<a id="tocsdeleteuserprofilerequest"></a>

```json
{
  "userArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|

<h2 id="tocS_DescribeProjectResult">DescribeProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectresult"></a>
<a id="schema_DescribeProjectResult"></a>
<a id="tocSdescribeprojectresult"></a>
<a id="tocsdescribeprojectresult"></a>

```json
{
  "name": {},
  "id": {},
  "arn": {},
  "description": {},
  "clientRequestToken": {},
  "createdTimeStamp": {},
  "stackId": {},
  "projectTemplateId": {},
  "status": {
    "state": {},
    "reason": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|id|object|false|none|none|
|arn|object|false|none|none|
|description|object|false|none|none|
|clientRequestToken|object|false|none|none|
|createdTimeStamp|object|false|none|none|
|stackId|object|false|none|none|
|projectTemplateId|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_DescribeProjectRequest">DescribeProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprojectrequest"></a>
<a id="schema_DescribeProjectRequest"></a>
<a id="tocSdescribeprojectrequest"></a>
<a id="tocsdescribeprojectrequest"></a>

```json
{
  "id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_DescribeUserProfileResult">DescribeUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserprofileresult"></a>
<a id="schema_DescribeUserProfileResult"></a>
<a id="tocSdescribeuserprofileresult"></a>
<a id="tocsdescribeuserprofileresult"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|displayName|object|false|none|none|
|emailAddress|object|false|none|none|
|sshPublicKey|object|false|none|none|
|createdTimestamp|object|true|none|none|
|lastModifiedTimestamp|object|true|none|none|

<h2 id="tocS_DescribeUserProfileRequest">DescribeUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeuserprofilerequest"></a>
<a id="schema_DescribeUserProfileRequest"></a>
<a id="tocSdescribeuserprofilerequest"></a>
<a id="tocsdescribeuserprofilerequest"></a>

```json
{
  "userArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|

<h2 id="tocS_UserProfileNotFoundException">UserProfileNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilenotfoundexception"></a>
<a id="schema_UserProfileNotFoundException"></a>
<a id="tocSuserprofilenotfoundexception"></a>
<a id="tocsuserprofilenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DisassociateTeamMemberResult">DisassociateTeamMemberResult</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateteammemberresult"></a>
<a id="schema_DisassociateTeamMemberResult"></a>
<a id="tocSdisassociateteammemberresult"></a>
<a id="tocsdisassociateteammemberresult"></a>

```json
{}
```

<h2 id="tocS_DisassociateTeamMemberRequest">DisassociateTeamMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateteammemberrequest"></a>
<a id="schema_DisassociateTeamMemberRequest"></a>
<a id="tocSdisassociateteammemberrequest"></a>
<a id="tocsdisassociateteammemberrequest"></a>

```json
{
  "projectId": {},
  "userArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|userArn|object|true|none|none|

<h2 id="tocS_ListProjectsResult">ListProjectsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsresult"></a>
<a id="schema_ListProjectsResult"></a>
<a id="tocSlistprojectsresult"></a>
<a id="tocslistprojectsresult"></a>

```json
{
  "projects": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListProjectsRequest">ListProjectsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectsrequest"></a>
<a id="schema_ListProjectsRequest"></a>
<a id="tocSlistprojectsrequest"></a>
<a id="tocslistprojectsrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListResourcesResult">ListResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesresult"></a>
<a id="schema_ListResourcesResult"></a>
<a id="tocSlistresourcesresult"></a>
<a id="tocslistresourcesresult"></a>

```json
{
  "resources": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListResourcesRequest">ListResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesrequest"></a>
<a id="schema_ListResourcesRequest"></a>
<a id="tocSlistresourcesrequest"></a>
<a id="tocslistresourcesrequest"></a>

```json
{
  "projectId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForProjectResult">ListTagsForProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforprojectresult"></a>
<a id="schema_ListTagsForProjectResult"></a>
<a id="tocSlisttagsforprojectresult"></a>
<a id="tocslisttagsforprojectresult"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForProjectRequest">ListTagsForProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforprojectrequest"></a>
<a id="schema_ListTagsForProjectRequest"></a>
<a id="tocSlisttagsforprojectrequest"></a>
<a id="tocslisttagsforprojectrequest"></a>

```json
{
  "id": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTeamMembersResult">ListTeamMembersResult</h2>
<!-- backwards compatibility -->
<a id="schemalistteammembersresult"></a>
<a id="schema_ListTeamMembersResult"></a>
<a id="tocSlistteammembersresult"></a>
<a id="tocslistteammembersresult"></a>

```json
{
  "teamMembers": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamMembers|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTeamMembersRequest">ListTeamMembersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistteammembersrequest"></a>
<a id="schema_ListTeamMembersRequest"></a>
<a id="tocSlistteammembersrequest"></a>
<a id="tocslistteammembersrequest"></a>

```json
{
  "projectId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListUserProfilesResult">ListUserProfilesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistuserprofilesresult"></a>
<a id="schema_ListUserProfilesResult"></a>
<a id="tocSlistuserprofilesresult"></a>
<a id="tocslistuserprofilesresult"></a>

```json
{
  "userProfiles": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userProfiles|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListUserProfilesRequest">ListUserProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistuserprofilesrequest"></a>
<a id="schema_ListUserProfilesRequest"></a>
<a id="tocSlistuserprofilesrequest"></a>
<a id="tocslistuserprofilesrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_TagProjectResult">TagProjectResult</h2>
<!-- backwards compatibility -->
<a id="schematagprojectresult"></a>
<a id="schema_TagProjectResult"></a>
<a id="tocStagprojectresult"></a>
<a id="tocstagprojectresult"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_TagProjectRequest">TagProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schematagprojectrequest"></a>
<a id="schema_TagProjectRequest"></a>
<a id="tocStagprojectrequest"></a>
<a id="tocstagprojectrequest"></a>

```json
{
  "id": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UntagProjectResult">UntagProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemauntagprojectresult"></a>
<a id="schema_UntagProjectResult"></a>
<a id="tocSuntagprojectresult"></a>
<a id="tocsuntagprojectresult"></a>

```json
{}
```

<h2 id="tocS_UntagProjectRequest">UntagProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagprojectrequest"></a>
<a id="schema_UntagProjectRequest"></a>
<a id="tocSuntagprojectrequest"></a>
<a id="tocsuntagprojectrequest"></a>

```json
{
  "id": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_UpdateProjectResult">UpdateProjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresult"></a>
<a id="schema_UpdateProjectResult"></a>
<a id="tocSupdateprojectresult"></a>
<a id="tocsupdateprojectresult"></a>

```json
{}
```

<h2 id="tocS_UpdateProjectRequest">UpdateProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequest"></a>
<a id="schema_UpdateProjectRequest"></a>
<a id="tocSupdateprojectrequest"></a>
<a id="tocsupdateprojectrequest"></a>

```json
{
  "id": {},
  "name": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|
|name|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_UpdateTeamMemberResult">UpdateTeamMemberResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteammemberresult"></a>
<a id="schema_UpdateTeamMemberResult"></a>
<a id="tocSupdateteammemberresult"></a>
<a id="tocsupdateteammemberresult"></a>

```json
{
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|false|none|none|
|projectRole|object|false|none|none|
|remoteAccessAllowed|object|false|none|none|

<h2 id="tocS_UpdateTeamMemberRequest">UpdateTeamMemberRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteammemberrequest"></a>
<a id="schema_UpdateTeamMemberRequest"></a>
<a id="tocSupdateteammemberrequest"></a>
<a id="tocsupdateteammemberrequest"></a>

```json
{
  "projectId": {},
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|true|none|none|
|userArn|object|true|none|none|
|projectRole|object|false|none|none|
|remoteAccessAllowed|object|false|none|none|

<h2 id="tocS_TeamMemberNotFoundException">TeamMemberNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemateammembernotfoundexception"></a>
<a id="schema_TeamMemberNotFoundException"></a>
<a id="tocSteammembernotfoundexception"></a>
<a id="tocsteammembernotfoundexception"></a>

```json
null
```

<h2 id="tocS_UpdateUserProfileResult">UpdateUserProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserprofileresult"></a>
<a id="schema_UpdateUserProfileResult"></a>
<a id="tocSupdateuserprofileresult"></a>
<a id="tocsupdateuserprofileresult"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {},
  "createdTimestamp": {},
  "lastModifiedTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|displayName|object|false|none|none|
|emailAddress|object|false|none|none|
|sshPublicKey|object|false|none|none|
|createdTimestamp|object|false|none|none|
|lastModifiedTimestamp|object|false|none|none|

<h2 id="tocS_UpdateUserProfileRequest">UpdateUserProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserprofilerequest"></a>
<a id="schema_UpdateUserProfileRequest"></a>
<a id="tocSupdateuserprofilerequest"></a>
<a id="tocsupdateuserprofilerequest"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|displayName|object|false|none|none|
|emailAddress|object|false|none|none|
|sshPublicKey|object|false|none|none|

<h2 id="tocS_ProjectId">ProjectId</h2>
<!-- backwards compatibility -->
<a id="schemaprojectid"></a>
<a id="schema_ProjectId"></a>
<a id="tocSprojectid"></a>
<a id="tocsprojectid"></a>

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
"string"
```

<h2 id="tocS_UserArn">UserArn</h2>
<!-- backwards compatibility -->
<a id="schemauserarn"></a>
<a id="schema_UserArn"></a>
<a id="tocSuserarn"></a>
<a id="tocsuserarn"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_RemoteAccessAllowed">RemoteAccessAllowed</h2>
<!-- backwards compatibility -->
<a id="schemaremoteaccessallowed"></a>
<a id="schema_RemoteAccessAllowed"></a>
<a id="tocSremoteaccessallowed"></a>
<a id="tocsremoteaccessallowed"></a>

```json
true
```

<h2 id="tocS_BucketKey">BucketKey</h2>
<!-- backwards compatibility -->
<a id="schemabucketkey"></a>
<a id="schema_BucketKey"></a>
<a id="tocSbucketkey"></a>
<a id="tocsbucketkey"></a>

```json
"string"
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_CodeSource">CodeSource</h2>
<!-- backwards compatibility -->
<a id="schemacodesource"></a>
<a id="schema_CodeSource"></a>
<a id="tocScodesource"></a>
<a id="tocscodesource"></a>

```json
{
  "s3": {
    "bucketName": {},
    "bucketKey": {}
  }
}
```

The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|true|none|none|

<h2 id="tocS_CodeDestination">CodeDestination</h2>
<!-- backwards compatibility -->
<a id="schemacodedestination"></a>
<a id="schema_CodeDestination"></a>
<a id="tocScodedestination"></a>
<a id="tocscodedestination"></a>

```json
{
  "codeCommit": {
    "name": {}
  },
  "gitHub": {
    "name": {},
    "description": {},
    "type": {},
    "owner": {},
    "privateRepository": {},
    "issuesEnabled": {},
    "token": {}
  }
}
```

The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codeCommit|object|false|none|none|
|gitHub|object|false|none|none|

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
{
  "source": {
    "s3": {
      "bucketName": {},
      "bucketKey": {}
    }
  },
  "destination": {
    "codeCommit": {
      "name": {}
    },
    "gitHub": {
      "name": {},
      "description": {},
      "type": {},
      "owner": {},
      "privateRepository": {},
      "issuesEnabled": {},
      "token": {}
    }
  }
}
```

Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|destination|object|true|none|none|

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_CodeCommitCodeDestination">CodeCommitCodeDestination</h2>
<!-- backwards compatibility -->
<a id="schemacodecommitcodedestination"></a>
<a id="schema_CodeCommitCodeDestination"></a>
<a id="tocScodecommitcodedestination"></a>
<a id="tocscodecommitcodedestination"></a>

```json
{
  "name": {}
}
```

Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|

<h2 id="tocS_GitHubCodeDestination">GitHubCodeDestination</h2>
<!-- backwards compatibility -->
<a id="schemagithubcodedestination"></a>
<a id="schema_GitHubCodeDestination"></a>
<a id="tocSgithubcodedestination"></a>
<a id="tocsgithubcodedestination"></a>

```json
{
  "name": {},
  "description": {},
  "type": {},
  "owner": {},
  "privateRepository": {},
  "issuesEnabled": {},
  "token": {}
}
```

Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|type|object|true|none|none|
|owner|object|true|none|none|
|privateRepository|object|true|none|none|
|issuesEnabled|object|true|none|none|
|token|object|true|none|none|

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucketName": {},
  "bucketKey": {}
}
```

The Amazon S3 location where the source code files provided with the project request are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|false|none|none|
|bucketKey|object|false|none|none|

<h2 id="tocS_ProjectName">ProjectName</h2>
<!-- backwards compatibility -->
<a id="schemaprojectname"></a>
<a id="schema_ProjectName"></a>
<a id="tocSprojectname"></a>
<a id="tocsprojectname"></a>

```json
"password"
```

<h2 id="tocS_ProjectDescription">ProjectDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdescription"></a>
<a id="schema_ProjectDescription"></a>
<a id="tocSprojectdescription"></a>
<a id="tocsprojectdescription"></a>

```json
"password"
```

<h2 id="tocS_SourceCode">SourceCode</h2>
<!-- backwards compatibility -->
<a id="schemasourcecode"></a>
<a id="schema_SourceCode"></a>
<a id="tocSsourcecode"></a>
<a id="tocssourcecode"></a>

```json
[
  {
    "source": {
      "s3": {
        "bucketName": {},
        "bucketKey": {}
      }
    },
    "destination": {
      "codeCommit": {
        "name": {}
      },
      "gitHub": {
        "name": {},
        "description": {},
        "type": {},
        "owner": {},
        "privateRepository": {},
        "issuesEnabled": {},
        "token": {}
      }
    }
  }
]
```

<h2 id="tocS_Toolchain">Toolchain</h2>
<!-- backwards compatibility -->
<a id="schematoolchain"></a>
<a id="schema_Toolchain"></a>
<a id="tocStoolchain"></a>
<a id="tocstoolchain"></a>

```json
{
  "source": {
    "s3": {
      "bucketName": {},
      "bucketKey": {}
    }
  },
  "roleArn": {},
  "stackParameters": {
    "property1": "password",
    "property2": "password"
  }
}
```

The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|none|
|roleArn|object|false|none|none|
|stackParameters|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_ProjectArn">ProjectArn</h2>
<!-- backwards compatibility -->
<a id="schemaprojectarn"></a>
<a id="schema_ProjectArn"></a>
<a id="tocSprojectarn"></a>
<a id="tocsprojectarn"></a>

```json
"string"
```

<h2 id="tocS_ProjectTemplateId">ProjectTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemaprojecttemplateid"></a>
<a id="schema_ProjectTemplateId"></a>
<a id="tocSprojecttemplateid"></a>
<a id="tocsprojecttemplateid"></a>

```json
"string"
```

<h2 id="tocS_UserProfileDisplayName">UserProfileDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemauserprofiledisplayname"></a>
<a id="schema_UserProfileDisplayName"></a>
<a id="tocSuserprofiledisplayname"></a>
<a id="tocsuserprofiledisplayname"></a>

```json
"password"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"password"
```

<h2 id="tocS_SshPublicKey">SshPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemasshpublickey"></a>
<a id="schema_SshPublicKey"></a>
<a id="tocSsshpublickey"></a>
<a id="tocssshpublickey"></a>

```json
"string"
```

<h2 id="tocS_CreatedTimestamp">CreatedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreatedtimestamp"></a>
<a id="schema_CreatedTimestamp"></a>
<a id="tocScreatedtimestamp"></a>
<a id="tocscreatedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastModifiedTimestamp">LastModifiedTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemalastmodifiedtimestamp"></a>
<a id="schema_LastModifiedTimestamp"></a>
<a id="tocSlastmodifiedtimestamp"></a>
<a id="tocslastmodifiedtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteStack">DeleteStack</h2>
<!-- backwards compatibility -->
<a id="schemadeletestack"></a>
<a id="schema_DeleteStack"></a>
<a id="tocSdeletestack"></a>
<a id="tocsdeletestack"></a>

```json
true
```

<h2 id="tocS_StackId">StackId</h2>
<!-- backwards compatibility -->
<a id="schemastackid"></a>
<a id="schema_StackId"></a>
<a id="tocSstackid"></a>
<a id="tocsstackid"></a>

```json
"string"
```

<h2 id="tocS_ProjectStatus">ProjectStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatus"></a>
<a id="schema_ProjectStatus"></a>
<a id="tocSprojectstatus"></a>
<a id="tocsprojectstatus"></a>

```json
{
  "state": {},
  "reason": {}
}
```

An indication of whether a project creation or deletion is failed or successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|true|none|none|
|reason|object|false|none|none|

<h2 id="tocS_RepositoryDescription">RepositoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydescription"></a>
<a id="schema_RepositoryDescription"></a>
<a id="tocSrepositorydescription"></a>
<a id="tocsrepositorydescription"></a>

```json
"string"
```

<h2 id="tocS_RepositoryType">RepositoryType</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytype"></a>
<a id="schema_RepositoryType"></a>
<a id="tocSrepositorytype"></a>
<a id="tocsrepositorytype"></a>

```json
"string"
```

<h2 id="tocS_RepositoryOwner">RepositoryOwner</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryowner"></a>
<a id="schema_RepositoryOwner"></a>
<a id="tocSrepositoryowner"></a>
<a id="tocsrepositoryowner"></a>

```json
"string"
```

<h2 id="tocS_RepositoryIsPrivate">RepositoryIsPrivate</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryisprivate"></a>
<a id="schema_RepositoryIsPrivate"></a>
<a id="tocSrepositoryisprivate"></a>
<a id="tocsrepositoryisprivate"></a>

```json
true
```

<h2 id="tocS_RepositoryEnableIssues">RepositoryEnableIssues</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryenableissues"></a>
<a id="schema_RepositoryEnableIssues"></a>
<a id="tocSrepositoryenableissues"></a>
<a id="tocsrepositoryenableissues"></a>

```json
true
```

<h2 id="tocS_GitHubPersonalToken">GitHubPersonalToken</h2>
<!-- backwards compatibility -->
<a id="schemagithubpersonaltoken"></a>
<a id="schema_GitHubPersonalToken"></a>
<a id="tocSgithubpersonaltoken"></a>
<a id="tocsgithubpersonaltoken"></a>

```json
"password"
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
1
```

<h2 id="tocS_ProjectsList">ProjectsList</h2>
<!-- backwards compatibility -->
<a id="schemaprojectslist"></a>
<a id="schema_ProjectsList"></a>
<a id="tocSprojectslist"></a>
<a id="tocsprojectslist"></a>

```json
[
  {
    "projectId": {},
    "projectArn": {}
  }
]
```

<h2 id="tocS_ResourcesResult">ResourcesResult</h2>
<!-- backwards compatibility -->
<a id="schemaresourcesresult"></a>
<a id="schema_ResourcesResult"></a>
<a id="tocSresourcesresult"></a>
<a id="tocsresourcesresult"></a>

```json
[
  {
    "id": {}
  }
]
```

<h2 id="tocS_TeamMemberResult">TeamMemberResult</h2>
<!-- backwards compatibility -->
<a id="schemateammemberresult"></a>
<a id="schema_TeamMemberResult"></a>
<a id="tocSteammemberresult"></a>
<a id="tocsteammemberresult"></a>

```json
[
  {
    "userArn": {},
    "projectRole": {},
    "remoteAccessAllowed": {}
  }
]
```

<h2 id="tocS_UserProfilesList">UserProfilesList</h2>
<!-- backwards compatibility -->
<a id="schemauserprofileslist"></a>
<a id="schema_UserProfilesList"></a>
<a id="tocSuserprofileslist"></a>
<a id="tocsuserprofileslist"></a>

```json
[
  {
    "userArn": {},
    "displayName": {},
    "emailAddress": {},
    "sshPublicKey": {}
  }
]
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"string"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_ProjectSummary">ProjectSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsummary"></a>
<a id="schema_ProjectSummary"></a>
<a id="tocSprojectsummary"></a>
<a id="tocsprojectsummary"></a>

```json
{
  "projectId": {},
  "projectArn": {}
}
```

Information about the metadata for a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|object|false|none|none|
|projectArn|object|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"stringstrin"
```

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "id": {}
}
```

Information about a resource for a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|true|none|none|

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

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

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
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

<h2 id="tocS_TeamMember">TeamMember</h2>
<!-- backwards compatibility -->
<a id="schemateammember"></a>
<a id="schema_TeamMember"></a>
<a id="tocSteammember"></a>
<a id="tocsteammember"></a>

```json
{
  "userArn": {},
  "projectRole": {},
  "remoteAccessAllowed": {}
}
```

Information about a team member in a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|true|none|none|
|projectRole|object|true|none|none|
|remoteAccessAllowed|object|false|none|none|

<h2 id="tocS_TemplateParameterKey">TemplateParameterKey</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterkey"></a>
<a id="schema_TemplateParameterKey"></a>
<a id="tocStemplateparameterkey"></a>
<a id="tocstemplateparameterkey"></a>

```json
"string"
```

<h2 id="tocS_TemplateParameterValue">TemplateParameterValue</h2>
<!-- backwards compatibility -->
<a id="schematemplateparametervalue"></a>
<a id="schema_TemplateParameterValue"></a>
<a id="tocStemplateparametervalue"></a>
<a id="tocstemplateparametervalue"></a>

```json
"password"
```

<h2 id="tocS_TemplateParameterMap">TemplateParameterMap</h2>
<!-- backwards compatibility -->
<a id="schematemplateparametermap"></a>
<a id="schema_TemplateParameterMap"></a>
<a id="tocStemplateparametermap"></a>
<a id="tocstemplateparametermap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TemplateParameterValue](#schematemplateparametervalue)|false|none|none|

<h2 id="tocS_ToolchainSource">ToolchainSource</h2>
<!-- backwards compatibility -->
<a id="schematoolchainsource"></a>
<a id="schema_ToolchainSource"></a>
<a id="tocStoolchainsource"></a>
<a id="tocstoolchainsource"></a>

```json
{
  "s3": {
    "bucketName": {},
    "bucketKey": {}
  }
}
```

The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3|object|true|none|none|

<h2 id="tocS_UserProfileSummary">UserProfileSummary</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilesummary"></a>
<a id="schema_UserProfileSummary"></a>
<a id="tocSuserprofilesummary"></a>
<a id="tocsuserprofilesummary"></a>

```json
{
  "userArn": {},
  "displayName": {},
  "emailAddress": {},
  "sshPublicKey": {}
}
```

Information about a user's profile in AWS CodeStar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|false|none|none|
|displayName|object|false|none|none|
|emailAddress|object|false|none|none|
|sshPublicKey|object|false|none|none|
