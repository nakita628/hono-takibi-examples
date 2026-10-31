import { createRoute, z } from '@hono/zod-openapi'

const TargetSchema = z
  .object({
    database: z
      .string()
      .exactOptional()
      .openapi({ description: "The action's database (Google Cloud project ID) ." }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The action's name, within `database` and `schema`." }),
    schema: z
      .string()
      .exactOptional()
      .openapi({ description: "The action's schema (BigQuery dataset ID), within `database`." }),
  })
  .openapi({
    description:
      'Represents an action identifier. If the action writes output, the output will be written to the referenced database object.',
    required: [],
  })
  .openapi('Target')

const ColumnDescriptorSchema = z
  .object({
    bigqueryPolicyTags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of BigQuery policy tags that will be applied to the column.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A textual description of the column.' }),
    path: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The identifier for the column. Each entry in `path` represents one level of nesting.',
      }),
  })
  .openapi({ description: 'Describes a column.', required: [] })
  .openapi('ColumnDescriptor')

const RelationDescriptorSchema = z
  .object({
    bigqueryLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A set of BigQuery labels that should be applied to the relation.' }),
    columns: z
      .array(ColumnDescriptorSchema)
      .exactOptional()
      .openapi({ description: 'A list of descriptions of columns within the relation.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A text description of the relation.' }),
  })
  .openapi({ description: 'Describes a relation and its columns.', required: [] })
  .openapi('RelationDescriptor')

const AssertionSchema = z
  .object({
    dependencyTargets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({ description: 'A list of actions that this action depends on.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this action is disabled (i.e. should not be run).' }),
    parentAction: TargetSchema.exactOptional().openapi({
      description:
        'The parent action of this assertion. Only set if this assertion was automatically generated.',
    }),
    relationDescriptor: RelationDescriptorSchema.exactOptional().openapi({
      description: "Descriptor for the assertion's automatically-generated view and its columns.",
    }),
    selectQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SELECT query which must return zero rows in order for this assertion to succeed.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary, user-defined tags on this action.' }),
  })
  .openapi({
    description: 'Represents an assertion upon a SQL query which is required return zero rows.',
    required: [],
  })
  .openapi('Assertion')

const BigQueryActionSchema = z
  .object({
    sqlScript: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The generated BigQuery SQL script that will be executed.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Represents a workflow action that will run against BigQuery.',
    required: [],
  })
  .openapi('BigQueryAction')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CancelWorkflowInvocationRequestSchema = z
  .object({})
  .openapi({ description: '`CancelWorkflowInvocation` request message.' })
  .openapi('CancelWorkflowInvocationRequest')

const CodeCompilationConfigSchema = z
  .object({
    assertionSchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The default schema (BigQuery dataset ID) for assertions.',
      }),
    databaseSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The suffix that should be appended to all database (Google Cloud project ID) names.',
      }),
    defaultDatabase: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The default database (Google Cloud project ID).' }),
    defaultLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.',
      }),
    defaultSchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The default schema (BigQuery dataset ID).' }),
    schemaSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.',
      }),
    tablePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The prefix that should be prepended to all table names.',
      }),
    vars: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. User-defined variables that are made available to project code during compilation.',
      }),
  })
  .openapi({
    description: 'Configures various aspects of Dataform code compilation.',
    required: [],
  })
  .openapi('CodeCompilationConfig')

const CommitAuthorSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The commit author's email address." }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The commit author's name." }),
  })
  .openapi({ description: 'Represents the author of a Git commit.', required: [] })
  .openapi('CommitAuthor')

const CommitWorkspaceChangesRequestSchema = z
  .object({
    author: CommitAuthorSchema.exactOptional().openapi({
      description: "Required. The commit's author.",
    }),
    commitMessage: z
      .string()
      .exactOptional()
      .openapi({ description: "Optional. The commit's message." }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed.',
      }),
  })
  .openapi({ description: '`CommitWorkspaceChanges` request message.', required: [] })
  .openapi('CommitWorkspaceChangesRequest')

