<h1 id="groups-settings-api">Groups Settings API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages permission levels and related settings of a group.

Base URLs:

* <a href="https://www.googleapis.com/groups/v1/groups">https://www.googleapis.com/groups/v1/groups</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/google-apps/groups-settings/get_started">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.groups.settings|View and manage the settings of a G Suite group|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.groups.settings|View and manage the settings of a G Suite group|

<h1 id="groups-settings-api-groups">groups</h1>

## groupsSettings.groups.get

<a id="opIdgroupsSettings.groups.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{groupUniqueId}`

Gets one resource by id.

<h3 id="groupssettingsgroupsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupUniqueId|path|string|true|The group's email address.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|atom|
|alt|json|

> Example responses

> 200 Response

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

<h3 id="groupssettingsgroupsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Groups](#schemagroups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.groups.settings ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.groups.settings )
</aside>

## groupsSettings.groups.update

<a id="opIdgroupsSettings.groups.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowExternalMembers": "string",
    "allowGoogleCommunication": "string",
    "allowWebPosting": "string",
    "archiveOnly": "string",
    "customFooterText": "string",
    "customReplyTo": "string",
    "customRolesEnabledForSettingsToBeMerged": "string",
    "defaultMessageDenyNotificationText": "string",
    "default_sender": "string",
    "description": "string",
    "email": "string",
    "enableCollaborativeInbox": "string",
    "favoriteRepliesOnTop": "string",
    "includeCustomFooter": "string",
    "includeInGlobalAddressList": "string",
    "isArchived": "string",
    "kind": "groupsSettings#groups",
    "maxMessageBytes": 0,
    "membersCanPostAsTheGroup": "string",
    "messageDisplayFont": "string",
    "messageModerationLevel": "string",
    "name": "string",
    "primaryLanguage": "string",
    "replyTo": "string",
    "sendMessageDenyNotification": "string",
    "showInGroupDirectory": "string",
    "spamModerationLevel": "string",
    "whoCanAdd": "string",
    "whoCanAddReferences": "string",
    "whoCanApproveMembers": "string",
    "whoCanApproveMessages": "string",
    "whoCanAssignTopics": "string",
    "whoCanAssistContent": "string",
    "whoCanBanUsers": "string",
    "whoCanContactOwner": "string",
    "whoCanDeleteAnyPost": "string",
    "whoCanDeleteTopics": "string",
    "whoCanDiscoverGroup": "string",
    "whoCanEnterFreeFormTags": "string",
    "whoCanHideAbuse": "string",
    "whoCanInvite": "string",
    "whoCanJoin": "string",
    "whoCanLeaveGroup": "string",
    "whoCanLockTopics": "string",
    "whoCanMakeTopicsSticky": "string",
    "whoCanMarkDuplicate": "string",
    "whoCanMarkFavoriteReplyOnAnyTopic": "string",
    "whoCanMarkFavoriteReplyOnOwnTopic": "string",
    "whoCanMarkNoResponseNeeded": "string",
    "whoCanModerateContent": "string",
    "whoCanModerateMembers": "string",
    "whoCanModifyMembers": "string",
    "whoCanModifyTagsAndCategories": "string",
    "whoCanMoveTopicsIn": "string",
    "whoCanMoveTopicsOut": "string",
    "whoCanPostAnnouncements": "string",
    "whoCanPostMessage": "string",
    "whoCanTakeTopics": "string",
    "whoCanUnassignTopic": "string",
    "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
    "whoCanViewGroup": "string",
    "whoCanViewMembership": "string"
  }'
