<h1 id="aws-security-token-service">AWS Security Token Service v2011-06-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Security Token Service</fullname> <p>Security Token Service (STS) enables you to request temporary, limited-privilege credentials for users. This guide provides descriptions of the STS API. For more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>

Base URLs:

* <a href="https://sts.amazonaws.com">https://sts.amazonaws.com</a> - The general AWS STS multi-region endpoint

* <a href="http://sts.us-gov-west-1.amazonaws.com">http://sts.us-gov-west-1.amazonaws.com</a> - The AWS STS endpoint for AWS GovCloud (US) and AWS GovCloud (US-East)

* <a href="https://sts.us-gov-west-1.amazonaws.com">https://sts.us-gov-west-1.amazonaws.com</a> - The AWS STS endpoint for AWS GovCloud (US) and AWS GovCloud (US-East)

* <a href="http://sts.cn-north-1.amazonaws.com.cn">http://sts.cn-north-1.amazonaws.com.cn</a> - The AWS STS endpoint for China (Beijing) and China (Ningxia)

* <a href="https://sts.cn-north-1.amazonaws.com.cn">https://sts.cn-north-1.amazonaws.com.cn</a> - The AWS STS endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/sts/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-security-token-service-default">Default</h1>

## GET_AssumeRole

<a id="opIdGET_AssumeRole"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRole?RoleArn=stringstringstringst&RoleSessionName=string&Action=AssumeRole&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AssumeRole`

<p>Returns a set of temporary security credentials that you can use to access Amazon Web Services resources. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>AssumeRole</code> within your account or for cross-account access. For a comparison of <code>AssumeRole</code> with other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRole</code> can be used to make API calls to any Amazon Web Services service with the following exception: You cannot call the Amazon Web Services STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>When you create a role, you create two policies: a role trust policy that specifies <i>who</i> can assume the role, and a permissions policy that specifies <i>what</i> can be done with the role. You specify the trusted principal that is allowed to assume the role in the role trust policy.</p> <p>To assume a role from a different account, your Amazon Web Services account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate that access to users in the account. </p> <p>A user who wants to access a role in a different account must also have permissions that are delegated from the account administrator. The administrator must attach a policy that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other account.</p> <p>To allow a user to assume a role in the same account, you can do either of the following:</p> <ul> <li> <p>Attach a policy to the user that allows the user to call <code>AssumeRole</code> (as long as the role's trust policy trusts the account).</p> </li> <li> <p>Add the user as a principal directly in the role's trust policy.</p> </li> </ul> <p>You can do either because the role’s trust policy acts as an IAM resource-based policy. When a resource-based policy grants access to a principal in the same account, no additional identity-based policy is required. For more information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These tags are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Using MFA with AssumeRole</b> </p> <p>(Optional) You can include multi-factor authentication (MFA) information when you call <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.</p> <p> <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a> in the <i>IAM User Guide</i> guide.</p> <p>To use MFA with <code>AssumeRole</code>, you pass values for the <code>SerialNumber</code> and <code>TokenCode</code> parameters. The <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device. The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device produces. </p>

<h3 id="getassumerole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RoleArn|query|string|true|The Amazon Resource Name (ARN) of the role to assume.|
|RoleSessionName|query|string|true|<p>An identifier for the assumed role session.</p> <p>Use the role session name to uniquely identify a session when the same role is assumed by different principals or for different reasons. In cross-account scenarios, the role session name is visible to, and can be logged by the account that owns the role. The role session name is also used in the ARN of the assumed role principal. This means that subsequent cross-account API requests that use the temporary security credentials will expose the role session name to the external account in their CloudTrail logs.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>|
|PolicyArns|query|[[PolicyDescriptorType](#schemapolicydescriptortype)]|false|<p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the Amazon Web Services General Reference.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>|
|Policy|query|string|false|<p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note>|
|DurationSeconds|query|integer|false|<p>The duration, in seconds, of the role session. The value specified can range from 900 seconds (15 minutes) up to the maximum session duration set for the role. The maximum session duration setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting or the administrator setting (whichever is lower), the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. </p> <p>Role chaining limits your Amazon Web Services CLI or Amazon Web Services API role session to a maximum of one hour. When you use the <code>AssumeRole</code> API operation to assume a role, you can specify the duration of your role session with the <code>DurationSeconds</code> parameter. You can specify a parameter value of up to 43200 seconds (12 hours), depending on the maximum session duration setting for your role. However, if you assume a role using role chaining and provide a <code>DurationSeconds</code> parameter value greater than one hour, the operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the Amazon Web Services Management Console</a> in the <i>IAM User Guide</i>.</p> </note>|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of session tags that you want to pass. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging Amazon Web Services STS Sessions</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters, and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is already attached to the role. When you do, session tags override a role tag with the same key. </p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the role has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the role tag.</p> <p>Additionally, if you used temporary credentials to perform this operation, the new session inherits any transitive session tags from the calling session. If you pass a session tag with the same key as an inherited tag, the operation fails. To view the inherited tags for a session, see the CloudTrail logs. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_ctlogs">Viewing Session Tags in CloudTrail</a> in the <i>IAM User Guide</i>.</p>|
|TransitiveTagKeys|query|[[tagKeyType](#schematagkeytype)]|false|<p>A list of keys for session tags that you want to set as transitive. If you set a tag key as transitive, the corresponding key and value passes to subsequent sessions in a role chain. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. When you set session tags as transitive, the session policy and session tags packed binary limit is not affected.</p> <p>If you choose not to specify a transitive tag key, then no tags are passed from this session to any subsequent sessions.</p>|
|ExternalId|query|string|false|<p>A unique identifier that might be required when you assume a role in another account. If the administrator of the account to which the role belongs provided you with an external ID, then provide that value in the <code>ExternalId</code> parameter. This value can be any string, such as a passphrase or account number. A cross-account role is usually set up to trust everyone in an account. Therefore, the administrator of the trusting account might send an external ID to the administrator of the trusted account. That way, only someone with the ID can assume the role, rather than everyone in the account. For more information about the external ID, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">How to Use an External ID When Granting Access to Your Amazon Web Services Resources to a Third Party</a> in the <i>IAM User Guide</i>.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>|
|SerialNumber|query|string|false|<p>The identification number of the MFA device that is associated with the user who is making the <code>AssumeRole</code> call. Specify this value if the trust policy of the role being assumed includes a condition that requires MFA authentication. The value is either the serial number for a hardware device (such as <code>GAHT12345678</code>) or an Amazon Resource Name (ARN) for a virtual device (such as <code>arn:aws:iam::123456789012:mfa/user</code>).</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>|
|TokenCode|query|string|false|<p>The value provided by the MFA device, if the trust policy of the role being assumed requires MFA. (In other words, if the policy includes a condition that tests for MFA). If the role being assumed requires MFA and if the <code>TokenCode</code> value is missing or expired, the <code>AssumeRole</code> call returns an "access denied" error.</p> <p>The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.</p>|
|SourceIdentity|query|string|false|<p>The source identity specified by the principal that is calling the <code>AssumeRole</code> operation.</p> <p>You can require users to specify a source identity when they assume a role. You do this by using the <code>sts:SourceIdentity</code> condition key in a role trust policy. You can use source identity information in CloudTrail logs to determine who took actions with a role. You can use the <code>aws:SourceIdentity</code> condition key to further control access to Amazon Web Services resources based on the value of source identity. For more information about using source identity, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">Monitor and control actions taken with assumed roles</a> in the <i>IAM User Guide</i>.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-. You cannot use a value that begins with the text <code>aws:</code>. This prefix is reserved for Amazon Web Services internal use.</p>|
|ProvidedContexts|query|[[ProvidedContext](#schemaprovidedcontext)]|false|Reserved for future use.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRole|
|Version|2011-06-15|

<h3 id="getassumerole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleResponse](#schemaassumeroleresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|
|483|483|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AssumeRole

<a id="opIdPOST_AssumeRole"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRole?Action=AssumeRole&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RoleArn":{},"RoleSessionName":{},"PolicyArns":{},"Policy":{},"DurationSeconds":{},"Tags":{},"TransitiveTagKeys":{},"ExternalId":{},"SerialNumber":{},"TokenCode":{},"SourceIdentity":{},"ProvidedContexts":{}}'
```

`POST /#Action=AssumeRole`