const CompilationErrorSchema = z
  .object({
    actionTarget: TargetSchema.exactOptional().openapi({
      description:
        'Output only. The identifier of the action where this error occurred, if available.',
      readOnly: true,
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The error's top level message.", readOnly: true }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The path of the file where this error occurred, if available, relative to the project root.',
        readOnly: true,
      }),
    stack: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The error's full stack trace.", readOnly: true }),
  })
  .openapi({
    description: 'An error encountered when attempting to compile a Dataform project.',
    required: [],
  })
  .openapi('CompilationError')

const CompilationResultSchema = z
  .object({
    codeCompilationConfig: CodeCompilationConfigSchema.exactOptional().openapi({
      description:
        'Immutable. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.',
    }),
    compilationErrors: z
      .array(CompilationErrorSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Errors encountered during project compilation.',
        readOnly: true,
      }),
    dataformCoreVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The version of `@dataform/core` that was used for compilation.',
        readOnly: true,
      }),
    gitCommitish: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The compilation result's name.", readOnly: true }),
    releaseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.",
      }),
    resolvedGitCommitSha: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace.',
        readOnly: true,
      }),
    workspace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the workspace to compile. Must be in the format `projects/*/locations/*/repositories/*/workspaces/*`.',
      }),
  })
  .openapi({ description: 'Represents the result of compiling a Dataform project.', required: [] })
  .openapi('CompilationResult')

const DeclarationSchema = z
  .object({
    relationDescriptor: RelationDescriptorSchema.exactOptional().openapi({
      description:
        "Descriptor for the relation and its columns. Used as documentation only, i.e. values here will result in no changes to the relation's metadata.",
    }),
  })
  .openapi({
    description:
      'Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions.',
    required: [],
  })
  .openapi('Declaration')

const OperationsSchema = z
  .object({
    dependencyTargets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({ description: 'A list of actions that this action depends on.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this action is disabled (i.e. should not be run).' }),
    hasOutput: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether these operations produce an output relation.' }),
    queries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of arbitrary SQL statements that will be executed without alteration.',
      }),
    relationDescriptor: RelationDescriptorSchema.exactOptional().openapi({
      description:
        'Descriptor for any output relation and its columns. Only set if `has_output` is true.',
    }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary, user-defined tags on this action.' }),
  })
  .openapi({ description: 'Represents a list of arbitrary database operations.', required: [] })
  .openapi('Operations')

const IncrementalTableConfigSchema = z
  .object({
    incrementalPostOperations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'SQL statements to be executed after inserting new rows into the relation.',
      }),
    incrementalPreOperations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'SQL statements to be executed before inserting new rows into the relation.',
      }),
    incrementalSelectQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed.',
      }),
    refreshDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this table should be protected from being refreshed.' }),
    uniqueKeyParts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation.',
      }),
    updatePartitionFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information).',
      }),
  })
  .openapi({
    description: 'Contains settings for relations of type `INCREMENTAL_TABLE`.',
    required: [],
  })
  .openapi('IncrementalTableConfig')

const RelationSchema = z
  .object({
    additionalOptions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported.',
      }),
    clusterExpressions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of columns or SQL expressions used to cluster the table.' }),
    dependencyTargets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({ description: 'A list of actions that this action depends on.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this action is disabled (i.e. should not be run).' }),
    incrementalTableConfig: IncrementalTableConfigSchema.exactOptional().openapi({
      description:
        'Configures `INCREMENTAL_TABLE` settings for this relation. Only set if `relation_type` is `INCREMENTAL_TABLE`.',
    }),
    partitionExpirationDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Sets the partition expiration in days.' }),
    partitionExpression: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SQL expression used to partition the relation.' }),
    postOperations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'SQL statements to be executed after creating the relation.' }),
    preOperations: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'SQL statements to be executed before creating the relation.' }),
    relationDescriptor: RelationDescriptorSchema.exactOptional().openapi({
      description: 'Descriptor for the relation and its columns.',
    }),
    relationType: z
      .enum([
        'RELATION_TYPE_UNSPECIFIED',
        'TABLE',
        'VIEW',
        'INCREMENTAL_TABLE',
        'MATERIALIZED_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'The type of this relation.' }),
    requirePartitionFilter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether queries on this table must include a predicate filter that filters on the partitioning column.',
      }),
    selectQuery: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The SELECT query which returns rows which this relation should contain.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Arbitrary, user-defined tags on this action.' }),
  })
  .openapi({ description: 'Represents a database relation.', required: [] })
  .openapi('Relation')

