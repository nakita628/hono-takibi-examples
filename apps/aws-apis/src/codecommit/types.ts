type AssociateApprovalRuleTemplateWithRepositoryInput = {
  approvalRuleTemplateName: {}
  repositoryName: {}
}
type BatchAssociateApprovalRuleTemplateWithRepositoriesInput = {
  approvalRuleTemplateName: {}
  repositoryNames: {}
}
type BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = {
  associatedRepositoryNames: {}
  errors: {}
}
type BatchDescribeMergeConflictsInput = {
  repositoryName: {}
  destinationCommitSpecifier: {}
  sourceCommitSpecifier: {}
  mergeOption: {}
  maxMergeHunks?: {} | undefined
  maxConflictFiles?: {} | undefined
  filePaths?: {} | undefined
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  nextToken?: {} | undefined
}
type BatchDescribeMergeConflictsOutput = {
  conflicts: {}
  nextToken?: {} | undefined
  errors?: {} | undefined
  destinationCommitId: {}
  sourceCommitId: {}
  baseCommitId?: {} | undefined
}
type EncryptionKeyUnavailableException = { [x: string]: unknown }
type BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = {
  approvalRuleTemplateName: {}
  repositoryNames: {}
}
type BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = {
  disassociatedRepositoryNames: {}
  errors: {}
}
type BatchGetCommitsInput = { commitIds: {}; repositoryName: {} }
type BatchGetCommitsOutput = { commits?: {} | undefined; errors?: {} | undefined }
type BatchGetRepositoriesInput = { repositoryNames: {} }
type BatchGetRepositoriesOutput = {
  repositories?: {} | undefined
  repositoriesNotFound?: {} | undefined
}
type CreateApprovalRuleTemplateInput = {
  approvalRuleTemplateName: {}
  approvalRuleTemplateContent: {}
  approvalRuleTemplateDescription?: {} | undefined
}
type CreateApprovalRuleTemplateOutput = {
  approvalRuleTemplate: {
    approvalRuleTemplateId?: {} | undefined
    approvalRuleTemplateName?: {} | undefined
    approvalRuleTemplateDescription?: {} | undefined
    approvalRuleTemplateContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
  }
}
type CreateBranchInput = { repositoryName: {}; branchName: {}; commitId: {} }
type CreateCommitInput = {
  repositoryName: {}
  branchName: {}
  parentCommitId?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  commitMessage?: {} | undefined
  keepEmptyFolders?: {} | undefined
  putFiles?: {} | undefined
  deleteFiles?: {} | undefined
  setFileModes?: {} | undefined
}
type CreateCommitOutput = {
  commitId?: {} | undefined
  treeId?: {} | undefined
  filesAdded?: {} | undefined
  filesUpdated?: {} | undefined
  filesDeleted?: {} | undefined
}
type FileContentSizeLimitExceededException = { [x: string]: unknown }
type FolderContentSizeLimitExceededException = { [x: string]: unknown }
type InvalidDeletionParameterException = { [x: string]: unknown }
type RestrictedSourceFileException = { [x: string]: unknown }
type FileModeRequiredException = { [x: string]: unknown }
type InvalidFileModeException = { [x: string]: unknown }
type NameLengthExceededException = { [x: string]: unknown }
type InvalidEmailException = { [x: string]: unknown }
type CommitMessageLengthExceededException = { [x: string]: unknown }
type EncryptionKeyAccessDeniedException = { [x: string]: unknown }
type EncryptionKeyDisabledException = { [x: string]: unknown }
type CreatePullRequestInput = {
  title: {}
  description?: {} | undefined
  targets: {}
  clientRequestToken?: {} | undefined
}
type CreatePullRequestOutput = {
  pullRequest: {
    pullRequestId?: {} | undefined
    title?: {} | undefined
    description?: {} | undefined
    lastActivityDate?: {} | undefined
    creationDate?: {} | undefined
    pullRequestStatus?: {} | undefined
    authorArn?: {} | undefined
    pullRequestTargets?: {} | undefined
    clientRequestToken?: {} | undefined
    revisionId?: {} | undefined
    approvalRules?: {} | undefined
  }
}
type TargetRequiredException = { [x: string]: unknown }
type InvalidTargetException = { [x: string]: unknown }
type MultipleRepositoriesInPullRequestException = { [x: string]: unknown }
type MaximumOpenPullRequestsExceededException = { [x: string]: unknown }
type SourceAndDestinationAreSameException = { [x: string]: unknown }
type CreatePullRequestApprovalRuleInput = {
  pullRequestId: {}
  approvalRuleName: {}
  approvalRuleContent: {}
}
type CreatePullRequestApprovalRuleOutput = {
  approvalRule: {
    approvalRuleId?: {} | undefined
    approvalRuleName?: {} | undefined
    approvalRuleContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
    originApprovalRuleTemplate?:
      | { approvalRuleTemplateId?: {} | undefined; approvalRuleTemplateName?: {} | undefined }
      | undefined
  }
}
type CreateRepositoryInput = {
  repositoryName: {}
  repositoryDescription?: {} | undefined
  tags?: {} | undefined
}
type CreateRepositoryOutput = {
  repositoryMetadata?:
    | {
        accountId?: {} | undefined
        repositoryId?: {} | undefined
        repositoryName?: {} | undefined
        repositoryDescription?: {} | undefined
        defaultBranch?: {} | undefined
        lastModifiedDate?: {} | undefined
        creationDate?: {} | undefined
        cloneUrlHttp?: {} | undefined
        cloneUrlSsh?: {} | undefined
        Arn?: {} | undefined
      }
    | undefined
}
type CreateUnreferencedMergeCommitInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  mergeOption: {}
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  commitMessage?: {} | undefined
  keepEmptyFolders?: {} | undefined
  conflictResolution?:
    | {
        replaceContents?: {} | undefined
        deleteFiles?: {} | undefined
        setFileModes?: {} | undefined
      }
    | undefined
}
type CreateUnreferencedMergeCommitOutput = { commitId?: {} | undefined; treeId?: {} | undefined }
type InvalidPathException = { [x: string]: unknown }
type MaximumFileContentToLoadExceededException = { [x: string]: unknown }
type MaximumItemsToCompareExceededException = { [x: string]: unknown }
type ConcurrentReferenceUpdateException = { [x: string]: unknown }
type EncryptionIntegrityChecksFailedException = { [x: string]: unknown }
type DeleteApprovalRuleTemplateInput = { approvalRuleTemplateName: {} }
type DeleteApprovalRuleTemplateOutput = { approvalRuleTemplateId: {} }
type DeleteBranchInput = { repositoryName: {}; branchName: {} }
type DeleteBranchOutput = {
  deletedBranch?: { branchName?: {} | undefined; commitId?: {} | undefined } | undefined
}
type DeleteCommentContentInput = { commentId: {} }
type DeleteCommentContentOutput = {
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type DeleteFileInput = {
  repositoryName: {}
  branchName: {}
  filePath: {}
  parentCommitId: {}
  keepEmptyFolders?: {} | undefined
  commitMessage?: {} | undefined
  name?: {} | undefined
  email?: {} | undefined
}
type DeleteFileOutput = { commitId: {}; blobId: {}; treeId: {}; filePath: {} }
type EncryptionKeyNotFoundException = { [x: string]: unknown }
type DeletePullRequestApprovalRuleInput = { pullRequestId: {}; approvalRuleName: {} }
type DeletePullRequestApprovalRuleOutput = { approvalRuleId: {} }
type DeleteRepositoryInput = { repositoryName: {} }
type DeleteRepositoryOutput = { repositoryId?: {} | undefined }
type DescribeMergeConflictsInput = {
  repositoryName: {}
  destinationCommitSpecifier: {}
  sourceCommitSpecifier: {}
  mergeOption: {}
  maxMergeHunks?: {} | undefined
  filePath: {}
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeMergeConflictsOutput = {
  conflictMetadata: {
    filePath?: {} | undefined
    fileSizes?:
      | { source?: {} | undefined; destination?: {} | undefined; base?: {} | undefined }
      | undefined
    fileModes?:
      | { source?: {} | undefined; destination?: {} | undefined; base?: {} | undefined }
      | undefined
    objectTypes?:
      | { source?: {} | undefined; destination?: {} | undefined; base?: {} | undefined }
      | undefined
    numberOfConflicts?: {} | undefined
    isBinaryFile?:
      | { source?: {} | undefined; destination?: {} | undefined; base?: {} | undefined }
      | undefined
    contentConflict?: {} | undefined
    fileModeConflict?: {} | undefined
    objectTypeConflict?: {} | undefined
    mergeOperations?: { source?: {} | undefined; destination?: {} | undefined } | undefined
  }
  mergeHunks: {}
  nextToken?: {} | undefined
  destinationCommitId: {}
  sourceCommitId: {}
  baseCommitId?: {} | undefined
}
type DescribePullRequestEventsInput = {
  pullRequestId: {}
  pullRequestEventType?: {} | undefined
  actorArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribePullRequestEventsOutput = { pullRequestEvents: {}; nextToken?: {} | undefined }
type DisassociateApprovalRuleTemplateFromRepositoryInput = {
  approvalRuleTemplateName: {}
  repositoryName: {}
}
type EvaluatePullRequestApprovalRulesInput = { pullRequestId: {}; revisionId: {} }
type EvaluatePullRequestApprovalRulesOutput = {
  evaluation: {
    approved?: {} | undefined
    overridden?: {} | undefined
    approvalRulesSatisfied?: {} | undefined
    approvalRulesNotSatisfied?: {} | undefined
  }
}
type GetApprovalRuleTemplateInput = { approvalRuleTemplateName: {} }
type GetApprovalRuleTemplateOutput = {
  approvalRuleTemplate: {
    approvalRuleTemplateId?: {} | undefined
    approvalRuleTemplateName?: {} | undefined
    approvalRuleTemplateDescription?: {} | undefined
    approvalRuleTemplateContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
  }
}
type GetBlobInput = { repositoryName: {}; blobId: {} }
type GetBlobOutput = { content: {} }
type GetBranchInput = { repositoryName?: {} | undefined; branchName?: {} | undefined }
type GetBranchOutput = {
  branch?: { branchName?: {} | undefined; commitId?: {} | undefined } | undefined
}
type GetCommentInput = { commentId: {} }
type GetCommentOutput = {
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type GetCommentReactionsInput = {
  commentId: {}
  reactionUserArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetCommentReactionsOutput = { reactionsForComment: {}; nextToken?: {} | undefined }
type GetCommentsForComparedCommitInput = {
  repositoryName: {}
  beforeCommitId?: {} | undefined
  afterCommitId: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetCommentsForComparedCommitOutput = {
  commentsForComparedCommitData?: {} | undefined
  nextToken?: {} | undefined
}
type GetCommentsForPullRequestInput = {
  pullRequestId: {}
  repositoryName?: {} | undefined
  beforeCommitId?: {} | undefined
  afterCommitId?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetCommentsForPullRequestOutput = {
  commentsForPullRequestData?: {} | undefined
  nextToken?: {} | undefined
}
type GetCommitInput = { repositoryName: {}; commitId: {} }
type GetCommitOutput = {
  commit: {
    commitId?: {} | undefined
    treeId?: {} | undefined
    parents?: {} | undefined
    message?: {} | undefined
    author?: { name?: {} | undefined; email?: {} | undefined; date?: {} | undefined } | undefined
    committer?: { name?: {} | undefined; email?: {} | undefined; date?: {} | undefined } | undefined
    additionalData?: {} | undefined
  }
}
type GetDifferencesInput = {
  repositoryName: {}
  beforeCommitSpecifier?: {} | undefined
  afterCommitSpecifier: {}
  beforePath?: {} | undefined
  afterPath?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetDifferencesOutput = { differences?: {} | undefined; NextToken?: {} | undefined }
type GetFileInput = { repositoryName: {}; commitSpecifier?: {} | undefined; filePath: {} }
type GetFileOutput = {
  commitId: {}
  blobId: {}
  filePath: {}
  fileMode: {}
  fileSize: {}
  fileContent: {}
}
type GetFolderInput = { repositoryName: {}; commitSpecifier?: {} | undefined; folderPath: {} }
type GetFolderOutput = {
  commitId: {}
  folderPath: {}
  treeId?: {} | undefined
  subFolders?: {} | undefined
  files?: {} | undefined
  symbolicLinks?: {} | undefined
  subModules?: {} | undefined
}
type GetMergeCommitInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
}
type GetMergeCommitOutput = {
  sourceCommitId?: {} | undefined
  destinationCommitId?: {} | undefined
  baseCommitId?: {} | undefined
  mergedCommitId?: {} | undefined
}
type GetMergeConflictsInput = {
  repositoryName: {}
  destinationCommitSpecifier: {}
  sourceCommitSpecifier: {}
  mergeOption: {}
  conflictDetailLevel?: {} | undefined
  maxConflictFiles?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  nextToken?: {} | undefined
}
type GetMergeConflictsOutput = {
  mergeable: {}
  destinationCommitId: {}
  sourceCommitId: {}
  baseCommitId?: {} | undefined
  conflictMetadataList: {}
  nextToken?: {} | undefined
}
type GetMergeOptionsInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
}
type GetMergeOptionsOutput = {
  mergeOptions: {}
  sourceCommitId: {}
  destinationCommitId: {}
  baseCommitId: {}
}
type GetPullRequestInput = { pullRequestId: {} }
type GetPullRequestOutput = {
  pullRequest: {
    pullRequestId?: {} | undefined
    title?: {} | undefined
    description?: {} | undefined
    lastActivityDate?: {} | undefined
    creationDate?: {} | undefined
    pullRequestStatus?: {} | undefined
    authorArn?: {} | undefined
    pullRequestTargets?: {} | undefined
    clientRequestToken?: {} | undefined
    revisionId?: {} | undefined
    approvalRules?: {} | undefined
  }
}
type GetPullRequestApprovalStatesInput = { pullRequestId: {}; revisionId: {} }
type GetPullRequestApprovalStatesOutput = { approvals?: {} | undefined }
type GetPullRequestOverrideStateInput = { pullRequestId: {}; revisionId: {} }
type GetPullRequestOverrideStateOutput = { overridden?: {} | undefined; overrider?: {} | undefined }
type GetRepositoryInput = { repositoryName: {} }
type GetRepositoryOutput = {
  repositoryMetadata?:
    | {
        accountId?: {} | undefined
        repositoryId?: {} | undefined
        repositoryName?: {} | undefined
        repositoryDescription?: {} | undefined
        defaultBranch?: {} | undefined
        lastModifiedDate?: {} | undefined
        creationDate?: {} | undefined
        cloneUrlHttp?: {} | undefined
        cloneUrlSsh?: {} | undefined
        Arn?: {} | undefined
      }
    | undefined
}
type GetRepositoryTriggersInput = { repositoryName: {} }
type GetRepositoryTriggersOutput = { configurationId?: {} | undefined; triggers?: {} | undefined }
type ListApprovalRuleTemplatesInput = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListApprovalRuleTemplatesOutput = {
  approvalRuleTemplateNames?: {} | undefined
  nextToken?: {} | undefined
}
type ListAssociatedApprovalRuleTemplatesForRepositoryInput = {
  repositoryName: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListAssociatedApprovalRuleTemplatesForRepositoryOutput = {
  approvalRuleTemplateNames?: {} | undefined
  nextToken?: {} | undefined
}
type ListBranchesInput = { repositoryName: {}; nextToken?: {} | undefined }
type ListBranchesOutput = { branches?: {} | undefined; nextToken?: {} | undefined }
type ListPullRequestsInput = {
  repositoryName: {}
  authorArn?: {} | undefined
  pullRequestStatus?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListPullRequestsOutput = { pullRequestIds: {}; nextToken?: {} | undefined }
type ListRepositoriesInput = {
  nextToken?: {} | undefined
  sortBy?: {} | undefined
  order?: {} | undefined
}
type ListRepositoriesOutput = { repositories?: {} | undefined; nextToken?: {} | undefined }
type ListRepositoriesForApprovalRuleTemplateInput = {
  approvalRuleTemplateName: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListRepositoriesForApprovalRuleTemplateOutput = {
  repositoryNames?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceInput = { resourceArn: {}; nextToken?: {} | undefined }
type ListTagsForResourceOutput = { tags?: {} | undefined; nextToken?: {} | undefined }
type MergeBranchesByFastForwardInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  targetBranch?: {} | undefined
}
type MergeBranchesByFastForwardOutput = { commitId?: {} | undefined; treeId?: {} | undefined }
type MergeBranchesBySquashInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  targetBranch?: {} | undefined
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  commitMessage?: {} | undefined
  keepEmptyFolders?: {} | undefined
  conflictResolution?:
    | {
        replaceContents?: {} | undefined
        deleteFiles?: {} | undefined
        setFileModes?: {} | undefined
      }
    | undefined
}
type MergeBranchesBySquashOutput = { commitId?: {} | undefined; treeId?: {} | undefined }
type ReplacementContentRequiredException = { [x: string]: unknown }
type InvalidReplacementContentException = { [x: string]: unknown }
type PathRequiredException = { [x: string]: unknown }
type MergeBranchesByThreeWayInput = {
  repositoryName: {}
  sourceCommitSpecifier: {}
  destinationCommitSpecifier: {}
  targetBranch?: {} | undefined
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  commitMessage?: {} | undefined
  keepEmptyFolders?: {} | undefined
  conflictResolution?:
    | {
        replaceContents?: {} | undefined
        deleteFiles?: {} | undefined
        setFileModes?: {} | undefined
      }
    | undefined
}
type MergeBranchesByThreeWayOutput = { commitId?: {} | undefined; treeId?: {} | undefined }
type InvalidReplacementTypeException = { [x: string]: unknown }
type MergePullRequestByFastForwardInput = {
  pullRequestId: {}
  repositoryName: {}
  sourceCommitId?: {} | undefined
}
type MergePullRequestByFastForwardOutput = {
  pullRequest?:
    | {
        pullRequestId?: {} | undefined
        title?: {} | undefined
        description?: {} | undefined
        lastActivityDate?: {} | undefined
        creationDate?: {} | undefined
        pullRequestStatus?: {} | undefined
        authorArn?: {} | undefined
        pullRequestTargets?: {} | undefined
        clientRequestToken?: {} | undefined
        revisionId?: {} | undefined
        approvalRules?: {} | undefined
      }
    | undefined
}
type MergePullRequestBySquashInput = {
  pullRequestId: {}
  repositoryName: {}
  sourceCommitId?: {} | undefined
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  commitMessage?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  keepEmptyFolders?: {} | undefined
  conflictResolution?:
    | {
        replaceContents?: {} | undefined
        deleteFiles?: {} | undefined
        setFileModes?: {} | undefined
      }
    | undefined
}
type PullRequest = {
  pullRequestId?: {} | undefined
  title?: {} | undefined
  description?: {} | undefined
  lastActivityDate?: {} | undefined
  creationDate?: {} | undefined
  pullRequestStatus?: {} | undefined
  authorArn?: {} | undefined
  pullRequestTargets?: {} | undefined
  clientRequestToken?: {} | undefined
  revisionId?: {} | undefined
  approvalRules?: {} | undefined
}
type MergePullRequestBySquashOutput = { pullRequest?: PullRequest | undefined }
type RepositoryNameRequiredException = { [x: string]: unknown }
type RepositoryDoesNotExistException = { [x: string]: unknown }
type RepositoryNotAssociatedWithPullRequestException = { [x: string]: unknown }
type MergePullRequestByThreeWayInput = {
  pullRequestId: {}
  repositoryName: {}
  sourceCommitId?: {} | undefined
  conflictDetailLevel?: {} | undefined
  conflictResolutionStrategy?: {} | undefined
  commitMessage?: {} | undefined
  authorName?: {} | undefined
  email?: {} | undefined
  keepEmptyFolders?: {} | undefined
  conflictResolution?:
    | {
        replaceContents?: {} | undefined
        deleteFiles?: {} | undefined
        setFileModes?: {} | undefined
      }
    | undefined
}
type MergePullRequestByThreeWayOutput = { pullRequest?: PullRequest | undefined }
type InvalidRepositoryNameException = { [x: string]: unknown }
type OverridePullRequestApprovalRulesInput = {
  pullRequestId: {}
  revisionId: {}
  overrideStatus: {}
}
type PostCommentForComparedCommitInput = {
  repositoryName: {}
  beforeCommitId?: {} | undefined
  afterCommitId: {}
  location?:
    | {
        filePath?: {} | undefined
        filePosition?: {} | undefined
        relativeFileVersion?: {} | undefined
      }
    | undefined
  content: {}
  clientRequestToken?: {} | undefined
}
type PostCommentForComparedCommitOutput = {
  repositoryName?: {} | undefined
  beforeCommitId?: {} | undefined
  afterCommitId?: {} | undefined
  beforeBlobId?: {} | undefined
  afterBlobId?: {} | undefined
  location?:
    | {
        filePath?: {} | undefined
        filePosition?: {} | undefined
        relativeFileVersion?: {} | undefined
      }
    | undefined
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type CommitDoesNotExistException = { [x: string]: unknown }
type PathDoesNotExistException = { [x: string]: unknown }
type PostCommentForPullRequestInput = {
  pullRequestId: {}
  repositoryName: {}
  beforeCommitId: {}
  afterCommitId: {}
  location?:
    | {
        filePath?: {} | undefined
        filePosition?: {} | undefined
        relativeFileVersion?: {} | undefined
      }
    | undefined
  content: {}
  clientRequestToken?: {} | undefined
}
type PostCommentForPullRequestOutput = {
  repositoryName?: {} | undefined
  pullRequestId?: {} | undefined
  beforeCommitId?: {} | undefined
  afterCommitId?: {} | undefined
  beforeBlobId?: {} | undefined
  afterBlobId?: {} | undefined
  location?:
    | {
        filePath?: {} | undefined
        filePosition?: {} | undefined
        relativeFileVersion?: {} | undefined
      }
    | undefined
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type PostCommentReplyInput = { inReplyTo: {}; clientRequestToken?: {} | undefined; content: {} }
type PostCommentReplyOutput = {
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type PutCommentReactionInput = { commentId: {}; reactionValue: {} }
type PutFileInput = {
  repositoryName: {}
  branchName: {}
  fileContent: {}
  filePath: {}
  fileMode?: {} | undefined
  parentCommitId?: {} | undefined
  commitMessage?: {} | undefined
  name?: {} | undefined
  email?: {} | undefined
}
type PutFileOutput = { commitId: {}; blobId: {}; treeId: {} }
type SameFileContentException = { [x: string]: unknown }
type FileNameConflictsWithDirectoryNameException = { [x: string]: unknown }
type DirectoryNameConflictsWithFileNameException = { [x: string]: unknown }
type PutRepositoryTriggersInput = { repositoryName: {}; triggers: {} }
type PutRepositoryTriggersOutput = { configurationId?: {} | undefined }
type TagResourceInput = { resourceArn: {}; tags: {} }
type TestRepositoryTriggersInput = { repositoryName: {}; triggers: {} }
type TestRepositoryTriggersOutput = {
  successfulExecutions?: {} | undefined
  failedExecutions?: {} | undefined
}
type UntagResourceInput = { resourceArn: {}; tagKeys: {} }
type UpdateApprovalRuleTemplateContentInput = {
  approvalRuleTemplateName: {}
  newRuleContent: {}
  existingRuleContentSha256?: {} | undefined
}
type ApprovalRuleTemplate = {
  approvalRuleTemplateId?: {} | undefined
  approvalRuleTemplateName?: {} | undefined
  approvalRuleTemplateDescription?: {} | undefined
  approvalRuleTemplateContent?: {} | undefined
  ruleContentSha256?: {} | undefined
  lastModifiedDate?: {} | undefined
  creationDate?: {} | undefined
  lastModifiedUser?: {} | undefined
}
type UpdateApprovalRuleTemplateContentOutput = { approvalRuleTemplate: ApprovalRuleTemplate }
type UpdateApprovalRuleTemplateDescriptionInput = {
  approvalRuleTemplateName: {}
  approvalRuleTemplateDescription: {}
}
type UpdateApprovalRuleTemplateDescriptionOutput = {
  approvalRuleTemplate: {
    approvalRuleTemplateId?: {} | undefined
    approvalRuleTemplateName?: {} | undefined
    approvalRuleTemplateDescription?: {} | undefined
    approvalRuleTemplateContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
  }
}
type UpdateApprovalRuleTemplateNameInput = {
  oldApprovalRuleTemplateName: {}
  newApprovalRuleTemplateName: {}
}
type UpdateApprovalRuleTemplateNameOutput = {
  approvalRuleTemplate: {
    approvalRuleTemplateId?: {} | undefined
    approvalRuleTemplateName?: {} | undefined
    approvalRuleTemplateDescription?: {} | undefined
    approvalRuleTemplateContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
  }
}
type UpdateCommentInput = { commentId: {}; content: {} }
type UpdateCommentOutput = {
  comment?:
    | {
        commentId?: {} | undefined
        content?: {} | undefined
        inReplyTo?: {} | undefined
        creationDate?: {} | undefined
        lastModifiedDate?: {} | undefined
        authorArn?: {} | undefined
        deleted?: {} | undefined
        clientRequestToken?: {} | undefined
        callerReactions?: {} | undefined
        reactionCounts?: {} | undefined
      }
    | undefined
}
type UpdateDefaultBranchInput = { repositoryName: {}; defaultBranchName: {} }
type UpdatePullRequestApprovalRuleContentInput = {
  pullRequestId: {}
  approvalRuleName: {}
  existingRuleContentSha256?: {} | undefined
  newRuleContent: {}
}
type UpdatePullRequestApprovalRuleContentOutput = {
  approvalRule: {
    approvalRuleId?: {} | undefined
    approvalRuleName?: {} | undefined
    approvalRuleContent?: {} | undefined
    ruleContentSha256?: {} | undefined
    lastModifiedDate?: {} | undefined
    creationDate?: {} | undefined
    lastModifiedUser?: {} | undefined
    originApprovalRuleTemplate?:
      | { approvalRuleTemplateId?: {} | undefined; approvalRuleTemplateName?: {} | undefined }
      | undefined
  }
}
type UpdatePullRequestApprovalStateInput = { pullRequestId: {}; revisionId: {}; approvalState: {} }
type UpdatePullRequestDescriptionInput = { pullRequestId: {}; description: {} }
type UpdatePullRequestDescriptionOutput = {
  pullRequest: {
    pullRequestId?: {} | undefined
    title?: {} | undefined
    description?: {} | undefined
    lastActivityDate?: {} | undefined
    creationDate?: {} | undefined
    pullRequestStatus?: {} | undefined
    authorArn?: {} | undefined
    pullRequestTargets?: {} | undefined
    clientRequestToken?: {} | undefined
    revisionId?: {} | undefined
    approvalRules?: {} | undefined
  }
}
type UpdatePullRequestStatusInput = { pullRequestId: {}; pullRequestStatus: {} }
type UpdatePullRequestStatusOutput = {
  pullRequest: {
    pullRequestId?: {} | undefined
    title?: {} | undefined
    description?: {} | undefined
    lastActivityDate?: {} | undefined
    creationDate?: {} | undefined
    pullRequestStatus?: {} | undefined
    authorArn?: {} | undefined
    pullRequestTargets?: {} | undefined
    clientRequestToken?: {} | undefined
    revisionId?: {} | undefined
    approvalRules?: {} | undefined
  }
}
type UpdatePullRequestTitleInput = { pullRequestId: {}; title: {} }
type UpdatePullRequestTitleOutput = {
  pullRequest: {
    pullRequestId?: {} | undefined
    title?: {} | undefined
    description?: {} | undefined
    lastActivityDate?: {} | undefined
    creationDate?: {} | undefined
    pullRequestStatus?: {} | undefined
    authorArn?: {} | undefined
    pullRequestTargets?: {} | undefined
    clientRequestToken?: {} | undefined
    revisionId?: {} | undefined
    approvalRules?: {} | undefined
  }
}
type UpdateRepositoryDescriptionInput = {
  repositoryName: {}
  repositoryDescription?: {} | undefined
}
type UpdateRepositoryNameInput = { oldName: {}; newName: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateApprovalRuleTemplateWithRepositoryInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchAssociateApprovalRuleTemplateWithRepositoriesInput }
        output: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.BatchDescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDescribeMergeConflictsInput }
            output: BatchDescribeMergeConflictsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.BatchDescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDescribeMergeConflictsInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput }
        output: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.BatchGetCommits'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetCommitsInput }
        output: BatchGetCommitsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.BatchGetRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetRepositoriesInput }
        output: BatchGetRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.CreateApprovalRuleTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateApprovalRuleTemplateInput }
        output: CreateApprovalRuleTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreateBranch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.CreateBranch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBranchInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreateCommit': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: CreateCommitOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: InvalidDeletionParameterException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: RestrictedSourceFileException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: FileModeRequiredException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: InvalidFileModeException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: NameLengthExceededException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: InvalidEmailException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: CommitMessageLengthExceededException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: EncryptionKeyAccessDeniedException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateCommitInput }
            output: EncryptionKeyDisabledException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: CreatePullRequestOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: TargetRequiredException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: InvalidTargetException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: MultipleRepositoriesInPullRequestException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: MaximumOpenPullRequestsExceededException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePullRequestInput }
            output: SourceAndDestinationAreSameException
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.CreatePullRequestApprovalRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePullRequestApprovalRuleInput }
        output: CreatePullRequestApprovalRuleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreateRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.CreateRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRepositoryInput }
        output: CreateRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: CreateUnreferencedMergeCommitOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: MaximumFileContentToLoadExceededException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: MaximumItemsToCompareExceededException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: ConcurrentReferenceUpdateException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: FileModeRequiredException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: InvalidFileModeException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: NameLengthExceededException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: CommitMessageLengthExceededException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.CreateUnreferencedMergeCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUnreferencedMergeCommitInput }
            output: EncryptionIntegrityChecksFailedException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DeleteApprovalRuleTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteApprovalRuleTemplateInput }
        output: DeleteApprovalRuleTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeleteBranch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DeleteBranch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBranchInput }
        output: DeleteBranchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DeleteCommentContent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCommentContentInput }
        output: DeleteCommentContentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeleteFile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DeleteFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFileInput }
            output: DeleteFileOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DeleteFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFileInput }
            output: EncryptionKeyNotFoundException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DeleteFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFileInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DeletePullRequestApprovalRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePullRequestApprovalRuleInput }
        output: DeletePullRequestApprovalRuleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DeleteRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DeleteRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRepositoryInput }
        output: DeleteRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts': {
      $post:
        | {
            input: {
              query: { maxMergeHunks?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMergeConflictsInput }
            output: DescribeMergeConflictsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxMergeHunks?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMergeConflictsInput }
            output: EncryptionKeyDisabledException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { maxMergeHunks?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMergeConflictsInput }
            output: EncryptionKeyNotFoundException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              query: { maxMergeHunks?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.DescribeMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMergeConflictsInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DescribePullRequestEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePullRequestEventsInput }
        output: DescribePullRequestEventsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateApprovalRuleTemplateFromRepositoryInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.EvaluatePullRequestApprovalRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EvaluatePullRequestApprovalRulesInput }
        output: EvaluatePullRequestApprovalRulesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetApprovalRuleTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetApprovalRuleTemplateInput }
        output: GetApprovalRuleTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetBlob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetBlob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlobInput }
        output: GetBlobOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetBranch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetBranch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBranchInput }
        output: GetBranchOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetComment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetComment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommentInput }
        output: GetCommentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetCommentReactions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommentReactionsInput }
        output: GetCommentReactionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetCommentsForComparedCommit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommentsForComparedCommitInput }
        output: GetCommentsForComparedCommitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetCommentsForPullRequest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommentsForPullRequestInput }
        output: GetCommentsForPullRequestOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetCommit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetCommit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommitInput }
        output: GetCommitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetDifferences': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetDifferences'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDifferencesInput }
        output: GetDifferencesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetFile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetFile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFileInput }
        output: GetFileOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetFolder': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetFolder'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFolderInput }
        output: GetFolderOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetMergeCommit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMergeCommitInput }
        output: GetMergeCommitOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts': {
      $post:
        | {
            input: {
              query: { maxConflictFiles?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.GetMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMergeConflictsInput }
            output: GetMergeConflictsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxConflictFiles?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.GetMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMergeConflictsInput }
            output: EncryptionKeyNotFoundException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { maxConflictFiles?: string | undefined; nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.GetMergeConflicts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetMergeConflictsInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetMergeOptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMergeOptionsInput }
        output: GetMergeOptionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetPullRequest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPullRequestInput }
        output: GetPullRequestOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetPullRequestApprovalStates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPullRequestApprovalStatesInput }
        output: GetPullRequestApprovalStatesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetPullRequestOverrideState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPullRequestOverrideStateInput }
        output: GetPullRequestOverrideStateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositoryInput }
        output: GetRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.GetRepositoryTriggers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositoryTriggersInput }
        output: GetRepositoryTriggersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListApprovalRuleTemplates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListApprovalRuleTemplatesInput }
        output: ListApprovalRuleTemplatesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAssociatedApprovalRuleTemplatesForRepositoryInput }
        output: ListAssociatedApprovalRuleTemplatesForRepositoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListBranches': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListBranches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBranchesInput }
        output: ListBranchesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListPullRequests': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListPullRequests'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPullRequestsInput }
        output: ListPullRequestsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositories': {
      $post: {
        input: { query: { nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRepositoriesInput }
        output: ListRepositoriesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRepositoriesForApprovalRuleTemplateInput }
        output: ListRepositoriesForApprovalRuleTemplateOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceInput }
        output: ListTagsForResourceOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByFastForward'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MergeBranchesByFastForwardInput }
        output: MergeBranchesByFastForwardOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: MergeBranchesBySquashOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: ReplacementContentRequiredException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: InvalidReplacementContentException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: PathRequiredException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: MaximumFileContentToLoadExceededException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: MaximumItemsToCompareExceededException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: FileModeRequiredException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: NameLengthExceededException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesBySquashInput }
            output: InvalidEmailException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: MergeBranchesByThreeWayOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: InvalidReplacementTypeException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: ReplacementContentRequiredException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: InvalidReplacementContentException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: PathRequiredException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: MaximumFileContentToLoadExceededException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: MaximumItemsToCompareExceededException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: InvalidFileModeException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergeBranchesByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergeBranchesByThreeWayInput }
            output: NameLengthExceededException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByFastForward'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MergePullRequestByFastForwardInput }
        output: MergePullRequestByFastForwardOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: MergePullRequestBySquashOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: PathRequiredException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: InvalidFileModeException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: InvalidReplacementContentException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: MaximumFileContentToLoadExceededException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: MaximumItemsToCompareExceededException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: RepositoryNameRequiredException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: RepositoryDoesNotExistException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestBySquash'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestBySquashInput }
            output: RepositoryNotAssociatedWithPullRequestException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: MergePullRequestByThreeWayOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: InvalidFileModeException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: InvalidReplacementContentException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: FileContentSizeLimitExceededException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: FolderContentSizeLimitExceededException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: MaximumFileContentToLoadExceededException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: MaximumItemsToCompareExceededException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: RepositoryNameRequiredException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: InvalidRepositoryNameException
            outputFormat: 'json'
            status: 508
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: RepositoryNotAssociatedWithPullRequestException
            outputFormat: 'json'
            status: 510
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.MergePullRequestByThreeWay'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: MergePullRequestByThreeWayInput }
            output: ConcurrentReferenceUpdateException
            outputFormat: 'json'
            status: 511
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.OverridePullRequestApprovalRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: OverridePullRequestApprovalRulesInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForComparedCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForComparedCommitInput }
            output: PostCommentForComparedCommitOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForComparedCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForComparedCommitInput }
            output: CommitDoesNotExistException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForComparedCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForComparedCommitInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForComparedCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForComparedCommitInput }
            output: PathDoesNotExistException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForComparedCommit'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForComparedCommitInput }
            output: PathRequiredException
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: PostCommentForPullRequestOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: EncryptionKeyAccessDeniedException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: EncryptionKeyDisabledException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: EncryptionKeyNotFoundException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: CommitDoesNotExistException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: InvalidPathException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: PathDoesNotExistException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PostCommentForPullRequest'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PostCommentForPullRequestInput }
            output: PathRequiredException
            outputFormat: 'json'
            status: 507
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PostCommentReply': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.PostCommentReply'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PostCommentReplyInput }
        output: PostCommentReplyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.PutCommentReaction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutCommentReactionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PutFile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: PutFileOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: InvalidDeletionParameterException
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: EncryptionIntegrityChecksFailedException
            outputFormat: 'json'
            status: 501
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: EncryptionKeyAccessDeniedException
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: EncryptionKeyDisabledException
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: EncryptionKeyNotFoundException
            outputFormat: 'json'
            status: 504
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 505
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: SameFileContentException
            outputFormat: 'json'
            status: 506
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: FileNameConflictsWithDirectoryNameException
            outputFormat: 'json'
            status: 507
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutFile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutFileInput }
            output: DirectoryNameConflictsWithFileNameException
            outputFormat: 'json'
            status: 508
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutRepositoryTriggers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRepositoryTriggersInput }
            output: PutRepositoryTriggersOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.PutRepositoryTriggers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutRepositoryTriggersInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.TestRepositoryTriggers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRepositoryTriggersInput }
            output: TestRepositoryTriggersOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'CodeCommit_20150413.TestRepositoryTriggers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TestRepositoryTriggersInput }
            output: EncryptionKeyUnavailableException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateApprovalRuleTemplateContent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApprovalRuleTemplateContentInput }
        output: UpdateApprovalRuleTemplateContentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApprovalRuleTemplateDescriptionInput }
        output: UpdateApprovalRuleTemplateDescriptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateApprovalRuleTemplateName'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApprovalRuleTemplateNameInput }
        output: UpdateApprovalRuleTemplateNameOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateComment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateComment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCommentInput }
        output: UpdateCommentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateDefaultBranch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDefaultBranchInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePullRequestApprovalRuleContentInput }
        output: UpdatePullRequestApprovalRuleContentOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdatePullRequestApprovalState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePullRequestApprovalStateInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdatePullRequestDescription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePullRequestDescriptionInput }
        output: UpdatePullRequestDescriptionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdatePullRequestStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePullRequestStatusInput }
        output: UpdatePullRequestStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdatePullRequestTitle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePullRequestTitleInput }
        output: UpdatePullRequestTitleOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateRepositoryDescription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRepositoryDescriptionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CodeCommit_20150413.UpdateRepositoryName'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRepositoryNameInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
