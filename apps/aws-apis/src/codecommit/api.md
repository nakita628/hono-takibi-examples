<h1 id="aws-codecommit">AWS CodeCommit v2015-04-13</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p> </li> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object in a repository.</p> </li> <li> <p> <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p> </li> <li> <p> <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p> </li> <li> <p> <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p> </li> </ul> <p>Commits, by calling the following:</p> <ul> <li> <p> <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p> </li> <li> <p> <a>CreateCommit</a>, which creates a commit for changes to a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).</p> </li> </ul> <p>Merges, by calling the following:</p> <ul> <li> <p> <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p> </li> <li> <p> <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.</p> </li> <li> <p> <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.</p> </li> <li> <p> <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p> </li> <li> <p> <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p> </li> <li> <p> <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p> </li> <li> <p> <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p> </li> <li> <p> <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p> </li> <li> <p> <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.</p> </li> <li> <p> <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.</p> </li> <li> <p> <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Approval rule templates, by calling the following:</p> <ul> <li> <p> <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.</p> </li> <li> <p> <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.</p> </li> <li> <p> <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.</p> </li> <li> <p> <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.</p> </li> <li> <p> <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p> </li> <li> <p> <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.</p> </li> <li> <p> <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p> </li> <li> <p> <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p> </li> <li> <p> <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p> </li> <li> <p> <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p> </li> </ul> <p>Comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

Base URLs:

* <a href="http://codecommit.us-east-1.amazonaws.com">http://codecommit.us-east-1.amazonaws.com</a> - The CodeCommit multi-region endpoint

* <a href="https://codecommit.us-east-1.amazonaws.com">https://codecommit.us-east-1.amazonaws.com</a> - The CodeCommit multi-region endpoint

* <a href="http://codecommit.cn-north-1.amazonaws.com.cn">http://codecommit.cn-north-1.amazonaws.com.cn</a> - The CodeCommit endpoint for China (Beijing) and China (Ningxia)

* <a href="https://codecommit.cn-north-1.amazonaws.com.cn">https://codecommit.cn-north-1.amazonaws.com.cn</a> - The CodeCommit endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/codecommit/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-codecommit-default">Default</h1>

## AssociateApprovalRuleTemplateWithRepository

<a id="opIdAssociateApprovalRuleTemplateWithRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository' \
  -d '{
    "approvalRuleTemplateName": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository`

Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "repositoryName": {}
}
```