```

`PUT /{groupUniqueId}`

Updates an existing resource.

> Body parameter

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

<h3 id="groupssettingsgroupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupUniqueId|path|string|true|The group's email address.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Groups](#schemagroups)|false|none|
|» allowExternalMembers|body|string|false|Identifies whether members external to your organization can join the group. Possible values are:  <br>- true: G Suite users external to your organization can become members of this group. <br>- false: Users not belonging to the organization are not allowed to become members of this group.|
|» allowGoogleCommunication|body|string|false|Deprecated. Allows Google to contact administrator of the group.  <br>- true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. <br>- false: Google can not contact managers of this group.|
|» allowWebPosting|body|string|false|Allows posting from web. Possible values are:  <br>- true: Allows any member to post to the group forum. <br>- false: Members only use Gmail to communicate with the group.|
|» archiveOnly|body|string|false|Allows the group to be archived only. Possible values are:  <br>- true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.  <br>- If true, the whoCanPostMessage property is set to NONE_CAN_POST.  <br>- If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- false: The group is active and can receive messages.  <br>- When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.|
|» customFooterText|body|string|false|Set the content of custom footer text. The maximum number of characters is 1,000.|
|» customReplyTo|body|string|false|An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.  <br>- When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message. <br>- If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.|
|» customRolesEnabledForSettingsToBeMerged|body|string|false|Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:  <br>- true <br>- false|
|» defaultMessageDenyNotificationText|body|string|false|When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true.|
|» default_sender|body|string|false|Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group|
|» description|body|string|false|Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters.|
|» email|body|string|false|The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.<br>When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.|
|» enableCollaborativeInbox|body|string|false|Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:  <br>- true <br>- false|
|» favoriteRepliesOnTop|body|string|false|Indicates if favorite replies should be displayed above other replies.  <br>- true: Favorite replies will be displayed above other replies. <br>- false: Favorite replies will not be displayed above other replies.|
|» includeCustomFooter|body|string|false|Whether to include custom footer. Possible values are:  <br>- true <br>- false|
|» includeInGlobalAddressList|body|string|false|Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:  <br>- true: Group is included in the Global Address List. <br>- false: Group is not included in the Global Address List.|
|» isArchived|body|string|false|Allows the Group contents to be archived. Possible values are:  <br>- true: Archive messages sent to the group. <br>- false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.|
|» kind|body|string|false|The type of the resource. It is always groupsSettings#groups.|
|» maxMessageBytes|body|integer(int32)|false|Deprecated. The maximum size of a message is 25Mb.|
|» membersCanPostAsTheGroup|body|string|false|Enables members to post messages as the group. Possible values are:  <br>- true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. <br>- false: Members can not post in behalf of the group's email address.|
|» messageDisplayFont|body|string|false|Deprecated. The default message display font always has a value of "DEFAULT_FONT".|
|» messageModerationLevel|body|string|false|Moderation level of incoming messages. Possible values are:  <br>- MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.<br>When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.|
|» name|body|string|false|Name of the group, which has a maximum size of 75 characters.|
|» primaryLanguage|body|string|false|The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags.|
|» replyTo|body|string|false|Specifies who receives the default reply. Possible values are:  <br>- REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.<br>When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.<br> <br>- REPLY_TO_SENDER: The reply sent to author of message. <br>- REPLY_TO_LIST: This reply message is sent to the group. <br>- REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers. <br>- REPLY_TO_IGNORE: Group users individually decide where the message reply is sent. <br>- REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.|
|» sendMessageDenyNotification|body|string|false|Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:  <br>- true: When a message is rejected, send the deny message notification to the message author.<br>The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.<br> <br>- false: When a message is rejected, no notification is sent.|
|» showInGroupDirectory|body|string|false|Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:  <br>- true: All groups in the account are listed in the Groups directory. <br>- false: All groups in the account are not listed in the directory.|
|» spamModerationLevel|body|string|false|Specifies moderation levels for messages detected as spam. Possible values are:  <br>- ALLOW: Post the message to the group. <br>- MODERATE: Send the message to the moderation queue. This is the default. <br>- SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators. <br>- REJECT: Immediately reject the message.|
|» whoCanAdd|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:  <br>- ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members. <br>- ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner. <br>- ALL_OWNERS_CAN_ADD: Only owners can directly add new members. <br>- NONE_CAN_ADD: No one can directly add new members.|
|» whoCanAddReferences|body|string|false|Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE".|
|» whoCanApproveMembers|body|string|false|Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS_CAN_APPROVE <br>- ALL_MANAGERS_CAN_APPROVE <br>- ALL_OWNERS_CAN_APPROVE <br>- NONE_CAN_APPROVE|
|» whoCanApproveMessages|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanAssignTopics|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanAssistContent|body|string|false|Specifies who can moderate metadata. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanBanUsers|body|string|false|Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanContactOwner|body|string|false|Permission to contact owner of the group via web UI. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_CONTACT <br>- ALL_MANAGERS_CAN_CONTACT <br>- ALL_MEMBERS_CAN_CONTACT <br>- ANYONE_CAN_CONTACT <br>- ALL_OWNERS_CAN_CONTACT|
|» whoCanDeleteAnyPost|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanDeleteTopics|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanDiscoverGroup|body|string|false|Specifies the set of users for whom this group is discoverable. Possible values are:  <br>- ANYONE_CAN_DISCOVER <br>- ALL_IN_DOMAIN_CAN_DISCOVER <br>- ALL_MEMBERS_CAN_DISCOVER|
|» whoCanEnterFreeFormTags|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanHideAbuse|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanInvite|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:  <br>- ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate. <br>- ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner. <br>- ALL_OWNERS_CAN_INVITE: Only owners can invite a new member. <br>- NONE_CAN_INVITE: No one can invite a new member candidate.|
|» whoCanJoin|body|string|false|Permission to join group. Possible values are:  <br>- ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains. <br>- ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups. <br>- INVITED_CAN_JOIN: Candidates for membership can be invited to join.  <br>- CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.|
|» whoCanLeaveGroup|body|string|false|Permission to leave the group. Possible values are:  <br>- ALL_MANAGERS_CAN_LEAVE <br>- ALL_MEMBERS_CAN_LEAVE <br>- NONE_CAN_LEAVE|
|» whoCanLockTopics|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMakeTopicsSticky|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkDuplicate|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkFavoriteReplyOnAnyTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkFavoriteReplyOnOwnTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkNoResponseNeeded|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModerateContent|body|string|false|Specifies who can moderate content. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModerateMembers|body|string|false|Specifies who can manage members. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModifyMembers|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModifyTagsAndCategories|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMoveTopicsIn|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMoveTopicsOut|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanPostAnnouncements|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanPostMessage|body|string|false|Permissions to post messages. Possible values are:  <br>- NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.  <br>- When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. <br>- If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages. <br>- ALL_MEMBERS_CAN_POST: Any group member can post a message. <br>- ALL_OWNERS_CAN_POST: Only group owners can post a message. <br>- ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.  <br>- ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.|
|» whoCanTakeTopics|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanUnassignTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanUnmarkFavoriteReplyOnAnyTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanViewGroup|body|string|false|Permissions to view group messages. Possible values are:  <br>- ANYONE_CAN_VIEW: Any Internet user can view the group's messages.  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages. <br>- ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages. <br>- ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.|
|» whoCanViewMembership|body|string|false|Permissions to view membership. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.<br>If a group already has external members, those members can still send email to this group.<br> <br>- ALL_MEMBERS_CAN_VIEW: The group members can view the group members list. <br>- ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|atom|
|alt|json|

> Example responses

> 200 Response

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

<h3 id="groupssettingsgroupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Groups](#schemagroups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.groups.settings ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.groups.settings )
</aside>

## groupsSettings.groups.patch

<a id="opIdgroupsSettings.groups.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowExternalMembers": "string",
    "allowGoogleCommunication": "string",
    "allowWebPosting": "string",
    "archiveOnly": "string",
    "customFooterText": "string",
    "customReplyTo": "string",
    "customRolesEnabledForSettingsToBeMerged": "string",
    "defaultMessageDenyNotificationText": "string",
    "default_sender": "string",
    "description": "string",
    "email": "string",
    "enableCollaborativeInbox": "string",
    "favoriteRepliesOnTop": "string",
    "includeCustomFooter": "string",
    "includeInGlobalAddressList": "string",
    "isArchived": "string",
    "kind": "groupsSettings#groups",
    "maxMessageBytes": 0,
    "membersCanPostAsTheGroup": "string",
    "messageDisplayFont": "string",
    "messageModerationLevel": "string",
    "name": "string",
    "primaryLanguage": "string",
    "replyTo": "string",
    "sendMessageDenyNotification": "string",
    "showInGroupDirectory": "string",
    "spamModerationLevel": "string",
    "whoCanAdd": "string",
    "whoCanAddReferences": "string",
    "whoCanApproveMembers": "string",
    "whoCanApproveMessages": "string",
    "whoCanAssignTopics": "string",
    "whoCanAssistContent": "string",
    "whoCanBanUsers": "string",
    "whoCanContactOwner": "string",
    "whoCanDeleteAnyPost": "string",
    "whoCanDeleteTopics": "string",
    "whoCanDiscoverGroup": "string",
    "whoCanEnterFreeFormTags": "string",
    "whoCanHideAbuse": "string",
    "whoCanInvite": "string",
    "whoCanJoin": "string",
    "whoCanLeaveGroup": "string",
    "whoCanLockTopics": "string",
    "whoCanMakeTopicsSticky": "string",
    "whoCanMarkDuplicate": "string",
    "whoCanMarkFavoriteReplyOnAnyTopic": "string",
    "whoCanMarkFavoriteReplyOnOwnTopic": "string",
    "whoCanMarkNoResponseNeeded": "string",
    "whoCanModerateContent": "string",
    "whoCanModerateMembers": "string",
    "whoCanModifyMembers": "string",
    "whoCanModifyTagsAndCategories": "string",
    "whoCanMoveTopicsIn": "string",
    "whoCanMoveTopicsOut": "string",
    "whoCanPostAnnouncements": "string",
    "whoCanPostMessage": "string",
    "whoCanTakeTopics": "string",
    "whoCanUnassignTopic": "string",
    "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
    "whoCanViewGroup": "string",
    "whoCanViewMembership": "string"
  }'
```

