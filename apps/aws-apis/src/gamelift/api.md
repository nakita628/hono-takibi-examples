<h1 id="amazon-gamelift">Amazon GameLift v2015-10-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon GameLift provides solutions for hosting session-based multiplayer game servers in the cloud, including tools for deploying, operating, and scaling game servers. Built on Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance, high-reliability, low-cost game servers while dynamically scaling your resource usage to meet player demand. </p> <p> <b>About Amazon GameLift solutions</b> </p> <p>Get more information on these Amazon GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Developer Guide</a>.</p> <ul> <li> <p>Amazon GameLift managed hosting -- Amazon GameLift offers a fully managed service to set up and maintain computing machines for hosting, manage game session and player session life cycle, and handle security, storage, and performance tracking. You can use automatic scaling tools to balance player demand and hosting costs, configure your game session management to minimize player latency, and add FlexMatch for matchmaking.</p> </li> <li> <p>Managed hosting with Realtime Servers -- With Amazon GameLift Realtime Servers, you can quickly configure and set up ready-to-go game servers for your game. Realtime Servers provides a game server framework with core Amazon GameLift infrastructure already built in. Then use the full range of Amazon GameLift managed hosting features, including FlexMatch, for your game.</p> </li> <li> <p>Amazon GameLift FleetIQ -- Use Amazon GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and Auto Scaling groups. Amazon GameLift FleetIQ provides optimizations for game hosting, including boosting the viability of low-cost Spot Instances gaming. For a complete solution, pair the Amazon GameLift FleetIQ and FlexMatch standalone services.</p> </li> <li> <p>Amazon GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a customizable matchmaking service for multiplayer games. Use FlexMatch as integrated with Amazon GameLift managed hosting or incorporate FlexMatch as a standalone service into your own hosting solution.</p> </li> </ul> <p> <b>About this API Reference</b> </p> <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI reference. Useful links:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift API operations listed by tasks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift tools and resources</a> </p> </li> </ul>

Base URLs:

* <a href="http://gamelift.us-east-1.amazonaws.com">http://gamelift.us-east-1.amazonaws.com</a> - The Amazon GameLift multi-region endpoint

* <a href="https://gamelift.us-east-1.amazonaws.com">https://gamelift.us-east-1.amazonaws.com</a> - The Amazon GameLift multi-region endpoint

* <a href="http://gamelift.cn-north-1.amazonaws.com.cn">http://gamelift.cn-north-1.amazonaws.com.cn</a> - The Amazon GameLift endpoint for China (Beijing) and China (Ningxia)

* <a href="https://gamelift.cn-north-1.amazonaws.com.cn">https://gamelift.cn-north-1.amazonaws.com.cn</a> - The Amazon GameLift endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/gamelift/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-gamelift-default">Default</h1>

## AcceptMatch

<a id="opIdAcceptMatch"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.AcceptMatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.AcceptMatch' \
  -d '{
    "TicketId": {},
    "PlayerIds": {},
    "AcceptanceType": {}
  }'
```

`POST /#X-Amz-Target=GameLift.AcceptMatch`

<p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>

> Body parameter

```json
{
  "TicketId": {},
  "PlayerIds": {},
  "AcceptanceType": {}
}
```