<h3 id="associateapprovalruletemplatewithrepository-parameters">Parameters</h3>

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
|body|body|[AssociateApprovalRuleTemplateWithRepositoryInput](#schemaassociateapprovalruletemplatewithrepositoryinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository|

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

> 491 Response

```json
null
```

<h3 id="associateapprovalruletemplatewithrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|MaximumRuleTemplatesAssociatedWithRepositoryException|[MaximumRuleTemplatesAssociatedWithRepositoryException](#schemamaximumruletemplatesassociatedwithrepositoryexception)|
|484|484|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|485|485|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|486|486|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|487|487|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|488|488|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|489|489|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|490|490|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|491|491|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateApprovalRuleTemplateWithRepositories

<a id="opIdBatchAssociateApprovalRuleTemplateWithRepositories"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories' \
  -d '{
    "approvalRuleTemplateName": {},
    "repositoryNames": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories`

Creates an association between an approval rule template and one or more specified repositories. 

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "repositoryNames": {}
}
```

<h3 id="batchassociateapprovalruletemplatewithrepositories-parameters">Parameters</h3>

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
|body|body|[BatchAssociateApprovalRuleTemplateWithRepositoriesInput](#schemabatchassociateapprovalruletemplatewithrepositoriesinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» repositoryNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories|

> Example responses

> 200 Response

```json
{
  "associatedRepositoryNames": {},
  "errors": {}
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

<h3 id="batchassociateapprovalruletemplatewithrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateApprovalRuleTemplateWithRepositoriesOutput](#schemabatchassociateapprovalruletemplatewithrepositoriesoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|RepositoryNamesRequiredException|[RepositoryNamesRequiredException](#schemarepositorynamesrequiredexception)|
|484|484|MaximumRepositoryNamesExceededException|[MaximumRepositoryNamesExceededException](#schemamaximumrepositorynamesexceededexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDescribeMergeConflicts

<a id="opIdBatchDescribeMergeConflicts"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.BatchDescribeMergeConflicts' \
  -d '{
    "repositoryName": {},
    "destinationCommitSpecifier": {},
    "sourceCommitSpecifier": {},
    "mergeOption": {},
    "maxMergeHunks": {},
    "maxConflictFiles": {},
    "filePaths": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts`

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.

> Body parameter

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "maxMergeHunks": {},
  "maxConflictFiles": {},
  "filePaths": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

<h3 id="batchdescribemergeconflicts-parameters">Parameters</h3>

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
|body|body|[BatchDescribeMergeConflictsInput](#schemabatchdescribemergeconflictsinput)|true|none|
|» repositoryName|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» mergeOption|body|object|true|none|
|» maxMergeHunks|body|object|false|none|
|» maxConflictFiles|body|object|false|none|
|» filePaths|body|object|false|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.BatchDescribeMergeConflicts|

> Example responses

> 200 Response

```json
{
  "conflicts": {},
  "nextToken": {},
  "errors": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

<h3 id="batchdescribemergeconflicts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDescribeMergeConflictsOutput](#schemabatchdescribemergeconflictsoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|MergeOptionRequiredException|[MergeOptionRequiredException](#schemamergeoptionrequiredexception)|
|484|484|InvalidMergeOptionException|[InvalidMergeOptionException](#schemainvalidmergeoptionexception)|
|485|485|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|486|486|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|487|487|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|488|488|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|489|489|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|490|490|InvalidMaxConflictFilesException|[InvalidMaxConflictFilesException](#schemainvalidmaxconflictfilesexception)|
|491|491|InvalidMaxMergeHunksException|[InvalidMaxMergeHunksException](#schemainvalidmaxmergehunksexception)|
|492|492|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|493|493|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|494|494|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|495|495|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|496|496|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|497|497|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|498|498|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|499|499|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|500|Internal Server Error|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateApprovalRuleTemplateFromRepositories

<a id="opIdBatchDisassociateApprovalRuleTemplateFromRepositories"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories' \
  -d '{
    "approvalRuleTemplateName": {},
    "repositoryNames": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories`

Removes the association between an approval rule template and one or more specified repositories. 

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "repositoryNames": {}
}
```

<h3 id="batchdisassociateapprovalruletemplatefromrepositories-parameters">Parameters</h3>

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
|body|body|[BatchDisassociateApprovalRuleTemplateFromRepositoriesInput](#schemabatchdisassociateapprovalruletemplatefromrepositoriesinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» repositoryNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories|

> Example responses

> 200 Response

```json
{
  "disassociatedRepositoryNames": {},
  "errors": {}
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

<h3 id="batchdisassociateapprovalruletemplatefromrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput](#schemabatchdisassociateapprovalruletemplatefromrepositoriesoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|RepositoryNamesRequiredException|[RepositoryNamesRequiredException](#schemarepositorynamesrequiredexception)|
|484|484|MaximumRepositoryNamesExceededException|[MaximumRepositoryNamesExceededException](#schemamaximumrepositorynamesexceededexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetCommits

<a id="opIdBatchGetCommits"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.BatchGetCommits' \
  -d '{
    "commitIds": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.BatchGetCommits`

Returns information about the contents of one or more commits in a repository.

> Body parameter

```json
{
  "commitIds": {},
  "repositoryName": {}
}
```

<h3 id="batchgetcommits-parameters">Parameters</h3>

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
|body|body|[BatchGetCommitsInput](#schemabatchgetcommitsinput)|true|none|
|» commitIds|body|object|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.BatchGetCommits|

> Example responses

> 200 Response

```json
{
  "commits": {},
  "errors": {}
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

<h3 id="batchgetcommits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetCommitsOutput](#schemabatchgetcommitsoutput)|
|480|480|CommitIdsListRequiredException|[CommitIdsListRequiredException](#schemacommitidslistrequiredexception)|
|481|481|CommitIdsLimitExceededException|[CommitIdsLimitExceededException](#schemacommitidslimitexceededexception)|
|482|482|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|483|483|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|484|484|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetRepositories

<a id="opIdBatchGetRepositories"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.BatchGetRepositories' \
  -d '{
    "repositoryNames": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories`

<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

> Body parameter

```json
{
  "repositoryNames": {}
}
```

<h3 id="batchgetrepositories-parameters">Parameters</h3>

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
|body|body|[BatchGetRepositoriesInput](#schemabatchgetrepositoriesinput)|true|none|
|» repositoryNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.BatchGetRepositories|

> Example responses

> 200 Response

```json
{
  "repositories": {},
  "repositoriesNotFound": {}
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

<h3 id="batchgetrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetRepositoriesOutput](#schemabatchgetrepositoriesoutput)|
|480|480|RepositoryNamesRequiredException|[RepositoryNamesRequiredException](#schemarepositorynamesrequiredexception)|
|481|481|MaximumRepositoryNamesExceededException|[MaximumRepositoryNamesExceededException](#schemamaximumrepositorynamesexceededexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateApprovalRuleTemplate

<a id="opIdCreateApprovalRuleTemplate"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreateApprovalRuleTemplate' \
  -d '{
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateContent": {},
    "approvalRuleTemplateDescription": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate`

Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "approvalRuleTemplateContent": {},
  "approvalRuleTemplateDescription": {}
}
```

<h3 id="createapprovalruletemplate-parameters">Parameters</h3>

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
|body|body|[CreateApprovalRuleTemplateInput](#schemacreateapprovalruletemplateinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» approvalRuleTemplateContent|body|object|true|none|
|» approvalRuleTemplateDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreateApprovalRuleTemplate|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
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

<h3 id="createapprovalruletemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateApprovalRuleTemplateOutput](#schemacreateapprovalruletemplateoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateNameAlreadyExistsException|[ApprovalRuleTemplateNameAlreadyExistsException](#schemaapprovalruletemplatenamealreadyexistsexception)|
|483|483|ApprovalRuleTemplateContentRequiredException|[ApprovalRuleTemplateContentRequiredException](#schemaapprovalruletemplatecontentrequiredexception)|
|484|484|InvalidApprovalRuleTemplateContentException|[InvalidApprovalRuleTemplateContentException](#schemainvalidapprovalruletemplatecontentexception)|
|485|485|InvalidApprovalRuleTemplateDescriptionException|[InvalidApprovalRuleTemplateDescriptionException](#schemainvalidapprovalruletemplatedescriptionexception)|
|486|486|NumberOfRuleTemplatesExceededException|[NumberOfRuleTemplatesExceededException](#schemanumberofruletemplatesexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBranch

<a id="opIdCreateBranch"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreateBranch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreateBranch' \
  -d '{
    "repositoryName": {},
    "branchName": {},
    "commitId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreateBranch`

<p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {},
  "commitId": {}
}
```

<h3 id="createbranch-parameters">Parameters</h3>

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
|body|body|[CreateBranchInput](#schemacreatebranchinput)|true|none|
|» repositoryName|body|object|true|none|
|» branchName|body|object|true|none|
|» commitId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreateBranch|

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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="createbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|484|484|BranchNameExistsException|[BranchNameExistsException](#schemabranchnameexistsexception)|
|485|485|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|486|486|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|487|487|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|488|488|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|489|489|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|490|490|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|491|491|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|492|492|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|493|493|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCommit

<a id="opIdCreateCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreateCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreateCommit' \
  -d '{
    "repositoryName": {},
    "branchName": {},
    "parentCommitId": {},
    "authorName": {},
    "email": {},
    "commitMessage": {},
    "keepEmptyFolders": {},
    "putFiles": {},
    "deleteFiles": {},
    "setFileModes": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreateCommit`

Creates a commit for a repository on the tip of a specified branch.

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {},
  "parentCommitId": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "putFiles": {},
  "deleteFiles": {},
  "setFileModes": {}
}
```

<h3 id="createcommit-parameters">Parameters</h3>

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
|body|body|[CreateCommitInput](#schemacreatecommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» branchName|body|object|true|none|
|» parentCommitId|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» commitMessage|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» putFiles|body|object|false|none|
|» deleteFiles|body|object|false|none|
|» setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreateCommit|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "treeId": {},
  "filesAdded": {},
  "filesUpdated": {},
  "filesDeleted": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

> 516 Response

```json
null
```

> 517 Response

```json
null
```

<h3 id="createcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateCommitOutput](#schemacreatecommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|ParentCommitIdRequiredException|[ParentCommitIdRequiredException](#schemaparentcommitidrequiredexception)|
|484|484|InvalidParentCommitIdException|[InvalidParentCommitIdException](#schemainvalidparentcommitidexception)|
|485|485|ParentCommitDoesNotExistException|[ParentCommitDoesNotExistException](#schemaparentcommitdoesnotexistexception)|
|486|486|ParentCommitIdOutdatedException|[ParentCommitIdOutdatedException](#schemaparentcommitidoutdatedexception)|
|487|487|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|488|488|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|489|489|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|490|490|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|491|491|FileEntryRequiredException|[FileEntryRequiredException](#schemafileentryrequiredexception)|
|492|492|MaximumFileEntriesExceededException|[MaximumFileEntriesExceededException](#schemamaximumfileentriesexceededexception)|
|493|493|PutFileEntryConflictException|[PutFileEntryConflictException](#schemaputfileentryconflictexception)|
|494|494|SourceFileOrContentRequiredException|[SourceFileOrContentRequiredException](#schemasourcefileorcontentrequiredexception)|
|495|495|FileContentAndSourceFileSpecifiedException|[FileContentAndSourceFileSpecifiedException](#schemafilecontentandsourcefilespecifiedexception)|
|496|496|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|497|497|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|498|498|SamePathRequestException|[SamePathRequestException](#schemasamepathrequestexception)|
|499|499|FileDoesNotExistException|[FileDoesNotExistException](#schemafiledoesnotexistexception)|
|500|Internal Server Error|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|501|Not Implemented|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|502|Bad Gateway|InvalidDeletionParameterException|[InvalidDeletionParameterException](#schemainvaliddeletionparameterexception)|
|503|Service Unavailable|RestrictedSourceFileException|[RestrictedSourceFileException](#schemarestrictedsourcefileexception)|
|504|Gateway Timeout|FileModeRequiredException|[FileModeRequiredException](#schemafilemoderequiredexception)|
|505|HTTP Version Not Supported|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|506|Variant Also Negotiates|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|507|Insufficient Storage|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|508|Loop Detected|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|509|Bandwidth Limit Exceeded|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|510|Not Extended|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|511|Network Authentication Required|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|512|512|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|513|513|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|514|514|NoChangeException|[NoChangeException](#schemanochangeexception)|
|515|515|FileNameConflictsWithDirectoryNameException|[FileNameConflictsWithDirectoryNameException](#schemafilenameconflictswithdirectorynameexception)|
|516|516|DirectoryNameConflictsWithFileNameException|[DirectoryNameConflictsWithFileNameException](#schemadirectorynameconflictswithfilenameexception)|
|517|517|FilePathConflictsWithSubmodulePathException|[FilePathConflictsWithSubmodulePathException](#schemafilepathconflictswithsubmodulepathexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePullRequest

<a id="opIdCreatePullRequest"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreatePullRequest' \
  -d '{
    "title": {},
    "description": {},
    "targets": {},
    "clientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreatePullRequest`

Creates a pull request in the specified repository.

> Body parameter

```json
{
  "title": {},
  "description": {},
  "targets": {},
  "clientRequestToken": {}
}
```

<h3 id="createpullrequest-parameters">Parameters</h3>

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
|body|body|[CreatePullRequestInput](#schemacreatepullrequestinput)|true|none|
|» title|body|object|true|none|
|» description|body|object|false|none|
|» targets|body|object|true|none|
|» clientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreatePullRequest|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

<h3 id="createpullrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePullRequestOutput](#schemacreatepullrequestoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|488|488|ClientRequestTokenRequiredException|[ClientRequestTokenRequiredException](#schemaclientrequesttokenrequiredexception)|
|489|489|InvalidClientRequestTokenException|[InvalidClientRequestTokenException](#schemainvalidclientrequesttokenexception)|
|490|490|IdempotencyParameterMismatchException|[IdempotencyParameterMismatchException](#schemaidempotencyparametermismatchexception)|
|491|491|ReferenceNameRequiredException|[ReferenceNameRequiredException](#schemareferencenamerequiredexception)|
|492|492|InvalidReferenceNameException|[InvalidReferenceNameException](#schemainvalidreferencenameexception)|
|493|493|ReferenceDoesNotExistException|[ReferenceDoesNotExistException](#schemareferencedoesnotexistexception)|
|494|494|ReferenceTypeNotSupportedException|[ReferenceTypeNotSupportedException](#schemareferencetypenotsupportedexception)|
|495|495|TitleRequiredException|[TitleRequiredException](#schematitlerequiredexception)|
|496|496|InvalidTitleException|[InvalidTitleException](#schemainvalidtitleexception)|
|497|497|InvalidDescriptionException|[InvalidDescriptionException](#schemainvaliddescriptionexception)|
|498|498|TargetsRequiredException|[TargetsRequiredException](#schematargetsrequiredexception)|
|499|499|InvalidTargetsException|[InvalidTargetsException](#schemainvalidtargetsexception)|
|500|Internal Server Error|TargetRequiredException|[TargetRequiredException](#schematargetrequiredexception)|
|501|Not Implemented|InvalidTargetException|[InvalidTargetException](#schemainvalidtargetexception)|
|502|Bad Gateway|MultipleRepositoriesInPullRequestException|[MultipleRepositoriesInPullRequestException](#schemamultiplerepositoriesinpullrequestexception)|
|503|Service Unavailable|MaximumOpenPullRequestsExceededException|[MaximumOpenPullRequestsExceededException](#schemamaximumopenpullrequestsexceededexception)|
|504|Gateway Timeout|SourceAndDestinationAreSameException|[SourceAndDestinationAreSameException](#schemasourceanddestinationaresameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePullRequestApprovalRule

<a id="opIdCreatePullRequestApprovalRule"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreatePullRequestApprovalRule' \
  -d '{
    "pullRequestId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule`

Creates an approval rule for a pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "approvalRuleName": {},
  "approvalRuleContent": {}
}
```

<h3 id="createpullrequestapprovalrule-parameters">Parameters</h3>

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
|body|body|[CreatePullRequestApprovalRuleInput](#schemacreatepullrequestapprovalruleinput)|true|none|
|» pullRequestId|body|object|true|none|
|» approvalRuleName|body|object|true|none|
|» approvalRuleContent|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreatePullRequestApprovalRule|

> Example responses

> 200 Response

```json
{
  "approvalRule": {
    "approvalRuleId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {},
    "originApprovalRuleTemplate": {
      "approvalRuleTemplateId": {},
      "approvalRuleTemplateName": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="createpullrequestapprovalrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePullRequestApprovalRuleOutput](#schemacreatepullrequestapprovalruleoutput)|
|480|480|ApprovalRuleNameRequiredException|[ApprovalRuleNameRequiredException](#schemaapprovalrulenamerequiredexception)|
|481|481|InvalidApprovalRuleNameException|[InvalidApprovalRuleNameException](#schemainvalidapprovalrulenameexception)|
|482|482|ApprovalRuleNameAlreadyExistsException|[ApprovalRuleNameAlreadyExistsException](#schemaapprovalrulenamealreadyexistsexception)|
|483|483|ApprovalRuleContentRequiredException|[ApprovalRuleContentRequiredException](#schemaapprovalrulecontentrequiredexception)|
|484|484|InvalidApprovalRuleContentException|[InvalidApprovalRuleContentException](#schemainvalidapprovalrulecontentexception)|
|485|485|NumberOfRulesExceededException|[NumberOfRulesExceededException](#schemanumberofrulesexceededexception)|
|486|486|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|487|487|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|488|488|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|489|489|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|490|490|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|491|491|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|492|492|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|493|493|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|494|494|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRepository

<a id="opIdCreateRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreateRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreateRepository' \
  -d '{
    "repositoryName": {},
    "repositoryDescription": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreateRepository`

Creates a new, empty repository.

> Body parameter

```json
{
  "repositoryName": {},
  "repositoryDescription": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createrepository-parameters">Parameters</h3>

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
|body|body|[CreateRepositoryInput](#schemacreaterepositoryinput)|true|none|
|» repositoryName|body|object|true|none|
|» repositoryDescription|body|object|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreateRepository|

> Example responses

> 200 Response

```json
{
  "repositoryMetadata": {
    "accountId": {},
    "repositoryId": {},
    "repositoryName": {},
    "repositoryDescription": {},
    "defaultBranch": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "cloneUrlHttp": {},
    "cloneUrlSsh": {},
    "Arn": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="createrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRepositoryOutput](#schemacreaterepositoryoutput)|
|480|480|RepositoryNameExistsException|[RepositoryNameExistsException](#schemarepositorynameexistsexception)|
|481|481|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|InvalidRepositoryDescriptionException|[InvalidRepositoryDescriptionException](#schemainvalidrepositorydescriptionexception)|
|484|484|RepositoryLimitExceededException|[RepositoryLimitExceededException](#schemarepositorylimitexceededexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|490|490|InvalidTagsMapException|[InvalidTagsMapException](#schemainvalidtagsmapexception)|
|491|491|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|492|492|InvalidSystemTagUsageException|[InvalidSystemTagUsageException](#schemainvalidsystemtagusageexception)|
|493|493|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateUnreferencedMergeCommit

<a id="opIdCreateUnreferencedMergeCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.CreateUnreferencedMergeCommit' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "mergeOption": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "authorName": {},
    "email": {},
    "commitMessage": {},
    "keepEmptyFolders": {},
    "conflictResolution": {
      "replaceContents": {},
      "deleteFiles": {},
      "setFileModes": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit`

<p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "mergeOption": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

<h3 id="createunreferencedmergecommit-parameters">Parameters</h3>

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
|body|body|[CreateUnreferencedMergeCommitInput](#schemacreateunreferencedmergecommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» mergeOption|body|object|true|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» commitMessage|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» conflictResolution|body|object|false|none|
|» » replaceContents|body|object|false|none|
|» » deleteFiles|body|object|false|none|
|» » setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.CreateUnreferencedMergeCommit|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "treeId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

<h3 id="createunreferencedmergecommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateUnreferencedMergeCommitOutput](#schemacreateunreferencedmergecommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|484|484|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|485|485|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|486|486|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|487|487|MergeOptionRequiredException|[MergeOptionRequiredException](#schemamergeoptionrequiredexception)|
|488|488|InvalidMergeOptionException|[InvalidMergeOptionException](#schemainvalidmergeoptionexception)|
|489|489|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|490|490|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|491|491|InvalidConflictResolutionException|[InvalidConflictResolutionException](#schemainvalidconflictresolutionexception)|
|492|492|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|493|493|MaximumConflictResolutionEntriesExceededException|[MaximumConflictResolutionEntriesExceededException](#schemamaximumconflictresolutionentriesexceededexception)|
|494|494|MultipleConflictResolutionEntriesException|[MultipleConflictResolutionEntriesException](#schemamultipleconflictresolutionentriesexception)|
|495|495|ReplacementTypeRequiredException|[ReplacementTypeRequiredException](#schemareplacementtyperequiredexception)|
|496|496|InvalidReplacementTypeException|[InvalidReplacementTypeException](#schemainvalidreplacementtypeexception)|
|497|497|ReplacementContentRequiredException|[ReplacementContentRequiredException](#schemareplacementcontentrequiredexception)|
|498|498|InvalidReplacementContentException|[InvalidReplacementContentException](#schemainvalidreplacementcontentexception)|
|499|499|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|500|Internal Server Error|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|501|Not Implemented|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|502|Bad Gateway|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|503|Service Unavailable|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|504|Gateway Timeout|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|505|HTTP Version Not Supported|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|506|Variant Also Negotiates|FileModeRequiredException|[FileModeRequiredException](#schemafilemoderequiredexception)|
|507|Insufficient Storage|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|508|Loop Detected|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|509|Bandwidth Limit Exceeded|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|510|Not Extended|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|511|Network Authentication Required|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|512|512|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|513|513|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|514|514|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|515|515|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteApprovalRuleTemplate

<a id="opIdDeleteApprovalRuleTemplate"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeleteApprovalRuleTemplate' \
  -d '{
    "approvalRuleTemplateName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate`

Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.

> Body parameter

```json
{
  "approvalRuleTemplateName": {}
}
```

<h3 id="deleteapprovalruletemplate-parameters">Parameters</h3>

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
|body|body|[DeleteApprovalRuleTemplateInput](#schemadeleteapprovalruletemplateinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeleteApprovalRuleTemplate|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplateId": {}
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

<h3 id="deleteapprovalruletemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteApprovalRuleTemplateOutput](#schemadeleteapprovalruletemplateoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateInUseException|[ApprovalRuleTemplateInUseException](#schemaapprovalruletemplateinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBranch

<a id="opIdDeleteBranch"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeleteBranch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeleteBranch' \
  -d '{
    "repositoryName": {},
    "branchName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeleteBranch`

Deletes a branch from a repository, unless that branch is the default branch for the repository. 

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {}
}
```

<h3 id="deletebranch-parameters">Parameters</h3>

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
|body|body|[DeleteBranchInput](#schemadeletebranchinput)|true|none|
|» repositoryName|body|object|true|none|
|» branchName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeleteBranch|

> Example responses

> 200 Response

```json
{
  "deletedBranch": {
    "branchName": {},
    "commitId": {}
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

<h3 id="deletebranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteBranchOutput](#schemadeletebranchoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|484|484|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|485|485|DefaultBranchCannotBeDeletedException|[DefaultBranchCannotBeDeletedException](#schemadefaultbranchcannotbedeletedexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCommentContent

<a id="opIdDeleteCommentContent"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeleteCommentContent' \
  -d '{
    "commentId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent`

Deletes the content of a comment made on a change, file, or commit in a repository.

> Body parameter

```json
{
  "commentId": {}
}
```

<h3 id="deletecommentcontent-parameters">Parameters</h3>

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
|body|body|[DeleteCommentContentInput](#schemadeletecommentcontentinput)|true|none|
|» commentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeleteCommentContent|

> Example responses

> 200 Response

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

<h3 id="deletecommentcontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCommentContentOutput](#schemadeletecommentcontentoutput)|
|480|480|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|481|481|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|482|482|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|
|483|483|CommentDeletedException|[CommentDeletedException](#schemacommentdeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFile

<a id="opIdDeleteFile"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeleteFile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeleteFile' \
  -d '{
    "repositoryName": {},
    "branchName": {},
    "filePath": {},
    "parentCommitId": {},
    "keepEmptyFolders": {},
    "commitMessage": {},
    "name": {},
    "email": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeleteFile`

Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {},
  "filePath": {},
  "parentCommitId": {},
  "keepEmptyFolders": {},
  "commitMessage": {},
  "name": {},
  "email": {}
}
```

<h3 id="deletefile-parameters">Parameters</h3>

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
|body|body|[DeleteFileInput](#schemadeletefileinput)|true|none|
|» repositoryName|body|object|true|none|
|» branchName|body|object|true|none|
|» filePath|body|object|true|none|
|» parentCommitId|body|object|true|none|
|» keepEmptyFolders|body|object|false|none|
|» commitMessage|body|object|false|none|
|» name|body|object|false|none|
|» email|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeleteFile|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "blobId": {},
  "treeId": {},
  "filePath": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

<h3 id="deletefile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFileOutput](#schemadeletefileoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|ParentCommitIdRequiredException|[ParentCommitIdRequiredException](#schemaparentcommitidrequiredexception)|
|484|484|InvalidParentCommitIdException|[InvalidParentCommitIdException](#schemainvalidparentcommitidexception)|
|485|485|ParentCommitDoesNotExistException|[ParentCommitDoesNotExistException](#schemaparentcommitdoesnotexistexception)|
|486|486|ParentCommitIdOutdatedException|[ParentCommitIdOutdatedException](#schemaparentcommitidoutdatedexception)|
|487|487|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|488|488|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|489|489|FileDoesNotExistException|[FileDoesNotExistException](#schemafiledoesnotexistexception)|
|490|490|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|491|491|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|492|492|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|493|493|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|494|494|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|495|495|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|496|496|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|497|497|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|498|498|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|499|499|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|500|Internal Server Error|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|501|Not Implemented|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePullRequestApprovalRule

<a id="opIdDeletePullRequestApprovalRule"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeletePullRequestApprovalRule' \
  -d '{
    "pullRequestId": {},
    "approvalRuleName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule`

Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "approvalRuleName": {}
}
```

<h3 id="deletepullrequestapprovalrule-parameters">Parameters</h3>

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
|body|body|[DeletePullRequestApprovalRuleInput](#schemadeletepullrequestapprovalruleinput)|true|none|
|» pullRequestId|body|object|true|none|
|» approvalRuleName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeletePullRequestApprovalRule|

> Example responses

> 200 Response

```json
{
  "approvalRuleId": {}
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

> 491 Response

```json
null
```

<h3 id="deletepullrequestapprovalrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePullRequestApprovalRuleOutput](#schemadeletepullrequestapprovalruleoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|484|484|ApprovalRuleNameRequiredException|[ApprovalRuleNameRequiredException](#schemaapprovalrulenamerequiredexception)|
|485|485|InvalidApprovalRuleNameException|[InvalidApprovalRuleNameException](#schemainvalidapprovalrulenameexception)|
|486|486|CannotDeleteApprovalRuleFromTemplateException|[CannotDeleteApprovalRuleFromTemplateException](#schemacannotdeleteapprovalrulefromtemplateexception)|
|487|487|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|488|488|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|489|489|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|490|490|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|491|491|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepository

<a id="opIdDeleteRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DeleteRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DeleteRepository' \
  -d '{
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DeleteRepository`

<p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>

> Body parameter

```json
{
  "repositoryName": {}
}
```

<h3 id="deleterepository-parameters">Parameters</h3>

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
|body|body|[DeleteRepositoryInput](#schemadeleterepositoryinput)|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DeleteRepository|

> Example responses

> 200 Response

```json
{
  "repositoryId": {}
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

<h3 id="deleterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryOutput](#schemadeleterepositoryoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|483|483|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|484|484|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|485|485|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|486|486|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMergeConflicts

<a id="opIdDescribeMergeConflicts"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DescribeMergeConflicts' \
  -d '{
    "repositoryName": {},
    "destinationCommitSpecifier": {},
    "sourceCommitSpecifier": {},
    "mergeOption": {},
    "maxMergeHunks": {},
    "filePath": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts`

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.

> Body parameter

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "maxMergeHunks": {},
  "filePath": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

<h3 id="describemergeconflicts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxMergeHunks|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeMergeConflictsInput](#schemadescribemergeconflictsinput)|true|none|
|» repositoryName|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» mergeOption|body|object|true|none|
|» maxMergeHunks|body|object|false|none|
|» filePath|body|object|true|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DescribeMergeConflicts|

> Example responses

> 200 Response

```json
{
  "conflictMetadata": {
    "filePath": {},
    "fileSizes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "fileModes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "objectTypes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "numberOfConflicts": {},
    "isBinaryFile": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "contentConflict": {},
    "fileModeConflict": {},
    "objectTypeConflict": {},
    "mergeOperations": {
      "source": {},
      "destination": {}
    }
  },
  "mergeHunks": {},
  "nextToken": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

<h3 id="describemergeconflicts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMergeConflictsOutput](#schemadescribemergeconflictsoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|MergeOptionRequiredException|[MergeOptionRequiredException](#schemamergeoptionrequiredexception)|
|484|484|InvalidMergeOptionException|[InvalidMergeOptionException](#schemainvalidmergeoptionexception)|
|485|485|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|486|486|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|487|487|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|488|488|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|489|489|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|490|490|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|491|491|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|492|492|FileDoesNotExistException|[FileDoesNotExistException](#schemafiledoesnotexistexception)|
|493|493|InvalidMaxMergeHunksException|[InvalidMaxMergeHunksException](#schemainvalidmaxmergehunksexception)|
|494|494|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|495|495|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|496|496|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|497|497|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|498|498|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|499|499|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|500|Internal Server Error|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|501|Not Implemented|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|502|Bad Gateway|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePullRequestEvents

<a id="opIdDescribePullRequestEvents"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DescribePullRequestEvents' \
  -d '{
    "pullRequestId": {},
    "pullRequestEventType": {},
    "actorArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents`

Returns information about one or more pull request events.

> Body parameter

```json
{
  "pullRequestId": {},
  "pullRequestEventType": {},
  "actorArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describepullrequestevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePullRequestEventsInput](#schemadescribepullrequesteventsinput)|true|none|
|» pullRequestId|body|object|true|none|
|» pullRequestEventType|body|object|false|none|
|» actorArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DescribePullRequestEvents|

> Example responses

> 200 Response

```json
{
  "pullRequestEvents": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="describepullrequestevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePullRequestEventsOutput](#schemadescribepullrequesteventsoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidPullRequestEventTypeException|[InvalidPullRequestEventTypeException](#schemainvalidpullrequesteventtypeexception)|
|484|484|InvalidActorArnException|[InvalidActorArnException](#schemainvalidactorarnexception)|
|485|485|ActorDoesNotExistException|[ActorDoesNotExistException](#schemaactordoesnotexistexception)|
|486|486|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|487|487|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateApprovalRuleTemplateFromRepository

<a id="opIdDisassociateApprovalRuleTemplateFromRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository' \
  -d '{
    "approvalRuleTemplateName": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository`

Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "repositoryName": {}
}
```

<h3 id="disassociateapprovalruletemplatefromrepository-parameters">Parameters</h3>

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
|body|body|[DisassociateApprovalRuleTemplateFromRepositoryInput](#schemadisassociateapprovalruletemplatefromrepositoryinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository|

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

<h3 id="disassociateapprovalruletemplatefromrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|484|484|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|485|485|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EvaluatePullRequestApprovalRules

<a id="opIdEvaluatePullRequestApprovalRules"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.EvaluatePullRequestApprovalRules' \
  -d '{
    "pullRequestId": {},
    "revisionId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules`

Evaluates whether a pull request has met all the conditions specified in its associated approval rules.

> Body parameter

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

<h3 id="evaluatepullrequestapprovalrules-parameters">Parameters</h3>

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
|body|body|[EvaluatePullRequestApprovalRulesInput](#schemaevaluatepullrequestapprovalrulesinput)|true|none|
|» pullRequestId|body|object|true|none|
|» revisionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.EvaluatePullRequestApprovalRules|

> Example responses

> 200 Response

```json
{
  "evaluation": {
    "approved": {},
    "overridden": {},
    "approvalRulesSatisfied": {},
    "approvalRulesNotSatisfied": {}
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

<h3 id="evaluatepullrequestapprovalrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EvaluatePullRequestApprovalRulesOutput](#schemaevaluatepullrequestapprovalrulesoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidRevisionIdException|[InvalidRevisionIdException](#schemainvalidrevisionidexception)|
|484|484|RevisionIdRequiredException|[RevisionIdRequiredException](#schemarevisionidrequiredexception)|
|485|485|RevisionNotCurrentException|[RevisionNotCurrentException](#schemarevisionnotcurrentexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetApprovalRuleTemplate

<a id="opIdGetApprovalRuleTemplate"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetApprovalRuleTemplate' \
  -d '{
    "approvalRuleTemplateName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate`

Returns information about a specified approval rule template.

> Body parameter

```json
{
  "approvalRuleTemplateName": {}
}
```

<h3 id="getapprovalruletemplate-parameters">Parameters</h3>

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
|body|body|[GetApprovalRuleTemplateInput](#schemagetapprovalruletemplateinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetApprovalRuleTemplate|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
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

<h3 id="getapprovalruletemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetApprovalRuleTemplateOutput](#schemagetapprovalruletemplateoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBlob

<a id="opIdGetBlob"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetBlob' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetBlob' \
  -d '{
    "repositoryName": {},
    "blobId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetBlob`

Returns the base-64 encoded content of an individual blob in a repository.

> Body parameter

```json
{
  "repositoryName": {},
  "blobId": {}
}
```

<h3 id="getblob-parameters">Parameters</h3>

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
|body|body|[GetBlobInput](#schemagetblobinput)|true|none|
|» repositoryName|body|object|true|none|
|» blobId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetBlob|

> Example responses

> 200 Response

```json
{
  "content": {}
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

> 491 Response

```json
null
```

<h3 id="getblob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBlobOutput](#schemagetbloboutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|BlobIdRequiredException|[BlobIdRequiredException](#schemablobidrequiredexception)|
|484|484|InvalidBlobIdException|[InvalidBlobIdException](#schemainvalidblobidexception)|
|485|485|BlobIdDoesNotExistException|[BlobIdDoesNotExistException](#schemablobiddoesnotexistexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|491|491|FileTooLargeException|[FileTooLargeException](#schemafiletoolargeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBranch

<a id="opIdGetBranch"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetBranch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetBranch' \
  -d '{
    "repositoryName": {},
    "branchName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetBranch`

Returns information about a repository branch, including its name and the last commit ID.

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {}
}
```

<h3 id="getbranch-parameters">Parameters</h3>

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
|body|body|[GetBranchInput](#schemagetbranchinput)|true|none|
|» repositoryName|body|object|false|none|
|» branchName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetBranch|

> Example responses

> 200 Response

```json
{
  "branch": {
    "branchName": {},
    "commitId": {}
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

<h3 id="getbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBranchOutput](#schemagetbranchoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|484|484|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|485|485|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComment

<a id="opIdGetComment"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetComment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetComment' \
  -d '{
    "commentId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetComment`

<p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

> Body parameter

```json
{
  "commentId": {}
}
```

<h3 id="getcomment-parameters">Parameters</h3>

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
|body|body|[GetCommentInput](#schemagetcommentinput)|true|none|
|» commentId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetComment|

> Example responses

> 200 Response

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

<h3 id="getcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommentOutput](#schemagetcommentoutput)|
|480|480|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|481|481|CommentDeletedException|[CommentDeletedException](#schemacommentdeletedexception)|
|482|482|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|483|483|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|
|484|484|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|485|485|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|486|486|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|487|487|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|488|488|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCommentReactions

<a id="opIdGetCommentReactions"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetCommentReactions' \
  -d '{
    "commentId": {},
    "reactionUserArn": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetCommentReactions`

Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.

> Body parameter

```json
{
  "commentId": {},
  "reactionUserArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getcommentreactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCommentReactionsInput](#schemagetcommentreactionsinput)|true|none|
|» commentId|body|object|true|none|
|» reactionUserArn|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetCommentReactions|

> Example responses

> 200 Response

```json
{
  "reactionsForComment": {},
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

<h3 id="getcommentreactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommentReactionsOutput](#schemagetcommentreactionsoutput)|
|480|480|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|481|481|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|482|482|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|
|483|483|InvalidReactionUserArnException|[InvalidReactionUserArnException](#schemainvalidreactionuserarnexception)|
|484|484|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|485|485|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|486|486|CommentDeletedException|[CommentDeletedException](#schemacommentdeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCommentsForComparedCommit

<a id="opIdGetCommentsForComparedCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetCommentsForComparedCommit' \
  -d '{
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit`

<p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

> Body parameter

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getcommentsforcomparedcommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCommentsForComparedCommitInput](#schemagetcommentsforcomparedcommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» beforeCommitId|body|object|false|none|
|» afterCommitId|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetCommentsForComparedCommit|

> Example responses

> 200 Response

```json
{
  "commentsForComparedCommitData": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="getcommentsforcomparedcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommentsForComparedCommitOutput](#schemagetcommentsforcomparedcommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|484|484|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|485|485|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|486|486|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|487|487|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCommentsForPullRequest

<a id="opIdGetCommentsForPullRequest"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetCommentsForPullRequest' \
  -d '{
    "pullRequestId": {},
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest`

<p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>

> Body parameter

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="getcommentsforpullrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetCommentsForPullRequestInput](#schemagetcommentsforpullrequestinput)|true|none|
|» pullRequestId|body|object|true|none|
|» repositoryName|body|object|false|none|
|» beforeCommitId|body|object|false|none|
|» afterCommitId|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetCommentsForPullRequest|

> Example responses

> 200 Response

```json
{
  "commentsForPullRequestData": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

<h3 id="getcommentsforpullrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommentsForPullRequestOutput](#schemagetcommentsforpullrequestoutput)|
|480|480|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|481|481|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|482|482|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|483|483|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|484|484|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|485|485|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|486|486|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|487|487|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|488|488|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|489|489|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|490|490|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|491|491|RepositoryNotAssociatedWithPullRequestException|[RepositoryNotAssociatedWithPullRequestException](#schemarepositorynotassociatedwithpullrequestexception)|
|492|492|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|493|493|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|494|494|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|495|495|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|496|496|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCommit

<a id="opIdGetCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetCommit' \
  -d '{
    "repositoryName": {},
    "commitId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetCommit`

Returns information about a commit, including commit message and committer information.

> Body parameter

```json
{
  "repositoryName": {},
  "commitId": {}
}
```

<h3 id="getcommit-parameters">Parameters</h3>

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
|body|body|[GetCommitInput](#schemagetcommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» commitId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetCommit|

> Example responses

> 200 Response

```json
{
  "commit": {
    "commitId": {},
    "treeId": {},
    "parents": {},
    "message": {},
    "author": {
      "name": {},
      "email": {},
      "date": {}
    },
    "committer": {
      "name": {},
      "email": {},
      "date": {}
    },
    "additionalData": {}
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

<h3 id="getcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCommitOutput](#schemagetcommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|484|484|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|485|485|CommitIdDoesNotExistException|[CommitIdDoesNotExistException](#schemacommitiddoesnotexistexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDifferences

<a id="opIdGetDifferences"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetDifferences' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetDifferences' \
  -d '{
    "repositoryName": {},
    "beforeCommitSpecifier": {},
    "afterCommitSpecifier": {},
    "beforePath": {},
    "afterPath": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetDifferences`

Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.

> Body parameter

```json
{
  "repositoryName": {},
  "beforeCommitSpecifier": {},
  "afterCommitSpecifier": {},
  "beforePath": {},
  "afterPath": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="getdifferences-parameters">Parameters</h3>

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
|body|body|[GetDifferencesInput](#schemagetdifferencesinput)|true|none|
|» repositoryName|body|object|true|none|
|» beforeCommitSpecifier|body|object|false|none|
|» afterCommitSpecifier|body|object|true|none|
|» beforePath|body|object|false|none|
|» afterPath|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetDifferences|

> Example responses

> 200 Response

```json
{
  "differences": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="getdifferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDifferencesOutput](#schemagetdifferencesoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|484|484|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|485|485|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|486|486|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|487|487|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|488|488|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|489|489|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|490|490|PathDoesNotExistException|[PathDoesNotExistException](#schemapathdoesnotexistexception)|
|491|491|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|492|492|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|493|493|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|494|494|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|495|495|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFile

<a id="opIdGetFile"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetFile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetFile' \
  -d '{
    "repositoryName": {},
    "commitSpecifier": {},
    "filePath": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetFile`

Returns the base-64 encoded contents of a specified file and its metadata.

> Body parameter

```json
{
  "repositoryName": {},
  "commitSpecifier": {},
  "filePath": {}
}
```

<h3 id="getfile-parameters">Parameters</h3>

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
|body|body|[GetFileInput](#schemagetfileinput)|true|none|
|» repositoryName|body|object|true|none|
|» commitSpecifier|body|object|false|none|
|» filePath|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetFile|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "blobId": {},
  "filePath": {},
  "fileMode": {},
  "fileSize": {},
  "fileContent": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

<h3 id="getfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFileOutput](#schemagetfileoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|484|484|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|485|485|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|486|486|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|487|487|FileDoesNotExistException|[FileDoesNotExistException](#schemafiledoesnotexistexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|493|493|FileTooLargeException|[FileTooLargeException](#schemafiletoolargeexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFolder

<a id="opIdGetFolder"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetFolder' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetFolder' \
  -d '{
    "repositoryName": {},
    "commitSpecifier": {},
    "folderPath": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetFolder`

Returns the contents of a specified folder in a repository.

> Body parameter

```json
{
  "repositoryName": {},
  "commitSpecifier": {},
  "folderPath": {}
}
```

<h3 id="getfolder-parameters">Parameters</h3>

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
|body|body|[GetFolderInput](#schemagetfolderinput)|true|none|
|» repositoryName|body|object|true|none|
|» commitSpecifier|body|object|false|none|
|» folderPath|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetFolder|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "folderPath": {},
  "treeId": {},
  "subFolders": {},
  "files": {},
  "symbolicLinks": {},
  "subModules": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="getfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFolderOutput](#schemagetfolderoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|484|484|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|485|485|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|486|486|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|487|487|FolderDoesNotExistException|[FolderDoesNotExistException](#schemafolderdoesnotexistexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMergeCommit

<a id="opIdGetMergeCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetMergeCommit' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetMergeCommit`

Returns information about a specified merge commit.

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {}
}
```

<h3 id="getmergecommit-parameters">Parameters</h3>

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
|body|body|[GetMergeCommitInput](#schemagetmergecommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetMergeCommit|

> Example responses

> 200 Response

```json
{
  "sourceCommitId": {},
  "destinationCommitId": {},
  "baseCommitId": {},
  "mergedCommitId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="getmergecommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMergeCommitOutput](#schemagetmergecommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|484|484|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|485|485|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|486|486|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|487|487|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMergeConflicts

<a id="opIdGetMergeConflicts"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetMergeConflicts' \
  -d '{
    "repositoryName": {},
    "destinationCommitSpecifier": {},
    "sourceCommitSpecifier": {},
    "mergeOption": {},
    "conflictDetailLevel": {},
    "maxConflictFiles": {},
    "conflictResolutionStrategy": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts`

Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.

> Body parameter

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "conflictDetailLevel": {},
  "maxConflictFiles": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

<h3 id="getmergeconflicts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxConflictFiles|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetMergeConflictsInput](#schemagetmergeconflictsinput)|true|none|
|» repositoryName|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» mergeOption|body|object|true|none|
|» conflictDetailLevel|body|object|false|none|
|» maxConflictFiles|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetMergeConflicts|

> Example responses

> 200 Response

```json
{
  "mergeable": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {},
  "conflictMetadataList": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

<h3 id="getmergeconflicts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMergeConflictsOutput](#schemagetmergeconflictsoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|MergeOptionRequiredException|[MergeOptionRequiredException](#schemamergeoptionrequiredexception)|
|484|484|InvalidMergeOptionException|[InvalidMergeOptionException](#schemainvalidmergeoptionexception)|
|485|485|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|486|486|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|487|487|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|488|488|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|489|489|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|490|490|InvalidMaxConflictFilesException|[InvalidMaxConflictFilesException](#schemainvalidmaxconflictfilesexception)|
|491|491|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|492|492|InvalidDestinationCommitSpecifierException|[InvalidDestinationCommitSpecifierException](#schemainvaliddestinationcommitspecifierexception)|
|493|493|InvalidSourceCommitSpecifierException|[InvalidSourceCommitSpecifierException](#schemainvalidsourcecommitspecifierexception)|
|494|494|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|495|495|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|496|496|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|497|497|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|498|498|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|499|499|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|500|Internal Server Error|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|501|Not Implemented|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMergeOptions

<a id="opIdGetMergeOptions"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetMergeOptions' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetMergeOptions`

Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {}
}
```

<h3 id="getmergeoptions-parameters">Parameters</h3>

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
|body|body|[GetMergeOptionsInput](#schemagetmergeoptionsinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetMergeOptions|

> Example responses

> 200 Response

```json
{
  "mergeOptions": {},
  "sourceCommitId": {},
  "destinationCommitId": {},
  "baseCommitId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="getmergeoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMergeOptionsOutput](#schemagetmergeoptionsoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|484|484|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|485|485|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|486|486|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|487|487|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|488|488|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|489|489|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|490|490|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|491|491|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|492|492|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|493|493|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|494|494|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|495|495|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPullRequest

<a id="opIdGetPullRequest"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetPullRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetPullRequest' \
  -d '{
    "pullRequestId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetPullRequest`

Gets information about a pull request in a specified repository.

> Body parameter

```json
{
  "pullRequestId": {}
}
```

<h3 id="getpullrequest-parameters">Parameters</h3>

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
|body|body|[GetPullRequestInput](#schemagetpullrequestinput)|true|none|
|» pullRequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetPullRequest|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

<h3 id="getpullrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPullRequestOutput](#schemagetpullrequestoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPullRequestApprovalStates

<a id="opIdGetPullRequestApprovalStates"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetPullRequestApprovalStates' \
  -d '{
    "pullRequestId": {},
    "revisionId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates`

Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.

> Body parameter

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

<h3 id="getpullrequestapprovalstates-parameters">Parameters</h3>

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
|body|body|[GetPullRequestApprovalStatesInput](#schemagetpullrequestapprovalstatesinput)|true|none|
|» pullRequestId|body|object|true|none|
|» revisionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetPullRequestApprovalStates|

> Example responses

> 200 Response

```json
{
  "approvals": {}
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

<h3 id="getpullrequestapprovalstates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPullRequestApprovalStatesOutput](#schemagetpullrequestapprovalstatesoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidRevisionIdException|[InvalidRevisionIdException](#schemainvalidrevisionidexception)|
|484|484|RevisionIdRequiredException|[RevisionIdRequiredException](#schemarevisionidrequiredexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPullRequestOverrideState

<a id="opIdGetPullRequestOverrideState"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetPullRequestOverrideState' \
  -d '{
    "pullRequestId": {},
    "revisionId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState`

Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

<h3 id="getpullrequestoverridestate-parameters">Parameters</h3>

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
|body|body|[GetPullRequestOverrideStateInput](#schemagetpullrequestoverridestateinput)|true|none|
|» pullRequestId|body|object|true|none|
|» revisionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetPullRequestOverrideState|

> Example responses

> 200 Response

```json
{
  "overridden": {},
  "overrider": {}
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

<h3 id="getpullrequestoverridestate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPullRequestOverrideStateOutput](#schemagetpullrequestoverridestateoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidRevisionIdException|[InvalidRevisionIdException](#schemainvalidrevisionidexception)|
|484|484|RevisionIdRequiredException|[RevisionIdRequiredException](#schemarevisionidrequiredexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepository

<a id="opIdGetRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetRepository' \
  -d '{
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetRepository`

<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

> Body parameter

```json
{
  "repositoryName": {}
}
```

<h3 id="getrepository-parameters">Parameters</h3>

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
|body|body|[GetRepositoryInput](#schemagetrepositoryinput)|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetRepository|

> Example responses

> 200 Response

```json
{
  "repositoryMetadata": {
    "accountId": {},
    "repositoryId": {},
    "repositoryName": {},
    "repositoryDescription": {},
    "defaultBranch": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "cloneUrlHttp": {},
    "cloneUrlSsh": {},
    "Arn": {}
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

<h3 id="getrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryOutput](#schemagetrepositoryoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryTriggers

<a id="opIdGetRepositoryTriggers"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.GetRepositoryTriggers' \
  -d '{
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers`

Gets information about triggers configured for a repository.

> Body parameter

```json
{
  "repositoryName": {}
}
```

<h3 id="getrepositorytriggers-parameters">Parameters</h3>

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
|body|body|[GetRepositoryTriggersInput](#schemagetrepositorytriggersinput)|true|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.GetRepositoryTriggers|

> Example responses

> 200 Response

```json
{
  "configurationId": {},
  "triggers": {}
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

<h3 id="getrepositorytriggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryTriggersOutput](#schemagetrepositorytriggersoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListApprovalRuleTemplates

<a id="opIdListApprovalRuleTemplates"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListApprovalRuleTemplates' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates`

Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listapprovalruletemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListApprovalRuleTemplatesInput](#schemalistapprovalruletemplatesinput)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListApprovalRuleTemplates|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplateNames": {},
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

<h3 id="listapprovalruletemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListApprovalRuleTemplatesOutput](#schemalistapprovalruletemplatesoutput)|
|480|480|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|481|481|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociatedApprovalRuleTemplatesForRepository

<a id="opIdListAssociatedApprovalRuleTemplatesForRepository"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository' \
  -d '{
    "repositoryName": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository`

Lists all approval rule templates that are associated with a specified repository.

> Body parameter

```json
{
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listassociatedapprovalruletemplatesforrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAssociatedApprovalRuleTemplatesForRepositoryInput](#schemalistassociatedapprovalruletemplatesforrepositoryinput)|true|none|
|» repositoryName|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplateNames": {},
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

<h3 id="listassociatedapprovalruletemplatesforrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociatedApprovalRuleTemplatesForRepositoryOutput](#schemalistassociatedapprovalruletemplatesforrepositoryoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|484|484|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBranches

<a id="opIdListBranches"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListBranches' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListBranches' \
  -d '{
    "repositoryName": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListBranches`

Gets information about one or more branches in a repository.

> Body parameter

```json
{
  "repositoryName": {},
  "nextToken": {}
}
```

<h3 id="listbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBranchesInput](#schemalistbranchesinput)|true|none|
|» repositoryName|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListBranches|

> Example responses

> 200 Response

```json
{
  "branches": {},
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

<h3 id="listbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBranchesOutput](#schemalistbranchesoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|484|484|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|485|485|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|486|486|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|487|487|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|488|488|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPullRequests

<a id="opIdListPullRequests"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListPullRequests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListPullRequests' \
  -d '{
    "repositoryName": {},
    "authorArn": {},
    "pullRequestStatus": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListPullRequests`

Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.

> Body parameter

```json
{
  "repositoryName": {},
  "authorArn": {},
  "pullRequestStatus": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listpullrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPullRequestsInput](#schemalistpullrequestsinput)|true|none|
|» repositoryName|body|object|true|none|
|» authorArn|body|object|false|none|
|» pullRequestStatus|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListPullRequests|

> Example responses

> 200 Response

```json
{
  "pullRequestIds": {},
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

<h3 id="listpullrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPullRequestsOutput](#schemalistpullrequestsoutput)|
|480|480|InvalidPullRequestStatusException|[InvalidPullRequestStatusException](#schemainvalidpullrequeststatusexception)|
|481|481|InvalidAuthorArnException|[InvalidAuthorArnException](#schemainvalidauthorarnexception)|
|482|482|AuthorDoesNotExistException|[AuthorDoesNotExistException](#schemaauthordoesnotexistexception)|
|483|483|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|484|484|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|485|485|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|486|486|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|487|487|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|488|488|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|489|489|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|490|490|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|491|491|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|492|492|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositories

<a id="opIdListRepositories"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListRepositories' \
  -d '{
    "nextToken": {},
    "sortBy": {},
    "order": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListRepositories`

Gets information about one or more repositories.

> Body parameter

```json
{
  "nextToken": {},
  "sortBy": {},
  "order": {}
}
```

<h3 id="listrepositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRepositoriesInput](#schemalistrepositoriesinput)|true|none|
|» nextToken|body|object|false|none|
|» sortBy|body|object|false|none|
|» order|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListRepositories|

> Example responses

> 200 Response

```json
{
  "repositories": {},
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

<h3 id="listrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoriesOutput](#schemalistrepositoriesoutput)|
|480|480|InvalidSortByException|[InvalidSortByException](#schemainvalidsortbyexception)|
|481|481|InvalidOrderException|[InvalidOrderException](#schemainvalidorderexception)|
|482|482|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRepositoriesForApprovalRuleTemplate

<a id="opIdListRepositoriesForApprovalRuleTemplate"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate' \
  -d '{
    "approvalRuleTemplateName": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate`

Lists all repositories associated with the specified approval rule template.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="listrepositoriesforapprovalruletemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRepositoriesForApprovalRuleTemplateInput](#schemalistrepositoriesforapprovalruletemplateinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate|

> Example responses

> 200 Response

```json
{
  "repositoryNames": {},
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

<h3 id="listrepositoriesforapprovalruletemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRepositoriesForApprovalRuleTemplateOutput](#schemalistrepositoriesforapprovalruletemplateoutput)|
|480|480|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|481|481|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|InvalidMaxResultsException|[InvalidMaxResultsException](#schemainvalidmaxresultsexception)|
|484|484|InvalidContinuationTokenException|[InvalidContinuationTokenException](#schemainvalidcontinuationtokenexception)|
|485|485|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|486|486|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|487|487|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|488|488|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|489|489|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.ListTagsForResource' \
  -d '{
    "resourceArn": {},
    "nextToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.ListTagsForResource`

Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.

> Body parameter

```json
{
  "resourceArn": {},
  "nextToken": {}
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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» nextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.ListTagsForResource|

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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|
|483|483|InvalidResourceArnException|[InvalidResourceArnException](#schemainvalidresourcearnexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeBranchesByFastForward

<a id="opIdMergeBranchesByFastForward"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergeBranchesByFastForward' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "targetBranch": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward`

Merges two branches using the fast-forward merge strategy.

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {}
}
```

<h3 id="mergebranchesbyfastforward-parameters">Parameters</h3>

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
|body|body|[MergeBranchesByFastForwardInput](#schemamergebranchesbyfastforwardinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» targetBranch|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergeBranchesByFastForward|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "treeId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

<h3 id="mergebranchesbyfastforward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergeBranchesByFastForwardOutput](#schemamergebranchesbyfastforwardoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|484|484|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|485|485|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|486|486|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|487|487|InvalidTargetBranchException|[InvalidTargetBranchException](#schemainvalidtargetbranchexception)|
|488|488|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|489|489|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|490|490|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|491|491|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|492|492|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|493|493|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|494|494|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|495|495|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|496|496|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|497|497|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|498|498|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeBranchesBySquash

<a id="opIdMergeBranchesBySquash"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergeBranchesBySquash' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "targetBranch": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "authorName": {},
    "email": {},
    "commitMessage": {},
    "keepEmptyFolders": {},
    "conflictResolution": {
      "replaceContents": {},
      "deleteFiles": {},
      "setFileModes": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash`

Merges two branches using the squash merge strategy.

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

<h3 id="mergebranchesbysquash-parameters">Parameters</h3>

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
|body|body|[MergeBranchesBySquashInput](#schemamergebranchesbysquashinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» targetBranch|body|object|false|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» commitMessage|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» conflictResolution|body|object|false|none|
|» » replaceContents|body|object|false|none|
|» » deleteFiles|body|object|false|none|
|» » setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergeBranchesBySquash|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "treeId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

> 516 Response

```json
null
```

> 517 Response

```json
null
```

> 518 Response

```json
null
```

<h3 id="mergebranchesbysquash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergeBranchesBySquashOutput](#schemamergebranchesbysquashoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|484|484|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|485|485|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|486|486|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|487|487|InvalidTargetBranchException|[InvalidTargetBranchException](#schemainvalidtargetbranchexception)|
|488|488|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|489|489|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|490|490|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|491|491|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|492|492|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|493|493|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|494|494|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|495|495|InvalidConflictResolutionException|[InvalidConflictResolutionException](#schemainvalidconflictresolutionexception)|
|496|496|MaximumConflictResolutionEntriesExceededException|[MaximumConflictResolutionEntriesExceededException](#schemamaximumconflictresolutionentriesexceededexception)|
|497|497|MultipleConflictResolutionEntriesException|[MultipleConflictResolutionEntriesException](#schemamultipleconflictresolutionentriesexception)|
|498|498|ReplacementTypeRequiredException|[ReplacementTypeRequiredException](#schemareplacementtyperequiredexception)|
|499|499|InvalidReplacementTypeException|[InvalidReplacementTypeException](#schemainvalidreplacementtypeexception)|
|500|Internal Server Error|ReplacementContentRequiredException|[ReplacementContentRequiredException](#schemareplacementcontentrequiredexception)|
|501|Not Implemented|InvalidReplacementContentException|[InvalidReplacementContentException](#schemainvalidreplacementcontentexception)|
|502|Bad Gateway|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|503|Service Unavailable|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|504|Gateway Timeout|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|505|HTTP Version Not Supported|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|506|Variant Also Negotiates|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|507|Insufficient Storage|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|508|Loop Detected|FileModeRequiredException|[FileModeRequiredException](#schemafilemoderequiredexception)|
|509|Bandwidth Limit Exceeded|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|510|Not Extended|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|511|Network Authentication Required|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|512|512|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|513|513|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|514|514|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|515|515|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|516|516|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|517|517|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|518|518|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergeBranchesByThreeWay

<a id="opIdMergeBranchesByThreeWay"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergeBranchesByThreeWay' \
  -d '{
    "repositoryName": {},
    "sourceCommitSpecifier": {},
    "destinationCommitSpecifier": {},
    "targetBranch": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "authorName": {},
    "email": {},
    "commitMessage": {},
    "keepEmptyFolders": {},
    "conflictResolution": {
      "replaceContents": {},
      "deleteFiles": {},
      "setFileModes": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay`

Merges two specified branches using the three-way merge strategy.

> Body parameter

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

<h3 id="mergebranchesbythreeway-parameters">Parameters</h3>

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
|body|body|[MergeBranchesByThreeWayInput](#schemamergebranchesbythreewayinput)|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitSpecifier|body|object|true|none|
|» destinationCommitSpecifier|body|object|true|none|
|» targetBranch|body|object|false|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» commitMessage|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» conflictResolution|body|object|false|none|
|» » replaceContents|body|object|false|none|
|» » deleteFiles|body|object|false|none|
|» » setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergeBranchesByThreeWay|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "treeId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

> 516 Response

```json
null
```

> 517 Response

```json
null
```

> 518 Response

```json
null
```

<h3 id="mergebranchesbythreeway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergeBranchesByThreeWayOutput](#schemamergebranchesbythreewayoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|484|484|CommitRequiredException|[CommitRequiredException](#schemacommitrequiredexception)|
|485|485|InvalidCommitException|[InvalidCommitException](#schemainvalidcommitexception)|
|486|486|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|487|487|InvalidTargetBranchException|[InvalidTargetBranchException](#schemainvalidtargetbranchexception)|
|488|488|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|489|489|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|490|490|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|491|491|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|492|492|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|493|493|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|494|494|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|495|495|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|496|496|InvalidConflictResolutionException|[InvalidConflictResolutionException](#schemainvalidconflictresolutionexception)|
|497|497|MaximumConflictResolutionEntriesExceededException|[MaximumConflictResolutionEntriesExceededException](#schemamaximumconflictresolutionentriesexceededexception)|
|498|498|MultipleConflictResolutionEntriesException|[MultipleConflictResolutionEntriesException](#schemamultipleconflictresolutionentriesexception)|
|499|499|ReplacementTypeRequiredException|[ReplacementTypeRequiredException](#schemareplacementtyperequiredexception)|
|500|Internal Server Error|InvalidReplacementTypeException|[InvalidReplacementTypeException](#schemainvalidreplacementtypeexception)|
|501|Not Implemented|ReplacementContentRequiredException|[ReplacementContentRequiredException](#schemareplacementcontentrequiredexception)|
|502|Bad Gateway|InvalidReplacementContentException|[InvalidReplacementContentException](#schemainvalidreplacementcontentexception)|
|503|Service Unavailable|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|504|Gateway Timeout|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|505|HTTP Version Not Supported|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|506|Variant Also Negotiates|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|507|Insufficient Storage|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|508|Loop Detected|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|509|Bandwidth Limit Exceeded|FileModeRequiredException|[FileModeRequiredException](#schemafilemoderequiredexception)|
|510|Not Extended|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|511|Network Authentication Required|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|512|512|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|513|513|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|514|514|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|515|515|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|516|516|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|517|517|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|518|518|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergePullRequestByFastForward

<a id="opIdMergePullRequestByFastForward"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergePullRequestByFastForward' \
  -d '{
    "pullRequestId": {},
    "repositoryName": {},
    "sourceCommitId": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward`

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {}
}
```

<h3 id="mergepullrequestbyfastforward-parameters">Parameters</h3>

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
|body|body|[MergePullRequestByFastForwardInput](#schemamergepullrequestbyfastforwardinput)|true|none|
|» pullRequestId|body|object|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergePullRequestByFastForward|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

<h3 id="mergepullrequestbyfastforward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergePullRequestByFastForwardOutput](#schemamergepullrequestbyfastforwardoutput)|
|480|480|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|481|481|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|482|482|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|483|483|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|484|484|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|485|485|TipOfSourceReferenceIsDifferentException|[TipOfSourceReferenceIsDifferentException](#schematipofsourcereferenceisdifferentexception)|
|486|486|ReferenceDoesNotExistException|[ReferenceDoesNotExistException](#schemareferencedoesnotexistexception)|
|487|487|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|488|488|RepositoryNotAssociatedWithPullRequestException|[RepositoryNotAssociatedWithPullRequestException](#schemarepositorynotassociatedwithpullrequestexception)|
|489|489|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|490|490|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|491|491|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|492|492|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|493|493|PullRequestApprovalRulesNotSatisfiedException|[PullRequestApprovalRulesNotSatisfiedException](#schemapullrequestapprovalrulesnotsatisfiedexception)|
|494|494|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|495|495|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|496|496|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|497|497|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|498|498|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergePullRequestBySquash

<a id="opIdMergePullRequestBySquash"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergePullRequestBySquash' \
  -d '{
    "pullRequestId": {},
    "repositoryName": {},
    "sourceCommitId": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "commitMessage": {},
    "authorName": {},
    "email": {},
    "keepEmptyFolders": {},
    "conflictResolution": {
      "replaceContents": {},
      "deleteFiles": {},
      "setFileModes": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash`

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "commitMessage": {},
  "authorName": {},
  "email": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

<h3 id="mergepullrequestbysquash-parameters">Parameters</h3>

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
|body|body|[MergePullRequestBySquashInput](#schemamergepullrequestbysquashinput)|true|none|
|» pullRequestId|body|object|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitId|body|object|false|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» commitMessage|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» conflictResolution|body|object|false|none|
|» » replaceContents|body|object|false|none|
|» » deleteFiles|body|object|false|none|
|» » setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergePullRequestBySquash|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

> 516 Response

```json
null
```

> 517 Response

```json
null
```

<h3 id="mergepullrequestbysquash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergePullRequestBySquashOutput](#schemamergepullrequestbysquashoutput)|
|480|480|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|481|481|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|484|484|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|485|485|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|486|486|TipOfSourceReferenceIsDifferentException|[TipOfSourceReferenceIsDifferentException](#schematipofsourcereferenceisdifferentexception)|
|487|487|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|488|488|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|489|489|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|490|490|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|491|491|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|492|492|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|493|493|InvalidConflictResolutionException|[InvalidConflictResolutionException](#schemainvalidconflictresolutionexception)|
|494|494|ReplacementTypeRequiredException|[ReplacementTypeRequiredException](#schemareplacementtyperequiredexception)|
|495|495|InvalidReplacementTypeException|[InvalidReplacementTypeException](#schemainvalidreplacementtypeexception)|
|496|496|MultipleConflictResolutionEntriesException|[MultipleConflictResolutionEntriesException](#schemamultipleconflictresolutionentriesexception)|
|497|497|ReplacementContentRequiredException|[ReplacementContentRequiredException](#schemareplacementcontentrequiredexception)|
|498|498|MaximumConflictResolutionEntriesExceededException|[MaximumConflictResolutionEntriesExceededException](#schemamaximumconflictresolutionentriesexceededexception)|
|499|499|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|500|Internal Server Error|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|501|Not Implemented|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|502|Bad Gateway|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|503|Service Unavailable|InvalidReplacementContentException|[InvalidReplacementContentException](#schemainvalidreplacementcontentexception)|
|504|Gateway Timeout|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|505|HTTP Version Not Supported|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|506|Variant Also Negotiates|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|507|Insufficient Storage|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|508|Loop Detected|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|509|Bandwidth Limit Exceeded|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|510|Not Extended|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|511|Network Authentication Required|RepositoryNotAssociatedWithPullRequestException|[RepositoryNotAssociatedWithPullRequestException](#schemarepositorynotassociatedwithpullrequestexception)|
|512|512|PullRequestApprovalRulesNotSatisfiedException|[PullRequestApprovalRulesNotSatisfiedException](#schemapullrequestapprovalrulesnotsatisfiedexception)|
|513|513|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|514|514|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|515|515|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|516|516|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|517|517|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## MergePullRequestByThreeWay

<a id="opIdMergePullRequestByThreeWay"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.MergePullRequestByThreeWay' \
  -d '{
    "pullRequestId": {},
    "repositoryName": {},
    "sourceCommitId": {},
    "conflictDetailLevel": {},
    "conflictResolutionStrategy": {},
    "commitMessage": {},
    "authorName": {},
    "email": {},
    "keepEmptyFolders": {},
    "conflictResolution": {
      "replaceContents": {},
      "deleteFiles": {},
      "setFileModes": {}
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay`

Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "commitMessage": {},
  "authorName": {},
  "email": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

<h3 id="mergepullrequestbythreeway-parameters">Parameters</h3>

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
|body|body|[MergePullRequestByThreeWayInput](#schemamergepullrequestbythreewayinput)|true|none|
|» pullRequestId|body|object|true|none|
|» repositoryName|body|object|true|none|
|» sourceCommitId|body|object|false|none|
|» conflictDetailLevel|body|object|false|none|
|» conflictResolutionStrategy|body|object|false|none|
|» commitMessage|body|object|false|none|
|» authorName|body|object|false|none|
|» email|body|object|false|none|
|» keepEmptyFolders|body|object|false|none|
|» conflictResolution|body|object|false|none|
|» » replaceContents|body|object|false|none|
|» » deleteFiles|body|object|false|none|
|» » setFileModes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.MergePullRequestByThreeWay|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

> 510 Response

```json
null
```

> 511 Response

```json
null
```

> 512 Response

```json
null
```

> 513 Response

```json
null
```

> 514 Response

```json
null
```

> 515 Response

```json
null
```

> 516 Response

```json
null
```

> 517 Response

```json
null
```

<h3 id="mergepullrequestbythreeway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MergePullRequestByThreeWayOutput](#schemamergepullrequestbythreewayoutput)|
|480|480|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|481|481|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|484|484|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|485|485|ManualMergeRequiredException|[ManualMergeRequiredException](#schemamanualmergerequiredexception)|
|486|486|TipOfSourceReferenceIsDifferentException|[TipOfSourceReferenceIsDifferentException](#schematipofsourcereferenceisdifferentexception)|
|487|487|TipsDivergenceExceededException|[TipsDivergenceExceededException](#schematipsdivergenceexceededexception)|
|488|488|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|489|489|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|490|490|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|491|491|InvalidConflictDetailLevelException|[InvalidConflictDetailLevelException](#schemainvalidconflictdetaillevelexception)|
|492|492|InvalidConflictResolutionStrategyException|[InvalidConflictResolutionStrategyException](#schemainvalidconflictresolutionstrategyexception)|
|493|493|InvalidConflictResolutionException|[InvalidConflictResolutionException](#schemainvalidconflictresolutionexception)|
|494|494|ReplacementTypeRequiredException|[ReplacementTypeRequiredException](#schemareplacementtyperequiredexception)|
|495|495|InvalidReplacementTypeException|[InvalidReplacementTypeException](#schemainvalidreplacementtypeexception)|
|496|496|MultipleConflictResolutionEntriesException|[MultipleConflictResolutionEntriesException](#schemamultipleconflictresolutionentriesexception)|
|497|497|ReplacementContentRequiredException|[ReplacementContentRequiredException](#schemareplacementcontentrequiredexception)|
|498|498|MaximumConflictResolutionEntriesExceededException|[MaximumConflictResolutionEntriesExceededException](#schemamaximumconflictresolutionentriesexceededexception)|
|499|499|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|500|Internal Server Error|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|501|Not Implemented|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|502|Bad Gateway|InvalidReplacementContentException|[InvalidReplacementContentException](#schemainvalidreplacementcontentexception)|
|503|Service Unavailable|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|504|Gateway Timeout|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|505|HTTP Version Not Supported|MaximumFileContentToLoadExceededException|[MaximumFileContentToLoadExceededException](#schemamaximumfilecontenttoloadexceededexception)|
|506|Variant Also Negotiates|MaximumItemsToCompareExceededException|[MaximumItemsToCompareExceededException](#schemamaximumitemstocompareexceededexception)|
|507|Insufficient Storage|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|508|Loop Detected|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|509|Bandwidth Limit Exceeded|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|510|Not Extended|RepositoryNotAssociatedWithPullRequestException|[RepositoryNotAssociatedWithPullRequestException](#schemarepositorynotassociatedwithpullrequestexception)|
|511|Network Authentication Required|ConcurrentReferenceUpdateException|[ConcurrentReferenceUpdateException](#schemaconcurrentreferenceupdateexception)|
|512|512|PullRequestApprovalRulesNotSatisfiedException|[PullRequestApprovalRulesNotSatisfiedException](#schemapullrequestapprovalrulesnotsatisfiedexception)|
|513|513|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|514|514|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|515|515|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|516|516|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|517|517|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## OverridePullRequestApprovalRules

<a id="opIdOverridePullRequestApprovalRules"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.OverridePullRequestApprovalRules' \
  -d '{
    "pullRequestId": {},
    "revisionId": {},
    "overrideStatus": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules`

Sets aside (overrides) all approval rule requirements for a specified pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "revisionId": {},
  "overrideStatus": {}
}
```

<h3 id="overridepullrequestapprovalrules-parameters">Parameters</h3>

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
|body|body|[OverridePullRequestApprovalRulesInput](#schemaoverridepullrequestapprovalrulesinput)|true|none|
|» pullRequestId|body|object|true|none|
|» revisionId|body|object|true|none|
|» overrideStatus|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.OverridePullRequestApprovalRules|

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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

<h3 id="overridepullrequestapprovalrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidRevisionIdException|[InvalidRevisionIdException](#schemainvalidrevisionidexception)|
|484|484|RevisionIdRequiredException|[RevisionIdRequiredException](#schemarevisionidrequiredexception)|
|485|485|InvalidOverrideStatusException|[InvalidOverrideStatusException](#schemainvalidoverridestatusexception)|
|486|486|OverrideStatusRequiredException|[OverrideStatusRequiredException](#schemaoverridestatusrequiredexception)|
|487|487|OverrideAlreadySetException|[OverrideAlreadySetException](#schemaoverridealreadysetexception)|
|488|488|RevisionNotCurrentException|[RevisionNotCurrentException](#schemarevisionnotcurrentexception)|
|489|489|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|490|490|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|491|491|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|492|492|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|493|493|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|494|494|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostCommentForComparedCommit

<a id="opIdPostCommentForComparedCommit"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PostCommentForComparedCommit' \
  -d '{
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "location": {
      "filePath": {},
      "filePosition": {},
      "relativeFileVersion": {}
    },
    "content": {},
    "clientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit`

Posts a comment on the comparison between two commits.

> Body parameter

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "content": {},
  "clientRequestToken": {}
}
```

<h3 id="postcommentforcomparedcommit-parameters">Parameters</h3>

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
|body|body|[PostCommentForComparedCommitInput](#schemapostcommentforcomparedcommitinput)|true|none|
|» repositoryName|body|object|true|none|
|» beforeCommitId|body|object|false|none|
|» afterCommitId|body|object|true|none|
|» location|body|object|false|none|
|» » filePath|body|object|false|none|
|» » filePosition|body|object|false|none|
|» » relativeFileVersion|body|object|false|none|
|» content|body|object|true|none|
|» clientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PostCommentForComparedCommit|

> Example responses

> 200 Response

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

<h3 id="postcommentforcomparedcommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostCommentForComparedCommitOutput](#schemapostcommentforcomparedcommitoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|ClientRequestTokenRequiredException|[ClientRequestTokenRequiredException](#schemaclientrequesttokenrequiredexception)|
|484|484|InvalidClientRequestTokenException|[InvalidClientRequestTokenException](#schemainvalidclientrequesttokenexception)|
|485|485|IdempotencyParameterMismatchException|[IdempotencyParameterMismatchException](#schemaidempotencyparametermismatchexception)|
|486|486|CommentContentRequiredException|[CommentContentRequiredException](#schemacommentcontentrequiredexception)|
|487|487|CommentContentSizeLimitExceededException|[CommentContentSizeLimitExceededException](#schemacommentcontentsizelimitexceededexception)|
|488|488|InvalidFileLocationException|[InvalidFileLocationException](#schemainvalidfilelocationexception)|
|489|489|InvalidRelativeFileVersionEnumException|[InvalidRelativeFileVersionEnumException](#schemainvalidrelativefileversionenumexception)|
|490|490|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|491|491|InvalidFilePositionException|[InvalidFilePositionException](#schemainvalidfilepositionexception)|
|492|492|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|493|493|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|494|494|BeforeCommitIdAndAfterCommitIdAreSameException|[BeforeCommitIdAndAfterCommitIdAreSameException](#schemabeforecommitidandaftercommitidaresameexception)|
|495|495|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|496|496|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|497|497|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|498|498|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|499|499|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|500|Internal Server Error|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|501|Not Implemented|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|502|Bad Gateway|PathDoesNotExistException|[PathDoesNotExistException](#schemapathdoesnotexistexception)|
|503|Service Unavailable|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostCommentForPullRequest

<a id="opIdPostCommentForPullRequest"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PostCommentForPullRequest' \
  -d '{
    "pullRequestId": {},
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "location": {
      "filePath": {},
      "filePosition": {},
      "relativeFileVersion": {}
    },
    "content": {},
    "clientRequestToken": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest`

Posts a comment on a pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "content": {},
  "clientRequestToken": {}
}
```

<h3 id="postcommentforpullrequest-parameters">Parameters</h3>

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
|body|body|[PostCommentForPullRequestInput](#schemapostcommentforpullrequestinput)|true|none|
|» pullRequestId|body|object|true|none|
|» repositoryName|body|object|true|none|
|» beforeCommitId|body|object|true|none|
|» afterCommitId|body|object|true|none|
|» location|body|object|false|none|
|» » filePath|body|object|false|none|
|» » filePosition|body|object|false|none|
|» » relativeFileVersion|body|object|false|none|
|» content|body|object|true|none|
|» clientRequestToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PostCommentForPullRequest|

> Example responses

> 200 Response

```json
{
  "repositoryName": {},
  "pullRequestId": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

<h3 id="postcommentforpullrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostCommentForPullRequestOutput](#schemapostcommentforpullrequestoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|RepositoryNotAssociatedWithPullRequestException|[RepositoryNotAssociatedWithPullRequestException](#schemarepositorynotassociatedwithpullrequestexception)|
|484|484|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|485|485|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|486|486|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|487|487|ClientRequestTokenRequiredException|[ClientRequestTokenRequiredException](#schemaclientrequesttokenrequiredexception)|
|488|488|InvalidClientRequestTokenException|[InvalidClientRequestTokenException](#schemainvalidclientrequesttokenexception)|
|489|489|IdempotencyParameterMismatchException|[IdempotencyParameterMismatchException](#schemaidempotencyparametermismatchexception)|
|490|490|CommentContentRequiredException|[CommentContentRequiredException](#schemacommentcontentrequiredexception)|
|491|491|CommentContentSizeLimitExceededException|[CommentContentSizeLimitExceededException](#schemacommentcontentsizelimitexceededexception)|
|492|492|InvalidFileLocationException|[InvalidFileLocationException](#schemainvalidfilelocationexception)|
|493|493|InvalidRelativeFileVersionEnumException|[InvalidRelativeFileVersionEnumException](#schemainvalidrelativefileversionenumexception)|
|494|494|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|495|495|InvalidFilePositionException|[InvalidFilePositionException](#schemainvalidfilepositionexception)|
|496|496|CommitIdRequiredException|[CommitIdRequiredException](#schemacommitidrequiredexception)|
|497|497|InvalidCommitIdException|[InvalidCommitIdException](#schemainvalidcommitidexception)|
|498|498|BeforeCommitIdAndAfterCommitIdAreSameException|[BeforeCommitIdAndAfterCommitIdAreSameException](#schemabeforecommitidandaftercommitidaresameexception)|
|499|499|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|500|Internal Server Error|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|501|Not Implemented|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|502|Bad Gateway|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|503|Service Unavailable|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|504|Gateway Timeout|CommitDoesNotExistException|[CommitDoesNotExistException](#schemacommitdoesnotexistexception)|
|505|HTTP Version Not Supported|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|506|Variant Also Negotiates|PathDoesNotExistException|[PathDoesNotExistException](#schemapathdoesnotexistexception)|
|507|Insufficient Storage|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PostCommentReply

<a id="opIdPostCommentReply"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PostCommentReply' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PostCommentReply' \
  -d '{
    "inReplyTo": {},
    "clientRequestToken": {},
    "content": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PostCommentReply`

Posts a comment in reply to an existing comment on a comparison between commits or a pull request.

> Body parameter

```json
{
  "inReplyTo": {},
  "clientRequestToken": {},
  "content": {}
}
```

<h3 id="postcommentreply-parameters">Parameters</h3>

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
|body|body|[PostCommentReplyInput](#schemapostcommentreplyinput)|true|none|
|» inReplyTo|body|object|true|none|
|» clientRequestToken|body|object|false|none|
|» content|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PostCommentReply|

> Example responses

> 200 Response

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

<h3 id="postcommentreply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PostCommentReplyOutput](#schemapostcommentreplyoutput)|
|480|480|ClientRequestTokenRequiredException|[ClientRequestTokenRequiredException](#schemaclientrequesttokenrequiredexception)|
|481|481|InvalidClientRequestTokenException|[InvalidClientRequestTokenException](#schemainvalidclientrequesttokenexception)|
|482|482|IdempotencyParameterMismatchException|[IdempotencyParameterMismatchException](#schemaidempotencyparametermismatchexception)|
|483|483|CommentContentRequiredException|[CommentContentRequiredException](#schemacommentcontentrequiredexception)|
|484|484|CommentContentSizeLimitExceededException|[CommentContentSizeLimitExceededException](#schemacommentcontentsizelimitexceededexception)|
|485|485|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|486|486|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|487|487|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutCommentReaction

<a id="opIdPutCommentReaction"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PutCommentReaction' \
  -d '{
    "commentId": {},
    "reactionValue": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PutCommentReaction`

Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.

> Body parameter

```json
{
  "commentId": {},
  "reactionValue": {}
}
```

<h3 id="putcommentreaction-parameters">Parameters</h3>

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
|body|body|[PutCommentReactionInput](#schemaputcommentreactioninput)|true|none|
|» commentId|body|object|true|none|
|» reactionValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PutCommentReaction|

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

> 486 Response

```json
null
```

<h3 id="putcommentreaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|481|481|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|482|482|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|
|483|483|InvalidReactionValueException|[InvalidReactionValueException](#schemainvalidreactionvalueexception)|
|484|484|ReactionValueRequiredException|[ReactionValueRequiredException](#schemareactionvaluerequiredexception)|
|485|485|ReactionLimitExceededException|[ReactionLimitExceededException](#schemareactionlimitexceededexception)|
|486|486|CommentDeletedException|[CommentDeletedException](#schemacommentdeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutFile

<a id="opIdPutFile"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PutFile' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PutFile' \
  -d '{
    "repositoryName": {},
    "branchName": {},
    "fileContent": {},
    "filePath": {},
    "fileMode": {},
    "parentCommitId": {},
    "commitMessage": {},
    "name": {},
    "email": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PutFile`

Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.

> Body parameter

```json
{
  "repositoryName": {},
  "branchName": {},
  "fileContent": {},
  "filePath": {},
  "fileMode": {},
  "parentCommitId": {},
  "commitMessage": {},
  "name": {},
  "email": {}
}
```

<h3 id="putfile-parameters">Parameters</h3>

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
|body|body|[PutFileInput](#schemaputfileinput)|true|none|
|» repositoryName|body|object|true|none|
|» branchName|body|object|true|none|
|» fileContent|body|object|true|none|
|» filePath|body|object|true|none|
|» fileMode|body|object|false|none|
|» parentCommitId|body|object|false|none|
|» commitMessage|body|object|false|none|
|» name|body|object|false|none|
|» email|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PutFile|

> Example responses

> 200 Response

```json
{
  "commitId": {},
  "blobId": {},
  "treeId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

> 501 Response

```json
null
```

> 502 Response

```json
null
```

> 503 Response

```json
null
```

> 504 Response

```json
null
```

> 505 Response

```json
null
```

> 506 Response

```json
null
```

> 507 Response

```json
null
```

> 508 Response

```json
null
```

> 509 Response

```json
null
```

<h3 id="putfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutFileOutput](#schemaputfileoutput)|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|483|483|ParentCommitIdRequiredException|[ParentCommitIdRequiredException](#schemaparentcommitidrequiredexception)|
|484|484|InvalidParentCommitIdException|[InvalidParentCommitIdException](#schemainvalidparentcommitidexception)|
|485|485|ParentCommitDoesNotExistException|[ParentCommitDoesNotExistException](#schemaparentcommitdoesnotexistexception)|
|486|486|ParentCommitIdOutdatedException|[ParentCommitIdOutdatedException](#schemaparentcommitidoutdatedexception)|
|487|487|FileContentRequiredException|[FileContentRequiredException](#schemafilecontentrequiredexception)|
|488|488|FileContentSizeLimitExceededException|[FileContentSizeLimitExceededException](#schemafilecontentsizelimitexceededexception)|
|489|489|FolderContentSizeLimitExceededException|[FolderContentSizeLimitExceededException](#schemafoldercontentsizelimitexceededexception)|
|490|490|PathRequiredException|[PathRequiredException](#schemapathrequiredexception)|
|491|491|InvalidPathException|[InvalidPathException](#schemainvalidpathexception)|
|492|492|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|493|493|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|494|494|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|495|495|BranchNameIsTagNameException|[BranchNameIsTagNameException](#schemabranchnameistagnameexception)|
|496|496|InvalidFileModeException|[InvalidFileModeException](#schemainvalidfilemodeexception)|
|497|497|NameLengthExceededException|[NameLengthExceededException](#schemanamelengthexceededexception)|
|498|498|InvalidEmailException|[InvalidEmailException](#schemainvalidemailexception)|
|499|499|CommitMessageLengthExceededException|[CommitMessageLengthExceededException](#schemacommitmessagelengthexceededexception)|
|500|Internal Server Error|InvalidDeletionParameterException|[InvalidDeletionParameterException](#schemainvaliddeletionparameterexception)|
|501|Not Implemented|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|502|Bad Gateway|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|503|Service Unavailable|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|504|Gateway Timeout|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|505|HTTP Version Not Supported|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|
|506|Variant Also Negotiates|SameFileContentException|[SameFileContentException](#schemasamefilecontentexception)|
|507|Insufficient Storage|FileNameConflictsWithDirectoryNameException|[FileNameConflictsWithDirectoryNameException](#schemafilenameconflictswithdirectorynameexception)|
|508|Loop Detected|DirectoryNameConflictsWithFileNameException|[DirectoryNameConflictsWithFileNameException](#schemadirectorynameconflictswithfilenameexception)|
|509|Bandwidth Limit Exceeded|FilePathConflictsWithSubmodulePathException|[FilePathConflictsWithSubmodulePathException](#schemafilepathconflictswithsubmodulepathexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRepositoryTriggers

<a id="opIdPutRepositoryTriggers"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.PutRepositoryTriggers' \
  -d '{
    "repositoryName": {},
    "triggers": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers`

Replaces all triggers for a repository. Used to create or delete triggers.

> Body parameter

```json
{
  "repositoryName": {},
  "triggers": {}
}
```

<h3 id="putrepositorytriggers-parameters">Parameters</h3>

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
|body|body|[PutRepositoryTriggersInput](#schemaputrepositorytriggersinput)|true|none|
|» repositoryName|body|object|true|none|
|» triggers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.PutRepositoryTriggers|

> Example responses

> 200 Response

```json
{
  "configurationId": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

<h3 id="putrepositorytriggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRepositoryTriggersOutput](#schemaputrepositorytriggersoutput)|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|RepositoryTriggersListRequiredException|[RepositoryTriggersListRequiredException](#schemarepositorytriggerslistrequiredexception)|
|484|484|MaximumRepositoryTriggersExceededException|[MaximumRepositoryTriggersExceededException](#schemamaximumrepositorytriggersexceededexception)|
|485|485|InvalidRepositoryTriggerNameException|[InvalidRepositoryTriggerNameException](#schemainvalidrepositorytriggernameexception)|
|486|486|InvalidRepositoryTriggerDestinationArnException|[InvalidRepositoryTriggerDestinationArnException](#schemainvalidrepositorytriggerdestinationarnexception)|
|487|487|InvalidRepositoryTriggerRegionException|[InvalidRepositoryTriggerRegionException](#schemainvalidrepositorytriggerregionexception)|
|488|488|InvalidRepositoryTriggerCustomDataException|[InvalidRepositoryTriggerCustomDataException](#schemainvalidrepositorytriggercustomdataexception)|
|489|489|MaximumBranchesExceededException|[MaximumBranchesExceededException](#schemamaximumbranchesexceededexception)|
|490|490|InvalidRepositoryTriggerBranchNameException|[InvalidRepositoryTriggerBranchNameException](#schemainvalidrepositorytriggerbranchnameexception)|
|491|491|InvalidRepositoryTriggerEventsException|[InvalidRepositoryTriggerEventsException](#schemainvalidrepositorytriggereventsexception)|
|492|492|RepositoryTriggerNameRequiredException|[RepositoryTriggerNameRequiredException](#schemarepositorytriggernamerequiredexception)|
|493|493|RepositoryTriggerDestinationArnRequiredException|[RepositoryTriggerDestinationArnRequiredException](#schemarepositorytriggerdestinationarnrequiredexception)|
|494|494|RepositoryTriggerBranchNameListRequiredException|[RepositoryTriggerBranchNameListRequiredException](#schemarepositorytriggerbranchnamelistrequiredexception)|
|495|495|RepositoryTriggerEventsListRequiredException|[RepositoryTriggerEventsListRequiredException](#schemarepositorytriggereventslistrequiredexception)|
|496|496|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|497|497|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|498|498|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|499|499|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|500|Internal Server Error|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.TagResource`

Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|
|483|483|InvalidResourceArnException|[InvalidResourceArnException](#schemainvalidresourcearnexception)|
|484|484|TagsMapRequiredException|[TagsMapRequiredException](#schematagsmaprequiredexception)|
|485|485|InvalidTagsMapException|[InvalidTagsMapException](#schemainvalidtagsmapexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|487|487|InvalidSystemTagUsageException|[InvalidSystemTagUsageException](#schemainvalidsystemtagusageexception)|
|488|488|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestRepositoryTriggers

<a id="opIdTestRepositoryTriggers"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.TestRepositoryTriggers' \
  -d '{
    "repositoryName": {},
    "triggers": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers`

Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.

> Body parameter

```json
{
  "repositoryName": {},
  "triggers": {}
}
```

<h3 id="testrepositorytriggers-parameters">Parameters</h3>

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
|body|body|[TestRepositoryTriggersInput](#schematestrepositorytriggersinput)|true|none|
|» repositoryName|body|object|true|none|
|» triggers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.TestRepositoryTriggers|

> Example responses

> 200 Response

```json
{
  "successfulExecutions": {},
  "failedExecutions": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

> 496 Response

```json
null
```

> 497 Response

```json
null
```

> 498 Response

```json
null
```

> 499 Response

```json
null
```

> 500 Response

```json
null
```

<h3 id="testrepositorytriggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestRepositoryTriggersOutput](#schematestrepositorytriggersoutput)|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|RepositoryTriggersListRequiredException|[RepositoryTriggersListRequiredException](#schemarepositorytriggerslistrequiredexception)|
|484|484|MaximumRepositoryTriggersExceededException|[MaximumRepositoryTriggersExceededException](#schemamaximumrepositorytriggersexceededexception)|
|485|485|InvalidRepositoryTriggerNameException|[InvalidRepositoryTriggerNameException](#schemainvalidrepositorytriggernameexception)|
|486|486|InvalidRepositoryTriggerDestinationArnException|[InvalidRepositoryTriggerDestinationArnException](#schemainvalidrepositorytriggerdestinationarnexception)|
|487|487|InvalidRepositoryTriggerRegionException|[InvalidRepositoryTriggerRegionException](#schemainvalidrepositorytriggerregionexception)|
|488|488|InvalidRepositoryTriggerCustomDataException|[InvalidRepositoryTriggerCustomDataException](#schemainvalidrepositorytriggercustomdataexception)|
|489|489|MaximumBranchesExceededException|[MaximumBranchesExceededException](#schemamaximumbranchesexceededexception)|
|490|490|InvalidRepositoryTriggerBranchNameException|[InvalidRepositoryTriggerBranchNameException](#schemainvalidrepositorytriggerbranchnameexception)|
|491|491|InvalidRepositoryTriggerEventsException|[InvalidRepositoryTriggerEventsException](#schemainvalidrepositorytriggereventsexception)|
|492|492|RepositoryTriggerNameRequiredException|[RepositoryTriggerNameRequiredException](#schemarepositorytriggernamerequiredexception)|
|493|493|RepositoryTriggerDestinationArnRequiredException|[RepositoryTriggerDestinationArnRequiredException](#schemarepositorytriggerdestinationarnrequiredexception)|
|494|494|RepositoryTriggerBranchNameListRequiredException|[RepositoryTriggerBranchNameListRequiredException](#schemarepositorytriggerbranchnamelistrequiredexception)|
|495|495|RepositoryTriggerEventsListRequiredException|[RepositoryTriggerEventsListRequiredException](#schemarepositorytriggereventslistrequiredexception)|
|496|496|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|497|497|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|498|498|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|499|499|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|500|Internal Server Error|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UntagResource`

Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|482|482|ResourceArnRequiredException|[ResourceArnRequiredException](#schemaresourcearnrequiredexception)|
|483|483|InvalidResourceArnException|[InvalidResourceArnException](#schemainvalidresourcearnexception)|
|484|484|TagKeysListRequiredException|[TagKeysListRequiredException](#schematagkeyslistrequiredexception)|
|485|485|InvalidTagKeysListException|[InvalidTagKeysListException](#schemainvalidtagkeyslistexception)|
|486|486|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|487|487|InvalidSystemTagUsageException|[InvalidSystemTagUsageException](#schemainvalidsystemtagusageexception)|
|488|488|TagPolicyException|[TagPolicyException](#schematagpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApprovalRuleTemplateContent

<a id="opIdUpdateApprovalRuleTemplateContent"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateApprovalRuleTemplateContent' \
  -d '{
    "approvalRuleTemplateName": {},
    "newRuleContent": {},
    "existingRuleContentSha256": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent`

Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "newRuleContent": {},
  "existingRuleContentSha256": {}
}
```

<h3 id="updateapprovalruletemplatecontent-parameters">Parameters</h3>

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
|body|body|[UpdateApprovalRuleTemplateContentInput](#schemaupdateapprovalruletemplatecontentinput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» newRuleContent|body|object|true|none|
|» existingRuleContentSha256|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateApprovalRuleTemplateContent|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
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

<h3 id="updateapprovalruletemplatecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApprovalRuleTemplateContentOutput](#schemaupdateapprovalruletemplatecontentoutput)|
|480|480|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|481|481|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|InvalidApprovalRuleTemplateContentException|[InvalidApprovalRuleTemplateContentException](#schemainvalidapprovalruletemplatecontentexception)|
|484|484|InvalidRuleContentSha256Exception|[InvalidRuleContentSha256Exception](#schemainvalidrulecontentsha256exception)|
|485|485|ApprovalRuleTemplateContentRequiredException|[ApprovalRuleTemplateContentRequiredException](#schemaapprovalruletemplatecontentrequiredexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApprovalRuleTemplateDescription

<a id="opIdUpdateApprovalRuleTemplateDescription"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateApprovalRuleTemplateDescription' \
  -d '{
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription`

Updates the description for a specified approval rule template.

> Body parameter

```json
{
  "approvalRuleTemplateName": {},
  "approvalRuleTemplateDescription": {}
}
```

<h3 id="updateapprovalruletemplatedescription-parameters">Parameters</h3>

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
|body|body|[UpdateApprovalRuleTemplateDescriptionInput](#schemaupdateapprovalruletemplatedescriptioninput)|true|none|
|» approvalRuleTemplateName|body|object|true|none|
|» approvalRuleTemplateDescription|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateApprovalRuleTemplateDescription|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
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

<h3 id="updateapprovalruletemplatedescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApprovalRuleTemplateDescriptionOutput](#schemaupdateapprovalruletemplatedescriptionoutput)|
|480|480|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|481|481|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|InvalidApprovalRuleTemplateDescriptionException|[InvalidApprovalRuleTemplateDescriptionException](#schemainvalidapprovalruletemplatedescriptionexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateApprovalRuleTemplateName

<a id="opIdUpdateApprovalRuleTemplateName"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateApprovalRuleTemplateName' \
  -d '{
    "oldApprovalRuleTemplateName": {},
    "newApprovalRuleTemplateName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName`

Updates the name of a specified approval rule template.

> Body parameter

```json
{
  "oldApprovalRuleTemplateName": {},
  "newApprovalRuleTemplateName": {}
}
```

<h3 id="updateapprovalruletemplatename-parameters">Parameters</h3>

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
|body|body|[UpdateApprovalRuleTemplateNameInput](#schemaupdateapprovalruletemplatenameinput)|true|none|
|» oldApprovalRuleTemplateName|body|object|true|none|
|» newApprovalRuleTemplateName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateApprovalRuleTemplateName|

> Example responses

> 200 Response

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
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

<h3 id="updateapprovalruletemplatename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateApprovalRuleTemplateNameOutput](#schemaupdateapprovalruletemplatenameoutput)|
|480|480|InvalidApprovalRuleTemplateNameException|[InvalidApprovalRuleTemplateNameException](#schemainvalidapprovalruletemplatenameexception)|
|481|481|ApprovalRuleTemplateNameRequiredException|[ApprovalRuleTemplateNameRequiredException](#schemaapprovalruletemplatenamerequiredexception)|
|482|482|ApprovalRuleTemplateDoesNotExistException|[ApprovalRuleTemplateDoesNotExistException](#schemaapprovalruletemplatedoesnotexistexception)|
|483|483|ApprovalRuleTemplateNameAlreadyExistsException|[ApprovalRuleTemplateNameAlreadyExistsException](#schemaapprovalruletemplatenamealreadyexistsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateComment

<a id="opIdUpdateComment"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateComment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateComment' \
  -d '{
    "commentId": {},
    "content": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateComment`

Replaces the contents of a comment.

> Body parameter

```json
{
  "commentId": {},
  "content": {}
}
```

<h3 id="updatecomment-parameters">Parameters</h3>

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
|body|body|[UpdateCommentInput](#schemaupdatecommentinput)|true|none|
|» commentId|body|object|true|none|
|» content|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateComment|

> Example responses

> 200 Response

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
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

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updatecomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCommentOutput](#schemaupdatecommentoutput)|
|480|480|CommentContentRequiredException|[CommentContentRequiredException](#schemacommentcontentrequiredexception)|
|481|481|CommentContentSizeLimitExceededException|[CommentContentSizeLimitExceededException](#schemacommentcontentsizelimitexceededexception)|
|482|482|CommentDoesNotExistException|[CommentDoesNotExistException](#schemacommentdoesnotexistexception)|
|483|483|CommentIdRequiredException|[CommentIdRequiredException](#schemacommentidrequiredexception)|
|484|484|InvalidCommentIdException|[InvalidCommentIdException](#schemainvalidcommentidexception)|
|485|485|CommentNotCreatedByCallerException|[CommentNotCreatedByCallerException](#schemacommentnotcreatedbycallerexception)|
|486|486|CommentDeletedException|[CommentDeletedException](#schemacommentdeletedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDefaultBranch

<a id="opIdUpdateDefaultBranch"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateDefaultBranch' \
  -d '{
    "repositoryName": {},
    "defaultBranchName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch`

<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>

> Body parameter

```json
{
  "repositoryName": {},
  "defaultBranchName": {}
}
```

<h3 id="updatedefaultbranch-parameters">Parameters</h3>

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
|body|body|[UpdateDefaultBranchInput](#schemaupdatedefaultbranchinput)|true|none|
|» repositoryName|body|object|true|none|
|» defaultBranchName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateDefaultBranch|

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

<h3 id="updatedefaultbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|BranchNameRequiredException|[BranchNameRequiredException](#schemabranchnamerequiredexception)|
|484|484|InvalidBranchNameException|[InvalidBranchNameException](#schemainvalidbranchnameexception)|
|485|485|BranchDoesNotExistException|[BranchDoesNotExistException](#schemabranchdoesnotexistexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePullRequestApprovalRuleContent

<a id="opIdUpdatePullRequestApprovalRuleContent"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdatePullRequestApprovalRuleContent' \
  -d '{
    "pullRequestId": {},
    "approvalRuleName": {},
    "existingRuleContentSha256": {},
    "newRuleContent": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent`

Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 

> Body parameter

```json
{
  "pullRequestId": {},
  "approvalRuleName": {},
  "existingRuleContentSha256": {},
  "newRuleContent": {}
}
```

<h3 id="updatepullrequestapprovalrulecontent-parameters">Parameters</h3>

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
|body|body|[UpdatePullRequestApprovalRuleContentInput](#schemaupdatepullrequestapprovalrulecontentinput)|true|none|
|» pullRequestId|body|object|true|none|
|» approvalRuleName|body|object|true|none|
|» existingRuleContentSha256|body|object|false|none|
|» newRuleContent|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdatePullRequestApprovalRuleContent|

> Example responses

> 200 Response

```json
{
  "approvalRule": {
    "approvalRuleId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {},
    "originApprovalRuleTemplate": {
      "approvalRuleTemplateId": {},
      "approvalRuleTemplateName": {}
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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="updatepullrequestapprovalrulecontent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePullRequestApprovalRuleContentOutput](#schemaupdatepullrequestapprovalrulecontentoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|484|484|ApprovalRuleNameRequiredException|[ApprovalRuleNameRequiredException](#schemaapprovalrulenamerequiredexception)|
|485|485|InvalidApprovalRuleNameException|[InvalidApprovalRuleNameException](#schemainvalidapprovalrulenameexception)|
|486|486|ApprovalRuleDoesNotExistException|[ApprovalRuleDoesNotExistException](#schemaapprovalruledoesnotexistexception)|
|487|487|InvalidRuleContentSha256Exception|[InvalidRuleContentSha256Exception](#schemainvalidrulecontentsha256exception)|
|488|488|ApprovalRuleContentRequiredException|[ApprovalRuleContentRequiredException](#schemaapprovalrulecontentrequiredexception)|
|489|489|InvalidApprovalRuleContentException|[InvalidApprovalRuleContentException](#schemainvalidapprovalrulecontentexception)|
|490|490|CannotModifyApprovalRuleFromTemplateException|[CannotModifyApprovalRuleFromTemplateException](#schemacannotmodifyapprovalrulefromtemplateexception)|
|491|491|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|492|492|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|493|493|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|494|494|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|495|495|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePullRequestApprovalState

<a id="opIdUpdatePullRequestApprovalState"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdatePullRequestApprovalState' \
  -d '{
    "pullRequestId": {},
    "revisionId": {},
    "approvalState": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState`

Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.

> Body parameter

```json
{
  "pullRequestId": {},
  "revisionId": {},
  "approvalState": {}
}
```

<h3 id="updatepullrequestapprovalstate-parameters">Parameters</h3>

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
|body|body|[UpdatePullRequestApprovalStateInput](#schemaupdatepullrequestapprovalstateinput)|true|none|
|» pullRequestId|body|object|true|none|
|» revisionId|body|object|true|none|
|» approvalState|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdatePullRequestApprovalState|

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

> 491 Response

```json
null
```

> 492 Response

```json
null
```

> 493 Response

```json
null
```

> 494 Response

```json
null
```

> 495 Response

```json
null
```

<h3 id="updatepullrequestapprovalstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidRevisionIdException|[InvalidRevisionIdException](#schemainvalidrevisionidexception)|
|484|484|RevisionIdRequiredException|[RevisionIdRequiredException](#schemarevisionidrequiredexception)|
|485|485|InvalidApprovalStateException|[InvalidApprovalStateException](#schemainvalidapprovalstateexception)|
|486|486|ApprovalStateRequiredException|[ApprovalStateRequiredException](#schemaapprovalstaterequiredexception)|
|487|487|PullRequestCannotBeApprovedByAuthorException|[PullRequestCannotBeApprovedByAuthorException](#schemapullrequestcannotbeapprovedbyauthorexception)|
|488|488|RevisionNotCurrentException|[RevisionNotCurrentException](#schemarevisionnotcurrentexception)|
|489|489|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|
|490|490|MaximumNumberOfApprovalsExceededException|[MaximumNumberOfApprovalsExceededException](#schemamaximumnumberofapprovalsexceededexception)|
|491|491|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|492|492|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|493|493|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|494|494|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|495|495|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePullRequestDescription

<a id="opIdUpdatePullRequestDescription"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdatePullRequestDescription' \
  -d '{
    "pullRequestId": {},
    "description": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription`

Replaces the contents of the description of a pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "description": {}
}
```

<h3 id="updatepullrequestdescription-parameters">Parameters</h3>

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
|body|body|[UpdatePullRequestDescriptionInput](#schemaupdatepullrequestdescriptioninput)|true|none|
|» pullRequestId|body|object|true|none|
|» description|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdatePullRequestDescription|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

<h3 id="updatepullrequestdescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePullRequestDescriptionOutput](#schemaupdatepullrequestdescriptionoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidDescriptionException|[InvalidDescriptionException](#schemainvaliddescriptionexception)|
|484|484|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePullRequestStatus

<a id="opIdUpdatePullRequestStatus"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdatePullRequestStatus' \
  -d '{
    "pullRequestId": {},
    "pullRequestStatus": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus`

Updates the status of a pull request. 

> Body parameter

```json
{
  "pullRequestId": {},
  "pullRequestStatus": {}
}
```

<h3 id="updatepullrequeststatus-parameters">Parameters</h3>

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
|body|body|[UpdatePullRequestStatusInput](#schemaupdatepullrequeststatusinput)|true|none|
|» pullRequestId|body|object|true|none|
|» pullRequestStatus|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdatePullRequestStatus|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

<h3 id="updatepullrequeststatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePullRequestStatusOutput](#schemaupdatepullrequeststatusoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|InvalidPullRequestStatusUpdateException|[InvalidPullRequestStatusUpdateException](#schemainvalidpullrequeststatusupdateexception)|
|484|484|InvalidPullRequestStatusException|[InvalidPullRequestStatusException](#schemainvalidpullrequeststatusexception)|
|485|485|PullRequestStatusRequiredException|[PullRequestStatusRequiredException](#schemapullrequeststatusrequiredexception)|
|486|486|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|487|487|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|488|488|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|489|489|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|490|490|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePullRequestTitle

<a id="opIdUpdatePullRequestTitle"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdatePullRequestTitle' \
  -d '{
    "pullRequestId": {},
    "title": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle`

Replaces the title of a pull request.

> Body parameter

```json
{
  "pullRequestId": {},
  "title": {}
}
```

<h3 id="updatepullrequesttitle-parameters">Parameters</h3>

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
|body|body|[UpdatePullRequestTitleInput](#schemaupdatepullrequesttitleinput)|true|none|
|» pullRequestId|body|object|true|none|
|» title|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdatePullRequestTitle|

> Example responses

> 200 Response

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
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

<h3 id="updatepullrequesttitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePullRequestTitleOutput](#schemaupdatepullrequesttitleoutput)|
|480|480|PullRequestDoesNotExistException|[PullRequestDoesNotExistException](#schemapullrequestdoesnotexistexception)|
|481|481|InvalidPullRequestIdException|[InvalidPullRequestIdException](#schemainvalidpullrequestidexception)|
|482|482|PullRequestIdRequiredException|[PullRequestIdRequiredException](#schemapullrequestidrequiredexception)|
|483|483|TitleRequiredException|[TitleRequiredException](#schematitlerequiredexception)|
|484|484|InvalidTitleException|[InvalidTitleException](#schemainvalidtitleexception)|
|485|485|PullRequestAlreadyClosedException|[PullRequestAlreadyClosedException](#schemapullrequestalreadyclosedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRepositoryDescription

<a id="opIdUpdateRepositoryDescription"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateRepositoryDescription' \
  -d '{
    "repositoryName": {},
    "repositoryDescription": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription`

<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>

> Body parameter

```json
{
  "repositoryName": {},
  "repositoryDescription": {}
}
```

<h3 id="updaterepositorydescription-parameters">Parameters</h3>

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
|body|body|[UpdateRepositoryDescriptionInput](#schemaupdaterepositorydescriptioninput)|true|none|
|» repositoryName|body|object|true|none|
|» repositoryDescription|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateRepositoryDescription|

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

<h3 id="updaterepositorydescription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|481|481|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|482|482|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|
|483|483|InvalidRepositoryDescriptionException|[InvalidRepositoryDescriptionException](#schemainvalidrepositorydescriptionexception)|
|484|484|EncryptionIntegrityChecksFailedException|[EncryptionIntegrityChecksFailedException](#schemaencryptionintegritychecksfailedexception)|
|485|485|EncryptionKeyAccessDeniedException|[EncryptionKeyAccessDeniedException](#schemaencryptionkeyaccessdeniedexception)|
|486|486|EncryptionKeyDisabledException|[EncryptionKeyDisabledException](#schemaencryptionkeydisabledexception)|
|487|487|EncryptionKeyNotFoundException|[EncryptionKeyNotFoundException](#schemaencryptionkeynotfoundexception)|
|488|488|EncryptionKeyUnavailableException|[EncryptionKeyUnavailableException](#schemaencryptionkeyunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRepositoryName

<a id="opIdUpdateRepositoryName"></a>

> Code samples

```bash
curl 'https://codecommit.us-east-1.amazonaws.com/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: CodeCommit_20150413.UpdateRepositoryName' \
  -d '{
    "oldName": {},
    "newName": {}
  }'
```

`POST /#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName`

Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

> Body parameter

```json
{
  "oldName": {},
  "newName": {}
}
```

<h3 id="updaterepositoryname-parameters">Parameters</h3>

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
|body|body|[UpdateRepositoryNameInput](#schemaupdaterepositorynameinput)|true|none|
|» oldName|body|object|true|none|
|» newName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|CodeCommit_20150413.UpdateRepositoryName|

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

<h3 id="updaterepositoryname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|RepositoryDoesNotExistException|[RepositoryDoesNotExistException](#schemarepositorydoesnotexistexception)|
|481|481|RepositoryNameExistsException|[RepositoryNameExistsException](#schemarepositorynameexistsexception)|
|482|482|RepositoryNameRequiredException|[RepositoryNameRequiredException](#schemarepositorynamerequiredexception)|
|483|483|InvalidRepositoryNameException|[InvalidRepositoryNameException](#schemainvalidrepositorynameexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateApprovalRuleTemplateWithRepositoryInput">AssociateApprovalRuleTemplateWithRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateapprovalruletemplatewithrepositoryinput"></a>
<a id="schema_AssociateApprovalRuleTemplateWithRepositoryInput"></a>
<a id="tocSassociateapprovalruletemplatewithrepositoryinput"></a>
<a id="tocsassociateapprovalruletemplatewithrepositoryinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_ApprovalRuleTemplateNameRequiredException">ApprovalRuleTemplateNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatenamerequiredexception"></a>
<a id="schema_ApprovalRuleTemplateNameRequiredException"></a>
<a id="tocSapprovalruletemplatenamerequiredexception"></a>
<a id="tocsapprovalruletemplatenamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidApprovalRuleTemplateNameException">InvalidApprovalRuleTemplateNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalruletemplatenameexception"></a>
<a id="schema_InvalidApprovalRuleTemplateNameException"></a>
<a id="tocSinvalidapprovalruletemplatenameexception"></a>
<a id="tocsinvalidapprovalruletemplatenameexception"></a>

```json
null
```

<h2 id="tocS_ApprovalRuleTemplateDoesNotExistException">ApprovalRuleTemplateDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatedoesnotexistexception"></a>
<a id="schema_ApprovalRuleTemplateDoesNotExistException"></a>
<a id="tocSapprovalruletemplatedoesnotexistexception"></a>
<a id="tocsapprovalruletemplatedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_MaximumRuleTemplatesAssociatedWithRepositoryException">MaximumRuleTemplatesAssociatedWithRepositoryException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumruletemplatesassociatedwithrepositoryexception"></a>
<a id="schema_MaximumRuleTemplatesAssociatedWithRepositoryException"></a>
<a id="tocSmaximumruletemplatesassociatedwithrepositoryexception"></a>
<a id="tocsmaximumruletemplatesassociatedwithrepositoryexception"></a>

```json
null
```

<h2 id="tocS_RepositoryNameRequiredException">RepositoryNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynamerequiredexception"></a>
<a id="schema_RepositoryNameRequiredException"></a>
<a id="tocSrepositorynamerequiredexception"></a>
<a id="tocsrepositorynamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryNameException">InvalidRepositoryNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorynameexception"></a>
<a id="schema_InvalidRepositoryNameException"></a>
<a id="tocSinvalidrepositorynameexception"></a>
<a id="tocsinvalidrepositorynameexception"></a>

```json
null
```

<h2 id="tocS_RepositoryDoesNotExistException">RepositoryDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydoesnotexistexception"></a>
<a id="schema_RepositoryDoesNotExistException"></a>
<a id="tocSrepositorydoesnotexistexception"></a>
<a id="tocsrepositorydoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_EncryptionIntegrityChecksFailedException">EncryptionIntegrityChecksFailedException</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionintegritychecksfailedexception"></a>
<a id="schema_EncryptionIntegrityChecksFailedException"></a>
<a id="tocSencryptionintegritychecksfailedexception"></a>
<a id="tocsencryptionintegritychecksfailedexception"></a>

```json
null
```

<h2 id="tocS_EncryptionKeyAccessDeniedException">EncryptionKeyAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyaccessdeniedexception"></a>
<a id="schema_EncryptionKeyAccessDeniedException"></a>
<a id="tocSencryptionkeyaccessdeniedexception"></a>
<a id="tocsencryptionkeyaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_EncryptionKeyDisabledException">EncryptionKeyDisabledException</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeydisabledexception"></a>
<a id="schema_EncryptionKeyDisabledException"></a>
<a id="tocSencryptionkeydisabledexception"></a>
<a id="tocsencryptionkeydisabledexception"></a>

```json
null
```

<h2 id="tocS_EncryptionKeyNotFoundException">EncryptionKeyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeynotfoundexception"></a>
<a id="schema_EncryptionKeyNotFoundException"></a>
<a id="tocSencryptionkeynotfoundexception"></a>
<a id="tocsencryptionkeynotfoundexception"></a>

```json
null
```

<h2 id="tocS_EncryptionKeyUnavailableException">EncryptionKeyUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionkeyunavailableexception"></a>
<a id="schema_EncryptionKeyUnavailableException"></a>
<a id="tocSencryptionkeyunavailableexception"></a>
<a id="tocsencryptionkeyunavailableexception"></a>

```json
null
```

<h2 id="tocS_BatchAssociateApprovalRuleTemplateWithRepositoriesOutput">BatchAssociateApprovalRuleTemplateWithRepositoriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateapprovalruletemplatewithrepositoriesoutput"></a>
<a id="schema_BatchAssociateApprovalRuleTemplateWithRepositoriesOutput"></a>
<a id="tocSbatchassociateapprovalruletemplatewithrepositoriesoutput"></a>
<a id="tocsbatchassociateapprovalruletemplatewithrepositoriesoutput"></a>

```json
{
  "associatedRepositoryNames": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedRepositoryNames|object|true|none|none|
|errors|object|true|none|none|

<h2 id="tocS_BatchAssociateApprovalRuleTemplateWithRepositoriesInput">BatchAssociateApprovalRuleTemplateWithRepositoriesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateapprovalruletemplatewithrepositoriesinput"></a>
<a id="schema_BatchAssociateApprovalRuleTemplateWithRepositoriesInput"></a>
<a id="tocSbatchassociateapprovalruletemplatewithrepositoriesinput"></a>
<a id="tocsbatchassociateapprovalruletemplatewithrepositoriesinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "repositoryNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|repositoryNames|object|true|none|none|

<h2 id="tocS_RepositoryNamesRequiredException">RepositoryNamesRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynamesrequiredexception"></a>
<a id="schema_RepositoryNamesRequiredException"></a>
<a id="tocSrepositorynamesrequiredexception"></a>
<a id="tocsrepositorynamesrequiredexception"></a>

```json
null
```

<h2 id="tocS_MaximumRepositoryNamesExceededException">MaximumRepositoryNamesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumrepositorynamesexceededexception"></a>
<a id="schema_MaximumRepositoryNamesExceededException"></a>
<a id="tocSmaximumrepositorynamesexceededexception"></a>
<a id="tocsmaximumrepositorynamesexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchDescribeMergeConflictsOutput">BatchDescribeMergeConflictsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribemergeconflictsoutput"></a>
<a id="schema_BatchDescribeMergeConflictsOutput"></a>
<a id="tocSbatchdescribemergeconflictsoutput"></a>
<a id="tocsbatchdescribemergeconflictsoutput"></a>

```json
{
  "conflicts": {},
  "nextToken": {},
  "errors": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflicts|object|true|none|none|
|nextToken|object|false|none|none|
|errors|object|false|none|none|
|destinationCommitId|object|true|none|none|
|sourceCommitId|object|true|none|none|
|baseCommitId|object|false|none|none|

<h2 id="tocS_BatchDescribeMergeConflictsInput">BatchDescribeMergeConflictsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribemergeconflictsinput"></a>
<a id="schema_BatchDescribeMergeConflictsInput"></a>
<a id="tocSbatchdescribemergeconflictsinput"></a>
<a id="tocsbatchdescribemergeconflictsinput"></a>

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "maxMergeHunks": {},
  "maxConflictFiles": {},
  "filePaths": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|mergeOption|object|true|none|none|
|maxMergeHunks|object|false|none|none|
|maxConflictFiles|object|false|none|none|
|filePaths|object|false|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_MergeOptionRequiredException">MergeOptionRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemamergeoptionrequiredexception"></a>
<a id="schema_MergeOptionRequiredException"></a>
<a id="tocSmergeoptionrequiredexception"></a>
<a id="tocsmergeoptionrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidMergeOptionException">InvalidMergeOptionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmergeoptionexception"></a>
<a id="schema_InvalidMergeOptionException"></a>
<a id="tocSinvalidmergeoptionexception"></a>
<a id="tocsinvalidmergeoptionexception"></a>

```json
null
```

<h2 id="tocS_InvalidContinuationTokenException">InvalidContinuationTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcontinuationtokenexception"></a>
<a id="schema_InvalidContinuationTokenException"></a>
<a id="tocSinvalidcontinuationtokenexception"></a>
<a id="tocsinvalidcontinuationtokenexception"></a>

```json
null
```

<h2 id="tocS_CommitRequiredException">CommitRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemacommitrequiredexception"></a>
<a id="schema_CommitRequiredException"></a>
<a id="tocScommitrequiredexception"></a>
<a id="tocscommitrequiredexception"></a>

```json
null
```

<h2 id="tocS_CommitDoesNotExistException">CommitDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemacommitdoesnotexistexception"></a>
<a id="schema_CommitDoesNotExistException"></a>
<a id="tocScommitdoesnotexistexception"></a>
<a id="tocscommitdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidCommitException">InvalidCommitException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcommitexception"></a>
<a id="schema_InvalidCommitException"></a>
<a id="tocSinvalidcommitexception"></a>
<a id="tocsinvalidcommitexception"></a>

```json
null
```

<h2 id="tocS_TipsDivergenceExceededException">TipsDivergenceExceededException</h2>
<!-- backwards compatibility -->
<a id="schematipsdivergenceexceededexception"></a>
<a id="schema_TipsDivergenceExceededException"></a>
<a id="tocStipsdivergenceexceededexception"></a>
<a id="tocstipsdivergenceexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidMaxConflictFilesException">InvalidMaxConflictFilesException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmaxconflictfilesexception"></a>
<a id="schema_InvalidMaxConflictFilesException"></a>
<a id="tocSinvalidmaxconflictfilesexception"></a>
<a id="tocsinvalidmaxconflictfilesexception"></a>

```json
null
```

<h2 id="tocS_InvalidMaxMergeHunksException">InvalidMaxMergeHunksException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmaxmergehunksexception"></a>
<a id="schema_InvalidMaxMergeHunksException"></a>
<a id="tocSinvalidmaxmergehunksexception"></a>
<a id="tocsinvalidmaxmergehunksexception"></a>

```json
null
```

<h2 id="tocS_InvalidConflictDetailLevelException">InvalidConflictDetailLevelException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconflictdetaillevelexception"></a>
<a id="schema_InvalidConflictDetailLevelException"></a>
<a id="tocSinvalidconflictdetaillevelexception"></a>
<a id="tocsinvalidconflictdetaillevelexception"></a>

```json
null
```

<h2 id="tocS_InvalidConflictResolutionStrategyException">InvalidConflictResolutionStrategyException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconflictresolutionstrategyexception"></a>
<a id="schema_InvalidConflictResolutionStrategyException"></a>
<a id="tocSinvalidconflictresolutionstrategyexception"></a>
<a id="tocsinvalidconflictresolutionstrategyexception"></a>

```json
null
```

<h2 id="tocS_MaximumFileContentToLoadExceededException">MaximumFileContentToLoadExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumfilecontenttoloadexceededexception"></a>
<a id="schema_MaximumFileContentToLoadExceededException"></a>
<a id="tocSmaximumfilecontenttoloadexceededexception"></a>
<a id="tocsmaximumfilecontenttoloadexceededexception"></a>

```json
null
```

<h2 id="tocS_MaximumItemsToCompareExceededException">MaximumItemsToCompareExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumitemstocompareexceededexception"></a>
<a id="schema_MaximumItemsToCompareExceededException"></a>
<a id="tocSmaximumitemstocompareexceededexception"></a>
<a id="tocsmaximumitemstocompareexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput">BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateapprovalruletemplatefromrepositoriesoutput"></a>
<a id="schema_BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput"></a>
<a id="tocSbatchdisassociateapprovalruletemplatefromrepositoriesoutput"></a>
<a id="tocsbatchdisassociateapprovalruletemplatefromrepositoriesoutput"></a>

```json
{
  "disassociatedRepositoryNames": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disassociatedRepositoryNames|object|true|none|none|
|errors|object|true|none|none|

<h2 id="tocS_BatchDisassociateApprovalRuleTemplateFromRepositoriesInput">BatchDisassociateApprovalRuleTemplateFromRepositoriesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateapprovalruletemplatefromrepositoriesinput"></a>
<a id="schema_BatchDisassociateApprovalRuleTemplateFromRepositoriesInput"></a>
<a id="tocSbatchdisassociateapprovalruletemplatefromrepositoriesinput"></a>
<a id="tocsbatchdisassociateapprovalruletemplatefromrepositoriesinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "repositoryNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|repositoryNames|object|true|none|none|

<h2 id="tocS_BatchGetCommitsOutput">BatchGetCommitsOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcommitsoutput"></a>
<a id="schema_BatchGetCommitsOutput"></a>
<a id="tocSbatchgetcommitsoutput"></a>
<a id="tocsbatchgetcommitsoutput"></a>

```json
{
  "commits": {},
  "errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commits|object|false|none|none|
|errors|object|false|none|none|

<h2 id="tocS_BatchGetCommitsInput">BatchGetCommitsInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcommitsinput"></a>
<a id="schema_BatchGetCommitsInput"></a>
<a id="tocSbatchgetcommitsinput"></a>
<a id="tocsbatchgetcommitsinput"></a>

```json
{
  "commitIds": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitIds|object|true|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_CommitIdsListRequiredException">CommitIdsListRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemacommitidslistrequiredexception"></a>
<a id="schema_CommitIdsListRequiredException"></a>
<a id="tocScommitidslistrequiredexception"></a>
<a id="tocscommitidslistrequiredexception"></a>

```json
null
```

<h2 id="tocS_CommitIdsLimitExceededException">CommitIdsLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacommitidslimitexceededexception"></a>
<a id="schema_CommitIdsLimitExceededException"></a>
<a id="tocScommitidslimitexceededexception"></a>
<a id="tocscommitidslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_BatchGetRepositoriesOutput">BatchGetRepositoriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrepositoriesoutput"></a>
<a id="schema_BatchGetRepositoriesOutput"></a>
<a id="tocSbatchgetrepositoriesoutput"></a>
<a id="tocsbatchgetrepositoriesoutput"></a>

```json
{
  "repositories": {},
  "repositoriesNotFound": {}
}
```

Represents the output of a batch get repositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|object|false|none|none|
|repositoriesNotFound|object|false|none|none|

<h2 id="tocS_BatchGetRepositoriesInput">BatchGetRepositoriesInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrepositoriesinput"></a>
<a id="schema_BatchGetRepositoriesInput"></a>
<a id="tocSbatchgetrepositoriesinput"></a>
<a id="tocsbatchgetrepositoriesinput"></a>

```json
{
  "repositoryNames": {}
}
```

Represents the input of a batch get repositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryNames|object|true|none|none|

<h2 id="tocS_CreateApprovalRuleTemplateOutput">CreateApprovalRuleTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprovalruletemplateoutput"></a>
<a id="schema_CreateApprovalRuleTemplateOutput"></a>
<a id="tocScreateapprovalruletemplateoutput"></a>
<a id="tocscreateapprovalruletemplateoutput"></a>

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplate|object|true|none|none|

<h2 id="tocS_CreateApprovalRuleTemplateInput">CreateApprovalRuleTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprovalruletemplateinput"></a>
<a id="schema_CreateApprovalRuleTemplateInput"></a>
<a id="tocScreateapprovalruletemplateinput"></a>
<a id="tocscreateapprovalruletemplateinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "approvalRuleTemplateContent": {},
  "approvalRuleTemplateDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|approvalRuleTemplateContent|object|true|none|none|
|approvalRuleTemplateDescription|object|false|none|none|

<h2 id="tocS_ApprovalRuleTemplateNameAlreadyExistsException">ApprovalRuleTemplateNameAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatenamealreadyexistsexception"></a>
<a id="schema_ApprovalRuleTemplateNameAlreadyExistsException"></a>
<a id="tocSapprovalruletemplatenamealreadyexistsexception"></a>
<a id="tocsapprovalruletemplatenamealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ApprovalRuleTemplateContentRequiredException">ApprovalRuleTemplateContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatecontentrequiredexception"></a>
<a id="schema_ApprovalRuleTemplateContentRequiredException"></a>
<a id="tocSapprovalruletemplatecontentrequiredexception"></a>
<a id="tocsapprovalruletemplatecontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidApprovalRuleTemplateContentException">InvalidApprovalRuleTemplateContentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalruletemplatecontentexception"></a>
<a id="schema_InvalidApprovalRuleTemplateContentException"></a>
<a id="tocSinvalidapprovalruletemplatecontentexception"></a>
<a id="tocsinvalidapprovalruletemplatecontentexception"></a>

```json
null
```

<h2 id="tocS_InvalidApprovalRuleTemplateDescriptionException">InvalidApprovalRuleTemplateDescriptionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalruletemplatedescriptionexception"></a>
<a id="schema_InvalidApprovalRuleTemplateDescriptionException"></a>
<a id="tocSinvalidapprovalruletemplatedescriptionexception"></a>
<a id="tocsinvalidapprovalruletemplatedescriptionexception"></a>

```json
null
```

<h2 id="tocS_NumberOfRuleTemplatesExceededException">NumberOfRuleTemplatesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemanumberofruletemplatesexceededexception"></a>
<a id="schema_NumberOfRuleTemplatesExceededException"></a>
<a id="tocSnumberofruletemplatesexceededexception"></a>
<a id="tocsnumberofruletemplatesexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateBranchInput">CreateBranchInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatebranchinput"></a>
<a id="schema_CreateBranchInput"></a>
<a id="tocScreatebranchinput"></a>
<a id="tocscreatebranchinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {},
  "commitId": {}
}
```

Represents the input of a create branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|branchName|object|true|none|none|
|commitId|object|true|none|none|

<h2 id="tocS_BranchNameRequiredException">BranchNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemabranchnamerequiredexception"></a>
<a id="schema_BranchNameRequiredException"></a>
<a id="tocSbranchnamerequiredexception"></a>
<a id="tocsbranchnamerequiredexception"></a>

```json
null
```

<h2 id="tocS_BranchNameExistsException">BranchNameExistsException</h2>
<!-- backwards compatibility -->
<a id="schemabranchnameexistsexception"></a>
<a id="schema_BranchNameExistsException"></a>
<a id="tocSbranchnameexistsexception"></a>
<a id="tocsbranchnameexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidBranchNameException">InvalidBranchNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidbranchnameexception"></a>
<a id="schema_InvalidBranchNameException"></a>
<a id="tocSinvalidbranchnameexception"></a>
<a id="tocsinvalidbranchnameexception"></a>

```json
null
```

<h2 id="tocS_CommitIdRequiredException">CommitIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemacommitidrequiredexception"></a>
<a id="schema_CommitIdRequiredException"></a>
<a id="tocScommitidrequiredexception"></a>
<a id="tocscommitidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidCommitIdException">InvalidCommitIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcommitidexception"></a>
<a id="schema_InvalidCommitIdException"></a>
<a id="tocSinvalidcommitidexception"></a>
<a id="tocsinvalidcommitidexception"></a>

```json
null
```

<h2 id="tocS_CreateCommitOutput">CreateCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommitoutput"></a>
<a id="schema_CreateCommitOutput"></a>
<a id="tocScreatecommitoutput"></a>
<a id="tocscreatecommitoutput"></a>

```json
{
  "commitId": {},
  "treeId": {},
  "filesAdded": {},
  "filesUpdated": {},
  "filesDeleted": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|
|filesAdded|object|false|none|none|
|filesUpdated|object|false|none|none|
|filesDeleted|object|false|none|none|

<h2 id="tocS_CreateCommitInput">CreateCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommitinput"></a>
<a id="schema_CreateCommitInput"></a>
<a id="tocScreatecommitinput"></a>
<a id="tocscreatecommitinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {},
  "parentCommitId": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "putFiles": {},
  "deleteFiles": {},
  "setFileModes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|branchName|object|true|none|none|
|parentCommitId|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|commitMessage|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|putFiles|object|false|none|none|
|deleteFiles|object|false|none|none|
|setFileModes|object|false|none|none|

<h2 id="tocS_ParentCommitIdRequiredException">ParentCommitIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaparentcommitidrequiredexception"></a>
<a id="schema_ParentCommitIdRequiredException"></a>
<a id="tocSparentcommitidrequiredexception"></a>
<a id="tocsparentcommitidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidParentCommitIdException">InvalidParentCommitIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparentcommitidexception"></a>
<a id="schema_InvalidParentCommitIdException"></a>
<a id="tocSinvalidparentcommitidexception"></a>
<a id="tocsinvalidparentcommitidexception"></a>

```json
null
```

<h2 id="tocS_ParentCommitDoesNotExistException">ParentCommitDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaparentcommitdoesnotexistexception"></a>
<a id="schema_ParentCommitDoesNotExistException"></a>
<a id="tocSparentcommitdoesnotexistexception"></a>
<a id="tocsparentcommitdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_ParentCommitIdOutdatedException">ParentCommitIdOutdatedException</h2>
<!-- backwards compatibility -->
<a id="schemaparentcommitidoutdatedexception"></a>
<a id="schema_ParentCommitIdOutdatedException"></a>
<a id="tocSparentcommitidoutdatedexception"></a>
<a id="tocsparentcommitidoutdatedexception"></a>

```json
null
```

<h2 id="tocS_BranchDoesNotExistException">BranchDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemabranchdoesnotexistexception"></a>
<a id="schema_BranchDoesNotExistException"></a>
<a id="tocSbranchdoesnotexistexception"></a>
<a id="tocsbranchdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_BranchNameIsTagNameException">BranchNameIsTagNameException</h2>
<!-- backwards compatibility -->
<a id="schemabranchnameistagnameexception"></a>
<a id="schema_BranchNameIsTagNameException"></a>
<a id="tocSbranchnameistagnameexception"></a>
<a id="tocsbranchnameistagnameexception"></a>

```json
null
```

<h2 id="tocS_FileEntryRequiredException">FileEntryRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemafileentryrequiredexception"></a>
<a id="schema_FileEntryRequiredException"></a>
<a id="tocSfileentryrequiredexception"></a>
<a id="tocsfileentryrequiredexception"></a>

```json
null
```

<h2 id="tocS_MaximumFileEntriesExceededException">MaximumFileEntriesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumfileentriesexceededexception"></a>
<a id="schema_MaximumFileEntriesExceededException"></a>
<a id="tocSmaximumfileentriesexceededexception"></a>
<a id="tocsmaximumfileentriesexceededexception"></a>

```json
null
```

<h2 id="tocS_PutFileEntryConflictException">PutFileEntryConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaputfileentryconflictexception"></a>
<a id="schema_PutFileEntryConflictException"></a>
<a id="tocSputfileentryconflictexception"></a>
<a id="tocsputfileentryconflictexception"></a>

```json
null
```

<h2 id="tocS_SourceFileOrContentRequiredException">SourceFileOrContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemasourcefileorcontentrequiredexception"></a>
<a id="schema_SourceFileOrContentRequiredException"></a>
<a id="tocSsourcefileorcontentrequiredexception"></a>
<a id="tocssourcefileorcontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_FileContentAndSourceFileSpecifiedException">FileContentAndSourceFileSpecifiedException</h2>
<!-- backwards compatibility -->
<a id="schemafilecontentandsourcefilespecifiedexception"></a>
<a id="schema_FileContentAndSourceFileSpecifiedException"></a>
<a id="tocSfilecontentandsourcefilespecifiedexception"></a>
<a id="tocsfilecontentandsourcefilespecifiedexception"></a>

```json
null
```

<h2 id="tocS_PathRequiredException">PathRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemapathrequiredexception"></a>
<a id="schema_PathRequiredException"></a>
<a id="tocSpathrequiredexception"></a>
<a id="tocspathrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidPathException">InvalidPathException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpathexception"></a>
<a id="schema_InvalidPathException"></a>
<a id="tocSinvalidpathexception"></a>
<a id="tocsinvalidpathexception"></a>

```json
null
```

<h2 id="tocS_SamePathRequestException">SamePathRequestException</h2>
<!-- backwards compatibility -->
<a id="schemasamepathrequestexception"></a>
<a id="schema_SamePathRequestException"></a>
<a id="tocSsamepathrequestexception"></a>
<a id="tocssamepathrequestexception"></a>

```json
null
```

<h2 id="tocS_FileDoesNotExistException">FileDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemafiledoesnotexistexception"></a>
<a id="schema_FileDoesNotExistException"></a>
<a id="tocSfiledoesnotexistexception"></a>
<a id="tocsfiledoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_FileContentSizeLimitExceededException">FileContentSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemafilecontentsizelimitexceededexception"></a>
<a id="schema_FileContentSizeLimitExceededException"></a>
<a id="tocSfilecontentsizelimitexceededexception"></a>
<a id="tocsfilecontentsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_FolderContentSizeLimitExceededException">FolderContentSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemafoldercontentsizelimitexceededexception"></a>
<a id="schema_FolderContentSizeLimitExceededException"></a>
<a id="tocSfoldercontentsizelimitexceededexception"></a>
<a id="tocsfoldercontentsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidDeletionParameterException">InvalidDeletionParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddeletionparameterexception"></a>
<a id="schema_InvalidDeletionParameterException"></a>
<a id="tocSinvaliddeletionparameterexception"></a>
<a id="tocsinvaliddeletionparameterexception"></a>

```json
null
```

<h2 id="tocS_RestrictedSourceFileException">RestrictedSourceFileException</h2>
<!-- backwards compatibility -->
<a id="schemarestrictedsourcefileexception"></a>
<a id="schema_RestrictedSourceFileException"></a>
<a id="tocSrestrictedsourcefileexception"></a>
<a id="tocsrestrictedsourcefileexception"></a>

```json
null
```

<h2 id="tocS_FileModeRequiredException">FileModeRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemafilemoderequiredexception"></a>
<a id="schema_FileModeRequiredException"></a>
<a id="tocSfilemoderequiredexception"></a>
<a id="tocsfilemoderequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidFileModeException">InvalidFileModeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilemodeexception"></a>
<a id="schema_InvalidFileModeException"></a>
<a id="tocSinvalidfilemodeexception"></a>
<a id="tocsinvalidfilemodeexception"></a>

```json
null
```

<h2 id="tocS_NameLengthExceededException">NameLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schemanamelengthexceededexception"></a>
<a id="schema_NameLengthExceededException"></a>
<a id="tocSnamelengthexceededexception"></a>
<a id="tocsnamelengthexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidEmailException">InvalidEmailException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidemailexception"></a>
<a id="schema_InvalidEmailException"></a>
<a id="tocSinvalidemailexception"></a>
<a id="tocsinvalidemailexception"></a>

```json
null
```

<h2 id="tocS_CommitMessageLengthExceededException">CommitMessageLengthExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacommitmessagelengthexceededexception"></a>
<a id="schema_CommitMessageLengthExceededException"></a>
<a id="tocScommitmessagelengthexceededexception"></a>
<a id="tocscommitmessagelengthexceededexception"></a>

```json
null
```

<h2 id="tocS_NoChangeException">NoChangeException</h2>
<!-- backwards compatibility -->
<a id="schemanochangeexception"></a>
<a id="schema_NoChangeException"></a>
<a id="tocSnochangeexception"></a>
<a id="tocsnochangeexception"></a>

```json
null
```

<h2 id="tocS_FileNameConflictsWithDirectoryNameException">FileNameConflictsWithDirectoryNameException</h2>
<!-- backwards compatibility -->
<a id="schemafilenameconflictswithdirectorynameexception"></a>
<a id="schema_FileNameConflictsWithDirectoryNameException"></a>
<a id="tocSfilenameconflictswithdirectorynameexception"></a>
<a id="tocsfilenameconflictswithdirectorynameexception"></a>

```json
null
```

<h2 id="tocS_DirectoryNameConflictsWithFileNameException">DirectoryNameConflictsWithFileNameException</h2>
<!-- backwards compatibility -->
<a id="schemadirectorynameconflictswithfilenameexception"></a>
<a id="schema_DirectoryNameConflictsWithFileNameException"></a>
<a id="tocSdirectorynameconflictswithfilenameexception"></a>
<a id="tocsdirectorynameconflictswithfilenameexception"></a>

```json
null
```

<h2 id="tocS_FilePathConflictsWithSubmodulePathException">FilePathConflictsWithSubmodulePathException</h2>
<!-- backwards compatibility -->
<a id="schemafilepathconflictswithsubmodulepathexception"></a>
<a id="schema_FilePathConflictsWithSubmodulePathException"></a>
<a id="tocSfilepathconflictswithsubmodulepathexception"></a>
<a id="tocsfilepathconflictswithsubmodulepathexception"></a>

```json
null
```

<h2 id="tocS_CreatePullRequestOutput">CreatePullRequestOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullrequestoutput"></a>
<a id="schema_CreatePullRequestOutput"></a>
<a id="tocScreatepullrequestoutput"></a>
<a id="tocscreatepullrequestoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|true|none|none|

<h2 id="tocS_CreatePullRequestInput">CreatePullRequestInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullrequestinput"></a>
<a id="schema_CreatePullRequestInput"></a>
<a id="tocScreatepullrequestinput"></a>
<a id="tocscreatepullrequestinput"></a>

```json
{
  "title": {},
  "description": {},
  "targets": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|object|true|none|none|
|description|object|false|none|none|
|targets|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_ClientRequestTokenRequiredException">ClientRequestTokenRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttokenrequiredexception"></a>
<a id="schema_ClientRequestTokenRequiredException"></a>
<a id="tocSclientrequesttokenrequiredexception"></a>
<a id="tocsclientrequesttokenrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidClientRequestTokenException">InvalidClientRequestTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidclientrequesttokenexception"></a>
<a id="schema_InvalidClientRequestTokenException"></a>
<a id="tocSinvalidclientrequesttokenexception"></a>
<a id="tocsinvalidclientrequesttokenexception"></a>

```json
null
```

<h2 id="tocS_IdempotencyParameterMismatchException">IdempotencyParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencyparametermismatchexception"></a>
<a id="schema_IdempotencyParameterMismatchException"></a>
<a id="tocSidempotencyparametermismatchexception"></a>
<a id="tocsidempotencyparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_ReferenceNameRequiredException">ReferenceNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemareferencenamerequiredexception"></a>
<a id="schema_ReferenceNameRequiredException"></a>
<a id="tocSreferencenamerequiredexception"></a>
<a id="tocsreferencenamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidReferenceNameException">InvalidReferenceNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreferencenameexception"></a>
<a id="schema_InvalidReferenceNameException"></a>
<a id="tocSinvalidreferencenameexception"></a>
<a id="tocsinvalidreferencenameexception"></a>

```json
null
```

<h2 id="tocS_ReferenceDoesNotExistException">ReferenceDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemareferencedoesnotexistexception"></a>
<a id="schema_ReferenceDoesNotExistException"></a>
<a id="tocSreferencedoesnotexistexception"></a>
<a id="tocsreferencedoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_ReferenceTypeNotSupportedException">ReferenceTypeNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemareferencetypenotsupportedexception"></a>
<a id="schema_ReferenceTypeNotSupportedException"></a>
<a id="tocSreferencetypenotsupportedexception"></a>
<a id="tocsreferencetypenotsupportedexception"></a>

```json
null
```

<h2 id="tocS_TitleRequiredException">TitleRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematitlerequiredexception"></a>
<a id="schema_TitleRequiredException"></a>
<a id="tocStitlerequiredexception"></a>
<a id="tocstitlerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidTitleException">InvalidTitleException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtitleexception"></a>
<a id="schema_InvalidTitleException"></a>
<a id="tocSinvalidtitleexception"></a>
<a id="tocsinvalidtitleexception"></a>

```json
null
```

<h2 id="tocS_InvalidDescriptionException">InvalidDescriptionException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddescriptionexception"></a>
<a id="schema_InvalidDescriptionException"></a>
<a id="tocSinvaliddescriptionexception"></a>
<a id="tocsinvaliddescriptionexception"></a>

```json
null
```

<h2 id="tocS_TargetsRequiredException">TargetsRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematargetsrequiredexception"></a>
<a id="schema_TargetsRequiredException"></a>
<a id="tocStargetsrequiredexception"></a>
<a id="tocstargetsrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidTargetsException">InvalidTargetsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetsexception"></a>
<a id="schema_InvalidTargetsException"></a>
<a id="tocSinvalidtargetsexception"></a>
<a id="tocsinvalidtargetsexception"></a>

```json
null
```

<h2 id="tocS_TargetRequiredException">TargetRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematargetrequiredexception"></a>
<a id="schema_TargetRequiredException"></a>
<a id="tocStargetrequiredexception"></a>
<a id="tocstargetrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidTargetException">InvalidTargetException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetexception"></a>
<a id="schema_InvalidTargetException"></a>
<a id="tocSinvalidtargetexception"></a>
<a id="tocsinvalidtargetexception"></a>

```json
null
```

<h2 id="tocS_MultipleRepositoriesInPullRequestException">MultipleRepositoriesInPullRequestException</h2>
<!-- backwards compatibility -->
<a id="schemamultiplerepositoriesinpullrequestexception"></a>
<a id="schema_MultipleRepositoriesInPullRequestException"></a>
<a id="tocSmultiplerepositoriesinpullrequestexception"></a>
<a id="tocsmultiplerepositoriesinpullrequestexception"></a>

```json
null
```

<h2 id="tocS_MaximumOpenPullRequestsExceededException">MaximumOpenPullRequestsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumopenpullrequestsexceededexception"></a>
<a id="schema_MaximumOpenPullRequestsExceededException"></a>
<a id="tocSmaximumopenpullrequestsexceededexception"></a>
<a id="tocsmaximumopenpullrequestsexceededexception"></a>

```json
null
```

<h2 id="tocS_SourceAndDestinationAreSameException">SourceAndDestinationAreSameException</h2>
<!-- backwards compatibility -->
<a id="schemasourceanddestinationaresameexception"></a>
<a id="schema_SourceAndDestinationAreSameException"></a>
<a id="tocSsourceanddestinationaresameexception"></a>
<a id="tocssourceanddestinationaresameexception"></a>

```json
null
```

<h2 id="tocS_CreatePullRequestApprovalRuleOutput">CreatePullRequestApprovalRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullrequestapprovalruleoutput"></a>
<a id="schema_CreatePullRequestApprovalRuleOutput"></a>
<a id="tocScreatepullrequestapprovalruleoutput"></a>
<a id="tocscreatepullrequestapprovalruleoutput"></a>

```json
{
  "approvalRule": {
    "approvalRuleId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {},
    "originApprovalRuleTemplate": {
      "approvalRuleTemplateId": {},
      "approvalRuleTemplateName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRule|object|true|none|none|

<h2 id="tocS_CreatePullRequestApprovalRuleInput">CreatePullRequestApprovalRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullrequestapprovalruleinput"></a>
<a id="schema_CreatePullRequestApprovalRuleInput"></a>
<a id="tocScreatepullrequestapprovalruleinput"></a>
<a id="tocscreatepullrequestapprovalruleinput"></a>

```json
{
  "pullRequestId": {},
  "approvalRuleName": {},
  "approvalRuleContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|approvalRuleName|object|true|none|none|
|approvalRuleContent|object|true|none|none|

<h2 id="tocS_ApprovalRuleNameRequiredException">ApprovalRuleNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulenamerequiredexception"></a>
<a id="schema_ApprovalRuleNameRequiredException"></a>
<a id="tocSapprovalrulenamerequiredexception"></a>
<a id="tocsapprovalrulenamerequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidApprovalRuleNameException">InvalidApprovalRuleNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalrulenameexception"></a>
<a id="schema_InvalidApprovalRuleNameException"></a>
<a id="tocSinvalidapprovalrulenameexception"></a>
<a id="tocsinvalidapprovalrulenameexception"></a>

```json
null
```

<h2 id="tocS_ApprovalRuleNameAlreadyExistsException">ApprovalRuleNameAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulenamealreadyexistsexception"></a>
<a id="schema_ApprovalRuleNameAlreadyExistsException"></a>
<a id="tocSapprovalrulenamealreadyexistsexception"></a>
<a id="tocsapprovalrulenamealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ApprovalRuleContentRequiredException">ApprovalRuleContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulecontentrequiredexception"></a>
<a id="schema_ApprovalRuleContentRequiredException"></a>
<a id="tocSapprovalrulecontentrequiredexception"></a>
<a id="tocsapprovalrulecontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidApprovalRuleContentException">InvalidApprovalRuleContentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalrulecontentexception"></a>
<a id="schema_InvalidApprovalRuleContentException"></a>
<a id="tocSinvalidapprovalrulecontentexception"></a>
<a id="tocsinvalidapprovalrulecontentexception"></a>

```json
null
```

<h2 id="tocS_NumberOfRulesExceededException">NumberOfRulesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemanumberofrulesexceededexception"></a>
<a id="schema_NumberOfRulesExceededException"></a>
<a id="tocSnumberofrulesexceededexception"></a>
<a id="tocsnumberofrulesexceededexception"></a>

```json
null
```

<h2 id="tocS_PullRequestDoesNotExistException">PullRequestDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestdoesnotexistexception"></a>
<a id="schema_PullRequestDoesNotExistException"></a>
<a id="tocSpullrequestdoesnotexistexception"></a>
<a id="tocspullrequestdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidPullRequestIdException">InvalidPullRequestIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpullrequestidexception"></a>
<a id="schema_InvalidPullRequestIdException"></a>
<a id="tocSinvalidpullrequestidexception"></a>
<a id="tocsinvalidpullrequestidexception"></a>

```json
null
```

<h2 id="tocS_PullRequestIdRequiredException">PullRequestIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestidrequiredexception"></a>
<a id="schema_PullRequestIdRequiredException"></a>
<a id="tocSpullrequestidrequiredexception"></a>
<a id="tocspullrequestidrequiredexception"></a>

```json
null
```

<h2 id="tocS_PullRequestAlreadyClosedException">PullRequestAlreadyClosedException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestalreadyclosedexception"></a>
<a id="schema_PullRequestAlreadyClosedException"></a>
<a id="tocSpullrequestalreadyclosedexception"></a>
<a id="tocspullrequestalreadyclosedexception"></a>

```json
null
```

<h2 id="tocS_CreateRepositoryOutput">CreateRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryoutput"></a>
<a id="schema_CreateRepositoryOutput"></a>
<a id="tocScreaterepositoryoutput"></a>
<a id="tocscreaterepositoryoutput"></a>

```json
{
  "repositoryMetadata": {
    "accountId": {},
    "repositoryId": {},
    "repositoryName": {},
    "repositoryDescription": {},
    "defaultBranch": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "cloneUrlHttp": {},
    "cloneUrlSsh": {},
    "Arn": {}
  }
}
```

Represents the output of a create repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryMetadata|object|false|none|none|

<h2 id="tocS_CreateRepositoryInput">CreateRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryinput"></a>
<a id="schema_CreateRepositoryInput"></a>
<a id="tocScreaterepositoryinput"></a>
<a id="tocscreaterepositoryinput"></a>

```json
{
  "repositoryName": {},
  "repositoryDescription": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the input of a create repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|repositoryDescription|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RepositoryNameExistsException">RepositoryNameExistsException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynameexistsexception"></a>
<a id="schema_RepositoryNameExistsException"></a>
<a id="tocSrepositorynameexistsexception"></a>
<a id="tocsrepositorynameexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryDescriptionException">InvalidRepositoryDescriptionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorydescriptionexception"></a>
<a id="schema_InvalidRepositoryDescriptionException"></a>
<a id="tocSinvalidrepositorydescriptionexception"></a>
<a id="tocsinvalidrepositorydescriptionexception"></a>

```json
null
```

<h2 id="tocS_RepositoryLimitExceededException">RepositoryLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorylimitexceededexception"></a>
<a id="schema_RepositoryLimitExceededException"></a>
<a id="tocSrepositorylimitexceededexception"></a>
<a id="tocsrepositorylimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagsMapException">InvalidTagsMapException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagsmapexception"></a>
<a id="schema_InvalidTagsMapException"></a>
<a id="tocSinvalidtagsmapexception"></a>
<a id="tocsinvalidtagsmapexception"></a>

```json
null
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_InvalidSystemTagUsageException">InvalidSystemTagUsageException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsystemtagusageexception"></a>
<a id="schema_InvalidSystemTagUsageException"></a>
<a id="tocSinvalidsystemtagusageexception"></a>
<a id="tocsinvalidsystemtagusageexception"></a>

```json
null
```

<h2 id="tocS_TagPolicyException">TagPolicyException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyexception"></a>
<a id="schema_TagPolicyException"></a>
<a id="tocStagpolicyexception"></a>
<a id="tocstagpolicyexception"></a>

```json
null
```

<h2 id="tocS_CreateUnreferencedMergeCommitOutput">CreateUnreferencedMergeCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateunreferencedmergecommitoutput"></a>
<a id="schema_CreateUnreferencedMergeCommitOutput"></a>
<a id="tocScreateunreferencedmergecommitoutput"></a>
<a id="tocscreateunreferencedmergecommitoutput"></a>

```json
{
  "commitId": {},
  "treeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|

<h2 id="tocS_CreateUnreferencedMergeCommitInput">CreateUnreferencedMergeCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateunreferencedmergecommitinput"></a>
<a id="schema_CreateUnreferencedMergeCommitInput"></a>
<a id="tocScreateunreferencedmergecommitinput"></a>
<a id="tocscreateunreferencedmergecommitinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "mergeOption": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|mergeOption|object|true|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|commitMessage|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|conflictResolution|object|false|none|none|

<h2 id="tocS_InvalidConflictResolutionException">InvalidConflictResolutionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidconflictresolutionexception"></a>
<a id="schema_InvalidConflictResolutionException"></a>
<a id="tocSinvalidconflictresolutionexception"></a>
<a id="tocsinvalidconflictresolutionexception"></a>

```json
null
```

<h2 id="tocS_ManualMergeRequiredException">ManualMergeRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemamanualmergerequiredexception"></a>
<a id="schema_ManualMergeRequiredException"></a>
<a id="tocSmanualmergerequiredexception"></a>
<a id="tocsmanualmergerequiredexception"></a>

```json
null
```

<h2 id="tocS_MaximumConflictResolutionEntriesExceededException">MaximumConflictResolutionEntriesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumconflictresolutionentriesexceededexception"></a>
<a id="schema_MaximumConflictResolutionEntriesExceededException"></a>
<a id="tocSmaximumconflictresolutionentriesexceededexception"></a>
<a id="tocsmaximumconflictresolutionentriesexceededexception"></a>

```json
null
```

<h2 id="tocS_MultipleConflictResolutionEntriesException">MultipleConflictResolutionEntriesException</h2>
<!-- backwards compatibility -->
<a id="schemamultipleconflictresolutionentriesexception"></a>
<a id="schema_MultipleConflictResolutionEntriesException"></a>
<a id="tocSmultipleconflictresolutionentriesexception"></a>
<a id="tocsmultipleconflictresolutionentriesexception"></a>

```json
null
```

<h2 id="tocS_ReplacementTypeRequiredException">ReplacementTypeRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemareplacementtyperequiredexception"></a>
<a id="schema_ReplacementTypeRequiredException"></a>
<a id="tocSreplacementtyperequiredexception"></a>
<a id="tocsreplacementtyperequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidReplacementTypeException">InvalidReplacementTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreplacementtypeexception"></a>
<a id="schema_InvalidReplacementTypeException"></a>
<a id="tocSinvalidreplacementtypeexception"></a>
<a id="tocsinvalidreplacementtypeexception"></a>

```json
null
```

<h2 id="tocS_ReplacementContentRequiredException">ReplacementContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemareplacementcontentrequiredexception"></a>
<a id="schema_ReplacementContentRequiredException"></a>
<a id="tocSreplacementcontentrequiredexception"></a>
<a id="tocsreplacementcontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidReplacementContentException">InvalidReplacementContentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreplacementcontentexception"></a>
<a id="schema_InvalidReplacementContentException"></a>
<a id="tocSinvalidreplacementcontentexception"></a>
<a id="tocsinvalidreplacementcontentexception"></a>

```json
null
```

<h2 id="tocS_ConcurrentReferenceUpdateException">ConcurrentReferenceUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentreferenceupdateexception"></a>
<a id="schema_ConcurrentReferenceUpdateException"></a>
<a id="tocSconcurrentreferenceupdateexception"></a>
<a id="tocsconcurrentreferenceupdateexception"></a>

```json
null
```

<h2 id="tocS_DeleteApprovalRuleTemplateOutput">DeleteApprovalRuleTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapprovalruletemplateoutput"></a>
<a id="schema_DeleteApprovalRuleTemplateOutput"></a>
<a id="tocSdeleteapprovalruletemplateoutput"></a>
<a id="tocsdeleteapprovalruletemplateoutput"></a>

```json
{
  "approvalRuleTemplateId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateId|object|true|none|none|

<h2 id="tocS_DeleteApprovalRuleTemplateInput">DeleteApprovalRuleTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteapprovalruletemplateinput"></a>
<a id="schema_DeleteApprovalRuleTemplateInput"></a>
<a id="tocSdeleteapprovalruletemplateinput"></a>
<a id="tocsdeleteapprovalruletemplateinput"></a>

```json
{
  "approvalRuleTemplateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|

<h2 id="tocS_ApprovalRuleTemplateInUseException">ApprovalRuleTemplateInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplateinuseexception"></a>
<a id="schema_ApprovalRuleTemplateInUseException"></a>
<a id="tocSapprovalruletemplateinuseexception"></a>
<a id="tocsapprovalruletemplateinuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteBranchOutput">DeleteBranchOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebranchoutput"></a>
<a id="schema_DeleteBranchOutput"></a>
<a id="tocSdeletebranchoutput"></a>
<a id="tocsdeletebranchoutput"></a>

```json
{
  "deletedBranch": {
    "branchName": {},
    "commitId": {}
  }
}
```

Represents the output of a delete branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedBranch|object|false|none|none|

<h2 id="tocS_DeleteBranchInput">DeleteBranchInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletebranchinput"></a>
<a id="schema_DeleteBranchInput"></a>
<a id="tocSdeletebranchinput"></a>
<a id="tocsdeletebranchinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {}
}
```

Represents the input of a delete branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|branchName|object|true|none|none|

<h2 id="tocS_DefaultBranchCannotBeDeletedException">DefaultBranchCannotBeDeletedException</h2>
<!-- backwards compatibility -->
<a id="schemadefaultbranchcannotbedeletedexception"></a>
<a id="schema_DefaultBranchCannotBeDeletedException"></a>
<a id="tocSdefaultbranchcannotbedeletedexception"></a>
<a id="tocsdefaultbranchcannotbedeletedexception"></a>

```json
null
```

<h2 id="tocS_DeleteCommentContentOutput">DeleteCommentContentOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecommentcontentoutput"></a>
<a id="schema_DeleteCommentContentOutput"></a>
<a id="tocSdeletecommentcontentoutput"></a>
<a id="tocsdeletecommentcontentoutput"></a>

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|

<h2 id="tocS_DeleteCommentContentInput">DeleteCommentContentInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecommentcontentinput"></a>
<a id="schema_DeleteCommentContentInput"></a>
<a id="tocSdeletecommentcontentinput"></a>
<a id="tocsdeletecommentcontentinput"></a>

```json
{
  "commentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|true|none|none|

<h2 id="tocS_CommentDoesNotExistException">CommentDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemacommentdoesnotexistexception"></a>
<a id="schema_CommentDoesNotExistException"></a>
<a id="tocScommentdoesnotexistexception"></a>
<a id="tocscommentdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_CommentIdRequiredException">CommentIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemacommentidrequiredexception"></a>
<a id="schema_CommentIdRequiredException"></a>
<a id="tocScommentidrequiredexception"></a>
<a id="tocscommentidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidCommentIdException">InvalidCommentIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidcommentidexception"></a>
<a id="schema_InvalidCommentIdException"></a>
<a id="tocSinvalidcommentidexception"></a>
<a id="tocsinvalidcommentidexception"></a>

```json
null
```

<h2 id="tocS_CommentDeletedException">CommentDeletedException</h2>
<!-- backwards compatibility -->
<a id="schemacommentdeletedexception"></a>
<a id="schema_CommentDeletedException"></a>
<a id="tocScommentdeletedexception"></a>
<a id="tocscommentdeletedexception"></a>

```json
null
```

<h2 id="tocS_DeleteFileOutput">DeleteFileOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileoutput"></a>
<a id="schema_DeleteFileOutput"></a>
<a id="tocSdeletefileoutput"></a>
<a id="tocsdeletefileoutput"></a>

```json
{
  "commitId": {},
  "blobId": {},
  "treeId": {},
  "filePath": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|true|none|none|
|blobId|object|true|none|none|
|treeId|object|true|none|none|
|filePath|object|true|none|none|

<h2 id="tocS_DeleteFileInput">DeleteFileInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileinput"></a>
<a id="schema_DeleteFileInput"></a>
<a id="tocSdeletefileinput"></a>
<a id="tocsdeletefileinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {},
  "filePath": {},
  "parentCommitId": {},
  "keepEmptyFolders": {},
  "commitMessage": {},
  "name": {},
  "email": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|branchName|object|true|none|none|
|filePath|object|true|none|none|
|parentCommitId|object|true|none|none|
|keepEmptyFolders|object|false|none|none|
|commitMessage|object|false|none|none|
|name|object|false|none|none|
|email|object|false|none|none|

<h2 id="tocS_DeletePullRequestApprovalRuleOutput">DeletePullRequestApprovalRuleOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepullrequestapprovalruleoutput"></a>
<a id="schema_DeletePullRequestApprovalRuleOutput"></a>
<a id="tocSdeletepullrequestapprovalruleoutput"></a>
<a id="tocsdeletepullrequestapprovalruleoutput"></a>

```json
{
  "approvalRuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleId|object|true|none|none|

<h2 id="tocS_DeletePullRequestApprovalRuleInput">DeletePullRequestApprovalRuleInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletepullrequestapprovalruleinput"></a>
<a id="schema_DeletePullRequestApprovalRuleInput"></a>
<a id="tocSdeletepullrequestapprovalruleinput"></a>
<a id="tocsdeletepullrequestapprovalruleinput"></a>

```json
{
  "pullRequestId": {},
  "approvalRuleName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|approvalRuleName|object|true|none|none|

<h2 id="tocS_CannotDeleteApprovalRuleFromTemplateException">CannotDeleteApprovalRuleFromTemplateException</h2>
<!-- backwards compatibility -->
<a id="schemacannotdeleteapprovalrulefromtemplateexception"></a>
<a id="schema_CannotDeleteApprovalRuleFromTemplateException"></a>
<a id="tocScannotdeleteapprovalrulefromtemplateexception"></a>
<a id="tocscannotdeleteapprovalrulefromtemplateexception"></a>

```json
null
```

<h2 id="tocS_DeleteRepositoryOutput">DeleteRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryoutput"></a>
<a id="schema_DeleteRepositoryOutput"></a>
<a id="tocSdeleterepositoryoutput"></a>
<a id="tocsdeleterepositoryoutput"></a>

```json
{
  "repositoryId": {}
}
```

Represents the output of a delete repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryId|object|false|none|none|

<h2 id="tocS_DeleteRepositoryInput">DeleteRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryinput"></a>
<a id="schema_DeleteRepositoryInput"></a>
<a id="tocSdeleterepositoryinput"></a>
<a id="tocsdeleterepositoryinput"></a>

```json
{
  "repositoryName": {}
}
```

Represents the input of a delete repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|

<h2 id="tocS_DescribeMergeConflictsOutput">DescribeMergeConflictsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemergeconflictsoutput"></a>
<a id="schema_DescribeMergeConflictsOutput"></a>
<a id="tocSdescribemergeconflictsoutput"></a>
<a id="tocsdescribemergeconflictsoutput"></a>

```json
{
  "conflictMetadata": {
    "filePath": {},
    "fileSizes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "fileModes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "objectTypes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "numberOfConflicts": {},
    "isBinaryFile": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "contentConflict": {},
    "fileModeConflict": {},
    "objectTypeConflict": {},
    "mergeOperations": {
      "source": {},
      "destination": {}
    }
  },
  "mergeHunks": {},
  "nextToken": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflictMetadata|object|true|none|none|
|mergeHunks|object|true|none|none|
|nextToken|object|false|none|none|
|destinationCommitId|object|true|none|none|
|sourceCommitId|object|true|none|none|
|baseCommitId|object|false|none|none|

<h2 id="tocS_DescribeMergeConflictsInput">DescribeMergeConflictsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribemergeconflictsinput"></a>
<a id="schema_DescribeMergeConflictsInput"></a>
<a id="tocSdescribemergeconflictsinput"></a>
<a id="tocsdescribemergeconflictsinput"></a>

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "maxMergeHunks": {},
  "filePath": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|mergeOption|object|true|none|none|
|maxMergeHunks|object|false|none|none|
|filePath|object|true|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribePullRequestEventsOutput">DescribePullRequestEventsOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepullrequesteventsoutput"></a>
<a id="schema_DescribePullRequestEventsOutput"></a>
<a id="tocSdescribepullrequesteventsoutput"></a>
<a id="tocsdescribepullrequesteventsoutput"></a>

```json
{
  "pullRequestEvents": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestEvents|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribePullRequestEventsInput">DescribePullRequestEventsInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribepullrequesteventsinput"></a>
<a id="schema_DescribePullRequestEventsInput"></a>
<a id="tocSdescribepullrequesteventsinput"></a>
<a id="tocsdescribepullrequesteventsinput"></a>

```json
{
  "pullRequestId": {},
  "pullRequestEventType": {},
  "actorArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|pullRequestEventType|object|false|none|none|
|actorArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidPullRequestEventTypeException">InvalidPullRequestEventTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpullrequesteventtypeexception"></a>
<a id="schema_InvalidPullRequestEventTypeException"></a>
<a id="tocSinvalidpullrequesteventtypeexception"></a>
<a id="tocsinvalidpullrequesteventtypeexception"></a>

```json
null
```

<h2 id="tocS_InvalidActorArnException">InvalidActorArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidactorarnexception"></a>
<a id="schema_InvalidActorArnException"></a>
<a id="tocSinvalidactorarnexception"></a>
<a id="tocsinvalidactorarnexception"></a>

```json
null
```

<h2 id="tocS_ActorDoesNotExistException">ActorDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaactordoesnotexistexception"></a>
<a id="schema_ActorDoesNotExistException"></a>
<a id="tocSactordoesnotexistexception"></a>
<a id="tocsactordoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_InvalidMaxResultsException">InvalidMaxResultsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidmaxresultsexception"></a>
<a id="schema_InvalidMaxResultsException"></a>
<a id="tocSinvalidmaxresultsexception"></a>
<a id="tocsinvalidmaxresultsexception"></a>

```json
null
```

<h2 id="tocS_DisassociateApprovalRuleTemplateFromRepositoryInput">DisassociateApprovalRuleTemplateFromRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateapprovalruletemplatefromrepositoryinput"></a>
<a id="schema_DisassociateApprovalRuleTemplateFromRepositoryInput"></a>
<a id="tocSdisassociateapprovalruletemplatefromrepositoryinput"></a>
<a id="tocsdisassociateapprovalruletemplatefromrepositoryinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_EvaluatePullRequestApprovalRulesOutput">EvaluatePullRequestApprovalRulesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatepullrequestapprovalrulesoutput"></a>
<a id="schema_EvaluatePullRequestApprovalRulesOutput"></a>
<a id="tocSevaluatepullrequestapprovalrulesoutput"></a>
<a id="tocsevaluatepullrequestapprovalrulesoutput"></a>

```json
{
  "evaluation": {
    "approved": {},
    "overridden": {},
    "approvalRulesSatisfied": {},
    "approvalRulesNotSatisfied": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluation|object|true|none|none|

<h2 id="tocS_EvaluatePullRequestApprovalRulesInput">EvaluatePullRequestApprovalRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatepullrequestapprovalrulesinput"></a>
<a id="schema_EvaluatePullRequestApprovalRulesInput"></a>
<a id="tocSevaluatepullrequestapprovalrulesinput"></a>
<a id="tocsevaluatepullrequestapprovalrulesinput"></a>

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_InvalidRevisionIdException">InvalidRevisionIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrevisionidexception"></a>
<a id="schema_InvalidRevisionIdException"></a>
<a id="tocSinvalidrevisionidexception"></a>
<a id="tocsinvalidrevisionidexception"></a>

```json
null
```

<h2 id="tocS_RevisionIdRequiredException">RevisionIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarevisionidrequiredexception"></a>
<a id="schema_RevisionIdRequiredException"></a>
<a id="tocSrevisionidrequiredexception"></a>
<a id="tocsrevisionidrequiredexception"></a>

```json
null
```

<h2 id="tocS_RevisionNotCurrentException">RevisionNotCurrentException</h2>
<!-- backwards compatibility -->
<a id="schemarevisionnotcurrentexception"></a>
<a id="schema_RevisionNotCurrentException"></a>
<a id="tocSrevisionnotcurrentexception"></a>
<a id="tocsrevisionnotcurrentexception"></a>

```json
null
```

<h2 id="tocS_GetApprovalRuleTemplateOutput">GetApprovalRuleTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetapprovalruletemplateoutput"></a>
<a id="schema_GetApprovalRuleTemplateOutput"></a>
<a id="tocSgetapprovalruletemplateoutput"></a>
<a id="tocsgetapprovalruletemplateoutput"></a>

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplate|object|true|none|none|

<h2 id="tocS_GetApprovalRuleTemplateInput">GetApprovalRuleTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetapprovalruletemplateinput"></a>
<a id="schema_GetApprovalRuleTemplateInput"></a>
<a id="tocSgetapprovalruletemplateinput"></a>
<a id="tocsgetapprovalruletemplateinput"></a>

```json
{
  "approvalRuleTemplateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|

<h2 id="tocS_GetBlobOutput">GetBlobOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbloboutput"></a>
<a id="schema_GetBlobOutput"></a>
<a id="tocSgetbloboutput"></a>
<a id="tocsgetbloboutput"></a>

```json
{
  "content": {}
}
```

Represents the output of a get blob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|true|none|none|

<h2 id="tocS_GetBlobInput">GetBlobInput</h2>
<!-- backwards compatibility -->
<a id="schemagetblobinput"></a>
<a id="schema_GetBlobInput"></a>
<a id="tocSgetblobinput"></a>
<a id="tocsgetblobinput"></a>

```json
{
  "repositoryName": {},
  "blobId": {}
}
```

Represents the input of a get blob operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|blobId|object|true|none|none|

<h2 id="tocS_BlobIdRequiredException">BlobIdRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemablobidrequiredexception"></a>
<a id="schema_BlobIdRequiredException"></a>
<a id="tocSblobidrequiredexception"></a>
<a id="tocsblobidrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidBlobIdException">InvalidBlobIdException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidblobidexception"></a>
<a id="schema_InvalidBlobIdException"></a>
<a id="tocSinvalidblobidexception"></a>
<a id="tocsinvalidblobidexception"></a>

```json
null
```

<h2 id="tocS_BlobIdDoesNotExistException">BlobIdDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemablobiddoesnotexistexception"></a>
<a id="schema_BlobIdDoesNotExistException"></a>
<a id="tocSblobiddoesnotexistexception"></a>
<a id="tocsblobiddoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_FileTooLargeException">FileTooLargeException</h2>
<!-- backwards compatibility -->
<a id="schemafiletoolargeexception"></a>
<a id="schema_FileTooLargeException"></a>
<a id="tocSfiletoolargeexception"></a>
<a id="tocsfiletoolargeexception"></a>

```json
null
```

<h2 id="tocS_GetBranchOutput">GetBranchOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetbranchoutput"></a>
<a id="schema_GetBranchOutput"></a>
<a id="tocSgetbranchoutput"></a>
<a id="tocsgetbranchoutput"></a>

```json
{
  "branch": {
    "branchName": {},
    "commitId": {}
  }
}
```

Represents the output of a get branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|false|none|none|

<h2 id="tocS_GetBranchInput">GetBranchInput</h2>
<!-- backwards compatibility -->
<a id="schemagetbranchinput"></a>
<a id="schema_GetBranchInput"></a>
<a id="tocSgetbranchinput"></a>
<a id="tocsgetbranchinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {}
}
```

Represents the input of a get branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|branchName|object|false|none|none|

<h2 id="tocS_GetCommentOutput">GetCommentOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentoutput"></a>
<a id="schema_GetCommentOutput"></a>
<a id="tocSgetcommentoutput"></a>
<a id="tocsgetcommentoutput"></a>

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|

<h2 id="tocS_GetCommentInput">GetCommentInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentinput"></a>
<a id="schema_GetCommentInput"></a>
<a id="tocSgetcommentinput"></a>
<a id="tocsgetcommentinput"></a>

```json
{
  "commentId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|true|none|none|

<h2 id="tocS_GetCommentReactionsOutput">GetCommentReactionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentreactionsoutput"></a>
<a id="schema_GetCommentReactionsOutput"></a>
<a id="tocSgetcommentreactionsoutput"></a>
<a id="tocsgetcommentreactionsoutput"></a>

```json
{
  "reactionsForComment": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reactionsForComment|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetCommentReactionsInput">GetCommentReactionsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentreactionsinput"></a>
<a id="schema_GetCommentReactionsInput"></a>
<a id="tocSgetcommentreactionsinput"></a>
<a id="tocsgetcommentreactionsinput"></a>

```json
{
  "commentId": {},
  "reactionUserArn": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|true|none|none|
|reactionUserArn|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidReactionUserArnException">InvalidReactionUserArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreactionuserarnexception"></a>
<a id="schema_InvalidReactionUserArnException"></a>
<a id="tocSinvalidreactionuserarnexception"></a>
<a id="tocsinvalidreactionuserarnexception"></a>

```json
null
```

<h2 id="tocS_GetCommentsForComparedCommitOutput">GetCommentsForComparedCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentsforcomparedcommitoutput"></a>
<a id="schema_GetCommentsForComparedCommitOutput"></a>
<a id="tocSgetcommentsforcomparedcommitoutput"></a>
<a id="tocsgetcommentsforcomparedcommitoutput"></a>

```json
{
  "commentsForComparedCommitData": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentsForComparedCommitData|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetCommentsForComparedCommitInput">GetCommentsForComparedCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentsforcomparedcommitinput"></a>
<a id="schema_GetCommentsForComparedCommitInput"></a>
<a id="tocSgetcommentsforcomparedcommitinput"></a>
<a id="tocsgetcommentsforcomparedcommitinput"></a>

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetCommentsForPullRequestOutput">GetCommentsForPullRequestOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentsforpullrequestoutput"></a>
<a id="schema_GetCommentsForPullRequestOutput"></a>
<a id="tocSgetcommentsforpullrequestoutput"></a>
<a id="tocsgetcommentsforpullrequestoutput"></a>

```json
{
  "commentsForPullRequestData": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentsForPullRequestData|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetCommentsForPullRequestInput">GetCommentsForPullRequestInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentsforpullrequestinput"></a>
<a id="schema_GetCommentsForPullRequestInput"></a>
<a id="tocSgetcommentsforpullrequestinput"></a>
<a id="tocsgetcommentsforpullrequestinput"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|repositoryName|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_RepositoryNotAssociatedWithPullRequestException">RepositoryNotAssociatedWithPullRequestException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynotassociatedwithpullrequestexception"></a>
<a id="schema_RepositoryNotAssociatedWithPullRequestException"></a>
<a id="tocSrepositorynotassociatedwithpullrequestexception"></a>
<a id="tocsrepositorynotassociatedwithpullrequestexception"></a>

```json
null
```

<h2 id="tocS_GetCommitOutput">GetCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommitoutput"></a>
<a id="schema_GetCommitOutput"></a>
<a id="tocSgetcommitoutput"></a>
<a id="tocsgetcommitoutput"></a>

```json
{
  "commit": {
    "commitId": {},
    "treeId": {},
    "parents": {},
    "message": {},
    "author": {
      "name": {},
      "email": {},
      "date": {}
    },
    "committer": {
      "name": {},
      "email": {},
      "date": {}
    },
    "additionalData": {}
  }
}
```

Represents the output of a get commit operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commit|object|true|none|none|

<h2 id="tocS_GetCommitInput">GetCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcommitinput"></a>
<a id="schema_GetCommitInput"></a>
<a id="tocSgetcommitinput"></a>
<a id="tocsgetcommitinput"></a>

```json
{
  "repositoryName": {},
  "commitId": {}
}
```

Represents the input of a get commit operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|commitId|object|true|none|none|

<h2 id="tocS_CommitIdDoesNotExistException">CommitIdDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemacommitiddoesnotexistexception"></a>
<a id="schema_CommitIdDoesNotExistException"></a>
<a id="tocScommitiddoesnotexistexception"></a>
<a id="tocscommitiddoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_GetDifferencesOutput">GetDifferencesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetdifferencesoutput"></a>
<a id="schema_GetDifferencesOutput"></a>
<a id="tocSgetdifferencesoutput"></a>
<a id="tocsgetdifferencesoutput"></a>

```json
{
  "differences": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|differences|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetDifferencesInput">GetDifferencesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetdifferencesinput"></a>
<a id="schema_GetDifferencesInput"></a>
<a id="tocSgetdifferencesinput"></a>
<a id="tocsgetdifferencesinput"></a>

```json
{
  "repositoryName": {},
  "beforeCommitSpecifier": {},
  "afterCommitSpecifier": {},
  "beforePath": {},
  "afterPath": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|beforeCommitSpecifier|object|false|none|none|
|afterCommitSpecifier|object|true|none|none|
|beforePath|object|false|none|none|
|afterPath|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PathDoesNotExistException">PathDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemapathdoesnotexistexception"></a>
<a id="schema_PathDoesNotExistException"></a>
<a id="tocSpathdoesnotexistexception"></a>
<a id="tocspathdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_GetFileOutput">GetFileOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetfileoutput"></a>
<a id="schema_GetFileOutput"></a>
<a id="tocSgetfileoutput"></a>
<a id="tocsgetfileoutput"></a>

```json
{
  "commitId": {},
  "blobId": {},
  "filePath": {},
  "fileMode": {},
  "fileSize": {},
  "fileContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|true|none|none|
|blobId|object|true|none|none|
|filePath|object|true|none|none|
|fileMode|object|true|none|none|
|fileSize|object|true|none|none|
|fileContent|object|true|none|none|

<h2 id="tocS_GetFileInput">GetFileInput</h2>
<!-- backwards compatibility -->
<a id="schemagetfileinput"></a>
<a id="schema_GetFileInput"></a>
<a id="tocSgetfileinput"></a>
<a id="tocsgetfileinput"></a>

```json
{
  "repositoryName": {},
  "commitSpecifier": {},
  "filePath": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|commitSpecifier|object|false|none|none|
|filePath|object|true|none|none|

<h2 id="tocS_GetFolderOutput">GetFolderOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderoutput"></a>
<a id="schema_GetFolderOutput"></a>
<a id="tocSgetfolderoutput"></a>
<a id="tocsgetfolderoutput"></a>

```json
{
  "commitId": {},
  "folderPath": {},
  "treeId": {},
  "subFolders": {},
  "files": {},
  "symbolicLinks": {},
  "subModules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|true|none|none|
|folderPath|object|true|none|none|
|treeId|object|false|none|none|
|subFolders|object|false|none|none|
|files|object|false|none|none|
|symbolicLinks|object|false|none|none|
|subModules|object|false|none|none|

<h2 id="tocS_GetFolderInput">GetFolderInput</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderinput"></a>
<a id="schema_GetFolderInput"></a>
<a id="tocSgetfolderinput"></a>
<a id="tocsgetfolderinput"></a>

```json
{
  "repositoryName": {},
  "commitSpecifier": {},
  "folderPath": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|commitSpecifier|object|false|none|none|
|folderPath|object|true|none|none|

<h2 id="tocS_FolderDoesNotExistException">FolderDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemafolderdoesnotexistexception"></a>
<a id="schema_FolderDoesNotExistException"></a>
<a id="tocSfolderdoesnotexistexception"></a>
<a id="tocsfolderdoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_GetMergeCommitOutput">GetMergeCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergecommitoutput"></a>
<a id="schema_GetMergeCommitOutput"></a>
<a id="tocSgetmergecommitoutput"></a>
<a id="tocsgetmergecommitoutput"></a>

```json
{
  "sourceCommitId": {},
  "destinationCommitId": {},
  "baseCommitId": {},
  "mergedCommitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceCommitId|object|false|none|none|
|destinationCommitId|object|false|none|none|
|baseCommitId|object|false|none|none|
|mergedCommitId|object|false|none|none|

<h2 id="tocS_GetMergeCommitInput">GetMergeCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergecommitinput"></a>
<a id="schema_GetMergeCommitInput"></a>
<a id="tocSgetmergecommitinput"></a>
<a id="tocsgetmergecommitinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|

<h2 id="tocS_GetMergeConflictsOutput">GetMergeConflictsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergeconflictsoutput"></a>
<a id="schema_GetMergeConflictsOutput"></a>
<a id="tocSgetmergeconflictsoutput"></a>
<a id="tocsgetmergeconflictsoutput"></a>

```json
{
  "mergeable": {},
  "destinationCommitId": {},
  "sourceCommitId": {},
  "baseCommitId": {},
  "conflictMetadataList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeable|object|true|none|none|
|destinationCommitId|object|true|none|none|
|sourceCommitId|object|true|none|none|
|baseCommitId|object|false|none|none|
|conflictMetadataList|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_GetMergeConflictsInput">GetMergeConflictsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergeconflictsinput"></a>
<a id="schema_GetMergeConflictsInput"></a>
<a id="tocSgetmergeconflictsinput"></a>
<a id="tocsgetmergeconflictsinput"></a>

```json
{
  "repositoryName": {},
  "destinationCommitSpecifier": {},
  "sourceCommitSpecifier": {},
  "mergeOption": {},
  "conflictDetailLevel": {},
  "maxConflictFiles": {},
  "conflictResolutionStrategy": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|mergeOption|object|true|none|none|
|conflictDetailLevel|object|false|none|none|
|maxConflictFiles|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidDestinationCommitSpecifierException">InvalidDestinationCommitSpecifierException</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddestinationcommitspecifierexception"></a>
<a id="schema_InvalidDestinationCommitSpecifierException"></a>
<a id="tocSinvaliddestinationcommitspecifierexception"></a>
<a id="tocsinvaliddestinationcommitspecifierexception"></a>

```json
null
```

<h2 id="tocS_InvalidSourceCommitSpecifierException">InvalidSourceCommitSpecifierException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsourcecommitspecifierexception"></a>
<a id="schema_InvalidSourceCommitSpecifierException"></a>
<a id="tocSinvalidsourcecommitspecifierexception"></a>
<a id="tocsinvalidsourcecommitspecifierexception"></a>

```json
null
```

<h2 id="tocS_GetMergeOptionsOutput">GetMergeOptionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergeoptionsoutput"></a>
<a id="schema_GetMergeOptionsOutput"></a>
<a id="tocSgetmergeoptionsoutput"></a>
<a id="tocsgetmergeoptionsoutput"></a>

```json
{
  "mergeOptions": {},
  "sourceCommitId": {},
  "destinationCommitId": {},
  "baseCommitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeOptions|object|true|none|none|
|sourceCommitId|object|true|none|none|
|destinationCommitId|object|true|none|none|
|baseCommitId|object|true|none|none|

<h2 id="tocS_GetMergeOptionsInput">GetMergeOptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmergeoptionsinput"></a>
<a id="schema_GetMergeOptionsInput"></a>
<a id="tocSgetmergeoptionsinput"></a>
<a id="tocsgetmergeoptionsinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|

<h2 id="tocS_GetPullRequestOutput">GetPullRequestOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestoutput"></a>
<a id="schema_GetPullRequestOutput"></a>
<a id="tocSgetpullrequestoutput"></a>
<a id="tocsgetpullrequestoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|true|none|none|

<h2 id="tocS_GetPullRequestInput">GetPullRequestInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestinput"></a>
<a id="schema_GetPullRequestInput"></a>
<a id="tocSgetpullrequestinput"></a>
<a id="tocsgetpullrequestinput"></a>

```json
{
  "pullRequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|

<h2 id="tocS_GetPullRequestApprovalStatesOutput">GetPullRequestApprovalStatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestapprovalstatesoutput"></a>
<a id="schema_GetPullRequestApprovalStatesOutput"></a>
<a id="tocSgetpullrequestapprovalstatesoutput"></a>
<a id="tocsgetpullrequestapprovalstatesoutput"></a>

```json
{
  "approvals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvals|object|false|none|none|

<h2 id="tocS_GetPullRequestApprovalStatesInput">GetPullRequestApprovalStatesInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestapprovalstatesinput"></a>
<a id="schema_GetPullRequestApprovalStatesInput"></a>
<a id="tocSgetpullrequestapprovalstatesinput"></a>
<a id="tocsgetpullrequestapprovalstatesinput"></a>

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_GetPullRequestOverrideStateOutput">GetPullRequestOverrideStateOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestoverridestateoutput"></a>
<a id="schema_GetPullRequestOverrideStateOutput"></a>
<a id="tocSgetpullrequestoverridestateoutput"></a>
<a id="tocsgetpullrequestoverridestateoutput"></a>

```json
{
  "overridden": {},
  "overrider": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overridden|object|false|none|none|
|overrider|object|false|none|none|

<h2 id="tocS_GetPullRequestOverrideStateInput">GetPullRequestOverrideStateInput</h2>
<!-- backwards compatibility -->
<a id="schemagetpullrequestoverridestateinput"></a>
<a id="schema_GetPullRequestOverrideStateInput"></a>
<a id="tocSgetpullrequestoverridestateinput"></a>
<a id="tocsgetpullrequestoverridestateinput"></a>

```json
{
  "pullRequestId": {},
  "revisionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|revisionId|object|true|none|none|

<h2 id="tocS_GetRepositoryOutput">GetRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryoutput"></a>
<a id="schema_GetRepositoryOutput"></a>
<a id="tocSgetrepositoryoutput"></a>
<a id="tocsgetrepositoryoutput"></a>

```json
{
  "repositoryMetadata": {
    "accountId": {},
    "repositoryId": {},
    "repositoryName": {},
    "repositoryDescription": {},
    "defaultBranch": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "cloneUrlHttp": {},
    "cloneUrlSsh": {},
    "Arn": {}
  }
}
```

Represents the output of a get repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryMetadata|object|false|none|none|

<h2 id="tocS_GetRepositoryInput">GetRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositoryinput"></a>
<a id="schema_GetRepositoryInput"></a>
<a id="tocSgetrepositoryinput"></a>
<a id="tocsgetrepositoryinput"></a>

```json
{
  "repositoryName": {}
}
```

Represents the input of a get repository operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|

<h2 id="tocS_GetRepositoryTriggersOutput">GetRepositoryTriggersOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorytriggersoutput"></a>
<a id="schema_GetRepositoryTriggersOutput"></a>
<a id="tocSgetrepositorytriggersoutput"></a>
<a id="tocsgetrepositorytriggersoutput"></a>

```json
{
  "configurationId": {},
  "triggers": {}
}
```

Represents the output of a get repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|object|false|none|none|
|triggers|object|false|none|none|

<h2 id="tocS_GetRepositoryTriggersInput">GetRepositoryTriggersInput</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorytriggersinput"></a>
<a id="schema_GetRepositoryTriggersInput"></a>
<a id="tocSgetrepositorytriggersinput"></a>
<a id="tocsgetrepositorytriggersinput"></a>

```json
{
  "repositoryName": {}
}
```

Represents the input of a get repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|

<h2 id="tocS_ListApprovalRuleTemplatesOutput">ListApprovalRuleTemplatesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistapprovalruletemplatesoutput"></a>
<a id="schema_ListApprovalRuleTemplatesOutput"></a>
<a id="tocSlistapprovalruletemplatesoutput"></a>
<a id="tocslistapprovalruletemplatesoutput"></a>

```json
{
  "approvalRuleTemplateNames": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateNames|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListApprovalRuleTemplatesInput">ListApprovalRuleTemplatesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistapprovalruletemplatesinput"></a>
<a id="schema_ListApprovalRuleTemplatesInput"></a>
<a id="tocSlistapprovalruletemplatesinput"></a>
<a id="tocslistapprovalruletemplatesinput"></a>

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

<h2 id="tocS_ListAssociatedApprovalRuleTemplatesForRepositoryOutput">ListAssociatedApprovalRuleTemplatesForRepositoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedapprovalruletemplatesforrepositoryoutput"></a>
<a id="schema_ListAssociatedApprovalRuleTemplatesForRepositoryOutput"></a>
<a id="tocSlistassociatedapprovalruletemplatesforrepositoryoutput"></a>
<a id="tocslistassociatedapprovalruletemplatesforrepositoryoutput"></a>

```json
{
  "approvalRuleTemplateNames": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateNames|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListAssociatedApprovalRuleTemplatesForRepositoryInput">ListAssociatedApprovalRuleTemplatesForRepositoryInput</h2>
<!-- backwards compatibility -->
<a id="schemalistassociatedapprovalruletemplatesforrepositoryinput"></a>
<a id="schema_ListAssociatedApprovalRuleTemplatesForRepositoryInput"></a>
<a id="tocSlistassociatedapprovalruletemplatesforrepositoryinput"></a>
<a id="tocslistassociatedapprovalruletemplatesforrepositoryinput"></a>

```json
{
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListBranchesOutput">ListBranchesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbranchesoutput"></a>
<a id="schema_ListBranchesOutput"></a>
<a id="tocSlistbranchesoutput"></a>
<a id="tocslistbranchesoutput"></a>

```json
{
  "branches": {},
  "nextToken": {}
}
```

Represents the output of a list branches operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListBranchesInput">ListBranchesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbranchesinput"></a>
<a id="schema_ListBranchesInput"></a>
<a id="tocSlistbranchesinput"></a>
<a id="tocslistbranchesinput"></a>

```json
{
  "repositoryName": {},
  "nextToken": {}
}
```

Represents the input of a list branches operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPullRequestsOutput">ListPullRequestsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistpullrequestsoutput"></a>
<a id="schema_ListPullRequestsOutput"></a>
<a id="tocSlistpullrequestsoutput"></a>
<a id="tocslistpullrequestsoutput"></a>

```json
{
  "pullRequestIds": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestIds|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListPullRequestsInput">ListPullRequestsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistpullrequestsinput"></a>
<a id="schema_ListPullRequestsInput"></a>
<a id="tocSlistpullrequestsinput"></a>
<a id="tocslistpullrequestsinput"></a>

```json
{
  "repositoryName": {},
  "authorArn": {},
  "pullRequestStatus": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|authorArn|object|false|none|none|
|pullRequestStatus|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_InvalidPullRequestStatusException">InvalidPullRequestStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpullrequeststatusexception"></a>
<a id="schema_InvalidPullRequestStatusException"></a>
<a id="tocSinvalidpullrequeststatusexception"></a>
<a id="tocsinvalidpullrequeststatusexception"></a>

```json
null
```

<h2 id="tocS_InvalidAuthorArnException">InvalidAuthorArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidauthorarnexception"></a>
<a id="schema_InvalidAuthorArnException"></a>
<a id="tocSinvalidauthorarnexception"></a>
<a id="tocsinvalidauthorarnexception"></a>

```json
null
```

<h2 id="tocS_AuthorDoesNotExistException">AuthorDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaauthordoesnotexistexception"></a>
<a id="schema_AuthorDoesNotExistException"></a>
<a id="tocSauthordoesnotexistexception"></a>
<a id="tocsauthordoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_ListRepositoriesOutput">ListRepositoriesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesoutput"></a>
<a id="schema_ListRepositoriesOutput"></a>
<a id="tocSlistrepositoriesoutput"></a>
<a id="tocslistrepositoriesoutput"></a>

```json
{
  "repositories": {},
  "nextToken": {}
}
```

Represents the output of a list repositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRepositoriesInput">ListRepositoriesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesinput"></a>
<a id="schema_ListRepositoriesInput"></a>
<a id="tocSlistrepositoriesinput"></a>
<a id="tocslistrepositoriesinput"></a>

```json
{
  "nextToken": {},
  "sortBy": {},
  "order": {}
}
```

Represents the input of a list repositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|sortBy|object|false|none|none|
|order|object|false|none|none|

<h2 id="tocS_InvalidSortByException">InvalidSortByException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsortbyexception"></a>
<a id="schema_InvalidSortByException"></a>
<a id="tocSinvalidsortbyexception"></a>
<a id="tocsinvalidsortbyexception"></a>

```json
null
```

<h2 id="tocS_InvalidOrderException">InvalidOrderException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidorderexception"></a>
<a id="schema_InvalidOrderException"></a>
<a id="tocSinvalidorderexception"></a>
<a id="tocsinvalidorderexception"></a>

```json
null
```

<h2 id="tocS_ListRepositoriesForApprovalRuleTemplateOutput">ListRepositoriesForApprovalRuleTemplateOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesforapprovalruletemplateoutput"></a>
<a id="schema_ListRepositoriesForApprovalRuleTemplateOutput"></a>
<a id="tocSlistrepositoriesforapprovalruletemplateoutput"></a>
<a id="tocslistrepositoriesforapprovalruletemplateoutput"></a>

```json
{
  "repositoryNames": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryNames|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListRepositoriesForApprovalRuleTemplateInput">ListRepositoriesForApprovalRuleTemplateInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrepositoriesforapprovalruletemplateinput"></a>
<a id="schema_ListRepositoriesForApprovalRuleTemplateInput"></a>
<a id="tocSlistrepositoriesforapprovalruletemplateinput"></a>
<a id="tocslistrepositoriesforapprovalruletemplateinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

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

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "resourceArn": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ResourceArnRequiredException">ResourceArnRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearnrequiredexception"></a>
<a id="schema_ResourceArnRequiredException"></a>
<a id="tocSresourcearnrequiredexception"></a>
<a id="tocsresourcearnrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidResourceArnException">InvalidResourceArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcearnexception"></a>
<a id="schema_InvalidResourceArnException"></a>
<a id="tocSinvalidresourcearnexception"></a>
<a id="tocsinvalidresourcearnexception"></a>

```json
null
```

<h2 id="tocS_MergeBranchesByFastForwardOutput">MergeBranchesByFastForwardOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbyfastforwardoutput"></a>
<a id="schema_MergeBranchesByFastForwardOutput"></a>
<a id="tocSmergebranchesbyfastforwardoutput"></a>
<a id="tocsmergebranchesbyfastforwardoutput"></a>

```json
{
  "commitId": {},
  "treeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|

<h2 id="tocS_MergeBranchesByFastForwardInput">MergeBranchesByFastForwardInput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbyfastforwardinput"></a>
<a id="schema_MergeBranchesByFastForwardInput"></a>
<a id="tocSmergebranchesbyfastforwardinput"></a>
<a id="tocsmergebranchesbyfastforwardinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|targetBranch|object|false|none|none|

<h2 id="tocS_InvalidTargetBranchException">InvalidTargetBranchException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtargetbranchexception"></a>
<a id="schema_InvalidTargetBranchException"></a>
<a id="tocSinvalidtargetbranchexception"></a>
<a id="tocsinvalidtargetbranchexception"></a>

```json
null
```

<h2 id="tocS_MergeBranchesBySquashOutput">MergeBranchesBySquashOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbysquashoutput"></a>
<a id="schema_MergeBranchesBySquashOutput"></a>
<a id="tocSmergebranchesbysquashoutput"></a>
<a id="tocsmergebranchesbysquashoutput"></a>

```json
{
  "commitId": {},
  "treeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|

<h2 id="tocS_MergeBranchesBySquashInput">MergeBranchesBySquashInput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbysquashinput"></a>
<a id="schema_MergeBranchesBySquashInput"></a>
<a id="tocSmergebranchesbysquashinput"></a>
<a id="tocsmergebranchesbysquashinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|targetBranch|object|false|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|commitMessage|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|conflictResolution|object|false|none|none|

<h2 id="tocS_MergeBranchesByThreeWayOutput">MergeBranchesByThreeWayOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbythreewayoutput"></a>
<a id="schema_MergeBranchesByThreeWayOutput"></a>
<a id="tocSmergebranchesbythreewayoutput"></a>
<a id="tocsmergebranchesbythreewayoutput"></a>

```json
{
  "commitId": {},
  "treeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|

<h2 id="tocS_MergeBranchesByThreeWayInput">MergeBranchesByThreeWayInput</h2>
<!-- backwards compatibility -->
<a id="schemamergebranchesbythreewayinput"></a>
<a id="schema_MergeBranchesByThreeWayInput"></a>
<a id="tocSmergebranchesbythreewayinput"></a>
<a id="tocsmergebranchesbythreewayinput"></a>

```json
{
  "repositoryName": {},
  "sourceCommitSpecifier": {},
  "destinationCommitSpecifier": {},
  "targetBranch": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "authorName": {},
  "email": {},
  "commitMessage": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceCommitSpecifier|object|true|none|none|
|destinationCommitSpecifier|object|true|none|none|
|targetBranch|object|false|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|commitMessage|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|conflictResolution|object|false|none|none|

<h2 id="tocS_MergePullRequestByFastForwardOutput">MergePullRequestByFastForwardOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbyfastforwardoutput"></a>
<a id="schema_MergePullRequestByFastForwardOutput"></a>
<a id="tocSmergepullrequestbyfastforwardoutput"></a>
<a id="tocsmergepullrequestbyfastforwardoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|false|none|none|

<h2 id="tocS_MergePullRequestByFastForwardInput">MergePullRequestByFastForwardInput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbyfastforwardinput"></a>
<a id="schema_MergePullRequestByFastForwardInput"></a>
<a id="tocSmergepullrequestbyfastforwardinput"></a>
<a id="tocsmergepullrequestbyfastforwardinput"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|repositoryName|object|true|none|none|
|sourceCommitId|object|false|none|none|

<h2 id="tocS_TipOfSourceReferenceIsDifferentException">TipOfSourceReferenceIsDifferentException</h2>
<!-- backwards compatibility -->
<a id="schematipofsourcereferenceisdifferentexception"></a>
<a id="schema_TipOfSourceReferenceIsDifferentException"></a>
<a id="tocStipofsourcereferenceisdifferentexception"></a>
<a id="tocstipofsourcereferenceisdifferentexception"></a>

```json
null
```

<h2 id="tocS_PullRequestApprovalRulesNotSatisfiedException">PullRequestApprovalRulesNotSatisfiedException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestapprovalrulesnotsatisfiedexception"></a>
<a id="schema_PullRequestApprovalRulesNotSatisfiedException"></a>
<a id="tocSpullrequestapprovalrulesnotsatisfiedexception"></a>
<a id="tocspullrequestapprovalrulesnotsatisfiedexception"></a>

```json
null
```

<h2 id="tocS_MergePullRequestBySquashOutput">MergePullRequestBySquashOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbysquashoutput"></a>
<a id="schema_MergePullRequestBySquashOutput"></a>
<a id="tocSmergepullrequestbysquashoutput"></a>
<a id="tocsmergepullrequestbysquashoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|[PullRequest](#schemapullrequest)|false|none|Returns information about a pull request.|

<h2 id="tocS_MergePullRequestBySquashInput">MergePullRequestBySquashInput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbysquashinput"></a>
<a id="schema_MergePullRequestBySquashInput"></a>
<a id="tocSmergepullrequestbysquashinput"></a>
<a id="tocsmergepullrequestbysquashinput"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "commitMessage": {},
  "authorName": {},
  "email": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|repositoryName|object|true|none|none|
|sourceCommitId|object|false|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|commitMessage|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|conflictResolution|object|false|none|none|

<h2 id="tocS_MergePullRequestByThreeWayOutput">MergePullRequestByThreeWayOutput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbythreewayoutput"></a>
<a id="schema_MergePullRequestByThreeWayOutput"></a>
<a id="tocSmergepullrequestbythreewayoutput"></a>
<a id="tocsmergepullrequestbythreewayoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|[PullRequest](#schemapullrequest)|false|none|Returns information about a pull request.|

<h2 id="tocS_MergePullRequestByThreeWayInput">MergePullRequestByThreeWayInput</h2>
<!-- backwards compatibility -->
<a id="schemamergepullrequestbythreewayinput"></a>
<a id="schema_MergePullRequestByThreeWayInput"></a>
<a id="tocSmergepullrequestbythreewayinput"></a>
<a id="tocsmergepullrequestbythreewayinput"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "sourceCommitId": {},
  "conflictDetailLevel": {},
  "conflictResolutionStrategy": {},
  "commitMessage": {},
  "authorName": {},
  "email": {},
  "keepEmptyFolders": {},
  "conflictResolution": {
    "replaceContents": {},
    "deleteFiles": {},
    "setFileModes": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|repositoryName|object|true|none|none|
|sourceCommitId|object|false|none|none|
|conflictDetailLevel|object|false|none|none|
|conflictResolutionStrategy|object|false|none|none|
|commitMessage|object|false|none|none|
|authorName|object|false|none|none|
|email|object|false|none|none|
|keepEmptyFolders|object|false|none|none|
|conflictResolution|object|false|none|none|

<h2 id="tocS_OverridePullRequestApprovalRulesInput">OverridePullRequestApprovalRulesInput</h2>
<!-- backwards compatibility -->
<a id="schemaoverridepullrequestapprovalrulesinput"></a>
<a id="schema_OverridePullRequestApprovalRulesInput"></a>
<a id="tocSoverridepullrequestapprovalrulesinput"></a>
<a id="tocsoverridepullrequestapprovalrulesinput"></a>

```json
{
  "pullRequestId": {},
  "revisionId": {},
  "overrideStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|revisionId|object|true|none|none|
|overrideStatus|object|true|none|none|

<h2 id="tocS_InvalidOverrideStatusException">InvalidOverrideStatusException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoverridestatusexception"></a>
<a id="schema_InvalidOverrideStatusException"></a>
<a id="tocSinvalidoverridestatusexception"></a>
<a id="tocsinvalidoverridestatusexception"></a>

```json
null
```

<h2 id="tocS_OverrideStatusRequiredException">OverrideStatusRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaoverridestatusrequiredexception"></a>
<a id="schema_OverrideStatusRequiredException"></a>
<a id="tocSoverridestatusrequiredexception"></a>
<a id="tocsoverridestatusrequiredexception"></a>

```json
null
```

<h2 id="tocS_OverrideAlreadySetException">OverrideAlreadySetException</h2>
<!-- backwards compatibility -->
<a id="schemaoverridealreadysetexception"></a>
<a id="schema_OverrideAlreadySetException"></a>
<a id="tocSoverridealreadysetexception"></a>
<a id="tocsoverridealreadysetexception"></a>

```json
null
```

<h2 id="tocS_PostCommentForComparedCommitOutput">PostCommentForComparedCommitOutput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentforcomparedcommitoutput"></a>
<a id="schema_PostCommentForComparedCommitOutput"></a>
<a id="tocSpostcommentforcomparedcommitoutput"></a>
<a id="tocspostcommentforcomparedcommitoutput"></a>

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|beforeBlobId|object|false|none|none|
|afterBlobId|object|false|none|none|
|location|object|false|none|none|
|comment|object|false|none|none|

<h2 id="tocS_PostCommentForComparedCommitInput">PostCommentForComparedCommitInput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentforcomparedcommitinput"></a>
<a id="schema_PostCommentForComparedCommitInput"></a>
<a id="tocSpostcommentforcomparedcommitinput"></a>
<a id="tocspostcommentforcomparedcommitinput"></a>

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "content": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|true|none|none|
|location|object|false|none|none|
|content|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_CommentContentRequiredException">CommentContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemacommentcontentrequiredexception"></a>
<a id="schema_CommentContentRequiredException"></a>
<a id="tocScommentcontentrequiredexception"></a>
<a id="tocscommentcontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_CommentContentSizeLimitExceededException">CommentContentSizeLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacommentcontentsizelimitexceededexception"></a>
<a id="schema_CommentContentSizeLimitExceededException"></a>
<a id="tocScommentcontentsizelimitexceededexception"></a>
<a id="tocscommentcontentsizelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidFileLocationException">InvalidFileLocationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilelocationexception"></a>
<a id="schema_InvalidFileLocationException"></a>
<a id="tocSinvalidfilelocationexception"></a>
<a id="tocsinvalidfilelocationexception"></a>

```json
null
```

<h2 id="tocS_InvalidRelativeFileVersionEnumException">InvalidRelativeFileVersionEnumException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrelativefileversionenumexception"></a>
<a id="schema_InvalidRelativeFileVersionEnumException"></a>
<a id="tocSinvalidrelativefileversionenumexception"></a>
<a id="tocsinvalidrelativefileversionenumexception"></a>

```json
null
```

<h2 id="tocS_InvalidFilePositionException">InvalidFilePositionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfilepositionexception"></a>
<a id="schema_InvalidFilePositionException"></a>
<a id="tocSinvalidfilepositionexception"></a>
<a id="tocsinvalidfilepositionexception"></a>

```json
null
```

<h2 id="tocS_BeforeCommitIdAndAfterCommitIdAreSameException">BeforeCommitIdAndAfterCommitIdAreSameException</h2>
<!-- backwards compatibility -->
<a id="schemabeforecommitidandaftercommitidaresameexception"></a>
<a id="schema_BeforeCommitIdAndAfterCommitIdAreSameException"></a>
<a id="tocSbeforecommitidandaftercommitidaresameexception"></a>
<a id="tocsbeforecommitidandaftercommitidaresameexception"></a>

```json
null
```

<h2 id="tocS_PostCommentForPullRequestOutput">PostCommentForPullRequestOutput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentforpullrequestoutput"></a>
<a id="schema_PostCommentForPullRequestOutput"></a>
<a id="tocSpostcommentforpullrequestoutput"></a>
<a id="tocspostcommentforpullrequestoutput"></a>

```json
{
  "repositoryName": {},
  "pullRequestId": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|pullRequestId|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|beforeBlobId|object|false|none|none|
|afterBlobId|object|false|none|none|
|location|object|false|none|none|
|comment|object|false|none|none|

<h2 id="tocS_PostCommentForPullRequestInput">PostCommentForPullRequestInput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentforpullrequestinput"></a>
<a id="schema_PostCommentForPullRequestInput"></a>
<a id="tocSpostcommentforpullrequestinput"></a>
<a id="tocspostcommentforpullrequestinput"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "content": {},
  "clientRequestToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|repositoryName|object|true|none|none|
|beforeCommitId|object|true|none|none|
|afterCommitId|object|true|none|none|
|location|object|false|none|none|
|content|object|true|none|none|
|clientRequestToken|object|false|none|none|

<h2 id="tocS_PostCommentReplyOutput">PostCommentReplyOutput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentreplyoutput"></a>
<a id="schema_PostCommentReplyOutput"></a>
<a id="tocSpostcommentreplyoutput"></a>
<a id="tocspostcommentreplyoutput"></a>

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|

<h2 id="tocS_PostCommentReplyInput">PostCommentReplyInput</h2>
<!-- backwards compatibility -->
<a id="schemapostcommentreplyinput"></a>
<a id="schema_PostCommentReplyInput"></a>
<a id="tocSpostcommentreplyinput"></a>
<a id="tocspostcommentreplyinput"></a>

```json
{
  "inReplyTo": {},
  "clientRequestToken": {},
  "content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inReplyTo|object|true|none|none|
|clientRequestToken|object|false|none|none|
|content|object|true|none|none|

<h2 id="tocS_PutCommentReactionInput">PutCommentReactionInput</h2>
<!-- backwards compatibility -->
<a id="schemaputcommentreactioninput"></a>
<a id="schema_PutCommentReactionInput"></a>
<a id="tocSputcommentreactioninput"></a>
<a id="tocsputcommentreactioninput"></a>

```json
{
  "commentId": {},
  "reactionValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|true|none|none|
|reactionValue|object|true|none|none|

<h2 id="tocS_InvalidReactionValueException">InvalidReactionValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidreactionvalueexception"></a>
<a id="schema_InvalidReactionValueException"></a>
<a id="tocSinvalidreactionvalueexception"></a>
<a id="tocsinvalidreactionvalueexception"></a>

```json
null
```

<h2 id="tocS_ReactionValueRequiredException">ReactionValueRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemareactionvaluerequiredexception"></a>
<a id="schema_ReactionValueRequiredException"></a>
<a id="tocSreactionvaluerequiredexception"></a>
<a id="tocsreactionvaluerequiredexception"></a>

```json
null
```

<h2 id="tocS_ReactionLimitExceededException">ReactionLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemareactionlimitexceededexception"></a>
<a id="schema_ReactionLimitExceededException"></a>
<a id="tocSreactionlimitexceededexception"></a>
<a id="tocsreactionlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_PutFileOutput">PutFileOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputfileoutput"></a>
<a id="schema_PutFileOutput"></a>
<a id="tocSputfileoutput"></a>
<a id="tocsputfileoutput"></a>

```json
{
  "commitId": {},
  "blobId": {},
  "treeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|true|none|none|
|blobId|object|true|none|none|
|treeId|object|true|none|none|

<h2 id="tocS_PutFileInput">PutFileInput</h2>
<!-- backwards compatibility -->
<a id="schemaputfileinput"></a>
<a id="schema_PutFileInput"></a>
<a id="tocSputfileinput"></a>
<a id="tocsputfileinput"></a>

```json
{
  "repositoryName": {},
  "branchName": {},
  "fileContent": {},
  "filePath": {},
  "fileMode": {},
  "parentCommitId": {},
  "commitMessage": {},
  "name": {},
  "email": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|branchName|object|true|none|none|
|fileContent|object|true|none|none|
|filePath|object|true|none|none|
|fileMode|object|false|none|none|
|parentCommitId|object|false|none|none|
|commitMessage|object|false|none|none|
|name|object|false|none|none|
|email|object|false|none|none|

<h2 id="tocS_FileContentRequiredException">FileContentRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemafilecontentrequiredexception"></a>
<a id="schema_FileContentRequiredException"></a>
<a id="tocSfilecontentrequiredexception"></a>
<a id="tocsfilecontentrequiredexception"></a>

```json
null
```

<h2 id="tocS_SameFileContentException">SameFileContentException</h2>
<!-- backwards compatibility -->
<a id="schemasamefilecontentexception"></a>
<a id="schema_SameFileContentException"></a>
<a id="tocSsamefilecontentexception"></a>
<a id="tocssamefilecontentexception"></a>

```json
null
```

<h2 id="tocS_PutRepositoryTriggersOutput">PutRepositoryTriggersOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorytriggersoutput"></a>
<a id="schema_PutRepositoryTriggersOutput"></a>
<a id="tocSputrepositorytriggersoutput"></a>
<a id="tocsputrepositorytriggersoutput"></a>

```json
{
  "configurationId": {}
}
```

Represents the output of a put repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationId|object|false|none|none|

<h2 id="tocS_PutRepositoryTriggersInput">PutRepositoryTriggersInput</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorytriggersinput"></a>
<a id="schema_PutRepositoryTriggersInput"></a>
<a id="tocSputrepositorytriggersinput"></a>
<a id="tocsputrepositorytriggersinput"></a>

```json
{
  "repositoryName": {},
  "triggers": {}
}
```

Represents the input of a put repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|triggers|object|true|none|none|

<h2 id="tocS_RepositoryTriggersListRequiredException">RepositoryTriggersListRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerslistrequiredexception"></a>
<a id="schema_RepositoryTriggersListRequiredException"></a>
<a id="tocSrepositorytriggerslistrequiredexception"></a>
<a id="tocsrepositorytriggerslistrequiredexception"></a>

```json
null
```

<h2 id="tocS_MaximumRepositoryTriggersExceededException">MaximumRepositoryTriggersExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumrepositorytriggersexceededexception"></a>
<a id="schema_MaximumRepositoryTriggersExceededException"></a>
<a id="tocSmaximumrepositorytriggersexceededexception"></a>
<a id="tocsmaximumrepositorytriggersexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerNameException">InvalidRepositoryTriggerNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggernameexception"></a>
<a id="schema_InvalidRepositoryTriggerNameException"></a>
<a id="tocSinvalidrepositorytriggernameexception"></a>
<a id="tocsinvalidrepositorytriggernameexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerDestinationArnException">InvalidRepositoryTriggerDestinationArnException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggerdestinationarnexception"></a>
<a id="schema_InvalidRepositoryTriggerDestinationArnException"></a>
<a id="tocSinvalidrepositorytriggerdestinationarnexception"></a>
<a id="tocsinvalidrepositorytriggerdestinationarnexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerRegionException">InvalidRepositoryTriggerRegionException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggerregionexception"></a>
<a id="schema_InvalidRepositoryTriggerRegionException"></a>
<a id="tocSinvalidrepositorytriggerregionexception"></a>
<a id="tocsinvalidrepositorytriggerregionexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerCustomDataException">InvalidRepositoryTriggerCustomDataException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggercustomdataexception"></a>
<a id="schema_InvalidRepositoryTriggerCustomDataException"></a>
<a id="tocSinvalidrepositorytriggercustomdataexception"></a>
<a id="tocsinvalidrepositorytriggercustomdataexception"></a>

```json
null
```

<h2 id="tocS_MaximumBranchesExceededException">MaximumBranchesExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumbranchesexceededexception"></a>
<a id="schema_MaximumBranchesExceededException"></a>
<a id="tocSmaximumbranchesexceededexception"></a>
<a id="tocsmaximumbranchesexceededexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerBranchNameException">InvalidRepositoryTriggerBranchNameException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggerbranchnameexception"></a>
<a id="schema_InvalidRepositoryTriggerBranchNameException"></a>
<a id="tocSinvalidrepositorytriggerbranchnameexception"></a>
<a id="tocsinvalidrepositorytriggerbranchnameexception"></a>

```json
null
```

<h2 id="tocS_InvalidRepositoryTriggerEventsException">InvalidRepositoryTriggerEventsException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrepositorytriggereventsexception"></a>
<a id="schema_InvalidRepositoryTriggerEventsException"></a>
<a id="tocSinvalidrepositorytriggereventsexception"></a>
<a id="tocsinvalidrepositorytriggereventsexception"></a>

```json
null
```

<h2 id="tocS_RepositoryTriggerNameRequiredException">RepositoryTriggerNameRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggernamerequiredexception"></a>
<a id="schema_RepositoryTriggerNameRequiredException"></a>
<a id="tocSrepositorytriggernamerequiredexception"></a>
<a id="tocsrepositorytriggernamerequiredexception"></a>

```json
null
```

<h2 id="tocS_RepositoryTriggerDestinationArnRequiredException">RepositoryTriggerDestinationArnRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerdestinationarnrequiredexception"></a>
<a id="schema_RepositoryTriggerDestinationArnRequiredException"></a>
<a id="tocSrepositorytriggerdestinationarnrequiredexception"></a>
<a id="tocsrepositorytriggerdestinationarnrequiredexception"></a>

```json
null
```

<h2 id="tocS_RepositoryTriggerBranchNameListRequiredException">RepositoryTriggerBranchNameListRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerbranchnamelistrequiredexception"></a>
<a id="schema_RepositoryTriggerBranchNameListRequiredException"></a>
<a id="tocSrepositorytriggerbranchnamelistrequiredexception"></a>
<a id="tocsrepositorytriggerbranchnamelistrequiredexception"></a>

```json
null
```

<h2 id="tocS_RepositoryTriggerEventsListRequiredException">RepositoryTriggerEventsListRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggereventslistrequiredexception"></a>
<a id="schema_RepositoryTriggerEventsListRequiredException"></a>
<a id="tocSrepositorytriggereventslistrequiredexception"></a>
<a id="tocsrepositorytriggereventslistrequiredexception"></a>

```json
null
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "resourceArn": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

<h2 id="tocS_TagsMapRequiredException">TagsMapRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematagsmaprequiredexception"></a>
<a id="schema_TagsMapRequiredException"></a>
<a id="tocStagsmaprequiredexception"></a>
<a id="tocstagsmaprequiredexception"></a>

```json
null
```

<h2 id="tocS_TestRepositoryTriggersOutput">TestRepositoryTriggersOutput</h2>
<!-- backwards compatibility -->
<a id="schematestrepositorytriggersoutput"></a>
<a id="schema_TestRepositoryTriggersOutput"></a>
<a id="tocStestrepositorytriggersoutput"></a>
<a id="tocstestrepositorytriggersoutput"></a>

```json
{
  "successfulExecutions": {},
  "failedExecutions": {}
}
```

Represents the output of a test repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|successfulExecutions|object|false|none|none|
|failedExecutions|object|false|none|none|

<h2 id="tocS_TestRepositoryTriggersInput">TestRepositoryTriggersInput</h2>
<!-- backwards compatibility -->
<a id="schematestrepositorytriggersinput"></a>
<a id="schema_TestRepositoryTriggersInput"></a>
<a id="tocStestrepositorytriggersinput"></a>
<a id="tocstestrepositorytriggersinput"></a>

```json
{
  "repositoryName": {},
  "triggers": {}
}
```

Represents the input of a test repository triggers operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|triggers|object|true|none|none|

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_TagKeysListRequiredException">TagKeysListRequiredException</h2>
<!-- backwards compatibility -->
<a id="schematagkeyslistrequiredexception"></a>
<a id="schema_TagKeysListRequiredException"></a>
<a id="tocStagkeyslistrequiredexception"></a>
<a id="tocstagkeyslistrequiredexception"></a>

```json
null
```

<h2 id="tocS_InvalidTagKeysListException">InvalidTagKeysListException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagkeyslistexception"></a>
<a id="schema_InvalidTagKeysListException"></a>
<a id="tocSinvalidtagkeyslistexception"></a>
<a id="tocsinvalidtagkeyslistexception"></a>

```json
null
```

<h2 id="tocS_UpdateApprovalRuleTemplateContentOutput">UpdateApprovalRuleTemplateContentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatecontentoutput"></a>
<a id="schema_UpdateApprovalRuleTemplateContentOutput"></a>
<a id="tocSupdateapprovalruletemplatecontentoutput"></a>
<a id="tocsupdateapprovalruletemplatecontentoutput"></a>

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplate|[ApprovalRuleTemplate](#schemaapprovalruletemplate)|true|none|Returns information about an approval rule template.|

<h2 id="tocS_UpdateApprovalRuleTemplateContentInput">UpdateApprovalRuleTemplateContentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatecontentinput"></a>
<a id="schema_UpdateApprovalRuleTemplateContentInput"></a>
<a id="tocSupdateapprovalruletemplatecontentinput"></a>
<a id="tocsupdateapprovalruletemplatecontentinput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "newRuleContent": {},
  "existingRuleContentSha256": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|newRuleContent|object|true|none|none|
|existingRuleContentSha256|object|false|none|none|

<h2 id="tocS_InvalidRuleContentSha256Exception">InvalidRuleContentSha256Exception</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrulecontentsha256exception"></a>
<a id="schema_InvalidRuleContentSha256Exception"></a>
<a id="tocSinvalidrulecontentsha256exception"></a>
<a id="tocsinvalidrulecontentsha256exception"></a>

```json
null
```

<h2 id="tocS_UpdateApprovalRuleTemplateDescriptionOutput">UpdateApprovalRuleTemplateDescriptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatedescriptionoutput"></a>
<a id="schema_UpdateApprovalRuleTemplateDescriptionOutput"></a>
<a id="tocSupdateapprovalruletemplatedescriptionoutput"></a>
<a id="tocsupdateapprovalruletemplatedescriptionoutput"></a>

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplate|object|true|none|none|

<h2 id="tocS_UpdateApprovalRuleTemplateDescriptionInput">UpdateApprovalRuleTemplateDescriptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatedescriptioninput"></a>
<a id="schema_UpdateApprovalRuleTemplateDescriptionInput"></a>
<a id="tocSupdateapprovalruletemplatedescriptioninput"></a>
<a id="tocsupdateapprovalruletemplatedescriptioninput"></a>

```json
{
  "approvalRuleTemplateName": {},
  "approvalRuleTemplateDescription": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateName|object|true|none|none|
|approvalRuleTemplateDescription|object|true|none|none|

<h2 id="tocS_UpdateApprovalRuleTemplateNameOutput">UpdateApprovalRuleTemplateNameOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatenameoutput"></a>
<a id="schema_UpdateApprovalRuleTemplateNameOutput"></a>
<a id="tocSupdateapprovalruletemplatenameoutput"></a>
<a id="tocsupdateapprovalruletemplatenameoutput"></a>

```json
{
  "approvalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {},
    "approvalRuleTemplateDescription": {},
    "approvalRuleTemplateContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplate|object|true|none|none|

<h2 id="tocS_UpdateApprovalRuleTemplateNameInput">UpdateApprovalRuleTemplateNameInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateapprovalruletemplatenameinput"></a>
<a id="schema_UpdateApprovalRuleTemplateNameInput"></a>
<a id="tocSupdateapprovalruletemplatenameinput"></a>
<a id="tocsupdateapprovalruletemplatenameinput"></a>

```json
{
  "oldApprovalRuleTemplateName": {},
  "newApprovalRuleTemplateName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oldApprovalRuleTemplateName|object|true|none|none|
|newApprovalRuleTemplateName|object|true|none|none|

<h2 id="tocS_UpdateCommentOutput">UpdateCommentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecommentoutput"></a>
<a id="schema_UpdateCommentOutput"></a>
<a id="tocSupdatecommentoutput"></a>
<a id="tocsupdatecommentoutput"></a>

```json
{
  "comment": {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|object|false|none|none|

<h2 id="tocS_UpdateCommentInput">UpdateCommentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecommentinput"></a>
<a id="schema_UpdateCommentInput"></a>
<a id="tocSupdatecommentinput"></a>
<a id="tocsupdatecommentinput"></a>

```json
{
  "commentId": {},
  "content": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|true|none|none|
|content|object|true|none|none|

<h2 id="tocS_CommentNotCreatedByCallerException">CommentNotCreatedByCallerException</h2>
<!-- backwards compatibility -->
<a id="schemacommentnotcreatedbycallerexception"></a>
<a id="schema_CommentNotCreatedByCallerException"></a>
<a id="tocScommentnotcreatedbycallerexception"></a>
<a id="tocscommentnotcreatedbycallerexception"></a>

```json
null
```

<h2 id="tocS_UpdateDefaultBranchInput">UpdateDefaultBranchInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedefaultbranchinput"></a>
<a id="schema_UpdateDefaultBranchInput"></a>
<a id="tocSupdatedefaultbranchinput"></a>
<a id="tocsupdatedefaultbranchinput"></a>

```json
{
  "repositoryName": {},
  "defaultBranchName": {}
}
```

Represents the input of an update default branch operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|defaultBranchName|object|true|none|none|

<h2 id="tocS_UpdatePullRequestApprovalRuleContentOutput">UpdatePullRequestApprovalRuleContentOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequestapprovalrulecontentoutput"></a>
<a id="schema_UpdatePullRequestApprovalRuleContentOutput"></a>
<a id="tocSupdatepullrequestapprovalrulecontentoutput"></a>
<a id="tocsupdatepullrequestapprovalrulecontentoutput"></a>

```json
{
  "approvalRule": {
    "approvalRuleId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {},
    "originApprovalRuleTemplate": {
      "approvalRuleTemplateId": {},
      "approvalRuleTemplateName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRule|object|true|none|none|

<h2 id="tocS_UpdatePullRequestApprovalRuleContentInput">UpdatePullRequestApprovalRuleContentInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequestapprovalrulecontentinput"></a>
<a id="schema_UpdatePullRequestApprovalRuleContentInput"></a>
<a id="tocSupdatepullrequestapprovalrulecontentinput"></a>
<a id="tocsupdatepullrequestapprovalrulecontentinput"></a>

```json
{
  "pullRequestId": {},
  "approvalRuleName": {},
  "existingRuleContentSha256": {},
  "newRuleContent": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|approvalRuleName|object|true|none|none|
|existingRuleContentSha256|object|false|none|none|
|newRuleContent|object|true|none|none|

<h2 id="tocS_ApprovalRuleDoesNotExistException">ApprovalRuleDoesNotExistException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruledoesnotexistexception"></a>
<a id="schema_ApprovalRuleDoesNotExistException"></a>
<a id="tocSapprovalruledoesnotexistexception"></a>
<a id="tocsapprovalruledoesnotexistexception"></a>

```json
null
```

<h2 id="tocS_CannotModifyApprovalRuleFromTemplateException">CannotModifyApprovalRuleFromTemplateException</h2>
<!-- backwards compatibility -->
<a id="schemacannotmodifyapprovalrulefromtemplateexception"></a>
<a id="schema_CannotModifyApprovalRuleFromTemplateException"></a>
<a id="tocScannotmodifyapprovalrulefromtemplateexception"></a>
<a id="tocscannotmodifyapprovalrulefromtemplateexception"></a>

```json
null
```

<h2 id="tocS_UpdatePullRequestApprovalStateInput">UpdatePullRequestApprovalStateInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequestapprovalstateinput"></a>
<a id="schema_UpdatePullRequestApprovalStateInput"></a>
<a id="tocSupdatepullrequestapprovalstateinput"></a>
<a id="tocsupdatepullrequestapprovalstateinput"></a>

```json
{
  "pullRequestId": {},
  "revisionId": {},
  "approvalState": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|revisionId|object|true|none|none|
|approvalState|object|true|none|none|

<h2 id="tocS_InvalidApprovalStateException">InvalidApprovalStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidapprovalstateexception"></a>
<a id="schema_InvalidApprovalStateException"></a>
<a id="tocSinvalidapprovalstateexception"></a>
<a id="tocsinvalidapprovalstateexception"></a>

```json
null
```

<h2 id="tocS_ApprovalStateRequiredException">ApprovalStateRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalstaterequiredexception"></a>
<a id="schema_ApprovalStateRequiredException"></a>
<a id="tocSapprovalstaterequiredexception"></a>
<a id="tocsapprovalstaterequiredexception"></a>

```json
null
```

<h2 id="tocS_PullRequestCannotBeApprovedByAuthorException">PullRequestCannotBeApprovedByAuthorException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestcannotbeapprovedbyauthorexception"></a>
<a id="schema_PullRequestCannotBeApprovedByAuthorException"></a>
<a id="tocSpullrequestcannotbeapprovedbyauthorexception"></a>
<a id="tocspullrequestcannotbeapprovedbyauthorexception"></a>

```json
null
```

<h2 id="tocS_MaximumNumberOfApprovalsExceededException">MaximumNumberOfApprovalsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemamaximumnumberofapprovalsexceededexception"></a>
<a id="schema_MaximumNumberOfApprovalsExceededException"></a>
<a id="tocSmaximumnumberofapprovalsexceededexception"></a>
<a id="tocsmaximumnumberofapprovalsexceededexception"></a>

```json
null
```

<h2 id="tocS_UpdatePullRequestDescriptionOutput">UpdatePullRequestDescriptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequestdescriptionoutput"></a>
<a id="schema_UpdatePullRequestDescriptionOutput"></a>
<a id="tocSupdatepullrequestdescriptionoutput"></a>
<a id="tocsupdatepullrequestdescriptionoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|true|none|none|

<h2 id="tocS_UpdatePullRequestDescriptionInput">UpdatePullRequestDescriptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequestdescriptioninput"></a>
<a id="schema_UpdatePullRequestDescriptionInput"></a>
<a id="tocSupdatepullrequestdescriptioninput"></a>
<a id="tocsupdatepullrequestdescriptioninput"></a>

```json
{
  "pullRequestId": {},
  "description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|description|object|true|none|none|

<h2 id="tocS_UpdatePullRequestStatusOutput">UpdatePullRequestStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequeststatusoutput"></a>
<a id="schema_UpdatePullRequestStatusOutput"></a>
<a id="tocSupdatepullrequeststatusoutput"></a>
<a id="tocsupdatepullrequeststatusoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|true|none|none|

<h2 id="tocS_UpdatePullRequestStatusInput">UpdatePullRequestStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequeststatusinput"></a>
<a id="schema_UpdatePullRequestStatusInput"></a>
<a id="tocSupdatepullrequeststatusinput"></a>
<a id="tocsupdatepullrequeststatusinput"></a>

```json
{
  "pullRequestId": {},
  "pullRequestStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|pullRequestStatus|object|true|none|none|

<h2 id="tocS_InvalidPullRequestStatusUpdateException">InvalidPullRequestStatusUpdateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpullrequeststatusupdateexception"></a>
<a id="schema_InvalidPullRequestStatusUpdateException"></a>
<a id="tocSinvalidpullrequeststatusupdateexception"></a>
<a id="tocsinvalidpullrequeststatusupdateexception"></a>

```json
null
```

<h2 id="tocS_PullRequestStatusRequiredException">PullRequestStatusRequiredException</h2>
<!-- backwards compatibility -->
<a id="schemapullrequeststatusrequiredexception"></a>
<a id="schema_PullRequestStatusRequiredException"></a>
<a id="tocSpullrequeststatusrequiredexception"></a>
<a id="tocspullrequeststatusrequiredexception"></a>

```json
null
```

<h2 id="tocS_UpdatePullRequestTitleOutput">UpdatePullRequestTitleOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequesttitleoutput"></a>
<a id="schema_UpdatePullRequestTitleOutput"></a>
<a id="tocSupdatepullrequesttitleoutput"></a>
<a id="tocsupdatepullrequesttitleoutput"></a>

```json
{
  "pullRequest": {
    "pullRequestId": {},
    "title": {},
    "description": {},
    "lastActivityDate": {},
    "creationDate": {},
    "pullRequestStatus": {},
    "authorArn": {},
    "pullRequestTargets": {},
    "clientRequestToken": {},
    "revisionId": {},
    "approvalRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequest|object|true|none|none|

<h2 id="tocS_UpdatePullRequestTitleInput">UpdatePullRequestTitleInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepullrequesttitleinput"></a>
<a id="schema_UpdatePullRequestTitleInput"></a>
<a id="tocSupdatepullrequesttitleinput"></a>
<a id="tocsupdatepullrequesttitleinput"></a>

```json
{
  "pullRequestId": {},
  "title": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|true|none|none|
|title|object|true|none|none|

<h2 id="tocS_UpdateRepositoryDescriptionInput">UpdateRepositoryDescriptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterepositorydescriptioninput"></a>
<a id="schema_UpdateRepositoryDescriptionInput"></a>
<a id="tocSupdaterepositorydescriptioninput"></a>
<a id="tocsupdaterepositorydescriptioninput"></a>

```json
{
  "repositoryName": {},
  "repositoryDescription": {}
}
```

Represents the input of an update repository description operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|repositoryDescription|object|false|none|none|

<h2 id="tocS_UpdateRepositoryNameInput">UpdateRepositoryNameInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterepositorynameinput"></a>
<a id="schema_UpdateRepositoryNameInput"></a>
<a id="tocSupdaterepositorynameinput"></a>
<a id="tocsupdaterepositorynameinput"></a>

```json
{
  "oldName": {},
  "newName": {}
}
```

Represents the input of an update repository description operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oldName|object|true|none|none|
|newName|object|true|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AdditionalData">AdditionalData</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldata"></a>
<a id="schema_AdditionalData"></a>
<a id="tocSadditionaldata"></a>
<a id="tocsadditionaldata"></a>

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

<h2 id="tocS_ApprovalState">ApprovalState</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalstate"></a>
<a id="schema_ApprovalState"></a>
<a id="tocSapprovalstate"></a>
<a id="tocsapprovalstate"></a>

```json
"APPROVE"
```

<h2 id="tocS_Approval">Approval</h2>
<!-- backwards compatibility -->
<a id="schemaapproval"></a>
<a id="schema_Approval"></a>
<a id="tocSapproval"></a>
<a id="tocsapproval"></a>

```json
{
  "userArn": {},
  "approvalState": {}
}
```

Returns information about a specific approval on a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userArn|object|false|none|none|
|approvalState|object|false|none|none|

<h2 id="tocS_ApprovalList">ApprovalList</h2>
<!-- backwards compatibility -->
<a id="schemaapprovallist"></a>
<a id="schema_ApprovalList"></a>
<a id="tocSapprovallist"></a>
<a id="tocsapprovallist"></a>

```json
[
  {
    "userArn": {},
    "approvalState": {}
  }
]
```

<h2 id="tocS_ApprovalRuleId">ApprovalRuleId</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruleid"></a>
<a id="schema_ApprovalRuleId"></a>
<a id="tocSapprovalruleid"></a>
<a id="tocsapprovalruleid"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleName">ApprovalRuleName</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulename"></a>
<a id="schema_ApprovalRuleName"></a>
<a id="tocSapprovalrulename"></a>
<a id="tocsapprovalrulename"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleContent">ApprovalRuleContent</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulecontent"></a>
<a id="schema_ApprovalRuleContent"></a>
<a id="tocSapprovalrulecontent"></a>
<a id="tocsapprovalrulecontent"></a>

```json
"string"
```

<h2 id="tocS_RuleContentSha256">RuleContentSha256</h2>
<!-- backwards compatibility -->
<a id="schemarulecontentsha256"></a>
<a id="schema_RuleContentSha256"></a>
<a id="tocSrulecontentsha256"></a>
<a id="tocsrulecontentsha256"></a>

```json
"string"
```

<h2 id="tocS_LastModifiedDate">LastModifiedDate</h2>
<!-- backwards compatibility -->
<a id="schemalastmodifieddate"></a>
<a id="schema_LastModifiedDate"></a>
<a id="tocSlastmodifieddate"></a>
<a id="tocslastmodifieddate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_OriginApprovalRuleTemplate">OriginApprovalRuleTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaoriginapprovalruletemplate"></a>
<a id="schema_OriginApprovalRuleTemplate"></a>
<a id="tocSoriginapprovalruletemplate"></a>
<a id="tocsoriginapprovalruletemplate"></a>

```json
{
  "approvalRuleTemplateId": {},
  "approvalRuleTemplateName": {}
}
```

Returns information about the template that created the approval rule for a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateId|object|false|none|none|
|approvalRuleTemplateName|object|false|none|none|

<h2 id="tocS_ApprovalRule">ApprovalRule</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrule"></a>
<a id="schema_ApprovalRule"></a>
<a id="tocSapprovalrule"></a>
<a id="tocsapprovalrule"></a>

```json
{
  "approvalRuleId": {},
  "approvalRuleName": {},
  "approvalRuleContent": {},
  "ruleContentSha256": {},
  "lastModifiedDate": {},
  "creationDate": {},
  "lastModifiedUser": {},
  "originApprovalRuleTemplate": {
    "approvalRuleTemplateId": {},
    "approvalRuleTemplateName": {}
  }
}
```

Returns information about an approval rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleId|object|false|none|none|
|approvalRuleName|object|false|none|none|
|approvalRuleContent|object|false|none|none|
|ruleContentSha256|object|false|none|none|
|lastModifiedDate|object|false|none|none|
|creationDate|object|false|none|none|
|lastModifiedUser|object|false|none|none|
|originApprovalRuleTemplate|object|false|none|none|

<h2 id="tocS_ApprovalRuleEventMetadata">ApprovalRuleEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruleeventmetadata"></a>
<a id="schema_ApprovalRuleEventMetadata"></a>
<a id="tocSapprovalruleeventmetadata"></a>
<a id="tocsapprovalruleeventmetadata"></a>

```json
{
  "approvalRuleName": {},
  "approvalRuleId": {},
  "approvalRuleContent": {}
}
```

Returns information about an event for an approval rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleName|object|false|none|none|
|approvalRuleId|object|false|none|none|
|approvalRuleContent|object|false|none|none|

<h2 id="tocS_RevisionId">RevisionId</h2>
<!-- backwards compatibility -->
<a id="schemarevisionid"></a>
<a id="schema_RevisionId"></a>
<a id="tocSrevisionid"></a>
<a id="tocsrevisionid"></a>

```json
"string"
```

<h2 id="tocS_OverrideStatus">OverrideStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoverridestatus"></a>
<a id="schema_OverrideStatus"></a>
<a id="tocSoverridestatus"></a>
<a id="tocsoverridestatus"></a>

```json
"OVERRIDE"
```

<h2 id="tocS_ApprovalRuleOverriddenEventMetadata">ApprovalRuleOverriddenEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruleoverriddeneventmetadata"></a>
<a id="schema_ApprovalRuleOverriddenEventMetadata"></a>
<a id="tocSapprovalruleoverriddeneventmetadata"></a>
<a id="tocsapprovalruleoverriddeneventmetadata"></a>

```json
{
  "revisionId": {},
  "overrideStatus": {}
}
```

Returns information about an override event for approval rules for a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|false|none|none|
|overrideStatus|object|false|none|none|

<h2 id="tocS_ApprovalRuleTemplateId">ApprovalRuleTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplateid"></a>
<a id="schema_ApprovalRuleTemplateId"></a>
<a id="tocSapprovalruletemplateid"></a>
<a id="tocsapprovalruletemplateid"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleTemplateName">ApprovalRuleTemplateName</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatename"></a>
<a id="schema_ApprovalRuleTemplateName"></a>
<a id="tocSapprovalruletemplatename"></a>
<a id="tocsapprovalruletemplatename"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleTemplateDescription">ApprovalRuleTemplateDescription</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatedescription"></a>
<a id="schema_ApprovalRuleTemplateDescription"></a>
<a id="tocSapprovalruletemplatedescription"></a>
<a id="tocsapprovalruletemplatedescription"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleTemplateContent">ApprovalRuleTemplateContent</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatecontent"></a>
<a id="schema_ApprovalRuleTemplateContent"></a>
<a id="tocSapprovalruletemplatecontent"></a>
<a id="tocsapprovalruletemplatecontent"></a>

```json
"string"
```

<h2 id="tocS_ApprovalRuleTemplate">ApprovalRuleTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplate"></a>
<a id="schema_ApprovalRuleTemplate"></a>
<a id="tocSapprovalruletemplate"></a>
<a id="tocsapprovalruletemplate"></a>

```json
{
  "approvalRuleTemplateId": {},
  "approvalRuleTemplateName": {},
  "approvalRuleTemplateDescription": {},
  "approvalRuleTemplateContent": {},
  "ruleContentSha256": {},
  "lastModifiedDate": {},
  "creationDate": {},
  "lastModifiedUser": {}
}
```

Returns information about an approval rule template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approvalRuleTemplateId|object|false|none|none|
|approvalRuleTemplateName|object|false|none|none|
|approvalRuleTemplateDescription|object|false|none|none|
|approvalRuleTemplateContent|object|false|none|none|
|ruleContentSha256|object|false|none|none|
|lastModifiedDate|object|false|none|none|
|creationDate|object|false|none|none|
|lastModifiedUser|object|false|none|none|

<h2 id="tocS_ApprovalRuleTemplateNameList">ApprovalRuleTemplateNameList</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruletemplatenamelist"></a>
<a id="schema_ApprovalRuleTemplateNameList"></a>
<a id="tocSapprovalruletemplatenamelist"></a>
<a id="tocsapprovalruletemplatenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApprovalRulesList">ApprovalRulesList</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalruleslist"></a>
<a id="schema_ApprovalRulesList"></a>
<a id="tocSapprovalruleslist"></a>
<a id="tocsapprovalruleslist"></a>

```json
[
  {
    "approvalRuleId": {},
    "approvalRuleName": {},
    "approvalRuleContent": {},
    "ruleContentSha256": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "lastModifiedUser": {},
    "originApprovalRuleTemplate": {
      "approvalRuleTemplateId": {},
      "approvalRuleTemplateName": {}
    }
  }
]
```

<h2 id="tocS_ApprovalRulesNotSatisfiedList">ApprovalRulesNotSatisfiedList</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulesnotsatisfiedlist"></a>
<a id="schema_ApprovalRulesNotSatisfiedList"></a>
<a id="tocSapprovalrulesnotsatisfiedlist"></a>
<a id="tocsapprovalrulesnotsatisfiedlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApprovalRulesSatisfiedList">ApprovalRulesSatisfiedList</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrulessatisfiedlist"></a>
<a id="schema_ApprovalRulesSatisfiedList"></a>
<a id="tocSapprovalrulessatisfiedlist"></a>
<a id="tocsapprovalrulessatisfiedlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApprovalStateChangedEventMetadata">ApprovalStateChangedEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalstatechangedeventmetadata"></a>
<a id="schema_ApprovalStateChangedEventMetadata"></a>
<a id="tocSapprovalstatechangedeventmetadata"></a>
<a id="tocsapprovalstatechangedeventmetadata"></a>

```json
{
  "revisionId": {},
  "approvalStatus": {}
}
```

Returns information about a change in the approval state for a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revisionId|object|false|none|none|
|approvalStatus|object|false|none|none|

<h2 id="tocS_Approved">Approved</h2>
<!-- backwards compatibility -->
<a id="schemaapproved"></a>
<a id="schema_Approved"></a>
<a id="tocSapproved"></a>
<a id="tocsapproved"></a>

```json
true
```

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_BatchAssociateApprovalRuleTemplateWithRepositoriesError">BatchAssociateApprovalRuleTemplateWithRepositoriesError</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateapprovalruletemplatewithrepositorieserror"></a>
<a id="schema_BatchAssociateApprovalRuleTemplateWithRepositoriesError"></a>
<a id="tocSbatchassociateapprovalruletemplatewithrepositorieserror"></a>
<a id="tocsbatchassociateapprovalruletemplatewithrepositorieserror"></a>

```json
{
  "repositoryName": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList">BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateapprovalruletemplatewithrepositorieserrorslist"></a>
<a id="schema_BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList"></a>
<a id="tocSbatchassociateapprovalruletemplatewithrepositorieserrorslist"></a>
<a id="tocsbatchassociateapprovalruletemplatewithrepositorieserrorslist"></a>

```json
[
  {
    "repositoryName": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_RepositoryNameList">RepositoryNameList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynamelist"></a>
<a id="schema_RepositoryNameList"></a>
<a id="tocSrepositorynamelist"></a>
<a id="tocsrepositorynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Path">Path</h2>
<!-- backwards compatibility -->
<a id="schemapath"></a>
<a id="schema_Path"></a>
<a id="tocSpath"></a>
<a id="tocspath"></a>

```json
"string"
```

<h2 id="tocS_ExceptionName">ExceptionName</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionname"></a>
<a id="schema_ExceptionName"></a>
<a id="tocSexceptionname"></a>
<a id="tocsexceptionname"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_BatchDescribeMergeConflictsError">BatchDescribeMergeConflictsError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribemergeconflictserror"></a>
<a id="schema_BatchDescribeMergeConflictsError"></a>
<a id="tocSbatchdescribemergeconflictserror"></a>
<a id="tocsbatchdescribemergeconflictserror"></a>

```json
{
  "filePath": {},
  "exceptionName": {},
  "message": {}
}
```

Returns information about errors in a BatchDescribeMergeConflicts operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|
|exceptionName|object|true|none|none|
|message|object|true|none|none|

<h2 id="tocS_BatchDescribeMergeConflictsErrors">BatchDescribeMergeConflictsErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchdescribemergeconflictserrors"></a>
<a id="schema_BatchDescribeMergeConflictsErrors"></a>
<a id="tocSbatchdescribemergeconflictserrors"></a>
<a id="tocsbatchdescribemergeconflictserrors"></a>

```json
[
  {
    "filePath": {},
    "exceptionName": {},
    "message": {}
  }
]
```

<h2 id="tocS_CommitName">CommitName</h2>
<!-- backwards compatibility -->
<a id="schemacommitname"></a>
<a id="schema_CommitName"></a>
<a id="tocScommitname"></a>
<a id="tocscommitname"></a>

```json
"string"
```

<h2 id="tocS_MergeOptionTypeEnum">MergeOptionTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemamergeoptiontypeenum"></a>
<a id="schema_MergeOptionTypeEnum"></a>
<a id="tocSmergeoptiontypeenum"></a>
<a id="tocsmergeoptiontypeenum"></a>

```json
"FAST_FORWARD_MERGE"
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

<h2 id="tocS_FilePaths">FilePaths</h2>
<!-- backwards compatibility -->
<a id="schemafilepaths"></a>
<a id="schema_FilePaths"></a>
<a id="tocSfilepaths"></a>
<a id="tocsfilepaths"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConflictDetailLevelTypeEnum">ConflictDetailLevelTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaconflictdetailleveltypeenum"></a>
<a id="schema_ConflictDetailLevelTypeEnum"></a>
<a id="tocSconflictdetailleveltypeenum"></a>
<a id="tocsconflictdetailleveltypeenum"></a>

```json
"FILE_LEVEL"
```

<h2 id="tocS_ConflictResolutionStrategyTypeEnum">ConflictResolutionStrategyTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaconflictresolutionstrategytypeenum"></a>
<a id="schema_ConflictResolutionStrategyTypeEnum"></a>
<a id="tocSconflictresolutionstrategytypeenum"></a>
<a id="tocsconflictresolutionstrategytypeenum"></a>

```json
"NONE"
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

<h2 id="tocS_Conflicts">Conflicts</h2>
<!-- backwards compatibility -->
<a id="schemaconflicts"></a>
<a id="schema_Conflicts"></a>
<a id="tocSconflicts"></a>
<a id="tocsconflicts"></a>

```json
[
  {
    "conflictMetadata": {
      "filePath": {},
      "fileSizes": {
        "source": {},
        "destination": {},
        "base": {}
      },
      "fileModes": {
        "source": {},
        "destination": {},
        "base": {}
      },
      "objectTypes": {
        "source": {},
        "destination": {},
        "base": {}
      },
      "numberOfConflicts": {},
      "isBinaryFile": {
        "source": {},
        "destination": {},
        "base": {}
      },
      "contentConflict": {},
      "fileModeConflict": {},
      "objectTypeConflict": {},
      "mergeOperations": {
        "source": {},
        "destination": {}
      }
    },
    "mergeHunks": {}
  }
]
```

<h2 id="tocS_ObjectId">ObjectId</h2>
<!-- backwards compatibility -->
<a id="schemaobjectid"></a>
<a id="schema_ObjectId"></a>
<a id="tocSobjectid"></a>
<a id="tocsobjectid"></a>

```json
"string"
```

<h2 id="tocS_BatchDisassociateApprovalRuleTemplateFromRepositoriesError">BatchDisassociateApprovalRuleTemplateFromRepositoriesError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateapprovalruletemplatefromrepositorieserror"></a>
<a id="schema_BatchDisassociateApprovalRuleTemplateFromRepositoriesError"></a>
<a id="tocSbatchdisassociateapprovalruletemplatefromrepositorieserror"></a>
<a id="tocsbatchdisassociateapprovalruletemplatefromrepositorieserror"></a>

```json
{
  "repositoryName": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList">BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateapprovalruletemplatefromrepositorieserrorslist"></a>
<a id="schema_BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList"></a>
<a id="tocSbatchdisassociateapprovalruletemplatefromrepositorieserrorslist"></a>
<a id="tocsbatchdisassociateapprovalruletemplatefromrepositorieserrorslist"></a>

```json
[
  {
    "repositoryName": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_BatchGetCommitsError">BatchGetCommitsError</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcommitserror"></a>
<a id="schema_BatchGetCommitsError"></a>
<a id="tocSbatchgetcommitserror"></a>
<a id="tocsbatchgetcommitserror"></a>

```json
{
  "commitId": {},
  "errorCode": {},
  "errorMessage": {}
}
```

Returns information about errors in a BatchGetCommits operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|errorCode|object|false|none|none|
|errorMessage|object|false|none|none|

<h2 id="tocS_BatchGetCommitsErrorsList">BatchGetCommitsErrorsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcommitserrorslist"></a>
<a id="schema_BatchGetCommitsErrorsList"></a>
<a id="tocSbatchgetcommitserrorslist"></a>
<a id="tocsbatchgetcommitserrorslist"></a>

```json
[
  {
    "commitId": {},
    "errorCode": {},
    "errorMessage": {}
  }
]
```

<h2 id="tocS_CommitIdsInputList">CommitIdsInputList</h2>
<!-- backwards compatibility -->
<a id="schemacommitidsinputlist"></a>
<a id="schema_CommitIdsInputList"></a>
<a id="tocScommitidsinputlist"></a>
<a id="tocscommitidsinputlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CommitObjectsList">CommitObjectsList</h2>
<!-- backwards compatibility -->
<a id="schemacommitobjectslist"></a>
<a id="schema_CommitObjectsList"></a>
<a id="tocScommitobjectslist"></a>
<a id="tocscommitobjectslist"></a>

```json
[
  {
    "commitId": {},
    "treeId": {},
    "parents": {},
    "message": {},
    "author": {
      "name": {},
      "email": {},
      "date": {}
    },
    "committer": {
      "name": {},
      "email": {},
      "date": {}
    },
    "additionalData": {}
  }
]
```

<h2 id="tocS_RepositoryMetadataList">RepositoryMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorymetadatalist"></a>
<a id="schema_RepositoryMetadataList"></a>
<a id="tocSrepositorymetadatalist"></a>
<a id="tocsrepositorymetadatalist"></a>

```json
[
  {
    "accountId": {},
    "repositoryId": {},
    "repositoryName": {},
    "repositoryDescription": {},
    "defaultBranch": {},
    "lastModifiedDate": {},
    "creationDate": {},
    "cloneUrlHttp": {},
    "cloneUrlSsh": {},
    "Arn": {}
  }
]
```

<h2 id="tocS_RepositoryNotFoundList">RepositoryNotFoundList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynotfoundlist"></a>
<a id="schema_RepositoryNotFoundList"></a>
<a id="tocSrepositorynotfoundlist"></a>
<a id="tocsrepositorynotfoundlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
"string"
```

<h2 id="tocS_BlobMetadata">BlobMetadata</h2>
<!-- backwards compatibility -->
<a id="schemablobmetadata"></a>
<a id="schema_BlobMetadata"></a>
<a id="tocSblobmetadata"></a>
<a id="tocsblobmetadata"></a>

```json
{
  "blobId": {},
  "path": {},
  "mode": {}
}
```

Returns information about a specific Git blob object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobId|object|false|none|none|
|path|object|false|none|none|
|mode|object|false|none|none|

<h2 id="tocS_BranchName">BranchName</h2>
<!-- backwards compatibility -->
<a id="schemabranchname"></a>
<a id="schema_BranchName"></a>
<a id="tocSbranchname"></a>
<a id="tocsbranchname"></a>

```json
"string"
```

<h2 id="tocS_CommitId">CommitId</h2>
<!-- backwards compatibility -->
<a id="schemacommitid"></a>
<a id="schema_CommitId"></a>
<a id="tocScommitid"></a>
<a id="tocscommitid"></a>

```json
"string"
```

<h2 id="tocS_BranchInfo">BranchInfo</h2>
<!-- backwards compatibility -->
<a id="schemabranchinfo"></a>
<a id="schema_BranchInfo"></a>
<a id="tocSbranchinfo"></a>
<a id="tocsbranchinfo"></a>

```json
{
  "branchName": {},
  "commitId": {}
}
```

Returns information about a branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchName|object|false|none|none|
|commitId|object|false|none|none|

<h2 id="tocS_BranchNameList">BranchNameList</h2>
<!-- backwards compatibility -->
<a id="schemabranchnamelist"></a>
<a id="schema_BranchNameList"></a>
<a id="tocSbranchnamelist"></a>
<a id="tocsbranchnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReactionValue">ReactionValue</h2>
<!-- backwards compatibility -->
<a id="schemareactionvalue"></a>
<a id="schema_ReactionValue"></a>
<a id="tocSreactionvalue"></a>
<a id="tocsreactionvalue"></a>

```json
"string"
```

<h2 id="tocS_CallerReactions">CallerReactions</h2>
<!-- backwards compatibility -->
<a id="schemacallerreactions"></a>
<a id="schema_CallerReactions"></a>
<a id="tocScallerreactions"></a>
<a id="tocscallerreactions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CapitalBoolean">CapitalBoolean</h2>
<!-- backwards compatibility -->
<a id="schemacapitalboolean"></a>
<a id="schema_CapitalBoolean"></a>
<a id="tocScapitalboolean"></a>
<a id="tocscapitalboolean"></a>

```json
true
```

<h2 id="tocS_ChangeTypeEnum">ChangeTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemachangetypeenum"></a>
<a id="schema_ChangeTypeEnum"></a>
<a id="tocSchangetypeenum"></a>
<a id="tocschangetypeenum"></a>

```json
"A"
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

<h2 id="tocS_CloneUrlHttp">CloneUrlHttp</h2>
<!-- backwards compatibility -->
<a id="schemacloneurlhttp"></a>
<a id="schema_CloneUrlHttp"></a>
<a id="tocScloneurlhttp"></a>
<a id="tocscloneurlhttp"></a>

```json
"string"
```

<h2 id="tocS_CloneUrlSsh">CloneUrlSsh</h2>
<!-- backwards compatibility -->
<a id="schemacloneurlssh"></a>
<a id="schema_CloneUrlSsh"></a>
<a id="tocScloneurlssh"></a>
<a id="tocscloneurlssh"></a>

```json
"string"
```

<h2 id="tocS_CommentId">CommentId</h2>
<!-- backwards compatibility -->
<a id="schemacommentid"></a>
<a id="schema_CommentId"></a>
<a id="tocScommentid"></a>
<a id="tocscommentid"></a>

```json
"string"
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

<h2 id="tocS_IsCommentDeleted">IsCommentDeleted</h2>
<!-- backwards compatibility -->
<a id="schemaiscommentdeleted"></a>
<a id="schema_IsCommentDeleted"></a>
<a id="tocSiscommentdeleted"></a>
<a id="tocsiscommentdeleted"></a>

```json
true
```

<h2 id="tocS_ReactionCountsMap">ReactionCountsMap</h2>
<!-- backwards compatibility -->
<a id="schemareactioncountsmap"></a>
<a id="schema_ReactionCountsMap"></a>
<a id="tocSreactioncountsmap"></a>
<a id="tocsreactioncountsmap"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Count](#schemacount)|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "commentId": {},
  "content": {},
  "inReplyTo": {},
  "creationDate": {},
  "lastModifiedDate": {},
  "authorArn": {},
  "deleted": {},
  "clientRequestToken": {},
  "callerReactions": {},
  "reactionCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

Returns information about a specific comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentId|object|false|none|none|
|content|object|false|none|none|
|inReplyTo|object|false|none|none|
|creationDate|object|false|none|none|
|lastModifiedDate|object|false|none|none|
|authorArn|object|false|none|none|
|deleted|object|false|none|none|
|clientRequestToken|object|false|none|none|
|callerReactions|object|false|none|none|
|reactionCounts|object|false|none|none|

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
[
  {
    "commentId": {},
    "content": {},
    "inReplyTo": {},
    "creationDate": {},
    "lastModifiedDate": {},
    "authorArn": {},
    "deleted": {},
    "clientRequestToken": {},
    "callerReactions": {},
    "reactionCounts": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "filePath": {},
  "filePosition": {},
  "relativeFileVersion": {}
}
```

Returns information about the location of a change or comment in the comparison between two commits or a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|false|none|none|
|filePosition|object|false|none|none|
|relativeFileVersion|object|false|none|none|

<h2 id="tocS_CommentsForComparedCommit">CommentsForComparedCommit</h2>
<!-- backwards compatibility -->
<a id="schemacommentsforcomparedcommit"></a>
<a id="schema_CommentsForComparedCommit"></a>
<a id="tocScommentsforcomparedcommit"></a>
<a id="tocscommentsforcomparedcommit"></a>

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comments": {}
}
```

Returns information about comments on the comparison between two commits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|beforeBlobId|object|false|none|none|
|afterBlobId|object|false|none|none|
|location|object|false|none|none|
|comments|object|false|none|none|

<h2 id="tocS_CommentsForComparedCommitData">CommentsForComparedCommitData</h2>
<!-- backwards compatibility -->
<a id="schemacommentsforcomparedcommitdata"></a>
<a id="schema_CommentsForComparedCommitData"></a>
<a id="tocScommentsforcomparedcommitdata"></a>
<a id="tocscommentsforcomparedcommitdata"></a>

```json
[
  {
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "beforeBlobId": {},
    "afterBlobId": {},
    "location": {
      "filePath": {},
      "filePosition": {},
      "relativeFileVersion": {}
    },
    "comments": {}
  }
]
```

<h2 id="tocS_PullRequestId">PullRequestId</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestid"></a>
<a id="schema_PullRequestId"></a>
<a id="tocSpullrequestid"></a>
<a id="tocspullrequestid"></a>

```json
"string"
```

<h2 id="tocS_CommentsForPullRequest">CommentsForPullRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommentsforpullrequest"></a>
<a id="schema_CommentsForPullRequest"></a>
<a id="tocScommentsforpullrequest"></a>
<a id="tocscommentsforpullrequest"></a>

```json
{
  "pullRequestId": {},
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "beforeBlobId": {},
  "afterBlobId": {},
  "location": {
    "filePath": {},
    "filePosition": {},
    "relativeFileVersion": {}
  },
  "comments": {}
}
```

Returns information about comments on a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|false|none|none|
|repositoryName|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|beforeBlobId|object|false|none|none|
|afterBlobId|object|false|none|none|
|location|object|false|none|none|
|comments|object|false|none|none|

<h2 id="tocS_CommentsForPullRequestData">CommentsForPullRequestData</h2>
<!-- backwards compatibility -->
<a id="schemacommentsforpullrequestdata"></a>
<a id="schema_CommentsForPullRequestData"></a>
<a id="tocScommentsforpullrequestdata"></a>
<a id="tocscommentsforpullrequestdata"></a>

```json
[
  {
    "pullRequestId": {},
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "beforeBlobId": {},
    "afterBlobId": {},
    "location": {
      "filePath": {},
      "filePosition": {},
      "relativeFileVersion": {}
    },
    "comments": {}
  }
]
```

<h2 id="tocS_ParentList">ParentList</h2>
<!-- backwards compatibility -->
<a id="schemaparentlist"></a>
<a id="schema_ParentList"></a>
<a id="tocSparentlist"></a>
<a id="tocsparentlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "name": {},
  "email": {},
  "date": {}
}
```

Information about the user who made a specified commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|email|object|false|none|none|
|date|object|false|none|none|

<h2 id="tocS_Commit">Commit</h2>
<!-- backwards compatibility -->
<a id="schemacommit"></a>
<a id="schema_Commit"></a>
<a id="tocScommit"></a>
<a id="tocscommit"></a>

```json
{
  "commitId": {},
  "treeId": {},
  "parents": {},
  "message": {},
  "author": {
    "name": {},
    "email": {},
    "date": {}
  },
  "committer": {
    "name": {},
    "email": {},
    "date": {}
  },
  "additionalData": {}
}
```

Returns information about a specific commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|treeId|object|false|none|none|
|parents|object|false|none|none|
|message|object|false|none|none|
|author|object|false|none|none|
|committer|object|false|none|none|
|additionalData|object|false|none|none|

<h2 id="tocS_ConflictMetadata">ConflictMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaconflictmetadata"></a>
<a id="schema_ConflictMetadata"></a>
<a id="tocSconflictmetadata"></a>
<a id="tocsconflictmetadata"></a>

```json
{
  "filePath": {},
  "fileSizes": {
    "source": {},
    "destination": {},
    "base": {}
  },
  "fileModes": {
    "source": {},
    "destination": {},
    "base": {}
  },
  "objectTypes": {
    "source": {},
    "destination": {},
    "base": {}
  },
  "numberOfConflicts": {},
  "isBinaryFile": {
    "source": {},
    "destination": {},
    "base": {}
  },
  "contentConflict": {},
  "fileModeConflict": {},
  "objectTypeConflict": {},
  "mergeOperations": {
    "source": {},
    "destination": {}
  }
}
```

Information about the metadata for a conflict in a merge operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|false|none|none|
|fileSizes|object|false|none|none|
|fileModes|object|false|none|none|
|objectTypes|object|false|none|none|
|numberOfConflicts|object|false|none|none|
|isBinaryFile|object|false|none|none|
|contentConflict|object|false|none|none|
|fileModeConflict|object|false|none|none|
|objectTypeConflict|object|false|none|none|
|mergeOperations|object|false|none|none|

<h2 id="tocS_MergeHunks">MergeHunks</h2>
<!-- backwards compatibility -->
<a id="schemamergehunks"></a>
<a id="schema_MergeHunks"></a>
<a id="tocSmergehunks"></a>
<a id="tocsmergehunks"></a>

```json
[
  {
    "isConflict": {},
    "source": {
      "startLine": {},
      "endLine": {},
      "hunkContent": {}
    },
    "destination": {
      "startLine": {},
      "endLine": {},
      "hunkContent": {}
    },
    "base": {
      "startLine": {},
      "endLine": {},
      "hunkContent": {}
    }
  }
]
```

<h2 id="tocS_Conflict">Conflict</h2>
<!-- backwards compatibility -->
<a id="schemaconflict"></a>
<a id="schema_Conflict"></a>
<a id="tocSconflict"></a>
<a id="tocsconflict"></a>

```json
{
  "conflictMetadata": {
    "filePath": {},
    "fileSizes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "fileModes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "objectTypes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "numberOfConflicts": {},
    "isBinaryFile": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "contentConflict": {},
    "fileModeConflict": {},
    "objectTypeConflict": {},
    "mergeOperations": {
      "source": {},
      "destination": {}
    }
  },
  "mergeHunks": {}
}
```

Information about conflicts in a merge operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflictMetadata|object|false|none|none|
|mergeHunks|object|false|none|none|

<h2 id="tocS_FileSizes">FileSizes</h2>
<!-- backwards compatibility -->
<a id="schemafilesizes"></a>
<a id="schema_FileSizes"></a>
<a id="tocSfilesizes"></a>
<a id="tocsfilesizes"></a>

```json
{
  "source": {},
  "destination": {},
  "base": {}
}
```

Information about the size of files in a merge or pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|destination|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_FileModes">FileModes</h2>
<!-- backwards compatibility -->
<a id="schemafilemodes"></a>
<a id="schema_FileModes"></a>
<a id="tocSfilemodes"></a>
<a id="tocsfilemodes"></a>

```json
{
  "source": {},
  "destination": {},
  "base": {}
}
```

Information about file modes in a merge or pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|destination|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_ObjectTypes">ObjectTypes</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypes"></a>
<a id="schema_ObjectTypes"></a>
<a id="tocSobjecttypes"></a>
<a id="tocsobjecttypes"></a>

```json
{
  "source": {},
  "destination": {},
  "base": {}
}
```

Information about the type of an object in a merge operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|destination|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_NumberOfConflicts">NumberOfConflicts</h2>
<!-- backwards compatibility -->
<a id="schemanumberofconflicts"></a>
<a id="schema_NumberOfConflicts"></a>
<a id="tocSnumberofconflicts"></a>
<a id="tocsnumberofconflicts"></a>

```json
0
```

<h2 id="tocS_IsBinaryFile">IsBinaryFile</h2>
<!-- backwards compatibility -->
<a id="schemaisbinaryfile"></a>
<a id="schema_IsBinaryFile"></a>
<a id="tocSisbinaryfile"></a>
<a id="tocsisbinaryfile"></a>

```json
{
  "source": {},
  "destination": {},
  "base": {}
}
```

Information about whether a file is binary or textual in a merge or pull request operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|destination|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_IsContentConflict">IsContentConflict</h2>
<!-- backwards compatibility -->
<a id="schemaiscontentconflict"></a>
<a id="schema_IsContentConflict"></a>
<a id="tocSiscontentconflict"></a>
<a id="tocsiscontentconflict"></a>

```json
true
```

<h2 id="tocS_IsFileModeConflict">IsFileModeConflict</h2>
<!-- backwards compatibility -->
<a id="schemaisfilemodeconflict"></a>
<a id="schema_IsFileModeConflict"></a>
<a id="tocSisfilemodeconflict"></a>
<a id="tocsisfilemodeconflict"></a>

```json
true
```

<h2 id="tocS_IsObjectTypeConflict">IsObjectTypeConflict</h2>
<!-- backwards compatibility -->
<a id="schemaisobjecttypeconflict"></a>
<a id="schema_IsObjectTypeConflict"></a>
<a id="tocSisobjecttypeconflict"></a>
<a id="tocsisobjecttypeconflict"></a>

```json
true
```

<h2 id="tocS_MergeOperations">MergeOperations</h2>
<!-- backwards compatibility -->
<a id="schemamergeoperations"></a>
<a id="schema_MergeOperations"></a>
<a id="tocSmergeoperations"></a>
<a id="tocsmergeoperations"></a>

```json
{
  "source": {},
  "destination": {}
}
```

Information about the file operation conflicts in a merge operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|false|none|none|
|destination|object|false|none|none|

<h2 id="tocS_ConflictMetadataList">ConflictMetadataList</h2>
<!-- backwards compatibility -->
<a id="schemaconflictmetadatalist"></a>
<a id="schema_ConflictMetadataList"></a>
<a id="tocSconflictmetadatalist"></a>
<a id="tocsconflictmetadatalist"></a>

```json
[
  {
    "filePath": {},
    "fileSizes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "fileModes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "objectTypes": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "numberOfConflicts": {},
    "isBinaryFile": {
      "source": {},
      "destination": {},
      "base": {}
    },
    "contentConflict": {},
    "fileModeConflict": {},
    "objectTypeConflict": {},
    "mergeOperations": {
      "source": {},
      "destination": {}
    }
  }
]
```

<h2 id="tocS_ReplaceContentEntries">ReplaceContentEntries</h2>
<!-- backwards compatibility -->
<a id="schemareplacecontententries"></a>
<a id="schema_ReplaceContentEntries"></a>
<a id="tocSreplacecontententries"></a>
<a id="tocsreplacecontententries"></a>

```json
[
  {
    "filePath": {},
    "replacementType": {},
    "content": {},
    "fileMode": {}
  }
]
```

<h2 id="tocS_DeleteFileEntries">DeleteFileEntries</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileentries"></a>
<a id="schema_DeleteFileEntries"></a>
<a id="tocSdeletefileentries"></a>
<a id="tocsdeletefileentries"></a>

```json
[
  {
    "filePath": {}
  }
]
```

<h2 id="tocS_SetFileModeEntries">SetFileModeEntries</h2>
<!-- backwards compatibility -->
<a id="schemasetfilemodeentries"></a>
<a id="schema_SetFileModeEntries"></a>
<a id="tocSsetfilemodeentries"></a>
<a id="tocssetfilemodeentries"></a>

```json
[
  {
    "filePath": {},
    "fileMode": {}
  }
]
```

<h2 id="tocS_ConflictResolution">ConflictResolution</h2>
<!-- backwards compatibility -->
<a id="schemaconflictresolution"></a>
<a id="schema_ConflictResolution"></a>
<a id="tocSconflictresolution"></a>
<a id="tocsconflictresolution"></a>

```json
{
  "replaceContents": {},
  "deleteFiles": {},
  "setFileModes": {}
}
```

If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replaceContents|object|false|none|none|
|deleteFiles|object|false|none|none|
|setFileModes|object|false|none|none|

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
0
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

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

<h2 id="tocS_KeepEmptyFolders">KeepEmptyFolders</h2>
<!-- backwards compatibility -->
<a id="schemakeepemptyfolders"></a>
<a id="schema_KeepEmptyFolders"></a>
<a id="tocSkeepemptyfolders"></a>
<a id="tocskeepemptyfolders"></a>

```json
true
```

<h2 id="tocS_PutFileEntries">PutFileEntries</h2>
<!-- backwards compatibility -->
<a id="schemaputfileentries"></a>
<a id="schema_PutFileEntries"></a>
<a id="tocSputfileentries"></a>
<a id="tocsputfileentries"></a>

```json
[
  {
    "filePath": {},
    "fileMode": {},
    "fileContent": {},
    "sourceFile": {
      "filePath": {},
      "isMove": {}
    }
  }
]
```

<h2 id="tocS_FilesMetadata">FilesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafilesmetadata"></a>
<a id="schema_FilesMetadata"></a>
<a id="tocSfilesmetadata"></a>
<a id="tocsfilesmetadata"></a>

```json
[
  {
    "absolutePath": {},
    "blobId": {},
    "fileMode": {}
  }
]
```

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
"string"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_TargetList">TargetList</h2>
<!-- backwards compatibility -->
<a id="schematargetlist"></a>
<a id="schema_TargetList"></a>
<a id="tocStargetlist"></a>
<a id="tocstargetlist"></a>

```json
[
  {
    "repositoryName": {},
    "sourceReference": {},
    "destinationReference": {}
  }
]
```

<h2 id="tocS_PullRequest">PullRequest</h2>
<!-- backwards compatibility -->
<a id="schemapullrequest"></a>
<a id="schema_PullRequest"></a>
<a id="tocSpullrequest"></a>
<a id="tocspullrequest"></a>

```json
{
  "pullRequestId": {},
  "title": {},
  "description": {},
  "lastActivityDate": {},
  "creationDate": {},
  "pullRequestStatus": {},
  "authorArn": {},
  "pullRequestTargets": {},
  "clientRequestToken": {},
  "revisionId": {},
  "approvalRules": {}
}
```

Returns information about a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|false|none|none|
|title|object|false|none|none|
|description|object|false|none|none|
|lastActivityDate|object|false|none|none|
|creationDate|object|false|none|none|
|pullRequestStatus|object|false|none|none|
|authorArn|object|false|none|none|
|pullRequestTargets|object|false|none|none|
|clientRequestToken|object|false|none|none|
|revisionId|object|false|none|none|
|approvalRules|object|false|none|none|

<h2 id="tocS_RepositoryDescription">RepositoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydescription"></a>
<a id="schema_RepositoryDescription"></a>
<a id="tocSrepositorydescription"></a>
<a id="tocsrepositorydescription"></a>

```json
"string"
```

<h2 id="tocS_TagsMap">TagsMap</h2>
<!-- backwards compatibility -->
<a id="schematagsmap"></a>
<a id="schema_TagsMap"></a>
<a id="tocStagsmap"></a>
<a id="tocstagsmap"></a>

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

<h2 id="tocS_RepositoryMetadata">RepositoryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarepositorymetadata"></a>
<a id="schema_RepositoryMetadata"></a>
<a id="tocSrepositorymetadata"></a>
<a id="tocsrepositorymetadata"></a>

```json
{
  "accountId": {},
  "repositoryId": {},
  "repositoryName": {},
  "repositoryDescription": {},
  "defaultBranch": {},
  "lastModifiedDate": {},
  "creationDate": {},
  "cloneUrlHttp": {},
  "cloneUrlSsh": {},
  "Arn": {}
}
```

Information about a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|repositoryId|object|false|none|none|
|repositoryName|object|false|none|none|
|repositoryDescription|object|false|none|none|
|defaultBranch|object|false|none|none|
|lastModifiedDate|object|false|none|none|
|creationDate|object|false|none|none|
|cloneUrlHttp|object|false|none|none|
|cloneUrlSsh|object|false|none|none|
|Arn|object|false|none|none|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"string"
```

<h2 id="tocS_DeleteFileEntry">DeleteFileEntry</h2>
<!-- backwards compatibility -->
<a id="schemadeletefileentry"></a>
<a id="schema_DeleteFileEntry"></a>
<a id="tocSdeletefileentry"></a>
<a id="tocsdeletefileentry"></a>

```json
{
  "filePath": {}
}
```

A file that is deleted as part of a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|

<h2 id="tocS_RepositoryId">RepositoryId</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryid"></a>
<a id="schema_RepositoryId"></a>
<a id="tocSrepositoryid"></a>
<a id="tocsrepositoryid"></a>

```json
"string"
```

<h2 id="tocS_PullRequestEventType">PullRequestEventType</h2>
<!-- backwards compatibility -->
<a id="schemapullrequesteventtype"></a>
<a id="schema_PullRequestEventType"></a>
<a id="tocSpullrequesteventtype"></a>
<a id="tocspullrequesteventtype"></a>

```json
"PULL_REQUEST_CREATED"
```

<h2 id="tocS_PullRequestEventList">PullRequestEventList</h2>
<!-- backwards compatibility -->
<a id="schemapullrequesteventlist"></a>
<a id="schema_PullRequestEventList"></a>
<a id="tocSpullrequesteventlist"></a>
<a id="tocspullrequesteventlist"></a>

```json
[
  {
    "pullRequestId": {},
    "eventDate": {},
    "pullRequestEventType": {},
    "actorArn": {},
    "pullRequestCreatedEventMetadata": {
      "repositoryName": {},
      "sourceCommitId": {},
      "destinationCommitId": {},
      "mergeBase": {}
    },
    "pullRequestStatusChangedEventMetadata": {
      "pullRequestStatus": {}
    },
    "pullRequestSourceReferenceUpdatedEventMetadata": {
      "repositoryName": {},
      "beforeCommitId": {},
      "afterCommitId": {},
      "mergeBase": {}
    },
    "pullRequestMergedStateChangedEventMetadata": {
      "repositoryName": {},
      "destinationReference": {},
      "mergeMetadata": {
        "isMerged": {},
        "mergedBy": {},
        "mergeCommitId": {},
        "mergeOption": {}
      }
    },
    "approvalRuleEventMetadata": {
      "approvalRuleName": {},
      "approvalRuleId": {},
      "approvalRuleContent": {}
    },
    "approvalStateChangedEventMetadata": {
      "revisionId": {},
      "approvalStatus": {}
    },
    "approvalRuleOverriddenEventMetadata": {
      "revisionId": {},
      "overrideStatus": {}
    }
  }
]
```

<h2 id="tocS_Difference">Difference</h2>
<!-- backwards compatibility -->
<a id="schemadifference"></a>
<a id="schema_Difference"></a>
<a id="tocSdifference"></a>
<a id="tocsdifference"></a>

```json
{
  "beforeBlob": {
    "blobId": {},
    "path": {},
    "mode": {}
  },
  "afterBlob": {
    "blobId": {},
    "path": {},
    "mode": {}
  },
  "changeType": {}
}
```

Returns information about a set of differences for a commit specifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beforeBlob|object|false|none|none|
|afterBlob|object|false|none|none|
|changeType|object|false|none|none|

<h2 id="tocS_DifferenceList">DifferenceList</h2>
<!-- backwards compatibility -->
<a id="schemadifferencelist"></a>
<a id="schema_DifferenceList"></a>
<a id="tocSdifferencelist"></a>
<a id="tocsdifferencelist"></a>

```json
[
  {
    "beforeBlob": {
      "blobId": {},
      "path": {},
      "mode": {}
    },
    "afterBlob": {
      "blobId": {},
      "path": {},
      "mode": {}
    },
    "changeType": {}
  }
]
```

<h2 id="tocS_Evaluation">Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemaevaluation"></a>
<a id="schema_Evaluation"></a>
<a id="tocSevaluation"></a>
<a id="tocsevaluation"></a>

```json
{
  "approved": {},
  "overridden": {},
  "approvalRulesSatisfied": {},
  "approvalRulesNotSatisfied": {}
}
```

Returns information about the approval rules applied to a pull request and whether conditions have been met.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|object|false|none|none|
|overridden|object|false|none|none|
|approvalRulesSatisfied|object|false|none|none|
|approvalRulesNotSatisfied|object|false|none|none|

<h2 id="tocS_Overridden">Overridden</h2>
<!-- backwards compatibility -->
<a id="schemaoverridden"></a>
<a id="schema_Overridden"></a>
<a id="tocSoverridden"></a>
<a id="tocsoverridden"></a>

```json
true
```

<h2 id="tocS_EventDate">EventDate</h2>
<!-- backwards compatibility -->
<a id="schemaeventdate"></a>
<a id="schema_EventDate"></a>
<a id="tocSeventdate"></a>
<a id="tocseventdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_FileModeTypeEnum">FileModeTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemafilemodetypeenum"></a>
<a id="schema_FileModeTypeEnum"></a>
<a id="tocSfilemodetypeenum"></a>
<a id="tocsfilemodetypeenum"></a>

```json
"EXECUTABLE"
```

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "blobId": {},
  "absolutePath": {},
  "relativePath": {},
  "fileMode": {}
}
```

Returns information about a file in a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobId|object|false|none|none|
|absolutePath|object|false|none|none|
|relativePath|object|false|none|none|
|fileMode|object|false|none|none|

<h2 id="tocS_FileContent">FileContent</h2>
<!-- backwards compatibility -->
<a id="schemafilecontent"></a>
<a id="schema_FileContent"></a>
<a id="tocSfilecontent"></a>
<a id="tocsfilecontent"></a>

```json
"string"
```

<h2 id="tocS_FileList">FileList</h2>
<!-- backwards compatibility -->
<a id="schemafilelist"></a>
<a id="schema_FileList"></a>
<a id="tocSfilelist"></a>
<a id="tocsfilelist"></a>

```json
[
  {
    "blobId": {},
    "absolutePath": {},
    "relativePath": {},
    "fileMode": {}
  }
]
```

<h2 id="tocS_FileMetadata">FileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafilemetadata"></a>
<a id="schema_FileMetadata"></a>
<a id="tocSfilemetadata"></a>
<a id="tocsfilemetadata"></a>

```json
{
  "absolutePath": {},
  "blobId": {},
  "fileMode": {}
}
```

A file to be added, updated, or deleted as part of a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolutePath|object|false|none|none|
|blobId|object|false|none|none|
|fileMode|object|false|none|none|

<h2 id="tocS_FileSize">FileSize</h2>
<!-- backwards compatibility -->
<a id="schemafilesize"></a>
<a id="schema_FileSize"></a>
<a id="tocSfilesize"></a>
<a id="tocsfilesize"></a>

```json
0
```

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "treeId": {},
  "absolutePath": {},
  "relativePath": {}
}
```

Returns information about a folder in a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|treeId|object|false|none|none|
|absolutePath|object|false|none|none|
|relativePath|object|false|none|none|

<h2 id="tocS_FolderList">FolderList</h2>
<!-- backwards compatibility -->
<a id="schemafolderlist"></a>
<a id="schema_FolderList"></a>
<a id="tocSfolderlist"></a>
<a id="tocsfolderlist"></a>

```json
[
  {
    "treeId": {},
    "absolutePath": {},
    "relativePath": {}
  }
]
```

<h2 id="tocS_blob">blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_ReactionsForCommentList">ReactionsForCommentList</h2>
<!-- backwards compatibility -->
<a id="schemareactionsforcommentlist"></a>
<a id="schema_ReactionsForCommentList"></a>
<a id="tocSreactionsforcommentlist"></a>
<a id="tocsreactionsforcommentlist"></a>

```json
[
  {
    "reaction": {
      "emoji": {},
      "shortCode": {},
      "unicode": {}
    },
    "reactionUsers": {},
    "reactionsFromDeletedUsersCount": {}
  }
]
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
0
```

<h2 id="tocS_ObjectSize">ObjectSize</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsize"></a>
<a id="schema_ObjectSize"></a>
<a id="tocSobjectsize"></a>
<a id="tocsobjectsize"></a>

```json
0
```

<h2 id="tocS_SymbolicLinkList">SymbolicLinkList</h2>
<!-- backwards compatibility -->
<a id="schemasymboliclinklist"></a>
<a id="schema_SymbolicLinkList"></a>
<a id="tocSsymboliclinklist"></a>
<a id="tocssymboliclinklist"></a>

```json
[
  {
    "blobId": {},
    "absolutePath": {},
    "relativePath": {},
    "fileMode": {}
  }
]
```

<h2 id="tocS_SubModuleList">SubModuleList</h2>
<!-- backwards compatibility -->
<a id="schemasubmodulelist"></a>
<a id="schema_SubModuleList"></a>
<a id="tocSsubmodulelist"></a>
<a id="tocssubmodulelist"></a>

```json
[
  {
    "commitId": {},
    "absolutePath": {},
    "relativePath": {}
  }
]
```

<h2 id="tocS_IsMergeable">IsMergeable</h2>
<!-- backwards compatibility -->
<a id="schemaismergeable"></a>
<a id="schema_IsMergeable"></a>
<a id="tocSismergeable"></a>
<a id="tocsismergeable"></a>

```json
true
```

<h2 id="tocS_MergeOptions">MergeOptions</h2>
<!-- backwards compatibility -->
<a id="schemamergeoptions"></a>
<a id="schema_MergeOptions"></a>
<a id="tocSmergeoptions"></a>
<a id="tocsmergeoptions"></a>

```json
[
  "FAST_FORWARD_MERGE"
]
```

<h2 id="tocS_RepositoryTriggersConfigurationId">RepositoryTriggersConfigurationId</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggersconfigurationid"></a>
<a id="schema_RepositoryTriggersConfigurationId"></a>
<a id="tocSrepositorytriggersconfigurationid"></a>
<a id="tocsrepositorytriggersconfigurationid"></a>

```json
"string"
```

<h2 id="tocS_RepositoryTriggersList">RepositoryTriggersList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerslist"></a>
<a id="schema_RepositoryTriggersList"></a>
<a id="tocSrepositorytriggerslist"></a>
<a id="tocsrepositorytriggerslist"></a>

```json
[
  {
    "name": {},
    "destinationArn": {},
    "customData": {},
    "branches": {},
    "events": {}
  }
]
```

<h2 id="tocS_HunkContent">HunkContent</h2>
<!-- backwards compatibility -->
<a id="schemahunkcontent"></a>
<a id="schema_HunkContent"></a>
<a id="tocShunkcontent"></a>
<a id="tocshunkcontent"></a>

```json
"string"
```

<h2 id="tocS_IsHunkConflict">IsHunkConflict</h2>
<!-- backwards compatibility -->
<a id="schemaishunkconflict"></a>
<a id="schema_IsHunkConflict"></a>
<a id="tocSishunkconflict"></a>
<a id="tocsishunkconflict"></a>

```json
true
```

<h2 id="tocS_IsMerged">IsMerged</h2>
<!-- backwards compatibility -->
<a id="schemaismerged"></a>
<a id="schema_IsMerged"></a>
<a id="tocSismerged"></a>
<a id="tocsismerged"></a>

```json
true
```

<h2 id="tocS_IsMove">IsMove</h2>
<!-- backwards compatibility -->
<a id="schemaismove"></a>
<a id="schema_IsMove"></a>
<a id="tocSismove"></a>
<a id="tocsismove"></a>

```json
true
```

<h2 id="tocS_LineNumber">LineNumber</h2>
<!-- backwards compatibility -->
<a id="schemalinenumber"></a>
<a id="schema_LineNumber"></a>
<a id="tocSlinenumber"></a>
<a id="tocslinenumber"></a>

```json
0
```

<h2 id="tocS_PullRequestStatusEnum">PullRequestStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemapullrequeststatusenum"></a>
<a id="schema_PullRequestStatusEnum"></a>
<a id="tocSpullrequeststatusenum"></a>
<a id="tocspullrequeststatusenum"></a>

```json
"OPEN"
```

<h2 id="tocS_PullRequestIdList">PullRequestIdList</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestidlist"></a>
<a id="schema_PullRequestIdList"></a>
<a id="tocSpullrequestidlist"></a>
<a id="tocspullrequestidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SortByEnum">SortByEnum</h2>
<!-- backwards compatibility -->
<a id="schemasortbyenum"></a>
<a id="schema_SortByEnum"></a>
<a id="tocSsortbyenum"></a>
<a id="tocssortbyenum"></a>

```json
"repositoryName"
```

<h2 id="tocS_OrderEnum">OrderEnum</h2>
<!-- backwards compatibility -->
<a id="schemaorderenum"></a>
<a id="schema_OrderEnum"></a>
<a id="tocSorderenum"></a>
<a id="tocsorderenum"></a>

```json
"ascending"
```

<h2 id="tocS_RepositoryNameIdPairList">RepositoryNameIdPairList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynameidpairlist"></a>
<a id="schema_RepositoryNameIdPairList"></a>
<a id="tocSrepositorynameidpairlist"></a>
<a id="tocsrepositorynameidpairlist"></a>

```json
[
  {
    "repositoryName": {},
    "repositoryId": {}
  }
]
```

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
0
```

<h2 id="tocS_RelativeFileVersionEnum">RelativeFileVersionEnum</h2>
<!-- backwards compatibility -->
<a id="schemarelativefileversionenum"></a>
<a id="schema_RelativeFileVersionEnum"></a>
<a id="tocSrelativefileversionenum"></a>
<a id="tocsrelativefileversionenum"></a>

```json
"BEFORE"
```

<h2 id="tocS_MergeHunkDetail">MergeHunkDetail</h2>
<!-- backwards compatibility -->
<a id="schemamergehunkdetail"></a>
<a id="schema_MergeHunkDetail"></a>
<a id="tocSmergehunkdetail"></a>
<a id="tocsmergehunkdetail"></a>

```json
{
  "startLine": {},
  "endLine": {},
  "hunkContent": {}
}
```

Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startLine|object|false|none|none|
|endLine|object|false|none|none|
|hunkContent|object|false|none|none|

<h2 id="tocS_MergeHunk">MergeHunk</h2>
<!-- backwards compatibility -->
<a id="schemamergehunk"></a>
<a id="schema_MergeHunk"></a>
<a id="tocSmergehunk"></a>
<a id="tocsmergehunk"></a>

```json
{
  "isConflict": {},
  "source": {
    "startLine": {},
    "endLine": {},
    "hunkContent": {}
  },
  "destination": {
    "startLine": {},
    "endLine": {},
    "hunkContent": {}
  },
  "base": {
    "startLine": {},
    "endLine": {},
    "hunkContent": {}
  }
}
```

Information about merge hunks in a merge or pull request operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isConflict|object|false|none|none|
|source|object|false|none|none|
|destination|object|false|none|none|
|base|object|false|none|none|

<h2 id="tocS_MergeMetadata">MergeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamergemetadata"></a>
<a id="schema_MergeMetadata"></a>
<a id="tocSmergemetadata"></a>
<a id="tocsmergemetadata"></a>

```json
{
  "isMerged": {},
  "mergedBy": {},
  "mergeCommitId": {},
  "mergeOption": {}
}
```

Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMerged|object|false|none|none|
|mergedBy|object|false|none|none|
|mergeCommitId|object|false|none|none|
|mergeOption|object|false|none|none|

<h2 id="tocS_ObjectTypeEnum">ObjectTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypeenum"></a>
<a id="schema_ObjectTypeEnum"></a>
<a id="tocSobjecttypeenum"></a>
<a id="tocsobjecttypeenum"></a>

```json
"FILE"
```

<h2 id="tocS_PullRequestTargetList">PullRequestTargetList</h2>
<!-- backwards compatibility -->
<a id="schemapullrequesttargetlist"></a>
<a id="schema_PullRequestTargetList"></a>
<a id="tocSpullrequesttargetlist"></a>
<a id="tocspullrequesttargetlist"></a>

```json
[
  {
    "repositoryName": {},
    "sourceReference": {},
    "destinationReference": {},
    "destinationCommit": {},
    "sourceCommit": {},
    "mergeBase": {},
    "mergeMetadata": {
      "isMerged": {},
      "mergedBy": {},
      "mergeCommitId": {},
      "mergeOption": {}
    }
  }
]
```

<h2 id="tocS_PullRequestCreatedEventMetadata">PullRequestCreatedEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestcreatedeventmetadata"></a>
<a id="schema_PullRequestCreatedEventMetadata"></a>
<a id="tocSpullrequestcreatedeventmetadata"></a>
<a id="tocspullrequestcreatedeventmetadata"></a>

```json
{
  "repositoryName": {},
  "sourceCommitId": {},
  "destinationCommitId": {},
  "mergeBase": {}
}
```

Metadata about the pull request that is used when comparing the pull request source with its destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|sourceCommitId|object|false|none|none|
|destinationCommitId|object|false|none|none|
|mergeBase|object|false|none|none|

<h2 id="tocS_PullRequestStatusChangedEventMetadata">PullRequestStatusChangedEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapullrequeststatuschangedeventmetadata"></a>
<a id="schema_PullRequestStatusChangedEventMetadata"></a>
<a id="tocSpullrequeststatuschangedeventmetadata"></a>
<a id="tocspullrequeststatuschangedeventmetadata"></a>

```json
{
  "pullRequestStatus": {}
}
```

Information about a change to the status of a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestStatus|object|false|none|none|

<h2 id="tocS_PullRequestSourceReferenceUpdatedEventMetadata">PullRequestSourceReferenceUpdatedEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestsourcereferenceupdatedeventmetadata"></a>
<a id="schema_PullRequestSourceReferenceUpdatedEventMetadata"></a>
<a id="tocSpullrequestsourcereferenceupdatedeventmetadata"></a>
<a id="tocspullrequestsourcereferenceupdatedeventmetadata"></a>

```json
{
  "repositoryName": {},
  "beforeCommitId": {},
  "afterCommitId": {},
  "mergeBase": {}
}
```

Information about an update to the source branch of a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|beforeCommitId|object|false|none|none|
|afterCommitId|object|false|none|none|
|mergeBase|object|false|none|none|

<h2 id="tocS_PullRequestMergedStateChangedEventMetadata">PullRequestMergedStateChangedEventMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestmergedstatechangedeventmetadata"></a>
<a id="schema_PullRequestMergedStateChangedEventMetadata"></a>
<a id="tocSpullrequestmergedstatechangedeventmetadata"></a>
<a id="tocspullrequestmergedstatechangedeventmetadata"></a>

```json
{
  "repositoryName": {},
  "destinationReference": {},
  "mergeMetadata": {
    "isMerged": {},
    "mergedBy": {},
    "mergeCommitId": {},
    "mergeOption": {}
  }
}
```

Returns information about the change in the merge state for a pull request event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|destinationReference|object|false|none|none|
|mergeMetadata|object|false|none|none|

<h2 id="tocS_PullRequestEvent">PullRequestEvent</h2>
<!-- backwards compatibility -->
<a id="schemapullrequestevent"></a>
<a id="schema_PullRequestEvent"></a>
<a id="tocSpullrequestevent"></a>
<a id="tocspullrequestevent"></a>

```json
{
  "pullRequestId": {},
  "eventDate": {},
  "pullRequestEventType": {},
  "actorArn": {},
  "pullRequestCreatedEventMetadata": {
    "repositoryName": {},
    "sourceCommitId": {},
    "destinationCommitId": {},
    "mergeBase": {}
  },
  "pullRequestStatusChangedEventMetadata": {
    "pullRequestStatus": {}
  },
  "pullRequestSourceReferenceUpdatedEventMetadata": {
    "repositoryName": {},
    "beforeCommitId": {},
    "afterCommitId": {},
    "mergeBase": {}
  },
  "pullRequestMergedStateChangedEventMetadata": {
    "repositoryName": {},
    "destinationReference": {},
    "mergeMetadata": {
      "isMerged": {},
      "mergedBy": {},
      "mergeCommitId": {},
      "mergeOption": {}
    }
  },
  "approvalRuleEventMetadata": {
    "approvalRuleName": {},
    "approvalRuleId": {},
    "approvalRuleContent": {}
  },
  "approvalStateChangedEventMetadata": {
    "revisionId": {},
    "approvalStatus": {}
  },
  "approvalRuleOverriddenEventMetadata": {
    "revisionId": {},
    "overrideStatus": {}
  }
}
```

Returns information about a pull request event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullRequestId|object|false|none|none|
|eventDate|object|false|none|none|
|pullRequestEventType|object|false|none|none|
|actorArn|object|false|none|none|
|pullRequestCreatedEventMetadata|object|false|none|none|
|pullRequestStatusChangedEventMetadata|object|false|none|none|
|pullRequestSourceReferenceUpdatedEventMetadata|object|false|none|none|
|pullRequestMergedStateChangedEventMetadata|object|false|none|none|
|approvalRuleEventMetadata|object|false|none|none|
|approvalStateChangedEventMetadata|object|false|none|none|
|approvalRuleOverriddenEventMetadata|object|false|none|none|

<h2 id="tocS_ReferenceName">ReferenceName</h2>
<!-- backwards compatibility -->
<a id="schemareferencename"></a>
<a id="schema_ReferenceName"></a>
<a id="tocSreferencename"></a>
<a id="tocsreferencename"></a>

```json
"string"
```

<h2 id="tocS_PullRequestTarget">PullRequestTarget</h2>
<!-- backwards compatibility -->
<a id="schemapullrequesttarget"></a>
<a id="schema_PullRequestTarget"></a>
<a id="tocSpullrequesttarget"></a>
<a id="tocspullrequesttarget"></a>

```json
{
  "repositoryName": {},
  "sourceReference": {},
  "destinationReference": {},
  "destinationCommit": {},
  "sourceCommit": {},
  "mergeBase": {},
  "mergeMetadata": {
    "isMerged": {},
    "mergedBy": {},
    "mergeCommitId": {},
    "mergeOption": {}
  }
}
```

Returns information about a pull request target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|sourceReference|object|false|none|none|
|destinationReference|object|false|none|none|
|destinationCommit|object|false|none|none|
|sourceCommit|object|false|none|none|
|mergeBase|object|false|none|none|
|mergeMetadata|object|false|none|none|

<h2 id="tocS_PutFileEntry">PutFileEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputfileentry"></a>
<a id="schema_PutFileEntry"></a>
<a id="tocSputfileentry"></a>
<a id="tocsputfileentry"></a>

```json
{
  "filePath": {},
  "fileMode": {},
  "fileContent": {},
  "sourceFile": {
    "filePath": {},
    "isMove": {}
  }
}
```

Information about a file added or updated as part of a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|
|fileMode|object|false|none|none|
|fileContent|object|false|none|none|
|sourceFile|object|false|none|none|

<h2 id="tocS_SourceFileSpecifier">SourceFileSpecifier</h2>
<!-- backwards compatibility -->
<a id="schemasourcefilespecifier"></a>
<a id="schema_SourceFileSpecifier"></a>
<a id="tocSsourcefilespecifier"></a>
<a id="tocssourcefilespecifier"></a>

```json
{
  "filePath": {},
  "isMove": {}
}
```

Information about a source file that is part of changes made in a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|
|isMove|object|false|none|none|

<h2 id="tocS_ReactionEmoji">ReactionEmoji</h2>
<!-- backwards compatibility -->
<a id="schemareactionemoji"></a>
<a id="schema_ReactionEmoji"></a>
<a id="tocSreactionemoji"></a>
<a id="tocsreactionemoji"></a>

```json
"string"
```

<h2 id="tocS_ReactionValueFormats">ReactionValueFormats</h2>
<!-- backwards compatibility -->
<a id="schemareactionvalueformats"></a>
<a id="schema_ReactionValueFormats"></a>
<a id="tocSreactionvalueformats"></a>
<a id="tocsreactionvalueformats"></a>

```json
{
  "emoji": {},
  "shortCode": {},
  "unicode": {}
}
```

Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|object|false|none|none|
|shortCode|object|false|none|none|
|unicode|object|false|none|none|

<h2 id="tocS_ReactionUsersList">ReactionUsersList</h2>
<!-- backwards compatibility -->
<a id="schemareactionuserslist"></a>
<a id="schema_ReactionUsersList"></a>
<a id="tocSreactionuserslist"></a>
<a id="tocsreactionuserslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ReactionForComment">ReactionForComment</h2>
<!-- backwards compatibility -->
<a id="schemareactionforcomment"></a>
<a id="schema_ReactionForComment"></a>
<a id="tocSreactionforcomment"></a>
<a id="tocsreactionforcomment"></a>

```json
{
  "reaction": {
    "emoji": {},
    "shortCode": {},
    "unicode": {}
  },
  "reactionUsers": {},
  "reactionsFromDeletedUsersCount": {}
}
```

Information about the reaction values provided by users on a comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reaction|object|false|none|none|
|reactionUsers|object|false|none|none|
|reactionsFromDeletedUsersCount|object|false|none|none|

<h2 id="tocS_ReactionShortCode">ReactionShortCode</h2>
<!-- backwards compatibility -->
<a id="schemareactionshortcode"></a>
<a id="schema_ReactionShortCode"></a>
<a id="tocSreactionshortcode"></a>
<a id="tocsreactionshortcode"></a>

```json
"string"
```

<h2 id="tocS_ReactionUnicode">ReactionUnicode</h2>
<!-- backwards compatibility -->
<a id="schemareactionunicode"></a>
<a id="schema_ReactionUnicode"></a>
<a id="tocSreactionunicode"></a>
<a id="tocsreactionunicode"></a>

```json
"string"
```

<h2 id="tocS_ReplaceContentEntry">ReplaceContentEntry</h2>
<!-- backwards compatibility -->
<a id="schemareplacecontententry"></a>
<a id="schema_ReplaceContentEntry"></a>
<a id="tocSreplacecontententry"></a>
<a id="tocsreplacecontententry"></a>

```json
{
  "filePath": {},
  "replacementType": {},
  "content": {},
  "fileMode": {}
}
```

Information about a replacement content entry in the conflict of a merge or pull request operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|
|replacementType|object|true|none|none|
|content|object|false|none|none|
|fileMode|object|false|none|none|

<h2 id="tocS_ReplacementTypeEnum">ReplacementTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemareplacementtypeenum"></a>
<a id="schema_ReplacementTypeEnum"></a>
<a id="tocSreplacementtypeenum"></a>
<a id="tocsreplacementtypeenum"></a>

```json
"KEEP_BASE"
```

<h2 id="tocS_RepositoryNameIdPair">RepositoryNameIdPair</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynameidpair"></a>
<a id="schema_RepositoryNameIdPair"></a>
<a id="tocSrepositorynameidpair"></a>
<a id="tocsrepositorynameidpair"></a>

```json
{
  "repositoryName": {},
  "repositoryId": {}
}
```

Information about a repository name and ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|repositoryId|object|false|none|none|

<h2 id="tocS_RepositoryTriggerName">RepositoryTriggerName</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggername"></a>
<a id="schema_RepositoryTriggerName"></a>
<a id="tocSrepositorytriggername"></a>
<a id="tocsrepositorytriggername"></a>

```json
"string"
```

<h2 id="tocS_RepositoryTriggerCustomData">RepositoryTriggerCustomData</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggercustomdata"></a>
<a id="schema_RepositoryTriggerCustomData"></a>
<a id="tocSrepositorytriggercustomdata"></a>
<a id="tocsrepositorytriggercustomdata"></a>

```json
"string"
```

<h2 id="tocS_RepositoryTriggerEventList">RepositoryTriggerEventList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggereventlist"></a>
<a id="schema_RepositoryTriggerEventList"></a>
<a id="tocSrepositorytriggereventlist"></a>
<a id="tocsrepositorytriggereventlist"></a>

```json
[
  "all"
]
```

<h2 id="tocS_RepositoryTrigger">RepositoryTrigger</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytrigger"></a>
<a id="schema_RepositoryTrigger"></a>
<a id="tocSrepositorytrigger"></a>
<a id="tocsrepositorytrigger"></a>

```json
{
  "name": {},
  "destinationArn": {},
  "customData": {},
  "branches": {},
  "events": {}
}
```

Information about a trigger for a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|destinationArn|object|true|none|none|
|customData|object|false|none|none|
|branches|object|false|none|none|
|events|object|true|none|none|

<h2 id="tocS_RepositoryTriggerEventEnum">RepositoryTriggerEventEnum</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggereventenum"></a>
<a id="schema_RepositoryTriggerEventEnum"></a>
<a id="tocSrepositorytriggereventenum"></a>
<a id="tocsrepositorytriggereventenum"></a>

```json
"all"
```

<h2 id="tocS_RepositoryTriggerExecutionFailureMessage">RepositoryTriggerExecutionFailureMessage</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerexecutionfailuremessage"></a>
<a id="schema_RepositoryTriggerExecutionFailureMessage"></a>
<a id="tocSrepositorytriggerexecutionfailuremessage"></a>
<a id="tocsrepositorytriggerexecutionfailuremessage"></a>

```json
"string"
```

<h2 id="tocS_RepositoryTriggerExecutionFailure">RepositoryTriggerExecutionFailure</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerexecutionfailure"></a>
<a id="schema_RepositoryTriggerExecutionFailure"></a>
<a id="tocSrepositorytriggerexecutionfailure"></a>
<a id="tocsrepositorytriggerexecutionfailure"></a>

```json
{
  "trigger": {},
  "failureMessage": {}
}
```

A trigger failed to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|object|false|none|none|
|failureMessage|object|false|none|none|

<h2 id="tocS_RepositoryTriggerExecutionFailureList">RepositoryTriggerExecutionFailureList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggerexecutionfailurelist"></a>
<a id="schema_RepositoryTriggerExecutionFailureList"></a>
<a id="tocSrepositorytriggerexecutionfailurelist"></a>
<a id="tocsrepositorytriggerexecutionfailurelist"></a>

```json
[
  {
    "trigger": {},
    "failureMessage": {}
  }
]
```

<h2 id="tocS_RepositoryTriggerNameList">RepositoryTriggerNameList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytriggernamelist"></a>
<a id="schema_RepositoryTriggerNameList"></a>
<a id="tocSrepositorytriggernamelist"></a>
<a id="tocsrepositorytriggernamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SetFileModeEntry">SetFileModeEntry</h2>
<!-- backwards compatibility -->
<a id="schemasetfilemodeentry"></a>
<a id="schema_SetFileModeEntry"></a>
<a id="tocSsetfilemodeentry"></a>
<a id="tocssetfilemodeentry"></a>

```json
{
  "filePath": {},
  "fileMode": {}
}
```

Information about the file mode changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|object|true|none|none|
|fileMode|object|true|none|none|

<h2 id="tocS_SubModule">SubModule</h2>
<!-- backwards compatibility -->
<a id="schemasubmodule"></a>
<a id="schema_SubModule"></a>
<a id="tocSsubmodule"></a>
<a id="tocssubmodule"></a>

```json
{
  "commitId": {},
  "absolutePath": {},
  "relativePath": {}
}
```

Returns information about a submodule reference in a repository folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitId|object|false|none|none|
|absolutePath|object|false|none|none|
|relativePath|object|false|none|none|

<h2 id="tocS_SymbolicLink">SymbolicLink</h2>
<!-- backwards compatibility -->
<a id="schemasymboliclink"></a>
<a id="schema_SymbolicLink"></a>
<a id="tocSsymboliclink"></a>
<a id="tocssymboliclink"></a>

```json
{
  "blobId": {},
  "absolutePath": {},
  "relativePath": {},
  "fileMode": {}
}
```

Returns information about a symbolic link in a repository folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobId|object|false|none|none|
|absolutePath|object|false|none|none|
|relativePath|object|false|none|none|
|fileMode|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagKeysList">TagKeysList</h2>
<!-- backwards compatibility -->
<a id="schematagkeyslist"></a>
<a id="schema_TagKeysList"></a>
<a id="tocStagkeyslist"></a>
<a id="tocstagkeyslist"></a>

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

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "repositoryName": {},
  "sourceReference": {},
  "destinationReference": {}
}
```

Returns information about a target for a pull request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|sourceReference|object|true|none|none|
|destinationReference|object|false|none|none|