`PATCH /{groupUniqueId}`

Updates an existing resource. This method supports patch semantics.

> Body parameter

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

<h3 id="groupssettingsgroupspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupUniqueId|path|string|true|The group's email address.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Groups](#schemagroups)|false|none|
|» allowExternalMembers|body|string|false|Identifies whether members external to your organization can join the group. Possible values are:  <br>- true: G Suite users external to your organization can become members of this group. <br>- false: Users not belonging to the organization are not allowed to become members of this group.|
|» allowGoogleCommunication|body|string|false|Deprecated. Allows Google to contact administrator of the group.  <br>- true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. <br>- false: Google can not contact managers of this group.|
|» allowWebPosting|body|string|false|Allows posting from web. Possible values are:  <br>- true: Allows any member to post to the group forum. <br>- false: Members only use Gmail to communicate with the group.|
|» archiveOnly|body|string|false|Allows the group to be archived only. Possible values are:  <br>- true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.  <br>- If true, the whoCanPostMessage property is set to NONE_CAN_POST.  <br>- If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- false: The group is active and can receive messages.  <br>- When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.|
|» customFooterText|body|string|false|Set the content of custom footer text. The maximum number of characters is 1,000.|
|» customReplyTo|body|string|false|An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.  <br>- When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message. <br>- If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.|
|» customRolesEnabledForSettingsToBeMerged|body|string|false|Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:  <br>- true <br>- false|
|» defaultMessageDenyNotificationText|body|string|false|When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true.|
|» default_sender|body|string|false|Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group|
|» description|body|string|false|Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters.|
|» email|body|string|false|The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.<br>When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.|
|» enableCollaborativeInbox|body|string|false|Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:  <br>- true <br>- false|
|» favoriteRepliesOnTop|body|string|false|Indicates if favorite replies should be displayed above other replies.  <br>- true: Favorite replies will be displayed above other replies. <br>- false: Favorite replies will not be displayed above other replies.|
|» includeCustomFooter|body|string|false|Whether to include custom footer. Possible values are:  <br>- true <br>- false|
|» includeInGlobalAddressList|body|string|false|Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:  <br>- true: Group is included in the Global Address List. <br>- false: Group is not included in the Global Address List.|
|» isArchived|body|string|false|Allows the Group contents to be archived. Possible values are:  <br>- true: Archive messages sent to the group. <br>- false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.|
|» kind|body|string|false|The type of the resource. It is always groupsSettings#groups.|
|» maxMessageBytes|body|integer(int32)|false|Deprecated. The maximum size of a message is 25Mb.|
|» membersCanPostAsTheGroup|body|string|false|Enables members to post messages as the group. Possible values are:  <br>- true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. <br>- false: Members can not post in behalf of the group's email address.|
|» messageDisplayFont|body|string|false|Deprecated. The default message display font always has a value of "DEFAULT_FONT".|
|» messageModerationLevel|body|string|false|Moderation level of incoming messages. Possible values are:  <br>- MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.<br>When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.|
|» name|body|string|false|Name of the group, which has a maximum size of 75 characters.|
|» primaryLanguage|body|string|false|The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags.|
|» replyTo|body|string|false|Specifies who receives the default reply. Possible values are:  <br>- REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.<br>When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.<br> <br>- REPLY_TO_SENDER: The reply sent to author of message. <br>- REPLY_TO_LIST: This reply message is sent to the group. <br>- REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers. <br>- REPLY_TO_IGNORE: Group users individually decide where the message reply is sent. <br>- REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.|
|» sendMessageDenyNotification|body|string|false|Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:  <br>- true: When a message is rejected, send the deny message notification to the message author.<br>The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.<br> <br>- false: When a message is rejected, no notification is sent.|
|» showInGroupDirectory|body|string|false|Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:  <br>- true: All groups in the account are listed in the Groups directory. <br>- false: All groups in the account are not listed in the directory.|
|» spamModerationLevel|body|string|false|Specifies moderation levels for messages detected as spam. Possible values are:  <br>- ALLOW: Post the message to the group. <br>- MODERATE: Send the message to the moderation queue. This is the default. <br>- SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators. <br>- REJECT: Immediately reject the message.|
|» whoCanAdd|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:  <br>- ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members. <br>- ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner. <br>- ALL_OWNERS_CAN_ADD: Only owners can directly add new members. <br>- NONE_CAN_ADD: No one can directly add new members.|
|» whoCanAddReferences|body|string|false|Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE".|
|» whoCanApproveMembers|body|string|false|Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS_CAN_APPROVE <br>- ALL_MANAGERS_CAN_APPROVE <br>- ALL_OWNERS_CAN_APPROVE <br>- NONE_CAN_APPROVE|
|» whoCanApproveMessages|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanAssignTopics|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanAssistContent|body|string|false|Specifies who can moderate metadata. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanBanUsers|body|string|false|Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanContactOwner|body|string|false|Permission to contact owner of the group via web UI. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_CONTACT <br>- ALL_MANAGERS_CAN_CONTACT <br>- ALL_MEMBERS_CAN_CONTACT <br>- ANYONE_CAN_CONTACT <br>- ALL_OWNERS_CAN_CONTACT|
|» whoCanDeleteAnyPost|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanDeleteTopics|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanDiscoverGroup|body|string|false|Specifies the set of users for whom this group is discoverable. Possible values are:  <br>- ANYONE_CAN_DISCOVER <br>- ALL_IN_DOMAIN_CAN_DISCOVER <br>- ALL_MEMBERS_CAN_DISCOVER|
|» whoCanEnterFreeFormTags|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanHideAbuse|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanInvite|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:  <br>- ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate. <br>- ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner. <br>- ALL_OWNERS_CAN_INVITE: Only owners can invite a new member. <br>- NONE_CAN_INVITE: No one can invite a new member candidate.|
|» whoCanJoin|body|string|false|Permission to join group. Possible values are:  <br>- ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains. <br>- ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups. <br>- INVITED_CAN_JOIN: Candidates for membership can be invited to join.  <br>- CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.|
|» whoCanLeaveGroup|body|string|false|Permission to leave the group. Possible values are:  <br>- ALL_MANAGERS_CAN_LEAVE <br>- ALL_MEMBERS_CAN_LEAVE <br>- NONE_CAN_LEAVE|
|» whoCanLockTopics|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMakeTopicsSticky|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkDuplicate|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkFavoriteReplyOnAnyTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkFavoriteReplyOnOwnTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMarkNoResponseNeeded|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModerateContent|body|string|false|Specifies who can moderate content. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModerateMembers|body|string|false|Specifies who can manage members. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModifyMembers|body|string|false|Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanModifyTagsAndCategories|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMoveTopicsIn|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanMoveTopicsOut|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanPostAnnouncements|body|string|false|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|» whoCanPostMessage|body|string|false|Permissions to post messages. Possible values are:  <br>- NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.  <br>- When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. <br>- If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages. <br>- ALL_MEMBERS_CAN_POST: Any group member can post a message. <br>- ALL_OWNERS_CAN_POST: Only group owners can post a message. <br>- ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.  <br>- ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.|
|» whoCanTakeTopics|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanUnassignTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanUnmarkFavoriteReplyOnAnyTopic|body|string|false|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|» whoCanViewGroup|body|string|false|Permissions to view group messages. Possible values are:  <br>- ANYONE_CAN_VIEW: Any Internet user can view the group's messages.  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages. <br>- ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages. <br>- ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.|
|» whoCanViewMembership|body|string|false|Permissions to view membership. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.<br>If a group already has external members, those members can still send email to this group.<br> <br>- ALL_MEMBERS_CAN_VIEW: The group members can view the group members list. <br>- ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|atom|
|alt|json|

