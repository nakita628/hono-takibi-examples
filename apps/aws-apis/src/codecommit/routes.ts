import { createRoute, z } from '@hono/zod-openapi'

const ApprovalRuleTemplateNameSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi('ApprovalRuleTemplateName')

const RepositoryNameSchema = z
  .string()
  .regex(/[\w\.-]+/)
  .min(1)
  .max(100)
  .openapi('RepositoryName')

const AssociateApprovalRuleTemplateWithRepositoryInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z.any().openapi({ description: 'The name for the approval rule template. ' }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository that you want to associate with the template.',
        }),
    ),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'repositoryName'],
    title: 'AssociateApprovalRuleTemplateWithRepositoryInput',
  })
  .openapi('AssociateApprovalRuleTemplateWithRepositoryInput')

const ApprovalRuleTemplateNameRequiredExceptionSchema = z
  .any()
  .openapi('ApprovalRuleTemplateNameRequiredException')

const InvalidApprovalRuleTemplateNameExceptionSchema = z
  .any()
  .openapi('InvalidApprovalRuleTemplateNameException')

const ApprovalRuleTemplateDoesNotExistExceptionSchema = z
  .any()
  .openapi('ApprovalRuleTemplateDoesNotExistException')

const MaximumRuleTemplatesAssociatedWithRepositoryExceptionSchema = z
  .any()
  .openapi('MaximumRuleTemplatesAssociatedWithRepositoryException')

const RepositoryNameRequiredExceptionSchema = z.any().openapi('RepositoryNameRequiredException')

const InvalidRepositoryNameExceptionSchema = z.any().openapi('InvalidRepositoryNameException')

const RepositoryDoesNotExistExceptionSchema = z.any().openapi('RepositoryDoesNotExistException')

const EncryptionIntegrityChecksFailedExceptionSchema = z
  .any()
  .openapi('EncryptionIntegrityChecksFailedException')

const EncryptionKeyAccessDeniedExceptionSchema = z
  .any()
  .openapi('EncryptionKeyAccessDeniedException')

const EncryptionKeyDisabledExceptionSchema = z.any().openapi('EncryptionKeyDisabledException')

const EncryptionKeyNotFoundExceptionSchema = z.any().openapi('EncryptionKeyNotFoundException')

const EncryptionKeyUnavailableExceptionSchema = z.any().openapi('EncryptionKeyUnavailableException')

const RepositoryNameListSchema = z.array(RepositoryNameSchema).openapi('RepositoryNameList')

const ErrorCodeSchema = z.string().openapi('ErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const BatchAssociateApprovalRuleTemplateWithRepositoriesErrorSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the association was not made.' }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that specifies whether the repository name was not valid or not found.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message that provides details about why the repository name was not found or not valid.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.',
    required: [],
  })
  .openapi('BatchAssociateApprovalRuleTemplateWithRepositoriesError')

const BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsListSchema = z
  .array(BatchAssociateApprovalRuleTemplateWithRepositoriesErrorSchema)
  .openapi('BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList')

const BatchAssociateApprovalRuleTemplateWithRepositoriesOutputSchema = z
  .object({
    associatedRepositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of names of the repositories that have been associated with the template.',
        }),
    ),
    errors: BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of any errors that might have occurred while attempting to create the association between the template and the repositories.',
        }),
    ),
  })
  .openapi({ required: ['associatedRepositoryNames', 'errors'] })
  .openapi('BatchAssociateApprovalRuleTemplateWithRepositoriesOutput')

const BatchAssociateApprovalRuleTemplateWithRepositoriesInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the template you want to associate with one or more repositories.',
        }),
    ),
    repositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The names of the repositories you want to associate with the template.</p> <note> <p>The length constraint limit is for each string in the array. The array itself can be empty.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'repositoryNames'],
    title: 'BatchAssociateApprovalRuleTemplateWithRepositoriesInput',
  })
  .openapi('BatchAssociateApprovalRuleTemplateWithRepositoriesInput')

const RepositoryNamesRequiredExceptionSchema = z.any().openapi('RepositoryNamesRequiredException')

const MaximumRepositoryNamesExceededExceptionSchema = z
  .any()
  .openapi('MaximumRepositoryNamesExceededException')

const PathSchema = z.string().openapi('Path')

const FileSizeSchema = z.int().openapi('FileSize')

const FileSizesSchema = z
  .object({
    source: FileSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The size of a file in the source of a merge or pull request.' }),
    ).exactOptional(),
    destination: FileSizeSchema.and(
      z
        .any()
        .openapi({
          description: 'The size of a file in the destination of a merge or pull request.',
        }),
    ).exactOptional(),
    base: FileSizeSchema.and(
      z
        .any()
        .openapi({ description: 'The size of a file in the base of a merge or pull request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the size of files in a merge or pull request.',
    required: [],
  })
  .openapi('FileSizes')

const FileModeTypeEnumSchema = z
  .enum(['EXECUTABLE', 'NORMAL', 'SYMLINK'])
  .openapi('FileModeTypeEnum')

const FileModesSchema = z
  .object({
    source: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The file mode of a file in the source of a merge or pull request.',
        }),
    ).exactOptional(),
    destination: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The file mode of a file in the destination of a merge or pull request.',
        }),
    ).exactOptional(),
    base: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The file mode of a file in the base of a merge or pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about file modes in a merge or pull request.',
    required: [],
  })
  .openapi('FileModes')

const ObjectTypeEnumSchema = z
  .enum(['FILE', 'DIRECTORY', 'GIT_LINK', 'SYMBOLIC_LINK'])
  .openapi('ObjectTypeEnum')

const ObjectTypesSchema = z
  .object({
    source: ObjectTypeEnumSchema.and(
      z.any().openapi({ description: 'The type of the object in the source branch.' }),
    ).exactOptional(),
    destination: ObjectTypeEnumSchema.and(
      z.any().openapi({ description: 'The type of the object in the destination branch.' }),
    ).exactOptional(),
    base: ObjectTypeEnumSchema.and(
      z.any().openapi({ description: 'The type of the object in the base commit of the merge.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the type of an object in a merge operation.',
    required: [],
  })
  .openapi('ObjectTypes')

const NumberOfConflictsSchema = z.int().openapi('NumberOfConflicts')

const CapitalBooleanSchema = z.boolean().openapi('CapitalBoolean')

const IsBinaryFileSchema = z
  .object({
    source: CapitalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The binary or non-binary status of file in the source of a merge or pull request.',
        }),
    ).exactOptional(),
    destination: CapitalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The binary or non-binary status of a file in the destination of a merge or pull request.',
        }),
    ).exactOptional(),
    base: CapitalBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The binary or non-binary status of a file in the base of a merge or pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about whether a file is binary or textual in a merge or pull request operation.',
    required: [],
  })
  .openapi('IsBinaryFile')

const IsContentConflictSchema = z.boolean().openapi('IsContentConflict')

const IsFileModeConflictSchema = z.boolean().openapi('IsFileModeConflict')

const IsObjectTypeConflictSchema = z.boolean().openapi('IsObjectTypeConflict')

const ChangeTypeEnumSchema = z.enum(['A', 'M', 'D']).openapi('ChangeTypeEnum')

const MergeOperationsSchema = z
  .object({
    source: ChangeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operation (add, modify, or delete) on a file in the source of a merge or pull request.',
        }),
    ).exactOptional(),
    destination: ChangeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The operation on a file in the destination of a merge or pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the file operation conflicts in a merge operation.',
    required: [],
  })
  .openapi('MergeOperations')

const ConflictMetadataSchema = z
  .object({
    filePath: PathSchema.and(
      z.any().openapi({ description: 'The path of the file that contains conflicts.' }),
    ).exactOptional(),
    fileSizes: FileSizesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file sizes of the file in the source, destination, and base of the merge.',
        }),
    ).exactOptional(),
    fileModes: FileModesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file modes of the file in the source, destination, and base of the merge.',
        }),
    ).exactOptional(),
    objectTypes: ObjectTypesSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about any object type conflicts in a merge operation.',
        }),
    ).exactOptional(),
    numberOfConflicts: NumberOfConflictsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of conflicts, including both hunk conflicts and metadata conflicts.',
        }),
    ).exactOptional(),
    isBinaryFile: IsBinaryFileSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.',
        }),
    ).exactOptional(),
    contentConflict: IsContentConflictSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value indicating whether there are conflicts in the content of a file.',
        }),
    ).exactOptional(),
    fileModeConflict: IsFileModeConflictSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value indicating whether there are conflicts in the file mode of a file.',
        }),
    ).exactOptional(),
    objectTypeConflict: IsObjectTypeConflictSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.',
        }),
    ).exactOptional(),
    mergeOperations: MergeOperationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the metadata for a conflict in a merge operation.',
    required: [],
  })
  .openapi('ConflictMetadata')

const IsHunkConflictSchema = z.boolean().openapi('IsHunkConflict')

const LineNumberSchema = z.int().openapi('LineNumber')

const HunkContentSchema = z.string().openapi('HunkContent')

const MergeHunkDetailSchema = z
  .object({
    startLine: LineNumberSchema.and(
      z.any().openapi({ description: 'The start position of the hunk in the merge result.' }),
    ).exactOptional(),
    endLine: LineNumberSchema.and(
      z.any().openapi({ description: 'The end position of the hunk in the merge result.' }),
    ).exactOptional(),
    hunkContent: HunkContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base-64 encoded content of the hunk merged region that might contain a conflict.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.',
    required: [],
  })
  .openapi('MergeHunkDetail')

const MergeHunkSchema = z
  .object({
    isConflict: IsHunkConflictSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value indicating whether a combination of hunks contains a conflict. Conflicts occur when the same file or the same lines in a file were modified in both the source and destination of a merge or pull request. Valid values include true, false, and null. True when the hunk represents a conflict and one or more files contains a line conflict. File mode conflicts in a merge do not set this to true.',
        }),
    ).exactOptional(),
    source: MergeHunkDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the merge hunk in the source of a merge or pull request.',
        }),
    ).exactOptional(),
    destination: MergeHunkDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the merge hunk in the destination of a merge or pull request.',
        }),
    ).exactOptional(),
    base: MergeHunkDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the merge hunk in the base of a merge or pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about merge hunks in a merge or pull request operation.',
    required: [],
  })
  .openapi('MergeHunk')

const MergeHunksSchema = z.array(MergeHunkSchema).openapi('MergeHunks')

const ConflictSchema = z
  .object({
    conflictMetadata: ConflictMetadataSchema.and(
      z.any().openapi({ description: 'Metadata about a conflict in a merge operation.' }),
    ).exactOptional(),
    mergeHunks: MergeHunksSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of hunks that contain the differences between files or lines causing the conflict.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about conflicts in a merge operation.', required: [] })
  .openapi('Conflict')

const ConflictsSchema = z.array(ConflictSchema).openapi('Conflicts')

const NextTokenSchema = z.string().openapi('NextToken')

const ExceptionNameSchema = z.string().openapi('ExceptionName')

const MessageSchema = z.string().openapi('Message')

const BatchDescribeMergeConflictsErrorSchema = z
  .object({
    filePath: PathSchema.and(z.any().openapi({ description: 'The path to the file.' })),
    exceptionName: ExceptionNameSchema.and(
      z.any().openapi({ description: 'The name of the exception.' }),
    ),
    message: MessageSchema.and(
      z.any().openapi({ description: 'The message provided by the exception.' }),
    ),
  })
  .openapi({
    required: ['filePath', 'exceptionName', 'message'],
    description: 'Returns information about errors in a BatchDescribeMergeConflicts operation.',
  })
  .openapi('BatchDescribeMergeConflictsError')

const BatchDescribeMergeConflictsErrorsSchema = z
  .array(BatchDescribeMergeConflictsErrorSchema)
  .openapi('BatchDescribeMergeConflictsErrors')

const ObjectIdSchema = z.string().openapi('ObjectId')

const BatchDescribeMergeConflictsOutputSchema = z
  .object({
    conflicts: ConflictsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
    errors: BatchDescribeMergeConflictsErrorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of any errors returned while describing the merge conflicts for each file.',
        }),
    ).exactOptional(),
    destinationCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the destination commit specifier that was used in the merge evaluation.',
        }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the source commit specifier that was used in the merge evaluation.',
        }),
    ),
    baseCommitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The commit ID of the merge base.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['conflicts', 'destinationCommitId', 'sourceCommitId'] })
  .openapi('BatchDescribeMergeConflictsOutput')

const CommitNameSchema = z.string().openapi('CommitName')

const MergeOptionTypeEnumSchema = z
  .enum(['FAST_FORWARD_MERGE', 'SQUASH_MERGE', 'THREE_WAY_MERGE'])
  .openapi('MergeOptionTypeEnum')

const MaxResultsSchema = z.int().openapi('MaxResults')

const FilePathsSchema = z.array(PathSchema).openapi('FilePaths')

const ConflictDetailLevelTypeEnumSchema = z
  .enum(['FILE_LEVEL', 'LINE_LEVEL'])
  .openapi('ConflictDetailLevelTypeEnum')

const ConflictResolutionStrategyTypeEnumSchema = z
  .enum(['NONE', 'ACCEPT_SOURCE', 'ACCEPT_DESTINATION', 'AUTOMERGE'])
  .openapi('ConflictResolutionStrategyTypeEnum')

const BatchDescribeMergeConflictsInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the merge conflicts you want to review.',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    mergeOption: MergeOptionTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The merge option or strategy you want to use to merge the code.',
        }),
    ),
    maxMergeHunks: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of merge hunks to include in the output.' }),
    ).exactOptional(),
    maxConflictFiles: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of files to include in the output.' }),
    ).exactOptional(),
    filePaths: FilePathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.',
        }),
    ).exactOptional(),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'repositoryName',
      'destinationCommitSpecifier',
      'sourceCommitSpecifier',
      'mergeOption',
    ],
    title: 'BatchDescribeMergeConflictsInput',
  })
  .openapi('BatchDescribeMergeConflictsInput')

const MergeOptionRequiredExceptionSchema = z.any().openapi('MergeOptionRequiredException')

const InvalidMergeOptionExceptionSchema = z.any().openapi('InvalidMergeOptionException')

const InvalidContinuationTokenExceptionSchema = z.any().openapi('InvalidContinuationTokenException')

const CommitRequiredExceptionSchema = z.any().openapi('CommitRequiredException')

const CommitDoesNotExistExceptionSchema = z.any().openapi('CommitDoesNotExistException')

const InvalidCommitExceptionSchema = z.any().openapi('InvalidCommitException')

const TipsDivergenceExceededExceptionSchema = z.any().openapi('TipsDivergenceExceededException')

const InvalidMaxConflictFilesExceptionSchema = z.any().openapi('InvalidMaxConflictFilesException')

const InvalidMaxMergeHunksExceptionSchema = z.any().openapi('InvalidMaxMergeHunksException')

const InvalidConflictDetailLevelExceptionSchema = z
  .any()
  .openapi('InvalidConflictDetailLevelException')

const InvalidConflictResolutionStrategyExceptionSchema = z
  .any()
  .openapi('InvalidConflictResolutionStrategyException')

const MaximumFileContentToLoadExceededExceptionSchema = z
  .any()
  .openapi('MaximumFileContentToLoadExceededException')

const MaximumItemsToCompareExceededExceptionSchema = z
  .any()
  .openapi('MaximumItemsToCompareExceededException')

const BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where the association with the template was not able to be removed.',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that specifies whether the repository name was not valid or not found.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message that provides details about why the repository name was either not found or not valid.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.',
    required: [],
  })
  .openapi('BatchDisassociateApprovalRuleTemplateFromRepositoriesError')

const BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsListSchema = z
  .array(BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorSchema)
  .openapi('BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList')

const BatchDisassociateApprovalRuleTemplateFromRepositoriesOutputSchema = z
  .object({
    disassociatedRepositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of repository names that have had their association with the template removed.',
        }),
    ),
    errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.',
        }),
    ),
  })
  .openapi({ required: ['disassociatedRepositoryNames', 'errors'] })
  .openapi('BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput')

const BatchDisassociateApprovalRuleTemplateFromRepositoriesInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the template that you want to disassociate from one or more repositories.',
        }),
    ),
    repositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The repository names that you want to disassociate from the approval rule template.</p> <note> <p>The length constraint limit is for each string in the array. The array itself can be empty.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'repositoryNames'],
    title: 'BatchDisassociateApprovalRuleTemplateFromRepositoriesInput',
  })
  .openapi('BatchDisassociateApprovalRuleTemplateFromRepositoriesInput')

const ParentListSchema = z.array(ObjectIdSchema).openapi('ParentList')

const NameSchema = z.string().openapi('Name')

const EmailSchema = z.string().openapi('Email')

const DateSchema = z.string().openapi('Date')

const UserInfoSchema = z
  .object({
    name: NameSchema.and(
      z.any().openapi({ description: 'The name of the user who made the specified commit.' }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address associated with the user who made the commit, if any.',
        }),
    ).exactOptional(),
    date: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the specified commit was commited, in timestamp format with GMT offset.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the user who made a specified commit.', required: [] })
  .openapi('UserInfo')

const AdditionalDataSchema = z.string().openapi('AdditionalData')

const CommitSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The full SHA ID of the specified commit. ' }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z.any().openapi({ description: 'Tree information for the specified commit.' }),
    ).exactOptional(),
    parents: ParentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.',
        }),
    ).exactOptional(),
    message: MessageSchema.and(
      z.any().openapi({ description: 'The commit message associated with the specified commit.' }),
    ).exactOptional(),
    author: UserInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.',
        }),
    ).exactOptional(),
    committer: UserInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git.</p> <p>For more information about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git by Scott Chacon and Ben Straub.</p>',
        }),
    ).exactOptional(),
    additionalData: AdditionalDataSchema.and(
      z.any().openapi({ description: 'Any other data associated with the specified commit.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a specific commit.', required: [] })
  .openapi('Commit')

const CommitObjectsListSchema = z.array(CommitSchema).openapi('CommitObjectsList')

const BatchGetCommitsErrorSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A commit ID that either could not be found or was not in a valid format.',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that specifies whether the commit ID was not valid or not found.',
        }),
    ).exactOptional(),
    errorMessage: ErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message that provides detail about why the commit ID either was not found or was not valid.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about errors in a BatchGetCommits operation.',
    required: [],
  })
  .openapi('BatchGetCommitsError')

const BatchGetCommitsErrorsListSchema = z
  .array(BatchGetCommitsErrorSchema)
  .openapi('BatchGetCommitsErrorsList')

const BatchGetCommitsOutputSchema = z
  .object({
    commits: CommitObjectsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of commit data type objects, each of which contains information about a specified commit.',
        }),
    ).exactOptional(),
    errors: BatchGetCommitsErrorsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns any commit IDs for which information could not be found. For example, if one of the commit IDs was a shortened SHA ID or that commit was not found in the specified repository, the ID returns an error object with more information.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetCommitsOutput')

const CommitIdsInputListSchema = z.array(ObjectIdSchema).openapi('CommitIdsInputList')

const BatchGetCommitsInputSchema = z
  .object({
    commitIds: CommitIdsInputListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full commit IDs of the commits to get information about.</p> <note> <p>You must supply the full SHA IDs of each commit. You cannot use shortened SHA IDs.</p> </note>',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository that contains the commits.' }),
    ),
  })
  .openapi({ required: ['commitIds', 'repositoryName'], title: 'BatchGetCommitsInput' })
  .openapi('BatchGetCommitsInput')

const CommitIdsListRequiredExceptionSchema = z.any().openapi('CommitIdsListRequiredException')

const CommitIdsLimitExceededExceptionSchema = z.any().openapi('CommitIdsLimitExceededException')

const AccountIdSchema = z.string().openapi('AccountId')

const RepositoryIdSchema = z.string().openapi('RepositoryId')

const RepositoryDescriptionSchema = z.string().max(1000).openapi('RepositoryDescription')

const BranchNameSchema = z.string().min(1).max(256).openapi('BranchName')

const LastModifiedDateSchema = z.iso.datetime({ offset: true }).openapi('LastModifiedDate')

const CreationDateSchema = z.iso.datetime({ offset: true }).openapi('CreationDate')

const CloneUrlHttpSchema = z.string().openapi('CloneUrlHttp')

const CloneUrlSshSchema = z.string().openapi('CloneUrlSsh')

const ArnSchema = z.string().openapi('Arn')

const RepositoryMetadataSchema = z
  .object({
    accountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The ID of the AWS account associated with the repository.' }),
    ).exactOptional(),
    repositoryId: RepositoryIdSchema.and(
      z.any().openapi({ description: 'The ID of the repository.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: "The repository's name." }),
    ).exactOptional(),
    repositoryDescription: RepositoryDescriptionSchema.and(
      z.any().openapi({ description: 'A comment or description about the repository.' }),
    ).exactOptional(),
    defaultBranch: BranchNameSchema.and(
      z.any().openapi({ description: "The repository's default branch name." }),
    ).exactOptional(),
    lastModifiedDate: LastModifiedDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the repository was last modified, in timestamp format.',
        }),
    ).exactOptional(),
    creationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the repository was created, in timestamp format.',
        }),
    ).exactOptional(),
    cloneUrlHttp: CloneUrlHttpSchema.and(
      z.any().openapi({ description: 'The URL to use for cloning the repository over HTTPS.' }),
    ).exactOptional(),
    cloneUrlSsh: CloneUrlSshSchema.and(
      z.any().openapi({ description: 'The URL to use for cloning the repository over SSH.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the repository.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a repository.', required: [] })
  .openapi('RepositoryMetadata')

const RepositoryMetadataListSchema = z
  .array(RepositoryMetadataSchema)
  .openapi('RepositoryMetadataList')

const RepositoryNotFoundListSchema = z.array(RepositoryNameSchema).openapi('RepositoryNotFoundList')

const BatchGetRepositoriesOutputSchema = z
  .object({
    repositories: RepositoryMetadataListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of repositories returned by the batch get repositories operation.',
        }),
    ).exactOptional(),
    repositoriesNotFound: RepositoryNotFoundListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of repository names for which information could not be found.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a batch get repositories operation.',
    required: [],
  })
  .openapi('BatchGetRepositoriesOutput')

const BatchGetRepositoriesInputSchema = z
  .object({
    repositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The names of the repositories to get information about.</p> <note> <p>The length constraint limit is for each string in the array. The array itself can be empty.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['repositoryNames'],
    title: 'BatchGetRepositoriesInput',
    description: 'Represents the input of a batch get repositories operation.',
  })
  .openapi('BatchGetRepositoriesInput')

const ApprovalRuleTemplateIdSchema = z.string().openapi('ApprovalRuleTemplateId')

const ApprovalRuleTemplateDescriptionSchema = z
  .string()
  .min(0)
  .max(1000)
  .openapi('ApprovalRuleTemplateDescription')

const ApprovalRuleTemplateContentSchema = z
  .string()
  .min(1)
  .max(3000)
  .openapi('ApprovalRuleTemplateContent')

const RuleContentSha256Schema = z.string().openapi('RuleContentSha256')

const ApprovalRuleTemplateSchema = z
  .object({
    approvalRuleTemplateId: ApprovalRuleTemplateIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the approval rule template.' }),
    ).exactOptional(),
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule template.' }),
    ).exactOptional(),
    approvalRuleTemplateDescription: ApprovalRuleTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'The description of the approval rule template.' }),
    ).exactOptional(),
    approvalRuleTemplateContent: ApprovalRuleTemplateContentSchema.and(
      z.any().openapi({ description: 'The content of the approval rule template.' }),
    ).exactOptional(),
    ruleContentSha256: RuleContentSha256Schema.and(
      z
        .any()
        .openapi({
          description: 'The SHA-256 hash signature for the content of the approval rule template.',
        }),
    ).exactOptional(),
    lastModifiedDate: LastModifiedDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date the approval rule template was most recently changed, in timestamp format.',
        }),
    ).exactOptional(),
    creationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the approval rule template was created, in timestamp format.',
        }),
    ).exactOptional(),
    lastModifiedUser: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about an approval rule template.', required: [] })
  .openapi('ApprovalRuleTemplate')