const CompilationResultActionSchema = z
  .object({
    assertion: AssertionSchema.exactOptional().openapi({
      description: 'The assertion executed by this action.',
    }),
    canonicalTarget: TargetSchema.exactOptional().openapi({
      description:
        "The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.",
    }),
    declaration: DeclarationSchema.exactOptional().openapi({
      description: 'The declaration declared by this action.',
    }),
    filePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path including filename in which this action is located, relative to the workspace root.',
      }),
    operations: OperationsSchema.exactOptional().openapi({
      description: 'The database operations executed by this action.',
    }),
    relation: RelationSchema.exactOptional().openapi({
      description: 'The database relation created/updated by this action.',
    }),
    target: TargetSchema.exactOptional().openapi({
      description: "This action's identifier. Unique within the compilation result.",
    }),
  })
  .openapi({
    description: 'Represents a single Dataform action in a compilation result.',
    required: [],
  })
  .openapi('CompilationResultAction')

const DirectoryEntrySchema = z
  .object({
    directory: z
      .string()
      .exactOptional()
      .openapi({ description: 'A child directory in the directory.' }),
    file: z.string().exactOptional().openapi({ description: 'A file in the directory.' }),
  })
  .openapi({ description: 'Represents a single entry in a directory.', required: [] })
  .openapi('DirectoryEntry')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FetchFileDiffResponseSchema = z
  .object({
    formattedDiff: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw formatted Git diff for the file.' }),
  })
  .openapi({ description: '`FetchFileDiff` response message.', required: [] })
  .openapi('FetchFileDiffResponse')

const UncommittedFileChangeSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description: "The file's full path including filename, relative to the workspace root.",
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ADDED', 'DELETED', 'MODIFIED', 'HAS_CONFLICTS'])
      .exactOptional()
      .openapi({ description: 'Indicates the status of the file.' }),
  })
  .openapi({
    description: 'Represents the Git state of a file with uncommitted changes.',
    required: [],
  })
  .openapi('UncommittedFileChange')

const FetchFileGitStatusesResponseSchema = z
  .object({
    uncommittedFileChanges: z
      .array(UncommittedFileChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of all files which have uncommitted Git changes. There will only be a single entry for any given file.',
      }),
  })
  .openapi({ description: '`FetchFileGitStatuses` response message.', required: [] })
  .openapi('FetchFileGitStatusesResponse')

const FetchGitAheadBehindResponseSchema = z
  .object({
    commitsAhead: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of commits in the remote branch that are not in the workspace.',
      }),
    commitsBehind: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of commits in the workspace that are not in the remote branch.',
      }),
  })
  .openapi({ description: '`FetchGitAheadBehind` response message.', required: [] })
  .openapi('FetchGitAheadBehindResponse')

const FetchRemoteBranchesResponseSchema = z
  .object({
    branches: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The remote repository's branch names." }),
  })
  .openapi({ description: '`FetchRemoteBranches` response message.', required: [] })
  .openapi('FetchRemoteBranchesResponse')