> Example responses

> 200 Response

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

<h3 id="groupssettingsgroupspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Groups](#schemagroups)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.groups.settings ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.groups.settings )
</aside>

# Schemas

<h2 id="tocS_Groups">Groups</h2>
<!-- backwards compatibility -->
<a id="schemagroups"></a>
<a id="schema_Groups"></a>
<a id="tocSgroups"></a>
<a id="tocsgroups"></a>

```json
{
  "allowExternalMembers": "string",
  "allowGoogleCommunication": "string",
  "allowWebPosting": "string",
  "archiveOnly": "string",
  "customFooterText": "string",
  "customReplyTo": "string",
  "customRolesEnabledForSettingsToBeMerged": "string",
  "defaultMessageDenyNotificationText": "string",
  "default_sender": "string",
  "description": "string",
  "email": "string",
  "enableCollaborativeInbox": "string",
  "favoriteRepliesOnTop": "string",
  "includeCustomFooter": "string",
  "includeInGlobalAddressList": "string",
  "isArchived": "string",
  "kind": "groupsSettings#groups",
  "maxMessageBytes": 0,
  "membersCanPostAsTheGroup": "string",
  "messageDisplayFont": "string",
  "messageModerationLevel": "string",
  "name": "string",
  "primaryLanguage": "string",
  "replyTo": "string",
  "sendMessageDenyNotification": "string",
  "showInGroupDirectory": "string",
  "spamModerationLevel": "string",
  "whoCanAdd": "string",
  "whoCanAddReferences": "string",
  "whoCanApproveMembers": "string",
  "whoCanApproveMessages": "string",
  "whoCanAssignTopics": "string",
  "whoCanAssistContent": "string",
  "whoCanBanUsers": "string",
  "whoCanContactOwner": "string",
  "whoCanDeleteAnyPost": "string",
  "whoCanDeleteTopics": "string",
  "whoCanDiscoverGroup": "string",
  "whoCanEnterFreeFormTags": "string",
  "whoCanHideAbuse": "string",
  "whoCanInvite": "string",
  "whoCanJoin": "string",
  "whoCanLeaveGroup": "string",
  "whoCanLockTopics": "string",
  "whoCanMakeTopicsSticky": "string",
  "whoCanMarkDuplicate": "string",
  "whoCanMarkFavoriteReplyOnAnyTopic": "string",
  "whoCanMarkFavoriteReplyOnOwnTopic": "string",
  "whoCanMarkNoResponseNeeded": "string",
  "whoCanModerateContent": "string",
  "whoCanModerateMembers": "string",
  "whoCanModifyMembers": "string",
  "whoCanModifyTagsAndCategories": "string",
  "whoCanMoveTopicsIn": "string",
  "whoCanMoveTopicsOut": "string",
  "whoCanPostAnnouncements": "string",
  "whoCanPostMessage": "string",
  "whoCanTakeTopics": "string",
  "whoCanUnassignTopic": "string",
  "whoCanUnmarkFavoriteReplyOnAnyTopic": "string",
  "whoCanViewGroup": "string",
  "whoCanViewMembership": "string"
}
```