const CreateApprovalRuleTemplateOutputSchema = z
  .object({
    approvalRuleTemplate: ApprovalRuleTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'The content and structure of the created approval rule template.',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplate'] })
  .openapi('CreateApprovalRuleTemplateOutput')

const CreateApprovalRuleTemplateInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the approval rule template. Provide descriptive names, because this name is applied to the approval rules created automatically in associated repositories.',
        }),
    ),
    approvalRuleTemplateContent: ApprovalRuleTemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content of the approval rule that is created on pull requests in associated repositories. If you specify one or more destination references (branches), approval rules are created in an associated repository only if their destination references (branches) match those specified in the template.</p> <note> <p>When you create the content of the approval rule template, you can specify approvers in an approval pool in one of two ways:</p> <ul> <li> <p> <b>CodeCommitApprovers</b>: This option only requires an AWS account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the AWS account <i>123456789012</i> and <i>Mary_Major</i>, all of the following are counted as approvals coming from that user:</p> <ul> <li> <p>An IAM user in the account (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p> </li> <li> <p>A federated user identified in IAM as Mary_Major (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p> </li> </ul> <p>This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of <i>Mary_Major</i> (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>) unless you include a wildcard (*Mary_Major).</p> </li> <li> <p> <b>Fully qualified ARN</b>: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role. </p> </li> </ul> <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> </note>',
        }),
    ),
    approvalRuleTemplateDescription: ApprovalRuleTemplateDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the approval rule template. Consider providing a description that explains what this template does and when it might be appropriate to associate it with repositories.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'approvalRuleTemplateContent'],
    title: 'CreateApprovalRuleTemplateInput',
  })
  .openapi('CreateApprovalRuleTemplateInput')

const ApprovalRuleTemplateNameAlreadyExistsExceptionSchema = z
  .any()
  .openapi('ApprovalRuleTemplateNameAlreadyExistsException')

const ApprovalRuleTemplateContentRequiredExceptionSchema = z
  .any()
  .openapi('ApprovalRuleTemplateContentRequiredException')

const InvalidApprovalRuleTemplateContentExceptionSchema = z
  .any()
  .openapi('InvalidApprovalRuleTemplateContentException')

const InvalidApprovalRuleTemplateDescriptionExceptionSchema = z
  .any()
  .openapi('InvalidApprovalRuleTemplateDescriptionException')

const NumberOfRuleTemplatesExceededExceptionSchema = z
  .any()
  .openapi('NumberOfRuleTemplatesExceededException')

const CommitIdSchema = z.string().openapi('CommitId')

const CreateBranchInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository in which you want to create the new branch.',
        }),
    ),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the new branch to create.' }),
    ),
    commitId: CommitIdSchema.and(
      z.any().openapi({ description: 'The ID of the commit to point the new branch to.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'branchName', 'commitId'],
    title: 'CreateBranchInput',
    description: 'Represents the input of a create branch operation.',
  })
  .openapi('CreateBranchInput')

const BranchNameRequiredExceptionSchema = z.any().openapi('BranchNameRequiredException')

const BranchNameExistsExceptionSchema = z.any().openapi('BranchNameExistsException')

const InvalidBranchNameExceptionSchema = z.any().openapi('InvalidBranchNameException')

const CommitIdRequiredExceptionSchema = z.any().openapi('CommitIdRequiredException')

const InvalidCommitIdExceptionSchema = z.any().openapi('InvalidCommitIdException')

const FileMetadataSchema = z
  .object({
    absolutePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full path to the file to be added or updated, including the name of the file.',
        }),
    ).exactOptional(),
    blobId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The blob ID that contains the file information.' }),
    ).exactOptional(),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A file to be added, updated, or deleted as part of a commit.',
    required: [],
  })
  .openapi('FileMetadata')

const FilesMetadataSchema = z.array(FileMetadataSchema).openapi('FilesMetadata')

const CreateCommitOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit that contains your committed file changes.',
        }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.',
        }),
    ).exactOptional(),
    filesAdded: FilesMetadataSchema.and(
      z.any().openapi({ description: 'The files added as part of the committed file changes.' }),
    ).exactOptional(),
    filesUpdated: FilesMetadataSchema.and(
      z.any().openapi({ description: 'The files updated as part of the commited file changes.' }),
    ).exactOptional(),
    filesDeleted: FilesMetadataSchema.and(
      z.any().openapi({ description: 'The files deleted as part of the committed file changes.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCommitOutput')

const KeepEmptyFoldersSchema = z.boolean().openapi('KeepEmptyFolders')

const FileContentSchema = z.string().max(6291456).openapi('FileContent')

const IsMoveSchema = z.boolean().openapi('IsMove')

const SourceFileSpecifierSchema = z
  .object({
    filePath: PathSchema.and(
      z
        .any()
        .openapi({ description: 'The full path to the file, including the name of the file.' }),
    ),
    isMove: IsMoveSchema.and(
      z.any().openapi({ description: 'Whether to remove the source file from the parent commit.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['filePath'],
    description: 'Information about a source file that is part of changes made in a commit.',
  })
  .openapi('SourceFileSpecifier')

const PutFileEntrySchema = z
  .object({
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full path to the file in the repository, including the name of the file.',
        }),
    ),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.',
        }),
    ).exactOptional(),
    fileContent: FileContentSchema.and(
      z
        .any()
        .openapi({ description: 'The content of the file, if a source file is not specified.' }),
    ).exactOptional(),
    sourceFile: SourceFileSpecifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name and full path of the file that contains the changes you want to make as part of the commit, if you are not providing the file content directly.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['filePath'],
    description: 'Information about a file added or updated as part of a commit.',
  })
  .openapi('PutFileEntry')

const PutFileEntriesSchema = z.array(PutFileEntrySchema).openapi('PutFileEntries')

const DeleteFileEntrySchema = z
  .object({
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description: 'The full path of the file to be deleted, including the name of the file.',
        }),
    ),
  })
  .openapi({ required: ['filePath'], description: 'A file that is deleted as part of a commit.' })
  .openapi('DeleteFileEntry')

const DeleteFileEntriesSchema = z.array(DeleteFileEntrySchema).openapi('DeleteFileEntries')

const SetFileModeEntrySchema = z
  .object({
    filePath: PathSchema.and(
      z
        .any()
        .openapi({ description: 'The full path to the file, including the name of the file.' }),
    ),
    fileMode: FileModeTypeEnumSchema.and(
      z.any().openapi({ description: 'The file mode for the file.' }),
    ),
  })
  .openapi({
    required: ['filePath', 'fileMode'],
    description: 'Information about the file mode changes.',
  })
  .openapi('SetFileModeEntry')

const SetFileModeEntriesSchema = z.array(SetFileModeEntrySchema).openapi('SetFileModeEntries')

const CreateCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository where you create the commit.' }),
    ),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the branch where you create the commit.' }),
    ),
    parentCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the commit that is the parent of the commit you create. Not required if this is an empty repository.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the person who created the commit.' }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit message you want to include in the commit. Commit messages are limited to 256 KB. If no message is specified, a default message is used.',
        }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a ..gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    putFiles: PutFileEntriesSchema.and(
      z.any().openapi({ description: 'The files to add or update in this commit.' }),
    ).exactOptional(),
    deleteFiles: DeleteFileEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The files to delete in this commit. These files still exist in earlier commits.',
        }),
    ).exactOptional(),
    setFileModes: SetFileModeEntriesSchema.and(
      z.any().openapi({ description: 'The file modes to update for files in this commit.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'branchName'], title: 'CreateCommitInput' })
  .openapi('CreateCommitInput')

const ParentCommitIdRequiredExceptionSchema = z.any().openapi('ParentCommitIdRequiredException')

const InvalidParentCommitIdExceptionSchema = z.any().openapi('InvalidParentCommitIdException')

const ParentCommitDoesNotExistExceptionSchema = z.any().openapi('ParentCommitDoesNotExistException')

const ParentCommitIdOutdatedExceptionSchema = z.any().openapi('ParentCommitIdOutdatedException')

const BranchDoesNotExistExceptionSchema = z.any().openapi('BranchDoesNotExistException')

const BranchNameIsTagNameExceptionSchema = z.any().openapi('BranchNameIsTagNameException')

const FileEntryRequiredExceptionSchema = z.any().openapi('FileEntryRequiredException')

const MaximumFileEntriesExceededExceptionSchema = z
  .any()
  .openapi('MaximumFileEntriesExceededException')

const PutFileEntryConflictExceptionSchema = z.any().openapi('PutFileEntryConflictException')

const SourceFileOrContentRequiredExceptionSchema = z
  .any()
  .openapi('SourceFileOrContentRequiredException')

const FileContentAndSourceFileSpecifiedExceptionSchema = z
  .any()
  .openapi('FileContentAndSourceFileSpecifiedException')

const PathRequiredExceptionSchema = z.any().openapi('PathRequiredException')

const InvalidPathExceptionSchema = z.any().openapi('InvalidPathException')

const SamePathRequestExceptionSchema = z.any().openapi('SamePathRequestException')

const FileDoesNotExistExceptionSchema = z.any().openapi('FileDoesNotExistException')

const FileContentSizeLimitExceededExceptionSchema = z
  .any()
  .openapi('FileContentSizeLimitExceededException')

const FolderContentSizeLimitExceededExceptionSchema = z
  .any()
  .openapi('FolderContentSizeLimitExceededException')

const InvalidDeletionParameterExceptionSchema = z.any().openapi('InvalidDeletionParameterException')

const RestrictedSourceFileExceptionSchema = z.any().openapi('RestrictedSourceFileException')

const FileModeRequiredExceptionSchema = z.any().openapi('FileModeRequiredException')

const InvalidFileModeExceptionSchema = z.any().openapi('InvalidFileModeException')

const NameLengthExceededExceptionSchema = z.any().openapi('NameLengthExceededException')

const InvalidEmailExceptionSchema = z.any().openapi('InvalidEmailException')

const CommitMessageLengthExceededExceptionSchema = z
  .any()
  .openapi('CommitMessageLengthExceededException')

const NoChangeExceptionSchema = z.any().openapi('NoChangeException')

const FileNameConflictsWithDirectoryNameExceptionSchema = z
  .any()
  .openapi('FileNameConflictsWithDirectoryNameException')

const DirectoryNameConflictsWithFileNameExceptionSchema = z
  .any()
  .openapi('DirectoryNameConflictsWithFileNameException')

const FilePathConflictsWithSubmodulePathExceptionSchema = z
  .any()
  .openapi('FilePathConflictsWithSubmodulePathException')

const PullRequestIdSchema = z.string().openapi('PullRequestId')

const TitleSchema = z.string().max(150).openapi('Title')

const DescriptionSchema = z.string().max(10240).openapi('Description')

const PullRequestStatusEnumSchema = z.enum(['OPEN', 'CLOSED']).openapi('PullRequestStatusEnum')

const ReferenceNameSchema = z.string().openapi('ReferenceName')

const IsMergedSchema = z.boolean().openapi('IsMerged')

const MergeMetadataSchema = z
  .object({
    isMerged: IsMergedSchema.and(
      z
        .any()
        .openapi({ description: 'A Boolean value indicating whether the merge has been made.' }),
    ).exactOptional(),
    mergedBy: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who merged the branches.',
        }),
    ).exactOptional(),
    mergeCommitId: CommitIdSchema.and(
      z.any().openapi({ description: 'The commit ID for the merge commit, if any.' }),
    ).exactOptional(),
    mergeOption: MergeOptionTypeEnumSchema.and(
      z.any().openapi({ description: 'The merge strategy used in the merge.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.',
    required: [],
  })
  .openapi('MergeMetadata')

const PullRequestTargetSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the pull request source and destination branches.',
        }),
    ).exactOptional(),
    sourceReference: ReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch of the repository that contains the changes for the pull request. Also known as the source branch.',
        }),
    ).exactOptional(),
    destinationReference: ReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch of the repository where the pull request changes are merged. Also known as the destination branch. ',
        }),
    ).exactOptional(),
    destinationCommit: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.',
        }),
    ).exactOptional(),
    sourceCommit: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the tip of the source branch used to create the pull request. If the pull request branch is updated by a push while the pull request is open, the commit ID changes to reflect the new tip of the branch.',
        }),
    ).exactOptional(),
    mergeBase: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the most recent commit that the source branch and the destination branch have in common.',
        }),
    ).exactOptional(),
    mergeMetadata: MergeMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns metadata about the state of the merge, including whether the merge has been made.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a pull request target.', required: [] })
  .openapi('PullRequestTarget')

const PullRequestTargetListSchema = z
  .array(PullRequestTargetSchema)
  .openapi('PullRequestTargetList')

const ClientRequestTokenSchema = z.string().openapi('ClientRequestToken')

const RevisionIdSchema = z.string().openapi('RevisionId')

const ApprovalRuleIdSchema = z.string().openapi('ApprovalRuleId')

const ApprovalRuleNameSchema = z.string().min(1).max(100).openapi('ApprovalRuleName')

const ApprovalRuleContentSchema = z.string().min(1).max(3000).openapi('ApprovalRuleContent')

const OriginApprovalRuleTemplateSchema = z
  .object({
    approvalRuleTemplateId: ApprovalRuleTemplateIdSchema.and(
      z.any().openapi({ description: 'The ID of the template that created the approval rule.' }),
    ).exactOptional(),
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the template that created the approval rule.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about the template that created the approval rule for a pull request.',
    required: [],
  })
  .openapi('OriginApprovalRuleTemplate')

const ApprovalRuleSchema = z
  .object({
    approvalRuleId: ApprovalRuleIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the approval rule.' }),
    ).exactOptional(),
    approvalRuleName: ApprovalRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule.' }),
    ).exactOptional(),
    approvalRuleContent: ApprovalRuleContentSchema.and(
      z.any().openapi({ description: 'The content of the approval rule.' }),
    ).exactOptional(),
    ruleContentSha256: RuleContentSha256Schema.and(
      z
        .any()
        .openapi({
          description: 'The SHA-256 hash signature for the content of the approval rule.',
        }),
    ).exactOptional(),
    lastModifiedDate: LastModifiedDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the approval rule was most recently changed, in timestamp format.',
        }),
    ).exactOptional(),
    creationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({ description: 'The date the approval rule was created, in timestamp format.' }),
    ).exactOptional(),
    lastModifiedUser: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.',
        }),
    ).exactOptional(),
    originApprovalRuleTemplate: OriginApprovalRuleTemplateSchema.and(
      z.any().openapi({ description: 'The approval rule template used to create the rule.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about an approval rule.', required: [] })
  .openapi('ApprovalRule')

const ApprovalRulesListSchema = z.array(ApprovalRuleSchema).openapi('ApprovalRulesList')

const PullRequestSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request. ' }),
    ).exactOptional(),
    title: TitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-defined title of the pull request. This title is displayed in the list of pull requests to other repository users.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.',
        }),
    ).exactOptional(),
    lastActivityDate: LastModifiedDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The day and time of the last user or system activity on the pull request, in timestamp format.',
        }),
    ).exactOptional(),
    creationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the pull request was originally created, in timestamp format.',
        }),
    ).exactOptional(),
    pullRequestStatus: PullRequestStatusEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.',
        }),
    ).exactOptional(),
    authorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the user who created the pull request.',
        }),
    ).exactOptional(),
    pullRequestTargets: PullRequestTargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The targets of the pull request, including the source branch and destination branch for the pull request.',
        }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.',
        }),
    ).exactOptional(),
    revisionId: RevisionIdSchema.and(
      z.any().openapi({ description: 'The system-generated revision ID for the pull request.' }),
    ).exactOptional(),
    approvalRules: ApprovalRulesListSchema.and(
      z.any().openapi({ description: 'The approval rules applied to the pull request.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a pull request.', required: [] })
  .openapi('PullRequest')

const CreatePullRequestOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z.any().openapi({ description: 'Information about the newly created pull request.' }),
    ),
  })
  .openapi({ required: ['pullRequest'] })
  .openapi('CreatePullRequestOutput')

const TargetSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the pull request.' }),
    ),
    sourceReference: ReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch of the repository that contains the changes for the pull request. Also known as the source branch.',
        }),
    ),
    destinationReference: ReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch of the repository where the pull request changes are merged. Also known as the destination branch.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceReference'],
    description: 'Returns information about a target for a pull request.',
  })
  .openapi('Target')

const TargetListSchema = z.array(TargetSchema).openapi('TargetList')

const CreatePullRequestInputSchema = z
  .object({
    title: TitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title of the pull request. This title is used to identify the pull request to other users in the repository.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the pull request.' }),
    ).exactOptional(),
    targets: TargetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The targets for the pull request, including the source of the code to be reviewed (the source branch) and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an idempotency token is created for you.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['title', 'targets'], title: 'CreatePullRequestInput' })
  .openapi('CreatePullRequestInput')

const ClientRequestTokenRequiredExceptionSchema = z
  .any()
  .openapi('ClientRequestTokenRequiredException')

const InvalidClientRequestTokenExceptionSchema = z
  .any()
  .openapi('InvalidClientRequestTokenException')

const IdempotencyParameterMismatchExceptionSchema = z
  .any()
  .openapi('IdempotencyParameterMismatchException')

const ReferenceNameRequiredExceptionSchema = z.any().openapi('ReferenceNameRequiredException')

const InvalidReferenceNameExceptionSchema = z.any().openapi('InvalidReferenceNameException')

const ReferenceDoesNotExistExceptionSchema = z.any().openapi('ReferenceDoesNotExistException')

const ReferenceTypeNotSupportedExceptionSchema = z
  .any()
  .openapi('ReferenceTypeNotSupportedException')

const TitleRequiredExceptionSchema = z.any().openapi('TitleRequiredException')

const InvalidTitleExceptionSchema = z.any().openapi('InvalidTitleException')

const InvalidDescriptionExceptionSchema = z.any().openapi('InvalidDescriptionException')

const TargetsRequiredExceptionSchema = z.any().openapi('TargetsRequiredException')

const InvalidTargetsExceptionSchema = z.any().openapi('InvalidTargetsException')

const TargetRequiredExceptionSchema = z.any().openapi('TargetRequiredException')

const InvalidTargetExceptionSchema = z.any().openapi('InvalidTargetException')

const MultipleRepositoriesInPullRequestExceptionSchema = z
  .any()
  .openapi('MultipleRepositoriesInPullRequestException')

const MaximumOpenPullRequestsExceededExceptionSchema = z
  .any()
  .openapi('MaximumOpenPullRequestsExceededException')

const SourceAndDestinationAreSameExceptionSchema = z
  .any()
  .openapi('SourceAndDestinationAreSameException')

const CreatePullRequestApprovalRuleOutputSchema = z
  .object({
    approvalRule: ApprovalRuleSchema.and(
      z.any().openapi({ description: 'Information about the created approval rule.' }),
    ),
  })
  .openapi({ required: ['approvalRule'] })
  .openapi('CreatePullRequestApprovalRuleOutput')

const CreatePullRequestApprovalRuleInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request for which you want to create the approval rule.',
        }),
    ),
    approvalRuleName: ApprovalRuleNameSchema.and(
      z.any().openapi({ description: 'The name for the approval rule.' }),
    ),
    approvalRuleContent: ApprovalRuleContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information about approval pools, see the AWS CodeCommit User Guide.</p> <note> <p>When you create the content of the approval rule, you can specify approvers in an approval pool in one of two ways:</p> <ul> <li> <p> <b>CodeCommitApprovers</b>: This option only requires an AWS account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the AWS account <i>123456789012</i> and <i>Mary_Major</i>, all of the following would be counted as approvals coming from that user:</p> <ul> <li> <p>An IAM user in the account (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p> </li> <li> <p>A federated user identified in IAM as Mary_Major (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p> </li> </ul> <p>This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of <i>Mary_Major</i> (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>) unless you include a wildcard (*Mary_Major).</p> </li> <li> <p> <b>Fully qualified ARN</b>: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role. </p> </li> </ul> <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'approvalRuleName', 'approvalRuleContent'],
    title: 'CreatePullRequestApprovalRuleInput',
  })
  .openapi('CreatePullRequestApprovalRuleInput')

const ApprovalRuleNameRequiredExceptionSchema = z.any().openapi('ApprovalRuleNameRequiredException')

const InvalidApprovalRuleNameExceptionSchema = z.any().openapi('InvalidApprovalRuleNameException')

const ApprovalRuleNameAlreadyExistsExceptionSchema = z
  .any()
  .openapi('ApprovalRuleNameAlreadyExistsException')

const ApprovalRuleContentRequiredExceptionSchema = z
  .any()
  .openapi('ApprovalRuleContentRequiredException')

const InvalidApprovalRuleContentExceptionSchema = z
  .any()
  .openapi('InvalidApprovalRuleContentException')

const NumberOfRulesExceededExceptionSchema = z.any().openapi('NumberOfRulesExceededException')

const PullRequestDoesNotExistExceptionSchema = z.any().openapi('PullRequestDoesNotExistException')

const InvalidPullRequestIdExceptionSchema = z.any().openapi('InvalidPullRequestIdException')

const PullRequestIdRequiredExceptionSchema = z.any().openapi('PullRequestIdRequiredException')

const PullRequestAlreadyClosedExceptionSchema = z.any().openapi('PullRequestAlreadyClosedException')

const CreateRepositoryOutputSchema = z
  .object({
    repositoryMetadata: RepositoryMetadataSchema.and(
      z.any().openapi({ description: 'Information about the newly created repository.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a create repository operation.', required: [] })
  .openapi('CreateRepositoryOutput')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagsMapSchema = z.record(z.string(), TagValueSchema).openapi('TagsMap')

const CreateRepositoryInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the new repository to be created.</p> <note> <p>The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the <i>AWS CodeCommit User Guide</i>. The suffix .git is prohibited.</p> </note>',
        }),
    ),
    repositoryDescription: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A comment or description about the new repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>',
        }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more tag key-value pairs to use when tagging this repository.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'CreateRepositoryInput',
    description: 'Represents the input of a create repository operation.',
  })
  .openapi('CreateRepositoryInput')

const RepositoryNameExistsExceptionSchema = z.any().openapi('RepositoryNameExistsException')

const InvalidRepositoryDescriptionExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryDescriptionException')

const RepositoryLimitExceededExceptionSchema = z.any().openapi('RepositoryLimitExceededException')

const InvalidTagsMapExceptionSchema = z.any().openapi('InvalidTagsMapException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const InvalidSystemTagUsageExceptionSchema = z.any().openapi('InvalidSystemTagUsageException')

const TagPolicyExceptionSchema = z.any().openapi('TagPolicyException')

const CreateUnreferencedMergeCommitOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The full commit ID of the commit that contains your merge results.',
        }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains the merge results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUnreferencedMergeCommitOutput')

const ReplacementTypeEnumSchema = z
  .enum(['KEEP_BASE', 'KEEP_SOURCE', 'KEEP_DESTINATION', 'USE_NEW_CONTENT'])
  .openapi('ReplacementTypeEnum')

const ReplaceContentEntrySchema = z
  .object({
    filePath: PathSchema.and(z.any().openapi({ description: 'The path of the conflicting file.' })),
    replacementType: ReplacementTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The replacement type to use when determining how to resolve the conflict.',
        }),
    ),
    content: FileContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.',
        }),
    ).exactOptional(),
    fileMode: FileModeTypeEnumSchema.and(
      z.any().openapi({ description: 'The file mode to apply during conflict resoltion.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['filePath', 'replacementType'],
    description:
      'Information about a replacement content entry in the conflict of a merge or pull request operation.',
  })
  .openapi('ReplaceContentEntry')

const ReplaceContentEntriesSchema = z
  .array(ReplaceContentEntrySchema)
  .openapi('ReplaceContentEntries')

const ConflictResolutionSchema = z
  .object({
    replaceContents: ReplaceContentEntriesSchema.and(
      z
        .any()
        .openapi({
          description: 'Files to have content replaced as part of the merge conflict resolution.',
        }),
    ).exactOptional(),
    deleteFiles: DeleteFileEntriesSchema.and(
      z
        .any()
        .openapi({ description: 'Files to be deleted as part of the merge conflict resolution.' }),
    ).exactOptional(),
    setFileModes: SetFileModeEntriesSchema.and(
      z
        .any()
        .openapi({
          description: 'File modes that are set as part of the merge conflict resolution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
    required: [],
  })
  .openapi('ConflictResolution')

const CreateUnreferencedMergeCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where you want to create the unreferenced merge commit.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    mergeOption: MergeOptionTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The merge option or strategy you want to use to merge the code.',
        }),
    ),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the unreferenced commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address for the person who created the unreferenced commit.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z.any().openapi({ description: 'The commit message for the unreferenced commit.' }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    conflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'repositoryName',
      'sourceCommitSpecifier',
      'destinationCommitSpecifier',
      'mergeOption',
    ],
    title: 'CreateUnreferencedMergeCommitInput',
  })
  .openapi('CreateUnreferencedMergeCommitInput')