<p>Returns a set of temporary security credentials that you can use to access Amazon Web Services resources. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>AssumeRole</code> within your account or for cross-account access. For a comparison of <code>AssumeRole</code> with other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRole</code> can be used to make API calls to any Amazon Web Services service with the following exception: You cannot call the Amazon Web Services STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>When you create a role, you create two policies: a role trust policy that specifies <i>who</i> can assume the role, and a permissions policy that specifies <i>what</i> can be done with the role. You specify the trusted principal that is allowed to assume the role in the role trust policy.</p> <p>To assume a role from a different account, your Amazon Web Services account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate that access to users in the account. </p> <p>A user who wants to access a role in a different account must also have permissions that are delegated from the account administrator. The administrator must attach a policy that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other account.</p> <p>To allow a user to assume a role in the same account, you can do either of the following:</p> <ul> <li> <p>Attach a policy to the user that allows the user to call <code>AssumeRole</code> (as long as the role's trust policy trusts the account).</p> </li> <li> <p>Add the user as a principal directly in the role's trust policy.</p> </li> </ul> <p>You can do either because the role’s trust policy acts as an IAM resource-based policy. When a resource-based policy grants access to a principal in the same account, no additional identity-based policy is required. For more information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These tags are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Using MFA with AssumeRole</b> </p> <p>(Optional) You can include multi-factor authentication (MFA) information when you call <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.</p> <p> <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a> in the <i>IAM User Guide</i> guide.</p> <p>To use MFA with <code>AssumeRole</code>, you pass values for the <code>SerialNumber</code> and <code>TokenCode</code> parameters. The <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device. The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device produces. </p>

> Body parameter

```json
{
  "RoleArn": {},
  "RoleSessionName": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {},
  "Tags": {},
  "TransitiveTagKeys": {},
  "ExternalId": {},
  "SerialNumber": {},
  "TokenCode": {},
  "SourceIdentity": {},
  "ProvidedContexts": {}
}
```

<h3 id="postassumerole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssumeRoleRequest](#schemaassumerolerequest)|false|none|
|» RoleArn|body|object|true|none|
|» RoleSessionName|body|object|true|none|
|» PolicyArns|body|object|false|none|
|» Policy|body|object|false|none|
|» DurationSeconds|body|object|false|none|
|» Tags|body|object|false|none|
|» TransitiveTagKeys|body|object|false|none|
|» ExternalId|body|object|false|none|
|» SerialNumber|body|object|false|none|
|» TokenCode|body|object|false|none|
|» SourceIdentity|body|object|false|none|
|» ProvidedContexts|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRole|
|Version|2011-06-15|

<h3 id="postassumerole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleResponse](#schemaassumeroleresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|
|483|483|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AssumeRoleWithSAML

<a id="opIdGET_AssumeRoleWithSAML"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRoleWithSAML?RoleArn=stringstringstringst&PrincipalArn=stringstringstringst&SAMLAssertion=password&Action=AssumeRoleWithSAML&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AssumeRoleWithSAML`

<p>Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based Amazon Web Services access without user-specific credentials or configuration. For a comparison of <code>AssumeRoleWithSAML</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services services.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithSAML</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p> <note> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-role-chaining">Role chaining</a> limits your CLI or Amazon Web Services API role session to a maximum of one hour. When you use the <code>AssumeRole</code> API operation to assume a role, you can specify the duration of your role session with the <code>DurationSeconds</code> parameter. You can specify a parameter value of up to 43200 seconds (12 hours), depending on the maximum session duration setting for your role. However, if you assume a role using role chaining and provide a <code>DurationSeconds</code> parameter value greater than one hour, the operation fails.</p> </note> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithSAML</code> can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>Calling <code>AssumeRoleWithSAML</code> does not require the use of Amazon Web Services security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider. </p> <important> <p>Calling <code>AssumeRoleWithSAML</code> can result in an entry in your CloudTrail logs. The entry includes the value in the <code>NameID</code> element of the SAML assertion. We recommend that you use a <code>NameIDType</code> that is not associated with any personally identifiable information (PII). For example, you could instead use the persistent identifier (<code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code>).</p> </important> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your SAML assertion as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, session tags override the role's tags with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>SAML Configuration</b> </p> <p>Before your application can call <code>AssumeRoleWithSAML</code>, you must configure your SAML identity provider (IdP) to issue the claims required by Amazon Web Services. Additionally, you must use Identity and Access Management (IAM) to create a SAML provider entity in your Amazon Web Services account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy. </p> <p>For more information, see the following resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html">Creating SAML Identity Providers</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html">Configuring a Relying Party and Claims</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html">Creating a Role for SAML 2.0 Federation</a> in the <i>IAM User Guide</i>. </p> </li> </ul>

<h3 id="getassumerolewithsaml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RoleArn|query|string|true|The Amazon Resource Name (ARN) of the role that the caller is assuming.|
|PrincipalArn|query|string|true|The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.|
|SAMLAssertion|query|string(password)|true|<p>The base64 encoded SAML authentication response provided by the IdP.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/create-role-saml-IdP-tasks.html">Configuring a Relying Party and Adding Claims</a> in the <i>IAM User Guide</i>. </p>|
|PolicyArns|query|[[PolicyDescriptorType](#schemapolicydescriptortype)]|false|<p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the Amazon Web Services General Reference.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>|
|Policy|query|string|false|<p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>. </p> <p>The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note>|
|DurationSeconds|query|integer|false|<p>The duration, in seconds, of the role session. Your role session lasts for the duration that you specify for the <code>DurationSeconds</code> parameter, or until the time specified in the SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the Amazon Web Services Management Console</a> in the <i>IAM User Guide</i>.</p> </note>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRoleWithSAML|
|Version|2011-06-15|

<h3 id="getassumerolewithsaml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleWithSAMLResponse](#schemaassumerolewithsamlresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|IDPRejectedClaimException|[IDPRejectedClaimException](#schemaidprejectedclaimexception)|
|483|483|InvalidIdentityTokenException|[InvalidIdentityTokenException](#schemainvalididentitytokenexception)|
|484|484|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|485|485|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AssumeRoleWithSAML

<a id="opIdPOST_AssumeRoleWithSAML"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRoleWithSAML?Action=AssumeRoleWithSAML&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RoleArn":{},"PrincipalArn":{},"SAMLAssertion":{},"PolicyArns":{},"Policy":{},"DurationSeconds":{}}'
```

`POST /#Action=AssumeRoleWithSAML`

<p>Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based Amazon Web Services access without user-specific credentials or configuration. For a comparison of <code>AssumeRoleWithSAML</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services services.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithSAML</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p> <note> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-role-chaining">Role chaining</a> limits your CLI or Amazon Web Services API role session to a maximum of one hour. When you use the <code>AssumeRole</code> API operation to assume a role, you can specify the duration of your role session with the <code>DurationSeconds</code> parameter. You can specify a parameter value of up to 43200 seconds (12 hours), depending on the maximum session duration setting for your role. However, if you assume a role using role chaining and provide a <code>DurationSeconds</code> parameter value greater than one hour, the operation fails.</p> </note> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithSAML</code> can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>Calling <code>AssumeRoleWithSAML</code> does not require the use of Amazon Web Services security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider. </p> <important> <p>Calling <code>AssumeRoleWithSAML</code> can result in an entry in your CloudTrail logs. The entry includes the value in the <code>NameID</code> element of the SAML assertion. We recommend that you use a <code>NameIDType</code> that is not associated with any personally identifiable information (PII). For example, you could instead use the persistent identifier (<code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code>).</p> </important> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your SAML assertion as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, session tags override the role's tags with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>SAML Configuration</b> </p> <p>Before your application can call <code>AssumeRoleWithSAML</code>, you must configure your SAML identity provider (IdP) to issue the claims required by Amazon Web Services. Additionally, you must use Identity and Access Management (IAM) to create a SAML provider entity in your Amazon Web Services account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy. </p> <p>For more information, see the following resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html">Creating SAML Identity Providers</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html">Configuring a Relying Party and Claims</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html">Creating a Role for SAML 2.0 Federation</a> in the <i>IAM User Guide</i>. </p> </li> </ul>

> Body parameter

```json
{
  "RoleArn": {},
  "PrincipalArn": {},
  "SAMLAssertion": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {}
}
```

<h3 id="postassumerolewithsaml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssumeRoleWithSAMLRequest](#schemaassumerolewithsamlrequest)|false|none|
|» RoleArn|body|object|true|none|
|» PrincipalArn|body|object|true|none|
|» SAMLAssertion|body|object|true|none|
|» PolicyArns|body|object|false|none|
|» Policy|body|object|false|none|
|» DurationSeconds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRoleWithSAML|
|Version|2011-06-15|

<h3 id="postassumerolewithsaml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleWithSAMLResponse](#schemaassumerolewithsamlresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|IDPRejectedClaimException|[IDPRejectedClaimException](#schemaidprejectedclaimexception)|
|483|483|InvalidIdentityTokenException|[InvalidIdentityTokenException](#schemainvalididentitytokenexception)|
|484|484|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|485|485|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_AssumeRoleWithWebIdentity

<a id="opIdGET_AssumeRoleWithWebIdentity"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRoleWithWebIdentity?RoleArn=stringstringstringst&RoleSessionName=string&WebIdentityToken=password&Action=AssumeRoleWithWebIdentity&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=AssumeRoleWithWebIdentity`

<p>Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include the OAuth 2.0 providers Login with Amazon and Facebook, or any OpenID Connect-compatible identity provider such as Google or <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito federated identities</a>.</p> <note> <p>For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and the <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a> to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application.</p> <p>To learn more about Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito identity pools</a> in <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling <code>AssumeRoleWithWebIdentity</code> does not require the use of Amazon Web Services security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term Amazon Web Services credentials in the application. You also don't need to deploy server-based proxy services that use long-term Amazon Web Services credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of <code>AssumeRoleWithWebIdentity</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services service API operations.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your web identity token as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, the session tag overrides the role tag with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Identities</b> </p> <p>Before your application can call <code>AssumeRoleWithWebIdentity</code>, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy. </p> <important> <p>Calling <code>AssumeRoleWithWebIdentity</code> can result in an entry in your CloudTrail logs. The entry includes the <a href="http://openid.net/specs/openid-connect-core-1_0.html#Claims">Subject</a> of the provided web identity token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as <a href="http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes">suggested in the OIDC specification</a>.</p> </important> <p>For more information about how to use web identity federation and the <code>AssumeRoleWithWebIdentity</code> API, see the following resources: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html">Using Web Identity Federation API Operations for Mobile Apps</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a>. </p> </li> <li> <p> <a href="https://aws.amazon.com/blogs/aws/the-aws-web-identity-federation-playground/"> Web Identity Federation Playground</a>. Walk through the process of authenticating through Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to Amazon Web Services. </p> </li> <li> <p> <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a>. These toolkits contain sample apps that show how to invoke the identity providers. The toolkits then show how to use the information from these providers to get and use temporary security credentials. </p> </li> <li> <p> <a href="http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications">Web Identity Federation with Mobile Applications</a>. This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3. </p> </li> </ul>

<h3 id="getassumerolewithwebidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RoleArn|query|string|true|The Amazon Resource Name (ARN) of the role that the caller is assuming.|
|RoleSessionName|query|string|true|<p>An identifier for the assumed role session. Typically, you pass the name or identifier that is associated with the user who is using your application. That way, the temporary security credentials that your application will use are associated with that user. This session name is included as part of the ARN and assumed role ID in the <code>AssumedRoleUser</code> response element.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>|
|WebIdentityToken|query|string(password)|true|The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider. Your application must get this token by authenticating the user who is using your application with a web identity provider before the application makes an <code>AssumeRoleWithWebIdentity</code> call. Only tokens with RSA algorithms (RS256) are supported.|
|ProviderId|query|string|false|<p>The fully qualified host component of the domain name of the OAuth 2.0 identity provider. Do not specify this value for an OpenID Connect identity provider.</p> <p>Currently <code>www.amazon.com</code> and <code>graph.facebook.com</code> are the only supported identity providers for OAuth 2.0 access tokens. Do not include URL schemes and port numbers.</p> <p>Do not specify this value for OpenID Connect ID tokens.</p>|
|PolicyArns|query|[[PolicyDescriptorType](#schemapolicydescriptortype)]|false|<p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the Amazon Web Services General Reference.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>|
|Policy|query|string|false|<p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note>|
|DurationSeconds|query|integer|false|<p>The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the Amazon Web Services Management Console</a> in the <i>IAM User Guide</i>.</p> </note>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRoleWithWebIdentity|
|Version|2011-06-15|

<h3 id="getassumerolewithwebidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleWithWebIdentityResponse](#schemaassumerolewithwebidentityresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|IDPRejectedClaimException|[IDPRejectedClaimException](#schemaidprejectedclaimexception)|
|483|483|IDPCommunicationErrorException|[IDPCommunicationErrorException](#schemaidpcommunicationerrorexception)|
|484|484|InvalidIdentityTokenException|[InvalidIdentityTokenException](#schemainvalididentitytokenexception)|
|485|485|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|486|486|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_AssumeRoleWithWebIdentity

<a id="opIdPOST_AssumeRoleWithWebIdentity"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=AssumeRoleWithWebIdentity?Action=AssumeRoleWithWebIdentity&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"RoleArn":{},"RoleSessionName":{},"WebIdentityToken":{},"ProviderId":{},"PolicyArns":{},"Policy":{},"DurationSeconds":{}}'
```

`POST /#Action=AssumeRoleWithWebIdentity`

<p>Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include the OAuth 2.0 providers Login with Amazon and Facebook, or any OpenID Connect-compatible identity provider such as Google or <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito federated identities</a>.</p> <note> <p>For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and the <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a> to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application.</p> <p>To learn more about Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito identity pools</a> in <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling <code>AssumeRoleWithWebIdentity</code> does not require the use of Amazon Web Services security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term Amazon Web Services credentials in the application. You also don't need to deploy server-based proxy services that use long-term Amazon Web Services credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of <code>AssumeRoleWithWebIdentity</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to Amazon Web Services service API operations.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> can be used to make API calls to any Amazon Web Services service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent Amazon Web Services API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your web identity token as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, the session tag overrides the role tag with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Identities</b> </p> <p>Before your application can call <code>AssumeRoleWithWebIdentity</code>, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy. </p> <important> <p>Calling <code>AssumeRoleWithWebIdentity</code> can result in an entry in your CloudTrail logs. The entry includes the <a href="http://openid.net/specs/openid-connect-core-1_0.html#Claims">Subject</a> of the provided web identity token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as <a href="http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes">suggested in the OIDC specification</a>.</p> </important> <p>For more information about how to use web identity federation and the <code>AssumeRoleWithWebIdentity</code> API, see the following resources: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html">Using Web Identity Federation API Operations for Mobile Apps</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a>. </p> </li> <li> <p> <a href="https://aws.amazon.com/blogs/aws/the-aws-web-identity-federation-playground/"> Web Identity Federation Playground</a>. Walk through the process of authenticating through Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to Amazon Web Services. </p> </li> <li> <p> <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a>. These toolkits contain sample apps that show how to invoke the identity providers. The toolkits then show how to use the information from these providers to get and use temporary security credentials. </p> </li> <li> <p> <a href="http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications">Web Identity Federation with Mobile Applications</a>. This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3. </p> </li> </ul>

> Body parameter

```json
{
  "RoleArn": {},
  "RoleSessionName": {},
  "WebIdentityToken": {},
  "ProviderId": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {}
}
```

<h3 id="postassumerolewithwebidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[AssumeRoleWithWebIdentityRequest](#schemaassumerolewithwebidentityrequest)|false|none|
|» RoleArn|body|object|true|none|
|» RoleSessionName|body|object|true|none|
|» WebIdentityToken|body|object|true|none|
|» ProviderId|body|object|false|none|
|» PolicyArns|body|object|false|none|
|» Policy|body|object|false|none|
|» DurationSeconds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|AssumeRoleWithWebIdentity|
|Version|2011-06-15|

<h3 id="postassumerolewithwebidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssumeRoleWithWebIdentityResponse](#schemaassumerolewithwebidentityresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|IDPRejectedClaimException|[IDPRejectedClaimException](#schemaidprejectedclaimexception)|
|483|483|IDPCommunicationErrorException|[IDPCommunicationErrorException](#schemaidpcommunicationerrorexception)|
|484|484|InvalidIdentityTokenException|[InvalidIdentityTokenException](#schemainvalididentitytokenexception)|
|485|485|ExpiredTokenException|[ExpiredTokenException](#schemaexpiredtokenexception)|
|486|486|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_DecodeAuthorizationMessage

<a id="opIdGET_DecodeAuthorizationMessage"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=DecodeAuthorizationMessage?EncodedMessage=string&Action=DecodeAuthorizationMessage&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=DecodeAuthorizationMessage`

<p>Decodes additional information about the authorization status of a request from an encoded message returned in response to an Amazon Web Services request.</p> <p>For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a <code>Client.UnauthorizedOperation</code> response (an HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can provide details about this authorization failure. </p> <note> <p>Only certain Amazon Web Services operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.</p> </note> <p>The message is encoded because the details of the authorization status can contain privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions through an IAM <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">policy</a> to request the <code>DecodeAuthorizationMessage</code> (<code>sts:DecodeAuthorizationMessage</code>) action. </p> <p>The decoded message includes the following type of information:</p> <ul> <li> <p>Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow">Determining Whether a Request is Allowed or Denied</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p>The principal who made the request.</p> </li> <li> <p>The requested action.</p> </li> <li> <p>The requested resource.</p> </li> <li> <p>The values of condition keys in the context of the user's request.</p> </li> </ul>

<h3 id="getdecodeauthorizationmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|EncodedMessage|query|string|true|The encoded message that was returned with the response.|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DecodeAuthorizationMessage|
|Version|2011-06-15|

<h3 id="getdecodeauthorizationmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecodeAuthorizationMessageResponse](#schemadecodeauthorizationmessageresponse)|
|480|480|InvalidAuthorizationMessageException|[InvalidAuthorizationMessageException](#schemainvalidauthorizationmessageexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_DecodeAuthorizationMessage

<a id="opIdPOST_DecodeAuthorizationMessage"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=DecodeAuthorizationMessage?Action=DecodeAuthorizationMessage&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EncodedMessage":{}}'
```

`POST /#Action=DecodeAuthorizationMessage`

<p>Decodes additional information about the authorization status of a request from an encoded message returned in response to an Amazon Web Services request.</p> <p>For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a <code>Client.UnauthorizedOperation</code> response (an HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can provide details about this authorization failure. </p> <note> <p>Only certain Amazon Web Services operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.</p> </note> <p>The message is encoded because the details of the authorization status can contain privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions through an IAM <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">policy</a> to request the <code>DecodeAuthorizationMessage</code> (<code>sts:DecodeAuthorizationMessage</code>) action. </p> <p>The decoded message includes the following type of information:</p> <ul> <li> <p>Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow">Determining Whether a Request is Allowed or Denied</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p>The principal who made the request.</p> </li> <li> <p>The requested action.</p> </li> <li> <p>The requested resource.</p> </li> <li> <p>The values of condition keys in the context of the user's request.</p> </li> </ul>

> Body parameter

```json
{
  "EncodedMessage": {}
}
```

<h3 id="postdecodeauthorizationmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DecodeAuthorizationMessageRequest](#schemadecodeauthorizationmessagerequest)|false|none|
|» EncodedMessage|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|DecodeAuthorizationMessage|
|Version|2011-06-15|

<h3 id="postdecodeauthorizationmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DecodeAuthorizationMessageResponse](#schemadecodeauthorizationmessageresponse)|
|480|480|InvalidAuthorizationMessageException|[InvalidAuthorizationMessageException](#schemainvalidauthorizationmessageexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetAccessKeyInfo

<a id="opIdGET_GetAccessKeyInfo"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetAccessKeyInfo?AccessKeyId=stringstringstri&Action=GetAccessKeyInfo&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetAccessKeyInfo`

<p>Returns the account identifier for the specified access key ID.</p> <p>Access keys consist of two parts: an access key ID (for example, <code>AKIAIOSFODNN7EXAMPLE</code>) and a secret access key (for example, <code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>). For more information about access keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Managing Access Keys for IAM Users</a> in the <i>IAM User Guide</i>.</p> <p>When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services account to which the keys belong. Access key IDs beginning with <code>AKIA</code> are long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs beginning with <code>ASIA</code> are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">credentials report</a> to learn which IAM user owns the keys. To learn who requested the temporary credentials for an <code>ASIA</code> access key, view the STS events in your <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">CloudTrail logs</a> in the <i>IAM User Guide</i>.</p> <p>This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.</p>

<h3 id="getgetaccesskeyinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccessKeyId|query|string|true|<p>The identifier of an access key.</p> <p>This parameter allows (through its regex pattern) a string of characters that can consist of any upper- or lowercase letter or digit.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetAccessKeyInfo|
|Version|2011-06-15|

<h3 id="getgetaccesskeyinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessKeyInfoResponse](#schemagetaccesskeyinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetAccessKeyInfo

<a id="opIdPOST_GetAccessKeyInfo"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetAccessKeyInfo?Action=GetAccessKeyInfo&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AccessKeyId":{}}'
```

`POST /#Action=GetAccessKeyInfo`

<p>Returns the account identifier for the specified access key ID.</p> <p>Access keys consist of two parts: an access key ID (for example, <code>AKIAIOSFODNN7EXAMPLE</code>) and a secret access key (for example, <code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>). For more information about access keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Managing Access Keys for IAM Users</a> in the <i>IAM User Guide</i>.</p> <p>When you pass an access key ID to this operation, it returns the ID of the Amazon Web Services account to which the keys belong. Access key IDs beginning with <code>AKIA</code> are long-term credentials for an IAM user or the Amazon Web Services account root user. Access key IDs beginning with <code>ASIA</code> are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">credentials report</a> to learn which IAM user owns the keys. To learn who requested the temporary credentials for an <code>ASIA</code> access key, view the STS events in your <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">CloudTrail logs</a> in the <i>IAM User Guide</i>.</p> <p>This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.</p>

> Body parameter

```json
{
  "AccessKeyId": {}
}
```

<h3 id="postgetaccesskeyinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetAccessKeyInfoRequest](#schemagetaccesskeyinforequest)|false|none|
|» AccessKeyId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetAccessKeyInfo|
|Version|2011-06-15|

<h3 id="postgetaccesskeyinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessKeyInfoResponse](#schemagetaccesskeyinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetCallerIdentity

<a id="opIdGET_GetCallerIdentity"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetCallerIdentity?Action=GetCallerIdentity&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetCallerIdentity`

<p>Returns details about the IAM user or role whose credentials are used to call the operation.</p> <note> <p>No permissions are required to perform this operation. If an administrator attaches a policy to your identity that explicitly denies access to the <code>sts:GetCallerIdentity</code> action, you can still perform this operation. Permissions are not required because the same information is returned when access is denied. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the <i>IAM User Guide</i>.</p> </note>

<h3 id="getgetcalleridentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetCallerIdentity|
|Version|2011-06-15|

<h3 id="getgetcalleridentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCallerIdentityResponse](#schemagetcalleridentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetCallerIdentity

<a id="opIdPOST_GetCallerIdentity"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetCallerIdentity?Action=GetCallerIdentity&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /#Action=GetCallerIdentity`

<p>Returns details about the IAM user or role whose credentials are used to call the operation.</p> <note> <p>No permissions are required to perform this operation. If an administrator attaches a policy to your identity that explicitly denies access to the <code>sts:GetCallerIdentity</code> action, you can still perform this operation. Permissions are not required because the same information is returned when access is denied. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the <i>IAM User Guide</i>.</p> </note>

> Body parameter

```json
{}
```

<h3 id="postgetcalleridentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCallerIdentityRequest](#schemagetcalleridentityrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetCallerIdentity|
|Version|2011-06-15|

<h3 id="postgetcalleridentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCallerIdentityResponse](#schemagetcalleridentityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetFederationToken

<a id="opIdGET_GetFederationToken"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetFederationToken?Name=string&Action=GetFederationToken&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetFederationToken`

<p>Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network.</p> <p>You must call the <code>GetFederationToken</code> operation using the long-term security credentials of an IAM user. As a result, this call is appropriate in contexts where those credentials can be safeguarded, usually in a server-based application. For a comparison of <code>GetFederationToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>Although it is possible to call <code>GetFederationToken</code> using the security credentials of an Amazon Web Services account root user rather than an IAM user that you create for the purpose of a proxy application, we do not recommend it. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials">Safeguard your root user credentials and don't use them for everyday tasks</a> in the <i>IAM User Guide</i>. </p> <note> <p>You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the <i>IAM User Guide</i>.</p> </note> <p> <b>Session duration</b> </p> <p>The temporary credentials are valid for the specified duration, from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is 43,200 seconds (12 hours). Temporary credentials obtained by using the root user credentials have a maximum duration of 3,600 seconds (1 hour).</p> <p> <b>Permissions</b> </p> <p>You can use the temporary credentials created by <code>GetFederationToken</code> in any Amazon Web Services service with the following exceptions:</p> <ul> <li> <p>You cannot call any IAM operations using the CLI or the Amazon Web Services API. This limitation does not apply to console sessions.</p> </li> <li> <p>You cannot call any STS operations except <code>GetCallerIdentity</code>.</p> </li> </ul> <p>You can use temporary credentials for single sign-on (SSO) to the console.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters.</p> <p>Though the session policy parameters are optional, if you do not pass a policy, then the resulting federated user session has no permissions. When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>. For information about using <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p> <p>You can use the credentials to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions granted by the session policies.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the <i>IAM User Guide</i>.</p> </note> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the user that you are federating has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the user tag.</p>

<h3 id="getgetfederationtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|query|string|true|<p>The name of the federated user. The name is used as an identifier for the temporary security credentials (such as <code>Bob</code>). For example, you can reference the federated user name in a resource-based policy, such as in an Amazon S3 bucket policy.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>|
|Policy|query|string|false|<p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The resulting credentials can be used to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions that are granted by the session policies.</p> <p>The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note>|
|PolicyArns|query|[[PolicyDescriptorType](#schemapolicydescriptortype)]|false|<p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as a managed session policy. The policies must exist in the same account as the IAM user that is requesting federated access.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters. You can provide up to 10 managed policy ARNs. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the Amazon Web Services General Reference.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The resulting credentials can be used to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions that are granted by the session policies.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note>|
|DurationSeconds|query|integer|false|The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions obtained using root user credentials are restricted to a maximum of 3,600 seconds (one hour). If the specified duration is longer than one hour, the session obtained by using root user credentials defaults to one hour.|
|Tags|query|[[Tag](#schematag)]|false|<p>A list of session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An Amazon Web Services conversion compresses the passed inline session policy, managed policy ARNs, and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plaintext meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit.</p> </note> <p>You can pass a session tag with the same key as a tag that is already attached to the user you are federating. When you do, session tags override a user tag with the same key. </p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the role has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the role tag.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetFederationToken|
|Version|2011-06-15|

<h3 id="getgetfederationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFederationTokenResponse](#schemagetfederationtokenresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetFederationToken

<a id="opIdPOST_GetFederationToken"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetFederationToken?Action=GetFederationToken&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":{},"Policy":{},"PolicyArns":{},"DurationSeconds":{},"Tags":{}}'
```

`POST /#Action=GetFederationToken`

<p>Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network.</p> <p>You must call the <code>GetFederationToken</code> operation using the long-term security credentials of an IAM user. As a result, this call is appropriate in contexts where those credentials can be safeguarded, usually in a server-based application. For a comparison of <code>GetFederationToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>Although it is possible to call <code>GetFederationToken</code> using the security credentials of an Amazon Web Services account root user rather than an IAM user that you create for the purpose of a proxy application, we do not recommend it. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials">Safeguard your root user credentials and don't use them for everyday tasks</a> in the <i>IAM User Guide</i>. </p> <note> <p>You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the <i>IAM User Guide</i>.</p> </note> <p> <b>Session duration</b> </p> <p>The temporary credentials are valid for the specified duration, from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is 43,200 seconds (12 hours). Temporary credentials obtained by using the root user credentials have a maximum duration of 3,600 seconds (1 hour).</p> <p> <b>Permissions</b> </p> <p>You can use the temporary credentials created by <code>GetFederationToken</code> in any Amazon Web Services service with the following exceptions:</p> <ul> <li> <p>You cannot call any IAM operations using the CLI or the Amazon Web Services API. This limitation does not apply to console sessions.</p> </li> <li> <p>You cannot call any STS operations except <code>GetCallerIdentity</code>.</p> </li> </ul> <p>You can use temporary credentials for single sign-on (SSO) to the console.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as managed session policies. The plaintext that you use for both inline and managed session policies can't exceed 2,048 characters.</p> <p>Though the session policy parameters are optional, if you do not pass a policy, then the resulting federated user session has no permissions. When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>. For information about using <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p> <p>You can use the credentials to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions granted by the session policies.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the <i>IAM User Guide</i>.</p> </note> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the user that you are federating has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the user tag.</p>

> Body parameter

```json
{
  "Name": {},
  "Policy": {},
  "PolicyArns": {},
  "DurationSeconds": {},
  "Tags": {}
}
```

<h3 id="postgetfederationtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetFederationTokenRequest](#schemagetfederationtokenrequest)|false|none|
|» Name|body|object|true|none|
|» Policy|body|object|false|none|
|» PolicyArns|body|object|false|none|
|» DurationSeconds|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetFederationToken|
|Version|2011-06-15|

<h3 id="postgetfederationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFederationTokenResponse](#schemagetfederationtokenresponse)|
|480|480|MalformedPolicyDocumentException|[MalformedPolicyDocumentException](#schemamalformedpolicydocumentexception)|
|481|481|PackedPolicyTooLargeException|[PackedPolicyTooLargeException](#schemapackedpolicytoolargeexception)|
|482|482|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GET_GetSessionToken

<a id="opIdGET_GetSessionToken"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetSessionToken?Action=GetSessionToken&Version=2011-06-15' \
  -H "Authorization: ${API_KEY}"
```

`GET /#Action=GetSessionToken`

<p>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect programmatic calls to specific Amazon Web Services API operations like Amazon EC2 <code>StopInstances</code>.</p> <p>MFA-enabled IAM users must call <code>GetSessionToken</code> and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that the call returns, IAM users can then make programmatic calls to API operations that require MFA authentication. An incorrect MFA code causes the API to return an access denied error. For a comparison of <code>GetSessionToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <note> <p>No permissions are required for users to perform this operation. The purpose of the <code>sts:GetSessionToken</code> operation is to authenticate the user using MFA. You cannot use policies to control authentication operations. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getsessiontoken.html">Permissions for GetSessionToken</a> in the <i>IAM User Guide</i>.</p> </note> <p> <b>Session Duration</b> </p> <p>The <code>GetSessionToken</code> operation must be called by using the long-term Amazon Web Services security credentials of an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>GetSessionToken</code> can be used to make API calls to any Amazon Web Services service with the following exceptions:</p> <ul> <li> <p>You cannot call any IAM API operations unless MFA authentication information is included in the request.</p> </li> <li> <p>You cannot call any STS API <i>except</i> <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p> </li> </ul> <p>The credentials that <code>GetSessionToken</code> returns are based on permissions associated with the IAM user whose credentials were used to call the operation. The temporary credentials have the same permissions as the IAM user.</p> <note> <p>Although it is possible to call <code>GetSessionToken</code> using the security credentials of an Amazon Web Services account root user rather than an IAM user, we do not recommend it. If <code>GetSessionToken</code> is called using root user credentials, the temporary credentials have root user permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials">Safeguard your root user credentials and don't use them for everyday tasks</a> in the <i>IAM User Guide</i> </p> </note> <p>For more information about using <code>GetSessionToken</code> to create temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary Credentials for Users in Untrusted Environments</a> in the <i>IAM User Guide</i>. </p>

<h3 id="getgetsessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DurationSeconds|query|integer|false|The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions for Amazon Web Services account owners are restricted to a maximum of 3,600 seconds (one hour). If the duration is longer than one hour, the session for Amazon Web Services account owners defaults to one hour.|
|SerialNumber|query|string|false|<p>The identification number of the MFA device that is associated with the IAM user who is making the <code>GetSessionToken</code> call. Specify this value if the IAM user has a policy that requires MFA authentication. The value is either the serial number for a hardware device (such as <code>GAHT12345678</code>) or an Amazon Resource Name (ARN) for a virtual device (such as <code>arn:aws:iam::123456789012:mfa/user</code>). You can find the device for an IAM user by going to the Amazon Web Services Management Console and viewing the user's security credentials. </p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>|
|TokenCode|query|string|false|<p>The value provided by the MFA device, if MFA is required. If any policy requires the IAM user to submit an MFA code, specify this value. If MFA authentication is required, the user must provide a code when requesting a set of temporary security credentials. A user who fails to provide the code receives an "access denied" response when requesting resources that require MFA authentication.</p> <p>The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.</p>|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetSessionToken|
|Version|2011-06-15|

<h3 id="getgetsessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionTokenResponse](#schemagetsessiontokenresponse)|
|480|480|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## POST_GetSessionToken

<a id="opIdPOST_GetSessionToken"></a>

> Code samples

```bash
curl 'https://sts.us-east-1.amazonaws.com/#Action=GetSessionToken?Action=GetSessionToken&Version=2011-06-15' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DurationSeconds":{},"SerialNumber":{},"TokenCode":{}}'
```

`POST /#Action=GetSessionToken`

<p>Returns a set of temporary credentials for an Amazon Web Services account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect programmatic calls to specific Amazon Web Services API operations like Amazon EC2 <code>StopInstances</code>.</p> <p>MFA-enabled IAM users must call <code>GetSessionToken</code> and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that the call returns, IAM users can then make programmatic calls to API operations that require MFA authentication. An incorrect MFA code causes the API to return an access denied error. For a comparison of <code>GetSessionToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p> <note> <p>No permissions are required for users to perform this operation. The purpose of the <code>sts:GetSessionToken</code> operation is to authenticate the user using MFA. You cannot use policies to control authentication operations. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getsessiontoken.html">Permissions for GetSessionToken</a> in the <i>IAM User Guide</i>.</p> </note> <p> <b>Session Duration</b> </p> <p>The <code>GetSessionToken</code> operation must be called by using the long-term Amazon Web Services security credentials of an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>GetSessionToken</code> can be used to make API calls to any Amazon Web Services service with the following exceptions:</p> <ul> <li> <p>You cannot call any IAM API operations unless MFA authentication information is included in the request.</p> </li> <li> <p>You cannot call any STS API <i>except</i> <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p> </li> </ul> <p>The credentials that <code>GetSessionToken</code> returns are based on permissions associated with the IAM user whose credentials were used to call the operation. The temporary credentials have the same permissions as the IAM user.</p> <note> <p>Although it is possible to call <code>GetSessionToken</code> using the security credentials of an Amazon Web Services account root user rather than an IAM user, we do not recommend it. If <code>GetSessionToken</code> is called using root user credentials, the temporary credentials have root user permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials">Safeguard your root user credentials and don't use them for everyday tasks</a> in the <i>IAM User Guide</i> </p> </note> <p>For more information about using <code>GetSessionToken</code> to create temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary Credentials for Users in Untrusted Environments</a> in the <i>IAM User Guide</i>. </p>

> Body parameter

```json
{
  "DurationSeconds": {},
  "SerialNumber": {},
  "TokenCode": {}
}
```

<h3 id="postgetsessiontoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Action|query|string|true|none|
|Version|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSessionTokenRequest](#schemagetsessiontokenrequest)|false|none|
|» DurationSeconds|body|object|false|none|
|» SerialNumber|body|object|false|none|
|» TokenCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Action|GetSessionToken|
|Version|2011-06-15|

<h3 id="postgetsessiontoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSessionTokenResponse](#schemagetsessiontokenresponse)|
|480|480|RegionDisabledException|[RegionDisabledException](#schemaregiondisabledexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssumeRoleResponse">AssumeRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassumeroleresponse"></a>
<a id="schema_AssumeRoleResponse"></a>
<a id="tocSassumeroleresponse"></a>
<a id="tocsassumeroleresponse"></a>

```json
{
  "AssumedRoleUser": {
    "Arn": "arn:aws:sts::123456789012:assumed-role/demo/Bob",
    "AssumedRoleId": "ARO123EXAMPLE123:Bob"
  },
  "Credentials": {
    "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "Expiration": "2011-07-15T23:28:33.359Z",
    "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
    "SessionToken": "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
  },
  "PackedPolicySize": 8
}
```

Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|AssumedRoleUser|object|false|none|none|
|PackedPolicySize|object|false|none|none|
|SourceIdentity|object|false|none|none|

<h2 id="tocS_PolicyDescriptorType">PolicyDescriptorType</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescriptortype"></a>
<a id="schema_PolicyDescriptorType"></a>
<a id="tocSpolicydescriptortype"></a>
<a id="tocspolicydescriptortype"></a>

```json
{
  "arn": {}
}
```

A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|

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

You can pass custom key-value pair attributes when you assume a role or federate a user. These are called session tags. You can then use the session tags to control access to resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging Amazon Web Services STS Sessions</a> in the <i>IAM User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_tagKeyType">tagKeyType</h2>
<!-- backwards compatibility -->
<a id="schematagkeytype"></a>
<a id="schema_tagKeyType"></a>
<a id="tocStagkeytype"></a>
<a id="tocstagkeytype"></a>

```json
"string"
```

<h2 id="tocS_ProvidedContext">ProvidedContext</h2>
<!-- backwards compatibility -->
<a id="schemaprovidedcontext"></a>
<a id="schema_ProvidedContext"></a>
<a id="tocSprovidedcontext"></a>
<a id="tocsprovidedcontext"></a>

```json
{
  "ProviderArn": {},
  "ContextAssertion": {}
}
```

Reserved for future use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProviderArn|object|false|none|none|
|ContextAssertion|object|false|none|none|

<h2 id="tocS_MalformedPolicyDocumentException">MalformedPolicyDocumentException</h2>
<!-- backwards compatibility -->
<a id="schemamalformedpolicydocumentexception"></a>
<a id="schema_MalformedPolicyDocumentException"></a>
<a id="tocSmalformedpolicydocumentexception"></a>
<a id="tocsmalformedpolicydocumentexception"></a>

```json
null
```

<h2 id="tocS_PackedPolicyTooLargeException">PackedPolicyTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemapackedpolicytoolargeexception"></a>
<a id="schema_PackedPolicyTooLargeException"></a>
<a id="tocSpackedpolicytoolargeexception"></a>
<a id="tocspackedpolicytoolargeexception"></a>

```json
null
```

<h2 id="tocS_RegionDisabledException">RegionDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaregiondisabledexception"></a>
<a id="schema_RegionDisabledException"></a>
<a id="tocSregiondisabledexception"></a>
<a id="tocsregiondisabledexception"></a>

```json
null
```

<h2 id="tocS_ExpiredTokenException">ExpiredTokenException</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredtokenexception"></a>
<a id="schema_ExpiredTokenException"></a>
<a id="tocSexpiredtokenexception"></a>
<a id="tocsexpiredtokenexception"></a>

```json
null
```

<h2 id="tocS_AssumeRoleWithSAMLResponse">AssumeRoleWithSAMLResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolewithsamlresponse"></a>
<a id="schema_AssumeRoleWithSAMLResponse"></a>
<a id="tocSassumerolewithsamlresponse"></a>
<a id="tocsassumerolewithsamlresponse"></a>

```json
{
  "AssumedRoleUser": {
    "Arn": "arn:aws:sts::123456789012:assumed-role/TestSaml",
    "AssumedRoleId": "ARO456EXAMPLE789:TestSaml"
  },
  "Audience": "https://signin.aws.amazon.com/saml",
  "Credentials": {
    "AccessKeyId": "ASIAV3ZUEFP6EXAMPLE",
    "Expiration": "2019-11-01T20:26:47Z",
    "SecretAccessKey": "8P+SQvWIuLnKhh8d++jpw0nNmQRBZvNEXAMPLEKEY",
    "SessionToken": "IQoJb3JpZ2luX2VjEOz////////////////////wEXAMPLEtMSJHMEUCIDoKK3JH9uGQE1z0sINr5M4jk+Na8KHDcCYRVjJCZEvOAiEA3OvJGtw1EcViOleS2vhs8VdCKFJQWPQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
  },
  "Issuer": "https://integ.example.com/idp/shibboleth",
  "NameQualifier": "SbdGOnUkh1i4+EXAMPLExL/jEvs=",
  "PackedPolicySize": 6,
  "Subject": "SamlExample",
  "SubjectType": "transient"
}
```

Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|AssumedRoleUser|object|false|none|none|
|PackedPolicySize|object|false|none|none|
|Subject|object|false|none|none|
|SubjectType|object|false|none|none|
|Issuer|object|false|none|none|
|Audience|object|false|none|none|
|NameQualifier|object|false|none|none|
|SourceIdentity|object|false|none|none|

<h2 id="tocS_IDPRejectedClaimException">IDPRejectedClaimException</h2>
<!-- backwards compatibility -->
<a id="schemaidprejectedclaimexception"></a>
<a id="schema_IDPRejectedClaimException"></a>
<a id="tocSidprejectedclaimexception"></a>
<a id="tocsidprejectedclaimexception"></a>

```json
null
```

<h2 id="tocS_InvalidIdentityTokenException">InvalidIdentityTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalididentitytokenexception"></a>
<a id="schema_InvalidIdentityTokenException"></a>
<a id="tocSinvalididentitytokenexception"></a>
<a id="tocsinvalididentitytokenexception"></a>

```json
null
```

<h2 id="tocS_AssumeRoleWithWebIdentityResponse">AssumeRoleWithWebIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolewithwebidentityresponse"></a>
<a id="schema_AssumeRoleWithWebIdentityResponse"></a>
<a id="tocSassumerolewithwebidentityresponse"></a>
<a id="tocsassumerolewithwebidentityresponse"></a>

```json
{
  "AssumedRoleUser": {
    "Arn": "arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1",
    "AssumedRoleId": "AROACLKWSDQRAOEXAMPLE:app1"
  },
  "Audience": "client.5498841531868486423.1548@apps.example.com",
  "Credentials": {
    "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "Expiration": "2014-10-24T23:00:23Z",
    "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
    "SessionToken": "AQoDYXdzEE0a8ANXXXXXXXXNO1ewxE5TijQyp+IEXAMPLE"
  },
  "PackedPolicySize": 123,
  "Provider": "www.amazon.com",
  "SubjectFromWebIdentityToken": "amzn1.account.AF6RHO7KZU5XRVQJGXK6HEXAMPLE"
}
```

Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|SubjectFromWebIdentityToken|object|false|none|none|
|AssumedRoleUser|object|false|none|none|
|PackedPolicySize|object|false|none|none|
|Provider|object|false|none|none|
|Audience|object|false|none|none|
|SourceIdentity|object|false|none|none|

<h2 id="tocS_IDPCommunicationErrorException">IDPCommunicationErrorException</h2>
<!-- backwards compatibility -->
<a id="schemaidpcommunicationerrorexception"></a>
<a id="schema_IDPCommunicationErrorException"></a>
<a id="tocSidpcommunicationerrorexception"></a>
<a id="tocsidpcommunicationerrorexception"></a>

```json
null
```

<h2 id="tocS_DecodeAuthorizationMessageResponse">DecodeAuthorizationMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadecodeauthorizationmessageresponse"></a>
<a id="schema_DecodeAuthorizationMessageResponse"></a>
<a id="tocSdecodeauthorizationmessageresponse"></a>
<a id="tocsdecodeauthorizationmessageresponse"></a>

```json
{
  "DecodedMessage": "{\"allowed\": \"false\",\"explicitDeny\": \"false\",\"matchedStatements\": \"\",\"failures\": \"\",\"context\": {\"principal\": {\"id\": \"AIDACKCEVSQ6C2EXAMPLE\",\"name\": \"Bob\",\"arn\": \"arn:aws:iam::123456789012:user/Bob\"},\"action\": \"ec2:StopInstances\",\"resource\": \"arn:aws:ec2:us-east-1:123456789012:instance/i-dd01c9bd\",\"conditions\": [{\"item\": {\"key\": \"ec2:Tenancy\",\"values\": [\"default\"]},{\"item\": {\"key\": \"ec2:ResourceTag/elasticbeanstalk:environment-name\",\"values\": [\"Default-Environment\"]}},(Additional items ...)]}}"
}
```

A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an Amazon Web Services request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DecodedMessage|object|false|none|none|

<h2 id="tocS_InvalidAuthorizationMessageException">InvalidAuthorizationMessageException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidauthorizationmessageexception"></a>
<a id="schema_InvalidAuthorizationMessageException"></a>
<a id="tocSinvalidauthorizationmessageexception"></a>
<a id="tocsinvalidauthorizationmessageexception"></a>

```json
null
```

<h2 id="tocS_GetAccessKeyInfoResponse">GetAccessKeyInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesskeyinforesponse"></a>
<a id="schema_GetAccessKeyInfoResponse"></a>
<a id="tocSgetaccesskeyinforesponse"></a>
<a id="tocsgetaccesskeyinforesponse"></a>

```json
{
  "Account": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|

<h2 id="tocS_GetCallerIdentityResponse">GetCallerIdentityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcalleridentityresponse"></a>
<a id="schema_GetCallerIdentityResponse"></a>
<a id="tocSgetcalleridentityresponse"></a>
<a id="tocsgetcalleridentityresponse"></a>

```json
{
  "Account": "123456789012",
  "Arn": "arn:aws:sts::123456789012:federated-user/my-federated-user-name",
  "UserId": "123456789012:my-federated-user-name"
}
```

Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UserId|object|false|none|none|
|Account|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_GetFederationTokenResponse">GetFederationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfederationtokenresponse"></a>
<a id="schema_GetFederationTokenResponse"></a>
<a id="tocSgetfederationtokenresponse"></a>
<a id="tocsgetfederationtokenresponse"></a>

```json
{
  "Credentials": {
    "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "Expiration": "2011-07-15T23:28:33.359Z",
    "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
    "SessionToken": "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
  },
  "FederatedUser": {
    "Arn": "arn:aws:sts::123456789012:federated-user/Bob",
    "FederatedUserId": "123456789012:Bob"
  },
  "PackedPolicySize": 8
}
```

Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|
|FederatedUser|object|false|none|none|
|PackedPolicySize|object|false|none|none|

<h2 id="tocS_GetSessionTokenResponse">GetSessionTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsessiontokenresponse"></a>
<a id="schema_GetSessionTokenResponse"></a>
<a id="tocSgetsessiontokenresponse"></a>
<a id="tocsgetsessiontokenresponse"></a>

```json
{
  "Credentials": {
    "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "Expiration": "2011-07-11T19:55:29.611Z",
    "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
    "SessionToken": "AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtpZ3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE"
  }
}
```

Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Credentials|object|false|none|none|

<h2 id="tocS_arnType">arnType</h2>
<!-- backwards compatibility -->
<a id="schemaarntype"></a>
<a id="schema_arnType"></a>
<a id="tocSarntype"></a>
<a id="tocsarntype"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_roleSessionNameType">roleSessionNameType</h2>
<!-- backwards compatibility -->
<a id="schemarolesessionnametype"></a>
<a id="schema_roleSessionNameType"></a>
<a id="tocSrolesessionnametype"></a>
<a id="tocsrolesessionnametype"></a>

```json
"string"
```

<h2 id="tocS_policyDescriptorListType">policyDescriptorListType</h2>
<!-- backwards compatibility -->
<a id="schemapolicydescriptorlisttype"></a>
<a id="schema_policyDescriptorListType"></a>
<a id="tocSpolicydescriptorlisttype"></a>
<a id="tocspolicydescriptorlisttype"></a>

```json
[
  {
    "arn": {}
  }
]
```

<h2 id="tocS_sessionPolicyDocumentType">sessionPolicyDocumentType</h2>
<!-- backwards compatibility -->
<a id="schemasessionpolicydocumenttype"></a>
<a id="schema_sessionPolicyDocumentType"></a>
<a id="tocSsessionpolicydocumenttype"></a>
<a id="tocssessionpolicydocumenttype"></a>

```json
"string"
```

<h2 id="tocS_roleDurationSecondsType">roleDurationSecondsType</h2>
<!-- backwards compatibility -->
<a id="schemaroledurationsecondstype"></a>
<a id="schema_roleDurationSecondsType"></a>
<a id="tocSroledurationsecondstype"></a>
<a id="tocsroledurationsecondstype"></a>

```json
900
```

<h2 id="tocS_tagListType">tagListType</h2>
<!-- backwards compatibility -->
<a id="schemataglisttype"></a>
<a id="schema_tagListType"></a>
<a id="tocStaglisttype"></a>
<a id="tocstaglisttype"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_tagKeyListType">tagKeyListType</h2>
<!-- backwards compatibility -->
<a id="schematagkeylisttype"></a>
<a id="schema_tagKeyListType"></a>
<a id="tocStagkeylisttype"></a>
<a id="tocstagkeylisttype"></a>

```json
[
  "string"
]
```

<h2 id="tocS_externalIdType">externalIdType</h2>
<!-- backwards compatibility -->
<a id="schemaexternalidtype"></a>
<a id="schema_externalIdType"></a>
<a id="tocSexternalidtype"></a>
<a id="tocsexternalidtype"></a>

```json
"string"
```

<h2 id="tocS_serialNumberType">serialNumberType</h2>
<!-- backwards compatibility -->
<a id="schemaserialnumbertype"></a>
<a id="schema_serialNumberType"></a>
<a id="tocSserialnumbertype"></a>
<a id="tocsserialnumbertype"></a>

```json
"stringstr"
```

<h2 id="tocS_tokenCodeType">tokenCodeType</h2>
<!-- backwards compatibility -->
<a id="schematokencodetype"></a>
<a id="schema_tokenCodeType"></a>
<a id="tocStokencodetype"></a>
<a id="tocstokencodetype"></a>

```json
"string"
```

<h2 id="tocS_sourceIdentityType">sourceIdentityType</h2>
<!-- backwards compatibility -->
<a id="schemasourceidentitytype"></a>
<a id="schema_sourceIdentityType"></a>
<a id="tocSsourceidentitytype"></a>
<a id="tocssourceidentitytype"></a>

```json
"string"
```

<h2 id="tocS_ProvidedContextsListType">ProvidedContextsListType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidedcontextslisttype"></a>
<a id="schema_ProvidedContextsListType"></a>
<a id="tocSprovidedcontextslisttype"></a>
<a id="tocsprovidedcontextslisttype"></a>

```json
[
  {
    "ProviderArn": {},
    "ContextAssertion": {}
  }
]
```

<h2 id="tocS_AssumeRoleRequest">AssumeRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolerequest"></a>
<a id="schema_AssumeRoleRequest"></a>
<a id="tocSassumerolerequest"></a>
<a id="tocsassumerolerequest"></a>

```json
{
  "RoleArn": {},
  "RoleSessionName": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {},
  "Tags": {},
  "TransitiveTagKeys": {},
  "ExternalId": {},
  "SerialNumber": {},
  "TokenCode": {},
  "SourceIdentity": {},
  "ProvidedContexts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|RoleSessionName|object|true|none|none|
|PolicyArns|object|false|none|none|
|Policy|object|false|none|none|
|DurationSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TransitiveTagKeys|object|false|none|none|
|ExternalId|object|false|none|none|
|SerialNumber|object|false|none|none|
|TokenCode|object|false|none|none|
|SourceIdentity|object|false|none|none|
|ProvidedContexts|object|false|none|none|

<h2 id="tocS_Credentials">Credentials</h2>
<!-- backwards compatibility -->
<a id="schemacredentials"></a>
<a id="schema_Credentials"></a>
<a id="tocScredentials"></a>
<a id="tocscredentials"></a>

```json
{
  "AccessKeyId": {},
  "SecretAccessKey": {},
  "SessionToken": {},
  "Expiration": {}
}
```

Amazon Web Services credentials for API authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|true|none|none|
|SecretAccessKey|object|true|none|none|
|SessionToken|object|true|none|none|
|Expiration|object|true|none|none|

<h2 id="tocS_AssumedRoleUser">AssumedRoleUser</h2>
<!-- backwards compatibility -->
<a id="schemaassumedroleuser"></a>
<a id="schema_AssumedRoleUser"></a>
<a id="tocSassumedroleuser"></a>
<a id="tocsassumedroleuser"></a>

```json
{
  "AssumedRoleId": {},
  "Arn": {}
}
```

The identifiers for the temporary security credentials that the operation returns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssumedRoleId|object|true|none|none|
|Arn|object|true|none|none|

<h2 id="tocS_nonNegativeIntegerType">nonNegativeIntegerType</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativeintegertype"></a>
<a id="schema_nonNegativeIntegerType"></a>
<a id="tocSnonnegativeintegertype"></a>
<a id="tocsnonnegativeintegertype"></a>

```json
0
```

<h2 id="tocS_SAMLAssertionType">SAMLAssertionType</h2>
<!-- backwards compatibility -->
<a id="schemasamlassertiontype"></a>
<a id="schema_SAMLAssertionType"></a>
<a id="tocSsamlassertiontype"></a>
<a id="tocssamlassertiontype"></a>

```json
"password"
```

<h2 id="tocS_AssumeRoleWithSAMLRequest">AssumeRoleWithSAMLRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolewithsamlrequest"></a>
<a id="schema_AssumeRoleWithSAMLRequest"></a>
<a id="tocSassumerolewithsamlrequest"></a>
<a id="tocsassumerolewithsamlrequest"></a>

```json
{
  "RoleArn": {},
  "PrincipalArn": {},
  "SAMLAssertion": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|PrincipalArn|object|true|none|none|
|SAMLAssertion|object|true|none|none|
|PolicyArns|object|false|none|none|
|Policy|object|false|none|none|
|DurationSeconds|object|false|none|none|

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
"string"
```

<h2 id="tocS_SubjectType">SubjectType</h2>
<!-- backwards compatibility -->
<a id="schemasubjecttype"></a>
<a id="schema_SubjectType"></a>
<a id="tocSsubjecttype"></a>
<a id="tocssubjecttype"></a>

```json
"string"
```

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
"string"
```

<h2 id="tocS_Audience">Audience</h2>
<!-- backwards compatibility -->
<a id="schemaaudience"></a>
<a id="schema_Audience"></a>
<a id="tocSaudience"></a>
<a id="tocsaudience"></a>

```json
"string"
```

<h2 id="tocS_NameQualifier">NameQualifier</h2>
<!-- backwards compatibility -->
<a id="schemanamequalifier"></a>
<a id="schema_NameQualifier"></a>
<a id="tocSnamequalifier"></a>
<a id="tocsnamequalifier"></a>

```json
"string"
```

<h2 id="tocS_clientTokenType">clientTokenType</h2>
<!-- backwards compatibility -->
<a id="schemaclienttokentype"></a>
<a id="schema_clientTokenType"></a>
<a id="tocSclienttokentype"></a>
<a id="tocsclienttokentype"></a>

```json
"password"
```

<h2 id="tocS_urlType">urlType</h2>
<!-- backwards compatibility -->
<a id="schemaurltype"></a>
<a id="schema_urlType"></a>
<a id="tocSurltype"></a>
<a id="tocsurltype"></a>

```json
"string"
```

<h2 id="tocS_AssumeRoleWithWebIdentityRequest">AssumeRoleWithWebIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassumerolewithwebidentityrequest"></a>
<a id="schema_AssumeRoleWithWebIdentityRequest"></a>
<a id="tocSassumerolewithwebidentityrequest"></a>
<a id="tocsassumerolewithwebidentityrequest"></a>

```json
{
  "RoleArn": {},
  "RoleSessionName": {},
  "WebIdentityToken": {},
  "ProviderId": {},
  "PolicyArns": {},
  "Policy": {},
  "DurationSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleArn|object|true|none|none|
|RoleSessionName|object|true|none|none|
|WebIdentityToken|object|true|none|none|
|ProviderId|object|false|none|none|
|PolicyArns|object|false|none|none|
|Policy|object|false|none|none|
|DurationSeconds|object|false|none|none|

<h2 id="tocS_webIdentitySubjectType">webIdentitySubjectType</h2>
<!-- backwards compatibility -->
<a id="schemawebidentitysubjecttype"></a>
<a id="schema_webIdentitySubjectType"></a>
<a id="tocSwebidentitysubjecttype"></a>
<a id="tocswebidentitysubjecttype"></a>

```json
"string"
```

<h2 id="tocS_assumedRoleIdType">assumedRoleIdType</h2>
<!-- backwards compatibility -->
<a id="schemaassumedroleidtype"></a>
<a id="schema_assumedRoleIdType"></a>
<a id="tocSassumedroleidtype"></a>
<a id="tocsassumedroleidtype"></a>

```json
"string"
```

<h2 id="tocS_accessKeyIdType">accessKeyIdType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeyidtype"></a>
<a id="schema_accessKeyIdType"></a>
<a id="tocSaccesskeyidtype"></a>
<a id="tocsaccesskeyidtype"></a>

```json
"stringstringstri"
```

<h2 id="tocS_accessKeySecretType">accessKeySecretType</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeysecrettype"></a>
<a id="schema_accessKeySecretType"></a>
<a id="tocSaccesskeysecrettype"></a>
<a id="tocsaccesskeysecrettype"></a>

```json
"password"
```

<h2 id="tocS_tokenType">tokenType</h2>
<!-- backwards compatibility -->
<a id="schematokentype"></a>
<a id="schema_tokenType"></a>
<a id="tocStokentype"></a>
<a id="tocstokentype"></a>

```json
"string"
```

<h2 id="tocS_dateType">dateType</h2>
<!-- backwards compatibility -->
<a id="schemadatetype"></a>
<a id="schema_dateType"></a>
<a id="tocSdatetype"></a>
<a id="tocsdatetype"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_encodedMessageType">encodedMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaencodedmessagetype"></a>
<a id="schema_encodedMessageType"></a>
<a id="tocSencodedmessagetype"></a>
<a id="tocsencodedmessagetype"></a>

```json
"string"
```

<h2 id="tocS_DecodeAuthorizationMessageRequest">DecodeAuthorizationMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadecodeauthorizationmessagerequest"></a>
<a id="schema_DecodeAuthorizationMessageRequest"></a>
<a id="tocSdecodeauthorizationmessagerequest"></a>
<a id="tocsdecodeauthorizationmessagerequest"></a>

```json
{
  "EncodedMessage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncodedMessage|object|true|none|none|

<h2 id="tocS_decodedMessageType">decodedMessageType</h2>
<!-- backwards compatibility -->
<a id="schemadecodedmessagetype"></a>
<a id="schema_decodedMessageType"></a>
<a id="tocSdecodedmessagetype"></a>
<a id="tocsdecodedmessagetype"></a>

```json
"string"
```

<h2 id="tocS_federatedIdType">federatedIdType</h2>
<!-- backwards compatibility -->
<a id="schemafederatedidtype"></a>
<a id="schema_federatedIdType"></a>
<a id="tocSfederatedidtype"></a>
<a id="tocsfederatedidtype"></a>

```json
"string"
```

<h2 id="tocS_FederatedUser">FederatedUser</h2>
<!-- backwards compatibility -->
<a id="schemafederateduser"></a>
<a id="schema_FederatedUser"></a>
<a id="tocSfederateduser"></a>
<a id="tocsfederateduser"></a>

```json
{
  "FederatedUserId": {},
  "Arn": {}
}
```

Identifiers for the federated user that is associated with the credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FederatedUserId|object|true|none|none|
|Arn|object|true|none|none|

<h2 id="tocS_GetAccessKeyInfoRequest">GetAccessKeyInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesskeyinforequest"></a>
<a id="schema_GetAccessKeyInfoRequest"></a>
<a id="tocSgetaccesskeyinforequest"></a>
<a id="tocsgetaccesskeyinforequest"></a>

```json
{
  "AccessKeyId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessKeyId|object|true|none|none|

<h2 id="tocS_accountType">accountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_accountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"string"
```

<h2 id="tocS_GetCallerIdentityRequest">GetCallerIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcalleridentityrequest"></a>
<a id="schema_GetCallerIdentityRequest"></a>
<a id="tocSgetcalleridentityrequest"></a>
<a id="tocsgetcalleridentityrequest"></a>

```json
{}
```

<h2 id="tocS_userIdType">userIdType</h2>
<!-- backwards compatibility -->
<a id="schemauseridtype"></a>
<a id="schema_userIdType"></a>
<a id="tocSuseridtype"></a>
<a id="tocsuseridtype"></a>

```json
"string"
```

<h2 id="tocS_userNameType">userNameType</h2>
<!-- backwards compatibility -->
<a id="schemausernametype"></a>
<a id="schema_userNameType"></a>
<a id="tocSusernametype"></a>
<a id="tocsusernametype"></a>

```json
"string"
```

<h2 id="tocS_durationSecondsType">durationSecondsType</h2>
<!-- backwards compatibility -->
<a id="schemadurationsecondstype"></a>
<a id="schema_durationSecondsType"></a>
<a id="tocSdurationsecondstype"></a>
<a id="tocsdurationsecondstype"></a>

```json
900
```

<h2 id="tocS_GetFederationTokenRequest">GetFederationTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfederationtokenrequest"></a>
<a id="schema_GetFederationTokenRequest"></a>
<a id="tocSgetfederationtokenrequest"></a>
<a id="tocsgetfederationtokenrequest"></a>

```json
{
  "Name": {},
  "Policy": {},
  "PolicyArns": {},
  "DurationSeconds": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Policy|object|false|none|none|
|PolicyArns|object|false|none|none|
|DurationSeconds|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_GetSessionTokenRequest">GetSessionTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsessiontokenrequest"></a>
<a id="schema_GetSessionTokenRequest"></a>
<a id="tocSgetsessiontokenrequest"></a>
<a id="tocsgetsessiontokenrequest"></a>

```json
{
  "DurationSeconds": {},
  "SerialNumber": {},
  "TokenCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationSeconds|object|false|none|none|
|SerialNumber|object|false|none|none|
|TokenCode|object|false|none|none|

<h2 id="tocS_contextAssertionType">contextAssertionType</h2>
<!-- backwards compatibility -->
<a id="schemacontextassertiontype"></a>
<a id="schema_contextAssertionType"></a>
<a id="tocScontextassertiontype"></a>
<a id="tocscontextassertiontype"></a>

```json
"string"
```

<h2 id="tocS_tagValueType">tagValueType</h2>
<!-- backwards compatibility -->
<a id="schematagvaluetype"></a>
<a id="schema_tagValueType"></a>
<a id="tocStagvaluetype"></a>
<a id="tocstagvaluetype"></a>

```json
"string"
```