JSON template for Group resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExternalMembers|string|false|none|Identifies whether members external to your organization can join the group. Possible values are:  <br>- true: G Suite users external to your organization can become members of this group. <br>- false: Users not belonging to the organization are not allowed to become members of this group.|
|allowGoogleCommunication|string|false|none|Deprecated. Allows Google to contact administrator of the group.  <br>- true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group. <br>- false: Google can not contact managers of this group.|
|allowWebPosting|string|false|none|Allows posting from web. Possible values are:  <br>- true: Allows any member to post to the group forum. <br>- false: Members only use Gmail to communicate with the group.|
|archiveOnly|string|false|none|Allows the group to be archived only. Possible values are:  <br>- true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.  <br>- If true, the whoCanPostMessage property is set to NONE_CAN_POST.  <br>- If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- false: The group is active and can receive messages.  <br>- When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.|
|customFooterText|string|false|none|Set the content of custom footer text. The maximum number of characters is 1,000.|
|customReplyTo|string|false|none|An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.  <br>- When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message. <br>- If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.|
|customRolesEnabledForSettingsToBeMerged|string|false|none|Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:  <br>- true <br>- false|
|defaultMessageDenyNotificationText|string|false|none|When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true.|
|default_sender|string|false|none|Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group|
|description|string|false|none|Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters.|
|email|string|false|none|The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.<br>When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.|
|enableCollaborativeInbox|string|false|none|Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:  <br>- true <br>- false|
|favoriteRepliesOnTop|string|false|none|Indicates if favorite replies should be displayed above other replies.  <br>- true: Favorite replies will be displayed above other replies. <br>- false: Favorite replies will not be displayed above other replies.|
|includeCustomFooter|string|false|none|Whether to include custom footer. Possible values are:  <br>- true <br>- false|
|includeInGlobalAddressList|string|false|none|Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:  <br>- true: Group is included in the Global Address List. <br>- false: Group is not included in the Global Address List.|
|isArchived|string|false|none|Allows the Group contents to be archived. Possible values are:  <br>- true: Archive messages sent to the group. <br>- false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.|
|kind|string|false|none|The type of the resource. It is always groupsSettings#groups.|
|maxMessageBytes|integer(int32)|false|none|Deprecated. The maximum size of a message is 25Mb.|
|membersCanPostAsTheGroup|string|false|none|Enables members to post messages as the group. Possible values are:  <br>- true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group. <br>- false: Members can not post in behalf of the group's email address.|
|messageDisplayFont|string|false|none|Deprecated. The default message display font always has a value of "DEFAULT_FONT".|
|messageModerationLevel|string|false|none|Moderation level of incoming messages. Possible values are:  <br>- MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group. <br>- MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.<br>When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.|
|name|string|false|none|Name of the group, which has a maximum size of 75 characters.|
|primaryLanguage|string|false|none|The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags.|
|replyTo|string|false|none|Specifies who receives the default reply. Possible values are:  <br>- REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.<br>When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.<br> <br>- REPLY_TO_SENDER: The reply sent to author of message. <br>- REPLY_TO_LIST: This reply message is sent to the group. <br>- REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers. <br>- REPLY_TO_IGNORE: Group users individually decide where the message reply is sent. <br>- REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.|
|sendMessageDenyNotification|string|false|none|Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:  <br>- true: When a message is rejected, send the deny message notification to the message author.<br>The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.<br> <br>- false: When a message is rejected, no notification is sent.|
|showInGroupDirectory|string|false|none|Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:  <br>- true: All groups in the account are listed in the Groups directory. <br>- false: All groups in the account are not listed in the directory.|
|spamModerationLevel|string|false|none|Specifies moderation levels for messages detected as spam. Possible values are:  <br>- ALLOW: Post the message to the group. <br>- MODERATE: Send the message to the moderation queue. This is the default. <br>- SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators. <br>- REJECT: Immediately reject the message.|
|whoCanAdd|string|false|none|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:  <br>- ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members. <br>- ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner. <br>- ALL_OWNERS_CAN_ADD: Only owners can directly add new members. <br>- NONE_CAN_ADD: No one can directly add new members.|
|whoCanAddReferences|string|false|none|Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE".|
|whoCanApproveMembers|string|false|none|Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS_CAN_APPROVE <br>- ALL_MANAGERS_CAN_APPROVE <br>- ALL_OWNERS_CAN_APPROVE <br>- NONE_CAN_APPROVE|
|whoCanApproveMessages|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanAssignTopics|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanAssistContent|string|false|none|Specifies who can moderate metadata. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanBanUsers|string|false|none|Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanContactOwner|string|false|none|Permission to contact owner of the group via web UI. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_CONTACT <br>- ALL_MANAGERS_CAN_CONTACT <br>- ALL_MEMBERS_CAN_CONTACT <br>- ANYONE_CAN_CONTACT <br>- ALL_OWNERS_CAN_CONTACT|
|whoCanDeleteAnyPost|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanDeleteTopics|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanDiscoverGroup|string|false|none|Specifies the set of users for whom this group is discoverable. Possible values are:  <br>- ANYONE_CAN_DISCOVER <br>- ALL_IN_DOMAIN_CAN_DISCOVER <br>- ALL_MEMBERS_CAN_DISCOVER|
|whoCanEnterFreeFormTags|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanHideAbuse|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanInvite|string|false|none|Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:  <br>- ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate. <br>- ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner. <br>- ALL_OWNERS_CAN_INVITE: Only owners can invite a new member. <br>- NONE_CAN_INVITE: No one can invite a new member candidate.|
|whoCanJoin|string|false|none|Permission to join group. Possible values are:  <br>- ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains. <br>- ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups. <br>- INVITED_CAN_JOIN: Candidates for membership can be invited to join.  <br>- CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.|
|whoCanLeaveGroup|string|false|none|Permission to leave the group. Possible values are:  <br>- ALL_MANAGERS_CAN_LEAVE <br>- ALL_MEMBERS_CAN_LEAVE <br>- NONE_CAN_LEAVE|
|whoCanLockTopics|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanMakeTopicsSticky|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanMarkDuplicate|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanMarkFavoriteReplyOnAnyTopic|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanMarkFavoriteReplyOnOwnTopic|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanMarkNoResponseNeeded|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanModerateContent|string|false|none|Specifies who can moderate content. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanModerateMembers|string|false|none|Specifies who can manage members. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanModifyMembers|string|false|none|Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanModifyTagsAndCategories|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanMoveTopicsIn|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanMoveTopicsOut|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanPostAnnouncements|string|false|none|Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- OWNERS_ONLY <br>- NONE|
|whoCanPostMessage|string|false|none|Permissions to post messages. Possible values are:  <br>- NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.  <br>- When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error. <br>- If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.  <br>- ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages. <br>- ALL_MEMBERS_CAN_POST: Any group member can post a message. <br>- ALL_OWNERS_CAN_POST: Only group owners can post a message. <br>- ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.  <br>- ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.|
|whoCanTakeTopics|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanUnassignTopic|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanUnmarkFavoriteReplyOnAnyTopic|string|false|none|Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:  <br>- ALL_MEMBERS <br>- OWNERS_AND_MANAGERS <br>- MANAGERS_ONLY <br>- OWNERS_ONLY <br>- NONE|
|whoCanViewGroup|string|false|none|Permissions to view group messages. Possible values are:  <br>- ANYONE_CAN_VIEW: Any Internet user can view the group's messages.  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages. <br>- ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages. <br>- ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.|
|whoCanViewMembership|string|false|none|Permissions to view membership. Possible values are:  <br>- ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.<br>If a group already has external members, those members can still send email to this group.<br> <br>- ALL_MEMBERS_CAN_VIEW: The group members can view the group members list. <br>- ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.|