const InvalidConflictResolutionExceptionSchema = z
  .any()
  .openapi('InvalidConflictResolutionException')

const ManualMergeRequiredExceptionSchema = z.any().openapi('ManualMergeRequiredException')

const MaximumConflictResolutionEntriesExceededExceptionSchema = z
  .any()
  .openapi('MaximumConflictResolutionEntriesExceededException')

const MultipleConflictResolutionEntriesExceptionSchema = z
  .any()
  .openapi('MultipleConflictResolutionEntriesException')

const ReplacementTypeRequiredExceptionSchema = z.any().openapi('ReplacementTypeRequiredException')

const InvalidReplacementTypeExceptionSchema = z.any().openapi('InvalidReplacementTypeException')

const ReplacementContentRequiredExceptionSchema = z
  .any()
  .openapi('ReplacementContentRequiredException')

const InvalidReplacementContentExceptionSchema = z
  .any()
  .openapi('InvalidReplacementContentException')

const ConcurrentReferenceUpdateExceptionSchema = z
  .any()
  .openapi('ConcurrentReferenceUpdateException')

const DeleteApprovalRuleTemplateOutputSchema = z
  .object({
    approvalRuleTemplateId: ApprovalRuleTemplateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the deleted approval rule template. If the template has been previously deleted, the only response is a 200 OK.',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplateId'] })
  .openapi('DeleteApprovalRuleTemplateOutput')

const DeleteApprovalRuleTemplateInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule template to delete.' }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplateName'], title: 'DeleteApprovalRuleTemplateInput' })
  .openapi('DeleteApprovalRuleTemplateInput')

const ApprovalRuleTemplateInUseExceptionSchema = z
  .any()
  .openapi('ApprovalRuleTemplateInUseException')

const BranchInfoSchema = z
  .object({
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the branch.' }),
    ).exactOptional(),
    commitId: CommitIdSchema.and(
      z.any().openapi({ description: 'The ID of the last commit made to the branch.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a branch.', required: [] })
  .openapi('BranchInfo')

const DeleteBranchOutputSchema = z
  .object({
    deletedBranch: BranchInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a delete branch operation.', required: [] })
  .openapi('DeleteBranchOutput')

const DeleteBranchInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository that contains the branch to be deleted.',
        }),
    ),
    branchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the branch to delete.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'branchName'],
    title: 'DeleteBranchInput',
    description: 'Represents the input of a delete branch operation.',
  })
  .openapi('DeleteBranchInput')

const DefaultBranchCannotBeDeletedExceptionSchema = z
  .any()
  .openapi('DefaultBranchCannotBeDeletedException')

const CommentIdSchema = z.string().openapi('CommentId')

const ContentSchema = z.string().openapi('Content')

const IsCommentDeletedSchema = z.boolean().openapi('IsCommentDeleted')

const ReactionValueSchema = z.string().openapi('ReactionValue')

const CallerReactionsSchema = z.array(ReactionValueSchema).openapi('CallerReactions')

const CountSchema = z.int().openapi('Count')

const ReactionCountsMapSchema = z.record(z.string(), CountSchema).openapi('ReactionCountsMap')

const CommentSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z.any().openapi({ description: 'The system-generated comment ID.' }),
    ).exactOptional(),
    content: ContentSchema.and(
      z.any().openapi({ description: 'The content of the comment.' }),
    ).exactOptional(),
    inReplyTo: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the comment for which this comment is a reply, if any.',
        }),
    ).exactOptional(),
    creationDate: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the comment was created, in timestamp format.',
        }),
    ).exactOptional(),
    lastModifiedDate: LastModifiedDateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the comment was most recently modified, in timestamp format.',
        }),
    ).exactOptional(),
    authorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the person who posted the comment.',
        }),
    ).exactOptional(),
    deleted: IsCommentDeletedSchema.and(
      z
        .any()
        .openapi({
          description: 'A Boolean value indicating whether the comment has been deleted.',
        }),
    ).exactOptional(),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.',
        }),
    ).exactOptional(),
    callerReactions: CallerReactionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.',
        }),
    ).exactOptional(),
    reactionCounts: ReactionCountsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a specific comment.', required: [] })
  .openapi('Comment')

const DeleteCommentContentOutputSchema = z
  .object({
    comment: CommentSchema.and(
      z.any().openapi({ description: 'Information about the comment you just deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteCommentContentOutput')

const DeleteCommentContentInputSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique, system-generated ID of the comment. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.',
        }),
    ),
  })
  .openapi({ required: ['commentId'], title: 'DeleteCommentContentInput' })
  .openapi('DeleteCommentContentInput')

const CommentDoesNotExistExceptionSchema = z.any().openapi('CommentDoesNotExistException')

const CommentIdRequiredExceptionSchema = z.any().openapi('CommentIdRequiredException')

const InvalidCommentIdExceptionSchema = z.any().openapi('InvalidCommentIdException')

const CommentDeletedExceptionSchema = z.any().openapi('CommentDeletedException')

const DeleteFileOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit that contains the change that deletes the file.',
        }),
    ),
    blobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The blob ID removed from the tree as part of deleting the file.',
        }),
    ),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains the delete file change.',
        }),
    ),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the file to be deleted, including the full name and extension of that file.',
        }),
    ),
  })
  .openapi({ required: ['commitId', 'blobId', 'treeId', 'filePath'] })
  .openapi('DeleteFileOutput')

const DeleteFileInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the file to delete.' }),
    ),
    branchName: BranchNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the branch where the commit that deletes the file is made.',
        }),
    ),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the file that to be deleted, including the full name and extension of that file. For example, /examples/file.md is a fully qualified path to a file named file.md in a folder named examples.',
        }),
    ),
    parentCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the commit that is the tip of the branch where you want to create the commit that deletes the file. This must be the HEAD commit for the branch. The commit that deletes the file is created from this commit ID.',
        }),
    ),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a file is the only object in the folder or directory, specifies whether to delete the folder or directory that contains the file. By default, empty folders are deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 also deletes the empty folders dir4, dir3, and dir2.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit message you want to include as part of deleting the file. Commit messages are limited to 256 KB. If no message is specified, a default message is used.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the author of the commit that deletes the file. If no name is specified, the user's ARN is used as the author name and committer name.",
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address for the commit that deletes the file. If no email address is specified, the email address is left blank.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'branchName', 'filePath', 'parentCommitId'],
    title: 'DeleteFileInput',
  })
  .openapi('DeleteFileInput')

const DeletePullRequestApprovalRuleOutputSchema = z
  .object({
    approvalRuleId: ApprovalRuleIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the deleted approval rule. </p> <note> <p>If the approval rule was deleted in an earlier API call, the response is 200 OK without content.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleId'] })
  .openapi('DeletePullRequestApprovalRuleOutput')

const DeletePullRequestApprovalRuleInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request that contains the approval rule you want to delete.',
        }),
    ),
    approvalRuleName: ApprovalRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule you want to delete.' }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'approvalRuleName'],
    title: 'DeletePullRequestApprovalRuleInput',
  })
  .openapi('DeletePullRequestApprovalRuleInput')

const CannotDeleteApprovalRuleFromTemplateExceptionSchema = z
  .any()
  .openapi('CannotDeleteApprovalRuleFromTemplateException')

const DeleteRepositoryOutputSchema = z
  .object({
    repositoryId: RepositoryIdSchema.and(
      z.any().openapi({ description: 'The ID of the repository that was deleted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a delete repository operation.', required: [] })
  .openapi('DeleteRepositoryOutput')

const DeleteRepositoryInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to delete.' }),
    ),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'DeleteRepositoryInput',
    description: 'Represents the input of a delete repository operation.',
  })
  .openapi('DeleteRepositoryInput')

const DescribeMergeConflictsOutputSchema = z
  .object({
    conflictMetadata: ConflictMetadataSchema.and(
      z.any().openapi({ description: 'Contains metadata about the conflicts found in the merge.' }),
    ),
    mergeHunks: MergeHunksSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of merge hunks of the differences between the files or lines.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
    destinationCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the destination commit specifier that was used in the merge evaluation.',
        }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the source commit specifier that was used in the merge evaluation.',
        }),
    ),
    baseCommitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The commit ID of the merge base.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['conflictMetadata', 'mergeHunks', 'destinationCommitId', 'sourceCommitId'],
  })
  .openapi('DescribeMergeConflictsOutput')

const DescribeMergeConflictsInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where you want to get information about a merge conflict.',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    mergeOption: MergeOptionTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The merge option or strategy you want to use to merge the code.',
        }),
    ),
    maxMergeHunks: MaxResultsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of merge hunks to include in the output.' }),
    ).exactOptional(),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({ description: 'The path of the target files used to describe the conflicts. ' }),
    ),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'repositoryName',
      'destinationCommitSpecifier',
      'sourceCommitSpecifier',
      'mergeOption',
      'filePath',
    ],
    title: 'DescribeMergeConflictsInput',
  })
  .openapi('DescribeMergeConflictsInput')

const EventDateSchema = z.iso.datetime({ offset: true }).openapi('EventDate')

const PullRequestEventTypeSchema = z
  .enum([
    'PULL_REQUEST_CREATED',
    'PULL_REQUEST_STATUS_CHANGED',
    'PULL_REQUEST_SOURCE_REFERENCE_UPDATED',
    'PULL_REQUEST_MERGE_STATE_CHANGED',
    'PULL_REQUEST_APPROVAL_RULE_CREATED',
    'PULL_REQUEST_APPROVAL_RULE_UPDATED',
    'PULL_REQUEST_APPROVAL_RULE_DELETED',
    'PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN',
    'PULL_REQUEST_APPROVAL_STATE_CHANGED',
  ])
  .openapi('PullRequestEventType')

const PullRequestCreatedEventMetadataSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ).exactOptional(),
    sourceCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit ID on the source branch used when the pull request was created.',
        }),
    ).exactOptional(),
    destinationCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the tip of the branch specified as the destination branch when the pull request was created.',
        }),
    ).exactOptional(),
    mergeBase: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the most recent commit that the source branch and the destination branch have in common.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Metadata about the pull request that is used when comparing the pull request source with its destination.',
    required: [],
  })
  .openapi('PullRequestCreatedEventMetadata')

const PullRequestStatusChangedEventMetadataSchema = z
  .object({
    pullRequestStatus: PullRequestStatusEnumSchema.and(
      z.any().openapi({ description: 'The changed status of the pull request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about a change to the status of a pull request.',
    required: [],
  })
  .openapi('PullRequestStatusChangedEventMetadata')

const PullRequestSourceReferenceUpdatedEventMetadataSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was updated.' }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.',
        }),
    ).exactOptional(),
    mergeBase: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the most recent commit that the source branch and the destination branch have in common.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about an update to the source branch of a pull request.',
    required: [],
  })
  .openapi('PullRequestSourceReferenceUpdatedEventMetadata')

const PullRequestMergedStateChangedEventMetadataSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ).exactOptional(),
    destinationReference: ReferenceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the branch that the pull request is merged into.' }),
    ).exactOptional(),
    mergeMetadata: MergeMetadataSchema.and(
      z.any().openapi({ description: 'Information about the merge state change event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about the change in the merge state for a pull request event. ',
    required: [],
  })
  .openapi('PullRequestMergedStateChangedEventMetadata')

const ApprovalRuleEventMetadataSchema = z
  .object({
    approvalRuleName: ApprovalRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule.' }),
    ).exactOptional(),
    approvalRuleId: ApprovalRuleIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the approval rule.' }),
    ).exactOptional(),
    approvalRuleContent: ApprovalRuleContentSchema.and(
      z.any().openapi({ description: 'The content of the approval rule.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about an event for an approval rule.',
    required: [],
  })
  .openapi('ApprovalRuleEventMetadata')

const ApprovalStateSchema = z.enum(['APPROVE', 'REVOKE']).openapi('ApprovalState')

const ApprovalStateChangedEventMetadataSchema = z
  .object({
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The revision ID of the pull request when the approval state changed.',
        }),
    ).exactOptional(),
    approvalStatus: ApprovalStateSchema.and(
      z.any().openapi({ description: 'The approval status for the pull request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about a change in the approval state for a pull request.',
    required: [],
  })
  .openapi('ApprovalStateChangedEventMetadata')

const OverrideStatusSchema = z.enum(['OVERRIDE', 'REVOKE']).openapi('OverrideStatus')

const ApprovalRuleOverriddenEventMetadataSchema = z
  .object({
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The revision ID of the pull request when the override event occurred.',
        }),
    ).exactOptional(),
    overrideStatus: OverrideStatusSchema.and(
      z.any().openapi({ description: 'The status of the override event.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about an override event for approval rules for a pull request.',
    required: [],
  })
  .openapi('ApprovalRuleOverriddenEventMetadata')

const PullRequestEventSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request.' }),
    ).exactOptional(),
    eventDate: EventDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The day and time of the pull request event, in timestamp format.',
        }),
    ).exactOptional(),
    pullRequestEventType: PullRequestEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the pull request event (for example, a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).',
        }),
    ).exactOptional(),
    actorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request.',
        }),
    ).exactOptional(),
    pullRequestCreatedEventMetadata: PullRequestCreatedEventMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the source and destination branches for the pull request.',
        }),
    ).exactOptional(),
    pullRequestStatusChangedEventMetadata: PullRequestStatusChangedEventMetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the change in status for the pull request event.',
        }),
    ).exactOptional(),
    pullRequestSourceReferenceUpdatedEventMetadata:
      PullRequestSourceReferenceUpdatedEventMetadataSchema.and(
        z
          .any()
          .openapi({
            description: 'Information about the updated source branch for the pull request event. ',
          }),
      ).exactOptional(),
    pullRequestMergedStateChangedEventMetadata:
      PullRequestMergedStateChangedEventMetadataSchema.and(
        z
          .any()
          .openapi({
            description:
              'Information about the change in mergability state for the pull request event.',
          }),
      ).exactOptional(),
    approvalRuleEventMetadata: ApprovalRuleEventMetadataSchema.and(
      z.any().openapi({ description: 'Information about a pull request event.' }),
    ).exactOptional(),
    approvalStateChangedEventMetadata: ApprovalStateChangedEventMetadataSchema.and(
      z
        .any()
        .openapi({ description: 'Information about an approval state change for a pull request.' }),
    ).exactOptional(),
    approvalRuleOverriddenEventMetadata: ApprovalRuleOverriddenEventMetadataSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about an approval rule override event for a pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a pull request event.', required: [] })
  .openapi('PullRequestEvent')

const PullRequestEventListSchema = z.array(PullRequestEventSchema).openapi('PullRequestEventList')

const DescribePullRequestEventsOutputSchema = z
  .object({
    pullRequestEvents: PullRequestEventListSchema.and(
      z.any().openapi({ description: 'Information about the pull request events.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pullRequestEvents'] })
  .openapi('DescribePullRequestEventsOutput')

const DescribePullRequestEventsInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    pullRequestEventType: PullRequestEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The pull request event type about which you want to return information.',
        }),
    ).exactOptional(),
    actorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results. The default is 100 events, which is also the maximum number of events that can be returned in a result.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pullRequestId'], title: 'DescribePullRequestEventsInput' })
  .openapi('DescribePullRequestEventsInput')

const InvalidPullRequestEventTypeExceptionSchema = z
  .any()
  .openapi('InvalidPullRequestEventTypeException')

const InvalidActorArnExceptionSchema = z.any().openapi('InvalidActorArnException')

const ActorDoesNotExistExceptionSchema = z.any().openapi('ActorDoesNotExistException')

const InvalidMaxResultsExceptionSchema = z.any().openapi('InvalidMaxResultsException')

const DisassociateApprovalRuleTemplateFromRepositoryInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the approval rule template to disassociate from a specified repository.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository you want to disassociate from the template.',
        }),
    ),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'repositoryName'],
    title: 'DisassociateApprovalRuleTemplateFromRepositoryInput',
  })
  .openapi('DisassociateApprovalRuleTemplateFromRepositoryInput')

const ApprovedSchema = z.boolean().openapi('Approved')

const OverriddenSchema = z.boolean().openapi('Overridden')

const ApprovalRulesSatisfiedListSchema = z
  .array(ApprovalRuleNameSchema)
  .openapi('ApprovalRulesSatisfiedList')

const ApprovalRulesNotSatisfiedListSchema = z
  .array(ApprovalRuleNameSchema)
  .openapi('ApprovalRulesNotSatisfiedList')

const EvaluationSchema = z
  .object({
    approved: ApprovedSchema.and(
      z.any().openapi({ description: 'Whether the state of the pull request is approved.' }),
    ).exactOptional(),
    overridden: OverriddenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.',
        }),
    ).exactOptional(),
    approvalRulesSatisfied: ApprovalRulesSatisfiedListSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of the approval rules that have had their conditions met.',
        }),
    ).exactOptional(),
    approvalRulesNotSatisfied: ApprovalRulesNotSatisfiedListSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of the approval rules that have not had their conditions met.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about the approval rules applied to a pull request and whether conditions have been met.',
    required: [],
  })
  .openapi('Evaluation')

const EvaluatePullRequestApprovalRulesOutputSchema = z
  .object({
    evaluation: EvaluationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. ',
        }),
    ),
  })
  .openapi({ required: ['evaluation'] })
  .openapi('EvaluatePullRequestApprovalRulesOutput')

const EvaluatePullRequestApprovalRulesInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated ID of the pull request you want to evaluate.',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID for the pull request revision. To retrieve the most recent revision ID for a pull request, use <a>GetPullRequest</a>.',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'revisionId'],
    title: 'EvaluatePullRequestApprovalRulesInput',
  })
  .openapi('EvaluatePullRequestApprovalRulesInput')

const InvalidRevisionIdExceptionSchema = z.any().openapi('InvalidRevisionIdException')

const RevisionIdRequiredExceptionSchema = z.any().openapi('RevisionIdRequiredException')

const RevisionNotCurrentExceptionSchema = z.any().openapi('RevisionNotCurrentException')

const GetApprovalRuleTemplateOutputSchema = z
  .object({
    approvalRuleTemplate: ApprovalRuleTemplateSchema.and(
      z.any().openapi({ description: 'The content and structure of the approval rule template.' }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplate'] })
  .openapi('GetApprovalRuleTemplateOutput')

const GetApprovalRuleTemplateInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the approval rule template for which you want to get information.',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplateName'], title: 'GetApprovalRuleTemplateInput' })
  .openapi('GetApprovalRuleTemplateInput')

const BlobSchema = z.string().openapi('Blob')

const GetBlobOutputSchema = z
  .object({
    content: BlobSchema.and(
      z.any().openapi({ description: 'The content of the blob, usually a file.' }),
    ),
  })
  .openapi({ required: ['content'], description: 'Represents the output of a get blob operation.' })
  .openapi('GetBlobOutput')

const GetBlobInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository that contains the blob.' }),
    ),
    blobId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the blob, which is its SHA-1 pointer.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'blobId'],
    title: 'GetBlobInput',
    description: 'Represents the input of a get blob operation.',
  })
  .openapi('GetBlobInput')

const BlobIdRequiredExceptionSchema = z.any().openapi('BlobIdRequiredException')

const InvalidBlobIdExceptionSchema = z.any().openapi('InvalidBlobIdException')

const BlobIdDoesNotExistExceptionSchema = z.any().openapi('BlobIdDoesNotExistException')

const FileTooLargeExceptionSchema = z.any().openapi('FileTooLargeException')

const GetBranchOutputSchema = z
  .object({
    branch: BranchInfoSchema.and(
      z.any().openapi({ description: 'The name of the branch.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a get branch operation.', required: [] })
  .openapi('GetBranchOutput')

const GetBranchInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the branch for which you want to retrieve information.',
        }),
    ).exactOptional(),
    branchName: BranchNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the branch for which you want to retrieve information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'GetBranchInput',
    description: 'Represents the input of a get branch operation.',
    required: [],
  })
  .openapi('GetBranchInput')

const GetCommentOutputSchema = z
  .object({
    comment: CommentSchema.and(
      z.any().openapi({ description: 'The contents of the comment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCommentOutput')

const GetCommentInputSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique, system-generated ID of the comment. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.',
        }),
    ),
  })
  .openapi({ required: ['commentId'], title: 'GetCommentInput' })
  .openapi('GetCommentInput')

const ReactionEmojiSchema = z.string().openapi('ReactionEmoji')

const ReactionShortCodeSchema = z.string().openapi('ReactionShortCode')

const ReactionUnicodeSchema = z.string().openapi('ReactionUnicode')

const ReactionValueFormatsSchema = z
  .object({
    emoji: ReactionEmojiSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Emoji Version 1.0 graphic of the reaction. These graphics are interpreted slightly differently on different operating systems.',
        }),
    ).exactOptional(),
    shortCode: ReactionShortCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The emoji short code for the reaction. Short codes are interpreted slightly differently on different operating systems. ',
        }),
    ).exactOptional(),
    unicode: ReactionUnicodeSchema.and(
      z.any().openapi({ description: 'The Unicode codepoint for the reaction.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.',
    required: [],
  })
  .openapi('ReactionValueFormats')

const ReactionUsersListSchema = z.array(ArnSchema).openapi('ReactionUsersList')

const ReactionForCommentSchema = z
  .object({
    reaction: ReactionValueFormatsSchema.and(
      z.any().openapi({ description: 'The reaction for a specified comment.' }),
    ).exactOptional(),
    reactionUsers: ReactionUsersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Names (ARNs) of users who have provided reactions to the comment.',
        }),
    ).exactOptional(),
    reactionsFromDeletedUsersCount: CountSchema.and(
      z
        .any()
        .openapi({
          description:
            'A numerical count of users who reacted with the specified emoji whose identities have been subsequently deleted from IAM. While these IAM users or roles no longer exist, the reactions might still appear in total reaction counts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the reaction values provided by users on a comment.',
    required: [],
  })
  .openapi('ReactionForComment')

const ReactionsForCommentListSchema = z
  .array(ReactionForCommentSchema)
  .openapi('ReactionsForCommentList')

const GetCommentReactionsOutputSchema = z
  .object({
    reactionsForComment: ReactionsForCommentListSchema.and(
      z.any().openapi({ description: 'An array of reactions to the specified comment.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['reactionsForComment'] })
  .openapi('GetCommentReactionsOutput')

const GetCommentReactionsInputSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the comment for which you want to get reactions information.',
        }),
    ),
    reactionUserArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results. The default is the same as the allowed maximum, 1,000.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['commentId'], title: 'GetCommentReactionsInput' })
  .openapi('GetCommentReactionsInput')

const InvalidReactionUserArnExceptionSchema = z.any().openapi('InvalidReactionUserArnException')

const PositionSchema = z.int().openapi('Position')

const RelativeFileVersionEnumSchema = z.enum(['BEFORE', 'AFTER']).openapi('RelativeFileVersionEnum')

const LocationSchema = z
  .object({
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the file being compared, including its extension and subdirectory, if any.',
        }),
    ).exactOptional(),
    filePosition: PositionSchema.and(
      z
        .any()
        .openapi({
          description: 'The position of a change in a compared file, in line number format.',
        }),
    ).exactOptional(),
    relativeFileVersion: RelativeFileVersionEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'In a comparison of commits or a pull request, whether the change is in the before or after of that comparison.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns information about the location of a change or comment in the comparison between two commits or a pull request.',
    required: [],
  })
  .openapi('Location')