const GitRemoteSettingsSchema = z
  .object({
    authenticationTokenSecretVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/*/secrets/*/versions/*`.',
      }),
    defaultBranch: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. The Git remote's default branch name." }),
    tokenStatus: z
      .enum(['TOKEN_STATUS_UNSPECIFIED', 'NOT_FOUND', 'INVALID', 'VALID'])
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates the status of the Git access token.',
        readOnly: true,
      }),
    url: z.string().exactOptional().openapi({ description: "Required. The Git remote's URL." }),
  })
  .openapi({ description: 'Controls Git remote configuration for a repository.', required: [] })
  .openapi('GitRemoteSettings')

const InstallNpmPackagesRequestSchema = z
  .object({})
  .openapi({ description: '`InstallNpmPackages` request message.' })
  .openapi('InstallNpmPackagesRequest')

const InstallNpmPackagesResponseSchema = z
  .object({})
  .openapi({ description: '`InstallNpmPackages` response message.' })
  .openapi('InstallNpmPackagesResponse')

const IntervalSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.',
      }),
  })
  .openapi({
    description:
      'Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.',
    required: [],
  })
  .openapi('Interval')

const InvocationConfigSchema = z
  .object({
    fullyRefreshIncrementalTablesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. When set to true, any incremental tables will be fully refreshed.',
      }),
    includedTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. The set of tags to include.' }),
    includedTargets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The set of action identifiers to include.' }),
    transitiveDependenciesIncluded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When set to true, transitive dependencies of included actions will be executed.',
      }),
    transitiveDependentsIncluded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. When set to true, transitive dependents of included actions will be executed.',
      }),
  })
  .openapi({
    description:
      'Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included.',
    required: [],
  })
  .openapi('InvocationConfig')

const ListCompilationResultsResponseSchema = z
  .object({
    compilationResults: z
      .array(CompilationResultSchema)
      .exactOptional()
      .openapi({ description: 'List of compilation results.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
  })
  .openapi({ description: '`ListCompilationResults` response message.', required: [] })
  .openapi('ListCompilationResultsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const ScheduledReleaseRecordSchema = z
  .object({
    compilationResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created compilation result, if one was successfully created. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.',
      }),
    errorStatus: StatusSchema.exactOptional().openapi({
      description:
        'The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.',
    }),
    releaseTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of this release attempt.' }),
  })
  .openapi({
    description: 'A record of an attempt to create a compilation result for this release config.',
    required: [],
  })
  .openapi('ScheduledReleaseRecord')

const ReleaseConfigSchema = z
  .object({
    codeCompilationConfig: CodeCompilationConfigSchema.exactOptional().openapi({
      description:
        'Optional. If set, fields of `code_compilation_config` override the default compilation settings that are specified in dataform.json.',
    }),
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional schedule (in cron format) for automatic creation of compilation results.',
      }),
    gitCommitish: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1`',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The release config's name.", readOnly: true }),
    recentScheduledReleaseRecords: z
      .array(ScheduledReleaseRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule.',
        readOnly: true,
      }),
    releaseCompilationResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.',
      }),
  })
  .openapi({ description: 'Represents a Dataform release configuration.', required: [] })
  .openapi('ReleaseConfig')

const ListReleaseConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    releaseConfigs: z
      .array(ReleaseConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of release configs.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
  })
  .openapi({ description: '`ListReleaseConfigs` response message.', required: [] })
  .openapi('ListReleaseConfigsResponse')

const WorkspaceCompilationOverridesSchema = z
  .object({
    defaultDatabase: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The default database (Google Cloud project ID).' }),
    schemaSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.',
      }),
    tablePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. The prefix that should be prepended to all table names.',
      }),
  })
  .openapi({
    description:
      'Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results.',
    required: [],
  })
  .openapi('WorkspaceCompilationOverrides')

const RepositorySchema = z
  .object({
    gitRemoteSettings: GitRemoteSettingsSchema.exactOptional().openapi({
      description: 'Optional. If set, configures this repository to be linked to a Git remote.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The repository's name.", readOnly: true }),
    npmrcEnvironmentVariablesSecretVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/*/secrets/*/versions/*`. The file itself must be in a JSON format.',
      }),
    workspaceCompilationOverrides: WorkspaceCompilationOverridesSchema.exactOptional().openapi({
      description:
        'Optional. If set, fields of `workspace_compilation_overrides` override the default compilation settings that are specified in dataform.json when creating workspace-scoped compilation results. See documentation for `WorkspaceCompilationOverrides` for more information.',
    }),
  })
  .openapi({ description: 'Represents a Dataform Git repository.', required: [] })
  .openapi('Repository')

const ListRepositoriesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    repositories: z
      .array(RepositorySchema)
      .exactOptional()
      .openapi({ description: 'List of repositories.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
  })
  .openapi({ description: '`ListRepositories` response message.', required: [] })
  .openapi('ListRepositoriesResponse')

const ScheduledExecutionRecordSchema = z
  .object({
    errorStatus: StatusSchema.exactOptional().openapi({
      description:
        'The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.',
    }),
    executionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of this execution attempt.' }),
    workflowInvocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/*/locations/*/repositories/*/workflowInvocations/*`.',
      }),
  })
  .openapi({
    description: 'A record of an attempt to create a workflow invocation for this workflow config.',
    required: [],
  })
  .openapi('ScheduledExecutionRecord')

const WorkflowConfigSchema = z
  .object({
    cronSchedule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional schedule (in cron format) for automatic execution of this workflow config.',
      }),
    invocationConfig: InvocationConfigSchema.exactOptional().openapi({
      description: 'Optional. If left unset, a default InvocationConfig will be used.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The workflow config's name.", readOnly: true }),
    recentScheduledExecutionRecords: z
      .array(ScheduledExecutionRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.',
        readOnly: true,
      }),
    releaseConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.',
      }),
  })
  .openapi({ description: 'Represents a Dataform workflow configuration.', required: [] })
  .openapi('WorkflowConfig')

const ListWorkflowConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
    workflowConfigs: z
      .array(WorkflowConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of workflow configs.' }),
  })
  .openapi({ description: '`ListWorkflowConfigs` response message.', required: [] })
  .openapi('ListWorkflowConfigsResponse')

const WorkflowInvocationSchema = z
  .object({
    compilationResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the compilation result to compile. Must be in the format `projects/*/locations/*/repositories/*/compilationResults/*`.',
      }),
    invocationConfig: InvocationConfigSchema.exactOptional().openapi({
      description: 'Immutable. If left unset, a default InvocationConfig will be used.',
    }),
    invocationTiming: IntervalSchema.exactOptional().openapi({
      description: "Output only. This workflow invocation's timing details.",
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The workflow invocation's name.", readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED', 'CANCELLED', 'FAILED', 'CANCELING'])
      .exactOptional()
      .openapi({
        description: "Output only. This workflow invocation's current state.",
        readOnly: true,
      }),
    workflowConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the workflow config to invoke. Must be in the format `projects/*/locations/*/repositories/*/workflowConfigs/*`.',
      }),
  })
  .openapi({ description: 'Represents a single invocation of a compilation result.', required: [] })
  .openapi('WorkflowInvocation')

const ListWorkflowInvocationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
    workflowInvocations: z
      .array(WorkflowInvocationSchema)
      .exactOptional()
      .openapi({ description: 'List of workflow invocations.' }),
  })
  .openapi({ description: '`ListWorkflowInvocations` response message.', required: [] })
  .openapi('ListWorkflowInvocationsResponse')

const WorkspaceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. The workspace's name.", readOnly: true }),
  })
  .openapi({ description: 'Represents a Dataform Git workspace.', required: [] })
  .openapi('Workspace')

const ListWorkspacesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations which could not be reached.' }),
    workspaces: z
      .array(WorkspaceSchema)
      .exactOptional()
      .openapi({ description: 'List of workspaces.' }),
  })
  .openapi({ description: '`ListWorkspaces` response message.', required: [] })
  .openapi('ListWorkspacesResponse')

const MakeDirectoryRequestSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The directory's full path including directory name, relative to the workspace root.",
      }),
  })
  .openapi({ description: '`MakeDirectory` request message.', required: [] })
  .openapi('MakeDirectoryRequest')

const MakeDirectoryResponseSchema = z
  .object({})
  .openapi({ description: '`MakeDirectory` response message.' })
  .openapi('MakeDirectoryResponse')

const MoveDirectoryRequestSchema = z
  .object({
    newPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The new path for the directory including directory name, rooted at workspace root.',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The directory's full path including directory name, relative to the workspace root.",
      }),
  })
  .openapi({ description: '`MoveDirectory` request message.', required: [] })
  .openapi('MoveDirectoryRequest')

const MoveDirectoryResponseSchema = z
  .object({})
  .openapi({ description: '`MoveDirectory` response message.' })
  .openapi('MoveDirectoryResponse')

const MoveFileRequestSchema = z
  .object({
    newPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The file's new path including filename, relative to the workspace root.",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The file's full path including filename, relative to the workspace root.",
      }),
  })
  .openapi({ description: '`MoveFile` request message.', required: [] })
  .openapi('MoveFileRequest')

const MoveFileResponseSchema = z
  .object({})
  .openapi({ description: '`MoveFile` response message.' })
  .openapi('MoveFileResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const PullGitCommitsRequestSchema = z
  .object({
    author: CommitAuthorSchema.exactOptional().openapi({
      description:
        'Required. The author of any merge commit which may be created as a result of merging fetched Git commits into this workspace.',
    }),
    remoteBranch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used.",
      }),
  })
  .openapi({ description: '`PullGitCommits` request message.', required: [] })
  .openapi('PullGitCommitsRequest')

const PushGitCommitsRequestSchema = z
  .object({
    remoteBranch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used.",
      }),
  })
  .openapi({ description: '`PushGitCommits` request message.', required: [] })
  .openapi('PushGitCommitsRequest')

const QueryCompilationResultActionsResponseSchema = z
  .object({
    compilationResultActions: z
      .array(CompilationResultActionSchema)
      .exactOptional()
      .openapi({ description: 'List of compilation result actions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: '`QueryCompilationResultActions` response message.', required: [] })
  .openapi('QueryCompilationResultActionsResponse')

const QueryDirectoryContentsResponseSchema = z
  .object({
    directoryEntries: z
      .array(DirectoryEntrySchema)
      .exactOptional()
      .openapi({ description: 'List of entries in the directory.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: '`QueryDirectoryContents` response message.', required: [] })
  .openapi('QueryDirectoryContentsResponse')

const WorkflowInvocationActionSchema = z
  .object({
    bigqueryAction: BigQueryActionSchema.exactOptional().openapi({
      description: "Output only. The workflow action's bigquery action details.",
      readOnly: true,
    }),
    canonicalTarget: TargetSchema.exactOptional().openapi({
      description:
        "Output only. The action's identifier if the project had been compiled without any overrides configured. Unique within the compilation result.",
      readOnly: true,
    }),
    failureReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. If and only if action's state is FAILED a failure reason is set.",
        readOnly: true,
      }),
    invocationTiming: IntervalSchema.exactOptional().openapi({
      description:
        "Output only. This action's timing details. `start_time` will be set if the action is in [RUNNING, SUCCEEDED, CANCELLED, FAILED] state. `end_time` will be set if the action is in [SUCCEEDED, CANCELLED, FAILED] state.",
      readOnly: true,
    }),
    state: z
      .enum(['PENDING', 'RUNNING', 'SKIPPED', 'DISABLED', 'SUCCEEDED', 'CANCELLED', 'FAILED'])
      .exactOptional()
      .openapi({ description: "Output only. This action's current state.", readOnly: true }),
    target: TargetSchema.exactOptional().openapi({
      description: "Output only. This action's identifier. Unique within the workflow invocation.",
      readOnly: true,
    }),
  })
  .openapi({ description: 'Represents a single action in a workflow invocation.', required: [] })
  .openapi('WorkflowInvocationAction')

const QueryWorkflowInvocationActionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    workflowInvocationActions: z
      .array(WorkflowInvocationActionSchema)
      .exactOptional()
      .openapi({ description: 'List of workflow invocation actions.' }),
  })
  .openapi({ description: '`QueryWorkflowInvocationActions` response message.', required: [] })
  .openapi('QueryWorkflowInvocationActionsResponse')

const ReadFileResponseSchema = z
  .object({
    fileContents: z.string().exactOptional().openapi({ description: "The file's contents." }),
  })
  .openapi({ description: '`ReadFile` response message.', required: [] })
  .openapi('ReadFileResponse')

const RemoveDirectoryRequestSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The directory's full path including directory name, relative to the workspace root.",
      }),
  })
  .openapi({ description: '`RemoveDirectory` request message.', required: [] })
  .openapi('RemoveDirectoryRequest')

const RemoveFileRequestSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The file's full path including filename, relative to the workspace root.",
      }),
  })
  .openapi({ description: '`RemoveFile` request message.', required: [] })
  .openapi('RemoveFileRequest')

const ResetWorkspaceChangesRequestSchema = z
  .object({
    clean: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. If set to true, untracked files will be deleted.' }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset.',
      }),
  })
  .openapi({ description: '`ResetWorkspaceChanges` request message.', required: [] })
  .openapi('ResetWorkspaceChangesRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const WriteFileRequestSchema = z
  .object({
    contents: z.string().exactOptional().openapi({ description: "Required. The file's contents." }),
    path: z.string().exactOptional().openapi({ description: 'Required. The file.' }),
  })
  .openapi({ description: '`WriteFile` request message.', required: [] })
  .openapi('WriteFileRequest')

const WriteFileResponseSchema = z
  .object({})
  .openapi({ description: '`WriteFile` response message.' })
  .openapi('WriteFileResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Fetches a single Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkspaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Deletes a single Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace resource's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['projects'],
  description: 'Updates a single WorkflowConfig.',
  operationId: 'dataform.projects.locations.repositories.workflowConfigs.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Output only. The workflow config's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'dataform.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['projects'],
  description: 'Requests cancellation of a running WorkflowInvocation.',
  operationId: 'dataform.projects.locations.repositories.workflowInvocations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workflow invocation resource's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelWorkflowInvocationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameCommitRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:commit',
  tags: ['projects'],
  description: 'Applies a Git commit for uncommitted files in a Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.commit',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommitWorkspaceChangesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameFetchFileGitStatusesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:fetchFileGitStatuses',
  tags: ['projects'],
  description: 'Fetches Git statuses for the files in a Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.fetchFileGitStatuses',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchFileGitStatusesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameFetchGitAheadBehindRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:fetchGitAheadBehind',
  tags: ['projects'],
  description: 'Fetches Git ahead/behind against a remote branch.',
  operationId: 'dataform.projects.locations.repositories.workspaces.fetchGitAheadBehind',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      remoteBranch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.",
            in: 'query',
            name: 'remoteBranch',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchGitAheadBehindResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameFetchRemoteBranchesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:fetchRemoteBranches',
  tags: ['projects'],
  description: "Fetches a Repository's remote branches.",
  operationId: 'dataform.projects.locations.repositories.fetchRemoteBranches',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The repository's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchRemoteBranchesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NamePullRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:pull',
  tags: ['projects'],
  description: "Pulls Git commits from the Repository's remote into a Workspace.",
  operationId: 'dataform.projects.locations.repositories.workspaces.pull',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PullGitCommitsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NamePushRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:push',
  tags: ['projects'],
  description: "Pushes Git commits from a Workspace to the Repository's remote.",
  operationId: 'dataform.projects.locations.repositories.workspaces.push',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PushGitCommitsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameQueryRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:query',
  tags: ['projects'],
  description: 'Returns WorkflowInvocationActions in a given WorkflowInvocation.',
  operationId: 'dataform.projects.locations.repositories.workflowInvocations.query',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workflow invocation's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryWorkflowInvocationActionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameResetRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:reset',
  tags: ['projects'],
  description: 'Performs a Git reset for uncommitted files in a Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetWorkspaceChangesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentCompilationResultsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/compilationResults',
  tags: ['projects'],
  description: 'Lists CompilationResults in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.compilationResults.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to list compilation results. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCompilationResultsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentCompilationResultsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/compilationResults',
  tags: ['projects'],
  description: 'Creates a new CompilationResult in a given project and location.',
  operationId: 'dataform.projects.locations.repositories.compilationResults.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to create the compilation result. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompilationResultSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompilationResultSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentReleaseConfigsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/releaseConfigs',
  tags: ['projects'],
  description: 'Lists ReleaseConfigs in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.releaseConfigs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to list release configs. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReleaseConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentReleaseConfigsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/releaseConfigs',
  tags: ['projects'],
  description: 'Creates a new ReleaseConfig in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.releaseConfigs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      releaseConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the release config, which will become the final component of the release config's resource name.",
            in: 'query',
            name: 'releaseConfigId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to create the release config. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReleaseConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReleaseConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentRepositoriesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/repositories',
  tags: ['projects'],
  description: 'Lists Repositories in a given project and location.',
  operationId: 'dataform.projects.locations.repositories.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter for the returned list.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location in which to list repositories. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRepositoriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentRepositoriesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/repositories',
  tags: ['projects'],
  description: 'Creates a new Repository in a given project and location.',
  operationId: 'dataform.projects.locations.repositories.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      repositoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the repository, which will become the final component of the repository's resource name.",
            in: 'query',
            name: 'repositoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location in which to create the repository. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RepositorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepositorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentWorkflowConfigsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/workflowConfigs',
  tags: ['projects'],
  description: 'Lists WorkflowConfigs in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workflowConfigs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to list workflow configs. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkflowConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentWorkflowConfigsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/workflowConfigs',
  tags: ['projects'],
  description: 'Creates a new WorkflowConfig in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workflowConfigs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      workflowConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.",
            in: 'query',
            name: 'workflowConfigId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to create the workflow config. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentWorkflowInvocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/workflowInvocations',
  tags: ['projects'],
  description: 'Lists WorkflowInvocations in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workflowInvocations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter for the returned list.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkflowInvocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentWorkflowInvocationsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/workflowInvocations',
  tags: ['projects'],
  description: 'Creates a new WorkflowInvocation in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workflowInvocations.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to create the workflow invocation. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowInvocationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkflowInvocationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentWorkspacesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/workspaces',
  tags: ['projects'],
  description: 'Lists Workspaces in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workspaces.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filter for the returned list.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to list workspaces. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListWorkspacesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentWorkspacesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/workspaces',
  tags: ['projects'],
  description: 'Creates a new Workspace in a given Repository.',
  operationId: 'dataform.projects.locations.repositories.workspaces.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      workspaceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.",
            in: 'query',
            name: 'workspaceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The repository in which to create the workspace. Must be in the format `projects/*/locations/*/repositories/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkspaceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WorkspaceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'dataform.projects.locations.repositories.workspaces.getIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'options.requestedPolicyVersion': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'dataform.projects.locations.repositories.workspaces.setIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'dataform.projects.locations.repositories.workspaces.testIamPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1WorkspaceFetchFileDiffRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{workspace}:fetchFileDiff',
  tags: ['projects'],
  description: 'Fetches Git diff for an uncommitted file in a Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.fetchFileDiff',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The file's full path including filename, relative to the workspace root.",
            in: 'query',
            name: 'path',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchFileDiffResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceInstallNpmPackagesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:installNpmPackages',
  tags: ['projects'],
  description: 'Installs dependency NPM packages (inside a Workspace).',
  operationId: 'dataform.projects.locations.repositories.workspaces.installNpmPackages',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstallNpmPackagesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InstallNpmPackagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceMakeDirectoryRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:makeDirectory',
  tags: ['projects'],
  description: 'Creates a directory inside a Workspace.',
  operationId: 'dataform.projects.locations.repositories.workspaces.makeDirectory',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MakeDirectoryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MakeDirectoryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceMoveDirectoryRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:moveDirectory',
  tags: ['projects'],
  description:
    'Moves a directory (inside a Workspace), and all of its contents, to a new location.',
  operationId: 'dataform.projects.locations.repositories.workspaces.moveDirectory',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveDirectoryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MoveDirectoryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceMoveFileRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:moveFile',
  tags: ['projects'],
  description: 'Moves a file (inside a Workspace) to a new location.',
  operationId: 'dataform.projects.locations.repositories.workspaces.moveFile',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveFileRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MoveFileResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1WorkspaceQueryDirectoryContentsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{workspace}:queryDirectoryContents',
  tags: ['projects'],
  description: 'Returns the contents of a given Workspace directory.',
  operationId: 'dataform.projects.locations.repositories.workspaces.queryDirectoryContents',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.",
            in: 'query',
            name: 'path',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryDirectoryContentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1WorkspaceReadFileRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{workspace}:readFile',
  tags: ['projects'],
  description: 'Returns the contents of a file (inside a Workspace).',
  operationId: 'dataform.projects.locations.repositories.workspaces.readFile',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The file's full path including filename, relative to the workspace root.",
            in: 'query',
            name: 'path',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReadFileResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceRemoveDirectoryRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:removeDirectory',
  tags: ['projects'],
  description: 'Deletes a directory (inside a Workspace) and all of its contents.',
  operationId: 'dataform.projects.locations.repositories.workspaces.removeDirectory',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveDirectoryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceRemoveFileRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:removeFile',
  tags: ['projects'],
  description: 'Deletes a file (inside a Workspace).',
  operationId: 'dataform.projects.locations.repositories.workspaces.removeFile',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveFileRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1WorkspaceWriteFileRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{workspace}:writeFile',
  tags: ['projects'],
  description: 'Writes to a file (inside a Workspace).',
  operationId: 'dataform.projects.locations.repositories.workspaces.writeFile',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      workspace: z
        .string()
        .openapi({
          param: {
            description: "Required. The workspace's name.",
            in: 'path',
            name: 'workspace',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WriteFileRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WriteFileResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