<h3 id="acceptmatch-parameters">Parameters</h3>

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
|body|body|[AcceptMatchInput](#schemaacceptmatchinput)|true|none|
|» TicketId|body|object|true|none|
|» PlayerIds|body|object|true|none|
|» AcceptanceType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.AcceptMatch|

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

<h3 id="acceptmatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptMatchOutput](#schemaacceptmatchoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ClaimGameServer

<a id="opIdClaimGameServer"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ClaimGameServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ClaimGameServer' \
  -d '{
    "GameServerGroupName": {},
    "GameServerId": {},
    "GameServerData": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ClaimGameServer`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> </ul> <note> <p>When claiming a specific game server, this request will succeed even if the game server is running on an instance in <code>DRAINING</code> status. To avoid this, first check the instance status by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html">DescribeGameServerInstances</a> .</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "GameServerData": {}
}
```

<h3 id="claimgameserver-parameters">Parameters</h3>

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
|body|body|[ClaimGameServerInput](#schemaclaimgameserverinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» GameServerId|body|object|false|none|
|» GameServerData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ClaimGameServer|

> Example responses

> 200 Response

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
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

<h3 id="claimgameserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClaimGameServerOutput](#schemaclaimgameserveroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|OutOfCapacityException|[OutOfCapacityException](#schemaoutofcapacityexception)|
|484|484|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAlias

<a id="opIdCreateAlias"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateAlias' \
  -d '{
    "Name": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateAlias`

<p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "RoutingStrategy": {
    "Type": {},
    "FleetId": {},
    "Message": {}
  },
  "Tags": {}
}
```

<h3 id="createalias-parameters">Parameters</h3>

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
|body|body|[CreateAliasInput](#schemacreatealiasinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» RoutingStrategy|body|object|true|none|
|» » Type|body|object|false|none|
|» » FleetId|body|object|false|none|
|» » Message|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateAlias|

> Example responses

> 200 Response

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="createalias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAliasOutput](#schemacreatealiasoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBuild

<a id="opIdCreateBuild"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateBuild' \
  -d '{
    "Name": {},
    "Version": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    },
    "OperatingSystem": {},
    "Tags": {},
    "ServerSdkVersion": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateBuild`

<p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the operation in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "OperatingSystem": {},
  "Tags": {},
  "ServerSdkVersion": {}
}
```

<h3 id="createbuild-parameters">Parameters</h3>

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
|body|body|[CreateBuildInput](#schemacreatebuildinput)|true|none|
|» Name|body|object|false|none|
|» Version|body|object|false|none|
|» StorageLocation|body|object|false|none|
|» » Bucket|body|object|false|none|
|» » Key|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » ObjectVersion|body|object|false|none|
|» OperatingSystem|body|object|false|none|
|» Tags|body|object|false|none|
|» ServerSdkVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateBuild|

> Example responses

> 200 Response

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
  },
  "UploadCredentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
  },
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
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

<h3 id="createbuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBuildOutput](#schemacreatebuildoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleet

<a id="opIdCreateFleet"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateFleet' \
  -d '{
    "Name": {},
    "Description": {},
    "BuildId": {},
    "ScriptId": {},
    "ServerLaunchPath": {},
    "ServerLaunchParameters": {},
    "LogPaths": {},
    "EC2InstanceType": {},
    "EC2InboundPermissions": {},
    "NewGameSessionProtectionPolicy": {},
    "RuntimeConfiguration": {
      "ServerProcesses": {},
      "MaxConcurrentGameSessionActivations": {},
      "GameSessionActivationTimeoutSeconds": {}
    },
    "ResourceCreationLimitPolicy": {
      "NewGameSessionsPerCreator": {},
      "PolicyPeriodInMinutes": {}
    },
    "MetricGroups": {},
    "PeerVpcAwsAccountId": {},
    "PeerVpcId": {},
    "FleetType": {},
    "InstanceRoleArn": {},
    "CertificateConfiguration": {
      "CertificateType": {}
    },
    "Locations": {},
    "Tags": {},
    "ComputeType": {},
    "AnywhereConfiguration": {
      "Cost": {}
    }
  }'
```

`POST /#X-Amz-Target=GameLift.CreateFleet`

<p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "BuildId": {},
  "ScriptId": {},
  "ServerLaunchPath": {},
  "ServerLaunchParameters": {},
  "LogPaths": {},
  "EC2InstanceType": {},
  "EC2InboundPermissions": {},
  "NewGameSessionProtectionPolicy": {},
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  },
  "ResourceCreationLimitPolicy": {
    "NewGameSessionsPerCreator": {},
    "PolicyPeriodInMinutes": {}
  },
  "MetricGroups": {},
  "PeerVpcAwsAccountId": {},
  "PeerVpcId": {},
  "FleetType": {},
  "InstanceRoleArn": {},
  "CertificateConfiguration": {
    "CertificateType": {}
  },
  "Locations": {},
  "Tags": {},
  "ComputeType": {},
  "AnywhereConfiguration": {
    "Cost": {}
  }
}
```

<h3 id="createfleet-parameters">Parameters</h3>

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
|body|body|[CreateFleetInput](#schemacreatefleetinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» BuildId|body|object|false|none|
|» ScriptId|body|object|false|none|
|» ServerLaunchPath|body|object|false|none|
|» ServerLaunchParameters|body|object|false|none|
|» LogPaths|body|object|false|none|
|» EC2InstanceType|body|object|false|none|
|» EC2InboundPermissions|body|object|false|none|
|» NewGameSessionProtectionPolicy|body|object|false|none|
|» RuntimeConfiguration|body|object|false|none|
|» » ServerProcesses|body|object|false|none|
|» » MaxConcurrentGameSessionActivations|body|object|false|none|
|» » GameSessionActivationTimeoutSeconds|body|object|false|none|
|» ResourceCreationLimitPolicy|body|object|false|none|
|» » NewGameSessionsPerCreator|body|object|false|none|
|» » PolicyPeriodInMinutes|body|object|false|none|
|» MetricGroups|body|object|false|none|
|» PeerVpcAwsAccountId|body|object|false|none|
|» PeerVpcId|body|object|false|none|
|» FleetType|body|object|false|none|
|» InstanceRoleArn|body|object|false|none|
|» CertificateConfiguration|body|object|false|none|
|» » CertificateType|body|object|true|none|
|» Locations|body|object|false|none|
|» Tags|body|object|false|none|
|» ComputeType|body|object|false|none|
|» AnywhereConfiguration|body|object|false|none|
|» » Cost|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateFleet|

> Example responses

> 200 Response

```json
{
  "FleetAttributes": {
    "FleetId": {},
    "FleetArn": {},
    "FleetType": {},
    "InstanceType": {},
    "Description": {},
    "Name": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "BuildId": {},
    "BuildArn": {},
    "ScriptId": {},
    "ScriptArn": {},
    "ServerLaunchPath": {},
    "ServerLaunchParameters": {},
    "LogPaths": {},
    "NewGameSessionProtectionPolicy": {},
    "OperatingSystem": {},
    "ResourceCreationLimitPolicy": {
      "NewGameSessionsPerCreator": {},
      "PolicyPeriodInMinutes": {}
    },
    "MetricGroups": {},
    "StoppedActions": {},
    "InstanceRoleArn": {},
    "CertificateConfiguration": {
      "CertificateType": {}
    },
    "ComputeType": {},
    "AnywhereConfiguration": {
      "Cost": {}
    }
  },
  "LocationStates": {}
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

> 487 Response

```json
null
```

<h3 id="createfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetOutput](#schemacreatefleetoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|486|486|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|487|487|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleetLocations

<a id="opIdCreateFleetLocations"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateFleetLocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateFleetLocations' \
  -d '{
    "FleetId": {},
    "Locations": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateFleetLocations`

<p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Locations": {}
}
```

<h3 id="createfleetlocations-parameters">Parameters</h3>

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
|body|body|[CreateFleetLocationsInput](#schemacreatefleetlocationsinput)|true|none|
|» FleetId|body|object|true|none|
|» Locations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateFleetLocations|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationStates": {}
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

> 487 Response

```json
null
```

<h3 id="createfleetlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetLocationsOutput](#schemacreatefleetlocationsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|485|485|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|
|487|487|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGameServerGroup

<a id="opIdCreateGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateGameServerGroup' \
  -d '{
    "GameServerGroupName": {},
    "RoleArn": {},
    "MinSize": {},
    "MaxSize": {},
    "LaunchTemplate": {
      "LaunchTemplateId": {},
      "LaunchTemplateName": {},
      "Version": {}
    },
    "InstanceDefinitions": {},
    "AutoScalingPolicy": {
      "EstimatedInstanceWarmup": {},
      "TargetTrackingConfiguration": {
        "TargetValue": {}
      }
    },
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "VpcSubnets": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "RoleArn": {},
  "MinSize": {},
  "MaxSize": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "InstanceDefinitions": {},
  "AutoScalingPolicy": {
    "EstimatedInstanceWarmup": {},
    "TargetTrackingConfiguration": {
      "TargetValue": {}
    }
  },
  "BalancingStrategy": {},
  "GameServerProtectionPolicy": {},
  "VpcSubnets": {},
  "Tags": {}
}
```

<h3 id="creategameservergroup-parameters">Parameters</h3>

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
|body|body|[CreateGameServerGroupInput](#schemacreategameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» RoleArn|body|object|true|none|
|» MinSize|body|object|true|none|
|» MaxSize|body|object|true|none|
|» LaunchTemplate|body|object|true|none|
|» » LaunchTemplateId|body|object|false|none|
|» » LaunchTemplateName|body|object|false|none|
|» » Version|body|object|false|none|
|» InstanceDefinitions|body|object|true|none|
|» AutoScalingPolicy|body|object|false|none|
|» » EstimatedInstanceWarmup|body|object|false|none|
|» » TargetTrackingConfiguration|body|object|true|none|
|» » » TargetValue|body|object|true|none|
|» BalancingStrategy|body|object|false|none|
|» GameServerProtectionPolicy|body|object|false|none|
|» VpcSubnets|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="creategameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGameServerGroupOutput](#schemacreategameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGameSession

<a id="opIdCreateGameSession"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateGameSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateGameSession' \
  -d '{
    "FleetId": {},
    "AliasId": {},
    "MaximumPlayerSessionCount": {},
    "Name": {},
    "GameProperties": {},
    "CreatorId": {},
    "GameSessionId": {},
    "IdempotencyToken": {},
    "GameSessionData": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateGameSession`

<p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "AliasId": {},
  "MaximumPlayerSessionCount": {},
  "Name": {},
  "GameProperties": {},
  "CreatorId": {},
  "GameSessionId": {},
  "IdempotencyToken": {},
  "GameSessionData": {},
  "Location": {}
}
```

<h3 id="creategamesession-parameters">Parameters</h3>

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
|body|body|[CreateGameSessionInput](#schemacreategamesessioninput)|true|none|
|» FleetId|body|object|false|none|
|» AliasId|body|object|false|none|
|» MaximumPlayerSessionCount|body|object|true|none|
|» Name|body|object|false|none|
|» GameProperties|body|object|false|none|
|» CreatorId|body|object|false|none|
|» GameSessionId|body|object|false|none|
|» IdempotencyToken|body|object|false|none|
|» GameSessionData|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateGameSession|

> Example responses

> 200 Response

```json
{
  "GameSession": {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

> 490 Response

```json
null
```

<h3 id="creategamesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGameSessionOutput](#schemacreategamesessionoutput)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|487|487|FleetCapacityExceededException|[FleetCapacityExceededException](#schemafleetcapacityexceededexception)|
|488|488|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|489|489|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|490|490|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGameSessionQueue

<a id="opIdCreateGameSessionQueue"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateGameSessionQueue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateGameSessionQueue' \
  -d '{
    "Name": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateGameSessionQueue`

<p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Name": {},
  "TimeoutInSeconds": {},
  "PlayerLatencyPolicies": {},
  "Destinations": {},
  "FilterConfiguration": {
    "AllowedLocations": {}
  },
  "PriorityConfiguration": {
    "PriorityOrder": {},
    "LocationOrder": {}
  },
  "CustomEventData": {},
  "NotificationTarget": {},
  "Tags": {}
}
```

<h3 id="creategamesessionqueue-parameters">Parameters</h3>

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
|body|body|[CreateGameSessionQueueInput](#schemacreategamesessionqueueinput)|true|none|
|» Name|body|object|true|none|
|» TimeoutInSeconds|body|object|false|none|
|» PlayerLatencyPolicies|body|object|false|none|
|» Destinations|body|object|false|none|
|» FilterConfiguration|body|object|false|none|
|» » AllowedLocations|body|object|false|none|
|» PriorityConfiguration|body|object|false|none|
|» » PriorityOrder|body|object|false|none|
|» » LocationOrder|body|object|false|none|
|» CustomEventData|body|object|false|none|
|» NotificationTarget|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateGameSessionQueue|

> Example responses

> 200 Response

```json
{
  "GameSessionQueue": {
    "Name": {},
    "GameSessionQueueArn": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
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

<h3 id="creategamesessionqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGameSessionQueueOutput](#schemacreategamesessionqueueoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLocation

<a id="opIdCreateLocation"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateLocation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateLocation' \
  -d '{
    "LocationName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateLocation`

Creates a custom location for use in an Anywhere fleet.

> Body parameter

```json
{
  "LocationName": {},
  "Tags": {}
}
```

<h3 id="createlocation-parameters">Parameters</h3>

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
|body|body|[CreateLocationInput](#schemacreatelocationinput)|true|none|
|» LocationName|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateLocation|

> Example responses

> 200 Response

```json
{
  "Location": {
    "LocationName": {},
    "LocationArn": {}
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

<h3 id="createlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLocationOutput](#schemacreatelocationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMatchmakingConfiguration

<a id="opIdCreateMatchmakingConfiguration"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateMatchmakingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateMatchmakingConfiguration' \
  -d '{
    "Name": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateMatchmakingConfiguration`

<p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "GameSessionQueueArns": {},
  "RequestTimeoutSeconds": {},
  "AcceptanceTimeoutSeconds": {},
  "AcceptanceRequired": {},
  "RuleSetName": {},
  "NotificationTarget": {},
  "AdditionalPlayerCount": {},
  "CustomEventData": {},
  "GameProperties": {},
  "GameSessionData": {},
  "BackfillMode": {},
  "FlexMatchMode": {},
  "Tags": {}
}
```

<h3 id="creatematchmakingconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateMatchmakingConfigurationInput](#schemacreatematchmakingconfigurationinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» GameSessionQueueArns|body|object|false|none|
|» RequestTimeoutSeconds|body|object|true|none|
|» AcceptanceTimeoutSeconds|body|object|false|none|
|» AcceptanceRequired|body|object|true|none|
|» RuleSetName|body|object|true|none|
|» NotificationTarget|body|object|false|none|
|» AdditionalPlayerCount|body|object|false|none|
|» CustomEventData|body|object|false|none|
|» GameProperties|body|object|false|none|
|» GameSessionData|body|object|false|none|
|» BackfillMode|body|object|false|none|
|» FlexMatchMode|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateMatchmakingConfiguration|

> Example responses

> 200 Response

```json
{
  "Configuration": {
    "Name": {},
    "ConfigurationArn": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "RuleSetArn": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "CreationTime": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
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

<h3 id="creatematchmakingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMatchmakingConfigurationOutput](#schemacreatematchmakingconfigurationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|485|485|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMatchmakingRuleSet

<a id="opIdCreateMatchmakingRuleSet"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateMatchmakingRuleSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateMatchmakingRuleSet' \
  -d '{
    "Name": {},
    "RuleSetBody": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateMatchmakingRuleSet`

<p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>

> Body parameter

```json
{
  "Name": {},
  "RuleSetBody": {},
  "Tags": {}
}
```

<h3 id="creatematchmakingruleset-parameters">Parameters</h3>

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
|body|body|[CreateMatchmakingRuleSetInput](#schemacreatematchmakingrulesetinput)|true|none|
|» Name|body|object|true|none|
|» RuleSetBody|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateMatchmakingRuleSet|

> Example responses

> 200 Response

```json
{
  "RuleSet": {
    "RuleSetName": {},
    "RuleSetArn": {},
    "RuleSetBody": {},
    "CreationTime": {}
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

<h3 id="creatematchmakingruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMatchmakingRuleSetOutput](#schemacreatematchmakingrulesetoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|484|484|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePlayerSession

<a id="opIdCreatePlayerSession"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreatePlayerSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreatePlayerSession' \
  -d '{
    "GameSessionId": {},
    "PlayerId": {},
    "PlayerData": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreatePlayerSession`

<p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameSessionId": {},
  "PlayerId": {},
  "PlayerData": {}
}
```

<h3 id="createplayersession-parameters">Parameters</h3>

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
|body|body|[CreatePlayerSessionInput](#schemacreateplayersessioninput)|true|none|
|» GameSessionId|body|object|true|none|
|» PlayerId|body|object|true|none|
|» PlayerData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreatePlayerSession|

> Example responses

> 200 Response

```json
{
  "PlayerSession": {
    "PlayerSessionId": {},
    "PlayerId": {},
    "GameSessionId": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerData": {}
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

> 486 Response

```json
null
```

<h3 id="createplayersession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlayerSessionOutput](#schemacreateplayersessionoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InvalidGameSessionStatusException|[InvalidGameSessionStatusException](#schemainvalidgamesessionstatusexception)|
|483|483|GameSessionFullException|[GameSessionFullException](#schemagamesessionfullexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePlayerSessions

<a id="opIdCreatePlayerSessions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreatePlayerSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreatePlayerSessions' \
  -d '{
    "GameSessionId": {},
    "PlayerIds": {},
    "PlayerDataMap": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=GameLift.CreatePlayerSessions`

<p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameSessionId": {},
  "PlayerIds": {},
  "PlayerDataMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createplayersessions-parameters">Parameters</h3>

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
|body|body|[CreatePlayerSessionsInput](#schemacreateplayersessionsinput)|true|none|
|» GameSessionId|body|object|true|none|
|» PlayerIds|body|object|true|none|
|» PlayerDataMap|body|object|false|none|
|» » **additionalProperties**|body|[PlayerData](#schemaplayerdata)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreatePlayerSessions|

> Example responses

> 200 Response

```json
{
  "PlayerSessions": {}
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

<h3 id="createplayersessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlayerSessionsOutput](#schemacreateplayersessionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InvalidGameSessionStatusException|[InvalidGameSessionStatusException](#schemainvalidgamesessionstatusexception)|
|483|483|GameSessionFullException|[GameSessionFullException](#schemagamesessionfullexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateScript

<a id="opIdCreateScript"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateScript' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateScript' \
  -d '{
    "Name": {},
    "Version": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    },
    "ZipFile": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateScript`

<p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "ZipFile": {},
  "Tags": {}
}
```

<h3 id="createscript-parameters">Parameters</h3>

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
|body|body|[CreateScriptInput](#schemacreatescriptinput)|true|none|
|» Name|body|object|false|none|
|» Version|body|object|false|none|
|» StorageLocation|body|object|false|none|
|» » Bucket|body|object|false|none|
|» » Key|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » ObjectVersion|body|object|false|none|
|» ZipFile|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateScript|

> Example responses

> 200 Response

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
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

<h3 id="createscript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateScriptOutput](#schemacreatescriptoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcPeeringAuthorization

<a id="opIdCreateVpcPeeringAuthorization"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateVpcPeeringAuthorization' \
  -d '{
    "GameLiftAwsAccountId": {},
    "PeerVpcId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization`

<p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameLiftAwsAccountId": {},
  "PeerVpcId": {}
}
```

<h3 id="createvpcpeeringauthorization-parameters">Parameters</h3>

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
|body|body|[CreateVpcPeeringAuthorizationInput](#schemacreatevpcpeeringauthorizationinput)|true|none|
|» GameLiftAwsAccountId|body|object|true|none|
|» PeerVpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateVpcPeeringAuthorization|

> Example responses

> 200 Response

```json
{
  "VpcPeeringAuthorization": {
    "GameLiftAwsAccountId": {},
    "PeerVpcAwsAccountId": {},
    "PeerVpcId": {},
    "CreationTime": {},
    "ExpirationTime": {}
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

<h3 id="createvpcpeeringauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcPeeringAuthorizationOutput](#schemacreatevpcpeeringauthorizationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcPeeringConnection

<a id="opIdCreateVpcPeeringConnection"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.CreateVpcPeeringConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.CreateVpcPeeringConnection' \
  -d '{
    "FleetId": {},
    "PeerVpcAwsAccountId": {},
    "PeerVpcId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.CreateVpcPeeringConnection`

<p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "PeerVpcAwsAccountId": {},
  "PeerVpcId": {}
}
```

<h3 id="createvpcpeeringconnection-parameters">Parameters</h3>

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
|body|body|[CreateVpcPeeringConnectionInput](#schemacreatevpcpeeringconnectioninput)|true|none|
|» FleetId|body|object|true|none|
|» PeerVpcAwsAccountId|body|object|true|none|
|» PeerVpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.CreateVpcPeeringConnection|

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

<h3 id="createvpcpeeringconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcPeeringConnectionOutput](#schemacreatevpcpeeringconnectionoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAlias

<a id="opIdDeleteAlias"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteAlias' \
  -d '{
    "AliasId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteAlias`

<p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "AliasId": {}
}
```

<h3 id="deletealias-parameters">Parameters</h3>

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
|body|body|[DeleteAliasInput](#schemadeletealiasinput)|true|none|
|» AliasId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteAlias|

> Example responses

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

<h3 id="deletealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBuild

<a id="opIdDeleteBuild"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteBuild' \
  -d '{
    "BuildId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteBuild`

<p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "BuildId": {}
}
```

<h3 id="deletebuild-parameters">Parameters</h3>

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
|body|body|[DeleteBuildInput](#schemadeletebuildinput)|true|none|
|» BuildId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteBuild|

> Example responses

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

<h3 id="deletebuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleet

<a id="opIdDeleteFleet"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteFleet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteFleet' \
  -d '{
    "FleetId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteFleet`

<p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {}
}
```

<h3 id="deletefleet-parameters">Parameters</h3>

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
|body|body|[DeleteFleetInput](#schemadeletefleetinput)|true|none|
|» FleetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteFleet|

> Example responses

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

<h3 id="deletefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|485|485|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleetLocations

<a id="opIdDeleteFleetLocations"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteFleetLocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteFleetLocations' \
  -d '{
    "FleetId": {},
    "Locations": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteFleetLocations`

<p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Locations": {}
}
```

<h3 id="deletefleetlocations-parameters">Parameters</h3>

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
|body|body|[DeleteFleetLocationsInput](#schemadeletefleetlocationsinput)|true|none|
|» FleetId|body|object|true|none|
|» Locations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteFleetLocations|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationStates": {}
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

<h3 id="deletefleetlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFleetLocationsOutput](#schemadeletefleetlocationsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGameServerGroup

<a id="opIdDeleteGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteGameServerGroup' \
  -d '{
    "GameServerGroupName": {},
    "DeleteOption": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "DeleteOption": {}
}
```

<h3 id="deletegameservergroup-parameters">Parameters</h3>

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
|body|body|[DeleteGameServerGroupInput](#schemadeletegameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» DeleteOption|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="deletegameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGameServerGroupOutput](#schemadeletegameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGameSessionQueue

<a id="opIdDeleteGameSessionQueue"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteGameSessionQueue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteGameSessionQueue' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteGameSessionQueue`

Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletegamesessionqueue-parameters">Parameters</h3>

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
|body|body|[DeleteGameSessionQueueInput](#schemadeletegamesessionqueueinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteGameSessionQueue|

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

<h3 id="deletegamesessionqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGameSessionQueueOutput](#schemadeletegamesessionqueueoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLocation

<a id="opIdDeleteLocation"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteLocation' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteLocation' \
  -d '{
    "LocationName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteLocation`

<p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>

> Body parameter

```json
{
  "LocationName": {}
}
```

<h3 id="deletelocation-parameters">Parameters</h3>

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
|body|body|[DeleteLocationInput](#schemadeletelocationinput)|true|none|
|» LocationName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteLocation|

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

<h3 id="deletelocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLocationOutput](#schemadeletelocationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMatchmakingConfiguration

<a id="opIdDeleteMatchmakingConfiguration"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteMatchmakingConfiguration' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration`

Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletematchmakingconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteMatchmakingConfigurationInput](#schemadeletematchmakingconfigurationinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteMatchmakingConfiguration|

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

<h3 id="deletematchmakingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMatchmakingConfigurationOutput](#schemadeletematchmakingconfigurationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|484|484|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMatchmakingRuleSet

<a id="opIdDeleteMatchmakingRuleSet"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteMatchmakingRuleSet' \
  -d '{
    "Name": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet`

<p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

> Body parameter

```json
{
  "Name": {}
}
```

<h3 id="deletematchmakingruleset-parameters">Parameters</h3>

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
|body|body|[DeleteMatchmakingRuleSetInput](#schemadeletematchmakingrulesetinput)|true|none|
|» Name|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteMatchmakingRuleSet|

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

<h3 id="deletematchmakingruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMatchmakingRuleSetOutput](#schemadeletematchmakingrulesetoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteScalingPolicy

<a id="opIdDeleteScalingPolicy"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteScalingPolicy' \
  -d '{
    "Name": {},
    "FleetId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteScalingPolicy`

<p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>

> Body parameter

```json
{
  "Name": {},
  "FleetId": {}
}
```

<h3 id="deletescalingpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteScalingPolicyInput](#schemadeletescalingpolicyinput)|true|none|
|» Name|body|object|true|none|
|» FleetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteScalingPolicy|

> Example responses

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

<h3 id="deletescalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteScript

<a id="opIdDeleteScript"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteScript' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteScript' \
  -d '{
    "ScriptId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteScript`

<p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "ScriptId": {}
}
```

<h3 id="deletescript-parameters">Parameters</h3>

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
|body|body|[DeleteScriptInput](#schemadeletescriptinput)|true|none|
|» ScriptId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteScript|

> Example responses

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

<h3 id="deletescript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcPeeringAuthorization

<a id="opIdDeleteVpcPeeringAuthorization"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteVpcPeeringAuthorization' \
  -d '{
    "GameLiftAwsAccountId": {},
    "PeerVpcId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization`

<p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameLiftAwsAccountId": {},
  "PeerVpcId": {}
}
```

<h3 id="deletevpcpeeringauthorization-parameters">Parameters</h3>

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
|body|body|[DeleteVpcPeeringAuthorizationInput](#schemadeletevpcpeeringauthorizationinput)|true|none|
|» GameLiftAwsAccountId|body|object|true|none|
|» PeerVpcId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteVpcPeeringAuthorization|

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

<h3 id="deletevpcpeeringauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcPeeringAuthorizationOutput](#schemadeletevpcpeeringauthorizationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcPeeringConnection

<a id="opIdDeleteVpcPeeringConnection"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeleteVpcPeeringConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeleteVpcPeeringConnection' \
  -d '{
    "FleetId": {},
    "VpcPeeringConnectionId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeleteVpcPeeringConnection`

<p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "VpcPeeringConnectionId": {}
}
```

<h3 id="deletevpcpeeringconnection-parameters">Parameters</h3>

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
|body|body|[DeleteVpcPeeringConnectionInput](#schemadeletevpcpeeringconnectioninput)|true|none|
|» FleetId|body|object|true|none|
|» VpcPeeringConnectionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeleteVpcPeeringConnection|

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

<h3 id="deletevpcpeeringconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcPeeringConnectionOutput](#schemadeletevpcpeeringconnectionoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterCompute

<a id="opIdDeregisterCompute"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeregisterCompute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeregisterCompute' \
  -d '{
    "FleetId": {},
    "ComputeName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeregisterCompute`

Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.

> Body parameter

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

<h3 id="deregistercompute-parameters">Parameters</h3>

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
|body|body|[DeregisterComputeInput](#schemaderegistercomputeinput)|true|none|
|» FleetId|body|object|true|none|
|» ComputeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeregisterCompute|

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

<h3 id="deregistercompute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeregisterComputeOutput](#schemaderegistercomputeoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeregisterGameServer

<a id="opIdDeregisterGameServer"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DeregisterGameServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DeregisterGameServer' \
  -d '{
    "GameServerGroupName": {},
    "GameServerId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DeregisterGameServer`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "GameServerId": {}
}
```

<h3 id="deregistergameserver-parameters">Parameters</h3>

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
|body|body|[DeregisterGameServerInput](#schemaderegistergameserverinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» GameServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DeregisterGameServer|

> Example responses

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

<h3 id="deregistergameserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAlias

<a id="opIdDescribeAlias"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeAlias' \
  -d '{
    "AliasId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeAlias`

<p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "AliasId": {}
}
```

<h3 id="describealias-parameters">Parameters</h3>

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
|body|body|[DescribeAliasInput](#schemadescribealiasinput)|true|none|
|» AliasId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeAlias|

> Example responses

> 200 Response

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="describealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAliasOutput](#schemadescribealiasoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeBuild

<a id="opIdDescribeBuild"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeBuild' \
  -d '{
    "BuildId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeBuild`

<p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "BuildId": {}
}
```

<h3 id="describebuild-parameters">Parameters</h3>

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
|body|body|[DescribeBuildInput](#schemadescribebuildinput)|true|none|
|» BuildId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeBuild|

> Example responses

> 200 Response

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
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

<h3 id="describebuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeBuildOutput](#schemadescribebuildoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCompute

<a id="opIdDescribeCompute"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeCompute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeCompute' \
  -d '{
    "FleetId": {},
    "ComputeName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeCompute`

Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.

> Body parameter

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

<h3 id="describecompute-parameters">Parameters</h3>

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
|body|body|[DescribeComputeInput](#schemadescribecomputeinput)|true|none|
|» FleetId|body|object|true|none|
|» ComputeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeCompute|

> Example responses

> 200 Response

```json
{
  "Compute": {
    "FleetId": {},
    "FleetArn": {},
    "ComputeName": {},
    "ComputeArn": {},
    "IpAddress": {},
    "DnsName": {},
    "ComputeStatus": {},
    "Location": {},
    "CreationTime": {},
    "OperatingSystem": {},
    "Type": {},
    "GameLiftServiceSdkEndpoint": {}
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

<h3 id="describecompute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeComputeOutput](#schemadescribecomputeoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeEC2InstanceLimits

<a id="opIdDescribeEC2InstanceLimits"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeEC2InstanceLimits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeEC2InstanceLimits' \
  -d '{
    "EC2InstanceType": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeEC2InstanceLimits`

<p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "EC2InstanceType": {},
  "Location": {}
}
```

<h3 id="describeec2instancelimits-parameters">Parameters</h3>

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
|body|body|[DescribeEC2InstanceLimitsInput](#schemadescribeec2instancelimitsinput)|true|none|
|» EC2InstanceType|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeEC2InstanceLimits|

> Example responses

> 200 Response

```json
{
  "EC2InstanceLimits": {}
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

<h3 id="describeec2instancelimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeEC2InstanceLimitsOutput](#schemadescribeec2instancelimitsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetAttributes

<a id="opIdDescribeFleetAttributes"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetAttributes' \
  -d '{
    "FleetIds": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetAttributes`

<p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describefleetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetAttributesInput](#schemadescribefleetattributesinput)|true|none|
|» FleetIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetAttributes|

> Example responses

> 200 Response

```json
{
  "FleetAttributes": {},
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

<h3 id="describefleetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetAttributesOutput](#schemadescribefleetattributesoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetCapacity

<a id="opIdDescribeFleetCapacity"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetCapacity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetCapacity' \
  -d '{
    "FleetIds": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetCapacity`

<p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

> Body parameter

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describefleetcapacity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetCapacityInput](#schemadescribefleetcapacityinput)|true|none|
|» FleetIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetCapacity|

> Example responses

> 200 Response

```json
{
  "FleetCapacity": {},
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

<h3 id="describefleetcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetCapacityOutput](#schemadescribefleetcapacityoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetEvents

<a id="opIdDescribeFleetEvents"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetEvents' \
  -d '{
    "FleetId": {},
    "StartTime": {},
    "EndTime": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetEvents`

<p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "StartTime": {},
  "EndTime": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describefleetevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetEventsInput](#schemadescribefleeteventsinput)|true|none|
|» FleetId|body|object|true|none|
|» StartTime|body|object|false|none|
|» EndTime|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetEvents|

> Example responses

> 200 Response

```json
{
  "Events": {},
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

<h3 id="describefleetevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetEventsOutput](#schemadescribefleeteventsoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetLocationAttributes

<a id="opIdDescribeFleetLocationAttributes"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetLocationAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetLocationAttributes' \
  -d '{
    "FleetId": {},
    "Locations": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetLocationAttributes`

<p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Locations": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describefleetlocationattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetLocationAttributesInput](#schemadescribefleetlocationattributesinput)|true|none|
|» FleetId|body|object|true|none|
|» Locations|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetLocationAttributes|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationAttributes": {},
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

<h3 id="describefleetlocationattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetLocationAttributesOutput](#schemadescribefleetlocationattributesoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetLocationCapacity

<a id="opIdDescribeFleetLocationCapacity"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetLocationCapacity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetLocationCapacity' \
  -d '{
    "FleetId": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetLocationCapacity`

<p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Location": {}
}
```

<h3 id="describefleetlocationcapacity-parameters">Parameters</h3>

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
|body|body|[DescribeFleetLocationCapacityInput](#schemadescribefleetlocationcapacityinput)|true|none|
|» FleetId|body|object|true|none|
|» Location|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetLocationCapacity|

> Example responses

> 200 Response

```json
{
  "FleetCapacity": {
    "FleetId": {},
    "FleetArn": {},
    "InstanceType": {},
    "InstanceCounts": {
      "DESIRED": {},
      "MINIMUM": {},
      "MAXIMUM": {},
      "PENDING": {},
      "ACTIVE": {},
      "IDLE": {},
      "TERMINATING": {}
    },
    "Location": {}
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

<h3 id="describefleetlocationcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetLocationCapacityOutput](#schemadescribefleetlocationcapacityoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetLocationUtilization

<a id="opIdDescribeFleetLocationUtilization"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetLocationUtilization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetLocationUtilization' \
  -d '{
    "FleetId": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetLocationUtilization`

<p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Location": {}
}
```

<h3 id="describefleetlocationutilization-parameters">Parameters</h3>

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
|body|body|[DescribeFleetLocationUtilizationInput](#schemadescribefleetlocationutilizationinput)|true|none|
|» FleetId|body|object|true|none|
|» Location|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetLocationUtilization|

> Example responses

> 200 Response

```json
{
  "FleetUtilization": {
    "FleetId": {},
    "FleetArn": {},
    "ActiveServerProcessCount": {},
    "ActiveGameSessionCount": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Location": {}
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

<h3 id="describefleetlocationutilization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetLocationUtilizationOutput](#schemadescribefleetlocationutilizationoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetPortSettings

<a id="opIdDescribeFleetPortSettings"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetPortSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetPortSettings' \
  -d '{
    "FleetId": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetPortSettings`

<p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Location": {}
}
```

<h3 id="describefleetportsettings-parameters">Parameters</h3>

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
|body|body|[DescribeFleetPortSettingsInput](#schemadescribefleetportsettingsinput)|true|none|
|» FleetId|body|object|true|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetPortSettings|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "InboundPermissions": {},
  "UpdateStatus": {},
  "Location": {}
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

<h3 id="describefleetportsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetPortSettingsOutput](#schemadescribefleetportsettingsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetUtilization

<a id="opIdDescribeFleetUtilization"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeFleetUtilization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeFleetUtilization' \
  -d '{
    "FleetIds": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeFleetUtilization`

<p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>

> Body parameter

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describefleetutilization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeFleetUtilizationInput](#schemadescribefleetutilizationinput)|true|none|
|» FleetIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeFleetUtilization|

> Example responses

> 200 Response

```json
{
  "FleetUtilization": {},
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

<h3 id="describefleetutilization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetUtilizationOutput](#schemadescribefleetutilizationoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameServer

<a id="opIdDescribeGameServer"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameServer' \
  -d '{
    "GameServerGroupName": {},
    "GameServerId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameServer`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "GameServerId": {}
}
```

<h3 id="describegameserver-parameters">Parameters</h3>

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
|body|body|[DescribeGameServerInput](#schemadescribegameserverinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» GameServerId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameServer|

> Example responses

> 200 Response

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
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

<h3 id="describegameserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameServerOutput](#schemadescribegameserveroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameServerGroup

<a id="opIdDescribeGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameServerGroup' \
  -d '{
    "GameServerGroupName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {}
}
```

<h3 id="describegameservergroup-parameters">Parameters</h3>

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
|body|body|[DescribeGameServerGroupInput](#schemadescribegameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="describegameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameServerGroupOutput](#schemadescribegameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameServerInstances

<a id="opIdDescribeGameServerInstances"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameServerInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameServerInstances' \
  -d '{
    "GameServerGroupName": {},
    "InstanceIds": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameServerInstances`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "InstanceIds": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describegameserverinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeGameServerInstancesInput](#schemadescribegameserverinstancesinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» InstanceIds|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameServerInstances|

> Example responses

> 200 Response

```json
{
  "GameServerInstances": {},
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

<h3 id="describegameserverinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameServerInstancesOutput](#schemadescribegameserverinstancesoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameSessionDetails

<a id="opIdDescribeGameSessionDetails"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameSessionDetails' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameSessionDetails' \
  -d '{
    "FleetId": {},
    "GameSessionId": {},
    "AliasId": {},
    "Location": {},
    "StatusFilter": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameSessionDetails`

<p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "GameSessionId": {},
  "AliasId": {},
  "Location": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describegamesessiondetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeGameSessionDetailsInput](#schemadescribegamesessiondetailsinput)|true|none|
|» FleetId|body|object|false|none|
|» GameSessionId|body|object|false|none|
|» AliasId|body|object|false|none|
|» Location|body|object|false|none|
|» StatusFilter|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameSessionDetails|

> Example responses

> 200 Response

```json
{
  "GameSessionDetails": {},
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

<h3 id="describegamesessiondetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameSessionDetailsOutput](#schemadescribegamesessiondetailsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameSessionPlacement

<a id="opIdDescribeGameSessionPlacement"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameSessionPlacement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameSessionPlacement' \
  -d '{
    "PlacementId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameSessionPlacement`

<p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>

> Body parameter

```json
{
  "PlacementId": {}
}
```

<h3 id="describegamesessionplacement-parameters">Parameters</h3>

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
|body|body|[DescribeGameSessionPlacementInput](#schemadescribegamesessionplacementinput)|true|none|
|» PlacementId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameSessionPlacement|

> Example responses

> 200 Response

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
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

<h3 id="describegamesessionplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameSessionPlacementOutput](#schemadescribegamesessionplacementoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameSessionQueues

<a id="opIdDescribeGameSessionQueues"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameSessionQueues' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameSessionQueues' \
  -d '{
    "Names": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameSessionQueues`

<p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>

> Body parameter

```json
{
  "Names": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describegamesessionqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeGameSessionQueuesInput](#schemadescribegamesessionqueuesinput)|true|none|
|» Names|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameSessionQueues|

> Example responses

> 200 Response

```json
{
  "GameSessionQueues": {},
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

<h3 id="describegamesessionqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameSessionQueuesOutput](#schemadescribegamesessionqueuesoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGameSessions

<a id="opIdDescribeGameSessions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeGameSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeGameSessions' \
  -d '{
    "FleetId": {},
    "GameSessionId": {},
    "AliasId": {},
    "Location": {},
    "StatusFilter": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeGameSessions`

<p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "GameSessionId": {},
  "AliasId": {},
  "Location": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describegamesessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeGameSessionsInput](#schemadescribegamesessionsinput)|true|none|
|» FleetId|body|object|false|none|
|» GameSessionId|body|object|false|none|
|» AliasId|body|object|false|none|
|» Location|body|object|false|none|
|» StatusFilter|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeGameSessions|

> Example responses

> 200 Response

```json
{
  "GameSessions": {},
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

<h3 id="describegamesessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGameSessionsOutput](#schemadescribegamesessionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInstances

<a id="opIdDescribeInstances"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeInstances' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeInstances' \
  -d '{
    "FleetId": {},
    "InstanceId": {},
    "Limit": {},
    "NextToken": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeInstances`

<p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "InstanceId": {},
  "Limit": {},
  "NextToken": {},
  "Location": {}
}
```

<h3 id="describeinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeInstancesInput](#schemadescribeinstancesinput)|true|none|
|» FleetId|body|object|true|none|
|» InstanceId|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeInstances|

> Example responses

> 200 Response

```json
{
  "Instances": {},
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

<h3 id="describeinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInstancesOutput](#schemadescribeinstancesoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMatchmaking

<a id="opIdDescribeMatchmaking"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeMatchmaking' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeMatchmaking' \
  -d '{
    "TicketIds": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeMatchmaking`

<p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>

> Body parameter

```json
{
  "TicketIds": {}
}
```

<h3 id="describematchmaking-parameters">Parameters</h3>

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
|body|body|[DescribeMatchmakingInput](#schemadescribematchmakinginput)|true|none|
|» TicketIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeMatchmaking|

> Example responses

> 200 Response

```json
{
  "TicketList": {}
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

<h3 id="describematchmaking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMatchmakingOutput](#schemadescribematchmakingoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMatchmakingConfigurations

<a id="opIdDescribeMatchmakingConfigurations"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeMatchmakingConfigurations' \
  -d '{
    "Names": {},
    "RuleSetName": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations`

<p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>

> Body parameter

```json
{
  "Names": {},
  "RuleSetName": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describematchmakingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMatchmakingConfigurationsInput](#schemadescribematchmakingconfigurationsinput)|true|none|
|» Names|body|object|false|none|
|» RuleSetName|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeMatchmakingConfigurations|

> Example responses

> 200 Response

```json
{
  "Configurations": {},
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

<h3 id="describematchmakingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMatchmakingConfigurationsOutput](#schemadescribematchmakingconfigurationsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMatchmakingRuleSets

<a id="opIdDescribeMatchmakingRuleSets"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeMatchmakingRuleSets' \
  -d '{
    "Names": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets`

<p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

> Body parameter

```json
{
  "Names": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describematchmakingrulesets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMatchmakingRuleSetsInput](#schemadescribematchmakingrulesetsinput)|true|none|
|» Names|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeMatchmakingRuleSets|

> Example responses

> 200 Response

```json
{
  "RuleSets": {},
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

<h3 id="describematchmakingrulesets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMatchmakingRuleSetsOutput](#schemadescribematchmakingrulesetsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePlayerSessions

<a id="opIdDescribePlayerSessions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribePlayerSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribePlayerSessions' \
  -d '{
    "GameSessionId": {},
    "PlayerId": {},
    "PlayerSessionId": {},
    "PlayerSessionStatusFilter": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribePlayerSessions`

<p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameSessionId": {},
  "PlayerId": {},
  "PlayerSessionId": {},
  "PlayerSessionStatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="describeplayersessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePlayerSessionsInput](#schemadescribeplayersessionsinput)|true|none|
|» GameSessionId|body|object|false|none|
|» PlayerId|body|object|false|none|
|» PlayerSessionId|body|object|false|none|
|» PlayerSessionStatusFilter|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribePlayerSessions|

> Example responses

> 200 Response

```json
{
  "PlayerSessions": {},
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

<h3 id="describeplayersessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePlayerSessionsOutput](#schemadescribeplayersessionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRuntimeConfiguration

<a id="opIdDescribeRuntimeConfiguration"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeRuntimeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeRuntimeConfiguration' \
  -d '{
    "FleetId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeRuntimeConfiguration`

<p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>

> Body parameter

```json
{
  "FleetId": {}
}
```

<h3 id="describeruntimeconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeRuntimeConfigurationInput](#schemadescriberuntimeconfigurationinput)|true|none|
|» FleetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeRuntimeConfiguration|

> Example responses

> 200 Response

```json
{
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
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

<h3 id="describeruntimeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRuntimeConfigurationOutput](#schemadescriberuntimeconfigurationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScalingPolicies

<a id="opIdDescribeScalingPolicies"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeScalingPolicies' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeScalingPolicies' \
  -d '{
    "FleetId": {},
    "StatusFilter": {},
    "Limit": {},
    "NextToken": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeScalingPolicies`

<p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>

> Body parameter

```json
{
  "FleetId": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {},
  "Location": {}
}
```

<h3 id="describescalingpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeScalingPoliciesInput](#schemadescribescalingpoliciesinput)|true|none|
|» FleetId|body|object|true|none|
|» StatusFilter|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeScalingPolicies|

> Example responses

> 200 Response

```json
{
  "ScalingPolicies": {},
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

<h3 id="describescalingpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScalingPoliciesOutput](#schemadescribescalingpoliciesoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeScript

<a id="opIdDescribeScript"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeScript' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeScript' \
  -d '{
    "ScriptId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeScript`

<p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "ScriptId": {}
}
```

<h3 id="describescript-parameters">Parameters</h3>

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
|body|body|[DescribeScriptInput](#schemadescribescriptinput)|true|none|
|» ScriptId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeScript|

> Example responses

> 200 Response

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
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

<h3 id="describescript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeScriptOutput](#schemadescribescriptoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcPeeringAuthorizations

<a id="opIdDescribeVpcPeeringAuthorizations"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeVpcPeeringAuthorizations' \
  -d '{}'
```

`POST /#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations`

<p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{}
```

<h3 id="describevpcpeeringauthorizations-parameters">Parameters</h3>

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
|body|body|[DescribeVpcPeeringAuthorizationsInput](#schemadescribevpcpeeringauthorizationsinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeVpcPeeringAuthorizations|

> Example responses

> 200 Response

```json
{
  "VpcPeeringAuthorizations": {}
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

<h3 id="describevpcpeeringauthorizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcPeeringAuthorizationsOutput](#schemadescribevpcpeeringauthorizationsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcPeeringConnections

<a id="opIdDescribeVpcPeeringConnections"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.DescribeVpcPeeringConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.DescribeVpcPeeringConnections' \
  -d '{
    "FleetId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.DescribeVpcPeeringConnections`

<p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {}
}
```

<h3 id="describevpcpeeringconnections-parameters">Parameters</h3>

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
|body|body|[DescribeVpcPeeringConnectionsInput](#schemadescribevpcpeeringconnectionsinput)|true|none|
|» FleetId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.DescribeVpcPeeringConnections|

> Example responses

> 200 Response

```json
{
  "VpcPeeringConnections": {}
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

<h3 id="describevpcpeeringconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcPeeringConnectionsOutput](#schemadescribevpcpeeringconnectionsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComputeAccess

<a id="opIdGetComputeAccess"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.GetComputeAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.GetComputeAccess' \
  -d '{
    "FleetId": {},
    "ComputeName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.GetComputeAccess`

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

<h3 id="getcomputeaccess-parameters">Parameters</h3>

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
|body|body|[GetComputeAccessInput](#schemagetcomputeaccessinput)|true|none|
|» FleetId|body|object|true|none|
|» ComputeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.GetComputeAccess|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ComputeName": {},
  "ComputeArn": {},
  "Credentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
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

<h3 id="getcomputeaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComputeAccessOutput](#schemagetcomputeaccessoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComputeAuthToken

<a id="opIdGetComputeAuthToken"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.GetComputeAuthToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.GetComputeAuthToken' \
  -d '{
    "FleetId": {},
    "ComputeName": {}
  }'
```

`POST /#X-Amz-Target=GameLift.GetComputeAuthToken`

Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.

> Body parameter

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

<h3 id="getcomputeauthtoken-parameters">Parameters</h3>

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
|body|body|[GetComputeAuthTokenInput](#schemagetcomputeauthtokeninput)|true|none|
|» FleetId|body|object|true|none|
|» ComputeName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.GetComputeAuthToken|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ComputeName": {},
  "ComputeArn": {},
  "AuthToken": {},
  "ExpirationTimestamp": {}
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

<h3 id="getcomputeauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComputeAuthTokenOutput](#schemagetcomputeauthtokenoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGameSessionLogUrl

<a id="opIdGetGameSessionLogUrl"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.GetGameSessionLogUrl' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.GetGameSessionLogUrl' \
  -d '{
    "GameSessionId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.GetGameSessionLogUrl`

<p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameSessionId": {}
}
```

<h3 id="getgamesessionlogurl-parameters">Parameters</h3>

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
|body|body|[GetGameSessionLogUrlInput](#schemagetgamesessionlogurlinput)|true|none|
|» GameSessionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.GetGameSessionLogUrl|

> Example responses

> 200 Response

```json
{
  "PreSignedUrl": {}
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

<h3 id="getgamesessionlogurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGameSessionLogUrlOutput](#schemagetgamesessionlogurloutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInstanceAccess

<a id="opIdGetInstanceAccess"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.GetInstanceAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.GetInstanceAccess' \
  -d '{
    "FleetId": {},
    "InstanceId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.GetInstanceAccess`

<p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "InstanceId": {}
}
```

<h3 id="getinstanceaccess-parameters">Parameters</h3>

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
|body|body|[GetInstanceAccessInput](#schemagetinstanceaccessinput)|true|none|
|» FleetId|body|object|true|none|
|» InstanceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.GetInstanceAccess|

> Example responses

> 200 Response

```json
{
  "InstanceAccess": {
    "FleetId": {},
    "InstanceId": {},
    "IpAddress": {},
    "OperatingSystem": {},
    "Credentials": {
      "UserName": {},
      "Secret": {}
    }
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

<h3 id="getinstanceaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInstanceAccessOutput](#schemagetinstanceaccessoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAliases

<a id="opIdListAliases"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListAliases' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListAliases' \
  -d '{
    "RoutingStrategyType": {},
    "Name": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListAliases`

<p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "RoutingStrategyType": {},
  "Name": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listaliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAliasesInput](#schemalistaliasesinput)|true|none|
|» RoutingStrategyType|body|object|false|none|
|» Name|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListAliases|

> Example responses

> 200 Response

```json
{
  "Aliases": {},
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

<h3 id="listaliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAliasesOutput](#schemalistaliasesoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBuilds

<a id="opIdListBuilds"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListBuilds' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListBuilds' \
  -d '{
    "Status": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListBuilds`

<p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Status": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listbuilds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBuildsInput](#schemalistbuildsinput)|true|none|
|» Status|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListBuilds|

> Example responses

> 200 Response

```json
{
  "Builds": {},
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

<h3 id="listbuilds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBuildsOutput](#schemalistbuildsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCompute

<a id="opIdListCompute"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListCompute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListCompute' \
  -d '{
    "FleetId": {},
    "Location": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListCompute`

Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.

> Body parameter

```json
{
  "FleetId": {},
  "Location": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listcompute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListComputeInput](#schemalistcomputeinput)|true|none|
|» FleetId|body|object|true|none|
|» Location|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListCompute|

> Example responses

> 200 Response

```json
{
  "ComputeList": {},
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

<h3 id="listcompute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComputeOutput](#schemalistcomputeoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFleets

<a id="opIdListFleets"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListFleets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListFleets' \
  -d '{
    "BuildId": {},
    "ScriptId": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListFleets`

<p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "BuildId": {},
  "ScriptId": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listfleets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListFleetsInput](#schemalistfleetsinput)|true|none|
|» BuildId|body|object|false|none|
|» ScriptId|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListFleets|

> Example responses

> 200 Response

```json
{
  "FleetIds": {},
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

<h3 id="listfleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFleetsOutput](#schemalistfleetsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGameServerGroups

<a id="opIdListGameServerGroups"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListGameServerGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListGameServerGroups' \
  -d '{
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListGameServerGroups`

Lists a game server groups.

> Body parameter

```json
{
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listgameservergroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListGameServerGroupsInput](#schemalistgameservergroupsinput)|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListGameServerGroups|

> Example responses

> 200 Response

```json
{
  "GameServerGroups": {},
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

<h3 id="listgameservergroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGameServerGroupsOutput](#schemalistgameservergroupsoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGameServers

<a id="opIdListGameServers"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListGameServers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListGameServers' \
  -d '{
    "GameServerGroupName": {},
    "SortOrder": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListGameServers`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "SortOrder": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listgameservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListGameServersInput](#schemalistgameserversinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» SortOrder|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListGameServers|

> Example responses

> 200 Response

```json
{
  "GameServers": {},
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

<h3 id="listgameservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGameServersOutput](#schemalistgameserversoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLocations

<a id="opIdListLocations"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListLocations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListLocations' \
  -d '{
    "Filters": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListLocations`

Lists all custom and Amazon Web Services locations.

> Body parameter

```json
{
  "Filters": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLocationsInput](#schemalistlocationsinput)|true|none|
|» Filters|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListLocations|

> Example responses

> 200 Response

```json
{
  "Locations": {},
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

<h3 id="listlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLocationsOutput](#schemalistlocationsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListScripts

<a id="opIdListScripts"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListScripts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListScripts' \
  -d '{
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListScripts`

<p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="listscripts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListScriptsInput](#schemalistscriptsinput)|true|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ListScripts|

> Example responses

> 200 Response

```json
{
  "Scripts": {},
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

<h3 id="listscripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListScriptsOutput](#schemalistscriptsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ListTagsForResource`

<p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

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
|X-Amz-Target|GameLift.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutScalingPolicy

<a id="opIdPutScalingPolicy"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.PutScalingPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.PutScalingPolicy' \
  -d '{
    "Name": {},
    "FleetId": {},
    "ScalingAdjustment": {},
    "ScalingAdjustmentType": {},
    "Threshold": {},
    "ComparisonOperator": {},
    "EvaluationPeriods": {},
    "MetricName": {},
    "PolicyType": {},
    "TargetConfiguration": {
      "TargetValue": {}
    }
  }'
```

`POST /#X-Amz-Target=GameLift.PutScalingPolicy`

<p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>

> Body parameter

```json
{
  "Name": {},
  "FleetId": {},
  "ScalingAdjustment": {},
  "ScalingAdjustmentType": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "EvaluationPeriods": {},
  "MetricName": {},
  "PolicyType": {},
  "TargetConfiguration": {
    "TargetValue": {}
  }
}
```

<h3 id="putscalingpolicy-parameters">Parameters</h3>

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
|body|body|[PutScalingPolicyInput](#schemaputscalingpolicyinput)|true|none|
|» Name|body|object|true|none|
|» FleetId|body|object|true|none|
|» ScalingAdjustment|body|object|false|none|
|» ScalingAdjustmentType|body|object|false|none|
|» Threshold|body|object|false|none|
|» ComparisonOperator|body|object|false|none|
|» EvaluationPeriods|body|object|false|none|
|» MetricName|body|object|true|none|
|» PolicyType|body|object|false|none|
|» TargetConfiguration|body|object|false|none|
|» » TargetValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.PutScalingPolicy|

> Example responses

> 200 Response

```json
{
  "Name": {}
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

<h3 id="putscalingpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutScalingPolicyOutput](#schemaputscalingpolicyoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterCompute

<a id="opIdRegisterCompute"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.RegisterCompute' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.RegisterCompute' \
  -d '{
    "FleetId": {},
    "ComputeName": {},
    "CertificatePath": {},
    "DnsName": {},
    "IpAddress": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.RegisterCompute`

<p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>

> Body parameter

```json
{
  "FleetId": {},
  "ComputeName": {},
  "CertificatePath": {},
  "DnsName": {},
  "IpAddress": {},
  "Location": {}
}
```

<h3 id="registercompute-parameters">Parameters</h3>

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
|body|body|[RegisterComputeInput](#schemaregistercomputeinput)|true|none|
|» FleetId|body|object|true|none|
|» ComputeName|body|object|true|none|
|» CertificatePath|body|object|false|none|
|» DnsName|body|object|false|none|
|» IpAddress|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.RegisterCompute|

> Example responses

> 200 Response

```json
{
  "Compute": {
    "FleetId": {},
    "FleetArn": {},
    "ComputeName": {},
    "ComputeArn": {},
    "IpAddress": {},
    "DnsName": {},
    "ComputeStatus": {},
    "Location": {},
    "CreationTime": {},
    "OperatingSystem": {},
    "Type": {},
    "GameLiftServiceSdkEndpoint": {}
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

<h3 id="registercompute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterComputeOutput](#schemaregistercomputeoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterGameServer

<a id="opIdRegisterGameServer"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.RegisterGameServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.RegisterGameServer' \
  -d '{
    "GameServerGroupName": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {}
  }'
```

`POST /#X-Amz-Target=GameLift.RegisterGameServer`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "InstanceId": {},
  "ConnectionInfo": {},
  "GameServerData": {}
}
```

<h3 id="registergameserver-parameters">Parameters</h3>

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
|body|body|[RegisterGameServerInput](#schemaregistergameserverinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» GameServerId|body|object|true|none|
|» InstanceId|body|object|true|none|
|» ConnectionInfo|body|object|false|none|
|» GameServerData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.RegisterGameServer|

> Example responses

> 200 Response

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
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

<h3 id="registergameserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterGameServerOutput](#schemaregistergameserveroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RequestUploadCredentials

<a id="opIdRequestUploadCredentials"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.RequestUploadCredentials' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.RequestUploadCredentials' \
  -d '{
    "BuildId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.RequestUploadCredentials`

<p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "BuildId": {}
}
```

<h3 id="requestuploadcredentials-parameters">Parameters</h3>

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
|body|body|[RequestUploadCredentialsInput](#schemarequestuploadcredentialsinput)|true|none|
|» BuildId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.RequestUploadCredentials|

> Example responses

> 200 Response

```json
{
  "UploadCredentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
  },
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
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

<h3 id="requestuploadcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestUploadCredentialsOutput](#schemarequestuploadcredentialsoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResolveAlias

<a id="opIdResolveAlias"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ResolveAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ResolveAlias' \
  -d '{
    "AliasId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ResolveAlias`

<p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "AliasId": {}
}
```

<h3 id="resolvealias-parameters">Parameters</h3>

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
|body|body|[ResolveAliasInput](#schemaresolvealiasinput)|true|none|
|» AliasId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ResolveAlias|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {}
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

<h3 id="resolvealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResolveAliasOutput](#schemaresolvealiasoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeGameServerGroup

<a id="opIdResumeGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ResumeGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ResumeGameServerGroup' \
  -d '{
    "GameServerGroupName": {},
    "ResumeActions": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ResumeGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "ResumeActions": {}
}
```

<h3 id="resumegameservergroup-parameters">Parameters</h3>

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
|body|body|[ResumeGameServerGroupInput](#schemaresumegameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» ResumeActions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ResumeGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="resumegameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResumeGameServerGroupOutput](#schemaresumegameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchGameSessions

<a id="opIdSearchGameSessions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.SearchGameSessions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.SearchGameSessions' \
  -d '{
    "FleetId": {},
    "AliasId": {},
    "Location": {},
    "FilterExpression": {},
    "SortExpression": {},
    "Limit": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=GameLift.SearchGameSessions`

<p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "AliasId": {},
  "Location": {},
  "FilterExpression": {},
  "SortExpression": {},
  "Limit": {},
  "NextToken": {}
}
```

<h3 id="searchgamesessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Limit|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SearchGameSessionsInput](#schemasearchgamesessionsinput)|true|none|
|» FleetId|body|object|false|none|
|» AliasId|body|object|false|none|
|» Location|body|object|false|none|
|» FilterExpression|body|object|false|none|
|» SortExpression|body|object|false|none|
|» Limit|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.SearchGameSessions|

> Example responses

> 200 Response

```json
{
  "GameSessions": {},
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

<h3 id="searchgamesessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchGameSessionsOutput](#schemasearchgamesessionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|TerminalRoutingStrategyException|[TerminalRoutingStrategyException](#schematerminalroutingstrategyexception)|
|485|485|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFleetActions

<a id="opIdStartFleetActions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StartFleetActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StartFleetActions' \
  -d '{
    "FleetId": {},
    "Actions": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StartFleetActions`

<p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Actions": {},
  "Location": {}
}
```

<h3 id="startfleetactions-parameters">Parameters</h3>

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
|body|body|[StartFleetActionsInput](#schemastartfleetactionsinput)|true|none|
|» FleetId|body|object|true|none|
|» Actions|body|object|true|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StartFleetActions|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {}
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

<h3 id="startfleetactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFleetActionsOutput](#schemastartfleetactionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartGameSessionPlacement

<a id="opIdStartGameSessionPlacement"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StartGameSessionPlacement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StartGameSessionPlacement' \
  -d '{
    "PlacementId": {},
    "GameSessionQueueName": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "PlayerLatencies": {},
    "DesiredPlayerSessions": {},
    "GameSessionData": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StartGameSessionPlacement`

<p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>

> Body parameter

```json
{
  "PlacementId": {},
  "GameSessionQueueName": {},
  "GameProperties": {},
  "MaximumPlayerSessionCount": {},
  "GameSessionName": {},
  "PlayerLatencies": {},
  "DesiredPlayerSessions": {},
  "GameSessionData": {}
}
```

<h3 id="startgamesessionplacement-parameters">Parameters</h3>

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
|body|body|[StartGameSessionPlacementInput](#schemastartgamesessionplacementinput)|true|none|
|» PlacementId|body|object|true|none|
|» GameSessionQueueName|body|object|true|none|
|» GameProperties|body|object|false|none|
|» MaximumPlayerSessionCount|body|object|true|none|
|» GameSessionName|body|object|false|none|
|» PlayerLatencies|body|object|false|none|
|» DesiredPlayerSessions|body|object|false|none|
|» GameSessionData|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StartGameSessionPlacement|

> Example responses

> 200 Response

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
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

<h3 id="startgamesessionplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartGameSessionPlacementOutput](#schemastartgamesessionplacementoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMatchBackfill

<a id="opIdStartMatchBackfill"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StartMatchBackfill' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StartMatchBackfill' \
  -d '{
    "TicketId": {},
    "ConfigurationName": {},
    "GameSessionArn": {},
    "Players": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StartMatchBackfill`

<p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

> Body parameter

```json
{
  "TicketId": {},
  "ConfigurationName": {},
  "GameSessionArn": {},
  "Players": {}
}
```

<h3 id="startmatchbackfill-parameters">Parameters</h3>

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
|body|body|[StartMatchBackfillInput](#schemastartmatchbackfillinput)|true|none|
|» TicketId|body|object|false|none|
|» ConfigurationName|body|object|true|none|
|» GameSessionArn|body|object|false|none|
|» Players|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StartMatchBackfill|

> Example responses

> 200 Response

```json
{
  "MatchmakingTicket": {
    "TicketId": {},
    "ConfigurationName": {},
    "ConfigurationArn": {},
    "Status": {},
    "StatusReason": {},
    "StatusMessage": {},
    "StartTime": {},
    "EndTime": {},
    "Players": {},
    "GameSessionConnectionInfo": {
      "GameSessionArn": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "MatchedPlayerSessions": {}
    },
    "EstimatedWaitTime": {}
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

<h3 id="startmatchbackfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMatchBackfillOutput](#schemastartmatchbackfilloutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartMatchmaking

<a id="opIdStartMatchmaking"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StartMatchmaking' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StartMatchmaking' \
  -d '{
    "TicketId": {},
    "ConfigurationName": {},
    "Players": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StartMatchmaking`

<p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>

> Body parameter

```json
{
  "TicketId": {},
  "ConfigurationName": {},
  "Players": {}
}
```

<h3 id="startmatchmaking-parameters">Parameters</h3>

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
|body|body|[StartMatchmakingInput](#schemastartmatchmakinginput)|true|none|
|» TicketId|body|object|false|none|
|» ConfigurationName|body|object|true|none|
|» Players|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StartMatchmaking|

> Example responses

> 200 Response

```json
{
  "MatchmakingTicket": {
    "TicketId": {},
    "ConfigurationName": {},
    "ConfigurationArn": {},
    "Status": {},
    "StatusReason": {},
    "StatusMessage": {},
    "StartTime": {},
    "EndTime": {},
    "Players": {},
    "GameSessionConnectionInfo": {
      "GameSessionArn": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "MatchedPlayerSessions": {}
    },
    "EstimatedWaitTime": {}
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

<h3 id="startmatchmaking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartMatchmakingOutput](#schemastartmatchmakingoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopFleetActions

<a id="opIdStopFleetActions"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StopFleetActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StopFleetActions' \
  -d '{
    "FleetId": {},
    "Actions": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StopFleetActions`

<p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Actions": {},
  "Location": {}
}
```

<h3 id="stopfleetactions-parameters">Parameters</h3>

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
|body|body|[StopFleetActionsInput](#schemastopfleetactionsinput)|true|none|
|» FleetId|body|object|true|none|
|» Actions|body|object|true|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StopFleetActions|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {}
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

<h3 id="stopfleetactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopFleetActionsOutput](#schemastopfleetactionsoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopGameSessionPlacement

<a id="opIdStopGameSessionPlacement"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StopGameSessionPlacement' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StopGameSessionPlacement' \
  -d '{
    "PlacementId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StopGameSessionPlacement`

Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.

> Body parameter

```json
{
  "PlacementId": {}
}
```

<h3 id="stopgamesessionplacement-parameters">Parameters</h3>

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
|body|body|[StopGameSessionPlacementInput](#schemastopgamesessionplacementinput)|true|none|
|» PlacementId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StopGameSessionPlacement|

> Example responses

> 200 Response

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
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

<h3 id="stopgamesessionplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopGameSessionPlacementOutput](#schemastopgamesessionplacementoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopMatchmaking

<a id="opIdStopMatchmaking"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.StopMatchmaking' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.StopMatchmaking' \
  -d '{
    "TicketId": {}
  }'
```

`POST /#X-Amz-Target=GameLift.StopMatchmaking`

<p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>

> Body parameter

```json
{
  "TicketId": {}
}
```

<h3 id="stopmatchmaking-parameters">Parameters</h3>

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
|body|body|[StopMatchmakingInput](#schemastopmatchmakinginput)|true|none|
|» TicketId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.StopMatchmaking|

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

<h3 id="stopmatchmaking-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopMatchmakingOutput](#schemastopmatchmakingoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SuspendGameServerGroup

<a id="opIdSuspendGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.SuspendGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.SuspendGameServerGroup' \
  -d '{
    "GameServerGroupName": {},
    "SuspendActions": {}
  }'
```

`POST /#X-Amz-Target=GameLift.SuspendGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "SuspendActions": {}
}
```

<h3 id="suspendgameservergroup-parameters">Parameters</h3>

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
|body|body|[SuspendGameServerGroupInput](#schemasuspendgameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» SuspendActions|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.SuspendGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="suspendgameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SuspendGameServerGroupOutput](#schemasuspendgameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=GameLift.TagResource`

<p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

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
|X-Amz-Target|GameLift.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UntagResource`

<p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

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
|X-Amz-Target|GameLift.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|TaggingFailedException|[TaggingFailedException](#schemataggingfailedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAlias

<a id="opIdUpdateAlias"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateAlias' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateAlias' \
  -d '{
    "AliasId": {},
    "Name": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    }
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateAlias`

<p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "AliasId": {},
  "Name": {},
  "Description": {},
  "RoutingStrategy": {
    "Type": {},
    "FleetId": {},
    "Message": {}
  }
}
```

<h3 id="updatealias-parameters">Parameters</h3>

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
|body|body|[UpdateAliasInput](#schemaupdatealiasinput)|true|none|
|» AliasId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» RoutingStrategy|body|object|false|none|
|» » Type|body|object|false|none|
|» » FleetId|body|object|false|none|
|» » Message|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateAlias|

> Example responses

> 200 Response

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="updatealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAliasOutput](#schemaupdatealiasoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBuild

<a id="opIdUpdateBuild"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateBuild' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateBuild' \
  -d '{
    "BuildId": {},
    "Name": {},
    "Version": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateBuild`

<p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "BuildId": {},
  "Name": {},
  "Version": {}
}
```

<h3 id="updatebuild-parameters">Parameters</h3>

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
|body|body|[UpdateBuildInput](#schemaupdatebuildinput)|true|none|
|» BuildId|body|object|true|none|
|» Name|body|object|false|none|
|» Version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateBuild|

> Example responses

> 200 Response

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
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

<h3 id="updatebuild-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBuildOutput](#schemaupdatebuildoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFleetAttributes

<a id="opIdUpdateFleetAttributes"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateFleetAttributes' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateFleetAttributes' \
  -d '{
    "FleetId": {},
    "Name": {},
    "Description": {},
    "NewGameSessionProtectionPolicy": {},
    "ResourceCreationLimitPolicy": {
      "NewGameSessionsPerCreator": {},
      "PolicyPeriodInMinutes": {}
    },
    "MetricGroups": {},
    "AnywhereConfiguration": {
      "Cost": {}
    }
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateFleetAttributes`

<p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "Name": {},
  "Description": {},
  "NewGameSessionProtectionPolicy": {},
  "ResourceCreationLimitPolicy": {
    "NewGameSessionsPerCreator": {},
    "PolicyPeriodInMinutes": {}
  },
  "MetricGroups": {},
  "AnywhereConfiguration": {
    "Cost": {}
  }
}
```

<h3 id="updatefleetattributes-parameters">Parameters</h3>

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
|body|body|[UpdateFleetAttributesInput](#schemaupdatefleetattributesinput)|true|none|
|» FleetId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» NewGameSessionProtectionPolicy|body|object|false|none|
|» ResourceCreationLimitPolicy|body|object|false|none|
|» » NewGameSessionsPerCreator|body|object|false|none|
|» » PolicyPeriodInMinutes|body|object|false|none|
|» MetricGroups|body|object|false|none|
|» AnywhereConfiguration|body|object|false|none|
|» » Cost|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateFleetAttributes|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {}
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

<h3 id="updatefleetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFleetAttributesOutput](#schemaupdatefleetattributesoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFleetCapacity

<a id="opIdUpdateFleetCapacity"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateFleetCapacity' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateFleetCapacity' \
  -d '{
    "FleetId": {},
    "DesiredInstances": {},
    "MinSize": {},
    "MaxSize": {},
    "Location": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateFleetCapacity`

<p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "DesiredInstances": {},
  "MinSize": {},
  "MaxSize": {},
  "Location": {}
}
```

<h3 id="updatefleetcapacity-parameters">Parameters</h3>

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
|body|body|[UpdateFleetCapacityInput](#schemaupdatefleetcapacityinput)|true|none|
|» FleetId|body|object|true|none|
|» DesiredInstances|body|object|false|none|
|» MinSize|body|object|false|none|
|» MaxSize|body|object|false|none|
|» Location|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateFleetCapacity|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {},
  "Location": {}
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

> 487 Response

```json
null
```

<h3 id="updatefleetcapacity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFleetCapacityOutput](#schemaupdatefleetcapacityoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|487|487|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFleetPortSettings

<a id="opIdUpdateFleetPortSettings"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateFleetPortSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateFleetPortSettings' \
  -d '{
    "FleetId": {},
    "InboundPermissionAuthorizations": {},
    "InboundPermissionRevocations": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateFleetPortSettings`

<p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "InboundPermissionAuthorizations": {},
  "InboundPermissionRevocations": {}
}
```

<h3 id="updatefleetportsettings-parameters">Parameters</h3>

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
|body|body|[UpdateFleetPortSettingsInput](#schemaupdatefleetportsettingsinput)|true|none|
|» FleetId|body|object|true|none|
|» InboundPermissionAuthorizations|body|object|false|none|
|» InboundPermissionRevocations|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateFleetPortSettings|

> Example responses

> 200 Response

```json
{
  "FleetId": {},
  "FleetArn": {}
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

<h3 id="updatefleetportsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFleetPortSettingsOutput](#schemaupdatefleetportsettingsoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|486|486|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGameServer

<a id="opIdUpdateGameServer"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateGameServer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateGameServer' \
  -d '{
    "GameServerGroupName": {},
    "GameServerId": {},
    "GameServerData": {},
    "UtilizationStatus": {},
    "HealthCheck": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateGameServer`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "GameServerData": {},
  "UtilizationStatus": {},
  "HealthCheck": {}
}
```

<h3 id="updategameserver-parameters">Parameters</h3>

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
|body|body|[UpdateGameServerInput](#schemaupdategameserverinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» GameServerId|body|object|true|none|
|» GameServerData|body|object|false|none|
|» UtilizationStatus|body|object|false|none|
|» HealthCheck|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateGameServer|

> Example responses

> 200 Response

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
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

<h3 id="updategameserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGameServerOutput](#schemaupdategameserveroutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGameServerGroup

<a id="opIdUpdateGameServerGroup"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateGameServerGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateGameServerGroup' \
  -d '{
    "GameServerGroupName": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "GameServerProtectionPolicy": {},
    "BalancingStrategy": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateGameServerGroup`

<p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>

> Body parameter

```json
{
  "GameServerGroupName": {},
  "RoleArn": {},
  "InstanceDefinitions": {},
  "GameServerProtectionPolicy": {},
  "BalancingStrategy": {}
}
```

<h3 id="updategameservergroup-parameters">Parameters</h3>

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
|body|body|[UpdateGameServerGroupInput](#schemaupdategameservergroupinput)|true|none|
|» GameServerGroupName|body|object|true|none|
|» RoleArn|body|object|false|none|
|» InstanceDefinitions|body|object|false|none|
|» GameServerProtectionPolicy|body|object|false|none|
|» BalancingStrategy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateGameServerGroup|

> Example responses

> 200 Response

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
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

<h3 id="updategameservergroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGameServerGroupOutput](#schemaupdategameservergroupoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGameSession

<a id="opIdUpdateGameSession"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateGameSession' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateGameSession' \
  -d '{
    "GameSessionId": {},
    "MaximumPlayerSessionCount": {},
    "Name": {},
    "PlayerSessionCreationPolicy": {},
    "ProtectionPolicy": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateGameSession`

<p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "GameSessionId": {},
  "MaximumPlayerSessionCount": {},
  "Name": {},
  "PlayerSessionCreationPolicy": {},
  "ProtectionPolicy": {}
}
```

<h3 id="updategamesession-parameters">Parameters</h3>

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
|body|body|[UpdateGameSessionInput](#schemaupdategamesessioninput)|true|none|
|» GameSessionId|body|object|true|none|
|» MaximumPlayerSessionCount|body|object|false|none|
|» Name|body|object|false|none|
|» PlayerSessionCreationPolicy|body|object|false|none|
|» ProtectionPolicy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateGameSession|

> Example responses

> 200 Response

```json
{
  "GameSession": {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
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

<h3 id="updategamesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGameSessionOutput](#schemaupdategamesessionoutput)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|484|484|InvalidGameSessionStatusException|[InvalidGameSessionStatusException](#schemainvalidgamesessionstatusexception)|
|485|485|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGameSessionQueue

<a id="opIdUpdateGameSessionQueue"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateGameSessionQueue' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateGameSessionQueue' \
  -d '{
    "Name": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateGameSessionQueue`

<p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>

> Body parameter

```json
{
  "Name": {},
  "TimeoutInSeconds": {},
  "PlayerLatencyPolicies": {},
  "Destinations": {},
  "FilterConfiguration": {
    "AllowedLocations": {}
  },
  "PriorityConfiguration": {
    "PriorityOrder": {},
    "LocationOrder": {}
  },
  "CustomEventData": {},
  "NotificationTarget": {}
}
```

<h3 id="updategamesessionqueue-parameters">Parameters</h3>

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
|body|body|[UpdateGameSessionQueueInput](#schemaupdategamesessionqueueinput)|true|none|
|» Name|body|object|true|none|
|» TimeoutInSeconds|body|object|false|none|
|» PlayerLatencyPolicies|body|object|false|none|
|» Destinations|body|object|false|none|
|» FilterConfiguration|body|object|false|none|
|» » AllowedLocations|body|object|false|none|
|» PriorityConfiguration|body|object|false|none|
|» » PriorityOrder|body|object|false|none|
|» » LocationOrder|body|object|false|none|
|» CustomEventData|body|object|false|none|
|» NotificationTarget|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateGameSessionQueue|

> Example responses

> 200 Response

```json
{
  "GameSessionQueue": {
    "Name": {},
    "GameSessionQueueArn": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
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

<h3 id="updategamesessionqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGameSessionQueueOutput](#schemaupdategamesessionqueueoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMatchmakingConfiguration

<a id="opIdUpdateMatchmakingConfiguration"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateMatchmakingConfiguration' \
  -d '{
    "Name": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration`

<p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "GameSessionQueueArns": {},
  "RequestTimeoutSeconds": {},
  "AcceptanceTimeoutSeconds": {},
  "AcceptanceRequired": {},
  "RuleSetName": {},
  "NotificationTarget": {},
  "AdditionalPlayerCount": {},
  "CustomEventData": {},
  "GameProperties": {},
  "GameSessionData": {},
  "BackfillMode": {},
  "FlexMatchMode": {}
}
```

<h3 id="updatematchmakingconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateMatchmakingConfigurationInput](#schemaupdatematchmakingconfigurationinput)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» GameSessionQueueArns|body|object|false|none|
|» RequestTimeoutSeconds|body|object|false|none|
|» AcceptanceTimeoutSeconds|body|object|false|none|
|» AcceptanceRequired|body|object|false|none|
|» RuleSetName|body|object|false|none|
|» NotificationTarget|body|object|false|none|
|» AdditionalPlayerCount|body|object|false|none|
|» CustomEventData|body|object|false|none|
|» GameProperties|body|object|false|none|
|» GameSessionData|body|object|false|none|
|» BackfillMode|body|object|false|none|
|» FlexMatchMode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateMatchmakingConfiguration|

> Example responses

> 200 Response

```json
{
  "Configuration": {
    "Name": {},
    "ConfigurationArn": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "RuleSetArn": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "CreationTime": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
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

<h3 id="updatematchmakingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMatchmakingConfigurationOutput](#schemaupdatematchmakingconfigurationoutput)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuntimeConfiguration

<a id="opIdUpdateRuntimeConfiguration"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateRuntimeConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateRuntimeConfiguration' \
  -d '{
    "FleetId": {},
    "RuntimeConfiguration": {
      "ServerProcesses": {},
      "MaxConcurrentGameSessionActivations": {},
      "GameSessionActivationTimeoutSeconds": {}
    }
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateRuntimeConfiguration`

<p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>

> Body parameter

```json
{
  "FleetId": {},
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  }
}
```

<h3 id="updateruntimeconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateRuntimeConfigurationInput](#schemaupdateruntimeconfigurationinput)|true|none|
|» FleetId|body|object|true|none|
|» RuntimeConfiguration|body|object|true|none|
|» » ServerProcesses|body|object|false|none|
|» » MaxConcurrentGameSessionActivations|body|object|false|none|
|» » GameSessionActivationTimeoutSeconds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateRuntimeConfiguration|

> Example responses

> 200 Response

```json
{
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
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

<h3 id="updateruntimeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuntimeConfigurationOutput](#schemaupdateruntimeconfigurationoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|482|482|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidFleetStatusException|[InvalidFleetStatusException](#schemainvalidfleetstatusexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateScript

<a id="opIdUpdateScript"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.UpdateScript' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.UpdateScript' \
  -d '{
    "ScriptId": {},
    "Name": {},
    "Version": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    },
    "ZipFile": {}
  }'
```

`POST /#X-Amz-Target=GameLift.UpdateScript`

<p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

> Body parameter

```json
{
  "ScriptId": {},
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "ZipFile": {}
}
```

<h3 id="updatescript-parameters">Parameters</h3>

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
|body|body|[UpdateScriptInput](#schemaupdatescriptinput)|true|none|
|» ScriptId|body|object|true|none|
|» Name|body|object|false|none|
|» Version|body|object|false|none|
|» StorageLocation|body|object|false|none|
|» » Bucket|body|object|false|none|
|» » Key|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» » ObjectVersion|body|object|false|none|
|» ZipFile|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.UpdateScript|

> Example responses

> 200 Response

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
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

<h3 id="updatescript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateScriptOutput](#schemaupdatescriptoutput)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ValidateMatchmakingRuleSet

<a id="opIdValidateMatchmakingRuleSet"></a>

> Code samples

```bash
curl 'https://gamelift.us-east-1.amazonaws.com/#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: GameLift.ValidateMatchmakingRuleSet' \
  -d '{
    "RuleSetBody": {}
  }'
```

`POST /#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet`

<p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>

> Body parameter

```json
{
  "RuleSetBody": {}
}
```

<h3 id="validatematchmakingruleset-parameters">Parameters</h3>

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
|body|body|[ValidateMatchmakingRuleSetInput](#schemavalidatematchmakingrulesetinput)|true|none|
|» RuleSetBody|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|GameLift.ValidateMatchmakingRuleSet|

> Example responses

> 200 Response

```json
{
  "Valid": {}
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

<h3 id="validatematchmakingruleset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ValidateMatchmakingRuleSetOutput](#schemavalidatematchmakingrulesetoutput)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|UnsupportedRegionException|[UnsupportedRegionException](#schemaunsupportedregionexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptMatchOutput">AcceptMatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptmatchoutput"></a>
<a id="schema_AcceptMatchOutput"></a>
<a id="tocSacceptmatchoutput"></a>
<a id="tocsacceptmatchoutput"></a>

```json
{}
```

<h2 id="tocS_AcceptMatchInput">AcceptMatchInput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptmatchinput"></a>
<a id="schema_AcceptMatchInput"></a>
<a id="tocSacceptmatchinput"></a>
<a id="tocsacceptmatchinput"></a>

```json
{
  "TicketId": {},
  "PlayerIds": {},
  "AcceptanceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketId|object|true|none|none|
|PlayerIds|object|true|none|none|
|AcceptanceType|object|true|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

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

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedRegionException">UnsupportedRegionException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedregionexception"></a>
<a id="schema_UnsupportedRegionException"></a>
<a id="tocSunsupportedregionexception"></a>
<a id="tocsunsupportedregionexception"></a>

```json
null
```

<h2 id="tocS_ClaimGameServerOutput">ClaimGameServerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaclaimgameserveroutput"></a>
<a id="schema_ClaimGameServerOutput"></a>
<a id="tocSclaimgameserveroutput"></a>
<a id="tocsclaimgameserveroutput"></a>

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServer|object|false|none|none|

<h2 id="tocS_ClaimGameServerInput">ClaimGameServerInput</h2>
<!-- backwards compatibility -->
<a id="schemaclaimgameserverinput"></a>
<a id="schema_ClaimGameServerInput"></a>
<a id="tocSclaimgameserverinput"></a>
<a id="tocsclaimgameserverinput"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "GameServerData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|GameServerId|object|false|none|none|
|GameServerData|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_OutOfCapacityException">OutOfCapacityException</h2>
<!-- backwards compatibility -->
<a id="schemaoutofcapacityexception"></a>
<a id="schema_OutOfCapacityException"></a>
<a id="tocSoutofcapacityexception"></a>
<a id="tocsoutofcapacityexception"></a>

```json
null
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_CreateAliasOutput">CreateAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasoutput"></a>
<a id="schema_CreateAliasOutput"></a>
<a id="tocScreatealiasoutput"></a>
<a id="tocscreatealiasoutput"></a>

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alias|object|false|none|none|

<h2 id="tocS_CreateAliasInput">CreateAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatealiasinput"></a>
<a id="schema_CreateAliasInput"></a>
<a id="tocScreatealiasinput"></a>
<a id="tocscreatealiasinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "RoutingStrategy": {
    "Type": {},
    "FleetId": {},
    "Message": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|RoutingStrategy|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_TaggingFailedException">TaggingFailedException</h2>
<!-- backwards compatibility -->
<a id="schemataggingfailedexception"></a>
<a id="schema_TaggingFailedException"></a>
<a id="tocStaggingfailedexception"></a>
<a id="tocstaggingfailedexception"></a>

```json
null
```

<h2 id="tocS_CreateBuildOutput">CreateBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebuildoutput"></a>
<a id="schema_CreateBuildOutput"></a>
<a id="tocScreatebuildoutput"></a>
<a id="tocscreatebuildoutput"></a>

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
  },
  "UploadCredentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
  },
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Build|object|false|none|none|
|UploadCredentials|object|false|none|none|
|StorageLocation|object|false|none|none|

<h2 id="tocS_CreateBuildInput">CreateBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebuildinput"></a>
<a id="schema_CreateBuildInput"></a>
<a id="tocScreatebuildinput"></a>
<a id="tocscreatebuildinput"></a>

```json
{
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "OperatingSystem": {},
  "Tags": {},
  "ServerSdkVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|
|StorageLocation|object|false|none|none|
|OperatingSystem|object|false|none|none|
|Tags|object|false|none|none|
|ServerSdkVersion|object|false|none|none|

<h2 id="tocS_CreateFleetOutput">CreateFleetOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetoutput"></a>
<a id="schema_CreateFleetOutput"></a>
<a id="tocScreatefleetoutput"></a>
<a id="tocscreatefleetoutput"></a>

```json
{
  "FleetAttributes": {
    "FleetId": {},
    "FleetArn": {},
    "FleetType": {},
    "InstanceType": {},
    "Description": {},
    "Name": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "BuildId": {},
    "BuildArn": {},
    "ScriptId": {},
    "ScriptArn": {},
    "ServerLaunchPath": {},
    "ServerLaunchParameters": {},
    "LogPaths": {},
    "NewGameSessionProtectionPolicy": {},
    "OperatingSystem": {},
    "ResourceCreationLimitPolicy": {
      "NewGameSessionsPerCreator": {},
      "PolicyPeriodInMinutes": {}
    },
    "MetricGroups": {},
    "StoppedActions": {},
    "InstanceRoleArn": {},
    "CertificateConfiguration": {
      "CertificateType": {}
    },
    "ComputeType": {},
    "AnywhereConfiguration": {
      "Cost": {}
    }
  },
  "LocationStates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetAttributes|object|false|none|none|
|LocationStates|object|false|none|none|

<h2 id="tocS_CreateFleetInput">CreateFleetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetinput"></a>
<a id="schema_CreateFleetInput"></a>
<a id="tocScreatefleetinput"></a>
<a id="tocscreatefleetinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "BuildId": {},
  "ScriptId": {},
  "ServerLaunchPath": {},
  "ServerLaunchParameters": {},
  "LogPaths": {},
  "EC2InstanceType": {},
  "EC2InboundPermissions": {},
  "NewGameSessionProtectionPolicy": {},
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  },
  "ResourceCreationLimitPolicy": {
    "NewGameSessionsPerCreator": {},
    "PolicyPeriodInMinutes": {}
  },
  "MetricGroups": {},
  "PeerVpcAwsAccountId": {},
  "PeerVpcId": {},
  "FleetType": {},
  "InstanceRoleArn": {},
  "CertificateConfiguration": {
    "CertificateType": {}
  },
  "Locations": {},
  "Tags": {},
  "ComputeType": {},
  "AnywhereConfiguration": {
    "Cost": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|BuildId|object|false|none|none|
|ScriptId|object|false|none|none|
|ServerLaunchPath|object|false|none|none|
|ServerLaunchParameters|object|false|none|none|
|LogPaths|object|false|none|none|
|EC2InstanceType|object|false|none|none|
|EC2InboundPermissions|object|false|none|none|
|NewGameSessionProtectionPolicy|object|false|none|none|
|RuntimeConfiguration|object|false|none|none|
|ResourceCreationLimitPolicy|object|false|none|none|
|MetricGroups|object|false|none|none|
|PeerVpcAwsAccountId|object|false|none|none|
|PeerVpcId|object|false|none|none|
|FleetType|object|false|none|none|
|InstanceRoleArn|object|false|none|none|
|CertificateConfiguration|object|false|none|none|
|Locations|object|false|none|none|
|Tags|object|false|none|none|
|ComputeType|object|false|none|none|
|AnywhereConfiguration|object|false|none|none|

<h2 id="tocS_CreateFleetLocationsOutput">CreateFleetLocationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetlocationsoutput"></a>
<a id="schema_CreateFleetLocationsOutput"></a>
<a id="tocScreatefleetlocationsoutput"></a>
<a id="tocscreatefleetlocationsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationStates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|LocationStates|object|false|none|none|

<h2 id="tocS_CreateFleetLocationsInput">CreateFleetLocationsInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetlocationsinput"></a>
<a id="schema_CreateFleetLocationsInput"></a>
<a id="tocScreatefleetlocationsinput"></a>
<a id="tocscreatefleetlocationsinput"></a>

```json
{
  "FleetId": {},
  "Locations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Locations|object|true|none|none|

<h2 id="tocS_InvalidFleetStatusException">InvalidFleetStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfleetstatusexception"></a>
<a id="schema_InvalidFleetStatusException"></a>
<a id="tocSinvalidfleetstatusexception"></a>
<a id="tocsinvalidfleetstatusexception"></a>

```json
null
```

<h2 id="tocS_CreateGameServerGroupOutput">CreateGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreategameservergroupoutput"></a>
<a id="schema_CreateGameServerGroupOutput"></a>
<a id="tocScreategameservergroupoutput"></a>
<a id="tocscreategameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_CreateGameServerGroupInput">CreateGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemacreategameservergroupinput"></a>
<a id="schema_CreateGameServerGroupInput"></a>
<a id="tocScreategameservergroupinput"></a>
<a id="tocscreategameservergroupinput"></a>

```json
{
  "GameServerGroupName": {},
  "RoleArn": {},
  "MinSize": {},
  "MaxSize": {},
  "LaunchTemplate": {
    "LaunchTemplateId": {},
    "LaunchTemplateName": {},
    "Version": {}
  },
  "InstanceDefinitions": {},
  "AutoScalingPolicy": {
    "EstimatedInstanceWarmup": {},
    "TargetTrackingConfiguration": {
      "TargetValue": {}
    }
  },
  "BalancingStrategy": {},
  "GameServerProtectionPolicy": {},
  "VpcSubnets": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|RoleArn|object|true|none|none|
|MinSize|object|true|none|none|
|MaxSize|object|true|none|none|
|LaunchTemplate|object|true|none|none|
|InstanceDefinitions|object|true|none|none|
|AutoScalingPolicy|object|false|none|none|
|BalancingStrategy|object|false|none|none|
|GameServerProtectionPolicy|object|false|none|none|
|VpcSubnets|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateGameSessionOutput">CreateGameSessionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreategamesessionoutput"></a>
<a id="schema_CreateGameSessionOutput"></a>
<a id="tocScreategamesessionoutput"></a>
<a id="tocscreategamesessionoutput"></a>

```json
{
  "GameSession": {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSession|object|false|none|none|

<h2 id="tocS_CreateGameSessionInput">CreateGameSessionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreategamesessioninput"></a>
<a id="schema_CreateGameSessionInput"></a>
<a id="tocScreategamesessioninput"></a>
<a id="tocscreategamesessioninput"></a>

```json
{
  "FleetId": {},
  "AliasId": {},
  "MaximumPlayerSessionCount": {},
  "Name": {},
  "GameProperties": {},
  "CreatorId": {},
  "GameSessionId": {},
  "IdempotencyToken": {},
  "GameSessionData": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|AliasId|object|false|none|none|
|MaximumPlayerSessionCount|object|true|none|none|
|Name|object|false|none|none|
|GameProperties|object|false|none|none|
|CreatorId|object|false|none|none|
|GameSessionId|object|false|none|none|
|IdempotencyToken|object|false|none|none|
|GameSessionData|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_TerminalRoutingStrategyException">TerminalRoutingStrategyException</h2>
<!-- backwards compatibility -->
<a id="schematerminalroutingstrategyexception"></a>
<a id="schema_TerminalRoutingStrategyException"></a>
<a id="tocSterminalroutingstrategyexception"></a>
<a id="tocsterminalroutingstrategyexception"></a>

```json
null
```

<h2 id="tocS_FleetCapacityExceededException">FleetCapacityExceededException</h2>
<!-- backwards compatibility -->
<a id="schemafleetcapacityexceededexception"></a>
<a id="schema_FleetCapacityExceededException"></a>
<a id="tocSfleetcapacityexceededexception"></a>
<a id="tocsfleetcapacityexceededexception"></a>

```json
null
```

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_CreateGameSessionQueueOutput">CreateGameSessionQueueOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreategamesessionqueueoutput"></a>
<a id="schema_CreateGameSessionQueueOutput"></a>
<a id="tocScreategamesessionqueueoutput"></a>
<a id="tocscreategamesessionqueueoutput"></a>

```json
{
  "GameSessionQueue": {
    "Name": {},
    "GameSessionQueueArn": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionQueue|object|false|none|none|

<h2 id="tocS_CreateGameSessionQueueInput">CreateGameSessionQueueInput</h2>
<!-- backwards compatibility -->
<a id="schemacreategamesessionqueueinput"></a>
<a id="schema_CreateGameSessionQueueInput"></a>
<a id="tocScreategamesessionqueueinput"></a>
<a id="tocscreategamesessionqueueinput"></a>

```json
{
  "Name": {},
  "TimeoutInSeconds": {},
  "PlayerLatencyPolicies": {},
  "Destinations": {},
  "FilterConfiguration": {
    "AllowedLocations": {}
  },
  "PriorityConfiguration": {
    "PriorityOrder": {},
    "LocationOrder": {}
  },
  "CustomEventData": {},
  "NotificationTarget": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|TimeoutInSeconds|object|false|none|none|
|PlayerLatencyPolicies|object|false|none|none|
|Destinations|object|false|none|none|
|FilterConfiguration|object|false|none|none|
|PriorityConfiguration|object|false|none|none|
|CustomEventData|object|false|none|none|
|NotificationTarget|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLocationOutput">CreateLocationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationoutput"></a>
<a id="schema_CreateLocationOutput"></a>
<a id="tocScreatelocationoutput"></a>
<a id="tocscreatelocationoutput"></a>

```json
{
  "Location": {
    "LocationName": {},
    "LocationArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|

<h2 id="tocS_CreateLocationInput">CreateLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatelocationinput"></a>
<a id="schema_CreateLocationInput"></a>
<a id="tocScreatelocationinput"></a>
<a id="tocscreatelocationinput"></a>

```json
{
  "LocationName": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationName|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateMatchmakingConfigurationOutput">CreateMatchmakingConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatematchmakingconfigurationoutput"></a>
<a id="schema_CreateMatchmakingConfigurationOutput"></a>
<a id="tocScreatematchmakingconfigurationoutput"></a>
<a id="tocscreatematchmakingconfigurationoutput"></a>

```json
{
  "Configuration": {
    "Name": {},
    "ConfigurationArn": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "RuleSetArn": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "CreationTime": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|

<h2 id="tocS_CreateMatchmakingConfigurationInput">CreateMatchmakingConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatematchmakingconfigurationinput"></a>
<a id="schema_CreateMatchmakingConfigurationInput"></a>
<a id="tocScreatematchmakingconfigurationinput"></a>
<a id="tocscreatematchmakingconfigurationinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "GameSessionQueueArns": {},
  "RequestTimeoutSeconds": {},
  "AcceptanceTimeoutSeconds": {},
  "AcceptanceRequired": {},
  "RuleSetName": {},
  "NotificationTarget": {},
  "AdditionalPlayerCount": {},
  "CustomEventData": {},
  "GameProperties": {},
  "GameSessionData": {},
  "BackfillMode": {},
  "FlexMatchMode": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|GameSessionQueueArns|object|false|none|none|
|RequestTimeoutSeconds|object|true|none|none|
|AcceptanceTimeoutSeconds|object|false|none|none|
|AcceptanceRequired|object|true|none|none|
|RuleSetName|object|true|none|none|
|NotificationTarget|object|false|none|none|
|AdditionalPlayerCount|object|false|none|none|
|CustomEventData|object|false|none|none|
|GameProperties|object|false|none|none|
|GameSessionData|object|false|none|none|
|BackfillMode|object|false|none|none|
|FlexMatchMode|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateMatchmakingRuleSetOutput">CreateMatchmakingRuleSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatematchmakingrulesetoutput"></a>
<a id="schema_CreateMatchmakingRuleSetOutput"></a>
<a id="tocScreatematchmakingrulesetoutput"></a>
<a id="tocscreatematchmakingrulesetoutput"></a>

```json
{
  "RuleSet": {
    "RuleSetName": {},
    "RuleSetArn": {},
    "RuleSetBody": {},
    "CreationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSet|object|true|none|none|

<h2 id="tocS_CreateMatchmakingRuleSetInput">CreateMatchmakingRuleSetInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatematchmakingrulesetinput"></a>
<a id="schema_CreateMatchmakingRuleSetInput"></a>
<a id="tocScreatematchmakingrulesetinput"></a>
<a id="tocscreatematchmakingrulesetinput"></a>

```json
{
  "Name": {},
  "RuleSetBody": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|RuleSetBody|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePlayerSessionOutput">CreatePlayerSessionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplayersessionoutput"></a>
<a id="schema_CreatePlayerSessionOutput"></a>
<a id="tocScreateplayersessionoutput"></a>
<a id="tocscreateplayersessionoutput"></a>

```json
{
  "PlayerSession": {
    "PlayerSessionId": {},
    "PlayerId": {},
    "GameSessionId": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerData": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerSession|object|false|none|none|

<h2 id="tocS_CreatePlayerSessionInput">CreatePlayerSessionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplayersessioninput"></a>
<a id="schema_CreatePlayerSessionInput"></a>
<a id="tocScreateplayersessioninput"></a>
<a id="tocscreateplayersessioninput"></a>

```json
{
  "GameSessionId": {},
  "PlayerId": {},
  "PlayerData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|true|none|none|
|PlayerId|object|true|none|none|
|PlayerData|object|false|none|none|

<h2 id="tocS_InvalidGameSessionStatusException">InvalidGameSessionStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgamesessionstatusexception"></a>
<a id="schema_InvalidGameSessionStatusException"></a>
<a id="tocSinvalidgamesessionstatusexception"></a>
<a id="tocsinvalidgamesessionstatusexception"></a>

```json
null
```

<h2 id="tocS_GameSessionFullException">GameSessionFullException</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionfullexception"></a>
<a id="schema_GameSessionFullException"></a>
<a id="tocSgamesessionfullexception"></a>
<a id="tocsgamesessionfullexception"></a>

```json
null
```

<h2 id="tocS_CreatePlayerSessionsOutput">CreatePlayerSessionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplayersessionsoutput"></a>
<a id="schema_CreatePlayerSessionsOutput"></a>
<a id="tocScreateplayersessionsoutput"></a>
<a id="tocscreateplayersessionsoutput"></a>

```json
{
  "PlayerSessions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerSessions|object|false|none|none|

<h2 id="tocS_CreatePlayerSessionsInput">CreatePlayerSessionsInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateplayersessionsinput"></a>
<a id="schema_CreatePlayerSessionsInput"></a>
<a id="tocScreateplayersessionsinput"></a>
<a id="tocscreateplayersessionsinput"></a>

```json
{
  "GameSessionId": {},
  "PlayerIds": {},
  "PlayerDataMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|true|none|none|
|PlayerIds|object|true|none|none|
|PlayerDataMap|object|false|none|none|

<h2 id="tocS_CreateScriptOutput">CreateScriptOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatescriptoutput"></a>
<a id="schema_CreateScriptOutput"></a>
<a id="tocScreatescriptoutput"></a>
<a id="tocscreatescriptoutput"></a>

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Script|object|false|none|none|

<h2 id="tocS_CreateScriptInput">CreateScriptInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatescriptinput"></a>
<a id="schema_CreateScriptInput"></a>
<a id="tocScreatescriptinput"></a>
<a id="tocscreatescriptinput"></a>

```json
{
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "ZipFile": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Version|object|false|none|none|
|StorageLocation|object|false|none|none|
|ZipFile|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateVpcPeeringAuthorizationOutput">CreateVpcPeeringAuthorizationOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcpeeringauthorizationoutput"></a>
<a id="schema_CreateVpcPeeringAuthorizationOutput"></a>
<a id="tocScreatevpcpeeringauthorizationoutput"></a>
<a id="tocscreatevpcpeeringauthorizationoutput"></a>

```json
{
  "VpcPeeringAuthorization": {
    "GameLiftAwsAccountId": {},
    "PeerVpcAwsAccountId": {},
    "PeerVpcId": {},
    "CreationTime": {},
    "ExpirationTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcPeeringAuthorization|object|false|none|none|

<h2 id="tocS_CreateVpcPeeringAuthorizationInput">CreateVpcPeeringAuthorizationInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcpeeringauthorizationinput"></a>
<a id="schema_CreateVpcPeeringAuthorizationInput"></a>
<a id="tocScreatevpcpeeringauthorizationinput"></a>
<a id="tocscreatevpcpeeringauthorizationinput"></a>

```json
{
  "GameLiftAwsAccountId": {},
  "PeerVpcId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameLiftAwsAccountId|object|true|none|none|
|PeerVpcId|object|true|none|none|

<h2 id="tocS_CreateVpcPeeringConnectionOutput">CreateVpcPeeringConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcpeeringconnectionoutput"></a>
<a id="schema_CreateVpcPeeringConnectionOutput"></a>
<a id="tocScreatevpcpeeringconnectionoutput"></a>
<a id="tocscreatevpcpeeringconnectionoutput"></a>

```json
{}
```

<h2 id="tocS_CreateVpcPeeringConnectionInput">CreateVpcPeeringConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcpeeringconnectioninput"></a>
<a id="schema_CreateVpcPeeringConnectionInput"></a>
<a id="tocScreatevpcpeeringconnectioninput"></a>
<a id="tocscreatevpcpeeringconnectioninput"></a>

```json
{
  "FleetId": {},
  "PeerVpcAwsAccountId": {},
  "PeerVpcId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|PeerVpcAwsAccountId|object|true|none|none|
|PeerVpcId|object|true|none|none|

<h2 id="tocS_DeleteAliasInput">DeleteAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletealiasinput"></a>
<a id="schema_DeleteAliasInput"></a>
<a id="tocSdeletealiasinput"></a>
<a id="tocsdeletealiasinput"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|

<h2 id="tocS_DeleteBuildInput">DeleteBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebuildinput"></a>
<a id="schema_DeleteBuildInput"></a>
<a id="tocSdeletebuildinput"></a>
<a id="tocsdeletebuildinput"></a>

```json
{
  "BuildId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|true|none|none|

<h2 id="tocS_DeleteFleetInput">DeleteFleetInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetinput"></a>
<a id="schema_DeleteFleetInput"></a>
<a id="tocSdeletefleetinput"></a>
<a id="tocsdeletefleetinput"></a>

```json
{
  "FleetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|

<h2 id="tocS_DeleteFleetLocationsOutput">DeleteFleetLocationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetlocationsoutput"></a>
<a id="schema_DeleteFleetLocationsOutput"></a>
<a id="tocSdeletefleetlocationsoutput"></a>
<a id="tocsdeletefleetlocationsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationStates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|LocationStates|object|false|none|none|

<h2 id="tocS_DeleteFleetLocationsInput">DeleteFleetLocationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetlocationsinput"></a>
<a id="schema_DeleteFleetLocationsInput"></a>
<a id="tocSdeletefleetlocationsinput"></a>
<a id="tocsdeletefleetlocationsinput"></a>

```json
{
  "FleetId": {},
  "Locations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Locations|object|true|none|none|

<h2 id="tocS_DeleteGameServerGroupOutput">DeleteGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegameservergroupoutput"></a>
<a id="schema_DeleteGameServerGroupOutput"></a>
<a id="tocSdeletegameservergroupoutput"></a>
<a id="tocsdeletegameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_DeleteGameServerGroupInput">DeleteGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegameservergroupinput"></a>
<a id="schema_DeleteGameServerGroupInput"></a>
<a id="tocSdeletegameservergroupinput"></a>
<a id="tocsdeletegameservergroupinput"></a>

```json
{
  "GameServerGroupName": {},
  "DeleteOption": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|DeleteOption|object|false|none|none|

<h2 id="tocS_DeleteGameSessionQueueOutput">DeleteGameSessionQueueOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegamesessionqueueoutput"></a>
<a id="schema_DeleteGameSessionQueueOutput"></a>
<a id="tocSdeletegamesessionqueueoutput"></a>
<a id="tocsdeletegamesessionqueueoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteGameSessionQueueInput">DeleteGameSessionQueueInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletegamesessionqueueinput"></a>
<a id="schema_DeleteGameSessionQueueInput"></a>
<a id="tocSdeletegamesessionqueueinput"></a>
<a id="tocsdeletegamesessionqueueinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteLocationOutput">DeleteLocationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelocationoutput"></a>
<a id="schema_DeleteLocationOutput"></a>
<a id="tocSdeletelocationoutput"></a>
<a id="tocsdeletelocationoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteLocationInput">DeleteLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelocationinput"></a>
<a id="schema_DeleteLocationInput"></a>
<a id="tocSdeletelocationinput"></a>
<a id="tocsdeletelocationinput"></a>

```json
{
  "LocationName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationName|object|true|none|none|

<h2 id="tocS_DeleteMatchmakingConfigurationOutput">DeleteMatchmakingConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletematchmakingconfigurationoutput"></a>
<a id="schema_DeleteMatchmakingConfigurationOutput"></a>
<a id="tocSdeletematchmakingconfigurationoutput"></a>
<a id="tocsdeletematchmakingconfigurationoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteMatchmakingConfigurationInput">DeleteMatchmakingConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletematchmakingconfigurationinput"></a>
<a id="schema_DeleteMatchmakingConfigurationInput"></a>
<a id="tocSdeletematchmakingconfigurationinput"></a>
<a id="tocsdeletematchmakingconfigurationinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteMatchmakingRuleSetOutput">DeleteMatchmakingRuleSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletematchmakingrulesetoutput"></a>
<a id="schema_DeleteMatchmakingRuleSetOutput"></a>
<a id="tocSdeletematchmakingrulesetoutput"></a>
<a id="tocsdeletematchmakingrulesetoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteMatchmakingRuleSetInput">DeleteMatchmakingRuleSetInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletematchmakingrulesetinput"></a>
<a id="schema_DeleteMatchmakingRuleSetInput"></a>
<a id="tocSdeletematchmakingrulesetinput"></a>
<a id="tocsdeletematchmakingrulesetinput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_DeleteScalingPolicyInput">DeleteScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletescalingpolicyinput"></a>
<a id="schema_DeleteScalingPolicyInput"></a>
<a id="tocSdeletescalingpolicyinput"></a>
<a id="tocsdeletescalingpolicyinput"></a>

```json
{
  "Name": {},
  "FleetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|FleetId|object|true|none|none|

<h2 id="tocS_DeleteScriptInput">DeleteScriptInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletescriptinput"></a>
<a id="schema_DeleteScriptInput"></a>
<a id="tocSdeletescriptinput"></a>
<a id="tocsdeletescriptinput"></a>

```json
{
  "ScriptId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScriptId|object|true|none|none|

<h2 id="tocS_DeleteVpcPeeringAuthorizationOutput">DeleteVpcPeeringAuthorizationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcpeeringauthorizationoutput"></a>
<a id="schema_DeleteVpcPeeringAuthorizationOutput"></a>
<a id="tocSdeletevpcpeeringauthorizationoutput"></a>
<a id="tocsdeletevpcpeeringauthorizationoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteVpcPeeringAuthorizationInput">DeleteVpcPeeringAuthorizationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcpeeringauthorizationinput"></a>
<a id="schema_DeleteVpcPeeringAuthorizationInput"></a>
<a id="tocSdeletevpcpeeringauthorizationinput"></a>
<a id="tocsdeletevpcpeeringauthorizationinput"></a>

```json
{
  "GameLiftAwsAccountId": {},
  "PeerVpcId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameLiftAwsAccountId|object|true|none|none|
|PeerVpcId|object|true|none|none|

<h2 id="tocS_DeleteVpcPeeringConnectionOutput">DeleteVpcPeeringConnectionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcpeeringconnectionoutput"></a>
<a id="schema_DeleteVpcPeeringConnectionOutput"></a>
<a id="tocSdeletevpcpeeringconnectionoutput"></a>
<a id="tocsdeletevpcpeeringconnectionoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteVpcPeeringConnectionInput">DeleteVpcPeeringConnectionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcpeeringconnectioninput"></a>
<a id="schema_DeleteVpcPeeringConnectionInput"></a>
<a id="tocSdeletevpcpeeringconnectioninput"></a>
<a id="tocsdeletevpcpeeringconnectioninput"></a>

```json
{
  "FleetId": {},
  "VpcPeeringConnectionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|VpcPeeringConnectionId|object|true|none|none|

<h2 id="tocS_DeregisterComputeOutput">DeregisterComputeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercomputeoutput"></a>
<a id="schema_DeregisterComputeOutput"></a>
<a id="tocSderegistercomputeoutput"></a>
<a id="tocsderegistercomputeoutput"></a>

```json
{}
```

<h2 id="tocS_DeregisterComputeInput">DeregisterComputeInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistercomputeinput"></a>
<a id="schema_DeregisterComputeInput"></a>
<a id="tocSderegistercomputeinput"></a>
<a id="tocsderegistercomputeinput"></a>

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|ComputeName|object|true|none|none|

<h2 id="tocS_DeregisterGameServerInput">DeregisterGameServerInput</h2>
<!-- backwards compatibility -->
<a id="schemaderegistergameserverinput"></a>
<a id="schema_DeregisterGameServerInput"></a>
<a id="tocSderegistergameserverinput"></a>
<a id="tocsderegistergameserverinput"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|GameServerId|object|true|none|none|

<h2 id="tocS_DescribeAliasOutput">DescribeAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealiasoutput"></a>
<a id="schema_DescribeAliasOutput"></a>
<a id="tocSdescribealiasoutput"></a>
<a id="tocsdescribealiasoutput"></a>

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alias|object|false|none|none|

<h2 id="tocS_DescribeAliasInput">DescribeAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribealiasinput"></a>
<a id="schema_DescribeAliasInput"></a>
<a id="tocSdescribealiasinput"></a>
<a id="tocsdescribealiasinput"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|

<h2 id="tocS_DescribeBuildOutput">DescribeBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebuildoutput"></a>
<a id="schema_DescribeBuildOutput"></a>
<a id="tocSdescribebuildoutput"></a>
<a id="tocsdescribebuildoutput"></a>

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Build|object|false|none|none|

<h2 id="tocS_DescribeBuildInput">DescribeBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribebuildinput"></a>
<a id="schema_DescribeBuildInput"></a>
<a id="tocSdescribebuildinput"></a>
<a id="tocsdescribebuildinput"></a>

```json
{
  "BuildId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|true|none|none|

<h2 id="tocS_DescribeComputeOutput">DescribeComputeOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomputeoutput"></a>
<a id="schema_DescribeComputeOutput"></a>
<a id="tocSdescribecomputeoutput"></a>
<a id="tocsdescribecomputeoutput"></a>

```json
{
  "Compute": {
    "FleetId": {},
    "FleetArn": {},
    "ComputeName": {},
    "ComputeArn": {},
    "IpAddress": {},
    "DnsName": {},
    "ComputeStatus": {},
    "Location": {},
    "CreationTime": {},
    "OperatingSystem": {},
    "Type": {},
    "GameLiftServiceSdkEndpoint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Compute|object|false|none|none|

<h2 id="tocS_DescribeComputeInput">DescribeComputeInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecomputeinput"></a>
<a id="schema_DescribeComputeInput"></a>
<a id="tocSdescribecomputeinput"></a>
<a id="tocsdescribecomputeinput"></a>

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|ComputeName|object|true|none|none|

<h2 id="tocS_DescribeEC2InstanceLimitsOutput">DescribeEC2InstanceLimitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeec2instancelimitsoutput"></a>
<a id="schema_DescribeEC2InstanceLimitsOutput"></a>
<a id="tocSdescribeec2instancelimitsoutput"></a>
<a id="tocsdescribeec2instancelimitsoutput"></a>

```json
{
  "EC2InstanceLimits": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2InstanceLimits|object|false|none|none|

<h2 id="tocS_DescribeEC2InstanceLimitsInput">DescribeEC2InstanceLimitsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeec2instancelimitsinput"></a>
<a id="schema_DescribeEC2InstanceLimitsInput"></a>
<a id="tocSdescribeec2instancelimitsinput"></a>
<a id="tocsdescribeec2instancelimitsinput"></a>

```json
{
  "EC2InstanceType": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2InstanceType|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_DescribeFleetAttributesOutput">DescribeFleetAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetattributesoutput"></a>
<a id="schema_DescribeFleetAttributesOutput"></a>
<a id="tocSdescribefleetattributesoutput"></a>
<a id="tocsdescribefleetattributesoutput"></a>

```json
{
  "FleetAttributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetAttributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetAttributesInput">DescribeFleetAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetattributesinput"></a>
<a id="schema_DescribeFleetAttributesInput"></a>
<a id="tocSdescribefleetattributesinput"></a>
<a id="tocsdescribefleetattributesinput"></a>

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetIds|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetCapacityOutput">DescribeFleetCapacityOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetcapacityoutput"></a>
<a id="schema_DescribeFleetCapacityOutput"></a>
<a id="tocSdescribefleetcapacityoutput"></a>
<a id="tocsdescribefleetcapacityoutput"></a>

```json
{
  "FleetCapacity": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetCapacity|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetCapacityInput">DescribeFleetCapacityInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetcapacityinput"></a>
<a id="schema_DescribeFleetCapacityInput"></a>
<a id="tocSdescribefleetcapacityinput"></a>
<a id="tocsdescribefleetcapacityinput"></a>

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetIds|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetEventsOutput">DescribeFleetEventsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleeteventsoutput"></a>
<a id="schema_DescribeFleetEventsOutput"></a>
<a id="tocSdescribefleeteventsoutput"></a>
<a id="tocsdescribefleeteventsoutput"></a>

```json
{
  "Events": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Events|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetEventsInput">DescribeFleetEventsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleeteventsinput"></a>
<a id="schema_DescribeFleetEventsInput"></a>
<a id="tocSdescribefleeteventsinput"></a>
<a id="tocsdescribefleeteventsinput"></a>

```json
{
  "FleetId": {},
  "StartTime": {},
  "EndTime": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetLocationAttributesOutput">DescribeFleetLocationAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationattributesoutput"></a>
<a id="schema_DescribeFleetLocationAttributesOutput"></a>
<a id="tocSdescribefleetlocationattributesoutput"></a>
<a id="tocsdescribefleetlocationattributesoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "LocationAttributes": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|LocationAttributes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetLocationAttributesInput">DescribeFleetLocationAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationattributesinput"></a>
<a id="schema_DescribeFleetLocationAttributesInput"></a>
<a id="tocSdescribefleetlocationattributesinput"></a>
<a id="tocsdescribefleetlocationattributesinput"></a>

```json
{
  "FleetId": {},
  "Locations": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Locations|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetLocationCapacityOutput">DescribeFleetLocationCapacityOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationcapacityoutput"></a>
<a id="schema_DescribeFleetLocationCapacityOutput"></a>
<a id="tocSdescribefleetlocationcapacityoutput"></a>
<a id="tocsdescribefleetlocationcapacityoutput"></a>

```json
{
  "FleetCapacity": {
    "FleetId": {},
    "FleetArn": {},
    "InstanceType": {},
    "InstanceCounts": {
      "DESIRED": {},
      "MINIMUM": {},
      "MAXIMUM": {},
      "PENDING": {},
      "ACTIVE": {},
      "IDLE": {},
      "TERMINATING": {}
    },
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetCapacity|object|false|none|none|

<h2 id="tocS_DescribeFleetLocationCapacityInput">DescribeFleetLocationCapacityInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationcapacityinput"></a>
<a id="schema_DescribeFleetLocationCapacityInput"></a>
<a id="tocSdescribefleetlocationcapacityinput"></a>
<a id="tocsdescribefleetlocationcapacityinput"></a>

```json
{
  "FleetId": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_DescribeFleetLocationUtilizationOutput">DescribeFleetLocationUtilizationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationutilizationoutput"></a>
<a id="schema_DescribeFleetLocationUtilizationOutput"></a>
<a id="tocSdescribefleetlocationutilizationoutput"></a>
<a id="tocsdescribefleetlocationutilizationoutput"></a>

```json
{
  "FleetUtilization": {
    "FleetId": {},
    "FleetArn": {},
    "ActiveServerProcessCount": {},
    "ActiveGameSessionCount": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetUtilization|object|false|none|none|

<h2 id="tocS_DescribeFleetLocationUtilizationInput">DescribeFleetLocationUtilizationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetlocationutilizationinput"></a>
<a id="schema_DescribeFleetLocationUtilizationInput"></a>
<a id="tocSdescribefleetlocationutilizationinput"></a>
<a id="tocsdescribefleetlocationutilizationinput"></a>

```json
{
  "FleetId": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_DescribeFleetPortSettingsOutput">DescribeFleetPortSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetportsettingsoutput"></a>
<a id="schema_DescribeFleetPortSettingsOutput"></a>
<a id="tocSdescribefleetportsettingsoutput"></a>
<a id="tocsdescribefleetportsettingsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "InboundPermissions": {},
  "UpdateStatus": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|InboundPermissions|object|false|none|none|
|UpdateStatus|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_DescribeFleetPortSettingsInput">DescribeFleetPortSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetportsettingsinput"></a>
<a id="schema_DescribeFleetPortSettingsInput"></a>
<a id="tocSdescribefleetportsettingsinput"></a>
<a id="tocsdescribefleetportsettingsinput"></a>

```json
{
  "FleetId": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Location|object|false|none|none|

<h2 id="tocS_DescribeFleetUtilizationOutput">DescribeFleetUtilizationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetutilizationoutput"></a>
<a id="schema_DescribeFleetUtilizationOutput"></a>
<a id="tocSdescribefleetutilizationoutput"></a>
<a id="tocsdescribefleetutilizationoutput"></a>

```json
{
  "FleetUtilization": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetUtilization|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeFleetUtilizationInput">DescribeFleetUtilizationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetutilizationinput"></a>
<a id="schema_DescribeFleetUtilizationInput"></a>
<a id="tocSdescribefleetutilizationinput"></a>
<a id="tocsdescribefleetutilizationinput"></a>

```json
{
  "FleetIds": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetIds|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameServerOutput">DescribeGameServerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameserveroutput"></a>
<a id="schema_DescribeGameServerOutput"></a>
<a id="tocSdescribegameserveroutput"></a>
<a id="tocsdescribegameserveroutput"></a>

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServer|object|false|none|none|

<h2 id="tocS_DescribeGameServerInput">DescribeGameServerInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameserverinput"></a>
<a id="schema_DescribeGameServerInput"></a>
<a id="tocSdescribegameserverinput"></a>
<a id="tocsdescribegameserverinput"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|GameServerId|object|true|none|none|

<h2 id="tocS_DescribeGameServerGroupOutput">DescribeGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameservergroupoutput"></a>
<a id="schema_DescribeGameServerGroupOutput"></a>
<a id="tocSdescribegameservergroupoutput"></a>
<a id="tocsdescribegameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_DescribeGameServerGroupInput">DescribeGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameservergroupinput"></a>
<a id="schema_DescribeGameServerGroupInput"></a>
<a id="tocSdescribegameservergroupinput"></a>
<a id="tocsdescribegameservergroupinput"></a>

```json
{
  "GameServerGroupName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|

<h2 id="tocS_DescribeGameServerInstancesOutput">DescribeGameServerInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameserverinstancesoutput"></a>
<a id="schema_DescribeGameServerInstancesOutput"></a>
<a id="tocSdescribegameserverinstancesoutput"></a>
<a id="tocsdescribegameserverinstancesoutput"></a>

```json
{
  "GameServerInstances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerInstances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameServerInstancesInput">DescribeGameServerInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegameserverinstancesinput"></a>
<a id="schema_DescribeGameServerInstancesInput"></a>
<a id="tocSdescribegameserverinstancesinput"></a>
<a id="tocsdescribegameserverinstancesinput"></a>

```json
{
  "GameServerGroupName": {},
  "InstanceIds": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|InstanceIds|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionDetailsOutput">DescribeGameSessionDetailsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessiondetailsoutput"></a>
<a id="schema_DescribeGameSessionDetailsOutput"></a>
<a id="tocSdescribegamesessiondetailsoutput"></a>
<a id="tocsdescribegamesessiondetailsoutput"></a>

```json
{
  "GameSessionDetails": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionDetails|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionDetailsInput">DescribeGameSessionDetailsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessiondetailsinput"></a>
<a id="schema_DescribeGameSessionDetailsInput"></a>
<a id="tocSdescribegamesessiondetailsinput"></a>
<a id="tocsdescribegamesessiondetailsinput"></a>

```json
{
  "FleetId": {},
  "GameSessionId": {},
  "AliasId": {},
  "Location": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|GameSessionId|object|false|none|none|
|AliasId|object|false|none|none|
|Location|object|false|none|none|
|StatusFilter|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionPlacementOutput">DescribeGameSessionPlacementOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionplacementoutput"></a>
<a id="schema_DescribeGameSessionPlacementOutput"></a>
<a id="tocSdescribegamesessionplacementoutput"></a>
<a id="tocsdescribegamesessionplacementoutput"></a>

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionPlacement|object|false|none|none|

<h2 id="tocS_DescribeGameSessionPlacementInput">DescribeGameSessionPlacementInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionplacementinput"></a>
<a id="schema_DescribeGameSessionPlacementInput"></a>
<a id="tocSdescribegamesessionplacementinput"></a>
<a id="tocsdescribegamesessionplacementinput"></a>

```json
{
  "PlacementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlacementId|object|true|none|none|

<h2 id="tocS_DescribeGameSessionQueuesOutput">DescribeGameSessionQueuesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionqueuesoutput"></a>
<a id="schema_DescribeGameSessionQueuesOutput"></a>
<a id="tocSdescribegamesessionqueuesoutput"></a>
<a id="tocsdescribegamesessionqueuesoutput"></a>

```json
{
  "GameSessionQueues": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionQueues|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionQueuesInput">DescribeGameSessionQueuesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionqueuesinput"></a>
<a id="schema_DescribeGameSessionQueuesInput"></a>
<a id="tocSdescribegamesessionqueuesinput"></a>
<a id="tocsdescribegamesessionqueuesinput"></a>

```json
{
  "Names": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionsOutput">DescribeGameSessionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionsoutput"></a>
<a id="schema_DescribeGameSessionsOutput"></a>
<a id="tocSdescribegamesessionsoutput"></a>
<a id="tocsdescribegamesessionsoutput"></a>

```json
{
  "GameSessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeGameSessionsInput">DescribeGameSessionsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribegamesessionsinput"></a>
<a id="schema_DescribeGameSessionsInput"></a>
<a id="tocSdescribegamesessionsinput"></a>
<a id="tocsdescribegamesessionsinput"></a>

```json
{
  "FleetId": {},
  "GameSessionId": {},
  "AliasId": {},
  "Location": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|GameSessionId|object|false|none|none|
|AliasId|object|false|none|none|
|Location|object|false|none|none|
|StatusFilter|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancesOutput">DescribeInstancesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancesoutput"></a>
<a id="schema_DescribeInstancesOutput"></a>
<a id="tocSdescribeinstancesoutput"></a>
<a id="tocsdescribeinstancesoutput"></a>

```json
{
  "Instances": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Instances|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeInstancesInput">DescribeInstancesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinstancesinput"></a>
<a id="schema_DescribeInstancesInput"></a>
<a id="tocSdescribeinstancesinput"></a>
<a id="tocsdescribeinstancesinput"></a>

```json
{
  "FleetId": {},
  "InstanceId": {},
  "Limit": {},
  "NextToken": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|InstanceId|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_DescribeMatchmakingOutput">DescribeMatchmakingOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakingoutput"></a>
<a id="schema_DescribeMatchmakingOutput"></a>
<a id="tocSdescribematchmakingoutput"></a>
<a id="tocsdescribematchmakingoutput"></a>

```json
{
  "TicketList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketList|object|false|none|none|

<h2 id="tocS_DescribeMatchmakingInput">DescribeMatchmakingInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakinginput"></a>
<a id="schema_DescribeMatchmakingInput"></a>
<a id="tocSdescribematchmakinginput"></a>
<a id="tocsdescribematchmakinginput"></a>

```json
{
  "TicketIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketIds|object|true|none|none|

<h2 id="tocS_DescribeMatchmakingConfigurationsOutput">DescribeMatchmakingConfigurationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakingconfigurationsoutput"></a>
<a id="schema_DescribeMatchmakingConfigurationsOutput"></a>
<a id="tocSdescribematchmakingconfigurationsoutput"></a>
<a id="tocsdescribematchmakingconfigurationsoutput"></a>

```json
{
  "Configurations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configurations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMatchmakingConfigurationsInput">DescribeMatchmakingConfigurationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakingconfigurationsinput"></a>
<a id="schema_DescribeMatchmakingConfigurationsInput"></a>
<a id="tocSdescribematchmakingconfigurationsinput"></a>
<a id="tocsdescribematchmakingconfigurationsinput"></a>

```json
{
  "Names": {},
  "RuleSetName": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|RuleSetName|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMatchmakingRuleSetsOutput">DescribeMatchmakingRuleSetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakingrulesetsoutput"></a>
<a id="schema_DescribeMatchmakingRuleSetsOutput"></a>
<a id="tocSdescribematchmakingrulesetsoutput"></a>
<a id="tocsdescribematchmakingrulesetsoutput"></a>

```json
{
  "RuleSets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSets|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeMatchmakingRuleSetsInput">DescribeMatchmakingRuleSetsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribematchmakingrulesetsinput"></a>
<a id="schema_DescribeMatchmakingRuleSetsInput"></a>
<a id="tocSdescribematchmakingrulesetsinput"></a>
<a id="tocsdescribematchmakingrulesetsinput"></a>

```json
{
  "Names": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Names|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePlayerSessionsOutput">DescribePlayerSessionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplayersessionsoutput"></a>
<a id="schema_DescribePlayerSessionsOutput"></a>
<a id="tocSdescribeplayersessionsoutput"></a>
<a id="tocsdescribeplayersessionsoutput"></a>

```json
{
  "PlayerSessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerSessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePlayerSessionsInput">DescribePlayerSessionsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplayersessionsinput"></a>
<a id="schema_DescribePlayerSessionsInput"></a>
<a id="tocSdescribeplayersessionsinput"></a>
<a id="tocsdescribeplayersessionsinput"></a>

```json
{
  "GameSessionId": {},
  "PlayerId": {},
  "PlayerSessionId": {},
  "PlayerSessionStatusFilter": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|false|none|none|
|PlayerId|object|false|none|none|
|PlayerSessionId|object|false|none|none|
|PlayerSessionStatusFilter|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeRuntimeConfigurationOutput">DescribeRuntimeConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuntimeconfigurationoutput"></a>
<a id="schema_DescribeRuntimeConfigurationOutput"></a>
<a id="tocSdescriberuntimeconfigurationoutput"></a>
<a id="tocsdescriberuntimeconfigurationoutput"></a>

```json
{
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeConfiguration|object|false|none|none|

<h2 id="tocS_DescribeRuntimeConfigurationInput">DescribeRuntimeConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberuntimeconfigurationinput"></a>
<a id="schema_DescribeRuntimeConfigurationInput"></a>
<a id="tocSdescriberuntimeconfigurationinput"></a>
<a id="tocsdescriberuntimeconfigurationinput"></a>

```json
{
  "FleetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|

<h2 id="tocS_DescribeScalingPoliciesOutput">DescribeScalingPoliciesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingpoliciesoutput"></a>
<a id="schema_DescribeScalingPoliciesOutput"></a>
<a id="tocSdescribescalingpoliciesoutput"></a>
<a id="tocsdescribescalingpoliciesoutput"></a>

```json
{
  "ScalingPolicies": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScalingPolicies|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeScalingPoliciesInput">DescribeScalingPoliciesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribescalingpoliciesinput"></a>
<a id="schema_DescribeScalingPoliciesInput"></a>
<a id="tocSdescribescalingpoliciesinput"></a>
<a id="tocsdescribescalingpoliciesinput"></a>

```json
{
  "FleetId": {},
  "StatusFilter": {},
  "Limit": {},
  "NextToken": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|StatusFilter|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_DescribeScriptOutput">DescribeScriptOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribescriptoutput"></a>
<a id="schema_DescribeScriptOutput"></a>
<a id="tocSdescribescriptoutput"></a>
<a id="tocsdescribescriptoutput"></a>

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Script|object|false|none|none|

<h2 id="tocS_DescribeScriptInput">DescribeScriptInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribescriptinput"></a>
<a id="schema_DescribeScriptInput"></a>
<a id="tocSdescribescriptinput"></a>
<a id="tocsdescribescriptinput"></a>

```json
{
  "ScriptId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScriptId|object|true|none|none|

<h2 id="tocS_DescribeVpcPeeringAuthorizationsOutput">DescribeVpcPeeringAuthorizationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcpeeringauthorizationsoutput"></a>
<a id="schema_DescribeVpcPeeringAuthorizationsOutput"></a>
<a id="tocSdescribevpcpeeringauthorizationsoutput"></a>
<a id="tocsdescribevpcpeeringauthorizationsoutput"></a>

```json
{
  "VpcPeeringAuthorizations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcPeeringAuthorizations|object|false|none|none|

<h2 id="tocS_DescribeVpcPeeringAuthorizationsInput">DescribeVpcPeeringAuthorizationsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcpeeringauthorizationsinput"></a>
<a id="schema_DescribeVpcPeeringAuthorizationsInput"></a>
<a id="tocSdescribevpcpeeringauthorizationsinput"></a>
<a id="tocsdescribevpcpeeringauthorizationsinput"></a>

```json
{}
```

<h2 id="tocS_DescribeVpcPeeringConnectionsOutput">DescribeVpcPeeringConnectionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcpeeringconnectionsoutput"></a>
<a id="schema_DescribeVpcPeeringConnectionsOutput"></a>
<a id="tocSdescribevpcpeeringconnectionsoutput"></a>
<a id="tocsdescribevpcpeeringconnectionsoutput"></a>

```json
{
  "VpcPeeringConnections": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcPeeringConnections|object|false|none|none|

<h2 id="tocS_DescribeVpcPeeringConnectionsInput">DescribeVpcPeeringConnectionsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcpeeringconnectionsinput"></a>
<a id="schema_DescribeVpcPeeringConnectionsInput"></a>
<a id="tocSdescribevpcpeeringconnectionsinput"></a>
<a id="tocsdescribevpcpeeringconnectionsinput"></a>

```json
{
  "FleetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|

<h2 id="tocS_GetComputeAccessOutput">GetComputeAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomputeaccessoutput"></a>
<a id="schema_GetComputeAccessOutput"></a>
<a id="tocSgetcomputeaccessoutput"></a>
<a id="tocsgetcomputeaccessoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ComputeName": {},
  "ComputeArn": {},
  "Credentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|ComputeName|object|false|none|none|
|ComputeArn|object|false|none|none|
|Credentials|object|false|none|none|

<h2 id="tocS_GetComputeAccessInput">GetComputeAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomputeaccessinput"></a>
<a id="schema_GetComputeAccessInput"></a>
<a id="tocSgetcomputeaccessinput"></a>
<a id="tocsgetcomputeaccessinput"></a>

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|ComputeName|object|true|none|none|

<h2 id="tocS_GetComputeAuthTokenOutput">GetComputeAuthTokenOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomputeauthtokenoutput"></a>
<a id="schema_GetComputeAuthTokenOutput"></a>
<a id="tocSgetcomputeauthtokenoutput"></a>
<a id="tocsgetcomputeauthtokenoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ComputeName": {},
  "ComputeArn": {},
  "AuthToken": {},
  "ExpirationTimestamp": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|ComputeName|object|false|none|none|
|ComputeArn|object|false|none|none|
|AuthToken|object|false|none|none|
|ExpirationTimestamp|object|false|none|none|

<h2 id="tocS_GetComputeAuthTokenInput">GetComputeAuthTokenInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcomputeauthtokeninput"></a>
<a id="schema_GetComputeAuthTokenInput"></a>
<a id="tocSgetcomputeauthtokeninput"></a>
<a id="tocsgetcomputeauthtokeninput"></a>

```json
{
  "FleetId": {},
  "ComputeName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|ComputeName|object|true|none|none|

<h2 id="tocS_GetGameSessionLogUrlOutput">GetGameSessionLogUrlOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetgamesessionlogurloutput"></a>
<a id="schema_GetGameSessionLogUrlOutput"></a>
<a id="tocSgetgamesessionlogurloutput"></a>
<a id="tocsgetgamesessionlogurloutput"></a>

```json
{
  "PreSignedUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PreSignedUrl|object|false|none|none|

<h2 id="tocS_GetGameSessionLogUrlInput">GetGameSessionLogUrlInput</h2>
<!-- backwards compatibility -->
<a id="schemagetgamesessionlogurlinput"></a>
<a id="schema_GetGameSessionLogUrlInput"></a>
<a id="tocSgetgamesessionlogurlinput"></a>
<a id="tocsgetgamesessionlogurlinput"></a>

```json
{
  "GameSessionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|true|none|none|

<h2 id="tocS_GetInstanceAccessOutput">GetInstanceAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceaccessoutput"></a>
<a id="schema_GetInstanceAccessOutput"></a>
<a id="tocSgetinstanceaccessoutput"></a>
<a id="tocsgetinstanceaccessoutput"></a>

```json
{
  "InstanceAccess": {
    "FleetId": {},
    "InstanceId": {},
    "IpAddress": {},
    "OperatingSystem": {},
    "Credentials": {
      "UserName": {},
      "Secret": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceAccess|object|false|none|none|

<h2 id="tocS_GetInstanceAccessInput">GetInstanceAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemagetinstanceaccessinput"></a>
<a id="schema_GetInstanceAccessInput"></a>
<a id="tocSgetinstanceaccessinput"></a>
<a id="tocsgetinstanceaccessinput"></a>

```json
{
  "FleetId": {},
  "InstanceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|InstanceId|object|true|none|none|

<h2 id="tocS_ListAliasesOutput">ListAliasesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesoutput"></a>
<a id="schema_ListAliasesOutput"></a>
<a id="tocSlistaliasesoutput"></a>
<a id="tocslistaliasesoutput"></a>

```json
{
  "Aliases": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Aliases|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAliasesInput">ListAliasesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistaliasesinput"></a>
<a id="schema_ListAliasesInput"></a>
<a id="tocSlistaliasesinput"></a>
<a id="tocslistaliasesinput"></a>

```json
{
  "RoutingStrategyType": {},
  "Name": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoutingStrategyType|object|false|none|none|
|Name|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBuildsOutput">ListBuildsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsoutput"></a>
<a id="schema_ListBuildsOutput"></a>
<a id="tocSlistbuildsoutput"></a>
<a id="tocslistbuildsoutput"></a>

```json
{
  "Builds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Builds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListBuildsInput">ListBuildsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbuildsinput"></a>
<a id="schema_ListBuildsInput"></a>
<a id="tocSlistbuildsinput"></a>
<a id="tocslistbuildsinput"></a>

```json
{
  "Status": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComputeOutput">ListComputeOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomputeoutput"></a>
<a id="schema_ListComputeOutput"></a>
<a id="tocSlistcomputeoutput"></a>
<a id="tocslistcomputeoutput"></a>

```json
{
  "ComputeList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ComputeList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListComputeInput">ListComputeInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcomputeinput"></a>
<a id="schema_ListComputeInput"></a>
<a id="tocSlistcomputeinput"></a>
<a id="tocslistcomputeinput"></a>

```json
{
  "FleetId": {},
  "Location": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Location|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFleetsOutput">ListFleetsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsoutput"></a>
<a id="schema_ListFleetsOutput"></a>
<a id="tocSlistfleetsoutput"></a>
<a id="tocslistfleetsoutput"></a>

```json
{
  "FleetIds": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetIds|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFleetsInput">ListFleetsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsinput"></a>
<a id="schema_ListFleetsInput"></a>
<a id="tocSlistfleetsinput"></a>
<a id="tocslistfleetsinput"></a>

```json
{
  "BuildId": {},
  "ScriptId": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|false|none|none|
|ScriptId|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGameServerGroupsOutput">ListGameServerGroupsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgameservergroupsoutput"></a>
<a id="schema_ListGameServerGroupsOutput"></a>
<a id="tocSlistgameservergroupsoutput"></a>
<a id="tocslistgameservergroupsoutput"></a>

```json
{
  "GameServerGroups": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroups|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGameServerGroupsInput">ListGameServerGroupsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgameservergroupsinput"></a>
<a id="schema_ListGameServerGroupsInput"></a>
<a id="tocSlistgameservergroupsinput"></a>
<a id="tocslistgameservergroupsinput"></a>

```json
{
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGameServersOutput">ListGameServersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistgameserversoutput"></a>
<a id="schema_ListGameServersOutput"></a>
<a id="tocSlistgameserversoutput"></a>
<a id="tocslistgameserversoutput"></a>

```json
{
  "GameServers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServers|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGameServersInput">ListGameServersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistgameserversinput"></a>
<a id="schema_ListGameServersInput"></a>
<a id="tocSlistgameserversinput"></a>
<a id="tocslistgameserversinput"></a>

```json
{
  "GameServerGroupName": {},
  "SortOrder": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|SortOrder|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLocationsOutput">ListLocationsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsoutput"></a>
<a id="schema_ListLocationsOutput"></a>
<a id="tocSlistlocationsoutput"></a>
<a id="tocslistlocationsoutput"></a>

```json
{
  "Locations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Locations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLocationsInput">ListLocationsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsinput"></a>
<a id="schema_ListLocationsInput"></a>
<a id="tocSlistlocationsinput"></a>
<a id="tocslistlocationsinput"></a>

```json
{
  "Filters": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListScriptsOutput">ListScriptsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistscriptsoutput"></a>
<a id="schema_ListScriptsOutput"></a>
<a id="tocSlistscriptsoutput"></a>
<a id="tocslistscriptsoutput"></a>

```json
{
  "Scripts": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scripts|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListScriptsInput">ListScriptsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistscriptsinput"></a>
<a id="schema_ListScriptsInput"></a>
<a id="tocSlistscriptsinput"></a>
<a id="tocslistscriptsinput"></a>

```json
{
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

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

<h2 id="tocS_PutScalingPolicyOutput">PutScalingPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputscalingpolicyoutput"></a>
<a id="schema_PutScalingPolicyOutput"></a>
<a id="tocSputscalingpolicyoutput"></a>
<a id="tocsputscalingpolicyoutput"></a>

```json
{
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_PutScalingPolicyInput">PutScalingPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputscalingpolicyinput"></a>
<a id="schema_PutScalingPolicyInput"></a>
<a id="tocSputscalingpolicyinput"></a>
<a id="tocsputscalingpolicyinput"></a>

```json
{
  "Name": {},
  "FleetId": {},
  "ScalingAdjustment": {},
  "ScalingAdjustmentType": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "EvaluationPeriods": {},
  "MetricName": {},
  "PolicyType": {},
  "TargetConfiguration": {
    "TargetValue": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|FleetId|object|true|none|none|
|ScalingAdjustment|object|false|none|none|
|ScalingAdjustmentType|object|false|none|none|
|Threshold|object|false|none|none|
|ComparisonOperator|object|false|none|none|
|EvaluationPeriods|object|false|none|none|
|MetricName|object|true|none|none|
|PolicyType|object|false|none|none|
|TargetConfiguration|object|false|none|none|

<h2 id="tocS_RegisterComputeOutput">RegisterComputeOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregistercomputeoutput"></a>
<a id="schema_RegisterComputeOutput"></a>
<a id="tocSregistercomputeoutput"></a>
<a id="tocsregistercomputeoutput"></a>

```json
{
  "Compute": {
    "FleetId": {},
    "FleetArn": {},
    "ComputeName": {},
    "ComputeArn": {},
    "IpAddress": {},
    "DnsName": {},
    "ComputeStatus": {},
    "Location": {},
    "CreationTime": {},
    "OperatingSystem": {},
    "Type": {},
    "GameLiftServiceSdkEndpoint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Compute|object|false|none|none|

<h2 id="tocS_RegisterComputeInput">RegisterComputeInput</h2>
<!-- backwards compatibility -->
<a id="schemaregistercomputeinput"></a>
<a id="schema_RegisterComputeInput"></a>
<a id="tocSregistercomputeinput"></a>
<a id="tocsregistercomputeinput"></a>

```json
{
  "FleetId": {},
  "ComputeName": {},
  "CertificatePath": {},
  "DnsName": {},
  "IpAddress": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|ComputeName|object|true|none|none|
|CertificatePath|object|false|none|none|
|DnsName|object|false|none|none|
|IpAddress|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_RegisterGameServerOutput">RegisterGameServerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregistergameserveroutput"></a>
<a id="schema_RegisterGameServerOutput"></a>
<a id="tocSregistergameserveroutput"></a>
<a id="tocsregistergameserveroutput"></a>

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServer|object|false|none|none|

<h2 id="tocS_RegisterGameServerInput">RegisterGameServerInput</h2>
<!-- backwards compatibility -->
<a id="schemaregistergameserverinput"></a>
<a id="schema_RegisterGameServerInput"></a>
<a id="tocSregistergameserverinput"></a>
<a id="tocsregistergameserverinput"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "InstanceId": {},
  "ConnectionInfo": {},
  "GameServerData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|GameServerId|object|true|none|none|
|InstanceId|object|true|none|none|
|ConnectionInfo|object|false|none|none|
|GameServerData|object|false|none|none|

<h2 id="tocS_RequestUploadCredentialsOutput">RequestUploadCredentialsOutput</h2>
<!-- backwards compatibility -->
<a id="schemarequestuploadcredentialsoutput"></a>
<a id="schema_RequestUploadCredentialsOutput"></a>
<a id="tocSrequestuploadcredentialsoutput"></a>
<a id="tocsrequestuploadcredentialsoutput"></a>

```json
{
  "UploadCredentials": {
    "AccessKeyId": {},
    "SecretAccessKey": {},
    "SessionToken": {}
  },
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UploadCredentials|object|false|none|none|
|StorageLocation|object|false|none|none|

<h2 id="tocS_RequestUploadCredentialsInput">RequestUploadCredentialsInput</h2>
<!-- backwards compatibility -->
<a id="schemarequestuploadcredentialsinput"></a>
<a id="schema_RequestUploadCredentialsInput"></a>
<a id="tocSrequestuploadcredentialsinput"></a>
<a id="tocsrequestuploadcredentialsinput"></a>

```json
{
  "BuildId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|true|none|none|

<h2 id="tocS_ResolveAliasOutput">ResolveAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemaresolvealiasoutput"></a>
<a id="schema_ResolveAliasOutput"></a>
<a id="tocSresolvealiasoutput"></a>
<a id="tocsresolvealiasoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|

<h2 id="tocS_ResolveAliasInput">ResolveAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemaresolvealiasinput"></a>
<a id="schema_ResolveAliasInput"></a>
<a id="tocSresolvealiasinput"></a>
<a id="tocsresolvealiasinput"></a>

```json
{
  "AliasId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|

<h2 id="tocS_ResumeGameServerGroupOutput">ResumeGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaresumegameservergroupoutput"></a>
<a id="schema_ResumeGameServerGroupOutput"></a>
<a id="tocSresumegameservergroupoutput"></a>
<a id="tocsresumegameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_ResumeGameServerGroupInput">ResumeGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaresumegameservergroupinput"></a>
<a id="schema_ResumeGameServerGroupInput"></a>
<a id="tocSresumegameservergroupinput"></a>
<a id="tocsresumegameservergroupinput"></a>

```json
{
  "GameServerGroupName": {},
  "ResumeActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|ResumeActions|object|true|none|none|

<h2 id="tocS_SearchGameSessionsOutput">SearchGameSessionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchgamesessionsoutput"></a>
<a id="schema_SearchGameSessionsOutput"></a>
<a id="tocSsearchgamesessionsoutput"></a>
<a id="tocssearchgamesessionsoutput"></a>

```json
{
  "GameSessions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_SearchGameSessionsInput">SearchGameSessionsInput</h2>
<!-- backwards compatibility -->
<a id="schemasearchgamesessionsinput"></a>
<a id="schema_SearchGameSessionsInput"></a>
<a id="tocSsearchgamesessionsinput"></a>
<a id="tocssearchgamesessionsinput"></a>

```json
{
  "FleetId": {},
  "AliasId": {},
  "Location": {},
  "FilterExpression": {},
  "SortExpression": {},
  "Limit": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|AliasId|object|false|none|none|
|Location|object|false|none|none|
|FilterExpression|object|false|none|none|
|SortExpression|object|false|none|none|
|Limit|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_StartFleetActionsOutput">StartFleetActionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartfleetactionsoutput"></a>
<a id="schema_StartFleetActionsOutput"></a>
<a id="tocSstartfleetactionsoutput"></a>
<a id="tocsstartfleetactionsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|

<h2 id="tocS_StartFleetActionsInput">StartFleetActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemastartfleetactionsinput"></a>
<a id="schema_StartFleetActionsInput"></a>
<a id="tocSstartfleetactionsinput"></a>
<a id="tocsstartfleetactionsinput"></a>

```json
{
  "FleetId": {},
  "Actions": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Actions|object|true|none|none|
|Location|object|false|none|none|

<h2 id="tocS_StartGameSessionPlacementOutput">StartGameSessionPlacementOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartgamesessionplacementoutput"></a>
<a id="schema_StartGameSessionPlacementOutput"></a>
<a id="tocSstartgamesessionplacementoutput"></a>
<a id="tocsstartgamesessionplacementoutput"></a>

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionPlacement|object|false|none|none|

<h2 id="tocS_StartGameSessionPlacementInput">StartGameSessionPlacementInput</h2>
<!-- backwards compatibility -->
<a id="schemastartgamesessionplacementinput"></a>
<a id="schema_StartGameSessionPlacementInput"></a>
<a id="tocSstartgamesessionplacementinput"></a>
<a id="tocsstartgamesessionplacementinput"></a>

```json
{
  "PlacementId": {},
  "GameSessionQueueName": {},
  "GameProperties": {},
  "MaximumPlayerSessionCount": {},
  "GameSessionName": {},
  "PlayerLatencies": {},
  "DesiredPlayerSessions": {},
  "GameSessionData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlacementId|object|true|none|none|
|GameSessionQueueName|object|true|none|none|
|GameProperties|object|false|none|none|
|MaximumPlayerSessionCount|object|true|none|none|
|GameSessionName|object|false|none|none|
|PlayerLatencies|object|false|none|none|
|DesiredPlayerSessions|object|false|none|none|
|GameSessionData|object|false|none|none|

<h2 id="tocS_StartMatchBackfillOutput">StartMatchBackfillOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartmatchbackfilloutput"></a>
<a id="schema_StartMatchBackfillOutput"></a>
<a id="tocSstartmatchbackfilloutput"></a>
<a id="tocsstartmatchbackfilloutput"></a>

```json
{
  "MatchmakingTicket": {
    "TicketId": {},
    "ConfigurationName": {},
    "ConfigurationArn": {},
    "Status": {},
    "StatusReason": {},
    "StatusMessage": {},
    "StartTime": {},
    "EndTime": {},
    "Players": {},
    "GameSessionConnectionInfo": {
      "GameSessionArn": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "MatchedPlayerSessions": {}
    },
    "EstimatedWaitTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchmakingTicket|object|false|none|none|

<h2 id="tocS_StartMatchBackfillInput">StartMatchBackfillInput</h2>
<!-- backwards compatibility -->
<a id="schemastartmatchbackfillinput"></a>
<a id="schema_StartMatchBackfillInput"></a>
<a id="tocSstartmatchbackfillinput"></a>
<a id="tocsstartmatchbackfillinput"></a>

```json
{
  "TicketId": {},
  "ConfigurationName": {},
  "GameSessionArn": {},
  "Players": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketId|object|false|none|none|
|ConfigurationName|object|true|none|none|
|GameSessionArn|object|false|none|none|
|Players|object|true|none|none|

<h2 id="tocS_StartMatchmakingOutput">StartMatchmakingOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartmatchmakingoutput"></a>
<a id="schema_StartMatchmakingOutput"></a>
<a id="tocSstartmatchmakingoutput"></a>
<a id="tocsstartmatchmakingoutput"></a>

```json
{
  "MatchmakingTicket": {
    "TicketId": {},
    "ConfigurationName": {},
    "ConfigurationArn": {},
    "Status": {},
    "StatusReason": {},
    "StatusMessage": {},
    "StartTime": {},
    "EndTime": {},
    "Players": {},
    "GameSessionConnectionInfo": {
      "GameSessionArn": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "MatchedPlayerSessions": {}
    },
    "EstimatedWaitTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MatchmakingTicket|object|false|none|none|

<h2 id="tocS_StartMatchmakingInput">StartMatchmakingInput</h2>
<!-- backwards compatibility -->
<a id="schemastartmatchmakinginput"></a>
<a id="schema_StartMatchmakingInput"></a>
<a id="tocSstartmatchmakinginput"></a>
<a id="tocsstartmatchmakinginput"></a>

```json
{
  "TicketId": {},
  "ConfigurationName": {},
  "Players": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketId|object|false|none|none|
|ConfigurationName|object|true|none|none|
|Players|object|true|none|none|

<h2 id="tocS_StopFleetActionsOutput">StopFleetActionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopfleetactionsoutput"></a>
<a id="schema_StopFleetActionsOutput"></a>
<a id="tocSstopfleetactionsoutput"></a>
<a id="tocsstopfleetactionsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|

<h2 id="tocS_StopFleetActionsInput">StopFleetActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemastopfleetactionsinput"></a>
<a id="schema_StopFleetActionsInput"></a>
<a id="tocSstopfleetactionsinput"></a>
<a id="tocsstopfleetactionsinput"></a>

```json
{
  "FleetId": {},
  "Actions": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Actions|object|true|none|none|
|Location|object|false|none|none|

<h2 id="tocS_StopGameSessionPlacementOutput">StopGameSessionPlacementOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopgamesessionplacementoutput"></a>
<a id="schema_StopGameSessionPlacementOutput"></a>
<a id="tocSstopgamesessionplacementoutput"></a>
<a id="tocsstopgamesessionplacementoutput"></a>

```json
{
  "GameSessionPlacement": {
    "PlacementId": {},
    "GameSessionQueueName": {},
    "Status": {},
    "GameProperties": {},
    "MaximumPlayerSessionCount": {},
    "GameSessionName": {},
    "GameSessionId": {},
    "GameSessionArn": {},
    "GameSessionRegion": {},
    "PlayerLatencies": {},
    "StartTime": {},
    "EndTime": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlacedPlayerSessions": {},
    "GameSessionData": {},
    "MatchmakerData": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionPlacement|object|false|none|none|

<h2 id="tocS_StopGameSessionPlacementInput">StopGameSessionPlacementInput</h2>
<!-- backwards compatibility -->
<a id="schemastopgamesessionplacementinput"></a>
<a id="schema_StopGameSessionPlacementInput"></a>
<a id="tocSstopgamesessionplacementinput"></a>
<a id="tocsstopgamesessionplacementinput"></a>

```json
{
  "PlacementId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlacementId|object|true|none|none|

<h2 id="tocS_StopMatchmakingOutput">StopMatchmakingOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopmatchmakingoutput"></a>
<a id="schema_StopMatchmakingOutput"></a>
<a id="tocSstopmatchmakingoutput"></a>
<a id="tocsstopmatchmakingoutput"></a>

```json
{}
```

<h2 id="tocS_StopMatchmakingInput">StopMatchmakingInput</h2>
<!-- backwards compatibility -->
<a id="schemastopmatchmakinginput"></a>
<a id="schema_StopMatchmakingInput"></a>
<a id="tocSstopmatchmakinginput"></a>
<a id="tocsstopmatchmakinginput"></a>

```json
{
  "TicketId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketId|object|true|none|none|

<h2 id="tocS_SuspendGameServerGroupOutput">SuspendGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemasuspendgameservergroupoutput"></a>
<a id="schema_SuspendGameServerGroupOutput"></a>
<a id="tocSsuspendgameservergroupoutput"></a>
<a id="tocssuspendgameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_SuspendGameServerGroupInput">SuspendGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemasuspendgameservergroupinput"></a>
<a id="schema_SuspendGameServerGroupInput"></a>
<a id="tocSsuspendgameservergroupinput"></a>
<a id="tocssuspendgameservergroupinput"></a>

```json
{
  "GameServerGroupName": {},
  "SuspendActions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|SuspendActions|object|true|none|none|

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
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
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
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateAliasOutput">UpdateAliasOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealiasoutput"></a>
<a id="schema_UpdateAliasOutput"></a>
<a id="tocSupdatealiasoutput"></a>
<a id="tocsupdatealiasoutput"></a>

```json
{
  "Alias": {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alias|object|false|none|none|

<h2 id="tocS_UpdateAliasInput">UpdateAliasInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatealiasinput"></a>
<a id="schema_UpdateAliasInput"></a>
<a id="tocSupdatealiasinput"></a>
<a id="tocsupdatealiasinput"></a>

```json
{
  "AliasId": {},
  "Name": {},
  "Description": {},
  "RoutingStrategy": {
    "Type": {},
    "FleetId": {},
    "Message": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|RoutingStrategy|object|false|none|none|

<h2 id="tocS_UpdateBuildOutput">UpdateBuildOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebuildoutput"></a>
<a id="schema_UpdateBuildOutput"></a>
<a id="tocSupdatebuildoutput"></a>
<a id="tocsupdatebuildoutput"></a>

```json
{
  "Build": {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Build|object|false|none|none|

<h2 id="tocS_UpdateBuildInput">UpdateBuildInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebuildinput"></a>
<a id="schema_UpdateBuildInput"></a>
<a id="tocSupdatebuildinput"></a>
<a id="tocsupdatebuildinput"></a>

```json
{
  "BuildId": {},
  "Name": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|true|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_UpdateFleetAttributesOutput">UpdateFleetAttributesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetattributesoutput"></a>
<a id="schema_UpdateFleetAttributesOutput"></a>
<a id="tocSupdatefleetattributesoutput"></a>
<a id="tocsupdatefleetattributesoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|

<h2 id="tocS_UpdateFleetAttributesInput">UpdateFleetAttributesInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetattributesinput"></a>
<a id="schema_UpdateFleetAttributesInput"></a>
<a id="tocSupdatefleetattributesinput"></a>
<a id="tocsupdatefleetattributesinput"></a>

```json
{
  "FleetId": {},
  "Name": {},
  "Description": {},
  "NewGameSessionProtectionPolicy": {},
  "ResourceCreationLimitPolicy": {
    "NewGameSessionsPerCreator": {},
    "PolicyPeriodInMinutes": {}
  },
  "MetricGroups": {},
  "AnywhereConfiguration": {
    "Cost": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|NewGameSessionProtectionPolicy|object|false|none|none|
|ResourceCreationLimitPolicy|object|false|none|none|
|MetricGroups|object|false|none|none|
|AnywhereConfiguration|object|false|none|none|

<h2 id="tocS_UpdateFleetCapacityOutput">UpdateFleetCapacityOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetcapacityoutput"></a>
<a id="schema_UpdateFleetCapacityOutput"></a>
<a id="tocSupdatefleetcapacityoutput"></a>
<a id="tocsupdatefleetcapacityoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_UpdateFleetCapacityInput">UpdateFleetCapacityInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetcapacityinput"></a>
<a id="schema_UpdateFleetCapacityInput"></a>
<a id="tocSupdatefleetcapacityinput"></a>
<a id="tocsupdatefleetcapacityinput"></a>

```json
{
  "FleetId": {},
  "DesiredInstances": {},
  "MinSize": {},
  "MaxSize": {},
  "Location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|DesiredInstances|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_UpdateFleetPortSettingsOutput">UpdateFleetPortSettingsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetportsettingsoutput"></a>
<a id="schema_UpdateFleetPortSettingsOutput"></a>
<a id="tocSupdatefleetportsettingsoutput"></a>
<a id="tocsupdatefleetportsettingsoutput"></a>

```json
{
  "FleetId": {},
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|

<h2 id="tocS_UpdateFleetPortSettingsInput">UpdateFleetPortSettingsInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetportsettingsinput"></a>
<a id="schema_UpdateFleetPortSettingsInput"></a>
<a id="tocSupdatefleetportsettingsinput"></a>
<a id="tocsupdatefleetportsettingsinput"></a>

```json
{
  "FleetId": {},
  "InboundPermissionAuthorizations": {},
  "InboundPermissionRevocations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|InboundPermissionAuthorizations|object|false|none|none|
|InboundPermissionRevocations|object|false|none|none|

<h2 id="tocS_UpdateGameServerOutput">UpdateGameServerOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategameserveroutput"></a>
<a id="schema_UpdateGameServerOutput"></a>
<a id="tocSupdategameserveroutput"></a>
<a id="tocsupdategameserveroutput"></a>

```json
{
  "GameServer": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServer|object|false|none|none|

<h2 id="tocS_UpdateGameServerInput">UpdateGameServerInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategameserverinput"></a>
<a id="schema_UpdateGameServerInput"></a>
<a id="tocSupdategameserverinput"></a>
<a id="tocsupdategameserverinput"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerId": {},
  "GameServerData": {},
  "UtilizationStatus": {},
  "HealthCheck": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|GameServerId|object|true|none|none|
|GameServerData|object|false|none|none|
|UtilizationStatus|object|false|none|none|
|HealthCheck|object|false|none|none|

<h2 id="tocS_UpdateGameServerGroupOutput">UpdateGameServerGroupOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategameservergroupoutput"></a>
<a id="schema_UpdateGameServerGroupOutput"></a>
<a id="tocSupdategameservergroupoutput"></a>
<a id="tocsupdategameservergroupoutput"></a>

```json
{
  "GameServerGroup": {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroup|object|false|none|none|

<h2 id="tocS_UpdateGameServerGroupInput">UpdateGameServerGroupInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategameservergroupinput"></a>
<a id="schema_UpdateGameServerGroupInput"></a>
<a id="tocSupdategameservergroupinput"></a>
<a id="tocsupdategameservergroupinput"></a>

```json
{
  "GameServerGroupName": {},
  "RoleArn": {},
  "InstanceDefinitions": {},
  "GameServerProtectionPolicy": {},
  "BalancingStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|true|none|none|
|RoleArn|object|false|none|none|
|InstanceDefinitions|object|false|none|none|
|GameServerProtectionPolicy|object|false|none|none|
|BalancingStrategy|object|false|none|none|

<h2 id="tocS_UpdateGameSessionOutput">UpdateGameSessionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategamesessionoutput"></a>
<a id="schema_UpdateGameSessionOutput"></a>
<a id="tocSupdategamesessionoutput"></a>
<a id="tocsupdategamesessionoutput"></a>

```json
{
  "GameSession": {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSession|object|false|none|none|

<h2 id="tocS_UpdateGameSessionInput">UpdateGameSessionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategamesessioninput"></a>
<a id="schema_UpdateGameSessionInput"></a>
<a id="tocSupdategamesessioninput"></a>
<a id="tocsupdategamesessioninput"></a>

```json
{
  "GameSessionId": {},
  "MaximumPlayerSessionCount": {},
  "Name": {},
  "PlayerSessionCreationPolicy": {},
  "ProtectionPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|true|none|none|
|MaximumPlayerSessionCount|object|false|none|none|
|Name|object|false|none|none|
|PlayerSessionCreationPolicy|object|false|none|none|
|ProtectionPolicy|object|false|none|none|

<h2 id="tocS_UpdateGameSessionQueueOutput">UpdateGameSessionQueueOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategamesessionqueueoutput"></a>
<a id="schema_UpdateGameSessionQueueOutput"></a>
<a id="tocSupdategamesessionqueueoutput"></a>
<a id="tocsupdategamesessionqueueoutput"></a>

```json
{
  "GameSessionQueue": {
    "Name": {},
    "GameSessionQueueArn": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionQueue|object|false|none|none|

<h2 id="tocS_UpdateGameSessionQueueInput">UpdateGameSessionQueueInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdategamesessionqueueinput"></a>
<a id="schema_UpdateGameSessionQueueInput"></a>
<a id="tocSupdategamesessionqueueinput"></a>
<a id="tocsupdategamesessionqueueinput"></a>

```json
{
  "Name": {},
  "TimeoutInSeconds": {},
  "PlayerLatencyPolicies": {},
  "Destinations": {},
  "FilterConfiguration": {
    "AllowedLocations": {}
  },
  "PriorityConfiguration": {
    "PriorityOrder": {},
    "LocationOrder": {}
  },
  "CustomEventData": {},
  "NotificationTarget": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|TimeoutInSeconds|object|false|none|none|
|PlayerLatencyPolicies|object|false|none|none|
|Destinations|object|false|none|none|
|FilterConfiguration|object|false|none|none|
|PriorityConfiguration|object|false|none|none|
|CustomEventData|object|false|none|none|
|NotificationTarget|object|false|none|none|

<h2 id="tocS_UpdateMatchmakingConfigurationOutput">UpdateMatchmakingConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatematchmakingconfigurationoutput"></a>
<a id="schema_UpdateMatchmakingConfigurationOutput"></a>
<a id="tocSupdatematchmakingconfigurationoutput"></a>
<a id="tocsupdatematchmakingconfigurationoutput"></a>

```json
{
  "Configuration": {
    "Name": {},
    "ConfigurationArn": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "RuleSetArn": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "CreationTime": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|

<h2 id="tocS_UpdateMatchmakingConfigurationInput">UpdateMatchmakingConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatematchmakingconfigurationinput"></a>
<a id="schema_UpdateMatchmakingConfigurationInput"></a>
<a id="tocSupdatematchmakingconfigurationinput"></a>
<a id="tocsupdatematchmakingconfigurationinput"></a>

```json
{
  "Name": {},
  "Description": {},
  "GameSessionQueueArns": {},
  "RequestTimeoutSeconds": {},
  "AcceptanceTimeoutSeconds": {},
  "AcceptanceRequired": {},
  "RuleSetName": {},
  "NotificationTarget": {},
  "AdditionalPlayerCount": {},
  "CustomEventData": {},
  "GameProperties": {},
  "GameSessionData": {},
  "BackfillMode": {},
  "FlexMatchMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|GameSessionQueueArns|object|false|none|none|
|RequestTimeoutSeconds|object|false|none|none|
|AcceptanceTimeoutSeconds|object|false|none|none|
|AcceptanceRequired|object|false|none|none|
|RuleSetName|object|false|none|none|
|NotificationTarget|object|false|none|none|
|AdditionalPlayerCount|object|false|none|none|
|CustomEventData|object|false|none|none|
|GameProperties|object|false|none|none|
|GameSessionData|object|false|none|none|
|BackfillMode|object|false|none|none|
|FlexMatchMode|object|false|none|none|

<h2 id="tocS_UpdateRuntimeConfigurationOutput">UpdateRuntimeConfigurationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruntimeconfigurationoutput"></a>
<a id="schema_UpdateRuntimeConfigurationOutput"></a>
<a id="tocSupdateruntimeconfigurationoutput"></a>
<a id="tocsupdateruntimeconfigurationoutput"></a>

```json
{
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeConfiguration|object|false|none|none|

<h2 id="tocS_UpdateRuntimeConfigurationInput">UpdateRuntimeConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruntimeconfigurationinput"></a>
<a id="schema_UpdateRuntimeConfigurationInput"></a>
<a id="tocSupdateruntimeconfigurationinput"></a>
<a id="tocsupdateruntimeconfigurationinput"></a>

```json
{
  "FleetId": {},
  "RuntimeConfiguration": {
    "ServerProcesses": {},
    "MaxConcurrentGameSessionActivations": {},
    "GameSessionActivationTimeoutSeconds": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|true|none|none|
|RuntimeConfiguration|object|true|none|none|

<h2 id="tocS_UpdateScriptOutput">UpdateScriptOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescriptoutput"></a>
<a id="schema_UpdateScriptOutput"></a>
<a id="tocSupdatescriptoutput"></a>
<a id="tocsupdatescriptoutput"></a>

```json
{
  "Script": {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Script|object|false|none|none|

<h2 id="tocS_UpdateScriptInput">UpdateScriptInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescriptinput"></a>
<a id="schema_UpdateScriptInput"></a>
<a id="tocSupdatescriptinput"></a>
<a id="tocsupdatescriptinput"></a>

```json
{
  "ScriptId": {},
  "Name": {},
  "Version": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  },
  "ZipFile": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScriptId|object|true|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|
|StorageLocation|object|false|none|none|
|ZipFile|object|false|none|none|

<h2 id="tocS_ValidateMatchmakingRuleSetOutput">ValidateMatchmakingRuleSetOutput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatematchmakingrulesetoutput"></a>
<a id="schema_ValidateMatchmakingRuleSetOutput"></a>
<a id="tocSvalidatematchmakingrulesetoutput"></a>
<a id="tocsvalidatematchmakingrulesetoutput"></a>

```json
{
  "Valid": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Valid|object|false|none|none|

<h2 id="tocS_ValidateMatchmakingRuleSetInput">ValidateMatchmakingRuleSetInput</h2>
<!-- backwards compatibility -->
<a id="schemavalidatematchmakingrulesetinput"></a>
<a id="schema_ValidateMatchmakingRuleSetInput"></a>
<a id="tocSvalidatematchmakingrulesetinput"></a>
<a id="tocsvalidatematchmakingrulesetinput"></a>

```json
{
  "RuleSetBody": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetBody|object|true|none|none|

<h2 id="tocS_MatchmakingIdStringModel">MatchmakingIdStringModel</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingidstringmodel"></a>
<a id="schema_MatchmakingIdStringModel"></a>
<a id="tocSmatchmakingidstringmodel"></a>
<a id="tocsmatchmakingidstringmodel"></a>

```json
"string"
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AcceptanceType">AcceptanceType</h2>
<!-- backwards compatibility -->
<a id="schemaacceptancetype"></a>
<a id="schema_AcceptanceType"></a>
<a id="tocSacceptancetype"></a>
<a id="tocsacceptancetype"></a>

```json
"ACCEPT"
```

<h2 id="tocS_AliasId">AliasId</h2>
<!-- backwards compatibility -->
<a id="schemaaliasid"></a>
<a id="schema_AliasId"></a>
<a id="tocSaliasid"></a>
<a id="tocsaliasid"></a>

```json
"string"
```

<h2 id="tocS_NonBlankAndLengthConstraintString">NonBlankAndLengthConstraintString</h2>
<!-- backwards compatibility -->
<a id="schemanonblankandlengthconstraintstring"></a>
<a id="schema_NonBlankAndLengthConstraintString"></a>
<a id="tocSnonblankandlengthconstraintstring"></a>
<a id="tocsnonblankandlengthconstraintstring"></a>

```json
"string"
```

<h2 id="tocS_AliasArn">AliasArn</h2>
<!-- backwards compatibility -->
<a id="schemaaliasarn"></a>
<a id="schema_AliasArn"></a>
<a id="tocSaliasarn"></a>
<a id="tocsaliasarn"></a>

```json
"string"
```

<h2 id="tocS_FreeText">FreeText</h2>
<!-- backwards compatibility -->
<a id="schemafreetext"></a>
<a id="schema_FreeText"></a>
<a id="tocSfreetext"></a>
<a id="tocsfreetext"></a>

```json
"string"
```

<h2 id="tocS_RoutingStrategy">RoutingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaroutingstrategy"></a>
<a id="schema_RoutingStrategy"></a>
<a id="tocSroutingstrategy"></a>
<a id="tocsroutingstrategy"></a>

```json
{
  "Type": {},
  "FleetId": {},
  "Message": {}
}
```

<p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|FleetId|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

```json
{
  "AliasId": {},
  "Name": {},
  "AliasArn": {},
  "Description": {},
  "RoutingStrategy": {
    "Type": {},
    "FleetId": {},
    "Message": {}
  },
  "CreationTime": {},
  "LastUpdatedTime": {}
}
```

<p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AliasId|object|false|none|none|
|Name|object|false|none|none|
|AliasArn|object|false|none|none|
|Description|object|false|none|none|
|RoutingStrategy|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_AliasIdOrArn">AliasIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schemaaliasidorarn"></a>
<a id="schema_AliasIdOrArn"></a>
<a id="tocSaliasidorarn"></a>
<a id="tocsaliasidorarn"></a>

```json
"string"
```

<h2 id="tocS_AliasList">AliasList</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslist"></a>
<a id="schema_AliasList"></a>
<a id="tocSaliaslist"></a>
<a id="tocsaliaslist"></a>

```json
[
  {
    "AliasId": {},
    "Name": {},
    "AliasArn": {},
    "Description": {},
    "RoutingStrategy": {
      "Type": {},
      "FleetId": {},
      "Message": {}
    },
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
]
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

<h2 id="tocS_NonNegativeLimitedLengthDouble">NonNegativeLimitedLengthDouble</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativelimitedlengthdouble"></a>
<a id="schema_NonNegativeLimitedLengthDouble"></a>
<a id="tocSnonnegativelimitedlengthdouble"></a>
<a id="tocsnonnegativelimitedlengthdouble"></a>

```json
"string"
```

<h2 id="tocS_AnywhereConfiguration">AnywhereConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaanywhereconfiguration"></a>
<a id="schema_AnywhereConfiguration"></a>
<a id="tocSanywhereconfiguration"></a>
<a id="tocsanywhereconfiguration"></a>

```json
{
  "Cost": {}
}
```

Amazon GameLift Anywhere configuration options for your Anywhere fleets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|object|true|none|none|

<h2 id="tocS_ArnStringModel">ArnStringModel</h2>
<!-- backwards compatibility -->
<a id="schemaarnstringmodel"></a>
<a id="schema_ArnStringModel"></a>
<a id="tocSarnstringmodel"></a>
<a id="tocsarnstringmodel"></a>

```json
"string"
```

<h2 id="tocS_PlayerAttributeString">PlayerAttributeString</h2>
<!-- backwards compatibility -->
<a id="schemaplayerattributestring"></a>
<a id="schema_PlayerAttributeString"></a>
<a id="tocSplayerattributestring"></a>
<a id="tocsplayerattributestring"></a>

```json
"string"
```

<h2 id="tocS_DoubleObject">DoubleObject</h2>
<!-- backwards compatibility -->
<a id="schemadoubleobject"></a>
<a id="schema_DoubleObject"></a>
<a id="tocSdoubleobject"></a>
<a id="tocsdoubleobject"></a>

```json
0
```

<h2 id="tocS_PlayerAttributeStringList">PlayerAttributeStringList</h2>
<!-- backwards compatibility -->
<a id="schemaplayerattributestringlist"></a>
<a id="schema_PlayerAttributeStringList"></a>
<a id="tocSplayerattributestringlist"></a>
<a id="tocsplayerattributestringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PlayerAttributeStringDoubleMap">PlayerAttributeStringDoubleMap</h2>
<!-- backwards compatibility -->
<a id="schemaplayerattributestringdoublemap"></a>
<a id="schema_PlayerAttributeStringDoubleMap"></a>
<a id="tocSplayerattributestringdoublemap"></a>
<a id="tocsplayerattributestringdoublemap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DoubleObject](#schemadoubleobject)|false|none|none|

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
{
  "S": {},
  "N": {},
  "SL": {},
  "SDM": {
    "property1": 0,
    "property2": 0
  }
}
```

Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S|object|false|none|none|
|N|object|false|none|none|
|SL|object|false|none|none|
|SDM|object|false|none|none|

<h2 id="tocS_AutoScalingGroupArn">AutoScalingGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalinggrouparn"></a>
<a id="schema_AutoScalingGroupArn"></a>
<a id="tocSautoscalinggrouparn"></a>
<a id="tocsautoscalinggrouparn"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_AwsCredentials">AwsCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaawscredentials"></a>
<a id="schema_AwsCredentials"></a>
<a id="tocSawscredentials"></a>
<a id="tocsawscredentials"></a>

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {}
}
```

Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|false|none|none|
|SecretAccessKey|object|false|none|none|
|SessionToken|object|false|none|none|

<h2 id="tocS_BackfillMode">BackfillMode</h2>
<!-- backwards compatibility -->
<a id="schemabackfillmode"></a>
<a id="schema_BackfillMode"></a>
<a id="tocSbackfillmode"></a>
<a id="tocsbackfillmode"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_BalancingStrategy">BalancingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemabalancingstrategy"></a>
<a id="schema_BalancingStrategy"></a>
<a id="tocSbalancingstrategy"></a>
<a id="tocsbalancingstrategy"></a>

```json
"SPOT_ONLY"
```

<h2 id="tocS_BooleanModel">BooleanModel</h2>
<!-- backwards compatibility -->
<a id="schemabooleanmodel"></a>
<a id="schema_BooleanModel"></a>
<a id="tocSbooleanmodel"></a>
<a id="tocsbooleanmodel"></a>

```json
true
```

<h2 id="tocS_BuildId">BuildId</h2>
<!-- backwards compatibility -->
<a id="schemabuildid"></a>
<a id="schema_BuildId"></a>
<a id="tocSbuildid"></a>
<a id="tocsbuildid"></a>

```json
"string"
```

<h2 id="tocS_BuildArn">BuildArn</h2>
<!-- backwards compatibility -->
<a id="schemabuildarn"></a>
<a id="schema_BuildArn"></a>
<a id="tocSbuildarn"></a>
<a id="tocsbuildarn"></a>

```json
"string"
```

<h2 id="tocS_BuildStatus">BuildStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatus"></a>
<a id="schema_BuildStatus"></a>
<a id="tocSbuildstatus"></a>
<a id="tocsbuildstatus"></a>

```json
"INITIALIZED"
```

<h2 id="tocS_PositiveLong">PositiveLong</h2>
<!-- backwards compatibility -->
<a id="schemapositivelong"></a>
<a id="schema_PositiveLong"></a>
<a id="tocSpositivelong"></a>
<a id="tocspositivelong"></a>

```json
1
```

<h2 id="tocS_OperatingSystem">OperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystem"></a>
<a id="schema_OperatingSystem"></a>
<a id="tocSoperatingsystem"></a>
<a id="tocsoperatingsystem"></a>

```json
"WINDOWS_2012"
```

<h2 id="tocS_ServerSdkVersion">ServerSdkVersion</h2>
<!-- backwards compatibility -->
<a id="schemaserversdkversion"></a>
<a id="schema_ServerSdkVersion"></a>
<a id="tocSserversdkversion"></a>
<a id="tocsserversdkversion"></a>

```json
"string"
```

Data type used for server SDK version.

<h2 id="tocS_Build">Build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_Build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "BuildId": {},
  "BuildArn": {},
  "Name": {},
  "Version": {},
  "Status": {},
  "SizeOnDisk": {},
  "OperatingSystem": {},
  "CreationTime": {},
  "ServerSdkVersion": {}
}
```

<p>Properties describing a custom game build.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BuildId|object|false|none|none|
|BuildArn|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|
|Status|object|false|none|none|
|SizeOnDisk|object|false|none|none|
|OperatingSystem|object|false|none|none|
|CreationTime|object|false|none|none|
|ServerSdkVersion|object|false|none|none|

<h2 id="tocS_BuildIdOrArn">BuildIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schemabuildidorarn"></a>
<a id="schema_BuildIdOrArn"></a>
<a id="tocSbuildidorarn"></a>
<a id="tocsbuildidorarn"></a>

```json
"string"
```

<h2 id="tocS_BuildList">BuildList</h2>
<!-- backwards compatibility -->
<a id="schemabuildlist"></a>
<a id="schema_BuildList"></a>
<a id="tocSbuildlist"></a>
<a id="tocsbuildlist"></a>

```json
[
  {
    "BuildId": {},
    "BuildArn": {},
    "Name": {},
    "Version": {},
    "Status": {},
    "SizeOnDisk": {},
    "OperatingSystem": {},
    "CreationTime": {},
    "ServerSdkVersion": {}
  }
]
```

<h2 id="tocS_CertificateType">CertificateType</h2>
<!-- backwards compatibility -->
<a id="schemacertificatetype"></a>
<a id="schema_CertificateType"></a>
<a id="tocScertificatetype"></a>
<a id="tocscertificatetype"></a>

```json
"DISABLED"
```

<h2 id="tocS_CertificateConfiguration">CertificateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacertificateconfiguration"></a>
<a id="schema_CertificateConfiguration"></a>
<a id="tocScertificateconfiguration"></a>
<a id="tocscertificateconfiguration"></a>

```json
{
  "CertificateType": {}
}
```

Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateType|object|true|none|none|

<h2 id="tocS_GameServerGroupNameOrArn">GameServerGroupNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupnameorarn"></a>
<a id="schema_GameServerGroupNameOrArn"></a>
<a id="tocSgameservergroupnameorarn"></a>
<a id="tocsgameservergroupnameorarn"></a>

```json
"string"
```

<h2 id="tocS_GameServerId">GameServerId</h2>
<!-- backwards compatibility -->
<a id="schemagameserverid"></a>
<a id="schema_GameServerId"></a>
<a id="tocSgameserverid"></a>
<a id="tocsgameserverid"></a>

```json
"string"
```

<h2 id="tocS_GameServerData">GameServerData</h2>
<!-- backwards compatibility -->
<a id="schemagameserverdata"></a>
<a id="schema_GameServerData"></a>
<a id="tocSgameserverdata"></a>
<a id="tocsgameserverdata"></a>

```json
"string"
```

<h2 id="tocS_GameServer">GameServer</h2>
<!-- backwards compatibility -->
<a id="schemagameserver"></a>
<a id="schema_GameServer"></a>
<a id="tocSgameserver"></a>
<a id="tocsgameserver"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerGroupArn": {},
  "GameServerId": {},
  "InstanceId": {},
  "ConnectionInfo": {},
  "GameServerData": {},
  "ClaimStatus": {},
  "UtilizationStatus": {},
  "RegistrationTime": {},
  "LastClaimTime": {},
  "LastHealthCheckTime": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a game server group. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|false|none|none|
|GameServerGroupArn|object|false|none|none|
|GameServerId|object|false|none|none|
|InstanceId|object|false|none|none|
|ConnectionInfo|object|false|none|none|
|GameServerData|object|false|none|none|
|ClaimStatus|object|false|none|none|
|UtilizationStatus|object|false|none|none|
|RegistrationTime|object|false|none|none|
|LastClaimTime|object|false|none|none|
|LastHealthCheckTime|object|false|none|none|

<h2 id="tocS_ComparisonOperatorType">ComparisonOperatorType</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperatortype"></a>
<a id="schema_ComparisonOperatorType"></a>
<a id="tocScomparisonoperatortype"></a>
<a id="tocscomparisonoperatortype"></a>

```json
"GreaterThanOrEqualToThreshold"
```

<h2 id="tocS_FleetId">FleetId</h2>
<!-- backwards compatibility -->
<a id="schemafleetid"></a>
<a id="schema_FleetId"></a>
<a id="tocSfleetid"></a>
<a id="tocsfleetid"></a>

```json
"string"
```

<h2 id="tocS_FleetArn">FleetArn</h2>
<!-- backwards compatibility -->
<a id="schemafleetarn"></a>
<a id="schema_FleetArn"></a>
<a id="tocSfleetarn"></a>
<a id="tocsfleetarn"></a>

```json
"string"
```

<h2 id="tocS_ComputeName">ComputeName</h2>
<!-- backwards compatibility -->
<a id="schemacomputename"></a>
<a id="schema_ComputeName"></a>
<a id="tocScomputename"></a>
<a id="tocscomputename"></a>

```json
"string"
```

<h2 id="tocS_ComputeArn">ComputeArn</h2>
<!-- backwards compatibility -->
<a id="schemacomputearn"></a>
<a id="schema_ComputeArn"></a>
<a id="tocScomputearn"></a>
<a id="tocscomputearn"></a>

```json
"string"
```

<h2 id="tocS_IpAddress">IpAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IpAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_DnsName">DnsName</h2>
<!-- backwards compatibility -->
<a id="schemadnsname"></a>
<a id="schema_DnsName"></a>
<a id="tocSdnsname"></a>
<a id="tocsdnsname"></a>

```json
"string"
```

<h2 id="tocS_ComputeStatus">ComputeStatus</h2>
<!-- backwards compatibility -->
<a id="schemacomputestatus"></a>
<a id="schema_ComputeStatus"></a>
<a id="tocScomputestatus"></a>
<a id="tocscomputestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_LocationStringModel">LocationStringModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationstringmodel"></a>
<a id="schema_LocationStringModel"></a>
<a id="tocSlocationstringmodel"></a>
<a id="tocslocationstringmodel"></a>

```json
"string"
```

<h2 id="tocS_EC2InstanceType">EC2InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancetype"></a>
<a id="schema_EC2InstanceType"></a>
<a id="tocSec2instancetype"></a>
<a id="tocsec2instancetype"></a>

```json
"t2.micro"
```

<h2 id="tocS_GameLiftServiceSdkEndpointOutput">GameLiftServiceSdkEndpointOutput</h2>
<!-- backwards compatibility -->
<a id="schemagameliftservicesdkendpointoutput"></a>
<a id="schema_GameLiftServiceSdkEndpointOutput"></a>
<a id="tocSgameliftservicesdkendpointoutput"></a>
<a id="tocsgameliftservicesdkendpointoutput"></a>

```json
"string"
```

<h2 id="tocS_Compute">Compute</h2>
<!-- backwards compatibility -->
<a id="schemacompute"></a>
<a id="schema_Compute"></a>
<a id="tocScompute"></a>
<a id="tocscompute"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ComputeName": {},
  "ComputeArn": {},
  "IpAddress": {},
  "DnsName": {},
  "ComputeStatus": {},
  "Location": {},
  "CreationTime": {},
  "OperatingSystem": {},
  "Type": {},
  "GameLiftServiceSdkEndpoint": {}
}
```

Resources used to host your game servers. A compute resource can be managed Amazon GameLift Amazon EC2 instances or your own resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|ComputeName|object|false|none|none|
|ComputeArn|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|ComputeStatus|object|false|none|none|
|Location|object|false|none|none|
|CreationTime|object|false|none|none|
|OperatingSystem|object|false|none|none|
|Type|object|false|none|none|
|GameLiftServiceSdkEndpoint|object|false|none|none|

<h2 id="tocS_ComputeAuthToken">ComputeAuthToken</h2>
<!-- backwards compatibility -->
<a id="schemacomputeauthtoken"></a>
<a id="schema_ComputeAuthToken"></a>
<a id="tocScomputeauthtoken"></a>
<a id="tocscomputeauthtoken"></a>

```json
"string"
```

<h2 id="tocS_ComputeList">ComputeList</h2>
<!-- backwards compatibility -->
<a id="schemacomputelist"></a>
<a id="schema_ComputeList"></a>
<a id="tocScomputelist"></a>
<a id="tocscomputelist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "ComputeName": {},
    "ComputeArn": {},
    "IpAddress": {},
    "DnsName": {},
    "ComputeStatus": {},
    "Location": {},
    "CreationTime": {},
    "OperatingSystem": {},
    "Type": {},
    "GameLiftServiceSdkEndpoint": {}
  }
]
```

<h2 id="tocS_ComputeNameOrArn">ComputeNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemacomputenameorarn"></a>
<a id="schema_ComputeNameOrArn"></a>
<a id="tocScomputenameorarn"></a>
<a id="tocscomputenameorarn"></a>

```json
"string"
```

<h2 id="tocS_ComputeType">ComputeType</h2>
<!-- backwards compatibility -->
<a id="schemacomputetype"></a>
<a id="schema_ComputeType"></a>
<a id="tocScomputetype"></a>
<a id="tocscomputetype"></a>

```json
"EC2"
```

<h2 id="tocS_NonZeroAndMaxString">NonZeroAndMaxString</h2>
<!-- backwards compatibility -->
<a id="schemanonzeroandmaxstring"></a>
<a id="schema_NonZeroAndMaxString"></a>
<a id="tocSnonzeroandmaxstring"></a>
<a id="tocsnonzeroandmaxstring"></a>

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

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "Bucket": {},
  "Key": {},
  "RoleArn": {},
  "ObjectVersion": {}
}
```

The location in Amazon S3 where build or script files are stored for access by Amazon GameLift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Key|object|false|none|none|
|RoleArn|object|false|none|none|
|ObjectVersion|object|false|none|none|

<h2 id="tocS_ScriptIdOrArn">ScriptIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schemascriptidorarn"></a>
<a id="schema_ScriptIdOrArn"></a>
<a id="tocSscriptidorarn"></a>
<a id="tocsscriptidorarn"></a>

```json
"string"
```

<h2 id="tocS_LaunchPathStringModel">LaunchPathStringModel</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpathstringmodel"></a>
<a id="schema_LaunchPathStringModel"></a>
<a id="tocSlaunchpathstringmodel"></a>
<a id="tocslaunchpathstringmodel"></a>

```json
"string"
```

<h2 id="tocS_LaunchParametersStringModel">LaunchParametersStringModel</h2>
<!-- backwards compatibility -->
<a id="schemalaunchparametersstringmodel"></a>
<a id="schema_LaunchParametersStringModel"></a>
<a id="tocSlaunchparametersstringmodel"></a>
<a id="tocslaunchparametersstringmodel"></a>

```json
"string"
```

<h2 id="tocS_IpPermissionsList">IpPermissionsList</h2>
<!-- backwards compatibility -->
<a id="schemaippermissionslist"></a>
<a id="schema_IpPermissionsList"></a>
<a id="tocSippermissionslist"></a>
<a id="tocsippermissionslist"></a>

```json
[
  {
    "FromPort": {},
    "ToPort": {},
    "IpRange": {},
    "Protocol": {}
  }
]
```

<h2 id="tocS_ProtectionPolicy">ProtectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaprotectionpolicy"></a>
<a id="schema_ProtectionPolicy"></a>
<a id="tocSprotectionpolicy"></a>
<a id="tocsprotectionpolicy"></a>

```json
"NoProtection"
```

<h2 id="tocS_RuntimeConfiguration">RuntimeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeconfiguration"></a>
<a id="schema_RuntimeConfiguration"></a>
<a id="tocSruntimeconfiguration"></a>
<a id="tocsruntimeconfiguration"></a>

```json
{
  "ServerProcesses": {},
  "MaxConcurrentGameSessionActivations": {},
  "GameSessionActivationTimeoutSeconds": {}
}
```

<p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Amazon GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each server process. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServerProcesses|object|false|none|none|
|MaxConcurrentGameSessionActivations|object|false|none|none|
|GameSessionActivationTimeoutSeconds|object|false|none|none|

<h2 id="tocS_ResourceCreationLimitPolicy">ResourceCreationLimitPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecreationlimitpolicy"></a>
<a id="schema_ResourceCreationLimitPolicy"></a>
<a id="tocSresourcecreationlimitpolicy"></a>
<a id="tocsresourcecreationlimitpolicy"></a>

```json
{
  "NewGameSessionsPerCreator": {},
  "PolicyPeriodInMinutes": {}
}
```

<p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NewGameSessionsPerCreator|object|false|none|none|
|PolicyPeriodInMinutes|object|false|none|none|

<h2 id="tocS_MetricGroupList">MetricGroupList</h2>
<!-- backwards compatibility -->
<a id="schemametricgrouplist"></a>
<a id="schema_MetricGroupList"></a>
<a id="tocSmetricgrouplist"></a>
<a id="tocsmetricgrouplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FleetType">FleetType</h2>
<!-- backwards compatibility -->
<a id="schemafleettype"></a>
<a id="schema_FleetType"></a>
<a id="tocSfleettype"></a>
<a id="tocsfleettype"></a>

```json
"ON_DEMAND"
```

<h2 id="tocS_LocationConfigurationList">LocationConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationconfigurationlist"></a>
<a id="schema_LocationConfigurationList"></a>
<a id="tocSlocationconfigurationlist"></a>
<a id="tocslocationconfigurationlist"></a>

```json
[
  {
    "Location": {}
  }
]
```

<h2 id="tocS_FleetIdOrArn">FleetIdOrArn</h2>
<!-- backwards compatibility -->
<a id="schemafleetidorarn"></a>
<a id="schema_FleetIdOrArn"></a>
<a id="tocSfleetidorarn"></a>
<a id="tocsfleetidorarn"></a>

```json
"string"
```

<h2 id="tocS_LocationStateList">LocationStateList</h2>
<!-- backwards compatibility -->
<a id="schemalocationstatelist"></a>
<a id="schema_LocationStateList"></a>
<a id="tocSlocationstatelist"></a>
<a id="tocslocationstatelist"></a>

```json
[
  {
    "Location": {},
    "Status": {}
  }
]
```

<h2 id="tocS_FleetAttributes">FleetAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafleetattributes"></a>
<a id="schema_FleetAttributes"></a>
<a id="tocSfleetattributes"></a>
<a id="tocsfleetattributes"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "FleetType": {},
  "InstanceType": {},
  "Description": {},
  "Name": {},
  "CreationTime": {},
  "TerminationTime": {},
  "Status": {},
  "BuildId": {},
  "BuildArn": {},
  "ScriptId": {},
  "ScriptArn": {},
  "ServerLaunchPath": {},
  "ServerLaunchParameters": {},
  "LogPaths": {},
  "NewGameSessionProtectionPolicy": {},
  "OperatingSystem": {},
  "ResourceCreationLimitPolicy": {
    "NewGameSessionsPerCreator": {},
    "PolicyPeriodInMinutes": {}
  },
  "MetricGroups": {},
  "StoppedActions": {},
  "InstanceRoleArn": {},
  "CertificateConfiguration": {
    "CertificateType": {}
  },
  "ComputeType": {},
  "AnywhereConfiguration": {
    "Cost": {}
  }
}
```

<p>Describes a Amazon GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|FleetType|object|false|none|none|
|InstanceType|object|false|none|none|
|Description|object|false|none|none|
|Name|object|false|none|none|
|CreationTime|object|false|none|none|
|TerminationTime|object|false|none|none|
|Status|object|false|none|none|
|BuildId|object|false|none|none|
|BuildArn|object|false|none|none|
|ScriptId|object|false|none|none|
|ScriptArn|object|false|none|none|
|ServerLaunchPath|object|false|none|none|
|ServerLaunchParameters|object|false|none|none|
|LogPaths|object|false|none|none|
|NewGameSessionProtectionPolicy|object|false|none|none|
|OperatingSystem|object|false|none|none|
|ResourceCreationLimitPolicy|[ResourceCreationLimitPolicy](#schemaresourcecreationlimitpolicy)|false|none|<p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p>|
|MetricGroups|object|false|none|none|
|StoppedActions|object|false|none|none|
|InstanceRoleArn|object|false|none|none|
|CertificateConfiguration|[CertificateConfiguration](#schemacertificateconfiguration)|false|none|Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>. |
|ComputeType|object|false|none|none|
|AnywhereConfiguration|[AnywhereConfiguration](#schemaanywhereconfiguration)|false|none|Amazon GameLift Anywhere configuration options for your Anywhere fleets.|

<h2 id="tocS_GameServerGroupName">GameServerGroupName</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupname"></a>
<a id="schema_GameServerGroupName"></a>
<a id="tocSgameservergroupname"></a>
<a id="tocsgameservergroupname"></a>

```json
"string"
```

<h2 id="tocS_IamRoleArn">IamRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IamRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_WholeNumber">WholeNumber</h2>
<!-- backwards compatibility -->
<a id="schemawholenumber"></a>
<a id="schema_WholeNumber"></a>
<a id="tocSwholenumber"></a>
<a id="tocswholenumber"></a>

```json
0
```

<h2 id="tocS_PositiveInteger">PositiveInteger</h2>
<!-- backwards compatibility -->
<a id="schemapositiveinteger"></a>
<a id="schema_PositiveInteger"></a>
<a id="tocSpositiveinteger"></a>
<a id="tocspositiveinteger"></a>

```json
1
```

<h2 id="tocS_LaunchTemplateSpecification">LaunchTemplateSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatespecification"></a>
<a id="schema_LaunchTemplateSpecification"></a>
<a id="tocSlaunchtemplatespecification"></a>
<a id="tocslaunchtemplatespecification"></a>

```json
{
  "LaunchTemplateId": {},
  "LaunchTemplateName": {},
  "Version": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An Amazon Elastic Compute Cloud launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchTemplateId|object|false|none|none|
|LaunchTemplateName|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_InstanceDefinitions">InstanceDefinitions</h2>
<!-- backwards compatibility -->
<a id="schemainstancedefinitions"></a>
<a id="schema_InstanceDefinitions"></a>
<a id="tocSinstancedefinitions"></a>
<a id="tocsinstancedefinitions"></a>

```json
[
  {
    "InstanceType": {},
    "WeightedCapacity": {}
  },
  {
    "InstanceType": {},
    "WeightedCapacity": {}
  }
]
```

<h2 id="tocS_GameServerGroupAutoScalingPolicy">GameServerGroupAutoScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupautoscalingpolicy"></a>
<a id="schema_GameServerGroupAutoScalingPolicy"></a>
<a id="tocSgameservergroupautoscalingpolicy"></a>
<a id="tocsgameservergroupautoscalingpolicy"></a>

```json
{
  "EstimatedInstanceWarmup": {},
  "TargetTrackingConfiguration": {
    "TargetValue": {}
  }
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimatedInstanceWarmup|object|false|none|none|
|TargetTrackingConfiguration|object|true|none|none|

<h2 id="tocS_GameServerProtectionPolicy">GameServerProtectionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagameserverprotectionpolicy"></a>
<a id="schema_GameServerProtectionPolicy"></a>
<a id="tocSgameserverprotectionpolicy"></a>
<a id="tocsgameserverprotectionpolicy"></a>

```json
"NO_PROTECTION"
```

<h2 id="tocS_VpcSubnets">VpcSubnets</h2>
<!-- backwards compatibility -->
<a id="schemavpcsubnets"></a>
<a id="schema_VpcSubnets"></a>
<a id="tocSvpcsubnets"></a>
<a id="tocsvpcsubnets"></a>

```json
[
  "stringstringstr"
]
```

<h2 id="tocS_GameServerGroup">GameServerGroup</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroup"></a>
<a id="schema_GameServerGroup"></a>
<a id="tocSgameservergroup"></a>
<a id="tocsgameservergroup"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerGroupArn": {},
  "RoleArn": {},
  "InstanceDefinitions": {},
  "BalancingStrategy": {},
  "GameServerProtectionPolicy": {},
  "AutoScalingGroupArn": {},
  "Status": {},
  "StatusReason": {},
  "SuspendedActions": {},
  "CreationTime": {},
  "LastUpdatedTime": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|false|none|none|
|GameServerGroupArn|object|false|none|none|
|RoleArn|object|false|none|none|
|InstanceDefinitions|object|false|none|none|
|BalancingStrategy|object|false|none|none|
|GameServerProtectionPolicy|object|false|none|none|
|AutoScalingGroupArn|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|SuspendedActions|object|false|none|none|
|CreationTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|

<h2 id="tocS_GamePropertyList">GamePropertyList</h2>
<!-- backwards compatibility -->
<a id="schemagamepropertylist"></a>
<a id="schema_GamePropertyList"></a>
<a id="tocSgamepropertylist"></a>
<a id="tocsgamepropertylist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_IdStringModel">IdStringModel</h2>
<!-- backwards compatibility -->
<a id="schemaidstringmodel"></a>
<a id="schema_IdStringModel"></a>
<a id="tocSidstringmodel"></a>
<a id="tocsidstringmodel"></a>

```json
"string"
```

<h2 id="tocS_LargeGameSessionData">LargeGameSessionData</h2>
<!-- backwards compatibility -->
<a id="schemalargegamesessiondata"></a>
<a id="schema_LargeGameSessionData"></a>
<a id="tocSlargegamesessiondata"></a>
<a id="tocslargegamesessiondata"></a>

```json
"string"
```

<h2 id="tocS_GameSession">GameSession</h2>
<!-- backwards compatibility -->
<a id="schemagamesession"></a>
<a id="schema_GameSession"></a>
<a id="tocSgamesession"></a>
<a id="tocsgamesession"></a>

```json
{
  "GameSessionId": {},
  "Name": {},
  "FleetId": {},
  "FleetArn": {},
  "CreationTime": {},
  "TerminationTime": {},
  "CurrentPlayerSessionCount": {},
  "MaximumPlayerSessionCount": {},
  "Status": {},
  "StatusReason": {},
  "GameProperties": {},
  "IpAddress": {},
  "DnsName": {},
  "Port": {},
  "PlayerSessionCreationPolicy": {},
  "CreatorId": {},
  "GameSessionData": {},
  "MatchmakerData": {},
  "Location": {}
}
```

<p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionId|object|false|none|none|
|Name|object|false|none|none|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|CreationTime|object|false|none|none|
|TerminationTime|object|false|none|none|
|CurrentPlayerSessionCount|object|false|none|none|
|MaximumPlayerSessionCount|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|GameProperties|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|Port|object|false|none|none|
|PlayerSessionCreationPolicy|object|false|none|none|
|CreatorId|object|false|none|none|
|GameSessionData|object|false|none|none|
|MatchmakerData|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_GameSessionQueueName">GameSessionQueueName</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuename"></a>
<a id="schema_GameSessionQueueName"></a>
<a id="tocSgamesessionqueuename"></a>
<a id="tocsgamesessionqueuename"></a>

```json
"string"
```

<h2 id="tocS_PlayerLatencyPolicyList">PlayerLatencyPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlatencypolicylist"></a>
<a id="schema_PlayerLatencyPolicyList"></a>
<a id="tocSplayerlatencypolicylist"></a>
<a id="tocsplayerlatencypolicylist"></a>

```json
[
  {
    "MaximumIndividualPlayerLatencyMilliseconds": {},
    "PolicyDurationSeconds": {}
  }
]
```

<h2 id="tocS_GameSessionQueueDestinationList">GameSessionQueueDestinationList</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuedestinationlist"></a>
<a id="schema_GameSessionQueueDestinationList"></a>
<a id="tocSgamesessionqueuedestinationlist"></a>
<a id="tocsgamesessionqueuedestinationlist"></a>

```json
[
  {
    "DestinationArn": {}
  }
]
```

<h2 id="tocS_FilterConfiguration">FilterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafilterconfiguration"></a>
<a id="schema_FilterConfiguration"></a>
<a id="tocSfilterconfiguration"></a>
<a id="tocsfilterconfiguration"></a>

```json
{
  "AllowedLocations": {}
}
```

A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedLocations|object|false|none|none|

<h2 id="tocS_PriorityConfiguration">PriorityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapriorityconfiguration"></a>
<a id="schema_PriorityConfiguration"></a>
<a id="tocSpriorityconfiguration"></a>
<a id="tocspriorityconfiguration"></a>

```json
{
  "PriorityOrder": {},
  "LocationOrder": {}
}
```

<p>Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:</p> <ul> <li> <p>If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.</p> </li> <li> <p>If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).</p> </li> </ul> <p>Changing the priority order will affect how game sessions are placed.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PriorityOrder|object|false|none|none|
|LocationOrder|object|false|none|none|

<h2 id="tocS_QueueCustomEventData">QueueCustomEventData</h2>
<!-- backwards compatibility -->
<a id="schemaqueuecustomeventdata"></a>
<a id="schema_QueueCustomEventData"></a>
<a id="tocSqueuecustomeventdata"></a>
<a id="tocsqueuecustomeventdata"></a>

```json
"string"
```

<h2 id="tocS_QueueSnsArnStringModel">QueueSnsArnStringModel</h2>
<!-- backwards compatibility -->
<a id="schemaqueuesnsarnstringmodel"></a>
<a id="schema_QueueSnsArnStringModel"></a>
<a id="tocSqueuesnsarnstringmodel"></a>
<a id="tocsqueuesnsarnstringmodel"></a>

```json
"string"
```

<h2 id="tocS_GameSessionQueue">GameSessionQueue</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueue"></a>
<a id="schema_GameSessionQueue"></a>
<a id="tocSgamesessionqueue"></a>
<a id="tocsgamesessionqueue"></a>

```json
{
  "Name": {},
  "GameSessionQueueArn": {},
  "TimeoutInSeconds": {},
  "PlayerLatencyPolicies": {},
  "Destinations": {},
  "FilterConfiguration": {
    "AllowedLocations": {}
  },
  "PriorityConfiguration": {
    "PriorityOrder": {},
    "LocationOrder": {}
  },
  "CustomEventData": {},
  "NotificationTarget": {}
}
```

Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|GameSessionQueueArn|object|false|none|none|
|TimeoutInSeconds|object|false|none|none|
|PlayerLatencyPolicies|object|false|none|none|
|Destinations|object|false|none|none|
|FilterConfiguration|object|false|none|none|
|PriorityConfiguration|object|false|none|none|
|CustomEventData|object|false|none|none|
|NotificationTarget|object|false|none|none|

<h2 id="tocS_CustomInputLocationStringModel">CustomInputLocationStringModel</h2>
<!-- backwards compatibility -->
<a id="schemacustominputlocationstringmodel"></a>
<a id="schema_CustomInputLocationStringModel"></a>
<a id="tocScustominputlocationstringmodel"></a>
<a id="tocscustominputlocationstringmodel"></a>

```json
"stringst"
```

<h2 id="tocS_LocationModel">LocationModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationmodel"></a>
<a id="schema_LocationModel"></a>
<a id="tocSlocationmodel"></a>
<a id="tocslocationmodel"></a>

```json
{
  "LocationName": {},
  "LocationArn": {}
}
```

Properties of a location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationName|object|false|none|none|
|LocationArn|object|false|none|none|

<h2 id="tocS_QueueArnsList">QueueArnsList</h2>
<!-- backwards compatibility -->
<a id="schemaqueuearnslist"></a>
<a id="schema_QueueArnsList"></a>
<a id="tocSqueuearnslist"></a>
<a id="tocsqueuearnslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchmakingRequestTimeoutInteger">MatchmakingRequestTimeoutInteger</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingrequesttimeoutinteger"></a>
<a id="schema_MatchmakingRequestTimeoutInteger"></a>
<a id="tocSmatchmakingrequesttimeoutinteger"></a>
<a id="tocsmatchmakingrequesttimeoutinteger"></a>

```json
1
```

<h2 id="tocS_MatchmakingAcceptanceTimeoutInteger">MatchmakingAcceptanceTimeoutInteger</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingacceptancetimeoutinteger"></a>
<a id="schema_MatchmakingAcceptanceTimeoutInteger"></a>
<a id="tocSmatchmakingacceptancetimeoutinteger"></a>
<a id="tocsmatchmakingacceptancetimeoutinteger"></a>

```json
1
```

<h2 id="tocS_MatchmakingRuleSetName">MatchmakingRuleSetName</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingrulesetname"></a>
<a id="schema_MatchmakingRuleSetName"></a>
<a id="tocSmatchmakingrulesetname"></a>
<a id="tocsmatchmakingrulesetname"></a>

```json
"string"
```

<h2 id="tocS_SnsArnStringModel">SnsArnStringModel</h2>
<!-- backwards compatibility -->
<a id="schemasnsarnstringmodel"></a>
<a id="schema_SnsArnStringModel"></a>
<a id="tocSsnsarnstringmodel"></a>
<a id="tocssnsarnstringmodel"></a>

```json
"string"
```

<h2 id="tocS_CustomEventData">CustomEventData</h2>
<!-- backwards compatibility -->
<a id="schemacustomeventdata"></a>
<a id="schema_CustomEventData"></a>
<a id="tocScustomeventdata"></a>
<a id="tocscustomeventdata"></a>

```json
"string"
```

<h2 id="tocS_GameSessionData">GameSessionData</h2>
<!-- backwards compatibility -->
<a id="schemagamesessiondata"></a>
<a id="schema_GameSessionData"></a>
<a id="tocSgamesessiondata"></a>
<a id="tocsgamesessiondata"></a>

```json
"string"
```

<h2 id="tocS_FlexMatchMode">FlexMatchMode</h2>
<!-- backwards compatibility -->
<a id="schemaflexmatchmode"></a>
<a id="schema_FlexMatchMode"></a>
<a id="tocSflexmatchmode"></a>
<a id="tocsflexmatchmode"></a>

```json
"STANDALONE"
```

<h2 id="tocS_MatchmakingConfiguration">MatchmakingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfiguration"></a>
<a id="schema_MatchmakingConfiguration"></a>
<a id="tocSmatchmakingconfiguration"></a>
<a id="tocsmatchmakingconfiguration"></a>

```json
{
  "Name": {},
  "ConfigurationArn": {},
  "Description": {},
  "GameSessionQueueArns": {},
  "RequestTimeoutSeconds": {},
  "AcceptanceTimeoutSeconds": {},
  "AcceptanceRequired": {},
  "RuleSetName": {},
  "RuleSetArn": {},
  "NotificationTarget": {},
  "AdditionalPlayerCount": {},
  "CustomEventData": {},
  "CreationTime": {},
  "GameProperties": {},
  "GameSessionData": {},
  "BackfillMode": {},
  "FlexMatchMode": {}
}
```

Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ConfigurationArn|object|false|none|none|
|Description|object|false|none|none|
|GameSessionQueueArns|object|false|none|none|
|RequestTimeoutSeconds|object|false|none|none|
|AcceptanceTimeoutSeconds|object|false|none|none|
|AcceptanceRequired|object|false|none|none|
|RuleSetName|object|false|none|none|
|RuleSetArn|object|false|none|none|
|NotificationTarget|object|false|none|none|
|AdditionalPlayerCount|object|false|none|none|
|CustomEventData|object|false|none|none|
|CreationTime|object|false|none|none|
|GameProperties|object|false|none|none|
|GameSessionData|object|false|none|none|
|BackfillMode|object|false|none|none|
|FlexMatchMode|object|false|none|none|

<h2 id="tocS_RuleSetBody">RuleSetBody</h2>
<!-- backwards compatibility -->
<a id="schemarulesetbody"></a>
<a id="schema_RuleSetBody"></a>
<a id="tocSrulesetbody"></a>
<a id="tocsrulesetbody"></a>

```json
"string"
```

<h2 id="tocS_MatchmakingRuleSet">MatchmakingRuleSet</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingruleset"></a>
<a id="schema_MatchmakingRuleSet"></a>
<a id="tocSmatchmakingruleset"></a>
<a id="tocsmatchmakingruleset"></a>

```json
{
  "RuleSetName": {},
  "RuleSetArn": {},
  "RuleSetBody": {},
  "CreationTime": {}
}
```

<p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleSetName|object|false|none|none|
|RuleSetArn|object|false|none|none|
|RuleSetBody|object|true|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_PlayerData">PlayerData</h2>
<!-- backwards compatibility -->
<a id="schemaplayerdata"></a>
<a id="schema_PlayerData"></a>
<a id="tocSplayerdata"></a>
<a id="tocsplayerdata"></a>

```json
"string"
```

<h2 id="tocS_PlayerSession">PlayerSession</h2>
<!-- backwards compatibility -->
<a id="schemaplayersession"></a>
<a id="schema_PlayerSession"></a>
<a id="tocSplayersession"></a>
<a id="tocsplayersession"></a>

```json
{
  "PlayerSessionId": {},
  "PlayerId": {},
  "GameSessionId": {},
  "FleetId": {},
  "FleetArn": {},
  "CreationTime": {},
  "TerminationTime": {},
  "Status": {},
  "IpAddress": {},
  "DnsName": {},
  "Port": {},
  "PlayerData": {}
}
```

<p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerSessionId|object|false|none|none|
|PlayerId|object|false|none|none|
|GameSessionId|object|false|none|none|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|CreationTime|object|false|none|none|
|TerminationTime|object|false|none|none|
|Status|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|Port|object|false|none|none|
|PlayerData|object|false|none|none|

<h2 id="tocS_PlayerIdList">PlayerIdList</h2>
<!-- backwards compatibility -->
<a id="schemaplayeridlist"></a>
<a id="schema_PlayerIdList"></a>
<a id="tocSplayeridlist"></a>
<a id="tocsplayeridlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PlayerDataMap">PlayerDataMap</h2>
<!-- backwards compatibility -->
<a id="schemaplayerdatamap"></a>
<a id="schema_PlayerDataMap"></a>
<a id="tocSplayerdatamap"></a>
<a id="tocsplayerdatamap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PlayerData](#schemaplayerdata)|false|none|none|

<h2 id="tocS_PlayerSessionList">PlayerSessionList</h2>
<!-- backwards compatibility -->
<a id="schemaplayersessionlist"></a>
<a id="schema_PlayerSessionList"></a>
<a id="tocSplayersessionlist"></a>
<a id="tocsplayersessionlist"></a>

```json
[
  {
    "PlayerSessionId": {},
    "PlayerId": {},
    "GameSessionId": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerData": {}
  }
]
```

<h2 id="tocS_ZipBlob">ZipBlob</h2>
<!-- backwards compatibility -->
<a id="schemazipblob"></a>
<a id="schema_ZipBlob"></a>
<a id="tocSzipblob"></a>
<a id="tocszipblob"></a>

```json
"string"
```

<h2 id="tocS_Script">Script</h2>
<!-- backwards compatibility -->
<a id="schemascript"></a>
<a id="schema_Script"></a>
<a id="tocSscript"></a>
<a id="tocsscript"></a>

```json
{
  "ScriptId": {},
  "ScriptArn": {},
  "Name": {},
  "Version": {},
  "SizeOnDisk": {},
  "CreationTime": {},
  "StorageLocation": {
    "Bucket": {},
    "Key": {},
    "RoleArn": {},
    "ObjectVersion": {}
  }
}
```

<p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScriptId|object|false|none|none|
|ScriptArn|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|
|SizeOnDisk|object|false|none|none|
|CreationTime|object|false|none|none|
|StorageLocation|object|false|none|none|

<h2 id="tocS_VpcPeeringAuthorization">VpcPeeringAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringauthorization"></a>
<a id="schema_VpcPeeringAuthorization"></a>
<a id="tocSvpcpeeringauthorization"></a>
<a id="tocsvpcpeeringauthorization"></a>

```json
{
  "GameLiftAwsAccountId": {},
  "PeerVpcAwsAccountId": {},
  "PeerVpcId": {},
  "CreationTime": {},
  "ExpirationTime": {}
}
```

<p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameLiftAwsAccountId|object|false|none|none|
|PeerVpcAwsAccountId|object|false|none|none|
|PeerVpcId|object|false|none|none|
|CreationTime|object|false|none|none|
|ExpirationTime|object|false|none|none|

<h2 id="tocS_CustomLocationNameOrArnModel">CustomLocationNameOrArnModel</h2>
<!-- backwards compatibility -->
<a id="schemacustomlocationnameorarnmodel"></a>
<a id="schema_CustomLocationNameOrArnModel"></a>
<a id="tocScustomlocationnameorarnmodel"></a>
<a id="tocscustomlocationnameorarnmodel"></a>

```json
"string"
```

<h2 id="tocS_LocationList">LocationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationlist"></a>
<a id="schema_LocationList"></a>
<a id="tocSlocationlist"></a>
<a id="tocslocationlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GameServerGroupDeleteOption">GameServerGroupDeleteOption</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupdeleteoption"></a>
<a id="schema_GameServerGroupDeleteOption"></a>
<a id="tocSgameservergroupdeleteoption"></a>
<a id="tocsgameservergroupdeleteoption"></a>

```json
"SAFE_DELETE"
```

<h2 id="tocS_GameSessionQueueNameOrArn">GameSessionQueueNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuenameorarn"></a>
<a id="schema_GameSessionQueueNameOrArn"></a>
<a id="tocSgamesessionqueuenameorarn"></a>
<a id="tocsgamesessionqueuenameorarn"></a>

```json
"string"
```

<h2 id="tocS_MatchmakingConfigurationName">MatchmakingConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfigurationname"></a>
<a id="schema_MatchmakingConfigurationName"></a>
<a id="tocSmatchmakingconfigurationname"></a>
<a id="tocsmatchmakingconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_EC2InstanceLimitList">EC2InstanceLimitList</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancelimitlist"></a>
<a id="schema_EC2InstanceLimitList"></a>
<a id="tocSec2instancelimitlist"></a>
<a id="tocsec2instancelimitlist"></a>

```json
[
  {
    "EC2InstanceType": {},
    "CurrentInstances": {},
    "InstanceLimit": {},
    "Location": {}
  }
]
```

<h2 id="tocS_FleetIdOrArnList">FleetIdOrArnList</h2>
<!-- backwards compatibility -->
<a id="schemafleetidorarnlist"></a>
<a id="schema_FleetIdOrArnList"></a>
<a id="tocSfleetidorarnlist"></a>
<a id="tocsfleetidorarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FleetAttributesList">FleetAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemafleetattributeslist"></a>
<a id="schema_FleetAttributesList"></a>
<a id="tocSfleetattributeslist"></a>
<a id="tocsfleetattributeslist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "FleetType": {},
    "InstanceType": {},
    "Description": {},
    "Name": {},
    "CreationTime": {},
    "TerminationTime": {},
    "Status": {},
    "BuildId": {},
    "BuildArn": {},
    "ScriptId": {},
    "ScriptArn": {},
    "ServerLaunchPath": {},
    "ServerLaunchParameters": {},
    "LogPaths": {},
    "NewGameSessionProtectionPolicy": {},
    "OperatingSystem": {},
    "ResourceCreationLimitPolicy": {
      "NewGameSessionsPerCreator": {},
      "PolicyPeriodInMinutes": {}
    },
    "MetricGroups": {},
    "StoppedActions": {},
    "InstanceRoleArn": {},
    "CertificateConfiguration": {
      "CertificateType": {}
    },
    "ComputeType": {},
    "AnywhereConfiguration": {
      "Cost": {}
    }
  }
]
```

<h2 id="tocS_FleetCapacityList">FleetCapacityList</h2>
<!-- backwards compatibility -->
<a id="schemafleetcapacitylist"></a>
<a id="schema_FleetCapacityList"></a>
<a id="tocSfleetcapacitylist"></a>
<a id="tocsfleetcapacitylist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "InstanceType": {},
    "InstanceCounts": {
      "DESIRED": {},
      "MINIMUM": {},
      "MAXIMUM": {},
      "PENDING": {},
      "ACTIVE": {},
      "IDLE": {},
      "TERMINATING": {}
    },
    "Location": {}
  }
]
```

<h2 id="tocS_EventList">EventList</h2>
<!-- backwards compatibility -->
<a id="schemaeventlist"></a>
<a id="schema_EventList"></a>
<a id="tocSeventlist"></a>
<a id="tocseventlist"></a>

```json
[
  {
    "EventId": {},
    "ResourceId": {},
    "EventCode": {},
    "Message": {},
    "EventTime": {},
    "PreSignedLogUrl": {}
  }
]
```

<h2 id="tocS_LocationAttributesList">LocationAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemalocationattributeslist"></a>
<a id="schema_LocationAttributesList"></a>
<a id="tocSlocationattributeslist"></a>
<a id="tocslocationattributeslist"></a>

```json
[
  {
    "LocationState": {
      "Location": {},
      "Status": {}
    },
    "StoppedActions": {},
    "UpdateStatus": {}
  }
]
```

<h2 id="tocS_FleetCapacity">FleetCapacity</h2>
<!-- backwards compatibility -->
<a id="schemafleetcapacity"></a>
<a id="schema_FleetCapacity"></a>
<a id="tocSfleetcapacity"></a>
<a id="tocsfleetcapacity"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "InstanceType": {},
  "InstanceCounts": {
    "DESIRED": {},
    "MINIMUM": {},
    "MAXIMUM": {},
    "PENDING": {},
    "ACTIVE": {},
    "IDLE": {},
    "TERMINATING": {}
  },
  "Location": {}
}
```

<p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|InstanceType|object|false|none|none|
|InstanceCounts|[EC2InstanceCounts](#schemaec2instancecounts)|false|none|Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.|
|Location|object|false|none|none|

<h2 id="tocS_FleetUtilization">FleetUtilization</h2>
<!-- backwards compatibility -->
<a id="schemafleetutilization"></a>
<a id="schema_FleetUtilization"></a>
<a id="tocSfleetutilization"></a>
<a id="tocsfleetutilization"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "ActiveServerProcessCount": {},
  "ActiveGameSessionCount": {},
  "CurrentPlayerSessionCount": {},
  "MaximumPlayerSessionCount": {},
  "Location": {}
}
```

<p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|ActiveServerProcessCount|object|false|none|none|
|ActiveGameSessionCount|object|false|none|none|
|CurrentPlayerSessionCount|object|false|none|none|
|MaximumPlayerSessionCount|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_LocationUpdateStatus">LocationUpdateStatus</h2>
<!-- backwards compatibility -->
<a id="schemalocationupdatestatus"></a>
<a id="schema_LocationUpdateStatus"></a>
<a id="tocSlocationupdatestatus"></a>
<a id="tocslocationupdatestatus"></a>

```json
"PENDING_UPDATE"
```

<h2 id="tocS_FleetUtilizationList">FleetUtilizationList</h2>
<!-- backwards compatibility -->
<a id="schemafleetutilizationlist"></a>
<a id="schema_FleetUtilizationList"></a>
<a id="tocSfleetutilizationlist"></a>
<a id="tocsfleetutilizationlist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "ActiveServerProcessCount": {},
    "ActiveGameSessionCount": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Location": {}
  }
]
```

<h2 id="tocS_GameServerInstanceIds">GameServerInstanceIds</h2>
<!-- backwards compatibility -->
<a id="schemagameserverinstanceids"></a>
<a id="schema_GameServerInstanceIds"></a>
<a id="tocSgameserverinstanceids"></a>
<a id="tocsgameserverinstanceids"></a>

```json
[
  "stringstringstrings"
]
```

<h2 id="tocS_GameServerInstances">GameServerInstances</h2>
<!-- backwards compatibility -->
<a id="schemagameserverinstances"></a>
<a id="schema_GameServerInstances"></a>
<a id="tocSgameserverinstances"></a>
<a id="tocsgameserverinstances"></a>

```json
[
  {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "InstanceId": {},
    "InstanceStatus": {}
  }
]
```

<h2 id="tocS_GameSessionDetailList">GameSessionDetailList</h2>
<!-- backwards compatibility -->
<a id="schemagamesessiondetaillist"></a>
<a id="schema_GameSessionDetailList"></a>
<a id="tocSgamesessiondetaillist"></a>
<a id="tocsgamesessiondetaillist"></a>

```json
[
  {
    "GameSession": {
      "GameSessionId": {},
      "Name": {},
      "FleetId": {},
      "FleetArn": {},
      "CreationTime": {},
      "TerminationTime": {},
      "CurrentPlayerSessionCount": {},
      "MaximumPlayerSessionCount": {},
      "Status": {},
      "StatusReason": {},
      "GameProperties": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "PlayerSessionCreationPolicy": {},
      "CreatorId": {},
      "GameSessionData": {},
      "MatchmakerData": {},
      "Location": {}
    },
    "ProtectionPolicy": {}
  }
]
```

<h2 id="tocS_GameSessionPlacement">GameSessionPlacement</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionplacement"></a>
<a id="schema_GameSessionPlacement"></a>
<a id="tocSgamesessionplacement"></a>
<a id="tocsgamesessionplacement"></a>

```json
{
  "PlacementId": {},
  "GameSessionQueueName": {},
  "Status": {},
  "GameProperties": {},
  "MaximumPlayerSessionCount": {},
  "GameSessionName": {},
  "GameSessionId": {},
  "GameSessionArn": {},
  "GameSessionRegion": {},
  "PlayerLatencies": {},
  "StartTime": {},
  "EndTime": {},
  "IpAddress": {},
  "DnsName": {},
  "Port": {},
  "PlacedPlayerSessions": {},
  "GameSessionData": {},
  "MatchmakerData": {}
}
```

This object includes the full details of the original request plus the current status and start/end time stamps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlacementId|object|false|none|none|
|GameSessionQueueName|object|false|none|none|
|Status|object|false|none|none|
|GameProperties|object|false|none|none|
|MaximumPlayerSessionCount|object|false|none|none|
|GameSessionName|object|false|none|none|
|GameSessionId|object|false|none|none|
|GameSessionArn|object|false|none|none|
|GameSessionRegion|object|false|none|none|
|PlayerLatencies|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|Port|object|false|none|none|
|PlacedPlayerSessions|object|false|none|none|
|GameSessionData|object|false|none|none|
|MatchmakerData|object|false|none|none|

<h2 id="tocS_GameSessionQueueNameOrArnList">GameSessionQueueNameOrArnList</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuenameorarnlist"></a>
<a id="schema_GameSessionQueueNameOrArnList"></a>
<a id="tocSgamesessionqueuenameorarnlist"></a>
<a id="tocsgamesessionqueuenameorarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GameSessionQueueList">GameSessionQueueList</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuelist"></a>
<a id="schema_GameSessionQueueList"></a>
<a id="tocSgamesessionqueuelist"></a>
<a id="tocsgamesessionqueuelist"></a>

```json
[
  {
    "Name": {},
    "GameSessionQueueArn": {},
    "TimeoutInSeconds": {},
    "PlayerLatencyPolicies": {},
    "Destinations": {},
    "FilterConfiguration": {
      "AllowedLocations": {}
    },
    "PriorityConfiguration": {
      "PriorityOrder": {},
      "LocationOrder": {}
    },
    "CustomEventData": {},
    "NotificationTarget": {}
  }
]
```

<h2 id="tocS_GameSessionList">GameSessionList</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionlist"></a>
<a id="schema_GameSessionList"></a>
<a id="tocSgamesessionlist"></a>
<a id="tocsgamesessionlist"></a>

```json
[
  {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
  }
]
```

<h2 id="tocS_InstanceId">InstanceId</h2>
<!-- backwards compatibility -->
<a id="schemainstanceid"></a>
<a id="schema_InstanceId"></a>
<a id="tocSinstanceid"></a>
<a id="tocsinstanceid"></a>

```json
"string"
```

<h2 id="tocS_InstanceList">InstanceList</h2>
<!-- backwards compatibility -->
<a id="schemainstancelist"></a>
<a id="schema_InstanceList"></a>
<a id="tocSinstancelist"></a>
<a id="tocsinstancelist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "InstanceId": {},
    "IpAddress": {},
    "DnsName": {},
    "OperatingSystem": {},
    "Type": {},
    "Status": {},
    "CreationTime": {},
    "Location": {}
  }
]
```

<h2 id="tocS_MatchmakingConfigurationNameList">MatchmakingConfigurationNameList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfigurationnamelist"></a>
<a id="schema_MatchmakingConfigurationNameList"></a>
<a id="tocSmatchmakingconfigurationnamelist"></a>
<a id="tocsmatchmakingconfigurationnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchmakingConfigurationList">MatchmakingConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfigurationlist"></a>
<a id="schema_MatchmakingConfigurationList"></a>
<a id="tocSmatchmakingconfigurationlist"></a>
<a id="tocsmatchmakingconfigurationlist"></a>

```json
[
  {
    "Name": {},
    "ConfigurationArn": {},
    "Description": {},
    "GameSessionQueueArns": {},
    "RequestTimeoutSeconds": {},
    "AcceptanceTimeoutSeconds": {},
    "AcceptanceRequired": {},
    "RuleSetName": {},
    "RuleSetArn": {},
    "NotificationTarget": {},
    "AdditionalPlayerCount": {},
    "CustomEventData": {},
    "CreationTime": {},
    "GameProperties": {},
    "GameSessionData": {},
    "BackfillMode": {},
    "FlexMatchMode": {}
  }
]
```

<h2 id="tocS_MatchmakingIdList">MatchmakingIdList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingidlist"></a>
<a id="schema_MatchmakingIdList"></a>
<a id="tocSmatchmakingidlist"></a>
<a id="tocsmatchmakingidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MatchmakingTicketList">MatchmakingTicketList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingticketlist"></a>
<a id="schema_MatchmakingTicketList"></a>
<a id="tocSmatchmakingticketlist"></a>
<a id="tocsmatchmakingticketlist"></a>

```json
[
  {
    "TicketId": {},
    "ConfigurationName": {},
    "ConfigurationArn": {},
    "Status": {},
    "StatusReason": {},
    "StatusMessage": {},
    "StartTime": {},
    "EndTime": {},
    "Players": {},
    "GameSessionConnectionInfo": {
      "GameSessionArn": {},
      "IpAddress": {},
      "DnsName": {},
      "Port": {},
      "MatchedPlayerSessions": {}
    },
    "EstimatedWaitTime": {}
  }
]
```

<h2 id="tocS_MatchmakingRuleSetNameList">MatchmakingRuleSetNameList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingrulesetnamelist"></a>
<a id="schema_MatchmakingRuleSetNameList"></a>
<a id="tocSmatchmakingrulesetnamelist"></a>
<a id="tocsmatchmakingrulesetnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RuleSetLimit">RuleSetLimit</h2>
<!-- backwards compatibility -->
<a id="schemarulesetlimit"></a>
<a id="schema_RuleSetLimit"></a>
<a id="tocSrulesetlimit"></a>
<a id="tocsrulesetlimit"></a>

```json
1
```

<h2 id="tocS_MatchmakingRuleSetList">MatchmakingRuleSetList</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingrulesetlist"></a>
<a id="schema_MatchmakingRuleSetList"></a>
<a id="tocSmatchmakingrulesetlist"></a>
<a id="tocsmatchmakingrulesetlist"></a>

```json
[
  {
    "RuleSetName": {},
    "RuleSetArn": {},
    "RuleSetBody": {},
    "CreationTime": {}
  }
]
```

<h2 id="tocS_PlayerSessionId">PlayerSessionId</h2>
<!-- backwards compatibility -->
<a id="schemaplayersessionid"></a>
<a id="schema_PlayerSessionId"></a>
<a id="tocSplayersessionid"></a>
<a id="tocsplayersessionid"></a>

```json
"string"
```

<h2 id="tocS_ScalingStatusType">ScalingStatusType</h2>
<!-- backwards compatibility -->
<a id="schemascalingstatustype"></a>
<a id="schema_ScalingStatusType"></a>
<a id="tocSscalingstatustype"></a>
<a id="tocsscalingstatustype"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ScalingPolicyList">ScalingPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicylist"></a>
<a id="schema_ScalingPolicyList"></a>
<a id="tocSscalingpolicylist"></a>
<a id="tocsscalingpolicylist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "Name": {},
    "Status": {},
    "ScalingAdjustment": {},
    "ScalingAdjustmentType": {},
    "ComparisonOperator": {},
    "Threshold": {},
    "EvaluationPeriods": {},
    "MetricName": {},
    "PolicyType": {},
    "TargetConfiguration": {
      "TargetValue": {}
    },
    "UpdateStatus": {},
    "Location": {}
  }
]
```

<h2 id="tocS_VpcPeeringAuthorizationList">VpcPeeringAuthorizationList</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringauthorizationlist"></a>
<a id="schema_VpcPeeringAuthorizationList"></a>
<a id="tocSvpcpeeringauthorizationlist"></a>
<a id="tocsvpcpeeringauthorizationlist"></a>

```json
[
  {
    "GameLiftAwsAccountId": {},
    "PeerVpcAwsAccountId": {},
    "PeerVpcId": {},
    "CreationTime": {},
    "ExpirationTime": {}
  }
]
```

<h2 id="tocS_VpcPeeringConnectionList">VpcPeeringConnectionList</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringconnectionlist"></a>
<a id="schema_VpcPeeringConnectionList"></a>
<a id="tocSvpcpeeringconnectionlist"></a>
<a id="tocsvpcpeeringconnectionlist"></a>

```json
[
  {
    "FleetId": {},
    "FleetArn": {},
    "IpV4CidrBlock": {},
    "VpcPeeringConnectionId": {},
    "Status": {
      "Code": {},
      "Message": {}
    },
    "PeerVpcId": {},
    "GameLiftVpcId": {}
  }
]
```

<h2 id="tocS_DesiredPlayerSession">DesiredPlayerSession</h2>
<!-- backwards compatibility -->
<a id="schemadesiredplayersession"></a>
<a id="schema_DesiredPlayerSession"></a>
<a id="tocSdesiredplayersession"></a>
<a id="tocsdesiredplayersession"></a>

```json
{
  "PlayerId": {},
  "PlayerData": {}
}
```

Player information for use when creating player sessions using a game session placement request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerId|object|false|none|none|
|PlayerData|object|false|none|none|

<h2 id="tocS_DesiredPlayerSessionList">DesiredPlayerSessionList</h2>
<!-- backwards compatibility -->
<a id="schemadesiredplayersessionlist"></a>
<a id="schema_DesiredPlayerSessionList"></a>
<a id="tocSdesiredplayersessionlist"></a>
<a id="tocsdesiredplayersessionlist"></a>

```json
[
  {
    "PlayerId": {},
    "PlayerData": {}
  }
]
```

<h2 id="tocS_DnsNameInput">DnsNameInput</h2>
<!-- backwards compatibility -->
<a id="schemadnsnameinput"></a>
<a id="schema_DnsNameInput"></a>
<a id="tocSdnsnameinput"></a>
<a id="tocsdnsnameinput"></a>

```json
"string"
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_EC2InstanceCounts">EC2InstanceCounts</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancecounts"></a>
<a id="schema_EC2InstanceCounts"></a>
<a id="tocSec2instancecounts"></a>
<a id="tocsec2instancecounts"></a>

```json
{
  "DESIRED": {},
  "MINIMUM": {},
  "MAXIMUM": {},
  "PENDING": {},
  "ACTIVE": {},
  "IDLE": {},
  "TERMINATING": {}
}
```

Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DESIRED|object|false|none|none|
|MINIMUM|object|false|none|none|
|MAXIMUM|object|false|none|none|
|PENDING|object|false|none|none|
|ACTIVE|object|false|none|none|
|IDLE|object|false|none|none|
|TERMINATING|object|false|none|none|

<h2 id="tocS_EC2InstanceLimit">EC2InstanceLimit</h2>
<!-- backwards compatibility -->
<a id="schemaec2instancelimit"></a>
<a id="schema_EC2InstanceLimit"></a>
<a id="tocSec2instancelimit"></a>
<a id="tocsec2instancelimit"></a>

```json
{
  "EC2InstanceType": {},
  "CurrentInstances": {},
  "InstanceLimit": {},
  "Location": {}
}
```

The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with Amazon GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EC2InstanceType|object|false|none|none|
|CurrentInstances|object|false|none|none|
|InstanceLimit|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_EventCode">EventCode</h2>
<!-- backwards compatibility -->
<a id="schemaeventcode"></a>
<a id="schema_EventCode"></a>
<a id="tocSeventcode"></a>
<a id="tocseventcode"></a>

```json
"GENERIC_EVENT"
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "EventId": {},
  "ResourceId": {},
  "EventCode": {},
  "Message": {},
  "EventTime": {},
  "PreSignedLogUrl": {}
}
```

Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EventId|object|false|none|none|
|ResourceId|object|false|none|none|
|EventCode|object|false|none|none|
|Message|object|false|none|none|
|EventTime|object|false|none|none|
|PreSignedLogUrl|object|false|none|none|

<h2 id="tocS_FleetAction">FleetAction</h2>
<!-- backwards compatibility -->
<a id="schemafleetaction"></a>
<a id="schema_FleetAction"></a>
<a id="tocSfleetaction"></a>
<a id="tocsfleetaction"></a>

```json
"AUTO_SCALING"
```

<h2 id="tocS_FleetActionList">FleetActionList</h2>
<!-- backwards compatibility -->
<a id="schemafleetactionlist"></a>
<a id="schema_FleetActionList"></a>
<a id="tocSfleetactionlist"></a>
<a id="tocsfleetactionlist"></a>

```json
[
  "AUTO_SCALING"
]
```

<h2 id="tocS_FleetStatus">FleetStatus</h2>
<!-- backwards compatibility -->
<a id="schemafleetstatus"></a>
<a id="schema_FleetStatus"></a>
<a id="tocSfleetstatus"></a>
<a id="tocsfleetstatus"></a>

```json
"NEW"
```

<h2 id="tocS_ScriptId">ScriptId</h2>
<!-- backwards compatibility -->
<a id="schemascriptid"></a>
<a id="schema_ScriptId"></a>
<a id="tocSscriptid"></a>
<a id="tocsscriptid"></a>

```json
"string"
```

<h2 id="tocS_ScriptArn">ScriptArn</h2>
<!-- backwards compatibility -->
<a id="schemascriptarn"></a>
<a id="schema_ScriptArn"></a>
<a id="tocSscriptarn"></a>
<a id="tocsscriptarn"></a>

```json
"string"
```

<h2 id="tocS_FleetIdList">FleetIdList</h2>
<!-- backwards compatibility -->
<a id="schemafleetidlist"></a>
<a id="schema_FleetIdList"></a>
<a id="tocSfleetidlist"></a>
<a id="tocsfleetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Float">Float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_Float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_GamePropertyKey">GamePropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemagamepropertykey"></a>
<a id="schema_GamePropertyKey"></a>
<a id="tocSgamepropertykey"></a>
<a id="tocsgamepropertykey"></a>

```json
"string"
```

<h2 id="tocS_GamePropertyValue">GamePropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemagamepropertyvalue"></a>
<a id="schema_GamePropertyValue"></a>
<a id="tocSgamepropertyvalue"></a>
<a id="tocsgamepropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_GameProperty">GameProperty</h2>
<!-- backwards compatibility -->
<a id="schemagameproperty"></a>
<a id="schema_GameProperty"></a>
<a id="tocSgameproperty"></a>
<a id="tocsgameproperty"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_GameServerGroupArn">GameServerGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemagameservergrouparn"></a>
<a id="schema_GameServerGroupArn"></a>
<a id="tocSgameservergrouparn"></a>
<a id="tocsgameservergrouparn"></a>

```json
"string"
```

<h2 id="tocS_GameServerInstanceId">GameServerInstanceId</h2>
<!-- backwards compatibility -->
<a id="schemagameserverinstanceid"></a>
<a id="schema_GameServerInstanceId"></a>
<a id="tocSgameserverinstanceid"></a>
<a id="tocsgameserverinstanceid"></a>

```json
"stringstringstrings"
```

<h2 id="tocS_GameServerConnectionInfo">GameServerConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagameserverconnectioninfo"></a>
<a id="schema_GameServerConnectionInfo"></a>
<a id="tocSgameserverconnectioninfo"></a>
<a id="tocsgameserverconnectioninfo"></a>

```json
"string"
```

<h2 id="tocS_GameServerClaimStatus">GameServerClaimStatus</h2>
<!-- backwards compatibility -->
<a id="schemagameserverclaimstatus"></a>
<a id="schema_GameServerClaimStatus"></a>
<a id="tocSgameserverclaimstatus"></a>
<a id="tocsgameserverclaimstatus"></a>

```json
"CLAIMED"
```

<h2 id="tocS_GameServerUtilizationStatus">GameServerUtilizationStatus</h2>
<!-- backwards compatibility -->
<a id="schemagameserverutilizationstatus"></a>
<a id="schema_GameServerUtilizationStatus"></a>
<a id="tocSgameserverutilizationstatus"></a>
<a id="tocsgameserverutilizationstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_GameServerGroupStatus">GameServerGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupstatus"></a>
<a id="schema_GameServerGroupStatus"></a>
<a id="tocSgameservergroupstatus"></a>
<a id="tocsgameservergroupstatus"></a>

```json
"NEW"
```

<h2 id="tocS_GameServerGroupActions">GameServerGroupActions</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupactions"></a>
<a id="schema_GameServerGroupActions"></a>
<a id="tocSgameservergroupactions"></a>
<a id="tocsgameservergroupactions"></a>

```json
[
  "REPLACE_INSTANCE_TYPES"
]
```

<h2 id="tocS_GameServerGroupAction">GameServerGroupAction</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupaction"></a>
<a id="schema_GameServerGroupAction"></a>
<a id="tocSgameservergroupaction"></a>
<a id="tocsgameservergroupaction"></a>

```json
"REPLACE_INSTANCE_TYPES"
```

<h2 id="tocS_TargetTrackingConfiguration">TargetTrackingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargettrackingconfiguration"></a>
<a id="schema_TargetTrackingConfiguration"></a>
<a id="tocStargettrackingconfiguration"></a>
<a id="tocstargettrackingconfiguration"></a>

```json
{
  "TargetValue": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetValue|object|true|none|none|

<h2 id="tocS_GameServerGroupInstanceType">GameServerGroupInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroupinstancetype"></a>
<a id="schema_GameServerGroupInstanceType"></a>
<a id="tocSgameservergroupinstancetype"></a>
<a id="tocsgameservergroupinstancetype"></a>

```json
"c4.large"
```

<h2 id="tocS_GameServerGroups">GameServerGroups</h2>
<!-- backwards compatibility -->
<a id="schemagameservergroups"></a>
<a id="schema_GameServerGroups"></a>
<a id="tocSgameservergroups"></a>
<a id="tocsgameservergroups"></a>

```json
[
  {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "RoleArn": {},
    "InstanceDefinitions": {},
    "BalancingStrategy": {},
    "GameServerProtectionPolicy": {},
    "AutoScalingGroupArn": {},
    "Status": {},
    "StatusReason": {},
    "SuspendedActions": {},
    "CreationTime": {},
    "LastUpdatedTime": {}
  }
]
```

<h2 id="tocS_GameServerHealthCheck">GameServerHealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemagameserverhealthcheck"></a>
<a id="schema_GameServerHealthCheck"></a>
<a id="tocSgameserverhealthcheck"></a>
<a id="tocsgameserverhealthcheck"></a>

```json
"HEALTHY"
```

<h2 id="tocS_GameServerInstanceStatus">GameServerInstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemagameserverinstancestatus"></a>
<a id="schema_GameServerInstanceStatus"></a>
<a id="tocSgameserverinstancestatus"></a>
<a id="tocsgameserverinstancestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_GameServerInstance">GameServerInstance</h2>
<!-- backwards compatibility -->
<a id="schemagameserverinstance"></a>
<a id="schema_GameServerInstance"></a>
<a id="tocSgameserverinstance"></a>
<a id="tocsgameserverinstance"></a>

```json
{
  "GameServerGroupName": {},
  "GameServerGroupArn": {},
  "InstanceId": {},
  "InstanceStatus": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameServerGroupName|object|false|none|none|
|GameServerGroupArn|object|false|none|none|
|InstanceId|object|false|none|none|
|InstanceStatus|object|false|none|none|

<h2 id="tocS_GameServers">GameServers</h2>
<!-- backwards compatibility -->
<a id="schemagameservers"></a>
<a id="schema_GameServers"></a>
<a id="tocSgameservers"></a>
<a id="tocsgameservers"></a>

```json
[
  {
    "GameServerGroupName": {},
    "GameServerGroupArn": {},
    "GameServerId": {},
    "InstanceId": {},
    "ConnectionInfo": {},
    "GameServerData": {},
    "ClaimStatus": {},
    "UtilizationStatus": {},
    "RegistrationTime": {},
    "LastClaimTime": {},
    "LastHealthCheckTime": {}
  }
]
```

<h2 id="tocS_GameSessionStatus">GameSessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionstatus"></a>
<a id="schema_GameSessionStatus"></a>
<a id="tocSgamesessionstatus"></a>
<a id="tocsgamesessionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_GameSessionStatusReason">GameSessionStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionstatusreason"></a>
<a id="schema_GameSessionStatusReason"></a>
<a id="tocSgamesessionstatusreason"></a>
<a id="tocsgamesessionstatusreason"></a>

```json
"INTERRUPTED"
```

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
1
```

<h2 id="tocS_PlayerSessionCreationPolicy">PlayerSessionCreationPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaplayersessioncreationpolicy"></a>
<a id="schema_PlayerSessionCreationPolicy"></a>
<a id="tocSplayersessioncreationpolicy"></a>
<a id="tocsplayersessioncreationpolicy"></a>

```json
"ACCEPT_ALL"
```

<h2 id="tocS_MatchmakerData">MatchmakerData</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakerdata"></a>
<a id="schema_MatchmakerData"></a>
<a id="tocSmatchmakerdata"></a>
<a id="tocsmatchmakerdata"></a>

```json
"string"
```

<h2 id="tocS_GameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionactivationtimeoutseconds"></a>
<a id="schema_GameSessionActivationTimeoutSeconds"></a>
<a id="tocSgamesessionactivationtimeoutseconds"></a>
<a id="tocsgamesessionactivationtimeoutseconds"></a>

```json
1
```

<h2 id="tocS_MatchedPlayerSessionList">MatchedPlayerSessionList</h2>
<!-- backwards compatibility -->
<a id="schemamatchedplayersessionlist"></a>
<a id="schema_MatchedPlayerSessionList"></a>
<a id="tocSmatchedplayersessionlist"></a>
<a id="tocsmatchedplayersessionlist"></a>

```json
[
  {
    "PlayerId": {},
    "PlayerSessionId": {}
  }
]
```

<h2 id="tocS_GameSessionConnectionInfo">GameSessionConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionconnectioninfo"></a>
<a id="schema_GameSessionConnectionInfo"></a>
<a id="tocSgamesessionconnectioninfo"></a>
<a id="tocsgamesessionconnectioninfo"></a>

```json
{
  "GameSessionArn": {},
  "IpAddress": {},
  "DnsName": {},
  "Port": {},
  "MatchedPlayerSessions": {}
}
```

Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSessionArn|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|Port|object|false|none|none|
|MatchedPlayerSessions|object|false|none|none|

<h2 id="tocS_GameSessionDetail">GameSessionDetail</h2>
<!-- backwards compatibility -->
<a id="schemagamesessiondetail"></a>
<a id="schema_GameSessionDetail"></a>
<a id="tocSgamesessiondetail"></a>
<a id="tocsgamesessiondetail"></a>

```json
{
  "GameSession": {
    "GameSessionId": {},
    "Name": {},
    "FleetId": {},
    "FleetArn": {},
    "CreationTime": {},
    "TerminationTime": {},
    "CurrentPlayerSessionCount": {},
    "MaximumPlayerSessionCount": {},
    "Status": {},
    "StatusReason": {},
    "GameProperties": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "PlayerSessionCreationPolicy": {},
    "CreatorId": {},
    "GameSessionData": {},
    "MatchmakerData": {},
    "Location": {}
  },
  "ProtectionPolicy": {}
}
```

A game session's properties plus the protection policy currently in force.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameSession|object|false|none|none|
|ProtectionPolicy|object|false|none|none|

<h2 id="tocS_GameSessionPlacementState">GameSessionPlacementState</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionplacementstate"></a>
<a id="schema_GameSessionPlacementState"></a>
<a id="tocSgamesessionplacementstate"></a>
<a id="tocsgamesessionplacementstate"></a>

```json
"PENDING"
```

<h2 id="tocS_PlayerLatencyList">PlayerLatencyList</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlatencylist"></a>
<a id="schema_PlayerLatencyList"></a>
<a id="tocSplayerlatencylist"></a>
<a id="tocsplayerlatencylist"></a>

```json
[
  {
    "PlayerId": {},
    "RegionIdentifier": {},
    "LatencyInMilliseconds": {}
  }
]
```

<h2 id="tocS_PlacedPlayerSessionList">PlacedPlayerSessionList</h2>
<!-- backwards compatibility -->
<a id="schemaplacedplayersessionlist"></a>
<a id="schema_PlacedPlayerSessionList"></a>
<a id="tocSplacedplayersessionlist"></a>
<a id="tocsplacedplayersessionlist"></a>

```json
[
  {
    "PlayerId": {},
    "PlayerSessionId": {}
  }
]
```

<h2 id="tocS_GameSessionQueueArn">GameSessionQueueArn</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuearn"></a>
<a id="schema_GameSessionQueueArn"></a>
<a id="tocSgamesessionqueuearn"></a>
<a id="tocsgamesessionqueuearn"></a>

```json
"string"
```

<h2 id="tocS_GameSessionQueueDestination">GameSessionQueueDestination</h2>
<!-- backwards compatibility -->
<a id="schemagamesessionqueuedestination"></a>
<a id="schema_GameSessionQueueDestination"></a>
<a id="tocSgamesessionqueuedestination"></a>
<a id="tocsgamesessionqueuedestination"></a>

```json
{
  "DestinationArn": {}
}
```

A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationArn|object|false|none|none|

<h2 id="tocS_InstanceAccess">InstanceAccess</h2>
<!-- backwards compatibility -->
<a id="schemainstanceaccess"></a>
<a id="schema_InstanceAccess"></a>
<a id="tocSinstanceaccess"></a>
<a id="tocsinstanceaccess"></a>

```json
{
  "FleetId": {},
  "InstanceId": {},
  "IpAddress": {},
  "OperatingSystem": {},
  "Credentials": {
    "UserName": {},
    "Secret": {}
  }
}
```

Information required to remotely connect to a fleet instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|InstanceId|object|false|none|none|
|IpAddress|object|false|none|none|
|OperatingSystem|object|false|none|none|
|Credentials|object|false|none|none|

<h2 id="tocS_InstanceStatus">InstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemainstancestatus"></a>
<a id="schema_InstanceStatus"></a>
<a id="tocSinstancestatus"></a>
<a id="tocsinstancestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "InstanceId": {},
  "IpAddress": {},
  "DnsName": {},
  "OperatingSystem": {},
  "Type": {},
  "Status": {},
  "CreationTime": {},
  "Location": {}
}
```

<p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In Amazon GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|InstanceId|object|false|none|none|
|IpAddress|object|false|none|none|
|DnsName|object|false|none|none|
|OperatingSystem|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_InstanceCredentials">InstanceCredentials</h2>
<!-- backwards compatibility -->
<a id="schemainstancecredentials"></a>
<a id="schema_InstanceCredentials"></a>
<a id="tocSinstancecredentials"></a>
<a id="tocsinstancecredentials"></a>

```json
{
  "UserName": {},
  "Secret": {}
}
```

Set of credentials required to remotely access a fleet instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserName|object|false|none|none|
|Secret|object|false|none|none|

<h2 id="tocS_WeightedCapacity">WeightedCapacity</h2>
<!-- backwards compatibility -->
<a id="schemaweightedcapacity"></a>
<a id="schema_WeightedCapacity"></a>
<a id="tocSweightedcapacity"></a>
<a id="tocsweightedcapacity"></a>

```json
"str"
```

<h2 id="tocS_InstanceDefinition">InstanceDefinition</h2>
<!-- backwards compatibility -->
<a id="schemainstancedefinition"></a>
<a id="schema_InstanceDefinition"></a>
<a id="tocSinstancedefinition"></a>
<a id="tocsinstancedefinition"></a>

```json
{
  "InstanceType": {},
  "WeightedCapacity": {}
}
```

<p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a game server group. All game server groups must have at least two instance types defined for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|true|none|none|
|WeightedCapacity|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_NonBlankString">NonBlankString</h2>
<!-- backwards compatibility -->
<a id="schemanonblankstring"></a>
<a id="schema_NonBlankString"></a>
<a id="tocSnonblankstring"></a>
<a id="tocsnonblankstring"></a>

```json
"string"
```

<h2 id="tocS_IpProtocol">IpProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaipprotocol"></a>
<a id="schema_IpProtocol"></a>
<a id="tocSipprotocol"></a>
<a id="tocsipprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_IpPermission">IpPermission</h2>
<!-- backwards compatibility -->
<a id="schemaippermission"></a>
<a id="schema_IpPermission"></a>
<a id="tocSippermission"></a>
<a id="tocsippermission"></a>

```json
{
  "FromPort": {},
  "ToPort": {},
  "IpRange": {},
  "Protocol": {}
}
```

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FromPort|object|true|none|none|
|ToPort|object|true|none|none|
|IpRange|object|true|none|none|
|Protocol|object|true|none|none|

<h2 id="tocS_LatencyMap">LatencyMap</h2>
<!-- backwards compatibility -->
<a id="schemalatencymap"></a>
<a id="schema_LatencyMap"></a>
<a id="tocSlatencymap"></a>
<a id="tocslatencymap"></a>

```json
{
  "property1": 1,
  "property2": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PositiveInteger](#schemapositiveinteger)|false|none|none|

<h2 id="tocS_LaunchTemplateId">LaunchTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateid"></a>
<a id="schema_LaunchTemplateId"></a>
<a id="tocSlaunchtemplateid"></a>
<a id="tocslaunchtemplateid"></a>

```json
"string"
```

<h2 id="tocS_LaunchTemplateName">LaunchTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplatename"></a>
<a id="schema_LaunchTemplateName"></a>
<a id="tocSlaunchtemplatename"></a>
<a id="tocslaunchtemplatename"></a>

```json
"string"
```

<h2 id="tocS_LaunchTemplateVersion">LaunchTemplateVersion</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateversion"></a>
<a id="schema_LaunchTemplateVersion"></a>
<a id="tocSlaunchtemplateversion"></a>
<a id="tocslaunchtemplateversion"></a>

```json
"string"
```

<h2 id="tocS_RoutingStrategyType">RoutingStrategyType</h2>
<!-- backwards compatibility -->
<a id="schemaroutingstrategytype"></a>
<a id="schema_RoutingStrategyType"></a>
<a id="tocSroutingstrategytype"></a>
<a id="tocsroutingstrategytype"></a>

```json
"SIMPLE"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_LocationFilterList">LocationFilterList</h2>
<!-- backwards compatibility -->
<a id="schemalocationfilterlist"></a>
<a id="schema_LocationFilterList"></a>
<a id="tocSlocationfilterlist"></a>
<a id="tocslocationfilterlist"></a>

```json
[
  "AWS"
]
```

<h2 id="tocS_ListLocationsLimit">ListLocationsLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationslimit"></a>
<a id="schema_ListLocationsLimit"></a>
<a id="tocSlistlocationslimit"></a>
<a id="tocslistlocationslimit"></a>

```json
1
```

<h2 id="tocS_LocationModelList">LocationModelList</h2>
<!-- backwards compatibility -->
<a id="schemalocationmodellist"></a>
<a id="schema_LocationModelList"></a>
<a id="tocSlocationmodellist"></a>
<a id="tocslocationmodellist"></a>

```json
[
  {
    "LocationName": {},
    "LocationArn": {}
  }
]
```

<h2 id="tocS_ScriptList">ScriptList</h2>
<!-- backwards compatibility -->
<a id="schemascriptlist"></a>
<a id="schema_ScriptList"></a>
<a id="tocSscriptlist"></a>
<a id="tocsscriptlist"></a>

```json
[
  {
    "ScriptId": {},
    "ScriptArn": {},
    "Name": {},
    "Version": {},
    "SizeOnDisk": {},
    "CreationTime": {},
    "StorageLocation": {
      "Bucket": {},
      "Key": {},
      "RoleArn": {},
      "ObjectVersion": {}
    }
  }
]
```

<h2 id="tocS_LocationArnModel">LocationArnModel</h2>
<!-- backwards compatibility -->
<a id="schemalocationarnmodel"></a>
<a id="schema_LocationArnModel"></a>
<a id="tocSlocationarnmodel"></a>
<a id="tocslocationarnmodel"></a>

```json
"string"
```

<h2 id="tocS_LocationState">LocationState</h2>
<!-- backwards compatibility -->
<a id="schemalocationstate"></a>
<a id="schema_LocationState"></a>
<a id="tocSlocationstate"></a>
<a id="tocslocationstate"></a>

```json
{
  "Location": {},
  "Status": {}
}
```

<p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <ul> <li> <p> <b>NEW</b> -- A new fleet location has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet location, creating new instances with the game build or Realtime script and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet location.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet location request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet location no longer exists.</p> </li> <li> <p> <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created. </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_LocationAttributes">LocationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemalocationattributes"></a>
<a id="schema_LocationAttributes"></a>
<a id="tocSlocationattributes"></a>
<a id="tocslocationattributes"></a>

```json
{
  "LocationState": {
    "Location": {},
    "Status": {}
  },
  "StoppedActions": {},
  "UpdateStatus": {}
}
```

Details about a location in a multi-location fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationState|object|false|none|none|
|StoppedActions|object|false|none|none|
|UpdateStatus|object|false|none|none|

<h2 id="tocS_LocationConfiguration">LocationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalocationconfiguration"></a>
<a id="schema_LocationConfiguration"></a>
<a id="tocSlocationconfiguration"></a>
<a id="tocslocationconfiguration"></a>

```json
{
  "Location": {}
}
```

A remote location where a multi-location fleet can deploy game servers for game hosting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Location|object|true|none|none|

<h2 id="tocS_LocationFilter">LocationFilter</h2>
<!-- backwards compatibility -->
<a id="schemalocationfilter"></a>
<a id="schema_LocationFilter"></a>
<a id="tocSlocationfilter"></a>
<a id="tocslocationfilter"></a>

```json
"AWS"
```

<h2 id="tocS_MatchedPlayerSession">MatchedPlayerSession</h2>
<!-- backwards compatibility -->
<a id="schemamatchedplayersession"></a>
<a id="schema_MatchedPlayerSession"></a>
<a id="tocSmatchedplayersession"></a>
<a id="tocsmatchedplayersession"></a>

```json
{
  "PlayerId": {},
  "PlayerSessionId": {}
}
```

<p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerId|object|false|none|none|
|PlayerSessionId|object|false|none|none|

<h2 id="tocS_MatchmakingConfigurationArn">MatchmakingConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfigurationarn"></a>
<a id="schema_MatchmakingConfigurationArn"></a>
<a id="tocSmatchmakingconfigurationarn"></a>
<a id="tocsmatchmakingconfigurationarn"></a>

```json
"string"
```

Data type used for Matchmaking Configuration ARN.

<h2 id="tocS_MatchmakingRuleSetArn">MatchmakingRuleSetArn</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingrulesetarn"></a>
<a id="schema_MatchmakingRuleSetArn"></a>
<a id="tocSmatchmakingrulesetarn"></a>
<a id="tocsmatchmakingrulesetarn"></a>

```json
"string"
```

Data type used for Matchmaking RuleSet ARN.

<h2 id="tocS_MatchmakingConfigurationStatus">MatchmakingConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingconfigurationstatus"></a>
<a id="schema_MatchmakingConfigurationStatus"></a>
<a id="tocSmatchmakingconfigurationstatus"></a>
<a id="tocsmatchmakingconfigurationstatus"></a>

```json
"CANCELLED"
```

<h2 id="tocS_StringModel">StringModel</h2>
<!-- backwards compatibility -->
<a id="schemastringmodel"></a>
<a id="schema_StringModel"></a>
<a id="tocSstringmodel"></a>
<a id="tocsstringmodel"></a>

```json
"string"
```

<h2 id="tocS_PlayerList">PlayerList</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlist"></a>
<a id="schema_PlayerList"></a>
<a id="tocSplayerlist"></a>
<a id="tocsplayerlist"></a>

```json
[
  {
    "PlayerId": {},
    "PlayerAttributes": {
      "property1": {
        "S": {},
        "N": {},
        "SL": {},
        "SDM": {
          "property1": 0,
          "property2": 0
        }
      },
      "property2": {
        "S": {},
        "N": {},
        "SL": {},
        "SDM": {
          "property1": 0,
          "property2": 0
        }
      }
    },
    "Team": {},
    "LatencyInMs": {
      "property1": 1,
      "property2": 1
    }
  }
]
```

<h2 id="tocS_MatchmakingTicket">MatchmakingTicket</h2>
<!-- backwards compatibility -->
<a id="schemamatchmakingticket"></a>
<a id="schema_MatchmakingTicket"></a>
<a id="tocSmatchmakingticket"></a>
<a id="tocsmatchmakingticket"></a>

```json
{
  "TicketId": {},
  "ConfigurationName": {},
  "ConfigurationArn": {},
  "Status": {},
  "StatusReason": {},
  "StatusMessage": {},
  "StartTime": {},
  "EndTime": {},
  "Players": {},
  "GameSessionConnectionInfo": {
    "GameSessionArn": {},
    "IpAddress": {},
    "DnsName": {},
    "Port": {},
    "MatchedPlayerSessions": {}
  },
  "EstimatedWaitTime": {}
}
```

Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TicketId|object|false|none|none|
|ConfigurationName|object|false|none|none|
|ConfigurationArn|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|StatusMessage|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|Players|object|false|none|none|
|GameSessionConnectionInfo|object|false|none|none|
|EstimatedWaitTime|object|false|none|none|

<h2 id="tocS_MaxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</h2>
<!-- backwards compatibility -->
<a id="schemamaxconcurrentgamesessionactivations"></a>
<a id="schema_MaxConcurrentGameSessionActivations"></a>
<a id="tocSmaxconcurrentgamesessionactivations"></a>
<a id="tocsmaxconcurrentgamesessionactivations"></a>

```json
1
```

<h2 id="tocS_MetricGroup">MetricGroup</h2>
<!-- backwards compatibility -->
<a id="schemametricgroup"></a>
<a id="schema_MetricGroup"></a>
<a id="tocSmetricgroup"></a>
<a id="tocsmetricgroup"></a>

```json
"string"
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"ActivatingGameSessions"
```

<h2 id="tocS_NonNegativeDouble">NonNegativeDouble</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativedouble"></a>
<a id="schema_NonNegativeDouble"></a>
<a id="tocSnonnegativedouble"></a>
<a id="tocsnonnegativedouble"></a>

```json
0
```

<h2 id="tocS_PlacedPlayerSession">PlacedPlayerSession</h2>
<!-- backwards compatibility -->
<a id="schemaplacedplayersession"></a>
<a id="schema_PlacedPlayerSession"></a>
<a id="tocSplacedplayersession"></a>
<a id="tocsplacedplayersession"></a>

```json
{
  "PlayerId": {},
  "PlayerSessionId": {}
}
```

Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerId|object|false|none|none|
|PlayerSessionId|object|false|none|none|

<h2 id="tocS_PlayerAttributeMap">PlayerAttributeMap</h2>
<!-- backwards compatibility -->
<a id="schemaplayerattributemap"></a>
<a id="schema_PlayerAttributeMap"></a>
<a id="tocSplayerattributemap"></a>
<a id="tocsplayerattributemap"></a>

```json
{
  "property1": {
    "S": {},
    "N": {},
    "SL": {},
    "SDM": {
      "property1": 0,
      "property2": 0
    }
  },
  "property2": {
    "S": {},
    "N": {},
    "SL": {},
    "SDM": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[AttributeValue](#schemaattributevalue)|false|none|Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "PlayerId": {},
  "PlayerAttributes": {
    "property1": {
      "S": {},
      "N": {},
      "SL": {},
      "SDM": {
        "property1": 0,
        "property2": 0
      }
    },
    "property2": {
      "S": {},
      "N": {},
      "SL": {},
      "SDM": {
        "property1": 0,
        "property2": 0
      }
    }
  },
  "Team": {},
  "LatencyInMs": {
    "property1": 1,
    "property2": 1
  }
}
```

Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerId|object|false|none|none|
|PlayerAttributes|object|false|none|none|
|Team|object|false|none|none|
|LatencyInMs|object|false|none|none|

<h2 id="tocS_PlayerLatency">PlayerLatency</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlatency"></a>
<a id="schema_PlayerLatency"></a>
<a id="tocSplayerlatency"></a>
<a id="tocsplayerlatency"></a>

```json
{
  "PlayerId": {},
  "RegionIdentifier": {},
  "LatencyInMilliseconds": {}
}
```

Regional latency information for a player, used when requesting a new game session. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerId|object|false|none|none|
|RegionIdentifier|object|false|none|none|
|LatencyInMilliseconds|object|false|none|none|

<h2 id="tocS_PlayerLatencyPolicy">PlayerLatencyPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlatencypolicy"></a>
<a id="schema_PlayerLatencyPolicy"></a>
<a id="tocSplayerlatencypolicy"></a>
<a id="tocsplayerlatencypolicy"></a>

```json
{
  "MaximumIndividualPlayerLatencyMilliseconds": {},
  "PolicyDurationSeconds": {}
}
```

Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaximumIndividualPlayerLatencyMilliseconds|object|false|none|none|
|PolicyDurationSeconds|object|false|none|none|

<h2 id="tocS_PlayerSessionStatus">PlayerSessionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaplayersessionstatus"></a>
<a id="schema_PlayerSessionStatus"></a>
<a id="tocSplayersessionstatus"></a>
<a id="tocsplayersessionstatus"></a>

```json
"RESERVED"
```

<h2 id="tocS_PolicyType">PolicyType</h2>
<!-- backwards compatibility -->
<a id="schemapolicytype"></a>
<a id="schema_PolicyType"></a>
<a id="tocSpolicytype"></a>
<a id="tocspolicytype"></a>

```json
"RuleBased"
```

<h2 id="tocS_PriorityTypeList">PriorityTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaprioritytypelist"></a>
<a id="schema_PriorityTypeList"></a>
<a id="tocSprioritytypelist"></a>
<a id="tocsprioritytypelist"></a>

```json
[
  "LATENCY"
]
```

<h2 id="tocS_PriorityType">PriorityType</h2>
<!-- backwards compatibility -->
<a id="schemaprioritytype"></a>
<a id="schema_PriorityType"></a>
<a id="tocSprioritytype"></a>
<a id="tocsprioritytype"></a>

```json
"LATENCY"
```

<h2 id="tocS_ScalingAdjustmentType">ScalingAdjustmentType</h2>
<!-- backwards compatibility -->
<a id="schemascalingadjustmenttype"></a>
<a id="schema_ScalingAdjustmentType"></a>
<a id="tocSscalingadjustmenttype"></a>
<a id="tocsscalingadjustmenttype"></a>

```json
"ChangeInCapacity"
```

<h2 id="tocS_TargetConfiguration">TargetConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematargetconfiguration"></a>
<a id="schema_TargetConfiguration"></a>
<a id="tocStargetconfiguration"></a>
<a id="tocstargetconfiguration"></a>

```json
{
  "TargetValue": {}
}
```

Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetValue|object|true|none|none|

<h2 id="tocS_ServerProcessList">ServerProcessList</h2>
<!-- backwards compatibility -->
<a id="schemaserverprocesslist"></a>
<a id="schema_ServerProcessList"></a>
<a id="tocSserverprocesslist"></a>
<a id="tocsserverprocesslist"></a>

```json
[
  {
    "LaunchPath": {},
    "Parameters": {},
    "ConcurrentExecutions": {}
  }
]
```

<h2 id="tocS_ScalingPolicy">ScalingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascalingpolicy"></a>
<a id="schema_ScalingPolicy"></a>
<a id="tocSscalingpolicy"></a>
<a id="tocsscalingpolicy"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "Name": {},
  "Status": {},
  "ScalingAdjustment": {},
  "ScalingAdjustmentType": {},
  "ComparisonOperator": {},
  "Threshold": {},
  "EvaluationPeriods": {},
  "MetricName": {},
  "PolicyType": {},
  "TargetConfiguration": {
    "TargetValue": {}
  },
  "UpdateStatus": {},
  "Location": {}
}
```

Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|ScalingAdjustment|object|false|none|none|
|ScalingAdjustmentType|object|false|none|none|
|ComparisonOperator|object|false|none|none|
|Threshold|object|false|none|none|
|EvaluationPeriods|object|false|none|none|
|MetricName|object|false|none|none|
|PolicyType|object|false|none|none|
|TargetConfiguration|object|false|none|none|
|UpdateStatus|object|false|none|none|
|Location|object|false|none|none|

<h2 id="tocS_ServerProcess">ServerProcess</h2>
<!-- backwards compatibility -->
<a id="schemaserverprocess"></a>
<a id="schema_ServerProcess"></a>
<a id="tocSserverprocess"></a>
<a id="tocsserverprocess"></a>

```json
{
  "LaunchPath": {},
  "Parameters": {},
  "ConcurrentExecutions": {}
}
```

A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's runtime configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchPath|object|true|none|none|
|Parameters|object|false|none|none|
|ConcurrentExecutions|object|true|none|none|

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

<p>A label that you can assign to a Amazon GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

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

<h2 id="tocS_VpcPeeringConnectionStatus">VpcPeeringConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringconnectionstatus"></a>
<a id="schema_VpcPeeringConnectionStatus"></a>
<a id="tocSvpcpeeringconnectionstatus"></a>
<a id="tocsvpcpeeringconnectionstatus"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

Represents status information for a VPC peering connection. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_VpcPeeringConnection">VpcPeeringConnection</h2>
<!-- backwards compatibility -->
<a id="schemavpcpeeringconnection"></a>
<a id="schema_VpcPeeringConnection"></a>
<a id="tocSvpcpeeringconnection"></a>
<a id="tocsvpcpeeringconnection"></a>

```json
{
  "FleetId": {},
  "FleetArn": {},
  "IpV4CidrBlock": {},
  "VpcPeeringConnectionId": {},
  "Status": {
    "Code": {},
    "Message": {}
  },
  "PeerVpcId": {},
  "GameLiftVpcId": {}
}
```

<p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetId|object|false|none|none|
|FleetArn|object|false|none|none|
|IpV4CidrBlock|object|false|none|none|
|VpcPeeringConnectionId|object|false|none|none|
|Status|object|false|none|none|
|PeerVpcId|object|false|none|none|
|GameLiftVpcId|object|false|none|none|

<h2 id="tocS_VpcSubnet">VpcSubnet</h2>
<!-- backwards compatibility -->
<a id="schemavpcsubnet"></a>
<a id="schema_VpcSubnet"></a>
<a id="tocSvpcsubnet"></a>
<a id="tocsvpcsubnet"></a>

```json
"stringstringstr"
```