const CommentsSchema = z.array(CommentSchema).openapi('Comments')

const CommentsForComparedCommitSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the compared commits.' }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit used to establish the before of the comparison.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit used to establish the after of the comparison.',
        }),
    ).exactOptional(),
    beforeBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full blob ID of the commit used to establish the before of the comparison.',
        }),
    ).exactOptional(),
    afterBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full blob ID of the commit used to establish the after of the comparison.',
        }),
    ).exactOptional(),
    location: LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is BEFORE or AFTER.',
        }),
    ).exactOptional(),
    comments: CommentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of comment objects. Each comment object contains information about a comment on the comparison between commits.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about comments on the comparison between two commits.',
    required: [],
  })
  .openapi('CommentsForComparedCommit')

const CommentsForComparedCommitDataSchema = z
  .array(CommentsForComparedCommitSchema)
  .openapi('CommentsForComparedCommitData')

const GetCommentsForComparedCommitOutputSchema = z
  .object({
    commentsForComparedCommitData: CommentsForComparedCommitDataSchema.and(
      z.any().openapi({ description: 'A list of comment objects on the compared commit.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCommentsForComparedCommitOutput')

const GetCommentsForComparedCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where you want to compare commits.' }),
    ),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'To establish the directionality of the comparison, the full commit ID of the before commit.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'To establish the directionality of the comparison, the full commit ID of the after commit.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that when provided in a request, returns the next batch of the results. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments, but you can configure up to 500.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'afterCommitId'],
    title: 'GetCommentsForComparedCommitInput',
  })
  .openapi('GetCommentsForComparedCommitInput')

const CommentsForPullRequestSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request.' }),
    ).exactOptional(),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the pull request.' }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit is superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit that was the tip of the source branch at the time the comment was made. ',
        }),
    ).exactOptional(),
    beforeBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full blob ID of the file on which you want to comment on the destination commit.',
        }),
    ).exactOptional(),
    afterBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full blob ID of the file on which you want to comment on the source commit.',
        }),
    ).exactOptional(),
    location: LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is BEFORE (destination branch) or AFTER (source branch).',
        }),
    ).exactOptional(),
    comments: CommentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of comment objects. Each comment object contains information about a comment on the pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about comments on a pull request.', required: [] })
  .openapi('CommentsForPullRequest')

const CommentsForPullRequestDataSchema = z
  .array(CommentsForPullRequestSchema)
  .openapi('CommentsForPullRequestData')

const GetCommentsForPullRequestOutputSchema = z
  .object({
    commentsForPullRequestData: CommentsForPullRequestDataSchema.and(
      z.any().openapi({ description: 'An array of comment objects on the pull request.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCommentsForPullRequestOutput')

const GetCommentsForPullRequestInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository that contains the pull request.' }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pullRequestId'], title: 'GetCommentsForPullRequestInput' })
  .openapi('GetCommentsForPullRequestInput')

const RepositoryNotAssociatedWithPullRequestExceptionSchema = z
  .any()
  .openapi('RepositoryNotAssociatedWithPullRequestException')

const GetCommitOutputSchema = z
  .object({
    commit: CommitSchema.and(
      z
        .any()
        .openapi({
          description:
            'A commit data type object that contains information about the specified commit.',
        }),
    ),
  })
  .openapi({
    required: ['commit'],
    description: 'Represents the output of a get commit operation.',
  })
  .openapi('GetCommitOutput')

const GetCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to which the commit was made.' }),
    ),
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The commit ID. Commit IDs are the full SHA ID of the commit.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'commitId'],
    title: 'GetCommitInput',
    description: 'Represents the input of a get commit operation.',
  })
  .openapi('GetCommitInput')

const CommitIdDoesNotExistExceptionSchema = z.any().openapi('CommitIdDoesNotExistException')

const ModeSchema = z.string().openapi('Mode')

const BlobMetadataSchema = z
  .object({
    blobId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The full ID of the blob.' }),
    ).exactOptional(),
    path: PathSchema.and(
      z.any().openapi({ description: 'The path to the blob and associated file name, if any.' }),
    ).exactOptional(),
    mode: ModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The file mode permissions of the blob. File mode permission codes include:</p> <ul> <li> <p> <code>100644</code> indicates read/write</p> </li> <li> <p> <code>100755</code> indicates read/write/execute</p> </li> <li> <p> <code>160000</code> indicates a submodule</p> </li> <li> <p> <code>120000</code> indicates a symlink</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a specific Git blob object.', required: [] })
  .openapi('BlobMetadata')

const DifferenceSchema = z
  .object({
    beforeBlob: BlobMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about a <code>beforeBlob</code> data type object, including the ID, the file mode permission code, and the path.',
        }),
    ).exactOptional(),
    afterBlob: BlobMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about an <code>afterBlob</code> data type object, including the ID, the file mode permission code, and the path.',
        }),
    ).exactOptional(),
    changeType: ChangeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the change type of the difference is an addition (A), deletion (D), or modification (M).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about a set of differences for a commit specifier.',
    required: [],
  })
  .openapi('Difference')

const DifferenceListSchema = z.array(DifferenceSchema).openapi('DifferenceList')

const GetDifferencesOutputSchema = z
  .object({
    differences: DifferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A data type object that contains information about the differences, including whether the difference is added, modified, or deleted (A, D, M).',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDifferencesOutput')

const LimitSchema = z.int().openapi('Limit')

const GetDifferencesInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where you want to get differences.' }),
    ),
    beforeCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, the full commit ID). Optional. If not specified, all changes before the <code>afterCommitSpecifier</code> value are shown. If you do not use <code>beforeCommitSpecifier</code> in your request, consider limiting the results with <code>maxResults</code>.',
        }),
    ).exactOptional(),
    afterCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit.',
        }),
    ),
    beforePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If <code>beforePath</code> and <code>afterPath</code> are not specified, differences are shown for all paths.',
        }),
    ).exactOptional(),
    afterPath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences are shown for all paths.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName', 'afterCommitSpecifier'], title: 'GetDifferencesInput' })
  .openapi('GetDifferencesInput')

const PathDoesNotExistExceptionSchema = z.any().openapi('PathDoesNotExistException')

const ObjectSizeSchema = z.int().openapi('ObjectSize')

const GetFileOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit that contains the content returned by GetFile.',
        }),
    ),
    blobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The blob ID of the object that represents the file content.' }),
    ),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the specified file. Returns the name and extension of the file.',
        }),
    ),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.</p> <note> <p>The file mode permissions returned by this API are not the standard file mode permission values, such as 100644, but rather extrapolated values. See the supported return values.</p> </note>',
        }),
    ),
    fileSize: ObjectSizeSchema.and(
      z.any().openapi({ description: 'The size of the contents of the file, in bytes.' }),
    ),
    fileContent: FileContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base-64 encoded binary data object that represents the content of the file.',
        }),
    ),
  })
  .openapi({ required: ['commitId', 'blobId', 'filePath', 'fileMode', 'fileSize', 'fileContent'] })
  .openapi('GetFileOutput')

const GetFileInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository that contains the file.' }),
    ),
    commitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully quaified reference that identifies the commit that contains the file. For example, you can specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/master. If none is provided, the head commit is used.',
        }),
    ).exactOptional(),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the file, including the full name and extension of the file. For example, /examples/file.md is the fully qualified path to a file named file.md in a folder named examples.',
        }),
    ),
  })
  .openapi({ required: ['repositoryName', 'filePath'], title: 'GetFileInput' })
  .openapi('GetFileInput')

const FolderSchema = z
  .object({
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains the folder.',
        }),
    ).exactOptional(),
    absolutePath: PathSchema.and(
      z.any().openapi({ description: 'The fully qualified path of the folder in the repository.' }),
    ).exactOptional(),
    relativePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path of the specified folder from the folder where the query originated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a folder in a repository.', required: [] })
  .openapi('Folder')

const FolderListSchema = z.array(FolderSchema).openapi('FolderList')

const FileSchema = z
  .object({
    blobId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The blob ID that contains the file information.' }),
    ).exactOptional(),
    absolutePath: PathSchema.and(
      z.any().openapi({ description: 'The fully qualified path to the file in the repository.' }),
    ).exactOptional(),
    relativePath: PathSchema.and(
      z
        .any()
        .openapi({
          description: 'The relative path of the file from the folder where the query originated.',
        }),
    ).exactOptional(),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns information about a file in a repository.', required: [] })
  .openapi('File')

const FileListSchema = z.array(FileSchema).openapi('FileList')

const SymbolicLinkSchema = z
  .object({
    blobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The blob ID that contains the information about the symbolic link.',
        }),
    ).exactOptional(),
    absolutePath: PathSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified path to the folder that contains the symbolic link.',
        }),
    ).exactOptional(),
    relativePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path of the symbolic link from the folder where the query originated.',
        }),
    ).exactOptional(),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file mode permissions of the blob that cotains information about the symbolic link.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about a symbolic link in a repository folder.',
    required: [],
  })
  .openapi('SymbolicLink')

const SymbolicLinkListSchema = z.array(SymbolicLinkSchema).openapi('SymbolicLinkList')

const SubModuleSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The commit ID that contains the reference to the submodule.' }),
    ).exactOptional(),
    absolutePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the folder that contains the reference to the submodule.',
        }),
    ).exactOptional(),
    relativePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The relative path of the submodule from the folder where the query originated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about a submodule reference in a repository folder.',
    required: [],
  })
  .openapi('SubModule')

const SubModuleListSchema = z.array(SubModuleSchema).openapi('SubModuleList')

const GetFolderOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID used as a reference for the returned version of the folder content.',
        }),
    ),
    folderPath: PathSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified path of the folder whose contents are returned.',
        }),
    ),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains the folder.',
        }),
    ).exactOptional(),
    subFolders: FolderListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of folders that exist under the specified folder, if any.',
        }),
    ).exactOptional(),
    files: FileListSchema.and(
      z.any().openapi({ description: 'The list of files in the specified folder, if any.' }),
    ).exactOptional(),
    symbolicLinks: SymbolicLinkListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of symbolic links to other files and folders in the specified folder, if any.',
        }),
    ).exactOptional(),
    subModules: SubModuleListSchema.and(
      z.any().openapi({ description: 'The list of submodules in the specified folder, if any.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['commitId', 'folderPath'] })
  .openapi('GetFolderOutput')

const GetFolderInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository.' }),
    ),
    commitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A fully qualified reference used to identify a commit that contains the version of the folder's content to return. A fully qualified reference can be a commit ID, branch name, tag, or reference such as HEAD. If no specifier is provided, the folder content is returned as it exists in the HEAD commit.",
        }),
    ).exactOptional(),
    folderPath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified path to the folder whose contents are returned, including the folder name. For example, /examples is a fully-qualified path to a folder named examples that was created off of the root directory (/) of a repository. ',
        }),
    ),
  })
  .openapi({ required: ['repositoryName', 'folderPath'], title: 'GetFolderInput' })
  .openapi('GetFolderInput')

const FolderDoesNotExistExceptionSchema = z.any().openapi('FolderDoesNotExistException')

const GetMergeCommitOutputSchema = z
  .object({
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the source commit specifier that was used in the merge evaluation.',
        }),
    ).exactOptional(),
    destinationCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the destination commit specifier that was used in the merge evaluation.',
        }),
    ).exactOptional(),
    baseCommitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The commit ID of the merge base.' }),
    ).exactOptional(),
    mergedCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID for the merge commit created when the source branch was merged into the destination branch. If the fast-forward merge strategy was used, there is no merge commit.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMergeCommitOutput')

const GetMergeCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the merge commit about which you want to get information.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
    title: 'GetMergeCommitInput',
  })
  .openapi('GetMergeCommitInput')

const IsMergeableSchema = z.boolean().openapi('IsMergeable')

const ConflictMetadataListSchema = z.array(ConflictMetadataSchema).openapi('ConflictMetadataList')

const GetMergeConflictsOutputSchema = z
  .object({
    mergeable: IsMergeableSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether the code is mergeable by the specified merge option.',
        }),
    ),
    destinationCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the destination commit specifier that was used in the merge evaluation.',
        }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the source commit specifier that was used in the merge evaluation.',
        }),
    ),
    baseCommitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The commit ID of the merge base.' }),
    ).exactOptional(),
    conflictMetadataList: ConflictMetadataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of metadata for any conflicting files. If the specified merge strategy is FAST_FORWARD_MERGE, this list is always empty.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['mergeable', 'destinationCommitId', 'sourceCommitId', 'conflictMetadataList'],
  })
  .openapi('GetMergeConflictsOutput')

const GetMergeConflictsInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    mergeOption: MergeOptionTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The merge option or strategy you want to use to merge the code. ',
        }),
    ),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    maxConflictFiles: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of files to include in the output.' }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'repositoryName',
      'destinationCommitSpecifier',
      'sourceCommitSpecifier',
      'mergeOption',
    ],
    title: 'GetMergeConflictsInput',
  })
  .openapi('GetMergeConflictsInput')

const InvalidDestinationCommitSpecifierExceptionSchema = z
  .any()
  .openapi('InvalidDestinationCommitSpecifierException')

const InvalidSourceCommitSpecifierExceptionSchema = z
  .any()
  .openapi('InvalidSourceCommitSpecifierException')

const MergeOptionsSchema = z.array(MergeOptionTypeEnumSchema).openapi('MergeOptions')

const GetMergeOptionsOutputSchema = z
  .object({
    mergeOptions: MergeOptionsSchema.and(
      z.any().openapi({ description: 'The merge option or strategy used to merge the code.' }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the source commit specifier that was used in the merge evaluation.',
        }),
    ),
    destinationCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The commit ID of the destination commit specifier that was used in the merge evaluation.',
        }),
    ),
    baseCommitId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The commit ID of the merge base.' }),
    ),
  })
  .openapi({ required: ['mergeOptions', 'sourceCommitId', 'destinationCommitId', 'baseCommitId'] })
  .openapi('GetMergeOptionsOutput')

const GetMergeOptionsInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository that contains the commits about which you want to get merge options.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
    title: 'GetMergeOptionsInput',
  })
  .openapi('GetMergeOptionsInput')

const GetPullRequestOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z.any().openapi({ description: 'Information about the specified pull request.' }),
    ),
  })
  .openapi({ required: ['pullRequest'] })
  .openapi('GetPullRequestOutput')

const GetPullRequestInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
  })
  .openapi({ required: ['pullRequestId'], title: 'GetPullRequestInput' })
  .openapi('GetPullRequestInput')

const ApprovalSchema = z
  .object({
    userArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the user.' }),
    ).exactOptional(),
    approvalState: ApprovalStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about a specific approval on a pull request.',
    required: [],
  })
  .openapi('Approval')

const ApprovalListSchema = z.array(ApprovalSchema).openapi('ApprovalList')

const GetPullRequestApprovalStatesOutputSchema = z
  .object({
    approvals: ApprovalListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about users who have approved the pull request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPullRequestApprovalStatesOutput')

const GetPullRequestApprovalStatesInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID for the pull request.' }),
    ),
    revisionId: RevisionIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID for the pull request revision.' }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'revisionId'],
    title: 'GetPullRequestApprovalStatesInput',
  })
  .openapi('GetPullRequestApprovalStatesInput')

const GetPullRequestOverrideStateOutputSchema = z
  .object({
    overridden: OverriddenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that indicates whether a pull request has had its rules set aside (TRUE) or whether all approval rules still apply (FALSE).',
        }),
    ).exactOptional(),
    overrider: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPullRequestOverrideStateOutput')

const GetPullRequestOverrideStateInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden).',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the revision for the pull request. To retrieve the most recent revision ID, use <a>GetPullRequest</a>.',
        }),
    ),
  })
  .openapi({ required: ['pullRequestId', 'revisionId'], title: 'GetPullRequestOverrideStateInput' })
  .openapi('GetPullRequestOverrideStateInput')

const GetRepositoryOutputSchema = z
  .object({
    repositoryMetadata: RepositoryMetadataSchema.and(
      z.any().openapi({ description: 'Information about the repository.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a get repository operation.', required: [] })
  .openapi('GetRepositoryOutput')

const GetRepositoryInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository to get information about.' }),
    ),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'GetRepositoryInput',
    description: 'Represents the input of a get repository operation.',
  })
  .openapi('GetRepositoryInput')

const RepositoryTriggersConfigurationIdSchema = z
  .string()
  .openapi('RepositoryTriggersConfigurationId')

const RepositoryTriggerNameSchema = z.string().openapi('RepositoryTriggerName')

const RepositoryTriggerCustomDataSchema = z.string().openapi('RepositoryTriggerCustomData')

const BranchNameListSchema = z.array(BranchNameSchema).openapi('BranchNameList')

const RepositoryTriggerEventEnumSchema = z
  .enum(['all', 'updateReference', 'createReference', 'deleteReference'])
  .openapi('RepositoryTriggerEventEnum')

const RepositoryTriggerEventListSchema = z
  .array(RepositoryTriggerEventEnumSchema)
  .openapi('RepositoryTriggerEventList')

const RepositoryTriggerSchema = z
  .object({
    name: RepositoryTriggerNameSchema.and(
      z.any().openapi({ description: 'The name of the trigger.' }),
    ),
    destinationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).',
        }),
    ),
    customData: RepositoryTriggerCustomDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Any custom data associated with the trigger to be included in the information sent to the target of the trigger.',
        }),
    ).exactOptional(),
    branches: BranchNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The branches to be included in the trigger configuration. If you specify an empty array, the trigger applies to all branches.</p> <note> <p>Although no content is required in the array, you must include the array itself.</p> </note>',
        }),
    ).exactOptional(),
    events: RepositoryTriggerEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS. </p> <note> <p>The valid value "all" cannot be used with any other values.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['name', 'destinationArn', 'events'],
    description: 'Information about a trigger for a repository.',
  })
  .openapi('RepositoryTrigger')

const RepositoryTriggersListSchema = z
  .array(RepositoryTriggerSchema)
  .openapi('RepositoryTriggersList')

const GetRepositoryTriggersOutputSchema = z
  .object({
    configurationId: RepositoryTriggersConfigurationIdSchema.and(
      z.any().openapi({ description: 'The system-generated unique ID for the trigger.' }),
    ).exactOptional(),
    triggers: RepositoryTriggersListSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON block of configuration information for each trigger.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a get repository triggers operation.',
    required: [],
  })
  .openapi('GetRepositoryTriggersOutput')

const GetRepositoryTriggersInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository for which the trigger is configured.',
        }),
    ),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'GetRepositoryTriggersInput',
    description: 'Represents the input of a get repository triggers operation.',
  })
  .openapi('GetRepositoryTriggersInput')

const ApprovalRuleTemplateNameListSchema = z
  .array(ApprovalRuleTemplateNameSchema)
  .openapi('ApprovalRuleTemplateNameList')

const ListApprovalRuleTemplatesOutputSchema = z
  .object({
    approvalRuleTemplateNames: ApprovalRuleTemplateNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of all the approval rule templates found in the AWS Region for your AWS account.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the next results of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApprovalRuleTemplatesOutput')

const ListApprovalRuleTemplatesInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApprovalRuleTemplatesInput', required: [] })
  .openapi('ListApprovalRuleTemplatesInput')

const ListAssociatedApprovalRuleTemplatesForRepositoryOutputSchema = z
  .object({
    approvalRuleTemplateNames: ApprovalRuleTemplateNameListSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of all approval rule templates associated with the repository.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the next results of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssociatedApprovalRuleTemplatesForRepositoryOutput')

const ListAssociatedApprovalRuleTemplatesForRepositoryInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository for which you want to list all associated approval rule templates.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'ListAssociatedApprovalRuleTemplatesForRepositoryInput',
  })
  .openapi('ListAssociatedApprovalRuleTemplatesForRepositoryInput')

const ListBranchesOutputSchema = z
  .object({
    branches: BranchNameListSchema.and(
      z.any().openapi({ description: 'The list of branch names.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'An enumeration token that returns the batch of the results.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a list branches operation.', required: [] })
  .openapi('ListBranchesOutput')

const ListBranchesInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository that contains the branches.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'An enumeration token that allows the operation to batch the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'ListBranchesInput',
    description: 'Represents the input of a list branches operation.',
  })
  .openapi('ListBranchesInput')

const PullRequestIdListSchema = z.array(PullRequestIdSchema).openapi('PullRequestIdList')

const ListPullRequestsOutputSchema = z
  .object({
    pullRequestIds: PullRequestIdListSchema.and(
      z.any().openapi({ description: 'The system-generated IDs of the pull requests.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the next results of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['pullRequestIds'] })
  .openapi('ListPullRequestsOutput')

const ListPullRequestsInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository for which you want to list pull requests.',
        }),
    ),
    authorArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user.',
        }),
    ).exactOptional(),
    pullRequestStatus: PullRequestStatusEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['repositoryName'], title: 'ListPullRequestsInput' })
  .openapi('ListPullRequestsInput')

const InvalidPullRequestStatusExceptionSchema = z.any().openapi('InvalidPullRequestStatusException')

const InvalidAuthorArnExceptionSchema = z.any().openapi('InvalidAuthorArnException')

const AuthorDoesNotExistExceptionSchema = z.any().openapi('AuthorDoesNotExistException')

const RepositoryNameIdPairSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name associated with the repository.' }),
    ).exactOptional(),
    repositoryId: RepositoryIdSchema.and(
      z.any().openapi({ description: 'The ID associated with the repository.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a repository name and ID.', required: [] })
  .openapi('RepositoryNameIdPair')

const RepositoryNameIdPairListSchema = z
  .array(RepositoryNameIdPairSchema)
  .openapi('RepositoryNameIdPairList')

const ListRepositoriesOutputSchema = z
  .object({
    repositories: RepositoryNameIdPairListSchema.and(
      z
        .any()
        .openapi({
          description: 'Lists the repositories called by the list repositories operation.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the output of a list repositories operation.', required: [] })
  .openapi('ListRepositoriesOutput')

const SortByEnumSchema = z.enum(['repositoryName', 'lastModifiedDate']).openapi('SortByEnum')

const OrderEnumSchema = z.enum(['ascending', 'descending']).openapi('OrderEnum')

const ListRepositoriesInputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.',
        }),
    ).exactOptional(),
    sortBy: SortByEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The criteria used to sort the results of a list repositories operation.',
        }),
    ).exactOptional(),
    order: OrderEnumSchema.and(
      z
        .any()
        .openapi({
          description: 'The order in which to sort the results of a list repositories operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListRepositoriesInput',
    description: 'Represents the input of a list repositories operation.',
    required: [],
  })
  .openapi('ListRepositoriesInput')

const InvalidSortByExceptionSchema = z.any().openapi('InvalidSortByException')

const InvalidOrderExceptionSchema = z.any().openapi('InvalidOrderException')

const ListRepositoriesForApprovalRuleTemplateOutputSchema = z
  .object({
    repositoryNames: RepositoryNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of repository names that are associated with the specified approval rule template.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the next results of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRepositoriesForApprovalRuleTemplateOutput')

const ListRepositoriesForApprovalRuleTemplateInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the approval rule template for which you want to list repositories that are associated with that template.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-zero, non-negative integer used to limit the number of returned results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['approvalRuleTemplateName'],
    title: 'ListRepositoriesForApprovalRuleTemplateInput',
  })
  .openapi('ListRepositoriesForApprovalRuleTemplateInput')

const ListTagsForResourceOutputSchema = z
  .object({
    tags: TagsMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key and value pairs associated with the specified resource.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that allows the operation to batch the next results of the operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const ListTagsForResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ResourceArnRequiredExceptionSchema = z.any().openapi('ResourceArnRequiredException')

const InvalidResourceArnExceptionSchema = z.any().openapi('InvalidResourceArnException')

const MergeBranchesByFastForwardOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit ID of the merge in the destination or target branch.',
        }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The tree ID of the merge in the destination or target branch.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MergeBranchesByFastForwardOutput')

const MergeBranchesByFastForwardInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you want to merge two branches.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    targetBranch: BranchNameSchema.and(
      z.any().openapi({ description: 'The branch where the merge is applied.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
    title: 'MergeBranchesByFastForwardInput',
  })
  .openapi('MergeBranchesByFastForwardInput')

const InvalidTargetBranchExceptionSchema = z.any().openapi('InvalidTargetBranchException')

const MergeBranchesBySquashOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit ID of the merge in the destination or target branch.',
        }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The tree ID of the merge in the destination or target branch.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MergeBranchesBySquashOutput')

const MergeBranchesBySquashInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you want to merge two branches.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    targetBranch: BranchNameSchema.and(
      z.any().openapi({ description: 'The branch where the merge is applied. ' }),
    ).exactOptional(),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the person merging the branches. This information is used in the commit information for the merge.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z.any().openapi({ description: 'The commit message for the merge.' }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    conflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
    title: 'MergeBranchesBySquashInput',
  })
  .openapi('MergeBranchesBySquashInput')

const MergeBranchesByThreeWayOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit ID of the merge in the destination or target branch.',
        }),
    ).exactOptional(),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The tree ID of the merge in the destination or target branch.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MergeBranchesByThreeWayOutput')

const MergeBranchesByThreeWayInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you want to merge two branches.',
        }),
    ),
    sourceCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    destinationCommitSpecifier: CommitNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).',
        }),
    ),
    targetBranch: BranchNameSchema.and(
      z.any().openapi({ description: 'The branch where the merge is applied. ' }),
    ).exactOptional(),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the person merging the branches. This information is used in the commit information for the merge.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit message to include in the commit information for the merge.',
        }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    conflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'sourceCommitSpecifier', 'destinationCommitSpecifier'],
    title: 'MergeBranchesByThreeWayInput',
  })
  .openapi('MergeBranchesByThreeWayInput')

const MergePullRequestByFastForwardOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about the specified pull request, including the merge.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MergePullRequestByFastForwardOutput')

const MergePullRequestByFastForwardInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pullRequestId', 'repositoryName'],
    title: 'MergePullRequestByFastForwardInput',
  })
  .openapi('MergePullRequestByFastForwardInput')

const TipOfSourceReferenceIsDifferentExceptionSchema = z
  .any()
  .openapi('TipOfSourceReferenceIsDifferentException')

const PullRequestApprovalRulesNotSatisfiedExceptionSchema = z
  .any()
  .openapi('PullRequestApprovalRulesNotSatisfiedException')

const MergePullRequestBySquashOutputSchema = z
  .object({ pullRequest: PullRequestSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MergePullRequestBySquashOutput')

const MergePullRequestBySquashInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.',
        }),
    ).exactOptional(),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit message to include in the commit information for the merge.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the person merging the branches. This information is used in the commit information for the merge.',
        }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    conflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pullRequestId', 'repositoryName'],
    title: 'MergePullRequestBySquashInput',
  })
  .openapi('MergePullRequestBySquashInput')

const MergePullRequestByThreeWayOutputSchema = z
  .object({ pullRequest: PullRequestSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('MergePullRequestByThreeWayOutput')

const MergePullRequestByThreeWayInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the repository where the pull request was created.' }),
    ),
    sourceCommitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.',
        }),
    ).exactOptional(),
    conflictDetailLevel: ConflictDetailLevelTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.',
        }),
    ).exactOptional(),
    conflictResolutionStrategy: ConflictResolutionStrategyTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description: 'The commit message to include in the commit information for the merge.',
        }),
    ).exactOptional(),
    authorName: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the author who created the commit. This information is used as both the author and committer for the commit.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the person merging the branches. This information is used in the commit information for the merge.',
        }),
    ).exactOptional(),
    keepEmptyFolders: KeepEmptyFoldersSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.',
        }),
    ).exactOptional(),
    conflictResolution: ConflictResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pullRequestId', 'repositoryName'],
    title: 'MergePullRequestByThreeWayInput',
  })
  .openapi('MergePullRequestByThreeWayInput')

const OverridePullRequestApprovalRulesInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request for which you want to override all approval rule requirements. To get this information, use <a>GetPullRequest</a>.',
        }),
    ),
    revisionId: RevisionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request. To get the revision ID, use GetPullRequest.',
        }),
    ),
    overrideStatus: OverrideStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply approval rule requirements (REVOKE). REVOKE status is not stored.',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'revisionId', 'overrideStatus'],
    title: 'OverridePullRequestApprovalRulesInput',
  })
  .openapi('OverridePullRequestApprovalRulesInput')

const InvalidOverrideStatusExceptionSchema = z.any().openapi('InvalidOverrideStatusException')

const OverrideStatusRequiredExceptionSchema = z.any().openapi('OverrideStatusRequiredException')

const OverrideAlreadySetExceptionSchema = z.any().openapi('OverrideAlreadySetException')

const PostCommentForComparedCommitOutputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where you posted a comment on the comparison between commits.',
        }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the directionality you established, the full commit ID of the before commit.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'In the directionality you established, the full commit ID of the after commit.',
        }),
    ).exactOptional(),
    beforeBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'In the directionality you established, the blob ID of the before blob.',
        }),
    ).exactOptional(),
    afterBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'In the directionality you established, the blob ID of the after blob.',
        }),
    ).exactOptional(),
    location: LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The location of the comment in the comparison between the two commits.',
        }),
    ).exactOptional(),
    comment: CommentSchema.and(
      z.any().openapi({ description: 'The content of the comment you posted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostCommentForComparedCommitOutput')

const PostCommentForComparedCommitInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where you want to post a comment on the comparison between commits.',
        }),
    ),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'To establish the directionality of the comparison, the full commit ID of the before commit. Required for commenting on any commit unless that commit is the initial commit.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'To establish the directionality of the comparison, the full commit ID of the after commit.',
        }),
    ),
    location: LocationSchema.and(
      z.any().openapi({ description: 'The location of the comparison where you want to comment.' }),
    ).exactOptional(),
    content: ContentSchema.and(
      z.any().openapi({ description: 'The content of the comment you want to make.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'afterCommitId', 'content'],
    title: 'PostCommentForComparedCommitInput',
  })
  .openapi('PostCommentForComparedCommitInput')

const CommentContentRequiredExceptionSchema = z.any().openapi('CommentContentRequiredException')

const CommentContentSizeLimitExceededExceptionSchema = z
  .any()
  .openapi('CommentContentSizeLimitExceededException')

const InvalidFileLocationExceptionSchema = z.any().openapi('InvalidFileLocationException')

const InvalidRelativeFileVersionEnumExceptionSchema = z
  .any()
  .openapi('InvalidRelativeFileVersionEnumException')

const InvalidFilePositionExceptionSchema = z.any().openapi('InvalidFilePositionException')

const BeforeCommitIdAndAfterCommitIdAreSameExceptionSchema = z
  .any()
  .openapi('BeforeCommitIdAndAfterCommitIdAreSameException')

const PostCommentForPullRequestOutputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you posted a comment on a pull request.',
        }),
    ).exactOptional(),
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request. ' }),
    ).exactOptional(),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the source branch used to create the pull request, or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.',
        }),
    ).exactOptional(),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the destination branch where the pull request is merged.',
        }),
    ).exactOptional(),
    beforeBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'In the directionality of the pull request, the blob ID of the before blob.',
        }),
    ).exactOptional(),
    afterBlobId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description: 'In the directionality of the pull request, the blob ID of the after blob.',
        }),
    ).exactOptional(),
    location: LocationSchema.and(
      z.any().openapi({ description: 'The location of the change where you posted your comment.' }),
    ).exactOptional(),
    comment: CommentSchema.and(
      z.any().openapi({ description: 'The content of the comment you posted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostCommentForPullRequestOutput')

const PostCommentForPullRequestInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository where you want to post a comment on a pull request.',
        }),
    ),
    beforeCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.',
        }),
    ),
    afterCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.',
        }),
    ),
    location: LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the change where you want to post your comment. If no location is provided, the comment is posted as a general comment on the pull request difference between the before commit ID and the after commit ID.',
        }),
    ).exactOptional(),
    content: ContentSchema.and(
      z.any().openapi({ description: 'The content of your comment on the change.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['pullRequestId', 'repositoryName', 'beforeCommitId', 'afterCommitId', 'content'],
    title: 'PostCommentForPullRequestInput',
  })
  .openapi('PostCommentForPullRequestInput')

const PostCommentReplyOutputSchema = z
  .object({
    comment: CommentSchema.and(
      z.any().openapi({ description: 'Information about the reply to a comment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PostCommentReplyOutput')

const PostCommentReplyInputSchema = z
  .object({
    inReplyTo: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.',
        }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.',
        }),
    ).exactOptional(),
    content: ContentSchema.and(
      z.any().openapi({ description: 'The contents of your reply to a comment.' }),
    ),
  })
  .openapi({ required: ['inReplyTo', 'content'], title: 'PostCommentReplyInput' })
  .openapi('PostCommentReplyInput')

const PutCommentReactionInputSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the comment to which you want to add or update a reaction.',
        }),
    ),
    reactionValue: ReactionValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none. For information about emoji reaction values supported in AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">AWS CodeCommit User Guide</a>.',
        }),
    ),
  })
  .openapi({ required: ['commentId', 'reactionValue'], title: 'PutCommentReactionInput' })
  .openapi('PutCommentReactionInput')

const InvalidReactionValueExceptionSchema = z.any().openapi('InvalidReactionValueException')

const ReactionValueRequiredExceptionSchema = z.any().openapi('ReactionValueRequiredException')

const ReactionLimitExceededExceptionSchema = z.any().openapi('ReactionLimitExceededException')

const PutFileOutputSchema = z
  .object({
    commitId: ObjectIdSchema.and(
      z
        .any()
        .openapi({ description: 'The full SHA ID of the commit that contains this file change.' }),
    ),
    blobId: ObjectIdSchema.and(
      z.any().openapi({ description: 'The ID of the blob, which is its SHA-1 pointer.' }),
    ),
    treeId: ObjectIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The full SHA-1 pointer of the tree information for the commit that contains this file change.',
        }),
    ),
  })
  .openapi({ required: ['commitId', 'blobId', 'treeId'] })
  .openapi('PutFileOutput')

const PutFileInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you want to add or update the file.',
        }),
    ),
    branchName: BranchNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the branch where you want to add or update the file. If this is an empty repository, this branch is created.',
        }),
    ),
    fileContent: FileContentSchema.and(
      z.any().openapi({ description: 'The content of the file, in binary object format. ' }),
    ),
    filePath: PathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the file you want to add or update, including the relative path to the file in the repository.</p> <note> <p>If the path does not currently exist in the repository, the path is created as part of adding the file.</p> </note>',
        }),
    ),
    fileMode: FileModeTypeEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file mode permissions of the blob. Valid file mode permissions are listed here.',
        }),
    ).exactOptional(),
    parentCommitId: CommitIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required. </p> <p>The commit ID must match the ID of the head commit at the time of the operation. Otherwise, an error occurs, and the file is not added or updated.</p>',
        }),
    ).exactOptional(),
    commitMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message about why this file was added or updated. Although it is optional, a message makes the commit history for your repository more useful.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the person adding or updating the file. Although it is optional, a name makes the commit history for your repository more useful.',
        }),
    ).exactOptional(),
    email: EmailSchema.and(
      z
        .any()
        .openapi({ description: 'An email address for the person adding or updating the file.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName', 'branchName', 'fileContent', 'filePath'],
    title: 'PutFileInput',
  })
  .openapi('PutFileInput')

const FileContentRequiredExceptionSchema = z.any().openapi('FileContentRequiredException')

const SameFileContentExceptionSchema = z.any().openapi('SameFileContentException')

const PutRepositoryTriggersOutputSchema = z
  .object({
    configurationId: RepositoryTriggersConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated unique ID for the create or update operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a put repository triggers operation.',
    required: [],
  })
  .openapi('PutRepositoryTriggersOutput')

const PutRepositoryTriggersInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository where you want to create or update the trigger.',
        }),
    ),
    triggers: RepositoryTriggersListSchema.and(
      z
        .any()
        .openapi({ description: 'The JSON block of configuration information for each trigger.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'triggers'],
    title: 'PutRepositoryTriggersInput',
    description: 'Represents the input of a put repository triggers operation.',
  })
  .openapi('PutRepositoryTriggersInput')

const RepositoryTriggersListRequiredExceptionSchema = z
  .any()
  .openapi('RepositoryTriggersListRequiredException')

const MaximumRepositoryTriggersExceededExceptionSchema = z
  .any()
  .openapi('MaximumRepositoryTriggersExceededException')

const InvalidRepositoryTriggerNameExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerNameException')

const InvalidRepositoryTriggerDestinationArnExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerDestinationArnException')

const InvalidRepositoryTriggerRegionExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerRegionException')

const InvalidRepositoryTriggerCustomDataExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerCustomDataException')

const MaximumBranchesExceededExceptionSchema = z.any().openapi('MaximumBranchesExceededException')

const InvalidRepositoryTriggerBranchNameExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerBranchNameException')

const InvalidRepositoryTriggerEventsExceptionSchema = z
  .any()
  .openapi('InvalidRepositoryTriggerEventsException')

const RepositoryTriggerNameRequiredExceptionSchema = z
  .any()
  .openapi('RepositoryTriggerNameRequiredException')

const RepositoryTriggerDestinationArnRequiredExceptionSchema = z
  .any()
  .openapi('RepositoryTriggerDestinationArnRequiredException')

const RepositoryTriggerBranchNameListRequiredExceptionSchema = z
  .any()
  .openapi('RepositoryTriggerBranchNameListRequiredException')

const RepositoryTriggerEventsListRequiredExceptionSchema = z
  .any()
  .openapi('RepositoryTriggerEventsListRequiredException')

const TagResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.',
        }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'The key-value pair to use when tagging this repository.' }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const TagsMapRequiredExceptionSchema = z.any().openapi('TagsMapRequiredException')

const RepositoryTriggerNameListSchema = z
  .array(RepositoryTriggerNameSchema)
  .openapi('RepositoryTriggerNameList')

const RepositoryTriggerExecutionFailureMessageSchema = z
  .string()
  .openapi('RepositoryTriggerExecutionFailureMessage')

const RepositoryTriggerExecutionFailureSchema = z
  .object({
    trigger: RepositoryTriggerNameSchema.and(
      z.any().openapi({ description: 'The name of the trigger that did not run.' }),
    ).exactOptional(),
    failureMessage: RepositoryTriggerExecutionFailureMessageSchema.and(
      z.any().openapi({ description: 'Message information about the trigger that did not run.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A trigger failed to run.', required: [] })
  .openapi('RepositoryTriggerExecutionFailure')

const RepositoryTriggerExecutionFailureListSchema = z
  .array(RepositoryTriggerExecutionFailureSchema)
  .openapi('RepositoryTriggerExecutionFailureList')

const TestRepositoryTriggersOutputSchema = z
  .object({
    successfulExecutions: RepositoryTriggerNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.',
        }),
    ).exactOptional(),
    failedExecutions: RepositoryTriggerExecutionFailureListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of triggers that were not tested. This list provides the names of the triggers that could not be tested, separated by commas.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a test repository triggers operation.',
    required: [],
  })
  .openapi('TestRepositoryTriggersOutput')

const TestRepositoryTriggersInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The name of the repository in which to test the triggers.' }),
    ),
    triggers: RepositoryTriggersListSchema.and(
      z.any().openapi({ description: 'The list of triggers to test.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'triggers'],
    title: 'TestRepositoryTriggersInput',
    description: 'Represents the input of a test repository triggers operation.',
  })
  .openapi('TestRepositoryTriggersInput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagKeysListSchema = z.array(TagKeySchema).openapi('TagKeysList')

const UntagResourceInputSchema = z
  .object({
    resourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to which you want to remove tags.',
        }),
    ),
    tagKeys: TagKeysListSchema.and(
      z
        .any()
        .openapi({
          description: 'The tag key for each tag that you want to remove from the resource.',
        }),
    ),
  })
  .openapi({ required: ['resourceArn', 'tagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const TagKeysListRequiredExceptionSchema = z.any().openapi('TagKeysListRequiredException')

const InvalidTagKeysListExceptionSchema = z.any().openapi('InvalidTagKeysListException')

const UpdateApprovalRuleTemplateContentOutputSchema = z
  .object({ approvalRuleTemplate: ApprovalRuleTemplateSchema })
  .openapi({ required: ['approvalRuleTemplate'] })
  .openapi('UpdateApprovalRuleTemplateContentOutput')

const UpdateApprovalRuleTemplateContentInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the approval rule template where you want to update the content of the rule. ',
        }),
    ),
    newRuleContent: ApprovalRuleTemplateContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content that replaces the existing content of the rule. Content statements must be complete. You cannot provide only the changes.',
        }),
    ),
    existingRuleContentSha256: RuleContentSha256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using <a>GetPullRequest</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'newRuleContent'],
    title: 'UpdateApprovalRuleTemplateContentInput',
  })
  .openapi('UpdateApprovalRuleTemplateContentInput')

const InvalidRuleContentSha256ExceptionSchema = z.any().openapi('InvalidRuleContentSha256Exception')

const UpdateApprovalRuleTemplateDescriptionOutputSchema = z
  .object({
    approvalRuleTemplate: ApprovalRuleTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'The structure and content of the updated approval rule template.',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplate'] })
  .openapi('UpdateApprovalRuleTemplateDescriptionOutput')

const UpdateApprovalRuleTemplateDescriptionInputSchema = z
  .object({
    approvalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the template for which you want to update the description.',
        }),
    ),
    approvalRuleTemplateDescription: ApprovalRuleTemplateDescriptionSchema.and(
      z.any().openapi({ description: 'The updated description of the approval rule template.' }),
    ),
  })
  .openapi({
    required: ['approvalRuleTemplateName', 'approvalRuleTemplateDescription'],
    title: 'UpdateApprovalRuleTemplateDescriptionInput',
  })
  .openapi('UpdateApprovalRuleTemplateDescriptionInput')

const UpdateApprovalRuleTemplateNameOutputSchema = z
  .object({
    approvalRuleTemplate: ApprovalRuleTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'The structure and content of the updated approval rule template.',
        }),
    ),
  })
  .openapi({ required: ['approvalRuleTemplate'] })
  .openapi('UpdateApprovalRuleTemplateNameOutput')

const UpdateApprovalRuleTemplateNameInputSchema = z
  .object({
    oldApprovalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z.any().openapi({ description: 'The current name of the approval rule template.' }),
    ),
    newApprovalRuleTemplateName: ApprovalRuleTemplateNameSchema.and(
      z
        .any()
        .openapi({ description: 'The new name you want to apply to the approval rule template.' }),
    ),
  })
  .openapi({
    required: ['oldApprovalRuleTemplateName', 'newApprovalRuleTemplateName'],
    title: 'UpdateApprovalRuleTemplateNameInput',
  })
  .openapi('UpdateApprovalRuleTemplateNameInput')

const UpdateCommentOutputSchema = z
  .object({
    comment: CommentSchema.and(
      z.any().openapi({ description: 'Information about the updated comment.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateCommentOutput')

const UpdateCommentInputSchema = z
  .object({
    commentId: CommentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.',
        }),
    ),
    content: ContentSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated content to replace the existing content of the comment.',
        }),
    ),
  })
  .openapi({ required: ['commentId', 'content'], title: 'UpdateCommentInput' })
  .openapi('UpdateCommentInput')

const CommentNotCreatedByCallerExceptionSchema = z
  .any()
  .openapi('CommentNotCreatedByCallerException')

const UpdateDefaultBranchInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the repository to set or change the default branch for.',
        }),
    ),
    defaultBranchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the branch to set as the default.' }),
    ),
  })
  .openapi({
    required: ['repositoryName', 'defaultBranchName'],
    title: 'UpdateDefaultBranchInput',
    description: 'Represents the input of an update default branch operation.',
  })
  .openapi('UpdateDefaultBranchInput')

const UpdatePullRequestApprovalRuleContentOutputSchema = z
  .object({
    approvalRule: ApprovalRuleSchema.and(
      z.any().openapi({ description: 'Information about the updated approval rule.' }),
    ),
  })
  .openapi({ required: ['approvalRule'] })
  .openapi('UpdatePullRequestApprovalRuleContentOutput')

const UpdatePullRequestApprovalRuleContentInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request.' }),
    ),
    approvalRuleName: ApprovalRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the approval rule you want to update.' }),
    ),
    existingRuleContentSha256: RuleContentSha256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using <a>GetPullRequest</a>.',
        }),
    ).exactOptional(),
    newRuleContent: ApprovalRuleContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated content for the approval rule.</p> <note> <p>When you update the content of the approval rule, you can specify approvers in an approval pool in one of two ways:</p> <ul> <li> <p> <b>CodeCommitApprovers</b>: This option only requires an AWS account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the AWS account <i>123456789012</i> and <i>Mary_Major</i>, all of the following are counted as approvals coming from that user:</p> <ul> <li> <p>An IAM user in the account (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p> </li> <li> <p>A federated user identified in IAM as Mary_Major (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p> </li> </ul> <p>This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of <i>Mary_Major</i> (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>) unless you include a wildcard (*Mary_Major).</p> </li> <li> <p> <b>Fully qualified ARN</b>: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role. </p> </li> </ul> <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'approvalRuleName', 'newRuleContent'],
    title: 'UpdatePullRequestApprovalRuleContentInput',
  })
  .openapi('UpdatePullRequestApprovalRuleContentInput')

const ApprovalRuleDoesNotExistExceptionSchema = z.any().openapi('ApprovalRuleDoesNotExistException')

const CannotModifyApprovalRuleFromTemplateExceptionSchema = z
  .any()
  .openapi('CannotModifyApprovalRuleFromTemplateException')

const UpdatePullRequestApprovalStateInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the pull request.' }),
    ),
    revisionId: RevisionIdSchema.and(
      z.any().openapi({ description: 'The system-generated ID of the revision.' }),
    ),
    approvalState: ApprovalStateSchema.and(
      z
        .any()
        .openapi({
          description: 'The approval state to associate with the user on the pull request.',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'revisionId', 'approvalState'],
    title: 'UpdatePullRequestApprovalStateInput',
  })
  .openapi('UpdatePullRequestApprovalStateInput')

const InvalidApprovalStateExceptionSchema = z.any().openapi('InvalidApprovalStateException')

const ApprovalStateRequiredExceptionSchema = z.any().openapi('ApprovalStateRequiredException')

const PullRequestCannotBeApprovedByAuthorExceptionSchema = z
  .any()
  .openapi('PullRequestCannotBeApprovedByAuthorException')

const MaximumNumberOfApprovalsExceededExceptionSchema = z
  .any()
  .openapi('MaximumNumberOfApprovalsExceededException')

const UpdatePullRequestDescriptionOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z.any().openapi({ description: 'Information about the updated pull request.' }),
    ),
  })
  .openapi({ required: ['pullRequest'] })
  .openapi('UpdatePullRequestDescriptionOutput')

const UpdatePullRequestDescriptionInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated content of the description for the pull request. This content replaces the existing description.',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'description'],
    title: 'UpdatePullRequestDescriptionInput',
  })
  .openapi('UpdatePullRequestDescriptionInput')

const UpdatePullRequestStatusOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z.any().openapi({ description: 'Information about the pull request.' }),
    ),
  })
  .openapi({ required: ['pullRequest'] })
  .openapi('UpdatePullRequestStatusOutput')

const UpdatePullRequestStatusInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    pullRequestStatus: PullRequestStatusEnumSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the pull request. The only valid operations are to update the status from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or from <code>CLOSED</code> to <code>CLOSED</code>.',
        }),
    ),
  })
  .openapi({
    required: ['pullRequestId', 'pullRequestStatus'],
    title: 'UpdatePullRequestStatusInput',
  })
  .openapi('UpdatePullRequestStatusInput')

const InvalidPullRequestStatusUpdateExceptionSchema = z
  .any()
  .openapi('InvalidPullRequestStatusUpdateException')

const PullRequestStatusRequiredExceptionSchema = z
  .any()
  .openapi('PullRequestStatusRequiredException')

const UpdatePullRequestTitleOutputSchema = z
  .object({
    pullRequest: PullRequestSchema.and(
      z.any().openapi({ description: 'Information about the updated pull request.' }),
    ),
  })
  .openapi({ required: ['pullRequest'] })
  .openapi('UpdatePullRequestTitleOutput')

const UpdatePullRequestTitleInputSchema = z
  .object({
    pullRequestId: PullRequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.',
        }),
    ),
    title: TitleSchema.and(
      z
        .any()
        .openapi({
          description: 'The updated title of the pull request. This replaces the existing title.',
        }),
    ),
  })
  .openapi({ required: ['pullRequestId', 'title'], title: 'UpdatePullRequestTitleInput' })
  .openapi('UpdatePullRequestTitleInput')

const UpdateRepositoryDescriptionInputSchema = z
  .object({
    repositoryName: RepositoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the repository to set or change the comment or description for.',
        }),
    ),
    repositoryDescription: RepositoryDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['repositoryName'],
    title: 'UpdateRepositoryDescriptionInput',
    description: 'Represents the input of an update repository description operation.',
  })
  .openapi('UpdateRepositoryDescriptionInput')

const UpdateRepositoryNameInputSchema = z
  .object({
    oldName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The current name of the repository.' }),
    ),
    newName: RepositoryNameSchema.and(
      z.any().openapi({ description: 'The new name for the repository.' }),
    ),
  })
  .openapi({
    required: ['oldName', 'newName'],
    title: 'UpdateRepositoryNameInput',
    description: 'Represents the input of an update repository description operation.',
  })
  .openapi('UpdateRepositoryNameInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetCodeCommit20150413AssociateApprovalRuleTemplateWithRepositoryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository',
    description:
      'Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.',
    operationId: 'AssociateApprovalRuleTemplateWithRepository',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: AssociateApprovalRuleTemplateWithRepositoryInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      481: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'MaximumRuleTemplatesAssociatedWithRepositoryException',
        content: {
          'application/json': {
            schema: MaximumRuleTemplatesAssociatedWithRepositoryExceptionSchema,
          },
        },
      },
      484: {
        description: 'RepositoryNameRequiredException',
        content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
      },
      485: {
        description: 'InvalidRepositoryNameException',
        content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
      },
      486: {
        description: 'RepositoryDoesNotExistException',
        content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
      },
      487: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      490: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      491: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositoriesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories',
    description:
      'Creates an association between an approval rule template and one or more specified repositories. ',
    operationId: 'BatchAssociateApprovalRuleTemplateWithRepositories',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BatchAssociateApprovalRuleTemplateWithRepositoriesInputSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: BatchAssociateApprovalRuleTemplateWithRepositoriesOutputSchema,
          },
        },
      },
      480: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      481: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'RepositoryNamesRequiredException',
        content: { 'application/json': { schema: RepositoryNamesRequiredExceptionSchema } },
      },
      484: {
        description: 'MaximumRepositoryNamesExceededException',
        content: { 'application/json': { schema: MaximumRepositoryNamesExceededExceptionSchema } },
      },
      485: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      486: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      487: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts',
  description:
    'Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.',
  operationId: 'BatchDescribeMergeConflicts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.BatchDescribeMergeConflicts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.BatchDescribeMergeConflicts'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchDescribeMergeConflictsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDescribeMergeConflictsOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'MergeOptionRequiredException',
      content: { 'application/json': { schema: MergeOptionRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidMergeOptionException',
      content: { 'application/json': { schema: InvalidMergeOptionExceptionSchema } },
    },
    485: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    486: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    487: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    489: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    490: {
      description: 'InvalidMaxConflictFilesException',
      content: { 'application/json': { schema: InvalidMaxConflictFilesExceptionSchema } },
    },
    491: {
      description: 'InvalidMaxMergeHunksException',
      content: { 'application/json': { schema: InvalidMaxMergeHunksExceptionSchema } },
    },
    492: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    493: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    494: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    495: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    496: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositoriesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories',
    description:
      'Removes the association between an approval rule template and one or more specified repositories. ',
    operationId: 'BatchDisassociateApprovalRuleTemplateFromRepositories',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BatchDisassociateApprovalRuleTemplateFromRepositoriesInputSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutputSchema,
          },
        },
      },
      480: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      481: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'RepositoryNamesRequiredException',
        content: { 'application/json': { schema: RepositoryNamesRequiredExceptionSchema } },
      },
      484: {
        description: 'MaximumRepositoryNamesExceededException',
        content: { 'application/json': { schema: MaximumRepositoryNamesExceededExceptionSchema } },
      },
      485: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      486: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      487: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413BatchGetCommitsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.BatchGetCommits',
  description: 'Returns information about the contents of one or more commits in a repository.',
  operationId: 'BatchGetCommits',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.BatchGetCommits')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.BatchGetCommits'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetCommitsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetCommitsOutputSchema } },
    },
    480: {
      description: 'CommitIdsListRequiredException',
      content: { 'application/json': { schema: CommitIdsListRequiredExceptionSchema } },
    },
    481: {
      description: 'CommitIdsLimitExceededException',
      content: { 'application/json': { schema: CommitIdsLimitExceededExceptionSchema } },
    },
    482: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    484: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413BatchGetRepositoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories',
  description:
    '<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>',
  operationId: 'BatchGetRepositories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.BatchGetRepositories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.BatchGetRepositories'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetRepositoriesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetRepositoriesOutputSchema } },
    },
    480: {
      description: 'RepositoryNamesRequiredException',
      content: { 'application/json': { schema: RepositoryNamesRequiredExceptionSchema } },
    },
    481: {
      description: 'MaximumRepositoryNamesExceededException',
      content: { 'application/json': { schema: MaximumRepositoryNamesExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreateApprovalRuleTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate',
  description:
    'Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.',
  operationId: 'CreateApprovalRuleTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreateApprovalRuleTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreateApprovalRuleTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApprovalRuleTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApprovalRuleTemplateOutputSchema } },
    },
    480: {
      description: 'ApprovalRuleTemplateNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApprovalRuleTemplateNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleTemplateNameAlreadyExistsException',
      content: {
        'application/json': { schema: ApprovalRuleTemplateNameAlreadyExistsExceptionSchema },
      },
    },
    483: {
      description: 'ApprovalRuleTemplateContentRequiredException',
      content: {
        'application/json': { schema: ApprovalRuleTemplateContentRequiredExceptionSchema },
      },
    },
    484: {
      description: 'InvalidApprovalRuleTemplateContentException',
      content: {
        'application/json': { schema: InvalidApprovalRuleTemplateContentExceptionSchema },
      },
    },
    485: {
      description: 'InvalidApprovalRuleTemplateDescriptionException',
      content: {
        'application/json': { schema: InvalidApprovalRuleTemplateDescriptionExceptionSchema },
      },
    },
    486: {
      description: 'NumberOfRuleTemplatesExceededException',
      content: { 'application/json': { schema: NumberOfRuleTemplatesExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreateBranchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreateBranch',
  description:
    "<p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>",
  operationId: 'CreateBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreateBranch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreateBranch'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateBranchInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    484: {
      description: 'BranchNameExistsException',
      content: { 'application/json': { schema: BranchNameExistsExceptionSchema } },
    },
    485: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    486: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    487: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    489: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreateCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreateCommit',
  description: 'Creates a commit for a repository on the tip of a specified branch.',
  operationId: 'CreateCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreateCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreateCommit'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateCommitInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ParentCommitIdRequiredException',
      content: { 'application/json': { schema: ParentCommitIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidParentCommitIdException',
      content: { 'application/json': { schema: InvalidParentCommitIdExceptionSchema } },
    },
    485: {
      description: 'ParentCommitDoesNotExistException',
      content: { 'application/json': { schema: ParentCommitDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'ParentCommitIdOutdatedException',
      content: { 'application/json': { schema: ParentCommitIdOutdatedExceptionSchema } },
    },
    487: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    488: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    489: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    490: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    491: {
      description: 'FileEntryRequiredException',
      content: { 'application/json': { schema: FileEntryRequiredExceptionSchema } },
    },
    492: {
      description: 'MaximumFileEntriesExceededException',
      content: { 'application/json': { schema: MaximumFileEntriesExceededExceptionSchema } },
    },
    493: {
      description: 'PutFileEntryConflictException',
      content: { 'application/json': { schema: PutFileEntryConflictExceptionSchema } },
    },
    494: {
      description: 'SourceFileOrContentRequiredException',
      content: { 'application/json': { schema: SourceFileOrContentRequiredExceptionSchema } },
    },
    495: {
      description: 'FileContentAndSourceFileSpecifiedException',
      content: { 'application/json': { schema: FileContentAndSourceFileSpecifiedExceptionSchema } },
    },
    496: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    497: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    498: {
      description: 'SamePathRequestException',
      content: { 'application/json': { schema: SamePathRequestExceptionSchema } },
    },
    499: {
      description: 'FileDoesNotExistException',
      content: { 'application/json': { schema: FileDoesNotExistExceptionSchema } },
    },
    500: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    501: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    502: {
      description: 'InvalidDeletionParameterException',
      content: { 'application/json': { schema: InvalidDeletionParameterExceptionSchema } },
    },
    503: {
      description: 'RestrictedSourceFileException',
      content: { 'application/json': { schema: RestrictedSourceFileExceptionSchema } },
    },
    504: {
      description: 'FileModeRequiredException',
      content: { 'application/json': { schema: FileModeRequiredExceptionSchema } },
    },
    505: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    506: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    507: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    508: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    509: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    510: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    511: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    512: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    513: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    514: {
      description: 'NoChangeException',
      content: { 'application/json': { schema: NoChangeExceptionSchema } },
    },
    515: {
      description: 'FileNameConflictsWithDirectoryNameException',
      content: {
        'application/json': { schema: FileNameConflictsWithDirectoryNameExceptionSchema },
      },
    },
    516: {
      description: 'DirectoryNameConflictsWithFileNameException',
      content: {
        'application/json': { schema: DirectoryNameConflictsWithFileNameExceptionSchema },
      },
    },
    517: {
      description: 'FilePathConflictsWithSubmodulePathException',
      content: {
        'application/json': { schema: FilePathConflictsWithSubmodulePathExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreatePullRequestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequest',
  description: 'Creates a pull request in the specified repository.',
  operationId: 'CreatePullRequest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreatePullRequest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreatePullRequest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePullRequestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePullRequestOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    488: {
      description: 'ClientRequestTokenRequiredException',
      content: { 'application/json': { schema: ClientRequestTokenRequiredExceptionSchema } },
    },
    489: {
      description: 'InvalidClientRequestTokenException',
      content: { 'application/json': { schema: InvalidClientRequestTokenExceptionSchema } },
    },
    490: {
      description: 'IdempotencyParameterMismatchException',
      content: { 'application/json': { schema: IdempotencyParameterMismatchExceptionSchema } },
    },
    491: {
      description: 'ReferenceNameRequiredException',
      content: { 'application/json': { schema: ReferenceNameRequiredExceptionSchema } },
    },
    492: {
      description: 'InvalidReferenceNameException',
      content: { 'application/json': { schema: InvalidReferenceNameExceptionSchema } },
    },
    493: {
      description: 'ReferenceDoesNotExistException',
      content: { 'application/json': { schema: ReferenceDoesNotExistExceptionSchema } },
    },
    494: {
      description: 'ReferenceTypeNotSupportedException',
      content: { 'application/json': { schema: ReferenceTypeNotSupportedExceptionSchema } },
    },
    495: {
      description: 'TitleRequiredException',
      content: { 'application/json': { schema: TitleRequiredExceptionSchema } },
    },
    496: {
      description: 'InvalidTitleException',
      content: { 'application/json': { schema: InvalidTitleExceptionSchema } },
    },
    497: {
      description: 'InvalidDescriptionException',
      content: { 'application/json': { schema: InvalidDescriptionExceptionSchema } },
    },
    498: {
      description: 'TargetsRequiredException',
      content: { 'application/json': { schema: TargetsRequiredExceptionSchema } },
    },
    499: {
      description: 'InvalidTargetsException',
      content: { 'application/json': { schema: InvalidTargetsExceptionSchema } },
    },
    500: {
      description: 'TargetRequiredException',
      content: { 'application/json': { schema: TargetRequiredExceptionSchema } },
    },
    501: {
      description: 'InvalidTargetException',
      content: { 'application/json': { schema: InvalidTargetExceptionSchema } },
    },
    502: {
      description: 'MultipleRepositoriesInPullRequestException',
      content: { 'application/json': { schema: MultipleRepositoriesInPullRequestExceptionSchema } },
    },
    503: {
      description: 'MaximumOpenPullRequestsExceededException',
      content: { 'application/json': { schema: MaximumOpenPullRequestsExceededExceptionSchema } },
    },
    504: {
      description: 'SourceAndDestinationAreSameException',
      content: { 'application/json': { schema: SourceAndDestinationAreSameExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreatePullRequestApprovalRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule',
  description: 'Creates an approval rule for a pull request.',
  operationId: 'CreatePullRequestApprovalRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreatePullRequestApprovalRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreatePullRequestApprovalRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePullRequestApprovalRuleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePullRequestApprovalRuleOutputSchema } },
    },
    480: {
      description: 'ApprovalRuleNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApprovalRuleNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleNameExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleNameAlreadyExistsException',
      content: { 'application/json': { schema: ApprovalRuleNameAlreadyExistsExceptionSchema } },
    },
    483: {
      description: 'ApprovalRuleContentRequiredException',
      content: { 'application/json': { schema: ApprovalRuleContentRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidApprovalRuleContentException',
      content: { 'application/json': { schema: InvalidApprovalRuleContentExceptionSchema } },
    },
    485: {
      description: 'NumberOfRulesExceededException',
      content: { 'application/json': { schema: NumberOfRulesExceededExceptionSchema } },
    },
    486: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    488: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    489: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    490: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreateRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreateRepository',
  description: 'Creates a new, empty repository.',
  operationId: 'CreateRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreateRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreateRepository'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateRepositoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRepositoryOutputSchema } },
    },
    480: {
      description: 'RepositoryNameExistsException',
      content: { 'application/json': { schema: RepositoryNameExistsExceptionSchema } },
    },
    481: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'InvalidRepositoryDescriptionException',
      content: { 'application/json': { schema: InvalidRepositoryDescriptionExceptionSchema } },
    },
    484: {
      description: 'RepositoryLimitExceededException',
      content: { 'application/json': { schema: RepositoryLimitExceededExceptionSchema } },
    },
    485: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    490: {
      description: 'InvalidTagsMapException',
      content: { 'application/json': { schema: InvalidTagsMapExceptionSchema } },
    },
    491: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    492: {
      description: 'InvalidSystemTagUsageException',
      content: { 'application/json': { schema: InvalidSystemTagUsageExceptionSchema } },
    },
    493: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit',
  description:
    '<p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>',
  operationId: 'CreateUnreferencedMergeCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.CreateUnreferencedMergeCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.CreateUnreferencedMergeCommit'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateUnreferencedMergeCommitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUnreferencedMergeCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    484: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    486: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'MergeOptionRequiredException',
      content: { 'application/json': { schema: MergeOptionRequiredExceptionSchema } },
    },
    488: {
      description: 'InvalidMergeOptionException',
      content: { 'application/json': { schema: InvalidMergeOptionExceptionSchema } },
    },
    489: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    490: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    491: {
      description: 'InvalidConflictResolutionException',
      content: { 'application/json': { schema: InvalidConflictResolutionExceptionSchema } },
    },
    492: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    493: {
      description: 'MaximumConflictResolutionEntriesExceededException',
      content: {
        'application/json': { schema: MaximumConflictResolutionEntriesExceededExceptionSchema },
      },
    },
    494: {
      description: 'MultipleConflictResolutionEntriesException',
      content: { 'application/json': { schema: MultipleConflictResolutionEntriesExceptionSchema } },
    },
    495: {
      description: 'ReplacementTypeRequiredException',
      content: { 'application/json': { schema: ReplacementTypeRequiredExceptionSchema } },
    },
    496: {
      description: 'InvalidReplacementTypeException',
      content: { 'application/json': { schema: InvalidReplacementTypeExceptionSchema } },
    },
    497: {
      description: 'ReplacementContentRequiredException',
      content: { 'application/json': { schema: ReplacementContentRequiredExceptionSchema } },
    },
    498: {
      description: 'InvalidReplacementContentException',
      content: { 'application/json': { schema: InvalidReplacementContentExceptionSchema } },
    },
    499: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    500: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    501: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    502: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    503: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    504: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    505: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    506: {
      description: 'FileModeRequiredException',
      content: { 'application/json': { schema: FileModeRequiredExceptionSchema } },
    },
    507: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    508: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    509: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    510: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    511: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    512: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    513: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    514: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    515: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeleteApprovalRuleTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate',
  description:
    'Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.',
  operationId: 'DeleteApprovalRuleTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeleteApprovalRuleTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeleteApprovalRuleTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApprovalRuleTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApprovalRuleTemplateOutputSchema } },
    },
    480: {
      description: 'ApprovalRuleTemplateNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApprovalRuleTemplateNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleTemplateInUseException',
      content: { 'application/json': { schema: ApprovalRuleTemplateInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeleteBranchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeleteBranch',
  description:
    'Deletes a branch from a repository, unless that branch is the default branch for the repository. ',
  operationId: 'DeleteBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeleteBranch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeleteBranch'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteBranchInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBranchOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    485: {
      description: 'DefaultBranchCannotBeDeletedException',
      content: { 'application/json': { schema: DefaultBranchCannotBeDeletedExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeleteCommentContentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent',
  description:
    'Deletes the content of a comment made on a change, file, or commit in a repository.',
  operationId: 'DeleteCommentContent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeleteCommentContent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeleteCommentContent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCommentContentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCommentContentOutputSchema } },
    },
    480: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
    483: {
      description: 'CommentDeletedException',
      content: { 'application/json': { schema: CommentDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeleteFileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeleteFile',
  description:
    'Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.',
  operationId: 'DeleteFile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeleteFile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeleteFile'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFileInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFileOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ParentCommitIdRequiredException',
      content: { 'application/json': { schema: ParentCommitIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidParentCommitIdException',
      content: { 'application/json': { schema: InvalidParentCommitIdExceptionSchema } },
    },
    485: {
      description: 'ParentCommitDoesNotExistException',
      content: { 'application/json': { schema: ParentCommitDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'ParentCommitIdOutdatedException',
      content: { 'application/json': { schema: ParentCommitIdOutdatedExceptionSchema } },
    },
    487: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    488: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    489: {
      description: 'FileDoesNotExistException',
      content: { 'application/json': { schema: FileDoesNotExistExceptionSchema } },
    },
    490: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    491: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    492: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    493: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    494: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    495: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    496: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    497: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    501: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeletePullRequestApprovalRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule',
  description:
    'Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.',
  operationId: 'DeletePullRequestApprovalRule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeletePullRequestApprovalRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeletePullRequestApprovalRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePullRequestApprovalRuleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePullRequestApprovalRuleOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    484: {
      description: 'ApprovalRuleNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleNameRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidApprovalRuleNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleNameExceptionSchema } },
    },
    486: {
      description: 'CannotDeleteApprovalRuleFromTemplateException',
      content: {
        'application/json': { schema: CannotDeleteApprovalRuleFromTemplateExceptionSchema },
      },
    },
    487: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DeleteRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DeleteRepository',
  description:
    '<p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>',
  operationId: 'DeleteRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DeleteRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DeleteRepository'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRepositoryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRepositoryOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    483: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DescribeMergeConflictsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts',
  description:
    'Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.',
  operationId: 'DescribeMergeConflicts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DescribeMergeConflicts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DescribeMergeConflicts'] },
          },
        }),
    }),
    query: z.object({
      maxMergeHunks: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxMergeHunks',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMergeConflictsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMergeConflictsOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'MergeOptionRequiredException',
      content: { 'application/json': { schema: MergeOptionRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidMergeOptionException',
      content: { 'application/json': { schema: InvalidMergeOptionExceptionSchema } },
    },
    485: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    486: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    487: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    489: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    490: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    491: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    492: {
      description: 'FileDoesNotExistException',
      content: { 'application/json': { schema: FileDoesNotExistExceptionSchema } },
    },
    493: {
      description: 'InvalidMaxMergeHunksException',
      content: { 'application/json': { schema: InvalidMaxMergeHunksExceptionSchema } },
    },
    494: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    495: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    496: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    497: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    498: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    501: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    502: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DescribePullRequestEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents',
  description: 'Returns information about one or more pull request events.',
  operationId: 'DescribePullRequestEvents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.DescribePullRequestEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.DescribePullRequestEvents'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePullRequestEventsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePullRequestEventsOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidPullRequestEventTypeException',
      content: { 'application/json': { schema: InvalidPullRequestEventTypeExceptionSchema } },
    },
    484: {
      description: 'InvalidActorArnException',
      content: { 'application/json': { schema: InvalidActorArnExceptionSchema } },
    },
    485: {
      description: 'ActorDoesNotExistException',
      content: { 'application/json': { schema: ActorDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    487: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413DisassociateApprovalRuleTemplateFromRepositoryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository',
    description:
      'Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.',
    operationId: 'DisassociateApprovalRuleTemplateFromRepository',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisassociateApprovalRuleTemplateFromRepositoryInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      481: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'RepositoryNameRequiredException',
        content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
      },
      484: {
        description: 'InvalidRepositoryNameException',
        content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
      },
      485: {
        description: 'RepositoryDoesNotExistException',
        content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
      },
      486: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      487: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      490: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413EvaluatePullRequestApprovalRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules',
  description:
    'Evaluates whether a pull request has met all the conditions specified in its associated approval rules.',
  operationId: 'EvaluatePullRequestApprovalRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.EvaluatePullRequestApprovalRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeCommit_20150413.EvaluatePullRequestApprovalRules'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: EvaluatePullRequestApprovalRulesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EvaluatePullRequestApprovalRulesOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRevisionIdException',
      content: { 'application/json': { schema: InvalidRevisionIdExceptionSchema } },
    },
    484: {
      description: 'RevisionIdRequiredException',
      content: { 'application/json': { schema: RevisionIdRequiredExceptionSchema } },
    },
    485: {
      description: 'RevisionNotCurrentException',
      content: { 'application/json': { schema: RevisionNotCurrentExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetApprovalRuleTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate',
  description: 'Returns information about a specified approval rule template.',
  operationId: 'GetApprovalRuleTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetApprovalRuleTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetApprovalRuleTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetApprovalRuleTemplateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApprovalRuleTemplateOutputSchema } },
    },
    480: {
      description: 'ApprovalRuleTemplateNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidApprovalRuleTemplateNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleTemplateDoesNotExistException',
      content: { 'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetBlobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetBlob',
  description: 'Returns the base-64 encoded content of an individual blob in a repository.',
  operationId: 'GetBlob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetBlob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetBlob'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetBlobInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBlobOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'BlobIdRequiredException',
      content: { 'application/json': { schema: BlobIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidBlobIdException',
      content: { 'application/json': { schema: InvalidBlobIdExceptionSchema } },
    },
    485: {
      description: 'BlobIdDoesNotExistException',
      content: { 'application/json': { schema: BlobIdDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    491: {
      description: 'FileTooLargeException',
      content: { 'application/json': { schema: FileTooLargeExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetBranchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetBranch',
  description:
    'Returns information about a repository branch, including its name and the last commit ID.',
  operationId: 'GetBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetBranch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetBranch'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetBranchInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBranchOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    485: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetCommentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetComment',
  description:
    '<p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>',
  operationId: 'GetComment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetComment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetComment'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetCommentInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCommentOutputSchema } },
    },
    480: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'CommentDeletedException',
      content: { 'application/json': { schema: CommentDeletedExceptionSchema } },
    },
    482: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
    484: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetCommentReactionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetCommentReactions',
  description:
    'Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.',
  operationId: 'GetCommentReactions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetCommentReactions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetCommentReactions'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCommentReactionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCommentReactionsOutputSchema } },
    },
    480: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
    483: {
      description: 'InvalidReactionUserArnException',
      content: { 'application/json': { schema: InvalidReactionUserArnExceptionSchema } },
    },
    484: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    485: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    486: {
      description: 'CommentDeletedException',
      content: { 'application/json': { schema: CommentDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetCommentsForComparedCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit',
  description:
    '<p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>',
  operationId: 'GetCommentsForComparedCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetCommentsForComparedCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetCommentsForComparedCommit'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCommentsForComparedCommitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCommentsForComparedCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    485: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    487: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetCommentsForPullRequestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest',
  description:
    '<p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>',
  operationId: 'GetCommentsForPullRequest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetCommentsForPullRequest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetCommentsForPullRequest'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCommentsForPullRequestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCommentsForPullRequestOutputSchema } },
    },
    480: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    481: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    483: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    484: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    486: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    487: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    488: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    489: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    490: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    491: {
      description: 'RepositoryNotAssociatedWithPullRequestException',
      content: {
        'application/json': { schema: RepositoryNotAssociatedWithPullRequestExceptionSchema },
      },
    },
    492: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    496: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetCommit',
  description:
    'Returns information about a commit, including commit message and committer information.',
  operationId: 'GetCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetCommit'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetCommitInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    485: {
      description: 'CommitIdDoesNotExistException',
      content: { 'application/json': { schema: CommitIdDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetDifferencesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetDifferences',
  description:
    'Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.',
  operationId: 'GetDifferences',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetDifferences')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetDifferences'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetDifferencesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDifferencesOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    484: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    486: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    487: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    488: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    489: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    490: {
      description: 'PathDoesNotExistException',
      content: { 'application/json': { schema: PathDoesNotExistExceptionSchema } },
    },
    491: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetFileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetFile',
  description: 'Returns the base-64 encoded contents of a specified file and its metadata.',
  operationId: 'GetFile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetFile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetFile'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetFileInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFileOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    484: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    486: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    487: {
      description: 'FileDoesNotExistException',
      content: { 'application/json': { schema: FileDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    493: {
      description: 'FileTooLargeException',
      content: { 'application/json': { schema: FileTooLargeExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetFolderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetFolder',
  description: 'Returns the contents of a specified folder in a repository.',
  operationId: 'GetFolder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetFolder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetFolder'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetFolderInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFolderOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    484: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    486: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    487: {
      description: 'FolderDoesNotExistException',
      content: { 'application/json': { schema: FolderDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetMergeCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetMergeCommit',
  description: 'Returns information about a specified merge commit.',
  operationId: 'GetMergeCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetMergeCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetMergeCommit'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMergeCommitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMergeCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    485: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    487: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetMergeConflictsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts',
  description:
    'Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.',
  operationId: 'GetMergeConflicts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetMergeConflicts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetMergeConflicts'] },
          },
        }),
    }),
    query: z.object({
      maxConflictFiles: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxConflictFiles',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMergeConflictsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMergeConflictsOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'MergeOptionRequiredException',
      content: { 'application/json': { schema: MergeOptionRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidMergeOptionException',
      content: { 'application/json': { schema: InvalidMergeOptionExceptionSchema } },
    },
    485: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    486: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    487: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    488: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    489: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    490: {
      description: 'InvalidMaxConflictFilesException',
      content: { 'application/json': { schema: InvalidMaxConflictFilesExceptionSchema } },
    },
    491: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    492: {
      description: 'InvalidDestinationCommitSpecifierException',
      content: { 'application/json': { schema: InvalidDestinationCommitSpecifierExceptionSchema } },
    },
    493: {
      description: 'InvalidSourceCommitSpecifierException',
      content: { 'application/json': { schema: InvalidSourceCommitSpecifierExceptionSchema } },
    },
    494: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    495: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    496: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    497: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    501: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetMergeOptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetMergeOptions',
  description:
    'Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.',
  operationId: 'GetMergeOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetMergeOptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetMergeOptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMergeOptionsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMergeOptionsOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    484: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    486: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    487: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    488: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    489: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    490: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    491: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetPullRequestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetPullRequest',
  description: 'Gets information about a pull request in a specified repository.',
  operationId: 'GetPullRequest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetPullRequest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetPullRequest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPullRequestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPullRequestOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetPullRequestApprovalStatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates',
  description:
    'Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.',
  operationId: 'GetPullRequestApprovalStates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetPullRequestApprovalStates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetPullRequestApprovalStates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPullRequestApprovalStatesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPullRequestApprovalStatesOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRevisionIdException',
      content: { 'application/json': { schema: InvalidRevisionIdExceptionSchema } },
    },
    484: {
      description: 'RevisionIdRequiredException',
      content: { 'application/json': { schema: RevisionIdRequiredExceptionSchema } },
    },
    485: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetPullRequestOverrideStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState',
  description:
    'Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.',
  operationId: 'GetPullRequestOverrideState',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetPullRequestOverrideState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetPullRequestOverrideState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPullRequestOverrideStateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPullRequestOverrideStateOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRevisionIdException',
      content: { 'application/json': { schema: InvalidRevisionIdExceptionSchema } },
    },
    484: {
      description: 'RevisionIdRequiredException',
      content: { 'application/json': { schema: RevisionIdRequiredExceptionSchema } },
    },
    485: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetRepositoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetRepository',
  description:
    '<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>',
  operationId: 'GetRepository',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetRepository')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetRepository'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRepositoryInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413GetRepositoryTriggersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers',
  description: 'Gets information about triggers configured for a repository.',
  operationId: 'GetRepositoryTriggers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.GetRepositoryTriggers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.GetRepositoryTriggers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRepositoryTriggersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRepositoryTriggersOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413ListApprovalRuleTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates',
  description:
    'Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.',
  operationId: 'ListApprovalRuleTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.ListApprovalRuleTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.ListApprovalRuleTemplates'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListApprovalRuleTemplatesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApprovalRuleTemplatesOutputSchema } },
    },
    480: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    481: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepositoryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository',
    description:
      'Lists all approval rule templates that are associated with a specified repository.',
    operationId: 'ListAssociatedApprovalRuleTemplatesForRepository',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: ListAssociatedApprovalRuleTemplatesForRepositoryInputSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: ListAssociatedApprovalRuleTemplatesForRepositoryOutputSchema,
          },
        },
      },
      480: {
        description: 'RepositoryNameRequiredException',
        content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
      },
      481: {
        description: 'InvalidRepositoryNameException',
        content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
      },
      482: {
        description: 'RepositoryDoesNotExistException',
        content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
      },
      483: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      484: {
        description: 'InvalidContinuationTokenException',
        content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
      },
      485: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      486: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      487: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413ListBranchesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.ListBranches',
  description: 'Gets information about one or more branches in a repository.',
  operationId: 'ListBranches',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.ListBranches')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.ListBranches'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListBranchesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBranchesOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    484: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    488: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413ListPullRequestsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.ListPullRequests',
  description:
    'Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.',
  operationId: 'ListPullRequests',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.ListPullRequests')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.ListPullRequests'] },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPullRequestsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPullRequestsOutputSchema } },
    },
    480: {
      description: 'InvalidPullRequestStatusException',
      content: { 'application/json': { schema: InvalidPullRequestStatusExceptionSchema } },
    },
    481: {
      description: 'InvalidAuthorArnException',
      content: { 'application/json': { schema: InvalidAuthorArnExceptionSchema } },
    },
    482: {
      description: 'AuthorDoesNotExistException',
      content: { 'application/json': { schema: AuthorDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    485: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'InvalidMaxResultsException',
      content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
    },
    487: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
    488: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413ListRepositoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.ListRepositories',
  description: 'Gets information about one or more repositories.',
  operationId: 'ListRepositories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.ListRepositories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.ListRepositories'] },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRepositoriesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRepositoriesOutputSchema } },
    },
    480: {
      description: 'InvalidSortByException',
      content: { 'application/json': { schema: InvalidSortByExceptionSchema } },
    },
    481: {
      description: 'InvalidOrderException',
      content: { 'application/json': { schema: InvalidOrderExceptionSchema } },
    },
    482: {
      description: 'InvalidContinuationTokenException',
      content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413ListRepositoriesForApprovalRuleTemplateRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate',
    description: 'Lists all repositories associated with the specified approval rule template.',
    operationId: 'ListRepositoriesForApprovalRuleTemplate',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate'],
              },
            },
          }),
      }),
      query: z.object({
        maxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: ListRepositoriesForApprovalRuleTemplateInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListRepositoriesForApprovalRuleTemplateOutputSchema },
        },
      },
      480: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      481: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'InvalidMaxResultsException',
        content: { 'application/json': { schema: InvalidMaxResultsExceptionSchema } },
      },
      484: {
        description: 'InvalidContinuationTokenException',
        content: { 'application/json': { schema: InvalidContinuationTokenExceptionSchema } },
      },
      485: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      486: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      487: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      488: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      489: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.ListTagsForResource',
  description:
    'Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceArnException',
      content: { 'application/json': { schema: InvalidResourceArnExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergeBranchesByFastForwardRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward',
  description: 'Merges two branches using the fast-forward merge strategy.',
  operationId: 'MergeBranchesByFastForward',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergeBranchesByFastForward')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergeBranchesByFastForward'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergeBranchesByFastForwardInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergeBranchesByFastForwardOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    484: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    486: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidTargetBranchException',
      content: { 'application/json': { schema: InvalidTargetBranchExceptionSchema } },
    },
    488: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    489: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    490: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    491: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    492: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    493: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    494: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    496: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergeBranchesBySquashRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash',
  description: 'Merges two branches using the squash merge strategy.',
  operationId: 'MergeBranchesBySquash',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergeBranchesBySquash')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergeBranchesBySquash'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergeBranchesBySquashInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergeBranchesBySquashOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    484: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    486: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidTargetBranchException',
      content: { 'application/json': { schema: InvalidTargetBranchExceptionSchema } },
    },
    488: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    489: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    490: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    491: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    492: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    493: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    494: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    495: {
      description: 'InvalidConflictResolutionException',
      content: { 'application/json': { schema: InvalidConflictResolutionExceptionSchema } },
    },
    496: {
      description: 'MaximumConflictResolutionEntriesExceededException',
      content: {
        'application/json': { schema: MaximumConflictResolutionEntriesExceededExceptionSchema },
      },
    },
    497: {
      description: 'MultipleConflictResolutionEntriesException',
      content: { 'application/json': { schema: MultipleConflictResolutionEntriesExceptionSchema } },
    },
    498: {
      description: 'ReplacementTypeRequiredException',
      content: { 'application/json': { schema: ReplacementTypeRequiredExceptionSchema } },
    },
    499: {
      description: 'InvalidReplacementTypeException',
      content: { 'application/json': { schema: InvalidReplacementTypeExceptionSchema } },
    },
    500: {
      description: 'ReplacementContentRequiredException',
      content: { 'application/json': { schema: ReplacementContentRequiredExceptionSchema } },
    },
    501: {
      description: 'InvalidReplacementContentException',
      content: { 'application/json': { schema: InvalidReplacementContentExceptionSchema } },
    },
    502: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    503: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    504: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    505: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    506: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    507: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    508: {
      description: 'FileModeRequiredException',
      content: { 'application/json': { schema: FileModeRequiredExceptionSchema } },
    },
    509: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    510: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    511: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    512: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    513: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    514: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    515: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    516: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    517: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    518: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergeBranchesByThreeWayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay',
  description: 'Merges two specified branches using the three-way merge strategy.',
  operationId: 'MergeBranchesByThreeWay',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergeBranchesByThreeWay')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergeBranchesByThreeWay'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergeBranchesByThreeWayInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergeBranchesByThreeWayOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    484: {
      description: 'CommitRequiredException',
      content: { 'application/json': { schema: CommitRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidCommitException',
      content: { 'application/json': { schema: InvalidCommitExceptionSchema } },
    },
    486: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidTargetBranchException',
      content: { 'application/json': { schema: InvalidTargetBranchExceptionSchema } },
    },
    488: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    489: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    490: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    491: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    492: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    493: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    494: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    495: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    496: {
      description: 'InvalidConflictResolutionException',
      content: { 'application/json': { schema: InvalidConflictResolutionExceptionSchema } },
    },
    497: {
      description: 'MaximumConflictResolutionEntriesExceededException',
      content: {
        'application/json': { schema: MaximumConflictResolutionEntriesExceededExceptionSchema },
      },
    },
    498: {
      description: 'MultipleConflictResolutionEntriesException',
      content: { 'application/json': { schema: MultipleConflictResolutionEntriesExceptionSchema } },
    },
    499: {
      description: 'ReplacementTypeRequiredException',
      content: { 'application/json': { schema: ReplacementTypeRequiredExceptionSchema } },
    },
    500: {
      description: 'InvalidReplacementTypeException',
      content: { 'application/json': { schema: InvalidReplacementTypeExceptionSchema } },
    },
    501: {
      description: 'ReplacementContentRequiredException',
      content: { 'application/json': { schema: ReplacementContentRequiredExceptionSchema } },
    },
    502: {
      description: 'InvalidReplacementContentException',
      content: { 'application/json': { schema: InvalidReplacementContentExceptionSchema } },
    },
    503: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    504: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    505: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    506: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    507: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    508: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    509: {
      description: 'FileModeRequiredException',
      content: { 'application/json': { schema: FileModeRequiredExceptionSchema } },
    },
    510: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    511: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    512: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    513: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    514: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    515: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    516: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    517: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    518: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergePullRequestByFastForwardRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward',
  description:
    'Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.',
  operationId: 'MergePullRequestByFastForward',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergePullRequestByFastForward')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergePullRequestByFastForward'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergePullRequestByFastForwardInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergePullRequestByFastForwardOutputSchema } },
    },
    480: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    481: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    482: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    484: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    485: {
      description: 'TipOfSourceReferenceIsDifferentException',
      content: { 'application/json': { schema: TipOfSourceReferenceIsDifferentExceptionSchema } },
    },
    486: {
      description: 'ReferenceDoesNotExistException',
      content: { 'application/json': { schema: ReferenceDoesNotExistExceptionSchema } },
    },
    487: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    488: {
      description: 'RepositoryNotAssociatedWithPullRequestException',
      content: {
        'application/json': { schema: RepositoryNotAssociatedWithPullRequestExceptionSchema },
      },
    },
    489: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    490: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    491: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    492: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    493: {
      description: 'PullRequestApprovalRulesNotSatisfiedException',
      content: {
        'application/json': { schema: PullRequestApprovalRulesNotSatisfiedExceptionSchema },
      },
    },
    494: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    496: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergePullRequestBySquashRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash',
  description:
    'Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.',
  operationId: 'MergePullRequestBySquash',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergePullRequestBySquash')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergePullRequestBySquash'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergePullRequestBySquashInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergePullRequestBySquashOutputSchema } },
    },
    480: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    481: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    484: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    485: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    486: {
      description: 'TipOfSourceReferenceIsDifferentException',
      content: { 'application/json': { schema: TipOfSourceReferenceIsDifferentExceptionSchema } },
    },
    487: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    488: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    489: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    490: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    491: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    492: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    493: {
      description: 'InvalidConflictResolutionException',
      content: { 'application/json': { schema: InvalidConflictResolutionExceptionSchema } },
    },
    494: {
      description: 'ReplacementTypeRequiredException',
      content: { 'application/json': { schema: ReplacementTypeRequiredExceptionSchema } },
    },
    495: {
      description: 'InvalidReplacementTypeException',
      content: { 'application/json': { schema: InvalidReplacementTypeExceptionSchema } },
    },
    496: {
      description: 'MultipleConflictResolutionEntriesException',
      content: { 'application/json': { schema: MultipleConflictResolutionEntriesExceptionSchema } },
    },
    497: {
      description: 'ReplacementContentRequiredException',
      content: { 'application/json': { schema: ReplacementContentRequiredExceptionSchema } },
    },
    498: {
      description: 'MaximumConflictResolutionEntriesExceededException',
      content: {
        'application/json': { schema: MaximumConflictResolutionEntriesExceededExceptionSchema },
      },
    },
    499: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    500: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    501: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    502: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    503: {
      description: 'InvalidReplacementContentException',
      content: { 'application/json': { schema: InvalidReplacementContentExceptionSchema } },
    },
    504: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    505: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    506: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    507: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    508: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    509: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    510: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    511: {
      description: 'RepositoryNotAssociatedWithPullRequestException',
      content: {
        'application/json': { schema: RepositoryNotAssociatedWithPullRequestExceptionSchema },
      },
    },
    512: {
      description: 'PullRequestApprovalRulesNotSatisfiedException',
      content: {
        'application/json': { schema: PullRequestApprovalRulesNotSatisfiedExceptionSchema },
      },
    },
    513: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    514: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    515: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    516: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    517: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413MergePullRequestByThreeWayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay',
  description:
    'Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.',
  operationId: 'MergePullRequestByThreeWay',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.MergePullRequestByThreeWay')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.MergePullRequestByThreeWay'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergePullRequestByThreeWayInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergePullRequestByThreeWayOutputSchema } },
    },
    480: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    481: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    484: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    485: {
      description: 'ManualMergeRequiredException',
      content: { 'application/json': { schema: ManualMergeRequiredExceptionSchema } },
    },
    486: {
      description: 'TipOfSourceReferenceIsDifferentException',
      content: { 'application/json': { schema: TipOfSourceReferenceIsDifferentExceptionSchema } },
    },
    487: {
      description: 'TipsDivergenceExceededException',
      content: { 'application/json': { schema: TipsDivergenceExceededExceptionSchema } },
    },
    488: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    489: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    490: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    491: {
      description: 'InvalidConflictDetailLevelException',
      content: { 'application/json': { schema: InvalidConflictDetailLevelExceptionSchema } },
    },
    492: {
      description: 'InvalidConflictResolutionStrategyException',
      content: { 'application/json': { schema: InvalidConflictResolutionStrategyExceptionSchema } },
    },
    493: {
      description: 'InvalidConflictResolutionException',
      content: { 'application/json': { schema: InvalidConflictResolutionExceptionSchema } },
    },
    494: {
      description: 'ReplacementTypeRequiredException',
      content: { 'application/json': { schema: ReplacementTypeRequiredExceptionSchema } },
    },
    495: {
      description: 'InvalidReplacementTypeException',
      content: { 'application/json': { schema: InvalidReplacementTypeExceptionSchema } },
    },
    496: {
      description: 'MultipleConflictResolutionEntriesException',
      content: { 'application/json': { schema: MultipleConflictResolutionEntriesExceptionSchema } },
    },
    497: {
      description: 'ReplacementContentRequiredException',
      content: { 'application/json': { schema: ReplacementContentRequiredExceptionSchema } },
    },
    498: {
      description: 'MaximumConflictResolutionEntriesExceededException',
      content: {
        'application/json': { schema: MaximumConflictResolutionEntriesExceededExceptionSchema },
      },
    },
    499: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    500: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    501: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    502: {
      description: 'InvalidReplacementContentException',
      content: { 'application/json': { schema: InvalidReplacementContentExceptionSchema } },
    },
    503: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    504: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    505: {
      description: 'MaximumFileContentToLoadExceededException',
      content: { 'application/json': { schema: MaximumFileContentToLoadExceededExceptionSchema } },
    },
    506: {
      description: 'MaximumItemsToCompareExceededException',
      content: { 'application/json': { schema: MaximumItemsToCompareExceededExceptionSchema } },
    },
    507: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    508: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    509: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    510: {
      description: 'RepositoryNotAssociatedWithPullRequestException',
      content: {
        'application/json': { schema: RepositoryNotAssociatedWithPullRequestExceptionSchema },
      },
    },
    511: {
      description: 'ConcurrentReferenceUpdateException',
      content: { 'application/json': { schema: ConcurrentReferenceUpdateExceptionSchema } },
    },
    512: {
      description: 'PullRequestApprovalRulesNotSatisfiedException',
      content: {
        'application/json': { schema: PullRequestApprovalRulesNotSatisfiedExceptionSchema },
      },
    },
    513: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    514: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    515: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    516: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    517: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413OverridePullRequestApprovalRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules',
  description:
    'Sets aside (overrides) all approval rule requirements for a specified pull request.',
  operationId: 'OverridePullRequestApprovalRules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.OverridePullRequestApprovalRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeCommit_20150413.OverridePullRequestApprovalRules'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OverridePullRequestApprovalRulesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRevisionIdException',
      content: { 'application/json': { schema: InvalidRevisionIdExceptionSchema } },
    },
    484: {
      description: 'RevisionIdRequiredException',
      content: { 'application/json': { schema: RevisionIdRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidOverrideStatusException',
      content: { 'application/json': { schema: InvalidOverrideStatusExceptionSchema } },
    },
    486: {
      description: 'OverrideStatusRequiredException',
      content: { 'application/json': { schema: OverrideStatusRequiredExceptionSchema } },
    },
    487: {
      description: 'OverrideAlreadySetException',
      content: { 'application/json': { schema: OverrideAlreadySetExceptionSchema } },
    },
    488: {
      description: 'RevisionNotCurrentException',
      content: { 'application/json': { schema: RevisionNotCurrentExceptionSchema } },
    },
    489: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    490: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    491: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PostCommentForComparedCommitRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit',
  description: 'Posts a comment on the comparison between two commits.',
  operationId: 'PostCommentForComparedCommit',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PostCommentForComparedCommit')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PostCommentForComparedCommit'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostCommentForComparedCommitInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostCommentForComparedCommitOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'ClientRequestTokenRequiredException',
      content: { 'application/json': { schema: ClientRequestTokenRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidClientRequestTokenException',
      content: { 'application/json': { schema: InvalidClientRequestTokenExceptionSchema } },
    },
    485: {
      description: 'IdempotencyParameterMismatchException',
      content: { 'application/json': { schema: IdempotencyParameterMismatchExceptionSchema } },
    },
    486: {
      description: 'CommentContentRequiredException',
      content: { 'application/json': { schema: CommentContentRequiredExceptionSchema } },
    },
    487: {
      description: 'CommentContentSizeLimitExceededException',
      content: { 'application/json': { schema: CommentContentSizeLimitExceededExceptionSchema } },
    },
    488: {
      description: 'InvalidFileLocationException',
      content: { 'application/json': { schema: InvalidFileLocationExceptionSchema } },
    },
    489: {
      description: 'InvalidRelativeFileVersionEnumException',
      content: { 'application/json': { schema: InvalidRelativeFileVersionEnumExceptionSchema } },
    },
    490: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    491: {
      description: 'InvalidFilePositionException',
      content: { 'application/json': { schema: InvalidFilePositionExceptionSchema } },
    },
    492: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    493: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    494: {
      description: 'BeforeCommitIdAndAfterCommitIdAreSameException',
      content: {
        'application/json': { schema: BeforeCommitIdAndAfterCommitIdAreSameExceptionSchema },
      },
    },
    495: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    496: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    500: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    501: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    502: {
      description: 'PathDoesNotExistException',
      content: { 'application/json': { schema: PathDoesNotExistExceptionSchema } },
    },
    503: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PostCommentForPullRequestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest',
  description: 'Posts a comment on a pull request.',
  operationId: 'PostCommentForPullRequest',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PostCommentForPullRequest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PostCommentForPullRequest'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostCommentForPullRequestInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostCommentForPullRequestOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'RepositoryNotAssociatedWithPullRequestException',
      content: {
        'application/json': { schema: RepositoryNotAssociatedWithPullRequestExceptionSchema },
      },
    },
    484: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    485: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    487: {
      description: 'ClientRequestTokenRequiredException',
      content: { 'application/json': { schema: ClientRequestTokenRequiredExceptionSchema } },
    },
    488: {
      description: 'InvalidClientRequestTokenException',
      content: { 'application/json': { schema: InvalidClientRequestTokenExceptionSchema } },
    },
    489: {
      description: 'IdempotencyParameterMismatchException',
      content: { 'application/json': { schema: IdempotencyParameterMismatchExceptionSchema } },
    },
    490: {
      description: 'CommentContentRequiredException',
      content: { 'application/json': { schema: CommentContentRequiredExceptionSchema } },
    },
    491: {
      description: 'CommentContentSizeLimitExceededException',
      content: { 'application/json': { schema: CommentContentSizeLimitExceededExceptionSchema } },
    },
    492: {
      description: 'InvalidFileLocationException',
      content: { 'application/json': { schema: InvalidFileLocationExceptionSchema } },
    },
    493: {
      description: 'InvalidRelativeFileVersionEnumException',
      content: { 'application/json': { schema: InvalidRelativeFileVersionEnumExceptionSchema } },
    },
    494: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    495: {
      description: 'InvalidFilePositionException',
      content: { 'application/json': { schema: InvalidFilePositionExceptionSchema } },
    },
    496: {
      description: 'CommitIdRequiredException',
      content: { 'application/json': { schema: CommitIdRequiredExceptionSchema } },
    },
    497: {
      description: 'InvalidCommitIdException',
      content: { 'application/json': { schema: InvalidCommitIdExceptionSchema } },
    },
    498: {
      description: 'BeforeCommitIdAndAfterCommitIdAreSameException',
      content: {
        'application/json': { schema: BeforeCommitIdAndAfterCommitIdAreSameExceptionSchema },
      },
    },
    499: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    501: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    502: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    503: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    504: {
      description: 'CommitDoesNotExistException',
      content: { 'application/json': { schema: CommitDoesNotExistExceptionSchema } },
    },
    505: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    506: {
      description: 'PathDoesNotExistException',
      content: { 'application/json': { schema: PathDoesNotExistExceptionSchema } },
    },
    507: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PostCommentReplyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PostCommentReply',
  description:
    'Posts a comment in reply to an existing comment on a comparison between commits or a pull request.',
  operationId: 'PostCommentReply',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PostCommentReply')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PostCommentReply'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PostCommentReplyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PostCommentReplyOutputSchema } },
    },
    480: {
      description: 'ClientRequestTokenRequiredException',
      content: { 'application/json': { schema: ClientRequestTokenRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidClientRequestTokenException',
      content: { 'application/json': { schema: InvalidClientRequestTokenExceptionSchema } },
    },
    482: {
      description: 'IdempotencyParameterMismatchException',
      content: { 'application/json': { schema: IdempotencyParameterMismatchExceptionSchema } },
    },
    483: {
      description: 'CommentContentRequiredException',
      content: { 'application/json': { schema: CommentContentRequiredExceptionSchema } },
    },
    484: {
      description: 'CommentContentSizeLimitExceededException',
      content: { 'application/json': { schema: CommentContentSizeLimitExceededExceptionSchema } },
    },
    485: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    487: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PutCommentReactionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PutCommentReaction',
  description:
    'Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.',
  operationId: 'PutCommentReaction',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PutCommentReaction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PutCommentReaction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutCommentReactionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
    483: {
      description: 'InvalidReactionValueException',
      content: { 'application/json': { schema: InvalidReactionValueExceptionSchema } },
    },
    484: {
      description: 'ReactionValueRequiredException',
      content: { 'application/json': { schema: ReactionValueRequiredExceptionSchema } },
    },
    485: {
      description: 'ReactionLimitExceededException',
      content: { 'application/json': { schema: ReactionLimitExceededExceptionSchema } },
    },
    486: {
      description: 'CommentDeletedException',
      content: { 'application/json': { schema: CommentDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PutFileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PutFile',
  description:
    'Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.',
  operationId: 'PutFile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PutFile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PutFile'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutFileInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutFileOutputSchema } },
    },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ParentCommitIdRequiredException',
      content: { 'application/json': { schema: ParentCommitIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidParentCommitIdException',
      content: { 'application/json': { schema: InvalidParentCommitIdExceptionSchema } },
    },
    485: {
      description: 'ParentCommitDoesNotExistException',
      content: { 'application/json': { schema: ParentCommitDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'ParentCommitIdOutdatedException',
      content: { 'application/json': { schema: ParentCommitIdOutdatedExceptionSchema } },
    },
    487: {
      description: 'FileContentRequiredException',
      content: { 'application/json': { schema: FileContentRequiredExceptionSchema } },
    },
    488: {
      description: 'FileContentSizeLimitExceededException',
      content: { 'application/json': { schema: FileContentSizeLimitExceededExceptionSchema } },
    },
    489: {
      description: 'FolderContentSizeLimitExceededException',
      content: { 'application/json': { schema: FolderContentSizeLimitExceededExceptionSchema } },
    },
    490: {
      description: 'PathRequiredException',
      content: { 'application/json': { schema: PathRequiredExceptionSchema } },
    },
    491: {
      description: 'InvalidPathException',
      content: { 'application/json': { schema: InvalidPathExceptionSchema } },
    },
    492: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    493: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    494: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    495: {
      description: 'BranchNameIsTagNameException',
      content: { 'application/json': { schema: BranchNameIsTagNameExceptionSchema } },
    },
    496: {
      description: 'InvalidFileModeException',
      content: { 'application/json': { schema: InvalidFileModeExceptionSchema } },
    },
    497: {
      description: 'NameLengthExceededException',
      content: { 'application/json': { schema: NameLengthExceededExceptionSchema } },
    },
    498: {
      description: 'InvalidEmailException',
      content: { 'application/json': { schema: InvalidEmailExceptionSchema } },
    },
    499: {
      description: 'CommitMessageLengthExceededException',
      content: { 'application/json': { schema: CommitMessageLengthExceededExceptionSchema } },
    },
    500: {
      description: 'InvalidDeletionParameterException',
      content: { 'application/json': { schema: InvalidDeletionParameterExceptionSchema } },
    },
    501: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    502: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    503: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    504: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    505: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
    506: {
      description: 'SameFileContentException',
      content: { 'application/json': { schema: SameFileContentExceptionSchema } },
    },
    507: {
      description: 'FileNameConflictsWithDirectoryNameException',
      content: {
        'application/json': { schema: FileNameConflictsWithDirectoryNameExceptionSchema },
      },
    },
    508: {
      description: 'DirectoryNameConflictsWithFileNameException',
      content: {
        'application/json': { schema: DirectoryNameConflictsWithFileNameExceptionSchema },
      },
    },
    509: {
      description: 'FilePathConflictsWithSubmodulePathException',
      content: {
        'application/json': { schema: FilePathConflictsWithSubmodulePathExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeCommit20150413PutRepositoryTriggersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers',
  description: 'Replaces all triggers for a repository. Used to create or delete triggers.',
  operationId: 'PutRepositoryTriggers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.PutRepositoryTriggers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.PutRepositoryTriggers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRepositoryTriggersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRepositoryTriggersOutputSchema } },
    },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'RepositoryTriggersListRequiredException',
      content: { 'application/json': { schema: RepositoryTriggersListRequiredExceptionSchema } },
    },
    484: {
      description: 'MaximumRepositoryTriggersExceededException',
      content: { 'application/json': { schema: MaximumRepositoryTriggersExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidRepositoryTriggerNameException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerNameExceptionSchema } },
    },
    486: {
      description: 'InvalidRepositoryTriggerDestinationArnException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerDestinationArnExceptionSchema },
      },
    },
    487: {
      description: 'InvalidRepositoryTriggerRegionException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerRegionExceptionSchema } },
    },
    488: {
      description: 'InvalidRepositoryTriggerCustomDataException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerCustomDataExceptionSchema },
      },
    },
    489: {
      description: 'MaximumBranchesExceededException',
      content: { 'application/json': { schema: MaximumBranchesExceededExceptionSchema } },
    },
    490: {
      description: 'InvalidRepositoryTriggerBranchNameException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerBranchNameExceptionSchema },
      },
    },
    491: {
      description: 'InvalidRepositoryTriggerEventsException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerEventsExceptionSchema } },
    },
    492: {
      description: 'RepositoryTriggerNameRequiredException',
      content: { 'application/json': { schema: RepositoryTriggerNameRequiredExceptionSchema } },
    },
    493: {
      description: 'RepositoryTriggerDestinationArnRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerDestinationArnRequiredExceptionSchema },
      },
    },
    494: {
      description: 'RepositoryTriggerBranchNameListRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerBranchNameListRequiredExceptionSchema },
      },
    },
    495: {
      description: 'RepositoryTriggerEventsListRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerEventsListRequiredExceptionSchema },
      },
    },
    496: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.TagResource',
  description:
    'Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceArnException',
      content: { 'application/json': { schema: InvalidResourceArnExceptionSchema } },
    },
    484: {
      description: 'TagsMapRequiredException',
      content: { 'application/json': { schema: TagsMapRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidTagsMapException',
      content: { 'application/json': { schema: InvalidTagsMapExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    487: {
      description: 'InvalidSystemTagUsageException',
      content: { 'application/json': { schema: InvalidSystemTagUsageExceptionSchema } },
    },
    488: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413TestRepositoryTriggersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers',
  description:
    'Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.',
  operationId: 'TestRepositoryTriggers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.TestRepositoryTriggers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.TestRepositoryTriggers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestRepositoryTriggersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestRepositoryTriggersOutputSchema } },
    },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'RepositoryTriggersListRequiredException',
      content: { 'application/json': { schema: RepositoryTriggersListRequiredExceptionSchema } },
    },
    484: {
      description: 'MaximumRepositoryTriggersExceededException',
      content: { 'application/json': { schema: MaximumRepositoryTriggersExceededExceptionSchema } },
    },
    485: {
      description: 'InvalidRepositoryTriggerNameException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerNameExceptionSchema } },
    },
    486: {
      description: 'InvalidRepositoryTriggerDestinationArnException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerDestinationArnExceptionSchema },
      },
    },
    487: {
      description: 'InvalidRepositoryTriggerRegionException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerRegionExceptionSchema } },
    },
    488: {
      description: 'InvalidRepositoryTriggerCustomDataException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerCustomDataExceptionSchema },
      },
    },
    489: {
      description: 'MaximumBranchesExceededException',
      content: { 'application/json': { schema: MaximumBranchesExceededExceptionSchema } },
    },
    490: {
      description: 'InvalidRepositoryTriggerBranchNameException',
      content: {
        'application/json': { schema: InvalidRepositoryTriggerBranchNameExceptionSchema },
      },
    },
    491: {
      description: 'InvalidRepositoryTriggerEventsException',
      content: { 'application/json': { schema: InvalidRepositoryTriggerEventsExceptionSchema } },
    },
    492: {
      description: 'RepositoryTriggerNameRequiredException',
      content: { 'application/json': { schema: RepositoryTriggerNameRequiredExceptionSchema } },
    },
    493: {
      description: 'RepositoryTriggerDestinationArnRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerDestinationArnRequiredExceptionSchema },
      },
    },
    494: {
      description: 'RepositoryTriggerBranchNameListRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerBranchNameListRequiredExceptionSchema },
      },
    },
    495: {
      description: 'RepositoryTriggerEventsListRequiredException',
      content: {
        'application/json': { schema: RepositoryTriggerEventsListRequiredExceptionSchema },
      },
    },
    496: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    497: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    498: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    499: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    500: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UntagResource',
  description:
    'Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    482: {
      description: 'ResourceArnRequiredException',
      content: { 'application/json': { schema: ResourceArnRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidResourceArnException',
      content: { 'application/json': { schema: InvalidResourceArnExceptionSchema } },
    },
    484: {
      description: 'TagKeysListRequiredException',
      content: { 'application/json': { schema: TagKeysListRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidTagKeysListException',
      content: { 'application/json': { schema: InvalidTagKeysListExceptionSchema } },
    },
    486: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    487: {
      description: 'InvalidSystemTagUsageException',
      content: { 'application/json': { schema: InvalidSystemTagUsageExceptionSchema } },
    },
    488: {
      description: 'TagPolicyException',
      content: { 'application/json': { schema: TagPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateContentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent',
  description:
    'Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.',
  operationId: 'UpdateApprovalRuleTemplateContent',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateApprovalRuleTemplateContent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeCommit_20150413.UpdateApprovalRuleTemplateContent'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApprovalRuleTemplateContentInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApprovalRuleTemplateContentOutputSchema } },
    },
    480: {
      description: 'InvalidApprovalRuleTemplateNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
    },
    481: {
      description: 'ApprovalRuleTemplateNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleTemplateDoesNotExistException',
      content: { 'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'InvalidApprovalRuleTemplateContentException',
      content: {
        'application/json': { schema: InvalidApprovalRuleTemplateContentExceptionSchema },
      },
    },
    484: {
      description: 'InvalidRuleContentSha256Exception',
      content: { 'application/json': { schema: InvalidRuleContentSha256ExceptionSchema } },
    },
    485: {
      description: 'ApprovalRuleTemplateContentRequiredException',
      content: {
        'application/json': { schema: ApprovalRuleTemplateContentRequiredExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateDescriptionRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription',
    description: 'Updates the description for a specified approval rule template.',
    operationId: 'UpdateApprovalRuleTemplateDescription',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.UpdateApprovalRuleTemplateDescription')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.UpdateApprovalRuleTemplateDescription'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdateApprovalRuleTemplateDescriptionInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdateApprovalRuleTemplateDescriptionOutputSchema },
        },
      },
      480: {
        description: 'InvalidApprovalRuleTemplateNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
      },
      481: {
        description: 'ApprovalRuleTemplateNameRequiredException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema },
        },
      },
      482: {
        description: 'ApprovalRuleTemplateDoesNotExistException',
        content: {
          'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema },
        },
      },
      483: {
        description: 'InvalidApprovalRuleTemplateDescriptionException',
        content: {
          'application/json': { schema: InvalidApprovalRuleTemplateDescriptionExceptionSchema },
        },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413UpdateApprovalRuleTemplateNameRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName',
  description: 'Updates the name of a specified approval rule template.',
  operationId: 'UpdateApprovalRuleTemplateName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateApprovalRuleTemplateName')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeCommit_20150413.UpdateApprovalRuleTemplateName'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApprovalRuleTemplateNameInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApprovalRuleTemplateNameOutputSchema } },
    },
    480: {
      description: 'InvalidApprovalRuleTemplateNameException',
      content: { 'application/json': { schema: InvalidApprovalRuleTemplateNameExceptionSchema } },
    },
    481: {
      description: 'ApprovalRuleTemplateNameRequiredException',
      content: { 'application/json': { schema: ApprovalRuleTemplateNameRequiredExceptionSchema } },
    },
    482: {
      description: 'ApprovalRuleTemplateDoesNotExistException',
      content: { 'application/json': { schema: ApprovalRuleTemplateDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'ApprovalRuleTemplateNameAlreadyExistsException',
      content: {
        'application/json': { schema: ApprovalRuleTemplateNameAlreadyExistsExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateCommentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateComment',
  description: 'Replaces the contents of a comment.',
  operationId: 'UpdateComment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateComment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdateComment'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateCommentInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateCommentOutputSchema } },
    },
    480: {
      description: 'CommentContentRequiredException',
      content: { 'application/json': { schema: CommentContentRequiredExceptionSchema } },
    },
    481: {
      description: 'CommentContentSizeLimitExceededException',
      content: { 'application/json': { schema: CommentContentSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'CommentDoesNotExistException',
      content: { 'application/json': { schema: CommentDoesNotExistExceptionSchema } },
    },
    483: {
      description: 'CommentIdRequiredException',
      content: { 'application/json': { schema: CommentIdRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidCommentIdException',
      content: { 'application/json': { schema: InvalidCommentIdExceptionSchema } },
    },
    485: {
      description: 'CommentNotCreatedByCallerException',
      content: { 'application/json': { schema: CommentNotCreatedByCallerExceptionSchema } },
    },
    486: {
      description: 'CommentDeletedException',
      content: { 'application/json': { schema: CommentDeletedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateDefaultBranchRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch',
  description:
    '<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>',
  operationId: 'UpdateDefaultBranch',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateDefaultBranch')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdateDefaultBranch'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDefaultBranchInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'BranchNameRequiredException',
      content: { 'application/json': { schema: BranchNameRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidBranchNameException',
      content: { 'application/json': { schema: InvalidBranchNameExceptionSchema } },
    },
    485: {
      description: 'BranchDoesNotExistException',
      content: { 'application/json': { schema: BranchDoesNotExistExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalRuleContentRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent',
    description:
      'Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. ',
    operationId: 'UpdatePullRequestApprovalRuleContent',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('CodeCommit_20150413.UpdatePullRequestApprovalRuleContent')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['CodeCommit_20150413.UpdatePullRequestApprovalRuleContent'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: UpdatePullRequestApprovalRuleContentInputSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: UpdatePullRequestApprovalRuleContentOutputSchema },
        },
      },
      480: {
        description: 'PullRequestDoesNotExistException',
        content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
      },
      481: {
        description: 'InvalidPullRequestIdException',
        content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
      },
      482: {
        description: 'PullRequestIdRequiredException',
        content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
      },
      483: {
        description: 'PullRequestAlreadyClosedException',
        content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
      },
      484: {
        description: 'ApprovalRuleNameRequiredException',
        content: { 'application/json': { schema: ApprovalRuleNameRequiredExceptionSchema } },
      },
      485: {
        description: 'InvalidApprovalRuleNameException',
        content: { 'application/json': { schema: InvalidApprovalRuleNameExceptionSchema } },
      },
      486: {
        description: 'ApprovalRuleDoesNotExistException',
        content: { 'application/json': { schema: ApprovalRuleDoesNotExistExceptionSchema } },
      },
      487: {
        description: 'InvalidRuleContentSha256Exception',
        content: { 'application/json': { schema: InvalidRuleContentSha256ExceptionSchema } },
      },
      488: {
        description: 'ApprovalRuleContentRequiredException',
        content: { 'application/json': { schema: ApprovalRuleContentRequiredExceptionSchema } },
      },
      489: {
        description: 'InvalidApprovalRuleContentException',
        content: { 'application/json': { schema: InvalidApprovalRuleContentExceptionSchema } },
      },
      490: {
        description: 'CannotModifyApprovalRuleFromTemplateException',
        content: {
          'application/json': { schema: CannotModifyApprovalRuleFromTemplateExceptionSchema },
        },
      },
      491: {
        description: 'EncryptionIntegrityChecksFailedException',
        content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
      },
      492: {
        description: 'EncryptionKeyAccessDeniedException',
        content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
      },
      493: {
        description: 'EncryptionKeyDisabledException',
        content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
      },
      494: {
        description: 'EncryptionKeyNotFoundException',
        content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
      },
      495: {
        description: 'EncryptionKeyUnavailableException',
        content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
      },
    },
  })

export const postXAmzTargetCodeCommit20150413UpdatePullRequestApprovalStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState',
  description:
    "Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.",
  operationId: 'UpdatePullRequestApprovalState',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdatePullRequestApprovalState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['CodeCommit_20150413.UpdatePullRequestApprovalState'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePullRequestApprovalStateInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRevisionIdException',
      content: { 'application/json': { schema: InvalidRevisionIdExceptionSchema } },
    },
    484: {
      description: 'RevisionIdRequiredException',
      content: { 'application/json': { schema: RevisionIdRequiredExceptionSchema } },
    },
    485: {
      description: 'InvalidApprovalStateException',
      content: { 'application/json': { schema: InvalidApprovalStateExceptionSchema } },
    },
    486: {
      description: 'ApprovalStateRequiredException',
      content: { 'application/json': { schema: ApprovalStateRequiredExceptionSchema } },
    },
    487: {
      description: 'PullRequestCannotBeApprovedByAuthorException',
      content: {
        'application/json': { schema: PullRequestCannotBeApprovedByAuthorExceptionSchema },
      },
    },
    488: {
      description: 'RevisionNotCurrentException',
      content: { 'application/json': { schema: RevisionNotCurrentExceptionSchema } },
    },
    489: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
    490: {
      description: 'MaximumNumberOfApprovalsExceededException',
      content: { 'application/json': { schema: MaximumNumberOfApprovalsExceededExceptionSchema } },
    },
    491: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    492: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    493: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    494: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    495: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdatePullRequestDescriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription',
  description: 'Replaces the contents of the description of a pull request.',
  operationId: 'UpdatePullRequestDescription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdatePullRequestDescription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdatePullRequestDescription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePullRequestDescriptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePullRequestDescriptionOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidDescriptionException',
      content: { 'application/json': { schema: InvalidDescriptionExceptionSchema } },
    },
    484: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdatePullRequestStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus',
  description: 'Updates the status of a pull request. ',
  operationId: 'UpdatePullRequestStatus',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdatePullRequestStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdatePullRequestStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePullRequestStatusInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePullRequestStatusOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidPullRequestStatusUpdateException',
      content: { 'application/json': { schema: InvalidPullRequestStatusUpdateExceptionSchema } },
    },
    484: {
      description: 'InvalidPullRequestStatusException',
      content: { 'application/json': { schema: InvalidPullRequestStatusExceptionSchema } },
    },
    485: {
      description: 'PullRequestStatusRequiredException',
      content: { 'application/json': { schema: PullRequestStatusRequiredExceptionSchema } },
    },
    486: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    489: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    490: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdatePullRequestTitleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle',
  description: 'Replaces the title of a pull request.',
  operationId: 'UpdatePullRequestTitle',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdatePullRequestTitle')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdatePullRequestTitle'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePullRequestTitleInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePullRequestTitleOutputSchema } },
    },
    480: {
      description: 'PullRequestDoesNotExistException',
      content: { 'application/json': { schema: PullRequestDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'InvalidPullRequestIdException',
      content: { 'application/json': { schema: InvalidPullRequestIdExceptionSchema } },
    },
    482: {
      description: 'PullRequestIdRequiredException',
      content: { 'application/json': { schema: PullRequestIdRequiredExceptionSchema } },
    },
    483: {
      description: 'TitleRequiredException',
      content: { 'application/json': { schema: TitleRequiredExceptionSchema } },
    },
    484: {
      description: 'InvalidTitleException',
      content: { 'application/json': { schema: InvalidTitleExceptionSchema } },
    },
    485: {
      description: 'PullRequestAlreadyClosedException',
      content: { 'application/json': { schema: PullRequestAlreadyClosedExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription',
  description:
    '<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>',
  operationId: 'UpdateRepositoryDescription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateRepositoryDescription')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdateRepositoryDescription'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRepositoryDescriptionInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    481: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    482: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
    483: {
      description: 'InvalidRepositoryDescriptionException',
      content: { 'application/json': { schema: InvalidRepositoryDescriptionExceptionSchema } },
    },
    484: {
      description: 'EncryptionIntegrityChecksFailedException',
      content: { 'application/json': { schema: EncryptionIntegrityChecksFailedExceptionSchema } },
    },
    485: {
      description: 'EncryptionKeyAccessDeniedException',
      content: { 'application/json': { schema: EncryptionKeyAccessDeniedExceptionSchema } },
    },
    486: {
      description: 'EncryptionKeyDisabledException',
      content: { 'application/json': { schema: EncryptionKeyDisabledExceptionSchema } },
    },
    487: {
      description: 'EncryptionKeyNotFoundException',
      content: { 'application/json': { schema: EncryptionKeyNotFoundExceptionSchema } },
    },
    488: {
      description: 'EncryptionKeyUnavailableException',
      content: { 'application/json': { schema: EncryptionKeyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetCodeCommit20150413UpdateRepositoryNameRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName',
  description:
    'Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.',
  operationId: 'UpdateRepositoryName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('CodeCommit_20150413.UpdateRepositoryName')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['CodeCommit_20150413.UpdateRepositoryName'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRepositoryNameInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'RepositoryDoesNotExistException',
      content: { 'application/json': { schema: RepositoryDoesNotExistExceptionSchema } },
    },
    481: {
      description: 'RepositoryNameExistsException',
      content: { 'application/json': { schema: RepositoryNameExistsExceptionSchema } },
    },
    482: {
      description: 'RepositoryNameRequiredException',
      content: { 'application/json': { schema: RepositoryNameRequiredExceptionSchema } },
    },
    483: {
      description: 'InvalidRepositoryNameException',
      content: { 'application/json': { schema: InvalidRepositoryNameExceptionSchema } },
    },
  },
})
